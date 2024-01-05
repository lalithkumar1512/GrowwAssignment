"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/payment",{

/***/ "./pages/cardpaymentform.js":
/*!**********************************!*\
  !*** ./pages/cardpaymentform.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);\n// components/CardPaymentForm.js\n\nvar _s = $RefreshSig$();\n\n\nconst CardPaymentForm = ()=>{\n    _s();\n    const [showPaymentSuccess, setShowPaymentSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();\n    const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (!stripe || !elements) {\n            // Stripe.js has not yet loaded.\n            // Make sure to disable form submission until Stripe.js has loaded.\n            return;\n        }\n        const cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement);\n        const { token, error } = await stripe.createToken(cardElement);\n        if (error) {\n            console.error(error);\n        // Handle error, e.g., display error message to the user\n        } else {\n            // Send the token to your server for processing\n            console.log(\"Stripe Token:\", token);\n        // Implement your server-side logic to process the payment\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            style: {\n                backgroundColor: \"#4CAF50\",\n                color: \"white\",\n                border: \"0\",\n                padding: \"1vmin 2vmin\",\n                marginTop: \"1vmin\",\n                cursor: \"pointer\"\n            },\n            children: \"Pay with Card\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lalit\\\\groww\\\\groww_assignment\\\\pages\\\\cardpaymentform.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lalit\\\\groww\\\\groww_assignment\\\\pages\\\\cardpaymentform.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardPaymentForm, \"wIHge2oiU+5ey8tOPpyCcSaz/Hg=\", false, function() {\n    return [\n        _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe,\n        _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements\n    ];\n});\n_c = CardPaymentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPaymentForm);\nvar _c;\n$RefreshReg$(_c, \"CardPaymentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkcGF5bWVudGZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGdDQUFnQzs7O0FBQ007QUFDd0M7QUFDOUUsTUFBTUssa0JBQWtCOztJQUN0QixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzdELE1BQU1PLFNBQVNMLGtFQUFTQTtJQUN4QixNQUFNTSxXQUFXTCxvRUFBV0E7SUFFNUIsTUFBTU0sZUFBZSxPQUFPQztRQUMxQkEsTUFBTUMsY0FBYztRQUVwQixJQUFJLENBQUNKLFVBQVUsQ0FBQ0MsVUFBVTtZQUN4QixnQ0FBZ0M7WUFDaEMsbUVBQW1FO1lBQ25FO1FBQ0Y7UUFFQSxNQUFNSSxjQUFjSixTQUFTSyxVQUFVLENBQUNaLGdFQUFXQTtRQUVuRCxNQUFNLEVBQUVhLEtBQUssRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTVIsT0FBT1MsV0FBVyxDQUFDSjtRQUVsRCxJQUFJRyxPQUFPO1lBQ1RFLFFBQVFGLEtBQUssQ0FBQ0E7UUFDZCx3REFBd0Q7UUFDMUQsT0FBTztZQUNMLCtDQUErQztZQUMvQ0UsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQko7UUFDN0IsMERBQTBEO1FBQzVEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0s7UUFBS0MsVUFBVVg7a0JBRWQsNEVBQUNZO1lBQ0NDLE1BQUs7WUFDTEMsT0FBTztnQkFDTEMsaUJBQWlCO2dCQUNqQkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsU0FBUztnQkFDVEMsV0FBVztnQkFDWEMsUUFBUTtZQUNWO3NCQUNEOzs7Ozs7Ozs7OztBQUtQO0dBOUNNekI7O1FBRVdGLDhEQUFTQTtRQUNQQyxnRUFBV0E7OztLQUh4QkM7QUFnRE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZHBheW1lbnRmb3JtLmpzPzFlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9DYXJkUGF5bWVudEZvcm0uanNcclxuaW1wb3J0IHtSZWFjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xyXG5jb25zdCBDYXJkUGF5bWVudEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXltZW50U3VjY2Vzcywgc2V0U2hvd1BheW1lbnRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIXN0cmlwZSB8fCAhZWxlbWVudHMpIHtcclxuICAgICAgLy8gU3RyaXBlLmpzIGhhcyBub3QgeWV0IGxvYWRlZC5cclxuICAgICAgLy8gTWFrZSBzdXJlIHRvIGRpc2FibGUgZm9ybSBzdWJtaXNzaW9uIHVudGlsIFN0cmlwZS5qcyBoYXMgbG9hZGVkLlxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCB7IHRva2VuLCBlcnJvciB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVRva2VuKGNhcmRFbGVtZW50KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIC8vIEhhbmRsZSBlcnJvciwgZS5nLiwgZGlzcGxheSBlcnJvciBtZXNzYWdlIHRvIHRoZSB1c2VyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTZW5kIHRoZSB0b2tlbiB0byB5b3VyIHNlcnZlciBmb3IgcHJvY2Vzc2luZ1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlN0cmlwZSBUb2tlbjpcIiwgdG9rZW4pO1xyXG4gICAgICAvLyBJbXBsZW1lbnQgeW91ciBzZXJ2ZXItc2lkZSBsb2dpYyB0byBwcm9jZXNzIHRoZSBwYXltZW50XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICB7LyogPENhcmRFbGVtZW50IGlkPVwiY2FyZEVsZW1lbnRcIiBvcHRpb25zPXt7IHN0eWxlOiB7IGJhc2U6IHsgZm9udFNpemU6ICcydm1pbicgfSB9IH19IC8+ICovfVxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNENBRjUwXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgYm9yZGVyOiBcIjBcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMXZtaW4gMnZtaW5cIixcclxuICAgICAgICAgIG1hcmdpblRvcDogXCIxdm1pblwiLFxyXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgUGF5IHdpdGggQ2FyZFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFBheW1lbnRGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcmRFbGVtZW50IiwidXNlU3RyaXBlIiwidXNlRWxlbWVudHMiLCJDYXJkUGF5bWVudEZvcm0iLCJzaG93UGF5bWVudFN1Y2Nlc3MiLCJzZXRTaG93UGF5bWVudFN1Y2Nlc3MiLCJzdHJpcGUiLCJlbGVtZW50cyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJ0b2tlbiIsImVycm9yIiwiY3JlYXRlVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsIm9uU3VibWl0IiwiYnV0dG9uIiwidHlwZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cardpaymentform.js\n"));

/***/ })

});