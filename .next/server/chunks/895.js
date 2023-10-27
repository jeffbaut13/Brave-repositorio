"use strict";
exports.id = 895;
exports.ids = [895];
exports.modules = {

/***/ 5895:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2806);

/* eslint-disable @next/next/no-img-element */ 



const Navbar = ({ lr , nr , theme  })=>{
    return(/*#__PURE__*/ _jsx("nav", {
        ref: nr,
        className: `navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}`,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsx(Link, {
                    href: "/",
                    children: /*#__PURE__*/ _jsx("a", {
                        className: "logo",
                        children: theme ? theme === "themeL" ? /*#__PURE__*/ _jsx("img", {
                            ref: lr,
                            src: appData.darkLogo,
                            alt: "logo"
                        }) : /*#__PURE__*/ _jsx("img", {
                            ref: lr,
                            src: appData.lightLogo,
                            alt: "logo"
                        }) : /*#__PURE__*/ _jsx("img", {
                            ref: lr,
                            src: appData.lightLogo,
                            alt: "logo"
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    onClick: handleMobileDropdown,
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ _jsx("span", {
                        className: "icon-bar",
                        children: /*#__PURE__*/ _jsx("i", {
                            className: "fas fa-bars"
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: /*#__PURE__*/ _jsxs("ul", {
                        className: "navbar-nav ml-auto",
                        children: [
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: `/`,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "nav-link",
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: `/blog-list/blog-list-dark`,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "nav-link",
                                        children: "Campa\xf1as"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: `/about/about-dark`,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "nav-link",
                                        children: "Nosotros"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: `/contact/contact-dark`,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "nav-link",
                                        children: "Contacto"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Navbar)));


/***/ })

};
;