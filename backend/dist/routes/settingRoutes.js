'use strict';
var a394_0x32a116 = a394_0x4311;
function a394_0x1c03() {
  var _0x5d009f = [
    'getOwnPropertyDescriptor',
    'prototype',
    'defineProperty',
    '5328470gRTmRL',
    'get',
    '7456165VdJhtZ',
    '__importStar',
    '56JfrUOb',
    '__esModule',
    'express',
    'Router',
    '11LMqAzT',
    'getSetting',
    '/settings/:settingKey',
    '../controllers/SettingController',
    '__importDefault',
    'call',
    '17023548YwVFBH',
    '2wAsbRo',
    'configurable',
    '1962tGFYHr',
    'put',
    '12558600TgsLay',
    'index',
    'writable',
    '9ilShoL',
    '/setting/:settingKey',
    '4CAvJIt',
    'default',
    'create',
    '../middleware/isAuth',
    '__createBinding',
    '101681WNiEaM',
    '3778956GNIcbu'
  ];
  a394_0x1c03 = function () {
    return _0x5d009f;
  };
  return a394_0x1c03();
}
(function (_0x4d47b2, _0x2fe75d) {
  var _0x17cb08 = a394_0x4311,
    _0xa599e3 = _0x4d47b2();
  while (!![]) {
    try {
      var _0x44bd07 =
        (parseInt(_0x17cb08(0x91)) / 0x1) * (-parseInt(_0x17cb08(0xa5)) / 0x2) +
        -parseInt(_0x17cb08(0x92)) / 0x3 +
        (-parseInt(_0x17cb08(0x8c)) / 0x4) *
          (-parseInt(_0x17cb08(0x98)) / 0x5) +
        (parseInt(_0x17cb08(0xa7)) / 0x6) * (-parseInt(_0x17cb08(0x9a)) / 0x7) +
        parseInt(_0x17cb08(0x87)) / 0x8 +
        (parseInt(_0x17cb08(0x8a)) / 0x9) * (parseInt(_0x17cb08(0x96)) / 0xa) +
        (-parseInt(_0x17cb08(0x9e)) / 0xb) * (parseInt(_0x17cb08(0xa4)) / 0xc);
      if (_0x44bd07 === _0x2fe75d) break;
      else _0xa599e3['push'](_0xa599e3['shift']());
    } catch (_0x3d8b98) {
      _0xa599e3['push'](_0xa599e3['shift']());
    }
  }
})(a394_0x1c03, 0xc613f);
var __createBinding =
    (this && this[a394_0x32a116(0x90)]) ||
    (Object[a394_0x32a116(0x8e)]
      ? function (_0xc8c0d4, _0x5ced1b, _0x338519, _0x3dd4cf) {
          var _0x20f83d = a394_0x32a116;
          if (_0x3dd4cf === undefined) _0x3dd4cf = _0x338519;
          var _0x363785 = Object[_0x20f83d(0x93)](_0x5ced1b, _0x338519);
          (!_0x363785 ||
            ('get' in _0x363785
              ? !_0x5ced1b[_0x20f83d(0x9b)]
              : _0x363785[_0x20f83d(0x89)] || _0x363785[_0x20f83d(0xa6)])) &&
            (_0x363785 = {
              enumerable: !![],
              get: function () {
                return _0x5ced1b[_0x338519];
              }
            }),
            Object[_0x20f83d(0x95)](_0xc8c0d4, _0x3dd4cf, _0x363785);
        }
      : function (_0x2e8a06, _0x412103, _0x399592, _0x5bfda7) {
          if (_0x5bfda7 === undefined) _0x5bfda7 = _0x399592;
          _0x2e8a06[_0x5bfda7] = _0x412103[_0x399592];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object[a394_0x32a116(0x8e)]
      ? function (_0x3184bd, _0x1281da) {
          var _0x1f8bba = a394_0x32a116;
          Object[_0x1f8bba(0x95)](_0x3184bd, _0x1f8bba(0x8d), {
            enumerable: !![],
            value: _0x1281da
          });
        }
      : function (_0x5af5ca, _0x256997) {
          _0x5af5ca['default'] = _0x256997;
        }),
  __importStar =
    (this && this[a394_0x32a116(0x99)]) ||
    function (_0x52a2fd) {
      var _0x34a1d4 = a394_0x32a116;
      if (_0x52a2fd && _0x52a2fd[_0x34a1d4(0x9b)]) return _0x52a2fd;
      var _0x556604 = {};
      if (_0x52a2fd != null) {
        for (var _0x44389d in _0x52a2fd)
          if (
            _0x44389d !== _0x34a1d4(0x8d) &&
            Object[_0x34a1d4(0x94)]['hasOwnProperty'][_0x34a1d4(0xa3)](
              _0x52a2fd,
              _0x44389d
            )
          )
            __createBinding(_0x556604, _0x52a2fd, _0x44389d);
      }
      return __setModuleDefault(_0x556604, _0x52a2fd), _0x556604;
    },
  __importDefault =
    (this && this[a394_0x32a116(0xa2)]) ||
    function (_0xf89d00) {
      var _0x2008bc = a394_0x32a116;
      return _0xf89d00 && _0xf89d00[_0x2008bc(0x9b)]
        ? _0xf89d00
        : { default: _0xf89d00 };
    };
Object[a394_0x32a116(0x95)](exports, a394_0x32a116(0x9b), { value: !![] });
const express_1 = require(a394_0x32a116(0x9c)),
  isAuth_1 = __importDefault(require(a394_0x32a116(0x8f))),
  SettingController = __importStar(require(a394_0x32a116(0xa1))),
  settingRoutes = (0x0, express_1[a394_0x32a116(0x9d)])();
function a394_0x4311(_0x6af451, _0x5358f3) {
  var _0x1c03ba = a394_0x1c03();
  return (
    (a394_0x4311 = function (_0x431167, _0x11a2f6) {
      _0x431167 = _0x431167 - 0x86;
      var _0x1ba6ef = _0x1c03ba[_0x431167];
      return _0x1ba6ef;
    }),
    a394_0x4311(_0x6af451, _0x5358f3)
  );
}
settingRoutes[a394_0x32a116(0x97)](
  '/settings',
  isAuth_1[a394_0x32a116(0x8d)],
  SettingController[a394_0x32a116(0x88)]
),
  settingRoutes[a394_0x32a116(0x97)](
    a394_0x32a116(0xa0),
    isAuth_1[a394_0x32a116(0x8d)],
    SettingController['showOne']
  ),
  settingRoutes[a394_0x32a116(0x86)](
    a394_0x32a116(0xa0),
    isAuth_1[a394_0x32a116(0x8d)],
    SettingController['update']
  ),
  settingRoutes['get'](
    a394_0x32a116(0x8b),
    isAuth_1[a394_0x32a116(0x8d)],
    SettingController[a394_0x32a116(0x9f)]
  ),
  settingRoutes[a394_0x32a116(0x86)](
    '/setting/:settingKey',
    isAuth_1[a394_0x32a116(0x8d)],
    SettingController['updateOne']
  ),
  (exports[a394_0x32a116(0x8d)] = settingRoutes);
