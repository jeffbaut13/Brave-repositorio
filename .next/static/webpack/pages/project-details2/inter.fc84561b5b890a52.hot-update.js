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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var _public_img_x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/img/x.png */ \"./public/img/x.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectVideo = function(param) {\n    var projectVideoDate = param.projectVideoDate, idvideo = param.idvideo, slide = param.slide;\n    _s();\n    console.clear();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenWidth = ref1[0], setScreenWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), screenHeight = ref2[0], setScreenHeight = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isClicked = ref3[0], setIsClicked = ref3[1];\n    var handleClick = function() {\n        setIsClicked(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            setScreenWidth(window.innerWidth);\n            setScreenHeight(window.innerHeight);\n        };\n        handleResize(); // Actualizar los valores iniciales al cargar la página\n        window.addEventListener(\"resize\", handleResize);\n        return function() {\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                className: isClicked ? \"\" : \"hidden\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container-fluid\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"video-wrapper section-padding bg-img parallaxie valign\",\n                        \"data-overlay-dark\": \"4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"z-i full-width text-center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"w-full\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"CustomVimeo\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: isClicked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_player__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        playing: true,\n                                        volume: 0,\n                                        loop: true,\n                                        controls: true,\n                                        url: slide,\n                                        width: screenWidth + \"px\",\n                                        height: screenHeight + \"px\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    className: !isClicked ? \"iconoCerrar vid hidden\" : \"iconoCerrar vid ShowVid\",\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        setIsClicked(false);\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"vid-butn\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: \"/public/img/x.png\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            },\n                                            __self: _this\n                                        })\n                                    })\n                                })\n                            ]\n                        })\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                className: \"customIcon \".concat(isClicked ? \"iconoAbrir hidden\" : \"iconoAbrir ShowVid\"),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"vid\",\n                    onClick: function(e) {\n                        e.preventDefault();\n                        setIsClicked(true);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"vid-butn\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: \"icon\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                className: \"fas fa-play\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\camilofhernandez\\\\Desktop\\\\Brave\\\\Brave-repositorio\\\\src\\\\components\\\\Project-video\\\\project-video.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        })\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(ProjectVideo, \"FWkawMD66IByLo3Cx/cec0hae/s=\");\n_c = ProjectVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectVideo);\nvar _c;\n$RefreshReg$(_c, \"ProjectVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LXZpZGVvL3Byb2plY3QtdmlkZW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNSO0FBQ0k7QUFDUjtBQUNHOzs7QUFFekMsR0FBSyxDQUFDTSxZQUFZLEdBQUcsUUFBUSxRQUFrQyxDQUFDO1FBQXhDQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUN0REMsT0FBTyxDQUFDQyxLQUFLO0lBQ2IsR0FBSyxDQUFxQlYsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENXLE1BQU0sR0FBYVgsR0FBYyxLQUF6QlksT0FBTyxHQUFJWixHQUFjO0lBQ3hDLEdBQUssQ0FBaUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTVDYSxXQUFXLEdBQW9CYixJQUFjLEtBQWhDYyxjQUFjLEdBQUlkLElBQWM7SUFDcEQsR0FBSyxDQUFtQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUNlLFlBQVksR0FBcUJmLElBQWMsS0FBakNnQixlQUFlLEdBQUloQixJQUFjO0lBQ3RELEdBQUssQ0FBNkJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDaUIsU0FBUyxHQUFrQmpCLElBQWMsS0FBOUJrQixZQUFZLEdBQUlsQixJQUFjO0lBRWhELEdBQUssQ0FBQ21CLFdBQVcsR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUN6QkQsWUFBWSxDQUFDLEtBQUs7SUFDcEIsQ0FBQztJQUVEakIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmLEdBQUssQ0FBQ21CLFlBQVksR0FBRyxRQUFRLEdBQUYsQ0FBQztZQUMxQk4sY0FBYyxDQUFDTyxNQUFNLENBQUNDLFVBQVU7WUFDaENOLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDRSxXQUFXO1FBQ3BDLENBQUM7UUFFREgsWUFBWSxHQUFJLENBQXVELEVBQUM7UUFFdkVDLE1BQUssQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBUSxTQUFFSixZQUFZO1FBRTlDLE1BQU0sQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNaQyxNQUFNLENBQUNJLG1CQUFtQixDQUFDLENBQVEsU0FBRUwsWUFBWTtRQUNuRCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU07O2lGQUVETSxDQUFPO2dCQUFDQyxTQUFTLEVBQUVWLFNBQVMsR0FBRyxDQUFFLElBQUcsQ0FBUTs7Ozs7OzsrRkFDMUNXLENBQUc7b0JBQUNELFNBQVMsRUFBQyxDQUFpQjs7Ozs7OzttR0FDN0JDLENBQUc7d0JBQ0ZELFNBQVMsRUFBQyxDQUF3RDt3QkFDbEVFLENBQWlCLG9CQUFDLENBQUc7Ozs7Ozs7d0dBRXBCRCxDQUFHOzRCQUFDRCxTQUFTLEVBQUMsQ0FBNEI7Ozs7Ozs7O3FHQUN4Q0MsQ0FBRztvQ0FBQ0QsU0FBUyxFQUFDLENBQVE7Ozs7Ozs7O3FHQUN0QkMsQ0FBRztvQ0FBQ0QsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7OENBQ3pCVixTQUFTLHlFQUNQZCxvREFBVzt3Q0FDVjJCLE9BQU87d0NBQ1BDLE1BQU0sRUFBRSxDQUFDO3dDQUNUQyxJQUFJLEVBQUUsSUFBSTt3Q0FDVkMsUUFBUTt3Q0FDUkMsR0FBRyxFQUFFMUIsS0FBSzt3Q0FDVjJCLEtBQUssRUFBRXRCLFdBQVcsR0FBRyxDQUFJO3dDQUN6QnVCLE1BQU0sRUFBRXJCLFlBQVksR0FBRyxDQUFJOzs7Ozs7Ozs7cUdBS2hDc0IsQ0FBQztvQ0FDQVYsU0FBUyxHQUNOVixTQUFTLEdBQ04sQ0FBd0IsMEJBQ3hCLENBQXlCO29DQUUvQnFCLE9BQU8sRUFBRSxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO3dDQUNmQSxDQUFDLENBQUNDLGNBQWM7d0NBQ2hCdEIsWUFBWSxDQUFDLEtBQUs7b0NBQ3BCLENBQUM7Ozs7Ozs7bUhBR0FVLENBQUc7d0NBQUNELFNBQVMsRUFBQyxDQUFVOzs7Ozs7O3VIQUVwQmMsQ0FBRzs0Q0FBQ0MsR0FBRyxFQUFDLENBQW1COzs7Ozs7Ozs7Ozs7Ozs7aUZBU3pDaEIsQ0FBTztnQkFDTkMsU0FBUyxFQUFHLENBQVcsYUFFdEIsT0FEQ1YsU0FBUyxHQUFHLENBQW1CLHFCQUFHLENBQW9COzs7Ozs7OytGQUd2RG9CLENBQUM7b0JBQ0FWLFNBQVMsRUFBQyxDQUFLO29CQUNmVyxPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQzt3QkFDZkEsQ0FBQyxDQUFDQyxjQUFjO3dCQUNoQnRCLFlBQVksQ0FBQyxJQUFJO29CQUNuQixDQUFDOzs7Ozs7O21HQUVBVSxDQUFHO3dCQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozt1R0FDdEJnQixDQUFJOzRCQUFDaEIsU0FBUyxFQUFDLENBQU07Ozs7Ozs7MkdBQ25CaUIsQ0FBQztnQ0FBQ2pCLFNBQVMsRUFBQyxDQUFhOzs7Ozs7Ozs7Ozs7OztBQU94QyxDQUFDO0dBN0ZLdEIsWUFBWTtLQUFaQSxZQUFZO0FBK0ZsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QtdmlkZW8vcHJvamVjdC12aWRlby5qc3g/YmVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tIFwicmVhY3QtbW9kYWwtdmlkZW9cIjtcclxuaW1wb3J0IFwicmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xyXG5pbXBvcnQgeCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy94LnBuZ1wiXHJcblxyXG5jb25zdCBQcm9qZWN0VmlkZW8gPSAoeyBwcm9qZWN0VmlkZW9EYXRlLCBpZHZpZGVvLCBzbGlkZSB9KSA9PiB7XHJcbiAgY29uc29sZS5jbGVhcigpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NjcmVlbldpZHRoLCBzZXRTY3JlZW5XaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2NyZWVuSGVpZ2h0LCBzZXRTY3JlZW5IZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzQ2xpY2tlZCwgc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldElzQ2xpY2tlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0U2NyZWVuV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICBzZXRTY3JlZW5IZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUmVzaXplKCk7IC8vIEFjdHVhbGl6YXIgbG9zIHZhbG9yZXMgaW5pY2lhbGVzIGFsIGNhcmdhciBsYSBww6FnaW5hXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17aXNDbGlja2VkID8gXCJcIiA6IFwiaGlkZGVuXCJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLXdyYXBwZXIgc2VjdGlvbi1wYWRkaW5nIGJnLWltZyBwYXJhbGxheGllIHZhbGlnblwiXHJcbiAgICAgICAgICAgIGRhdGEtb3ZlcmxheS1kYXJrPVwiNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei1pIGZ1bGwtd2lkdGggdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ3VzdG9tVmltZW9cIj5cclxuICAgICAgICAgICAgICAgIHtpc0NsaWNrZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICBwbGF5aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lPXswfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcclxuICAgICAgICAgICAgICAgICAgICB1cmw9e3NsaWRlfSAvLyBWaWRlbyBkaWZlcmVudGUgcGFyYSBkaXNwb3NpdGl2b3MgbcOzdmlsZXNcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17c2NyZWVuV2lkdGggKyBcInB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtzY3JlZW5IZWlnaHQgKyBcInB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgIWlzQ2xpY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJpY29ub0NlcnJhciB2aWQgaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbm9DZXJyYXIgdmlkIFNob3dWaWRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRJc0NsaWNrZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogQUNBIFZBIEVMIEhHUFRBIElDT05PICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWQtYnV0blwiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wdWJsaWMvaW1nL3gucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBBQ0EgVkEgRUwgSEdQVEEgSUNPTk8gKi99XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY3VzdG9tSWNvbiAke1xyXG4gICAgICAgICAgaXNDbGlja2VkID8gXCJpY29ub0FicmlyIGhpZGRlblwiIDogXCJpY29ub0FicmlyIFNob3dWaWRcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInZpZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldElzQ2xpY2tlZCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWQtYnV0blwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIj48L2k+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RWaWRlbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbFZpZGVvIiwiUmVhY3RQbGF5ZXIiLCJ4IiwiUHJvamVjdFZpZGVvIiwicHJvamVjdFZpZGVvRGF0ZSIsImlkdmlkZW8iLCJzbGlkZSIsImNvbnNvbGUiLCJjbGVhciIsImlzT3BlbiIsInNldE9wZW4iLCJzY3JlZW5XaWR0aCIsInNldFNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0Iiwic2V0U2NyZWVuSGVpZ2h0IiwiaXNDbGlja2VkIiwic2V0SXNDbGlja2VkIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJkYXRhLW92ZXJsYXktZGFyayIsInBsYXlpbmciLCJ2b2x1bWUiLCJsb29wIiwiY29udHJvbHMiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImEiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW1nIiwic3JjIiwic3BhbiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Project-video/project-video.jsx\n");

/***/ })

});