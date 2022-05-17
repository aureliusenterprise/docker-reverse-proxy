function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GkhH:function(t,e,n){"use strict";n.r(e);var a,i=n("2kYt"),o=n("Pq5H"),r=n("sEIs"),c=n("S3aa"),s=n("D57K"),l=n("j8iW"),f=n("DNhY"),u=n("EM62"),d={isRetrivingDashboardInformation:!0},m=((a=function(t){function e(){var t;return _classCallCheck(this,e),(t=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,{name:"DashBoardDomain",defaultState:d}))).init(),t}return _inherits(e,t),_createClass(e,[{key:"init",value:function(){this.getAllDomainsForDashboard()}},{key:"getAllDomainsForDashboard",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.d)().toPromise();case 2:e=t.sent,n=Object.values(e.domains).sort((function(t,e){return t.name.localeCompare(e.name)})),this.update({description:"New set of Dashboards available",payload:{isRetrivingDashboardInformation:!1,listOfDashboardDomains:n,totalNumberOfDataDomains:e.totalNumberOfDomains,totalNumberOfActiveDomains:e.totalNumberOfActiveDomains}});case 5:case"end":return t.stop()}}),t,this)})))}}]),e}(f.b)).\u0275fac=function(t){return new(t||a)},a.\u0275prov=u.Tb({token:a,factory:a.\u0275fac}),a);function p(t,e){if(1&t){var n=u.ec();u.bc(0),u.dc(1,"div",2),u.lc("click",(function(t){u.Ic(n);var e=u.pc();return e.directToDetailsPage(e.dataDomain.guid)})),u.dc(2,"p",3),u.Sc(3),u.cc(),u.dc(4,"p"),u.Sc(5," Data Dictionary: "),u.cc(),u.dc(6,"p",4),u.Sc(7),u.cc(),u.cc(),u.ac()}if(2&t){var a=u.pc();u.Kb(3),u.Uc(" ",a.dataDomain.name,""),u.Kb(4),u.Uc(" ",a.dataDomain.totalNumberOfEntities," conceptual entities ")}}function b(t,e){if(1&t&&(u.bc(0),u.dc(1,"div",5),u.dc(2,"h2",6),u.Sc(3),u.cc(),u.dc(4,"p"),u.Sc(5," No data Dictionary created. "),u.cc(),u.cc(),u.ac()),2&t){var n=u.pc();u.Kb(3),u.Uc(" ",n.dataDomain.name,"")}}var h,g=((h=function(){function t(e){_classCallCheck(this,t),this.router=e}return _createClass(t,[{key:"directToDetailsPage",value:function(t){this.router.navigate(["search/details",t])}}]),t}()).\u0275fac=function(t){return new(t||h)(u.Xb(r.g))},h.\u0275cmp=u.Rb({type:h,selectors:[["models4insight-cards-dashboard"]],inputs:{dataDomain:"dataDomain"},features:[u.Jb([])],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],[1,"active","box",3,"click"],[1,"title","is-6","name"],[1,"subtitle","is-6"],[1,"inactive","box"],[1,"title","is-5"]],template:function(t,e){1&t&&(u.dc(0,"div",0),u.Qc(1,p,8,2,"ng-container",1),u.Qc(2,b,6,1,"ng-container",1),u.cc()),2&t&&(u.Kb(1),u.wc("ngIf",e.dataDomain.isActive),u.Kb(1),u.wc("ngIf",!e.dataDomain.isActive))},directives:[i.t],styles:[".active[_ngcontent-%COMP%]{border:.125rem solid #00d1b2;cursor:pointer}.name[_ngcontent-%COMP%]{border-bottom:.25rem solid #00d1b2;padding-bottom:.2rem;margin-bottom:.125rem}.inactive[_ngcontent-%COMP%]{background-color:#d3d3d3;opacity:.5;color:#000}.box[_ngcontent-%COMP%]{width:15rem;height:7rem;margin:1.5rem;text-align:center}"]}),h);function v(t,e){if(1&t&&(u.bc(0),u.dc(1,"div",4),u.Sc(2,"State of Data Governance at Van Oord"),u.cc(),u.dc(3,"div",5),u.Yb(4,"progress",6),u.dc(5,"p",7),u.Sc(6),u.cc(),u.cc(),u.ac()),2&t){var n=e.ngIf,a=u.pc().ngIf;u.Kb(4),u.xc("value",n),u.xc("max",a),u.Kb(2),u.Vc(" ",n," of ",a," departaments. ")}}function D(t,e){if(1&t&&(u.bc(0),u.Qc(1,v,7,4,"ng-container",1),u.qc(2,"async"),u.ac()),2&t){var n=u.pc(2);u.Kb(1),u.wc("ngIf",u.rc(2,1,n.totalNumberOfActiveDomains$))}}function O(t,e){if(1&t&&(u.bc(0),u.Yb(1,"models4insight-cards-dashboard",8),u.ac()),2&t){var n=e.$implicit;u.Kb(1),u.wc("dataDomain",n)}}function _(t,e){if(1&t&&(u.bc(0),u.Qc(1,D,3,3,"ng-container",1),u.qc(2,"async"),u.dc(3,"div",2),u.Qc(4,O,2,1,"ng-container",3),u.cc(),u.ac()),2&t){var n=e.ngIf,a=u.pc();u.Kb(1),u.wc("ngIf",u.rc(2,2,a.totalNumberOfDataDomains$)),u.Kb(3),u.wc("ngForOf",n)}}var y,w,C=((y=function(){function t(e){_classCallCheck(this,t),this.domainsService=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.listOfDashboardDomains$=this.domainsService.select("listOfDashboardDomains"),this.isRetrivingDomainsForDashboards$=this.domainsService.select("isRetrivingDashboardInformation"),this.totalNumberOfDataDomains$=this.domainsService.select("totalNumberOfDataDomains"),this.totalNumberOfActiveDomains$=this.domainsService.select("totalNumberOfActiveDomains")}}]),t}()).\u0275fac=function(t){return new(t||y)(u.Xb(m))},y.\u0275cmp=u.Rb({type:y,selectors:[["models4insight-domains"]],features:[u.Jb([m])],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"box"],[4,"ngFor","ngForOf"],[1,"title"],[1,"progress-wrapper"],[1,"progress","is-primary","is-large",3,"value","max"],[1,"progress-value","has-text-black"],[3,"dataDomain"]],template:function(t,e){1&t&&(u.dc(0,"div",0),u.Qc(1,_,5,4,"ng-container",1),u.qc(2,"async"),u.cc()),2&t&&(u.Kb(1),u.wc("ngIf",u.rc(2,1,e.listOfDashboardDomains$)))},directives:[i.t,i.s,g],pipes:[i.b],styles:[".container[_ngcontent-%COMP%], .under-navbar[_ngcontent-%COMP%]{margin-top:68px}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.title[_ngcontent-%COMP%]{-moz-text-align-last:center;text-align-last:center}.progress-wrapper[_ngcontent-%COMP%]{position:relative}.progress-value[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;transform:translateX(-50%);font-size:.66667rem;line-height:1rem;font-weight:700}.progress.is-large[_ngcontent-%COMP%] + .progress-value[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}"]}),y),P=[c.a.childRoutes([{path:"",component:C,children:[{path:"",pathMatch:"full",redirectTo:"domains"},{path:"domains",component:C},{path:"**",pathMatch:"full",redirectTo:"domains"}]}])],k=((w=function t(){_classCallCheck(this,t)}).\u0275mod=u.Vb({type:w}),w.\u0275inj=u.Ub({factory:function(t){return new(t||w)},imports:[[r.j.forChild(P)],r.j]}),w);n.d(e,"DashboardModule",(function(){return I}));var x,I=((x=function t(){_classCallCheck(this,t)}).\u0275mod=u.Vb({type:x}),x.\u0275inj=u.Ub({factory:function(t){return new(t||x)},imports:[[i.c,o.h,k]]}),x)}}]);