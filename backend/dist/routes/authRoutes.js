'use strict';
var a371_0x19d4e2 = a371_0x1bf1;
(function (_0x423e97, _0x48be09) {
  var _0x44b000 = a371_0x1bf1,
    _0x375ff7 = _0x423e97();
  while (!![]) {
    try {
      var _0x2e311e =
        (parseInt(_0x44b000(0x1cc)) / 0x1) *
          (-parseInt(_0x44b000(0x1bf)) / 0x2) +
        parseInt(_0x44b000(0x1d5)) / 0x3 +
        parseInt(_0x44b000(0x1c3)) / 0x4 +
        -parseInt(_0x44b000(0x1bb)) / 0x5 +
        parseInt(_0x44b000(0x1ce)) / 0x6 +
        (parseInt(_0x44b000(0x1c7)) / 0x7) *
          (parseInt(_0x44b000(0x1c0)) / 0x8) +
        -parseInt(_0x44b000(0x1ca)) / 0x9;
      if (_0x2e311e === _0x48be09) break;
      else _0x375ff7['push'](_0x375ff7['shift']());
    } catch (_0x16a2f2) {
      _0x375ff7['push'](_0x375ff7['shift']());
    }
  }
})(a371_0xf332, 0x1d741);
var __createBinding =
    (this && this['__createBinding']) ||
    (Object[a371_0x19d4e2(0x1cb)]
      ? function (_0x1bf0f4, _0x2fed50, _0x4d860b, _0x38f32e) {
          var _0x55fec0 = a371_0x19d4e2;
          if (_0x38f32e === undefined) _0x38f32e = _0x4d860b;
          var _0x271141 = Object[_0x55fec0(0x1d4)](_0x2fed50, _0x4d860b);
          (!_0x271141 ||
            ('get' in _0x271141
              ? !_0x2fed50[_0x55fec0(0x1b9)]
              : _0x271141['writable'] || _0x271141[_0x55fec0(0x1d3)])) &&
            (_0x271141 = {
              enumerable: !![],
              get: function () {
                return _0x2fed50[_0x4d860b];
              }
            }),
            Object[_0x55fec0(0x1c2)](_0x1bf0f4, _0x38f32e, _0x271141);
        }
      : function (_0x5d7637, _0x5c7f8b, _0x18935c, _0x5cc482) {
          if (_0x5cc482 === undefined) _0x5cc482 = _0x18935c;
          _0x5d7637[_0x5cc482] = _0x5c7f8b[_0x18935c];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object[a371_0x19d4e2(0x1cb)]
      ? function (_0x161953, _0xa36852) {
          var _0x58c8a1 = a371_0x19d4e2;
          Object[_0x58c8a1(0x1c2)](_0x161953, 'default', {
            enumerable: !![],
            value: _0xa36852
          });
        }
      : function (_0x3d8032, _0x555169) {
          var _0x186418 = a371_0x19d4e2;
          _0x3d8032[_0x186418(0x1ba)] = _0x555169;
        }),
  __importStar =
    (this && this[a371_0x19d4e2(0x1c1)]) ||
    function (_0x35e611) {
      var _0x40074b = a371_0x19d4e2;
      if (_0x35e611 && _0x35e611['__esModule']) return _0x35e611;
      var _0x21cf85 = {};
      if (_0x35e611 != null) {
        for (var _0x7cdeb0 in _0x35e611)
          if (
            _0x7cdeb0 !== _0x40074b(0x1ba) &&
            Object[_0x40074b(0x1b5)][_0x40074b(0x1b7)][_0x40074b(0x1d2)](
              _0x35e611,
              _0x7cdeb0
            )
          )
            __createBinding(_0x21cf85, _0x35e611, _0x7cdeb0);
      }
      return __setModuleDefault(_0x21cf85, _0x35e611), _0x21cf85;
    },
  __importDefault =
    (this && this[a371_0x19d4e2(0x1d0)]) ||
    function (_0x371efc) {
      return _0x371efc && _0x371efc['__esModule']
        ? _0x371efc
        : { default: _0x371efc };
    };
Object[a371_0x19d4e2(0x1c2)](exports, a371_0x19d4e2(0x1b9), { value: !![] });
function a371_0x1bf1(_0x5cf36b, _0x5148e6) {
  var _0xf3322e = a371_0xf332();
  return (
    (a371_0x1bf1 = function (_0x1bf1df, _0x55a78b) {
      _0x1bf1df = _0x1bf1df - 0x1b5;
      var _0x598666 = _0xf3322e[_0x1bf1df];
      return _0x598666;
    }),
    a371_0x1bf1(_0x5cf36b, _0x5148e6)
  );
}
const express_1 = require(a371_0x19d4e2(0x1c5)),
  SessionController = __importStar(require(a371_0x19d4e2(0x1b6))),
  UserController = __importStar(require(a371_0x19d4e2(0x1bc))),
  isAuth_1 = __importDefault(require('../middleware/isAuth')),
  authRoutes = (0x0, express_1['Router'])();
authRoutes['post'](a371_0x19d4e2(0x1cf), UserController[a371_0x19d4e2(0x1be)]),
  authRoutes['post'](
    a371_0x19d4e2(0x1bd),
    SessionController[a371_0x19d4e2(0x1be)]
  ),
  authRoutes[a371_0x19d4e2(0x1c9)](
    a371_0x19d4e2(0x1c8),
    SessionController[a371_0x19d4e2(0x1cd)]
  ),
  authRoutes[a371_0x19d4e2(0x1c4)](
    a371_0x19d4e2(0x1b8),
    isAuth_1[a371_0x19d4e2(0x1ba)],
    SessionController['remove']
  ),
  authRoutes[a371_0x19d4e2(0x1c6)](
    a371_0x19d4e2(0x1d1),
    isAuth_1[a371_0x19d4e2(0x1ba)],
    SessionController['me']
  ),
  (exports[a371_0x19d4e2(0x1ba)] = authRoutes);
function a371_0xf332() {
  var _0x1b2673 = [
    '462540iaiLWC',
    'prototype',
    '../controllers/SessionController',
    'hasOwnProperty',
    '/logout',
    '__esModule',
    'default',
    '223820CRbAxE',
    '../controllers/UserController',
    '/login',
    'store',
    '15480GixMdn',
    '16CjQQQn',
    '__importStar',
    'defineProperty',
    '826764NJipOP',
    'delete',
    'express',
    'get',
    '81368LqdDkm',
    '/refresh_token',
    'post',
    '1496439MIBkCu',
    'create',
    '14ImAduX',
    'update',
    '335502VjhnQB',
    '/signup',
    '__importDefault',
    '/me',
    'call',
    'configurable',
    'getOwnPropertyDescriptor'
  ];
  a371_0xf332 = function () {
    return _0x1b2673;
  };
  return a371_0xf332();
}
