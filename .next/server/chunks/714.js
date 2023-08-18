"use strict";
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 1565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);




const CallToAction = ({ img  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "call-action section-padding sub-bg bg-img",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-fluid p-0 m-0",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row p-0 m-0 justify-content-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-8 col-lg-9 p-0 m-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content sm-mb30",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "wow words chars splitting",
                                        "data-splitting": true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "wow words chars splitting customH2",
                                        "data-splitting": true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: "wow words chars splitting",
                                        "data-splitting": true,
                                        children: "Trae tu marca a la agencia donde la valentia es la norma."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "contacoCall",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            href: `/contact/contact-dark`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "butn bord curve wow fadeInUp",
                                "data-wow-delay": ".5s",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Contacto"
                                })
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallToAction);


/***/ }),

/***/ 9127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ clients)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/clients.json
const clients_namespaceObject = JSON.parse('[{"id":1,"darkImage":"/img/clients/brands/dark/logo-Inter.png","url":"interrapidisimo.com"},{"id":2,"darkImage":"/img/clients/brands/dark/alcarrito.png","url":"alcarrito.com"},{"id":3,"darkImage":"/img/clients/brands/dark/03.png","url":"www.Vie.com"},{"id":4,"darkImage":"/img/clients/brands/dark/04.png","url":"www.Vie.com"},{"id":5,"darkImage":"/img/clients/brands/dark/05.png","url":"www.Vie.com"},{"id":6,"darkImage":"/img/clients/brands/dark/06.png","url":"www.Vie.com"},{"id":7,"darkImage":"/img/clients/brands/dark/07.png","url":"www.Vie.com"},{"id":8,"darkImage":"/img/clients/brands/dark/08.png","url":"www.Vie.com"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Clients/clients.jsx

/* eslint-disable @next/next/no-img-element */ 



const Clients = ({ theme  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "clients section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid p-0 m-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row p-0 m-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 valign md-mb50 p-0 m-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "sec-head mb-0 p-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "hClient",
                                children: "Nuestros clientes"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row iconosClientes",
                            children: clients_namespaceObject.slice(0, 2).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 brands",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item no-bord wow fadeIn",
                                        "data-wow-delay": ".3s",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "img",
                                            children: [
                                                theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: item.lightImage,
                                                    alt: ""
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: item.darkImage,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: `https://${item.url}`,
                                                        passHref: true,
                                                        "data-splitting": true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "link words chars splitting",
                                                            target: "_blank",
                                                            children: item.url
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, item.id)
                            )
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const clients = (Clients);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ })

};
;