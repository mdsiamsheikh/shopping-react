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
exports.id = "pages/api/checkout_sessions";
exports.ids = ["pages/api/checkout_sessions"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions.js":
/*!****************************************!*\
  !*** ./pages/api/checkout_sessions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const items = req.body.cartItem;\n        console.log(items);\n        const transformedItems = items.map((item)=>({\n                price_data: {\n                    currency: \"usd\",\n                    product_data: {\n                        name: item.name,\n                        images: [\n                            req.headers.origin + item.image\n                        ]\n                    },\n                    unit_amount: item.price * 100\n                },\n                quantity: item.quantity\n            }));\n        try {\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create({\n                line_items: transformedItems,\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/?success=true`,\n                cancel_url: `${req.headers.origin}/`\n            });\n            res.json({\n                sessionURL: session.url\n            });\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQztBQUVoRCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxRQUFRO1FBRS9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBSyxDQUFDLENBQUM7UUFFbkIsTUFBTUssZ0JBQWdCLEdBQUdMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQUksR0FBTTtnQkFDNUNDLFVBQVUsRUFBRTtvQkFDVkMsUUFBUSxFQUFFLEtBQUs7b0JBQ2ZDLFlBQVksRUFBRTt3QkFDWkMsSUFBSSxFQUFFSixJQUFJLENBQUNJLElBQUk7d0JBQ2ZDLE1BQU0sRUFBRTs0QkFBQ2YsR0FBRyxDQUFDZ0IsT0FBTyxDQUFDQyxNQUFNLEdBQUdQLElBQUksQ0FBQ1EsS0FBSzt5QkFBQztxQkFDMUM7b0JBQ0RDLFdBQVcsRUFBRVQsSUFBSSxDQUFDVSxLQUFLLEdBQUcsR0FBRztpQkFDOUI7Z0JBQ0RDLFFBQVEsRUFBRVgsSUFBSSxDQUFDVyxRQUFRO2FBQ3hCLEVBQUU7UUFFSCxJQUFJO1lBQ0YsNkNBQTZDO1lBQzdDLE1BQU1DLE9BQU8sR0FBRyxNQUFNNUIsTUFBTSxDQUFDNkIsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztnQkFDcERDLFVBQVUsRUFBRWxCLGdCQUFnQjtnQkFDNUJtQixJQUFJLEVBQUUsU0FBUztnQkFDZkMsV0FBVyxFQUFFLENBQUMsRUFBRTVCLEdBQUcsQ0FBQ2dCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQztnQkFDbERZLFVBQVUsRUFBRSxDQUFDLEVBQUU3QixHQUFHLENBQUNnQixPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDckMsQ0FBQztZQUVGaEIsR0FBRyxDQUFDNkIsSUFBSSxDQUFDO2dCQUFFQyxVQUFVLEVBQUVULE9BQU8sQ0FBQ1UsR0FBRzthQUFFLENBQUMsQ0FBQztRQUN4QyxFQUFFLE9BQU9DLEdBQUcsRUFBRTtZQUNaaEMsR0FBRyxDQUFDaUMsTUFBTSxDQUFDRCxHQUFHLENBQUNFLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQ0wsSUFBSSxDQUFDRyxHQUFHLENBQUNHLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDSCxPQUFPO1FBQ0xuQyxHQUFHLENBQUNvQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CcEMsR0FBRyxDQUFDaUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM1QyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMuanM/MDc5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdHJpcGUgPSByZXF1aXJlKFwic3RyaXBlXCIpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gcmVxLmJvZHkuY2FydEl0ZW07XHJcblxyXG4gICAgY29uc29sZS5sb2coaXRlbXMpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybWVkSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgIHByaWNlX2RhdGE6IHtcclxuICAgICAgICBjdXJyZW5jeTogXCJ1c2RcIixcclxuICAgICAgICBwcm9kdWN0X2RhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgIGltYWdlczogW3JlcS5oZWFkZXJzLm9yaWdpbiArIGl0ZW0uaW1hZ2VdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENyZWF0ZSBDaGVja291dCBTZXNzaW9ucyBmcm9tIGJvZHkgcGFyYW1zLlxyXG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgbGluZV9pdGVtczogdHJhbnNmb3JtZWRJdGVtcyxcclxuICAgICAgICBtb2RlOiBcInBheW1lbnRcIixcclxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS8/c3VjY2Vzcz10cnVlYCxcclxuICAgICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L2AsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzLmpzb24oeyBzZXNzaW9uVVJMOiBzZXNzaW9uLnVybCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBcIlBPU1RcIik7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpdGVtcyIsImJvZHkiLCJjYXJ0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2Zvcm1lZEl0ZW1zIiwibWFwIiwiaXRlbSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJpbWFnZXMiLCJoZWFkZXJzIiwib3JpZ2luIiwiaW1hZ2UiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwicXVhbnRpdHkiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsImxpbmVfaXRlbXMiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJjYW5jZWxfdXJsIiwianNvbiIsInNlc3Npb25VUkwiLCJ1cmwiLCJlcnIiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions.js"));
module.exports = __webpack_exports__;

})();