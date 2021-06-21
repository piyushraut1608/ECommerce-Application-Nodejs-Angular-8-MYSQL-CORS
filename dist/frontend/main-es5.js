(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<main [ngClass]=\"{'py-0 px-0 my-0 mx-0': specialPage}\"  class=\"mx-lg-5\" >\n    \n  <div class=\"mt-5\">\n    \n      <div div class=\"col-sm\">\n        <app-profile1></app-profile1>\n      </div>\n   \n  </div>\n</main>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/main-layout/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/main-layout/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <!--Footer-->\n    <footer class=\"page-footer text-center font-small primary-color-dark darken-2 mt-4 wow fadeIn  \">\n\n        <!--Call to action-->\n        <div class=\"pt-4\">\n            <a class=\"btn btn-outline-white\" href=\"https://mdbootstrap.com/getting-started/\" target=\"_blank\" role=\"button\">Download MDB\n                <mdb-icon fas icon=\"download\" class=\"ml-2\"></mdb-icon>\n            </a>\n            <a class=\"btn btn-outline-white\" href=\"https://mdbootstrap.com/bootstrap-tutorial/\" target=\"_blank\" role=\"button\">Start free tutorial\n                <mdb-icon fas icon=\"graduation-cap\" class=\"ml-2\"></mdb-icon>\n            </a>\n        </div>\n        <!--/.Call to action-->\n\n        <hr class=\"my-4\">\n\n        <!-- Social icons -->\n        <div class=\"pb-4\">\n            <a href=\"https://www.facebook.com/mdbootstrap\" target=\"_blank\">\n                <mdb-icon fab icon=\"facebook-f\" class=\"mr-3\"></mdb-icon>\n            </a>\n\n            <a href=\"https://twitter.com/MDBootstrap\" target=\"_blank\">\n                <mdb-icon fab icon=\"twitter\" class=\"mr-3\"></mdb-icon>\n            </a>\n\n            <a href=\"https://www.youtube.com/watch?v=7MUISDJ5ZZ4\" target=\"_blank\">\n                <mdb-icon fab icon=\"youtube\" class=\"mr-3\"></mdb-icon>\n            </a>\n\n            <a href=\"https://plus.google.com/u/0/b/107863090883699620484\" target=\"_blank\">\n                <mdb-icon fab icon=\"google-plus-g\" class=\"mr-3\"></mdb-icon>\n            </a>\n\n            <a href=\"https://dribbble.com/mdbootstrap\" target=\"_blank\">\n                <mdb-icon fab icon=\"dribbble\" class=\"mr-3\"></mdb-icon>\n            </a>\n\n            <a href=\"https://pinterest.com/mdbootstrap\" target=\"_blank\">\n                <mdb-icon fab icon=\"pinterest\" class=\"mr-3\"></mdb-icon>\n            </a>\n\n            <a href=\"https://github.com/mdbootstrap/bootstrap-material-design\" target=\"_blank\">\n                <mdb-icon fab icon=\"github\" class=\"mr-3\"></mdb-icon>\n            </a>\n\n            <a href=\"http://codepen.io/mdbootstrap/\" target=\"_blank\">\n                <mdb-icon fab icon=\"codepen\" class=\"mr-3\"></mdb-icon>\n            </a>\n        </div>\n        <!-- Social icons -->\n\n        <!--Copyright-->\n        <div class=\"footer-copyright py-3\">\n            © 2018 Copyright:\n            <a href=\"https://mdbootstrap.com/bootstrap-tutorial/\" target=\"_blank\"> MDBootstrap.com </a>\n        </div>\n        <!--/.Copyright-->\n\n    </footer>\n    <!--/.Footer-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/main-layout/navigation/navigation.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/main-layout/navigation/navigation.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Main Navigation-->\n<header>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar-fixed position-fixed\">\n\n        <a class=\"logo-wrapper waves-effect\">\n            <img src=\"../../../../assets/img/angular-mdb.png\" class=\"img-fluid\" alt=\"\">\n        </a>\n\n        <div class=\"list-group list-group-flush\">\n\n            <a routerLink=\"dashboards/v1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\n                <mdb-icon fas icon=\"chart-pie\" class=\"mr-3\"></mdb-icon>Dashboard\n            </a>\n            <a routerLink=\"profiles/profile1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\n                <mdb-icon fas icon=\"user\" class=\"mr-3\"></mdb-icon>Profile</a>\n            <a routerLink=\"tables/table1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\n                <mdb-icon fas icon=\"table\" class=\"mr-3\"></mdb-icon>Tables</a>\n            <a routerLink=\"maps/map1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\n                <mdb-icon far icon=\"map\" class=\"mr-3\"></mdb-icon>Maps</a>\n            <a routerLink=\"nonExistingPath\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\n                <mdb-icon fas icon=\"exclamation\" class=\"mr-3\"></mdb-icon>404</a>\n\n        </div>\n\n    </div>\n    <!-- Sidebar -->\n\n    <!--Navbar-->\n    <mdb-navbar [containerInside]=\"false\" SideClass=\"navbar navbar-expand-lg navbar-light white\">\n\n        <!-- Navbar brand -->\n        <logo class=\"ml-3\">\n            <a class=\"navbar-brand\" href=\"https://mdbootstrap.com/angular/angular-bootstrap-getting-started/\">\n                <strong class=\"blue-text\">MDB</strong>\n            </a>\n        </logo>\n\n        <!-- Collapsible content -->\n        <links>\n\n            <!-- Links -->\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" mdbWavesEffect>Home\n                        <span class=\"sr-only\">(current)</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"https://mdbootstrap.com/angular/angular-bootstrap-getting-started/\" target=\"_blank\" mdbWavesEffect>About MDB</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"https://mdbootstrap.com/angular/getting-started/\" target=\"_blank\" mdbWavesEffect>Free download</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"https://mdbootstrap.com/angular/angular-tutorial/\" target=\"_blank\" mdbWavesEffect>Free tutorials</a>\n                </li>\n            </ul>\n            <!-- Links -->\n\n            <!-- Search form -->\n            <ul class=\"navbar-nav nav-flex-icons\">\n\n                    <li class=\"nav-item\">\n                        <a href=\"https://www.facebook.com/mdbootstrap\" class=\"nav-link\" target=\"_blank\" mdbWavesEffect>\n                            <mdb-icon fab icon=\"facebook-f\"></mdb-icon>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"https://twitter.com/MDBootstrap\" class=\"nav-link\" target=\"_blank\" mdbWavesEffect>\n                            <mdb-icon fab icon=\"twitter\"></mdb-icon>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"https://github.com/mdbootstrap/bootstrap-material-design\" class=\"nav-link border border-light\"\n                            target=\"_blank\" mdbWavesEffect>\n                            <mdb-icon fab icon=\"github\" class=\"mr-2\"></mdb-icon>MDB GitHub\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"https://mdbootstrap.com/products/angular-ui-kit/\" class=\"ml-1 nav-link border border-light rounded\" mdbWavesEffect>\n                            <mdb-icon far icon=\"gem\" class=\" left\"></mdb-icon> Go Pro</a>\n                    </li>\n                </ul>\n        </links>\n        <!-- Collapsible content -->\n\n    </mdb-navbar>\n    <!--/.Navbar-->\n\n</header>\n<!--Main Navigation-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/cascading-card/cascading-card.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/shared/components/cascading-card/cascading-card.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<div [ngClass]=\"(headerType==='wide')?'wider':(headerType==='narrow')?'narrower':''\" class=\"card card-cascade mt-3\">\n    <!--Card image-->\n    <div class=\"view overlay hm-white-slight waves-light\" mdbWavesEffect>\n        <img src={{src}} class=\"img-fluid\">\n        <a>\n            <div class=\"mask\"></div>\n        </a>\n    </div>\n    <!--/Card image-->\n    <!--Card content-->\n    <div class=\"card-body\" [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n        <h4 class=\"card-title mb-3 font-bold\" *ngIf=\"title!==''\"><strong>{{title}}</strong></h4>\n            <ng-content></ng-content>\n    </div>\n    <!--/.Card content-->\n\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/cascading-panel/cascading-panel.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/shared/components/cascading-panel/cascading-panel.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<div [ngClass]=\"(headerType==='wide')?'wider':(headerType==='narrow')?'narrower':''\" class=\"card card-cascade\">\n  <!--Card image-->\n  <div class=\"view gradient-card-header {{panelClass}}\">\n    <h4 class=\"h4-responsive\">{{title}} </h4>\n  </div>\n  <!--/Card image-->\n  <!--Card content-->\n  <div class=\"card-body\" [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n    <ng-content></ng-content>\n  </div>\n  <!--/.Card content-->\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/modal/modal.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/shared/components/modal/modal.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Button -->\n<button type=\"button\" class=\"btn btn-primary relative waves-light\" (click)=\"basicModal.show()\" mdbWavesEffect>Launch demo modal</button>\n<!-- /Button -->\n\n<div mdbModal #basicModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n    <div class=\"modal-dialog\" [ngClass]=\"getClass()\" role=\"document\">\n            <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/overlay-card/overlay-card.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/shared/components/overlay-card/overlay-card.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card card-image mb-3\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\"  [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n  <div class=\"text-white d-flex py-5 px-4 {{color}}\"\n >\n      <ng-content></ng-content></div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/panel/panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/shared/components/panel/panel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Panel-->\n<div class=\"card mt-3\" [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n  <h3 class=\"card-header {{color}} white-text\" *ngIf=\"header!==''\">{{header}}</h3>\n  <div class=\"card-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"card-footer text-muted {{color}} white-text\" *ngIf=\"footer!==''\">\n    <p class=\"mb-0\">{{footer}}</p>\n  </div>\n</div>\n<!--/.Panel-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/views/dashboards/common/stats-card/stats-card.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/views/dashboards/common/stats-card/stats-card.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-lg-5\">\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-xl-3 col-md-6 mb-r\">\n\n            <!--Card-->\n            <mdb-card cascade=\"true\" class=\"cascading-admin-card\">\n\n                <!--Card Data-->\n                <div class=\"admin-up\">\n                    <mdb-icon far icon=\"money-bill-alt\" class=\"primary-color\"></mdb-icon>\n                    <div class=\"data\">\n                        <p>SALES</p>\n                        <h4><strong>$2000</strong></h4>\n                    </div>\n                </div>\n                <!--/.Card Data-->\n\n                <!--Card content-->\n                <mdb-card-body>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                             aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <!--Text-->\n                    <p class=\"card-text\">Better than last week (25%)</p>\n                </mdb-card-body>\n                <!--/.Card content-->\n\n            </mdb-card>\n            <!--/.Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-xl-3 col-md-6 mb-r\">\n\n            <!--Card-->\n            <mdb-card cascade=\"true\" class=\"cascading-admin-card\">\n\n                <!--Card Data-->\n                <div class=\"admin-up\">\n                    <mdb-icon fas icon=\"chart-line\" class=\"warning-color\"></mdb-icon>\n                    <div class=\"data\">\n                        <p>SUBSCRIPTIONS</p>\n                        <h4><strong>200</strong></h4>\n                    </div>\n                </div>\n                <!--/.Card Data-->\n\n                <!--Card content-->\n                <mdb-card-body>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg grey darken-2\" role=\"progressbar\" style=\"width: 25%\"\n                             aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <!--Text-->\n                    <p class=\"card-text\">Worse than last week (25%)</p>\n                </mdb-card-body>\n                <!--/.Card content-->\n\n            </mdb-card>\n            <!--/.Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-xl-3 col-md-6 mb-r\">\n\n            <!--Card-->\n            <mdb-card cascade=\"true\" class=\"cascading-admin-card\">\n\n                <!--Card Data-->\n                <div class=\"admin-up\">\n                    <mdb-icon fas icon=\"chart-pie\" class=\"light-blue lighten-1\"></mdb-icon>\n                    <div class=\"data\">\n                        <p>TRAFFIC</p>\n                        <h4><strong>20000</strong></h4>\n                    </div>\n                </div>\n                <!--/.Card Data-->\n\n                <!--Card content-->\n                <mdb-card-body>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar grey darken-2\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\"\n                             aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <!--Text-->\n                    <p class=\"card-text\">Worse than last week (75%)</p>\n                </mdb-card-body>\n                <!--/.Card content-->\n\n            </mdb-card>\n            <!--/.Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-xl-3 col-md-6 mb-r\">\n\n            <!--Card-->\n            <mdb-card cascade=\"true\" class=\"cascading-admin-card\">\n\n                <!--Card Data-->\n                <div class=\"admin-up\">\n                    <mdb-icon fas icon=\"chart-bar\" class=\"red accent-2\"></mdb-icon>\n                    <div class=\"data\">\n                        <p>ORGANIC TRAFFIC</p>\n                        <h4><strong>2000</strong></h4>\n                    </div>\n                </div>\n                <!--/.Card Data-->\n\n                <!--Card content-->\n                <mdb-card-body>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                             aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <!--Text-->\n                    <p class=\"card-text\">Better than last week (25%)</p>\n                </mdb-card-body>\n                <!--/.Card content-->\n\n            </mdb-card>\n            <!--/.Card-->\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/views/dashboards/common/stats-card2/stats-card2.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/views/dashboards/common/stats-card2/stats-card2.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-lg-5\">\n    <!--Grid row-->\n    <div class=\"row\">\n        <!--Grid column-->\n        <div class=\"col-xl-3 col-md-6 mb-r\">\n            <!--Card Primary-->\n            <mdb-card bgColor=\"primary-color\" class=\"classic-admin-card\">\n                <mdb-card-body>\n                    <div class=\"pull-right\">\n                        <mdb-icon far icon=\"money-bill-alt\"></mdb-icon>\n                    </div>\n                    <p class=\"white-text\">SALES</p>\n                    <h4>\n                        <strong>$2000</strong>\n                    </h4>\n                </mdb-card-body>\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                         aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"card-body\">\n                    <p>Better than last week (25%)</p>\n                </div>\n            </mdb-card>\n            <!--/.Card Primary-->\n        </div>\n        <!--Grid column-->\n        <!--Grid column-->\n        <div class=\"col-xl-3 col-md-6 mb-r\">\n            <!--Card Warning-->\n            <mdb-card bgColor=\"warning-color\" class=\"classic-admin-card\">\n                <mdb-card-body>\n                    <div class=\"pull-right\">\n                        <mdb-icon fas icon=\"chart-line\"></mdb-icon>\n                    </div>\n                    <p>SUBSCRIPTIONS</p>\n                    <h4>\n                        <strong>200</strong>\n                    </h4>\n                </mdb-card-body>\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                         aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"card-body\">\n                    <p>Worse than last week (25%)</p>\n                </div>\n            </mdb-card>\n            <!--/.Card Warning-->\n        </div>\n        <!--Grid column-->\n        <!--Grid column-->\n        <div class=\"col-xl-3 col-md-6 mb-r\">\n            <!--Card Blue-->\n            <mdb-card bgColor=\"light-blue\" class=\"classic-admin-card lighten-1\">\n                <mdb-card-body>\n                    <div class=\"pull-right\">\n                        <mdb-icon fas icon=\"chart-pie\"></mdb-icon>\n                    </div>\n                    <p>TRAFFIC</p>\n                    <h4>\n                        <strong>20000</strong>\n                    </h4>\n                </mdb-card-body>\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\"\n                         aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"card-body\">\n                    <p>Better than last week (75%)</p>\n                </div>\n            </mdb-card>\n            <!--/.Card Blue-->\n        </div>\n        <!--Grid column-->\n        <!--Grid column-->\n        <div class=\"col-xl-3 col-md-6 mb-r\">\n            <!--Card Red-->\n            <mdb-card bgColor=\"red\" class=\"classic-admin-card accent-2\">\n                <mdb-card-body>\n                    <div class=\"pull-right\">\n                        <mdb-icon fas icon=\"chart-bar\"></mdb-icon>\n                    </div>\n                    <p>ORGANIC TRAFFIC</p>\n                    <h4>\n                        <strong>2000</strong>\n                    </h4>\n                </mdb-card-body>\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                         aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"card-body\">\n                    <p>Better than last week (25%)</p>\n                </div>\n            </mdb-card>\n            <!--/.Card Red-->\n        </div>\n        <!--Grid column-->\n    </div>\n    <!--Grid row-->\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/views/dashboards/dashboard1/dashboard1.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/views/dashboards/dashboard1/dashboard1.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mx-lg-5\">\n<!-- Heading -->\n<mdb-card class=\"mb-4 wow fadeIn\">\n\n    <!--Card content-->\n    <mdb-card-body class=\"d-sm-flex justify-content-between\">\n\n        <h4 class=\"mb-sm-0 pt-3\">\n            <a href=\"https://mdbootstrap.com/material-design-for-bootstrap/\" target=\"_blank\">Home Page</a>\n            <span>/</span>\n            <span>Dashboard</span>\n        </h4>\n\n        <form class=\"d-flex md-form justify-content-center my-0\">\n            <!-- Default input -->\n            <input type=\"search\" placeholder=\"Type your query\" aria-label=\"Search\" class=\"form-control\" mdbInput>\n            <button mdbBtn color=\"primary\" size=\"sm\" class=\"my-0 p\" type=\"submit\">\n                <mdb-icon fas icon=\"search\"></mdb-icon>\n            </button>\n\n        </form>\n\n    </mdb-card-body>\n\n</mdb-card>\n<!-- Heading -->\n\n\n\n<!--Grid row-->\n<div class=\"row wow fadeIn mt-5\">\n\n    <!--Grid column-->\n    <div class=\"col-md-9 mb-4\">\n\n        <!--Card-->\n        <mdb-card>\n\n            <!--Card content-->\n            <mdb-card-body>\n\n                <div style=\"display: block\">\n                    <canvas mdbChart [chartType]=\"chart1Type\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\"\n                            [colors]=\"chartColors\" [options]=\"chartOptions\"\n                            [legend]=\"true\">\n                    </canvas>\n                </div>\n            </mdb-card-body>\n\n        </mdb-card>\n        <!--/.Card-->\n\n    </div>\n    <!--Grid column-->\n\n    <!--Grid column-->\n    <div class=\"col-md-3 mb-4\">\n\n        <!--Card-->\n        <mdb-card class=\"mb-4\">\n\n            <!-- Card header -->\n            <div class=\"card-header text-center\">\n                Pie chart\n            </div>\n\n            <!--Card content-->\n            <mdb-card-body>\n\n                <div style=\"display: block\">\n                    <canvas mdbChart [chartType]=\"chart2Type\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\"\n                            [colors]=\"chartColors\" [options]=\"chartOptions\"\n                            [legend]=\"true\">\n                    </canvas>\n                </div>\n            </mdb-card-body>\n\n        </mdb-card>\n        <!--/.Card-->\n\n        <!--Card-->\n        <mdb-card class=\"mb-4\">\n\n            <!--Card content-->\n            <mdb-card-body>\n\n                <!-- List group links -->\n                <div class=\"list-group list-group-flush\">\n                    <a class=\"list-group-item list-group-item-action waves-effect\">Sales\n                        <mdb-badge success=\"true\" pill=\"true\" class=\"pull-right\">22%\n                            <mdb-icon fas icon=\"arrow-up\" class=\"ml-1\"></mdb-icon>\n                        </mdb-badge>\n                    </a>\n                    <a class=\"list-group-item list-group-item-action waves-effect\">Traffic\n                        <mdb-badge danger=\"true\" pill=\"true\" class=\"pull-right\">5%\n                            <mdb-icon fas icon=\"arrow-down\" class=\"ml-1\"></mdb-icon>\n                        </mdb-badge>\n                    </a>\n                    <a class=\"list-group-item list-group-item-action waves-effect\">Orders\n                        <mdb-badge primary=\"true\" pill=\"true\" class=\"pull-right\">14</mdb-badge>\n                    </a>\n                    <a class=\"list-group-item list-group-item-action waves-effect\">Issues\n                        <span class=\"badge badge-primary badge-pill pull-right\">123</span>\n                    </a>\n                    <a class=\"list-group-item list-group-item-action waves-effect\">Messages\n                        <mdb-badge primary=\"true\" pill=\"true\" class=\"pull-right\">8</mdb-badge>\n                    </a>\n                </div>\n                <!-- List group links -->\n\n            </mdb-card-body>\n\n        </mdb-card>\n        <!--/.Card-->\n\n    </div>\n    <!--Grid column-->\n\n</div>\n<!--Grid row-->\n\n<!--Grid row-->\n<div class=\"row wow fadeIn\">\n\n    <!--Grid column-->\n    <div class=\"col-md-6 mb-4\">\n\n        <!--Card-->\n        <mdb-card>\n\n            <!--Card content-->\n            <mdb-card-body>\n\n                <!-- Table  -->\n                <table class=\"table table-hover\">\n                    <!-- Table head -->\n                    <thead class=\"blue-grey lighten-4\">\n                    <tr>\n                        <th>#</th>\n                        <th>Lorem</th>\n                        <th>Ipsum</th>\n                        <th>Dolor</th>\n                    </tr>\n                    </thead>\n                    <!-- Table head -->\n\n                    <!-- Table body -->\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Cell 1</td>\n                        <td>Cell 2</td>\n                        <td>Cell 3</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Cell 4</td>\n                        <td>Cell 5</td>\n                        <td>Cell 6</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Cell 7</td>\n                        <td>Cell 8</td>\n                        <td>Cell 9</td>\n                    </tr>\n                    </tbody>\n                    <!-- Table body -->\n                </table>\n                <!-- Table  -->\n\n            </mdb-card-body>\n\n        </mdb-card>\n        <!--/.Card-->\n\n    </div>\n    <!--Grid column-->\n\n    <!--Grid column-->\n    <div class=\"col-md-6 mb-4\">\n\n        <!--Card-->\n        <mdb-card>\n\n            <!--Card content-->\n            <mdb-card-body>\n\n                <!-- Table  -->\n                <table class=\"table table-hover\">\n                    <!-- Table head -->\n                    <thead class=\"blue lighten-4\">\n                    <tr>\n                        <th>#</th>\n                        <th>Lorem</th>\n                        <th>Ipsum</th>\n                        <th>Dolor</th>\n                    </tr>\n                    </thead>\n                    <!-- Table head -->\n\n                    <!-- Table body -->\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Cell 1</td>\n                        <td>Cell 2</td>\n                        <td>Cell 3</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Cell 4</td>\n                        <td>Cell 5</td>\n                        <td>Cell 6</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Cell 7</td>\n                        <td>Cell 8</td>\n                        <td>Cell 9</td>\n                    </tr>\n                    </tbody>\n                    <!-- Table body -->\n                </table>\n                <!-- Table  -->\n\n            </mdb-card-body>\n\n        </mdb-card>\n        <!--/.Card-->\n\n    </div>\n    <!--Grid column-->\n\n</div>\n<!--Grid row-->\n\n<!--Grid row-->\n<div class=\"row wow fadeIn\">\n\n    <!--Grid column-->\n    <div class=\"col-lg-4 col-md-12 mb-4\">\n\n        <!--Card-->\n        <mdb-card>\n\n            <!-- Card header -->\n            <div class=\"card-header\">Line chart</div>\n\n            <!--Card content-->\n            <mdb-card-body>\n\n                <div style=\"display: block\">\n                    <canvas mdbChart [chartType]=\"chart3Type\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\"\n                            [colors]=\"chartColors\" [options]=\"chartOptions\"\n                            [legend]=\"true\">\n                    </canvas>\n                </div>\n            </mdb-card-body>\n\n        </mdb-card>\n        <!--/.Card-->\n\n    </div>\n    <!--Grid column-->\n\n    <!--Grid column-->\n    <div class=\"col-lg-4 col-md-6 mb-4\">\n\n        <!--Card-->\n        <mdb-card>\n\n            <!-- Card header -->\n            <div class=\"card-header\">Radar Chart</div>\n\n            <!--Card content-->\n            <mdb-card-body>\n\n                <div style=\"display: block\">\n                    <canvas mdbChart [chartType]=\"chart4Type\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\"\n                            [colors]=\"chartColors\" [options]=\"chartOptions\"\n                            [legend]=\"true\">\n                    </canvas>\n                </div>\n            </mdb-card-body>\n\n        </mdb-card>\n        <!--/.Card-->\n\n    </div>\n    <!--Grid column-->\n\n    <!--Grid column-->\n    <div class=\"col-lg-4 col-md-6 mb-4\">\n\n        <!--Card-->\n        <mdb-card>\n\n            <!-- Card header -->\n            <div class=\"card-header\">Doughnut Chart</div>\n\n            <!--Card content-->\n            <mdb-card-body>\n\n                <div style=\"display: block\">\n                    <canvas mdbChart [chartType]=\"chart5Type\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\"\n                            [colors]=\"chartColors\" [options]=\"chartOptions\"\n                            [legend]=\"true\">\n                    </canvas>\n                </div>\n            </mdb-card-body>\n\n        </mdb-card>\n        <!--/.Card-->\n\n    </div>\n    <!--Grid column-->\n\n</div>\n<!--Grid row-->\n\n<!--Grid row-->\n<div class=\"row wow fadeIn\">\n\n    <!--Grid column-->\n    <div class=\"col-md-6 mb-4\">\n\n        <!--Card-->\n        <mdb-card>\n\n\n            <div class=\"card-header\">Modals</div>\n            <!--Card content-->\n            <mdb-card-body>\n                <!--Section: Position & Sizes-->\n                <section class=\"px-4\">\n                    <h4 class=\"mb-5 mt-4 dark-grey-text text-center font-bold\">\n                        <strong>Position & Sizes</strong>\n                    </h4>\n\n                    <div class=\"text-center mb-5\">\n                        <p class=\"lead\">Click buttons below to launch modals demo</p>\n                    </div>\n\n                    <!-- First row-->\n                    <div class=\"row\">\n\n                        <!--First column-->\n                        <div class=\"col-md-3\">\n                            <h5 class=\"text-center mb-3\">Frame Modal</h5>\n\n                            <img src=\"https://mdbootstrap.com/img/brandflow/modal4.jpg\" alt=\"\"\n                                 class=\"img-fluid z-depth-1\">\n                            <div class=\"text-center\">\n                                <h5 class=\"my-3\">Position</h5>\n\n\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"frameTop.show()\"\n                                        mdbWavesEffect>\n                                    Top\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"frameBottom.show()\"\n                                        mdbWavesEffect>\n                                    Bottom\n                                </button>\n\n                                <div mdbModal #frameTop=\"mdb-modal\" class=\"modal fade top\" id=\"frameModalBottom\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: false}\">\n                                    <div class=\"modal-dialog modal-frame modal-top\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-body text-center\">\n                                                <div class=\"row px-4\">\n                                                    <p class=\"pt-1 pr-2\">Lorem ipsum dolor sit amet, consectetur\n                                                        adipisicing elit. Impedit nisi quo provident fugiat\n                                                        reprehenderit\n                                                        nostrum quos..</p>\n                                                    <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\"\n                                                            data-dismiss=\"modal\" (click)=\"frameTop.hide()\"\n                                                            mdbWavesEffect>Close\n                                                    </button>\n                                                    <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                            mdbWavesEffect>Save changes\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div mdbModal #frameBottom=\"mdb-modal\" class=\"modal fade bottom\" id=\"frameModalBottom\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: false}\">\n                                    <div class=\"modal-dialog modal-frame modal-bottom\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-body text-center\">\n                                                <div class=\"row px-4\">\n                                                    <p class=\"pt-1 pr-2\">Lorem ipsum dolor sit amet, consectetur\n                                                        adipisicing elit. Impedit nisi quo provident fugiat\n                                                        reprehenderit\n                                                        nostrum quos..</p>\n                                                    <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\"\n                                                            data-dismiss=\"modal\" (click)=\"frameBottom.hide()\"\n                                                            mdbWavesEffect>Close\n                                                    </button>\n                                                    <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                            mdbWavesEffect>Save changes\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--First column-->\n\n                        <!--Second column-->\n                        <div class=\"col-md-3\">\n                            <h5 class=\"text-center mb-3\">Side Modal</h5>\n\n                            <img src=\"https://mdbootstrap.com/img/brandflow/modal3.jpg\" alt=\"\"\n                                 class=\"img-fluid z-depth-1\">\n                            <div class=\"text-center\">\n                                <h5 class=\"my-3\">Position</h5>\n\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"sideTopRight.show()\"\n                                        mdbWavesEffect>\n                                    Top right\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"sideTopLeft.show()\"\n                                        mdbWavesEffect>\n                                    Top left\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"sideBottomRight.show()\"\n                                        mdbWavesEffect>\n                                    Bottom right\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"sideBottomLeft.show()\"\n                                        mdbWavesEffect>\n                                    Bottom left\n                                </button>\n                                <br>\n\n\n                                <div mdbModal #sideTopRight=\"mdb-modal\" class=\"modal fade right\" id=\"centralModalSm\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-side modal-top-right\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Modal title</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"sideTopRight.hide()\">\n                                                    <span aria-hidden=\"true\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                ...\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\"\n                                                        data-dismiss=\"modal\" (click)=\"sideTopRight.hide()\"\n                                                        mdbWavesEffect>Close\n                                                </button>\n                                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                        mdbWavesEffect>Save changes\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div mdbModal #sideTopLeft=\"mdb-modal\" class=\"modal fade left\" id=\"centralModalSm\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-side modal-top-left\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Modal title</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"sideTopLeft.hide()\">\n                                                    <span aria-hidden=\"true\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                ...\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\"\n                                                        data-dismiss=\"modal\" (click)=\"sideTopLeft.hide()\"\n                                                        mdbWavesEffect>Close\n                                                </button>\n                                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                        mdbWavesEffect>Save changes\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div mdbModal #sideBottomRight=\"mdb-modal\" class=\"modal fade right\" id=\"centralModalSm\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-side modal-bottom-right\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Modal title</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"sideBottomRight.hide()\">\n                                                    <span aria-hidden=\"true\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                ...\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\"\n                                                        data-dismiss=\"modal\" (click)=\"sideBottomRight.hide()\"\n                                                        mdbWavesEffect>Close\n                                                </button>\n                                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                        mdbWavesEffect>Save changes\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div mdbModal #sideBottomLeft=\"mdb-modal\" class=\"modal fade left\" id=\"centralModalSm\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-side modal-bottom-left\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Modal title</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"sideBottomLeft.hide()\">\n                                                    <span aria-hidden=\"true\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                ...\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\"\n                                                        data-dismiss=\"modal\" (click)=\"sideBottomLeft.hide()\"\n                                                        mdbWavesEffect>Close\n                                                </button>\n                                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                        mdbWavesEffect>Save changes\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--Second column-->\n\n                        <!--Third column-->\n                        <div class=\"col-md-3\">\n                            <h5 class=\"text-center mb-3\">Central Modal</h5>\n\n                            <img src=\"https://mdbootstrap.com/img/brandflow/modal2.jpg\" alt=\"\"\n                                 class=\"img-fluid z-depth-1\">\n                            <div class=\"text-center\">\n                                <h5 class=\"my-3\">Size</h5>\n\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"modalLoginAvatarDemo.show()\"\n                                        mdbWavesEffect>\n                                    Small\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"centralRegular.show()\"\n                                        mdbWavesEffect>\n                                    Medium\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"centralLarge.show()\"\n                                        mdbWavesEffect>\n                                    Large\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"centralFluid.show()\"\n                                        mdbWavesEffect>\n                                    Fluid\n                                </button>\n                                <br>\n\n                                <!--Modal Form Login with Avatar Demo-->\n                                <div mdbModal #modalLoginAvatarDemo=\"mdb-modal\" class=\"modal fade\"\n                                     id=\"modalLoginAvatarDemo\" tabindex=\"-1\" role=\"dialog\"\n                                     aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                    <div class=\"modal-dialog cascading-modal modal-avatar modal-sm\" role=\"document\">\n                                        <!--Content-->\n                                        <div class=\"modal-content\">\n\n                                            <!--Header-->\n                                            <div class=\"modal-header\">\n                                                <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg\"\n                                                     class=\"rounded-circle img-responsive\">\n                                            </div>\n                                            <!--Body-->\n                                            <div class=\"modal-body text-center mb-1\">\n\n                                                <h5 class=\"mt-1 mb-2\">Maria Doe</h5>\n\n                                                <div class=\"md-form ml-0 mr-0\">\n                                                    <input type=\"password\" type=\"text\" id=\"form1\"\n                                                           class=\"form-control ml-0\" mdbInput>\n                                                    <label for=\"form1\" class=\"ml-0\">Enter password</label>\n                                                </div>\n\n                                                <div class=\"text-center\">\n                                                    <button mdbBtn color=\"cyan\" class=\"mt-1\">Login\n                                                        <mdb-icon fas icon=\"sign-in-alt\" class=\"ml-1\"></mdb-icon>\n                                                    </button>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                        <!--/.Content-->\n                                    </div>\n                                </div>\n                                <!--Modal Form Login with Avatar Demo-->\n\n                                <div mdbModal #centralRegular=\"mdb-modal\" class=\"modal fade\" id=\"basicExample\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: false}\">\n                                    <div class=\"modal-dialog \" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Modal title</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"centralRegular.hide()\">\n                                                    <span aria-hidden=\"true\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                ...\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" mdbBtn color=\"secondary\" size=\"sm\"\n                                                        class=\"waves-light\" data-dismiss=\"modal\"\n                                                        (click)=\"centralRegular.hide()\" mdbWavesEffect>Close\n                                                </button>\n                                                <button type=\"button\" mdbBtn color=\"primary\" size=\"sm\"\n                                                        class=\"waves-light\" mdbWavesEffect>Save changes\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div mdbModal #centralLarge=\"mdb-modal\" class=\"modal fade\" id=\"basicExample\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: false}\">\n                                    <div class=\"modal-dialog modal-lg\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Modal title</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"centralLarge.hide()\">\n                                                    <span aria-hidden=\"true\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                ...\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" mdbBtn color=\"secondary\" size=\"sm\"\n                                                        class=\"waves-light\" data-dismiss=\"modal\"\n                                                        (click)=\"centralLarge.hide()\" mdbWavesEffect>Close\n                                                </button>\n                                                <button type=\"button\" mdbBtn color=\"primary\" size=\"sm\"\n                                                        class=\"waves-light\" mdbWavesEffect>Save changes\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div mdbModal #centralFluid=\"mdb-modal\" class=\"modal fade\" id=\"basicExample\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: false}\">\n                                    <div class=\"modal-dialog modal-fluid\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Modal title</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"centralFluid.hide()\">\n                                                    <span aria-hidden=\"true\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                ...\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" mdbBtn color=\"primary\" size=\"sm\"\n                                                        class=\"waves-light\" data-dismiss=\"modal\"\n                                                        (click)=\"centralFluid.hide()\" mdbWavesEffect>Close\n                                                </button>\n                                                <button type=\"button\" mdbBtn color=\"primary\" size=\"sm\"\n                                                        class=\"waves-light\" mdbWavesEffect>Save changes\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                            </div>\n                        </div>\n                        <!--Third column-->\n\n                        <!--Fourth column-->\n                        <div class=\"col-md-3\">\n                            <h5 class=\"text-center mb-3\">Fluid Modal</h5>\n\n                            <img src=\"https://mdbootstrap.com/img/brandflow/modal1.jpg\" alt=\"\"\n                                 class=\"img-fluid z-depth-1\">\n                            <div class=\"text-center\">\n                                <h5 class=\"my-3\">Position</h5>\n\n\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"fluidRight.show()\"\n                                        mdbWavesEffect>\n                                    Right\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"fluidLeft.show()\"\n                                        mdbWavesEffect>\n                                    Left\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"centralSuccess.show()\"\n                                        mdbWavesEffect>\n                                    Top\n                                </button>\n                                <br>\n                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\"\n                                        data-target=\"#basicExample\" (click)=\"fluidBottom.show()\"\n                                        mdbWavesEffect>\n                                    Bottom\n                                </button>\n                                <br>\n\n\n                                <div mdbModal #centralSuccess=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-notify modal-success\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <p class=\"heading lead\">Modal Success</p>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"centralSuccess.hide()\">\n                                                    <span aria-hidden=\"true\" class=\"white-text\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div class=\"text-center\">\n                                                    <mdb-icon fas icon=\"check\" size=\"4x\"\n                                                              class=\"mb-3 animated rotateIn\"></mdb-icon>\n                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit\n                                                        iusto nulla aperiam blanditiis\n                                                        ad consequatur in dolores culpa, dignissimos, eius non possimus\n                                                        fugiat. Esse ratione fuga, enim,\n                                                        ab officiis totam.</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"modal-footer justify-content-center\">\n                                                <a type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                   mdbWavesEffect>Get it now\n                                                    <mdb-icon far icon=\"gem\" class=\" ml-1\"></mdb-icon>\n                                                </a>\n                                                <a type=\"button\" mdbBtn color=\"secondary\" outline=\"true\"\n                                                   data-dismiss=\"modal\" (click)=\"centralSuccess.hide()\" mdbWavesEffect>No,\n                                                    thanks</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                                <div mdbModal #fluidBottom=\"mdb-modal\" class=\"modal fade bottom\"\n                                     id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-notify modal-success\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <p class=\"heading lead\">Modal Success</p>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"centralSuccess.hide()\">\n                                                    <span aria-hidden=\"true\" class=\"white-text\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div class=\"text-center\">\n                                                    <mdb-icon fas icon=\"check\" size=\"4x\"\n                                                              class=\"mb-3 animated rotateIn\"></mdb-icon>\n                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit\n                                                        iusto nulla aperiam blanditiis\n                                                        ad consequatur in dolores culpa, dignissimos, eius non possimus\n                                                        fugiat. Esse ratione fuga, enim,\n                                                        ab officiis totam.</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"modal-footer justify-content-center\">\n                                                <a type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                   mdbWavesEffect>Get it now\n                                                    <mdb-icon far icon=\"gem\" class=\" ml-1\"></mdb-icon>\n                                                </a>\n                                                <a type=\"button\" mdbBtn color=\"secondary\" outline=\"true\"\n                                                   data-dismiss=\"modal\" (click)=\"fluidBottom.hide()\" mdbWavesEffect>No,\n                                                    thanks</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div mdbModal #fluidRight=\"mdb-modal\" class=\"modal fade right\" id=\"fullHeightModalRight\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-full-height modal-right\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Modal title</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"fluidRight.hide()\">\n                                                    <span aria-hidden=\"true\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente\n                                                    magnam, sunt, ea dolore eum quod.\n                                                    Minima fugiat enim aut soluta est reprehenderit reiciendis quos,\n                                                    qui, amet possimus laborum assumenda\n                                                    voluptate.\n                                                </p>\n\n                                                <ul class=\"list-group z-depth-0\">\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Cras justo odio\n                                                        <mdb-badge primary=\"true\" pill=\"true\">14</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Dapibus ac facilisis in\n                                                        <mdb-badge primary=\"true\" pill=\"true\">2</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Morbi leo risus\n                                                        <mdb-badge primary=\"true\" pill=\"true\">1</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Cras justo odio\n                                                        <mdb-badge primary=\"true\" pill=\"true\">14</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Dapibus ac facilisis in\n                                                        <mdb-badge primary=\"true\" pill=\"true\">2</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Morbi leo risus\n                                                        <mdb-badge primary=\"true\" pill=\"true\">1</mdb-badge>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"modal-footer justify-content-center\">\n                                                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\"\n                                                        data-dismiss=\"modal\" (click)=\"fluidRight.hide()\" mdbWavesEffect>\n                                                    Close\n                                                </button>\n                                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                        mdbWavesEffect>Save changes\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div mdbModal #fluidLeft=\"mdb-modal\" class=\"modal fade left\" id=\"fullHeightModalRight\"\n                                     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                                     aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-full-height modal-left\" role=\"document\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Modal title</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                                        aria-label=\"Close\" (click)=\"fluidLeft.hide()\">\n                                                    <span aria-hidden=\"true\">×</span>\n                                                </button>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente\n                                                    magnam, sunt, ea dolore eum quod.\n                                                    Minima fugiat enim aut soluta est reprehenderit reiciendis quos,\n                                                    qui, amet possimus laborum assumenda\n                                                    voluptate.\n                                                </p>\n\n                                                <ul class=\"list-group z-depth-0\">\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Cras justo odio\n                                                        <mdb-badge primary=\"true\" pill=\"true\">14</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Dapibus ac facilisis in\n                                                        <mdb-badge primary=\"true\" pill=\"true\">2</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Morbi leo risus\n                                                        <mdb-badge primary=\"true\" pill=\"true\">1</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Cras justo odio\n                                                        <mdb-badge primary=\"true\" pill=\"true\">14</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Dapibus ac facilisis in\n                                                        <mdb-badge primary=\"true\" pill=\"true\">2</mdb-badge>\n                                                    </li>\n                                                    <li class=\"list-group-item justify-content-between\">\n                                                        Morbi leo risus\n                                                        <mdb-badge primary=\"true\" pill=\"true\">1</mdb-badge>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            <div class=\"modal-footer justify-content-center\">\n                                                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\"\n                                                        data-dismiss=\"modal\" (click)=\"fluidLeft.hide()\" mdbWavesEffect>\n                                                    Close\n                                                </button>\n                                                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\"\n                                                        mdbWavesEffect>Save changes\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--Fourth column-->\n\n                    </div>\n                    <!-- /.First row-->\n\n                </section>\n                <!--/Section: Position & Sizes-->\n\n            </mdb-card-body>\n            <!--/Card content-->\n        </mdb-card>\n        <!--/.Card-->\n\n\n    </div>\n    <!--Grid column-->\n</div>\n<!--Grid row-->\n\n</main>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/views/help/help.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/views/help/help.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<panel alignment=\"left\">\n  <div class=\"card-body text-left\">\n    <div class=\"row mb-1\">\n      <div class=\"col-md-12\">\n        <h4 class=\"h4-responsive mb-3 title\">\n          Using Cascading Card Component\n        </h4>\n      </div>\n    </div>\n    <div class=\"row mb-5\">\n      <div class=\"col-4\">\n        <cascading-card src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg\" title=\"Title goes here\">\n          <p class=\"card-text mt-2\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </cascading-card>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h4 class=\"h4-responsive mb-4 title\">\n          Code and Customization\n        </h4>\n        <p>To use the component simply wrap your card's content in the following:</p>\n        <section class=\"text-center mb-4\">\n          <code class=\"language-markup\">&lt;cascading-card&gt;...&lt;/cascading-card&gt;</code>\n        </section>\n        <p class=\"mb-4\">At first, the component appears as a featureless surface. It can easily be transformed into a stylish (and customizable!)\n          display tool. It's achieved by using its four attributes.</p>\n        <table class=\"table table-sm\">\n          <thead class=\"blue-gradient text-center white-text\">\n            <th class=\"text-center\" colspan=\"2\">Attributes</th>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">src</th>\n              <td class=\"ml-10\">\n                <p>What puts \"cascading\" into \"cascading card\" is an image. The attribute is used to specify the source of the\n                  picture - can be an URL or a relative path.</p>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">headerType</th>\n              <td>\n                <p>The attribute is used to decide the context an image has inside the component. By default, picture and card\n                  containing it have the same width, but setting\n                  <code>headerType</code> to\n                  <code>wide</code> or\n                  <code>narrow</code> changes that.</p>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">title</th>\n              <td>\n                <p>To easily set title for our card, we can add optional\n                  <code>title</code> attribute. The title passed in will be displayed as a\n                  <code>&lt;h4&gt;</code>\n                  <code>strong</code>ed header right under the picture. </p>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">alignment</th>\n              <td>\n                <p>The final attribute is rather self-explanatory. It applies to card's content, and to be specific - everything\n                  passed in as\n                  <code>&lt;ng-content&gt;</code>, along with the title.\n                </p>\n                <p>It accepts\n                  <code>right</code> and\n                  <code>left</code> arguments; by default it's set on\n                  <code>center</code>.\n                </p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</panel>\n<panel alignment=\"left\">\n  <div class=\"card-body text-left\">\n    <div class=\"row mb-1\">\n      <div class=\"col-md-12\">\n        <h4 class=\"h4-responsive mb-3 title\">\n          Using Panel Component\n        </h4>\n      </div>\n    </div>\n    <div class=\"row mb-5\">\n      <div class=\"col-4\">\n        <panel header=\"Header is here, Everyone!\" color=\"success-color\">\n          <p class=\"card-text mt-2\">This is a paragraph</p>\n        </panel>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h4 class=\"h4-responsive mb-4 title\">\n          Code and Customization\n        </h4>\n        <p>To use the component simply wrap your card's content in the following:</p>\n        <section class=\"text-center mb-4\">\n          <code class=\"language-markup\">&lt;panel&gt;...&lt;/panel&gt;</code>\n        </section>\n        <p class=\"mb-4\">At first, the component appears as a featureless surface. It can easily be transformed into a stylish (and customizable!)\n          display tool. It's achieved by using its four attributes.</p>\n        <table class=\"table table-sm\">\n          <thead class=\"blue-gradient text-center white-text\">\n            <th class=\"text-center\" colspan=\"2\">Attributes</th>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">header</th>\n              <td class=\"ml-10\">\n                <p>Including this attribute with some text will create a\n                  <code>&lt;div&gt;</code> element in the upper part of the the very panel, just as in the example above.</p>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">footer</th>\n              <td>\n                <p>The attribute works symmetrically to\n                  <code>header</code>, except including it creates a footer in the bottom part of the panel.</p>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">color</th>\n              <td>\n                <p>To add consistency to our layout, we can specify color to be applied to\n                  <code>header</code> and\n                  <code>footer</code> sections of the panel</p>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">alignment</th>\n              <td>\n                <p>The final attribute is rather self-explanatory. It applies to panel's content, and to be specific - everything\n                  passed in as\n                  <code>&lt;ng-content&gt;</code>, along with the\n                  <code>footer</code> and\n                  <code>header</code>.</p>\n                <p>It accepts\n                  <code>right</code> and\n                  <code>left</code> as arguments; by default it's set on\n                  <code>center</code>.\n                </p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</panel>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/views/profile/profile1/profile1.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/views/profile/profile1/profile1.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n    \n    \n            <!--Card-->\n            <mdb-card cascade=\"true\" narrower=\"true\">\n    \n                <!--Card image-->\n                <div class=\"view overlay hm-white-slight waves-light\" mdbWavesEffect>\n                    <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg\"\n                         class=\"img-fluid\">\n                    <a>\n                        <div class=\"mask\"></div>\n                    </a>\n                </div>\n                <!--/Card image-->\n    \n                <!--Card content-->\n                <mdb-card-body class=\"text-center\">\n                    <!--Title-->\n                    <h4 class=\"card-title font-bold mb-2\"><strong>Alice Mayer</strong></h4>\n                    <h5 class=\"indigo-text\"><strong>Photographer</strong></h5>\n    \n                    <h6 class='text-justify'><strong>About:</strong></h6>\n                    <p class='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis\n                        quod animi dignissimos consectetur\n                        quibusdam numquam laboriosam, minus, provident...</p>\n    \n                    <div class=\"text-right\">\n                        <button type=\"button\" mdbBtn outline=\"true\" color=\"primary\" rounded=\"true\" size=\"sm\" mdbWavesEffect>\n                            More...\n                        </button>\n                    </div>\n    \n                </mdb-card-body>\n                <!--/.Card content-->\n    \n            </mdb-card>\n            <!--/.Card-->\n    \n        </div>\n    \n        <div class=\"col-md-9\">\n    \n            <!--Projects section v.2-->\n            <section class=\"section text-center pb-3\">\n    \n                <!--Section heading-->\n                <!-- <h2 class=\"section-heading h1 pt-4\"><strong>Latest projects:</strong></h2> -->\n                <!--Section description-->\n    \n                <!--Grid row-->\n                <div class=\"row d-flex justify-content-center\">\n    \n                    <!--Grid column-->\n                    <div class=\"col-lg-6 col-xl-5 mb-3\">\n    \n                        <!--Card-->\n                        <mdb-card cascade=\"true\" narrower=\"true\" class=\"d-flex mb-5\">\n    \n                            <!--Card image-->\n                            <div class=\"view overlay hm-white-slight\">\n                                <img src=\"https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg\"\n                                     class=\"img-fluid\" alt=\"\">\n                                <a href=\"#\">\n                                    <div class=\"mask\"></div>\n                                </a>\n                            </div>\n    \n                            <!--Card content-->\n                            <mdb-card-body>\n                                <!--Title-->\n                                <h4 class=\"card-title font-bold mb-3\"><strong>Project name</strong></h4>\n                                <!--Text-->\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk\n                                    of the card's content.\n                                </p>\n                            </mdb-card-body>\n    \n                            <!--Card footer-->\n                            <div class=\"card-footer links-light\">\n                                <span class=\"right\">\n                                    <a href=\"\"\n                                       class=\"waves-effect p-2\">Live Preview\n                                        <mdb-icon fas icon=\"camera\" class=\"ml-1\"></mdb-icon></a>\n                                </span>\n                            </div>\n    \n                        </mdb-card>\n                        <!--/.Card-->\n    \n                    </div>\n                    <!--Grid column-->\n    \n                    <!--Grid column-->\n                    <div class=\"col-lg-6 col-xl-5 mb-3\">\n    \n                        <!--Card-->\n                        <mdb-card cascade=\"true\" narrower=\"true\" class=\"d-flex mb-5\">\n    \n                            <!--Card image-->\n                            <div class=\"view overlay hm-white-slight\">\n                                <img src=\"https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg\"\n                                     class=\"img-fluid\" alt=\"\">\n                                <a href=\"#\">\n                                    <div class=\"mask\"></div>\n                                </a>\n                            </div>\n    \n                            <!--Card content-->\n                            <mdb-card-body>\n                                <!--Title-->\n                                <h4 class=\"card-title font-bold mb-3\"><strong>Project name</strong></h4>\n                                <!--Text-->\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk\n                                    of the card's content.\n                                </p>\n                            </mdb-card-body>\n    \n                            <!--Card footer-->\n                            <div class=\"card-footer links-light\">\n                                <span class=\"right\"> \n                                    <a href=\"\" class=\"waves-effect p-2\">Live Preview\n                                        <mdb-icon fas icon=\"camera\" class=\"ml-1\"></mdb-icon></a>\n                                </span>\n                            </div>\n    \n                        </mdb-card>\n                        <!--/.Card-->\n    \n                    </div>\n                    <!--Grid column-->\n    \n                </div>\n                <!--Grid row-->\n    \n                <!--Grid row-->\n                <div class=\"row d-flex justify-content-center\">\n    \n                    <!--Grid column-->\n                    <div class=\"col-lg-6 col-xl-5 mb-3\">\n    \n                        <!--Card-->\n                        <mdb-card cascade=\"true\" narrower=\"true\" class=\"d-flex mb-5\">\n    \n                            <!--Card image-->\n                            <div class=\"view overlay hm-white-slight\">\n                                <img src=\"https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-pricing.jpg\"\n                                     class=\"img-fluid\" alt=\"\">\n                                <a href=\"#\">\n                                    <div class=\"mask\"></div>\n                                </a>\n                            </div>\n    \n                            <!--Card content-->\n                            <mdb-card-body>\n                                <!--Title-->\n                                <h4 class=\"card-title font-bold mb-3\"><strong>Project name</strong></h4>\n                                <!--Text-->\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk\n                                    of the card's content.\n                                </p>\n                            </mdb-card-body>\n    \n                            <!--Card footer-->\n                            <div class=\"card-footer links-light\">\n                                <span class=\"right\"> \n                                    <a href=\"\" class=\"waves-effect p-2\">Live Preview\n                                        <mdb-icon fas icon=\"camera\" class=\"ml-1\"></mdb-icon></a>\n                                </span>\n                            </div>\n    \n                        </mdb-card>\n                        <!--/.Card-->\n    \n                    </div>\n                    <!--Grid column-->\n    \n                    <!--Grid column-->\n                    <div class=\"col-lg-6 col-xl-5 mb-3\">\n    \n                        <!--Card-->\n                        <mdb-card cascade=\"true\" narrower=\"true\" class=\"d-flex mb-5\">\n    \n                            <!--Card image-->\n                            <div class=\"view overlay hm-white-slight\">\n                                <img src=\"https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-landing.jpg\"\n                                     class=\"img-fluid\" alt=\"\">\n                                <a href=\"#\">\n                                    <div class=\"mask\"></div>\n                                </a>\n                            </div>\n    \n                            <!--Card content-->\n                            <mdb-card-body>\n                                <!--Title-->\n                                <h4 class=\"card-title font-bold mb-3\"><strong>Project name</strong></h4>\n                                <!--Text-->\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk\n                                    of the card's content.\n                                </p>\n    \n                            </mdb-card-body>\n    \n                            <!--Card footer-->\n                            <div class=\"card-footer links-light\">\n                                <span class=\"right\"> \n                                    <a href=\"\" class=\"waves-effect p-2\">Live Preview\n                                        <mdb-icon fas icon=\"camera\" class=\"ml-1\"></mdb-icon></a>\n                                </span>\n                            </div>\n    \n                        </mdb-card>\n                        <!--/.Card-->\n    \n                    </div>\n                    <!--Grid column-->\n                    <div class=\"col-lg-12\">\n                        <div class=\"text-center\">\n    \n                            <!--Pagination -->\n                            <nav class=\"my-4\">\n                                <ul class=\"pagination pagination-circle pg-blue mb-0\">\n    \n                                    <!--First-->\n                                    <li class=\"page-item disabled\"><a class=\"page-link\" mdbWavesEffect>First</a></li>\n    \n                                    <!--Arrow left-->\n                                    <li class=\"page-item disabled\">\n                                        <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\">\n                                            <span aria-hidden=\"true\">«</span>\n                                            <span class=\"sr-only\">Previous</span>\n                                        </a>\n                                    </li>\n    \n                                    <!--Numbers-->\n                                    <li class=\"page-item active\"><a class=\"page-link\" mdbWavesEffect>1</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" mdbWavesEffect>2</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" mdbWavesEffect>3</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" mdbWavesEffect>4</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" mdbWavesEffect>5</a></li>\n    \n                                    <!--Arrow right-->\n                                    <li class=\"page-item\">\n                                        <a class=\"page-link\" mdbWavesEffect aria-label=\"Next\">\n                                            <span aria-hidden=\"true\">»</span>\n                                            <span class=\"sr-only\">Next</span>\n                                        </a>\n                                    </li>\n    \n                                    <!--First-->\n                                    <li class=\"page-item\"><a class=\"page-link\">Last</a></li>\n    \n                                </ul>\n                            </nav>\n                            <!--/Pagination -->\n                        </div>\n                    </div>\n                </div>\n                <!--Grid row-->\n    \n            </section>\n            <!--/Projects section v.2-->\n        </div>\n    \n    \n    </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/views/tables/basic-table/basic-table.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/views/tables/basic-table/basic-table.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n    <div class=\"col-md-12\">\n        <!--Card-->\n        <mdb-card cascade=\"true\" narrower=\"true\" class=\"mt-5\">\n            <!--Card image-->\n            <div class=\"view gradient-card-header blue darken-2\">\n                <h4 class=\"h4-responsive text-white\">Basic tables </h4>\n            </div>\n            <!--/Card image-->\n            <!--Card content-->\n            <mdb-card-body>\n\n                <h3 class=\"mt-5 text-left\"><strong>Basic examples</strong></h3>\n                <p>Using the most basic table markup, here’s how .table-based tables look in Bootstrap. All table styles\n                    are\n                    inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the\n                    parent.</p>\n\n\n                <table class=\"table\">\n                    <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Username</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Mark</td>\n                        <td>Otto</td>\n                        <td>@mdo</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Jacob</td>\n                        <td>Thornton</td>\n                        <td>@fat</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Larry</td>\n                        <td>the Bird</td>\n                        <td>@twitter</td>\n                    </tr>\n                    </tbody>\n                </table>\n\n                <h3 class=\"mt-5 text-left\"><strong>Table head options</strong></h3>\n                <p>To change a background-color of thead (or any other element) use our color classes. If you are going\n                    to use\n                    a dark background you should also consider white text (to provide a proper contrast) by adding\n                    .text-white\n                    class.\n                </p>\n\n\n                <!--Table-->\n                <table class=\"table\">\n\n                    <!--Table head-->\n                    <thead class=\"blue-grey lighten-4\">\n                    <tr>\n                        <th>#</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Username</th>\n                    </tr>\n                    </thead>\n                    <!--Table head-->\n\n                    <!--Table body-->\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Mark</td>\n                        <td>Otto</td>\n                        <td>@mdo</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Jacob</td>\n                        <td>Thornton</td>\n                        <td>@fat</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Larry</td>\n                        <td>the Bird</td>\n                        <td>@twitter</td>\n                    </tr>\n                    </tbody>\n                    <!--Table body-->\n                </table>\n                <!--Table-->\n\n                <!--Table-->\n                <table class=\"table\">\n\n                    <!--Table head-->\n                    <thead class=\"mdb-color darken-3\">\n                    <tr class=\"text-white\">\n                        <th>#</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Username</th>\n                    </tr>\n                    </thead>\n                    <!--Table head-->\n\n                    <!--Table body-->\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Mark</td>\n                        <td>Otto</td>\n                        <td>@mdo</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Jacob</td>\n                        <td>Thornton</td>\n                        <td>@fat</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Larry</td>\n                        <td>the Bird</td>\n                        <td>@twitter</td>\n                    </tr>\n                    </tbody>\n                    <!--Table body-->\n                </table>\n                <!--Table-->\n\n\n                <h3 class=\"mt-5 text-left\"><strong>Striped rows:</strong></h3>\n\n\n                <table class=\"table table-striped\">\n                    <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Username</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Mark</td>\n                        <td>Otto</td>\n                        <td>@mdo</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Jacob</td>\n                        <td>Thornton</td>\n                        <td>@fat</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Larry</td>\n                        <td>the Bird</td>\n                        <td>@twitter</td>\n                    </tr>\n                    </tbody>\n                </table>\n\n            </mdb-card-body>\n            <!--/.Card content-->\n        </mdb-card>\n        <!--/.Card-->\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account/account.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account/account.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item hoverable\">\n                    <a href=\"#\">Your Profile</a>\n                </li>\n                <li class=\"list-group-item hoverable\">\n                    <a href=\"#\">Your Wishlist</a>\n                </li>\n                <li class=\"list-group-item hoverable\">\n                    <a href=\"#\">Your Cart</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-sm-8\">\n            <form>\n                <div class=\"row\">\n                    <img src=\"https://angular-shoppingcart.firebaseapp.com/assets/img/malecostume-512.png\" [alt]=\"loggedUser.FullName\"\n                        style=\"width: 35%; height: 35%;\">\n                    <div class=\"col-md-8 mt-3\">\n                        <label for=\"userName\">Name</label>\n                        <p style=\"font-size: 15px;\">{{loggedUser.FullName}}</p>\n                    </div>\n                    <div class=\"col-md-8 mb-3\">\n                        <label for=\"emailId\">Email</label>\n                        <p style=\"font-size: 15px;\">{{loggedUser.Email}}</p>\n                    </div>\n                    <div class=\"col-md-8 mb-3\">\n                        <label for=\"emailId\">Mobile</label>\n                        <p style=\"font-size: 15px;\">{{loggedUser.Mobile}}</p>\n                    </div>\n                    <div class=\"col-md-8 mb-3\">\n                        <label for=\"emailId\">Country</label>\n                        <p style=\"font-size: 15px;\">{{loggedUser.Country}}</p>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/checkout/checkout-navbar/checkout-navbar.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/checkout/checkout-navbar/checkout-navbar.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">{{ activatedRoute._routerState.snapshot.url}}</h3>\n\n<div class=\"board-inner\" id=\"status-buttons\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\n        <div class=\"liner\"></div>\n\n        <!-- circular user icon -->\n        <li id=\"productsTab\" style=\"margin: auto\" *ngIf=\"activatedRoute._routerState.snapshot.url == '/checkout/review'\">\n            <a [routerLink]=\"['/checkouts', {outlets: {'checkOutlet': ['/']}}]\" routerLinkActive=\"active\"\n                [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"Product Summary\">\n                <span class=\"round-tabs one\">\n                    <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular customer icon -->\n        <li id=\"customerTab\" style=\"margin: auto\" *ngIf=\"activatedRoute._routerState.snapshot.url == '/checkout/customer-information'\">\n            <a [routerLink]=\"['/checkouts', {outlets: {'checkOutlet': ['/']}}]\" routerLinkActive=\"active\"\n                [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"Product Summary\">\n                <span class=\"round-tabs two\">\n                    <i class=\"fa fa-user-tie\" aria-hidden=\"true\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular ok icon -->\n        <li id=\"resultTab\" style=\"margin: auto\" *ngIf=\"activatedRoute._routerState.snapshot.url == '/checkout/payment-information'\">\n            <a [routerLink]=\"['/checkouts', {outlets: {'checkOutlet': ['result']}}]\" routerLinkActive=\"active\"\n                data-toggle=\"tab\" title=\"Payment\">\n                <span class=\"round-tabs four\">\n                    <i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>\n                </span>\n            </a>\n        </li>\n\n    </ul>\n    <div class=\"clearfix\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/checkout/checkout.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/checkout/checkout.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <header>\n        <app-header #appHeader></app-header>\n\n    </header>\n    <main class=\"pt-5 mt-5\">\n        <section>\n            <div class=\"container \">\n                <div class=\"board\">\n                    <!-- Navigation Area (Circular Tabs) -->\n                    <app-checkout-navbar></app-checkout-navbar>\n                    <!-- End Navigation Area (Circular Tabs) -->\n\n                    <!-- Content Area -->\n                    <div class=\"tab-content\">\n                        <!-- Routed view  -->\n                        <router-outlet></router-outlet>\n                    </div>\n                    <!-- End Content Area -->\n                </div>\n\n                <!-- For Debugging: show our formData as it is being typed -->\n                <!-- <pre>{{ formData | json }}</pre> -->\n            </div>\n        </section>\n    </main>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/checkout/customer-info/customer-info.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/checkout/customer-info/customer-info.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md order-md-1\">\n        <div class=\"col-md-12 register-sec pb-0 pt-0\">\n            <h2 class=\"text-center\">Billing Address</h2>\n        </div>\n        <form class=\"needs-validation\" #userDetailsForm=\"ngForm\">\n            <div class=\"row\">\n                \n                    <div class=\"col-md-6 mb-3\">\n                        <div class=\"md-form mt-0\">\n                        <label for=\"firstName\">Full name</label>\n                        <input type=\"text\" readonly class=\"form-control\" id=\"\" \n                            name=\"firstName\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 mb-3\">\n                        <div class=\"md-form mt-0\">\n                        <label for=\"email\">Email\n                        </label>\n                        <input type=\"email\" class=\"form-control\" id=\"\"  name=\"email\"\n                            readonly>\n                        </div>\n                    </div>\n            </div>\n\n            <div class=\"md-form mt-0\">\n                <div class=\"mb-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"1234 Main St\"\n                        name=\"address1\" readonly>\n                </div>\n            </div>\n\n            <div class=\"md-form mt-0\">\n                <div class=\"mb-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Apartment or suite\"\n                        name=\"address2\" readonly>\n                </div>\n            </div>\n\n            <div class=\"md-form mt-0\">\n                <div class=\"row\">\n                    <div class=\"col-md-5 mb-3\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Country\"\n                            name=\"address2\" readonly>\n                    </div>\n                    <div class=\"col-md-4 mb-3\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"City or Town\"\n                            name=\"address2\" readonly>\n                    </div>\n                    <div class=\"col-md-3 mb-3\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"ZipCode\"\n                            name=\"address2\" readonly>\n                    </div>\n                </div>\n           </div>\n            <hr class=\"mb-4\">\n\n        </form>\n    </div>\n    <div class=\"float-right\">\n            <a class=\"btn btn-success \" [routerLink]=\"['/checkout/payment-information']\"\n                >Next</a>\n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/checkout/payment-info/payment-info.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/checkout/payment-info/payment-info.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2 mb-3\">\n    <div class=\"col-md-12\">\n        <div class=\"card \">\n            <div class=\"card-header\">\n                <h3 class=\"text-xs-center\">\n                    <strong>Cart summary</strong>\n                    <!-- <app-paypal-checkout [totalAmount]=\"400\" class=\"float-right\"></app-paypal-checkout> -->\n                </h3>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-sm\">\n                        <thead>\n                            <tr>\n                                <td><strong>Item Name</strong></td>\n                                <td class=\"text-xs-center\"><strong>Item Price</strong></td>\n                                <td class=\"text-xs-center\"><strong>Item Quantity</strong></td>\n                                <td class=\"text-xs-right\"><strong>Total</strong></td>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let item of checkoutProducts\">\n                                <td>{{item.Name}}</td>\n                                <td class=\"text-xs-center\">${{item.Price}}</td>\n                                <td class=\"text-xs-center\">{{item.Quantity}}</td>\n                                <td class=\"text-xs-right\">${{item.Price * item.Quantity}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"highrow\"></td>\n                                <td class=\"highrow\"></td>\n                                <td class=\"highrow text-xs-center\"></td>\n                                <td class=\"highrow text-xs-right\"></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"row pb-5 px-4 bg-white shadow-sm w-100\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"bg-light px-4 py-3 text-uppercase font-weight-bold\">Instructions for seller</div>\n                                <div class=\"p-4\">\n                                    <p class=\"font-italic mb-4\">If you have some information for the seller you can leave them in the box below\n                                    </p>\n                                    <textarea name=\"\" cols=\"30\" rows=\"2\" class=\"form-control\" [(ngModel)]=\"remark\"></textarea>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"pr-4 pl-4-0\">\n                                    <ul class=\"list-unstyled mb-4\">\n                                        <li class=\"d-flex justify-content-between py-3 border-bottom\"><strong class=\"text-muted\">Order Subtotal\n                                            </strong><strong>${{totalPrice.toFixed(2)}}</strong></li>\n                                        <li class=\"d-flex justify-content-between py-3 border-bottom\"><strong class=\"text-muted\">Shipping and\n                                                handling</strong><strong>$0.00</strong></li>\n                                        <li class=\"d-flex justify-content-between py-3 border-bottom\"><strong class=\"text-muted\">Total</strong>\n                                            <h5 class=\"font-weight-bold\">${{totalPrice.toFixed(2)}}</h5>\n                                        </li>\n                                    </ul>\n                                    <app-paypal-checkout [comments]=\"remark\" [totalAmount]=\"totalPrice.toFixed(2)\" class=\"w-100\"></app-paypal-checkout>\n                                    <!-- <a href=\"#\" class=\"btn btn-dark rounded-pill py-2 btn-block\">Procceed to checkout</a> -->\n                                </div>\n                            </div>\n                        </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/checkout/payment-info/paypal-checkout/paypal-checkout.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/checkout/payment-info/paypal-checkout/paypal-checkout.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/checkout/review/review.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/checkout/review/review.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ul class=\"list-group mb-3\">\n        <li class=\"list-group-item d-flex lh-condensed\" *ngFor=\"let product of checkoutProducts\">\n            <div>\n                <img [src]=\"'/assets/product_images/' + product.Thumbnail\" [alt]=\"product.Name\" height=\"100\">\n            </div>\n            <div style=\"padding: 10px\" class=\"pl-5\">\n                <h6 class=\" my-0\"><strong>{{product.Name}}</strong></h6>\n                <p class=\"m-0\">{{product.Description}}</p>\n                <strong class=\"\">\n                    <div class=\"price\">\n                        ${{product.Price}}\n                    </div>\n                </strong>\n            </div>\n\n        </li>\n        <hr>\n        <li class=\"list-group-item d-flex justify-content-between \">\n            <span>Total (INR)</span>\n            <strong class=\"price\">${{totalPrice}}</strong>\n        </li>\n\n    </ul>\n    <div class=\"float-right\">\n        <a class=\"btn btn-success \" [routerLink]=\"['/checkout/customer-information']\"\n            routerLinkActive=\"active\">Next</a>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/filters/filters.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/filters/filters.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Card -->\n <mdb-card class=\"m-0\">\n    <!--Card content-->\n    <mdb-card-body>\n       <!--Title-->\n       <mdb-card-title>\n          <h4>Search the Catalog</h4>\n       </mdb-card-title>\n       \n       <!--Text-->\n       <mdb-card-text>\n          <div class=\"md-form\">\n              <input mdbInput type=\"text\" id=\"form1\" class=\"form-control\" [(ngModel)]=\"searchString\">\n              <label for=\"form1\" class=\"\">Search Text</label>\n            </div>\n            <div class=\"form-check mb-2 mr-sm-2\">\n                <input mdbInput class=\"form-check-input\" type=\"checkbox\" id=\"inlineFormCheck\" [(ngModel)]=\"searchForAllWords\">\n                <label class=\"form-check-label\" for=\"inlineFormCheck\">\n                  Search for all words\n                </label>\n              </div>\n       </mdb-card-text>\n       <a mdbBtn color=\"primary\" mdbWavesEffect (click)=\"onClickSearch()\">Search</a>\n    </mdb-card-body>\n </mdb-card>\n\n <!-- Card -->\n\n <!-- Card -->\n <mdb-card class=\"m-0 mt-4\">\n    <!--Card content-->\n    <mdb-card-body>\n       <!--Title-->\n       <mdb-card-title>\n          <h4>Choose a Department</h4>\n       </mdb-card-title>\n       \n       <!--Text-->\n       <mdb-card-text>\n\n          <div class=\"list-group\">\n              <a class=\"list-group-item list-group-item-action flex-column align-items-start\" \n                *ngFor=\"let item of departmentList;index as i\"\n                [ngClass]=\"{'active': selectedDepartment == item.DepartmentId}\"\n                (click)=\"onSelectDepartment(item)\"\n                >\n                <div class=\"d-flex w-100 justify-content-between\">\n                  <h6 class=\"mb-1\">{{item.Name}}</h6>\n                  <!-- <small>3 days ago</small> -->\n                </div>\n              </a>\n            </div>\n       </mdb-card-text>\n    </mdb-card-body>\n </mdb-card>\n\n <!-- Card -->\n\n \n <!-- Card -->\n <mdb-card class=\"m-0 mt-4\">\n    <!--Card content-->\n    <mdb-card-body>\n       <!--Title-->\n       <mdb-card-title>\n          <h4>Choose a Category</h4>\n       </mdb-card-title>\n       \n       <!--Text-->\n       <mdb-card-text>\n          <div class=\"list-group\">\n              <a class=\"list-group-item list-group-item-action flex-column align-items-start\"\n                *ngFor=\"let item of filteredCategoryList\"\n                [ngClass]=\"{'active': selectedCategory == item.CategoryId}\"\n                (click)=onSelectCategory(item)>\n                <div class=\"d-flex w-100 justify-content-between\">\n                  <h6 class=\"mb-1\">{{item.Name}}</h6>\n                  <!-- <small>3 days ago</small> -->\n                </div>\n              </a>\n            </div>\n       </mdb-card-text>\n    </mdb-card-body>\n </mdb-card>\n\n <!-- Card -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-card-text> \n\n</mdb-card-text> \n\n<mdb-card-text> \n   <mdb-carousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\n      <mdb-carousel-item>\n        <div class=\"view w-100\">\n          <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg\" alt=\"First slide\">\n          <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n        </div>\n        <div class=\"carousel-caption\">\n          <h3 class=\"h3-responsive\">Light mask</h3>\n          <p>First text</p>\n        </div>\n      </mdb-carousel-item>\n      <mdb-carousel-item>\n        <div class=\"view w-100\">\n          <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg\" alt=\"Second slide\">\n          <div class=\"mask rgba-black-strong waves-light\" mdbWavesEffect></div>\n        </div>\n        <div class=\"carousel-caption\">\n          <h3 class=\"h3-responsive\">Strong mask</h3>\n          <p>Secondary text</p>\n        </div>\n      </mdb-carousel-item>\n      <mdb-carousel-item>\n        <div class=\"view w-100\">\n          <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg\" alt=\"Third slide\">\n          <div class=\"mask rgba-black-slight waves-light\" mdbWavesEffect></div>\n        </div>\n        <div class=\"carousel-caption\">\n          <h3 class=\"h3-responsive\">Slight mask</h3>\n          <p>Third text</p>\n        </div>\n      </mdb-carousel-item>\n    </mdb-carousel>\n</mdb-card-text>\n<div class=\"container\">\n   <div class=\"mt-4\">\n      <div class=\"row\">\n         <div class=\"col-4\">\n           <app-filters [productList]=\"productList\"></app-filters>\n         </div>\n         <div class=\"col-8\">\n\n            <!-- Card -->\n            <mdb-card class=\"m-0\">\n               <!--Card content-->\n               <mdb-card-body>\n                  <!--Title-->\n                  <mdb-card-title>\n                       \n                  </mdb-card-title>\n\n                  <!--Text-->\n                  <mdb-card-text> \n                       <app-product-list #productList></app-product-list>\n                  </mdb-card-text>\n               </mdb-card-body>\n            </mdb-card>\n\n            <!-- Card -->\n         </div>\n      </div>\n\n   </div>\n</div>\n\n\n\n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/layout/app-header/app-header.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/layout/app-header/app-header.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Navbar-->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light navbar fixed-top\">\n  <div class=\"container-fluid justify-content-between\">\n    <!-- Left elements -->\n    <div class=\"d-flex\">\n      <!-- Brand -->\n      <!-- src=\"https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png\" -->\n      <a class=\"navbar-brand me-2 mb-1 d-flex align-items-center\" href=\"#\">\n        <img\n          \n          src=\"../../../../../assets/product_images/logo.png\"\n          height=\"40\"\n          alt=\"\"\n          loading=\"lazy\"\n          style=\"margin-top: 2px;\"\n        />\n      </a>\n      \n      <!-- Search form -->\n      <form class=\"input-group w-auto my-auto d-none d-sm-flex\">\n        <input\n          autocomplete=\"off\"\n          type=\"search\"\n          class=\"form-control rounded\"\n          placeholder=\"Search\"\n          style=\"min-width: 125px;\"\n        />\n        <span class=\"input-group-text border-0 d-none d-lg-flex\"\n          ><i class=\"fas fa-search\"></i\n        ></span>\n      </form>\n    </div>\n   \n\n    <!-- Right elements -->\n    <ul class=\"navbar-nav nav-flex-icons\">\n      <!-- Collapse -->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  \n      <!-- Links -->\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link waves-effect\" href=\"#\"><strong>Hi</strong>\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <ng-container *ngIf=\"isLogged; else elseTemplate\">\n            <li class=\"nav-item\" mdbDropdown>\n              <a class=\"nav-link waves-effect\" [routerLink]=\"['/customer/my-account']\">\n                <i class=\"fas fa-user mr-1 pink-text\"></i>\n                <strong class=\"pink-text\">{{user.FullName}}</strong>\n              </a>\n            </li>\n            <li class=\"nav-item\" mdbDropdown>\n              <a class=\"nav-link waves-effect\" (click)=\"onLogout()\">\n                <i class=\"fas fa-sign-in-alt mr-1 pink-text\"></i>\n                <strong class=\"pink-text\">Logout</strong>\n              </a>\n            </li>\n          </ng-container>\n          <ng-template #elseTemplate>\n            <li class=\"nav-item\" mdbDropdown>\n              <a class=\"nav-link waves-effect\" [routerLink]=\"['/customer/login']\">\n                <strong class=\"pink-text\">Sign In</strong>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link waves-effect\" >\n                <strong>or</strong>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link waves-effect\" [routerLink]=\"['/customer/register']\" target=\"_blank\">\n                <strong class=\"pink-text\">Register</strong>\n              </a>\n            </li>\n          </ng-template>\n        </ul>\n  \n        <!-- Right -->\n        <ul class=\"navbar-nav nav-flex-icons\">\n          <li class=\"nav-item\" mdbDropdown>\n            <a class=\"nav-link waves-effect dropdown-toggle\" mdbDropdownToggle>\n              <!-- [routerLink]=\"['shopping-cart']\" -->\n              <span class=\"badge red z-depth-1 mr-1\"> {{itemCount}} </span>\n              <i class=\"fas fa-shopping-cart\"></i>\n              <span class=\"clearfix d-none d-sm-inline-block\"> Cart </span>\n            </a>\n            <app-small-cart class=\"dropdown-menu dropdown-cart mr-5 pb-0\" *ngIf=\"itemCount != 0\"></app-small-cart>\n        </ul>\n      </div>\n    </ul>\n    <!-- Right elements -->\n  </div>\n</nav>\n<!-- Navbar -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/layout/app-header/small-cart/small-cart.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/layout/app-header/small-cart/small-cart.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table\">\n    <tbody>\n      <tr *ngFor=\"let product of cart\">\n        <th scope=\"row\" class=\"border-0\">\n          <div class=\"p-2\">\n            <img [src]=\"'/assets/product_images/' + product.Thumbnail\" alt=\"\" width=\"70\" class=\"img-fluid rounded shadow-sm\">\n            <div class=\"ml-3 d-inline-block align-middle\">\n              <h5 class=\"mb-0\"> \n                  <a href=\"#\" class=\"text-dark d-inline-block align-middle\">{{product.Name}}</a>\n              </h5>\n              <span class=\"text-muted font-weight-normal font-italic d-block ml-2\">\n                      <span class=\"badge purple mr-1\">{{product.DepartmentName}}</span>\n                      <span class=\"badge blue mr-1\">{{product.CategoryName}}</span>\n              </span>\n            </div>\n          </div>\n        </th>\n        <td class=\"border-0 align-middle\">\n              <var class=\"price\">${{(product.Price * product.Quantity).toFixed(2)}}</var> \n              <small class=\"text-muted\">(${{product.Price.toFixed(2)}} each)</small> \n        </td>\n        <td class=\"border-0 align-middle\"><strong>{{product.Quantity}}</strong></td>\n        <td class=\"border-0 align-middle\"><a (click)=\"onRemoveProductsFromCart(product.ProductId)\" class=\"text-dark\"><i class=\"fa fa-trash\"></i></a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<li class=\"divider\"></li>\n<li><a class=\"text-center btn\" [routerLink]=\"[ '/cart/shopping-cart' ]\"><strong>View Cart</strong></a></li>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/layout/layout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/layout/layout.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n  <header>\n     <app-header #appHeader></app-header>\n  </header>\n  \n  <main>\n       <router-outlet ></router-outlet>\n  </main>\n\n  <!-- FOOTER -->\n  <mdb-card-text> \n    <!-- Footer -->\n <footer class=\"page-footer font-small mdb-color pt-4\">\n \n    <!-- Footer Links -->\n    <div class=\"container text-center text-md-left\">\n \n      <!-- Footer links -->\n      <div class=\"row text-center text-md-left mt-3 pb-3\">\n \n        <!-- Grid column -->\n        <div class=\"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3\">\n          <h6 class=\"text-uppercase mb-4 font-weight-bold\">TT-Devices</h6>\n          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing\n            elit.\n          </p>\n        </div>\n        <!-- Grid column -->\n \n        <hr class=\"w-100 clearfix d-md-none\">\n \n        <!-- Grid column -->\n        <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3\">\n          <h6 class=\"text-uppercase mb-4 font-weight-bold\">Products</h6>\n          <p>\n            <a href=\"#!\">MDBootstrap</a>\n          </p>\n          <p>\n            <a href=\"#!\">MDWordPress</a>\n          </p>\n          <p>\n            <a href=\"#!\">BrandFlow</a>\n          </p>\n          <p>\n            <a href=\"#!\">Bootstrap Angular</a>\n          </p>\n        </div>\n        <!-- Grid column -->\n \n        <hr class=\"w-100 clearfix d-md-none\">\n \n        <!-- Grid column -->\n        <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mt-3\">\n          <h6 class=\"text-uppercase mb-4 font-weight-bold\">Useful links</h6>\n          <p>\n            <a href=\"#!\">Your Account</a>\n          </p>\n          <p>\n            <a href=\"#!\">Become an Affiliate</a>\n          </p>\n          <p>\n            <a href=\"#!\">Shipping Rates</a>\n          </p>\n          <p>\n            <a href=\"#!\">Help</a>\n          </p>\n        </div>\n \n        <!-- Grid column -->\n        <hr class=\"w-100 clearfix d-md-none\">\n \n        <!-- Grid column -->\n        <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3\">\n          <h6 class=\"text-uppercase mb-4 font-weight-bold\">Contact</h6>\n          <p>\n            <mdb-icon fas icon=\"home\" class=\"mr-3\"></mdb-icon> New York, NY 10012, US\n          </p>\n          <p>\n            <mdb-icon fas icon=\"envelope\" class=\"mr-3\"></mdb-icon> info@example.com\n          </p>\n          <p>\n            <mdb-icon fas icon=\"phone\" class=\"mr-3\"></mdb-icon> + 01 234 567 88\n          </p>\n          <p>\n            <mdb-icon fas icon=\"print\" class=\"mr-3\"></mdb-icon> + 01 234 567 88\n          </p>\n        </div>\n        <!-- Grid column -->\n \n      </div>\n      <!-- Footer links -->\n \n      <hr>\n \n      <!-- Grid row -->\n      <div class=\"row d-flex align-items-center\">\n \n        <!-- Grid column -->\n        <div class=\"col-md-7 col-lg-8\">\n \n          <!--Copyright-->\n          <p class=\"text-center text-md-left\">© 2021 Copyright:\n            <a href=\"https://mdbootstrap.com/\">\n              <strong> MDBootstrap.com</strong>\n            </a>\n          </p>\n \n        </div>\n        <!-- Grid column -->\n \n        <!-- Grid column -->\n        <div class=\"col-md-5 col-lg-4 ml-lg-0\">\n \n          <!-- Social buttons -->\n          <div class=\"text-center text-md-right\">\n            <ul class=\"list-unstyled list-inline\">\n              <li class=\"list-inline-item\">\n                <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\n                  <mdb-icon fab icon=\"facebook\"></mdb-icon>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\n                  <mdb-icon fab icon=\"twitter\"></mdb-icon>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\n                  <mdb-icon fab fab icon=\"google-plus\"></mdb-icon>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\n                  <mdb-icon fab icon=\"linkedin\"></mdb-icon>\n                </a>\n              </li>\n            </ul>\n          </div>\n \n        </div>\n        <!-- Grid column -->\n \n      </div>\n      <!-- Grid row -->\n \n    </div>\n    <!-- Footer Links -->\n \n  </footer>\n  <!-- End of Footer -->\n </mdb-card-text>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/product-list/product-card/product-card.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/product-list/product-card/product-card.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-grid grid\">\n    <div class=\"product-image\">\n      <a [routerLink]=\"['product-details', product.ProductId]\">\n        <img class=\"pic-1\" [src]=\"'/assets/product_images/' + product.PrimaryImage\">\n        <img class=\"pic-2\" [src]=\"'/assets/product_images/' + product.PrimaryImage\">\n      </a>\n      <ul class=\"social\">\n        <li><a [routerLink]=\"['product-details', product.ProductId]\" data-tip=\"Quick View\"><i class=\"fa fa-eye\"></i></a>\n        </li>\n      </ul>\n      <!-- <span class=\"product-new-label\">New</span>\n              <span class=\"product-discount-label\">-10%</span> -->\n    </div>\n    <div class=\"product-content\">\n      <span class=\"product-shipping\">{{product.DepartmentName}} - {{product.CategoryName}}</span>\n      <h3 class=\"title\">\n        <a [routerLink]=\"['product-details', product.ProductId]\"><strong>\n            {{product.Name}}\n          </strong>\n        </a>\n      </h3>\n      <div class=\"price\">$\n        {{product.Price}}\n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col-md-6 py-1 px-1\">\n          <strong>\n            Size\n          </strong>\n          <select class=\"browser-default custom-select\">\n            <option [value]=\"item.AttributeId\" *ngFor=\"let item of product.Size\">{{item.AttributeValue}}</option>\n          </select>\n  \n        </div>\n        <div class=\"col-md-6 py-1 px-1\">\n          <strong>\n            Color\n          </strong>\n          <select class=\"browser-default custom-select\">\n            <option [value]=\"item.AttributeId\" *ngFor=\"let item of product.Color\">{{item.AttributeValue}}</option>\n          </select>\n        </div>\n      </div>\n      <!-- <button class=\"add-to-cart\" (click)=\"onAddProductToCart()\">ADD TO CART</button> -->\n      <app-add-to-cart [productId]=\"product.ProductId\" [colorId]=\"colorId\" [sizeId]=\"sizeId\" [isHomePage]=\"true\">\n      </app-add-to-cart>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/product-list/product-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/product-list/product-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Section: Products v.1-->\n<section class=\"text-center pb-3 mb-5 mt-1\">\n    <!--Section description-->\n    <!-- <p class=\"grey-text pb-1 font-weight-normal font-italic\">\n        We hope you have fun developing TShirtShop, the e-commerce store from begining PHP and MySQL E-commerce: from Novoice to Professional!\n        We have the largest collection of t-shirt with postal stamps on Earth! Browse our departments and categories to find your favorite!\n \n    </p> -->\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <a href=\"#\">{{departmentName}}</a>\n            <a href=\"#\" *ngIf=\"categoryName\">&nbsp;<span class=\"black-text\">>></span>&nbsp;{{categoryName}}</a>\n        </ol>\n        <ol class=\"breadcrumb search-string\" *ngIf=\"searchString\">\n            <a href=\"#\">Product contains any of these words</a>\n            <ng-container *ngIf=\"allWords; else elseTemplate\">\n                    <a href=\"#\" *ngIf=\"searchString\">&nbsp;<span class=\"black-text\">>></span>&nbsp;{{searchString.split(' ').toString()}}</a>\n            </ng-container>\n            <ng-template #elseTemplate>\n                    <a href=\"#\" *ngIf=\"searchString\">&nbsp;<span class=\"black-text\">>></span>&nbsp;{{searchString}}</a>  \n            </ng-template>\n        </ol>\n    </nav>\n          \n    <!--Grid row-->\n    <div class=\"row\">\n        <!--Grid column-->\n        <app-product-card *ngFor=\"let product of productList\" [productData]=\"product\" class=\"col-md-4 col-sm-6 mb-3 row-eq-height\"></app-product-card>\n          <!--Grid column-->\n    </div>\n    <!--Grid row-->\n  </section>\n  <nav aria-label=\"Page navigation example\" *ngIf=\"PRODUCT_COUNT > 10\">\n      <app-pagination\n        (goPage)=\"goToPage($event)\"\n        (goNext)=\"onNext()\"\n        (goPrev)=\"onPrev()\"\n        [pagesToShow]=\"5\"\n        [page]=\"CURRENT_PAGE\"\n        [perPage]=\"PER_PAGE\"\n        [count]=\"PRODUCT_COUNT\">\n      </app-pagination>\n    </nav>\n  <!--Section: Products v.1-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/shared/add-to-cart/add-to-cart.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/shared/add-to-cart/add-to-cart.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-container *ngIf=\"isHomePage; else elseTemplate\">\n        <input type=\"number\" value=\"1\" aria-label=\"Search\" class=\"form-control d-none\" style=\"width: 100px\" [(ngModel)]=\"quantity\" >\n        <button class=\"add-to-cart\" (click)=\"onAddProductToCart()\">ADD TO CART</button>\n</ng-container>\n<ng-template #elseTemplate>\n        <input type=\"number\" value=\"1\" aria-label=\"Search\" class=\"form-control\" style=\"width: 100px\" [(ngModel)]=\"quantity\" >\n        <button class=\"btn btn-primary btn-md my-0 p\" type=\"button\" (click)=\"onAddProductToCart()\">Add to cart\n                <i class=\"fas fa-shopping-cart ml-1\"></i>\n            </button>\n</ng-template>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/shared/pagination/pagination.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/shared/pagination/pagination.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination pagination-circle pg-blue justify-content-center\" *ngIf=\"count > 0\">\n  <li class=\"page-item\" \n    [ngClass]=\"{ 'disabled': page === 1 || loading }\"\n    (click)=\"onPage(1)\" >\n      <a class=\"page-link\" mdbWavesEffect>\n        First\n      </a>\n  </li>\n  <li class=\"page-item\" \n    (click)=\"onPrev()\" \n    [ngClass]=\"{ 'disabled': page === 1 || loading }\">\n      <a class=\"page-link\" aria-label=\"Previous\" mdbWavesEffect>\n        <span aria-hidden=\"true\">&laquo;</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n  </li>\n  <li class=\"page-item\" \n    *ngFor=\"let pageNum of getPages()\" \n    (click)=\"onPage(pageNum)\"\n    [ngClass]=\"{'active': pageNum === page, 'disabled': loading}\">\n      <a class=\"page-link\" mdbWavesEffect>\n          {{ pageNum }}\n      </a>\n  </li>\n  <li class=\"page-item\" \n    (click)=\"onNext(true)\" \n    [ngClass]=\"{ 'disabled': lastPage() || loading }\">\n      <a class=\"page-link\" aria-label=\"Next\" mdbWavesEffect>\n        <span aria-hidden=\"true\">&raquo;</span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n  </li>\n  <li class=\"page-item\"\n    [ngClass]=\"{ 'disabled': page === totalPages() || loading }\"\n    (click)=\"onPage(totalPages())\" >\n      <a class=\"page-link\" mdbWavesEffect>\n        Last\n      </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/shopping-cart/shopping-cart.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/shopping-cart/shopping-cart.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-4 px-lg-0 pt-5\">\n    <!-- For demo purpose -->\n    \n    <div class=\"pb-5\">\n        <div class=\"container\">\n          <div class=\"row\" *ngIf=\"cart.length > 0\">\n            <div class=\"col-lg-12 p-5 bg-white rounded shadow-sm mb-5\">\n    \n                <div class=\"card shopping-cart\">\n                    <div class=\"card-header bg-dark text-light\">\n                        <strong>\n                                <a href=\"#\" class=\"btn btn-md float-left\">\n                                  <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n                                  Shopping Cart\n                                </a>\n                                \n                        </strong>\n                        <a [routerLink]=\"['/']\" class=\"btn btn-outline-info btn-md float-right\">Continue shopping</a>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                    <div class=\"card-body\">\n                            <!-- PRODUCT -->\n                            <div class=\"row\" *ngFor=\"let product of cart\">\n                                <div class=\"col-12 col-sm-12 col-md-2 text-center\">\n                                        <img class=\"img-responsive\" [src]=\"'/assets/product_images/' + product.Thumbnail\"  alt=\"product.Name\"  height=\"80\">\n                                </div>\n                                <div class=\"col-12 text-sm-center col-sm-12 text-md-left col-md-5\">\n                                    <h4 class=\"product-name\"><strong>{{product.Name}}</strong></h4>\n                                    <dl class=\"param param-inline small\">\n                                        <dt>Size: </dt>\n                                        <dd><span class=\"badge purple mr-1\">{{product.DepartmentName}}</span></dd>\n                                      </dl>\n                                      <dl class=\"param param-inline small\">\n                                        <dt>Color: </dt>\n                                        <dd> <span class=\"badge blue mr-1\">{{product.CategoryName}}</span></dd>\n                                      </dl>\n                                </div>\n                                <div class=\"col-12 col-sm-12 text-sm-center col-md-4 text-md-right row\">\n                                    <div class=\"col-3 col-sm-3 col-md-6 text-md-right\" style=\"padding-top: 5px\">\n                                            <div class=\"price-wrap\"> \n                                                    <var class=\"price\">${{(product.Price * product.Quantity).toFixed(2)}}</var> \n                                                    <small class=\"text-muted\">(${{product.Price.toFixed(2)}} each)</small> \n                                                </div>\n                                    </div>\n                                    <div class=\"col-4 col-sm-4 col-md-4\">\n                                        <div class=\"quantity\">\n                                            <input type=\"button\" value=\"+\" class=\"plus\" (click)=\"onUpdateQuantity(1,  product.ProductId)\">\n                                            <input type=\"number\" step=\"1\" max=\"99\" min=\"1\" [value]=\"product.Quantity\" title=\"Qty\" class=\"qty\"\n                                                   size=\"4\">\n                                            <input type=\"button\" value=\"-\" class=\"minus\" [disabled]=\"product.Quantity == 1\" (click)=\"onUpdateQuantity(0, product.ProductId)\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-2 col-sm-2 col-md-2 text-right\">\n                                        <button type=\"button\" class=\"btn btn-outline-danger btn-xs\" (click)=\"onRemoveProductsFromCart(product.ProductId)\">\n                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- END PRODUCT -->\n                    </div>\n                    <div class=\"card-footer\">\n                        <!-- <div class=\"coupon col-md-5 col-sm-5 no-padding-left float-left\">\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"cupone code\">\n                                </div>\n                                <div class=\"col-6\">\n                                    <input type=\"submit\" class=\"btn btn-default\" value=\"Use cupone\">\n                                </div>\n                            </div>\n                        </div> -->\n                        <div class=\"float-right\" style=\"margin: 10px\">\n                            <div class=\"float-left\" style=\"margin: 17px\">\n                                Total price: <b>${{total.toFixed(2)}}</b>\n                            </div>\n                            <a class=\"btn btn-success\" [routerLink]=\"['/checkout/review']\" role=\"button\">Checkout</a>\n                            <!-- <app-paypal-checkout [totalAmount]=\"total.toFixed(2)\" class=\"float-right\"></app-paypal-checkout> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"cart.length == 0\">\n            <div class=\"col-lg-12 p-5 bg-white rounded shadow-sm mb-5\">\n                <div class=\"jumbotron text-xs-center\">\n                    <h1 class=\"display-3\">Oops!</h1>\n                    <p class=\"lead\">No Products Found in Cart</p>\n                    <hr>\n                    <p>\n                        Please, Add Products to Cart\n                    </p>\n                    <p class=\"lead\">\n                        <a class=\"btn btn-success \" [routerLink]=\"['/']\" role=\"button\">Our Products</a>\n                    </p>\n                </div>\n            </div>\n          </div>\n    \n          <div class=\"row pb-5 px-4 bg-white rounded shadow-sm\">\n            <div class=\"col-lg-6\">\n               <div class=\"bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold\">Coupon code</div>\n              <div class=\"p-4\">\n                <p class=\"font-italic mb-4\">If you have a coupon code, please enter it in the box below</p>\n                <div class=\"input-group mb-4 border rounded-pill p-2\">\n                  <input type=\"text\" placeholder=\"Apply coupon\" aria-describedby=\"button-addon3\" class=\"form-control border-0\">\n                  <div class=\"input-group-append border-0\">\n                    <button id=\"button-addon3\" type=\"button\" class=\"btn btn-dark px-4 rounded-pill\"><i class=\"fa fa-gift mr-2\"></i>Apply coupon</button>\n                  </div>\n                </div>\n              </div> \n              <div class=\"bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold\">Instructions for seller</div>\n              <div class=\"p-4\">\n                <p class=\"font-italic mb-4\">If you have some information for the seller you can leave them in the box below</p>\n                <textarea name=\"\" cols=\"30\" rows=\"2\" class=\"form-control\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold\">Order summary </div>\n              <div class=\"p-4\">\n                <p class=\"font-italic mb-4\">Shipping and additional costs are calculated based on values you have entered.</p>\n                <ul class=\"list-unstyled mb-4\">\n                  <li class=\"d-flex justify-content-between py-3 border-bottom\"><strong class=\"text-muted\">Order Subtotal </strong><strong>$390.00</strong></li>\n                  <li class=\"d-flex justify-content-between py-3 border-bottom\"><strong class=\"text-muted\">Shipping and handling</strong><strong>$10.00</strong></li>\n                  <li class=\"d-flex justify-content-between py-3 border-bottom\"><strong class=\"text-muted\">Tax</strong><strong>$0.00</strong></li>\n                  <li class=\"d-flex justify-content-between py-3 border-bottom\"><strong class=\"text-muted\">Total</strong>\n                    <h5 class=\"font-weight-bold\">$400.00</h5>\n                  </li>\n                </ul><a href=\"#\" class=\"btn btn-dark rounded-pill py-2 btn-block\">Procceed to checkout</a>\n              </div>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    <!-- End -->\n  \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"register-block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 register-sec\">\n          <h2 class=\"text-center\">Sign in</h2>\n          <form class=\"register-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"username\" class=\"text-uppercase\">Email</label>\n                <input type=\"text\" \n                formControlName=\"username\" \n                class=\"form-control\" \n                [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Email is required</div>\n                </div>\n              <!-- <label for=\"exampleInputEmail\" class=\"text-uppercase\">Email</label>\n              <input type=\"email\" class=\"form-control\" placeholder=\"\"> -->\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\" class=\"text-uppercase\">Password</label>\n                <input type=\"password\" \n                formControlName=\"password\" \n                class=\"form-control\" \n                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n              <!-- <label for=\"exampleInputPassword1\" class=\"text-uppercase\">Password</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"\"> -->\n            </div>\n            <div class=\"form-check\">\n              <button type=\"submit\" class=\"btn btn-register float-right\">Submit</button>\n            </div>\n  \n          </form>\n        </div>\n        <div class=\"col-md-8 banner-sec\">\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/order-confirmation/order-confirmation.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/order-confirmation/order-confirmation.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-xs-center\">\n    <h1 class=\"display-3\">Thank You!</h1>\n    <p class=\"lead\">Your Payment has been recived to us. <strong>Please check your email</strong> </p>\n    <hr>\n    <p>\n        Having trouble? <a href=\"\">Contact us</a>\n    </p>\n    <p class=\"lead\">\n        <a class=\"btn btn-success \" [routerLink]=\"['/']\" role=\"button\">Continue to homepage</a>\n    </p>\n</div>\n        "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-details/product-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-details/product-details.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Main layout-->\n<main class=\"mt-5 pt-4\">\n\n    <div class=\"container dark-grey-text mt-5\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div class=\"product-image\">\n            <div class=\"view hm-zoom z-depth-2\" style=\"cursor: pointer\">\n              <div class=\"d-flex product-image pt-2\">\n                <img [src]=\"'/assets/product_images/' + product.PrimaryImage\" *ngIf=\"product.PrimaryImage\"\n                  class=\"img-fluid \" [alt]=\"product.Name\">\n              </div>\n              <div class=\"d-flex product-image pt-2 pb-2\">\n                <img [src]=\"'/assets/product_images/' + product.SecondaryImage\" *ngIf=\"product.SecondaryImage\"\n                  class=\"img-fluid \" [alt]=\"product.Name\">\n              </div>\n            </div>\n            <div class=\"\" style=\"margin-top:15px\">\n              <ul class=\"list-group mb-3\">\n                <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n                  <div>\n                    <h6 class=\"my-0\">Product Price</h6>\n                  </div>\n                  <span class=\"text-muted\" style=\"color:crimson !important\">${{product.Price}}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8\">\n          <div class=\"product-detail\">\n            <h5 class=\"product-head\">Product Details</h5>\n            <table class=\"table\" cellspacing=\"0\" style=\"max-height: 28px\">\n              <tbody>\n                <tr>\n                  <th scope=\"row\">Product Name</th>\n                  <td>{{product.Name}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Product Description</th>\n                  <td>{{product.Description}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Product Category</th>\n                  <td>\n                    <a href=\"\">\n                      <span class=\"badge purple mr-1\">{{product.DepartmentName}}</span>\n                    </a>\n                    <a href=\"\">\n                      <span class=\"badge blue mr-1\">{{product.CategoryName}}</span>\n                    </a>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <strong class=\"d-flex\">\n                      Color\n                    </strong>\n                    <select class=\"browser-default custom-select\" *ngIf=\"product\" style=\"width: 100px\"\n                      [(ngModel)]=\"colorId\">\n                      <option [value]=\"item.AttributeValueId\" *ngFor=\"let item of product.Color\"> {{item.AttributeValue}}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <strong class=\"d-flex\">\n                      Size\n                    </strong>\n                    <select class=\"browser-default custom-select\" *ngIf=\"product\" style=\"width: 100px\"\n                      [(ngModel)]=\"sizeId\">\n                      <option [value]=\"item.AttributeValueId\" *ngFor=\"let item of product.Size\">{{item.AttributeValue}}\n                      </option>\n                    </select>\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\">\n                    <app-add-to-cart class=\"d-flex\" [productId]=\"product.ProductId\" [colorId]=\"colorId\" [sizeId]=\"sizeId\"\n                      [isHomePage]=\"false\"></app-add-to-cart>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n  \n          </div>\n        </div>\n      </div>\n    </div>\n  </main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"register-block\">\n    \n            <div class=\"col-md-12 register-sec pb-0 pt-0\">\n                    <h2 class=\"text-center\">Register Now</h2>\n            </div>\n            <form class=\"register-form col-md-12\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 \">\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control is-invalid\" \n                            formControlName=\"FirstName\" placeholder=\"First Name\"\n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.FirstName.errors }\" >\n                            \n                            <div *ngIf=\"submitted && f.FirstName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.FirstName.errors.required\">First Name is required</div>\n                            </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Address Line 1\"\n                            formControlName=\"AddressOne\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.AddressOne.errors }\" >\n\n                            <div *ngIf=\"submitted && f.AddressOne.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.AddressOne.errors.required\">First Name is required</div>\n                            </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Town\"\n                            formControlName=\"Town\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.Town.errors }\" >\n\n                             <div *ngIf=\"submitted && f.Town.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.Town.errors.required\">First Name is required</div>\n                            </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <select id=\"\" class=\"form-control\" \n                            formControlName=\"RegionId\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.RegionId.errors }\" >\n                                <option value=\"\" disabled selected>Choose your option</option>\n                                <option [value]=\"item.RegionId\" *ngFor=\"let item of regions\">{{item.Region}}</option>\n                            </select>\n\n                             <div *ngIf=\"submitted && f.RegionId.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.RegionId.errors.required\">First Name is required</div>\n                            </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Mobile Number\"\n                            formControlName=\"Mobile\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.Mobile.errors }\" >\n\n                            <div *ngIf=\"submitted && f.Mobile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.Mobile.errors.required\">First Name is required</div>\n                                </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\"\n                            formControlName=\"Email\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.Email.errors }\" >\n\n                            <div *ngIf=\"submitted && f.Email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.Email.errors.required\">First Name is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\"\n                            formControlName=\"LastName\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.LastName.errors }\" >\n\n                            <div *ngIf=\"submitted && f.LastName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.LastName.errors.required\">First Name is required</div>\n                            </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Address Line 2\"\n                            formControlName=\"AddressTwo\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.AddressTwo.errors }\">\n\n                            <div *ngIf=\"submitted && f.AddressTwo.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.AddressTwo.errors.required\">First Name is required</div>\n                            </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control\" \n                            formControlName=\"Country\" placeholder=\"Country\"\n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.Country.errors }\" >\n\n                            <div *ngIf=\"submitted && f.Country.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.Country.errors.required\">First Name is required</div>\n                                </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Post/ZipCode\"\n                            formControlName=\"ZipCode\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.ZipCode.errors }\" >\n\n                            <div *ngIf=\"submitted && f.ZipCode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.ZipCode.errors.required\">First Name is required</div>\n                                </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Credit Card Number\"\n                            formControlName=\"CreditCard\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.CreditCard.errors }\" >\n\n                            <div *ngIf=\"submitted && f.CreditCard.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.CreditCard.errors.required\">First Name is required</div>\n                            </div>\n                        </div>\n                        <div class=\"md-form mt-0\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\"\n                            formControlName=\"Password\" \n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': submitted && f.Password.errors }\" >\n\n                            <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.Password.errors.required\">First Name is required</div>\n                                </div>\n                        </div>\n                        <div class=\"form-check\">\n                            <button type=\"submit\" class=\"btn btn-register float-right\">Submit</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <!-- <div class=\"col-md-8 banner-sec\">\n            </div> -->\n</section>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem;\n}\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px;\n}\n\n.classic-admin-card .card-body .float-right .fa {\n  font-size: 3rem;\n  opacity: 0.5;\n}\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.table-ui {\n  border: 1px solid #e0e0e9;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n\n.card.card-cascade .view {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n}\n\n/* You can add global styles to this file, and also import other style files */\n\n/* You can add global styles to this file, and also import other style files */\n\nbody {\n  background-color: #eee;\n}\n\n.card.card-cascade .view.gradient-card-header {\n  padding: 1rem 1rem;\n  text-align: center;\n}\n\n.card.card-cascade h3,\n.card.card-cascade h4 {\n  margin-bottom: 0px;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n\n.sidebar-fixed {\n  height: 100vh;\n  width: 270px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1050;\n  background-color: #fff;\n  padding: 0 1.5rem 1.5rem;\n}\n\n.sidebar-fixed .list-group .active {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n}\n\n.sidebar-fixed .logo-wrapper {\n  padding: 2.5rem;\n}\n\n.sidebar-fixed .logo-wrapper img {\n  max-height: 50px;\n}\n\n@media (min-width: 1200px) {\n  .navbar, .page-footer, main {\n    padding-left: 270px;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .sidebar-fixed {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFFSSxvREFBQTtBQ0NKOztBREdJO0VBQ0ksOEVBQUE7QUNBUjs7QURPQSw4RUFBQTs7QUFDQSw4RUFBQTs7QUFDQTtFQUNJLHNCQUFBO0FDSko7O0FET0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0U7O0VBR0Usa0JBQUE7QUNMSjs7QURRRTtFQUVFLG9EQUFBO0FDTEo7O0FEUUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUVBLDZFQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNMSjs7QURRRTtFQUVFLDZFQUFBO0VBRUEsa0JBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7QUNMSjs7QURRRTtFQUNFLGdCQUFBO0FDTEo7O0FEUUU7RUFDRTtJQUNFLG1CQUFBO0VDTEo7QUFDRjs7QURRRTtFQUNFO0lBQ0UsYUFBQTtFQ05KO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAwLjlyZW07XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBoNCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IC5mbG9hdC1yaWdodCAuZmEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLnByb2dyZXNzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4udGFibGUtdWkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTk7XG59XG5cbi5ibHVlLWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgIzQ1Y2FmYywgIzMwM2Y5Zik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjNDI4NWY0KTtcbn1cblxuLmNhcmQuY2FyZC1jYXNjYWRlIHtcbiAgICAudmlldyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDNweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB9XG59XG5cblxuXG4vL2FkbWluXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB9XG4gIFxuICAuY2FyZC5jYXJkLWNhc2NhZGUgLnZpZXcuZ3JhZGllbnQtY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jYXJkLmNhcmQtY2FzY2FkZSBoMyxcbiAgLmNhcmQuY2FyZC1jYXNjYWRlIGg0LFxuICB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIFxuICAuYmx1ZS1ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsICM0NWNhZmMsICMzMDNmOWYpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzQyODVmNCk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLWZpeGVkIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgei1pbmRleDogMTA1MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtIDEuNXJlbVxuICB9XG4gIFxuICAuc2lkZWJhci1maXhlZCAubGlzdC1ncm91cCAuYWN0aXZlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gIH1cbiAgXG4gIC5zaWRlYmFyLWZpeGVkIC5sb2dvLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDIuNXJlbVxuICB9XG4gIFxuICAuc2lkZWJhci1maXhlZCAubG9nby13cmFwcGVyIGltZyB7XG4gICAgbWF4LWhlaWdodDogNTBweFxuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLm5hdmJhciwgLnBhZ2UtZm9vdGVyLCBtYWluIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjcwcHhcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgICAuc2lkZWJhci1maXhlZCB7XG4gICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuICB9IiwiLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IGg0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IC5mbG9hdC1yaWdodCAuZmEge1xuICBmb250LXNpemU6IDNyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAucHJvZ3Jlc3Mge1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnRhYmxlLXVpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlOTtcbn1cblxuLmJsdWUtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgIzQ1Y2FmYywgIzMwM2Y5Zik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzQyODVmNCk7XG59XG5cbi5jYXJkLmNhcmQtY2FzY2FkZSAudmlldyB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDNweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5jYXJkLmNhcmQtY2FzY2FkZSAudmlldy5ncmFkaWVudC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC5jYXJkLWNhc2NhZGUgaDMsXG4uY2FyZC5jYXJkLWNhc2NhZGUgaDQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5ibHVlLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsICM0NWNhZmMsICMzMDNmOWYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICM0Mjg1ZjQpO1xufVxuXG4uc2lkZWJhci1maXhlZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNzBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHotaW5kZXg6IDEwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMS41cmVtIDEuNXJlbTtcbn1cblxuLnNpZGViYXItZml4ZWQgLmxpc3QtZ3JvdXAgLmFjdGl2ZSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2lkZWJhci1maXhlZCAubG9nby13cmFwcGVyIHtcbiAgcGFkZGluZzogMi41cmVtO1xufVxuXG4uc2lkZWJhci1maXhlZCAubG9nby13cmFwcGVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm5hdmJhciwgLnBhZ2UtZm9vdGVyLCBtYWluIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI3MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5zaWRlYmFyLWZpeGVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.map = { lat: 51.678418, lng: 7.809007 };
        this.chart1Type = 'bar';
        this.chart2Type = 'pie';
        this.chart3Type = 'line';
        this.chart4Type = 'radar';
        this.chart5Type = 'doughnut';
        this.chartType = 'line';
        this.chartDatasets = [
            { data: [50, 40, 60, 51, 56, 55, 40], label: '#1' },
            { data: [28, 80, 40, 69, 36, 37, 110], label: '#2' },
            { data: [38, 58, 30, 90, 45, 65, 30], label: '#3' }
        ];
        this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        this.chartColors = [];
        this.chartOptions = {
            responsive: true,
            legend: {
                labels: {
                    fontColor: '#5b5f62',
                }
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: '#5b5f62',
                        }
                    }],
                xAxes: [{
                        ticks: {
                            fontColor: '#5b5f62',
                        }
                    }]
            }
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/main-layout/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/main-layout/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21haW4tbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/main-layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/main-layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/main-layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/admin/main-layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/admin/main-layout/navigation/navigation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/main-layout/navigation/navigation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-fixed {\n  height: 100vh;\n  width: 270px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1050;\n  background-color: #fff;\n  padding: 1.5rem;\n  padding-top: 0;\n}\n\n.sidebar-fixed .list-group .active {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n}\n\n.sidebar-fixed .logo-wrapper {\n  padding: 2.5rem;\n}\n\n.sidebar-fixed .logo-wrapper img {\n  max-height: 50px;\n}\n\n@media (min-width: 1200px) {\n  .navbar,\n.page-footer,\nmain {\n    padding-left: 270px;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .sidebar-fixed {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2FkbWluL21haW4tbGF5b3V0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vbWFpbi1sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFFQSw2RUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQUk7RUFFRSw2RUFBQTtFQUVBLGtCQUFBO0FDR047O0FERkk7RUFDRSxlQUFBO0FDS047O0FESk07RUFDRSxnQkFBQTtBQ09SOztBRExFO0VBQ0U7OztJQUdFLG1CQUFBO0VDUUo7QUFDRjs7QURQRTtFQUNFO0lBQ0UsYUFBQTtFQ1NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9tYWluLWxheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1maXhlZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB6LWluZGV4OiAxMDUwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwOyB9XG4gICAgLnNpZGViYXItZml4ZWQgLmxpc3QtZ3JvdXAgLmFjdGl2ZSB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgIC5zaWRlYmFyLWZpeGVkIC5sb2dvLXdyYXBwZXIge1xuICAgICAgcGFkZGluZzogMi41cmVtOyB9XG4gICAgICAuc2lkZWJhci1maXhlZCAubG9nby13cmFwcGVyIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7IH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAubmF2YmFyLFxuICAgIC5wYWdlLWZvb3RlcixcbiAgICBtYWluIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjcwcHg7IH0gfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAgIC5zaWRlYmFyLWZpeGVkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuICAiLCIuc2lkZWJhci1maXhlZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNzBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHotaW5kZXg6IDEwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5zaWRlYmFyLWZpeGVkIC5saXN0LWdyb3VwIC5hY3RpdmUge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGViYXItZml4ZWQgLmxvZ28td3JhcHBlciB7XG4gIHBhZGRpbmc6IDIuNXJlbTtcbn1cblxuLnNpZGViYXItZml4ZWQgLmxvZ28td3JhcHBlciBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5uYXZiYXIsXG4ucGFnZS1mb290ZXIsXG5tYWluIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI3MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5zaWRlYmFyLWZpeGVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/main-layout/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/main-layout/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.clicked = this.clicked === undefined ? false : true;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.setClicked = function (val) {
        this.clicked = val;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavigationComponent.prototype, "sidenav", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/main-layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/admin/main-layout/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/cascading-card/cascading-card.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/shared/components/cascading-card/cascading-card.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2Nhc2NhZGluZy1jYXJkL2Nhc2NhZGluZy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/cascading-card/cascading-card.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/shared/components/cascading-card/cascading-card.component.ts ***!
  \************************************************************************************/
/*! exports provided: CascadingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CascadingCardComponent", function() { return CascadingCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CascadingCardComponent = /** @class */ (function () {
    function CascadingCardComponent() {
        this.headerType = '';
        this.title = '';
        this.alignment = 'center';
        this.src = '';
    }
    CascadingCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CascadingCardComponent.prototype, "headerType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CascadingCardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CascadingCardComponent.prototype, "alignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CascadingCardComponent.prototype, "src", void 0);
    CascadingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cascading-card',
            template: __webpack_require__(/*! raw-loader!./cascading-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/cascading-card/cascading-card.component.html"),
            styles: [__webpack_require__(/*! ./cascading-card.component.scss */ "./src/app/admin/shared/components/cascading-card/cascading-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CascadingCardComponent);
    return CascadingCardComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/cascading-panel/cascading-panel.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/shared/components/cascading-panel/cascading-panel.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2Nhc2NhZGluZy1wYW5lbC9jYXNjYWRpbmctcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/shared/components/cascading-panel/cascading-panel.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/shared/components/cascading-panel/cascading-panel.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CascadingPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CascadingPanelComponent", function() { return CascadingPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CascadingPanelComponent = /** @class */ (function () {
    function CascadingPanelComponent() {
        this.headerType = '';
        this.title = '';
        this.panelClass = '';
        this.alignment = 'center';
    }
    CascadingPanelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CascadingPanelComponent.prototype, "headerType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CascadingPanelComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CascadingPanelComponent.prototype, "panelClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CascadingPanelComponent.prototype, "alignment", void 0);
    CascadingPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cascading-panel',
            template: __webpack_require__(/*! raw-loader!./cascading-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/cascading-panel/cascading-panel.component.html"),
            styles: [__webpack_require__(/*! ./cascading-panel.component.scss */ "./src/app/admin/shared/components/cascading-panel/cascading-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CascadingPanelComponent);
    return CascadingPanelComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/modal/modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/shared/components/modal/modal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/modal/modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/shared/components/modal/modal.component.ts ***!
  \******************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.type = '';
        this.side = '';
        this.size = '';
        this.getClass = function () {
            var type = this.type;
            var size = this.size;
            var side = this.side;
            if (type === 'central') {
                if (size === 'small') {
                    return 'modal-sm';
                }
                else if (size === 'large') {
                    return 'modal-lg';
                }
                else if (size === 'fluid') {
                    return 'modal-fluid';
                }
                else {
                    return '';
                }
            }
            else if (type === 'side') {
                if (side === 'top-left') {
                    return 'modal-side modal-top-left';
                }
                else if (side === 'bottom-left') {
                    return 'modal-side modal-bottom-left';
                }
                else if (side === 'bottom-right') {
                    return 'modal-side modal-bottom-right';
                }
                else {
                    return 'modal-side modal-top-right';
                }
            }
            else if (type === 'fluid') {
                if (side === 'right') {
                    return 'modal-full-height modal-right';
                }
                else if (side === 'left') {
                    return 'modal-full-height modal-left';
                }
                else if (side === 'bottom') {
                    return 'modal-full-height modal-bottom';
                }
                else {
                    return 'modal-full-height modal-top';
                }
            }
            else if (type === 'frame') {
                if (side === 'bottom') {
                    return 'modal-frame modal-bottom';
                }
                else {
                    return 'modal-frame modal-top';
                }
            }
            else {
                return '';
            }
        };
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "side", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "size", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/admin/shared/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());

;


/***/ }),

/***/ "./src/app/admin/shared/components/overlay-card/overlay-card.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/shared/components/overlay-card/overlay-card.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL292ZXJsYXktY2FyZC9vdmVybGF5LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/shared/components/overlay-card/overlay-card.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/shared/components/overlay-card/overlay-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: OverlayCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayCardComponent", function() { return OverlayCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OverlayCardComponent = /** @class */ (function () {
    function OverlayCardComponent() {
        this.alignment = 'center';
        this.src = '';
        this.color = '';
    }
    OverlayCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverlayCardComponent.prototype, "alignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverlayCardComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverlayCardComponent.prototype, "color", void 0);
    OverlayCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'overlay-card',
            template: __webpack_require__(/*! raw-loader!./overlay-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/overlay-card/overlay-card.component.html"),
            styles: [__webpack_require__(/*! ./overlay-card.component.scss */ "./src/app/admin/shared/components/overlay-card/overlay-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OverlayCardComponent);
    return OverlayCardComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/panel/panel.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/shared/components/panel/panel.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/panel/panel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/shared/components/panel/panel.component.ts ***!
  \******************************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.alignment = 'center';
        this.color = '';
        this.header = '';
        this.footer = '';
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "alignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "footer", void 0);
    PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panel',
            template: __webpack_require__(/*! raw-loader!./panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/admin/shared/components/panel/panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/admin/shared/components/modal/modal.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_cascading_panel_cascading_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cascading-panel/cascading-panel.component */ "./src/app/admin/shared/components/cascading-panel/cascading-panel.component.ts");
/* harmony import */ var _components_cascading_card_cascading_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cascading-card/cascading-card.component */ "./src/app/admin/shared/components/cascading-card/cascading-card.component.ts");
/* harmony import */ var _components_overlay_card_overlay_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/overlay-card/overlay-card.component */ "./src/app/admin/shared/components/overlay-card/overlay-card.component.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/panel/panel.component */ "./src/app/admin/shared/components/panel/panel.component.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
            ],
            declarations: [
                _components_cascading_panel_cascading_panel_component__WEBPACK_IMPORTED_MODULE_5__["CascadingPanelComponent"],
                _components_cascading_card_cascading_card_component__WEBPACK_IMPORTED_MODULE_6__["CascadingCardComponent"],
                _components_overlay_card_overlay_card_component__WEBPACK_IMPORTED_MODULE_7__["OverlayCardComponent"],
                _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
            ],
            exports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
                _components_cascading_panel_cascading_panel_component__WEBPACK_IMPORTED_MODULE_5__["CascadingPanelComponent"],
                _components_cascading_card_cascading_card_component__WEBPACK_IMPORTED_MODULE_6__["CascadingCardComponent"],
                _components_overlay_card_overlay_card_component__WEBPACK_IMPORTED_MODULE_7__["OverlayCardComponent"],
                _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/admin/views/dashboards/common/stats-card/stats-card.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/admin/views/dashboards/common/stats-card/stats-card.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cascading-admin-card {\n  margin-top: 20px;\n}\n\n.cascading-admin-card .admin-up {\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: -20px;\n}\n\n.cascading-admin-card .admin-up mdb-icon {\n  padding: 1.7rem;\n  font-size: 2rem;\n  color: #fff;\n  text-align: left;\n  margin-right: 1rem;\n  border-radius: 3px;\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);\n}\n\n.cascading-admin-card .admin-up .data {\n  float: right;\n  margin-top: 2rem;\n  text-align: right;\n}\n\n.cascading-admin-card .admin-up .data p {\n  color: #999999;\n  font-size: 12px;\n}\n\n.classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem;\n}\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px;\n}\n\n.classic-admin-card .card-body .float-right .fa {\n  font-size: 3rem;\n  opacity: 0.5;\n}\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.cascading-admin-card .admin-up .fa {\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2FkbWluL3ZpZXdzL2Rhc2hib2FyZHMvY29tbW9uL3N0YXRzLWNhcmQvc3RhdHMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vdmlld3MvZGFzaGJvYXJkcy9jb21tb24vc3RhdHMtY2FyZC9zdGF0cy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FERkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQ0tOOztBREpJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNPTjs7QUROTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDU1I7O0FEUEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVUY7O0FEVEU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDWUo7O0FEWEU7RUFDRSxnQkFBQTtBQ2NKOztBRGJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNnQko7O0FEZEE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQ2lCRjs7QURkQTtFQUVFLDRFQUFBO0FDaUJGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmlld3MvZGFzaGJvYXJkcy9jb21tb24vc3RhdHMtY2FyZC9zdGF0cy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhc2NhZGluZy1hZG1pbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuICAuY2FzY2FkaW5nLWFkbWluLWNhcmQgLmFkbWluLXVwIHtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDsgfVxuICAgIC5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgbWRiLWljb24ge1xuICAgICAgcGFkZGluZzogMS43cmVtO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOXB4IDAgcmdiYSgwLDAsMCwuMiksMCAycHggMTNweCAwIHJnYmEoMCwwLDAsLjE5KTsgfVxuICAgIC5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgLmRhdGEge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAuY2FzY2FkaW5nLWFkbWluLWNhcmQgLmFkbWluLXVwIC5kYXRhIHAge1xuICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjlyZW07IH1cbiAgLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxuICAuY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgaDQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IC5mbG9hdC1yaWdodCAuZmEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBvcGFjaXR5OiAwLjU7IH1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAucHJvZ3Jlc3Mge1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDAuNzsgfVxuXG5cbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgLmZhIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA5cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBib3gtc2hhZG93OiAwIDJweCA5cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufSIsIi5jYXNjYWRpbmctYWRtaW4tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAge1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uY2FzY2FkaW5nLWFkbWluLWNhcmQgLmFkbWluLXVwIG1kYi1pY29uIHtcbiAgcGFkZGluZzogMS43cmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAycHggOXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAxM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmNhc2NhZGluZy1hZG1pbi1jYXJkIC5hZG1pbi11cCAuZGF0YSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgLmRhdGEgcCB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjlyZW07XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBoNCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSAuZmxvYXQtcmlnaHQgLmZhIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLnByb2dyZXNzIHtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgLmZhIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA5cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBib3gtc2hhZG93OiAwIDJweCA5cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/views/dashboards/common/stats-card/stats-card.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/views/dashboards/common/stats-card/stats-card.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StatsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCardComponent", function() { return StatsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatsCardComponent = /** @class */ (function () {
    function StatsCardComponent() {
    }
    StatsCardComponent.prototype.ngOnInit = function () {
    };
    StatsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats-card',
            template: __webpack_require__(/*! raw-loader!./stats-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/views/dashboards/common/stats-card/stats-card.component.html"),
            styles: [__webpack_require__(/*! ./stats-card.component.scss */ "./src/app/admin/views/dashboards/common/stats-card/stats-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatsCardComponent);
    return StatsCardComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/dashboards/common/stats-card2/stats-card2.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/views/dashboards/common/stats-card2/stats-card2.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem;\n}\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px;\n}\n\n.classic-admin-card .card-body .float-right .fa {\n  font-size: 3rem;\n  opacity: 0.5;\n}\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.table-ui {\n  border: 1px solid #e0e0e9;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n\n.card.card-cascade .view {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2FkbWluL3ZpZXdzL2Rhc2hib2FyZHMvY29tbW9uL3N0YXRzLWNhcmQyL3N0YXRzLWNhcmQyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi92aWV3cy9kYXNoYm9hcmRzL2NvbW1vbi9zdGF0cy1jYXJkMi9zdGF0cy1jYXJkMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFFSSxvREFBQTtBQ0NKOztBREdJO0VBQ0ksOEVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXdzL2Rhc2hib2FyZHMvY29tbW9uL3N0YXRzLWNhcmQyL3N0YXRzLWNhcmQyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDAuOXJlbTtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IGg0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgLmZsb2F0LXJpZ2h0IC5mYSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAucHJvZ3Jlc3Mge1xuICAgIG1hcmdpbjogMDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi50YWJsZS11aSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlOTtcbn1cblxuLmJsdWUtZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICM0Mjg1ZjQpO1xufVxuXG4uY2FyZC5jYXJkLWNhc2NhZGUge1xuICAgIC52aWV3IHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIH1cbn0iLCIuY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMC45cmVtO1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgaDQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgLmZsb2F0LXJpZ2h0IC5mYSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5wcm9ncmVzcyB7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4udGFibGUtdWkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU5O1xufVxuXG4uYmx1ZS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjNDI4NWY0KTtcbn1cblxuLmNhcmQuY2FyZC1jYXNjYWRlIC52aWV3IHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/views/dashboards/common/stats-card2/stats-card2.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/views/dashboards/common/stats-card2/stats-card2.component.ts ***!
  \************************************************************************************/
/*! exports provided: StatsCard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCard2Component", function() { return StatsCard2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatsCard2Component = /** @class */ (function () {
    function StatsCard2Component() {
    }
    StatsCard2Component.prototype.ngOnInit = function () {
    };
    StatsCard2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats-card2',
            template: __webpack_require__(/*! raw-loader!./stats-card2.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/views/dashboards/common/stats-card2/stats-card2.component.html"),
            styles: [__webpack_require__(/*! ./stats-card2.component.scss */ "./src/app/admin/views/dashboards/common/stats-card2/stats-card2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatsCard2Component);
    return StatsCard2Component;
}());



/***/ }),

/***/ "./src/app/admin/views/dashboards/dashboard1/dashboard1.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/views/dashboards/dashboard1/dashboard1.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem;\n}\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px;\n}\n\n.classic-admin-card .card-body .float-right .fa {\n  font-size: 3rem;\n  opacity: 0.5;\n}\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.table-ui {\n  border: 1px solid #e0e0e9;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n\n.card.card-cascade .view {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2FkbWluL3ZpZXdzL2Rhc2hib2FyZHMvZGFzaGJvYXJkMS9kYXNoYm9hcmQxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi92aWV3cy9kYXNoYm9hcmRzL2Rhc2hib2FyZDEvZGFzaGJvYXJkMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFFSSxvREFBQTtBQ0NKOztBREdJO0VBQ0ksOEVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXdzL2Rhc2hib2FyZHMvZGFzaGJvYXJkMS9kYXNoYm9hcmQxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDAuOXJlbTtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IGg0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgLmZsb2F0LXJpZ2h0IC5mYSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAucHJvZ3Jlc3Mge1xuICAgIG1hcmdpbjogMDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi50YWJsZS11aSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlOTtcbn1cblxuLmJsdWUtZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICM0Mjg1ZjQpO1xufVxuXG4uY2FyZC5jYXJkLWNhc2NhZGUge1xuICAgIC52aWV3IHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIH1cbn0iLCIuY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMC45cmVtO1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgaDQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgLmZsb2F0LXJpZ2h0IC5mYSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5wcm9ncmVzcyB7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4udGFibGUtdWkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU5O1xufVxuXG4uYmx1ZS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjNDI4NWY0KTtcbn1cblxuLmNhcmQuY2FyZC1jYXNjYWRlIC52aWV3IHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/views/dashboards/dashboard1/dashboard1.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/views/dashboards/dashboard1/dashboard1.component.ts ***!
  \***************************************************************************/
/*! exports provided: Dashboard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Dashboard1Component = /** @class */ (function () {
    function Dashboard1Component() {
        this.map = { lat: 51.678418, lng: 7.809007 };
        this.chart1Type = 'bar';
        this.chart2Type = 'pie';
        this.chart3Type = 'line';
        this.chart4Type = 'radar';
        this.chart5Type = 'doughnut';
        this.chartType = 'line';
        this.chartDatasets = [
            { data: [50, 40, 60, 51, 56, 55, 40], label: '#1' },
            { data: [28, 80, 40, 69, 36, 37, 110], label: '#2' },
            { data: [38, 58, 30, 90, 45, 65, 30], label: '#3' }
        ];
        this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        this.chartColors = [];
        this.chartOptions = {
            responsive: true,
            legend: {
                labels: {
                    fontColor: '#5b5f62',
                }
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: '#5b5f62',
                        }
                    }],
                xAxes: [{
                        ticks: {
                            fontColor: '#5b5f62',
                        }
                    }]
            }
        };
    }
    Dashboard1Component.prototype.ngOnInit = function () {
    };
    Dashboard1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard1',
            template: __webpack_require__(/*! raw-loader!./dashboard1.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/views/dashboards/dashboard1/dashboard1.component.html"),
            styles: [__webpack_require__(/*! ./dashboard1.component.scss */ "./src/app/admin/views/dashboards/dashboard1/dashboard1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Dashboard1Component);
    return Dashboard1Component;
}());



/***/ }),

/***/ "./src/app/admin/views/help/help.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/views/help/help.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXdzL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/views/help/help.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/views/help/help.component.ts ***!
  \****************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/views/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/admin/views/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/profile/profile1/profile1.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/views/profile/profile1/profile1.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card.card-cascade .view.gradient-card-header {\n  padding: 1rem 1rem;\n  text-align: center;\n}\n\n.card.card-cascade h3,\n.card.card-cascade h4 {\n  margin-bottom: 0px;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n\n.font-bold {\n  font-weight: 600;\n}\n\n.card.card-cascade .view {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2FkbWluL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZTEvcHJvZmlsZTEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZTEvcHJvZmlsZTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7O0VBR0ksa0JBQUE7QUNBSjs7QURHQTtFQUVJLG9EQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBRElJO0VBQ0ksOEVBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZTEvcHJvZmlsZTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC5jYXJkLWNhc2NhZGUgLnZpZXcuZ3JhZGllbnQtY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLmNhcmQtY2FzY2FkZSBoMyxcbi5jYXJkLmNhcmQtY2FzY2FkZSBoNCxcbntcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5ibHVlLWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgIzQ1Y2FmYywgIzMwM2Y5Zik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjNDI4NWY0KTtcbn1cblxuLmZvbnQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQuY2FyZC1jYXNjYWRlIHtcbiAgICAudmlldyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDNweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB9XG59IiwiLmNhcmQuY2FyZC1jYXNjYWRlIC52aWV3LmdyYWRpZW50LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLmNhcmQtY2FzY2FkZSBoMyxcbi5jYXJkLmNhcmQtY2FzY2FkZSBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJsdWUtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgIzQ1Y2FmYywgIzMwM2Y5Zik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzQyODVmNCk7XG59XG5cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2FyZC5jYXJkLWNhc2NhZGUgLnZpZXcge1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAzcHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/views/profile/profile1/profile1.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/views/profile/profile1/profile1.component.ts ***!
  \********************************************************************/
/*! exports provided: Profile1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile1Component", function() { return Profile1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Profile1Component = /** @class */ (function () {
    function Profile1Component() {
        this.imagesBasic = [
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
                description: 'Image 1'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
                description: 'Image 2'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
                description: 'Image 3'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
                description: 'Image 4'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
                description: 'Image 5'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
                description: 'Image 6'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
                description: 'Image 7'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
                description: 'Image 8'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
                description: 'Image 9'
            }
        ];
    }
    Profile1Component.prototype.ngOnInit = function () {
    };
    Profile1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile1',
            template: __webpack_require__(/*! raw-loader!./profile1.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/views/profile/profile1/profile1.component.html"),
            styles: [__webpack_require__(/*! ./profile1.component.scss */ "./src/app/admin/views/profile/profile1/profile1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Profile1Component);
    return Profile1Component;
}());



/***/ }),

/***/ "./src/app/admin/views/tables/basic-table/basic-table.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/views/tables/basic-table/basic-table.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2FkbWluL3ZpZXdzL3RhYmxlcy9iYXNpYy10YWJsZS9iYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vdmlld3MvdGFibGVzL2Jhc2ljLXRhYmxlL2Jhc2ljLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0RBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXdzL3RhYmxlcy9iYXNpYy10YWJsZS9iYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgIzQ1Y2FmYywgIzMwM2Y5Zik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjNDI4NWY0KTtcbiAgfSIsIi5ibHVlLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsICM0NWNhZmMsICMzMDNmOWYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICM0Mjg1ZjQpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/views/tables/basic-table/basic-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/views/tables/basic-table/basic-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTableComponent", function() { return BasicTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicTableComponent = /** @class */ (function () {
    function BasicTableComponent() {
    }
    BasicTableComponent.prototype.ngOnInit = function () {
    };
    BasicTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-table',
            template: __webpack_require__(/*! raw-loader!./basic-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/views/tables/basic-table/basic-table.component.html"),
            styles: [__webpack_require__(/*! ./basic-table.component.scss */ "./src/app/admin/views/tables/basic-table/basic-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicTableComponent);
    return BasicTableComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/layout/layout.component */ "./src/app/components/home/layout/layout.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/components/product-details/product-details.component.ts");
/* harmony import */ var _components_home_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/shopping-cart/shopping-cart.component */ "./src/app/components/home/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/order-confirmation/order-confirmation.component */ "./src/app/components/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_checkout_review_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/checkout/review/review.component */ "./src/app/components/checkout/review/review.component.ts");
/* harmony import */ var _components_checkout_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/checkout/customer-info/customer-info.component */ "./src/app/components/checkout/customer-info/customer-info.component.ts");
/* harmony import */ var _components_checkout_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/checkout/payment-info/payment-info.component */ "./src/app/components/checkout/payment-info/payment-info.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_main_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/main-layout/navigation/navigation.component */ "./src/app/admin/main-layout/navigation/navigation.component.ts");
/* harmony import */ var _admin_views_dashboards_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/views/dashboards/dashboard1/dashboard1.component */ "./src/app/admin/views/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _admin_views_profile_profile1_profile1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/views/profile/profile1/profile1.component */ "./src/app/admin/views/profile/profile1/profile1.component.ts");
/* harmony import */ var _admin_main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/main-layout/footer/footer.component */ "./src/app/admin/main-layout/footer/footer.component.ts");
/* harmony import */ var _admin_views_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/views/tables/basic-table/basic-table.component */ "./src/app/admin/views/tables/basic-table/basic-table.component.ts");





















var routes = [
    // App Routes goes here
    {
        path: 'products',
        component: _components_home_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'product-details/:id', component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"] },
        ]
    },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"] },
    { path: 'admin/navigative', component: _admin_main_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__["NavigationComponent"] },
    { path: 'admin/dashboard1', component: _admin_views_dashboards_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_17__["Dashboard1Component"] },
    { path: 'admin/profile1', component: _admin_views_profile_profile1_profile1_component__WEBPACK_IMPORTED_MODULE_18__["Profile1Component"] },
    { path: 'admin/footer', component: _admin_main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"] },
    { path: 'cart/shopping-cart', component: _components_home_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"] },
    { path: 'order/order-confirmation', component: _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["OrderConfirmationComponent"] },
    { path: 'customer/my-account', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"] },
    { path: 'customer/login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'customer/register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'checkout', component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutComponent"], data: { title: 'Check out' },
        children: [
            { path: 'review', component: _components_checkout_review_review_component__WEBPACK_IMPORTED_MODULE_12__["ReviewComponent"], data: { title: 'Order Review' } },
            { path: 'customer-information', component: _components_checkout_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_13__["CustomerInfoComponent"], data: { title: 'Customer Information' } },
            { path: 'payment-information', component: _components_checkout_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_14__["PaymentInfoComponent"], data: { title: 'Payment Information' } },
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
    { path: 'dashboards', children: [
            { path: 'v1', component: _admin_views_dashboards_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_17__["Dashboard1Component"] },
        ]
    },
    { path: 'profiles', children: [
            { path: 'profile1', component: _admin_views_profile_profile1_profile1_component__WEBPACK_IMPORTED_MODULE_18__["Profile1Component"] },
        ]
    },
    { path: 'tables', children: [
            { path: 'table1', component: _admin_views_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_20__["BasicTableComponent"] },
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'products' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, location) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.title = 'frontend';
        //admin
        this.values = ['Tag 1', 'Tag 2', 'Tag 4'];
        this.specialPages = [
            '/pages/login',
            '/pages/register',
            '/pages/lock',
            '/pages/pricing',
            '/pages/single-post',
            '/pages/post-listing'
        ];
        this.currentUrl = '';
        //This is from backend local because of port(8080)
        var serverURL = 'http://localhost:8080/api/';
        localStorage.setItem('ServerUrl', serverURL);
        this.router.events.subscribe(function (route) {
            _this.currentUrl = route.url;
            _this.specialPage = _this.specialPages.indexOf(_this.currentUrl) !== -1;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/layout/layout.component */ "./src/app/components/home/layout/layout.component.ts");
/* harmony import */ var _components_home_layout_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/layout/app-header/app-header.component */ "./src/app/components/home/layout/app-header/app-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/components/product-details/product-details.component.ts");
/* harmony import */ var _components_home_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/filters/filters.component */ "./src/app/components/home/filters/filters.component.ts");
/* harmony import */ var _components_home_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/product-list/product-list.component */ "./src/app/components/home/product-list/product-list.component.ts");
/* harmony import */ var _components_home_product_list_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/product-list/product-card/product-card.component */ "./src/app/components/home/product-list/product-card/product-card.component.ts");
/* harmony import */ var _components_home_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/shared/pagination/pagination.component */ "./src/app/components/home/shared/pagination/pagination.component.ts");
/* harmony import */ var _components_home_shared_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/shared/add-to-cart/add-to-cart.component */ "./src/app/components/home/shared/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var _components_home_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/shopping-cart/shopping-cart.component */ "./src/app/components/home/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_home_layout_app_header_small_cart_small_cart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/layout/app-header/small-cart/small-cart.component */ "./src/app/components/home/layout/app-header/small-cart/small-cart.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_checkout_checkout_navbar_checkout_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/checkout/checkout-navbar/checkout-navbar.component */ "./src/app/components/checkout/checkout-navbar/checkout-navbar.component.ts");
/* harmony import */ var _components_checkout_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/checkout/customer-info/customer-info.component */ "./src/app/components/checkout/customer-info/customer-info.component.ts");
/* harmony import */ var _components_checkout_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/checkout/payment-info/payment-info.component */ "./src/app/components/checkout/payment-info/payment-info.component.ts");
/* harmony import */ var _components_checkout_review_review_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/checkout/review/review.component */ "./src/app/components/checkout/review/review.component.ts");
/* harmony import */ var _components_checkout_payment_info_paypal_checkout_paypal_checkout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/checkout/payment-info/paypal-checkout/paypal-checkout.component */ "./src/app/components/checkout/payment-info/paypal-checkout/paypal-checkout.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/order-confirmation/order-confirmation.component */ "./src/app/components/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_main_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/main-layout/navigation/navigation.component */ "./src/app/admin/main-layout/navigation/navigation.component.ts");
/* harmony import */ var _admin_views_dashboards_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/views/dashboards/dashboard1/dashboard1.component */ "./src/app/admin/views/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _admin_views_profile_profile1_profile1_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/views/profile/profile1/profile1.component */ "./src/app/admin/views/profile/profile1/profile1.component.ts");
/* harmony import */ var _admin_main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/main-layout/footer/footer.component */ "./src/app/admin/main-layout/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_shared_shared_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _admin_views_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/views/tables/basic-table/basic-table.component */ "./src/app/admin/views/tables/basic-table/basic-table.component.ts");
/* harmony import */ var _admin_views_dashboards_common_stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/views/dashboards/common/stats-card/stats-card.component */ "./src/app/admin/views/dashboards/common/stats-card/stats-card.component.ts");
/* harmony import */ var _admin_views_dashboards_common_stats_card2_stats_card2_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/views/dashboards/common/stats-card2/stats-card2.component */ "./src/app/admin/views/dashboards/common/stats-card2/stats-card2.component.ts");
/* harmony import */ var _admin_views_help_help_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/views/help/help.component */ "./src/app/admin/views/help/help.component.ts");













































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
                _components_home_layout_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_8__["AppHeaderComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_home_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__["FiltersComponent"],
                _components_home_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"],
                _components_home_product_list_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_14__["ProductCardComponent"],
                _components_home_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"],
                _components_home_shared_add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_16__["AddToCartComponent"],
                _components_home_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_21__["ShoppingCartComponent"],
                _components_home_layout_app_header_small_cart_small_cart_component__WEBPACK_IMPORTED_MODULE_22__["SmallCartComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailsComponent"],
                _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__["CheckoutComponent"],
                _components_checkout_checkout_navbar_checkout_navbar_component__WEBPACK_IMPORTED_MODULE_26__["CheckoutNavbarComponent"],
                _components_checkout_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_27__["CustomerInfoComponent"],
                _components_checkout_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_28__["PaymentInfoComponent"],
                _components_checkout_review_review_component__WEBPACK_IMPORTED_MODULE_29__["ReviewComponent"],
                _components_checkout_payment_info_paypal_checkout_paypal_checkout_component__WEBPACK_IMPORTED_MODULE_30__["PaypalCheckoutComponent"],
                _components_account_account_component__WEBPACK_IMPORTED_MODULE_31__["AccountComponent"],
                _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_32__["OrderConfirmationComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"],
                _admin_main_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_34__["NavigationComponent"],
                _admin_views_dashboards_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_35__["Dashboard1Component"],
                _admin_views_profile_profile1_profile1_component__WEBPACK_IMPORTED_MODULE_36__["Profile1Component"],
                _admin_main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_37__["FooterComponent"],
                _admin_views_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_41__["BasicTableComponent"],
                _admin_views_dashboards_common_stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_42__["StatsCardComponent"],
                _admin_views_dashboards_common_stats_card2_stats_card2_component__WEBPACK_IMPORTED_MODULE_43__["StatsCard2Component"],
                _admin_views_help_help_component__WEBPACK_IMPORTED_MODULE_44__["HelpComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbToastModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot(),
                ngx_paypal__WEBPACK_IMPORTED_MODULE_20__["NgxPayPalModule"],
                //admin
                _angular_common__WEBPACK_IMPORTED_MODULE_38__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _admin_shared_shared_module__WEBPACK_IMPORTED_MODULE_40__["SharedModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/account/account.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/account/account.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.loggedUser = JSON.parse(localStorage.getItem('user'));
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/components/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout-navbar/checkout-navbar.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/checkout/checkout-navbar/checkout-navbar.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board .nav-tabs {\n  position: relative;\n  margin: 40px auto;\n  margin-bottom: 0;\n  box-sizing: border-box;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.liner {\n  height: 2px;\n  background: #ddd;\n  position: absolute;\n  width: 78%;\n  margin: 63px auto;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n\n.nav-tabs > li {\n  width: 25%;\n}\n\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav > li {\n  position: relative;\n  display: block;\n}\n\n.nav-tabs > li a {\n  width: 70px;\n  height: 70px;\n  margin: 20px auto;\n  border-radius: 100%;\n  padding: 0;\n}\n\n.nav-tabs > li > a {\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n\na {\n  color: #337ab7;\n  text-decoration: none;\n}\n\na {\n  background-color: transparent;\n}\n\n#status-buttons a.active span.round-tabs.one {\n  background: #22c222;\n  color: #fff;\n}\n\nspan.round-tabs.one {\n  color: #22c222;\n  border: 2px solid #22c222;\n}\n\nspan.round-tabs.two {\n  color: #febe29;\n  border: 2px solid #febe29;\n}\n\nspan.round-tabs.three {\n  color: #3e5e9a;\n  border: 2px solid #3e5e9a;\n}\n\nspan.round-tabs.four {\n  color: #f1685e;\n  border: 2px solid #f1685e;\n}\n\nspan.round-tabs {\n  width: 70px;\n  height: 70px;\n  line-height: 70px;\n  display: inline-block;\n  border-radius: 100px;\n  background: #fff;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  text-align: center;\n  font-size: 25px;\n}\n\n.nav-tabs {\n  border: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQtbmF2YmFyL2NoZWNrb3V0LW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9jaGVja291dC1uYXZiYXIvY2hlY2tvdXQtbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDRTtFQUNFLDZCQUFBO0FDRUo7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNHSjs7QURERTtFQUNFLFVBQUE7QUNJSjs7QURGRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0tKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDS0o7O0FESEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDTUo7O0FESkU7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNPSjs7QURKRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNRSjs7QURORTtFQUNFLDZCQUFBO0FDU0o7O0FEUEU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNVSjs7QURQRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ1VKOztBRFJFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDV0o7O0FEVEU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNZSjs7QURWRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ2FKOztBRFhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNjSjs7QURaRTtFQUNFLHNCQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrb3V0L2NoZWNrb3V0LW5hdmJhci9jaGVja291dC1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmQgLm5hdi10YWJzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC5uYXYtdGFicyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgXG4gIC5uYXYge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgLmxpbmVyIHtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzglO1xuICAgIG1hcmdpbjogNjNweCBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAubmF2LXRhYnMgPiBsaSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAubmF2LXRhYnMgPiBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgfVxuICBcbiAgLm5hdiA+IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm5hdi10YWJzID4gbGkgYSB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAubmF2LXRhYnMgPiBsaSA+IGEge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICB9XG4gIFxuICAubmF2ID4gbGkgPiBhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiAjMzM3YWI3O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAjc3RhdHVzLWJ1dHRvbnMgYS5hY3RpdmUgc3Bhbi5yb3VuZC10YWJzLm9uZSB7XG4gICAgYmFja2dyb3VuZDogIzIyYzIyMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgc3Bhbi5yb3VuZC10YWJzLm9uZSB7XG4gICAgY29sb3I6ICMyMmMyMjI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyYzIyMjtcbiAgfVxuICBzcGFuLnJvdW5kLXRhYnMudHdvIHtcbiAgICBjb2xvcjogI2ZlYmUyOTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmViZTI5O1xuICB9XG4gIHNwYW4ucm91bmQtdGFicy50aHJlZSB7XG4gICAgY29sb3I6ICMzZTVlOWE7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNlNWU5YTtcbiAgfVxuICBzcGFuLnJvdW5kLXRhYnMuZm91ciB7XG4gICAgY29sb3I6ICNmMTY4NWU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2YxNjg1ZTtcbiAgfVxuICBzcGFuLnJvdW5kLXRhYnMge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgLm5hdi10YWJze1xuICAgIGJvcmRlcjowcHggIWltcG9ydGFudDtcbn0iLCIuYm9hcmQgLm5hdi10YWJzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5uYXYge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saW5lciB7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3OCU7XG4gIG1hcmdpbjogNjNweCBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLm5hdi10YWJzID4gbGkge1xuICB3aWR0aDogMjUlO1xufVxuXG4ubmF2LXRhYnMgPiBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4ubmF2ID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2LXRhYnMgPiBsaSBhIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYXYtdGFicyA+IGxpID4gYSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59XG5cbi5uYXYgPiBsaSA+IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbmEge1xuICBjb2xvcjogIzMzN2FiNztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNzdGF0dXMtYnV0dG9ucyBhLmFjdGl2ZSBzcGFuLnJvdW5kLXRhYnMub25lIHtcbiAgYmFja2dyb3VuZDogIzIyYzIyMjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnNwYW4ucm91bmQtdGFicy5vbmUge1xuICBjb2xvcjogIzIyYzIyMjtcbiAgYm9yZGVyOiAycHggc29saWQgIzIyYzIyMjtcbn1cblxuc3Bhbi5yb3VuZC10YWJzLnR3byB7XG4gIGNvbG9yOiAjZmViZTI5O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmViZTI5O1xufVxuXG5zcGFuLnJvdW5kLXRhYnMudGhyZWUge1xuICBjb2xvcjogIzNlNWU5YTtcbiAgYm9yZGVyOiAycHggc29saWQgIzNlNWU5YTtcbn1cblxuc3Bhbi5yb3VuZC10YWJzLmZvdXIge1xuICBjb2xvcjogI2YxNjg1ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2YxNjg1ZTtcbn1cblxuc3Bhbi5yb3VuZC10YWJzIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5uYXYtdGFicyB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/checkout/checkout-navbar/checkout-navbar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/checkout/checkout-navbar/checkout-navbar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CheckoutNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutNavbarComponent", function() { return CheckoutNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CheckoutNavbarComponent = /** @class */ (function () {
    function CheckoutNavbarComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.title = '';
    }
    CheckoutNavbarComponent.prototype.ngOnInit = function () {
        this.title = this.activatedRoute.snapshot.url[0].path;
    };
    CheckoutNavbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CheckoutNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout-navbar',
            template: __webpack_require__(/*! raw-loader!./checkout-navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/checkout/checkout-navbar/checkout-navbar.component.html"),
            styles: [__webpack_require__(/*! ./checkout-navbar.component.scss */ "./src/app/components/checkout/checkout-navbar/checkout-navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CheckoutNavbarComponent);
    return CheckoutNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/components/checkout/checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/customer-info/customer-info.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/checkout/customer-info/customer-info.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-sec h2 {\n  margin-bottom: 30px;\n  font-weight: 800;\n  font-size: 30px;\n  color: white;\n}\n\n.register-sec h2:after {\n  content: \" \";\n  width: 100px;\n  height: 5px;\n  background: white;\n  display: block;\n  margin-top: 20px;\n  border-radius: 3px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.banner-text h2 {\n  color: #fff;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY3VzdG9tZXItaW5mby9jdXN0b21lci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrb3V0L2N1c3RvbWVyLWluZm8vY3VzdG9tZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9jdXN0b21lci1pbmZvL2N1c3RvbWVyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnJlZ2lzdGVyLXNlYyBoMntcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7IFxuICAgIGZvbnQtd2VpZ2h0OjgwMDsgXG4gICAgZm9udC1zaXplOjMwcHg7IFxuICAgIGNvbG9yOndoaXRlO1xufVxuLnJlZ2lzdGVyLXNlYyBoMjphZnRlcntcbiAgICBjb250ZW50OlwiIFwiOyBcbiAgICB3aWR0aDoxMDBweDsgXG4gICAgaGVpZ2h0OjVweDsgXG4gICAgYmFja2dyb3VuZDp3aGl0ZTsgXG4gICAgZGlzcGxheTpibG9jazsgXG4gICAgbWFyZ2luLXRvcDoyMHB4OyBcbiAgICBib3JkZXItcmFkaXVzOjNweDsgXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6YXV0b1xufVxuXG4uYmFubmVyLXRleHQgaDJ7XG4gICAgY29sb3I6I2ZmZjsgXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xufVxuIiwiLnJlZ2lzdGVyLXNlYyBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVnaXN0ZXItc2VjIGgyOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYmFubmVyLXRleHQgaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/checkout/customer-info/customer-info.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/checkout/customer-info/customer-info.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInfoComponent", function() { return CustomerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");



var CustomerInfoComponent = /** @class */ (function () {
    function CustomerInfoComponent() {
        this.customerInfor = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    CustomerInfoComponent.prototype.ngOnInit = function () {
        this.customerInfor = JSON.parse(localStorage.getItem('user'));
    };
    CustomerInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-info',
            template: __webpack_require__(/*! raw-loader!./customer-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/checkout/customer-info/customer-info.component.html"),
            styles: [__webpack_require__(/*! ./customer-info.component.scss */ "./src/app/components/checkout/customer-info/customer-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerInfoComponent);
    return CustomerInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/payment-info/payment-info.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/checkout/payment-info/payment-info.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height {\n  min-height: 200px;\n}\n\n.icon {\n  font-size: 47px;\n  color: #5CB85C;\n}\n\n.iconbig {\n  font-size: 77px;\n  color: #5CB85C;\n}\n\n.table > tbody > tr > .emptyrow {\n  border-top: none;\n}\n\n.table > thead > tr > .emptyrow {\n  border-bottom: none;\n}\n\n.table > tbody > tr > .highrow {\n  border-top: 3px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlaWdodCB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IDQ3cHg7XG4gICAgY29sb3I6ICM1Q0I4NUM7XG59XG5cbi5pY29uYmlnIHtcbiAgICBmb250LXNpemU6IDc3cHg7XG4gICAgY29sb3I6ICM1Q0I4NUM7XG59XG5cbi50YWJsZSA+IHRib2R5ID4gdHIgPiAuZW1wdHlyb3cge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi50YWJsZSA+IHRoZWFkID4gdHIgPiAuZW1wdHlyb3cge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50YWJsZSA+IHRib2R5ID4gdHIgPiAuaGlnaHJvdyB7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xufVxuIiwiLmhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDdweDtcbiAgY29sb3I6ICM1Q0I4NUM7XG59XG5cbi5pY29uYmlnIHtcbiAgZm9udC1zaXplOiA3N3B4O1xuICBjb2xvcjogIzVDQjg1Qztcbn1cblxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IC5lbXB0eXJvdyB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi50YWJsZSA+IHRoZWFkID4gdHIgPiAuZW1wdHlyb3cge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udGFibGUgPiB0Ym9keSA+IHRyID4gLmhpZ2hyb3cge1xuICBib3JkZXItdG9wOiAzcHggc29saWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/checkout/payment-info/payment-info.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/checkout/payment-info/payment-info.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoComponent", function() { return PaymentInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentInfoComponent = /** @class */ (function () {
    function PaymentInfoComponent() {
        var _this = this;
        this.totalPrice = 0;
        this.tax = 6.4;
        this.remark = '';
        var products = JSON.parse(localStorage.getItem('Cart'));
        this.checkoutProducts = products;
        products.forEach(function (product) {
            _this.totalPrice += product.Price;
        });
    }
    PaymentInfoComponent.prototype.ngOnInit = function () {
    };
    PaymentInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-info',
            template: __webpack_require__(/*! raw-loader!./payment-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/checkout/payment-info/payment-info.component.html"),
            styles: [__webpack_require__(/*! ./payment-info.component.scss */ "./src/app/components/checkout/payment-info/payment-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentInfoComponent);
    return PaymentInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/payment-info/paypal-checkout/paypal-checkout.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/checkout/payment-info/paypal-checkout/paypal-checkout.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvcGF5bWVudC1pbmZvL3BheXBhbC1jaGVja291dC9wYXlwYWwtY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/checkout/payment-info/paypal-checkout/paypal-checkout.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/checkout/payment-info/paypal-checkout/paypal-checkout.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PaypalCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalCheckoutComponent", function() { return PaypalCheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Checkout_checkout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Checkout/checkout.service */ "./src/app/services/Checkout/checkout.service.ts");




var PaypalCheckoutComponent = /** @class */ (function () {
    function PaypalCheckoutComponent(router, checkoutService) {
        this.router = router;
        this.checkoutService = checkoutService;
        this.showSuccess = false;
        this.showCancel = false;
        this.showError = false;
        this.totalAmount = 0;
        this.currency = 'USD';
        this.cart = [];
        this.productList = [];
    }
    PaypalCheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart = JSON.parse(localStorage.getItem('Cart'));
        this.user = JSON.parse(localStorage.getItem('user'));
        this.cart.forEach(function (element) {
            _this.productList.push({
                name: element.Name,
                quantity: element.Quantity,
                category: element.DepartmentName + " - " + element.CategoryName,
                unit_amount: {
                    currency_code: "" + _this.currency,
                    value: "" + element.Price,
                },
            });
        });
        this.initConfig();
    };
    PaypalCheckoutComponent.prototype.initConfig = function () {
        var _this = this;
        var self = this;
        var orderData = {
            Cart: this.cart,
            User: this.user,
            Remarks: this.comments,
            TotalAmount: 0
        };
        self.payPalConfig = {
            currency: "" + self.currency,
            clientId: 'Ab3l0gB8QNw6-EyPVS4VOVCAVEUqPdH4nu_80JvhTfQDes13ZaCs0l7tvXXgLOFWzt6mzLNELA2ywvXH',
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [{
                        amount: {
                            currency_code: "" + self.currency,
                            value: "" + self.totalAmount,
                            breakdown: {
                                item_total: {
                                    currency_code: "" + self.currency,
                                    value: "" + self.totalAmount
                                }
                            }
                        },
                        items: [{
                                name: 'Enterprise Subscription',
                                quantity: '1',
                                category: 'DIGITAL_GOODS',
                                unit_amount: {
                                    currency_code: "" + self.currency,
                                    value: "" + self.totalAmount,
                                },
                            }]
                    }]
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'checkout',
                layout: 'vertical',
                shape: 'rect',
                color: 'blue',
                size: 'large'
            },
            onApprove: function (data, actions) {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(function (details) {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: function (data) {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                _this.showSuccess = true;
                self.checkoutService.CreatePaypalTransacton(orderData)
                    .subscribe(function (data) {
                    localStorage.removeItem('Cart');
                    self.router.navigate(['/order/order-confirmation']);
                });
            },
            onCancel: function (data, actions) {
                console.log('OnCancel', data, actions);
                _this.showCancel = true;
            },
            onError: function (err) {
                console.log('OnError', err);
                _this.showError = true;
            },
            onClick: function (data, actions) {
                console.log('onClick', orderData, actions);
                orderData.Remarks = self.comments;
                orderData.TotalAmount = self.totalAmount;
                self.checkoutService.CreatePaypalTransacton(orderData)
                    .subscribe(function (data) {
                    // localStorage.removeItem('Cart');
                    // self.router.navigate(['/order/order-confirmation']);
                    console.log(data);
                });
                _this.resetStatus();
            },
        };
    };
    PaypalCheckoutComponent.prototype.resetStatus = function () {
        console.log("Method not implemented.");
    };
    PaypalCheckoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_Checkout_checkout_service__WEBPACK_IMPORTED_MODULE_3__["CheckoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaypalCheckoutComponent.prototype, "totalAmount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PaypalCheckoutComponent.prototype, "comments", void 0);
    PaypalCheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paypal-checkout',
            template: __webpack_require__(/*! raw-loader!./paypal-checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/checkout/payment-info/paypal-checkout/paypal-checkout.component.html"),
            styles: [__webpack_require__(/*! ./paypal-checkout.component.scss */ "./src/app/components/checkout/payment-info/paypal-checkout/paypal-checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_Checkout_checkout_service__WEBPACK_IMPORTED_MODULE_3__["CheckoutService"]])
    ], PaypalCheckoutComponent);
    return PaypalCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/review/review.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/checkout/review/review.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".price {\n  color: #16a085;\n  font-size: 17px;\n  font-weight: 700;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljZSB7XG4gICAgY29sb3I6ICMxNmEwODU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG59IiwiLnByaWNlIHtcbiAgY29sb3I6ICMxNmEwODU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/checkout/review/review.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/checkout/review/review.component.ts ***!
  \****************************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
        var _this = this;
        this.totalPrice = 0;
        var products = JSON.parse(localStorage.getItem('Cart'));
        this.checkoutProducts = products;
        products.forEach(function (product) {
            _this.totalPrice += product.Price;
        });
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/checkout/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/components/checkout/review/review.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/home/filters/filters.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/home/filters/filters.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item.active {\n  background: #255b74;\n  border: 0px;\n}\n.list-group-item.active h6 {\n  color: #fff;\n}\n.btn-primary {\n  background-color: #255b74 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FEQ0E7RUFDSSxvQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjU1Yjc0O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGg2IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxufVxuLmJ0bi1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTViNzQgIWltcG9ydGFudDtcbn0iLCIubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyNTViNzQ7XG4gIGJvcmRlcjogMHB4O1xufVxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgaDYge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NWI3NCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/filters/filters.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/filters/filters.component.ts ***!
  \**************************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_paging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/paging */ "./src/app/models/paging.ts");
/* harmony import */ var src_app_models_department__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/department */ "./src/app/models/department.ts");
/* harmony import */ var src_app_services_Category_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Category/category.service */ "./src/app/services/Category/category.service.ts");
/* harmony import */ var src_app_services_Department_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Department/department.service */ "./src/app/services/Department/department.service.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-list/product-list.component */ "./src/app/components/home/product-list/product-list.component.ts");







var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(departmentService, categoryService) {
        this.departmentService = departmentService;
        this.categoryService = categoryService;
    }
    FiltersComponent.prototype.ngOnInit = function () {
        this.getCategoryList();
        this.getDepartmenstList();
        this.selectedDepartment = 0;
        this.selectedCategory = 0;
        this.searchForAllWords = false;
    };
    FiltersComponent.prototype.getDepartmenstList = function () {
        var _this = this;
        this.departmentService.getDepartments().subscribe(function (a) {
            _this.departmentList = a;
            var allDep = new src_app_models_department__WEBPACK_IMPORTED_MODULE_3__["Department"]();
            allDep.DepartmentId = 0;
            allDep.Name = 'All Departments';
            _this.departmentList.push(allDep);
            _this.getCategoriesByDepartmentId();
        });
    };
    FiltersComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (a) {
            _this.categoryList = a;
        });
    };
    FiltersComponent.prototype.getCategoriesByDepartmentId = function () {
        var _this = this;
        this.filteredCategoryList = this.categoryList.filter(function (a) { return a.DepartmentId == _this.selectedDepartment; });
        if (this.selectedDepartment == 0) {
            this.filteredCategoryList = this.categoryList;
        }
    };
    FiltersComponent.prototype.onSelectDepartment = function (department) {
        var _this = this;
        this.selectedDepartment = department.DepartmentId;
        this.selectedCategory = 0;
        this.getCategoriesByDepartmentId();
        var filter = new src_app_models_paging__WEBPACK_IMPORTED_MODULE_2__["Paging"]();
        filter.DepartmentId = this.selectedDepartment;
        filter.DepartmentName = this.departmentList.filter(function (a) { return a.DepartmentId == _this.selectedDepartment; })[0].Name;
        filter.CategoryId = this.selectedCategory;
        filter.CategoryName = (this.selectedCategory == 0) ? '' : this.categoryList.filter(function (a) { return a.DepartmentId == _this.selectedCategory; })[0].Name;
        filter.SearchString = this.searchString;
        filter.IsAllWords = this.searchForAllWords;
        this.productList.setFilters(filter);
    };
    FiltersComponent.prototype.onSelectCategory = function (category) {
        var _this = this;
        this.selectedCategory = category.CategoryId;
        var filter = new src_app_models_paging__WEBPACK_IMPORTED_MODULE_2__["Paging"]();
        filter.DepartmentId = this.selectedDepartment;
        filter.DepartmentName = this.departmentList.filter(function (a) { return a.DepartmentId == _this.selectedDepartment; })[0].Name;
        filter.CategoryId = this.selectedCategory;
        filter.CategoryName = (this.selectedCategory == 0) ? '' : this.categoryList.filter(function (a) { return a.DepartmentId == _this.selectedCategory; })[0].Name;
        filter.SearchString = this.searchString;
        filter.IsAllWords = this.searchForAllWords;
        this.productList.setFilters(filter);
    };
    FiltersComponent.prototype.onClickSearch = function () {
        var _this = this;
        var filter = new src_app_models_paging__WEBPACK_IMPORTED_MODULE_2__["Paging"]();
        filter.DepartmentId = this.selectedDepartment;
        filter.DepartmentName = this.departmentList.filter(function (a) { return a.DepartmentId == _this.selectedDepartment; })[0].Name;
        filter.CategoryId = this.selectedCategory;
        filter.CategoryName = (this.selectedCategory == 0) ? '' : this.categoryList.filter(function (a) { return a.DepartmentId == _this.selectedCategory; })[0].Name;
        filter.SearchString = this.searchString;
        filter.IsAllWords = this.searchForAllWords;
        this.productList.setFilters(filter);
    };
    FiltersComponent.ctorParameters = function () { return [
        { type: src_app_services_Department_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"] },
        { type: src_app_services_Category_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"])
    ], FiltersComponent.prototype, "productList", void 0);
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! raw-loader!./filters.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/components/home/filters/filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Department_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"],
            src_app_services_Category_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufSIsImZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/app-header/app-header.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home/layout/app-header/app-header.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toastr {\n  position: absolute;\n  right: 75px;\n  top: 80px;\n  button-color: #fff;\n}\n\n.dropdown-cart {\n  right: 0;\n  left: unset;\n}\n\n.dropdown-login {\n  left: unset;\n}\n\nnav {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFSSxrQkFBQTtBQ0FSOztBREdBO0VBQ0ksUUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0cntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDc1cHg7XG4gICAgdG9wOiA4MHB4O1xuICAgIGJ1dHRvbjoge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG4uZHJvcGRvd24tY2FydCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogdW5zZXQ7XG59XG4uZHJvcGRvd24tbG9naW57XG4gICAgbGVmdDogdW5zZXQ7XG59XG5cbm5hdntcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59IiwiLnRvYXN0ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDc1cHg7XG4gIHRvcDogODBweDtcbiAgYnV0dG9uLWNvbG9yOiAjZmZmO1xufVxuXG4uZHJvcGRvd24tY2FydCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiB1bnNldDtcbn1cblxuLmRyb3Bkb3duLWxvZ2luIHtcbiAgbGVmdDogdW5zZXQ7XG59XG5cbm5hdiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/layout/app-header/app-header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/layout/app-header/app-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Shared/data.service */ "./src/app/services/Shared/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Customer_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Customer/customer.service */ "./src/app/services/Customer/customer.service.ts");





var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(dataService, customerService, router) {
        this.dataService = dataService;
        this.customerService = customerService;
        this.router = router;
        this.itemCount = 0;
        this.isLogged = false;
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.count.subscribe(function (count) { return _this.itemCount = count; });
        if (localStorage.getItem('user') == 'undefined') {
            this.user = null;
        }
        else {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        this.isLogged = this.user != null;
    };
    AppHeaderComponent.prototype.onLogout = function () {
        var _this = this;
        this.customerService.Logout().subscribe(function (a) {
            localStorage.removeItem('user');
            _this.user = (localStorage.getItem('user') == 'undefined') ? null : JSON.parse(localStorage.getItem('user'));
            _this.isLogged = _this.user != null;
            window.location.reload();
        });
    };
    AppHeaderComponent.ctorParameters = function () { return [
        { type: src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: src_app_services_Customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./app-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/layout/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/components/home/layout/app-header/app-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            src_app_services_Customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/app-header/small-cart/small-cart.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/home/layout/app-header/small-cart/small-cart.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive {\n  max-height: 500px;\n}\n\n.text-center.btn {\n  background: #255b74;\n  width: 100%;\n  color: #fff;\n  margin: 0;\n}\n\n.price {\n  color: #255b74;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 5px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9sYXlvdXQvYXBwLWhlYWRlci9zbWFsbC1jYXJ0L3NtYWxsLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9sYXlvdXQvYXBwLWhlYWRlci9zbWFsbC1jYXJ0L3NtYWxsLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9sYXlvdXQvYXBwLWhlYWRlci9zbWFsbC1jYXJ0L3NtYWxsLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcmVzcG9uc2l2ZXtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cbi50ZXh0LWNlbnRlci5idG57XG4gICAgYmFja2dyb3VuZDogIzI1NWI3NDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG59XG4ucHJpY2Uge1xuICAgIGNvbG9yOiAjMjU1Yjc0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iLCIudGFibGUtcmVzcG9uc2l2ZSB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4udGV4dC1jZW50ZXIuYnRuIHtcbiAgYmFja2dyb3VuZDogIzI1NWI3NDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG59XG5cbi5wcmljZSB7XG4gIGNvbG9yOiAjMjU1Yjc0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/layout/app-header/small-cart/small-cart.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/home/layout/app-header/small-cart/small-cart.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SmallCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallCartComponent", function() { return SmallCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Shared/data.service */ "./src/app/services/Shared/data.service.ts");



var SmallCartComponent = /** @class */ (function () {
    function SmallCartComponent(dataService) {
        this.dataService = dataService;
        this.cart = [];
    }
    SmallCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.cart.subscribe(function (a) { return _this.cart = a; });
    };
    SmallCartComponent.prototype.getCartProductItems = function () {
        this.cart = JSON.parse(localStorage.getItem('Cart'));
    };
    SmallCartComponent.prototype.onRemoveProductsFromCart = function (productId) {
        this.cart = this.cart.filter(function (a) { return a.ProductId != productId; });
        localStorage.setItem('Cart', JSON.stringify(this.cart));
        this.dataService.updateCartItemCount(this.cart.length);
        this.dataService.updateShoppingCart(this.cart);
    };
    SmallCartComponent.ctorParameters = function () { return [
        { type: src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    SmallCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-small-cart',
            template: __webpack_require__(/*! raw-loader!./small-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/layout/app-header/small-cart/small-cart.component.html"),
            styles: [__webpack_require__(/*! ./small-cart.component.scss */ "./src/app/components/home/layout/app-header/small-cart/small-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SmallCartComponent);
    return SmallCartComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/layout.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/home/layout/layout.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toastr {\n  position: absolute;\n  right: 75px;\n  top: 80px;\n  button-color: #fff;\n}\n\n.dropdown-cart {\n  right: 0;\n  left: unset;\n}\n\n.dropdown-login {\n  left: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFSSxrQkFBQTtBQ0FSOztBREdBO0VBQ0ksUUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0cntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDc1cHg7XG4gICAgdG9wOiA4MHB4O1xuICAgIGJ1dHRvbjoge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG4uZHJvcGRvd24tY2FydCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogdW5zZXQ7XG59XG4uZHJvcGRvd24tbG9naW57XG4gICAgbGVmdDogdW5zZXQ7XG59IiwiLnRvYXN0ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDc1cHg7XG4gIHRvcDogODBweDtcbiAgYnV0dG9uLWNvbG9yOiAjZmZmO1xufVxuXG4uZHJvcGRvd24tY2FydCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiB1bnNldDtcbn1cblxuLmRyb3Bkb3duLWxvZ2luIHtcbiAgbGVmdDogdW5zZXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/layout/layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/home/layout/layout.component.ts ***!
  \************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/home/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/product-list/product-card/product-card.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/home/product-list/product-card/product-card.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3.h3 {\n  text-align: center;\n  margin: 1em;\n  text-transform: capitalize;\n  font-size: 1.7em;\n}\n\n.product-grid {\n  position: relative;\n  font-family: Poppins, sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  overflow: hidden;\n  z-index: 1;\n  transition: all 0.3s ease 0s;\n}\n\n.product-grid .product-image {\n  position: relative;\n}\n\n.product-grid:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.product-grid .product-image a {\n  display: block;\n}\n\n.product-grid .product-image img {\n  width: 100%;\n  height: auto;\n}\n\n.product-grid .pic-1 {\n  opacity: 1;\n  transition: all 0.5s ease-out 0s;\n}\n\n.product-grid:hover .pic-1 {\n  opacity: 0;\n}\n\n.product-grid .pic-2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: all 0.5s ease-out 0s;\n}\n\n.product-grid:hover .pic-2 {\n  opacity: 1;\n}\n\n.product-grid .social {\n  width: 180px;\n  padding: 0;\n  margin: 0 auto;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  transition: all 0.3s ease 0s;\n}\n\n.product-grid .social li {\n  display: inline-block;\n  opacity: 0;\n  transition: all 0.7s;\n}\n\n.product-grid .social li:nth-child(1) {\n  transition-delay: 0.15s;\n}\n\n.product-grid .social li:nth-child(2) {\n  transition-delay: 0.3s;\n}\n\n.product-grid .social li:nth-child(3) {\n  transition-delay: 0.45s;\n}\n\n.product-grid:hover .social li {\n  opacity: 1;\n}\n\n.product-grid .social li a {\n  color: #222;\n  background: #fff;\n  font-size: 17px;\n  line-height: 36px;\n  width: 40px;\n  height: 36px;\n  border-radius: 2px;\n  margin: 0 5px;\n  display: block;\n  transition: all 0.3s ease 0s;\n}\n\n.product-grid .social li a:hover {\n  color: #fff;\n  background: #255b74;\n}\n\n.product-grid .social li a:after, .product-grid .social li a:before {\n  content: attr(data-tip);\n  color: #fff;\n  background-color: #000;\n  font-size: 12px;\n  line-height: 20px;\n  border-radius: 3px;\n  padding: 0 5px;\n  white-space: nowrap;\n  opacity: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  position: absolute;\n  left: 50%;\n  top: -30px;\n}\n\n.product-grid .social li a:after {\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  border-radius: 0;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n          transform: translateX(-50%) rotate(45deg);\n  top: -22px;\n  z-index: -1;\n}\n\n.product-grid .social li a:hover:after, .product-grid .social li a:hover:before {\n  opacity: 1;\n}\n\n.product-grid .product-discount-label, .product-grid .product-new-label {\n  color: #fff;\n  background-color: #255b74;\n  font-size: 13px;\n  font-weight: 800;\n  text-transform: uppercase;\n  line-height: 45px;\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  position: absolute;\n  left: 10px;\n  top: 15px;\n  transition: all 0.3s;\n}\n\n.product-grid .product-discount-label {\n  left: auto;\n  right: 10px;\n  background-color: #d7292a;\n}\n\n.product-grid:hover .product-new-label {\n  opacity: 0;\n}\n\n.product-grid .product-content {\n  padding: 25px;\n}\n\n.product-grid .title {\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: capitalize;\n  margin: 0 0 7px;\n  transition: all 0.3s ease 0s;\n}\n\n.product-grid .title a {\n  color: #222;\n}\n\n.product-grid .title a:hover {\n  color: #255b74;\n}\n\n.product-grid .price {\n  color: brown;\n  font-size: 17px;\n  font-weight: 700;\n  margin: 0 2px 15px 0;\n  display: block;\n}\n\n.product-grid .price span {\n  color: #909090;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-decoration: line-through;\n  text-align: left;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.product-grid .add-to-cart {\n  border: 1px solid #e5e5e5;\n  display: inline-block;\n  padding: 10px 20px;\n  color: #888;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n.product-grid:hover .add-to-cart {\n  border: 1px solid transparent;\n  background: #255b74;\n  color: #fff;\n}\n\n.product-grid .add-to-cart:hover {\n  background-color: #505050;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n\n@media only screen and (max-width: 990px) {\n  .product-grid {\n    margin-bottom: 30px;\n  }\n}\n\n.grid {\n  border: 1px solid #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFJQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQ0ZGOztBRE5FO0VBQ0Usa0JBQUE7QUNRSjs7QURBRTtFQUNFLHVDQUFBO0FDRUo7O0FEQ0k7RUFDRSxjQUFBO0FDQ047O0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NOOztBREVFO0VBQ0UsVUFBQTtFQUNBLGdDQUFBO0FDQUo7O0FERUU7RUFDRSxVQUFBO0FDQUo7O0FERUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FDQUo7O0FERUU7RUFDRSxVQUFBO0FDQUo7O0FERUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDRCQUFBO0FDQUo7O0FEQ0k7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0NOOztBREFNO0VBQ0UsdUJBQUE7QUNFUjs7QURBTTtFQUNFLHNCQUFBO0FDRVI7O0FEQU07RUFDRSx1QkFBQTtBQ0VSOztBREVFO0VBQ0UsVUFBQTtBQ0FKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURDSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0NOOztBRENJO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NOOztBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDTjs7QURFTTtFQUNFLFVBQUE7QUNBUjs7QURJRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FDRko7O0FESUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDRko7O0FESUU7RUFDRSxVQUFBO0FDRko7O0FESUU7RUFDRSxhQUFBO0FDRko7O0FESUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0ZKOztBREdJO0VBQ0UsV0FBQTtBQ0ROOztBREVNO0VBQ0UsY0FBQTtBQ0FSOztBRElFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNETjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDRko7O0FESUU7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRElFO0VBQ0UseUJBQUE7RUFDQSx1Q0FBQTtBQ0ZKOztBRE1BO0VBQ0U7SUFDRSxtQkFBQTtFQ0hGO0FBQ0Y7O0FETUE7RUFDRSx5QkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxLjdlbTtcbn1cblxuLnByb2R1Y3QtZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBmb250LWZhbWlseTogUG9wcGlucyxzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIDBzO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbiAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgIGEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbiAgLnBpYy0xIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQgMHM7XG4gIH1cbiAgJjpob3ZlciAucGljLTEge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnBpYy0yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0IDBzO1xuICB9XG4gICY6aG92ZXIgLnBpYy0yIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5zb2NpYWwge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAwcztcbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC43cztcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjE1cztcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuNDVzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmOmhvdmVyIC5zb2NpYWwgbGkge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNvY2lhbCBsaSBhIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIDBzO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjU1Yjc0O1xuICAgIH1cbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGlwKTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRvcDogLTMwcHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgIHRvcDogLTIycHg7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWRpc2NvdW50LWxhYmVsLCAucHJvZHVjdC1uZXctbGFiZWwge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTViNzQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICB9XG4gIC5wcm9kdWN0LWRpc2NvdW50LWxhYmVsIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNzI5MmE7XG4gIH1cbiAgJjpob3ZlciAucHJvZHVjdC1uZXctbGFiZWwge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnByb2R1Y3QtY29udGVudCB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbjogMCAwIDdweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgMHM7XG4gICAgYSB7XG4gICAgICBjb2xvcjogIzIyMjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzI1NWI3NDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnByaWNlIHtcbiAgICBjb2xvcjpicm93bjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgMnB4IDE1cHggMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gIH1cbiAgLmFkZC10by1jYXJ0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gIH1cbiAgJjpob3ZlciAuYWRkLXRvLWNhcnQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6ICMyNTViNzQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmFkZC10by1jYXJ0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MDUwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC5wcm9kdWN0LWdyaWQge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cblxuLmdyaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xufSIsImgzLmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG59XG5cbi5wcm9kdWN0LWdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1ncmlkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1pbWFnZSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1ncmlkIC5waWMtMSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xufVxuLnByb2R1Y3QtZ3JpZDpob3ZlciAucGljLTEge1xuICBvcGFjaXR5OiAwO1xufVxuLnByb2R1Y3QtZ3JpZCAucGljLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG59XG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5waWMtMiB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwge1xuICB3aWR0aDogMTgwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cztcbn1cbi5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbn1cbi5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaTpudGgtY2hpbGQoMikge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNDVzO1xufVxuLnByb2R1Y3QtZ3JpZDpob3ZlciAuc29jaWFsIGxpIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaSBhIHtcbiAgY29sb3I6ICMyMjI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMjU1Yjc0O1xufVxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGE6YWZ0ZXIsIC5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaSBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAtMzBweDtcbn1cbi5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaSBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIHRvcDogLTIycHg7XG4gIHotaW5kZXg6IC0xO1xufVxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGE6aG92ZXI6YWZ0ZXIsIC5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaSBhOmhvdmVyOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWRpc2NvdW50LWxhYmVsLCAucHJvZHVjdC1ncmlkIC5wcm9kdWN0LW5ldy1sYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU1Yjc0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtZGlzY291bnQtbGFiZWwge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MjkyYTtcbn1cbi5wcm9kdWN0LWdyaWQ6aG92ZXIgLnByb2R1Y3QtbmV3LWxhYmVsIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG4ucHJvZHVjdC1ncmlkIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMCAwIDdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5wcm9kdWN0LWdyaWQgLnRpdGxlIGEge1xuICBjb2xvcjogIzIyMjtcbn1cbi5wcm9kdWN0LWdyaWQgLnRpdGxlIGE6aG92ZXIge1xuICBjb2xvcjogIzI1NWI3NDtcbn1cbi5wcm9kdWN0LWdyaWQgLnByaWNlIHtcbiAgY29sb3I6IGJyb3duO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMCAycHggMTVweCAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcm9kdWN0LWdyaWQgLnByaWNlIHNwYW4ge1xuICBjb2xvcjogIzkwOTA5MDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wcm9kdWN0LWdyaWQgLmFkZC10by1jYXJ0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5hZGQtdG8tY2FydCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiAjMjU1Yjc0O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcm9kdWN0LWdyaWQgLmFkZC10by1jYXJ0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC5wcm9kdWN0LWdyaWQge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5ncmlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/product-list/product-card/product-card.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/home/product-list/product-card/product-card.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('productData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"])
    ], ProductCardComponent.prototype, "product", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/product-list/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.scss */ "./src/app/components/home/product-list/product-card/product-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/product-list/product-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/product-list/product-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb-item + .breadcrumb-item::before {\n  content: \">>\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIj4+XCI7XG59IiwiLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiPj5cIjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/product-list/product-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/product-list/product-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_product_pagin_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product-pagin-data */ "./src/app/models/product-pagin-data.ts");
/* harmony import */ var src_app_models_paging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/paging */ "./src/app/models/paging.ts");
/* harmony import */ var src_app_services_Product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Product/product.service */ "./src/app/services/Product/product.service.ts");





var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.loading = false;
        this.TOTAL = 0;
        this.CURRENT_PAGE = 1;
        this.PER_PAGE = 12;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.optionsSelect = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];
        this.getProducts();
    };
    ProductListComponent.prototype.setFilters = function (filters) {
        var _this = this;
        filters.PageSize = this.PER_PAGE;
        filters.PageNumber = (this.CURRENT_PAGE - 1) * this.PER_PAGE;
        filters.CurrentPage = this.CURRENT_PAGE;
        this.departmentName = filters.DepartmentName;
        this.categoryName = filters.CategoryName;
        this.searchString = filters.SearchString;
        this.allWords = filters.IsAllWords;
        window['NProgress'].start();
        var productPagingObj = new src_app_models_product_pagin_data__WEBPACK_IMPORTED_MODULE_2__["ProductPaginData"]();
        this.productService.getProductList(filters).subscribe(function (a) {
            productPagingObj = a;
            _this.productList = productPagingObj.Products;
            _this.PRODUCT_COUNT = productPagingObj.ProductCount[0].ProductCount;
            window['NProgress'].done();
        });
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        var filterObj = new src_app_models_paging__WEBPACK_IMPORTED_MODULE_3__["Paging"]();
        filterObj.DepartmentId = 0;
        this.departmentName = 'All Departments';
        filterObj.CategoryId = 0;
        filterObj.PageSize = this.PER_PAGE;
        filterObj.PageNumber = (this.CURRENT_PAGE - 1) * this.PER_PAGE;
        filterObj.CurrentPage = this.CURRENT_PAGE;
        filterObj.SearchString = '';
        window['NProgress'].start();
        var productPagingObj = new src_app_models_product_pagin_data__WEBPACK_IMPORTED_MODULE_2__["ProductPaginData"]();
        this.productService.getProductList(filterObj).subscribe(function (a) {
            productPagingObj = a;
            _this.productList = productPagingObj.Products;
            _this.PRODUCT_COUNT = productPagingObj.ProductCount[0].ProductCount;
            window['NProgress'].done();
        });
    };
    ProductListComponent.prototype.goToPage = function (n) {
        this.CURRENT_PAGE = n;
        this.getProducts();
    };
    ProductListComponent.prototype.onNext = function () {
        this.CURRENT_PAGE++;
        this.getProducts();
    };
    ProductListComponent.prototype.onPrev = function () {
        this.CURRENT_PAGE--;
        this.getProducts();
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: src_app_services_Product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
    ]; };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/components/home/product-list/product-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/shared/add-to-cart/add-to-cart.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home/shared/add-to-cart/add-to-cart.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: 1px solid #16a085;\n}\n\n.toast div:first-child {\n  background-color: #16a085;\n  color: #fff;\n}\n\n.add-to-cart {\n  border: 1px solid #e5e5e5;\n  display: inline-block;\n  padding: 10px 20px;\n  color: #888;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n.add-to-cart:hover {\n  border: 1px solid transparent;\n  background: #255b74;\n  color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zaGFyZWQvYWRkLXRvLWNhcnQvYWRkLXRvLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zaGFyZWQvYWRkLXRvLWNhcnQvYWRkLXRvLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNHSjs7QURERTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zaGFyZWQvYWRkLXRvLWNhcnQvYWRkLXRvLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE2YTA4NTtcbn1cbi50b2FzdCBkaXY6Zmlyc3QtY2hpbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YTA4NTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hZGQtdG8tY2FydCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICB9XG4gIC5hZGQtdG8tY2FydDpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogIzI1NWI3NDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH0iLCIudG9hc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNmEwODU7XG59XG5cbi50b2FzdCBkaXY6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhMDg1O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFkZC10by1jYXJ0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5hZGQtdG8tY2FydDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiAjMjU1Yjc0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/shared/add-to-cart/add-to-cart.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home/shared/add-to-cart/add-to-cart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddToCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartComponent", function() { return AddToCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Product/product.service */ "./src/app/services/Product/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Shared/data.service */ "./src/app/services/Shared/data.service.ts");




//import { AppHeaderComponent } from '../../layout/app-header/app-header.component';

var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(productService, toastr, dataService) {
        this.productService = productService;
        this.toastr = toastr;
        this.dataService = dataService;
    }
    AddToCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quantity = 1;
        this.dataService.currentMessage.subscribe(function (msg) { return _this.messge = msg; });
    };
    AddToCartComponent.prototype.onAddProductToCart = function () {
        var _this = this;
        var product;
        this.productService.getProductDetailsById(this.productId)
            .subscribe(function (p) {
            product = p;
            product.Quantity = _this.quantity;
            product.SizeId = _this.sizeId;
            product.ColorId = _this.colorId;
            var cart = JSON.parse(localStorage.getItem('Cart'));
            if (cart == null) {
                cart = [];
                cart.push(product);
            }
            else {
                var currentProduct = cart.filter(function (a) { return a.ProductId == product.ProductId; });
                if (currentProduct.length > 0) {
                    cart.filter(function (a) {
                        a.Quantity = a.Quantity + _this.quantity;
                    });
                }
                else {
                    cart.push(product);
                }
            }
            _this.dataService.updateCartItemCount(cart.length);
            _this.dataService.updateShoppingCart(cart);
            localStorage.setItem('Cart', JSON.stringify(cart));
            _this.toastr.success('<i class="fas fa-check ml-1 pr-2"></i><strong>Product Added to the Cart</strong>', null, {
                timeOut: 3000,
                toastClass: 'toast-header',
                progressBar: true,
                progressAnimation: 'decreasing',
                closeButton: true,
                enableHtml: true
            });
        });
    };
    AddToCartComponent.ctorParameters = function () { return [
        { type: src_app_services_Product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AddToCartComponent.prototype, "sizeId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AddToCartComponent.prototype, "colorId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AddToCartComponent.prototype, "productId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AddToCartComponent.prototype, "isHomePage", void 0);
    AddToCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-to-cart',
            template: __webpack_require__(/*! raw-loader!./add-to-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/shared/add-to-cart/add-to-cart.component.html"),
            styles: [__webpack_require__(/*! ./add-to-cart.component.scss */ "./src/app/components/home/shared/add-to-cart/add-to-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], AddToCartComponent);
    return AddToCartComponent;
}());



/***/ }),

/***/ "./src/app/components/home/shared/pagination/pagination.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home/shared/pagination/pagination.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination .active a {\n  background-color: #255b74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zaGFyZWQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9ue1xuICAgIC5hY3RpdmUgYXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NWI3NDtcbiAgICB9XG59IiwiLnBhZ2luYXRpb24gLmFjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NWI3NDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/shared/pagination/pagination.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/shared/pagination/pagination.component.ts ***!
  \***************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.goPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PaginationComponent.prototype.getMin = function () {
        return ((this.perPage * this.page) - this.perPage) + 1;
    };
    PaginationComponent.prototype.getMax = function () {
        var max = this.perPage * this.page;
        if (max > this.count) {
            max = this.count;
        }
        return max;
    };
    PaginationComponent.prototype.onPage = function (n) {
        this.goPage.emit(n);
    };
    PaginationComponent.prototype.onPrev = function () {
        this.goPrev.emit(true);
    };
    PaginationComponent.prototype.onNext = function (next) {
        this.goNext.emit(next);
    };
    PaginationComponent.prototype.totalPages = function () {
        return Math.ceil(this.count / this.perPage) || 0;
    };
    PaginationComponent.prototype.lastPage = function () {
        return this.perPage * this.page > this.count;
    };
    PaginationComponent.prototype.getPages = function () {
        var c = Math.ceil(this.count / this.perPage);
        var p = this.page || 1;
        var pagesToShow = this.pagesToShow || 9;
        var pages = [];
        pages.push(p);
        var times = pagesToShow - 1;
        for (var i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort(function (a, b) { return a - b; });
        return pages;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "perPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "pagesToShow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PaginationComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "goPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "goNext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "goPage", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/shared/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/components/home/shared/pagination/pagination.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/home/shopping-cart/shopping-cart.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/shopping-cart/shopping-cart.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-table td {\n  vertical-align: middle;\n}\n\n.quantity {\n  float: left;\n  margin-right: 15px;\n  background-color: #eee;\n  position: relative;\n  width: 80px;\n  overflow: hidden;\n  margin-top: 6px;\n}\n\n.quantity input {\n  margin: 0;\n  text-align: center;\n  width: 15px;\n  height: 15px;\n  padding: 0;\n  float: right;\n  color: #000;\n  font-size: 20px;\n  border: 0;\n  outline: 0;\n  background-color: #F6F6F6;\n}\n\n.quantity input.qty {\n  position: relative;\n  border: 0;\n  width: 100%;\n  height: 46px;\n  padding: 10px 25px 10px 10px;\n  text-align: center;\n  font-weight: 400;\n  font-size: 15px;\n  border-radius: 0;\n  background-clip: padding-box;\n}\n\n.quantity .minus, .quantity .plus {\n  line-height: 0;\n  background-clip: padding-box;\n  border-radius: 0;\n  -webkit-background-size: 6px 30px;\n  -moz-background-size: 6px 30px;\n  color: #bbb;\n  font-size: 20px;\n  position: absolute;\n  height: 50%;\n  border: 0;\n  right: 0;\n  padding: 0;\n  width: 25px;\n  z-index: 3;\n}\n\n.quantity .minus:hover, .quantity .plus:hover {\n  background-color: #dad8da;\n}\n\n.quantity .minus {\n  bottom: 0;\n}\n\n.shopping-cart {\n  margin-top: 20px;\n}\n\n.param {\n  margin-bottom: 7px;\n  line-height: 1.4;\n}\n\n.param-inline dt {\n  display: inline-block;\n}\n\n.param dt {\n  margin: 0;\n  margin-right: 7px;\n  font-weight: 600;\n}\n\n.param-inline dd {\n  vertical-align: baseline;\n  display: inline-block;\n}\n\n.param dd {\n  margin: 0;\n  vertical-align: baseline;\n}\n\n.price {\n  color: #16a085;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 5px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtFQUdBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxTQUFBO0FDQUo7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0kscUJBQUE7QUNHSjs7QUREQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FDS0o7O0FERkE7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC10YWJsZSB0ZCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuXG4ucXVhbnRpdHkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnF1YW50aXR5IGlucHV0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNlxufVxuXG4ucXVhbnRpdHkgaW5wdXQucXR5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3hcbn1cblxuLnF1YW50aXR5IC5taW51cywgLnF1YW50aXR5IC5wbHVzIHtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogNnB4IDMwcHg7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDZweCAzMHB4O1xuICAgIGNvbG9yOiAjYmJiO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgei1pbmRleDogM1xufVxuXG4ucXVhbnRpdHkgLm1pbnVzOmhvdmVyLCAucXVhbnRpdHkgLnBsdXM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWQ4ZGFcbn1cblxuLnF1YW50aXR5IC5taW51cyB7XG4gICAgYm90dG9tOiAwXG59XG4uc2hvcHBpbmctY2FydCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wYXJhbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4ucGFyYW0taW5saW5lIGR0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucGFyYW0gZHQge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnBhcmFtLWlubGluZSBkZCB7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBhcmFtIGRkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufSBcblxuLnByaWNlIHtcbiAgICBjb2xvcjogIzE2YTA4NTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59IiwiLnByb2R1Y3QtdGFibGUgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucXVhbnRpdHkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5xdWFudGl0eSBpbnB1dCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcbn1cblxuLnF1YW50aXR5IGlucHV0LnF0eSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnF1YW50aXR5IC5taW51cywgLnF1YW50aXR5IC5wbHVzIHtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogNnB4IDMwcHg7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiA2cHggMzBweDtcbiAgY29sb3I6ICNiYmI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI1cHg7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5xdWFudGl0eSAubWludXM6aG92ZXIsIC5xdWFudGl0eSAucGx1czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWQ4ZGE7XG59XG5cbi5xdWFudGl0eSAubWludXMge1xuICBib3R0b206IDA7XG59XG5cbi5zaG9wcGluZy1jYXJ0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBhcmFtIHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4ucGFyYW0taW5saW5lIGR0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGFyYW0gZHQge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGFyYW0taW5saW5lIGRkIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wYXJhbSBkZCB7XG4gIG1hcmdpbjogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4ucHJpY2Uge1xuICBjb2xvcjogIzE2YTA4NTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/shopping-cart/shopping-cart.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/shopping-cart/shopping-cart.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Shared/data.service */ "./src/app/services/Shared/data.service.ts");



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(dataService) {
        this.dataService = dataService;
        this.cart = [];
        this.total = 0;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.cart.subscribe(function (a) { return _this.cart = a; });
        this.getTotal();
    };
    ShoppingCartComponent.prototype.getCartProductItems = function () {
        this.cart = JSON.parse(localStorage.getItem('Cart'));
    };
    ShoppingCartComponent.prototype.onRemoveProductsFromCart = function (productId) {
        this.cart = this.cart.filter(function (a) { return a.ProductId != productId; });
        localStorage.setItem('Cart', JSON.stringify(this.cart));
        this.dataService.updateCartItemCount(this.cart.length);
        this.dataService.updateShoppingCart(this.cart);
        this.getTotal();
    };
    ShoppingCartComponent.prototype.onUpdateQuantity = function (type, productId) {
        var _this = this;
        if (type == 1) {
            this.cart.forEach(function (element, index) {
                if (element.ProductId == productId) {
                    _this.cart[index].Quantity = element.Quantity + 1;
                }
            });
        }
        else {
            this.cart.forEach(function (element, index) {
                if (element.ProductId == productId) {
                    _this.cart[index].Quantity = element.Quantity - 1;
                }
            });
        }
        this.getTotal();
    };
    ShoppingCartComponent.prototype.getTotal = function () {
        var _this = this;
        this.total = 0;
        this.cart.forEach(function (element) {
            _this.total = _this.total + (element.Price * element.Quantity);
        });
    };
    ShoppingCartComponent.ctorParameters = function () { return [
        { type: src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/components/home/shopping-cart/shopping-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-block {\n  float: left;\n  width: 100%;\n  padding: 50px 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.register-block .container {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);\n}\n.register-block .container .banner-sec {\n  background: url(https://images.pexels.com/photos/235419/pexels-photo-235419.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb) no-repeat bottom;\n  background-size: cover;\n  min-height: 500px;\n  border-radius: 0 10px 10px 0;\n  padding: 0;\n}\n.register-block .container .register-sec {\n  padding: 50px 30px;\n  position: relative;\n}\n.register-block .container .register-sec .copy-text {\n  position: absolute;\n  width: 80%;\n  bottom: 20px;\n  font-size: 13px;\n  text-align: center;\n}\n.register-block .container .register-sec .copy-text i {\n  color: #FEB58A;\n}\n.register-block .container .register-sec .copy-text a {\n  color: #E36262;\n}\n.register-block .container .register-sec h2 {\n  margin-bottom: 30px;\n  font-weight: 800;\n  font-size: 30px;\n  color: #3f4c6b;\n}\n.register-block .container .register-sec h2:after {\n  content: \" \";\n  width: 100px;\n  height: 5px;\n  background: #3f4c6b;\n  display: block;\n  margin-top: 20px;\n  border-radius: 3px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.register-block .container .register-sec .btn-register {\n  background: #3f4c6b;\n  color: #fff;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNHLG1CQUFBO0FDSko7QURLSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ0hSO0FESVE7RUFDSSx5SUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNGWjtBRElRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FER1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRGhCO0FERWdCO0VBQ0ksY0FqQ1Y7QUNpQ1Y7QURFZ0I7RUFDSSxjQW5DVjtBQ21DVjtBREdZO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQXpDTjtBQ3dDVjtBREVnQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQXBCO0FER1k7RUFDSSxtQkFBQTtFQUNBLFdBdkROO0VBd0RNLGdCQUFBO0FDRGhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcl8xOiAjRkVCNThBO1xuJGNvbG9yXzI6ICNFMzYyNjI7XG4kY29sb3JfMzogIzNmNGM2YjtcbiRjb2xvcl80OiAjZmZmO1xuXG4ucmVnaXN0ZXItYmxvY2sge1xuXHRmbG9hdDogbGVmdDtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDUwcHggMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDE1cHggMjBweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAuYmFubmVyLXNlYyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjM1NDE5L3BleGVscy1waG90by0yMzU0MTkuanBlZz93PTEyNjAmaD03NTAmYXV0bz1jb21wcmVzcyZjcz10aW55c3JnYikgbm8tcmVwZWF0IGJvdHRvbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5yZWdpc3Rlci1zZWMge1xuICAgICAgICAgICAgcGFkZGluZzogNTBweCAzMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLmNvcHktdGV4dCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yXzM7XG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2Y0YzZiO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4tcmVnaXN0ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZjRjNmI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl80O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucmVnaXN0ZXItYmxvY2sge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlZ2lzdGVyLWJsb2NrIC5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAxNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5yZWdpc3Rlci1ibG9jayAuY29udGFpbmVyIC5iYW5uZXItc2VjIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzIzNTQxOS9wZXhlbHMtcGhvdG8tMjM1NDE5LmpwZWc/dz0xMjYwJmg9NzUwJmF1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2IpIG5vLXJlcGVhdCBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnJlZ2lzdGVyLWJsb2NrIC5jb250YWluZXIgLnJlZ2lzdGVyLXNlYyB7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJlZ2lzdGVyLWJsb2NrIC5jb250YWluZXIgLnJlZ2lzdGVyLXNlYyAuY29weS10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogODAlO1xuICBib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdGVyLWJsb2NrIC5jb250YWluZXIgLnJlZ2lzdGVyLXNlYyAuY29weS10ZXh0IGkge1xuICBjb2xvcjogI0ZFQjU4QTtcbn1cbi5yZWdpc3Rlci1ibG9jayAuY29udGFpbmVyIC5yZWdpc3Rlci1zZWMgLmNvcHktdGV4dCBhIHtcbiAgY29sb3I6ICNFMzYyNjI7XG59XG4ucmVnaXN0ZXItYmxvY2sgLmNvbnRhaW5lciAucmVnaXN0ZXItc2VjIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzNmNGM2Yjtcbn1cbi5yZWdpc3Rlci1ibG9jayAuY29udGFpbmVyIC5yZWdpc3Rlci1zZWMgaDI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzNmNGM2YjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5yZWdpc3Rlci1ibG9jayAuY29udGFpbmVyIC5yZWdpc3Rlci1zZWMgLmJ0bi1yZWdpc3RlciB7XG4gIGJhY2tncm91bmQ6ICMzZjRjNmI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Customer_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Customer/customer.service */ "./src/app/services/Customer/customer.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, customerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.customerService = customerService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.customerService.Login(this.f.username.value, this.f.password.value)
            .subscribe(function (data) {
            localStorage.setItem('user', JSON.stringify(data[0]));
            _this.router.navigate(['/products']);
        }, function (error) {
            _this.loading = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_Customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_Customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/order-confirmation/order-confirmation.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/order-confirmation/order-confirmation.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uL29yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/order-confirmation/order-confirmation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/order-confirmation/order-confirmation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationComponent", function() { return OrderConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderConfirmationComponent = /** @class */ (function () {
    function OrderConfirmationComponent() {
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
    };
    OrderConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-confirmation',
            template: __webpack_require__(/*! raw-loader!./order-confirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/order-confirmation/order-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./order-confirmation.component.scss */ "./src/app/components/order-confirmation/order-confirmation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderConfirmationComponent);
    return OrderConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/product-details/product-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-image img {\n  margin: auto;\n}\n\nth {\n  vertical-align: middle;\n}\n\n.product-detail .product-head {\n  padding: 10px;\n  font-weight: 500;\n  color: white;\n}\n\n.product-detail .table th {\n  width: 152px;\n}\n\n.product-ship {\n  height: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQ0FSOztBREdBO0VBQ0ksc0JBQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWltYWdle1xuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG50aHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnByb2R1Y3QtZGV0YWlsIC5wcm9kdWN0LWhlYWQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWRldGFpbCAudGFibGUgdGgge1xuICAgIHdpZHRoOiAxNTJweDtcbiAgfVxuICBcbiAgLnByb2R1Y3Qtc2hpcCB7XG4gICAgaGVpZ2h0OiAxNXJlbTtcbiAgfSIsIi5wcm9kdWN0LWltYWdlIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxudGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucHJvZHVjdC1kZXRhaWwgLnByb2R1Y3QtaGVhZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2R1Y3QtZGV0YWlsIC50YWJsZSB0aCB7XG4gIHdpZHRoOiAxNTJweDtcbn1cblxuLnByb2R1Y3Qtc2hpcCB7XG4gIGhlaWdodDogMTVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/components/product-details/product-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Product/product.service */ "./src/app/services/Product/product.service.ts");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");





var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.product = new src_app_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.productId = params['id'];
        });
        this.getProductDetailsById();
    };
    ProductDetailsComponent.prototype.getProductDetailsById = function () {
        var _this = this;
        this.productService.getProductDetailsById(this.productId)
            .subscribe(function (p) {
            _this.product = p;
            _this.colorId = p.Color[0].AttributeValueId;
            _this.sizeId = p.Size[0].AttributeValueId;
            console.log(_this.product);
        });
    };
    ProductDetailsComponent.ctorParameters = function () { return [
        { type: src_app_services_Product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.scss */ "./src/app/components/product-details/product-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-block {\n  float: left;\n  width: 100%;\n  padding: 50px 0;\n}\n\n.banner-sec {\n  background: url(https://images.pexels.com/photos/235419/pexels-photo-235419.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb) no-repeat bottom;\n  background-size: cover;\n  min-height: 500px;\n  border-radius: 0 10px 10px 0;\n  padding: 0;\n}\n\n.container {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);\n}\n\n.carousel-inner {\n  border-radius: 0 10px 10px 0;\n}\n\n.carousel-caption {\n  text-align: left;\n  left: 5%;\n}\n\n.register-sec {\n  padding: 50px 30px;\n  position: relative;\n}\n\n.register-sec .copy-text {\n  position: absolute;\n  width: 80%;\n  bottom: 20px;\n  font-size: 13px;\n  text-align: center;\n}\n\n.register-sec .copy-text i {\n  color: #FEB58A;\n}\n\n.register-sec .copy-text a {\n  color: #E36262;\n}\n\n.register-sec h2 {\n  margin-bottom: 30px;\n  font-weight: 800;\n  font-size: 30px;\n  color: white;\n}\n\n.register-sec h2:after {\n  content: \" \";\n  width: 100px;\n  height: 5px;\n  background: white;\n  display: block;\n  margin-top: 20px;\n  border-radius: 3px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn-register {\n  background: #255b74;\n  border-color: #c7d9da;\n  box-shadow: 1px 2px 0px rgba(227, 235, 238, 0.1);\n  border-radius: 1px;\n  color: #fff;\n  font-weight: 600;\n}\n\n.banner-text {\n  width: 70%;\n  position: absolute;\n  bottom: 40px;\n  padding-left: 20px;\n}\n\n.banner-text h2 {\n  color: #fff;\n  font-weight: 600;\n}\n\n.banner-text h2:after {\n  content: \" \";\n  width: 100px;\n  height: 5px;\n  background: #FFF;\n  display: block;\n  margin-top: 20px;\n  border-radius: 3px;\n}\n\n.banner-text p {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa2VtZWZ1bmFjaHVrd3VueWVyZW53YS9EZXNrdG9wL0Zyb250ZW5kLUJhY2tlbmQvRUNvbW1lcmNlLUFwcGxpY2F0aW9uLU5vZGVqcy1Bbmd1bGFyLTgtTVlTUUwtQ09SUy9Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHlJQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxRQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSxjQUFBO0FDR0o7O0FEQUE7RUFDSSxjQUFBO0FDR0o7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURIQTtFQUNJLFdBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItYmxvY2t7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBhZGRpbmcgOiA1MHB4IDA7XG59XG5cbi5iYW5uZXItc2Vje1xuICAgIGJhY2tncm91bmQ6dXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzIzNTQxOS9wZXhlbHMtcGhvdG8tMjM1NDE5LmpwZWc/dz0xMjYwJmg9NzUwJmF1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2IpICBuby1yZXBlYXQgIGJvdHRvbTsgXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyOyBcbiAgICBtaW4taGVpZ2h0OjUwMHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwOyBcbiAgICBwYWRkaW5nOjA7XG59XG5cbi5jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDojZmZmOyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcbiAgICBib3gtc2hhZG93OjE1cHggMjBweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4uY2Fyb3VzZWwtaW5uZXJ7XG4gICAgYm9yZGVyLXJhZGl1czowIDEwcHggMTBweCAwO1xufVxuLmNhcm91c2VsLWNhcHRpb257XG4gICAgdGV4dC1hbGlnbjpsZWZ0OyBcbiAgICBsZWZ0OjUlO1xufVxuLnJlZ2lzdGVyLXNlY3tcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7IFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4ucmVnaXN0ZXItc2VjIC5jb3B5LXRleHR7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7IFxuICAgIHdpZHRoOjgwJTsgXG4gICAgYm90dG9tOjIwcHg7IFxuICAgIGZvbnQtc2l6ZToxM3B4OyBcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnJlZ2lzdGVyLXNlYyAuY29weS10ZXh0IGl7XG4gICAgY29sb3I6I0ZFQjU4QTtcbn1cblxuLnJlZ2lzdGVyLXNlYyAuY29weS10ZXh0IGF7XG4gICAgY29sb3I6I0UzNjI2Mjtcbn1cblxuLnJlZ2lzdGVyLXNlYyBoMntcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7IFxuICAgIGZvbnQtd2VpZ2h0OjgwMDsgXG4gICAgZm9udC1zaXplOjMwcHg7IFxuICAgIGNvbG9yOndoaXRlO1xufVxuLnJlZ2lzdGVyLXNlYyBoMjphZnRlcntcbiAgICBjb250ZW50OlwiIFwiOyBcbiAgICB3aWR0aDoxMDBweDsgXG4gICAgaGVpZ2h0OjVweDsgXG4gICAgYmFja2dyb3VuZDp3aGl0ZTsgXG4gICAgZGlzcGxheTpibG9jazsgXG4gICAgbWFyZ2luLXRvcDoyMHB4OyBcbiAgICBib3JkZXItcmFkaXVzOjNweDsgXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6YXV0b1xufVxuLmJ0bi1yZWdpc3RlcntcbiAgICBiYWNrZ3JvdW5kOiAjMjU1Yjc0OyBcbiAgICBib3JkZXItY29sb3I6IHJnYigxOTksIDIxNywgMjE4KTtcbiAgICBib3gtc2hhZG93OjFweCAycHggMHB4IHJnYmEoMjI3LCAyMzUsIDIzOCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgY29sb3I6I2ZmZjsgXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xufVxuLmJhbm5lci10ZXh0e1xuICAgIHdpZHRoOjcwJTsgXG4gICAgcG9zaXRpb246YWJzb2x1dGU7IFxuICAgIGJvdHRvbTo0MHB4OyBcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbn1cblxuLmJhbm5lci10ZXh0IGgye1xuICAgIGNvbG9yOiNmZmY7IFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbn1cblxuLmJhbm5lci10ZXh0IGgyOmFmdGVye1xuICAgIGNvbnRlbnQ6XCIgXCI7IFxuICAgIHdpZHRoOjEwMHB4OyBcbiAgICBoZWlnaHQ6NXB4OyBcbiAgICBiYWNrZ3JvdW5kOiNGRkY7IFxuICAgIGRpc3BsYXk6YmxvY2s7IFxuICAgIG1hcmdpbi10b3A6MjBweDsgXG4gICAgYm9yZGVyLXJhZGl1czozcHg7XG59XG5cbi5iYW5uZXItdGV4dCBwe1xuICAgIGNvbG9yOiNmZmY7XG59IiwiLnJlZ2lzdGVyLWJsb2NrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5cbi5iYW5uZXItc2VjIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzIzNTQxOS9wZXhlbHMtcGhvdG8tMjM1NDE5LmpwZWc/dz0xMjYwJmg9NzUwJmF1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2IpIG5vLXJlcGVhdCBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMTVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGVmdDogNSU7XG59XG5cbi5yZWdpc3Rlci1zZWMge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlZ2lzdGVyLXNlYyAuY29weS10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogODAlO1xuICBib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXItc2VjIC5jb3B5LXRleHQgaSB7XG4gIGNvbG9yOiAjRkVCNThBO1xufVxuXG4ucmVnaXN0ZXItc2VjIC5jb3B5LXRleHQgYSB7XG4gIGNvbG9yOiAjRTM2MjYyO1xufVxuXG4ucmVnaXN0ZXItc2VjIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZWdpc3Rlci1zZWMgaDI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5idG4tcmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjU1Yjc0O1xuICBib3JkZXItY29sb3I6ICNjN2Q5ZGE7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMHB4IHJnYmEoMjI3LCAyMzUsIDIzOCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJhbm5lci10ZXh0IHtcbiAgd2lkdGg6IDcwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmJhbm5lci10ZXh0IGgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5iYW5uZXItdGV4dCBoMjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYmFubmVyLXRleHQgcCB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Shipping_shipping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Shipping/shipping.service */ "./src/app/services/Shipping/shipping.service.ts");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_Customer_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Customer/customer.service */ "./src/app/services/Customer/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(shippingService, formBuilder, customerService, router) {
        this.shippingService = shippingService;
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.router = router;
        this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.GetShippingRegions();
        this.customer.RegionId = 1;
        this.registerForm = this.formBuilder.group({
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            AddressOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            AddressTwo: ['', null],
            Town: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            RegionId: ['', null],
            ZipCode: ['', null],
            Mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            CreditCard: ['', null],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.GetShippingRegions = function () {
        var _this = this;
        this.shippingService.getShippingRegions()
            .subscribe(function (a) {
            _this.regions = a;
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.customer = this.registerForm.value;
        this.customerService.AddNewCustomer(this.customer)
            .subscribe(function (a) {
            console.log(a);
            if (a) {
                _this.router.navigate(['/customer/login']);
            }
        });
        console.log(this.registerForm.value);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_services_Shipping_shipping_service__WEBPACK_IMPORTED_MODULE_2__["ShippingService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: src_app_services_Customer_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Shipping_shipping_service__WEBPACK_IMPORTED_MODULE_2__["ShippingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_Customer_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/models/department.ts":
/*!**************************************!*\
  !*** ./src/app/models/department.ts ***!
  \**************************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());



/***/ }),

/***/ "./src/app/models/paging.ts":
/*!**********************************!*\
  !*** ./src/app/models/paging.ts ***!
  \**********************************/
/*! exports provided: Paging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paging", function() { return Paging; });
var Paging = /** @class */ (function () {
    function Paging() {
    }
    return Paging;
}());



/***/ }),

/***/ "./src/app/models/product-pagin-data.ts":
/*!**********************************************!*\
  !*** ./src/app/models/product-pagin-data.ts ***!
  \**********************************************/
/*! exports provided: ProductPaginData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPaginData", function() { return ProductPaginData; });
var ProductPaginData = /** @class */ (function () {
    function ProductPaginData() {
    }
    return ProductPaginData;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/services/Category/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/Category/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getCategories = function () {
        //This is from backend (nodejs port 8080)
        var baseUrl = 'http://localhost:8080/api/';
        return this.http.get(baseUrl + "category/getCategories");
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/Checkout/checkout.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/Checkout/checkout.service.ts ***!
  \*******************************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CheckoutService = /** @class */ (function () {
    function CheckoutService(http) {
        this.http = http;
        this.url = localStorage.getItem('ServerUrl');
    }
    CheckoutService.prototype.CreatePaypalTransacton = function (orderDetail) {
        //This is from backend (nodejs port 8080)
        var baseUrl = 'http://localhost:8080/api/';
        return this.http.post(baseUrl + "order/submitOrder", orderDetail);
    };
    CheckoutService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CheckoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/services/Customer/customer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/Customer/customer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.url = localStorage.getItem('ServerUrl');
    }
    CustomerService.prototype.AddNewCustomer = function (customer) {
        //This is from backend (nodejs port 8080)
        var baseUrl = 'http://localhost:8080/api/';
        return this.http.post(baseUrl + "customer/addNewCustomer", customer);
    };
    CustomerService.prototype.Login = function (username, password) {
        //This is from backend (nodejs port 8080)
        var baseUrl = 'http://localhost:8080/api/';
        return this.http.post(baseUrl + "customer/authenticateLogin", { Username: username, Password: password });
    };
    CustomerService.prototype.Logout = function () {
        //This is from backend (nodejs port 8080)
        var baseUrl = 'http://localhost:8080/api/';
        var result = this.http.get(baseUrl + "customer/logout");
        return result;
    };
    CustomerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/Department/department.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/Department/department.service.ts ***!
  \***********************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
        this.url = localStorage.getItem('ServerUrl');
    }
    DepartmentService.prototype.getDepartments = function () {
        //This is from backend (nodejs port 8080)
        var baseUrl = 'http://localhost:8080/api/';
        return this.http.get(baseUrl + "department/getDepartments");
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/services/Product/product.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/Product/product.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//This is from backend (nodejs port 8080)
var baseUrl = 'http://localhost:8080/api/';
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.geProductByDepartmentId = function (paging) {
        return this.http.post(baseUrl + "department/getDepartments", paging);
    };
    ProductService.prototype.getProductList = function (paging) {
        return this.http.post(baseUrl + "product/getFilteredProducts", { paging: paging });
    };
    ProductService.prototype.getProductDetailsById = function (productId) {
        return this.http.get(baseUrl + "product/getProductDetails?productId=" + productId);
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/Shared/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/Shared/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('default');
        this.currentMessage = this.message.asObservable();
        this.ItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.count = this.ItemCount.asObservable();
        this.shoppingCart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.cart = this.shoppingCart.asObservable();
        var isEmptyCart = localStorage.getItem('Cart') == null;
        this.updateCartItemCount(isEmptyCart ? 0 : JSON.parse(localStorage.getItem('Cart')).length);
        this.updateShoppingCart(isEmptyCart ? [] : JSON.parse(localStorage.getItem('Cart')));
    }
    DataService.prototype.changeMessage = function (message) {
        this.message.next(message);
    };
    DataService.prototype.updateCartItemCount = function (count) {
        this.ItemCount.next(count);
    };
    DataService.prototype.updateShoppingCart = function (cartItems) {
        this.shoppingCart.next(cartItems);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/Shipping/shipping.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/Shipping/shipping.service.ts ***!
  \*******************************************************/
/*! exports provided: ShippingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingService", function() { return ShippingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//This is from backend (nodejs port 8080)
var baseUrl = 'http://localhost:8080/api/';
var ShippingService = /** @class */ (function () {
    function ShippingService(http) {
        this.http = http;
    }
    ShippingService.prototype.getShippingRegions = function () {
        return this.http.get(baseUrl + "shipping/getShippingRegions");
    };
    ShippingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ShippingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShippingService);
    return ShippingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ikemefunachukwunyerenwa/Desktop/Frontend-Backend/ECommerce-Application-Nodejs-Angular-8-MYSQL-CORS/Frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map