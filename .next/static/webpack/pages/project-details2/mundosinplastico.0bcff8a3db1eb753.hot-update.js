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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectVideo = function(param) {\n    var projectVideoDate = param.projectVideoDate, idvideo = param.idvideo, slide = param.slide;\n    _s();\n    console.clear();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenWidth = ref1[0], setScreenWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenHeight = ref2[0], setScreenHeight = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isClicked = ref3[0], setIsClicked = ref3[1];\n    var handleClick = function() {\n        setIsClicked(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            setScreenWidth(window.innerWidth);\n            setScreenHeight(window.innerHeight);\n        };\n        handleResize(); // Actualizar los valores iniciales al cargar la página\n        window.addEventListener(\"resize\", handleResize);\n        return function() {\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: isClicked ? \"\" : \"hidden\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container-fluid\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"video-wrapper section-padding bg-img parallaxie valign\",\n                \"data-overlay-dark\": \"4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"z-i full-width text-center\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"w-full\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"CustomVimeo\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: isClicked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                playing: true,\n                                volume: 0,\n                                loop: true,\n                                controls: true,\n                                url: slide,\n                                width: screenWidth + \"px\",\n                                height: screenHeight + \"px\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                },\n                                __self: _this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: !isClicked ? \"iconoCerrar vid hidden\" : \"iconoCerrar vid ShowVid\",\n                            onClick: function(e) {\n                                e.preventDefault();\n                                setIsClicked(false);\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"vid-butn\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"icon\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                        className: \"fas fa-play\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: !isClicked ? \"vid iconoPlay\" : \"hidden\",\n                            onClick: function(e) {\n                                e.preventDefault();\n                                setIsClicked(false);\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"vid-butn\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"icon\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                        className: \"fas fa-play\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\jandresbvega\\\\Desktop\\\\brave\\\\themeforest-hP8waxdh-vie-react-creative-portfolio-agency-template\\\\Main_files\\\\vie\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            })\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_s(ProjectVideo, \"FWkawMD66IByLo3Cx/cec0hae/s=\");\n_c = ProjectVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectVideo);\nvar _c;\n$RefreshReg$(_c, \"ProjectVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LXZpZGVvL3Byb2plY3QtdmlkZW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1I7QUFDSTtBQUNSOzs7QUFFdEMsR0FBSyxDQUFDSyxZQUFZLEdBQUcsUUFBUSxRQUFrQyxDQUFDO1FBQXhDQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUN0REMsT0FBTyxDQUFDQyxLQUFLO0lBQ2IsR0FBSyxDQUFxQlQsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENVLE1BQU0sR0FBYVYsR0FBYyxLQUF6QlcsT0FBTyxHQUFJWCxHQUFjO0lBQ3hDLEdBQUssQ0FBaUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTVDWSxXQUFXLEdBQW9CWixJQUFjLEtBQWhDYSxjQUFjLEdBQUliLElBQWM7SUFDcEQsR0FBSyxDQUFtQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUNjLFlBQVksR0FBcUJkLElBQWMsS0FBakNlLGVBQWUsR0FBSWYsSUFBYztJQUN0RCxHQUFLLENBQTZCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q2dCLFNBQVMsR0FBa0JoQixJQUFjLEtBQTlCaUIsWUFBWSxHQUFJakIsSUFBYztJQUVoRCxHQUFLLENBQUNrQixXQUFXLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUN6QkQsWUFBWSxDQUFDLEtBQUs7SUFDcEIsQ0FBQztJQUVEaEIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNrQixZQUFZLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztZQUMxQk4sY0FBYyxDQUFDTyxNQUFNLENBQUNDLFVBQVU7WUFDaENOLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDRSxXQUFXO1FBQ3BDLENBQUM7UUFFREgsWUFBWSxHQUFJLENBQXVELEVBQUM7UUFFdkVDLE1BQUssQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBUSxTQUFFSixZQUFZO1FBRTlDLE1BQU0sQ0FBQyxRQUNYLEdBRGlCLENBQUM7WUFDWkMsTUFBTSxDQUFDSSxtQkFBbUIsQ0FBQyxDQUFRLFNBQUVMLFlBQVk7UUFDbkQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLHNFQUNITSxDQUFPO1FBQUNDLFNBQVMsRUFBRVYsU0FBUyxHQUFHLENBQUUsSUFBRyxDQUFROzs7Ozs7O3VGQUMxQ1csQ0FBRztZQUFDRCxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7MkZBQzdCQyxDQUFHO2dCQUNGRCxTQUFTLEVBQUMsQ0FBd0Q7Z0JBQ2xFRSxDQUFpQixvQkFBQyxDQUFHOzs7Ozs7O2dHQUVwQkQsQ0FBRztvQkFBQ0QsU0FBUyxFQUFDLENBQTRCOzs7Ozs7Ozs2RkFDeENDLENBQUc7NEJBQUNELFNBQVMsRUFBQyxDQUFROzs7Ozs7Ozs2RkFDdEJDLENBQUc7NEJBQUNELFNBQVMsRUFBQyxDQUFhOzs7Ozs7O3NDQUN6QlYsU0FBUyx5RUFDUGIsb0RBQVc7Z0NBQ1YwQixPQUFPO2dDQUNQQyxNQUFNLEVBQUUsQ0FBQztnQ0FDVEMsSUFBSSxFQUFFLElBQUk7Z0NBQ1ZDLFFBQVE7Z0NBQ1JDLEdBQUcsRUFBRTFCLEtBQUs7Z0NBQ1YyQixLQUFLLEVBQUV0QixXQUFXLEdBQUcsQ0FBSTtnQ0FDekJ1QixNQUFNLEVBQUVyQixZQUFZLEdBQUcsQ0FBSTs7Ozs7Ozs7OzZGQUtoQ3NCLENBQUM7NEJBQ0FWLFNBQVMsR0FDTlYsU0FBUyxHQUNOLENBQXdCLDBCQUN4QixDQUF5Qjs0QkFFL0JxQixPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztnQ0FDZkEsQ0FBQyxDQUFDQyxjQUFjO2dDQUNoQnRCLFlBQVksQ0FBQyxLQUFLOzRCQUNwQixDQUFDOzs7Ozs7OzJHQUVBVSxDQUFHO2dDQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7OzsrR0FDdEJjLENBQUk7b0NBQUNkLFNBQVMsRUFBQyxDQUFNOzs7Ozs7O21IQUNuQmUsQ0FBQzt3Q0FBQ2YsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7Ozs7OzZGQUkvQlUsQ0FBQzs0QkFDQVYsU0FBUyxHQUFHVixTQUFTLEdBQUcsQ0FBZSxpQkFBRyxDQUFROzRCQUNsRHFCLE9BQU8sRUFBRSxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO2dDQUNmQSxDQUFDLENBQUNDLGNBQWM7Z0NBQ2hCdEIsWUFBWSxDQUFDLEtBQUs7NEJBQ3BCLENBQUM7Ozs7Ozs7MkdBRUFVLENBQUc7Z0NBQUNELFNBQVMsRUFBQyxDQUFVOzs7Ozs7OytHQUN0QmMsQ0FBSTtvQ0FBQ2QsU0FBUyxFQUFDLENBQU07Ozs7Ozs7bUhBQ25CZSxDQUFDO3dDQUFDZixTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QyxDQUFDO0dBbkZLdEIsWUFBWTtLQUFaQSxZQUFZO0FBcUZsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QtdmlkZW8vcHJvamVjdC12aWRlby5qc3g/YmVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSBcInJlYWN0LW1vZGFsLXZpZGVvXCI7XG5pbXBvcnQgXCJyZWFjdC1tb2RhbC12aWRlby9jc3MvbW9kYWwtdmlkZW8uY3NzXCI7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xuXG5jb25zdCBQcm9qZWN0VmlkZW8gPSAoeyBwcm9qZWN0VmlkZW9EYXRlLCBpZHZpZGVvLCBzbGlkZSB9KSA9PiB7XG4gIGNvbnNvbGUuY2xlYXIoKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NjcmVlbldpZHRoLCBzZXRTY3JlZW5XaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NjcmVlbkhlaWdodCwgc2V0U2NyZWVuSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNDbGlja2VkLCBzZXRJc0NsaWNrZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNDbGlja2VkKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNldFNjcmVlbldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgIHNldFNjcmVlbkhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIH07XG5cbiAgICBoYW5kbGVSZXNpemUoKTsgLy8gQWN0dWFsaXphciBsb3MgdmFsb3JlcyBpbmljaWFsZXMgYWwgY2FyZ2FyIGxhIHDDoWdpbmFcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtpc0NsaWNrZWQgPyBcIlwiIDogXCJoaWRkZW5cIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8td3JhcHBlciBzZWN0aW9uLXBhZGRpbmcgYmctaW1nIHBhcmFsbGF4aWUgdmFsaWduXCJcbiAgICAgICAgICBkYXRhLW92ZXJsYXktZGFyaz1cIjRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LWkgZnVsbC13aWR0aCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ3VzdG9tVmltZW9cIj5cbiAgICAgICAgICAgICAge2lzQ2xpY2tlZCAmJiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyXG4gICAgICAgICAgICAgICAgICBwbGF5aW5nXG4gICAgICAgICAgICAgICAgICB2b2x1bWU9ezB9XG4gICAgICAgICAgICAgICAgICBsb29wPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgICAgIHVybD17c2xpZGV9IC8vIFZpZGVvIGRpZmVyZW50ZSBwYXJhIGRpc3Bvc2l0aXZvcyBtw7N2aWxlc1xuICAgICAgICAgICAgICAgICAgd2lkdGg9e3NjcmVlbldpZHRoICsgXCJweFwifVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtzY3JlZW5IZWlnaHQgKyBcInB4XCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICFpc0NsaWNrZWRcbiAgICAgICAgICAgICAgICAgID8gXCJpY29ub0NlcnJhciB2aWQgaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIDogXCJpY29ub0NlcnJhciB2aWQgU2hvd1ZpZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0SXNDbGlja2VkKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWQtYnV0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5XCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9eyFpc0NsaWNrZWQgPyBcInZpZCBpY29ub1BsYXlcIiA6IFwiaGlkZGVuXCJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNldElzQ2xpY2tlZChmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkLWJ1dG5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RWaWRlbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9kYWxWaWRlbyIsIlJlYWN0UGxheWVyIiwiUHJvamVjdFZpZGVvIiwicHJvamVjdFZpZGVvRGF0ZSIsImlkdmlkZW8iLCJzbGlkZSIsImNvbnNvbGUiLCJjbGVhciIsImlzT3BlbiIsInNldE9wZW4iLCJzY3JlZW5XaWR0aCIsInNldFNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0Iiwic2V0U2NyZWVuSGVpZ2h0IiwiaXNDbGlja2VkIiwic2V0SXNDbGlja2VkIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJkYXRhLW92ZXJsYXktZGFyayIsInBsYXlpbmciLCJ2b2x1bWUiLCJsb29wIiwiY29udHJvbHMiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImEiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3BhbiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Project-video/project-video.jsx\n");

/***/ })

});