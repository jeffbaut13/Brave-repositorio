"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project-details2/inter",{

/***/ "./src/components/Project-video/project-video.jsx":
/*!********************************************************!*\
  !*** ./src/components/Project-video/project-video.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectVideo = function(param) {\n    var projectVideoDate = param.projectVideoDate, idvideo = param.idvideo;\n    _s();\n    console.clear();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setOpen = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container-fluid\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"video-wrapper section-padding bg-img parallaxie valign\",\n                style: {\n                    backgroundImage: \"url(\".concat(projectVideoDate, \")\")\n                },\n                \"data-overlay-dark\": \"4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"z-i full-width text-center\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"Vimeo\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReactPlayer, {\n                                playing: true,\n                                loop: true,\n                                muted: true,\n                                controls: false,\n                                url: isMobile ? slide.mobileVideo : slide.video,\n                                width: screenWidth + \"px\",\n                                height: screenHeight + \"px\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        }),\n                         true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_modal_video__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            channel: \"vimeo\",\n                            autoplay: true,\n                            isOpen: isOpen,\n                            videoId: idvideo,\n                            onClose: function() {\n                                return setOpen(false);\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"vid\",\n                            onClick: function(e) {\n                                e.preventDefault();\n                                setOpen(true);\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"vid-butn\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"icon\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                        className: \"fas fa-play\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            })\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_s(ProjectVideo, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = ProjectVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectVideo);\nvar _c;\n$RefreshReg$(_c, \"ProjectVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LXZpZGVvL3Byb2plY3QtdmlkZW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDRztBQUNJOzs7QUFFOUMsR0FBSyxDQUFDRyxZQUFZLEdBQUcsUUFBUSxRQUEyQixDQUFDO1FBQWpDQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUFFQyxPQUFPLFNBQVBBLE9BQU87O0lBQy9DQyxPQUFPLENBQUNDLEtBQUs7SUFDYixHQUFLLENBQXFCTixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFoQ08sTUFBTSxHQUFhUCxHQUFjLEtBQXpCUSxPQUFPLEdBQUlSLEdBQWM7SUFDeEMsTUFBTSxzRUFDSFMsQ0FBTzs7Ozs7Ozt1RkFDTEMsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7MkZBQzdCRCxDQUFHO2dCQUNGQyxTQUFTLEVBQUMsQ0FBd0Q7Z0JBQ2xFQyxLQUFLLEVBQUUsQ0FBQztvQkFDTkMsZUFBZSxFQUFHLENBQUksTUFBbUIsTUFBQyxDQUFsQlYsZ0JBQWdCLEVBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRFcsQ0FBaUIsb0JBQUMsQ0FBRzs7Ozs7OztnR0FFcEJKLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUE0Qjs7Ozs7Ozs7NkZBQ3hDRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7OzsyR0FDbkJJLFdBQVc7Z0NBQ1ZDLE9BQU8sRUFBRSxJQUFJO2dDQUNiQyxJQUFJLEVBQUUsSUFBSTtnQ0FDVkMsS0FBSyxFQUFFLElBQUk7Z0NBQ1hDLFFBQVEsRUFBRSxLQUFLO2dDQUNmQyxHQUFHLEVBQUVDLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsS0FBSztnQ0FDL0NDLEtBQUssRUFBRUMsV0FBVyxHQUFHLENBQUk7Z0NBQ3pCQyxNQUFNLEVBQUVDLFlBQVksR0FBRyxDQUFJOzs7Ozs7Ozs7d0JBSTlCLEtBQTZCLHlFQUMzQjNCLHlEQUFVOzRCQUNUNEIsT0FBTyxFQUFDLENBQU87NEJBQ2ZDLFFBQVEsRUFBRSxJQUFJOzRCQUNkdkIsTUFBTSxFQUFFQSxNQUFNOzRCQUNkd0IsT0FBTyxFQUFFM0IsT0FBTzs0QkFDaEI0QixPQUFPLEVBQUUsUUFBUTtnQ0FBRnhCLE1BQU0sQ0FBTkEsT0FBTyxDQUFDLEtBQUs7Ozs7Ozs7Ozs2RkFHL0J5QixDQUFDOzRCQUNBdEIsU0FBUyxFQUFDLENBQUs7NEJBQ2Z1QixPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztnQ0FDZkEsQ0FBQyxDQUFDQyxjQUFjO2dDQUNoQjVCLE9BQU8sQ0FBQyxJQUFJOzRCQUNkLENBQUM7Ozs7Ozs7MkdBRUFFLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFVOzs7Ozs7OytHQUN0QjBCLENBQUk7b0NBQUMxQixTQUFTLEVBQUMsQ0FBTTs7Ozs7OzttSEFDbkIyQixDQUFDO3dDQUFDM0IsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTNUMsQ0FBQztHQXJES1QsWUFBWTtLQUFaQSxZQUFZO0FBdURsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QtdmlkZW8vcHJvamVjdC12aWRlby5qc3g/YmVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gXCJyZWFjdC1tb2RhbC12aWRlb1wiO1xuaW1wb3J0IFwicmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLmNzc1wiO1xuXG5jb25zdCBQcm9qZWN0VmlkZW8gPSAoeyBwcm9qZWN0VmlkZW9EYXRlLCBpZHZpZGVvIH0pID0+IHtcbiAgY29uc29sZS5jbGVhcigpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLXdyYXBwZXIgc2VjdGlvbi1wYWRkaW5nIGJnLWltZyBwYXJhbGxheGllIHZhbGlnblwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2plY3RWaWRlb0RhdGV9KWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBkYXRhLW92ZXJsYXktZGFyaz1cIjRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LWkgZnVsbC13aWR0aCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJWaW1lb1wiPlxuICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcbiAgICAgICAgICAgICAgICBwbGF5aW5nPXt0cnVlfSAvLyBSZXByb2R1Y2lyIHNvbG8gc2kgbm8gZXMgdW4gZGlzcG9zaXRpdm8gbcOzdmlsXG4gICAgICAgICAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBtdXRlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjb250cm9scz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgdXJsPXtpc01vYmlsZSA/IHNsaWRlLm1vYmlsZVZpZGVvIDogc2xpZGUudmlkZW99IC8vIFZpZGVvIGRpZmVyZW50ZSBwYXJhIGRpc3Bvc2l0aXZvcyBtw7N2aWxlc1xuICAgICAgICAgICAgICAgIHdpZHRoPXtzY3JlZW5XaWR0aCArIFwicHhcIn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e3NjcmVlbkhlaWdodCArIFwicHhcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7dHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAoXG4gICAgICAgICAgICAgIDxNb2RhbFZpZGVvXG4gICAgICAgICAgICAgICAgY2hhbm5lbD1cInZpbWVvXCJcbiAgICAgICAgICAgICAgICBhdXRvcGxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgICAgICB2aWRlb0lkPXtpZHZpZGVvfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkLWJ1dG5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RWaWRlbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTW9kYWxWaWRlbyIsIlByb2plY3RWaWRlbyIsInByb2plY3RWaWRlb0RhdGUiLCJpZHZpZGVvIiwiY29uc29sZSIsImNsZWFyIiwiaXNPcGVuIiwic2V0T3BlbiIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImRhdGEtb3ZlcmxheS1kYXJrIiwiUmVhY3RQbGF5ZXIiLCJwbGF5aW5nIiwibG9vcCIsIm11dGVkIiwiY29udHJvbHMiLCJ1cmwiLCJpc01vYmlsZSIsInNsaWRlIiwibW9iaWxlVmlkZW8iLCJ2aWRlbyIsIndpZHRoIiwic2NyZWVuV2lkdGgiLCJoZWlnaHQiLCJzY3JlZW5IZWlnaHQiLCJjaGFubmVsIiwiYXV0b3BsYXkiLCJ2aWRlb0lkIiwib25DbG9zZSIsImEiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3BhbiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Project-video/project-video.jsx\n");

/***/ })

});