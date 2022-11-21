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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const { code  } = req.query;\n    console.log(code);\n    return new Promise(async ()=>{\n        if (code) {\n            res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n            const responseToken = await fetch(\"https://auth.atlassian.com/oauth/token\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    client_id: \"p2Zl57WIWDRKDEProBxyWt1GIz0EAfT6\",\n                    client_secret: process.env.CLIENT_SECRET,\n                    code: code,\n                    redirect_uri: \"http://localhost:3000/api/jira-callback\"\n                })\n            });\n            const responseText = await responseToken.text();\n            console.log(responseText);\n            const params = new URLSearchParams(responseText);\n            const accessToken = params.get(\"access_token\");\n            if (accessToken) {\n                res.status(201).json({\n                    accessToken\n                });\n            } else {\n                res.status(201).json(\"Error\");\n            }\n        }\n        console.log(code);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ppcmEtY2FsbGJhY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLGlFQUFlLENBQUNBLEtBQXFCQyxNQUF5QjtJQUM1RCxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBQzFCQyxRQUFRQyxHQUFHLENBQUNIO0lBRVosT0FBTyxJQUFJSSxRQUFRLFVBQVk7UUFDN0IsSUFBSUosTUFBTTtZQUNSRCxJQUFJTSxTQUFTLENBQUMsK0JBQStCO1lBQzdDLE1BQU1DLGdCQUFnQixNQUFNQyxNQUMxQiwwQ0FDQTtnQkFDRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CQyxXQUFXQyxrQ0FBaUM7b0JBQzVDRyxlQUFlSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7b0JBQ3hDbEIsTUFBTUE7b0JBQ05tQixjQUFjTCx5Q0FBb0M7Z0JBQ3BEO1lBQ0Y7WUFFRixNQUFNTyxlQUFlLE1BQU1mLGNBQWNnQixJQUFJO1lBQzdDcEIsUUFBUUMsR0FBRyxDQUFDa0I7WUFDWixNQUFNRSxTQUFTLElBQUlDLGdCQUFnQkg7WUFDbkMsTUFBTUksY0FBY0YsT0FBT0csR0FBRyxDQUFDO1lBQy9CLElBQUlELGFBQWE7Z0JBQ2YxQixJQUFJNEIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUg7Z0JBQVk7WUFDckMsT0FBTztnQkFDTDFCLElBQUk0QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDO1FBQ0QxQixRQUFRQyxHQUFHLENBQUNIO0lBQ2Q7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9qaXJhLWNhbGxiYWNrLnRzPzgxNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCB7IGNvZGUgfSA9IHJlcS5xdWVyeTtcbiAgY29uc29sZS5sb2coY29kZSk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jICgpID0+IHtcbiAgICBpZiAoY29kZSkge1xuICAgICAgcmVzLnNldEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgICBjb25zdCByZXNwb25zZVRva2VuID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cHM6Ly9hdXRoLmF0bGFzc2lhbi5jb20vb2F1dGgvdG9rZW5cIixcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9JRCxcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LkNMSUVOVF9TRUNSRVQsXG4gICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRURJUkVDVF9VUkksXG4gICAgICAgICAgfSksXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZVRva2VuLnRleHQoKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlVGV4dCk7XG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJlc3BvbnNlVGV4dCk7XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHBhcmFtcy5nZXQoXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgICBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBhY2Nlc3NUb2tlbiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKFwiRXJyb3JcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGNvZGUpO1xuICB9KTtcbn07XG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwiY29kZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJzZXRIZWFkZXIiLCJyZXNwb25zZVRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX0lEIiwiY2xpZW50X3NlY3JldCIsIkNMSUVOVF9TRUNSRVQiLCJyZWRpcmVjdF91cmkiLCJORVhUX1BVQkxJQ19SRURJUkVDVF9VUkkiLCJyZXNwb25zZVRleHQiLCJ0ZXh0IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/jira-callback.ts\n");

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