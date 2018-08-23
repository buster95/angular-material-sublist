/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__md_sublist_template_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__md_sublist_template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__md_sublist_template_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md_sublist_style_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md_sublist_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__md_sublist_style_css__);



angular.module('mdSublist', ['ngMaterial'])
    .directive('mdSublist', ['$templateCache', function ($templateCache) {
        $templateCache.put('myViewFromCache', __WEBPACK_IMPORTED_MODULE_0__md_sublist_template_html___default.a);
        return {
            restrict: 'E',
            templateUrl: 'myViewFromCache',
            transclude: true,
            scope: {
                "text": "@",
                "svgIcon": "@",
                "svgIconPath": "@",
                "svgIconColor": "@"
            },
            link: function ($scope, $element) {
                $scope.toggle = function () {
                    var menu = angular.element($element[0]);
                    menu.toggleClass('active');
                };
                $scope.style = { fill: 'black' };
                if ($scope.svgIcon == undefined) {
                    $scope.svgIcon = '';
                }
                if ($scope.svgIconColor != undefined) {
                    $scope.style.fill = $scope.svgIconColor;
                }
            }
        }
    }]);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = " <md-list-item ng-click=toggle()> <md-icon md-svg-icon={{svgIcon}} ng-if=\"svgIcon!=''\" ng-style=style></md-icon> <p>{{text}}</p> <i style=height:24px;width:24px ng-click=toggle()> <svg version=1.1 id=Layer_1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink x=0px y=0px width=24px height=24px viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=preserve> <path d=M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z /> </svg> </i> </md-list-item> <md-list ng-transclude></md-list>";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);