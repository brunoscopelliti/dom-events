/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var cov_tnwypziej = function () {
    var path = "/Users/brunoscopelliti/Desktop/github/dom-events/src/utils/loop-props.js",
        hash = "9ccfb400c0d239e2bf758fb83f338121d22aec3e",
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/brunoscopelliti/Desktop/github/dom-events/src/utils/loop-props.js",
        statementMap: {
            "0": {
                start: {
                    line: 15,
                    column: 4
                },
                end: {
                    line: 21,
                    column: 5
                }
            },
            "1": {
                start: {
                    line: 16,
                    column: 8
                },
                end: {
                    line: 20,
                    column: 9
                }
            },
            "2": {
                start: {
                    line: 17,
                    column: 12
                },
                end: {
                    line: 19,
                    column: 13
                }
            },
            "3": {
                start: {
                    line: 18,
                    column: 16
                },
                end: {
                    line: 18,
                    column: 29
                }
            },
            "4": {
                start: {
                    line: 22,
                    column: 4
                },
                end: {
                    line: 22,
                    column: 16
                }
            }
        },
        fnMap: {
            "0": {
                name: "loopProps",
                decl: {
                    start: {
                        line: 14,
                        column: 9
                    },
                    end: {
                        line: 14,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 14,
                        column: 49
                    },
                    end: {
                        line: 23,
                        column: 1
                    }
                }
            }
        },
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 14,
                        column: 34
                    },
                    end: {
                        line: 14,
                        column: 48
                    }
                },
                type: "default-arg",
                locations: [{
                    start: {
                        line: 14,
                        column: 44
                    },
                    end: {
                        line: 14,
                        column: 48
                    }
                }]
            },
            "1": {
                loc: {
                    start: {
                        line: 16,
                        column: 8
                    },
                    end: {
                        line: 20,
                        column: 9
                    }
                },
                type: "if",
                locations: [{
                    start: {
                        line: 16,
                        column: 8
                    },
                    end: {
                        line: 20,
                        column: 9
                    }
                }, {
                    start: {
                        line: 16,
                        column: 8
                    },
                    end: {
                        line: 20,
                        column: 9
                    }
                }]
            },
            "2": {
                loc: {
                    start: {
                        line: 17,
                        column: 12
                    },
                    end: {
                        line: 19,
                        column: 13
                    }
                },
                type: "if",
                locations: [{
                    start: {
                        line: 17,
                        column: 12
                    },
                    end: {
                        line: 19,
                        column: 13
                    }
                }, {
                    start: {
                        line: 17,
                        column: 12
                    },
                    end: {
                        line: 19,
                        column: 13
                    }
                }]
            }
        },
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        },
        f: {
            "0": 0
        },
        b: {
            "0": [0],
            "1": [0, 0],
            "2": [0, 0]
        },
        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

/**
 * @name loopProps
 * @description
 * Loop over the properties of the target object executing the iterator function;
 * break the loop when iterator returns false; returns true if the loop is completed.
 *
 * @param {Object} obj: target object
 * @param {Function} iterator: the function that should be executed for each property
 * @param {Object} [context]: the context of execution for the iterator
 *
 * @return {Boolean} false if the loop was interrupted
 */
function loopProps(obj, iterator) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (++cov_tnwypziej.b[0][0], this);
    ++cov_tnwypziej.f[0];
    ++cov_tnwypziej.s[0];

    for (var k in obj) {
        ++cov_tnwypziej.s[1];

        if (Object.prototype.hasOwnProperty.call(obj, k)) {
            ++cov_tnwypziej.b[1][0];
            ++cov_tnwypziej.s[2];

            if (iterator.call(context, obj[k], k, obj) === false) {
                ++cov_tnwypziej.b[2][0];
                ++cov_tnwypziej.s[3];

                return false;
            } else {
                ++cov_tnwypziej.b[2][1];
            }
        } else {
            ++cov_tnwypziej.b[1][1];
        }
    }
    ++cov_tnwypziej.s[4];
    return true;
}

exports.default = loopProps;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var cov_2k31f4dous = function () {
    var path = '/Users/brunoscopelliti/Desktop/github/dom-events/src/event-store.js',
        hash = '891bc921a316e1478e04fc4cd8d094db787ace82',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: '/Users/brunoscopelliti/Desktop/github/dom-events/src/event-store.js',
        statementMap: {
            '0': {
                start: {
                    line: 10,
                    column: 21
                },
                end: {
                    line: 10,
                    column: 34
                }
            },
            '1': {
                start: {
                    line: 13,
                    column: 12
                },
                end: {
                    line: 42,
                    column: 1
                }
            },
            '2': {
                start: {
                    line: 15,
                    column: 24
                },
                end: {
                    line: 15,
                    column: 44
                }
            },
            '3': {
                start: {
                    line: 17,
                    column: 4
                },
                end: {
                    line: 19,
                    column: 5
                }
            },
            '4': {
                start: {
                    line: 18,
                    column: 8
                },
                end: {
                    line: 18,
                    column: 18
                }
            },
            '5': {
                start: {
                    line: 21,
                    column: 4
                },
                end: {
                    line: 23,
                    column: 5
                }
            },
            '6': {
                start: {
                    line: 22,
                    column: 8
                },
                end: {
                    line: 22,
                    column: 27
                }
            },
            '7': {
                start: {
                    line: 25,
                    column: 28
                },
                end: {
                    line: 25,
                    column: 51
                }
            },
            '8': {
                start: {
                    line: 27,
                    column: 4
                },
                end: {
                    line: 29,
                    column: 5
                }
            },
            '9': {
                start: {
                    line: 28,
                    column: 8
                },
                end: {
                    line: 28,
                    column: 31
                }
            },
            '10': {
                start: {
                    line: 34,
                    column: 4
                },
                end: {
                    line: 38,
                    column: 7
                }
            },
            '11': {
                start: {
                    line: 35,
                    column: 41
                },
                end: {
                    line: 35,
                    column: 100
                }
            },
            '12': {
                start: {
                    line: 35,
                    column: 57
                },
                end: {
                    line: 35,
                    column: 99
                }
            },
            '13': {
                start: {
                    line: 36,
                    column: 8
                },
                end: {
                    line: 37,
                    column: 84
                }
            },
            '14': {
                start: {
                    line: 37,
                    column: 12
                },
                end: {
                    line: 37,
                    column: 65
                }
            },
            '15': {
                start: {
                    line: 40,
                    column: 4
                },
                end: {
                    line: 40,
                    column: 27
                }
            },
            '16': {
                start: {
                    line: 44,
                    column: 12
                },
                end: {
                    line: 71,
                    column: 1
                }
            },
            '17': {
                start: {
                    line: 46,
                    column: 21
                },
                end: {
                    line: 46,
                    column: 66
                }
            },
            '18': {
                start: {
                    line: 48,
                    column: 24
                },
                end: {
                    line: 48,
                    column: 91
                }
            },
            '19': {
                start: {
                    line: 50,
                    column: 4
                },
                end: {
                    line: 52,
                    column: 5
                }
            },
            '20': {
                start: {
                    line: 51,
                    column: 8
                },
                end: {
                    line: 51,
                    column: 42
                }
            },
            '21': {
                start: {
                    line: 54,
                    column: 4
                },
                end: {
                    line: 56,
                    column: 5
                }
            },
            '22': {
                start: {
                    line: 55,
                    column: 8
                },
                end: {
                    line: 55,
                    column: 58
                }
            },
            '23': {
                start: {
                    line: 58,
                    column: 26
                },
                end: {
                    line: 58,
                    column: 85
                }
            },
            '24': {
                start: {
                    line: 60,
                    column: 4
                },
                end: {
                    line: 67,
                    column: 5
                }
            },
            '25': {
                start: {
                    line: 61,
                    column: 8
                },
                end: {
                    line: 66,
                    column: 9
                }
            },
            '26': {
                start: {
                    line: 62,
                    column: 12
                },
                end: {
                    line: 62,
                    column: 56
                }
            },
            '27': {
                start: {
                    line: 64,
                    column: 13
                },
                end: {
                    line: 66,
                    column: 9
                }
            },
            '28': {
                start: {
                    line: 65,
                    column: 12
                },
                end: {
                    line: 65,
                    column: 35
                }
            },
            '29': {
                start: {
                    line: 69,
                    column: 4
                },
                end: {
                    line: 69,
                    column: 20
                }
            },
            '30': {
                start: {
                    line: 73,
                    column: 12
                },
                end: {
                    line: 114,
                    column: 1
                }
            },
            '31': {
                start: {
                    line: 75,
                    column: 24
                },
                end: {
                    line: 75,
                    column: 65
                }
            },
            '32': {
                start: {
                    line: 77,
                    column: 22
                },
                end: {
                    line: 77,
                    column: 51
                }
            },
            '33': {
                start: {
                    line: 79,
                    column: 4
                },
                end: {
                    line: 81,
                    column: 5
                }
            },
            '34': {
                start: {
                    line: 80,
                    column: 8
                },
                end: {
                    line: 80,
                    column: 15
                }
            },
            '35': {
                start: {
                    line: 86,
                    column: 23
                },
                end: {
                    line: 86,
                    column: 41
                }
            },
            '36': {
                start: {
                    line: 88,
                    column: 4
                },
                end: {
                    line: 90,
                    column: 5
                }
            },
            '37': {
                start: {
                    line: 89,
                    column: 8
                },
                end: {
                    line: 89,
                    column: 41
                }
            },
            '38': {
                start: {
                    line: 92,
                    column: 4
                },
                end: {
                    line: 94,
                    column: 5
                }
            },
            '39': {
                start: {
                    line: 93,
                    column: 8
                },
                end: {
                    line: 93,
                    column: 37
                }
            },
            '40': {
                start: {
                    line: 96,
                    column: 22
                },
                end: {
                    line: 96,
                    column: 52
                }
            },
            '41': {
                start: {
                    line: 97,
                    column: 23
                },
                end: {
                    line: 97,
                    column: 69
                }
            },
            '42': {
                start: {
                    line: 99,
                    column: 4
                },
                end: {
                    line: 112,
                    column: 7
                }
            },
            '43': {
                start: {
                    line: 100,
                    column: 8
                },
                end: {
                    line: 111,
                    column: 9
                }
            },
            '44': {
                start: {
                    line: 101,
                    column: 12
                },
                end: {
                    line: 101,
                    column: 97
                }
            },
            '45': {
                start: {
                    line: 102,
                    column: 12
                },
                end: {
                    line: 110,
                    column: 13
                }
            },
            '46': {
                start: {
                    line: 103,
                    column: 16
                },
                end: {
                    line: 103,
                    column: 43
                }
            },
            '47': {
                start: {
                    line: 104,
                    column: 16
                },
                end: {
                    line: 109,
                    column: 17
                }
            },
            '48': {
                start: {
                    line: 105,
                    column: 20
                },
                end: {
                    line: 105,
                    column: 62
                }
            },
            '49': {
                start: {
                    line: 107,
                    column: 21
                },
                end: {
                    line: 109,
                    column: 17
                }
            },
            '50': {
                start: {
                    line: 108,
                    column: 20
                },
                end: {
                    line: 108,
                    column: 46
                }
            },
            '51': {
                start: {
                    line: 123,
                    column: 21
                },
                end: {
                    line: 123,
                    column: 23
                }
            },
            '52': {
                start: {
                    line: 125,
                    column: 12
                },
                end: {
                    line: 146,
                    column: 1
                }
            },
            '53': {
                start: {
                    line: 127,
                    column: 25
                },
                end: {
                    line: 127,
                    column: 29
                }
            },
            '54': {
                start: {
                    line: 129,
                    column: 18
                },
                end: {
                    line: 129,
                    column: 90
                }
            },
            '55': {
                start: {
                    line: 130,
                    column: 20
                },
                end: {
                    line: 130,
                    column: 112
                }
            },
            '56': {
                start: {
                    line: 132,
                    column: 4
                },
                end: {
                    line: 139,
                    column: 7
                }
            },
            '57': {
                start: {
                    line: 133,
                    column: 8
                },
                end: {
                    line: 133,
                    column: 39
                }
            },
            '58': {
                start: {
                    line: 134,
                    column: 59
                },
                end: {
                    line: 134,
                    column: 75
                }
            },
            '59': {
                start: {
                    line: 135,
                    column: 8
                },
                end: {
                    line: 137,
                    column: 9
                }
            },
            '60': {
                start: {
                    line: 136,
                    column: 12
                },
                end: {
                    line: 136,
                    column: 35
                }
            },
            '61': {
                start: {
                    line: 138,
                    column: 8
                },
                end: {
                    line: 138,
                    column: 37
                }
            },
            '62': {
                start: {
                    line: 141,
                    column: 4
                },
                end: {
                    line: 145,
                    column: 5
                }
            },
            '63': {
                start: {
                    line: 142,
                    column: 8
                },
                end: {
                    line: 142,
                    column: 36
                }
            },
            '64': {
                start: {
                    line: 143,
                    column: 8
                },
                end: {
                    line: 143,
                    column: 25
                }
            },
            '65': {
                start: {
                    line: 144,
                    column: 8
                },
                end: {
                    line: 144,
                    column: 28
                }
            },
            '66': {
                start: {
                    line: 154,
                    column: 14
                },
                end: {
                    line: 223,
                    column: 1
                }
            },
            '67': {
                start: {
                    line: 246,
                    column: 17
                },
                end: {
                    line: 260,
                    column: 16
                }
            },
            '68': {
                start: {
                    line: 248,
                    column: 20
                },
                end: {
                    line: 248,
                    column: 130
                }
            },
            '69': {
                start: {
                    line: 250,
                    column: 4
                },
                end: {
                    line: 258,
                    column: 6
                }
            },
            '70': {
                start: {
                    line: 251,
                    column: 8
                },
                end: {
                    line: 253,
                    column: 9
                }
            },
            '71': {
                start: {
                    line: 252,
                    column: 12
                },
                end: {
                    line: 252,
                    column: 40
                }
            },
            '72': {
                start: {
                    line: 254,
                    column: 8
                },
                end: {
                    line: 256,
                    column: 9
                }
            },
            '73': {
                start: {
                    line: 255,
                    column: 12
                },
                end: {
                    line: 255,
                    column: 42
                }
            },
            '74': {
                start: {
                    line: 257,
                    column: 8
                },
                end: {
                    line: 257,
                    column: 44
                }
            },
            '75': {
                start: {
                    line: 270,
                    column: 17
                },
                end: {
                    line: 270,
                    column: 19
                }
            },
            '76': {
                start: {
                    line: 273,
                    column: 0
                },
                end: {
                    line: 273,
                    column: 35
                }
            },
            '77': {
                start: {
                    line: 282,
                    column: 0
                },
                end: {
                    line: 297,
                    column: 3
                }
            },
            '78': {
                start: {
                    line: 283,
                    column: 4
                },
                end: {
                    line: 296,
                    column: 6
                }
            },
            '79': {
                start: {
                    line: 287,
                    column: 12
                },
                end: {
                    line: 294,
                    column: 14
                }
            },
            '80': {
                start: {
                    line: 288,
                    column: 59
                },
                end: {
                    line: 288,
                    column: 64
                }
            },
            '81': {
                start: {
                    line: 291,
                    column: 16
                },
                end: {
                    line: 293,
                    column: 17
                }
            },
            '82': {
                start: {
                    line: 292,
                    column: 20
                },
                end: {
                    line: 292,
                    column: 70
                }
            },
            '83': {
                start: {
                    line: 305,
                    column: 0
                },
                end: {
                    line: 330,
                    column: 3
                }
            },
            '84': {
                start: {
                    line: 316,
                    column: 27
                },
                end: {
                    line: 316,
                    column: 73
                }
            },
            '85': {
                start: {
                    line: 316,
                    column: 38
                },
                end: {
                    line: 316,
                    column: 73
                }
            },
            '86': {
                start: {
                    line: 318,
                    column: 4
                },
                end: {
                    line: 328,
                    column: 6
                }
            },
            '87': {
                start: {
                    line: 323,
                    column: 12
                },
                end: {
                    line: 323,
                    column: 84
                }
            },
            '88': {
                start: {
                    line: 326,
                    column: 12
                },
                end: {
                    line: 326,
                    column: 87
                }
            },
            '89': {
                start: {
                    line: 339,
                    column: 12
                },
                end: {
                    line: 339,
                    column: 13
                }
            },
            '90': {
                start: {
                    line: 347,
                    column: 13
                },
                end: {
                    line: 347,
                    column: 35
                }
            },
            '91': {
                start: {
                    line: 365,
                    column: 28
                },
                end: {
                    line: 430,
                    column: 1
                }
            },
            '92': {
                start: {
                    line: 367,
                    column: 15
                },
                end: {
                    line: 367,
                    column: 22
                }
            },
            '93': {
                start: {
                    line: 368,
                    column: 23
                },
                end: {
                    line: 368,
                    column: 40
                }
            },
            '94': {
                start: {
                    line: 369,
                    column: 22
                },
                end: {
                    line: 369,
                    column: 58
                }
            },
            '95': {
                start: {
                    line: 371,
                    column: 21
                },
                end: {
                    line: 371,
                    column: 40
                }
            },
            '96': {
                start: {
                    line: 377,
                    column: 4
                },
                end: {
                    line: 377,
                    column: 24
                }
            },
            '97': {
                start: {
                    line: 383,
                    column: 4
                },
                end: {
                    line: 383,
                    column: 35
                }
            },
            '98': {
                start: {
                    line: 389,
                    column: 4
                },
                end: {
                    line: 389,
                    column: 35
                }
            },
            '99': {
                start: {
                    line: 395,
                    column: 4
                },
                end: {
                    line: 395,
                    column: 29
                }
            },
            '100': {
                start: {
                    line: 401,
                    column: 4
                },
                end: {
                    line: 401,
                    column: 30
                }
            },
            '101': {
                start: {
                    line: 407,
                    column: 4
                },
                end: {
                    line: 409,
                    column: 6
                }
            },
            '102': {
                start: {
                    line: 408,
                    column: 8
                },
                end: {
                    line: 408,
                    column: 59
                }
            },
            '103': {
                start: {
                    line: 414,
                    column: 4
                },
                end: {
                    line: 419,
                    column: 5
                }
            },
            '104': {
                start: {
                    line: 415,
                    column: 8
                },
                end: {
                    line: 415,
                    column: 52
                }
            },
            '105': {
                start: {
                    line: 418,
                    column: 8
                },
                end: {
                    line: 418,
                    column: 47
                }
            },
            '106': {
                start: {
                    line: 423,
                    column: 4
                },
                end: {
                    line: 427,
                    column: 5
                }
            },
            '107': {
                start: {
                    line: 424,
                    column: 8
                },
                end: {
                    line: 426,
                    column: 9
                }
            },
            '108': {
                start: {
                    line: 425,
                    column: 12
                },
                end: {
                    line: 425,
                    column: 75
                }
            },
            '109': {
                start: {
                    line: 429,
                    column: 4
                },
                end: {
                    line: 429,
                    column: 20
                }
            },
            '110': {
                start: {
                    line: 446,
                    column: 27
                },
                end: {
                    line: 453,
                    column: 1
                }
            },
            '111': {
                start: {
                    line: 448,
                    column: 4
                },
                end: {
                    line: 450,
                    column: 5
                }
            },
            '112': {
                start: {
                    line: 449,
                    column: 8
                },
                end: {
                    line: 449,
                    column: 20
                }
            },
            '113': {
                start: {
                    line: 452,
                    column: 4
                },
                end: {
                    line: 452,
                    column: 40
                }
            },
            '114': {
                start: {
                    line: 469,
                    column: 32
                },
                end: {
                    line: 476,
                    column: 1
                }
            },
            '115': {
                start: {
                    line: 471,
                    column: 4
                },
                end: {
                    line: 473,
                    column: 5
                }
            },
            '116': {
                start: {
                    line: 472,
                    column: 8
                },
                end: {
                    line: 472,
                    column: 20
                }
            },
            '117': {
                start: {
                    line: 475,
                    column: 4
                },
                end: {
                    line: 475,
                    column: 47
                }
            },
            '118': {
                start: {
                    line: 491,
                    column: 24
                },
                end: {
                    line: 491,
                    column: 81
                }
            },
            '119': {
                start: {
                    line: 491,
                    column: 38
                },
                end: {
                    line: 491,
                    column: 81
                }
            },
            '120': {
                start: {
                    line: 506,
                    column: 27
                },
                end: {
                    line: 506,
                    column: 87
                }
            },
            '121': {
                start: {
                    line: 506,
                    column: 41
                },
                end: {
                    line: 506,
                    column: 87
                }
            },
            '122': {
                start: {
                    line: 522,
                    column: 18
                },
                end: {
                    line: 589,
                    column: 1
                }
            },
            '123': {
                start: {
                    line: 532,
                    column: 4
                },
                end: {
                    line: 534,
                    column: 5
                }
            },
            '124': {
                start: {
                    line: 533,
                    column: 8
                },
                end: {
                    line: 533,
                    column: 21
                }
            },
            '125': {
                start: {
                    line: 537,
                    column: 18
                },
                end: {
                    line: 537,
                    column: 48
                }
            },
            '126': {
                start: {
                    line: 539,
                    column: 22
                },
                end: {
                    line: 539,
                    column: 79
                }
            },
            '127': {
                start: {
                    line: 548,
                    column: 4
                },
                end: {
                    line: 574,
                    column: 7
                }
            },
            '128': {
                start: {
                    line: 550,
                    column: 8
                },
                end: {
                    line: 552,
                    column: 9
                }
            },
            '129': {
                start: {
                    line: 551,
                    column: 12
                },
                end: {
                    line: 551,
                    column: 19
                }
            },
            '130': {
                start: {
                    line: 554,
                    column: 8
                },
                end: {
                    line: 568,
                    column: 11
                }
            },
            '131': {
                start: {
                    line: 556,
                    column: 12
                },
                end: {
                    line: 560,
                    column: 13
                }
            },
            '132': {
                start: {
                    line: 559,
                    column: 16
                },
                end: {
                    line: 559,
                    column: 23
                }
            },
            '133': {
                start: {
                    line: 562,
                    column: 12
                },
                end: {
                    line: 566,
                    column: 13
                }
            },
            '134': {
                start: {
                    line: 563,
                    column: 16
                },
                end: {
                    line: 563,
                    column: 50
                }
            },
            '135': {
                start: {
                    line: 564,
                    column: 16
                },
                end: {
                    line: 564,
                    column: 50
                }
            },
            '136': {
                start: {
                    line: 565,
                    column: 16
                },
                end: {
                    line: 565,
                    column: 46
                }
            },
            '137': {
                start: {
                    line: 572,
                    column: 8
                },
                end: {
                    line: 572,
                    column: 43
                }
            },
            '138': {
                start: {
                    line: 576,
                    column: 4
                },
                end: {
                    line: 578,
                    column: 5
                }
            },
            '139': {
                start: {
                    line: 577,
                    column: 8
                },
                end: {
                    line: 577,
                    column: 92
                }
            },
            '140': {
                start: {
                    line: 582,
                    column: 4
                },
                end: {
                    line: 584,
                    column: 5
                }
            },
            '141': {
                start: {
                    line: 583,
                    column: 8
                },
                end: {
                    line: 583,
                    column: 71
                }
            },
            '142': {
                start: {
                    line: 583,
                    column: 30
                },
                end: {
                    line: 583,
                    column: 41
                }
            },
            '143': {
                start: {
                    line: 587,
                    column: 4
                },
                end: {
                    line: 587,
                    column: 110
                }
            },
            '144': {
                start: {
                    line: 605,
                    column: 30
                },
                end: {
                    line: 605,
                    column: 114
                }
            },
            '145': {
                start: {
                    line: 605,
                    column: 40
                },
                end: {
                    line: 605,
                    column: 114
                }
            },
            '146': {
                start: {
                    line: 613,
                    column: 19
                },
                end: {
                    line: 633,
                    column: 2
                }
            },
            '147': {
                start: {
                    line: 617,
                    column: 12
                },
                end: {
                    line: 617,
                    column: 45
                }
            },
            '148': {
                start: {
                    line: 618,
                    column: 12
                },
                end: {
                    line: 620,
                    column: 13
                }
            },
            '149': {
                start: {
                    line: 619,
                    column: 16
                },
                end: {
                    line: 619,
                    column: 53
                }
            },
            '150': {
                start: {
                    line: 626,
                    column: 12
                },
                end: {
                    line: 626,
                    column: 43
                }
            },
            '151': {
                start: {
                    line: 627,
                    column: 12
                },
                end: {
                    line: 629,
                    column: 13
                }
            },
            '152': {
                start: {
                    line: 628,
                    column: 16
                },
                end: {
                    line: 628,
                    column: 52
                }
            },
            '153': {
                start: {
                    line: 647,
                    column: 28
                },
                end: {
                    line: 674,
                    column: 1
                }
            },
            '154': {
                start: {
                    line: 649,
                    column: 18
                },
                end: {
                    line: 649,
                    column: 43
                }
            },
            '155': {
                start: {
                    line: 655,
                    column: 4
                },
                end: {
                    line: 655,
                    column: 38
                }
            },
            '156': {
                start: {
                    line: 661,
                    column: 4
                },
                end: {
                    line: 661,
                    column: 47
                }
            },
            '157': {
                start: {
                    line: 663,
                    column: 4
                },
                end: {
                    line: 663,
                    column: 50
                }
            },
            '158': {
                start: {
                    line: 664,
                    column: 4
                },
                end: {
                    line: 664,
                    column: 50
                }
            },
            '159': {
                start: {
                    line: 665,
                    column: 4
                },
                end: {
                    line: 665,
                    column: 36
                }
            },
            '160': {
                start: {
                    line: 666,
                    column: 4
                },
                end: {
                    line: 666,
                    column: 32
                }
            },
            '161': {
                start: {
                    line: 668,
                    column: 4
                },
                end: {
                    line: 670,
                    column: 5
                }
            },
            '162': {
                start: {
                    line: 669,
                    column: 8
                },
                end: {
                    line: 669,
                    column: 40
                }
            },
            '163': {
                start: {
                    line: 672,
                    column: 4
                },
                end: {
                    line: 672,
                    column: 17
                }
            },
            '164': {
                start: {
                    line: 689,
                    column: 23
                },
                end: {
                    line: 689,
                    column: 83
                }
            },
            '165': {
                start: {
                    line: 689,
                    column: 32
                },
                end: {
                    line: 689,
                    column: 83
                }
            },
            '166': {
                start: {
                    line: 707,
                    column: 15
                },
                end: {
                    line: 720,
                    column: 1
                }
            },
            '167': {
                start: {
                    line: 709,
                    column: 4
                },
                end: {
                    line: 711,
                    column: 5
                }
            },
            '168': {
                start: {
                    line: 710,
                    column: 8
                },
                end: {
                    line: 710,
                    column: 42
                }
            },
            '169': {
                start: {
                    line: 713,
                    column: 20
                },
                end: {
                    line: 713,
                    column: 27
                }
            },
            '170': {
                start: {
                    line: 714,
                    column: 17
                },
                end: {
                    line: 714,
                    column: 21
                }
            },
            '171': {
                start: {
                    line: 716,
                    column: 4
                },
                end: {
                    line: 718,
                    column: 91
                }
            },
            '172': {
                start: {
                    line: 717,
                    column: 8
                },
                end: {
                    line: 717,
                    column: 49
                }
            },
            '173': {
                start: {
                    line: 737,
                    column: 18
                },
                end: {
                    line: 743,
                    column: 1
                }
            },
            '174': {
                start: {
                    line: 738,
                    column: 4
                },
                end: {
                    line: 741,
                    column: 5
                }
            },
            '175': {
                start: {
                    line: 739,
                    column: 20
                },
                end: {
                    line: 739,
                    column: 75
                }
            },
            '176': {
                start: {
                    line: 740,
                    column: 8
                },
                end: {
                    line: 740,
                    column: 58
                }
            },
            '177': {
                start: {
                    line: 742,
                    column: 4
                },
                end: {
                    line: 742,
                    column: 83
                }
            },
            '178': {
                start: {
                    line: 759,
                    column: 19
                },
                end: {
                    line: 759,
                    column: 63
                }
            },
            '179': {
                start: {
                    line: 761,
                    column: 4
                },
                end: {
                    line: 764,
                    column: 5
                }
            },
            '180': {
                start: {
                    line: 762,
                    column: 8
                },
                end: {
                    line: 762,
                    column: 31
                }
            },
            '181': {
                start: {
                    line: 763,
                    column: 8
                },
                end: {
                    line: 763,
                    column: 30
                }
            },
            '182': {
                start: {
                    line: 781,
                    column: 17
                },
                end: {
                    line: 781,
                    column: 93
                }
            },
            '183': {
                start: {
                    line: 781,
                    column: 38
                },
                end: {
                    line: 781,
                    column: 93
                }
            },
            '184': {
                start: {
                    line: 781,
                    column: 68
                },
                end: {
                    line: 781,
                    column: 92
                }
            },
            '185': {
                start: {
                    line: 796,
                    column: 17
                },
                end: {
                    line: 798,
                    column: 96
                }
            },
            '186': {
                start: {
                    line: 797,
                    column: 4
                },
                end: {
                    line: 798,
                    column: 96
                }
            },
            '187': {
                start: {
                    line: 798,
                    column: 8
                },
                end: {
                    line: 798,
                    column: 95
                }
            },
            '188': {
                start: {
                    line: 813,
                    column: 25
                },
                end: {
                    line: 826,
                    column: 1
                }
            },
            '189': {
                start: {
                    line: 815,
                    column: 17
                },
                end: {
                    line: 815,
                    column: 19
                }
            },
            '190': {
                start: {
                    line: 817,
                    column: 4
                },
                end: {
                    line: 819,
                    column: 34
                }
            },
            '191': {
                start: {
                    line: 818,
                    column: 8
                },
                end: {
                    line: 818,
                    column: 22
                }
            },
            '192': {
                start: {
                    line: 821,
                    column: 4
                },
                end: {
                    line: 823,
                    column: 5
                }
            },
            '193': {
                start: {
                    line: 822,
                    column: 8
                },
                end: {
                    line: 822,
                    column: 26
                }
            },
            '194': {
                start: {
                    line: 825,
                    column: 4
                },
                end: {
                    line: 825,
                    column: 16
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 13,
                        column: 12
                    },
                    end: {
                        line: 13,
                        column: 13
                    }
                },
                loc: {
                    start: {
                        line: 13,
                        column: 55
                    },
                    end: {
                        line: 42,
                        column: 1
                    }
                }
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 34,
                        column: 27
                    },
                    end: {
                        line: 34,
                        column: 28
                    }
                },
                loc: {
                    start: {
                        line: 34,
                        column: 49
                    },
                    end: {
                        line: 38,
                        column: 5
                    }
                }
            },
            '2': {
                name: '(anonymous_2)',
                decl: {
                    start: {
                        line: 35,
                        column: 52
                    },
                    end: {
                        line: 35,
                        column: 53
                    }
                },
                loc: {
                    start: {
                        line: 35,
                        column: 57
                    },
                    end: {
                        line: 35,
                        column: 99
                    }
                }
            },
            '3': {
                name: '(anonymous_3)',
                decl: {
                    start: {
                        line: 36,
                        column: 40
                    },
                    end: {
                        line: 36,
                        column: 41
                    }
                },
                loc: {
                    start: {
                        line: 37,
                        column: 12
                    },
                    end: {
                        line: 37,
                        column: 65
                    }
                }
            },
            '4': {
                name: '(anonymous_4)',
                decl: {
                    start: {
                        line: 44,
                        column: 12
                    },
                    end: {
                        line: 44,
                        column: 13
                    }
                },
                loc: {
                    start: {
                        line: 44,
                        column: 46
                    },
                    end: {
                        line: 71,
                        column: 1
                    }
                }
            },
            '5': {
                name: '(anonymous_5)',
                decl: {
                    start: {
                        line: 73,
                        column: 12
                    },
                    end: {
                        line: 73,
                        column: 13
                    }
                },
                loc: {
                    start: {
                        line: 73,
                        column: 46
                    },
                    end: {
                        line: 114,
                        column: 1
                    }
                }
            },
            '6': {
                name: '(anonymous_6)',
                decl: {
                    start: {
                        line: 99,
                        column: 23
                    },
                    end: {
                        line: 99,
                        column: 24
                    }
                },
                loc: {
                    start: {
                        line: 99,
                        column: 42
                    },
                    end: {
                        line: 112,
                        column: 5
                    }
                }
            },
            '7': {
                name: '(anonymous_7)',
                decl: {
                    start: {
                        line: 125,
                        column: 12
                    },
                    end: {
                        line: 125,
                        column: 13
                    }
                },
                loc: {
                    start: {
                        line: 125,
                        column: 32
                    },
                    end: {
                        line: 146,
                        column: 1
                    }
                }
            },
            '8': {
                name: '(anonymous_8)',
                decl: {
                    start: {
                        line: 132,
                        column: 18
                    },
                    end: {
                        line: 132,
                        column: 19
                    }
                },
                loc: {
                    start: {
                        line: 132,
                        column: 36
                    },
                    end: {
                        line: 139,
                        column: 5
                    }
                }
            },
            '9': {
                name: '(anonymous_9)',
                decl: {
                    start: {
                        line: 246,
                        column: 17
                    },
                    end: {
                        line: 246,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 246,
                        column: 30
                    },
                    end: {
                        line: 260,
                        column: 1
                    }
                }
            },
            '10': {
                name: '(anonymous_10)',
                decl: {
                    start: {
                        line: 250,
                        column: 11
                    },
                    end: {
                        line: 250,
                        column: 12
                    }
                },
                loc: {
                    start: {
                        line: 250,
                        column: 31
                    },
                    end: {
                        line: 258,
                        column: 5
                    }
                }
            },
            '11': {
                name: '(anonymous_11)',
                decl: {
                    start: {
                        line: 282,
                        column: 63
                    },
                    end: {
                        line: 282,
                        column: 64
                    }
                },
                loc: {
                    start: {
                        line: 282,
                        column: 99
                    },
                    end: {
                        line: 297,
                        column: 1
                    }
                }
            },
            '12': {
                name: '(anonymous_12)',
                decl: {
                    start: {
                        line: 286,
                        column: 19
                    },
                    end: {
                        line: 286,
                        column: 20
                    }
                },
                loc: {
                    start: {
                        line: 286,
                        column: 47
                    },
                    end: {
                        line: 295,
                        column: 9
                    }
                }
            },
            '13': {
                name: '(anonymous_13)',
                decl: {
                    start: {
                        line: 287,
                        column: 19
                    },
                    end: {
                        line: 287,
                        column: 20
                    }
                },
                loc: {
                    start: {
                        line: 287,
                        column: 36
                    },
                    end: {
                        line: 294,
                        column: 13
                    }
                }
            },
            '14': {
                name: '(anonymous_14)',
                decl: {
                    start: {
                        line: 305,
                        column: 50
                    },
                    end: {
                        line: 305,
                        column: 51
                    }
                },
                loc: {
                    start: {
                        line: 305,
                        column: 86
                    },
                    end: {
                        line: 330,
                        column: 1
                    }
                }
            },
            '15': {
                name: '(anonymous_15)',
                decl: {
                    start: {
                        line: 316,
                        column: 27
                    },
                    end: {
                        line: 316,
                        column: 28
                    }
                },
                loc: {
                    start: {
                        line: 316,
                        column: 38
                    },
                    end: {
                        line: 316,
                        column: 73
                    }
                }
            },
            '16': {
                name: '(anonymous_16)',
                decl: {
                    start: {
                        line: 322,
                        column: 15
                    },
                    end: {
                        line: 322,
                        column: 16
                    }
                },
                loc: {
                    start: {
                        line: 322,
                        column: 26
                    },
                    end: {
                        line: 324,
                        column: 9
                    }
                }
            },
            '17': {
                name: '(anonymous_17)',
                decl: {
                    start: {
                        line: 325,
                        column: 18
                    },
                    end: {
                        line: 325,
                        column: 19
                    }
                },
                loc: {
                    start: {
                        line: 325,
                        column: 29
                    },
                    end: {
                        line: 327,
                        column: 9
                    }
                }
            },
            '18': {
                name: '(anonymous_18)',
                decl: {
                    start: {
                        line: 365,
                        column: 28
                    },
                    end: {
                        line: 365,
                        column: 29
                    }
                },
                loc: {
                    start: {
                        line: 365,
                        column: 58
                    },
                    end: {
                        line: 430,
                        column: 1
                    }
                }
            },
            '19': {
                name: '(anonymous_19)',
                decl: {
                    start: {
                        line: 407,
                        column: 23
                    },
                    end: {
                        line: 407,
                        column: 24
                    }
                },
                loc: {
                    start: {
                        line: 407,
                        column: 39
                    },
                    end: {
                        line: 409,
                        column: 5
                    }
                }
            },
            '20': {
                name: '(anonymous_20)',
                decl: {
                    start: {
                        line: 446,
                        column: 27
                    },
                    end: {
                        line: 446,
                        column: 28
                    }
                },
                loc: {
                    start: {
                        line: 446,
                        column: 57
                    },
                    end: {
                        line: 453,
                        column: 1
                    }
                }
            },
            '21': {
                name: '(anonymous_21)',
                decl: {
                    start: {
                        line: 469,
                        column: 32
                    },
                    end: {
                        line: 469,
                        column: 33
                    }
                },
                loc: {
                    start: {
                        line: 469,
                        column: 62
                    },
                    end: {
                        line: 476,
                        column: 1
                    }
                }
            },
            '22': {
                name: '(anonymous_22)',
                decl: {
                    start: {
                        line: 491,
                        column: 24
                    },
                    end: {
                        line: 491,
                        column: 25
                    }
                },
                loc: {
                    start: {
                        line: 491,
                        column: 38
                    },
                    end: {
                        line: 491,
                        column: 81
                    }
                }
            },
            '23': {
                name: '(anonymous_23)',
                decl: {
                    start: {
                        line: 506,
                        column: 27
                    },
                    end: {
                        line: 506,
                        column: 28
                    }
                },
                loc: {
                    start: {
                        line: 506,
                        column: 41
                    },
                    end: {
                        line: 506,
                        column: 87
                    }
                }
            },
            '24': {
                name: '(anonymous_24)',
                decl: {
                    start: {
                        line: 522,
                        column: 18
                    },
                    end: {
                        line: 522,
                        column: 19
                    }
                },
                loc: {
                    start: {
                        line: 522,
                        column: 33
                    },
                    end: {
                        line: 589,
                        column: 1
                    }
                }
            },
            '25': {
                name: '(anonymous_25)',
                decl: {
                    start: {
                        line: 548,
                        column: 46
                    },
                    end: {
                        line: 548,
                        column: 47
                    }
                },
                loc: {
                    start: {
                        line: 548,
                        column: 65
                    },
                    end: {
                        line: 574,
                        column: 5
                    }
                }
            },
            '26': {
                name: 'findMatchOnTheCurrentNode_',
                decl: {
                    start: {
                        line: 554,
                        column: 35
                    },
                    end: {
                        line: 554,
                        column: 61
                    }
                },
                loc: {
                    start: {
                        line: 554,
                        column: 72
                    },
                    end: {
                        line: 568,
                        column: 9
                    }
                }
            },
            '27': {
                name: '(anonymous_27)',
                decl: {
                    start: {
                        line: 583,
                        column: 25
                    },
                    end: {
                        line: 583,
                        column: 26
                    }
                },
                loc: {
                    start: {
                        line: 583,
                        column: 30
                    },
                    end: {
                        line: 583,
                        column: 41
                    }
                }
            },
            '28': {
                name: '(anonymous_28)',
                decl: {
                    start: {
                        line: 605,
                        column: 30
                    },
                    end: {
                        line: 605,
                        column: 31
                    }
                },
                loc: {
                    start: {
                        line: 605,
                        column: 40
                    },
                    end: {
                        line: 605,
                        column: 114
                    }
                }
            },
            '29': {
                name: '(anonymous_29)',
                decl: {
                    start: {
                        line: 616,
                        column: 15
                    },
                    end: {
                        line: 616,
                        column: 16
                    }
                },
                loc: {
                    start: {
                        line: 616,
                        column: 26
                    },
                    end: {
                        line: 621,
                        column: 9
                    }
                }
            },
            '30': {
                name: '(anonymous_30)',
                decl: {
                    start: {
                        line: 625,
                        column: 15
                    },
                    end: {
                        line: 625,
                        column: 16
                    }
                },
                loc: {
                    start: {
                        line: 625,
                        column: 26
                    },
                    end: {
                        line: 630,
                        column: 9
                    }
                }
            },
            '31': {
                name: '(anonymous_31)',
                decl: {
                    start: {
                        line: 647,
                        column: 28
                    },
                    end: {
                        line: 647,
                        column: 29
                    }
                },
                loc: {
                    start: {
                        line: 647,
                        column: 43
                    },
                    end: {
                        line: 674,
                        column: 1
                    }
                }
            },
            '32': {
                name: '(anonymous_32)',
                decl: {
                    start: {
                        line: 689,
                        column: 23
                    },
                    end: {
                        line: 689,
                        column: 24
                    }
                },
                loc: {
                    start: {
                        line: 689,
                        column: 32
                    },
                    end: {
                        line: 689,
                        column: 83
                    }
                }
            },
            '33': {
                name: '(anonymous_33)',
                decl: {
                    start: {
                        line: 707,
                        column: 15
                    },
                    end: {
                        line: 707,
                        column: 16
                    }
                },
                loc: {
                    start: {
                        line: 707,
                        column: 42
                    },
                    end: {
                        line: 720,
                        column: 1
                    }
                }
            },
            '34': {
                name: '(anonymous_34)',
                decl: {
                    start: {
                        line: 737,
                        column: 18
                    },
                    end: {
                        line: 737,
                        column: 19
                    }
                },
                loc: {
                    start: {
                        line: 737,
                        column: 54
                    },
                    end: {
                        line: 743,
                        column: 1
                    }
                }
            },
            '35': {
                name: 'runHandler_',
                decl: {
                    start: {
                        line: 757,
                        column: 9
                    },
                    end: {
                        line: 757,
                        column: 20
                    }
                },
                loc: {
                    start: {
                        line: 757,
                        column: 30
                    },
                    end: {
                        line: 765,
                        column: 1
                    }
                }
            },
            '36': {
                name: '(anonymous_36)',
                decl: {
                    start: {
                        line: 781,
                        column: 17
                    },
                    end: {
                        line: 781,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 781,
                        column: 38
                    },
                    end: {
                        line: 781,
                        column: 93
                    }
                }
            },
            '37': {
                name: '(anonymous_37)',
                decl: {
                    start: {
                        line: 781,
                        column: 50
                    },
                    end: {
                        line: 781,
                        column: 51
                    }
                },
                loc: {
                    start: {
                        line: 781,
                        column: 68
                    },
                    end: {
                        line: 781,
                        column: 92
                    }
                }
            },
            '38': {
                name: '(anonymous_38)',
                decl: {
                    start: {
                        line: 796,
                        column: 17
                    },
                    end: {
                        line: 796,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 797,
                        column: 4
                    },
                    end: {
                        line: 798,
                        column: 96
                    }
                }
            },
            '39': {
                name: '(anonymous_39)',
                decl: {
                    start: {
                        line: 797,
                        column: 26
                    },
                    end: {
                        line: 797,
                        column: 27
                    }
                },
                loc: {
                    start: {
                        line: 798,
                        column: 8
                    },
                    end: {
                        line: 798,
                        column: 95
                    }
                }
            },
            '40': {
                name: '(anonymous_40)',
                decl: {
                    start: {
                        line: 813,
                        column: 25
                    },
                    end: {
                        line: 813,
                        column: 26
                    }
                },
                loc: {
                    start: {
                        line: 813,
                        column: 33
                    },
                    end: {
                        line: 826,
                        column: 1
                    }
                }
            }
        },
        branchMap: {
            '0': {
                loc: {
                    start: {
                        line: 13,
                        column: 17
                    },
                    end: {
                        line: 13,
                        column: 26
                    }
                },
                type: 'default-arg',
                locations: [{
                    start: {
                        line: 13,
                        column: 24
                    },
                    end: {
                        line: 13,
                        column: 26
                    }
                }]
            },
            '1': {
                loc: {
                    start: {
                        line: 17,
                        column: 4
                    },
                    end: {
                        line: 19,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 17,
                        column: 4
                    },
                    end: {
                        line: 19,
                        column: 5
                    }
                }, {
                    start: {
                        line: 17,
                        column: 4
                    },
                    end: {
                        line: 19,
                        column: 5
                    }
                }]
            },
            '2': {
                loc: {
                    start: {
                        line: 21,
                        column: 4
                    },
                    end: {
                        line: 23,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 21,
                        column: 4
                    },
                    end: {
                        line: 23,
                        column: 5
                    }
                }, {
                    start: {
                        line: 21,
                        column: 4
                    },
                    end: {
                        line: 23,
                        column: 5
                    }
                }]
            },
            '3': {
                loc: {
                    start: {
                        line: 25,
                        column: 28
                    },
                    end: {
                        line: 25,
                        column: 51
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 25,
                        column: 28
                    },
                    end: {
                        line: 25,
                        column: 45
                    }
                }, {
                    start: {
                        line: 25,
                        column: 49
                    },
                    end: {
                        line: 25,
                        column: 51
                    }
                }]
            },
            '4': {
                loc: {
                    start: {
                        line: 27,
                        column: 4
                    },
                    end: {
                        line: 29,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 27,
                        column: 4
                    },
                    end: {
                        line: 29,
                        column: 5
                    }
                }, {
                    start: {
                        line: 27,
                        column: 4
                    },
                    end: {
                        line: 29,
                        column: 5
                    }
                }]
            },
            '5': {
                loc: {
                    start: {
                        line: 35,
                        column: 57
                    },
                    end: {
                        line: 35,
                        column: 99
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 35,
                        column: 57
                    },
                    end: {
                        line: 35,
                        column: 75
                    }
                }, {
                    start: {
                        line: 35,
                        column: 79
                    },
                    end: {
                        line: 35,
                        column: 99
                    }
                }]
            },
            '6': {
                loc: {
                    start: {
                        line: 37,
                        column: 12
                    },
                    end: {
                        line: 37,
                        column: 65
                    }
                },
                type: 'cond-expr',
                locations: [{
                    start: {
                        line: 37,
                        column: 37
                    },
                    end: {
                        line: 37,
                        column: 58
                    }
                }, {
                    start: {
                        line: 37,
                        column: 62
                    },
                    end: {
                        line: 37,
                        column: 65
                    }
                }]
            },
            '7': {
                loc: {
                    start: {
                        line: 48,
                        column: 24
                    },
                    end: {
                        line: 48,
                        column: 91
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 48,
                        column: 24
                    },
                    end: {
                        line: 48,
                        column: 85
                    }
                }, {
                    start: {
                        line: 48,
                        column: 89
                    },
                    end: {
                        line: 48,
                        column: 91
                    }
                }]
            },
            '8': {
                loc: {
                    start: {
                        line: 50,
                        column: 4
                    },
                    end: {
                        line: 52,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 50,
                        column: 4
                    },
                    end: {
                        line: 52,
                        column: 5
                    }
                }, {
                    start: {
                        line: 50,
                        column: 4
                    },
                    end: {
                        line: 52,
                        column: 5
                    }
                }]
            },
            '9': {
                loc: {
                    start: {
                        line: 54,
                        column: 4
                    },
                    end: {
                        line: 56,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 54,
                        column: 4
                    },
                    end: {
                        line: 56,
                        column: 5
                    }
                }, {
                    start: {
                        line: 54,
                        column: 4
                    },
                    end: {
                        line: 56,
                        column: 5
                    }
                }]
            },
            '10': {
                loc: {
                    start: {
                        line: 60,
                        column: 4
                    },
                    end: {
                        line: 67,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 60,
                        column: 4
                    },
                    end: {
                        line: 67,
                        column: 5
                    }
                }, {
                    start: {
                        line: 60,
                        column: 4
                    },
                    end: {
                        line: 67,
                        column: 5
                    }
                }]
            },
            '11': {
                loc: {
                    start: {
                        line: 61,
                        column: 8
                    },
                    end: {
                        line: 66,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 61,
                        column: 8
                    },
                    end: {
                        line: 66,
                        column: 9
                    }
                }, {
                    start: {
                        line: 61,
                        column: 8
                    },
                    end: {
                        line: 66,
                        column: 9
                    }
                }]
            },
            '12': {
                loc: {
                    start: {
                        line: 61,
                        column: 12
                    },
                    end: {
                        line: 61,
                        column: 92
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 61,
                        column: 12
                    },
                    end: {
                        line: 61,
                        column: 46
                    }
                }, {
                    start: {
                        line: 61,
                        column: 50
                    },
                    end: {
                        line: 61,
                        column: 92
                    }
                }]
            },
            '13': {
                loc: {
                    start: {
                        line: 64,
                        column: 13
                    },
                    end: {
                        line: 66,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 64,
                        column: 13
                    },
                    end: {
                        line: 66,
                        column: 9
                    }
                }, {
                    start: {
                        line: 64,
                        column: 13
                    },
                    end: {
                        line: 66,
                        column: 9
                    }
                }]
            },
            '14': {
                loc: {
                    start: {
                        line: 75,
                        column: 24
                    },
                    end: {
                        line: 75,
                        column: 65
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 75,
                        column: 24
                    },
                    end: {
                        line: 75,
                        column: 59
                    }
                }, {
                    start: {
                        line: 75,
                        column: 63
                    },
                    end: {
                        line: 75,
                        column: 65
                    }
                }]
            },
            '15': {
                loc: {
                    start: {
                        line: 79,
                        column: 4
                    },
                    end: {
                        line: 81,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 79,
                        column: 4
                    },
                    end: {
                        line: 81,
                        column: 5
                    }
                }, {
                    start: {
                        line: 79,
                        column: 4
                    },
                    end: {
                        line: 81,
                        column: 5
                    }
                }]
            },
            '16': {
                loc: {
                    start: {
                        line: 88,
                        column: 4
                    },
                    end: {
                        line: 90,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 88,
                        column: 4
                    },
                    end: {
                        line: 90,
                        column: 5
                    }
                }, {
                    start: {
                        line: 88,
                        column: 4
                    },
                    end: {
                        line: 90,
                        column: 5
                    }
                }]
            },
            '17': {
                loc: {
                    start: {
                        line: 92,
                        column: 4
                    },
                    end: {
                        line: 94,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 92,
                        column: 4
                    },
                    end: {
                        line: 94,
                        column: 5
                    }
                }, {
                    start: {
                        line: 92,
                        column: 4
                    },
                    end: {
                        line: 94,
                        column: 5
                    }
                }]
            },
            '18': {
                loc: {
                    start: {
                        line: 97,
                        column: 23
                    },
                    end: {
                        line: 97,
                        column: 69
                    }
                },
                type: 'cond-expr',
                locations: [{
                    start: {
                        line: 97,
                        column: 43
                    },
                    end: {
                        line: 97,
                        column: 49
                    }
                }, {
                    start: {
                        line: 97,
                        column: 52
                    },
                    end: {
                        line: 97,
                        column: 69
                    }
                }]
            },
            '19': {
                loc: {
                    start: {
                        line: 100,
                        column: 8
                    },
                    end: {
                        line: 111,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 100,
                        column: 8
                    },
                    end: {
                        line: 111,
                        column: 9
                    }
                }, {
                    start: {
                        line: 100,
                        column: 8
                    },
                    end: {
                        line: 111,
                        column: 9
                    }
                }]
            },
            '20': {
                loc: {
                    start: {
                        line: 102,
                        column: 12
                    },
                    end: {
                        line: 110,
                        column: 13
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 102,
                        column: 12
                    },
                    end: {
                        line: 110,
                        column: 13
                    }
                }, {
                    start: {
                        line: 102,
                        column: 12
                    },
                    end: {
                        line: 110,
                        column: 13
                    }
                }]
            },
            '21': {
                loc: {
                    start: {
                        line: 102,
                        column: 16
                    },
                    end: {
                        line: 102,
                        column: 92
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 102,
                        column: 16
                    },
                    end: {
                        line: 102,
                        column: 57
                    }
                }, {
                    start: {
                        line: 102,
                        column: 61
                    },
                    end: {
                        line: 102,
                        column: 92
                    }
                }]
            },
            '22': {
                loc: {
                    start: {
                        line: 104,
                        column: 16
                    },
                    end: {
                        line: 109,
                        column: 17
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 104,
                        column: 16
                    },
                    end: {
                        line: 109,
                        column: 17
                    }
                }, {
                    start: {
                        line: 104,
                        column: 16
                    },
                    end: {
                        line: 109,
                        column: 17
                    }
                }]
            },
            '23': {
                loc: {
                    start: {
                        line: 104,
                        column: 20
                    },
                    end: {
                        line: 104,
                        column: 86
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 104,
                        column: 20
                    },
                    end: {
                        line: 104,
                        column: 37
                    }
                }, {
                    start: {
                        line: 104,
                        column: 41
                    },
                    end: {
                        line: 104,
                        column: 86
                    }
                }]
            },
            '24': {
                loc: {
                    start: {
                        line: 107,
                        column: 21
                    },
                    end: {
                        line: 109,
                        column: 17
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 107,
                        column: 21
                    },
                    end: {
                        line: 109,
                        column: 17
                    }
                }, {
                    start: {
                        line: 107,
                        column: 21
                    },
                    end: {
                        line: 109,
                        column: 17
                    }
                }]
            },
            '25': {
                loc: {
                    start: {
                        line: 130,
                        column: 20
                    },
                    end: {
                        line: 130,
                        column: 112
                    }
                },
                type: 'cond-expr',
                locations: [{
                    start: {
                        line: 130,
                        column: 85
                    },
                    end: {
                        line: 130,
                        column: 105
                    }
                }, {
                    start: {
                        line: 130,
                        column: 108
                    },
                    end: {
                        line: 130,
                        column: 112
                    }
                }]
            },
            '26': {
                loc: {
                    start: {
                        line: 130,
                        column: 20
                    },
                    end: {
                        line: 130,
                        column: 82
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 130,
                        column: 20
                    },
                    end: {
                        line: 130,
                        column: 56
                    }
                }, {
                    start: {
                        line: 130,
                        column: 60
                    },
                    end: {
                        line: 130,
                        column: 82
                    }
                }]
            },
            '27': {
                loc: {
                    start: {
                        line: 135,
                        column: 8
                    },
                    end: {
                        line: 137,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 135,
                        column: 8
                    },
                    end: {
                        line: 137,
                        column: 9
                    }
                }, {
                    start: {
                        line: 135,
                        column: 8
                    },
                    end: {
                        line: 137,
                        column: 9
                    }
                }]
            },
            '28': {
                loc: {
                    start: {
                        line: 141,
                        column: 4
                    },
                    end: {
                        line: 145,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 141,
                        column: 4
                    },
                    end: {
                        line: 145,
                        column: 5
                    }
                }, {
                    start: {
                        line: 141,
                        column: 4
                    },
                    end: {
                        line: 145,
                        column: 5
                    }
                }]
            },
            '29': {
                loc: {
                    start: {
                        line: 141,
                        column: 8
                    },
                    end: {
                        line: 141,
                        column: 78
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 141,
                        column: 8
                    },
                    end: {
                        line: 141,
                        column: 22
                    }
                }, {
                    start: {
                        line: 141,
                        column: 26
                    },
                    end: {
                        line: 141,
                        column: 39
                    }
                }, {
                    start: {
                        line: 141,
                        column: 43
                    },
                    end: {
                        line: 141,
                        column: 78
                    }
                }]
            },
            '30': {
                loc: {
                    start: {
                        line: 248,
                        column: 20
                    },
                    end: {
                        line: 248,
                        column: 130
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 248,
                        column: 20
                    },
                    end: {
                        line: 248,
                        column: 30
                    }
                }, {
                    start: {
                        line: 248,
                        column: 34
                    },
                    end: {
                        line: 248,
                        column: 58
                    }
                }, {
                    start: {
                        line: 248,
                        column: 62
                    },
                    end: {
                        line: 248,
                        column: 83
                    }
                }, {
                    start: {
                        line: 248,
                        column: 87
                    },
                    end: {
                        line: 248,
                        column: 107
                    }
                }, {
                    start: {
                        line: 248,
                        column: 111
                    },
                    end: {
                        line: 248,
                        column: 130
                    }
                }]
            },
            '31': {
                loc: {
                    start: {
                        line: 251,
                        column: 8
                    },
                    end: {
                        line: 253,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 251,
                        column: 8
                    },
                    end: {
                        line: 253,
                        column: 9
                    }
                }, {
                    start: {
                        line: 251,
                        column: 8
                    },
                    end: {
                        line: 253,
                        column: 9
                    }
                }]
            },
            '32': {
                loc: {
                    start: {
                        line: 254,
                        column: 8
                    },
                    end: {
                        line: 256,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 254,
                        column: 8
                    },
                    end: {
                        line: 256,
                        column: 9
                    }
                }, {
                    start: {
                        line: 254,
                        column: 8
                    },
                    end: {
                        line: 256,
                        column: 9
                    }
                }]
            },
            '33': {
                loc: {
                    start: {
                        line: 291,
                        column: 16
                    },
                    end: {
                        line: 293,
                        column: 17
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 291,
                        column: 16
                    },
                    end: {
                        line: 293,
                        column: 17
                    }
                }, {
                    start: {
                        line: 291,
                        column: 16
                    },
                    end: {
                        line: 293,
                        column: 17
                    }
                }]
            },
            '34': {
                loc: {
                    start: {
                        line: 291,
                        column: 20
                    },
                    end: {
                        line: 291,
                        column: 108
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 291,
                        column: 20
                    },
                    end: {
                        line: 291,
                        column: 57
                    }
                }, {
                    start: {
                        line: 291,
                        column: 62
                    },
                    end: {
                        line: 291,
                        column: 70
                    }
                }, {
                    start: {
                        line: 291,
                        column: 74
                    },
                    end: {
                        line: 291,
                        column: 107
                    }
                }]
            },
            '35': {
                loc: {
                    start: {
                        line: 414,
                        column: 4
                    },
                    end: {
                        line: 419,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 414,
                        column: 4
                    },
                    end: {
                        line: 419,
                        column: 5
                    }
                }, {
                    start: {
                        line: 414,
                        column: 4
                    },
                    end: {
                        line: 419,
                        column: 5
                    }
                }]
            },
            '36': {
                loc: {
                    start: {
                        line: 423,
                        column: 4
                    },
                    end: {
                        line: 427,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 423,
                        column: 4
                    },
                    end: {
                        line: 427,
                        column: 5
                    }
                }, {
                    start: {
                        line: 423,
                        column: 4
                    },
                    end: {
                        line: 427,
                        column: 5
                    }
                }]
            },
            '37': {
                loc: {
                    start: {
                        line: 424,
                        column: 8
                    },
                    end: {
                        line: 426,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 424,
                        column: 8
                    },
                    end: {
                        line: 426,
                        column: 9
                    }
                }, {
                    start: {
                        line: 424,
                        column: 8
                    },
                    end: {
                        line: 426,
                        column: 9
                    }
                }]
            },
            '38': {
                loc: {
                    start: {
                        line: 424,
                        column: 12
                    },
                    end: {
                        line: 424,
                        column: 75
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 424,
                        column: 12
                    },
                    end: {
                        line: 424,
                        column: 26
                    }
                }, {
                    start: {
                        line: 424,
                        column: 30
                    },
                    end: {
                        line: 424,
                        column: 75
                    }
                }]
            },
            '39': {
                loc: {
                    start: {
                        line: 446,
                        column: 34
                    },
                    end: {
                        line: 446,
                        column: 52
                    }
                },
                type: 'default-arg',
                locations: [{
                    start: {
                        line: 446,
                        column: 47
                    },
                    end: {
                        line: 446,
                        column: 52
                    }
                }]
            },
            '40': {
                loc: {
                    start: {
                        line: 448,
                        column: 4
                    },
                    end: {
                        line: 450,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 448,
                        column: 4
                    },
                    end: {
                        line: 450,
                        column: 5
                    }
                }, {
                    start: {
                        line: 448,
                        column: 4
                    },
                    end: {
                        line: 450,
                        column: 5
                    }
                }]
            },
            '41': {
                loc: {
                    start: {
                        line: 448,
                        column: 8
                    },
                    end: {
                        line: 448,
                        column: 59
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 448,
                        column: 8
                    },
                    end: {
                        line: 448,
                        column: 19
                    }
                }, {
                    start: {
                        line: 448,
                        column: 23
                    },
                    end: {
                        line: 448,
                        column: 59
                    }
                }]
            },
            '42': {
                loc: {
                    start: {
                        line: 469,
                        column: 39
                    },
                    end: {
                        line: 469,
                        column: 57
                    }
                },
                type: 'default-arg',
                locations: [{
                    start: {
                        line: 469,
                        column: 52
                    },
                    end: {
                        line: 469,
                        column: 57
                    }
                }]
            },
            '43': {
                loc: {
                    start: {
                        line: 471,
                        column: 4
                    },
                    end: {
                        line: 473,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 471,
                        column: 4
                    },
                    end: {
                        line: 473,
                        column: 5
                    }
                }, {
                    start: {
                        line: 471,
                        column: 4
                    },
                    end: {
                        line: 473,
                        column: 5
                    }
                }]
            },
            '44': {
                loc: {
                    start: {
                        line: 471,
                        column: 8
                    },
                    end: {
                        line: 471,
                        column: 59
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 471,
                        column: 8
                    },
                    end: {
                        line: 471,
                        column: 19
                    }
                }, {
                    start: {
                        line: 471,
                        column: 23
                    },
                    end: {
                        line: 471,
                        column: 59
                    }
                }]
            },
            '45': {
                loc: {
                    start: {
                        line: 475,
                        column: 11
                    },
                    end: {
                        line: 475,
                        column: 46
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 475,
                        column: 11
                    },
                    end: {
                        line: 475,
                        column: 38
                    }
                }, {
                    start: {
                        line: 475,
                        column: 42
                    },
                    end: {
                        line: 475,
                        column: 46
                    }
                }]
            },
            '46': {
                loc: {
                    start: {
                        line: 532,
                        column: 4
                    },
                    end: {
                        line: 534,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 532,
                        column: 4
                    },
                    end: {
                        line: 534,
                        column: 5
                    }
                }, {
                    start: {
                        line: 532,
                        column: 4
                    },
                    end: {
                        line: 534,
                        column: 5
                    }
                }]
            },
            '47': {
                loc: {
                    start: {
                        line: 550,
                        column: 8
                    },
                    end: {
                        line: 552,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 550,
                        column: 8
                    },
                    end: {
                        line: 552,
                        column: 9
                    }
                }, {
                    start: {
                        line: 550,
                        column: 8
                    },
                    end: {
                        line: 552,
                        column: 9
                    }
                }]
            },
            '48': {
                loc: {
                    start: {
                        line: 550,
                        column: 12
                    },
                    end: {
                        line: 550,
                        column: 54
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 550,
                        column: 12
                    },
                    end: {
                        line: 550,
                        column: 29
                    }
                }, {
                    start: {
                        line: 550,
                        column: 33
                    },
                    end: {
                        line: 550,
                        column: 54
                    }
                }]
            },
            '49': {
                loc: {
                    start: {
                        line: 556,
                        column: 12
                    },
                    end: {
                        line: 560,
                        column: 13
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 556,
                        column: 12
                    },
                    end: {
                        line: 560,
                        column: 13
                    }
                }, {
                    start: {
                        line: 556,
                        column: 12
                    },
                    end: {
                        line: 560,
                        column: 13
                    }
                }]
            },
            '50': {
                loc: {
                    start: {
                        line: 556,
                        column: 16
                    },
                    end: {
                        line: 556,
                        column: 101
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 556,
                        column: 16
                    },
                    end: {
                        line: 556,
                        column: 34
                    }
                }, {
                    start: {
                        line: 556,
                        column: 39
                    },
                    end: {
                        line: 556,
                        column: 56
                    }
                }, {
                    start: {
                        line: 556,
                        column: 60
                    },
                    end: {
                        line: 556,
                        column: 100
                    }
                }]
            },
            '51': {
                loc: {
                    start: {
                        line: 562,
                        column: 12
                    },
                    end: {
                        line: 566,
                        column: 13
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 562,
                        column: 12
                    },
                    end: {
                        line: 566,
                        column: 13
                    }
                }, {
                    start: {
                        line: 562,
                        column: 12
                    },
                    end: {
                        line: 566,
                        column: 13
                    }
                }]
            },
            '52': {
                loc: {
                    start: {
                        line: 576,
                        column: 4
                    },
                    end: {
                        line: 578,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 576,
                        column: 4
                    },
                    end: {
                        line: 578,
                        column: 5
                    }
                }, {
                    start: {
                        line: 576,
                        column: 4
                    },
                    end: {
                        line: 578,
                        column: 5
                    }
                }]
            },
            '53': {
                loc: {
                    start: {
                        line: 582,
                        column: 4
                    },
                    end: {
                        line: 584,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 582,
                        column: 4
                    },
                    end: {
                        line: 584,
                        column: 5
                    }
                }, {
                    start: {
                        line: 582,
                        column: 4
                    },
                    end: {
                        line: 584,
                        column: 5
                    }
                }]
            },
            '54': {
                loc: {
                    start: {
                        line: 582,
                        column: 8
                    },
                    end: {
                        line: 582,
                        column: 62
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 582,
                        column: 8
                    },
                    end: {
                        line: 582,
                        column: 37
                    }
                }, {
                    start: {
                        line: 582,
                        column: 41
                    },
                    end: {
                        line: 582,
                        column: 62
                    }
                }]
            },
            '55': {
                loc: {
                    start: {
                        line: 605,
                        column: 40
                    },
                    end: {
                        line: 605,
                        column: 114
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 605,
                        column: 40
                    },
                    end: {
                        line: 605,
                        column: 62
                    }
                }, {
                    start: {
                        line: 605,
                        column: 66
                    },
                    end: {
                        line: 605,
                        column: 114
                    }
                }]
            },
            '56': {
                loc: {
                    start: {
                        line: 618,
                        column: 12
                    },
                    end: {
                        line: 620,
                        column: 13
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 618,
                        column: 12
                    },
                    end: {
                        line: 620,
                        column: 13
                    }
                }, {
                    start: {
                        line: 618,
                        column: 12
                    },
                    end: {
                        line: 620,
                        column: 13
                    }
                }]
            },
            '57': {
                loc: {
                    start: {
                        line: 627,
                        column: 12
                    },
                    end: {
                        line: 629,
                        column: 13
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 627,
                        column: 12
                    },
                    end: {
                        line: 629,
                        column: 13
                    }
                }, {
                    start: {
                        line: 627,
                        column: 12
                    },
                    end: {
                        line: 629,
                        column: 13
                    }
                }]
            },
            '58': {
                loc: {
                    start: {
                        line: 655,
                        column: 17
                    },
                    end: {
                        line: 655,
                        column: 37
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 655,
                        column: 17
                    },
                    end: {
                        line: 655,
                        column: 31
                    }
                }, {
                    start: {
                        line: 655,
                        column: 35
                    },
                    end: {
                        line: 655,
                        column: 37
                    }
                }]
            },
            '59': {
                loc: {
                    start: {
                        line: 661,
                        column: 20
                    },
                    end: {
                        line: 661,
                        column: 46
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 661,
                        column: 20
                    },
                    end: {
                        line: 661,
                        column: 37
                    }
                }, {
                    start: {
                        line: 661,
                        column: 41
                    },
                    end: {
                        line: 661,
                        column: 46
                    }
                }]
            },
            '60': {
                loc: {
                    start: {
                        line: 668,
                        column: 4
                    },
                    end: {
                        line: 670,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 668,
                        column: 4
                    },
                    end: {
                        line: 670,
                        column: 5
                    }
                }, {
                    start: {
                        line: 668,
                        column: 4
                    },
                    end: {
                        line: 670,
                        column: 5
                    }
                }]
            },
            '61': {
                loc: {
                    start: {
                        line: 709,
                        column: 4
                    },
                    end: {
                        line: 711,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 709,
                        column: 4
                    },
                    end: {
                        line: 711,
                        column: 5
                    }
                }, {
                    start: {
                        line: 709,
                        column: 4
                    },
                    end: {
                        line: 711,
                        column: 5
                    }
                }]
            },
            '62': {
                loc: {
                    start: {
                        line: 718,
                        column: 12
                    },
                    end: {
                        line: 718,
                        column: 89
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 718,
                        column: 12
                    },
                    end: {
                        line: 718,
                        column: 28
                    }
                }, {
                    start: {
                        line: 718,
                        column: 32
                    },
                    end: {
                        line: 718,
                        column: 51
                    }
                }, {
                    start: {
                        line: 718,
                        column: 56
                    },
                    end: {
                        line: 718,
                        column: 88
                    }
                }]
            },
            '63': {
                loc: {
                    start: {
                        line: 738,
                        column: 4
                    },
                    end: {
                        line: 741,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 738,
                        column: 4
                    },
                    end: {
                        line: 741,
                        column: 5
                    }
                }, {
                    start: {
                        line: 738,
                        column: 4
                    },
                    end: {
                        line: 741,
                        column: 5
                    }
                }]
            },
            '64': {
                loc: {
                    start: {
                        line: 739,
                        column: 20
                    },
                    end: {
                        line: 739,
                        column: 75
                    }
                },
                type: 'cond-expr',
                locations: [{
                    start: {
                        line: 739,
                        column: 31
                    },
                    end: {
                        line: 739,
                        column: 40
                    }
                }, {
                    start: {
                        line: 739,
                        column: 43
                    },
                    end: {
                        line: 739,
                        column: 75
                    }
                }]
            },
            '65': {
                loc: {
                    start: {
                        line: 739,
                        column: 43
                    },
                    end: {
                        line: 739,
                        column: 75
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 739,
                        column: 43
                    },
                    end: {
                        line: 739,
                        column: 63
                    }
                }, {
                    start: {
                        line: 739,
                        column: 67
                    },
                    end: {
                        line: 739,
                        column: 75
                    }
                }]
            },
            '66': {
                loc: {
                    start: {
                        line: 742,
                        column: 11
                    },
                    end: {
                        line: 742,
                        column: 82
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 742,
                        column: 12
                    },
                    end: {
                        line: 742,
                        column: 21
                    }
                }, {
                    start: {
                        line: 742,
                        column: 25
                    },
                    end: {
                        line: 742,
                        column: 48
                    }
                }, {
                    start: {
                        line: 742,
                        column: 53
                    },
                    end: {
                        line: 742,
                        column: 82
                    }
                }]
            },
            '67': {
                loc: {
                    start: {
                        line: 759,
                        column: 19
                    },
                    end: {
                        line: 759,
                        column: 63
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 759,
                        column: 19
                    },
                    end: {
                        line: 759,
                        column: 41
                    }
                }, {
                    start: {
                        line: 759,
                        column: 45
                    },
                    end: {
                        line: 759,
                        column: 63
                    }
                }]
            },
            '68': {
                loc: {
                    start: {
                        line: 761,
                        column: 4
                    },
                    end: {
                        line: 764,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 761,
                        column: 4
                    },
                    end: {
                        line: 764,
                        column: 5
                    }
                }, {
                    start: {
                        line: 761,
                        column: 4
                    },
                    end: {
                        line: 764,
                        column: 5
                    }
                }]
            },
            '69': {
                loc: {
                    start: {
                        line: 798,
                        column: 8
                    },
                    end: {
                        line: 798,
                        column: 95
                    }
                },
                type: 'cond-expr',
                locations: [{
                    start: {
                        line: 798,
                        column: 36
                    },
                    end: {
                        line: 798,
                        column: 70
                    }
                }, {
                    start: {
                        line: 798,
                        column: 73
                    },
                    end: {
                        line: 798,
                        column: 95
                    }
                }]
            },
            '70': {
                loc: {
                    start: {
                        line: 821,
                        column: 4
                    },
                    end: {
                        line: 823,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 821,
                        column: 4
                    },
                    end: {
                        line: 823,
                        column: 5
                    }
                }, {
                    start: {
                        line: 821,
                        column: 4
                    },
                    end: {
                        line: 823,
                        column: 5
                    }
                }]
            }
        },
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '11': 0,
            '12': 0,
            '13': 0,
            '14': 0,
            '15': 0,
            '16': 0,
            '17': 0,
            '18': 0,
            '19': 0,
            '20': 0,
            '21': 0,
            '22': 0,
            '23': 0,
            '24': 0,
            '25': 0,
            '26': 0,
            '27': 0,
            '28': 0,
            '29': 0,
            '30': 0,
            '31': 0,
            '32': 0,
            '33': 0,
            '34': 0,
            '35': 0,
            '36': 0,
            '37': 0,
            '38': 0,
            '39': 0,
            '40': 0,
            '41': 0,
            '42': 0,
            '43': 0,
            '44': 0,
            '45': 0,
            '46': 0,
            '47': 0,
            '48': 0,
            '49': 0,
            '50': 0,
            '51': 0,
            '52': 0,
            '53': 0,
            '54': 0,
            '55': 0,
            '56': 0,
            '57': 0,
            '58': 0,
            '59': 0,
            '60': 0,
            '61': 0,
            '62': 0,
            '63': 0,
            '64': 0,
            '65': 0,
            '66': 0,
            '67': 0,
            '68': 0,
            '69': 0,
            '70': 0,
            '71': 0,
            '72': 0,
            '73': 0,
            '74': 0,
            '75': 0,
            '76': 0,
            '77': 0,
            '78': 0,
            '79': 0,
            '80': 0,
            '81': 0,
            '82': 0,
            '83': 0,
            '84': 0,
            '85': 0,
            '86': 0,
            '87': 0,
            '88': 0,
            '89': 0,
            '90': 0,
            '91': 0,
            '92': 0,
            '93': 0,
            '94': 0,
            '95': 0,
            '96': 0,
            '97': 0,
            '98': 0,
            '99': 0,
            '100': 0,
            '101': 0,
            '102': 0,
            '103': 0,
            '104': 0,
            '105': 0,
            '106': 0,
            '107': 0,
            '108': 0,
            '109': 0,
            '110': 0,
            '111': 0,
            '112': 0,
            '113': 0,
            '114': 0,
            '115': 0,
            '116': 0,
            '117': 0,
            '118': 0,
            '119': 0,
            '120': 0,
            '121': 0,
            '122': 0,
            '123': 0,
            '124': 0,
            '125': 0,
            '126': 0,
            '127': 0,
            '128': 0,
            '129': 0,
            '130': 0,
            '131': 0,
            '132': 0,
            '133': 0,
            '134': 0,
            '135': 0,
            '136': 0,
            '137': 0,
            '138': 0,
            '139': 0,
            '140': 0,
            '141': 0,
            '142': 0,
            '143': 0,
            '144': 0,
            '145': 0,
            '146': 0,
            '147': 0,
            '148': 0,
            '149': 0,
            '150': 0,
            '151': 0,
            '152': 0,
            '153': 0,
            '154': 0,
            '155': 0,
            '156': 0,
            '157': 0,
            '158': 0,
            '159': 0,
            '160': 0,
            '161': 0,
            '162': 0,
            '163': 0,
            '164': 0,
            '165': 0,
            '166': 0,
            '167': 0,
            '168': 0,
            '169': 0,
            '170': 0,
            '171': 0,
            '172': 0,
            '173': 0,
            '174': 0,
            '175': 0,
            '176': 0,
            '177': 0,
            '178': 0,
            '179': 0,
            '180': 0,
            '181': 0,
            '182': 0,
            '183': 0,
            '184': 0,
            '185': 0,
            '186': 0,
            '187': 0,
            '188': 0,
            '189': 0,
            '190': 0,
            '191': 0,
            '192': 0,
            '193': 0,
            '194': 0
        },
        f: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '11': 0,
            '12': 0,
            '13': 0,
            '14': 0,
            '15': 0,
            '16': 0,
            '17': 0,
            '18': 0,
            '19': 0,
            '20': 0,
            '21': 0,
            '22': 0,
            '23': 0,
            '24': 0,
            '25': 0,
            '26': 0,
            '27': 0,
            '28': 0,
            '29': 0,
            '30': 0,
            '31': 0,
            '32': 0,
            '33': 0,
            '34': 0,
            '35': 0,
            '36': 0,
            '37': 0,
            '38': 0,
            '39': 0,
            '40': 0
        },
        b: {
            '0': [0],
            '1': [0, 0],
            '2': [0, 0],
            '3': [0, 0],
            '4': [0, 0],
            '5': [0, 0],
            '6': [0, 0],
            '7': [0, 0],
            '8': [0, 0],
            '9': [0, 0],
            '10': [0, 0],
            '11': [0, 0],
            '12': [0, 0],
            '13': [0, 0],
            '14': [0, 0],
            '15': [0, 0],
            '16': [0, 0],
            '17': [0, 0],
            '18': [0, 0],
            '19': [0, 0],
            '20': [0, 0],
            '21': [0, 0],
            '22': [0, 0],
            '23': [0, 0],
            '24': [0, 0],
            '25': [0, 0],
            '26': [0, 0],
            '27': [0, 0],
            '28': [0, 0],
            '29': [0, 0, 0],
            '30': [0, 0, 0, 0, 0],
            '31': [0, 0],
            '32': [0, 0],
            '33': [0, 0],
            '34': [0, 0, 0],
            '35': [0, 0],
            '36': [0, 0],
            '37': [0, 0],
            '38': [0, 0],
            '39': [0],
            '40': [0, 0],
            '41': [0, 0],
            '42': [0],
            '43': [0, 0],
            '44': [0, 0],
            '45': [0, 0],
            '46': [0, 0],
            '47': [0, 0],
            '48': [0, 0],
            '49': [0, 0],
            '50': [0, 0, 0],
            '51': [0, 0],
            '52': [0, 0],
            '53': [0, 0],
            '54': [0, 0],
            '55': [0, 0],
            '56': [0, 0],
            '57': [0, 0],
            '58': [0, 0],
            '59': [0, 0],
            '60': [0, 0],
            '61': [0, 0],
            '62': [0, 0, 0],
            '63': [0, 0],
            '64': [0, 0],
            '65': [0, 0],
            '66': [0, 0, 0],
            '67': [0, 0],
            '68': [0, 0],
            '69': [0, 0],
            '70': [0, 0]
        },
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var _loopProps = __webpack_require__(0);

var _loopProps2 = _interopRequireDefault(_loopProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @name eventsTable_
 * @description
 * A weak map that stores the event listeners; use html element as key
 */
var eventsTable_ = (++cov_2k31f4dous.s[0], new WeakMap());

var get = (++cov_2k31f4dous.s[1], function (el) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_2k31f4dous.b[0][0], '');
    var /* internal */isFired = arguments[2];
    ++cov_2k31f4dous.f[0];


    var elListeners = (++cov_2k31f4dous.s[2], eventsTable_.get(el));

    ++cov_2k31f4dous.s[3];
    if (typeof elListeners == 'undefined') {
        ++cov_2k31f4dous.b[1][0];
        ++cov_2k31f4dous.s[4];

        return [];
    } else {
        ++cov_2k31f4dous.b[1][1];
    }

    ++cov_2k31f4dous.s[5];
    if (!type) {
        ++cov_2k31f4dous.b[2][0];
        ++cov_2k31f4dous.s[6];

        return elListeners;
    } else {
        ++cov_2k31f4dous.b[2][1];
    }

    var listenersByType = (++cov_2k31f4dous.s[7], (++cov_2k31f4dous.b[3][0], elListeners[type]) || (++cov_2k31f4dous.b[3][1], []));

    ++cov_2k31f4dous.s[8];
    if (!isFired) {
        ++cov_2k31f4dous.b[4][0];
        ++cov_2k31f4dous.s[9];

        return listenersByType;
    } else {
        ++cov_2k31f4dous.b[4][1];
    }

    // if the event was programmatically fired (isFired === true)
    // Events.get returns also the event whose original name is `type`

    ++cov_2k31f4dous.s[10];
    (0, _loopProps2.default)(elListeners, function (obj, evtKey) {
        ++cov_2k31f4dous.f[1];

        var listenerMatchingOrigType = (++cov_2k31f4dous.s[11], obj.filter(function (x) {
            ++cov_2k31f4dous.f[2];
            ++cov_2k31f4dous.s[12];
            return (++cov_2k31f4dous.b[5][0], x.origType == type) && (++cov_2k31f4dous.b[5][1], x.origType != evtKey);
        }));
        ++cov_2k31f4dous.s[13];
        listenerMatchingOrigType.reduce(function (res, currEl) {
            ++cov_2k31f4dous.f[3];
            ++cov_2k31f4dous.s[14];
            return !~res.indexOf(currEl) ? (++cov_2k31f4dous.b[6][0], (res.push(currEl), res)) : (++cov_2k31f4dous.b[6][1], res);
        }, listenersByType);
    });

    ++cov_2k31f4dous.s[15];
    return listenersByType;
});

var add = (++cov_2k31f4dous.s[16], function (el, type, delegator, handler) {
    ++cov_2k31f4dous.f[4];


    var eventObj = (++cov_2k31f4dous.s[17], prepareStoreObject_(type, delegator, handler));

    var eventTarget = (++cov_2k31f4dous.s[18], (++cov_2k31f4dous.b[7][0], getEventsTableFixedKey_(eventObj.origType, eventObj.delegate)) || (++cov_2k31f4dous.b[7][1], el));

    ++cov_2k31f4dous.s[19];
    if (!eventsTable_.has(eventTarget)) {
        ++cov_2k31f4dous.b[8][0];
        ++cov_2k31f4dous.s[20];

        eventsTable_.set(eventTarget, {});
    } else {
        ++cov_2k31f4dous.b[8][1];
    }

    ++cov_2k31f4dous.s[21];
    if (!eventsTable_.get(eventTarget)[eventObj.type]) {
        ++cov_2k31f4dous.b[9][0];
        ++cov_2k31f4dous.s[22];

        eventsTable_.get(eventTarget)[eventObj.type] = [];
    } else {
        ++cov_2k31f4dous.b[9][1];
    }

    var handlersCount = (++cov_2k31f4dous.s[23], eventsTable_.get(eventTarget)[eventObj.type].push(eventObj));

    ++cov_2k31f4dous.s[24];
    if (handlersCount == 1) {
        ++cov_2k31f4dous.b[10][0];
        ++cov_2k31f4dous.s[25];

        if ((++cov_2k31f4dous.b[12][0], eventObj.type == eventObj.origType) || (++cov_2k31f4dous.b[12][1], typeof special_[type].setup == 'undefined')) {
            ++cov_2k31f4dous.b[11][0];
            ++cov_2k31f4dous.s[26];

            addDOMListener_(eventTarget, eventObj.type);
        } else {
                ++cov_2k31f4dous.b[11][1];
                ++cov_2k31f4dous.s[27];
                if (typeof special_[type].setup == 'function') {
                    ++cov_2k31f4dous.b[13][0];
                    ++cov_2k31f4dous.s[28];

                    special_[type].setup();
                } else {
                    ++cov_2k31f4dous.b[13][1];
                }
            }
    } else {
        ++cov_2k31f4dous.b[10][1];
    }

    ++cov_2k31f4dous.s[29];
    return eventObj;
});

var del = (++cov_2k31f4dous.s[30], function (el, type, delegator, handler) {
    ++cov_2k31f4dous.f[5];


    var eventTarget = (++cov_2k31f4dous.s[31], (++cov_2k31f4dous.b[14][0], getEventsTableFixedKey_(type, true)) || (++cov_2k31f4dous.b[14][1], el));

    var listeners = (++cov_2k31f4dous.s[32], eventsTable_.get(eventTarget));

    ++cov_2k31f4dous.s[33];
    if (!listeners) {
        ++cov_2k31f4dous.b[15][0];
        ++cov_2k31f4dous.s[34];

        return;
    } else {
        ++cov_2k31f4dous.b[15][1];
    }

    // the 'comparison' object is used in order to remove
    // only the handlers which have the same original type of the current event name,
    // and when provided also same delegator, and handler function
    var comparison = (++cov_2k31f4dous.s[35], { origType: type });

    ++cov_2k31f4dous.s[36];
    if (delegator) {
        ++cov_2k31f4dous.b[16][0];
        ++cov_2k31f4dous.s[37];

        comparison.delegator = delegator;
    } else {
        ++cov_2k31f4dous.b[16][1];
    }

    ++cov_2k31f4dous.s[38];
    if (typeof handler == 'function') {
        ++cov_2k31f4dous.b[17][0];
        ++cov_2k31f4dous.s[39];

        comparison.handler = handler;
    } else {
        ++cov_2k31f4dous.b[17][1];
    }

    var fixedType = (++cov_2k31f4dous.s[40], getFixedEventName_(type, true));
    var eventNames = (++cov_2k31f4dous.s[41], type == fixedType ? (++cov_2k31f4dous.b[18][0], [type]) : (++cov_2k31f4dous.b[18][1], [type, fixedType]));

    ++cov_2k31f4dous.s[42];
    eventNames.forEach(function (currType) {
        ++cov_2k31f4dous.f[6];
        ++cov_2k31f4dous.s[43];

        if (listeners[currType]) {
            ++cov_2k31f4dous.b[19][0];
            ++cov_2k31f4dous.s[44];

            listeners[currType] = exclude_(listeners[currType], compare_.bind(null, comparison));
            ++cov_2k31f4dous.s[45];
            if ((++cov_2k31f4dous.b[21][0], typeof listeners[currType] == 'undefined') || (++cov_2k31f4dous.b[21][1], listeners[currType].length == 0)) {
                ++cov_2k31f4dous.b[20][0];
                ++cov_2k31f4dous.s[46];

                delete listeners[currType];
                ++cov_2k31f4dous.s[47];
                if ((++cov_2k31f4dous.b[23][0], type == fixedType) || (++cov_2k31f4dous.b[23][1], typeof special_[type].teardown == 'undefined')) {
                    ++cov_2k31f4dous.b[22][0];
                    ++cov_2k31f4dous.s[48];

                    removeDOMListener_(eventTarget, currType);
                } else {
                        ++cov_2k31f4dous.b[22][1];
                        ++cov_2k31f4dous.s[49];
                        if (typeof special_[type].teardown == 'function') {
                            ++cov_2k31f4dous.b[24][0];
                            ++cov_2k31f4dous.s[50];

                            special_[type].teardown();
                        } else {
                            ++cov_2k31f4dous.b[24][1];
                        }
                    }
            } else {
                ++cov_2k31f4dous.b[20][1];
            }
        } else {
            ++cov_2k31f4dous.b[19][1];
        }
    });
});

/**
 * @name firedEventType
 * @type String
 * @description
 * When the default action of an event was triggered, it contains the name of the event
 */
var firedEventType = (++cov_2k31f4dous.s[51], '');

var run = (++cov_2k31f4dous.s[52], function (el, type, data) {
    ++cov_2k31f4dous.f[7];


    var executeDefault = (++cov_2k31f4dous.s[53], true);

    var event = (++cov_2k31f4dous.s[54], { currentTarget: el, data: data, isFired: true, target: el, type: type });
    var domTree = (++cov_2k31f4dous.s[55], (++cov_2k31f4dous.b[26][0], typeof special_[type] == 'undefined') || (++cov_2k31f4dous.b[26][1], special_[type].bubbles) ? (++cov_2k31f4dous.b[25][0], getBubblingPath_(el)) : (++cov_2k31f4dous.b[25][1], [el]));

    ++cov_2k31f4dous.s[56];
    domTree.every(function (currElem) {
        ++cov_2k31f4dous.f[8];
        ++cov_2k31f4dous.s[57];

        event.currentTarget = currElem;

        var _ref = (++cov_2k31f4dous.s[58], dispatch_(event)),
            isPropagationStopped = _ref.isPropagationStopped,
            isDefaultPrevented = _ref.isDefaultPrevented;

        ++cov_2k31f4dous.s[59];

        if (isDefaultPrevented) {
            ++cov_2k31f4dous.b[27][0];
            ++cov_2k31f4dous.s[60];

            executeDefault = false;
        } else {
            ++cov_2k31f4dous.b[27][1];
        }
        ++cov_2k31f4dous.s[61];
        return !isPropagationStopped;
    });

    ++cov_2k31f4dous.s[62];
    if ((++cov_2k31f4dous.b[29][0], executeDefault) && (++cov_2k31f4dous.b[29][1], el !== window) && (++cov_2k31f4dous.b[29][2], typeof el[event.type] == 'function')) {
        ++cov_2k31f4dous.b[28][0];
        ++cov_2k31f4dous.s[63];

        firedEventType = event.type;
        ++cov_2k31f4dous.s[64];
        el[event.type]();
        ++cov_2k31f4dous.s[65];
        firedEventType = '';
    } else {
        ++cov_2k31f4dous.b[28][1];
    }
});

/**
 * @name Store
 * @description
 * Stores the event listeners set, and exposes methods to modify the collection.
 */
var Store = (++cov_2k31f4dous.s[66], {

    /**
     * @name get
     * @function
     * @memberof Store
     * @description
     * Get the list of the event listeners registered on a particular html element.
     * Optionally the list is filtered by event type.
     *
     * @param {HTMLElement} el: the html element for which to get the events
     * @param {String} [type]: name of the event
     * @param {Boolean} [isFired]: is true when the event was triggered by the code
     *
     * @return {Object|Array} the list of the events set on the specific element
     */
    get: get,

    /**
     * @name add
     * @function
     * @memberof Store
     * @description
     * Register a new listener for the event on the specified html element.
     *
     * @param {HTMLElement} el: html element on which the event listener is set
     * @param {String} type: name of the event
     * @param {String} [delegator]: selector of the html elements which should react on the event
     * @param {Function} handler: the function that is executed when the event occurs
     *
     * @return {Object} the event's object
     */
    add: add,

    /**
     * @name del
     * @function
     * @memberof Store
     * @description
     * Remove the event listener for the event on the specified html element.
     *
     * @param {HTMLElement} el: html element for which the event listener should be removed
     * @param {String} type: the name of the event
     * @param {String} [delegator]
     * @param {Function} [handler]
     *
     * @return {void}
     */
    del: del,

    /**
     * @name run
     * @method
     * @memberof Store
     * @description
     * Simulate the triggering of the event 'type' on the element 'el'.
     * It executes the handlers attached on 'el', and simulate the bubbling of the event.
     *
     * @param {HTMLElement} el: the html element for which execute the event listener
     * @param {String} type: the name of the event
     * @param {Array} data: additional arguments for the event handler
     *
     * @return {void}
     */
    run: run

});

exports.default = Store;

/*
 *
 * Private methods
 * 
 */

/**
 * @name matches
 * @private
 * @description
 * Determine if the element would be selected by the specified selector string
 *
 * @param {HTMLElement} elem: The html element for which the test should be executed
 * @param {String} selector: The selector that should be used for the test
 *
 * @return {Boolean}
 */

var matches = (++cov_2k31f4dous.s[67], function (el) {
    ++cov_2k31f4dous.f[9];


    var matcher = (++cov_2k31f4dous.s[68], (++cov_2k31f4dous.b[30][0], el.matches) || (++cov_2k31f4dous.b[30][1], el.webkitMatchesSelector) || (++cov_2k31f4dous.b[30][2], el.mozMatchesSelector) || (++cov_2k31f4dous.b[30][3], el.msMatchesSelector) || (++cov_2k31f4dous.b[30][4], el.oMatchesSelector));

    ++cov_2k31f4dous.s[69];
    return function (elem, selector) {
        ++cov_2k31f4dous.f[10];
        ++cov_2k31f4dous.s[70];

        if (elem === window) {
            ++cov_2k31f4dous.b[31][0];
            ++cov_2k31f4dous.s[71];

            return selector == 'window';
        } else {
            ++cov_2k31f4dous.b[31][1];
        }
        ++cov_2k31f4dous.s[72];
        if (elem == document) {
            ++cov_2k31f4dous.b[32][0];
            ++cov_2k31f4dous.s[73];

            return selector == 'document';
        } else {
            ++cov_2k31f4dous.b[32][1];
        }
        ++cov_2k31f4dous.s[74];
        return matcher.call(elem, selector);
    };
}(document.body));

/**
 * @name special_
 * @description
 * Define special behaviour for a set of events which
 * have need of special attentions
 */
var special_ = (++cov_2k31f4dous.s[75], {});

// load events don't bubble up.
++cov_2k31f4dous.s[76];
special_.load = { bubbles: false };

/*
 * mouse enter/leave do not bubble up ([MOV6])
 * in order to simulate the bubbling we listen for mouse over/out,
 * and then make sure that the handler is executed only when the mouse
 * enter or leave the area of the target
 */
++cov_2k31f4dous.s[77];
(0, _loopProps2.default)({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function (fixedEvent, originalEvent) {
    ++cov_2k31f4dous.f[11];
    ++cov_2k31f4dous.s[78];

    special_[originalEvent] = {
        delegateEvent: fixedEvent,
        bubbles: true,
        decorator: function decorator(func, handlerObj) {
            ++cov_2k31f4dous.f[12];
            ++cov_2k31f4dous.s[79];

            return function (event) {
                ++cov_2k31f4dous.f[13];

                var _ref2 = (++cov_2k31f4dous.s[80], event),
                    target = _ref2.target,
                    related = _ref2.relatedTarget;
                // For mouse enter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window


                ++cov_2k31f4dous.s[81];
                if ((++cov_2k31f4dous.b[34][0], matches(target, handlerObj.delegator)) && ((++cov_2k31f4dous.b[34][1], !related) || (++cov_2k31f4dous.b[34][2], !contains_(target, related, true)))) {
                    ++cov_2k31f4dous.b[33][0];
                    ++cov_2k31f4dous.s[82];

                    return func.apply(target, [event].concat(_toConsumableArray(event.data)));
                } else {
                    ++cov_2k31f4dous.b[33][1];
                }
            };
        }
    };
});

/*
 * focus/blur do not bubble up ([FRM7] to [FRM9])
 * in order to simulate the bubbling we listen for the focusin/focusout
 * on the document, during the capture phase
 * then we use Store.run to simulate the bubbling
 */
++cov_2k31f4dous.s[83];
(0, _loopProps2.default)({ focus: 'focusin', blur: 'focusout' }, function (fixedEvent, originalEvent) {
    ++cov_2k31f4dous.f[14];


    /*
     * @name specialHandler
     * @description
     * Simulate the bubbling of the focusin/focusout events
     *
     * @param {Object} event: the original event object
     *
     * @return {void}
     */
    var specialHandler = (++cov_2k31f4dous.s[84], function (event) {
        ++cov_2k31f4dous.f[15];
        ++cov_2k31f4dous.s[85];
        return Store.run(event.target, fixedEvent);
    });

    ++cov_2k31f4dous.s[86];
    special_[originalEvent] = {
        boundElement: document,
        delegateEvent: fixedEvent,
        bubbles: true,
        setup: function setup() {
            ++cov_2k31f4dous.f[16];
            ++cov_2k31f4dous.s[87];

            this.boundElement.addEventListener(originalEvent, specialHandler, true);
        },
        teardown: function teardown() {
            ++cov_2k31f4dous.f[17];
            ++cov_2k31f4dous.s[88];

            this.boundElement.removeEventListener(originalEvent, specialHandler, true);
        }
    };
});

/**
 * @name guid_
 * @description
 * An unique id for a listener entry in the Store's registry
 */
var guid_ = (++cov_2k31f4dous.s[89], 0);

/**
 * @name guid
 * @description
 * Symbol used to store the guid_ of the handler's objects
 */
var guid = (++cov_2k31f4dous.s[90], Symbol('EVStore_guid'));

/**
 * @name prepareStoreObject_
 * @function
 * @private
 * @description
 * Returns the object with the main info about the registered event listener;
 * the object then will be stored, and kept in memory until the listener, or the
 * html element are removed.
 *
 * @param {String} type: the name of the event
 * @param {String} delegator: selector of the html elements which should react on the event
 * @param {Function} handler: the function that is executed when the event occurs
 *
 * @return {Object}
 */
var prepareStoreObject_ = (++cov_2k31f4dous.s[91], function (type, delegator, handler) {
    ++cov_2k31f4dous.f[18];


    var id = (++cov_2k31f4dous.s[92], ++guid_);
    var isDelegate = (++cov_2k31f4dous.s[93], delegator != null);
    var fixedType = (++cov_2k31f4dous.s[94], getFixedEventName_(type, isDelegate));

    var eventObj = (++cov_2k31f4dous.s[95], Object.create(null));

    /**
     * {Number} guid
     * Unique id for this entry
     */
    ++cov_2k31f4dous.s[96];
    eventObj[guid] = id;

    /**
     * {Boolean} delegate
     * It is true for delegated listener
     */
    ++cov_2k31f4dous.s[97];
    eventObj.delegate = isDelegate;

    /**
     * {String} delegator
     * The delegator selector
     */
    ++cov_2k31f4dous.s[98];
    eventObj.delegator = delegator;

    /**
     * {String} origType
     * the original event name
     */
    ++cov_2k31f4dous.s[99];
    eventObj.origType = type;

    /**
     * {String} type
     * The event name
     */
    ++cov_2k31f4dous.s[100];
    eventObj.type = fixedType;

    /**
     * {Function} handler
     * Function that should be executed when the event is triggered
     */
    ++cov_2k31f4dous.s[101];
    eventObj.handler = function (event) {
        ++cov_2k31f4dous.f[19];
        ++cov_2k31f4dous.s[102];

        return handler.apply(this, [event].concat(_toConsumableArray(event.data)));
    };

    // we're putting a mark on the handler function
    // so that when the time comes it will be easy to remove the listener
    ++cov_2k31f4dous.s[103];
    if (!handler[guid]) {
        ++cov_2k31f4dous.b[35][0];
        ++cov_2k31f4dous.s[104];

        handler[guid] = eventObj.handler[guid] = id;
    } else {
        ++cov_2k31f4dous.b[35][1];
        ++cov_2k31f4dous.s[105];

        eventObj.handler[guid] = handler[guid];
    }

    // if for the current event we've setup a special handler
    // in order to apply that strategy we've to decorate the event handler
    ++cov_2k31f4dous.s[106];
    if (type != fixedType) {
        ++cov_2k31f4dous.b[36][0];
        ++cov_2k31f4dous.s[107];

        if ((++cov_2k31f4dous.b[38][0], special_[type]) && (++cov_2k31f4dous.b[38][1], typeof special_[type].decorator == 'function')) {
            ++cov_2k31f4dous.b[37][0];
            ++cov_2k31f4dous.s[108];

            eventObj.handler = special_[type].decorator(handler, eventObj);
        } else {
            ++cov_2k31f4dous.b[37][1];
        }
    } else {
        ++cov_2k31f4dous.b[36][1];
    }

    ++cov_2k31f4dous.s[109];
    return eventObj;
});

/**
 * @name getFixedEventName_
 * @function
 * @private
 * @description
 * Return the name of the event we use to simulate another one
 * (names may differ for events which don't bubble, or have special behaviour)
 *
 * @param {String} type: the name of the event
 * @param {Boolean} [isDelegate]: true when event listener is used through event delegation
 *
 * @return {String}
 */
var getFixedEventName_ = (++cov_2k31f4dous.s[110], function (type) {
    var isDelegate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_2k31f4dous.b[39][0], false);
    ++cov_2k31f4dous.f[20];
    ++cov_2k31f4dous.s[111];


    if ((++cov_2k31f4dous.b[41][0], !isDelegate) || (++cov_2k31f4dous.b[41][1], typeof special_[type] == 'undefined')) {
        ++cov_2k31f4dous.b[40][0];
        ++cov_2k31f4dous.s[112];

        return type;
    } else {
        ++cov_2k31f4dous.b[40][1];
    }

    ++cov_2k31f4dous.s[113];
    return special_[type].delegateEvent;
});

/**
 * @name getEventsTableFixedKey_
 * @function
 * @private
 * @description
 * Some special event listeners should be attached on particular DOM element;
 * this function returns that element, or null for the normal events.
 *
 * @param {String} type: the name of the event
 * @param {Boolean} [isDelegate]: true when event listener is used through event delegation
 *
 * @return {null|HTMLElement}
 */
var getEventsTableFixedKey_ = (++cov_2k31f4dous.s[114], function (type) {
    var isDelegate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_2k31f4dous.b[42][0], false);
    ++cov_2k31f4dous.f[21];
    ++cov_2k31f4dous.s[115];


    if ((++cov_2k31f4dous.b[44][0], !isDelegate) || (++cov_2k31f4dous.b[44][1], typeof special_[type] == 'undefined')) {
        ++cov_2k31f4dous.b[43][0];
        ++cov_2k31f4dous.s[116];

        return null;
    } else {
        ++cov_2k31f4dous.b[43][1];
    }

    ++cov_2k31f4dous.s[117];
    return (++cov_2k31f4dous.b[45][0], special_[type].boundElement) || (++cov_2k31f4dous.b[45][1], null);
});

/**
 * @name addDOMListener_
 * @function
 * @private
 * @description
 * Add the event listener on the html element for the specified event.
 *
 * @param {HTMLElement} el: the html element for which add the event listener
 * @param {String} type: the name of the event
 *
 * @return {void}
 */
var addDOMListener_ = (++cov_2k31f4dous.s[118], function (el, type) {
    ++cov_2k31f4dous.f[22];
    ++cov_2k31f4dous.s[119];
    return el.addEventListener(type, dispatch_, false);
});

/**
 * @name removeDOMListener_
 * @function
 * @private
 * @description
 * Remove the listener of the specified event from the html element.
 *
 * @param {HTMLElement} el: the html element for which remove the event listener
 * @param {String} type: the name of the event
 *
 * @return {void}
 */
var removeDOMListener_ = (++cov_2k31f4dous.s[120], function (el, type) {
    ++cov_2k31f4dous.f[23];
    ++cov_2k31f4dous.s[121];
    return el.removeEventListener(type, dispatch_, false);
});

/**
 * @name dispatch_
 * @function
 * @private
 * @description
 * Is the function used as handler for the event listener;
 * it controls the execution of all the listeners for the current event.
 *
 * @param {Object} origEvent: the real event object
 *
 * @return {Object} Information about propagation state
 */
var dispatch_ = (++cov_2k31f4dous.s[122], function (origEvent) {
    ++cov_2k31f4dous.f[24];
    ++cov_2k31f4dous.s[123];


    /*
     * when the default action of a programmatically triggered event is executed,
     * it's necessary to prevent the execution of the handler,
     * otherwise the handlers are executed twice.
     * we check the event type because a programmatically triggered event
     * can be the cause of an event of different type.
     * test cases [FI08] to [FI11]
     */
    if (isDefaultActionFired_(origEvent.type)) {
        ++cov_2k31f4dous.b[46][0];
        ++cov_2k31f4dous.s[124];

        return false;
    } else {
        ++cov_2k31f4dous.b[46][1];
    }

    var event = (++cov_2k31f4dous.s[125], prepareEventObject_(origEvent));

    var eventObjs = (++cov_2k31f4dous.s[126], Store.get(event.currentTarget, event.type, event.isFired));

    /*
     * here we're rising the DOM tree, starting from the target element,
     * till we reach the element on which the event was bound.
     * for each element we check if it is the "delegator" of a registered event;
     * in this case the the corresponding handler object is executed.
     */
    ++cov_2k31f4dous.s[127];
    domUp_(event.target, event.currentTarget, function (currElem) {
        ++cov_2k31f4dous.f[25];
        ++cov_2k31f4dous.s[128];


        if ((++cov_2k31f4dous.b[48][0], currElem.disabled) && (++cov_2k31f4dous.b[48][1], event.type == 'click')) {
            ++cov_2k31f4dous.b[47][0];
            ++cov_2k31f4dous.s[129];

            return;
        } else {
            ++cov_2k31f4dous.b[47][1];
        }

        ++cov_2k31f4dous.s[130];
        eventObjs.forEach(function findMatchOnTheCurrentNode_(eventObj) {
            ++cov_2k31f4dous.f[26];
            ++cov_2k31f4dous.s[131];


            if ((++cov_2k31f4dous.b[50][0], !eventObj.delegate) || (++cov_2k31f4dous.b[50][1], eventObj.delegate) && (++cov_2k31f4dous.b[50][2], !contains_(currElem, eventObj.delegator))) {
                ++cov_2k31f4dous.b[49][0];
                ++cov_2k31f4dous.s[132];

                // in case the element on which the event was triggered does not contain the delegator
                // exit soon
                return;
            } else {
                ++cov_2k31f4dous.b[49][1];
            }

            ++cov_2k31f4dous.s[133];
            if (matches(currElem, eventObj.delegator)) {
                ++cov_2k31f4dous.b[51][0];
                ++cov_2k31f4dous.s[134];

                eventObj.currentTarget = currElem;
                ++cov_2k31f4dous.s[135];
                runHandler_.call(event, eventObj);
                ++cov_2k31f4dous.s[136];
                delete eventObj.currentTarget;
            } else {
                ++cov_2k31f4dous.b[51][1];
            }
        });

        // in case the event bubbling was stopped
        // returning false would break domUp_'s rise
        ++cov_2k31f4dous.s[137];
        return !event.isPropagationStopped;
    });

    ++cov_2k31f4dous.s[138];
    if (event.isPropagationStopped) {
        ++cov_2k31f4dous.b[52][0];
        ++cov_2k31f4dous.s[139];

        return { isPropagationStopped: true, isDefaultPrevented: event.isDefaultPrevented };
    } else {
        ++cov_2k31f4dous.b[52][1];
    }

    // ... then executes the directly bound events

    ++cov_2k31f4dous.s[140];
    if ((++cov_2k31f4dous.b[54][0], !event.currentTarget.disabled) || (++cov_2k31f4dous.b[54][1], event.type != 'click')) {
        ++cov_2k31f4dous.b[53][0];
        ++cov_2k31f4dous.s[141];

        eventObjs.filter(function (x) {
            ++cov_2k31f4dous.f[27];
            ++cov_2k31f4dous.s[142];
            return !x.delegate;
        }).forEach(runHandler_, event);
    } else {
        ++cov_2k31f4dous.b[53][1];
    }

    // return info about the propagation state
    ++cov_2k31f4dous.s[143];
    return { isPropagationStopped: event.isPropagationStopped, isDefaultPrevented: event.isDefaultPrevented };
});

/**
 * @name isDefaultActionFired_
 * @function
 * @private
 * @description
 * Check if the event currently dispatched is caused by
 * the triggering of the event default action.
 * In this case the dispatching should be blocked.
 *
 * @param {String} type: the name of the event
 *
 * @return {Boolean}
 */
var isDefaultActionFired_ = (++cov_2k31f4dous.s[144], function (type) {
    ++cov_2k31f4dous.f[28];
    ++cov_2k31f4dous.s[145];
    return (++cov_2k31f4dous.b[55][0], firedEventType == type) || (++cov_2k31f4dous.b[55][1], getFixedEventName_(firedEventType, true) == type);
});

/**
 * @name eventBase_
 * @description
 * Redefine stopPropagation/preventDefault methods for the custom event object.
 */
var eventBase_ = (++cov_2k31f4dous.s[146], Object.create(null, {

    stopPropagation: {
        value: function value() {
            ++cov_2k31f4dous.f[29];
            ++cov_2k31f4dous.s[147];

            this.isPropagationStopped = true;
            ++cov_2k31f4dous.s[148];
            if (this.originalEvent) {
                ++cov_2k31f4dous.b[56][0];
                ++cov_2k31f4dous.s[149];

                this.originalEvent.stopPropagation();
            } else {
                ++cov_2k31f4dous.b[56][1];
            }
        }
    },

    preventDefault: {
        value: function value() {
            ++cov_2k31f4dous.f[30];
            ++cov_2k31f4dous.s[150];

            this.isDefaultPrevented = true;
            ++cov_2k31f4dous.s[151];
            if (this.originalEvent) {
                ++cov_2k31f4dous.b[57][0];
                ++cov_2k31f4dous.s[152];

                this.originalEvent.preventDefault();
            } else {
                ++cov_2k31f4dous.b[57][1];
            }
        }
    }

}));

/**
 * @name prepareEventObject_
 * @function
 * @private
 * @description
 * Prepare the custom event object
 *
 * @param {Object} origEvent: original event object
 *
 * @return {Object} Custom event object
 */
var prepareEventObject_ = (++cov_2k31f4dous.s[153], function (origEvent) {
    ++cov_2k31f4dous.f[31];


    var event = (++cov_2k31f4dous.s[154], Object.create(eventBase_));

    /**
     * {Array} data
     * Additional arguments provided to the handler
     */
    ++cov_2k31f4dous.s[155];
    event.data = (++cov_2k31f4dous.b[58][0], origEvent.data) || (++cov_2k31f4dous.b[58][1], []);

    /**
     * {Boolean} isFired
     * Define if the event has been fired programmatically
     */
    ++cov_2k31f4dous.s[156];
    event.isFired = (++cov_2k31f4dous.b[59][0], origEvent.isFired) || (++cov_2k31f4dous.b[59][1], false);

    ++cov_2k31f4dous.s[157];
    event.currentTarget = origEvent.currentTarget;
    ++cov_2k31f4dous.s[158];
    event.relatedTarget = origEvent.relatedTarget;
    ++cov_2k31f4dous.s[159];
    event.target = origEvent.target;
    ++cov_2k31f4dous.s[160];
    event.type = origEvent.type;

    ++cov_2k31f4dous.s[161];
    if (isEventObject_(origEvent)) {
        ++cov_2k31f4dous.b[60][0];
        ++cov_2k31f4dous.s[162];

        event.originalEvent = origEvent;
    } else {
        ++cov_2k31f4dous.b[60][1];
    }

    ++cov_2k31f4dous.s[163];
    return event;
});

/**
 * @name isEventObject_
 * @function
 * @private
 * @description
 * Determine if the parameter provided is an event object (instanceof Event).
 * Returns true if 'obj' is an event object.
 *
 * @param {Object} obj: the object subject of the test
 *
 * @return {Boolean}
 */
var isEventObject_ = (++cov_2k31f4dous.s[164], function (obj) {
    ++cov_2k31f4dous.f[32];
    ++cov_2k31f4dous.s[165];
    return (/Event]$/.test(Object.prototype.toString.call(obj))
    );
});

/**
 * @name domUp_
 * @function
 * @private
 * @description
 * Executes the provided function for each DOM element starting from startEl,
 * till stopEl (default window).
 * If the callback return false, the execution is interrupted.
 *
 * @param {HTMLElement} startEl: html element from which the climb the DOM tree starts
 * @param {HTMLElement} stopEl: html element on which the DOM traversing should be interrupted
 * @param {Function} func: function executed for each element; receives the current element as parameter
 *
 * @return {void}
 */
var domUp_ = (++cov_2k31f4dous.s[166], function (startEl, stopEl, func) {
    ++cov_2k31f4dous.f[33];
    ++cov_2k31f4dous.s[167];


    if (typeof stopEl == 'function') {
        ++cov_2k31f4dous.b[61][0];
        ++cov_2k31f4dous.s[168];
        var _ref3 = [stopEl, window];
        func = _ref3[0];
        stopEl = _ref3[1];
    } else {
        ++cov_2k31f4dous.b[61][1];
    }

    var visitorEl = (++cov_2k31f4dous.s[169], startEl);
    var repeat = (++cov_2k31f4dous.s[170], true);

    ++cov_2k31f4dous.s[171];
    do {
        ++cov_2k31f4dous.s[172];

        repeat = func.call(visitorEl, visitorEl);
    } while ((++cov_2k31f4dous.b[62][0], repeat !== false) && (++cov_2k31f4dous.b[62][1], visitorEl != stopEl) && (++cov_2k31f4dous.b[62][2], visitorEl = visitorEl.parentNode));
});

/**
 * @name contains_
 * @function
 * @private
 * @description
 * Returns a Boolean value indicating whether 'contained' is a descendant of 'container'.
 * When 'strictly' is falsy, 'contained' is considered a descendant of 'container' even if they are the same element.
 *
 * @param {HTMLElement} container
 * @param {HTMLElement|String} contained
 * @param {Boolean} strictly: when container = contained, define if contains_ should return true or false
 *
 * @return {Boolean}
 */
var contains_ = (++cov_2k31f4dous.s[173], function (container, contained, strictly) {
    ++cov_2k31f4dous.f[34];
    ++cov_2k31f4dous.s[174];

    if (typeof contained == 'string') {
        ++cov_2k31f4dous.b[63][0];

        var box = (++cov_2k31f4dous.s[175], strictly ? (++cov_2k31f4dous.b[64][0], container) : (++cov_2k31f4dous.b[64][1], (++cov_2k31f4dous.b[65][0], container.parentNode) || (++cov_2k31f4dous.b[65][1], document)));
        ++cov_2k31f4dous.s[176];
        return box.querySelectorAll(contained).length > 0;
    } else {
        ++cov_2k31f4dous.b[63][1];
    }
    ++cov_2k31f4dous.s[177];
    return ((++cov_2k31f4dous.b[66][0], !strictly) || (++cov_2k31f4dous.b[66][1], container !== contained)) && (++cov_2k31f4dous.b[66][2], container.contains(contained));
});

/**
 * @name runHandler_
 * @function
 * @private
 * @description
 * Executes the event handler, and the event default action (if any exists)
 *
 * @param {Object} eventObj: the event object
 *
 * @return {void}
 */
function runHandler_(eventObj) {
    ++cov_2k31f4dous.f[35];


    var target = (++cov_2k31f4dous.s[178], (++cov_2k31f4dous.b[67][0], eventObj.currentTarget) || (++cov_2k31f4dous.b[67][1], this.currentTarget));

    ++cov_2k31f4dous.s[179];
    if (eventObj.handler.call(target, this) === false) {
        ++cov_2k31f4dous.b[68][0];
        ++cov_2k31f4dous.s[180];

        this.stopPropagation();
        ++cov_2k31f4dous.s[181];
        this.preventDefault();
    } else {
        ++cov_2k31f4dous.b[68][1];
    }
}

/**
 * @name exclude_
 * @function
 * @private
 * @description
 * The opposite of Array#filter;
 * It returns the elements of collection that predicate does not return truthy for
 *
 * @param {Array} list: the array that should be reverse-filtered
 * @param {Function} predicate: the function that should be used for the filtering
 *
 * @return {Array} the filtered list
 */
var exclude_ = (++cov_2k31f4dous.s[182], function (list, predicate) {
    ++cov_2k31f4dous.f[36];
    ++cov_2k31f4dous.s[183];
    return list.filter(function (val, k, orig) {
        ++cov_2k31f4dous.f[37];
        ++cov_2k31f4dous.s[184];
        return !predicate(val, k, orig);
    });
});

/**
 * @name compare_
 * @function
 * @private
 * @description
 * Compare the properties of the two object it receives as parameters
 *
 * @param {Object} comparator: the properties on the basis of which we say the two object match; it should be a subset of subjectObj's properties
 * @param {Object} subjectObj: the object that should be compared
 *
 * @return {Boolean} true when the object match
 */
var compare_ = (++cov_2k31f4dous.s[185], function (comparator, subjectObj) {
    ++cov_2k31f4dous.f[38];
    ++cov_2k31f4dous.s[186];
    return (0, _loopProps2.default)(comparator, function (prop, k) {
        ++cov_2k31f4dous.f[39];
        ++cov_2k31f4dous.s[187];
        return typeof prop == 'function' ? (++cov_2k31f4dous.b[69][0], subjectObj[k][guid] === prop[guid]) : (++cov_2k31f4dous.b[69][1], subjectObj[k] === prop);
    });
});

/**
 * @name getBubblingPath_
 * @function
 * @private
 * @description
 * Returns an array with all the parent nodes of the provided element.
 * The first element of the array is the element itself; the latest is the window object.
 *
 * @param {HTMLElement}
 *
 * @return {Array}
 */
var getBubblingPath_ = (++cov_2k31f4dous.s[188], function (el) {
    ++cov_2k31f4dous.f[40];


    var path = (++cov_2k31f4dous.s[189], []);

    ++cov_2k31f4dous.s[190];
    do {
        ++cov_2k31f4dous.s[191];

        path.push(el);
    } while (el = el.parentNode);

    ++cov_2k31f4dous.s[192];
    if (path[path.length - 1] === document) {
        ++cov_2k31f4dous.b[70][0];
        ++cov_2k31f4dous.s[193];

        path.push(window);
    } else {
        ++cov_2k31f4dous.b[70][1];
    }

    ++cov_2k31f4dous.s[194];
    return path;
});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var cov_agt2c9xle = function () {
    var path = '/Users/brunoscopelliti/Desktop/github/dom-events/src/index.js',
        hash = 'fada48fb709e88e92f9b4b1a1c6803cdd9d1fc2a',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: '/Users/brunoscopelliti/Desktop/github/dom-events/src/index.js',
        statementMap: {
            '0': {
                start: {
                    line: 14,
                    column: 11
                },
                end: {
                    line: 26,
                    column: 1
                }
            },
            '1': {
                start: {
                    line: 17,
                    column: 23
                },
                end: {
                    line: 17,
                    column: 45
                }
            },
            '2': {
                start: {
                    line: 19,
                    column: 4
                },
                end: {
                    line: 21,
                    column: 5
                }
            },
            '3': {
                start: {
                    line: 20,
                    column: 8
                },
                end: {
                    line: 20,
                    column: 52
                }
            },
            '4': {
                start: {
                    line: 23,
                    column: 4
                },
                end: {
                    line: 25,
                    column: 7
                }
            },
            '5': {
                start: {
                    line: 24,
                    column: 8
                },
                end: {
                    line: 24,
                    column: 53
                }
            },
            '6': {
                start: {
                    line: 29,
                    column: 12
                },
                end: {
                    line: 42,
                    column: 1
                }
            },
            '7': {
                start: {
                    line: 32,
                    column: 23
                },
                end: {
                    line: 32,
                    column: 45
                }
            },
            '8': {
                start: {
                    line: 34,
                    column: 4
                },
                end: {
                    line: 36,
                    column: 5
                }
            },
            '9': {
                start: {
                    line: 35,
                    column: 8
                },
                end: {
                    line: 35,
                    column: 52
                }
            },
            '10': {
                start: {
                    line: 38,
                    column: 4
                },
                end: {
                    line: 41,
                    column: 7
                }
            },
            '11': {
                start: {
                    line: 39,
                    column: 23
                },
                end: {
                    line: 39,
                    column: 73
                }
            },
            '12': {
                start: {
                    line: 40,
                    column: 8
                },
                end: {
                    line: 40,
                    column: 87
                }
            },
            '13': {
                start: {
                    line: 40,
                    column: 36
                },
                end: {
                    line: 40,
                    column: 85
                }
            },
            '14': {
                start: {
                    line: 45,
                    column: 13
                },
                end: {
                    line: 48,
                    column: 1
                }
            },
            '15': {
                start: {
                    line: 46,
                    column: 4
                },
                end: {
                    line: 47,
                    column: 52
                }
            },
            '16': {
                start: {
                    line: 47,
                    column: 25
                },
                end: {
                    line: 47,
                    column: 50
                }
            },
            '17': {
                start: {
                    line: 54,
                    column: 18
                },
                end: {
                    line: 123,
                    column: 1
                }
            },
            '18': {
                start: {
                    line: 146,
                    column: 17
                },
                end: {
                    line: 159,
                    column: 1
                }
            },
            '19': {
                start: {
                    line: 148,
                    column: 4
                },
                end: {
                    line: 150,
                    column: 5
                }
            },
            '20': {
                start: {
                    line: 149,
                    column: 8
                },
                end: {
                    line: 149,
                    column: 18
                }
            },
            '21': {
                start: {
                    line: 154,
                    column: 4
                },
                end: {
                    line: 156,
                    column: 5
                }
            },
            '22': {
                start: {
                    line: 155,
                    column: 8
                },
                end: {
                    line: 155,
                    column: 30
                }
            },
            '23': {
                start: {
                    line: 158,
                    column: 4
                },
                end: {
                    line: 158,
                    column: 29
                }
            },
            '24': {
                start: {
                    line: 173,
                    column: 26
                },
                end: {
                    line: 189,
                    column: 1
                }
            },
            '25': {
                start: {
                    line: 175,
                    column: 22
                },
                end: {
                    line: 175,
                    column: 44
                }
            },
            '26': {
                start: {
                    line: 176,
                    column: 25
                },
                end: {
                    line: 176,
                    column: 47
                }
            },
            '27': {
                start: {
                    line: 178,
                    column: 4
                },
                end: {
                    line: 186,
                    column: 7
                }
            },
            '28': {
                start: {
                    line: 179,
                    column: 41
                },
                end: {
                    line: 179,
                    column: 78
                }
            },
            '29': {
                start: {
                    line: 179,
                    column: 57
                },
                end: {
                    line: 179,
                    column: 77
                }
            },
            '30': {
                start: {
                    line: 180,
                    column: 8
                },
                end: {
                    line: 185,
                    column: 25
                }
            },
            '31': {
                start: {
                    line: 181,
                    column: 12
                },
                end: {
                    line: 183,
                    column: 13
                }
            },
            '32': {
                start: {
                    line: 182,
                    column: 16
                },
                end: {
                    line: 182,
                    column: 42
                }
            },
            '33': {
                start: {
                    line: 184,
                    column: 12
                },
                end: {
                    line: 184,
                    column: 23
                }
            },
            '34': {
                start: {
                    line: 188,
                    column: 4
                },
                end: {
                    line: 188,
                    column: 24
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 14,
                        column: 11
                    },
                    end: {
                        line: 14,
                        column: 12
                    }
                },
                loc: {
                    start: {
                        line: 14,
                        column: 55
                    },
                    end: {
                        line: 26,
                        column: 1
                    }
                }
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 23,
                        column: 23
                    },
                    end: {
                        line: 23,
                        column: 24
                    }
                },
                loc: {
                    start: {
                        line: 23,
                        column: 40
                    },
                    end: {
                        line: 25,
                        column: 5
                    }
                }
            },
            '2': {
                name: '(anonymous_2)',
                decl: {
                    start: {
                        line: 29,
                        column: 12
                    },
                    end: {
                        line: 29,
                        column: 13
                    }
                },
                loc: {
                    start: {
                        line: 29,
                        column: 56
                    },
                    end: {
                        line: 42,
                        column: 1
                    }
                }
            },
            '3': {
                name: '(anonymous_3)',
                decl: {
                    start: {
                        line: 38,
                        column: 23
                    },
                    end: {
                        line: 38,
                        column: 24
                    }
                },
                loc: {
                    start: {
                        line: 38,
                        column: 40
                    },
                    end: {
                        line: 41,
                        column: 5
                    }
                }
            },
            '4': {
                name: '(anonymous_4)',
                decl: {
                    start: {
                        line: 40,
                        column: 23
                    },
                    end: {
                        line: 40,
                        column: 24
                    }
                },
                loc: {
                    start: {
                        line: 40,
                        column: 36
                    },
                    end: {
                        line: 40,
                        column: 85
                    }
                }
            },
            '5': {
                name: '(anonymous_5)',
                decl: {
                    start: {
                        line: 45,
                        column: 13
                    },
                    end: {
                        line: 45,
                        column: 14
                    }
                },
                loc: {
                    start: {
                        line: 45,
                        column: 46
                    },
                    end: {
                        line: 48,
                        column: 1
                    }
                }
            },
            '6': {
                name: '(anonymous_6)',
                decl: {
                    start: {
                        line: 47,
                        column: 17
                    },
                    end: {
                        line: 47,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 47,
                        column: 25
                    },
                    end: {
                        line: 47,
                        column: 50
                    }
                }
            },
            '7': {
                name: '(anonymous_7)',
                decl: {
                    start: {
                        line: 146,
                        column: 17
                    },
                    end: {
                        line: 146,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 146,
                        column: 35
                    },
                    end: {
                        line: 159,
                        column: 1
                    }
                }
            },
            '8': {
                name: '(anonymous_8)',
                decl: {
                    start: {
                        line: 173,
                        column: 26
                    },
                    end: {
                        line: 173,
                        column: 27
                    }
                },
                loc: {
                    start: {
                        line: 173,
                        column: 43
                    },
                    end: {
                        line: 189,
                        column: 1
                    }
                }
            },
            '9': {
                name: '(anonymous_9)',
                decl: {
                    start: {
                        line: 178,
                        column: 25
                    },
                    end: {
                        line: 178,
                        column: 26
                    }
                },
                loc: {
                    start: {
                        line: 178,
                        column: 42
                    },
                    end: {
                        line: 186,
                        column: 5
                    }
                }
            },
            '10': {
                name: '(anonymous_10)',
                decl: {
                    start: {
                        line: 179,
                        column: 52
                    },
                    end: {
                        line: 179,
                        column: 53
                    }
                },
                loc: {
                    start: {
                        line: 179,
                        column: 57
                    },
                    end: {
                        line: 179,
                        column: 77
                    }
                }
            },
            '11': {
                name: '(anonymous_11)',
                decl: {
                    start: {
                        line: 180,
                        column: 40
                    },
                    end: {
                        line: 180,
                        column: 41
                    }
                },
                loc: {
                    start: {
                        line: 180,
                        column: 57
                    },
                    end: {
                        line: 185,
                        column: 9
                    }
                }
            }
        },
        branchMap: {
            '0': {
                loc: {
                    start: {
                        line: 19,
                        column: 4
                    },
                    end: {
                        line: 21,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 19,
                        column: 4
                    },
                    end: {
                        line: 21,
                        column: 5
                    }
                }, {
                    start: {
                        line: 19,
                        column: 4
                    },
                    end: {
                        line: 21,
                        column: 5
                    }
                }]
            },
            '1': {
                loc: {
                    start: {
                        line: 34,
                        column: 4
                    },
                    end: {
                        line: 36,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 34,
                        column: 4
                    },
                    end: {
                        line: 36,
                        column: 5
                    }
                }, {
                    start: {
                        line: 34,
                        column: 4
                    },
                    end: {
                        line: 36,
                        column: 5
                    }
                }]
            },
            '2': {
                loc: {
                    start: {
                        line: 34,
                        column: 8
                    },
                    end: {
                        line: 34,
                        column: 71
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 34,
                        column: 8
                    },
                    end: {
                        line: 34,
                        column: 37
                    }
                }, {
                    start: {
                        line: 34,
                        column: 41
                    },
                    end: {
                        line: 34,
                        column: 71
                    }
                }]
            },
            '3': {
                loc: {
                    start: {
                        line: 39,
                        column: 23
                    },
                    end: {
                        line: 39,
                        column: 73
                    }
                },
                type: 'cond-expr',
                locations: [{
                    start: {
                        line: 39,
                        column: 38
                    },
                    end: {
                        line: 39,
                        column: 64
                    }
                }, {
                    start: {
                        line: 39,
                        column: 67
                    },
                    end: {
                        line: 39,
                        column: 73
                    }
                }]
            },
            '4': {
                loc: {
                    start: {
                        line: 148,
                        column: 4
                    },
                    end: {
                        line: 150,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 148,
                        column: 4
                    },
                    end: {
                        line: 150,
                        column: 5
                    }
                }, {
                    start: {
                        line: 148,
                        column: 4
                    },
                    end: {
                        line: 150,
                        column: 5
                    }
                }]
            },
            '5': {
                loc: {
                    start: {
                        line: 154,
                        column: 4
                    },
                    end: {
                        line: 156,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 154,
                        column: 4
                    },
                    end: {
                        line: 156,
                        column: 5
                    }
                }, {
                    start: {
                        line: 154,
                        column: 4
                    },
                    end: {
                        line: 156,
                        column: 5
                    }
                }]
            },
            '6': {
                loc: {
                    start: {
                        line: 154,
                        column: 8
                    },
                    end: {
                        line: 154,
                        column: 110
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 154,
                        column: 8
                    },
                    end: {
                        line: 154,
                        column: 31
                    }
                }, {
                    start: {
                        line: 154,
                        column: 35
                    },
                    end: {
                        line: 154,
                        column: 76
                    }
                }, {
                    start: {
                        line: 154,
                        column: 80
                    },
                    end: {
                        line: 154,
                        column: 110
                    }
                }]
            },
            '7': {
                loc: {
                    start: {
                        line: 181,
                        column: 12
                    },
                    end: {
                        line: 183,
                        column: 13
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 181,
                        column: 12
                    },
                    end: {
                        line: 183,
                        column: 13
                    }
                }, {
                    start: {
                        line: 181,
                        column: 12
                    },
                    end: {
                        line: 183,
                        column: 13
                    }
                }]
            }
        },
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '11': 0,
            '12': 0,
            '13': 0,
            '14': 0,
            '15': 0,
            '16': 0,
            '17': 0,
            '18': 0,
            '19': 0,
            '20': 0,
            '21': 0,
            '22': 0,
            '23': 0,
            '24': 0,
            '25': 0,
            '26': 0,
            '27': 0,
            '28': 0,
            '29': 0,
            '30': 0,
            '31': 0,
            '32': 0,
            '33': 0,
            '34': 0
        },
        f: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '11': 0
        },
        b: {
            '0': [0, 0],
            '1': [0, 0],
            '2': [0, 0],
            '3': [0, 0],
            '4': [0, 0],
            '5': [0, 0],
            '6': [0, 0, 0],
            '7': [0, 0]
        },
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var _eventStore = __webpack_require__(1);

var _eventStore2 = _interopRequireDefault(_eventStore);

var _loopProps = __webpack_require__(0);

var _loopProps2 = _interopRequireDefault(_loopProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * @fileoverview JavaScript DOM event handler micro library.
                                                                                                                                                                                                     * @copyright Bruno Scopelliti 2015
                                                                                                                                                                                                     * @author Bruno Scopelliti <me@brunoscopelliti.com>
                                                                                                                                                                                                     * @license MIT
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * @module src/dom-events-delegation
                                                                                                                                                                                                     */

var on = (++cov_agt2c9xle.s[0], function (htmlElements, type, delegator, handler) {
    ++cov_agt2c9xle.f[0];


    // normalize arguments
    var boundElems = (++cov_agt2c9xle.s[1], toArray_(htmlElements));

    ++cov_agt2c9xle.s[2];
    if (typeof handler == 'undefined') {
        ++cov_agt2c9xle.b[0][0];
        ++cov_agt2c9xle.s[3];
        var _ref = [delegator, handler];
        handler = _ref[0];
        delegator = _ref[1];
    } else {
        ++cov_agt2c9xle.b[0][1];
    }

    ++cov_agt2c9xle.s[4];
    boundElems.forEach(function (boundEl) {
        ++cov_agt2c9xle.f[1];
        ++cov_agt2c9xle.s[5];

        _eventStore2.default.add(boundEl, type, delegator, handler);
    });
});

var off = (++cov_agt2c9xle.s[6], function (htmlElements, type, delegator, handler) {
    ++cov_agt2c9xle.f[2];


    // normalize arguments
    var boundElems = (++cov_agt2c9xle.s[7], toArray_(htmlElements));

    ++cov_agt2c9xle.s[8];
    if ((++cov_agt2c9xle.b[2][0], typeof handler == 'undefined') && (++cov_agt2c9xle.b[2][1], typeof delegator == 'function')) {
        ++cov_agt2c9xle.b[1][0];
        ++cov_agt2c9xle.s[9];
        var _ref2 = [delegator, handler];
        handler = _ref2[0];
        delegator = _ref2[1];
    } else {
        ++cov_agt2c9xle.b[1][1];
    }

    ++cov_agt2c9xle.s[10];
    boundElems.forEach(function (boundEl) {
        ++cov_agt2c9xle.f[3];

        var events = (++cov_agt2c9xle.s[11], type == null ? (++cov_agt2c9xle.b[3][0], getAllEventTypes_(boundEl)) : (++cov_agt2c9xle.b[3][1], [type]));
        ++cov_agt2c9xle.s[12];
        events.forEach(function (eventName) {
            ++cov_agt2c9xle.f[4];
            ++cov_agt2c9xle.s[13];
            return _eventStore2.default.del(boundEl, eventName, delegator, handler);
        });
    });
});

var fire = (++cov_agt2c9xle.s[14], function (htmlElements, type) {
    for (var _len = arguments.length, data = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        data[_key - 2] = arguments[_key];
    }

    ++cov_agt2c9xle.f[5];
    ++cov_agt2c9xle.s[15];

    toArray_(htmlElements).forEach(function (el) {
        ++cov_agt2c9xle.f[6];
        ++cov_agt2c9xle.s[16];
        return _eventStore2.default.run(el, type, data);
    });
});

/**
 * @name DOMEvents
 */
var DOMEvents = (++cov_agt2c9xle.s[17], {

    /**
     * @name debug
     * @function
     * @memberOf DOMEvents
     * @description
     * Get the list of the event listeners registered on a particular html element.
     * Exposes Store.get method.
     *
     * @param {HTMLElement} htmlElement: the html element for which to get events' information
     * @param {String} type: the name of the event
     *
     * @return {Array} the list of the events set on the element
     */
    debug: _eventStore2.default.get,

    /**
     * @name on
     * @function
     * @memberOf DOMEvents
     * @description
     * Add an event listener on the DOM elements passed as parameter.
     *
     * @param {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which the event listener will be set
     * @param {String} type: the name of the event
     * @param {String} delegator: the selector of the elements which should react on the event
     * @param {Function} handler: the function that should be called when the event is triggered
     *
     * @return {void}
     */
    on: on,

    /**
     * @name off
     * @function
     * @memberOf DOMEvents
     * @description
     * Remove the event listeners which match the parameters
     * from the DOM elements passed as first argument.
     *
     * @param {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which the event listener will be removed
     * @param {String} [type]: the name of the event
     * @param {String} [delegator]
     * @param {Function} [handler]
     *
     * @return {void}
     */
    off: off,

    /**
     * @name fire
     * @function
     * @memberOf DOMEvents
     * @description
     * Simulate the triggering of the event 'type' on the elements 'htmlElements'.
     * It executes the handlers attached on 'htmlElements', and simulate the bubbling of the event, on their parents.
     *
     * @param {HTMLElement|HTMLCollection|NodeList} htmlElements: html elements for which simulate the event
     * @param {String} type: the name of the event
     * @param {Any} data: additional arguments for the event handler
     *
     * @return {void}
     */
    fire: fire

});

exports.default = DOMEvents;

/*
 *
 * Private methods
 * 
 */

/**
 * @name toArray_
 * @function
 * @private
 * @description
 * Returns the html element(s) it receives as arguments as an array
 *
 * @param {Any} htmlElements: it could be the window, an Array-like with HTMLElement, more...
 *
 * @return {Array}
 */

var toArray_ = (++cov_agt2c9xle.s[18], function (htmlElements) {
    ++cov_agt2c9xle.f[7];
    ++cov_agt2c9xle.s[19];


    if (htmlElements == null) {
        ++cov_agt2c9xle.b[4][0];
        ++cov_agt2c9xle.s[20];

        return [];
    } else {
        ++cov_agt2c9xle.b[4][1];
    }

    // instances of HTMLFormElement have the length property; 
    // it's a read-only property returns the number of input fields in the <form /> element.
    ++cov_agt2c9xle.s[21];
    if ((++cov_agt2c9xle.b[6][0], htmlElements === window) || (++cov_agt2c9xle.b[6][1], typeof htmlElements.length == 'undefined') || (++cov_agt2c9xle.b[6][2], htmlElements.tagName == 'FORM')) {
        ++cov_agt2c9xle.b[5][0];
        ++cov_agt2c9xle.s[22];

        return [htmlElements];
    } else {
        ++cov_agt2c9xle.b[5][1];
    }

    ++cov_agt2c9xle.s[23];
    return [].concat(_toConsumableArray(htmlElements));
});

/**
 * @name getAllEventTypes_
 * @function
 * @private
 * @description
 * Return the list of all the event types set on a particular DOM element.
 *
 * @param {HTMLElement} htmlElement: the element on which search for the listeners
 *
 * @return {Array} the list of all the events set on a particular DOM element
 */
var getAllEventTypes_ = (++cov_agt2c9xle.s[24], function (htmlElement) {
    ++cov_agt2c9xle.f[8];


    var listeners = (++cov_agt2c9xle.s[25], _eventStore2.default.get(htmlElement));
    var uniqueEvents = (++cov_agt2c9xle.s[26], Object.keys(listeners));

    ++cov_agt2c9xle.s[27];
    (0, _loopProps2.default)(listeners, function (obj, evtKey) {
        ++cov_agt2c9xle.f[9];

        var listenersWithTypeChanged = (++cov_agt2c9xle.s[28], obj.filter(function (x) {
            ++cov_agt2c9xle.f[10];
            ++cov_agt2c9xle.s[29];
            return x.origType != evtKey;
        }));
        ++cov_agt2c9xle.s[30];
        listenersWithTypeChanged.reduce(function (res, currEl) {
            ++cov_agt2c9xle.f[11];
            ++cov_agt2c9xle.s[31];

            if (res.indexOf(currEl) < 0) {
                ++cov_agt2c9xle.b[7][0];
                ++cov_agt2c9xle.s[32];

                res.push(currEl.origType);
            } else {
                ++cov_agt2c9xle.b[7][1];
            }
            ++cov_agt2c9xle.s[33];
            return res;
        }, uniqueEvents);
    });

    ++cov_agt2c9xle.s[34];
    return uniqueEvents;
});

/***/ }
/******/ ]);