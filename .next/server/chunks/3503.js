"use strict";
exports.id = 3503;
exports.ids = [3503];
exports.modules = {

/***/ 3503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_initFullNavbarMenu)
});

// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/getSiblings.js
var getSiblings = __webpack_require__(1311);
;// CONCATENATED MODULE: ./src/common/animateElement.js
const animateElement = (el, to)=>{
    function draw() {
        el.style.left = to;
    }
    draw();
};
/* harmony default export */ const common_animateElement = (animateElement);

;// CONCATENATED MODULE: ./src/common/delay.js
const delay = (time, callback)=>{
    setTimeout(function() {
        callback;
    }, time);
};
/* harmony default export */ const common_delay = (delay);

;// CONCATENATED MODULE: ./src/common/initFullNavbarMenu.js




const initFullNavbarMenu = ()=>{
    function noScroll() {
        window.scrollTo(0, 0);
    }
    var open = false, navDark = document.querySelector(".topnav.dark"), logoChan = document.querySelector(".topnav.dark .logo img"), menuIcon = document.querySelector(".topnav .menu-icon");
    if (menuIcon) {
        menuIcon.addEventListener("click", function() {
            open = !open;
            document.querySelector(".hamenu").classList.toggle("open");
            if (open) {
                common_animateElement(document.querySelector(".hamenu"), "0px");
                document.querySelector(".topnav .menu-icon .text ").classList.add("open");
                if (navDark) {
                    navDark.classList.add("navlit");
                }
                if (logoChan) {
                    logoChan.setAttribute("src", app/* lightLogo */.E8);
                }
                window.addEventListener("scroll", noScroll);
            } else {
                common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
                document.querySelector(".topnav .menu-icon .text").classList.remove("open");
                if (navDark) {
                    navDark.classList.remove("navlit");
                }
                if (logoChan) {
                    logoChan.setAttribute("src", app/* darkLogo */.Q1);
                }
                window.removeEventListener("scroll", noScroll);
            }
        });
        document.querySelectorAll(".main-menu a").forEach((item)=>{
            item.addEventListener("click", ()=>{
                common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
                document.querySelector(".topnav .menu-icon .text").classList.remove("open");
                if (navDark) {
                    navDark.classList.remove("navlit");
                }
                if (logoChan) {
                    logoChan.setAttribute("src", app/* darkLogo */.Q1);
                }
                window.removeEventListener("scroll", noScroll);
            });
        });
    }
    document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((item1)=>{
        item1.addEventListener("mouseenter", function() {
            this.style.opacity = "1";
            (0,getSiblings/* default */.Z)(this).forEach((item)=>{
                item.style.opacity = ".5";
            });
        });
        item1.addEventListener("mouseleave", function() {
            document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((item2)=>{
                item2.style.opacity = "1";
            });
        });
    });
    if (document.querySelectorAll(".main-menu > li .dmenu").length) {
        document.querySelectorAll(".main-menu > li .dmenu").forEach((item2)=>{
            item2.addEventListener("click", function() {
                document.querySelector(".main-menu").classList.add("gosub");
                (0,getSiblings/* default */.Z)(this.parentNode.parentNode).forEach((item)=>{
                    item.childNodes[1] ? item.childNodes[1].classList.remove("sub-open") : "";
                });
                this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
            });
        });
    }
    if (document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length) {
        document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((item)=>{
            item.addEventListener("click", function() {
                document.querySelector(".main-menu").classList.remove("gosub");
                document.querySelector(".main-menu").classList.remove("sub-open");
            });
        });
    }
};
/* harmony default export */ const common_initFullNavbarMenu = (initFullNavbarMenu);


/***/ })

};
;