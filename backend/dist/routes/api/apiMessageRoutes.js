'use strict';
var a369_0x521ae6 = a369_0x34f3;
(function (_0x296182, _0x53bfc7) {
  var _0x33cea1 = a369_0x34f3,
    _0x416b9a = _0x296182();
  while (!![]) {
    try {
      var _0x35ac1a =
        -parseInt(_0x33cea1(0x185)) / 0x1 +
        -parseInt(_0x33cea1(0x183)) / 0x2 +
        -parseInt(_0x33cea1(0x17f)) / 0x3 +
        parseInt(_0x33cea1(0x187)) / 0x4 +
        (-parseInt(_0x33cea1(0x178)) / 0x5) *
          (parseInt(_0x33cea1(0x188)) / 0x6) +
        (parseInt(_0x33cea1(0x17d)) / 0x7) *
          (parseInt(_0x33cea1(0x179)) / 0x8) +
        parseInt(_0x33cea1(0x17c)) / 0x9;
      if (_0x35ac1a === _0x53bfc7) break;
      else _0x416b9a['push'](_0x416b9a['shift']());
    } catch (_0x42c71c) {
      _0x416b9a['push'](_0x416b9a['shift']());
    }
  }
})(a369_0x7605, 0x19d2e);
function a369_0x7605() {
  var _0x510594 = [
    'create',
    'defineProperty',
    '__esModule',
    '/messagesRange',
    '22595vxomqW',
    '73256pbqpEU',
    '__importStar',
    'show',
    '3625902oEpshw',
    '14kPsJQy',
    'call',
    '398877DVdUUE',
    'express',
    '../../controllers/api/MessageController',
    'hasOwnProperty',
    '169244rFWYbY',
    'default',
    '144671LAVAEB',
    '__createBinding',
    '404248pafVfG',
    '72MtANYp',
    'get',
    '../../middleware/isAuthCompany'
  ];
  a369_0x7605 = function () {
    return _0x510594;
  };
  return a369_0x7605();
}
function a369_0x34f3(_0x39f0b7, _0x561846) {
  var _0x7605 = a369_0x7605();
  return (
    (a369_0x34f3 = function (_0x34f3b9, _0x3f89b0) {
      _0x34f3b9 = _0x34f3b9 - 0x176;
      var _0x10cf25 = _0x7605[_0x34f3b9];
      return _0x10cf25;
    }),
    a369_0x34f3(_0x39f0b7, _0x561846)
  );
}
var __createBinding =
    (this && this[a369_0x521ae6(0x186)]) ||
    (Object['create']
      ? function (_0x2ecfea, _0x46f92b, _0x2973ad, _0xd0039a) {
          var _0x228c0a = a369_0x521ae6;
          if (_0xd0039a === undefined) _0xd0039a = _0x2973ad;
          var _0x35a07b = Object['getOwnPropertyDescriptor'](
            _0x46f92b,
            _0x2973ad
          );
          (!_0x35a07b ||
            (_0x228c0a(0x189) in _0x35a07b
              ? !_0x46f92b['__esModule']
              : _0x35a07b['writable'] || _0x35a07b['configurable'])) &&
            (_0x35a07b = {
              enumerable: !![],
              get: function () {
                return _0x46f92b[_0x2973ad];
              }
            }),
            Object[_0x228c0a(0x18c)](_0x2ecfea, _0xd0039a, _0x35a07b);
        }
      : function (_0x3ef58f, _0x54461a, _0x1a90c2, _0x1d8984) {
          if (_0x1d8984 === undefined) _0x1d8984 = _0x1a90c2;
          _0x3ef58f[_0x1d8984] = _0x54461a[_0x1a90c2];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object[a369_0x521ae6(0x18b)]
      ? function (_0x5a8c3f, _0x4fd1f4) {
          Object['defineProperty'](_0x5a8c3f, 'default', {
            enumerable: !![],
            value: _0x4fd1f4
          });
        }
      : function (_0x5af869, _0x5a8181) {
          var _0x4e8595 = a369_0x521ae6;
          _0x5af869[_0x4e8595(0x184)] = _0x5a8181;
        }),
  __importStar =
    (this && this[a369_0x521ae6(0x17a)]) ||
    function (_0x232c89) {
      var _0x347151 = a369_0x521ae6;
      if (_0x232c89 && _0x232c89[_0x347151(0x176)]) return _0x232c89;
      var _0x2ac5b5 = {};
      if (_0x232c89 != null) {
        for (var _0x359413 in _0x232c89)
          if (
            _0x359413 !== 'default' &&
            Object['prototype'][_0x347151(0x182)][_0x347151(0x17e)](
              _0x232c89,
              _0x359413
            )
          )
            __createBinding(_0x2ac5b5, _0x232c89, _0x359413);
      }
      return __setModuleDefault(_0x2ac5b5, _0x232c89), _0x2ac5b5;
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0x19ed87) {
      return _0x19ed87 && _0x19ed87['__esModule']
        ? _0x19ed87
        : { default: _0x19ed87 };
    };
Object[a369_0x521ae6(0x18c)](exports, a369_0x521ae6(0x176), { value: !![] });
const express_1 = __importDefault(require(a369_0x521ae6(0x180))),
  MessageController = __importStar(require(a369_0x521ae6(0x181))),
  isAuthCompany_1 = __importDefault(require(a369_0x521ae6(0x18a))),
  apiMessageRoutes = express_1[a369_0x521ae6(0x184)]['Router']();
apiMessageRoutes[a369_0x521ae6(0x189)](
  a369_0x521ae6(0x177),
  isAuthCompany_1['default'],
  MessageController[a369_0x521ae6(0x17b)]
),
  (exports[a369_0x521ae6(0x184)] = apiMessageRoutes);
