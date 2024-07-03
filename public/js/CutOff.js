"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["CutOff"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CutOff.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CutOff.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      EmployeeCode: "",
      DateFrom: "",
      DateTo: "",
      ToMenu: false,
      FromMenu: false
    };
  },
  methods: {
    getdata: function getdata() {
      axios.get("api/cutoff?ID=".concat(this.EmployeeCode, "&&From=").concat(this.DateFrom, "&&To=").concat(this.DateTo)).then(function (res) {
        console.log("pasok");
        console.log(res.data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CutOff.vue?vue&type=template&id=61d51910":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CutOff.vue?vue&type=template&id=61d51910 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "CUT OFF", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-icon");
  var _component_v_avatar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-avatar");
  var _component_v_chip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-chip");
  var _component_v_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-col");
  var _component_v_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-row");
  var _component_v_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-alert");
  var _component_v_banner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-banner");
  var _component_v_text_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-text-field");
  var _component_v_date_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-date-picker");
  var _component_v_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-menu");
  var _component_v_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-btn");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_banner, {
            sticky: "",
            "single-line": "",
            style: {
              "background-color": "white"
            }
          }, {
            actions: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_alert, {
                style: {
                  "margin-bottom": "0px"
                },
                dense: "",
                border: "left",
                "colored-border": "",
                elevation: "1"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
                    dense: ""
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                        align: "center",
                        justify: "center"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_chip, {
                            "class": "ml-3",
                            small: "",
                            label: ""
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <v-icon class=\"mr-2\" x-small>mdi-asterisk</v-icon> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("mdi-information")];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Information ")];
                            }),
                            _: 1 /* STABLE */
                          })];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                        align: "center",
                        justify: "center"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_chip, {
                            "class": "ml-3",
                            small: "",
                            label: ""
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <v-icon class=\"mr-2\" small>mdi-format-text-variant</v-icon> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("mdi-cash")];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Salary ")];
                            }),
                            _: 1 /* STABLE */
                          })];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <v-col align=\"center\" justify=\"center\">\r\n                  <v-chip class=\"ml-3\" small label>\r\n                    <v-icon>mdi-message-processing-outline</v-icon>\r\n                    Remark\r\n                  </v-chip>\r\n                </v-col> ")];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              })];
            }),
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_avatar, {
                slot: "icon",
                color: "primary",
                size: "25"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, {
                    dark: "",
                    small: ""
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("mdi-box-cutter-off")];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              }), _hoisted_1];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
        cols: "2",
        md: "3",
        sm: "3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
            modelValue: $data.EmployeeCode,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $data.EmployeeCode = $event;
            }),
            label: "Employee Code",
            outlined: "",
            dense: "",
            "hide-details": "",
            "background-color": "green lighten-5"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
        cols: "2",
        sm: "3",
        md: "3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_menu, {
            "close-on-content-click": false,
            "nudge-right": 40,
            transition: "scale-transition",
            "offset-y": "",
            "min-width": "auto",
            modelValue: $data.FromMenu,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.FromMenu = $event;
            })
          }, {
            activator: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
              var on = _ref.on,
                attrs = _ref.attrs;
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
                "background-color": "green lighten-5",
                dense: "",
                outlined: "",
                "hide-details": "",
                modelValue: $data.DateFrom,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                  return $data.DateFrom = $event;
                }),
                disabled: $data.EmployeeCode == '' || $data.EmployeeCode == null,
                label: "From *",
                "prepend-inner-icon": "mdi-calendar",
                readonly: ""
              }, attrs, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(on)), null, 16 /* FULL_PROPS */, ["modelValue", "disabled"])];
            }),
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_date_picker, {
                "class": "my-picker-class",
                scrollable: "",
                "no-title": "",
                modelValue: $data.DateFrom,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return $data.DateFrom = $event;
                }),
                onInput: _cache[3] || (_cache[3] = function ($event) {
                  return $data.FromMenu = false;
                })
              }, null, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
        cols: "2",
        sm: "3",
        md: "3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_menu, {
            "close-on-content-click": false,
            "nudge-right": 40,
            transition: "scale-transition",
            "offset-y": "",
            "min-width": "auto",
            modelValue: $data.ToMenu,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
              return $data.ToMenu = $event;
            })
          }, {
            activator: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
              var on = _ref2.on,
                attrs = _ref2.attrs;
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
                "background-color": "green lighten-5",
                dense: "",
                outlined: "",
                modelValue: $data.DateTo,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                  return $data.DateTo = $event;
                }),
                disabled: $data.EmployeeCode == '' || $data.EmployeeCode == null,
                label: "To *",
                "hide-details": "",
                "prepend-inner-icon": "mdi-calendar",
                readonly: ""
              }, attrs, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(on)), null, 16 /* FULL_PROPS */, ["modelValue", "disabled"])];
            }),
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_date_picker, {
                "class": "my-picker-class",
                scrollable: "",
                "no-title": "",
                modelValue: $data.DateTo,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                  return $data.DateTo = $event;
                }),
                onInput: _cache[7] || (_cache[7] = function ($event) {
                  return $data.ToMenu = false;
                })
              }, null, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
        cols: "2",
        md: "2",
        sm: "2"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
            elevation: "1",
            color: "success",
            disabled: $data.EmployeeCode == '' || $data.DateFrom == '' || $data.DateTo == '',
            onClick: _cache[9] || (_cache[9] = function ($event) {
              return $options.getdata();
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("mdi-magnify")];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Search ")];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["disabled"])];
        }),
        _: 1 /* STABLE */
      })];
    }),
    _: 1 /* STABLE */
  })]);
}

/***/ }),

/***/ "./resources/js/components/CutOff.vue":
/*!********************************************!*\
  !*** ./resources/js/components/CutOff.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CutOff_vue_vue_type_template_id_61d51910__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CutOff.vue?vue&type=template&id=61d51910 */ "./resources/js/components/CutOff.vue?vue&type=template&id=61d51910");
/* harmony import */ var _CutOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CutOff.vue?vue&type=script&lang=js */ "./resources/js/components/CutOff.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CutOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CutOff_vue_vue_type_template_id_61d51910__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/CutOff.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/CutOff.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/CutOff.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CutOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CutOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CutOff.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CutOff.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/CutOff.vue?vue&type=template&id=61d51910":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CutOff.vue?vue&type=template&id=61d51910 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CutOff_vue_vue_type_template_id_61d51910__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CutOff_vue_vue_type_template_id_61d51910__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CutOff.vue?vue&type=template&id=61d51910 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CutOff.vue?vue&type=template&id=61d51910");


/***/ })

}]);