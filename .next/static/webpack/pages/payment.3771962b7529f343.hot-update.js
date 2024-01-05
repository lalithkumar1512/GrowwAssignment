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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);\n// components/CardPaymentForm.js\n\nvar _s = $RefreshSig$();\n\n\nconst CardPaymentForm = ()=>{\n    _s();\n    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);\n    const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();\n    const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (!stripe || !elements) {\n            // Stripe.js has not yet loaded.\n            // Make sure to disable form submission until Stripe.js has loaded.\n            return;\n        }\n        const cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement);\n        const { token, error } = await stripe.createToken(cardElement);\n        if (error) {\n            console.error(error);\n        // Handle error, e.g., display error message to the user\n        } else {\n            // Send the token to your server for processing\n            console.log(\"Stripe Token:\", token);\n        // Implement your server-side logic to process the payment\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            style: {\n                backgroundColor: \"#4CAF50\",\n                color: \"white\",\n                border: \"0\",\n                padding: \"1vmin 2vmin\",\n                marginTop: \"1vmin\",\n                cursor: \"pointer\"\n            },\n            children: \"Pay with Card\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lalit\\\\groww\\\\groww_assignment\\\\pages\\\\cardpaymentform.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lalit\\\\groww\\\\groww_assignment\\\\pages\\\\cardpaymentform.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardPaymentForm, \"wIHge2oiU+5ey8tOPpyCcSaz/Hg=\", false, function() {\n    return [\n        _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe,\n        _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements\n    ];\n});\n_c = CardPaymentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPaymentForm);\nvar _c;\n$RefreshReg$(_c, \"CardPaymentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkcGF5bWVudGZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGdDQUFnQzs7O0FBQ047QUFDb0Q7QUFDOUUsTUFBTUksa0JBQWtCOztJQUN0QixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdDLFNBQVM7SUFDN0QsTUFBTUMsU0FBU04sa0VBQVNBO0lBQ3hCLE1BQU1PLFdBQVdOLG9FQUFXQTtJQUU1QixNQUFNTyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUksQ0FBQ0osVUFBVSxDQUFDQyxVQUFVO1lBQ3hCLGdDQUFnQztZQUNoQyxtRUFBbUU7WUFDbkU7UUFDRjtRQUVBLE1BQU1JLGNBQWNKLFNBQVNLLFVBQVUsQ0FBQ2IsZ0VBQVdBO1FBRW5ELE1BQU0sRUFBRWMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNUixPQUFPUyxXQUFXLENBQUNKO1FBRWxELElBQUlHLE9BQU87WUFDVEUsUUFBUUYsS0FBSyxDQUFDQTtRQUNkLHdEQUF3RDtRQUMxRCxPQUFPO1lBQ0wsK0NBQStDO1lBQy9DRSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCSjtRQUM3QiwwREFBMEQ7UUFDNUQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSztRQUFLQyxVQUFVWDtrQkFFZCw0RUFBQ1k7WUFDQ0MsTUFBSztZQUNMQyxPQUFPO2dCQUNMQyxpQkFBaUI7Z0JBQ2pCQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxTQUFTO2dCQUNUQyxXQUFXO2dCQUNYQyxRQUFRO1lBQ1Y7c0JBQ0Q7Ozs7Ozs7Ozs7O0FBS1A7R0E5Q00xQjs7UUFFV0YsOERBQVNBO1FBQ1BDLGdFQUFXQTs7O0tBSHhCQztBQWdETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJkcGF5bWVudGZvcm0uanM/MWUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0NhcmRQYXltZW50Rm9ybS5qc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XHJcbmNvbnN0IENhcmRQYXltZW50Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd1BheW1lbnRTdWNjZXNzLCBzZXRTaG93UGF5bWVudFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghc3RyaXBlIHx8ICFlbGVtZW50cykge1xyXG4gICAgICAvLyBTdHJpcGUuanMgaGFzIG5vdCB5ZXQgbG9hZGVkLlxyXG4gICAgICAvLyBNYWtlIHN1cmUgdG8gZGlzYWJsZSBmb3JtIHN1Ym1pc3Npb24gdW50aWwgU3RyaXBlLmpzIGhhcyBsb2FkZWQuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHsgdG9rZW4sIGVycm9yIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgLy8gSGFuZGxlIGVycm9yLCBlLmcuLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2UgdG8gdGhlIHVzZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNlbmQgdGhlIHRva2VuIHRvIHlvdXIgc2VydmVyIGZvciBwcm9jZXNzaW5nXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU3RyaXBlIFRva2VuOlwiLCB0b2tlbik7XHJcbiAgICAgIC8vIEltcGxlbWVudCB5b3VyIHNlcnZlci1zaWRlIGxvZ2ljIHRvIHByb2Nlc3MgdGhlIHBheW1lbnRcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIHsvKiA8Q2FyZEVsZW1lbnQgaWQ9XCJjYXJkRWxlbWVudFwiIG9wdGlvbnM9e3sgc3R5bGU6IHsgYmFzZTogeyBmb250U2l6ZTogJzJ2bWluJyB9IH0gfX0gLz4gKi99XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0Q0FGNTBcIixcclxuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICBib3JkZXI6IFwiMFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIxdm1pbiAydm1pblwiLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjF2bWluXCIsXHJcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBQYXkgd2l0aCBDYXJkXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUGF5bWVudEZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmRFbGVtZW50IiwidXNlU3RyaXBlIiwidXNlRWxlbWVudHMiLCJDYXJkUGF5bWVudEZvcm0iLCJzaG93UGF5bWVudFN1Y2Nlc3MiLCJzZXRTaG93UGF5bWVudFN1Y2Nlc3MiLCJ1c2VTdGF0ZSIsInN0cmlwZSIsImVsZW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhcmRFbGVtZW50IiwiZ2V0RWxlbWVudCIsInRva2VuIiwiZXJyb3IiLCJjcmVhdGVUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwib25TdWJtaXQiLCJidXR0b24iLCJ0eXBlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cardpaymentform.js\n"));

/***/ })

});