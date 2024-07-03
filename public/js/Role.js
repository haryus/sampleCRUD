"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Role"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Role.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Role.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'App',
  data: function data() {
    return {
      roleTable: [],
      roleDialog: false,
      menu: false,
      dialogObj: {
        title: "",
        id: "",
        name: ""
      },
      errors: {
        name: ""
      }
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    close: function close() {
      this.dialogObj.name = "";
      this.dialogObj.id = "";
      this.clearErrors();
    },
    openAddDialog: function openAddDialog() {
      this.roleDialog = true;
      this.dialogObj.title = 'ADD ROLE';
    },
    openEditDialog: function openEditDialog(item) {
      this.roleDialog = true;
      this.dialogObj.title = 'EDIT ROLE';
      this.dialogObj.name = item.name;
      this.dialogObj.id = item.id;
    },
    deleteData: function deleteData(item) {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("api/roles/".concat(item.id)).then(function (res) {
        if (res.data == 1) {
          alert('Role has been deleted!');
          _this.getData();
        }
      })["catch"](function (error) {
        console.error('Error deleting role:', error);
      });
    },
    add: function add() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("api/roles", this.dialogObj).then(function (res) {
        _this2.roleDialog = false;
        _this2.close();
        _this2.getData();
        alert('Role has been added!');
      })["catch"](function (error) {
        if (error.response && error.response.status === 422) {
          var errors = error.response.data.errors; // Destructure errors from response data

          _this2.clearErrors();
          if (errors && errors.name) _this2.errors.name = errors.name[0];
        } else {
          console.error('Error adding role:', error);
        }
      });
    },
    save: function save() {
      var _this3 = this;
      console.log(this.dialogObj.id);
      var dataToSend = _objectSpread(_objectSpread({}, this.dialogObj), {}, {
        logged_id: this.logged.id
      });
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].put("api/roles/".concat(this.dialogObj.id), dataToSend).then(function (res) {
        _this3.roleDialog = false;
        _this3.close();
        _this3.getData();
        alert('Role has been updated!');
      })["catch"](function (error) {
        _this3.handleErrors(error);
      });
    },
    handleErrors: function handleErrors(error) {
      if (error.response && error.response.status === 422) {
        var errors = error.response.data.errors;
        this.clearErrors();
        if (errors && errors.name) this.errors.name = errors.name[0];
      } else {
        console.error('Error saving role:', error);
      }
    },
    clearErrors: function clearErrors() {
      this.errors.name = "";
    },
    getData: function getData() {
      var _this4 = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("api/get_roles?role_id=".concat(this.logged.id)).then(function (res) {
        _this4.roleTable = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Role.vue?vue&type=template&id=d888673e":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Role.vue?vue&type=template&id=d888673e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " NAME "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " ACTIONS ")])], -1 /* HOISTED */);
var _hoisted_2 = {
  key: 0,
  "class": "error-message"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_toolbar_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-toolbar-title");
  var _component_v_spacer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-spacer");
  var _component_v_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-btn");
  var _component_v_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-toolbar");
  var _component_v_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-icon");
  var _component_v_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-table");
  var _component_v_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card");
  var _component_v_card_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card-title");
  var _component_v_text_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-text-field");
  var _component_v_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-col");
  var _component_v_card_actions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card-actions");
  var _component_v_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-dialog");
  var _component_v_app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-app");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_app, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_toolbar, {
            dark: "",
            flat: "",
            dense: "",
            color: _ctx.scheme.secondary
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_toolbar_title, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ROLE")];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_spacer), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return $options.openAddDialog();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Role ")];
                }),
                _: 1 /* STABLE */
              })];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["color"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_table, {
            dense: "",
            "fixed-header": "",
            height: "500px",
            density: "compact"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.roleTable, function (item, index) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                  key: index
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, {
                  onClick: function onClick($event) {
                    return $options.openEditDialog(item);
                  }
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" mdi-pencil ")];
                  }),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, {
                  onClick: function onClick($event) {
                    return $options.deleteData(item);
                  }
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" mdi-delete ")];
                  }),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])])]);
              }), 128 /* KEYED_FRAGMENT */))])];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_dialog, {
        modelValue: _ctx.roleDialog,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return _ctx.roleDialog = $event;
        }),
        "max-width": "500"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card_title, {
                "class": "headline"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dialogObj.title), 1 /* TEXT */)];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                sm: "12"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                    "background-color": "green lighten-5",
                    type: "text",
                    dense: "",
                    outlined: "",
                    "hide-details": "",
                    modelValue: _ctx.dialogObj.name,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                      return _ctx.dialogObj.name = $event;
                    }),
                    "error-messages": _ctx.errors.name ? [_ctx.errors.name] : [],
                    label: "Name *",
                    required: ""
                  }, {
                    "prepend-inner": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_ctx.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                    }),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["modelValue", "error-messages"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card_actions, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_spacer), _ctx.dialogObj.title === 'ADD ROLE' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_btn, {
                    key: 0,
                    color: "primary",
                    text: "",
                    onClick: _cache[2] || (_cache[2] = function ($event) {
                      return $options.add();
                    })
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add")];
                    }),
                    _: 1 /* STABLE */
                  })) : _ctx.dialogObj.title === 'EDIT ROLE' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_btn, {
                    key: 1,
                    color: "primary",
                    text: "",
                    onClick: _cache[3] || (_cache[3] = function ($event) {
                      return $options.save(_ctx.item);
                    })
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save")];
                    }),
                    _: 1 /* STABLE */
                  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                    color: "primary",
                    text: "",
                    onClick: _cache[4] || (_cache[4] = function ($event) {
                      return $options.close(), _ctx.roleDialog = false;
                    })
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Close")];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              })];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/components/Role.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Role.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Role_vue_vue_type_template_id_d888673e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=d888673e */ "./resources/js/components/Role.vue?vue&type=template&id=d888673e");
/* harmony import */ var _Role_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js */ "./resources/js/components/Role.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Role_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Role_vue_vue_type_template_id_d888673e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Role.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Role.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Role.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Role_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Role_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Role.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Role.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Role.vue?vue&type=template&id=d888673e":
/*!************************************************************************!*\
  !*** ./resources/js/components/Role.vue?vue&type=template&id=d888673e ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Role_vue_vue_type_template_id_d888673e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Role_vue_vue_type_template_id_d888673e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Role.vue?vue&type=template&id=d888673e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Role.vue?vue&type=template&id=d888673e");


/***/ })

}]);