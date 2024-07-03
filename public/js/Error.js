"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Error"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      status_code: '',
      url: window.location.origin,
      currentTimeStamp: new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
      status_name: {
        '400': 'Bad Request',
        '401': 'Unauthorized',
        '402': 'Payment Required',
        '403': 'Forbidden',
        '404': 'Not Found',
        '405': 'Method Not Allowed',
        '406': 'Not Acceptable',
        '407': 'Proxy Authentication Required',
        '408': 'Request Timeout',
        '409': 'Conflict',
        '410': 'Gone',
        '411': 'Length Required',
        '412': 'Precondition Failed',
        '413': 'Payload Too Large',
        '414': 'URI Too Long',
        '415': 'Unsupported Media Type',
        '416': 'Range Not Satisfiable',
        '417': 'Expectation Failed',
        '418': 'Im a Teapot',
        '419': 'Page Expired',
        '421': 'Misdirected Requested',
        '422': 'Unprocessable Entity',
        '423': 'Locked',
        '424': 'Failed Dependency',
        '425': 'Too Early',
        '426': 'Upgrade Required',
        '428': 'Precondition Required',
        '429': 'Too Many Requests',
        '431': 'Request Header Fields Too Large',
        '451': 'Unavailable For Legal Reasons',
        '500': 'Internal Server Error',
        '501': 'Not Implemented',
        '502': 'Bad Gateway',
        '503': 'Service Unavailable',
        '504': 'Gateway Timeout',
        '505': 'HTTP Version Not Supported',
        '506': 'Variant Also Negotiates',
        '507': 'Insufficient Storage',
        '508': 'Loop Detected',
        '510': 'Not Extended',
        '511': 'Network Authentication Required'
      }
    };
  },
  created: function created() {
    this.status_code = this.$route.params.status_code;
  },
  methods: {
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=template&id=14e32491":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=template&id=14e32491 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "sample"
};
var _hoisted_2 = {
  "class": "errorInfoContainer"
};
var _hoisted_3 = {
  style: {
    "width": "100%",
    "height": "80px",
    "text-align": "center"
  }
};
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  style: {
    "width": "100%",
    "height": "37px",
    "text-align": "center"
  }
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  style: {
    "width": "100%",
    "height": "47px",
    "text-align": "center"
  }
};
var _hoisted_8 = ["src"];
var _hoisted_9 = ["src"];
var _hoisted_10 = ["src"];
var _hoisted_11 = {
  style: {
    "width": "100%",
    "height": "260px",
    "text-align": "center"
  }
};
var _hoisted_12 = ["src"];
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "pHeaderMessage",
  style: {
    "color": "rgb(88, 88, 88)",
    "font-size": "24px",
    "width": "100%",
    "height": "40px",
    "text-align": "center"
  }
}, " OOOPS, SOMETHING WENT WRONG ", -1 /* HOISTED */);
var _hoisted_14 = {
  id: "pHeaderDetails",
  style: {
    "color": "rgb(88, 88, 88)",
    "font-size": "12px",
    "width": "100%",
    "height": "40px",
    "text-align": "center",
    "padding": "0px 10px"
  }
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_16 = {
  style: {
    "font-size": "13px"
  }
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, "GO BACK", -1 /* HOISTED */);
var _hoisted_18 = [_hoisted_17];
var _hoisted_19 = {
  style: {
    "font-size": "12px",
    "width": "calc(100% - 20px)",
    "height": "120px",
    "margin": "10px",
    "border-radius": "8px",
    "background-color": "rgb(225, 220, 215)",
    "padding": "10px 10px 10px 0px"
  }
};
var _hoisted_20 = {
  style: {
    "width": "99px",
    "height": "103px",
    "float": "left",
    "border-right": "1px solid rgb(100, 110, 120)"
  }
};
var _hoisted_21 = ["src"];
var _hoisted_22 = {
  style: {
    "width": "calc(100% - 100px)",
    "float": "left"
  }
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ticketInfo head",
  style: {
    "height": "24px"
  }
}, "REPORT TICKET", -1 /* HOISTED */);
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "pTicketSystemName",
  "class": "ticketInfo",
  style: {
    "margin-top": "5px"
  }
}, " SYSTEM NAME: ", -1 /* HOISTED */);
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ticketInfo details",
  style: {
    "margin-top": "5px"
  }
}, " SPA System ", -1 /* HOISTED */);
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "pTicketErroNumber",
  "class": "ticketInfo"
}, "STATUS CODE:", -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "ticketInfo details"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ticketInfo"
}, "OCCURED DATE:", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "ticketInfo details"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "pHelpDeskContact",
  "class": "ticketInfo"
}, "CONTACT NUMBER:", -1 /* HOISTED */);
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ticketInfo details"
}, " 6123-801 / 6123-777 (SSD Customer Care) ", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    draggable: "false",
    "class": "brand_logo",
    alt: "Logo",
    width: "90px",
    height: "90px",
    src: _ctx.url + '/spa/images/ErrorIcon.png'
  }, null, 8 /* PROPS */, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    draggable: "false",
    "class": "brand_logo",
    alt: "Logo",
    width: "150px",
    height: "37px",
    src: _ctx.url + '/spa/images/Error.png'
  }, null, 8 /* PROPS */, _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("can change by use of js, but not yet made that function"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    draggable: "false",
    "class": "brand_logo",
    alt: "Logo",
    width: "36px",
    height: "47px",
    src: _ctx.url + '/spa/images/' + _ctx.status_code.substr(0, 1) + '.png'
  }, null, 8 /* PROPS */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    draggable: "false",
    "class": "brand_logo",
    alt: "Logo",
    width: "36px",
    height: "47px",
    src: _ctx.url + '/spa/images/' + _ctx.status_code.substr(1, 1) + '.png'
  }, null, 8 /* PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    draggable: "false",
    "class": "brand_logo",
    alt: "Logo",
    width: "36px",
    height: "47px",
    src: _ctx.url + '/spa/images/' + _ctx.status_code.substr(2, 1) + '.png'
  }, null, 8 /* PROPS */, _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("can be change, and set a default if image does not exist"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    draggable: "false",
    "class": "brand_logo",
    style: {
      "margin-top": "-50px"
    },
    alt: "Logo",
    width: "427px",
    height: "321px",
    src: _ctx.url + '/spa/images/' + _ctx.status_code + '.png'
  }, null, 8 /* PROPS */, _hoisted_12)]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" SORRY FOR THE INCONVINIENCE, WE'RE WORKING ON IT"), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" TRY TO CLICK THE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.goBack();
    })
  }, [].concat(_hoisted_18))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" OR FEEL FREE TO CONTACT US IF THE PROBLEM PERSIST ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    draggable: "false",
    style: {
      "width": "100%",
      "margin-top": "3px"
    },
    src: _ctx.url + '/spa/images/HelpDesk.png'
  }, null, 8 /* PROPS */, _hoisted_21)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("for the part of info to be reported to helpdesk"), _hoisted_24, _hoisted_25, _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.status_code) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.status_name[_ctx.status_code]), 1 /* TEXT */), _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentTimeStamp), 1 /* TEXT */)]), _hoisted_30, _hoisted_31])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=style&index=0&id=14e32491&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=style&index=0&id=14e32491&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.errorInfoContainer {\r\n    height: 645px;\r\n    width: 550px;\r\n    background: rgb(245, 245, 245);\r\n    border-radius: 13px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.19);\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\n}\n.ticketInfo {\r\n    width: 130px;\r\n    height: 18px;\r\n    float: left;\r\n    color: rgb(100, 110, 120);\r\n    padding-left: 10px;\n}\n.ticketInfo.head {\r\n    width: calc(100% - 2px);\r\n    color: rgb(228, 6, 19);\r\n    font-size: 16px;\r\n    border-bottom: 1px solid rgb(100, 110, 120);\r\n    padding-left: 2px;\r\n    vertical-align: top;\n}\n.ticketInfo.details {\r\n    width: calc(100% - 130px);\r\n    color: rgb(10, 10, 10);\r\n    padding-left: 0px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=style&index=0&id=14e32491&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=style&index=0&id=14e32491&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_style_index_0_id_14e32491_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error.vue?vue&type=style&index=0&id=14e32491&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=style&index=0&id=14e32491&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_style_index_0_id_14e32491_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_style_index_0_id_14e32491_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/template/Error.vue":
/*!*****************************************!*\
  !*** ./resources/js/template/Error.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Error_vue_vue_type_template_id_14e32491__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=14e32491 */ "./resources/js/template/Error.vue?vue&type=template&id=14e32491");
/* harmony import */ var _Error_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&lang=js */ "./resources/js/template/Error.vue?vue&type=script&lang=js");
/* harmony import */ var _Error_vue_vue_type_style_index_0_id_14e32491_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error.vue?vue&type=style&index=0&id=14e32491&lang=css */ "./resources/js/template/Error.vue?vue&type=style&index=0&id=14e32491&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Error_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Error_vue_vue_type_template_id_14e32491__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/template/Error.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/template/Error.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/template/Error.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/template/Error.vue?vue&type=template&id=14e32491":
/*!***********************************************************************!*\
  !*** ./resources/js/template/Error.vue?vue&type=template&id=14e32491 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_template_id_14e32491__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_template_id_14e32491__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error.vue?vue&type=template&id=14e32491 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=template&id=14e32491");


/***/ }),

/***/ "./resources/js/template/Error.vue?vue&type=style&index=0&id=14e32491&lang=css":
/*!*************************************************************************************!*\
  !*** ./resources/js/template/Error.vue?vue&type=style&index=0&id=14e32491&lang=css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_style_index_0_id_14e32491_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error.vue?vue&type=style&index=0&id=14e32491&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/template/Error.vue?vue&type=style&index=0&id=14e32491&lang=css");


/***/ })

}]);