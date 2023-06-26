"use strict";
exports.id = 1202;
exports.ids = [1202];
exports.modules = {

/***/ 1202:
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
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Footer/footer.jsx
var footer = __webpack_require__(3391);
// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(2532);
;// CONCATENATED MODULE: ./src/components/Project-description/project-description.jsx


const ProjectDescription = ({ projectDescriptionData  })=>{
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
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
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
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text js-scroll__content",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "extra-text",
                                children: projectDescriptionData
                            })
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
;// CONCATENATED MODULE: ./src/components/Project-video/project-video.jsx




const ProjectVideo = ({ projectVideoDate , idvideo  })=>{
    console.clear();
    const [isOpen, setOpen] = external_react_default().useState(false);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "video-wrapper section-padding bg-img parallaxie valign",
                style: {
                    backgroundImage: `url(${projectVideoDate})`
                },
                "data-overlay-dark": "4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "z-i full-width text-center",
                    children: [
                         false && /*#__PURE__*/ 0,
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "vid",
                            onClick: (e)=>{
                                e.preventDefault();
                                setOpen(true);
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
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const project_video = (ProjectVideo);

;// CONCATENATED MODULE: ./src/components/Next-project/next-project.jsx


const NextProject = ()=>{
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
                                backgroundImage: "url(/img/portfolio/project2/6.jpg)"
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

;// CONCATENATED MODULE: ./src/pages/project-details2/project-details2-dark.jsx







const ProjectDetails2Dark = ({ data , DataDos , DataTres  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Dark/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(project_description, {
                    projectDescriptionData: DataDos
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(project_video, {
                    projectVideoDate: data,
                    idvideo: DataTres
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_project, {
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