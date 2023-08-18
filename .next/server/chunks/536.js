"use strict";
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project_details2_dark)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Footer/footer.jsx
var footer = __webpack_require__(3391);
// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(2532);
;// CONCATENATED MODULE: ./src/components/Project-description/project-description.jsx


const ProjectDescription = ({ projectDescriptionData , projectDescriptionDataDos  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "intro-section section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 col-md-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "htit",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "02 "
                                    }),
                                    " Idea"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 offset-lg-1 col-md-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text js-scroll__content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "extra-text",
                                    children: projectDescriptionData
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "extra-text",
                                    children: projectDescriptionDataDos
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const project_description = (ProjectDescription);

// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(8924);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);
;// CONCATENATED MODULE: ./src/components/Project-video/project-video.jsx





const ProjectVideo = ({ projectVideoDate , idvideo , slide  })=>{
    console.clear();
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(true);
    const { 0: screenWidth , 1: setScreenWidth  } = (0,external_react_.useState)(null);
    const { 0: screenHeight , 1: setScreenHeight  } = (0,external_react_.useState)(null);
    const { 0: isClicked , 1: setIsClicked  } = (0,external_react_.useState)(true);
    const handleClick = ()=>{
        setIsClicked(false);
    };
    (0,external_react_.useEffect)(()=>{
        const handleResize = ()=>{
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };
        handleResize(); // Actualizar los valores iniciales al cargar la página
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: isClicked ? "" : "hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "video-wrapper section-padding bg-img parallaxie valign",
                        "data-overlay-dark": "4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "z-i full-width text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "CustomVimeo",
                                    children: isClicked && /*#__PURE__*/ jsx_runtime_.jsx((external_react_player_default()), {
                                        playing: true,
                                        volume: 1,
                                        loop: true,
                                        controls: true,
                                        url: slide,
                                        width: screenWidth + "px",
                                        height: screenHeight + "px"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: !isClicked ? "iconoCerrar vid hidden" : "iconoCerrar vid ShowVid",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setIsClicked(false);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "vid-butn",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "xcierre",
                                            src: "/img/x.png"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: `customIcon ${isClicked ? "iconoAbrir hidden" : "iconoAbrir ShowVid"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "vid",
                    onClick: (e)=>{
                        e.preventDefault();
                        setIsClicked(true);
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "vid-butn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-play"
                            })
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const project_video = (ProjectVideo);

;// CONCATENATED MODULE: ./src/components/Next-project/next-project.jsx


const NextProject = ({ next  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "next-prog section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "box",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-img valign",
                            style: {
                                backgroundImage: `url(${next})`
                            },
                            "data-overlay-dark": "4"
                        })
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const next_project = (NextProject);

;// CONCATENATED MODULE: ./src/pages/proyectos/project-details2-dark.jsx







const ProjectDetails2Dark = ({ data , DataDos , DataTres , next , slide , DataCuatro  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Dark/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(project_description, {
                    projectDescriptionData: DataDos,
                    projectDescriptionDataDos: DataCuatro
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(project_video, {
                    /* projectVideoDate={data} */ idvideo: DataTres,
                    slide: slide
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_project, {
                    next: next
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {
                })
            ]
        })
    }));
};
/* harmony default export */ const project_details2_dark = (ProjectDetails2Dark);


/***/ })

};
;