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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Elem; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Elem =
/*#__PURE__*/
function () {
  function Elem(matrix, coords) {
    _classCallCheck(this, Elem);

    this.matrix = matrix;
    this.coords = coords;
    this.value = '';
  }

  _createClass(Elem, [{
    key: "create",
    value: function create() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.coords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var coord = _step.value;
          this.matrix.setCell(coord[0], coord[1], this.value);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Elem;
}();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Food; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elem__ = __webpack_require__(0);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Food =
/*#__PURE__*/
function (_Elem) {
  _inherits(Food, _Elem);

  function Food(matrix, coords) {
    var _this;

    _classCallCheck(this, Food);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Food).call(this, matrix, coords));
    _this.value = 'food';
    _this.type = '';
    _this.score = 0;
    return _this;
  }

  _createClass(Food, [{
    key: "create",
    value: function create() {
      this.matrix.setCell(this.coords[0], this.coords[1], this.value);
      this.matrix.setAttr(this.coords[0], this.coords[1], 'data-type', this.type);
      this.matrix.setAttr(this.coords[0], this.coords[1], 'data-score', this.score);
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (this.matrix.getCell(this.coords[0], this.coords[1]) === this.value) {
        this.matrix.setCell(this.coords[0], this.coords[1], '');
        this.matrix.setAttr(this.coords[0], this.coords[1], 'data-type', '');
        this.matrix.setAttr(this.coords[0], this.coords[1], 'data-score', '');
      }
    }
  }]);

  return Food;
}(__WEBPACK_IMPORTED_MODULE_0__elem__["a" /* default */]);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_matrix__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_snake__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_food_apple__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_food_strawberry__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_wall__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_helpers__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__css_main_scss__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__css_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__css_main_scss__);







document.querySelector('.menu__button').addEventListener('click', function () {
  document.querySelector('.menu').classList.add('menu-hide');
  document.querySelector('.snakeGame').classList.add('snakeGame-start');
  gameStart();
});

function gameStart() {
  var map = new __WEBPACK_IMPORTED_MODULE_0__js_matrix__["a" /* default */]('.snakeGame__field');
  map.create();
  var snake = new __WEBPACK_IMPORTED_MODULE_1__js_snake__["a" /* default */](map, [[1, 3], [1, 2], [1, 1]], 'bottom');
  snake.create();
  new __WEBPACK_IMPORTED_MODULE_4__js_wall__["a" /* default */](map, [[8, 8], [8, 9], [8, 10]]).create();
  createFood(__WEBPACK_IMPORTED_MODULE_2__js_food_apple__["a" /* default */]);
  document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case 37:
        snake.newDirection = 'left';
        break;

      case 38:
        snake.newDirection = 'top';
        break;

      case 39:
        snake.newDirection = 'right';
        break;

      case 40:
        snake.newDirection = 'bottom';
        break;
    }
  });
  var result = document.querySelector('.snakeGame .score');
  var score = 0;
  var eatenFood = '';
  result.innerHTML = score;
  var timer = setInterval(function () {
    snake.move();

    if (!snake.alive) {
      clearInterval(timer);
      alert('gameover');
    }

    if (snake.eaten) {
      eatenFood = snake.typeOfFood;
      score += snake.scoreForFood;
      result.innerHTML = score;

      if (eatenFood === 'apple') {
        createFood(__WEBPACK_IMPORTED_MODULE_2__js_food_apple__["a" /* default */]);
      }
    }
  }, 250);

  function createFood(foodClass) {
    var randomX = __WEBPACK_IMPORTED_MODULE_5__js_helpers__["a" /* default */].random(1, map.cols);
    var randomY = __WEBPACK_IMPORTED_MODULE_5__js_helpers__["a" /* default */].random(1, map.rows);

    while (map.getCell(randomX, randomY) !== '') {
      randomX = __WEBPACK_IMPORTED_MODULE_5__js_helpers__["a" /* default */].random(1, map.cols);
      randomY = __WEBPACK_IMPORTED_MODULE_5__js_helpers__["a" /* default */].random(1, map.rows);
    }

    var food = new foodClass(map, [randomX, randomY]);
    food.create();
    return food;
  }

  var seconds = 0;
  setInterval(function () {
    seconds++;

    if (seconds % 5 == 0) {
      var strawberry = createFood(__WEBPACK_IMPORTED_MODULE_3__js_food_strawberry__["a" /* default */]);
      setTimeout(function () {
        strawberry["delete"]();
      }, 5000);
    }
  }, 1000);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrix; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Matrix =
/*#__PURE__*/
function () {
  function Matrix(selector) {
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var cols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

    _classCallCheck(this, Matrix);

    this.elem = document.querySelector(selector);
    this.rows = rows;
    this.cols = cols;
    this.cells = [];
    this.cntCells = this.rows * this.cols;
  }

  _createClass(Matrix, [{
    key: "create",
    value: function create() {
      for (var i = 0; i < this.cntCells; i++) {
        var cell = document.createElement('div');

        if (i % this.cols === 0) {
          cell.classList.add('row-start');
        }

        cell.classList.add('mapCell');
        this.elem.appendChild(cell);
        this.cells.push('');
      }
    }
  }, {
    key: "getCell",
    value: function getCell(x, y) {
      var cellNumber = this.getCellNumber(x, y);
      return this.cells[cellNumber];
    }
  }, {
    key: "setCell",
    value: function setCell(x, y, val) {
      var cellNumber = this.getCellNumber(x, y);
      this.cells[cellNumber] = val;
      this.elem.children[cellNumber].setAttribute('data-game', val);
    }
  }, {
    key: "setAttr",
    value: function setAttr(x, y, attr, val) {
      var cellNumber = this.getCellNumber(x, y);
      this.elem.children[cellNumber].setAttribute(attr, val);
    }
  }, {
    key: "getAttr",
    value: function getAttr(x, y, attr) {
      var cellNumber = this.getCellNumber(x, y);
      return this.elem.children[cellNumber].getAttribute(attr);
    }
  }, {
    key: "getCellNumber",
    value: function getCellNumber(x, y) {
      return (y - 1) * this.cols + x - 1;
    }
  }]);

  return Matrix;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elem__ = __webpack_require__(0);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Snake =
/*#__PURE__*/
function (_Elem) {
  _inherits(Snake, _Elem);

  function Snake(matrix, coords, direction) {
    var _this;

    _classCallCheck(this, Snake);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Snake).call(this, matrix, coords));
    _this.value = 'snake';
    _this.direction = direction;
    _this.newDirection = direction;
    _this.eaten = false;
    _this.typeOfFood = '';
    _this.scoreForFood = 0;
    _this.alive = true;
    return _this;
  }

  _createClass(Snake, [{
    key: "move",
    value: function move() {
      if (!this.alive) {
        return;
      }

      this.eaten = false;
      this.typeOfFood = '';
      this.scoreForFood = 0;
      var head = this.coords[0].slice(); // Мб сократить код?????

      switch (this.newDirection) {
        case 'left':
          if (this.direction !== 'right') {
            head[0]--;
            this.direction = this.newDirection;
          } else {
            head[0]++;
            this.newDirection = 'right';
          }

          break;

        case 'top':
          if (this.direction !== 'bottom') {
            head[1]--;
            this.direction = this.newDirection;
          } else {
            head[1]++;
            this.newDirection = 'bottom';
          }

          break;

        case 'right':
          if (this.direction !== 'left') {
            head[0]++;
            this.direction = this.newDirection;
          } else {
            head[0]--;
            this.newDirection = 'left';
          }

          break;

        case 'bottom':
          if (this.direction !== 'top') {
            head[1]++;
            this.direction = this.newDirection;
          } else {
            head[1]--;
            this.newDirection = 'top';
          }

          break;
      }

      if (!this._checkAlive(head)) {
        this.alive = false;
        return;
      }

      var newHead = this.matrix.getCell(head[0], head[1]);

      if (newHead === 'wall' || newHead === 'snake') {
        this.alive = false;
        return;
      }

      if (newHead === 'food') {
        this.eaten = true;
        this.typeOfFood = this.matrix.getAttr(head[0], head[1], 'data-type');
        this.scoreForFood = parseInt(this.matrix.getAttr(head[0], head[1], 'data-score'));
        this.matrix.setAttr(head[0], head[1], 'data-type', '');
        this.matrix.setAttr(head[0], head[1], 'data-score', '');
      } else {
        var tail = this.coords.pop();
        this.matrix.setCell(tail[0], tail[1], '');
      }

      this.coords.unshift(head);
      this.matrix.setCell(head[0], head[1], 'snake');
    }
  }, {
    key: "_checkAlive",
    value: function _checkAlive(head) {
      return head[0] >= 1 && head[0] <= this.matrix.cols && head[1] >= 1 && head[1] <= this.matrix.rows;
    }
  }]);

  return Snake;
}(__WEBPACK_IMPORTED_MODULE_0__elem__["a" /* default */]);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Apple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__food__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Apple =
/*#__PURE__*/
function (_Food) {
  _inherits(Apple, _Food);

  function Apple(matrix, coords) {
    var _this;

    _classCallCheck(this, Apple);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Apple).call(this, matrix, coords));
    _this.type = 'apple';
    _this.score = 1;
    return _this;
  }

  return Apple;
}(__WEBPACK_IMPORTED_MODULE_0__food__["a" /* default */]);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Strawberry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__food__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Strawberry =
/*#__PURE__*/
function (_Food) {
  _inherits(Strawberry, _Food);

  function Strawberry(matrix, coords) {
    var _this;

    _classCallCheck(this, Strawberry);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Strawberry).call(this, matrix, coords));
    _this.type = 'strawberry';
    _this.score = 3;
    return _this;
  }

  return Strawberry;
}(__WEBPACK_IMPORTED_MODULE_0__food__["a" /* default */]);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elem__ = __webpack_require__(0);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Wall =
/*#__PURE__*/
function (_Elem) {
  _inherits(Wall, _Elem);

  function Wall(matrix, coords) {
    var _this;

    _classCallCheck(this, Wall);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wall).call(this, matrix, coords));
    _this.value = 'wall';
    return _this;
  }

  return Wall;
}(__WEBPACK_IMPORTED_MODULE_0__elem__["a" /* default */]);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, null, [{
    key: "random",
    value: function random(min, max) {
      var dif = max - min + 1;
      return Math.floor(Math.random() * dif) + min;
    }
  }]);

  return Helpers;
}();



/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map