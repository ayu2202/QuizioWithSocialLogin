function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/addcourse/addcourse.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/addcourse/addcourse.component.ts ***!
    \**************************************************/

  /*! exports provided: AddcourseComponent */

  /***/
  function srcAppAddcourseAddcourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcourseComponent", function () {
      return AddcourseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_form_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/form.model */
    "./src/app/model/form.model.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddcourseComponent = /*#__PURE__*/function () {
      function AddcourseComponent(ds, router) {
        _classCallCheck(this, AddcourseComponent);

        this.ds = ds;
        this.router = router;
        this.addcourse_ob = new _model_form_model__WEBPACK_IMPORTED_MODULE_1__["addcourseinfo"]();
      }

      _createClass(AddcourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //assigning the file to banner property created here only

      }, {
        key: "get_file",
        value: function get_file(evnt) {
          this.banner = evnt.target.files[0];
        } //Function to add

      }, {
        key: "add_course",
        value: function add_course() {
          var _this = this;

          var coursedata = new FormData();
          coursedata.set('banner', this.banner);
          coursedata.set('category', this.addcourse_ob.category);
          coursedata.set('coursename', this.addcourse_ob.courseName);
          this.ds.AddCourseData(coursedata).subscribe(function (data) {
            if (data.category != "not defined") {
              console.log(data);
              _this.received_data = data;
              console.log("Course Add SuccessFully !");

              _this.router.navigate(['dashboardadmin'], {
                queryParams: {
                  courseinfo: JSON.stringify(_this.received_data)
                }
              });
            } else {
              alert("Error adding the course !");
            }
          });
        }
      }]);

      return AddcourseComponent;
    }();

    AddcourseComponent.ɵfac = function AddcourseComponent_Factory(t) {
      return new (t || AddcourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AddcourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddcourseComponent,
      selectors: [["app-addcourse"]],
      decls: 31,
      vars: 2,
      consts: [[1, "container-fluid", "bg"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-xs-12"], [1, "form"], ["formaddcorse", "ngForm"], [1, "form-group"], ["id", "selectcrs", "name", "category", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "crname"], ["type", "text", "id", "crname", "placeholder", "Course name", "name", "courseName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "img"], ["type", "file", "id", "img", "placeholder", "open", 1, "form-control", 3, "change"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], ["type", "clear", 1, "btn", "btn-danger", 2, "margin-left", "10px"]],
      template: function AddcourseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ADD Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcourseComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.addcourse_ob.category = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "C1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "C2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Course Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcourseComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.addcourse_ob.courseName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Banner image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddcourseComponent_Template_input_change_24_listener($event) {
            return ctx.get_file($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddcourseComponent_Template_button_click_26_listener() {
            return ctx.add_course();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+ ADD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addcourse_ob.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addcourse_ob.courseName);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]],
      styles: [".bg[_ngcontent-%COMP%]{\r\n     \r\n    background-repeat: no-repeat;\r\n    width:100%;\r\n    height:100vh;\r\n}\r\n.form[_ngcontent-%COMP%]{\r\n    border:1px solid black;\r\n    padding:50px 60px;\r\n    margin-top:25%;\r\n    background-color: white;\r\nbox-shadow: 14px 8px 15px -5px rgba(0,0,0,0.75);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNvdXJzZS9hZGRjb3Vyc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtBQUczQiwrQ0FBK0M7QUFDL0MiLCJmaWxlIjoiYWRkY291cnNlL2FkZGNvdXJzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgIFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbn1cclxuLmZvcm17XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzo1MHB4IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjI1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNHB4IDhweCAxNXB4IC01cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLW1vei1ib3gtc2hhZG93OiAxNHB4IDhweCAxNXB4IC01cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuYm94LXNoYWRvdzogMTRweCA4cHggMTVweCAtNXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddcourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addcourse',
          templateUrl: './addcourse.component.html',
          styleUrls: ['./addcourse.component.css']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/addquestion/addquestion.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/addquestion/addquestion.component.ts ***!
    \******************************************************/

  /*! exports provided: AddquestionComponent */

  /***/
  function srcAppAddquestionAddquestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddquestionComponent", function () {
      return AddquestionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_form_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/form.model */
    "./src/app/model/form.model.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddquestionComponent_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r2.coursename, " ");
      }
    }

    var AddquestionComponent = /*#__PURE__*/function () {
      function AddquestionComponent(ds) {
        _classCallCheck(this, AddquestionComponent);

        this.ds = ds;
        this.addques_ob = new _model_form_model__WEBPACK_IMPORTED_MODULE_1__["addquestioninfo"]();
      }

      _createClass(AddquestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.ds.getcourseforquestion().subscribe(function (data) {
            _this2.course_ob = data;
          });
        }
      }, {
        key: "add_question",
        value: function add_question() {
          this.ds.AddQuestion(this.addques_ob).subscribe(function (data) {
            if (data.status == "ok") {
              console.log("Question Added Succesfully to the DataBase !");
            } else {
              alert("Question Uploading Failed. Contact Your Admin.");
            }
          });
        }
      }]);

      return AddquestionComponent;
    }();

    AddquestionComponent.ɵfac = function AddquestionComponent_Factory(t) {
      return new (t || AddquestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    AddquestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddquestionComponent,
      selectors: [["app-addquestion"]],
      decls: 47,
      vars: 9,
      consts: [[1, "container-fluid", "bg"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-xs-12"], [1, "form"], ["formaddquestion", "ngForm"], [1, "form-group"], ["for", "selectcrs"], ["id", "selectcrs", "name", "courseselected", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["for", "quesnum"], ["type", "number", "id", "ques", "name", "qno", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ques"], ["id", "ques", "rows", "2", "name", "question", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "opt1"], ["type", "text", "id", "opt1", "placeholder", "option A", "name", "a", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "opt4"], ["type", "text", "id", "opt4", "placeholder", "Option B", "name", "b", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "opt4", "placeholder", "Option C", "name", "c", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "opt4", "placeholder", "Option D", "name", "d", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "cropt"], ["type", "text", "id", "cropt", "placeholder", "correct answer", "name", "correct", 1, "form-control", 2, "border-color", "green", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], ["type", "button", "ng-click", "reset_input()", 1, "btn", "btn-danger", 2, "margin-left", "10px"]],
      template: function AddquestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ADD Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquestionComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.addques_ob.courseselected = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddquestionComponent_option_12_Template, 2, 1, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Question Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquestionComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.addques_ob.qno = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquestionComponent_Template_textarea_ngModelChange_20_listener($event) {
            return ctx.addques_ob.question = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Option A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquestionComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.addques_ob.a = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Option B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquestionComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.addques_ob.b = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Option C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquestionComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.addques_ob.c = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Option D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquestionComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.addques_ob.d = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Correct Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquestionComponent_Template_input_ngModelChange_41_listener($event) {
            return ctx.addques_ob.correct = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddquestionComponent_Template_button_click_42_listener() {
            return ctx.add_question();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "+ ADD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addques_ob.courseselected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.course_ob);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addques_ob.qno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addques_ob.question);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addques_ob.a);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addques_ob.b);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addques_ob.c);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addques_ob.d);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addques_ob.correct);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: [".bg[_ngcontent-%COMP%]{\r\n     \r\n    background-repeat: no-repeat;\r\n    width:100%;\r\n    height:100vh;\r\n}\r\n.form[_ngcontent-%COMP%]{\r\n    border:1px solid black;\r\n    padding:50px 60px;\r\n    margin-top:25%;\r\n    background-color: white;\r\nbox-shadow: 14px 8px 15px -5px rgba(0,0,0,0.75);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHF1ZXN0aW9uL2FkZHF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7QUFHM0IsK0NBQStDO0FBQy9DIiwiZmlsZSI6ImFkZHF1ZXN0aW9uL2FkZHF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxufVxyXG4uZm9ybXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOjUwcHggNjBweDtcclxuICAgIG1hcmdpbi10b3A6MjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDE0cHggOHB4IDE1cHggLTVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4tbW96LWJveC1zaGFkb3c6IDE0cHggOHB4IDE1cHggLTVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5ib3gtc2hhZG93OiAxNHB4IDhweCAxNXB4IC01cHggcmdiYSgwLDAsMCwwLjc1KTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddquestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addquestion',
          templateUrl: './addquestion.component.html',
          styleUrls: ['./addquestion.component.css']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _dash_ad_content_dash_ad_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dash-ad-content/dash-ad-content.component */
    "./src/app/dash-ad-content/dash-ad-content.component.ts");
    /* harmony import */


    var _dashboardadmin_dashboardadmin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboardadmin/dashboardadmin.component */
    "./src/app/dashboardadmin/dashboardadmin.component.ts");
    /* harmony import */


    var _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./addcourse/addcourse.component */
    "./src/app/addcourse/addcourse.component.ts");
    /* harmony import */


    var _addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./addquestion/addquestion.component */
    "./src/app/addquestion/addquestion.component.ts");
    /* harmony import */


    var _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./exampage/exampage.component */
    "./src/app/exampage/exampage.component.ts");
    /* harmony import */


    var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./instructions/instructions.component */
    "./src/app/instructions/instructions.component.ts");
    /* harmony import */


    var _submitexam_submitexam_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./submitexam/submitexam.component */
    "./src/app/submitexam/submitexam.component.ts");
    /* harmony import */


    var _showresult_showresult_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./showresult/showresult.component */
    "./src/app/showresult/showresult.component.ts");
    /* harmony import */


    var _resultstudents_resultstudents_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./resultstudents/resultstudents.component */
    "./src/app/resultstudents/resultstudents.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }, //children routes forstudent dashboard
    {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      children: [{
        path: '',
        component: _dash_ad_content_dash_ad_content_component__WEBPACK_IMPORTED_MODULE_6__["DashAdContentComponent"]
      }, {
        path: 'history',
        component: _resultstudents_resultstudents_component__WEBPACK_IMPORTED_MODULE_14__["ResultstudentsComponent"]
      }, {
        path: 'dashadcontent',
        component: _dash_ad_content_dash_ad_content_component__WEBPACK_IMPORTED_MODULE_6__["DashAdContentComponent"]
      }]
    }, {
      path: 'signup/home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'login/signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }, // { path: 'dashboardadmin/', component: DashAdContentComponent },
    //added children routes for admin dashboard contents
    {
      path: 'dashboardadmin',
      component: _dashboardadmin_dashboardadmin_component__WEBPACK_IMPORTED_MODULE_7__["DashboardadminComponent"],
      children: [{
        path: '',
        component: _dash_ad_content_dash_ad_content_component__WEBPACK_IMPORTED_MODULE_6__["DashAdContentComponent"]
      }, {
        path: 'dashadcontent',
        component: _dash_ad_content_dash_ad_content_component__WEBPACK_IMPORTED_MODULE_6__["DashAdContentComponent"]
      }, {
        path: 'addcourse',
        component: _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_8__["AddcourseComponent"]
      }, {
        path: 'history',
        component: _resultstudents_resultstudents_component__WEBPACK_IMPORTED_MODULE_14__["ResultstudentsComponent"]
      }, {
        path: 'addquestion',
        component: _addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_9__["AddquestionComponent"]
      }, {
        path: 'quiz',
        component: _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_10__["ExampageComponent"]
      }]
    }, {
      path: 'instruction',
      component: _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_11__["InstructionsComponent"]
    }, //added the path for exam component becase when in instruction path is instruction/ now from here you are going to some other component
    //but if you don't want to do that please create a new comp as children of instruction
    {
      path: 'exam',
      component: _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_10__["ExampageComponent"]
    }, {
      path: 'submit',
      component: _submitexam_submitexam_component__WEBPACK_IMPORTED_MODULE_12__["SubmitexamComponent"],
      children: [{
        path: 'showre',
        component: _showresult_showresult_component__WEBPACK_IMPORTED_MODULE_13__["ShowresultComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'online-quiz-system';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: provideConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "provideConfig", function () {
      return provideConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dash_ad_content_dash_ad_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dash-ad-content/dash-ad-content.component */
    "./src/app/dash-ad-content/dash-ad-content.component.ts");
    /* harmony import */


    var _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./addcourse/addcourse.component */
    "./src/app/addcourse/addcourse.component.ts");
    /* harmony import */


    var _addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./addquestion/addquestion.component */
    "./src/app/addquestion/addquestion.component.ts");
    /* harmony import */


    var _dashboardadmin_dashboardadmin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dashboardadmin/dashboardadmin.component */
    "./src/app/dashboardadmin/dashboardadmin.component.ts");
    /* harmony import */


    var _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./exampage/exampage.component */
    "./src/app/exampage/exampage.component.ts");
    /* harmony import */


    var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./instructions/instructions.component */
    "./src/app/instructions/instructions.component.ts");
    /* harmony import */


    var _submitexam_submitexam_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./submitexam/submitexam.component */
    "./src/app/submitexam/submitexam.component.ts");
    /* harmony import */


    var _showresult_showresult_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./showresult/showresult.component */
    "./src/app/showresult/showresult.component.ts");
    /* harmony import */


    var _resultstudents_resultstudents_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./resultstudents/resultstudents.component */
    "./src/app/resultstudents/resultstudents.component.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js"); //Get client ID from google and facebook 


    var google_client_ID = "574857836985-p92fk9vuhlrpngfo8587ot7v236deg08.apps.googleusercontent.com";
    var facebook_client_ID = "619214815604389";
    var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthServiceConfig"]([{
      id: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["GoogleLoginProvider"].PROVIDER_ID,
      provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["GoogleLoginProvider"](google_client_ID)
    }, {
      id: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["FacebookLoginProvider"].PROVIDER_ID,
      provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["FacebookLoginProvider"](facebook_client_ID)
    }]);

    function provideConfig() {
      return config;
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthServiceConfig"],
        useFactory: provideConfig
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _dashboardadmin_dashboardadmin_component__WEBPACK_IMPORTED_MODULE_13__["DashboardadminComponent"], _dash_ad_content_dash_ad_content_component__WEBPACK_IMPORTED_MODULE_10__["DashAdContentComponent"], _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_11__["AddcourseComponent"], _addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_12__["AddquestionComponent"], _dashboardadmin_dashboardadmin_component__WEBPACK_IMPORTED_MODULE_13__["DashboardadminComponent"], _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_14__["ExampageComponent"], _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__["InstructionsComponent"], _submitexam_submitexam_component__WEBPACK_IMPORTED_MODULE_16__["SubmitexamComponent"], _showresult_showresult_component__WEBPACK_IMPORTED_MODULE_17__["ShowresultComponent"], _resultstudents_resultstudents_component__WEBPACK_IMPORTED_MODULE_18__["ResultstudentsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _dashboardadmin_dashboardadmin_component__WEBPACK_IMPORTED_MODULE_13__["DashboardadminComponent"], _dash_ad_content_dash_ad_content_component__WEBPACK_IMPORTED_MODULE_10__["DashAdContentComponent"], _addcourse_addcourse_component__WEBPACK_IMPORTED_MODULE_11__["AddcourseComponent"], _addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_12__["AddquestionComponent"], _dashboardadmin_dashboardadmin_component__WEBPACK_IMPORTED_MODULE_13__["DashboardadminComponent"], _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_14__["ExampageComponent"], _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__["InstructionsComponent"], _submitexam_submitexam_component__WEBPACK_IMPORTED_MODULE_16__["SubmitexamComponent"], _showresult_showresult_component__WEBPACK_IMPORTED_MODULE_17__["ShowresultComponent"], _resultstudents_resultstudents_component__WEBPACK_IMPORTED_MODULE_18__["ResultstudentsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"]],
          providers: [{
            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthServiceConfig"],
            useFactory: provideConfig
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dash-ad-content/dash-ad-content.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/dash-ad-content/dash-ad-content.component.ts ***!
    \**************************************************************/

  /*! exports provided: DashAdContentComponent */

  /***/
  function srcAppDashAdContentDashAdContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashAdContentComponent", function () {
      return DashAdContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DashAdContentComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashAdContentComponent_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var p_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.rules(p_r2.coursename);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", p_r2._id, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r2.coursename);
      }
    }

    function DashAdContentComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashAdContentComponent_div_13_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var p_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.rules(p_r5.coursename);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", p_r5._id, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.coursename);
      }
    }

    var DashAdContentComponent = /*#__PURE__*/function () {
      function DashAdContentComponent(ds, router) {
        _classCallCheck(this, DashAdContentComponent);

        this.ds = ds;
        this.router = router;
      }

      _createClass(DashAdContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          //this is storing the data that we got in the data service to getobj
          this.ds.getallcourse().subscribe(function (data) {
            _this3.getobj = data;
          }); // console.log(this.getobj)
          // this.getspecificobj=this.getobj;
          // console.log(this.getobj.coursename);
          // this.ds.getspecificcourse(this.getobj).subscribe((data) => {this.getspecificobj = data;});
        }
      }, {
        key: "rules",
        value: function rules(obj) {
          console.log("Hello " + obj); // var p = { courseid: obj };

          this.router.navigate(['instruction'], {
            queryParams: {
              quizdetails: obj
            }
          }); //console.log(p);
        }
      }]);

      return DashAdContentComponent;
    }();

    DashAdContentComponent.ɵfac = function DashAdContentComponent_Factory(t) {
      return new (t || DashAdContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    DashAdContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashAdContentComponent,
      selectors: [["app-dash-ad-content"]],
      decls: 14,
      vars: 2,
      consts: [[1, "container", 2, "background-color", "transparent", "margin-left", "20%"], [2, "text-align", "center"], [1, "row"], ["class", " col-md-3", "data-toggle", "modal", "data-target", ".html_quiz", "style", "margin-top:1%;", 3, "click", 4, "ngFor", "ngForOf"], ["data-toggle", "modal", "data-target", ".html_quiz", 1, "col-md-3", 2, "margin-top", "1%", 3, "click"], [1, "rounded", "imgp", 2, "display", "inline-block", "height", "210px"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-text", 2, "text-align", "center", "font-size", "20px"]],
      template: function DashAdContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Web-dev quizes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashAdContentComponent_div_5_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Genral Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashAdContentComponent_div_13_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getobj);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getobj);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".imgp[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n    -webkit-filter:grayscale(0%);\r\n            filter:grayscale(0%);\r\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.8);\r\n\r\n}\r\n\r\n.imgp[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n -webkit-filter:grayscale(100%);\r\n         filter:grayscale(100%);\r\n transform:scale(1.05,1.05);\r\n box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\r\n\r\n\r\n transition: all 300ms;\r\n transition-timing-function:ease-in-out;\r\n}\r\n\r\n.bx_sh[_ngcontent-%COMP%]{\r\n box-shadow: 0 2px 6px 0 rgba(0,0,0,0.8);\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtYWQtY29udGVudC9kYXNoLWFkLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0dBQ0c7SUFDQyxtQkFBbUI7SUFDbkIsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQix1Q0FBdUM7O0FBRTNDOztBQUVBO0lBQ0ksZUFBZTtDQUNsQiw4QkFBc0I7U0FBdEIsc0JBQXNCO0NBQ3RCLDBCQUEwQjtDQUMxQix1Q0FBdUM7OztDQUd2QyxxQkFBcUI7Q0FDckIsc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0MsdUNBQXVDOztBQUV4QyIsImZpbGUiOiJkYXNoLWFkLWNvbnRlbnQvZGFzaC1hZC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgLmltZ3B7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZmlsdGVyOmdyYXlzY2FsZSgwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsMCwwLDAuOCk7XHJcblxyXG59XHJcblxyXG4uaW1ncDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuIGZpbHRlcjpncmF5c2NhbGUoMTAwJSk7XHJcbiB0cmFuc2Zvcm06c2NhbGUoMS4wNSwxLjA1KTtcclxuIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC44KTtcclxuXHJcblxyXG4gdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5ieF9zaHtcclxuIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwwLDAsMC44KTtcclxuXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashAdContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dash-ad-content',
          templateUrl: './dash-ad-content.component.html',
          styleUrls: ['./dash-ad-content.component.css']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DashboardComponent = /*#__PURE__*/function () {
      //property route of type ActivatedRoute to receive the data sent from the signup component
      function DashboardComponent(route, ds) {
        _classCallCheck(this, DashboardComponent);

        this.route = route;
        this.ds = ds;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          // receive the data sent from the signup component through queryparam in navigate
          //queryParamMap is used to receive the data sent from any component
          this.route.queryParamMap.subscribe(function (data) {
            //JSON.parse is used to convert the received string again into JSON object
            _this4.stuinfo_dashboard = JSON.parse(data.get('stuinfo_signup')); //just to check if stu info is stored successfully in the object

            console.log(_this4.stuinfo_dashboard);
          });
        }
      }, {
        key: "openNav",
        value: function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 174,
      vars: 1,
      consts: [[1, "navbar", "navbar-expand-lg", "bg_nav", "navbar-dark", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0", "hov", 2, "border", "1px solid white", "border-radius", "4px", "text-align", "center"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "form-inline", "my-2", "my-lg-0"], ["href", "#", 1, "nav-link", "btn", "btn-outline-danger", 2, "color", "white"], ["id", "mySidenav", 1, "sidenav"], [1, "pimg"], ["src", "../../assets/images/icon/avatar-02.jpg", "alt", "jhon", 1, "prof"], [2, "margin-left", "50px"], ["href", "#"], [1, "fa", 2, "font-size", "20px"], [1, "fa", "fa-money", 2, "font-size", "20px"], ["routerLink", "history"], [1, "fa", "fa-history", 2, "font-size", "20px"], [1, "fa", "fa-globe", 2, "font-size", "20px"], ["onclick", "openNav()", 1, "nav-link", "btn", "btn-outline-secondary", 2, "color", "white", "border-color", "white"], [2, "margin-left", "25%"], [2, "margin-left", "20%"], [1, "container"], [1, "col-md-6"], [2, "text-align", "center"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "database_quiz"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "card", "text-center"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-success"], [1, "card-footer", "text-muted"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "js_quiz"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "ds_quiz"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "lg_quiz"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "an_quiz"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "quants_quiz"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xA0\xA0\xA0\xA0\xA0Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uF0E4\xA0\xA0 Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\xA0\xA0Subscriptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\xA0\xA0History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\xA0\xA0Global Rank");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\uF2BE\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "router-outlet", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "footer", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "copyright \xA9 Quizio - 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Database Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Javascript Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Data-Structures Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Logical-Reasoning Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Analytical-Reasoning Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Quants Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx.stuinfo_dashboard.lname, " Ji");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    margin: 0px;\r\n    background-color: darkslategrey;\r\n\r\n  }\r\n  \r\n  .sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n   margin-top: 4%;\r\n   \r\n    width: 20%;\r\n    \r\n    position: fixed;\r\n    z-index: -3;\r\n    top: 0;\r\n    left: 0;\r\n    background-image: linear-gradient(to bottom,grey,darkslategrey);\r\n    \r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    opacity: 2.0;\r\n\r\n\r\n  }\r\n  \r\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #cccc;\r\n    display: block;\r\n    transition: 0.3s;\r\n    \r\n\r\n  }\r\n  \r\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  \r\n  \r\n  .pimg[_ngcontent-%COMP%]{\r\n       border-radius: 50%;\r\n       width:200px;\r\n       margin-top:30px;\r\n       color:white;\r\n\r\n   }\r\n  \r\n  .prof[_ngcontent-%COMP%]{\r\n    border-radius: 70%;\r\n    height:150px;\r\n    margin-left:45px;\r\n    margin-bottom:40px;\r\n    display:inline-block;\r\n    box-shadow: 2px 2px 4px 0 salmon;\r\n\r\n   }\r\n  \r\n  .prof[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.8);\r\n    cursor: pointer;\r\n\r\n   }\r\n  \r\n  .imgp[_ngcontent-%COMP%]{\r\n       border-radius: 10px;\r\n       -webkit-filter:grayscale(100%);\r\n               filter:grayscale(100%);\r\n       box-shadow: 0 2px 6px 0 rgba(0,0,0,0.8);\r\n\r\n   }\r\n  \r\n  .imgp[_ngcontent-%COMP%]:hover{\r\n       cursor: pointer;\r\n    -webkit-filter:grayscale(0%);\r\n            filter:grayscale(0%);\r\n    transform:scale(1.05,1.05);\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\r\n\r\n   \r\n    transition: all 300ms;\r\n    transition-timing-function:ease-in-out;\r\n}\r\n  \r\n  .bx_sh[_ngcontent-%COMP%]{\r\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.8);\r\n\r\n}\r\n  \r\n  .carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n  \r\n  .bg_nav[_ngcontent-%COMP%]{\r\nbackground-image: linear-gradient(to bottom,grey,darkslategrey);\r\ncolor:white;\r\nz-index: 4;\r\n}\r\n  \r\n  .hov[_ngcontent-%COMP%]:hover{\r\n  background-color:darkslategray;\r\n\r\n  transition: all 300ms;\r\n    transition-timing-function:ease-in-out;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsK0JBQStCOztFQUVqQzs7RUFFQTtJQUNFLFlBQVk7R0FDYixjQUFjOztJQUViLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLCtEQUErRDtJQUMvRCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZOzs7RUFHZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCOzs7RUFHbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOzs7Ozs7OztLQVFHOztFQUVIO09BQ0ssa0JBQWtCO09BQ2xCLFdBQVc7T0FDWCxlQUFlO09BQ2YsV0FBVzs7R0FFZjs7RUFDQTtJQUNDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0NBQWdDOztHQUVqQzs7RUFDQTtJQUNDLHVDQUF1QztJQUN2QyxlQUFlOztHQUVoQjs7RUFFQTtPQUNJLG1CQUFtQjtPQUNuQiw4QkFBc0I7ZUFBdEIsc0JBQXNCO09BQ3RCLHVDQUF1Qzs7R0FFM0M7O0VBRUE7T0FDSSxlQUFlO0lBQ2xCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLHVDQUF1Qzs7O0lBR3ZDLHFCQUFxQjtJQUNyQixzQ0FBc0M7QUFDMUM7O0VBRUE7SUFDSSx1Q0FBdUM7O0FBRTNDOztFQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7RUFFQTtBQUNBLCtEQUErRDtBQUMvRCxXQUFXO0FBQ1gsVUFBVTtBQUNWOztFQUNBO0VBQ0UsOEJBQThCOztFQUU5QixxQkFBcUI7SUFDbkIsc0NBQXNDOztBQUUxQyIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgIFxyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIC8qIHdpZHRoOiAwcHg7ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAtMztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLGdyZXksZGFya3NsYXRlZ3JleSk7XHJcbiAgICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICBvcGFjaXR5OiAyLjA7XHJcblxyXG5cclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICNjY2NjO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgXHJcblxyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAvKiAuc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGNvbG9yOmZsb3JhbHdoaXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9ICovXHJcblxyXG4gIC5waW1ne1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgIH1cclxuICAgLnByb2Z7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MCU7XHJcbiAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDo0NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAwIHNhbG1vbjtcclxuXHJcbiAgIH1cclxuICAgLnByb2Y6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICB9XHJcblxyXG4gICAuaW1ncHtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICBmaWx0ZXI6Z3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLDAsMCwwLjgpO1xyXG5cclxuICAgfVxyXG5cclxuICAgLmltZ3A6aG92ZXJ7XHJcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmaWx0ZXI6Z3JheXNjYWxlKDAlKTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1LDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjgpO1xyXG5cclxuICAgXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJ4X3Noe1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLDAsMCwwLjgpO1xyXG5cclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmdfbmF2e1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLGdyZXksZGFya3NsYXRlZ3JleSk7XHJcbmNvbG9yOndoaXRlO1xyXG56LWluZGV4OiA0O1xyXG59XHJcbi5ob3Y6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpkYXJrc2xhdGVncmF5O1xyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtcclxuXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboardadmin/dashboardadmin.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/dashboardadmin/dashboardadmin.component.ts ***!
    \************************************************************/

  /*! exports provided: DashboardadminComponent */

  /***/
  function srcAppDashboardadminDashboardadminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardadminComponent", function () {
      return DashboardadminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DashboardadminComponent = /*#__PURE__*/function () {
      function DashboardadminComponent(route) {
        _classCallCheck(this, DashboardadminComponent);

        this.route = route;
        this.socialuserinfo = {
          'userprofilepic': localStorage.getItem('userpic'),
          'userprofilename': localStorage.getItem('userName')
        };
      }

      _createClass(DashboardadminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.queryParamMap.subscribe(function (data) {
            _this5.admin_info = JSON.parse(data.get('stuinfo_signup'));
            console.log(_this5.admin_info);
          });
        }
      }]);

      return DashboardadminComponent;
    }();

    DashboardadminComponent.ɵfac = function DashboardadminComponent_Factory(t) {
      return new (t || DashboardadminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    DashboardadminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardadminComponent,
      selectors: [["app-dashboardadmin"]],
      decls: 201,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-lg", "bg_nav", "navbar-dark", "fixed-top", 2, "z-index", "2"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0", "hov", 2, "border", "1px solid white", "border-radius", "4px", "text-align", "center"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "form-inline", "my-2", "my-lg-0"], ["href", "#", 1, "nav-link", "btn", "btn-outline-danger", 2, "color", "white"], ["id", "mySidenav", 1, "sidenav"], [1, "pimg"], ["alt", "jhon", 1, "prof", 3, "src"], ["routerLink", "dashadcontent"], [1, "fa", 2, "font-size", "20px"], ["routerLink", "addcourse"], [1, "fa", "fa-money", 2, "font-size", "20px"], ["routerLink", "addquestion"], [1, "fa", "fa-history", 2, "font-size", "20px"], ["routerLink", "history"], [1, "fa", "fa-globe", 2, "font-size", "20px"], ["routerLink", ""], ["onclick", "openNav()", 1, "nav-link", "btn", "btn-outline-secondary", 2, "color", "white", "border-color", "white"], [2, "margin-left", "25%"], [1, "jumbotron", "jumbotron-fluid", 2, "margin-left", "20%"], [1, "container"], [1, "col-md-6"], [2, "margin-left", "20%"], [2, "text-align", "center"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "html_quiz"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "card", "text-center"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["routerLink", "quiz", 1, "btn", "btn-success"], [1, "card-footer", "text-muted"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "database_quiz"], ["href", "#", 1, "btn", "btn-success"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "js_quiz"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "ds_quiz"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "lg_quiz"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "an_quiz"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "quants_quiz"]],
      template: function DashboardadminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uF0E4\xA0\xA0 Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\xA0\xA0Add-Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\xA0\xA0Add-Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\xA0\xA0Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\xA0\xA0Global Ranks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\uF2BE\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "router-outlet", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "footer", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "copyright \xA9 Quizio - 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Html & Css quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Database Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Javascript Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h5", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Data-Structures Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Logical-Reasoning Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h5", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Analytical-Reasoning Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h5", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Quants Quiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h5", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Time provided - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.socialuserinfo.userprofilepic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", ctx.socialuserinfo.userprofilename, "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n  margin: 0px;\r\n  background-color: darkslategrey;\r\n\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  margin-top: 4%;\r\n \r\n  width: 20%;\r\n  \r\n  position: fixed;\r\n  z-index: 0;\r\n  top: 0;\r\n  left: 0;\r\n  background-image: linear-gradient(to bottom,grey,darkslategrey);\r\n  \r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n  opacity: 2.0;\r\n\r\n\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\r\n  padding: 8px 8px 8px 32px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #cccc;\r\n  display: block;\r\n  transition: 0.3s;\r\n  \r\n\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.pimg[_ngcontent-%COMP%]{\r\n     border-radius: 50%;\r\n     width:250px;\r\n     margin-top:30px;\r\n     color:white;\r\n\r\n }\r\n\r\n.prof[_ngcontent-%COMP%]{\r\n  border-radius: 70%;\r\n  height:150px;\r\n  margin-left:45px;\r\n  margin-bottom:40px;\r\n  display:inline-block;\r\n  box-shadow: 2px 2px 4px 0 salmon;\r\n\r\n }\r\n\r\n.prof[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.8);\r\n  cursor: pointer;\r\n\r\n }\r\n\r\n.imgp[_ngcontent-%COMP%]{\r\n     border-radius: 10px;\r\n     -webkit-filter:grayscale(100%);\r\n             filter:grayscale(100%);\r\n     box-shadow: 0 2px 6px 0 rgba(0,0,0,0.8);\r\n\r\n }\r\n\r\n.imgp[_ngcontent-%COMP%]:hover{\r\n     cursor: pointer;\r\n  -webkit-filter:grayscale(0%);\r\n          filter:grayscale(0%);\r\n  transform:scale(1.05,1.05);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\r\n\r\n \r\n  transition: all 300ms;\r\n  transition-timing-function:ease-in-out;\r\n}\r\n\r\n.bx_sh[_ngcontent-%COMP%]{\r\n  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.8);\r\n\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\n.bg_nav[_ngcontent-%COMP%]{\r\nbackground-image: linear-gradient(to bottom,grey,darkslategrey);\r\ncolor:white;\r\n}\r\n\r\n.hov[_ngcontent-%COMP%]:hover{\r\nbackground-color:darkslategray;\r\n\r\ntransition: all 300ms;\r\n  transition-timing-function:ease-in-out;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZGFkbWluL2Rhc2hib2FyZGFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLCtCQUErQjs7QUFFakM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYzs7RUFFZCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCwrREFBK0Q7RUFDL0Qsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTs7O0FBR2Q7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7OztBQUdsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7S0FDSyxrQkFBa0I7S0FDbEIsV0FBVztLQUNYLGVBQWU7S0FDZixXQUFXOztDQUVmOztBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQ0FBZ0M7O0NBRWpDOztBQUNBO0VBQ0MsdUNBQXVDO0VBQ3ZDLGVBQWU7O0NBRWhCOztBQUVBO0tBQ0ksbUJBQW1CO0tBQ25CLDhCQUFzQjthQUF0QixzQkFBc0I7S0FDdEIsdUNBQXVDOztDQUUzQzs7QUFFQTtLQUNJLGVBQWU7RUFDbEIsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsdUNBQXVDOzs7RUFHdkMscUJBQXFCO0VBQ3JCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVDQUF1Qzs7QUFFekM7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaOztBQUVBO0FBQ0EsK0RBQStEO0FBQy9ELFdBQVc7QUFDWDs7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUIscUJBQXFCO0VBQ25CLHNDQUFzQzs7QUFFeEMiLCJmaWxlIjoiZGFzaGJvYXJkYWRtaW4vZGFzaGJvYXJkYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG5cclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxuIFxyXG4gIHdpZHRoOiAyMCU7XHJcbiAgLyogd2lkdGg6IDBweDsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLGdyZXksZGFya3NsYXRlZ3JleSk7XHJcbiAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgb3BhY2l0eTogMi4wO1xyXG5cclxuXHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG5cclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICNjY2NjO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgXHJcblxyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLyogLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBjb2xvcjpmbG9yYWx3aGl0ZTtcclxuICB6LWluZGV4OiAyO1xyXG59ICovXHJcblxyXG4ucGltZ3tcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgd2lkdGg6MjUwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgIGNvbG9yOndoaXRlO1xyXG5cclxuIH1cclxuIC5wcm9me1xyXG4gIGJvcmRlci1yYWRpdXM6IDcwJTtcclxuICBoZWlnaHQ6MTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NDVweDtcclxuICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMCBzYWxtb247XHJcblxyXG4gfVxyXG4gLnByb2Y6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLDAsMCwwLjgpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiB9XHJcblxyXG4gLmltZ3B7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBmaWx0ZXI6Z3JheXNjYWxlKDEwMCUpO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwwLDAsMC44KTtcclxuXHJcbiB9XHJcblxyXG4gLmltZ3A6aG92ZXJ7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZpbHRlcjpncmF5c2NhbGUoMCUpO1xyXG4gIHRyYW5zZm9ybTpzY2FsZSgxLjA1LDEuMDUpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC44KTtcclxuXHJcbiBcclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5ieF9zaHtcclxuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsMCwwLDAuOCk7XHJcblxyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIgaW1nIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJnX25hdntcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxncmV5LGRhcmtzbGF0ZWdyZXkpO1xyXG5jb2xvcjp3aGl0ZTtcclxufVxyXG4uaG92OmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmRhcmtzbGF0ZWdyYXk7XHJcblxyXG50cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XHJcblxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardadminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboardadmin',
          templateUrl: './dashboardadmin.component.html',
          styleUrls: ['./dashboardadmin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      //create a new property http of HttpClient to access the server
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
      } //define the function which posts or sends data to server and returns the response


      _createClass(DataService, [{
        key: "stu_register",
        value: function stu_register(stuinfo_obj) {
          return this.http.post("http://localhost:3000/api/register", stuinfo_obj);
        }
      }, {
        key: "stu_login",
        value: function stu_login(logininfo_ob) {
          return this.http.post("http://localhost:3000/api/login", logininfo_ob);
        }
      }, {
        key: "AddCourseData",
        value: function AddCourseData(course_ob) {
          return this.http.post("http://localhost:3000/api/addcourse", course_ob);
        }
      }, {
        key: "AddQuestion",
        value: function AddQuestion(ques_ob) {
          return this.http.post("http://localhost:3000/api/addquestion", ques_ob);
        }
      }, {
        key: "AddExamTaken",
        value: function AddExamTaken(exam_ob) {
          return this.http.post("http://localhost:3000/api/addexam", exam_ob);
        } //to get all the course thos function is being used

      }, {
        key: "getallcourse",
        value: function getallcourse() {
          return this.http.get('http://localhost:3000/api/adcontent');
        }
      }, {
        key: "google_auth",
        value: function google_auth() {
          return this.http.get('http://localhost:3000/api/googleauth');
        } // getallhistoy():Observable<reshistory[]>
        // {
        //   // return this.http.get<reshistory[]>('http://localhost:3000/api/reshistory');
        //   return this.http.get<reshistory[]>('http://localhost:3000/api/rer');
        // }

      }, {
        key: "getallhistoy",
        value: function getallhistoy(getstudent) {
          // return this.http.get<reshistory[]>('http://localhost:3000/api/reshistory');
          return this.http.post('http://localhost:3000/api/rer', getstudent);
        } //func to get only single object

      }, {
        key: "getspecificcourse",
        value: function getspecificcourse(getcourse) {
          return this.http.post('http://localhost:3000/api/specificcourse', getcourse);
        } //Get course info for to add questions

      }, {
        key: "getcourseforquestion",
        value: function getcourseforquestion() {
          return this.http.get('http://localhost:3000/api/adcontent');
        } //Insert result in database

      }, {
        key: "submitresult",
        value: function submitresult(res_arr) {
          return this.http.post('http://localhost:3000/api/result', res_arr);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/exampage/exampage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/exampage/exampage.component.ts ***!
    \************************************************/

  /*! exports provided: ExampageComponent */

  /***/
  function srcAppExampageExampageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampageComponent", function () {
      return ExampageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _model_form_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/form.model */
    "./src/app/model/form.model.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ExampageComponent = /*#__PURE__*/function () {
      function ExampageComponent(route, ds, router) {
        _classCallCheck(this, ExampageComponent);

        this.route = route;
        this.ds = ds;
        this.router = router;
        this.stu_option = new _model_form_model__WEBPACK_IMPORTED_MODULE_2__["studentoption"]();
        this.quesarray = [];
        this.result = []; //array to store result
      }

      _createClass(ExampageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          var i; //receive all questions  

          this.route.queryParamMap.subscribe(function (data) {
            _this6.questions_obj = JSON.parse(data.get('course_questions'));
          });
          console.log(this.questions_obj);
          this.quesarray = this.questions_obj.Questions;
          console.log(this.quesarray);
          console.log(this.quesarray.length);

          for (i = 0; i < this.quesarray.length; i++) {
            if (this.quesarray[i].qno == 1) {
              this.firstques = this.quesarray[i];
              console.log(this.firstques);
            } else {
              console.log("Please ask admmin to add ques to this course..");
            }
          }
        }
      }, {
        key: "prev",
        value: function prev(qno) {
          var i = qno;
          i = i - 1;
          this.firstques = this.quesarray[i - 1];
        }
      }, {
        key: "next",
        value: function next(qno) {
          var restform = document.getElementById('quesfrm');
          var j = qno; //j = 1 for 1st iteration

          if (j < this.quesarray.length) {
            if (this.stu_option.optn == this.quesarray[j - 1].correct) {
              this.result[j - 1] = 1;
            } else {
              this.result[j - 1] = 0;
            }

            console.log(this.result);
            j = j + 1;
            this.firstques = this.quesarray[j - 1];
            restform.reset();
          } else {
            if (this.stu_option.optn == this.quesarray[j - 1].correct) {
              this.result[j - 1] = 1;
            } else {
              this.result[j - 1] = 0;
            }

            console.log(this.result);
            var r = {
              resultarray: this.result
            };
            this.router.navigate(['submit'], {
              queryParams: {
                res: JSON.stringify(r),
                ques: JSON.stringify(this.questions_obj)
              }
            });
          } //check if the selected option was correct or not

        }
      }]);

      return ExampageComponent;
    }();

    ExampageComponent.ɵfac = function ExampageComponent_Factory(t) {
      return new (t || ExampageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ExampageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampageComponent,
      selectors: [["app-exampage"]],
      decls: 32,
      vars: 10,
      consts: [[1, "jumbotron", 2, "margin-top", "4%"], [1, "display-4"], [1, "lead"], [1, "my-4"], ["id", "quesfrm"], ["quesoptions", "ngForm"], ["name", "optn", "type", "radio", "value", "a", 3, "ngModel", "ngModelChange"], ["name", "optn", "type", "radio", "value", "b", 3, "ngModel", "ngModelChange"], ["name", "optn", "type", "radio", "value", "c", 3, "ngModel", "ngModelChange"], ["name", "optn", "type", "radio", "value", "d", 3, "ngModel", "ngModelChange"], ["role", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"]],
      template: function ExampageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampageComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.stu_option.optn = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampageComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.stu_option.optn = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampageComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.stu_option.optn = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampageComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.stu_option.optn = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampageComponent_Template_a_click_27_listener() {
            return ctx.prev(ctx.firstques.qno);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\xAB Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampageComponent_Template_a_click_30_listener() {
            return ctx.next(ctx.firstques.qno);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Next \xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q. No. ", ctx.firstques.qno, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstques.question);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu_option.optn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.firstques.a, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu_option.optn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.firstques.b, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu_option.optn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.firstques.c, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu_option.optn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.firstques.d, "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGFnZS9leGFtcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exampage',
          templateUrl: './exampage.component.html',
          styleUrls: ['./exampage.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login_page",
        value: function login_page() {
          this.router.navigate(['login']);
        }
      }, {
        key: "signup_page",
        value: function signup_page() {
          this.router.navigate(['signup']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 78,
      vars: 0,
      consts: [[1, "flex-container1"], [1, "div-logo"], [1, "div-head"], [1, "logo"], [1, "div-content"], [1, "top-heading"], ["type", "button", 1, "btn-knowmore"], ["href", "#content", 1, "a-knowmore"], [1, "break"], [1, "div-login"], ["type", "button", 1, "btn-login", 3, "click"], ["type", "button", 1, "btn-signup", 3, "click"], ["id", "content", 1, "flex-container2"], [1, "fc2-text"], [1, "btn-fc2"], ["href", "login.html"], [1, "fc2-image"], ["src", "../../assets/images/bg.jpg", "height", "300px", "width", "300px"], [1, "flex-container3"], [1, "fc3-image"], [1, "fc3-text"], [1, "btn-fc3"], [1, "flex-container4"], [1, "fc4-text"], [1, "btn-fc4"], [1, "fc4-image"], ["href", "#top", "id", "top-link"], [1, "fa", "fa-arrow-up", "icon-top", 2, "font-size", "20px"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "QUIZIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Don't Stress. Do Your Best. Forget The Rest.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Let's Discover");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_13_listener() {
            return ctx.login_page();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() {
            return ctx.signup_page();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "A Simple and Easy Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "This platform for giving online quizes is designed in a very simple manner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "This platform for giving online quizes is designed in a very simple manner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "This platform for giving online quizes is designed in a very simple manner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "This platform for giving online quizes is designed in a very simple manner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Want to explore? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "A Simple and Easy Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "This platform for giving online quizes is designed in a very simple manner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "This platform for giving online quizes is designed in a very simple manner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "This platform for giving online quizes is designed in a very simple manner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "This platform for giving online quizes is designed in a very simple manner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Want to explore? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "A Simple and Easy Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "This platform for giving online quizes is designed in a very simple manner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "This platform for giving online quizes is designed in a very simple manner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "This platform for giving online quizes is designed in a very simple manner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "This platform for giving online quizes is designed in a very simple manner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Want to explore? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Back To Top ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin-top: 6px;\r\n    padding: 0px;\r\n}\r\n\r\n@font-face {\r\n    font-family: discover;\r\n    src: url('acid_medium.otf');\r\n}\r\n\r\n@font-face {\r\n    font-family: logo;\r\n    src: url('font-logo.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: tag;\r\n    src: url('tagline.otf');\r\n}\r\n\r\n@font-face {\r\n    font-family: downtext;\r\n    src: url('Quicksand-Regular.otf');\r\n}\r\n\r\n.top[_ngcontent-%COMP%] {\r\n    height: 730px;\r\n    width: 100%;\r\n    background-image: url('bg.jpg');\r\n}\r\n\r\n.top-heading[_ngcontent-%COMP%] {\r\n    font-family: \"tag\";\r\n    color: white;\r\n    padding-top: 40%;\r\n    font-size: 46px;\r\n}\r\n\r\n.flex-container1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    background-image: url('bg.jpg');\r\n}\r\n\r\n.div-logo[_ngcontent-%COMP%] {\r\n    height: 730px;\r\n    width: 30%;\r\n}\r\n\r\n.div-content[_ngcontent-%COMP%] {\r\n    height: 730px;\r\n    width: 50%;\r\n}\r\n\r\n.div-login[_ngcontent-%COMP%] {\r\n    height: 730px;\r\n    width: 20%;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    font-family: 'logo';\r\n    font-size: 50px;\r\n    color: azure;\r\n}\r\n\r\n.div-head[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    padding-top: 20px;\r\n    height: 100px;\r\n    width: 200px;\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%] {\r\n    color: white;\r\n    margin-top: 20px;\r\n    font-size: 20px;\r\n    line-height: 40px;\r\n    height: 50px;\r\n    width: 100px;\r\n    border: 1px solid white;\r\n    background: transparent;\r\n    border-radius: 10px;\r\n}\r\n\r\n.btn-signup[_ngcontent-%COMP%] {\r\n    margin-left: 5%;\r\n    color: white;\r\n    margin-top: 20px;\r\n    font-size: 20px;\r\n    line-height: 40px;\r\n    height: 50px;\r\n    width: 100px;\r\n    border: 1px solid white;\r\n    background: transparent;\r\n    border-radius: 10px;\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%]:hover {\r\n    border: 1px solid red;\r\n    color: red;\r\n    transition: all 300ms linear;\r\n}\r\n\r\n.btn-signup[_ngcontent-%COMP%]:hover {\r\n    border: 1px solid red;\r\n    color: red;\r\n    transition: all 300ms linear;\r\n}\r\n\r\n.a-login[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: white; \r\n}\r\n\r\n.a-login[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    color: red;\r\n    transition: all 300ms linear;\r\n}\r\n\r\n.a-signup[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    color: red;\r\n    transition: all 300ms linear;\r\n}\r\n\r\n.a-signup[_ngcontent-%COMP%] {\r\n    text-decoration: none; \r\n    color: white;\r\n}\r\n\r\n.btn-knowmore[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    margin-left: 40%;\r\n    height: 7%;\r\n    width: 22%;\r\n    background-color: white;\r\n    border: 1px solid white;\r\n    border-radius: 25px;\r\n}\r\n\r\n.btn-knowmore[_ngcontent-%COMP%]:hover {\r\n    background-color: gray;\r\n    transition: all 400ms linear;\r\n}\r\n\r\n.a-knowmore[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: black;\r\n    font-size: 25px;\r\n    font-family: 'discover';\r\n}\r\n\r\n.a-knowmore[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    color: white;\r\n    transition: all 100ms linear;\r\n}\r\n\r\n.downarrow[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 30%;\r\n    padding-top: 60px;\r\n}\r\n\r\n.flex-container2[_ngcontent-%COMP%] {\r\n    height: 30%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: nowrap;\r\n    margin: 8%;\r\n}\r\n\r\n.fc2-text[_ngcontent-%COMP%] {\r\n    margin-right: 10%;\r\n    font-family: 'downtext';\r\n    font-size: 17px;\r\n}\r\n\r\n.btn-fc2[_ngcontent-%COMP%] {\r\n    margin-left: 20%;\r\n    height: 40px;\r\n    width: 250px;\r\n    border: none;\r\n    background-color: lightblue;\r\n    border-radius: 20px;\r\n    opacity: 0.6;\r\n}\r\n\r\n.btn-fc2[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    background-color: #0CD4CD;\r\n    transition: all 400ms linear;\r\n}\r\n\r\n.fc2-image[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n}\r\n\r\n.flex-container3[_ngcontent-%COMP%] {\r\n    height: 30%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: nowrap;\r\n    margin: 8%;\r\n}\r\n\r\n.fc3-text[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n    font-family: 'downtext';\r\n    font-size: 17px;\r\n}\r\n\r\n.btn-fc3[_ngcontent-%COMP%] {\r\n    margin-right: 20%;\r\n    height: 40px;\r\n    width: 250px;\r\n    border: none;\r\n    background-color: lightblue;\r\n    border-radius: 20px;\r\n    opacity: 0.6;\r\n}\r\n\r\n.btn-fc3[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    background-color: #0CD4CD;\r\n    transition: all 400ms linear;\r\n}\r\n\r\n.fc3-image[_ngcontent-%COMP%] {\r\n    margin-right: 10%;\r\n}\r\n\r\n.flex-container4[_ngcontent-%COMP%] {\r\n    height: 30%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: nowrap;\r\n    margin: 8%;\r\n}\r\n\r\n.fc4-text[_ngcontent-%COMP%] {\r\n    margin-right: 10%;\r\n    font-family: 'downtext';\r\n    font-size: 17px;\r\n}\r\n\r\n.btn-fc4[_ngcontent-%COMP%] {\r\n    margin-left: 20%;\r\n    height: 40px;\r\n    width: 250px;\r\n    border: none;\r\n    background-color: lightblue;\r\n    border-radius: 20px;\r\n    opacity: 0.6;\r\n}\r\n\r\n.btn-fc4[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    background-color: #0CD4CD;\r\n    transition: all 400ms linear;\r\n}\r\n\r\n.fc4-image[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n}\r\n\r\n#top-link[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: 50%;\r\n    height: 20px;\r\n    font-size: 20px;\r\n    text-decoration: none;\r\n}\r\n\r\n.icon-top[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    background: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQThDO0FBQ2xEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUE0QztBQUNoRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBMEM7QUFDOUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwrQkFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiwrQkFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IGRpc2NvdmVyO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9Gb250cy9hY2lkX21lZGl1bS5vdGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbG9nbztcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvRm9udHMvZm9udC1sb2dvLnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB0YWc7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL0ZvbnRzL3RhZ2xpbmUub3RmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IGRvd250ZXh0O1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9Gb250cy9RdWlja3NhbmQtUmVndWxhci5vdGYnKTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICBoZWlnaHQ6IDczMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnJyk7XHJcbn1cclxuXHJcbi50b3AtaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogXCJ0YWdcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA0MCU7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lcjEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JnLmpwZycpO1xyXG59XHJcblxyXG4uZGl2LWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA3MzBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5kaXYtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDczMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmRpdi1sb2dpbiB7XHJcbiAgICBoZWlnaHQ6IDczMHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdsb2dvJztcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiBhenVyZTtcclxufVxyXG5cclxuLmRpdi1oZWFkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmJ0bi1sb2dpbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJ0bi1zaWdudXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tbG9naW46aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5idG4tc2lnbnVwOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xyXG59XHJcblxyXG4uYS1sb2dpbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG59XHJcblxyXG4uYS1sb2dpbjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxufVxyXG5cclxuLmEtc2lnbnVwOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xyXG59XHJcblxyXG4uYS1zaWdudXAge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1rbm93bW9yZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBoZWlnaHQ6IDclO1xyXG4gICAgd2lkdGg6IDIyJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uYnRuLWtub3dtb3JlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgbGluZWFyO1xyXG59XHJcblxyXG4uYS1rbm93bW9yZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ2Rpc2NvdmVyJztcclxufVxyXG5cclxuLmEta25vd21vcmU6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGxpbmVhcjtcclxufVxyXG5cclxuLmRvd25hcnJvdyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIyIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIG1hcmdpbjogOCU7XHJcbn1cclxuXHJcbi5mYzItdGV4dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnZG93bnRleHQnO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uYnRuLWZjMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLmJ0bi1mYzI6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQ0Q0Q0Q7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgbGluZWFyO1xyXG59XHJcblxyXG4uZmMyLWltYWdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lcjMge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgbWFyZ2luOiA4JTtcclxufVxyXG5cclxuLmZjMy10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogJ2Rvd250ZXh0JztcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmJ0bi1mYzMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uYnRuLWZjMzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDRDRDRDtcclxuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5mYzMtaW1hZ2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lcjQge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgbWFyZ2luOiA4JTtcclxufVxyXG5cclxuLmZjNC10ZXh0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdkb3dudGV4dCc7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5idG4tZmM0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uYnRuLWZjNDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDRDRDRDtcclxuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5mYzQtaW1hZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuI3RvcC1saW5rIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmljb24tdG9wIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/instructions/instructions.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/instructions/instructions.component.ts ***!
    \********************************************************/

  /*! exports provided: InstructionsComponent */

  /***/
  function srcAppInstructionsInstructionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function () {
      return InstructionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");

    var InstructionsComponent = /*#__PURE__*/function () {
      function InstructionsComponent(route, ds, router) {
        _classCallCheck(this, InstructionsComponent);

        this.route = route;
        this.ds = ds;
        this.router = router;
      }

      _createClass(InstructionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.queryParamMap.subscribe(function (data) {
            _this7.coursedata = data.get('quizdetails');
            console.log(_this7.coursedata);
          });
          var p = {
            coursename: this.coursedata
          };
          this.ds.getspecificcourse(p).subscribe(function (data) {
            _this7.specific_course_obj = JSON.stringify(data);
          }); //alert(this.specific_course_obj);
        }
      }, {
        key: "startQuiz",
        value: function startQuiz() {
          this.router.navigate(['exam'], {
            queryParams: {
              course_questions: this.specific_course_obj
            }
          });
        }
      }]);

      return InstructionsComponent;
    }();

    InstructionsComponent.ɵfac = function InstructionsComponent_Factory(t) {
      return new (t || InstructionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    InstructionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InstructionsComponent,
      selectors: [["app-instructions"]],
      decls: 27,
      vars: 0,
      consts: [[1, "jumbotron", "jumbotron-fluid"], [1, "container"], [1, "display-4"], [1, "lead"], [1, "card", "text-center"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-success", 3, "click"], [1, "card-footer", "text-muted"]],
      template: function InstructionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ready to give test of");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LEARN FIRST THEN GIVE TeST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Be honest: Test taker statements are to be true and accurate. Two ways in which some individuals attempt to gain an unfair advantage are lying in order to obtain an accommodation, such as being granted extra time to take the test, and employing an imposter who takes the test in their behalf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Be fair: The test-taking environment is to be the same, as much as it is possible, for all test takers. An exception to this rule is made for those who require an accommodation, such as reading or answer-responding assistance. All test takers have access to a uniform set of test material. Electronic devices with memories that allow for the smuggling of information useful in taking the test are specifically prohibited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Behave appropriately: The testing event is to remain free from disruptions and distractions. This allows test takers the opportunity to perform their best in a fair and equitable manner. Test takers who create distractions may be subject to discipline. Except for medical reasons, test takers may not bring food, liquids or other items into the test administration area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionsComponent_Template_a_click_19_listener() {
            return ctx.startQuiz();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " time - 2hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-instructions',
          templateUrl: './instructions.component.html',
          styleUrls: ['./instructions.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _model_form_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/form.model */
    "./src/app/model/form.model.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, ds, authserve) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.ds = ds;
        this.authserve = authserve;
        this.user = angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialUser"];
        this.login_info = new _model_form_model__WEBPACK_IMPORTED_MODULE_2__["logindetails"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dashboard_page",
        value: function dashboard_page() {
          var _this8 = this;

          console.log("Hello");
          this.ds.stu_login(this.login_info).subscribe(function (data) {
            if (data.status == "ok") {
              localStorage.setItem("email", _this8.login_info.email); // console.log(data.description);
              //added the condition to navigate to the prop-er dashboard

              if (data.description.role == "admin") {
                console.log("Inside Admin Dashboard");

                _this8.router.navigate(['dashboardadmin']);
              } else {
                console.log("Inside Student Dashboard");

                _this8.router.navigate(['dashboard']);
              }
            } else {
              alert("Incorrect Credentials . Try Again");
            }
          });
        }
      }, {
        key: "googlelogin",
        value: function googlelogin() {
          var _this9 = this;

          console.log("Inside the function -> googlelogin");
          this.authserve.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this9.user = userData;
            localStorage.setItem('userpic', _this9.user.photoUrl);
            localStorage.setItem('userName', _this9.user.name);
            console.log(_this9.user);

            if (_this9.user) {
              _this9.router.navigate(['signup']);
            }
          });
        }
      }, {
        key: "facebooklogin",
        value: function facebooklogin() {
          var _this10 = this;

          console.log("Inside the function -> facebooklogin");
          this.authserve.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this10.user = userData;
            localStorage.setItem('userpic', _this10.user.photoUrl);
            localStorage.setItem('userName', _this10.user.name);

            if (_this10.user) {
              _this10.router.navigate(['signup']);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 37,
      vars: 2,
      consts: [[1, "container-fluid", "bg"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-xs-12"], ["action", "dashboard.html", "method", "POST", 1, "form"], ["loginform", "ngForm"], [1, "form-group"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "custom-control-input"], [1, "remembertext"], ["href", "reset.html", 1, "alert-link"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "btn-block", 3, "click"], [1, "newac"], ["routerLink", "signup", 1, "alert-link"], [1, "login-using-google"], [1, "btn-group", "btn-group-wrap", 2, "text-align", "center", "display", "block"], [1, "btn", "btn-secondary", "mr-1", "mt-2", 2, "background-color", "#C63D2D", "border", "#C63D2D", 3, "click"], [1, "fa", "fa-google"], [1, "btn", "btn-secondary", "mr-1", "mt-2", 2, "background-color", "#385998", "border", "#385998", 3, "click"], [1, "fa", "fa-facebook"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log IN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.login_info.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.login_info.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remember Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
            return ctx.dashboard_page();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LogIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Don't Have Acoount? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_30_listener() {
            return ctx.googlelogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Login using Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_33_listener() {
            return ctx.facebooklogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Login using Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login_info.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login_info.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["@font-face {\r\n    font-family: logintext;\r\n    src: url('acid.otf');\r\n}\r\n\r\n@font-face {\r\n    font-family: normalelements;\r\n    src: url('Quicksand-Light.otf');\r\n}\r\n\r\n#login-form[_ngcontent-%COMP%] {\r\n    margin-left: 35%;\r\n    height: auto;\r\n    width: 500px;\r\n    padding-left: 25px;\r\n    border: 1px solid black;\r\n    border-radius: 15px;\r\n    background-color: white;\r\n    position: absolute;\r\n    top: 20%;\r\n}\r\n\r\n.lblemail[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    font-family: \"logintext\";\r\n    margin-top: 20px; \r\n}\r\n\r\n.lblpassword[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    font-family: \"logintext\";\r\n    margin-top: 50px; \r\n}\r\n\r\n.break[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#email[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 464px;\r\n    padding-left: 10px;\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    font-family: \"logintext\";\r\n    border-radius: 10px;\r\n    border: 1px solid lightgray;\r\n}\r\n\r\n#pw[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 464px;\r\n    padding-left: 10px; \r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    font-family: \"logintext\";\r\n    border-radius: 10px;\r\n    border: 1px solid lightgray\r\n}\r\n\r\n#remember[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.remembertext[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    font-size: 20px;\r\n    margin-left: 20px;\r\n    font-family: \"normalelements\";\r\n    font-weight: bolder;\r\n}\r\n\r\n.forgot[_ngcontent-%COMP%] {\r\n    margin-left: 120px;\r\n    display: inline;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.btnlogin[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    width: 97%;\r\n    height: 40px; \r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-radius: 20px;\r\n}\r\n\r\n.btnlogin[_ngcontent-%COMP%]:hover {\r\n    background-color: white;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.newac[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-family: \"normalelements\";\r\n}\r\n\r\n.login-using-google[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-family: \"normalelements\";\r\n    text-align: center;\r\n}\r\n\r\n.google-btn[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    border: 1px solid red;\r\n    color: black;\r\n}\r\n\r\n.google-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: darkred;\r\n    color: white;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: orangered;\r\n    font-family: \"acid.otf\";\r\n    font-weight: bolder;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n    background-image:url('bg.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    width:100%;\r\n    height:100vh;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]{\r\n    border:1px solid black;\r\n    padding:50px 60px;\r\n    margin-top:25%;\r\n    background-color: white;\r\nbox-shadow: 14px 8px 15px -5px rgba(0,0,0,0.75);\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLCtCQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUdBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUtBLCtCQUErQjs7QUFDL0I7SUFDSSw4QkFBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtBQUczQiwrQ0FBK0M7OztBQUcvQyIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbG9naW50ZXh0O1xyXG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvRm9udHMvYWNpZC5vdGZcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG5vcm1hbGVsZW1lbnRzO1xyXG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvRm9udHMvUXVpY2tzYW5kLUxpZ2h0Lm90ZlwiKTtcclxufVxyXG5cclxuI2xvZ2luLWZvcm0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbn1cclxuXHJcblxyXG4ubGJsZW1haWwge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwibG9naW50ZXh0XCI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyBcclxufVxyXG5cclxuLmxibHBhc3N3b3JkIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcImxvZ2ludGV4dFwiO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDsgXHJcbn1cclxuXHJcbi5icmVhayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI2VtYWlsIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA0NjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJsb2dpbnRleHRcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbiNwdyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDY0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcImxvZ2ludGV4dFwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheVxyXG59XHJcblxyXG4jcmVtZW1iZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4ucmVtZW1iZXJ0ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwibm9ybWFsZWxlbWVudHNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5mb3Jnb3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uYnRubG9naW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5idG5sb2dpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5ld2FjIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm5vcm1hbGVsZW1lbnRzXCI7XHJcbn1cclxuXHJcbi5sb2dpbi11c2luZy1nb29nbGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwibm9ybWFsZWxlbWVudHNcIjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdvb2dsZS1idG4ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ29vZ2xlLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgICBmb250LWZhbWlseTogXCJhY2lkLm90ZlwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogbmV3IGNzcyBmb3IgYm9vdHN0cmFwIGZvcm0gKi9cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbn1cclxuXHJcblxyXG4uZm9ybXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOjUwcHggNjBweDtcclxuICAgIG1hcmdpbi10b3A6MjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDE0cHggOHB4IDE1cHggLTVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4tbW96LWJveC1zaGFkb3c6IDE0cHggOHB4IDE1cHggLTVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5ib3gtc2hhZG93OiAxNHB4IDhweCAxNXB4IC01cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/form.model.ts":
  /*!*************************************!*\
    !*** ./src/app/model/form.model.ts ***!
    \*************************************/

  /*! exports provided: studentdetails, serverresponse, logindetails, addcourseinfo, addquestioninfo, google_auth_response, courseinfo, coursewithquestions, studentoption, result, reshistory */

  /***/
  function srcAppModelFormModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "studentdetails", function () {
      return studentdetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "serverresponse", function () {
      return serverresponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logindetails", function () {
      return logindetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addcourseinfo", function () {
      return addcourseinfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addquestioninfo", function () {
      return addquestioninfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "google_auth_response", function () {
      return google_auth_response;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "courseinfo", function () {
      return courseinfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coursewithquestions", function () {
      return coursewithquestions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "studentoption", function () {
      return studentoption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "result", function () {
      return result;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reshistory", function () {
      return reshistory;
    });

    var studentdetails = function studentdetails() {
      _classCallCheck(this, studentdetails);
    };

    var serverresponse = function serverresponse() {
      _classCallCheck(this, serverresponse);
    };

    var logindetails = function logindetails() {
      _classCallCheck(this, logindetails);
    };

    var addcourseinfo = function addcourseinfo() {
      _classCallCheck(this, addcourseinfo);
    };

    var addquestioninfo = function addquestioninfo() {
      _classCallCheck(this, addquestioninfo);
    }; //added new class for getting the course info


    var google_auth_response = function google_auth_response() {
      _classCallCheck(this, google_auth_response);
    };

    var courseinfo = function courseinfo() {
      _classCallCheck(this, courseinfo);
    };

    var coursewithquestions = function coursewithquestions() {
      _classCallCheck(this, coursewithquestions);
    };

    var studentoption = function studentoption() {
      _classCallCheck(this, studentoption);
    };

    var result = function result() {
      _classCallCheck(this, result);
    };

    var reshistory = function reshistory() {
      _classCallCheck(this, reshistory);

      this.exams = [];
    };
    /***/

  },

  /***/
  "./src/app/resultstudents/resultstudents.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/resultstudents/resultstudents.component.ts ***!
    \************************************************************/

  /*! exports provided: ResultstudentsComponent */

  /***/
  function srcAppResultstudentsResultstudentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultstudentsComponent", function () {
      return ResultstudentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResultstudentsComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.score);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.percentage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.result);
      }
    } // import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';


    var ResultstudentsComponent = /*#__PURE__*/function () {
      function ResultstudentsComponent(ds) {
        _classCallCheck(this, ResultstudentsComponent);

        this.ds = ds;
      }

      _createClass(ResultstudentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          // this.ds.getallhistoy().subscribe((data)=>{this.getobj = data;});
          var p = {
            email: localStorage.getItem('email')
          };
          this.ds.getallhistoy(p).subscribe(function (data) {
            _this11.spstd = data;
          });
          console.log(this.spstd); // if (this.getobj.email== localStorage.getItem('email')){
          //   this.specificstudent=this.getobj.exams;
          //   this.historyobj = this.specificstudent.exams;
          // }
          // var i;
          // var temparr=[];
          // for(i = 0; i < this.getobj.length; i++){
          //   if(this.getobj[i].email == localStorage.getItem('email')){
          //     temparr=this.getobj[i].exams;
          //   }
          // }
          // this.ds.getallhistoy(p).subscribe((data) => { this.specificstudent= JSON.stringify(data); });
          // console.log(this.specificstudent);
          // this.historyobj = this.specificstudent.exams;
        }
      }]);

      return ResultstudentsComponent;
    }();

    ResultstudentsComponent.ɵfac = function ResultstudentsComponent_Factory(t) {
      return new (t || ResultstudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    ResultstudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultstudentsComponent,
      selectors: [["app-resultstudents"]],
      decls: 14,
      vars: 1,
      consts: [[1, "container", 2, "align-content", "center", "margin-top", "4%", "margin-left", "19%"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
      template: function ResultstudentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "percentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResultstudentsComponent_tr_13_Template, 9, 4, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spstd);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRzdHVkZW50cy9yZXN1bHRzdHVkZW50cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultstudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resultstudents',
          templateUrl: './resultstudents.component.html',
          styleUrls: ['./resultstudents.component.css']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/showresult/showresult.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/showresult/showresult.component.ts ***!
    \****************************************************/

  /*! exports provided: ShowresultComponent */

  /***/
  function srcAppShowresultShowresultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowresultComponent", function () {
      return ShowresultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ShowresultComponent = /*#__PURE__*/function () {
      function ShowresultComponent(route) {
        _classCallCheck(this, ShowresultComponent);

        this.route = route;
      }

      _createClass(ShowresultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.route.queryParamMap.subscribe(function (data) {
            _this12.score = JSON.parse(data.get('scor')), _this12.percentage = JSON.parse(data.get('per')), _this12.result = JSON.parse(data.get('resl'));
          });

          if (this.result == 0) {
            this.res = "fail";
          } else {
            this.res = "pass";
          }

          console.log(this.score);
          console.log(this.percentage);
          console.log(this.result);
          console.log(this.res); // please remove the console logs when required
        }
      }]);

      return ShowresultComponent;
    }();

    ShowresultComponent.ɵfac = function ShowresultComponent_Factory(t) {
      return new (t || ShowresultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ShowresultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowresultComponent,
      selectors: [["app-showresult"]],
      decls: 25,
      vars: 3,
      consts: [[1, "row"], [1, "col-md-2"], [1, "col-md-8"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"]],
      template: function ShowresultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Precentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.percentage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.res);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93cmVzdWx0L3Nob3dyZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowresultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-showresult',
          templateUrl: './showresult.component.html',
          styleUrls: ['./showresult.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_form_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/form.model */
    "./src/app/model/form.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignupComponent = /*#__PURE__*/function () {
      //property router of type Router to use the navigate function in order to navigate to other component
      function SignupComponent(router, ds) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.ds = ds; //stu is the object storing all the information of student

        this.stu = new _model_form_model__WEBPACK_IMPORTED_MODULE_1__["studentdetails"]();
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //Definition of function that is called on the click of the button 'create a new account'

      }, {
        key: "register",
        value: function register() {
          var _this13 = this;

          //Post data to the server
          this.ds.stu_register(this.stu).subscribe(function (data) {
            console.log("Hello ");
            console.log(data);

            if (data.status == "ok" && _this13.stu.role == "student") {
              console.log("Thankyou for your registration. Student registered successfully !!!");

              _this13.router.navigate(['dashboard'], {
                queryParams: {
                  stuinfo_signup: JSON.stringify(_this13.stu)
                }
              });
            } else if (data.status == "ok" && _this13.stu.role == "admin") {
              console.log("Thankyou for your registration. Admin registered successfully !!!");

              _this13.router.navigate(['dashboardadmin'], {
                queryParams: {
                  stuinfo_signup: JSON.stringify(_this13.stu)
                }
              });
            } else if (data.status == "not ok") {
              alert("Registration Failed. Try again later or contact your admin !!!");
            }
          }); // navigate to the dashboard component and send the complete details through queryParams 
          //conversion of JSON to string is required because subscribe function on other component expects a string to be received

          this.router.navigate(['dashboard'], {
            queryParams: {
              stuinfo_signup: JSON.stringify(this.stu)
            }
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 85,
      vars: 11,
      consts: [[1, "div-outer"], [1, "div-form"], ["action", "", "method", "POST", 2, "border", "1px solid black", "border-radius", "20px"], ["newstudent", "ngForm"], [2, "height", "auto", "width", "40%", "text-align", "center", "margin-left", "30%"], ["type", "text", "placeholder", "First name", "name", "fname", "required", "", 1, "inp", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last name (optional)", "name", "lname", 1, "inp", 3, "ngModel", "ngModelChange"], ["name", "role", "required", "", 1, "role", 3, "ngModel", "ngModelChange"], ["value", "admin"], ["value", "student"], ["name", "code", "required", "", 1, "sel", 3, "ngModel", "ngModelChange"], ["value", "91"], ["value", "45"], ["value", "31"], ["value", "25"], ["type", "number", "placeholder", "Enter your number", "name", "mobile", "required", "", 1, "num", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "DOB", "name", "dob", "required", "", 1, "inp", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "enter your email", "name", "email", "required", "", 1, "inp", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Enter your password", "name", "pw", "required", "", 1, "inp", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter your password again", "name", "cpw", "required", "", 1, "inp", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "gender", "value", "male", 1, "radio", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "gender", "value", "female", 1, "radio", 3, "ngModel", "ngModelChange"], ["type", "Submit", 1, "btn", 3, "click"], [1, "done"], [1, "login", 2, "margin-left", "30%"], ["routerLink", "home"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Signup Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.stu.fname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.stu.lname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Role: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_22_listener($event) {
            return ctx.stu.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mobile Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_32_listener($event) {
            return ctx.stu.code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "+91");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "+45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "+31");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "+25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_41_listener($event) {
            return ctx.stu.mobile = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Date of Birth: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.stu.dob = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_53_listener($event) {
            return ctx.stu.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_59_listener($event) {
            return ctx.stu.pw = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Confirm password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_65_listener($event) {
            return ctx.stu.cpw = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_68_listener($event) {
            return ctx.stu.gender = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_71_listener($event) {
            return ctx.stu.gender = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_76_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Create a New Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Alredy have an Account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.fname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.lname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.dob);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.pw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.cpw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stu.gender);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["@font-face{\r\n    font-family: h2;\r\n    src: url('heading.otf');\r\n}\r\n\r\n@font-face {\r\n    font-family: label;\r\n    src: url('acid.otf')\r\n}\r\n\r\n@font-face {\r\n    font-family: normalelements;\r\n    src: url('Quicksand-Light.otf');\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    height: 50px;\r\n    width: 96%;\r\n    background-color: lightgrey; \r\n    border-radius: 20px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    background-color: #707B7C;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.div-outer[_ngcontent-%COMP%] {\r\n    height: 1100px;\r\n    background-image: url('bg.jpg');\r\n}\r\n\r\n.div-form[_ngcontent-%COMP%] {\r\n    margin-left: 31%;\r\n    height: auto;\r\n    width: 550px;\r\n    background-color: white;\r\n    border-radius: 30px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n    margin-bottom: 10px;\r\n    font-family: \"label\";\r\n    margin-left: 40px;\r\n    font-size: 20px;\r\n}\r\n\r\n.inp[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    margin-left: 50px;\r\n    font-family: 'label';\r\n    padding-left: 10px;\r\n    margin-top: 10px;\r\n    font-size: 16px;\r\n    border: 1px solid lightgray;\r\n}\r\n\r\n.inp[_ngcontent-%COMP%]:hover {\r\n    border-radius: 10px;\r\n}\r\n\r\n.role[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n    margin-left: 50px;\r\n    height: 30px;\r\n    width: 200px;\r\n    font-family: 'label';\r\n    border: 1px solid lightgray;\r\n}\r\n\r\n.sel[_ngcontent-%COMP%] {\r\n    border-radius: 8px;\r\n    margin-left: 50px;\r\n    height: 30px;\r\n    width: 50px;\r\n    font-family: 'label';\r\n    border: 1px solid lightgray;\r\n}\r\n\r\n.num[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n    padding-left: 10px;\r\n    font-family: 'label';\r\n    font-size: 16px;\r\n    border-radius: 10px;\r\n    height: 30px;\r\n    width: 200px;\r\n    border: 1px solid lightgray;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-family: 'label';\r\n    font-size: 20px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-family: 'h2';\r\n    font-size: 40px;\r\n    color: black;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%] {\r\n    margin-left: 50px;\r\n    font-size: 25px;\r\n}\r\n\r\n.create[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-family: 'normalelements';\r\n    font-weight: bolder; \r\n}\r\n\r\n.login[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-family: 'normalelements';\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZix1QkFBMEM7QUFDOUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwrQkFBa0Q7QUFDdEQ7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLCtCQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle1xyXG4gICAgZm9udC1mYW1pbHk6IGgyO1xyXG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvRm9udHMvaGVhZGluZy5vdGZcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IGxhYmVsO1xyXG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvRm9udHMvYWNpZC5vdGZcIilcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbm9ybWFsZWxlbWVudHM7XHJcbiAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9Gb250cy9RdWlja3NhbmQtTGlnaHQub3RmXCIpO1xyXG59XHJcbi5idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwN0I3QztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpdi1vdXRlciB7XHJcbiAgICBoZWlnaHQ6IDExMDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGcnKTtcclxufVxyXG5cclxuLmRpdi1mb3JtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwibGFiZWxcIjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaW5wIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbGFiZWwnO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmlucDpob3ZlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucm9sZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ2xhYmVsJztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLnNlbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdsYWJlbCc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5udW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ2xhYmVsJztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcblxyXG5wIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAnbGFiZWwnO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnaDInO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucmFkaW8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5jcmVhdGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdub3JtYWxlbGVtZW50cyc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyOyBcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbm9ybWFsZWxlbWVudHMnO1xyXG4gICAgLypmb250LXdlaWdodDogYm9sZDsqL1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/submitexam/submitexam.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/submitexam/submitexam.component.ts ***!
    \****************************************************/

  /*! exports provided: SubmitexamComponent */

  /***/
  function srcAppSubmitexamSubmitexamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitexamComponent", function () {
      return SubmitexamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");

    var SubmitexamComponent = /*#__PURE__*/function () {
      function SubmitexamComponent(route, ds, router) {
        _classCallCheck(this, SubmitexamComponent);

        this.route = route;
        this.ds = ds;
        this.router = router;
      }

      _createClass(SubmitexamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.route.queryParamMap.subscribe(function (data) {
            _this14.Result = JSON.parse(data.get('res')), _this14.question = JSON.parse(data.get('ques'));
          }); //console.log(this.Result.resultarray.length);
          //console.log(this.question.coursename);

          console.log(this.Result); // creating object with submitted answer and question to send to DB

          var obj = {
            currentCourse: this.question.coursename,
            questions: this.question.Questions
          };

          for (var i = 0; i < this.Result.resultarray.length; i++) {
            if (this.Result.resultarray[i] == 1) {
              obj.questions[i].output = "right answer";
            } else if (this.Result.resultarray[i] == 0) {
              obj.questions[i].output = "wrong answer";
            }
          }

          this.submitted_obj = obj;
        }
      }, {
        key: "submitExam",
        value: function submitExam() {
          var reslt;
          var x = this.Result.resultarray.length;
          var count = 0,
              percentage,
              score;

          for (var i = 0; i < x; i++) {
            if (this.Result.resultarray[i] == 1) {
              count++;
            }
          }

          score = count;
          console.log(score);
          percentage = score / x * 100;
          console.log(percentage);

          if (percentage >= 50) {
            reslt = 1;
          } else {
            reslt = 0;
          }

          this.sc = score;
          this.page = percentage;
          this.re = reslt;
          var resl;

          if (reslt == 0) {
            resl = 'fail';
          } else {
            resl = 'pass';
          }

          var today = new Date();
          var r = {
            email: localStorage.getItem('email'),
            score: this.sc,
            percent: this.page,
            res: resl,
            date: today
          };
          console.log(r);
          this.ds.AddExamTaken(r).subscribe(function (data) {
            if (data.status == "ok") {
              console.log("exam taken Added Succesfully to the DataBase !");
            } else {
              console.log("Exam taken Uploading Failed. Contact Your Admin.");
            }
          });
          this.router.navigate(['submit/showre'], {
            queryParams: {
              scor: this.sc,
              per: this.page,
              resl: this.re
            }
          }); //calling DS function to add result into DB

          console.log(this.submitted_obj);
          this.ds.submitresult(this.submitted_obj).subscribe(function (data) {
            if (data.status == "ok") {
              console.log("Result inserted successfully !");
            } else if (data.status == "not ok") {
              console.log("Result Submission failed. Try again or contact your admin.");
            }
          });
        }
      }]);

      return SubmitexamComponent;
    }();

    SubmitexamComponent.ɵfac = function SubmitexamComponent_Factory(t) {
      return new (t || SubmitexamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    SubmitexamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubmitexamComponent,
      selectors: [["app-submitexam"]],
      decls: 24,
      vars: 0,
      consts: [[1, "jumbotron", "jumbotron-fluid"], [1, "container"], [1, "display-4"], [1, "lead"], [1, "row"], [1, "col-md-4", "col-sm-4"], ["role", "button", 1, "btn", "btn-success", "btn-lg", "btn-block", 3, "click"]],
      template: function SubmitexamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "EXAM Has Ended !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fingers Crossed \uF91E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u201DSuccess is the sum of small efforts, repeated day in and day out.\u201D ~ Robert Collier ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitexamComponent_Template_a_click_17_listener() {
            return ctx.submitExam();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "View RESULT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJtaXRleGFtL3N1Ym1pdGV4YW0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitexamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-submitexam',
          templateUrl: './submitexam.component.html',
          styleUrls: ['./submitexam.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! G:\programming stuffs\Projects\online-quiz-system_WithGoogleAuth_forhosting\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map