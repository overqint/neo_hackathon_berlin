webpackJsonp(["tables.module"],{

/***/ "../../../../../src/app/tables/datatable.net/datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">DataTables.net</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables table-responsive\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                      <th>{{ dataTable.headerRow[0] }}</th>\n                                      <th>{{ dataTable.headerRow[1] }}</th>\n                                      <th>{{ dataTable.headerRow[2] }}</th>\n                                      <th>{{ dataTable.headerRow[3] }}</th>\n                                      <th>{{ dataTable.headerRow[4] }}</th>\n                                      <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[5] }}</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                      <th>{{ dataTable.footerRow[0] }}</th>\n                                      <th>{{ dataTable.footerRow[1] }}</th>\n                                      <th>{{ dataTable.footerRow[2] }}</th>\n                                      <th>{{ dataTable.footerRow[3] }}</th>\n                                      <th>{{ dataTable.footerRow[4] }}</th>\n                                      <th class=\"text-right\">{{ dataTable.footerRow[5] }}</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td>{{row[4]}}</td>\n                                        <td class=\"text-right\">\n                                            <button class=\"btn btn-simple btn-info btn-icon like\" rel=\"tooltip\" title=\"Like\" data-placement=\"left\">\n                                                <i class=\"material-icons\">favorite</i>\n                                            </button>\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" rel=\"tooltip\" title=\"Edit\" data-placement=\"left\">\n                                                <i class=\"material-icons\">dvr</i>\n                                            </button>\n                                            <button class=\"btn btn-simple btn-danger btn-icon remove\" rel=\"tooltip\" title=\"Remove\" data-placement=\"left\">\n                                                <i class=\"material-icons\">close</i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tables/datatable.net/datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataTableComponent = (function () {
    function DataTableComponent() {
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataTable = {
            headerRow: ['Name', 'Position', 'Office', 'Age', 'Date', 'Actions'],
            footerRow: ['Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions'],
            dataRows: [
                ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Bradley Greer', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Brielle Williamson', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Caesar Vance', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Cedric Kelly', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Charde Marshall', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Colleen Hurst', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Dai Rios', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Doris Wilder', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Fiona Green', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Garrett Winters', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gavin Cortez', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Gavin Joyce', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gloria Little', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Haley Kennedy', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Herrod Chandler', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Hope Fuentes', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Howard Hatfield', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Jena Gaines', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Jenette Caldwell', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Jennifer Chang', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Martena Mccray', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Michael Silva', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Michelle House', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Paul Byrd', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Prescott Bartlett', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Quinn Flynn', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Rhona Davidson', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Shou Itou', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Sonya Frost', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Suki Burks', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Tatyana Fitzpatrick', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Tiger Nixon', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Timothy Mooney', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Unity Butler', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Vivian Harrell', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Yuri Berry', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round']
            ]
        };
    };
    DataTableComponent.prototype.ngAfterViewInit = function () {
        $('#datatables').DataTable({
            'pagingType': 'full_numbers',
            'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
            responsive: true,
            language: {
                search: '_INPUT_',
                searchPlaceholder: 'Search records',
            }
        });
        var table = $('#datatables').DataTable();
        // Edit record
        table.on('click', '.edit', function () {
            var $tr = $(this).closest('tr');
            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        });
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        // Like record
        table.on('click', '.like', function () {
            alert('You clicked on Like button');
        });
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    DataTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-table-cmp',
            template: __webpack_require__("../../../../../src/app/tables/datatable.net/datatable.component.html")
        })
    ], DataTableComponent);
    return DataTableComponent;
}());

//# sourceMappingURL=datatable.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/extendedtable/extendedtable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Simple Table</h4>\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                          <th class=\"text-center\">{{ tableData1.headerRow[0] }}</th>\n                                          <th>{{ tableData1.headerRow[1] }}</th>\n                                          <th>{{ tableData1.headerRow[2] }}</th>\n                                          <th>{{ tableData1.headerRow[3] }}</th>\n                                          <th class=\"text-right\">{{ tableData1.headerRow[4] }}</th>\n                                          <th class=\"text-right\">{{ tableData1.headerRow[5] }}</th>\n                                        </tr>\n                                    </thead>\n                                  <tbody>\n                                      <tr *ngFor=\"let row of tableData1.dataRows\">\n                                          <td class=\"text-center\">{{row[0]}}</td>\n                                          <td>{{row[1]}}</td>\n                                          <td>{{row[2]}}</td>\n                                          <td>{{row[3]}}</td>\n                                          <td class=\"text-right\">&euro; {{row[4]}}</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info {{row[5]}}\">\n                                                  <i class=\"material-icons\">person</i>\n                                              </button>\n                                              <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success {{row[5]}}\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger {{row[5]}}\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Striped Table</h4>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                          <th class=\"text-center\">{{ tableData2.headerRow[0] }}</th>\n                                          <th>{{ tableData2.headerRow[1] }}</th>\n                                          <th>{{ tableData2.headerRow[2] }}</th>\n                                          <th>{{ tableData2.headerRow[3] }}</th>\n                                          <th>{{ tableData2.headerRow[4] }}</th>\n                                          <th class=\"text-right\">{{ tableData2.headerRow[5] }}</th>\n                                          <th class=\"text-right\">{{ tableData2.headerRow[6] }}</th>\n                                        </tr>\n                                    </thead>\n                                  <tbody>\n                                      <tr *ngFor=\"let row of tableData2.dataRows\">\n                                          <td class=\"text-center\">{{row.id}}</td>\n                                          <td>\n                                              <div [ngSwitch]=\"row.ischecked\">\n                                                  <div *ngSwitchCase=\"true\">\n                                                      <div class=\"checkbox\">\n                                                          <label>\n                                                              <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                          </label>\n                                                      </div>\n                                                  </div>\n                                                  <div *ngSwitchDefault>\n                                                      <div class=\"checkbox\">\n                                                          <label>\n                                                              <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                          </label>\n                                                      </div>\n                                                  </div>\n\n                                              </div>\n                                          </td>\n                                          <td>{{row.product_name}}</td>\n                                          <td>{{row.type}}</td>\n                                          <td>{{row.quantity}}</td>\n                                          <td class=\"text-right\">{{ row.price | currency:'EUR':true:'1.2-2'}}</td>\n                                          <td class=\"text-right\">\n                                              &euro; {{row.amount}}\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td colspan=\"5\"></td>\n                                          <td class=\"td-total\">\n                                              Total\n                                          </td>\n                                          <td class=\"td-price\">\n                                              <small>&euro;</small>12,999\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Shopping Cart Table</h4>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-shopping\">\n                                    <thead>\n                                        <tr>\n                                          <th class=\"text-center\">{{ tableData3.headerRow[0] }}</th>\n                                          <th>{{ tableData3.headerRow[1] }}</th>\n                                          <th class=\"th-description\">{{ tableData3.headerRow[2] }}</th>\n                                          <th class=\"th-description\">{{ tableData3.headerRow[3] }}</th>\n                                          <th class=\"text-right\">{{ tableData3.headerRow[4] }}</th>\n                                          <th class=\"text-right\">{{ tableData3.headerRow[5] }}</th>\n                                          <th class=\"text-right\">{{ tableData3.headerRow[6] }}</th>\n                                          <th></th>\n                                        </tr>\n                                    </thead>\n                                  <tbody>\n                                      <tr *ngFor=\"let row of tableData3.dataRows\">\n                                          <td>\n                                              <div class=\"img-container\">\n                                                  <img src=\"../../assets/img/{{row[0]}}.jpg\" alt=\"...\">\n                                              </div>\n                                          </td>\n                                          <td class=\"td-name\">\n                                              <a href=\"{{row[1]}}\">{{row[2]}}</a>\n                                              <br />\n                                              <small>{{row[3]}}</small>\n                                          </td>\n                                          <td>{{row[4]}}</td>\n                                          <td>\n                                              {{row[5]}}\n                                          </td>\n                                          <td class=\"td-number text-right\"><small>&euro;</small> {{row[6]}}</td>\n                                          <td class=\"td-number\">\n                                              {{row[7]}}\n                                              <div class=\"btn-group\">\n                                                  <button class=\"btn btn-round btn-info btn-xs\"> <i class=\"material-icons\">remove</i> </button>\n                                                  <button class=\"btn btn-round btn-info btn-xs\"> <i class=\"material-icons\">add</i> </button>\n                                              </div>\n                                          </td>\n                                          <td class=\"td-number\">\n                                              <small>&euro;</small>{{row[8]}}\n                                          </td>\n                                          <td class=\"td-actions\">\n                                              <button type=\"button\" rel=\"tooltip\" data-placement=\"left\" title=\"Remove item\" class=\"btn btn-simple\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td colspan=\"5\"></td>\n                                          <td class=\"td-total\">\n                                              Total\n                                          </td>\n                                          <td colspan=\"1\" class=\"td-price\">\n                                              {{getTotal()| currency:'EUR':true:'1.2-2'}}\n                                          </td>\n                                          <td></td>\n                                      </tr>\n                                      <tr>\n                                          <td colspan=\"6\"></td>\n                                          <td colspan=\"2\" class=\"text-right\">\n                                              <button type=\"button\" class=\"btn btn-info btn-round\">Complete Purchase <i class=\"material-icons\">keyboard_arrow_right</i></button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tables/extendedtable/extendedtable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExtendedTableComponent = (function () {
    function ExtendedTableComponent() {
    }
    ExtendedTableComponent.prototype.ngOnInit = function () {
        // Init Tooltips
        // $('[rel="tooltip"]').tooltip();
        this.tableData1 = {
            headerRow: ['#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
        };
        this.tableData2 = {
            headerRow: ['#', '', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
            dataRows: [
                { id: 1, ischecked: true, product_name: 'Moleskine Agenda', type: 'Office', quantity: 25, price: 49, amount: '1,225' },
                { id: 2, ischecked: true, product_name: 'Stabilo Pen', type: 'Office', quantity: 30, price: 10.99, amount: '109' },
                { id: 3, ischecked: true, product_name: 'A4 Paper Pack', type: 'Office', quantity: 50, price: 49, amount: '1,225' },
                { id: 4, ischecked: false, product_name: 'Apple iPad', type: 'Meeting', quantity: 10, price: 499.00, amount: '4,990' },
                { id: 5, ischecked: false, product_name: 'Apple iPhone', type: 'Communication', quantity: 10,
                    price: 599.00, amount: '5,999' }
            ]
        };
        this.tableData3 = {
            headerRow: ['', 'PRODUCT', 'COLOR', 'SIZE', 'PRICE', 'QTY', 'AMOUNT'],
            dataRows: [
                ['product1', '#jacket', 'Spring Jacket', 'by Dolce&Gabbana', 'Red', 'M', '549', '1', '549'],
                ['product2', '#pants', 'Short Pants', 'by Pucci', 'Purple', 'M', '499', '2', '998'],
                ['product3', '#nothing', 'Pencil Skirt', 'by Valentino', 'White', 'XL', '799', '1', '799']
            ]
        };
    };
    ExtendedTableComponent.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.tableData3.dataRows.length; i++) {
            var integer = parseInt(this.tableData3.dataRows[i][8], 10);
            total += integer;
        }
        return total;
    };
    ;
    ExtendedTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-extended-table-cmp',
            template: __webpack_require__("../../../../../src/app/tables/extendedtable/extendedtable.component.html")
        })
    ], ExtendedTableComponent);
    return ExtendedTableComponent;
}());

//# sourceMappingURL=extendedtable.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/regulartable/regulartable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Simple Table</h4>\n                        <div class=\"content table-responsive\">\n                          <table class=\"table\">\n                                  <thead class=\"text-primary\">\n                                      <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                                      </tr>\n                                  </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td class=\"text-primary\">{{row[3]}}</td>\n\n                                    </tr>\n                                </tbody>\n                          </table>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"card card-plain\">\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title\">Table on Plain Background</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                        <div class=\"card-content table-responsive\">\n                          <table class=\"table table-hover\">\n                              <thead>\n                                  <tr>\n                                    <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\n                                  </tr>\n                              </thead>\n                            <tbody>\n                                    <tr *ngFor=\"let row of tableData2.dataRows\">\n                                        <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                    </tr>\n                            </tbody>\n                          </table>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <div class=\"card-content table-full-width\">\n                            <h4 class=\"card-title\">Regular Table with Colors</h4>\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-hover\">\n                                    <thead>\n                                        <tr>\n                                          <th *ngFor=\"let cell of tableData3.headerRow\">{{ cell }}</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                          <tr class=\"success\">\n                                              <td *ngFor=\"let cell of tableData3.dataRows[0]\">{{cell}}</td>\n                                          </tr>\n                                          <tr>\n                                              <td *ngFor=\"let cell of tableData3.dataRows[1]\">{{cell}}</td>\n                                          </tr>\n                                          <tr class=\"info\">\n                                              <td *ngFor=\"let cell of tableData3.dataRows[2]\">{{cell}}</td>\n                                          </tr>\n                                          <tr>\n                                              <td *ngFor=\"let cell of tableData3.dataRows[3]\">{{cell}}</td>\n                                          </tr>\n                                          <tr class=\"danger\">\n                                              <td *ngFor=\"let cell of tableData3.dataRows[4]\">{{cell}}</td>\n                                          </tr>\n                                          <tr>\n                                              <td *ngFor=\"let cell of tableData3.dataRows[5]\">{{cell}}</td>\n                                          </tr>\n                                          <tr class=\"warning\">\n                                              <td *ngFor=\"let cell of tableData3.dataRows[6]\">{{cell}}</td>\n                                          </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tables/regulartable/regulartable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegularTableComponent = (function () {
    function RegularTableComponent() {
    }
    RegularTableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
        this.tableData3 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice (Success)', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez (Info)', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene (Danger)', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
                ['7', 'Mike Chaney (Warning)', '$38,735', 'Romania', 'Bucharest']
            ]
        };
    };
    RegularTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-regular-table-cmp',
            template: __webpack_require__("../../../../../src/app/tables/regulartable/regulartable.component.html")
        })
    ], RegularTableComponent);
    return RegularTableComponent;
}());

//# sourceMappingURL=regulartable.component.js.map

/***/ }),

/***/ "../../../../../src/app/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tables_routing__ = __webpack_require__("../../../../../src/app/tables/tables.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extendedtable_extendedtable_component__ = __webpack_require__("../../../../../src/app/tables/extendedtable/extendedtable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__regulartable_regulartable_component__ = __webpack_require__("../../../../../src/app/tables/regulartable/regulartable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datatable_net_datatable_component__ = __webpack_require__("../../../../../src/app/tables/datatable.net/datatable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TablesModule = (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__tables_routing__["a" /* TablesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__extendedtable_extendedtable_component__["a" /* ExtendedTableComponent */],
                __WEBPACK_IMPORTED_MODULE_7__datatable_net_datatable_component__["a" /* DataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_6__regulartable_regulartable_component__["a" /* RegularTableComponent */]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());

//# sourceMappingURL=tables.module.js.map

/***/ }),

/***/ "../../../../../src/app/tables/tables.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extendedtable_extendedtable_component__ = __webpack_require__("../../../../../src/app/tables/extendedtable/extendedtable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__regulartable_regulartable_component__ = __webpack_require__("../../../../../src/app/tables/regulartable/regulartable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatable_net_datatable_component__ = __webpack_require__("../../../../../src/app/tables/datatable.net/datatable.component.ts");



var TablesRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: __WEBPACK_IMPORTED_MODULE_1__regulartable_regulartable_component__["a" /* RegularTableComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: __WEBPACK_IMPORTED_MODULE_0__extendedtable_extendedtable_component__["a" /* ExtendedTableComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'datatables.net',
                component: __WEBPACK_IMPORTED_MODULE_2__datatable_net_datatable_component__["a" /* DataTableComponent */]
            }]
    }
];
//# sourceMappingURL=tables.routing.js.map

/***/ })

});
//# sourceMappingURL=tables.module.chunk.js.map