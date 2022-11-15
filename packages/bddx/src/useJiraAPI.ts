import { Chain } from "@/zeus/index.js";
import fetch from "node-fetch";

export const encodeToken = (email: string, apiKey: string) => {
  const end = Buffer.from(`${email}:${apiKey}`, "binary").toString("base64"); //cGlvdHJAYWV4b2wuY29tOlRudGhreWhmSFVJcVlaVmlSV2ZrMjY4Rg==
  console.log(end);
  return end;
};

export const fetchApi = async (email: string, apiKey: string) => {
  const response = await fetch(
    "https://aexoldev.atlassian.net/rest/api/3/dashboard",
    {
      method: "Get",
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${Buffer.from(`${email}:${apiKey}`).toString(
          "base64"
        )}`, //"Basic cGlvdHJAYWV4b2wuY29tOlRudGhreWhmSFVJcVlaVmlSV2ZrMjY4Rg==",
      },
    }
  );
  const a = await response.text();
  console.log(a);
  return a;
};

const chain = (method: "query" | "mutation", token: string) => {
  return Chain("https://api.atlassian.com/graphql", {
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    },
  })(method);
};

export const getCloudIdByHostName = async (token: string, hostName: string) => {
  const resp = await chain(
    "query",
    token
  )({
    tenantContexts: [{ cloudIds: [hostName] }, { hostName: true }],
  });
  if (
    !resp.tenantContexts ||
    resp.tenantContexts.length === 0 ||
    !resp.tenantContexts[0].hostName
  ) {
    throw new Error("Can not obtain cloud Id of selected hostname");
  }
  return resp.tenantContexts[0].hostName;
};

export const getYourProject = async (token: string, hostName: string) => {
  const resp = await chain(
    "query",
    token
  )({
    tenantContexts: [{ cloudIds: [hostName] }, { hostName: true }],
  });

  if (
    !resp.tenantContexts ||
    resp.tenantContexts.length === 0 ||
    !resp.tenantContexts[0].hostName
  ) {
    throw new Error("Can not obtain cloud Id of selected hostname");
  }
  return resp.tenantContexts[0].hostName;
};
