webpackHotUpdate(0,{

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar _vuex = __webpack_require__(6);\n\nexports.default = {\n\n    name: 'Show',\n\n    created: function created() {\n        this.retrieveShowDetail(this.$route.params.id);\n    },\n\n    computed: _extends({}, (0, _vuex.mapState)({\n        loadingShow: function loadingShow(state) {\n            return state.show.loading;\n        },\n        show: function show(state) {\n            return state.show.details[this.$route.params.id] || {};\n        }\n    })),\n\n    methods: _extends({}, (0, _vuex.mapActions)(['retrieveShowDetail']))\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vU2hvdy52dWU/MzFmNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7OztVQUlBOztnQ0FDQTttREFDQTtBQUVBOztBQUNBOzs4QkFFQTs7bUNBQ0E7Z0VBQ0E7QUFJQTtBQVBBOztBQVFBLGdEQUNBLENBR0E7QUFwQkEiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbjx0ZW1wbGF0ZT5cbiAgICBcbiAgICA8ZGl2IGlkPVwic2hvdy1kZXRhaWxcIj5cblxuICAgICAgICA8cCB2LWlmPVwibG9hZGluZ1Nob3dcIj5Mb2FkaW5nLi4uPC9wPlxuXG4gICAgICAgIDxwIHYtZWxzZT5Ob3QgbG9hZGluZzwvcD5cblxuICAgICAgICBcbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuXG4gICAgaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgbmFtZTogJ1Nob3cnLFxuXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVTaG93RGV0YWlsKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nU2hvdzogc3RhdGUgPT4gc3RhdGUuc2hvdy5sb2FkaW5nLFxuICAgICAgICAgICAgICAgIHNob3c6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuc2hvdy5kZXRhaWxzW3RoaXMuJHJvdXRlLnBhcmFtcy5pZF0gfHwge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKFtcbiAgICAgICAgICAgICAgICAncmV0cmlldmVTaG93RGV0YWlsJ1xuICAgICAgICAgICAgXSlcbiAgICAgICAgfVxuICAgIH1cblxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNob3cudnVlPzExOGFjNTAyIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})