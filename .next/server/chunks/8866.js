"use strict";
exports.id = 8866;
exports.ids = [8866];
exports.modules = {

/***/ 1311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getSiblings = (e)=>{
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while(sibling){
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSiblings);


/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/img/logo-light.svg","Q1":"/img/logo-dark.png","QP":true}');

/***/ }),

/***/ 265:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"#IREMOS"},"image":"/img/portfolio/full/chicas.jpg","sub":"Design"},{"id":2,"title":{"first":"Mundo","second":"Sin plástico"},"image":"/img/portfolio/full/mundo-sin-plastico.jpg","sub":"Design"},{"id":3,"title":{"first":"ALCARRITO"},"image":"/img/portfolio/full/banner-principal.jpg","sub":"Design"},{"id":4,"title":{"first":"Nuestras","second":"Campañas"},"image":"/img/portfolio/full/banner-campana.jpg","sub":"Design"}]');

/***/ })

};
;