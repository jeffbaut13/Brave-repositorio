"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project-details2/mundosinplastico",{

/***/ "./src/components/Project-video/project-video.jsx":
/*!********************************************************!*\
  !*** ./src/components/Project-video/project-video.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectVideo = function(param) {\n    var projectVideoDate = param.projectVideoDate, idvideo = param.idvideo, slide = param.slide;\n    _s();\n    console.clear();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenWidth = ref1[0], setScreenWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenHeight = ref2[0], setScreenHeight = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isClicked = ref3[0], setIsClicked = ref3[1];\n    var handleClick = function() {\n        setIsClicked(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            setScreenWidth(window.innerWidth);\n            setScreenHeight(window.innerHeight);\n        };\n        handleResize(); // Actualizar los valores iniciales al cargar la página\n        window.addEventListener(\"resize\", handleResize);\n        return function() {\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                className: isClicked ? \"\" : \"hidden\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container-fluid\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"video-wrapper section-padding bg-img parallaxie valign\",\n                        \"data-overlay-dark\": \"4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"z-i full-width text-center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"w-full\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"CustomVimeo\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: isClicked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        playing: true,\n                                        volume: 0,\n                                        loop: true,\n                                        controls: true,\n                                        url: slide,\n                                        width: screenWidth + \"px\",\n                                        height: screenHeight + \"px\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    className: !isClicked ? \"iconoCerrar vid hidden\" : \"iconoCerrar vid ShowVid\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        setIsClicked(false);\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"vid-butn\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            className: \"icon\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                className: \"fas fa-play\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 21\n                                                },\n                                                __self: _this\n                                            })\n                                        })\n                                    })\n                                })\n                            ]\n                        })\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                className: \"customIcon \".concat(isClicked ? \"iconoAbrir hidden\" : \"iconoAbrir ShowVid\"),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"vid\",\n                    onClick: function(e) {\n                        e.preventDefault();\n                        setIsClicked(true);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"vid-butn\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: \"icon\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                className: \"fas fa-play\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        })\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(ProjectVideo, \"FWkawMD66IByLo3Cx/cec0hae/s=\");\n_c = ProjectVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectVideo);\nvar _c;\n$RefreshReg$(_c, \"ProjectVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LXZpZGVvL3Byb2plY3QtdmlkZW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1I7QUFDSTtBQUNSOzs7QUFFdEMsR0FBSyxDQUFDSyxZQUFZLEdBQUcsUUFBUSxRQUFrQyxDQUFDO1FBQXhDQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUN0REMsT0FBTyxDQUFDQyxLQUFLO0lBQ2IsR0FBSyxDQUFxQlQsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENVLE1BQU0sR0FBYVYsR0FBYyxLQUF6QlcsT0FBTyxHQUFJWCxHQUFjO0lBQ3hDLEdBQUssQ0FBaUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTVDWSxXQUFXLEdBQW9CWixJQUFjLEtBQWhDYSxjQUFjLEdBQUliLElBQWM7SUFDcEQsR0FBSyxDQUFtQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUNjLFlBQVksR0FBcUJkLElBQWMsS0FBakNlLGVBQWUsR0FBSWYsSUFBYztJQUN0RCxHQUFLLENBQTZCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q2dCLFNBQVMsR0FBa0JoQixJQUFjLEtBQTlCaUIsWUFBWSxHQUFJakIsSUFBYztJQUVoRCxHQUFLLENBQUNrQixXQUFXLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUN6QkQsWUFBWSxDQUFDLEtBQUs7SUFDcEIsQ0FBQztJQUVEaEIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNrQixZQUFZLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztZQUMxQk4sY0FBYyxDQUFDTyxNQUFNLENBQUNDLFVBQVU7WUFDaENOLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDRSxXQUFXO1FBQ3BDLENBQUM7UUFFREgsWUFBWSxHQUFJLENBQXVELEVBQUM7UUFFdkVDLE1BQUssQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBUSxTQUFFSixZQUFZO1FBRTlDLE1BQU0sQ0FBQyxRQUNYLEdBRGlCLENBQUM7WUFDWkMsTUFBTSxDQUFDSSxtQkFBbUIsQ0FBQyxDQUFRLFNBQUVMLFlBQVk7UUFDbkQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNOztpRkFFRE0sQ0FBTztnQkFBQ0MsU0FBUyxFQUFFVixTQUFTLEdBQUcsQ0FBRSxJQUFHLENBQVE7Ozs7Ozs7K0ZBQzFDVyxDQUFHO29CQUFDRCxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7bUdBQzdCQyxDQUFHO3dCQUNGRCxTQUFTLEVBQUMsQ0FBd0Q7d0JBQ2xFRSxDQUFpQixvQkFBQyxDQUFHOzs7Ozs7O3dHQUVwQkQsQ0FBRzs0QkFBQ0QsU0FBUyxFQUFDLENBQTRCOzs7Ozs7OztxR0FDeENDLENBQUc7b0NBQUNELFNBQVMsRUFBQyxDQUFROzs7Ozs7OztxR0FDdEJDLENBQUc7b0NBQUNELFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzhDQUN6QlYsU0FBUyx5RUFDUGIsb0RBQVc7d0NBQ1YwQixPQUFPO3dDQUNQQyxNQUFNLEVBQUUsQ0FBQzt3Q0FDVEMsSUFBSSxFQUFFLElBQUk7d0NBQ1ZDLFFBQVE7d0NBQ1JDLEdBQUcsRUFBRTFCLEtBQUs7d0NBQ1YyQixLQUFLLEVBQUV0QixXQUFXLEdBQUcsQ0FBSTt3Q0FDekJ1QixNQUFNLEVBQUVyQixZQUFZLEdBQUcsQ0FBSTs7Ozs7Ozs7O3FHQUtoQ3NCLENBQUM7b0NBQ0FWLFNBQVMsR0FDTlYsU0FBUyxHQUNOLENBQXdCLDBCQUN4QixDQUF5QjtvQ0FFL0JxQixPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQzt3Q0FDZkEsQ0FBQyxDQUFDQyxjQUFjO3dDQUNoQnRCLFlBQVksQ0FBQyxLQUFLO29DQUNwQixDQUFDOzs7Ozs7O21IQUdBVSxDQUFHO3dDQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozt1SEFDdEJjLENBQUk7NENBQUNkLFNBQVMsRUFBQyxDQUFNOzs7Ozs7OzJIQUNuQmUsQ0FBQztnREFBQ2YsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7aUZBU3ZDRCxDQUFPO2dCQUNOQyxTQUFTLEVBQUcsQ0FBVyxhQUV0QixPQURDVixTQUFTLEdBQUcsQ0FBbUIscUJBQUcsQ0FBb0I7Ozs7Ozs7K0ZBR3ZEb0IsQ0FBQztvQkFDQVYsU0FBUyxFQUFDLENBQUs7b0JBQ2ZXLE9BQU8sRUFBRSxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO3dCQUNmQSxDQUFDLENBQUNDLGNBQWM7d0JBQ2hCdEIsWUFBWSxDQUFDLElBQUk7b0JBQ25CLENBQUM7Ozs7Ozs7bUdBRUFVLENBQUc7d0JBQUNELFNBQVMsRUFBQyxDQUFVOzs7Ozs7O3VHQUN0QmMsQ0FBSTs0QkFBQ2QsU0FBUyxFQUFDLENBQU07Ozs7Ozs7MkdBQ25CZSxDQUFDO2dDQUFDZixTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7Ozs7Ozs7QUFPeEMsQ0FBQztHQTdGS3RCLFlBQVk7S0FBWkEsWUFBWTtBQStGbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LXZpZGVvL3Byb2plY3QtdmlkZW8uanN4P2JlZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gXCJyZWFjdC1tb2RhbC12aWRlb1wiO1xuaW1wb3J0IFwicmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLmNzc1wiO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcblxuY29uc3QgUHJvamVjdFZpZGVvID0gKHsgcHJvamVjdFZpZGVvRGF0ZSwgaWR2aWRlbywgc2xpZGUgfSkgPT4ge1xuICBjb25zb2xlLmNsZWFyKCk7XG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzY3JlZW5XaWR0aCwgc2V0U2NyZWVuV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzY3JlZW5IZWlnaHQsIHNldFNjcmVlbkhlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzQ2xpY2tlZCwgc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzQ2xpY2tlZChmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBzZXRTY3JlZW5XaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICBzZXRTY3JlZW5IZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlUmVzaXplKCk7IC8vIEFjdHVhbGl6YXIgbG9zIHZhbG9yZXMgaW5pY2lhbGVzIGFsIGNhcmdhciBsYSBww6FnaW5hXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2lzQ2xpY2tlZCA/IFwiXCIgOiBcImhpZGRlblwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby13cmFwcGVyIHNlY3Rpb24tcGFkZGluZyBiZy1pbWcgcGFyYWxsYXhpZSB2YWxpZ25cIlxuICAgICAgICAgICAgZGF0YS1vdmVybGF5LWRhcms9XCI0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotaSBmdWxsLXdpZHRoIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ3VzdG9tVmltZW9cIj5cbiAgICAgICAgICAgICAgICB7aXNDbGlja2VkICYmIChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgICAgICAgICBwbGF5aW5nXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZT17MH1cbiAgICAgICAgICAgICAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtzbGlkZX0gLy8gVmlkZW8gZGlmZXJlbnRlIHBhcmEgZGlzcG9zaXRpdm9zIG3Ds3ZpbGVzXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtzY3JlZW5XaWR0aCArIFwicHhcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtzY3JlZW5IZWlnaHQgKyBcInB4XCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICFpc0NsaWNrZWRcbiAgICAgICAgICAgICAgICAgICAgPyBcImljb25vQ2VycmFyIHZpZCBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbm9DZXJyYXIgdmlkIFNob3dWaWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgc2V0SXNDbGlja2VkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgey8qIEFDQSBWQSBFTCBIR1BUQSBJQ09OTyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZC1idXRuXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiBBQ0EgVkEgRUwgSEdQVEEgSUNPTk8gKi99XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGNsYXNzTmFtZT17YGN1c3RvbUljb24gJHtcbiAgICAgICAgICBpc0NsaWNrZWQgPyBcImljb25vQWJyaXIgaGlkZGVuXCIgOiBcImljb25vQWJyaXIgU2hvd1ZpZFwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cInZpZFwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldElzQ2xpY2tlZCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWQtYnV0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFZpZGVvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbFZpZGVvIiwiUmVhY3RQbGF5ZXIiLCJQcm9qZWN0VmlkZW8iLCJwcm9qZWN0VmlkZW9EYXRlIiwiaWR2aWRlbyIsInNsaWRlIiwiY29uc29sZSIsImNsZWFyIiwiaXNPcGVuIiwic2V0T3BlbiIsInNjcmVlbldpZHRoIiwic2V0U2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJzZXRTY3JlZW5IZWlnaHQiLCJpc0NsaWNrZWQiLCJzZXRJc0NsaWNrZWQiLCJoYW5kbGVDbGljayIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImRhdGEtb3ZlcmxheS1kYXJrIiwicGxheWluZyIsInZvbHVtZSIsImxvb3AiLCJjb250cm9scyIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiYSIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzcGFuIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Project-video/project-video.jsx\n");

/***/ })

});