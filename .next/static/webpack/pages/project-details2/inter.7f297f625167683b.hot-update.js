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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var _public_img_x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/img/x.png */ \"./public/img/x.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectVideo = function(param) {\n    var projectVideoDate = param.projectVideoDate, idvideo = param.idvideo, slide = param.slide;\n    _s();\n    console.clear();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenWidth = ref1[0], setScreenWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenHeight = ref2[0], setScreenHeight = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isClicked = ref3[0], setIsClicked = ref3[1];\n    var handleClick = function() {\n        setIsClicked(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            setScreenWidth(window.innerWidth);\n            setScreenHeight(window.innerHeight);\n        };\n        handleResize(); // Actualizar los valores iniciales al cargar la página\n        window.addEventListener(\"resize\", handleResize);\n        return function() {\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                className: isClicked ? \"\" : \"hidden\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container-fluid\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"video-wrapper section-padding bg-img parallaxie valign\",\n                        \"data-overlay-dark\": \"4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"z-i full-width text-center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"w-full\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"CustomVimeo\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: isClicked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_player__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        playing: true,\n                                        volume: 0,\n                                        loop: true,\n                                        controls: true,\n                                        url: slide,\n                                        width: screenWidth + \"px\",\n                                        height: screenHeight + \"px\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    className: !isClicked ? \"iconoCerrar vid hidden\" : \"iconoCerrar vid ShowVid\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        setIsClicked(false);\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"vid-butn\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            className: \"icon\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: \"/public/img/x.png\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 21\n                                                },\n                                                __self: _this\n                                            })\n                                        })\n                                    })\n                                })\n                            ]\n                        })\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                className: \"customIcon \".concat(isClicked ? \"iconoAbrir hidden\" : \"iconoAbrir ShowVid\"),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"vid\",\n                    onClick: function(e) {\n                        e.preventDefault();\n                        setIsClicked(true);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"vid-butn\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: \"icon\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                className: \"fas fa-play\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        })\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(ProjectVideo, \"FWkawMD66IByLo3Cx/cec0hae/s=\");\n_c = ProjectVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectVideo);\nvar _c;\n$RefreshReg$(_c, \"ProjectVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LXZpZGVvL3Byb2plY3QtdmlkZW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNSO0FBQ0k7QUFDUjtBQUNHOzs7QUFFekMsR0FBSyxDQUFDTSxZQUFZLEdBQUcsUUFBUSxRQUFrQyxDQUFDO1FBQXhDQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUN0REMsT0FBTyxDQUFDQyxLQUFLO0lBQ2IsR0FBSyxDQUFxQlYsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENXLE1BQU0sR0FBYVgsR0FBYyxLQUF6QlksT0FBTyxHQUFJWixHQUFjO0lBQ3hDLEdBQUssQ0FBaUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTVDYSxXQUFXLEdBQW9CYixJQUFjLEtBQWhDYyxjQUFjLEdBQUlkLElBQWM7SUFDcEQsR0FBSyxDQUFtQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUNlLFlBQVksR0FBcUJmLElBQWMsS0FBakNnQixlQUFlLEdBQUloQixJQUFjO0lBQ3RELEdBQUssQ0FBNkJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDaUIsU0FBUyxHQUFrQmpCLElBQWMsS0FBOUJrQixZQUFZLEdBQUlsQixJQUFjO0lBRWhELEdBQUssQ0FBQ21CLFdBQVcsR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUN6QkQsWUFBWSxDQUFDLEtBQUs7SUFDcEIsQ0FBQztJQUVEakIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmLEdBQUssQ0FBQ21CLFlBQVksR0FBRyxRQUFRLEdBQUYsQ0FBQztZQUMxQk4sY0FBYyxDQUFDTyxNQUFNLENBQUNDLFVBQVU7WUFDaENOLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDRSxXQUFXO1FBQ3BDLENBQUM7UUFFREgsWUFBWSxHQUFJLENBQXVELEVBQUM7UUFFdkVDLE1BQUssQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBUSxTQUFFSixZQUFZO1FBRTlDLE1BQU0sQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNaQyxNQUFNLENBQUNJLG1CQUFtQixDQUFDLENBQVEsU0FBRUwsWUFBWTtRQUNuRCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU07O2lGQUVETSxDQUFPO2dCQUFDQyxTQUFTLEVBQUVWLFNBQVMsR0FBRyxDQUFFLElBQUcsQ0FBUTs7Ozs7OzsrRkFDMUNXLENBQUc7b0JBQUNELFNBQVMsRUFBQyxDQUFpQjs7Ozs7OzttR0FDN0JDLENBQUc7d0JBQ0ZELFNBQVMsRUFBQyxDQUF3RDt3QkFDbEVFLENBQWlCLG9CQUFDLENBQUc7Ozs7Ozs7d0dBRXBCRCxDQUFHOzRCQUFDRCxTQUFTLEVBQUMsQ0FBNEI7Ozs7Ozs7O3FHQUN4Q0MsQ0FBRztvQ0FBQ0QsU0FBUyxFQUFDLENBQVE7Ozs7Ozs7O3FHQUN0QkMsQ0FBRztvQ0FBQ0QsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7OENBQ3pCVixTQUFTLHlFQUNQZCxvREFBVzt3Q0FDVjJCLE9BQU87d0NBQ1BDLE1BQU0sRUFBRSxDQUFDO3dDQUNUQyxJQUFJLEVBQUUsSUFBSTt3Q0FDVkMsUUFBUTt3Q0FDUkMsR0FBRyxFQUFFMUIsS0FBSzt3Q0FDVjJCLEtBQUssRUFBRXRCLFdBQVcsR0FBRyxDQUFJO3dDQUN6QnVCLE1BQU0sRUFBRXJCLFlBQVksR0FBRyxDQUFJOzs7Ozs7Ozs7cUdBS2hDc0IsQ0FBQztvQ0FDQVYsU0FBUyxHQUNOVixTQUFTLEdBQ04sQ0FBd0IsMEJBQ3hCLENBQXlCO29DQUUvQnFCLE9BQU8sRUFBRSxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO3dDQUNmQSxDQUFDLENBQUNDLGNBQWM7d0NBQ2hCdEIsWUFBWSxDQUFDLEtBQUs7b0NBQ3BCLENBQUM7Ozs7Ozs7bUhBR0FVLENBQUc7d0NBQUNELFNBQVMsRUFBQyxDQUFVOzs7Ozs7O3VIQUN0QmMsQ0FBSTs0Q0FBQ2QsU0FBUyxFQUFDLENBQU07Ozs7Ozs7MkhBQ25CZSxDQUFHO2dEQUFDQyxHQUFHLEVBQUMsQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7aUZBU3pDakIsQ0FBTztnQkFDTkMsU0FBUyxFQUFHLENBQVcsYUFFdEIsT0FEQ1YsU0FBUyxHQUFHLENBQW1CLHFCQUFHLENBQW9COzs7Ozs7OytGQUd2RG9CLENBQUM7b0JBQ0FWLFNBQVMsRUFBQyxDQUFLO29CQUNmVyxPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQzt3QkFDZkEsQ0FBQyxDQUFDQyxjQUFjO3dCQUNoQnRCLFlBQVksQ0FBQyxJQUFJO29CQUNuQixDQUFDOzs7Ozs7O21HQUVBVSxDQUFHO3dCQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozt1R0FDdEJjLENBQUk7NEJBQUNkLFNBQVMsRUFBQyxDQUFNOzs7Ozs7OzJHQUNuQmlCLENBQUM7Z0NBQUNqQixTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7Ozs7Ozs7QUFPeEMsQ0FBQztHQTdGS3RCLFlBQVk7S0FBWkEsWUFBWTtBQStGbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LXZpZGVvL3Byb2plY3QtdmlkZW8uanN4P2JlZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSBcInJlYWN0LW1vZGFsLXZpZGVvXCI7XHJcbmltcG9ydCBcInJlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5jc3NcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IHggZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWcveC5wbmdcIlxyXG5cclxuY29uc3QgUHJvamVjdFZpZGVvID0gKHsgcHJvamVjdFZpZGVvRGF0ZSwgaWR2aWRlbywgc2xpZGUgfSkgPT4ge1xyXG4gIGNvbnNvbGUuY2xlYXIoKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzY3JlZW5XaWR0aCwgc2V0U2NyZWVuV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NjcmVlbkhlaWdodCwgc2V0U2NyZWVuSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0NsaWNrZWQsIHNldElzQ2xpY2tlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0NsaWNrZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNjcmVlbldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgc2V0U2NyZWVuSGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVJlc2l6ZSgpOyAvLyBBY3R1YWxpemFyIGxvcyB2YWxvcmVzIGluaWNpYWxlcyBhbCBjYXJnYXIgbGEgcMOhZ2luYVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2lzQ2xpY2tlZCA/IFwiXCIgOiBcImhpZGRlblwifT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby13cmFwcGVyIHNlY3Rpb24tcGFkZGluZyBiZy1pbWcgcGFyYWxsYXhpZSB2YWxpZ25cIlxyXG4gICAgICAgICAgICBkYXRhLW92ZXJsYXktZGFyaz1cIjRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotaSBmdWxsLXdpZHRoIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkN1c3RvbVZpbWVvXCI+XHJcbiAgICAgICAgICAgICAgICB7aXNDbGlja2VkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZT17MH1cclxuICAgICAgICAgICAgICAgICAgICBsb29wPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtzbGlkZX0gLy8gVmlkZW8gZGlmZXJlbnRlIHBhcmEgZGlzcG9zaXRpdm9zIG3Ds3ZpbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3NjcmVlbldpZHRoICsgXCJweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17c2NyZWVuSGVpZ2h0ICsgXCJweFwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICFpc0NsaWNrZWRcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbm9DZXJyYXIgdmlkIGhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImljb25vQ2VycmFyIHZpZCBTaG93VmlkXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgc2V0SXNDbGlja2VkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIEFDQSBWQSBFTCBIR1BUQSBJQ09OTyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkLWJ1dG5cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3B1YmxpYy9pbWcveC5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogQUNBIFZBIEVMIEhHUFRBIElDT05PICovfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YGN1c3RvbUljb24gJHtcclxuICAgICAgICAgIGlzQ2xpY2tlZCA/IFwiaWNvbm9BYnJpciBoaWRkZW5cIiA6IFwiaWNvbm9BYnJpciBTaG93VmlkXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRcIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRJc0NsaWNrZWQodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkLWJ1dG5cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5XCI+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0VmlkZW87XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9kYWxWaWRlbyIsIlJlYWN0UGxheWVyIiwieCIsIlByb2plY3RWaWRlbyIsInByb2plY3RWaWRlb0RhdGUiLCJpZHZpZGVvIiwic2xpZGUiLCJjb25zb2xlIiwiY2xlYXIiLCJpc09wZW4iLCJzZXRPcGVuIiwic2NyZWVuV2lkdGgiLCJzZXRTY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsInNldFNjcmVlbkhlaWdodCIsImlzQ2xpY2tlZCIsInNldElzQ2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiZGF0YS1vdmVybGF5LWRhcmsiLCJwbGF5aW5nIiwidm9sdW1lIiwibG9vcCIsImNvbnRyb2xzIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJhIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNwYW4iLCJpbWciLCJzcmMiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Project-video/project-video.jsx\n");

/***/ })

});