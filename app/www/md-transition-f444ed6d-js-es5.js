(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["md-transition-f444ed6d-js"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/md.transition-f444ed6d.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/md.transition-f444ed6d.js ***!
  \*************************************************************************/
/*! exports provided: mdTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function() { return mdTransitionAnimation; });
/* harmony import */ var _helpers_e0fdb9d0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-e0fdb9d0.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-e0fdb9d0.js");
/* harmony import */ var _animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-86ecfd53.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-86ecfd53.js");


var mdTransitionAnimation = function (_, opts) {
    var OFF_BOTTOM = '40px';
    var CENTER = '0px';
    var backDirection = (opts.direction === 'back');
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    var ionPageElement = getIonPageElement(enteringEl);
    var enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
    var rootTransition = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
    rootTransition
        .addElement(ionPageElement)
        .fill('both')
        .beforeRemoveClass('ion-page-invisible');
    // animate the component itself
    if (backDirection) {
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition
            .duration(opts.duration || 280)
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .fromTo('transform', "translateY(" + OFF_BOTTOM + ")", "translateY(" + CENTER + ")")
            .fromTo('opacity', 0.01, 1);
    }
    // Animate toolbar if it's there
    if (enteringToolbarEle) {
        var enteringToolBar = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
        enteringToolBar.addElement(enteringToolbarEle);
        rootTransition.addAnimation(enteringToolBar);
    }
    // setup leaving view
    if (leavingEl && backDirection) {
        // leaving content
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
        var leavingPage = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
        leavingPage
            .addElement(getIonPageElement(leavingEl))
            .fromTo('transform', "translateY(" + CENTER + ")", "translateY(" + OFF_BOTTOM + ")")
            .fromTo('opacity', 1, 0);
        rootTransition.addAnimation(leavingPage);
    }
    return rootTransition;
};
var getIonPageElement = function (element) {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};



/***/ })

}]);
//# sourceMappingURL=md-transition-f444ed6d-js-es5.js.map