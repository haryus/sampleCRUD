"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["User"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User.vue?vue&type=script&lang=js ***!
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
      userTable: [],
      roles: [],
      userDialog: false,
      menu: false,
      dialogObj: {
        title: "",
        id: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        contact_no: "",
        birthday: "",
        role_id: ""
      },
      errors: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        contact_no: "",
        birthday: "",
        role_id: ""
      }
    };
  },
  created: function created() {
    this.getRoleData();
    this.getData();
  },
  methods: {
    close: function close() {
      this.dialogObj.email = "";
      this.dialogObj.password = "";
      this.dialogObj.first_name = "";
      this.dialogObj.last_name = "";
      this.dialogObj.contact_no = "";
      this.dialogObj.birthday = "";
      this.dialogObj.role_id = "";
      this.dialogObj.id = "";
      this.clearErrors();
    },
    openAddDialog: function openAddDialog() {
      this.userDialog = true;
      this.dialogObj.title = 'ADD USER/CLIENT';
    },
    openEditDialog: function openEditDialog(item) {
      this.userDialog = true;
      this.dialogObj.title = 'EDIT USER/CLIENT';
      this.dialogObj.email = item.email;
      this.dialogObj.password = item.password;
      this.dialogObj.first_name = item.first_name;
      this.dialogObj.last_name = item.last_name;
      this.dialogObj.contact_no = item.contact_no;
      this.dialogObj.birthday = item.birthday;
      this.dialogObj.role_id = item.role_id;
      this.dialogObj.id = item.id;
    },
    deleteData: function deleteData(item) {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("api/users/".concat(item.id)).then(function (res) {
        if (res.data == 1) {
          alert('User has been deleted!');
          _this.getData();
        }
      })["catch"](function (error) {
        console.error('Error deleting user:', error);
      });
    },
    add: function add() {
      var _this2 = this;
      var dataToSend = _objectSpread(_objectSpread({}, this.dialogObj), {}, {
        logged_id: this.logged.id
      });
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("api/users", dataToSend).then(function (res) {
        _this2.userDialog = false;
        _this2.close();
        _this2.getData();
        alert('User has been added!');
      })["catch"](function (error) {
        if (error.response && error.response.status === 422) {
          var errors = error.response.data.errors; // Destructure errors from response data

          _this2.clearErrors();
          if (errors && errors.email) _this2.errors.email = errors.email[0];
          if (errors && errors.password) _this2.errors.password = errors.password[0];
          if (errors && errors.first_name) _this2.errors.first_name = errors.first_name[0];
          if (errors && errors.last_name) _this2.errors.last_name = errors.last_name[0];
          if (errors && errors.contact_no) _this2.errors.contact_no = errors.contact_no[0];
          if (errors && errors.birthday) _this2.errors.birthday = errors.birthday[0];
          if (errors && errors.role_id) _this2.errors.role_id = errors.role_id[0];
        } else {
          console.error('Error adding user:', error);
        }
      });
    },
    save: function save() {
      var _this3 = this;
      console.log(this.dialogObj.id);
      var dataToSend = _objectSpread(_objectSpread({}, this.dialogObj), {}, {
        logged_id: this.logged.id
      });
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].put("api/users/".concat(this.dialogObj.id), dataToSend).then(function (res) {
        _this3.userDialog = false;
        _this3.close();
        _this3.getData();
        alert('User has been updated!');
      })["catch"](function (error) {
        _this3.handleErrors(error);
      });
    },
    handleErrors: function handleErrors(error) {
      if (error.response && error.response.status === 422) {
        var errors = error.response.data.errors;
        this.clearErrors();
        if (errors && errors.email) this.errors.email = errors.email[0];
        if (errors && errors.password) this.errors.password = errors.password[0];
        if (errors && errors.first_name) this.errors.first_name = errors.first_name[0];
        if (errors && errors.last_name) this.errors.last_name = errors.last_name[0];
        if (errors && errors.contact_no) this.errors.contact_no = errors.contact_no[0];
        if (errors && errors.birthday) this.errors.birthday = errors.birthday[0];
        if (errors && errors.role_id) this.errors.role_id = errors.role_id[0];
      } else {
        console.error('Error saving user:', error);
      }
    },
    clearErrors: function clearErrors() {
      this.errors.email = "";
      this.errors.password = "";
      this.errors.first_name = "";
      this.errors.last_name = "";
      this.errors.contact_no = "";
      this.errors.birthday = "";
      this.errors.role_id = "";
    },
    getData: function getData() {
      var _this4 = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("api/get_users?role_id=".concat(this.logged.id)).then(function (res) {
        _this4.userTable = res.data;
      });
    },
    getRoleData: function getRoleData() {
      var _this5 = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("api/get_roles").then(function (res) {
        var data = [];
        _this5.roles = res.data;
      })["catch"](function (error) {
        console.error('Error fetching roles:', error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User.vue?vue&type=template&id=d884f594":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User.vue?vue&type=template&id=d884f594 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " EMAIL "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " FIRSTNAME "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " LASTNAME "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " CONTACT NO. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " BIRTHDAY "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " ROLE "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " ACTIONS ")])], -1 /* HOISTED */);
var _hoisted_2 = {
  key: 0,
  "class": "error-message"
};
var _hoisted_3 = {
  key: 0,
  "class": "error-message"
};
var _hoisted_4 = {
  key: 0,
  "class": "error-message"
};
var _hoisted_5 = {
  key: 0,
  "class": "error-message"
};
var _hoisted_6 = {
  key: 0,
  "class": "error-message"
};
var _hoisted_7 = {
  key: 0,
  "class": "error-message"
};
var _hoisted_8 = {
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
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
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
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("USER/CLIENT")];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_spacer), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return $options.openAddDialog();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add User ")];
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
              return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.userTable, function (item, index) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                  key: index
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.email), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.first_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.last_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.contact_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.birthday), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.role.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, {
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
        modelValue: _ctx.userDialog,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
          return _ctx.userDialog = $event;
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
                    modelValue: _ctx.dialogObj.email,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                      return _ctx.dialogObj.email = $event;
                    }),
                    "error-messages": _ctx.errors.email ? [_ctx.errors.email] : [],
                    label: "Email *",
                    required: ""
                  }, {
                    "prepend-inner": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_ctx.errors.email ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.email), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                    }),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["modelValue", "error-messages"])];
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
                    modelValue: _ctx.dialogObj.password,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                      return _ctx.dialogObj.password = $event;
                    }),
                    label: "Password *",
                    required: "",
                    "error-messages": _ctx.errors.password ? [_ctx.errors.password] : []
                  }, {
                    "prepend-inner": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_ctx.errors.password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.password), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                    }),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["modelValue", "error-messages"])];
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
                    modelValue: _ctx.dialogObj.first_name,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                      return _ctx.dialogObj.first_name = $event;
                    }),
                    label: "Firstname *",
                    "error-messages": _ctx.errors.first_name ? [_ctx.errors.first_name] : [],
                    required: ""
                  }, {
                    "prepend-inner": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_ctx.errors.first_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.first_name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                    }),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["modelValue", "error-messages"])];
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
                    modelValue: _ctx.dialogObj.last_name,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                      return _ctx.dialogObj.last_name = $event;
                    }),
                    label: "LastName *",
                    "error-messages": _ctx.errors.last_name ? [_ctx.errors.last_name] : [],
                    required: ""
                  }, {
                    "prepend-inner": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_ctx.errors.last_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.last_name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                    }),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["modelValue", "error-messages"])];
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
                    modelValue: _ctx.dialogObj.contact_no,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                      return _ctx.dialogObj.contact_no = $event;
                    }),
                    label: "Contact No. *",
                    "error-messages": _ctx.errors.contact_no ? [_ctx.errors.contact_no] : [],
                    required: "",
                    oninput: "this.value = this.value.replace(/[^0-9.]/g, '');"
                  }, {
                    "prepend-inner": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_ctx.errors.contact_no ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.contact_no), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                    }),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["modelValue", "error-messages"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                sm: "12"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                    modelValue: _ctx.dialogObj.birthday,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                      return _ctx.dialogObj.birthday = $event;
                    }),
                    label: "Birthday *",
                    outlined: "",
                    dense: "",
                    "hide-details": "",
                    "prepend-inner-icon": "mdi-calendar",
                    placeholder: "yyyy/mm/dd",
                    "error-messages": _ctx.errors.birthday ? [_ctx.errors.birthday] : [],
                    required: ""
                  }, {
                    "prepend-inner": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_ctx.errors.birthday ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.birthday), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                    }),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["modelValue", "error-messages"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                sm: "12"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                    "background-color": "green lighten-5",
                    dense: "",
                    outlined: "",
                    "hide-details": "",
                    "error-messages": _ctx.errors.role_id ? [_ctx.errors.role_id] : [],
                    label: "Role *",
                    required: "",
                    modelValue: _ctx.dialogObj.role_id,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                      return _ctx.dialogObj.role_id = $event;
                    }),
                    items: _ctx.roles,
                    "item-value": "id",
                    "item-title": "name"
                  }, {
                    "prepend-inner": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_ctx.errors.role_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.role_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                    }),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["error-messages", "modelValue", "items"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card_actions, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_spacer), _ctx.dialogObj.title === 'ADD USER/CLIENT' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_btn, {
                    key: 0,
                    color: "primary",
                    text: "",
                    onClick: _cache[8] || (_cache[8] = function ($event) {
                      return $options.add();
                    })
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add")];
                    }),
                    _: 1 /* STABLE */
                  })) : _ctx.dialogObj.title === 'EDIT USER/CLIENT' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_btn, {
                    key: 1,
                    color: "primary",
                    text: "",
                    onClick: _cache[9] || (_cache[9] = function ($event) {
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
                    onClick: _cache[10] || (_cache[10] = function ($event) {
                      return $options.close(), _ctx.userDialog = false;
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

/***/ "./resources/js/components/User.vue":
/*!******************************************!*\
  !*** ./resources/js/components/User.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_d884f594__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=d884f594 */ "./resources/js/components/User.vue?vue&type=template&id=d884f594");
/* harmony import */ var _User_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js */ "./resources/js/components/User.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_User_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_User_vue_vue_type_template_id_d884f594__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/User.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/User.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/User.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_User_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_User_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./User.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/User.vue?vue&type=template&id=d884f594":
/*!************************************************************************!*\
  !*** ./resources/js/components/User.vue?vue&type=template&id=d884f594 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_User_vue_vue_type_template_id_d884f594__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_User_vue_vue_type_template_id_d884f594__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./User.vue?vue&type=template&id=d884f594 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User.vue?vue&type=template&id=d884f594");


/***/ })

}]);