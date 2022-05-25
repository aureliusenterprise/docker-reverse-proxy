(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-dashboard-module"],{

/***/ "./src/app/dashboards/dashboard-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboards/dashboard-routing.module.ts ***!
  \********************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models4insight_shell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/shell */ "../../libs/shell/src/index.ts");
/* harmony import */ var _domains_domains_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domains/domains.component */ "./src/app/dashboards/domains/domains.component.ts");






const childRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'domains'
    },
    {
        path: 'domains',
        component: _domains_domains_component__WEBPACK_IMPORTED_MODULE_3__["DomainsComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'domains'
    }
];
const routes = [
    _models4insight_shell__WEBPACK_IMPORTED_MODULE_2__["Shell"].childRoutes([
        {
            path: '',
            component: _domains_domains_component__WEBPACK_IMPORTED_MODULE_3__["DomainsComponent"],
            children: childRoutes
        }
    ])
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard.module.ts":
/*!************************************************!*\
  !*** ./src/app/dashboards/dashboard.module.ts ***!
  \************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboards/dashboard-routing.module.ts");
/* harmony import */ var _domains_cards_cards_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domains/cards/cards-dashboard.component */ "./src/app/dashboards/domains/cards/cards-dashboard.component.ts");
/* harmony import */ var _domains_domains_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domains/domains.component */ "./src/app/dashboards/domains/domains.component.ts");







class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_domains_domains_component__WEBPACK_IMPORTED_MODULE_5__["DomainsComponent"], _domains_cards_cards_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["CardDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_domains_domains_component__WEBPACK_IMPORTED_MODULE_5__["DomainsComponent"], _domains_cards_cards_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["CardDashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboards/domains/cards/cards-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboards/domains/cards/cards-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: CardDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDashboardComponent", function() { return CardDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CardDashboardComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r832 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardDashboardComponent_ng_container_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r832); const ctx_r831 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r831.directToDetailsPage(ctx_r831.dataDomain.guid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Data Dictionary: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r829 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r829.dataDomain.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r829.dataDomain.totalNumberOfEntities, " conceptual entities ");
} }
function CardDashboardComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " No data Dictionary created. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r830 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r830.dataDomain.name, "");
} }
class CardDashboardComponent {
    constructor(router) {
        this.router = router;
    }
    directToDetailsPage(guid) {
        this.router.navigate(['search/details', guid]);
    }
}
CardDashboardComponent.ɵfac = function CardDashboardComponent_Factory(t) { return new (t || CardDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CardDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDashboardComponent, selectors: [["models4insight-cards-dashboard"]], inputs: { dataDomain: "dataDomain" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])], decls: 3, vars: 2, consts: [[1, "container"], [4, "ngIf"], [1, "active", "box", 3, "click"], [1, "title", "is-6", "name"], [1, "subtitle", "is-6"], [1, "inactive", "box"], [1, "title", "is-5"]], template: function CardDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardDashboardComponent_ng_container_1_Template, 8, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardDashboardComponent_ng_container_2_Template, 6, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataDomain.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataDomain.isActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".active[_ngcontent-%COMP%] {\n  border: 0.125rem solid #00D1B2;\n  cursor: pointer;\n}\n\n.name[_ngcontent-%COMP%] {\n  border-bottom: 0.25rem solid #00D1B2;\n  padding-bottom: 0.2rem;\n  margin-bottom: 0.125rem;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  opacity: 0.5;\n  color: black;\n}\n\n.box[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: 7rem;\n  margin: 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvYXRsYXMvc3JjL2FwcC9kYXNoYm9hcmRzL2RvbWFpbnMvY2FyZHMvQzpcXFVzZXJzXFx0aGlqc1xcRGV2ZWxvcG1lbnRcXG1vZGVsczRpbnNpZ2h0L2FwcHNcXGF0bGFzXFxzcmNcXGFwcFxcZGFzaGJvYXJkc1xcZG9tYWluc1xcY2FyZHNcXGNhcmRzLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsImFwcHMvYXRsYXMvc3JjL2FwcC9kYXNoYm9hcmRzL2RvbWFpbnMvY2FyZHMvY2FyZHMtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURDQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDR0YiLCJmaWxlIjoiYXBwcy9hdGxhcy9zcmMvYXBwL2Rhc2hib2FyZHMvZG9tYWlucy9jYXJkcy9jYXJkcy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgIzAwRDFCMjtcclxuICAgIGN1cnNvcjpwb2ludGVyXHJcbn1cclxuXHJcbi5uYW1le1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCAjMDBEMUIyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjAwcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xMjVyZW1cclxufVxyXG4uaW5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJveCB7XHJcbiAgd2lkdGg6IDE1cmVtO1xyXG4gIGhlaWdodDogN3JlbTtcclxuICBtYXJnaW46IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmFjdGl2ZSB7XG4gIGJvcmRlcjogMC4xMjVyZW0gc29saWQgIzAwRDFCMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmFtZSB7XG4gIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgIzAwRDFCMjtcbiAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xMjVyZW07XG59XG5cbi5pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgb3BhY2l0eTogMC41O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ib3gge1xuICB3aWR0aDogMTVyZW07XG4gIGhlaWdodDogN3JlbTtcbiAgbWFyZ2luOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'models4insight-cards-dashboard',
                templateUrl: './cards-dashboard.component.html',
                styleUrls: ['./cards-dashboard.component.scss'],
                providers: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { dataDomain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/dashboards/domains/domains.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboards/domains/domains.component.ts ***!
  \*********************************************************/
/*! exports provided: DomainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainsComponent", function() { return DomainsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _domains_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domains.service */ "./src/app/dashboards/domains/domains.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cards_cards_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards/cards-dashboard.component */ "./src/app/dashboards/domains/cards/cards-dashboard.component.ts");






function DomainsComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "State of Data Governance at Van Oord");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "progress", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const numberOfActiveDomains_r826 = ctx.ngIf;
    const totalNumberOfDomains_r824 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", numberOfActiveDomains_r826);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", totalNumberOfDomains_r824);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", numberOfActiveDomains_r826, " of ", totalNumberOfDomains_r824, " departaments. ");
} }
function DomainsComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DomainsComponent_ng_container_1_ng_container_1_ng_container_1_Template, 7, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r822 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r822.totalNumberOfActiveDomains$));
} }
function DomainsComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "models4insight-cards-dashboard", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const domain_r828 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataDomain", domain_r828);
} }
function DomainsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DomainsComponent_ng_container_1_ng_container_1_Template, 3, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DomainsComponent_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const domains_r821 = ctx.ngIf;
    const ctx_r820 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r820.totalNumberOfDataDomains$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", domains_r821);
} }
class DomainsComponent {
    constructor(domainsService) {
        this.domainsService = domainsService;
    }
    ngOnInit() {
        this.listOfDashboardDomains$ = this.domainsService.select('listOfDashboardDomains');
        this.isRetrivingDomainsForDashboards$ = this.domainsService.select('isRetrivingDashboardInformation');
        this.totalNumberOfDataDomains$ = this.domainsService.select('totalNumberOfDataDomains');
        this.totalNumberOfActiveDomains$ = this.domainsService.select('totalNumberOfActiveDomains');
    }
}
DomainsComponent.ɵfac = function DomainsComponent_Factory(t) { return new (t || DomainsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_domains_service__WEBPACK_IMPORTED_MODULE_1__["DomainsService"])); };
DomainsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomainsComponent, selectors: [["models4insight-domains"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_domains_service__WEBPACK_IMPORTED_MODULE_1__["DomainsService"]])], decls: 3, vars: 3, consts: [[1, "container"], [4, "ngIf"], [1, "box"], [4, "ngFor", "ngForOf"], [1, "title"], [1, "progress-wrapper"], [1, "progress", "is-primary", "is-large", 3, "value", "max"], [1, "progress-value", "has-text-black"], [3, "dataDomain"]], template: function DomainsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DomainsComponent_ng_container_1_Template, 5, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.listOfDashboardDomains$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _cards_cards_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["CardDashboardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 68px;\n}\n\n.under-navbar[_ngcontent-%COMP%] {\n  margin-top: 68px;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n\n.progress-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.progress-value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: calc(1rem / 1.5);\n  line-height: 1rem;\n  font-weight: bold;\n}\n\n.progress.is-large[_ngcontent-%COMP%]    + .progress-value[_ngcontent-%COMP%] {\n  font-size: calc(1.5rem / 1.5);\n  line-height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvYXRsYXMvc3JjL2FwcC9kYXNoYm9hcmRzL2RvbWFpbnMvQzpcXFVzZXJzXFx0aGlqc1xcRGV2ZWxvcG1lbnRcXG1vZGVsczRpbnNpZ2h0L2FwcHNcXGF0bGFzXFxzcmNcXGFwcFxcZGFzaGJvYXJkc1xcZG9tYWluc1xcZG9tYWlucy5jb21wb25lbnQuc2NzcyIsImFwcHMvYXRsYXMvc3JjL2FwcC9kYXNoYm9hcmRzL2RvbWFpbnMvZG9tYWlucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDR0E7O0FEREE7RUFDRSw0QkFBQTtPQUFBLHVCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FERkE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0FDS0YiLCJmaWxlIjoiYXBwcy9hdGxhcy9zcmMvYXBwL2Rhc2hib2FyZHMvZG9tYWlucy9kb21haW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiA2OHB4O1xyXG59XHJcbi51bmRlci1uYXZiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogNjhweDtcclxufVxyXG4uYm94IHtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IHJvdztcclxuZmxleC13cmFwOiB3cmFwO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbn1cclxuLnByb2dyZXNzLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzLXZhbHVlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgZm9udC1zaXplOiBjYWxjKDFyZW0gLyAxLjUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MuaXMtbGFyZ2UrLnByb2dyZXNzLXZhbHVlIHtcclxuICBmb250LXNpemU6IGNhbGMoMS41cmVtIC8gMS41KTtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDY4cHg7XG59XG5cbi51bmRlci1uYXZiYXIge1xuICBtYXJnaW4tdG9wOiA2OHB4O1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG59XG5cbi5wcm9ncmVzcy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZ3Jlc3MtdmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtIC8gMS41KTtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZ3Jlc3MuaXMtbGFyZ2UgKyAucHJvZ3Jlc3MtdmFsdWUge1xuICBmb250LXNpemU6IGNhbGMoMS41cmVtIC8gMS41KTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'models4insight-domains',
                templateUrl: './domains.component.html',
                styleUrls: ['./domains.component.scss'],
                providers: [_domains_service__WEBPACK_IMPORTED_MODULE_1__["DomainsService"]]
            }]
    }], function () { return [{ type: _domains_service__WEBPACK_IMPORTED_MODULE_1__["DomainsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboards/domains/domains.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboards/domains/domains.service.ts ***!
  \*******************************************************/
/*! exports provided: DomainsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainsService", function() { return DomainsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_atlas_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/atlas/api */ "../../libs/atlas/api/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");





const dashboardDomainsDefaultContext = {
    isRetrivingDashboardInformation: true
};
class DomainsService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["BasicStore"] {
    constructor() {
        super({ name: 'DashBoardDomain', defaultState: dashboardDomainsDefaultContext });
        this.init();
    }
    init() {
        this.getAllDomainsForDashboard();
    }
    getAllDomainsForDashboard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const results = yield Object(_models4insight_atlas_api__WEBPACK_IMPORTED_MODULE_2__["getDashboard"])().toPromise();
            const listOfDomains = Object.values(results.domains).sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            const totalNumberOfDataDomains = results.totalNumberOfDomains;
            const numberOfActiveDomains = results.totalNumberOfActiveDomains;
            this.update({
                description: "New set of Dashboards available",
                payload: {
                    isRetrivingDashboardInformation: false,
                    listOfDashboardDomains: listOfDomains,
                    totalNumberOfDataDomains: totalNumberOfDataDomains,
                    totalNumberOfActiveDomains: numberOfActiveDomains
                }
            });
        });
    }
}
DomainsService.ɵfac = function DomainsService_Factory(t) { return new (t || DomainsService)(); };
DomainsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DomainsService, factory: DomainsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomainsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboards-dashboard-module-es2015.js.map