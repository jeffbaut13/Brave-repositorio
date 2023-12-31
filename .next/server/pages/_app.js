"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
const loadingPace = ()=>{
    Pace.on("start", function() {
        document.querySelector("#preloader").classList.remove("isdone");
        document.querySelector(".loading").classList.remove("isdone");
    });
    Pace.on("done", function() {
        document.querySelector("#preloader").classList.add("isdone");
        document.querySelector(".loading").classList.add("isdone");
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        document.querySelector("#preloader").classList.add("isdone");
        document.querySelector(".loading").classList.add("isdone");
    }
    window.addEventListener("load", ()=>{
        document.querySelector("#preloader").classList.add("isdone");
        document.querySelector(".loading").classList.add("isdone");
        if (document.querySelector('.pace-running.pace-running')) {
            document.querySelector('.pace-running.pace-running').classList.remove('pace-running');
        }
    });
};
/* harmony default export */ const common_loadingPace = (loadingPace);

// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/components/Loading-Screen/index.jsx





const LoadingScreen = ()=>{
    external_react_default().useEffect(()=>{
        let bodyEl = document.querySelector("body");
        if (app/* showLoading */.QP) {
            common_loadingPace();
            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${app/* showLoading */.QP === true ? "showX" : "hideX"}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "loading",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "C"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "a"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "r"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "g"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "a"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "n"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "d"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "o"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "preloader"
                    })
                ]
            }),
            app/* showLoading */.QP ? /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "pace",
                strategy: "beforeInteractive",
                src: "/js/pace.min.js"
            }) : ""
        ]
    }));
};
/* harmony default export */ const Loading_Screen = (LoadingScreen);

;// CONCATENATED MODULE: ./src/pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Brave"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/img/favicon.svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://www.googletagmanager.com/gtag/js?id=G-S9TL9VRKZG"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "google-analytics",
                children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S9TL9VRKZG');
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                async: true,
                src: "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RFEzpZ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Loading_Screen, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "wow",
                src: "/js/wow.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "beforeInteractive",
                id: "splitting",
                src: "/js/splitting.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "simpleParallax",
                src: "/js/simpleParallax.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "isotope",
                strategy: "beforeInteractive",
                src: "/js/isotope.pkgd.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "wowInit",
                strategy: "lazyOnload",
                children: `new WOW().init();`
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/img/logo-light.svg","Q1":"/img/logo-dark.png","QP":true}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7393));
module.exports = __webpack_exports__;

})();