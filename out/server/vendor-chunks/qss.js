"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/qss";
exports.ids = ["vendor-chunks/qss"];
exports.modules = {

/***/ "(ssr)/./node_modules/qss/dist/qss.mjs":
/*!***************************************!*\
  !*** ./node_modules/qss/dist/qss.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\nfunction encode(obj, pfx) {\n\tvar k, i, tmp, str='';\n\n\tfor (k in obj) {\n\t\tif ((tmp = obj[k]) !== void 0) {\n\t\t\tif (Array.isArray(tmp)) {\n\t\t\t\tfor (i=0; i < tmp.length; i++) {\n\t\t\t\t\tstr && (str += '&');\n\t\t\t\t\tstr += encodeURIComponent(k) + '=' + encodeURIComponent(tmp[i]);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tstr && (str += '&');\n\t\t\t\tstr += encodeURIComponent(k) + '=' + encodeURIComponent(tmp);\n\t\t\t}\n\t\t}\n\t}\n\n\treturn (pfx || '') + str;\n}\n\nfunction toValue(mix) {\n\tif (!mix) return '';\n\tvar str = decodeURIComponent(mix);\n\tif (str === 'false') return false;\n\tif (str === 'true') return true;\n\treturn (+str * 0 === 0) ? (+str) : str;\n}\n\nfunction decode(str) {\n\tvar tmp, k, out={}, arr=str.split('&');\n\n\twhile (tmp = arr.shift()) {\n\t\ttmp = tmp.split('=');\n\t\tk = tmp.shift();\n\t\tif (out[k] !== void 0) {\n\t\t\tout[k] = [].concat(out[k], toValue(tmp.shift()));\n\t\t} else {\n\t\t\tout[k] = toValue(tmp.shift());\n\t\t}\n\t}\n\n\treturn out;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcXNzL2Rpc3QvcXNzLm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xc3MvZGlzdC9xc3MubWpzP2EzNjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGVuY29kZShvYmosIHBmeCkge1xuXHR2YXIgaywgaSwgdG1wLCBzdHI9Jyc7XG5cblx0Zm9yIChrIGluIG9iaikge1xuXHRcdGlmICgodG1wID0gb2JqW2tdKSAhPT0gdm9pZCAwKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh0bXApKSB7XG5cdFx0XHRcdGZvciAoaT0wOyBpIDwgdG1wLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyYnKTtcblx0XHRcdFx0XHRzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGspICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRtcFtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcmJyk7XG5cdFx0XHRcdHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaykgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodG1wKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKHBmeCB8fCAnJykgKyBzdHI7XG59XG5cbmZ1bmN0aW9uIHRvVmFsdWUobWl4KSB7XG5cdGlmICghbWl4KSByZXR1cm4gJyc7XG5cdHZhciBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQobWl4KTtcblx0aWYgKHN0ciA9PT0gJ2ZhbHNlJykgcmV0dXJuIGZhbHNlO1xuXHRpZiAoc3RyID09PSAndHJ1ZScpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gKCtzdHIgKiAwID09PSAwKSA/ICgrc3RyKSA6IHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZShzdHIpIHtcblx0dmFyIHRtcCwgaywgb3V0PXt9LCBhcnI9c3RyLnNwbGl0KCcmJyk7XG5cblx0d2hpbGUgKHRtcCA9IGFyci5zaGlmdCgpKSB7XG5cdFx0dG1wID0gdG1wLnNwbGl0KCc9Jyk7XG5cdFx0ayA9IHRtcC5zaGlmdCgpO1xuXHRcdGlmIChvdXRba10gIT09IHZvaWQgMCkge1xuXHRcdFx0b3V0W2tdID0gW10uY29uY2F0KG91dFtrXSwgdG9WYWx1ZSh0bXAuc2hpZnQoKSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvdXRba10gPSB0b1ZhbHVlKHRtcC5zaGlmdCgpKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb3V0O1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/qss/dist/qss.mjs\n");

/***/ })

};
;