"use strict";
exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 6802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fadeWhenScroll = (element)=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (element) {
            element.forEach((item)=>{
                item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
                item.style.opacity = 1 - scrolled / 600;
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeWhenScroll);


/***/ }),

/***/ 2517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    if (document.querySelectorAll(".swiper-pagination")) {
        document.querySelectorAll(".swiper-pagination").forEach((item)=>{
            item.innerHTML = item.innerHTML.replace(" / ", "");
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 4076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ thumparallax)
/* harmony export */ });
/* unused harmony export thumparallaxDown */
const thumparallax = ()=>{
    var imageUp = document.getElementsByClassName("thumparallax");
    if (imageUp) {
        new simpleParallax(imageUp, {
            delay: 1,
            scale: 1.1
        });
    }
};
const thumparallaxDown = ()=>{
    var imageDown = document.getElementsByClassName("thumparallax-down");
    if (imageDown) {
        new simpleParallax(imageDown, {
            orientation: "down",
            delay: 1,
            scale: 1.1
        });
    }
};


/***/ }),

/***/ 455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_us2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/data/sections/about-us2.json
const about_us2_namespaceObject = JSON.parse('{"TN":{"P":"Valentía es lo que hace","E":"que nuestro trabajo"},"kQ":"Entendemos a las diferentes audiencias y desarrollamos proyectos valientes, que quedan en la mente de todas las personas."}');
;// CONCATENATED MODULE: ./src/components/About-us2/about-us2.jsx

/* eslint-disable @next/next/no-img-element */ 


const AboutUs2 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "about section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container hom",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-12 offset-lg-1 valign nos",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Split/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "words chars splitting main-title wow uno",
                                        "data-splitting": true,
                                        children: [
                                            about_us2_namespaceObject.TN.P,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            }),
                                            " ",
                                            about_us2_namespaceObject.TN.E
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "words chars splitting main-title wow dos",
                                        "data-splitting": true,
                                        children: "no sea olvidado."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "words chars splitting wow txt",
                                    "data-splitting": true,
                                    children: about_us2_namespaceObject.kQ
                                })
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const about_us2 = (AboutUs2);


/***/ }),

/***/ 6021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5754);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2517);
/* harmony import */ var _common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6802);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax
]);
const IntroWithSlider = ({ sliderRef  })=>{
    const { 0: screenWidth , 1: setScreenWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: screenHeight , 1: setScreenHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isClicked , 1: setIsClicked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClick = ()=>{
        setIsClicked(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleResize = ()=>{
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight + 115);
        };
        handleResize(); // Actualizar los valores iniciales al cargar la página
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const isMobile = screenWidth <= 768; // Definir el ancho máximo para considerar dispositivos móviles
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(document.querySelectorAll(".fixed-slider .caption"));
        setTimeout(()=>{
            (0,_common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
            setLoad(false);
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        ref: sliderRef,
        className: "slider slider-prlx fixed-slider text-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                    speed: 1000,
                    loop: true,
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        type: "fraction",
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_3__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-img valign",
                                style: !isMobile ? {
                                    backgroundImage: `url(${slide.image})`
                                } : {
                                    backgroundColor: "#000000"
                                },
                                "data-overlay-dark": "6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "Vimeo",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            playing: true,
                                            loop: true,
                                            muted: true,
                                            controls: false,
                                            url: isMobile ? slide.mobileVideo : slide.video,
                                            width: screenWidth + "px",
                                            height: screenHeight + "px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row justify-content-start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-8 col-md-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "caption center mt-30",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                        href: slide.url,
                                                        passHref: true,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                            style: {
                                                                cursor: `pointer`
                                                            },
                                                            className: "braveCustom",
                                                            children: [
                                                                slide.title,
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "contenido titulo",
                                                                    children: [
                                                                        slide.content,
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "titulo_company",
                                                                            children: slide.company
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "Customvideo bg-img parallaxie",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: slide.url,
                                            passHref: true,
                                            onClick: handleClick,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                                className: "customIcon play",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "vid",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "vid-butn",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-play"
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }, slide.id)
                    )
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "setone setwo",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationNextRef,
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationPrevRef,
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "social-icon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://www.facebook.com/profile.php?id=100094496187493",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-facebook-f"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://www.linkedin.com/feed/?trk=onboarding-landing",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-linkedin"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://www.instagram.com/brave.colombia/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-instagram"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://www.youtube.com/channel/UCzb-UgMroYfLySmuFcaXPGA",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-youtube"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroWithSlider);

});

/***/ }),

/***/ 2781:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Services6_services6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3093);

/* eslint-disable @next/next/no-img-element */ 



const Portfolio = ({ grid , filterPosition  })=>{
    React.useEffect(()=>{
        setTimeout(()=>{
            initIsotope();
        }, 1000);
    }, []);
    return(/*#__PURE__*/ _jsxs("section", {
        className: "portfolio section-padding pb-70",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-8 col-md-10",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "sec-head text-center",
                            children: [
                                /*#__PURE__*/ _jsx("h6", {
                                    className: "wow fadeIn",
                                    "data-wow-delay": ".5s",
                                    children: "Portfolio"
                                }),
                                /*#__PURE__*/ _jsxs("h3", {
                                    className: "wow color-font",
                                    children: [
                                        "Our Recent Web Design & ",
                                        /*#__PURE__*/ _jsx("br", {
                                        }),
                                        " Some Past Projects."
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx(Services6, {
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Portfolio)));


/***/ }),

/***/ 5211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/ServicesPilares/Pilares.jsx


const Pilares = ({ img , number , descripcion , color  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "pilares_unidades",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: img,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "contenido",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "number",
                            children: [
                                number,
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "linea",
                                    style: {
                                        backgroundColor: color
                                    },
                                    children: " "
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "descripcion",
                            children: descripcion
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/Services3/services3.jsx





let creativityColor = "#FFBC00";
let strategyColor = "#FF0068";
let devColor = "#00FF91";
let prColor = "#00F9FF";
let filmsColor = "#FF3C00";
const Services3 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pilares_titulo",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "mejores servicios"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Conoce nuestros 5 pilares"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "Pilar-flex",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pilares",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Pilares, {
                                img: "/img/unidades/creativity.svg",
                                number: "1",
                                descripcion: "Ideas valientes que rompen los paradigmas ya establecidos. ",
                                color: creativityColor
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Pilares, {
                                img: "/img/unidades/strategy.svg",
                                number: "2",
                                descripcion: "Estrategias rigurosas, con objetivos claros y medibles, conectados con el prop\xf3sito de una marca.",
                                color: strategyColor
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Pilares, {
                                img: "/img/unidades/Dev.svg",
                                number: "3",
                                descripcion: "Usamos la tecnolog\xeda para hacer m\xe1s humanas nuestras marcas.",
                                color: devColor
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Pilares, {
                                img: "/img/unidades/pr.svg",
                                number: "4",
                                descripcion: "Generamos conversaci\xf3n y llamamos la atenci\xf3n de medios y expertos.",
                                color: prColor
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Pilares, {
                                img: "/img/unidades/films.svg",
                                number: "5",
                                descripcion: "Convertimos los objetivos de una marca en historias audiovisuales.",
                                color: filmsColor
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const services3 = (Services3);


/***/ }),

/***/ 3093:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const Services6 = ()=>{
    return(/*#__PURE__*/ _jsx("section", {
        className: "serv-arch",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row justify-content-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/arch/s2.jpg)"
                        },
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                className: "numb",
                                children: "01"
                            }),
                            /*#__PURE__*/ _jsx("h5", {
                                children: "Architecture"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "We provide all equipment and services, etc and ensure a safe and secure project site."
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/arch/s1.jpg)"
                        },
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                className: "numb",
                                children: "02"
                            }),
                            /*#__PURE__*/ _jsx("h5", {
                                children: "Interior Design"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "We provide all equipment and services, etc and ensure a safe and secure project site."
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/arch/s3.jpg)"
                        },
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                className: "numb",
                                children: "03"
                            }),
                            /*#__PURE__*/ _jsx("h5", {
                                children: "3D Modeling"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "We provide all equipment and services, etc and ensure a safe and secure project site."
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/arch/s4.jpg)"
                        },
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                className: "numb",
                                children: "04"
                            }),
                            /*#__PURE__*/ _jsx("h5", {
                                children: "Furniture Design"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "We provide all equipment and services, etc and ensure a safe and secure project site."
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/arch/s5.jpg)"
                        },
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                className: "numb",
                                children: "05"
                            }),
                            /*#__PURE__*/ _jsx("h5", {
                                children: "Urban Design"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "We provide all equipment and services, etc and ensure a safe and secure project site."
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Services6)));


/***/ }),

/***/ 2736:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = {};
;// CONCATENATED MODULE: ./src/components/Team/team.jsx

/* eslint-disable @next/next/no-img-element */ 



const Team = ()=>{
    React.useEffect(()=>{
        teamSkillsProgress();
        setTimeout(()=>{
            tooltipEffect();
        }, 1000);
    }, []);
    return(/*#__PURE__*/ _jsx("div", {
        className: "team-crv section-padding",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-5 valign",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "content wow fadeInUp md-mb30",
                            "data-wow-delay": ".5s",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ _jsx("h6", {
                                            children: "Our Staff"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("h3", {
                                    className: "co-tit mb-15",
                                    children: "We help to create visual strategies."
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie."
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "skills-box mt-40",
                                    children: teamsDate.skills.map((skill)=>/*#__PURE__*/ _jsxs("div", {
                                            className: "skill-item",
                                            children: [
                                                /*#__PURE__*/ _jsx("h6", {
                                                    className: "custom-font",
                                                    children: skill.text
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "skill-progress",
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: "progres",
                                                        "data-value": skill.value
                                                    })
                                                })
                                            ]
                                        }, skill.id)
                                    )
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-6 offset-lg-1",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "img-box",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-sm-6 toright",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "full-width",
                                            children: teamsDate.teams.slice(0, 2).map((team, index)=>/*#__PURE__*/ _jsx("div", {
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: `img sizxl ${index + 1 != teamsDate.teams.slice(0, 2).length ? "mb-30" : null}`,
                                                        "data-tooltip-tit": team.title,
                                                        "data-tooltip-sub": team.sub,
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: team.image,
                                                            alt: "",
                                                            className: "imago wow"
                                                        })
                                                    })
                                                }, team.id)
                                            )
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-sm-6 toleft valign",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "full-width text-left",
                                            children: teamsDate.teams.slice(2, 4).map((team, index)=>/*#__PURE__*/ _jsx("div", {
                                                    children: /*#__PURE__*/ _jsx("div", {
                                                        className: `img sizxl ${index + 1 != teamsDate.teams.slice(2, 4).length ? "mb-30" : null}`,
                                                        "data-tooltip-tit": team.title,
                                                        "data-tooltip-sub": team.sub,
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: team.image,
                                                            alt: "",
                                                            className: "imago wow"
                                                        })
                                                    })
                                                }, team.id)
                                            )
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const team = ((/* unused pure expression or super */ null && (Team)));


/***/ }),

/***/ 2361:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);

/* eslint-disable @next/next/no-img-element */ 





const VideoWithTestimonials = ()=>{
    const [isOpen, setOpen] = React.useState(false);
    React.useEffect(()=>{
        console.clear();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(/*#__PURE__*/ _jsx("section", {
        className: "block-sec",
        children: /*#__PURE__*/ _jsx("div", {
            className: "customBackground background bg-img pt-100 pb-0 parallaxie",
            style: {
                backgroundImage: `url(/img/bg-vid.jpg)`
            },
            "data-overlay-dark": "5",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "vid-area",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text",
                                        children: "Ver Video"
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "vid-icon",
                                        children: [
                                             false && /*#__PURE__*/ 0,
                                            /*#__PURE__*/ _jsx("a", {
                                                className: "vid",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    setOpen(true);
                                                },
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "vid-butn",
                                                    children: /*#__PURE__*/ _jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ _jsx("i", {
                                                            className: "fas fa-play"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-5 offset-lg-1",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "testim-box",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "head-box",
                                        children: [
                                            /*#__PURE__*/ _jsx("h6", {
                                                className: "wow fadeIn",
                                                "data-wow-delay": ".5s",
                                                children: "Our Clients"
                                            }),
                                            /*#__PURE__*/ _jsx("h4", {
                                                className: "wow fadeInLeft",
                                                "data-wow-delay": ".5s",
                                                children: "What Client's Say?"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs(Slider, {
                                        ...settings,
                                        className: "slic-item wow fadeInUp",
                                        "data-wow-delay": ".5s",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora."
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "img",
                                                                children: /*#__PURE__*/ _jsx("div", {
                                                                    className: "img-box",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "cont",
                                                                children: /*#__PURE__*/ _jsxs("div", {
                                                                    className: "author",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h6", {
                                                                            className: "author-name ",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora."
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "img",
                                                                children: /*#__PURE__*/ _jsx("div", {
                                                                    className: "img-box",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        src: "/img/clients/2.jpg",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "cont",
                                                                children: /*#__PURE__*/ _jsxs("div", {
                                                                    className: "author",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h6", {
                                                                            className: "author-name ",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        children: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora."
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "img",
                                                                children: /*#__PURE__*/ _jsx("div", {
                                                                    className: "img-box",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        src: "/img/clients/3.jpg",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "cont",
                                                                children: /*#__PURE__*/ _jsxs("div", {
                                                                    className: "author",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h6", {
                                                                            className: "author-name ",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (VideoWithTestimonials)));


/***/ }),

/***/ 1994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var _common_thumparallax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4076);
/* harmony import */ var _common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-img-element */ 









swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade
]);
const Blogs4 = ()=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
            (0,_common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
            (0,_common_thumparallax__WEBPACK_IMPORTED_MODULE_6__/* .thumparallax */ .$)();
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "blog-crv sub-bg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                style: {
                    display: "none"
                },
                children: "\xa0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "stories",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-fluid customContainer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6 no-padding",
                                    children: !load ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                        speed: 800,
                                        effect: "fade",
                                        spaceBetween: 0,
                                        loop: true,
                                        parallax: true,
                                        navigation: {
                                            prevEl: navigationPrevRef.current,
                                            nextEl: navigationNextRef.current
                                        },
                                        pagination: {
                                            type: "fraction",
                                            clickable: true,
                                            el: paginationRef.current
                                        },
                                        onBeforeInit: (swiper)=>{
                                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                                            swiper.params.navigation.nextEl = navigationNextRef.current;
                                            swiper.params.pagination.el = paginationRef.current;
                                        },
                                        onSwiper: (swiper)=>{
                                            setTimeout(()=>{
                                                for(var i = 0; i < swiper.slides.length; i++){
                                                    swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                                                }
                                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                                swiper.params.pagination.el = paginationRef.current;
                                                swiper.navigation.destroy();
                                                swiper.navigation.init();
                                                swiper.navigation.update();
                                                swiper.pagination.destroy();
                                                swiper.pagination.init();
                                                swiper.pagination.update();
                                            });
                                        },
                                        className: "swiper-wrapper swiper-container swiper-img",
                                        slidesPerView: 1,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": ".3s",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/img/blog/ballena.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": ".3s",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/img/blog/sapo.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": ".3s",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/img/blog/tortuga.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": ".3s",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/img/blog/cangrejo.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }) : null
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6 no-padding valign",
                                    children: !load ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                        speed: 800,
                                        spaceBetween: 0,
                                        loop: true,
                                        navigation: {
                                            prevEl: navigationPrevRef.current,
                                            nextEl: navigationNextRef.current
                                        },
                                        pagination: {
                                            type: "fraction",
                                            clickable: true,
                                            el: paginationRef.current
                                        },
                                        onBeforeInit: (swiper)=>{
                                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                                            swiper.params.navigation.nextEl = navigationNextRef.current;
                                            swiper.params.pagination.el = paginationRef.current;
                                        },
                                        onSwiper: (swiper)=>{
                                            setTimeout(()=>{
                                                for(var i = 0; i < swiper.slides.length; i++){
                                                    swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                                                }
                                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                                swiper.params.pagination.el = paginationRef.current;
                                                swiper.navigation.destroy();
                                                swiper.navigation.init();
                                                swiper.navigation.update();
                                                swiper.pagination.destroy();
                                                swiper.pagination.init();
                                                swiper.pagination.update();
                                            });
                                        },
                                        className: "swiper-wrapper swiper-container swiper-content",
                                        slidesPerView: 1,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": ".6s",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "tags",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                    href: "/blog/blog-dark",
                                                                    children: "Tendencias"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: "/blog-details/blog-details-dark",
                                                                        children: "THE AD FORUM PHNX 2023"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "Print: Advertising photography Plastic bearded humpback whale.",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        }),
                                                                        "Award: Bronze campaign."
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "more",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    href: "https://www.adforum.com/torch/phnx-2023/winners/",
                                                                    children: "Conoce m\xe1s"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": ".6s",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "tags",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                    href: "/blog/blog-dark",
                                                                    children: "Tendencias"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: "/blog-details/blog-details-dark",
                                                                        children: "THE AD FORUM PHNX 2023"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "Print: Advertising photography Plastic cave frog.",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        }),
                                                                        "Award: Bronze campaign."
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "more",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    href: "https://www.adforum.com/torch/phnx-2023/winners/",
                                                                    children: "Conoce m\xe1s"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": ".6s",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "tags",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                    href: "/blog/blog-dark",
                                                                    children: "TENDENCIAS"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: "/blog-details/blog-details-dark",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            children: "THE AD FORUM PHNX 2023"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "Print: Advertising photography Hawksbill turtle with plastic coat ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        }),
                                                                        " Award: Bronze campaign."
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "more",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    href: "https://www.adforum.com/torch/phnx-2023/winners/",
                                                                    children: "Conoce m\xe1s"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item wow fadeIn",
                                                    "data-wow-delay": ".6s",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "tags",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                    href: "/blog/blog-dark",
                                                                    children: "TENDENCIAS"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: "/blog-details/blog-details-dark",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Revista L\xfcrzers Archive 223 (US edition). 2/23"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "Plastic court hermit crab ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        }),
                                                                        " Social + Environment"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "more",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    href: "https://www.luerzersarchive.com/work/inter-rapidisimo/",
                                                                    children: "Conoce m\xe1s"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }) : null
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "controls",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: navigationNextRef,
                                    className: "swiper-button-next swiper-nav-ctrl next-ctrl",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-caret-up"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: navigationPrevRef,
                                    className: "swiper-button-prev swiper-nav-ctrl prev-ctrl",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-caret-down"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-pagination",
                                    ref: paginationRef
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs4);

});

/***/ }),

/***/ 5781:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);



const SContactForm = ({ noLine  })=>{
    const messageRef = React.useRef(null);
    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendMessage = (ms)=>new Promise((r)=>setTimeout(r, ms)
        )
    ;
    return(/*#__PURE__*/ _jsxs("section", {
        className: "contact-sec section-padding position-re",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-8 col-md-10",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "sec-head text-center",
                                children: [
                                    /*#__PURE__*/ _jsx("h6", {
                                        className: "wow fadeIn",
                                        "data-wow-delay": ".5s",
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ _jsx("h3", {
                                        className: "wow color-font",
                                        children: "Let’s Get in Touch And Make Magic Together."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-10",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "form wow fadeInUp",
                                "data-wow-delay": ".5s",
                                children: /*#__PURE__*/ _jsx(Formik, {
                                    initialValues: {
                                        name: "",
                                        email: "",
                                        message: ""
                                    },
                                    onSubmit: async (values)=>{
                                        await sendMessage(500);
                                        alert(JSON.stringify(values, null, 2));
                                        // show message
                                        messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon.";
                                        // Reset the values
                                        values.name = "";
                                        values.email = "";
                                        values.message = "";
                                        // clear message
                                        setTimeout(()=>{
                                            messageRef.current.innerText = "";
                                        }, 2000);
                                    },
                                    children: ({ errors , touched  })=>/*#__PURE__*/ _jsxs(Form, {
                                            id: "contact-form",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "messages",
                                                    ref: messageRef
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "controls",
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "col-lg-6",
                                                                children: /*#__PURE__*/ _jsx("div", {
                                                                    className: "form-group",
                                                                    children: /*#__PURE__*/ _jsx(Field, {
                                                                        id: "form_name",
                                                                        type: "text",
                                                                        name: "name",
                                                                        placeholder: "Name",
                                                                        required: "required"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "col-lg-6",
                                                                children: /*#__PURE__*/ _jsxs("div", {
                                                                    className: "form-group",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Field, {
                                                                            validate: validateEmail,
                                                                            id: "form_email",
                                                                            type: "email",
                                                                            name: "email",
                                                                            placeholder: "Email",
                                                                            required: "required"
                                                                        }),
                                                                        errors.email && touched.email && /*#__PURE__*/ _jsx("div", {
                                                                            children: errors.email
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ _jsx("div", {
                                                                    className: "form-group",
                                                                    children: /*#__PURE__*/ _jsx(Field, {
                                                                        as: "textarea",
                                                                        id: "form_message",
                                                                        name: "message",
                                                                        placeholder: "Message",
                                                                        rows: "4",
                                                                        required: "required"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ _jsx("div", {
                                                                    className: "text-center",
                                                                    children: /*#__PURE__*/ _jsx("button", {
                                                                        type: "submit",
                                                                        className: "nb butn bord curve mt-30",
                                                                        children: /*#__PURE__*/ _jsx("span", {
                                                                            children: "Send Massege"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                })
                            })
                        })
                    })
                ]
            }),
            !noLine ? /*#__PURE__*/ _jsx("div", {
                className: "line bottom left"
            }) : ""
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SContactForm)));


/***/ }),

/***/ 1390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2532);
/* harmony import */ var _components_Team_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2736);
/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5895);
/* harmony import */ var _components_Navbar_full_menu_navbar_full_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(223);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3391);
/* harmony import */ var _components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1994);
/* harmony import */ var _components_Services3_services3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5211);
/* harmony import */ var _components_About_us2_about_us2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(455);
/* harmony import */ var _components_Portfolio_portfolio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2781);
/* harmony import */ var _components_s_contact_form_s_contact_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5781);
/* harmony import */ var _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6021);
/* harmony import */ var _components_Video_with_testimonials_video_with_testimonials__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2361);
/* harmony import */ var _components_Services6_services6__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3093);
/* harmony import */ var _components_Clients_clients__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9127);
/* harmony import */ var _components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1565);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_7__, _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_12__]);
([_components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_7__, _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

















const Homepage4 = ()=>{
    const fixedSlider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setInterval(()=>{
            if (fixedSlider.current) {
                var slidHeight = fixedSlider.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        });
    }, [
        fixedSlider,
        MainContent
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_full_menu_navbar_full_menu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                sliderRef: fixedSlider
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: MainContent,
                className: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_us2_about_us2__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services3_services3__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        lines: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Clients_clients__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        theme: "dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        hideBGCOLOR: true
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage4);

});

/***/ }),

/***/ 5754:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"#WEGO","content":"Fifa World Cup Qatar 2022®","company":"Inter Rapidísimo","image":"/img/portfolio/project2/bg-chicas.jpg","video":"https://vimeo.com/838807359?share=copy","mobileVideo":"https://vimeo.com/840510890?share=copy","idVimeo":"838807359","url":"/proyectos/inter"},{"id":2,"title":"Mundo sin Plástico","content":"Ayúdanos a extinguir un mundo lleno de plástico","company":"Inter Rapidísimo","image":"/img/portfolio/project2/portada_mundo_sin_plastico.jpg","mobileImage":"","video":"https://vimeo.com/838806090?share=copy","mobileVideo":"https://vimeo.com/841369867?share=copy","idVimeo":"127203262","url":"/proyectos/mundosinplastico"},{"id":3,"title":"Alcarrito","content":"100% de tod@s","company":"Inter Rapidísimo","image":"/img/portfolio/project2/portadaAlcarrito.jpg","mobileImage":"","video":"https://vimeo.com/838815313?share=copy","mobileVideo":"https://vimeo.com/841370458?share=copy","url":"/proyectos/alcarrito"},{"id":4,"title":"Pago en Casa","content":"Paga cuando recibas y revises tus productos","company":"Inter Rapidísimo","image":"/img/portfolio/project2/full_page_frame.jpg","mobileImage":"","video":"https://vimeo.com/838806054?share=copy","mobileVideo":"https://vimeo.com/841369930?share=copy","url":"/proyectos/pagoencasa"}]');

/***/ })

};
;