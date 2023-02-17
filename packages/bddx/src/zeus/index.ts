/* eslint-disable */

import { AllTypesProps, ReturnTypes, Ops } from './const.js';
import fetch, { Response } from 'node-fetch';
import WebSocket from 'ws';
export const HOST = "https://bddx-api.azurewebsites.net/graphql"


export const HEADERS = {}
export const apiSubscription = (options: chainOptions) => (query: string) => {
  try {
    const queryString = options[0] + '?query=' + encodeURIComponent(query);
    const wsString = queryString.replace('http', 'ws');
    const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
    const webSocketOptions = options[1]?.websocket || [host];
    const ws = new WebSocket(...webSocketOptions);
    return {
      ws,
      on: (e: (args: any) => void) => {
        ws.onmessage = (event: any) => {
          if (event.data) {
            const parsed = JSON.parse(event.data);
            const data = parsed.data;
            return e(data);
          }
        };
      },
      off: (e: (args: any) => void) => {
        ws.onclose = e;
      },
      error: (e: (args: any) => void) => {
        ws.onerror = e;
      },
      open: (e: () => void) => {
        ws.onopen = e;
      },
    };
  } catch {
    throw new Error('No websockets implemented');
  }
};
const handleFetchResponse = (response: Response): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json() as Promise<GraphQLResponse>;
};

export const apiFetch =
  (options: fetchOptions) =>
  (query: string, variables: Record<string, unknown> = {}) => {
    const fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      return fetch(`${options[0]}?query=${encodeURIComponent(query)}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetch(`${options[0]}`, {
      body: JSON.stringify({ query, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...fetchOptions,
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };

export const InternalsBuildQuery = ({
  ops,
  props,
  returns,
  options,
  scalars,
}: {
  props: AllTypesPropsType;
  returns: ReturnTypesType;
  ops: Operations;
  options?: OperationOptions;
  scalars?: ScalarDefinition;
}) => {
  const ibb = (
    k: string,
    o: InputValueType | VType,
    p = '',
    root = true,
    vars: Array<{ name: string; graphQLType: string }> = [],
  ): string => {
    const keyForPath = purifyGraphQLKey(k);
    const newPath = [p, keyForPath].join(SEPARATOR);
    if (!o) {
      return '';
    }
    if (typeof o === 'boolean' || typeof o === 'number') {
      return k;
    }
    if (typeof o === 'string') {
      return `${k} ${o}`;
    }
    if (Array.isArray(o)) {
      const args = InternalArgsBuilt({
        props,
        returns,
        ops,
        scalars,
        vars,
      })(o[0], newPath);
      return `${ibb(args ? `${k}(${args})` : k, o[1], p, false, vars)}`;
    }
    if (k === '__alias') {
      return Object.entries(o)
        .map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
            throw new Error(
              'Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}',
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(`${alias}:${operationName}`, operation, p, false, vars);
        })
        .join('\n');
    }
    const hasOperationName = root && options?.operationName ? ' ' + options.operationName : '';
    const keyForDirectives = o.__directives ?? '';
    const query = `{${Object.entries(o)
      .filter(([k]) => k !== '__directives')
      .map((e) => ibb(...e, [p, `field<>${keyForPath}`].join(SEPARATOR), false, vars))
      .join('\n')}}`;
    if (!root) {
      return `${k} ${keyForDirectives}${hasOperationName} ${query}`;
    }
    const varsString = vars.map((v) => `${v.name}: ${v.graphQLType}`).join(', ');
    return `${k} ${keyForDirectives}${hasOperationName}${varsString ? `(${varsString})` : ''} ${query}`;
  };
  return ibb;
};

export const Thunder =
  (fn: FetchFunction) =>
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions & { variables?: Record<string, unknown> }) =>
    fn(
      Zeus(operation, o, {
        operationOptions: ops,
        scalars: graphqlOptions?.scalars,
      }),
      ops?.variables,
    ).then((data) => {
      if (graphqlOptions?.scalars) {
        return decodeScalarsInResponse({
          response: data,
          initialOp: operation,
          initialZeusQuery: o as VType,
          returns: ReturnTypes,
          scalars: graphqlOptions.scalars,
          ops: Ops,
        });
      }
      return data;
    }) as Promise<InputType<GraphQLTypes[R], Z, SCLR>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));

export const SubscriptionThunder =
  (fn: SubscriptionFunction) =>
  <O extends keyof typeof Ops, SCLR extends ScalarDefinition, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<SCLR>,
  ) =>
  <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions & { variables?: ExtractVariables<Z> }) => {
    const returnedFunction = fn(
      Zeus(operation, o, {
        operationOptions: ops,
        scalars: graphqlOptions?.scalars,
      }),
    ) as SubscriptionToGraphQL<Z, GraphQLTypes[R], SCLR>;
    if (returnedFunction?.on && graphqlOptions?.scalars) {
      const wrapped = returnedFunction.on;
      returnedFunction.on = (fnToCall: (args: InputType<GraphQLTypes[R], Z, SCLR>) => void) =>
        wrapped((data: InputType<GraphQLTypes[R], Z, SCLR>) => {
          if (graphqlOptions?.scalars) {
            return fnToCall(
              decodeScalarsInResponse({
                response: data,
                initialOp: operation,
                initialZeusQuery: o as VType,
                returns: ReturnTypes,
                scalars: graphqlOptions.scalars,
                ops: Ops,
              }),
            );
          }
          return fnToCall(data);
        });
    }
    return returnedFunction;
  };

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends keyof typeof Ops,
  R extends keyof ValueTypes = GenericOperation<O>,
>(
  operation: O,
  o: Z | ValueTypes[R],
  ops?: {
    operationOptions?: OperationOptions;
    scalars?: ScalarDefinition;
  },
) =>
  InternalsBuildQuery({
    props: AllTypesProps,
    returns: ReturnTypes,
    ops: Ops,
    options: ops?.operationOptions,
    scalars: ops?.scalars,
  })(operation, o as VType);

export const ZeusSelect = <T>() => ((t: unknown) => t) as SelectionFunction<T>;

export const Selector = <T extends keyof ValueTypes>(key: T) => key && ZeusSelect<ValueTypes[T]>();

export const TypeFromSelector = <T extends keyof ValueTypes>(key: T) => key && ZeusSelect<ValueTypes[T]>();
export const Gql = Chain(HOST, {
  headers: {
    'Content-Type': 'application/json',
    ...HEADERS,
  },
});

export const ZeusScalars = ZeusSelect<ScalarCoders>();

export const decodeScalarsInResponse = <O extends Operations>({
  response,
  scalars,
  returns,
  ops,
  initialZeusQuery,
  initialOp,
}: {
  ops: O;
  response: any;
  returns: ReturnTypesType;
  scalars?: Record<string, ScalarResolver | undefined>;
  initialOp: keyof O;
  initialZeusQuery: InputValueType | VType;
}) => {
  if (!scalars) {
    return response;
  }
  const builder = PrepareScalarPaths({
    ops,
    returns,
  });

  const scalarPaths = builder(initialOp as string, ops[initialOp], initialZeusQuery);
  if (scalarPaths) {
    const r = traverseResponse({ scalarPaths, resolvers: scalars })(initialOp as string, response, [ops[initialOp]]);
    return r;
  }
  return response;
};

export const traverseResponse = ({
  resolvers,
  scalarPaths,
}: {
  scalarPaths: { [x: string]: `scalar.${string}` };
  resolvers: {
    [x: string]: ScalarResolver | undefined;
  };
}) => {
  const ibb = (k: string, o: InputValueType | VType, p: string[] = []): unknown => {
    if (Array.isArray(o)) {
      return o.map((eachO) => ibb(k, eachO, p));
    }
    if (o == null) {
      return o;
    }
    const scalarPathString = p.join(SEPARATOR);
    const currentScalarString = scalarPaths[scalarPathString];
    if (currentScalarString) {
      const currentDecoder = resolvers[currentScalarString.split('.')[1]]?.decode;
      if (currentDecoder) {
        return currentDecoder(o);
      }
    }
    if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string' || !o) {
      return o;
    }
    const entries = Object.entries(o).map(([k, v]) => [k, ibb(k, v, [...p, purifyGraphQLKey(k)])] as const);
    const objectFromEntries = entries.reduce<Record<string, unknown>>((a, [k, v]) => {
      a[k] = v;
      return a;
    }, {});
    return objectFromEntries;
  };
  return ibb;
};

export type AllTypesPropsType = {
  [x: string]:
    | undefined
    | `scalar.${string}`
    | 'enum'
    | {
        [x: string]:
          | undefined
          | string
          | {
              [x: string]: string | undefined;
            };
      };
};

export type ReturnTypesType = {
  [x: string]:
    | {
        [x: string]: string | undefined;
      }
    | `scalar.${string}`
    | undefined;
};
export type InputValueType = {
  [x: string]: undefined | boolean | string | number | [any, undefined | boolean | InputValueType] | InputValueType;
};
export type VType =
  | undefined
  | boolean
  | string
  | number
  | [any, undefined | boolean | InputValueType]
  | InputValueType;

export type PlainType = boolean | number | string | null | undefined;
export type ZeusArgsType =
  | PlainType
  | {
      [x: string]: ZeusArgsType;
    }
  | Array<ZeusArgsType>;

export type Operations = Record<string, string>;

export type VariableDefinition = {
  [x: string]: unknown;
};

export const SEPARATOR = '|';

export type fetchOptions = Parameters<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (...args: infer R) => WebSocket ? R : never;
export type chainOptions = [fetchOptions[0], fetchOptions[1] & { websocket?: websocketOptions }] | [fetchOptions[0]];
export type FetchFunction = (query: string, variables?: Record<string, unknown>) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type OperationOptions = {
  operationName?: string;
};

export type ScalarCoder = Record<string, (s: unknown) => string>;

export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super('');
    console.error(response);
  }
  toString() {
    return 'GraphQL Response Error';
  }
}
export type GenericOperation<O> = O extends keyof typeof Ops ? typeof Ops[O] : never;
export type ThunderGraphQLOptions<SCLR extends ScalarDefinition> = {
  scalars?: SCLR | ScalarCoders;
};

const ExtractScalar = (mappedParts: string[], returns: ReturnTypesType): `scalar.${string}` | undefined => {
  if (mappedParts.length === 0) {
    return;
  }
  const oKey = mappedParts[0];
  const returnP1 = returns[oKey];
  if (typeof returnP1 === 'object') {
    const returnP2 = returnP1[mappedParts[1]];
    if (returnP2) {
      return ExtractScalar([returnP2, ...mappedParts.slice(2)], returns);
    }
    return undefined;
  }
  return returnP1 as `scalar.${string}` | undefined;
};

export const PrepareScalarPaths = ({ ops, returns }: { returns: ReturnTypesType; ops: Operations }) => {
  const ibb = (
    k: string,
    originalKey: string,
    o: InputValueType | VType,
    p: string[] = [],
    pOriginals: string[] = [],
    root = true,
  ): { [x: string]: `scalar.${string}` } | undefined => {
    if (!o) {
      return;
    }
    if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
      const extractionArray = [...pOriginals, originalKey];
      const isScalar = ExtractScalar(extractionArray, returns);
      if (isScalar?.startsWith('scalar')) {
        const partOfTree = {
          [[...p, k].join(SEPARATOR)]: isScalar,
        };
        return partOfTree;
      }
      return {};
    }
    if (Array.isArray(o)) {
      return ibb(k, k, o[1], p, pOriginals, false);
    }
    if (k === '__alias') {
      return Object.entries(o)
        .map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
            throw new Error(
              'Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}',
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(alias, operationName, operation, p, pOriginals, false);
        })
        .reduce((a, b) => ({
          ...a,
          ...b,
        }));
    }
    const keyName = root ? ops[k] : k;
    return Object.entries(o)
      .filter(([k]) => k !== '__directives')
      .map(([k, v]) => {
        // Inline fragments shouldn't be added to the path as they aren't a field
        const isInlineFragment = originalKey.match(/^...\s*on/) != null;
        return ibb(
          k,
          k,
          v,
          isInlineFragment ? p : [...p, purifyGraphQLKey(keyName || k)],
          isInlineFragment ? pOriginals : [...pOriginals, purifyGraphQLKey(originalKey)],
          false,
        );
      })
      .reduce((a, b) => ({
        ...a,
        ...b,
      }));
  };
  return ibb;
};

export const purifyGraphQLKey = (k: string) => k.replace(/\([^)]*\)/g, '').replace(/^[^:]*\:/g, '');

const mapPart = (p: string) => {
  const [isArg, isField] = p.split('<>');
  if (isField) {
    return {
      v: isField,
      __type: 'field',
    } as const;
  }
  return {
    v: isArg,
    __type: 'arg',
  } as const;
};

type Part = ReturnType<typeof mapPart>;

export const ResolveFromPath = (props: AllTypesPropsType, returns: ReturnTypesType, ops: Operations) => {
  const ResolvePropsType = (mappedParts: Part[]) => {
    const oKey = ops[mappedParts[0].v];
    const propsP1 = oKey ? props[oKey] : props[mappedParts[0].v];
    if (propsP1 === 'enum' && mappedParts.length === 1) {
      return 'enum';
    }
    if (typeof propsP1 === 'string' && propsP1.startsWith('scalar.') && mappedParts.length === 1) {
      return propsP1;
    }
    if (typeof propsP1 === 'object') {
      if (mappedParts.length < 2) {
        return 'not';
      }
      const propsP2 = propsP1[mappedParts[1].v];
      if (typeof propsP2 === 'string') {
        return rpp(
          `${propsP2}${SEPARATOR}${mappedParts
            .slice(2)
            .map((mp) => mp.v)
            .join(SEPARATOR)}`,
        );
      }
      if (typeof propsP2 === 'object') {
        if (mappedParts.length < 3) {
          return 'not';
        }
        const propsP3 = propsP2[mappedParts[2].v];
        if (propsP3 && mappedParts[2].__type === 'arg') {
          return rpp(
            `${propsP3}${SEPARATOR}${mappedParts
              .slice(3)
              .map((mp) => mp.v)
              .join(SEPARATOR)}`,
          );
        }
      }
    }
  };
  const ResolveReturnType = (mappedParts: Part[]) => {
    if (mappedParts.length === 0) {
      return 'not';
    }
    const oKey = ops[mappedParts[0].v];
    const returnP1 = oKey ? returns[oKey] : returns[mappedParts[0].v];
    if (typeof returnP1 === 'object') {
      if (mappedParts.length < 2) return 'not';
      const returnP2 = returnP1[mappedParts[1].v];
      if (returnP2) {
        return rpp(
          `${returnP2}${SEPARATOR}${mappedParts
            .slice(2)
            .map((mp) => mp.v)
            .join(SEPARATOR)}`,
        );
      }
    }
  };
  const rpp = (path: string): 'enum' | 'not' | `scalar.${string}` => {
    const parts = path.split(SEPARATOR).filter((l) => l.length > 0);
    const mappedParts = parts.map(mapPart);
    const propsP1 = ResolvePropsType(mappedParts);
    if (propsP1) {
      return propsP1;
    }
    const returnP1 = ResolveReturnType(mappedParts);
    if (returnP1) {
      return returnP1;
    }
    return 'not';
  };
  return rpp;
};

export const InternalArgsBuilt = ({
  props,
  ops,
  returns,
  scalars,
  vars,
}: {
  props: AllTypesPropsType;
  returns: ReturnTypesType;
  ops: Operations;
  scalars?: ScalarDefinition;
  vars: Array<{ name: string; graphQLType: string }>;
}) => {
  const arb = (a: ZeusArgsType, p = '', root = true): string => {
    if (typeof a === 'string') {
      if (a.startsWith(START_VAR_NAME)) {
        const [varName, graphQLType] = a.replace(START_VAR_NAME, '$').split(GRAPHQL_TYPE_SEPARATOR);
        const v = vars.find((v) => v.name === varName);
        if (!v) {
          vars.push({
            name: varName,
            graphQLType,
          });
        } else {
          if (v.graphQLType !== graphQLType) {
            throw new Error(
              `Invalid variable exists with two different GraphQL Types, "${v.graphQLType}" and ${graphQLType}`,
            );
          }
        }
        return varName;
      }
    }
    const checkType = ResolveFromPath(props, returns, ops)(p);
    if (checkType.startsWith('scalar.')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...splittedScalar] = checkType.split('.');
      const scalarKey = splittedScalar.join('.');
      return (scalars?.[scalarKey]?.encode?.(a) as string) || JSON.stringify(a);
    }
    if (Array.isArray(a)) {
      return `[${a.map((arr) => arb(arr, p, false)).join(', ')}]`;
    }
    if (typeof a === 'string') {
      if (checkType === 'enum') {
        return a;
      }
      return `${JSON.stringify(a)}`;
    }
    if (typeof a === 'object') {
      if (a === null) {
        return `null`;
      }
      const returnedObjectString = Object.entries(a)
        .filter(([, v]) => typeof v !== 'undefined')
        .map(([k, v]) => `${k}: ${arb(v, [p, k].join(SEPARATOR), false)}`)
        .join(',\n');
      if (!root) {
        return `{${returnedObjectString}}`;
      }
      return returnedObjectString;
    }
    return `${a}`;
  };
  return arb;
};

export const resolverFor = <
  X,
  T extends keyof ResolverInputTypes,
  Z extends keyof ResolverInputTypes[T],
  RET = unknown,
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ResolverInputTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : RET,
) => fn as (args?: any, source?: any) => RET;

export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<UnwrapPromise<ReturnType<T>>>;
export type ZeusHook<
  T extends (...args: any[]) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>,
> = ZeusState<ReturnType<T>[N]>;

export type WithTypeNameValue<T> = T & {
  __typename?: boolean;
  __directives?: string;
};
export type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
export type ScalarDefinition = Record<string, ScalarResolver>;

type IsScalar<S, SCLR extends ScalarDefinition> = S extends 'scalar' & { name: infer T }
  ? T extends keyof SCLR
    ? SCLR[T]['decode'] extends (s: unknown) => unknown
      ? ReturnType<SCLR[T]['decode']>
      : unknown
    : unknown
  : S;
type IsArray<T, U, SCLR extends ScalarDefinition> = T extends Array<infer R>
  ? InputType<R, U, SCLR>[]
  : InputType<T, U, SCLR>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;
type BaseZeusResolver = boolean | 1 | string | Variable<any, string>;

type IsInterfaced<SRC extends DeepAnify<DST>, DST, SCLR extends ScalarDefinition> = FlattenArray<SRC> extends
  | ZEUS_INTERFACES
  | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P], SCLR>
          : IsArray<R, '__typename' extends keyof DST ? { __typename: true } : never, SCLR>
        : never;
    }[keyof SRC] & {
      [P in keyof Omit<
        Pick<
          SRC,
          {
            [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
          }[keyof DST]
        >,
        '__typename'
      >]: IsPayLoad<DST[P]> extends BaseZeusResolver ? IsScalar<SRC[P], SCLR> : IsArray<SRC[P], DST[P], SCLR>;
    }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends BaseZeusResolver
        ? IsScalar<SRC[P], SCLR>
        : IsArray<SRC[P], DST[P], SCLR>;
    };

export type MapType<SRC, DST, SCLR extends ScalarDefinition> = SRC extends DeepAnify<DST>
  ? IsInterfaced<SRC, DST, SCLR>
  : never;
// eslint-disable-next-line @typescript-eslint/ban-types
export type InputType<SRC, DST, SCLR extends ScalarDefinition = {}> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P], SCLR>[keyof MapType<SRC, R[P], SCLR>];
    } & MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>, SCLR>
  : MapType<SRC, IsPayLoad<DST>, SCLR>;
export type SubscriptionToGraphQL<Z, T, SCLR extends ScalarDefinition> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z, SCLR>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z, SCLR>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z, SCLR>; errors?: string[] }) => void) => void;
  open: () => void;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type FromSelector<SELECTOR, NAME extends keyof GraphQLTypes, SCLR extends ScalarDefinition = {}> = InputType<
  GraphQLTypes[NAME],
  SELECTOR,
  SCLR
>;

export type ScalarResolver = {
  encode?: (s: unknown) => string;
  decode?: (s: unknown) => unknown;
};

export type SelectionFunction<V> = <T>(t: T | V) => T;

type BuiltInVariableTypes = {
  ['String']: string;
  ['Int']: number;
  ['Float']: number;
  ['ID']: unknown;
  ['Boolean']: boolean;
};
type AllVariableTypes = keyof BuiltInVariableTypes | keyof ZEUS_VARIABLES;
type VariableRequired<T extends string> = `${T}!` | T | `[${T}]` | `[${T}]!` | `[${T}!]` | `[${T}!]!`;
type VR<T extends string> = VariableRequired<VariableRequired<T>>;

export type GraphQLVariableType = VR<AllVariableTypes>;

type ExtractVariableTypeString<T extends string> = T extends VR<infer R1>
  ? R1 extends VR<infer R2>
    ? R2 extends VR<infer R3>
      ? R3 extends VR<infer R4>
        ? R4 extends VR<infer R5>
          ? R5
          : R4
        : R3
      : R2
    : R1
  : T;

type DecomposeType<T, Type> = T extends `[${infer R}]`
  ? Array<DecomposeType<R, Type>> | undefined
  : T extends `${infer R}!`
  ? NonNullable<DecomposeType<R, Type>>
  : Type | undefined;

type ExtractTypeFromGraphQLType<T extends string> = T extends keyof ZEUS_VARIABLES
  ? ZEUS_VARIABLES[T]
  : T extends keyof BuiltInVariableTypes
  ? BuiltInVariableTypes[T]
  : any;

export type GetVariableType<T extends string> = DecomposeType<
  T,
  ExtractTypeFromGraphQLType<ExtractVariableTypeString<T>>
>;

type UndefinedKeys<T> = {
  [K in keyof T]-?: T[K] extends NonNullable<T[K]> ? never : K;
}[keyof T];

type WithNullableKeys<T> = Pick<T, UndefinedKeys<T>>;
type WithNonNullableKeys<T> = Omit<T, UndefinedKeys<T>>;

type OptionalKeys<T> = {
  [P in keyof T]?: T[P];
};

export type WithOptionalNullables<T> = OptionalKeys<WithNullableKeys<T>> & WithNonNullableKeys<T>;

export type Variable<T extends GraphQLVariableType, Name extends string> = {
  ' __zeus_name': Name;
  ' __zeus_type': T;
};

export type ExtractVariables<Query> = Query extends Variable<infer VType, infer VName>
  ? { [key in VName]: GetVariableType<VType> }
  : Query extends [infer Inputs, infer Outputs]
  ? ExtractVariables<Inputs> & ExtractVariables<Outputs>
  : Query extends string | number | boolean
  ? // eslint-disable-next-line @typescript-eslint/ban-types
    {}
  : UnionToIntersection<{ [K in keyof Query]: WithOptionalNullables<ExtractVariables<Query[K]>> }[keyof Query]>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export const START_VAR_NAME = `$ZEUS_VAR`;
export const GRAPHQL_TYPE_SEPARATOR = `__$GRAPHQL__`;

export const $ = <Type extends GraphQLVariableType, Name extends string>(name: Name, graphqlType: Type) => {
  return (START_VAR_NAME + name + GRAPHQL_TYPE_SEPARATOR + graphqlType) as unknown as Variable<Type, Name>;
};
type ZEUS_INTERFACES = never
export type ScalarCoders = {
}
type ZEUS_UNIONS = never

export type ValueTypes = {
    ["ProviderLoginInput"]: {
	code: string | Variable<any, string>
};
	["Project"]: AliasType<{
	_id?:boolean | `@${string}`,
	color?:boolean | `@${string}`,
	issueAddUrl?:boolean | `@${string}`,
	keys?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
reports?: [{	filterDate: ValueTypes["DateInput"] | Variable<any, string>},ValueTypes["TestReport"]],
		__typename?: boolean | `@${string}`
}>;
	["DateInput"]: {
	from: string | Variable<any, string>,
	to?: string | undefined | null | Variable<any, string>
};
	["TestReport"]: AliasType<{
	_id?:boolean | `@${string}`,
	createdAt?:boolean | `@${string}`,
	key?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	project?:ValueTypes["Project"],
	runs?:ValueTypes["ReportRun"],
		__typename?: boolean | `@${string}`
}>;
	["ReportRun"]: AliasType<{
	_id?:boolean | `@${string}`,
	createdAt?:boolean | `@${string}`,
	number?:boolean | `@${string}`,
	project?:ValueTypes["Project"],
	report_id?:boolean | `@${string}`,
	results?:ValueTypes["TestResult"],
		__typename?: boolean | `@${string}`
}>;
	["ChangePasswordWhenLoggedInput"]: {
	username: string | Variable<any, string>,
	oldPassword: string | Variable<any, string>,
	newPassword: string | Variable<any, string>
};
	["UpdateReportInput"]: {
	results: Array<ValueTypes["TestResultInput"]> | Variable<any, string>
};
	["RegisterErrors"]:RegisterErrors;
	["SocialKind"]:SocialKind;
	["ChangePasswordWithTokenInput"]: {
	forgotToken: string | Variable<any, string>,
	newPassword: string | Variable<any, string>,
	username: string | Variable<any, string>
};
	["AdminMutation"]: AliasType<{
createProject?: [{	projectInput: ValueTypes["ProjectInput"] | Variable<any, string>},boolean | `@${string}`],
deleteProject?: [{	_id: string | Variable<any, string>},boolean | `@${string}`],
project?: [{	_id: string | Variable<any, string>},ValueTypes["ProjectMutation"]],
updateProject?: [{	_id: string | Variable<any, string>,	updateProjectInput: ValueTypes["UpdateProjectInput"] | Variable<any, string>},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["ProjectMutation"]: AliasType<{
	createKey?:boolean | `@${string}`,
deleteKey?: [{	key: string | Variable<any, string>},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["LoginQuery"]: AliasType<{
password?: [{	user: ValueTypes["LoginInput"] | Variable<any, string>},ValueTypes["LoginResponse"]],
provider?: [{	params: ValueTypes["ProviderLoginInput"] | Variable<any, string>},ValueTypes["ProviderLoginQuery"]],
		__typename?: boolean | `@${string}`
}>;
	["ProviderLoginQuery"]: AliasType<{
	apple?:ValueTypes["ProviderResponse"],
	github?:ValueTypes["ProviderResponse"],
	google?:ValueTypes["ProviderResponse"],
		__typename?: boolean | `@${string}`
}>;
	["ProviderResponse"]: AliasType<{
	access_token?:boolean | `@${string}`,
	hasError?:boolean | `@${string}`,
	jwt?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["GetOAuthInput"]: {
	scopes?: Array<string> | undefined | null | Variable<any, string>,
	state?: string | undefined | null | Variable<any, string>
};
	["ReportInfo"]: AliasType<{
	numberOfFailedResults?:boolean | `@${string}`,
	numberOfResults?:boolean | `@${string}`,
	numberOfRuns?:boolean | `@${string}`,
	projectId?:boolean | `@${string}`,
	projectName?:boolean | `@${string}`,
	reportId?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Mutation"]: AliasType<{
	admin?:ValueTypes["AdminMutation"],
changePasswordWhenLogged?: [{	changePasswordData: ValueTypes["ChangePasswordWhenLoggedInput"] | Variable<any, string>},boolean | `@${string}`],
changePasswordWithToken?: [{	token: ValueTypes["ChangePasswordWithTokenInput"] | Variable<any, string>},boolean | `@${string}`],
	cli?:ValueTypes["CLIMutation"],
generateOAuthToken?: [{	tokenData: ValueTypes["GenerateOAuthTokenInput"] | Variable<any, string>},boolean | `@${string}`],
integrateSocialAccount?: [{	userData: ValueTypes["SimpleUserInput"] | Variable<any, string>},boolean | `@${string}`],
register?: [{	user: ValueTypes["RegisterInput"] | Variable<any, string>},ValueTypes["RegisterResponse"]],
verifyEmail?: [{	verifyData: ValueTypes["VerifyEmailInput"] | Variable<any, string>},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["UpdateProjectInput"]: {
	color?: ValueTypes["Colors"] | undefined | null | Variable<any, string>,
	name?: string | undefined | null | Variable<any, string>,
	issueAddUrl?: string | undefined | null | Variable<any, string>
};
	["UploadReportInput"]: {
	name: string | Variable<any, string>,
	results: Array<ValueTypes["TestResultInput"]> | Variable<any, string>
};
	["GenerateOAuthTokenInput"]: {
	social: ValueTypes["SocialKind"] | Variable<any, string>,
	code: string | Variable<any, string>
};
	["LoginInput"]: {
	password?: string | undefined | null | Variable<any, string>,
	username?: string | undefined | null | Variable<any, string>
};
	["ProviderErrors"]:ProviderErrors;
	["Colors"]:Colors;
	["RegisterInput"]: {
	username: string | Variable<any, string>,
	password: string | Variable<any, string>
};
	["Query"]: AliasType<{
	admin?:ValueTypes["AdminQuery"],
	cli?:ValueTypes["CLIQuery"],
getAppleOAuthLink?: [{	setup: ValueTypes["GetOAuthInput"] | Variable<any, string>},boolean | `@${string}`],
getGithubOAuthLink?: [{	setup: ValueTypes["GetOAuthInput"] | Variable<any, string>},boolean | `@${string}`],
getGoogleOAuthLink?: [{	setup: ValueTypes["GetOAuthInput"] | Variable<any, string>},boolean | `@${string}`],
	login?:ValueTypes["LoginQuery"],
requestForForgotPassword?: [{	username: string | Variable<any, string>},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["CLIMutation"]: AliasType<{
updateReport?: [{	updateReportInput: ValueTypes["UpdateReportInput"] | Variable<any, string>},boolean | `@${string}`],
uploadReport?: [{	uploadReportInput: ValueTypes["UploadReportInput"] | Variable<any, string>},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["RegisterResponse"]: AliasType<{
	hasError?:boolean | `@${string}`,
	registered?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["TestResultInput"]: {
	testPath: string | Variable<any, string>,
	testContent: string | Variable<any, string>,
	featureContent?: string | undefined | null | Variable<any, string>,
	inherited?: string | undefined | null | Variable<any, string>,
	reasonOfFail?: string | undefined | null | Variable<any, string>,
	scenario?: string | undefined | null | Variable<any, string>
};
	["LoginResponse"]: AliasType<{
	hasError?:boolean | `@${string}`,
	login?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["LoginErrors"]:LoginErrors;
	["AdminQuery"]: AliasType<{
	me?:ValueTypes["User"],
	projects?:ValueTypes["Project"],
reportById?: [{	_id: string | Variable<any, string>},ValueTypes["TestReport"]],
reports?: [{	filterDate?: ValueTypes["DateInput"] | undefined | null | Variable<any, string>,	filterProject?: Array<string> | undefined | null | Variable<any, string>},ValueTypes["TestReport"]],
		__typename?: boolean | `@${string}`
}>;
	["TestResult"]: AliasType<{
	/** content of the main feature */
	featureContent?:boolean | `@${string}`,
	inherited?:boolean | `@${string}`,
	reasonOfFail?:boolean | `@${string}`,
	scenario?:boolean | `@${string}`,
	/** Content of the scenario */
	testContent?:boolean | `@${string}`,
	testPath?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["User"]: AliasType<{
	username?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["CLIQuery"]: AliasType<{
	getReport?:ValueTypes["TestReport"],
	getReports?:ValueTypes["ReportInfo"],
		__typename?: boolean | `@${string}`
}>;
	["ProjectInput"]: {
	issueAddUrl?: string | undefined | null | Variable<any, string>,
	color?: ValueTypes["Colors"] | undefined | null | Variable<any, string>,
	name: string | Variable<any, string>
};
	["VerifyEmailInput"]: {
	username: string | Variable<any, string>,
	token: string | Variable<any, string>
};
	["SimpleUserInput"]: {
	username: string | Variable<any, string>,
	password: string | Variable<any, string>
}
  }

export type ResolverInputTypes = {
    ["ProviderLoginInput"]: {
	code: string
};
	["Project"]: AliasType<{
	_id?:boolean | `@${string}`,
	color?:boolean | `@${string}`,
	issueAddUrl?:boolean | `@${string}`,
	keys?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
reports?: [{	filterDate: ResolverInputTypes["DateInput"]},ResolverInputTypes["TestReport"]],
		__typename?: boolean | `@${string}`
}>;
	["DateInput"]: {
	from: string,
	to?: string | undefined | null
};
	["TestReport"]: AliasType<{
	_id?:boolean | `@${string}`,
	createdAt?:boolean | `@${string}`,
	key?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	project?:ResolverInputTypes["Project"],
	runs?:ResolverInputTypes["ReportRun"],
		__typename?: boolean | `@${string}`
}>;
	["ReportRun"]: AliasType<{
	_id?:boolean | `@${string}`,
	createdAt?:boolean | `@${string}`,
	number?:boolean | `@${string}`,
	project?:ResolverInputTypes["Project"],
	report_id?:boolean | `@${string}`,
	results?:ResolverInputTypes["TestResult"],
		__typename?: boolean | `@${string}`
}>;
	["ChangePasswordWhenLoggedInput"]: {
	username: string,
	oldPassword: string,
	newPassword: string
};
	["UpdateReportInput"]: {
	results: Array<ResolverInputTypes["TestResultInput"]>
};
	["RegisterErrors"]:RegisterErrors;
	["SocialKind"]:SocialKind;
	["ChangePasswordWithTokenInput"]: {
	forgotToken: string,
	newPassword: string,
	username: string
};
	["AdminMutation"]: AliasType<{
createProject?: [{	projectInput: ResolverInputTypes["ProjectInput"]},boolean | `@${string}`],
deleteProject?: [{	_id: string},boolean | `@${string}`],
project?: [{	_id: string},ResolverInputTypes["ProjectMutation"]],
updateProject?: [{	_id: string,	updateProjectInput: ResolverInputTypes["UpdateProjectInput"]},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["ProjectMutation"]: AliasType<{
	createKey?:boolean | `@${string}`,
deleteKey?: [{	key: string},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["LoginQuery"]: AliasType<{
password?: [{	user: ResolverInputTypes["LoginInput"]},ResolverInputTypes["LoginResponse"]],
provider?: [{	params: ResolverInputTypes["ProviderLoginInput"]},ResolverInputTypes["ProviderLoginQuery"]],
		__typename?: boolean | `@${string}`
}>;
	["ProviderLoginQuery"]: AliasType<{
	apple?:ResolverInputTypes["ProviderResponse"],
	github?:ResolverInputTypes["ProviderResponse"],
	google?:ResolverInputTypes["ProviderResponse"],
		__typename?: boolean | `@${string}`
}>;
	["ProviderResponse"]: AliasType<{
	access_token?:boolean | `@${string}`,
	hasError?:boolean | `@${string}`,
	jwt?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["GetOAuthInput"]: {
	scopes?: Array<string> | undefined | null,
	state?: string | undefined | null
};
	["ReportInfo"]: AliasType<{
	numberOfFailedResults?:boolean | `@${string}`,
	numberOfResults?:boolean | `@${string}`,
	numberOfRuns?:boolean | `@${string}`,
	projectId?:boolean | `@${string}`,
	projectName?:boolean | `@${string}`,
	reportId?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Mutation"]: AliasType<{
	admin?:ResolverInputTypes["AdminMutation"],
changePasswordWhenLogged?: [{	changePasswordData: ResolverInputTypes["ChangePasswordWhenLoggedInput"]},boolean | `@${string}`],
changePasswordWithToken?: [{	token: ResolverInputTypes["ChangePasswordWithTokenInput"]},boolean | `@${string}`],
	cli?:ResolverInputTypes["CLIMutation"],
generateOAuthToken?: [{	tokenData: ResolverInputTypes["GenerateOAuthTokenInput"]},boolean | `@${string}`],
integrateSocialAccount?: [{	userData: ResolverInputTypes["SimpleUserInput"]},boolean | `@${string}`],
register?: [{	user: ResolverInputTypes["RegisterInput"]},ResolverInputTypes["RegisterResponse"]],
verifyEmail?: [{	verifyData: ResolverInputTypes["VerifyEmailInput"]},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["UpdateProjectInput"]: {
	color?: ResolverInputTypes["Colors"] | undefined | null,
	name?: string | undefined | null,
	issueAddUrl?: string | undefined | null
};
	["UploadReportInput"]: {
	name: string,
	results: Array<ResolverInputTypes["TestResultInput"]>
};
	["GenerateOAuthTokenInput"]: {
	social: ResolverInputTypes["SocialKind"],
	code: string
};
	["LoginInput"]: {
	password?: string | undefined | null,
	username?: string | undefined | null
};
	["ProviderErrors"]:ProviderErrors;
	["Colors"]:Colors;
	["RegisterInput"]: {
	username: string,
	password: string
};
	["Query"]: AliasType<{
	admin?:ResolverInputTypes["AdminQuery"],
	cli?:ResolverInputTypes["CLIQuery"],
getAppleOAuthLink?: [{	setup: ResolverInputTypes["GetOAuthInput"]},boolean | `@${string}`],
getGithubOAuthLink?: [{	setup: ResolverInputTypes["GetOAuthInput"]},boolean | `@${string}`],
getGoogleOAuthLink?: [{	setup: ResolverInputTypes["GetOAuthInput"]},boolean | `@${string}`],
	login?:ResolverInputTypes["LoginQuery"],
requestForForgotPassword?: [{	username: string},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["CLIMutation"]: AliasType<{
updateReport?: [{	updateReportInput: ResolverInputTypes["UpdateReportInput"]},boolean | `@${string}`],
uploadReport?: [{	uploadReportInput: ResolverInputTypes["UploadReportInput"]},boolean | `@${string}`],
		__typename?: boolean | `@${string}`
}>;
	["RegisterResponse"]: AliasType<{
	hasError?:boolean | `@${string}`,
	registered?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["TestResultInput"]: {
	testPath: string,
	testContent: string,
	featureContent?: string | undefined | null,
	inherited?: string | undefined | null,
	reasonOfFail?: string | undefined | null,
	scenario?: string | undefined | null
};
	["LoginResponse"]: AliasType<{
	hasError?:boolean | `@${string}`,
	login?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["LoginErrors"]:LoginErrors;
	["AdminQuery"]: AliasType<{
	me?:ResolverInputTypes["User"],
	projects?:ResolverInputTypes["Project"],
reportById?: [{	_id: string},ResolverInputTypes["TestReport"]],
reports?: [{	filterDate?: ResolverInputTypes["DateInput"] | undefined | null,	filterProject?: Array<string> | undefined | null},ResolverInputTypes["TestReport"]],
		__typename?: boolean | `@${string}`
}>;
	["TestResult"]: AliasType<{
	/** content of the main feature */
	featureContent?:boolean | `@${string}`,
	inherited?:boolean | `@${string}`,
	reasonOfFail?:boolean | `@${string}`,
	scenario?:boolean | `@${string}`,
	/** Content of the scenario */
	testContent?:boolean | `@${string}`,
	testPath?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["User"]: AliasType<{
	username?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["CLIQuery"]: AliasType<{
	getReport?:ResolverInputTypes["TestReport"],
	getReports?:ResolverInputTypes["ReportInfo"],
		__typename?: boolean | `@${string}`
}>;
	["ProjectInput"]: {
	issueAddUrl?: string | undefined | null,
	color?: ResolverInputTypes["Colors"] | undefined | null,
	name: string
};
	["VerifyEmailInput"]: {
	username: string,
	token: string
};
	["SimpleUserInput"]: {
	username: string,
	password: string
}
  }

export type ModelTypes = {
    ["ProviderLoginInput"]: {
	code: string
};
	["Project"]: {
		_id: string,
	color?: ModelTypes["Colors"] | undefined,
	issueAddUrl?: string | undefined,
	keys?: Array<string> | undefined,
	name: string,
	reports?: Array<ModelTypes["TestReport"]> | undefined
};
	["DateInput"]: {
	from: string,
	to?: string | undefined
};
	["TestReport"]: {
		_id: string,
	createdAt: string,
	key?: string | undefined,
	name?: string | undefined,
	project: ModelTypes["Project"],
	runs?: Array<ModelTypes["ReportRun"] | undefined> | undefined
};
	["ReportRun"]: {
		_id: string,
	createdAt: string,
	number: number,
	project: ModelTypes["Project"],
	report_id: string,
	results: Array<ModelTypes["TestResult"]>
};
	["ChangePasswordWhenLoggedInput"]: {
	username: string,
	oldPassword: string,
	newPassword: string
};
	["UpdateReportInput"]: {
	results: Array<ModelTypes["TestResultInput"]>
};
	["RegisterErrors"]:RegisterErrors;
	["SocialKind"]:SocialKind;
	["ChangePasswordWithTokenInput"]: {
	forgotToken: string,
	newPassword: string,
	username: string
};
	["AdminMutation"]: {
		createProject?: string | undefined,
	deleteProject?: boolean | undefined,
	project?: ModelTypes["ProjectMutation"] | undefined,
	updateProject?: boolean | undefined
};
	["ProjectMutation"]: {
		createKey?: string | undefined,
	deleteKey?: boolean | undefined
};
	["LoginQuery"]: {
		password: ModelTypes["LoginResponse"],
	provider: ModelTypes["ProviderLoginQuery"]
};
	["ProviderLoginQuery"]: {
		apple?: ModelTypes["ProviderResponse"] | undefined,
	github?: ModelTypes["ProviderResponse"] | undefined,
	google?: ModelTypes["ProviderResponse"] | undefined
};
	["ProviderResponse"]: {
		access_token?: string | undefined,
	hasError?: ModelTypes["ProviderErrors"] | undefined,
	jwt?: string | undefined
};
	["GetOAuthInput"]: {
	scopes?: Array<string> | undefined,
	state?: string | undefined
};
	["ReportInfo"]: {
		numberOfFailedResults: number,
	numberOfResults: number,
	numberOfRuns: number,
	projectId: string,
	projectName: string,
	reportId: string
};
	["Mutation"]: {
		admin?: ModelTypes["AdminMutation"] | undefined,
	changePasswordWhenLogged: boolean,
	changePasswordWithToken: boolean,
	cli?: ModelTypes["CLIMutation"] | undefined,
	generateOAuthToken: string,
	integrateSocialAccount: boolean,
	register: ModelTypes["RegisterResponse"],
	verifyEmail: boolean
};
	["UpdateProjectInput"]: {
	color?: ModelTypes["Colors"] | undefined,
	name?: string | undefined,
	issueAddUrl?: string | undefined
};
	["UploadReportInput"]: {
	name: string,
	results: Array<ModelTypes["TestResultInput"]>
};
	["GenerateOAuthTokenInput"]: {
	social: ModelTypes["SocialKind"],
	code: string
};
	["LoginInput"]: {
	password?: string | undefined,
	username?: string | undefined
};
	["ProviderErrors"]:ProviderErrors;
	["Colors"]:Colors;
	["RegisterInput"]: {
	username: string,
	password: string
};
	["Query"]: {
		admin?: ModelTypes["AdminQuery"] | undefined,
	cli?: ModelTypes["CLIQuery"] | undefined,
	getAppleOAuthLink: string,
	getGithubOAuthLink: string,
	getGoogleOAuthLink: string,
	login: ModelTypes["LoginQuery"],
	requestForForgotPassword: boolean
};
	["CLIMutation"]: {
		updateReport: string,
	uploadReport: string
};
	["RegisterResponse"]: {
		hasError?: ModelTypes["RegisterErrors"] | undefined,
	registered?: boolean | undefined
};
	["TestResultInput"]: {
	testPath: string,
	testContent: string,
	featureContent?: string | undefined,
	inherited?: string | undefined,
	reasonOfFail?: string | undefined,
	scenario?: string | undefined
};
	["LoginResponse"]: {
		hasError?: ModelTypes["LoginErrors"] | undefined,
	login?: string | undefined
};
	["LoginErrors"]:LoginErrors;
	["AdminQuery"]: {
		me: ModelTypes["User"],
	projects: Array<ModelTypes["Project"]>,
	reportById?: ModelTypes["TestReport"] | undefined,
	reports: Array<ModelTypes["TestReport"] | undefined>
};
	["TestResult"]: {
		/** content of the main feature */
	featureContent?: string | undefined,
	inherited?: string | undefined,
	reasonOfFail?: string | undefined,
	scenario?: string | undefined,
	/** Content of the scenario */
	testContent: string,
	testPath: string
};
	["User"]: {
		username: string
};
	["CLIQuery"]: {
		getReport: ModelTypes["TestReport"],
	getReports: Array<ModelTypes["ReportInfo"] | undefined>
};
	["ProjectInput"]: {
	issueAddUrl?: string | undefined,
	color?: ModelTypes["Colors"] | undefined,
	name: string
};
	["VerifyEmailInput"]: {
	username: string,
	token: string
};
	["SimpleUserInput"]: {
	username: string,
	password: string
}
    }

export type GraphQLTypes = {
    ["ProviderLoginInput"]: {
		code: string
};
	["Project"]: {
	__typename: "Project",
	_id: string,
	color?: GraphQLTypes["Colors"] | undefined,
	issueAddUrl?: string | undefined,
	keys?: Array<string> | undefined,
	name: string,
	reports?: Array<GraphQLTypes["TestReport"]> | undefined
};
	["DateInput"]: {
		from: string,
	to?: string | undefined
};
	["TestReport"]: {
	__typename: "TestReport",
	_id: string,
	createdAt: string,
	key?: string | undefined,
	name?: string | undefined,
	project: GraphQLTypes["Project"],
	runs?: Array<GraphQLTypes["ReportRun"] | undefined> | undefined
};
	["ReportRun"]: {
	__typename: "ReportRun",
	_id: string,
	createdAt: string,
	number: number,
	project: GraphQLTypes["Project"],
	report_id: string,
	results: Array<GraphQLTypes["TestResult"]>
};
	["ChangePasswordWhenLoggedInput"]: {
		username: string,
	oldPassword: string,
	newPassword: string
};
	["UpdateReportInput"]: {
		results: Array<GraphQLTypes["TestResultInput"]>
};
	["RegisterErrors"]: RegisterErrors;
	["SocialKind"]: SocialKind;
	["ChangePasswordWithTokenInput"]: {
		forgotToken: string,
	newPassword: string,
	username: string
};
	["AdminMutation"]: {
	__typename: "AdminMutation",
	createProject?: string | undefined,
	deleteProject?: boolean | undefined,
	project?: GraphQLTypes["ProjectMutation"] | undefined,
	updateProject?: boolean | undefined
};
	["ProjectMutation"]: {
	__typename: "ProjectMutation",
	createKey?: string | undefined,
	deleteKey?: boolean | undefined
};
	["LoginQuery"]: {
	__typename: "LoginQuery",
	password: GraphQLTypes["LoginResponse"],
	provider: GraphQLTypes["ProviderLoginQuery"]
};
	["ProviderLoginQuery"]: {
	__typename: "ProviderLoginQuery",
	apple?: GraphQLTypes["ProviderResponse"] | undefined,
	github?: GraphQLTypes["ProviderResponse"] | undefined,
	google?: GraphQLTypes["ProviderResponse"] | undefined
};
	["ProviderResponse"]: {
	__typename: "ProviderResponse",
	access_token?: string | undefined,
	hasError?: GraphQLTypes["ProviderErrors"] | undefined,
	jwt?: string | undefined
};
	["GetOAuthInput"]: {
		scopes?: Array<string> | undefined,
	state?: string | undefined
};
	["ReportInfo"]: {
	__typename: "ReportInfo",
	numberOfFailedResults: number,
	numberOfResults: number,
	numberOfRuns: number,
	projectId: string,
	projectName: string,
	reportId: string
};
	["Mutation"]: {
	__typename: "Mutation",
	admin?: GraphQLTypes["AdminMutation"] | undefined,
	changePasswordWhenLogged: boolean,
	changePasswordWithToken: boolean,
	cli?: GraphQLTypes["CLIMutation"] | undefined,
	generateOAuthToken: string,
	integrateSocialAccount: boolean,
	register: GraphQLTypes["RegisterResponse"],
	verifyEmail: boolean
};
	["UpdateProjectInput"]: {
		color?: GraphQLTypes["Colors"] | undefined,
	name?: string | undefined,
	issueAddUrl?: string | undefined
};
	["UploadReportInput"]: {
		name: string,
	results: Array<GraphQLTypes["TestResultInput"]>
};
	["GenerateOAuthTokenInput"]: {
		social: GraphQLTypes["SocialKind"],
	code: string
};
	["LoginInput"]: {
		password?: string | undefined,
	username?: string | undefined
};
	["ProviderErrors"]: ProviderErrors;
	["Colors"]: Colors;
	["RegisterInput"]: {
		username: string,
	password: string
};
	["Query"]: {
	__typename: "Query",
	admin?: GraphQLTypes["AdminQuery"] | undefined,
	cli?: GraphQLTypes["CLIQuery"] | undefined,
	getAppleOAuthLink: string,
	getGithubOAuthLink: string,
	getGoogleOAuthLink: string,
	login: GraphQLTypes["LoginQuery"],
	requestForForgotPassword: boolean
};
	["CLIMutation"]: {
	__typename: "CLIMutation",
	updateReport: string,
	uploadReport: string
};
	["RegisterResponse"]: {
	__typename: "RegisterResponse",
	hasError?: GraphQLTypes["RegisterErrors"] | undefined,
	registered?: boolean | undefined
};
	["TestResultInput"]: {
		testPath: string,
	testContent: string,
	featureContent?: string | undefined,
	inherited?: string | undefined,
	reasonOfFail?: string | undefined,
	scenario?: string | undefined
};
	["LoginResponse"]: {
	__typename: "LoginResponse",
	hasError?: GraphQLTypes["LoginErrors"] | undefined,
	login?: string | undefined
};
	["LoginErrors"]: LoginErrors;
	["AdminQuery"]: {
	__typename: "AdminQuery",
	me: GraphQLTypes["User"],
	projects: Array<GraphQLTypes["Project"]>,
	reportById?: GraphQLTypes["TestReport"] | undefined,
	reports: Array<GraphQLTypes["TestReport"] | undefined>
};
	["TestResult"]: {
	__typename: "TestResult",
	/** content of the main feature */
	featureContent?: string | undefined,
	inherited?: string | undefined,
	reasonOfFail?: string | undefined,
	scenario?: string | undefined,
	/** Content of the scenario */
	testContent: string,
	testPath: string
};
	["User"]: {
	__typename: "User",
	username: string
};
	["CLIQuery"]: {
	__typename: "CLIQuery",
	getReport: GraphQLTypes["TestReport"],
	getReports: Array<GraphQLTypes["ReportInfo"] | undefined>
};
	["ProjectInput"]: {
		issueAddUrl?: string | undefined,
	color?: GraphQLTypes["Colors"] | undefined,
	name: string
};
	["VerifyEmailInput"]: {
		username: string,
	token: string
};
	["SimpleUserInput"]: {
		username: string,
	password: string
}
    }
export const enum RegisterErrors {
	INVITE_DOMAIN_INCORRECT = "INVITE_DOMAIN_INCORRECT",
	LINK_EXPIRED = "LINK_EXPIRED",
	PASSWORD_WEAK = "PASSWORD_WEAK",
	USERNAME_EXISTS = "USERNAME_EXISTS",
	USERNAME_INVALID = "USERNAME_INVALID"
}
export const enum SocialKind {
	Google = "Google",
	Github = "Github",
	Apple = "Apple"
}
export const enum ProviderErrors {
	CANNOT_RETRIVE_SUB_FIELD_FROM_JWT_TOKEN = "CANNOT_RETRIVE_SUB_FIELD_FROM_JWT_TOKEN",
	CANNOT_RETRIVE_PROFILE_FROM_GOOGLE_TRY_REFRESH_TOKEN = "CANNOT_RETRIVE_PROFILE_FROM_GOOGLE_TRY_REFRESH_TOKEN",
	CANNOT_FIND_EMAIL_FOR_THIS_PROFIL = "CANNOT_FIND_EMAIL_FOR_THIS_PROFIL",
	CANNOT_RETRIVE_USER_INFORMATION_FROM_APPLE = "CANNOT_RETRIVE_USER_INFORMATION_FROM_APPLE",
	CODE_IS_NOT_EXIST_IN_ARGS = "CODE_IS_NOT_EXIST_IN_ARGS"
}
export const enum Colors {
	_8762B6 = "_8762B6",
	_AA8753 = "_AA8753",
	_748448 = "_748448",
	_5D6ECC = "_5D6ECC",
	_3D82C2 = "_3D82C2",
	_B07765 = "_B07765"
}
export const enum LoginErrors {
	CONFIRM_EMAIL_BEFOR_LOGIN = "CONFIRM_EMAIL_BEFOR_LOGIN",
	INVALID_LOGIN_OR_PASSWORD = "INVALID_LOGIN_OR_PASSWORD",
	CANNOT_FIND_CONNECTED_USER = "CANNOT_FIND_CONNECTED_USER",
	YOU_PROVIDED_OTHER_METHOD_OF_LOGIN_ON_THIS_EMAIL = "YOU_PROVIDED_OTHER_METHOD_OF_LOGIN_ON_THIS_EMAIL"
}

type ZEUS_VARIABLES = {
	["ProviderLoginInput"]: ValueTypes["ProviderLoginInput"];
	["DateInput"]: ValueTypes["DateInput"];
	["ChangePasswordWhenLoggedInput"]: ValueTypes["ChangePasswordWhenLoggedInput"];
	["UpdateReportInput"]: ValueTypes["UpdateReportInput"];
	["RegisterErrors"]: ValueTypes["RegisterErrors"];
	["SocialKind"]: ValueTypes["SocialKind"];
	["ChangePasswordWithTokenInput"]: ValueTypes["ChangePasswordWithTokenInput"];
	["GetOAuthInput"]: ValueTypes["GetOAuthInput"];
	["UpdateProjectInput"]: ValueTypes["UpdateProjectInput"];
	["UploadReportInput"]: ValueTypes["UploadReportInput"];
	["GenerateOAuthTokenInput"]: ValueTypes["GenerateOAuthTokenInput"];
	["LoginInput"]: ValueTypes["LoginInput"];
	["ProviderErrors"]: ValueTypes["ProviderErrors"];
	["Colors"]: ValueTypes["Colors"];
	["RegisterInput"]: ValueTypes["RegisterInput"];
	["TestResultInput"]: ValueTypes["TestResultInput"];
	["LoginErrors"]: ValueTypes["LoginErrors"];
	["ProjectInput"]: ValueTypes["ProjectInput"];
	["VerifyEmailInput"]: ValueTypes["VerifyEmailInput"];
	["SimpleUserInput"]: ValueTypes["SimpleUserInput"];
}