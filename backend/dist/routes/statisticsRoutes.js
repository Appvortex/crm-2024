'use strict';
var a395_0x59755c = a395_0x1445;
(function (_0x495e24, _0x51152c) {
  var _0x464002 = a395_0x1445,
    _0x1c8ed6 = _0x495e24();
  while (!![]) {
    try {
      var _0x11651d =
        (-parseInt(_0x464002(0xd5)) / 0x1) * (parseInt(_0x464002(0xdd)) / 0x2) +
        (parseInt(_0x464002(0xe8)) / 0x3) * (-parseInt(_0x464002(0xd3)) / 0x4) +
        (-parseInt(_0x464002(0xd6)) / 0x5) * (parseInt(_0x464002(0xe2)) / 0x6) +
        parseInt(_0x464002(0xe6)) / 0x7 +
        -parseInt(_0x464002(0xd4)) / 0x8 +
        parseInt(_0x464002(0xd9)) / 0x9 +
        (parseInt(_0x464002(0xef)) / 0xa) * (parseInt(_0x464002(0xda)) / 0xb);
      if (_0x11651d === _0x51152c) break;
      else _0x1c8ed6['push'](_0x1c8ed6['shift']());
    } catch (_0x4bc209) {
      _0x1c8ed6['push'](_0x1c8ed6['shift']());
    }
  }
})(a395_0x20d7, 0x42629);
function a395_0x1445(_0x34d6e5, _0x46b74f) {
  var _0x20d716 = a395_0x20d7();
  return (
    (a395_0x1445 = function (_0x1445f6, _0x12678b) {
      _0x1445f6 = _0x1445f6 - 0xd3;
      var _0x114511 = _0x20d716[_0x1445f6];
      return _0x114511;
    }),
    a395_0x1445(_0x34d6e5, _0x46b74f)
  );
}
var __createBinding =
    (this && this[a395_0x59755c(0xed)]) ||
    (Object['create']
      ? function (_0xdc3f30, _0x4e61c9, _0x1d5aee, _0x50ac80) {
          var _0x1422b2 = a395_0x59755c;
          if (_0x50ac80 === undefined) _0x50ac80 = _0x1d5aee;
          var _0x28f85b = Object[_0x1422b2(0xe9)](_0x4e61c9, _0x1d5aee);
          (!_0x28f85b ||
            (_0x1422b2(0xdf) in _0x28f85b
              ? !_0x4e61c9[_0x1422b2(0xe5)]
              : _0x28f85b[_0x1422b2(0xdc)] || _0x28f85b['configurable'])) &&
            (_0x28f85b = {
              enumerable: !![],
              get: function () {
                return _0x4e61c9[_0x1d5aee];
              }
            }),
            Object[_0x1422b2(0xee)](_0xdc3f30, _0x50ac80, _0x28f85b);
        }
      : function (_0x2bae09, _0x1590c8, _0x18e066, _0x234a4a) {
          if (_0x234a4a === undefined) _0x234a4a = _0x18e066;
          _0x2bae09[_0x234a4a] = _0x1590c8[_0x18e066];
        }),
  __setModuleDefault =
    (this && this[a395_0x59755c(0xe3)]) ||
    (Object['create']
      ? function (_0x5f3323, _0x10248d) {
          var _0x29ef76 = a395_0x59755c;
          Object[_0x29ef76(0xee)](_0x5f3323, _0x29ef76(0xec), {
            enumerable: !![],
            value: _0x10248d
          });
        }
      : function (_0x36461c, _0x50c1c5) {
          var _0x559d1a = a395_0x59755c;
          _0x36461c[_0x559d1a(0xec)] = _0x50c1c5;
        }),
  __importStar =
    (this && this[a395_0x59755c(0xe4)]) ||
    function (_0x5c9362) {
      var _0x50cc30 = a395_0x59755c;
      if (_0x5c9362 && _0x5c9362[_0x50cc30(0xe5)]) return _0x5c9362;
      var _0x4d4ea6 = {};
      if (_0x5c9362 != null) {
        for (var _0x332bd9 in _0x5c9362)
          if (
            _0x332bd9 !== _0x50cc30(0xec) &&
            Object[_0x50cc30(0xdb)][_0x50cc30(0xea)][_0x50cc30(0xd7)](
              _0x5c9362,
              _0x332bd9
            )
          )
            __createBinding(_0x4d4ea6, _0x5c9362, _0x332bd9);
      }
      return __setModuleDefault(_0x4d4ea6, _0x5c9362), _0x4d4ea6;
    },
  __importDefault =
    (this && this[a395_0x59755c(0xeb)]) ||
    function (_0x48c850) {
      return _0x48c850 && _0x48c850['__esModule']
        ? _0x48c850
        : { default: _0x48c850 };
    };
Object[a395_0x59755c(0xee)](exports, '__esModule', { value: !![] });
const express_1 = __importDefault(require(a395_0x59755c(0xd8))),
  isAuth_1 = __importDefault(require(a395_0x59755c(0xe1))),
  StatisticsController = __importStar(require(a395_0x59755c(0xde))),
  statisticsRoutes = express_1[a395_0x59755c(0xec)]['Router']();
statisticsRoutes[a395_0x59755c(0xdf)](
  a395_0x59755c(0xf1),
  isAuth_1['default'],
  StatisticsController[a395_0x59755c(0xe7)]
),
  statisticsRoutes[a395_0x59755c(0xdf)](
    a395_0x59755c(0xf0),
    isAuth_1['default'],
    StatisticsController[a395_0x59755c(0xe0)]
  ),
  (exports[a395_0x59755c(0xec)] = statisticsRoutes);
function a395_0x20d7() {
  var _0x516ff1 = [
    '../controllers/StatisticsController',
    'get',
    'ContactsReport',
    '../middleware/isAuth',
    '13902Cyjjal',
    '__setModuleDefault',
    '__importStar',
    '__esModule',
    '1429309zotJLW',
    'DashTicketsQueues',
    '749727SQGJbK',
    'getOwnPropertyDescriptor',
    'hasOwnProperty',
    '__importDefault',
    'default',
    '__createBinding',
    'defineProperty',
    '116890AwfXmq',
    '/contacts-report',
    '/usersMoments',
    '4nnXtpv',
    '3040520jhppbG',
    '13tYFfNQ',
    '935zdTvls',
    'call',
    'express',
    '4809015UHMxCM',
    '979EeCloA',
    'prototype',
    'writable',
    '68258PNEXAx'
  ];
  a395_0x20d7 = function () {
    return _0x516ff1;
  };
  return a395_0x20d7();
}
