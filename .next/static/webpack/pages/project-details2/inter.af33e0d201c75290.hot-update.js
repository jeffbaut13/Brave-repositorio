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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectVideo = function(param) {\n    var projectVideoDate = param.projectVideoDate, idvideo = param.idvideo, slide = param.slide;\n    _s();\n    console.clear();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenWidth = ref1[0], setScreenWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenHeight = ref2[0], setScreenHeight = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isClicked = ref3[0], setIsClicked = ref3[1];\n    var handleClick = function() {\n        setIsClicked(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            setScreenWidth(window.innerWidth);\n            setScreenHeight(window.innerHeight);\n        };\n        handleResize(); // Actualizar los valores iniciales al cargar la página\n        window.addEventListener(\"resize\", handleResize);\n        return function() {\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                className: isClicked ? \"\" : \"hidden\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container-fluid\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"video-wrapper section-padding bg-img parallaxie valign\",\n                        \"data-overlay-dark\": \"4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"z-i full-width text-center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"w-full\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"CustomVimeo\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: isClicked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        playing: true,\n                                        volume: 0,\n                                        loop: true,\n                                        controls: true,\n                                        url: slide,\n                                        width: screenWidth + \"px\",\n                                        height: screenHeight + \"px\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    className: !isClicked ? \"iconoCerrar vid hidden\" : \"iconoCerrar vid ShowVid\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        setIsClicked(false);\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"vid-butn\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            className: true,\n                                            src: \"/img/x.png\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            },\n                                            __self: _this\n                                        })\n                                    })\n                                })\n                            ]\n                        })\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                className: \"customIcon \".concat(isClicked ? \"iconoAbrir hidden\" : \"iconoAbrir ShowVid\"),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"vid\",\n                    onClick: function(e) {\n                        e.preventDefault();\n                        setIsClicked(true);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"vid-butn\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: \"icon\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                className: \"fas fa-play\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        })\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(ProjectVideo, \"FWkawMD66IByLo3Cx/cec0hae/s=\");\n_c = ProjectVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectVideo);\nvar _c;\n$RefreshReg$(_c, \"ProjectVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LXZpZGVvL3Byb2plY3QtdmlkZW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1I7QUFDSTtBQUNSOzs7QUFHdEMsR0FBSyxDQUFDSyxZQUFZLEdBQUcsUUFBUSxRQUFrQyxDQUFDO1FBQXhDQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUN0REMsT0FBTyxDQUFDQyxLQUFLO0lBQ2IsR0FBSyxDQUFxQlQsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENVLE1BQU0sR0FBYVYsR0FBYyxLQUF6QlcsT0FBTyxHQUFJWCxHQUFjO0lBQ3hDLEdBQUssQ0FBaUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTVDWSxXQUFXLEdBQW9CWixJQUFjLEtBQWhDYSxjQUFjLEdBQUliLElBQWM7SUFDcEQsR0FBSyxDQUFtQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUNjLFlBQVksR0FBcUJkLElBQWMsS0FBakNlLGVBQWUsR0FBSWYsSUFBYztJQUN0RCxHQUFLLENBQTZCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q2dCLFNBQVMsR0FBa0JoQixJQUFjLEtBQTlCaUIsWUFBWSxHQUFJakIsSUFBYztJQUVoRCxHQUFLLENBQUNrQixXQUFXLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDekJELFlBQVksQ0FBQyxLQUFLO0lBQ3BCLENBQUM7SUFFRGhCLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixHQUFLLENBQUNrQixZQUFZLEdBQUcsUUFBUSxHQUFGLENBQUM7WUFDMUJOLGNBQWMsQ0FBQ08sTUFBTSxDQUFDQyxVQUFVO1lBQ2hDTixlQUFlLENBQUNLLE1BQU0sQ0FBQ0UsV0FBVztRQUNwQyxDQUFDO1FBRURILFlBQVksR0FBSSxDQUF1RCxFQUFDO1FBRXZFQyxNQUFLLENBQUNHLGdCQUFnQixDQUFDLENBQVEsU0FBRUosWUFBWTtRQUU5QyxNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDWkMsTUFBTSxDQUFDSSxtQkFBbUIsQ0FBQyxDQUFRLFNBQUVMLFlBQVk7UUFDbkQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNOztpRkFFRE0sQ0FBTztnQkFBQ0MsU0FBUyxFQUFFVixTQUFTLEdBQUcsQ0FBRSxJQUFHLENBQVE7Ozs7Ozs7K0ZBQzFDVyxDQUFHO29CQUFDRCxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7bUdBQzdCQyxDQUFHO3dCQUNGRCxTQUFTLEVBQUMsQ0FBd0Q7d0JBQ2xFRSxDQUFpQixvQkFBQyxDQUFHOzs7Ozs7O3dHQUVwQkQsQ0FBRzs0QkFBQ0QsU0FBUyxFQUFDLENBQTRCOzs7Ozs7OztxR0FDeENDLENBQUc7b0NBQUNELFNBQVMsRUFBQyxDQUFROzs7Ozs7OztxR0FDdEJDLENBQUc7b0NBQUNELFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzhDQUN6QlYsU0FBUyx5RUFDUGIsb0RBQVc7d0NBQ1YwQixPQUFPO3dDQUNQQyxNQUFNLEVBQUUsQ0FBQzt3Q0FDVEMsSUFBSSxFQUFFLElBQUk7d0NBQ1ZDLFFBQVE7d0NBQ1JDLEdBQUcsRUFBRTFCLEtBQUs7d0NBQ1YyQixLQUFLLEVBQUV0QixXQUFXLEdBQUcsQ0FBSTt3Q0FDekJ1QixNQUFNLEVBQUVyQixZQUFZLEdBQUcsQ0FBSTs7Ozs7Ozs7O3FHQUtoQ3NCLENBQUM7b0NBQ0FWLFNBQVMsR0FDTlYsU0FBUyxHQUNOLENBQXdCLDBCQUN4QixDQUF5QjtvQ0FFL0JxQixPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQzt3Q0FDZkEsQ0FBQyxDQUFDQyxjQUFjO3dDQUNoQnRCLFlBQVksQ0FBQyxLQUFLO29DQUNwQixDQUFDOzs7Ozs7O21IQUdBVSxDQUFHO3dDQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozt1SEFFcEJjLENBQUc7NENBQUNkLFNBQVM7NENBQUNlLEdBQUcsRUFBQyxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7aUZBUzVDaEIsQ0FBTztnQkFDTkMsU0FBUyxFQUFHLENBQVcsYUFFdEIsT0FEQ1YsU0FBUyxHQUFHLENBQW1CLHFCQUFHLENBQW9COzs7Ozs7OytGQUd2RG9CLENBQUM7b0JBQ0FWLFNBQVMsRUFBQyxDQUFLO29CQUNmVyxPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQzt3QkFDZkEsQ0FBQyxDQUFDQyxjQUFjO3dCQUNoQnRCLFlBQVksQ0FBQyxJQUFJO29CQUNuQixDQUFDOzs7Ozs7O21HQUVBVSxDQUFHO3dCQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozt1R0FDdEJnQixDQUFJOzRCQUFDaEIsU0FBUyxFQUFDLENBQU07Ozs7Ozs7MkdBQ25CaUIsQ0FBQztnQ0FBQ2pCLFNBQVMsRUFBQyxDQUFhOzs7Ozs7Ozs7Ozs7OztBQU94QyxDQUFDO0dBN0ZLdEIsWUFBWTtLQUFaQSxZQUFZO0FBK0ZsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QtdmlkZW8vcHJvamVjdC12aWRlby5qc3g/YmVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tIFwicmVhY3QtbW9kYWwtdmlkZW9cIjtcclxuaW1wb3J0IFwicmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xyXG5cclxuXHJcbmNvbnN0IFByb2plY3RWaWRlbyA9ICh7IHByb2plY3RWaWRlb0RhdGUsIGlkdmlkZW8sIHNsaWRlIH0pID0+IHtcclxuICBjb25zb2xlLmNsZWFyKCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2NyZWVuV2lkdGgsIHNldFNjcmVlbldpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzY3JlZW5IZWlnaHQsIHNldFNjcmVlbkhlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNDbGlja2VkLCBzZXRJc0NsaWNrZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNDbGlja2VkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzZXRTY3JlZW5XaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgIHNldFNjcmVlbkhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVSZXNpemUoKTsgLy8gQWN0dWFsaXphciBsb3MgdmFsb3JlcyBpbmljaWFsZXMgYWwgY2FyZ2FyIGxhIHDDoWdpbmFcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtpc0NsaWNrZWQgPyBcIlwiIDogXCJoaWRkZW5cIn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8td3JhcHBlciBzZWN0aW9uLXBhZGRpbmcgYmctaW1nIHBhcmFsbGF4aWUgdmFsaWduXCJcclxuICAgICAgICAgICAgZGF0YS1vdmVybGF5LWRhcms9XCI0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LWkgZnVsbC13aWR0aCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDdXN0b21WaW1lb1wiPlxyXG4gICAgICAgICAgICAgICAge2lzQ2xpY2tlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlpbmdcclxuICAgICAgICAgICAgICAgICAgICB2b2x1bWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vcD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sc1xyXG4gICAgICAgICAgICAgICAgICAgIHVybD17c2xpZGV9IC8vIFZpZGVvIGRpZmVyZW50ZSBwYXJhIGRpc3Bvc2l0aXZvcyBtw7N2aWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtzY3JlZW5XaWR0aCArIFwicHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3NjcmVlbkhlaWdodCArIFwicHhcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAhaXNDbGlja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImljb25vQ2VycmFyIHZpZCBoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJpY29ub0NlcnJhciB2aWQgU2hvd1ZpZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldElzQ2xpY2tlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiBBQ0EgVkEgRUwgSEdQVEEgSUNPTk8gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZC1idXRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lIHNyYz1cIi9pbWcveC5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEFDQSBWQSBFTCBIR1BUQSBJQ09OTyAqL31cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICBjbGFzc05hbWU9e2BjdXN0b21JY29uICR7XHJcbiAgICAgICAgICBpc0NsaWNrZWQgPyBcImljb25vQWJyaXIgaGlkZGVuXCIgOiBcImljb25vQWJyaXIgU2hvd1ZpZFwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidmlkXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SXNDbGlja2VkKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZC1idXRuXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheVwiPjwvaT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFZpZGVvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsVmlkZW8iLCJSZWFjdFBsYXllciIsIlByb2plY3RWaWRlbyIsInByb2plY3RWaWRlb0RhdGUiLCJpZHZpZGVvIiwic2xpZGUiLCJjb25zb2xlIiwiY2xlYXIiLCJpc09wZW4iLCJzZXRPcGVuIiwic2NyZWVuV2lkdGgiLCJzZXRTY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsInNldFNjcmVlbkhlaWdodCIsImlzQ2xpY2tlZCIsInNldElzQ2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiZGF0YS1vdmVybGF5LWRhcmsiLCJwbGF5aW5nIiwidm9sdW1lIiwibG9vcCIsImNvbnRyb2xzIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJhIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImltZyIsInNyYyIsInNwYW4iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Project-video/project-video.jsx\n");

/***/ })

});