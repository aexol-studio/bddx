"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/jira-callback";
exports.ids = ["pages/api/jira-callback"];
exports.modules = {

/***/ "(api)/./src/pages/api/jira-callback.ts":
/*!****************************************!*\
  !*** ./src/pages/api/jira-callback.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const { code  } = req.query;\n    return new Promise(async ()=>{\n        if (code) {\n            res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n            const responseToken = await fetch(\"https://auth.atlassian.com/oauth/token\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    grant_type: \"authorization_code\",\n                    client_id: \"p2Zl57WIWDRKDEProBxyWt1GIz0EAfT6\",\n                    client_secret: process.env.CLIENT_SECRET,\n                    code: code,\n                    redirect_uri: \"http://localhost:3000/api/jira-callback\"\n                })\n            });\n            const responseJSON = await responseToken.json();\n            const { access_token  } = responseJSON;\n            console.log(access_token);\n            if (access_token) {\n                res.status(201).json({\n                    access_token\n                });\n            } else {\n                res.status(201).json(\"Error\");\n            }\n        }\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ppcmEtY2FsbGJhY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLGlFQUFlLENBQUNBLEtBQXFCQyxNQUF5QjtJQUM1RCxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBQzFCLE9BQU8sSUFBSUMsUUFBUSxVQUFZO1FBQzdCLElBQUlGLE1BQU07WUFDUkQsSUFBSUksU0FBUyxDQUFDLCtCQUErQjtZQUM3QyxNQUFNQyxnQkFBZ0IsTUFBTUMsTUFDMUIsMENBQ0E7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQkMsWUFBWTtvQkFDWkMsV0FBV0Msa0NBQWlDO29CQUM1Q0csZUFBZUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO29CQUN4Q2pCLE1BQU1BO29CQUNOa0IsY0FBY0wseUNBQW9DO2dCQUNwRDtZQUNGO1lBRUYsTUFBTU8sZUFBZSxNQUFNaEIsY0FBY2lCLElBQUk7WUFFN0MsTUFBTSxFQUFFQyxhQUFZLEVBQUUsR0FBR0Y7WUFDekJHLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixJQUFJQSxjQUFjO2dCQUNoQnZCLElBQUkwQixNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDO29CQUFFQztnQkFBYTtZQUN0QyxPQUFPO2dCQUNMdkIsSUFBSTBCLE1BQU0sQ0FBQyxLQUFLSixJQUFJLENBQUM7WUFDdkIsQ0FBQztRQUNILENBQUM7SUFDSDtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2ppcmEtY2FsbGJhY2sudHM/ODE0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgY29kZSB9ID0gcmVxLnF1ZXJ5O1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjb2RlKSB7XG4gICAgICByZXMuc2V0SGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIsIFwiKlwiKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlVG9rZW4gPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwczovL2F1dGguYXRsYXNzaWFuLmNvbS9vYXV0aC90b2tlblwiLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGdyYW50X3R5cGU6IFwiYXV0aG9yaXphdGlvbl9jb2RlXCIsXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9JRCxcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LkNMSUVOVF9TRUNSRVQsXG4gICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRURJUkVDVF9VUkksXG4gICAgICAgICAgfSksXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZVRva2VuLmpzb24oKTtcblxuICAgICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IHJlc3BvbnNlSlNPTjtcbiAgICAgIGNvbnNvbGUubG9nKGFjY2Vzc190b2tlbik7XG4gICAgICBpZiAoYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgYWNjZXNzX3Rva2VuIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oXCJFcnJvclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJjb2RlIiwicXVlcnkiLCJQcm9taXNlIiwic2V0SGVhZGVyIiwicmVzcG9uc2VUb2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ3JhbnRfdHlwZSIsImNsaWVudF9pZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJjbGllbnRfc2VjcmV0IiwiQ0xJRU5UX1NFQ1JFVCIsInJlZGlyZWN0X3VyaSIsIk5FWFRfUFVCTElDX1JFRElSRUNUX1VSSSIsInJlc3BvbnNlSlNPTiIsImpzb24iLCJhY2Nlc3NfdG9rZW4iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/jira-callback.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/jira-callback.ts"));
module.exports = __webpack_exports__;

})();