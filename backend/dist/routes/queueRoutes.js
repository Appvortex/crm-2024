'use strict';
var a391_0x248fa4 = a391_0xc569;
(function (_0x1452f6, _0x5c6681) {
  var _0x4d92eb = a391_0xc569,
    _0x3445a9 = _0x1452f6();
  while (!![]) {
    try {
      var _0x39b1f8 =
        -parseInt(_0x4d92eb(0x8c)) / 0x1 +
        (-parseInt(_0x4d92eb(0x75)) / 0x2) *
          (-parseInt(_0x4d92eb(0x76)) / 0x3) +
        (parseInt(_0x4d92eb(0x7a)) / 0x4) * (-parseInt(_0x4d92eb(0x7c)) / 0x5) +
        -parseInt(_0x4d92eb(0x74)) / 0x6 +
        (-parseInt(_0x4d92eb(0x90)) / 0x7) *
          (-parseInt(_0x4d92eb(0x71)) / 0x8) +
        (parseInt(_0x4d92eb(0x8b)) / 0x9) * (-parseInt(_0x4d92eb(0x85)) / 0xa) +
        (parseInt(_0x4d92eb(0x87)) / 0xb) * (parseInt(_0x4d92eb(0x77)) / 0xc);
      if (_0x39b1f8 === _0x5c6681) break;
      else _0x3445a9['push'](_0x3445a9['shift']());
    } catch (_0x40b807) {
      _0x3445a9['push'](_0x3445a9['shift']());
    }
  }
})(a391_0x2728, 0x9028a);
var __createBinding =
    (this && this[a391_0x248fa4(0x88)]) ||
    (Object[a391_0x248fa4(0x78)]
      ? function (_0x3aafcf, _0x4c12e1, _0x7f6ccc, _0x3292cd) {
          var _0x441dd4 = a391_0x248fa4;
          if (_0x3292cd === undefined) _0x3292cd = _0x7f6ccc;
          var _0x547f69 = Object[_0x441dd4(0x81)](_0x4c12e1, _0x7f6ccc);
          (!_0x547f69 ||
            (_0x441dd4(0x8e) in _0x547f69
              ? !_0x4c12e1['__esModule']
              : _0x547f69[_0x441dd4(0x79)] || _0x547f69['configurable'])) &&
            (_0x547f69 = {
              enumerable: !![],
              get: function () {
                return _0x4c12e1[_0x7f6ccc];
              }
            }),
            Object[_0x441dd4(0x7d)](_0x3aafcf, _0x3292cd, _0x547f69);
        }
      : function (_0x4552ec, _0xfb5642, _0xc6f14, _0x4e00c4) {
          if (_0x4e00c4 === undefined) _0x4e00c4 = _0xc6f14;
          _0x4552ec[_0x4e00c4] = _0xfb5642[_0xc6f14];
        }),
  __setModuleDefault =
    (this && this[a391_0x248fa4(0x86)]) ||
    (Object[a391_0x248fa4(0x78)]
      ? function (_0x157a8c, _0x195e36) {
          var _0x3c973b = a391_0x248fa4;
          Object[_0x3c973b(0x7d)](_0x157a8c, 'default', {
            enumerable: !![],
            value: _0x195e36
          });
        }
      : function (_0x391d0a, _0x3a5cd9) {
          var _0x1a07fc = a391_0x248fa4;
          _0x391d0a[_0x1a07fc(0x84)] = _0x3a5cd9;
        }),
  __importStar =
    (this && this[a391_0x248fa4(0x70)]) ||
    function (_0x505879) {
      var _0x170530 = a391_0x248fa4;
      if (_0x505879 && _0x505879[_0x170530(0x6f)]) return _0x505879;
      var _0x44a11a = {};
      if (_0x505879 != null) {
        for (var _0x30d786 in _0x505879)
          if (
            _0x30d786 !== _0x170530(0x84) &&
            Object['prototype'][_0x170530(0x7f)][_0x170530(0x82)](
              _0x505879,
              _0x30d786
            )
          )
            __createBinding(_0x44a11a, _0x505879, _0x30d786);
      }
      return __setModuleDefault(_0x44a11a, _0x505879), _0x44a11a;
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0x575056) {
      var _0x1fd57d = a391_0x248fa4;
      return _0x575056 && _0x575056[_0x1fd57d(0x6f)]
        ? _0x575056
        : { default: _0x575056 };
    };
Object[a391_0x248fa4(0x7d)](exports, a391_0x248fa4(0x6f), { value: !![] });
const express_1 = require(a391_0x248fa4(0x83)),
  isAuth_1 = __importDefault(require('../middleware/isAuth')),
  QueueController = __importStar(require(a391_0x248fa4(0x8d))),
  queueRoutes = (0x0, express_1[a391_0x248fa4(0x7e)])();
queueRoutes[a391_0x248fa4(0x8e)](
  a391_0x248fa4(0x8f),
  isAuth_1[a391_0x248fa4(0x84)],
  QueueController[a391_0x248fa4(0x8a)]
),
  queueRoutes[a391_0x248fa4(0x7b)](
    '/queue',
    isAuth_1[a391_0x248fa4(0x84)],
    QueueController['store']
  ),
  queueRoutes['get'](
    a391_0x248fa4(0x73),
    isAuth_1[a391_0x248fa4(0x84)],
    QueueController[a391_0x248fa4(0x72)]
  ),
  queueRoutes['put'](
    '/queue/:queueId',
    isAuth_1['default'],
    QueueController['update']
  ),
  queueRoutes[a391_0x248fa4(0x80)](
    a391_0x248fa4(0x73),
    isAuth_1['default'],
    QueueController[a391_0x248fa4(0x89)]
  ),
  (exports[a391_0x248fa4(0x84)] = queueRoutes);
function a391_0xc569(_0x50db05, _0x24cffa) {
  var _0x272855 = a391_0x2728();
  return (
    (a391_0xc569 = function (_0xc56979, _0x314340) {
      _0xc56979 = _0xc56979 - 0x6f;
      var _0x14fbb5 = _0x272855[_0xc56979];
      return _0x14fbb5;
    }),
    a391_0xc569(_0x50db05, _0x24cffa)
  );
}
function a391_0x2728() {
  var _0x4d39d2 = [
    '__esModule',
    '__importStar',
    '96yGMSPu',
    'show',
    '/queue/:queueId',
    '3865830PvSbnM',
    '1846bOYqtJ',
    '3561XSSiyW',
    '312hYlHEH',
    'create',
    'writable',
    '141580TMtdzm',
    'post',
    '5XOXXsH',
    'defineProperty',
    'Router',
    'hasOwnProperty',
    'delete',
    'getOwnPropertyDescriptor',
    'call',
    'express',
    'default',
    '50wUybxH',
    '__setModuleDefault',
    '677193CXJdxF',
    '__createBinding',
    'remove',
    'index',
    '1595547HGACjx',
    '1136542QZHJoe',
    '../controllers/QueueController',
    'get',
    '/queue',
    '348187UXohhB'
  ];
  a391_0x2728 = function () {
    return _0x4d39d2;
  };
  return a391_0x2728();
}
