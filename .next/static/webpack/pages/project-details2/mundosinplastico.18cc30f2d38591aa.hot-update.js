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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectVideo = function(param) {\n    var projectVideoDate = param.projectVideoDate, idvideo = param.idvideo, slide = param.slide;\n    _s();\n    console.clear();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenWidth = ref1[0], setScreenWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenHeight = ref2[0], setScreenHeight = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isClicked = ref3[0], setIsClicked = ref3[1];\n    var handleClick = function() {\n        setIsClicked(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            setScreenWidth(window.innerWidth);\n            setScreenHeight(window.innerHeight);\n        };\n        handleResize(); // Actualizar los valores iniciales al cargar la página\n        window.addEventListener(\"resize\", handleResize);\n        return function() {\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: isClicked ? \"\" : \"hidden\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container-fluid\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"video-wrapper section-padding bg-img parallaxie valign\",\n                \"data-overlay-dark\": \"4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"z-i full-width text-center\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"w-full\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"CustomVimeo\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: isClicked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                playing: true,\n                                volume: 0,\n                                loop: true,\n                                controls: true,\n                                url: slide,\n                                width: screenWidth + \"px\",\n                                height: screenHeight + \"px\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                },\n                                __self: _this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: !isClicked ? \"iconoCerrar vid hidden\" : \"iconoCerrar vid ShowVid\",\n                            onClick: function(e) {\n                                e.preventDefault();\n                                setIsClicked(false);\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"vid-butn\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"icon\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                        className: \"fas fa-play\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: !isClicked ? \"vid\" : \"hidden\",\n                            onClick: function(e) {\n                                e.preventDefault();\n                                setIsClicked(false);\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"vid-butn\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"icon\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                        className: \"fas fa-play\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            })\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_s(ProjectVideo, \"FWkawMD66IByLo3Cx/cec0hae/s=\");\n_c = ProjectVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectVideo);\nvar _c;\n$RefreshReg$(_c, \"ProjectVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LXZpZGVvL3Byb2plY3QtdmlkZW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1I7QUFDSTtBQUNSOzs7QUFFdEMsR0FBSyxDQUFDSyxZQUFZLEdBQUcsUUFBUSxRQUFrQyxDQUFDO1FBQXhDQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUN0REMsT0FBTyxDQUFDQyxLQUFLO0lBQ2IsR0FBSyxDQUFxQlQsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENVLE1BQU0sR0FBYVYsR0FBYyxLQUF6QlcsT0FBTyxHQUFJWCxHQUFjO0lBQ3hDLEdBQUssQ0FBaUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTVDWSxXQUFXLEdBQW9CWixJQUFjLEtBQWhDYSxjQUFjLEdBQUliLElBQWM7SUFDcEQsR0FBSyxDQUFtQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUNjLFlBQVksR0FBcUJkLElBQWMsS0FBakNlLGVBQWUsR0FBSWYsSUFBYztJQUN0RCxHQUFLLENBQTZCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q2dCLFNBQVMsR0FBa0JoQixJQUFjLEtBQTlCaUIsWUFBWSxHQUFJakIsSUFBYztJQUVoRCxHQUFLLENBQUNrQixXQUFXLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUN6QkQsWUFBWSxDQUFDLEtBQUs7SUFDcEIsQ0FBQztJQUVEaEIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNrQixZQUFZLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztZQUMxQk4sY0FBYyxDQUFDTyxNQUFNLENBQUNDLFVBQVU7WUFDaENOLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDRSxXQUFXO1FBQ3BDLENBQUM7UUFFREgsWUFBWSxHQUFJLENBQXVELEVBQUM7UUFFdkVDLE1BQUssQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBUSxTQUFFSixZQUFZO1FBRTlDLE1BQU0sQ0FBQyxRQUNYLEdBRGlCLENBQUM7WUFDWkMsTUFBTSxDQUFDSSxtQkFBbUIsQ0FBQyxDQUFRLFNBQUVMLFlBQVk7UUFDbkQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLHNFQUNITSxDQUFPO1FBQUNDLFNBQVMsRUFBRVYsU0FBUyxHQUFHLENBQUUsSUFBRyxDQUFROzs7Ozs7O3VGQUMxQ1csQ0FBRztZQUFDRCxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7MkZBQzdCQyxDQUFHO2dCQUNGRCxTQUFTLEVBQUMsQ0FBd0Q7Z0JBQ2xFRSxDQUFpQixvQkFBQyxDQUFHOzs7Ozs7O2dHQUVwQkQsQ0FBRztvQkFBQ0QsU0FBUyxFQUFDLENBQTRCOzs7Ozs7Ozs2RkFDeENDLENBQUc7NEJBQUNELFNBQVMsRUFBQyxDQUFROzs7Ozs7Ozs2RkFDdEJDLENBQUc7NEJBQUNELFNBQVMsRUFBQyxDQUFhOzs7Ozs7O3NDQUN6QlYsU0FBUyx5RUFDUGIsb0RBQVc7Z0NBQ1YwQixPQUFPO2dDQUNQQyxNQUFNLEVBQUUsQ0FBQztnQ0FDVEMsSUFBSSxFQUFFLElBQUk7Z0NBQ1ZDLFFBQVE7Z0NBQ1JDLEdBQUcsRUFBRTFCLEtBQUs7Z0NBQ1YyQixLQUFLLEVBQUV0QixXQUFXLEdBQUcsQ0FBSTtnQ0FDekJ1QixNQUFNLEVBQUVyQixZQUFZLEdBQUcsQ0FBSTs7Ozs7Ozs7OzZGQUtoQ3NCLENBQUM7NEJBQ0FWLFNBQVMsR0FDTlYsU0FBUyxHQUNOLENBQXdCLDBCQUN4QixDQUF5Qjs0QkFFL0JxQixPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztnQ0FDZkEsQ0FBQyxDQUFDQyxjQUFjO2dDQUNoQnRCLFlBQVksQ0FBQyxLQUFLOzRCQUNwQixDQUFDOzs7Ozs7OzJHQUVBVSxDQUFHO2dDQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7OzsrR0FDdEJjLENBQUk7b0NBQUNkLFNBQVMsRUFBQyxDQUFNOzs7Ozs7O21IQUNuQmUsQ0FBQzt3Q0FBQ2YsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7Ozs7OzZGQUkvQlUsQ0FBQzs0QkFDQVYsU0FBUyxHQUFHVixTQUFTLEdBQUcsQ0FBSyxPQUFHLENBQVE7NEJBQ3hDcUIsT0FBTyxFQUFFLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7Z0NBQ2ZBLENBQUMsQ0FBQ0MsY0FBYztnQ0FDaEJ0QixZQUFZLENBQUMsS0FBSzs0QkFDcEIsQ0FBQzs7Ozs7OzsyR0FFQVUsQ0FBRztnQ0FBQ0QsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7K0dBQ3RCYyxDQUFJO29DQUFDZCxTQUFTLEVBQUMsQ0FBTTs7Ozs7OzttSEFDbkJlLENBQUM7d0NBQUNmLFNBQVMsRUFBQyxDQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FBUzVDLENBQUM7R0FuRkt0QixZQUFZO0tBQVpBLFlBQVk7QUFxRmxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdC12aWRlby9wcm9qZWN0LXZpZGVvLmpzeD9iZWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tIFwicmVhY3QtbW9kYWwtdmlkZW9cIjtcbmltcG9ydCBcInJlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5jc3NcIjtcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XG5cbmNvbnN0IFByb2plY3RWaWRlbyA9ICh7IHByb2plY3RWaWRlb0RhdGUsIGlkdmlkZW8sIHNsaWRlIH0pID0+IHtcbiAgY29uc29sZS5jbGVhcigpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2NyZWVuV2lkdGgsIHNldFNjcmVlbldpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2NyZWVuSGVpZ2h0LCBzZXRTY3JlZW5IZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0NsaWNrZWQsIHNldElzQ2xpY2tlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRJc0NsaWNrZWQoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgc2V0U2NyZWVuV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgc2V0U2NyZWVuSGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfTtcblxuICAgIGhhbmRsZVJlc2l6ZSgpOyAvLyBBY3R1YWxpemFyIGxvcyB2YWxvcmVzIGluaWNpYWxlcyBhbCBjYXJnYXIgbGEgcMOhZ2luYVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2lzQ2xpY2tlZCA/IFwiXCIgOiBcImhpZGRlblwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby13cmFwcGVyIHNlY3Rpb24tcGFkZGluZyBiZy1pbWcgcGFyYWxsYXhpZSB2YWxpZ25cIlxuICAgICAgICAgIGRhdGEtb3ZlcmxheS1kYXJrPVwiNFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotaSBmdWxsLXdpZHRoIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDdXN0b21WaW1lb1wiPlxuICAgICAgICAgICAgICB7aXNDbGlja2VkICYmIChcbiAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcbiAgICAgICAgICAgICAgICAgIHBsYXlpbmdcbiAgICAgICAgICAgICAgICAgIHZvbHVtZT17MH1cbiAgICAgICAgICAgICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgdXJsPXtzbGlkZX0gLy8gVmlkZW8gZGlmZXJlbnRlIHBhcmEgZGlzcG9zaXRpdm9zIG3Ds3ZpbGVzXG4gICAgICAgICAgICAgICAgICB3aWR0aD17c2NyZWVuV2lkdGggKyBcInB4XCJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e3NjcmVlbkhlaWdodCArIFwicHhcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgIWlzQ2xpY2tlZFxuICAgICAgICAgICAgICAgICAgPyBcImljb25vQ2VycmFyIHZpZCBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgOiBcImljb25vQ2VycmFyIHZpZCBTaG93VmlkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZXRJc0NsaWNrZWQoZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZC1idXRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17IWlzQ2xpY2tlZCA/IFwidmlkXCIgOiBcImhpZGRlblwifVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZXRJc0NsaWNrZWQoZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZC1idXRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0VmlkZW87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsVmlkZW8iLCJSZWFjdFBsYXllciIsIlByb2plY3RWaWRlbyIsInByb2plY3RWaWRlb0RhdGUiLCJpZHZpZGVvIiwic2xpZGUiLCJjb25zb2xlIiwiY2xlYXIiLCJpc09wZW4iLCJzZXRPcGVuIiwic2NyZWVuV2lkdGgiLCJzZXRTY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsInNldFNjcmVlbkhlaWdodCIsImlzQ2xpY2tlZCIsInNldElzQ2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiZGF0YS1vdmVybGF5LWRhcmsiLCJwbGF5aW5nIiwidm9sdW1lIiwibG9vcCIsImNvbnRyb2xzIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJhIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNwYW4iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Project-video/project-video.jsx\n");

/***/ })

});