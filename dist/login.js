// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []
	
	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\pro\\weexvue\\src\\login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})
	
	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "login-wrap": {
	    "flexDirection": "column",
	    "justifyContent": "flex-start",
	    "height": 1500
	  },
	  "login-cnt": {
	    "width": 750,
	    "height": 700,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "paddingTop": 100,
	    "backgroundImage": "linear-gradient(to top,#FFF,#FF9600)"
	  },
	  "main-pic": {
	    "width": 750,
	    "height": 342
	  },
	  "input-item": {
	    "width": 650,
	    "height": 100,
	    "backgroundColor": "#FFFFFF",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "flexDirection": "row"
	  },
	  "ii1": {
	    "borderTopLeftRadius": 10,
	    "borderTopRightRadius": 10,
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#DDDDDD"
	  },
	  "ii2": {
	    "borderBottomLeftRadius": 10,
	    "borderBottomRightRadius": 10
	  },
	  "id": {
	    "width": 550,
	    "height": 100
	  },
	  "psd": {
	    "width": 550,
	    "height": 100
	  },
	  "login-btn": {
	    "width": 650,
	    "height": 95,
	    "backgroundColor": "#FF0000",
	    "marginTop": 50,
	    "borderWidth": 0,
	    "color": "#FFFFFF",
	    "borderRadius": 10
	  },
	  "reg": {
	    "width": 650,
	    "marginTop": 20,
	    "alignItems": "flex-end"
	  },
	  "reg-text": {
	    "fontSize": 40,
	    "color": "#FF0000"
	  },
	  "login-pic": {
	    "width": 38,
	    "height": 38,
	    "marginLeft": 25,
	    "marginRight": 20
	  }
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var navigator = weex.requireModule('navigator');
	var modal = weex.requireModule('modal');
	var stream = weex.requireModule('stream');
	exports.default = {
	    data: {
	        navBarHeight: 88,
	        title: '账号登录',
	        mainPic: 'http://file.ry600.com/snapshot//files/af/afvnal1p3sa59q79/2017-02-06/c6raznymddkjy4wk.jpg',
	        idPic: 'http://file.ry600.com/snapshot/vms/site/di/di70684438lrfavs/du9sks0f7yefy23z/image/user_bac1.png',
	        pswPic: 'http://file.ry600.com/snapshot/vms/site/di/di70684438lrfavs/du9sks0f7yefy23z/image/pws_bac.png',
	        httpUrl: 'http://58.248.28.209/jsonaction/websiteaction.action?action=VSRetail.getUser&orgTypeId=3&mobile=',
	        phoneNum: '',
	        psd: '',
	        getUrl: '',
	        success: '',
	        userName: '',
	        test: ''
	    },
	    components: {
	        ryBtn: __webpack_require__(3),
	        ryNavpage: __webpack_require__(7)
	    },
	    methods: {
	        click: function click() {
	            console.log(this);
	        },
	        getPhoneNum: function getPhoneNum() {
	            var url = this.$getConfig().bundleUrl;
	            // console.log("lllllllllllll" + ((url.split("?")[1]) == undefined));
	            if (url.split("?")[1] == undefined) {
	                this.phoneNum = "";
	            } else {
	                var array = url.split("?")[1].split("=");
	                this.phoneNum = array[0] == "mobile" ? array[1] : "";
	            }
	        },
	        phnChange: function phnChange(event) {
	            this.phoneNum = event.value;
	        },
	        psdChange: function psdChange(event) {
	            this.psd = event.value;
	        },
	        pop: function pop() {
	            var me = this;
	            var params = {
	                'animated': 'false'
	            };
	            navigator.pop(params, function () {});
	        },
	        alertMsg: function alertMsg(a) {
	            var msg = '';
	            switch (a) {
	                case 1:
	                    msg = '请输入11位数手机号';break;
	                case 2:
	                    msg = '请输入6~14位密码';break;
	                case 3:
	                    msg = '请再次输入密码';break;
	                case 4:
	                    msg = '两次输入的密码不一致';break;
	                case 5:
	                    msg = '登录成功';break;
	            }
	            modal.alert({
	                'message': msg,
	                'okTitle': 'OK'
	            }, function () {});
	        },
	        home: function home() {
	            var url = this.$getConfig().bundleUrl;
	            console.log("thisUrl = " + url);
	            url = url.split('/').slice(0, -1).join('/') + '/dist/foo.weex.js?info=';
	            // url = url + encodeURIComponent(this.phoneNum + "+" + this.psd);
	            url = "http://192.168.1.153:8080/dist/foo.weex.js";
	            console.log("thisUrl2 = " + url);
	            this.test = url;
	            var params = {
	                'url': url,
	                'animated': 'true'
	            };
	            navigator.push(params, function () {});
	        },
	        testFunc: function testFunc() {
	            var url = this.$getConfig().bundleUrl;
	            // console.log(url);
	            navigator.push({
	                'url': url,
	                'duration': 'true'
	            }, function () {});
	        },
	        login: function login() {
	            // console.log(this.title);
	            var me = this;
	            this.getUrl = this.httpUrl + this.phoneNum + "&password=" + this.psd;
	            // var GET_URL_JSONP = 'http://58.248.28.209/jsonaction/websiteaction.action?action=VSRetail.getUser&orgTypeId=3&mobile=13640273085&password=12321';
	            if (me.phoneNum.length < 11) {
	                me.alertMsg(1);
	            } else if (!me.psd) {
	                me.alertMsg(2);
	            } else {
	                stream.fetch({
	                    method: 'GET',
	                    url: this.getUrl,
	                    type: 'json'
	                }, function (response) {
	                    if (!response.ok) {
	                        me.getJsonpResult = "request failed";
	                    } else {
	                        me.getJsonpResult = JSON.stringify(response.data);
	                        me.success = response.data.success;
	                        if (me.success) {
	                            modal.toast({
	                                'message': '登录成功',
	                                'duration': '0.5'
	                            });
	                            me.home();
	
	                            modal.alert({
	                                'message': me.test,
	                                'okTitle': 'OK'
	                            }, function () {});
	                        } else {
	                            modal.alert({
	                                'message': response.data.message,
	                                'okTitle': 'OK'
	                            }, function () {});
	                        }
	                    }
	                }, function (response) {
	                    me.getJsonpResult = "bytes received:" + response.length;
	                });
	            }
	        },
	        register: function register() {
	            var url = this.$getConfig().bundleUrl;
	            url = url.split('/').slice(0, -1).join('/') + '/register.js';
	            var params = {
	                'url': url,
	                'animated': 'true'
	            };
	            navigator.push(params, function () {});
	        }
	    },
	    created: function created() {
	        this.getPhoneNum();
	        var env = weex.config.env;
	        if (env) {
	            if (env.platform == 'iOS') {
	                var scale = env.scale;
	                var deviceWidth = env.deviceWidth / scale;
	                this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	            }
	        }
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []
	
	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)
	
	/* script */
	__vue_exports__ = __webpack_require__(5)
	
	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\pro\\weexvue\\src\\ry-btn.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})
	
	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "height": 95,
	    "marginTop": 50,
	    "borderWidth": 0,
	    "borderRadius": 10,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "btn-clr-orange": {
	    "backgroundColor": "#FF5500"
	  },
	  "btn-clr-red": {
	    "backgroundColor": "#FF0000"
	  },
	  "btn-sz-small": {
	    "width": 200
	  },
	  "btn-sz-middle": {
	    "width": 400
	  },
	  "btn-sz-large": {
	    "width": 650
	  },
	  "btn-val": {
	    "color": "#FFFFFF",
	    "fontSize": 45
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		props: {
			color: { default: 'orange' },
			size: { default: 'large' },
			value: { default: '' }
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: ['btn', 'btn-clr-' + _vm.color, 'btn-sz-' + _vm.size]
	  }, [_h('text', {
	    staticClass: ["btn-val"]
	  }, [_vm._s(_vm.value)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []
	
	/* styles */
	__vue_styles__.push(__webpack_require__(8)
	)
	
	/* script */
	__vue_exports__ = __webpack_require__(9)
	
	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\pro\\weexvue\\src\\ry-navpage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})
	
	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
	  components: {
	    ryNavbar: __webpack_require__(10)
	  },
	  props: {
	    dataRole: { default: 'navbar' },
	    backgroundColor: { default: 'black' },
	    height: { default: 88 },
	    title: { default: "" },
	    titleColor: { default: 'black' },
	    rightItemSrc: { default: '' },
	    rightItemTitle: { default: '' },
	    rightItemColor: { default: 'black' },
	    leftItemSrc: { default: '' },
	    leftItemTitle: { default: '' },
	    leftItemColor: { default: 'black' }
	  },
	  methods: {
	    naviBarRightItemClick: function naviBarRightItemClick(e) {
	      this.$emit('naviBarRightItemClick', e);
	    },
	    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
	      this.$emit('naviBarLeftItemClick', e);
	    }
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []
	
	/* styles */
	__vue_styles__.push(__webpack_require__(11)
	)
	
	/* script */
	__vue_exports__ = __webpack_require__(12)
	
	/* template */
	var __vue_template__ = __webpack_require__(13)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\pro\\weexvue\\src\\ry-navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
	  props: {
	    dataRole: { default: 'navbar' },
	    //导航条背景色
	    backgroundColor: { default: 'black' },
	    //导航条高度
	    height: { default: 88 },
	    //导航条标题 
	    title: { default: '' },
	    //导航条标题颜色
	    titleColor: { default: 'black' },
	    //右侧按钮图片
	    rightItemSrc: { default: '' },
	    //右侧按钮标题
	    rightItemTitle: { default: '' },
	    //右侧按钮标题颜色
	    rightItemColor: { default: 'black' },
	    //左侧按钮图片
	    leftItemSrc: { default: '' },
	    //左侧按钮标题
	    leftItemTitle: { default: '' },
	    //左侧按钮颜色
	    leftItemColor: { default: 'black' }
	  },
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$emit('naviBarRightItemClick');
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$emit('naviBarLeftItemClick');
	    }
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["container"],
	    style: {
	      height: _vm.height,
	      backgroundColor: _vm.backgroundColor
	    },
	    attrs: {
	      "dataRole": _vm.dataRole
	    }
	  }, [(!_vm.rightItemSrc) ? _h('text', {
	    staticClass: ["right-text"],
	    style: {
	      color: _vm.rightItemColor
	    },
	    attrs: {
	      "naviItemPosition": "right"
	    },
	    on: {
	      "click": _vm.onclickrightitem
	    }
	  }, [_vm._s(_vm.rightItemTitle)]) : _vm._e(), (_vm.rightItemSrc) ? _h('image', {
	    staticClass: ["right-image"],
	    attrs: {
	      "naviItemPosition": "right",
	      "src": _vm.rightItemSrc
	    },
	    on: {
	      "click": _vm.onclickrightitem
	    }
	  }) : _vm._e(), (!_vm.leftItemSrc) ? _h('text', {
	    staticClass: ["left-text"],
	    style: {
	      color: _vm.leftItemColor
	    },
	    attrs: {
	      "naviItemPosition": "left"
	    },
	    on: {
	      "click": _vm.onclickleftitem
	    }
	  }, [_vm._s(_vm.leftItemTitle)]) : _vm._e(), (_vm.leftItemSrc) ? _h('image', {
	    staticClass: ["left-image"],
	    attrs: {
	      "naviItemPosition": "left",
	      "src": _vm.leftItemSrc
	    },
	    on: {
	      "click": _vm.onclickleftitem
	    }
	  }) : _vm._e(), _h('text', {
	    staticClass: ["center-text"],
	    style: {
	      color: _vm.titleColor
	    },
	    attrs: {
	      "naviItemPosition": "center"
	    }
	  }, [_vm._s(_vm.title)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["wrapper"]
	  }, [_h('ry-navbar', {
	    attrs: {
	      "dataRole": _vm.dataRole,
	      "height": _vm.height,
	      "backgroundColor": _vm.backgroundColor,
	      "title": _vm.title,
	      "titleColor": _vm.titleColor,
	      "leftItemSrc": _vm.leftItemSrc,
	      "leftItemTitle": _vm.leftItemTitle,
	      "leftItemColor": _vm.leftItemColor,
	      "rightItemSrc": _vm.rightItemSrc,
	      "rightItemTitle": _vm.rightItemTitle,
	      "rightItemColor": _vm.rightItemColor
	    },
	    on: {
	      "naviBarRightItemClick": _vm.naviBarRightItemClick,
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }), _h('div', {
	    staticClass: ["wrapper"],
	    style: {
	      marginTop: _vm.height
	    }
	  }, [_vm._t("default")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('ry-navpage', {
	    attrs: {
	      "dataRole": "none",
	      "height": _vm.navBarHeight,
	      "title": _vm.title,
	      "backgroundColor": "#F50",
	      "titleColor": "white",
	      "leftItemTitle": "More",
	      "leftItemColor": "white",
	      "rightItemSrc": "http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
	    },
	    on: {
	      "naviBarLeftItemClick": function($event) {},
	      "naviBarRightItemClick": function($event) {}
	    }
	  }, [_h('div', {
	    staticClass: ["login-wrap"]
	  }, [_h('image', {
	    staticClass: ["main-pic"],
	    attrs: {
	      "src": _vm.mainPic
	    }
	  }), _h('div', {
	    staticClass: ["login-cnt"]
	  }, [_h('div', {
	    staticClass: ["input-item", "ii1"]
	  }, [_h('image', {
	    staticClass: ["login-pic"],
	    attrs: {
	      "src": _vm.idPic
	    }
	  }), _h('input', {
	    staticClass: ["id"],
	    attrs: {
	      "type": "tel",
	      "maxlength": "11",
	      "placeholder": "手机号码",
	      "value": _vm.phoneNum
	    },
	    on: {
	      "change": _vm.phnChange
	    }
	  })]), _h('div', {
	    staticClass: ["input-item", "ii2"]
	  }, [_h('image', {
	    staticClass: ["login-pic"],
	    attrs: {
	      "src": _vm.pswPic
	    }
	  }), _h('input', {
	    staticClass: ["id"],
	    attrs: {
	      "type": "password",
	      "placeholder": "密码"
	    },
	    on: {
	      "change": _vm.psdChange
	    }
	  })]), _h('ry-btn', {
	    attrs: {
	      "value": "登录"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.home($event)
	      }
	    }
	  }), _h('div', {
	    staticClass: ["reg"]
	  }, [_h('text', {
	    staticClass: ["reg-text"],
	    on: {
	      "click": _vm.register
	    }
	  }, ["立即注册"])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGY0ZDEyNjU2YzllNDIwNmM0OWUiLCJ3ZWJwYWNrOi8vLy4vbG9naW4udnVlIiwid2VicGFjazovLy8uL2xvZ2luLnZ1ZT9hMmRlIiwid2VicGFjazovLy8uL2xvZ2luLnZ1ZT81NjU0Iiwid2VicGFjazovLy8uL3J5LWJ0bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcnktYnRuLnZ1ZT8wODUyIiwid2VicGFjazovLy8uL3J5LWJ0bi52dWU/OWQxNiIsIndlYnBhY2s6Ly8vLi9yeS1idG4udnVlP2JiZjUiLCJ3ZWJwYWNrOi8vLy4vcnktbmF2cGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcnktbmF2cGFnZS52dWU/YjFiYiIsIndlYnBhY2s6Ly8vLi9yeS1uYXZwYWdlLnZ1ZT9jNDUzIiwid2VicGFjazovLy8uL3J5LW5hdmJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcnktbmF2YmFyLnZ1ZT8zYWY0Iiwid2VicGFjazovLy8uL3J5LW5hdmJhci52dWU/NmVmMSIsIndlYnBhY2s6Ly8vLi9yeS1uYXZiYXIudnVlP2ExZDQiLCJ3ZWJwYWNrOi8vLy4vcnktbmF2cGFnZS52dWU/NzZiYyIsIndlYnBhY2s6Ly8vLi9sb2dpbi52dWU/MmU2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBc0QsbURBQW1ELElBQUk7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDckVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkMiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZjRkMTI2NTZjOWU0MjA2YzQ5ZSIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0gW11cblxuLyogc3R5bGVzICovXG5fX3Z1ZV9zdHlsZXNfXy5wdXNoKHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtbG9hZGVyIXdlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWRlODZkMzVjIXdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvc2NyaXB0LWxvYWRlciFiYWJlbC1sb2FkZXIhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9naW4udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWRlODZkMzVjIXdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbG9naW4udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkU6XFxcXHByb1xcXFx3ZWV4dnVlXFxcXHNyY1xcXFxsb2dpbi52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5zdHlsZSA9IF9fdnVlX29wdGlvbnNfXy5zdHlsZSB8fCB7fVxuX192dWVfc3R5bGVzX18uZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG5mb3IgKHZhciBuYW1lIGluIG1vZHVsZSkge1xuX192dWVfb3B0aW9uc19fLnN0eWxlW25hbWVdID0gbW9kdWxlW25hbWVdXG59XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xubW9kdWxlLmV4cG9ydHMuZWwgPSAndHJ1ZSdcbm5ldyBWdWUobW9kdWxlLmV4cG9ydHMpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvZ2luLnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImxvZ2luLXdyYXBcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJoZWlnaHRcIjogMTUwMFxuICB9LFxuICBcImxvZ2luLWNudFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJoZWlnaHRcIjogNzAwLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDEwMCxcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCh0byB0b3AsI0ZGRiwjRkY5NjAwKVwiXG4gIH0sXG4gIFwibWFpbi1waWNcIjoge1xuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiaGVpZ2h0XCI6IDM0MlxuICB9LFxuICBcImlucHV0LWl0ZW1cIjoge1xuICAgIFwid2lkdGhcIjogNjUwLFxuICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiaWkxXCI6IHtcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogMTAsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiAxMCxcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNERERERERcIlxuICB9LFxuICBcImlpMlwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IDEwLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogMTBcbiAgfSxcbiAgXCJpZFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA1NTAsXG4gICAgXCJoZWlnaHRcIjogMTAwXG4gIH0sXG4gIFwicHNkXCI6IHtcbiAgICBcIndpZHRoXCI6IDU1MCxcbiAgICBcImhlaWdodFwiOiAxMDBcbiAgfSxcbiAgXCJsb2dpbi1idG5cIjoge1xuICAgIFwid2lkdGhcIjogNjUwLFxuICAgIFwiaGVpZ2h0XCI6IDk1LFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGMDAwMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IDUwLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogMCxcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDEwXG4gIH0sXG4gIFwicmVnXCI6IHtcbiAgICBcIndpZHRoXCI6IDY1MCxcbiAgICBcIm1hcmdpblRvcFwiOiAyMCxcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwicmVnLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogNDAsXG4gICAgXCJjb2xvclwiOiBcIiNGRjAwMDBcIlxuICB9LFxuICBcImxvZ2luLXBpY1wiOiB7XG4gICAgXCJ3aWR0aFwiOiAzOCxcbiAgICBcImhlaWdodFwiOiAzOCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMjUsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAyMFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtbG9hZGVyLmpzIUM6L1VzZXJzL3J5dXNlci8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1kZTg2ZDM1YyFDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbnZhciBuYXZpZ2F0b3IgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ25hdmlnYXRvcicpO1xudmFyIG1vZGFsID0gd2VleC5yZXF1aXJlTW9kdWxlKCdtb2RhbCcpO1xudmFyIHN0cmVhbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnc3RyZWFtJyk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBuYXZCYXJIZWlnaHQ6IDg4LFxuICAgICAgICB0aXRsZTogJ+i0puWPt+eZu+W9lScsXG4gICAgICAgIG1haW5QaWM6ICdodHRwOi8vZmlsZS5yeTYwMC5jb20vc25hcHNob3QvL2ZpbGVzL2FmL2Fmdm5hbDFwM3NhNTlxNzkvMjAxNy0wMi0wNi9jNnJhem55bWRka2p5NHdrLmpwZycsXG4gICAgICAgIGlkUGljOiAnaHR0cDovL2ZpbGUucnk2MDAuY29tL3NuYXBzaG90L3Ztcy9zaXRlL2RpL2RpNzA2ODQ0MzhscmZhdnMvZHU5c2tzMGY3eWVmeTIzei9pbWFnZS91c2VyX2JhYzEucG5nJyxcbiAgICAgICAgcHN3UGljOiAnaHR0cDovL2ZpbGUucnk2MDAuY29tL3NuYXBzaG90L3Ztcy9zaXRlL2RpL2RpNzA2ODQ0MzhscmZhdnMvZHU5c2tzMGY3eWVmeTIzei9pbWFnZS9wd3NfYmFjLnBuZycsXG4gICAgICAgIGh0dHBVcmw6ICdodHRwOi8vNTguMjQ4LjI4LjIwOS9qc29uYWN0aW9uL3dlYnNpdGVhY3Rpb24uYWN0aW9uP2FjdGlvbj1WU1JldGFpbC5nZXRVc2VyJm9yZ1R5cGVJZD0zJm1vYmlsZT0nLFxuICAgICAgICBwaG9uZU51bTogJycsXG4gICAgICAgIHBzZDogJycsXG4gICAgICAgIGdldFVybDogJycsXG4gICAgICAgIHN1Y2Nlc3M6ICcnLFxuICAgICAgICB1c2VyTmFtZTogJycsXG4gICAgICAgIHRlc3Q6ICcnXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIHJ5QnRuOiByZXF1aXJlKCcuL3J5LWJ0bi52dWUnKSxcbiAgICAgICAgcnlOYXZwYWdlOiByZXF1aXJlKCcuL3J5LW5hdnBhZ2UudnVlJylcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFBob25lTnVtOiBmdW5jdGlvbiBnZXRQaG9uZU51bSgpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLiRnZXRDb25maWcoKS5idW5kbGVVcmw7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxsbGxsbGxsbGxsbGxcIiArICgodXJsLnNwbGl0KFwiP1wiKVsxXSkgPT0gdW5kZWZpbmVkKSk7XG4gICAgICAgICAgICBpZiAodXJsLnNwbGl0KFwiP1wiKVsxXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBob25lTnVtID0gXCJcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGFycmF5ID0gdXJsLnNwbGl0KFwiP1wiKVsxXS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZU51bSA9IGFycmF5WzBdID09IFwibW9iaWxlXCIgPyBhcnJheVsxXSA6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBobkNoYW5nZTogZnVuY3Rpb24gcGhuQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBob25lTnVtID0gZXZlbnQudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBzZENoYW5nZTogZnVuY3Rpb24gcHNkQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBzZCA9IGV2ZW50LnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBwb3A6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICdhbmltYXRlZCc6ICdmYWxzZSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBuYXZpZ2F0b3IucG9wKHBhcmFtcywgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICB9LFxuICAgICAgICBhbGVydE1zZzogZnVuY3Rpb24gYWxlcnRNc2coYSkge1xuICAgICAgICAgICAgdmFyIG1zZyA9ICcnO1xuICAgICAgICAgICAgc3dpdGNoIChhKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBtc2cgPSAn6K+36L6T5YWlMTHkvY3mlbDmiYvmnLrlj7cnO2JyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgbXNnID0gJ+ivt+i+k+WFpTZ+MTTkvY3lr4bnoIEnO2JyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgbXNnID0gJ+ivt+WGjeasoei+k+WFpeWvhueggSc7YnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBtc2cgPSAn5Lik5qyh6L6T5YWl55qE5a+G56CB5LiN5LiA6Ie0JzticmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIG1zZyA9ICfnmbvlvZXmiJDlip8nO2JyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kYWwuYWxlcnQoe1xuICAgICAgICAgICAgICAgICdtZXNzYWdlJzogbXNnLFxuICAgICAgICAgICAgICAgICdva1RpdGxlJzogJ09LJ1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICB9LFxuICAgICAgICBob21lOiBmdW5jdGlvbiBob21lKCkge1xuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpc1VybCA9IFwiICsgdXJsKTtcbiAgICAgICAgICAgIHVybCA9IHVybC5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5qb2luKCcvJykgKyAnL2Rpc3QvZm9vLndlZXguanM/aW5mbz0nO1xuICAgICAgICAgICAgLy8gdXJsID0gdXJsICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucGhvbmVOdW0gKyBcIitcIiArIHRoaXMucHNkKTtcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cDovLzE5Mi4xNjguMS4xNTM6ODA4MC9kaXN0L2Zvby53ZWV4LmpzXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXNVcmwyID0gXCIgKyB1cmwpO1xuICAgICAgICAgICAgdGhpcy50ZXN0ID0gdXJsO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAndXJsJzogdXJsLFxuICAgICAgICAgICAgICAgICdhbmltYXRlZCc6ICd0cnVlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5hdmlnYXRvci5wdXNoKHBhcmFtcywgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICB9LFxuICAgICAgICB0ZXN0RnVuYzogZnVuY3Rpb24gdGVzdEZ1bmMoKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgICAgIG5hdmlnYXRvci5wdXNoKHtcbiAgICAgICAgICAgICAgICAndXJsJzogdXJsLFxuICAgICAgICAgICAgICAgICdkdXJhdGlvbic6ICd0cnVlJ1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICB9LFxuICAgICAgICBsb2dpbjogZnVuY3Rpb24gbG9naW4oKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRpdGxlKTtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmdldFVybCA9IHRoaXMuaHR0cFVybCArIHRoaXMucGhvbmVOdW0gKyBcIiZwYXNzd29yZD1cIiArIHRoaXMucHNkO1xuICAgICAgICAgICAgLy8gdmFyIEdFVF9VUkxfSlNPTlAgPSAnaHR0cDovLzU4LjI0OC4yOC4yMDkvanNvbmFjdGlvbi93ZWJzaXRlYWN0aW9uLmFjdGlvbj9hY3Rpb249VlNSZXRhaWwuZ2V0VXNlciZvcmdUeXBlSWQ9MyZtb2JpbGU9MTM2NDAyNzMwODUmcGFzc3dvcmQ9MTIzMjEnO1xuICAgICAgICAgICAgaWYgKG1lLnBob25lTnVtLmxlbmd0aCA8IDExKSB7XG4gICAgICAgICAgICAgICAgbWUuYWxlcnRNc2coMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFtZS5wc2QpIHtcbiAgICAgICAgICAgICAgICBtZS5hbGVydE1zZygyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtLmZldGNoKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLmdldFVybCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2pzb24nXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmdldEpzb25wUmVzdWx0ID0gXCJyZXF1ZXN0IGZhaWxlZFwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZ2V0SnNvbnBSZXN1bHQgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnN1Y2Nlc3MgPSByZXNwb25zZS5kYXRhLnN1Y2Nlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLnRvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnOiAn55m75b2V5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2R1cmF0aW9uJzogJzAuNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5ob21lKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJzogbWUudGVzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29rVGl0bGUnOiAnT0snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJzogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb2tUaXRsZSc6ICdPSydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0SnNvbnBSZXN1bHQgPSBcImJ5dGVzIHJlY2VpdmVkOlwiICsgcmVzcG9uc2UubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsO1xuICAgICAgICAgICAgdXJsID0gdXJsLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKSArICcvcmVnaXN0ZXIuanMnO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAndXJsJzogdXJsLFxuICAgICAgICAgICAgICAgICdhbmltYXRlZCc6ICd0cnVlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5hdmlnYXRvci5wdXNoKHBhcmFtcywgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmdldFBob25lTnVtKCk7XG4gICAgICAgIHZhciBlbnYgPSB3ZWV4LmNvbmZpZy5lbnY7XG4gICAgICAgIGlmIChlbnYpIHtcbiAgICAgICAgICAgIGlmIChlbnYucGxhdGZvcm0gPT0gJ2lPUycpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGUgPSBlbnYuc2NhbGU7XG4gICAgICAgICAgICAgICAgdmFyIGRldmljZVdpZHRoID0gZW52LmRldmljZVdpZHRoIC8gc2NhbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZCYXJIZWlnaHQgPSA2NC4wICogNzUwLjAgLyBkZXZpY2VXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2NyaXB0LWxvYWRlci5qcyFDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vYmFiZWwtbG9hZGVyL2xpYiFDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0gW11cblxuLyogc3R5bGVzICovXG5fX3Z1ZV9zdHlsZXNfXy5wdXNoKHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtbG9hZGVyIXdlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFkOGRhNmJkIXdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3J5LWJ0bi52dWVcIilcbilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NjcmlwdC1sb2FkZXIhYmFiZWwtbG9hZGVyIXdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3J5LWJ0bi52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhd2VleC12dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWQ4ZGE2YmQhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yeS1idG4udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkU6XFxcXHByb1xcXFx3ZWV4dnVlXFxcXHNyY1xcXFxyeS1idG4udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uc3R5bGUgPSBfX3Z1ZV9vcHRpb25zX18uc3R5bGUgfHwge31cbl9fdnVlX3N0eWxlc19fLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuZm9yICh2YXIgbmFtZSBpbiBtb2R1bGUpIHtcbl9fdnVlX29wdGlvbnNfXy5zdHlsZVtuYW1lXSA9IG1vZHVsZVtuYW1lXVxufVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcnktYnRuLnZ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJidG5cIjoge1xuICAgIFwiaGVpZ2h0XCI6IDk1LFxuICAgIFwibWFyZ2luVG9wXCI6IDUwLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMCxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJidG4tY2xyLW9yYW5nZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkY1NTAwXCJcbiAgfSxcbiAgXCJidG4tY2xyLXJlZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkYwMDAwXCJcbiAgfSxcbiAgXCJidG4tc3otc21hbGxcIjoge1xuICAgIFwid2lkdGhcIjogMjAwXG4gIH0sXG4gIFwiYnRuLXN6LW1pZGRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiA0MDBcbiAgfSxcbiAgXCJidG4tc3otbGFyZ2VcIjoge1xuICAgIFwid2lkdGhcIjogNjUwXG4gIH0sXG4gIFwiYnRuLXZhbFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IDQ1XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1sb2FkZXIuanMhQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFkOGRhNmJkIUM6L1VzZXJzL3J5dXNlci8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yeS1idG4udnVlXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwcm9wczoge1xuXHRcdGNvbG9yOiB7IGRlZmF1bHQ6ICdvcmFuZ2UnIH0sXG5cdFx0c2l6ZTogeyBkZWZhdWx0OiAnbGFyZ2UnIH0sXG5cdFx0dmFsdWU6IHsgZGVmYXVsdDogJycgfVxuXHR9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEM6L1VzZXJzL3J5dXNlci8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3NjcmlwdC1sb2FkZXIuanMhQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L2JhYmVsLWxvYWRlci9saWIhQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3J5LWJ0bi52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9oKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYnRuJywgJ2J0bi1jbHItJyArIF92bS5jb2xvciwgJ2J0bi1zei0nICsgX3ZtLnNpemVdXG4gIH0sIFtfaCgndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiYnRuLXZhbFwiXVxuICB9LCBbX3ZtLl9zKF92bS52YWx1ZSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMWQ4ZGE2YmQhQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcnktYnRuLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IFtdXG5cbi8qIHN0eWxlcyAqL1xuX192dWVfc3R5bGVzX18ucHVzaChyZXF1aXJlKFwiISF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLWxvYWRlciF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1kZDBmZjlkYSF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yeS1uYXZwYWdlLnZ1ZVwiKVxuKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvc2NyaXB0LWxvYWRlciFiYWJlbC1sb2FkZXIhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcnktbmF2cGFnZS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhd2VleC12dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZGQwZmY5ZGEhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yeS1uYXZwYWdlLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJFOlxcXFxwcm9cXFxcd2VleHZ1ZVxcXFxzcmNcXFxccnktbmF2cGFnZS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5zdHlsZSA9IF9fdnVlX29wdGlvbnNfXy5zdHlsZSB8fCB7fVxuX192dWVfc3R5bGVzX18uZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG5mb3IgKHZhciBuYW1lIGluIG1vZHVsZSkge1xuX192dWVfb3B0aW9uc19fLnN0eWxlW25hbWVdID0gbW9kdWxlW25hbWVdXG59XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yeS1uYXZwYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwcGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwid2lkdGhcIjogNzUwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1sb2FkZXIuanMhQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWRkMGZmOWRhIUM6L1VzZXJzL3J5dXNlci8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yeS1uYXZwYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wb25lbnRzOiB7XG4gICAgcnlOYXZiYXI6IHJlcXVpcmUoJy4vcnktbmF2YmFyLnZ1ZScpXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgZGF0YVJvbGU6IHsgZGVmYXVsdDogJ25hdmJhcicgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHsgZGVmYXVsdDogJ2JsYWNrJyB9LFxuICAgIGhlaWdodDogeyBkZWZhdWx0OiA4OCB9LFxuICAgIHRpdGxlOiB7IGRlZmF1bHQ6IFwiXCIgfSxcbiAgICB0aXRsZUNvbG9yOiB7IGRlZmF1bHQ6ICdibGFjaycgfSxcbiAgICByaWdodEl0ZW1TcmM6IHsgZGVmYXVsdDogJycgfSxcbiAgICByaWdodEl0ZW1UaXRsZTogeyBkZWZhdWx0OiAnJyB9LFxuICAgIHJpZ2h0SXRlbUNvbG9yOiB7IGRlZmF1bHQ6ICdibGFjaycgfSxcbiAgICBsZWZ0SXRlbVNyYzogeyBkZWZhdWx0OiAnJyB9LFxuICAgIGxlZnRJdGVtVGl0bGU6IHsgZGVmYXVsdDogJycgfSxcbiAgICBsZWZ0SXRlbUNvbG9yOiB7IGRlZmF1bHQ6ICdibGFjaycgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbmF2aUJhclJpZ2h0SXRlbUNsaWNrOiBmdW5jdGlvbiBuYXZpQmFyUmlnaHRJdGVtQ2xpY2soZSkge1xuICAgICAgdGhpcy4kZW1pdCgnbmF2aUJhclJpZ2h0SXRlbUNsaWNrJywgZSk7XG4gICAgfSxcbiAgICBuYXZpQmFyTGVmdEl0ZW1DbGljazogZnVuY3Rpb24gbmF2aUJhckxlZnRJdGVtQ2xpY2soZSkge1xuICAgICAgdGhpcy4kZW1pdCgnbmF2aUJhckxlZnRJdGVtQ2xpY2snLCBlKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2NyaXB0LWxvYWRlci5qcyFDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vYmFiZWwtbG9hZGVyL2xpYiFDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vcnktbmF2cGFnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSBbXVxuXG4vKiBzdHlsZXMgKi9cbl9fdnVlX3N0eWxlc19fLnB1c2gocmVxdWlyZShcIiEhd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1sb2FkZXIhd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNzMzMWMyM2Yhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcnktbmF2YmFyLnZ1ZVwiKVxuKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvc2NyaXB0LWxvYWRlciFiYWJlbC1sb2FkZXIhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcnktbmF2YmFyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03MzMxYzIzZiF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3J5LW5hdmJhci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiRTpcXFxccHJvXFxcXHdlZXh2dWVcXFxcc3JjXFxcXHJ5LW5hdmJhci52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5zdHlsZSA9IF9fdnVlX29wdGlvbnNfXy5zdHlsZSB8fCB7fVxuX192dWVfc3R5bGVzX18uZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG5mb3IgKHZhciBuYW1lIGluIG1vZHVsZSkge1xuX192dWVfb3B0aW9uc19fLnN0eWxlW25hbWVdID0gbW9kdWxlW25hbWVdXG59XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yeS1uYXZiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwid2lkdGhcIjogNzUwXG4gIH0sXG4gIFwicmlnaHQtdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjgsXG4gICAgXCJyaWdodFwiOiAzMixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImZvbnRGYW1pbHlcIjogXCInT3BlbiBTYW5zJywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIFwibGVmdC10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyOCxcbiAgICBcImxlZnRcIjogMzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCIsXG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImZvbnRGYW1pbHlcIjogXCInT3BlbiBTYW5zJywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIFwiY2VudGVyLXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDI1LFxuICAgIFwibGVmdFwiOiAxNzIsXG4gICAgXCJyaWdodFwiOiAxNzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IDM2LFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcImxlZnQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwibGVmdFwiOiAyOCxcbiAgICBcIndpZHRoXCI6IDUwLFxuICAgIFwiaGVpZ2h0XCI6IDUwXG4gIH0sXG4gIFwicmlnaHQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwicmlnaHRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA1MCxcbiAgICBcImhlaWdodFwiOiA1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtbG9hZGVyLmpzIUM6L1VzZXJzL3J5dXNlci8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03MzMxYzIzZiFDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcnktbmF2YmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3BzOiB7XG4gICAgZGF0YVJvbGU6IHsgZGVmYXVsdDogJ25hdmJhcicgfSxcbiAgICAvL+WvvOiIquadoeiDjOaZr+iJslxuICAgIGJhY2tncm91bmRDb2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH0sXG4gICAgLy/lr7zoiKrmnaHpq5jluqZcbiAgICBoZWlnaHQ6IHsgZGVmYXVsdDogODggfSxcbiAgICAvL+WvvOiIquadoeagh+mimCBcbiAgICB0aXRsZTogeyBkZWZhdWx0OiAnJyB9LFxuICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXG4gICAgdGl0bGVDb2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH0sXG4gICAgLy/lj7PkvqfmjInpkq7lm77niYdcbiAgICByaWdodEl0ZW1TcmM6IHsgZGVmYXVsdDogJycgfSxcbiAgICAvL+WPs+S+p+aMiemSruagh+mimFxuICAgIHJpZ2h0SXRlbVRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXG4gICAgLy/lj7PkvqfmjInpkq7moIfpopjpopzoibJcbiAgICByaWdodEl0ZW1Db2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH0sXG4gICAgLy/lt6bkvqfmjInpkq7lm77niYdcbiAgICBsZWZ0SXRlbVNyYzogeyBkZWZhdWx0OiAnJyB9LFxuICAgIC8v5bem5L6n5oyJ6ZKu5qCH6aKYXG4gICAgbGVmdEl0ZW1UaXRsZTogeyBkZWZhdWx0OiAnJyB9LFxuICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXG4gICAgbGVmdEl0ZW1Db2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIG9uY2xpY2tyaWdodGl0ZW0oZSkge1xuICAgICAgdGhpcy4kZW1pdCgnbmF2aUJhclJpZ2h0SXRlbUNsaWNrJyk7XG4gICAgfSxcbiAgICBvbmNsaWNrbGVmdGl0ZW06IGZ1bmN0aW9uIG9uY2xpY2tsZWZ0aXRlbShlKSB7XG4gICAgICB0aGlzLiRlbWl0KCduYXZpQmFyTGVmdEl0ZW1DbGljaycpO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zY3JpcHQtbG9hZGVyLmpzIUM6L1VzZXJzL3J5dXNlci8ueHRvb2xraXQvfi9iYWJlbC1sb2FkZXIvbGliIUM6L1VzZXJzL3J5dXNlci8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9yeS1uYXZiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2goJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiY29udGFpbmVyXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBoZWlnaHQ6IF92bS5oZWlnaHQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFSb2xlXCI6IF92bS5kYXRhUm9sZVxuICAgIH1cbiAgfSwgWyghX3ZtLnJpZ2h0SXRlbVNyYykgPyBfaCgndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1wicmlnaHQtdGV4dFwiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IF92bS5yaWdodEl0ZW1Db2xvclxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcInJpZ2h0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbmNsaWNrcmlnaHRpdGVtXG4gICAgfVxuICB9LCBbX3ZtLl9zKF92bS5yaWdodEl0ZW1UaXRsZSldKSA6IF92bS5fZSgpLCAoX3ZtLnJpZ2h0SXRlbVNyYykgPyBfaCgnaW1hZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcInJpZ2h0LWltYWdlXCJdLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgXCJzcmNcIjogX3ZtLnJpZ2h0SXRlbVNyY1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uY2xpY2tyaWdodGl0ZW1cbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksICghX3ZtLmxlZnRJdGVtU3JjKSA/IF9oKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJsZWZ0LXRleHRcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBfdm0ubGVmdEl0ZW1Db2xvclxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uY2xpY2tsZWZ0aXRlbVxuICAgIH1cbiAgfSwgW192bS5fcyhfdm0ubGVmdEl0ZW1UaXRsZSldKSA6IF92bS5fZSgpLCAoX3ZtLmxlZnRJdGVtU3JjKSA/IF9oKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogW1wibGVmdC1pbWFnZVwiXSxcbiAgICBhdHRyczoge1xuICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgXCJzcmNcIjogX3ZtLmxlZnRJdGVtU3JjXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25jbGlja2xlZnRpdGVtXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfaCgndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiY2VudGVyLXRleHRcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBfdm0udGl0bGVDb2xvclxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImNlbnRlclwiXG4gICAgfVxuICB9LCBbX3ZtLl9zKF92bS50aXRsZSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzMzMWMyM2YhQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcnktbmF2YmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9oKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcIndyYXBwZXJcIl1cbiAgfSwgW19oKCdyeS1uYXZiYXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVJvbGVcIjogX3ZtLmRhdGFSb2xlLFxuICAgICAgXCJoZWlnaHRcIjogX3ZtLmhlaWdodCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IF92bS5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBcInRpdGxlXCI6IF92bS50aXRsZSxcbiAgICAgIFwidGl0bGVDb2xvclwiOiBfdm0udGl0bGVDb2xvcixcbiAgICAgIFwibGVmdEl0ZW1TcmNcIjogX3ZtLmxlZnRJdGVtU3JjLFxuICAgICAgXCJsZWZ0SXRlbVRpdGxlXCI6IF92bS5sZWZ0SXRlbVRpdGxlLFxuICAgICAgXCJsZWZ0SXRlbUNvbG9yXCI6IF92bS5sZWZ0SXRlbUNvbG9yLFxuICAgICAgXCJyaWdodEl0ZW1TcmNcIjogX3ZtLnJpZ2h0SXRlbVNyYyxcbiAgICAgIFwicmlnaHRJdGVtVGl0bGVcIjogX3ZtLnJpZ2h0SXRlbVRpdGxlLFxuICAgICAgXCJyaWdodEl0ZW1Db2xvclwiOiBfdm0ucmlnaHRJdGVtQ29sb3JcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm5hdmlCYXJSaWdodEl0ZW1DbGlja1wiOiBfdm0ubmF2aUJhclJpZ2h0SXRlbUNsaWNrLFxuICAgICAgXCJuYXZpQmFyTGVmdEl0ZW1DbGlja1wiOiBfdm0ubmF2aUJhckxlZnRJdGVtQ2xpY2tcbiAgICB9XG4gIH0pLCBfaCgnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJ3cmFwcGVyXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBtYXJnaW5Ub3A6IF92bS5oZWlnaHRcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gQzovVXNlcnMvcnl1c2VyLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWRkMGZmOWRhIUM6L1VzZXJzL3J5dXNlci8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3J5LW5hdnBhZ2UudnVlXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2goJ3J5LW5hdnBhZ2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVJvbGVcIjogXCJub25lXCIsXG4gICAgICBcImhlaWdodFwiOiBfdm0ubmF2QmFySGVpZ2h0LFxuICAgICAgXCJ0aXRsZVwiOiBfdm0udGl0bGUsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGNTBcIixcbiAgICAgIFwidGl0bGVDb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICBcImxlZnRJdGVtVGl0bGVcIjogXCJNb3JlXCIsXG4gICAgICBcImxlZnRJdGVtQ29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgXCJyaWdodEl0ZW1TcmNcIjogXCJodHRwOi8vZ3RtczAyLmFsaWNkbi5jb20vdHBzL2kyL1RCMUVEN2lNcFhYWFhYRVhYWFhXQV9CSFhYWC00OC00OC5wbmdcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwibmF2aUJhckxlZnRJdGVtQ2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7fSxcbiAgICAgIFwibmF2aUJhclJpZ2h0SXRlbUNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge31cbiAgICB9XG4gIH0sIFtfaCgnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJsb2dpbi13cmFwXCJdXG4gIH0sIFtfaCgnaW1hZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcIm1haW4tcGljXCJdLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0ubWFpblBpY1xuICAgIH1cbiAgfSksIF9oKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcImxvZ2luLWNudFwiXVxuICB9LCBbX2goJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiaW5wdXQtaXRlbVwiLCBcImlpMVwiXVxuICB9LCBbX2goJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJsb2dpbi1waWNcIl0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5pZFBpY1xuICAgIH1cbiAgfSksIF9oKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiaWRcIl0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRlbFwiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogXCIxMVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuaJi+acuuWPt+eggVwiLFxuICAgICAgXCJ2YWx1ZVwiOiBfdm0ucGhvbmVOdW1cbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0ucGhuQ2hhbmdlXG4gICAgfVxuICB9KV0pLCBfaCgnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJpbnB1dC1pdGVtXCIsIFwiaWkyXCJdXG4gIH0sIFtfaCgnaW1hZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcImxvZ2luLXBpY1wiXSxcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLnBzd1BpY1xuICAgIH1cbiAgfSksIF9oKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiaWRcIl0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5a+G56CBXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0ucHNkQ2hhbmdlXG4gICAgfVxuICB9KV0pLCBfaCgncnktYnRuJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwi55m75b2VXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaG9tZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KSwgX2goJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogW1wicmVnXCJdXG4gIH0sIFtfaCgndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1wicmVnLXRleHRcIl0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnJlZ2lzdGVyXG4gICAgfVxuICB9LCBbXCLnq4vljbPms6jlhoxcIl0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEM6L1VzZXJzL3J5dXNlci8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kZTg2ZDM1YyFDOi9Vc2Vycy9yeXVzZXIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
