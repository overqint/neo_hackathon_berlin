webpackJsonp(["widgets.module"],{

/***/ "../../../../../src/app/widgets/widgets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-text\" data-background-color=\"orange\">\n                        <h4 class=\"card-title\">Employees Stats</h4>\n                        <p class=\"category\">New employees on 15th September, 2016</p>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                                <thead class=\"text-warning\">\n                                    <tr>\n                                      <th *ngFor=\"let cell of tableData.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                              <tbody>\n                                  <tr *ngFor=\"let row of tableData.dataRows\">\n                                      <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                  </tr>\n                              </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-tabs\" data-background-color=\"rose\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <span class=\"nav-tabs-title\">Tasks:</span>\n                                <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                    <li class=\"active\">\n                                        <a href=\"#profile\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">bug_report</i> Bugs\n                                            <div class=\"ripple-container\"></div>\n                                        </a>\n                                    </li>\n                                    <li class=\"\">\n                                        <a href=\"#messages\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">code</i> Website\n                                            <div class=\"ripple-container\"></div>\n                                        </a>\n                                    </li>\n                                    <li class=\"\">\n                                        <a href=\"#settings\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">cloud</i> Server\n                                            <div class=\"ripple-container\"></div>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"profile\">\n                                <table class=\"table\">\n                                      <tbody>\n                                          <tr *ngFor=\"let row of tasks1\">\n                                              <td>\n                                                  <div [ngSwitch]=\"row.checked\">\n                                                      <div *ngSwitchCase=\"true\">\n                                                          <div class=\"checkbox\">\n                                                              <label>\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                              </label>\n                                                          </div>\n                                                      </div>\n                                                      <div *ngSwitchDefault>\n                                                          <div class=\"checkbox\">\n                                                              <label>\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                              </label>\n                                                          </div>\n                                                      </div>\n\n                                                  </div>\n                                              </td>\n                                              <td>{{row.title}}</td>\n                                              <td class=\"td-actions text-right\">\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                      <i class=\"material-icons\">edit</i>\n                                                  </button>\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                      <i class=\"material-icons\">close</i>\n                                                  </button>\n                                              </td>\n                                           </tr>\n                                      </tbody>\n                                </table>\n                            </div>\n                            <div class=\"tab-pane\" id=\"messages\">\n                                <table class=\"table\">\n                                      <tbody>\n                                          <tr *ngFor=\"let row of tasks2\">\n                                              <td>\n                                                  <div [ngSwitch]=\"row.checked\">\n                                                      <div *ngSwitchCase=\"true\">\n                                                          <div class=\"checkbox\">\n                                                              <label>\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                              </label>\n                                                          </div>\n                                                      </div>\n                                                      <div *ngSwitchDefault>\n                                                          <div class=\"checkbox\">\n                                                              <label>\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                              </label>\n                                                          </div>\n                                                      </div>\n\n                                                  </div>\n                                              </td>\n                                              <td>{{row.title}}</td>\n                                              <td class=\"td-actions text-right\">\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                      <i class=\"material-icons\">edit</i>\n                                                  </button>\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                      <i class=\"material-icons\">close</i>\n                                                  </button>\n                                              </td>\n                                           </tr>\n                                      </tbody>\n                                </table>\n                            </div>\n                            <div class=\"tab-pane\" id=\"settings\">\n                                <table class=\"table\">\n                                      <tbody>\n                                          <tr *ngFor=\"let row of tasks3\">\n                                              <td>\n                                                  <div [ngSwitch]=\"row.checked\">\n                                                      <div *ngSwitchCase=\"true\">\n                                                          <div class=\"checkbox\">\n                                                              <label>\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                              </label>\n                                                          </div>\n                                                      </div>\n                                                      <div *ngSwitchDefault>\n                                                          <div class=\"checkbox\">\n                                                              <label>\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                              </label>\n                                                          </div>\n                                                      </div>\n\n                                                  </div>\n                                              </td>\n                                              <td>{{row.title}}</td>\n                                              <td class=\"td-actions text-right\">\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                      <i class=\"material-icons\">edit</i>\n                                                  </button>\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                      <i class=\"material-icons\">close</i>\n                                                  </button>\n                                              </td>\n                                           </tr>\n                                      </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"col-lg-6\">\n                    <div class=\"card card-pricing card-raised\">\n                        <div class=\"content\">\n                            <h6 class=\"category\">Small Company</h6>\n                            <div class=\"icon icon-rose\">\n                                <i class=\"material-icons\">home</i>\n                            </div>\n                            <h3 class=\"card-title\">$29</h3>\n                            <p class=\"card-description\">\n                                This is good if your company size is between 2 and 10 Persons.\n                            </p>\n                            <a href=\"#\" class=\"btn btn-rose btn-round\">Choose Plan</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"content\">\n                            <h6 class=\"category\">Freelancer</h6>\n                            <div class=\"icon\">\n                                <i class=\"material-icons\">weekend</i>\n                            </div>\n                            <h3 class=\"card-title\">FREE</h3>\n                            <p class=\"card-description\">\n                                This is good if your company size is between 2 and 10 Persons.\n                            </p>\n                            <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-11\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"icon\">\n                            <i class=\"material-icons\">format_quote</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <h5 class=\"card-description\">\n                                Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!\n                            </h5>\n                        </div>\n                        <div class=\"footer\">\n                            <h4 class=\"card-title\">Alec Thompson</h4>\n                            <h6 class=\"category\">@alecthompson</h6>\n                            <div class=\"card-avatar\">\n                                <a href=\"#pablo\">\n                                    <img class=\"img\" src=\"../assets/img/faces/card-profile1-square.jpg\" />\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <ul class=\"timeline timeline-simple\">\n                    <li class=\"timeline-inverted\">\n                        <div class=\"timeline-badge danger\">\n                            <i class=\"material-icons\">card_travel</i>\n                        </div>\n                        <div class=\"timeline-panel\">\n                            <div class=\"timeline-heading\">\n                                <span class=\"label label-danger\">Some title</span>\n                            </div>\n                            <div class=\"timeline-body\">\n                                <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>\n                            </div>\n                            <h6>\n                                <i class=\"ti-time\"></i> 11 hours ago via Twitter\n                            </h6>\n                        </div>\n                    </li>\n                    <li class=\"timeline-inverted\">\n                        <div class=\"timeline-badge success\">\n                            <i class=\"material-icons\">extension</i>\n                        </div>\n                        <div class=\"timeline-panel\">\n                            <div class=\"timeline-heading\">\n                                <span class=\"label label-success\">Another One</span>\n                            </div>\n                            <div class=\"timeline-body\">\n                                <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>\n                            </div>\n                        </div>\n                    </li>\n                    <li class=\"timeline-inverted\">\n                        <div class=\"timeline-badge info\">\n                            <i class=\"material-icons\">fingerprint</i>\n                        </div>\n                        <div class=\"timeline-panel\">\n                            <div class=\"timeline-heading\">\n                                <span class=\"label label-info\">Another Title</span>\n                            </div>\n                            <div class=\"timeline-body\">\n                                <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>\n                                <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>\n                                <hr>\n                                <div class=\"dropdown pull-left\">\n                                    <button type=\"button\" class=\"btn btn-round btn-info dropdown-toggle\" data-toggle=\"dropdown\">\n                                        <i class=\"material-icons\">build</i>\n                                        <span class=\"caret\"></span>\n                                    </button>\n                                    <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n                                        <li>\n                                            <a href=\"#action\">Action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#action\">Another action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#here\">Something else here</a>\n                                        </li>\n                                        <li class=\"divider\"></li>\n                                        <li>\n                                            <a href=\"#link\">Separated link</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WidgetsComponent = (function () {
    function WidgetsComponent() {
    }
    WidgetsComponent.prototype.ngOnInit = function () {
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South']
            ]
        };
        this.tasks1 = [
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true
            },
            { title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false }
        ];
        this.tasks2 = [
            {
                title: "Flooded: One year later, assessing what was lost and\n                 what was found when a ravaging rain swept through metro Detroit",
                checked: true
            },
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
        ];
        this.tasks3 = [
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: false },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true
            },
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false }
        ];
    };
    WidgetsComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    WidgetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-widgets-cmp',
            template: __webpack_require__("../../../../../src/app/widgets/widgets.component.html")
        })
    ], WidgetsComponent);
    return WidgetsComponent;
}());

//# sourceMappingURL=widgets.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/widgets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widgets_component__ = __webpack_require__("../../../../../src/app/widgets/widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widgets_routing__ = __webpack_require__("../../../../../src/app/widgets/widgets.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';


var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__widgets_routing__["a" /* WidgetsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__widgets_component__["a" /* WidgetsComponent */]]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());

//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/widgets.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widgets_component__ = __webpack_require__("../../../../../src/app/widgets/widgets.component.ts");

var WidgetsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__widgets_component__["a" /* WidgetsComponent */]
            }]
    }
];
//# sourceMappingURL=widgets.routing.js.map

/***/ })

});
//# sourceMappingURL=widgets.module.chunk.js.map