'use strict';
const a657_0x6e1674 = a657_0x1694;
(function (_0x3af954, _0x1af05e) {
  const _0x15df28 = a657_0x1694,
    _0x1c9bf8 = _0x3af954();
  while (!![]) {
    try {
      const _0x51e5f9 =
        (-parseInt(_0x15df28(0x116)) / 0x1) *
          (-parseInt(_0x15df28(0x104)) / 0x2) +
        (parseInt(_0x15df28(0x10b)) / 0x3) *
          (parseInt(_0x15df28(0x10d)) / 0x4) +
        (-parseInt(_0x15df28(0x112)) / 0x5) *
          (parseInt(_0x15df28(0x11c)) / 0x6) +
        (parseInt(_0x15df28(0x106)) / 0x7) * (parseInt(_0x15df28(0xfe)) / 0x8) +
        parseInt(_0x15df28(0x110)) / 0x9 +
        -parseInt(_0x15df28(0xff)) / 0xa +
        parseInt(_0x15df28(0x117)) / 0xb;
      if (_0x51e5f9 === _0x1af05e) break;
      else _0x1c9bf8['push'](_0x1c9bf8['shift']());
    } catch (_0x2ccdca) {
      _0x1c9bf8['push'](_0x1c9bf8['shift']());
    }
  }
})(a657_0x5762, 0xcc473);
var __createBinding =
    (this && this[a657_0x6e1674(0x113)]) ||
    (Object['create']
      ? function (_0xa26ef, _0x48bd44, _0x16aed2, _0x1a5889) {
          const _0x25154a = a657_0x6e1674;
          if (_0x1a5889 === undefined) _0x1a5889 = _0x16aed2;
          var _0x5a7526 = Object[_0x25154a(0x115)](_0x48bd44, _0x16aed2);
          (!_0x5a7526 ||
            (_0x25154a(0xfd) in _0x5a7526
              ? !_0x48bd44[_0x25154a(0x102)]
              : _0x5a7526[_0x25154a(0x11a)] || _0x5a7526[_0x25154a(0xfc)])) &&
            (_0x5a7526 = {
              enumerable: !![],
              get: function () {
                return _0x48bd44[_0x16aed2];
              }
            }),
            Object['defineProperty'](_0xa26ef, _0x1a5889, _0x5a7526);
        }
      : function (_0x1da005, _0x1516c5, _0x2f7c50, _0x512e74) {
          if (_0x512e74 === undefined) _0x512e74 = _0x2f7c50;
          _0x1da005[_0x512e74] = _0x1516c5[_0x2f7c50];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object['create']
      ? function (_0x5867b8, _0x1baeae) {
          Object['defineProperty'](_0x5867b8, 'default', {
            enumerable: !![],
            value: _0x1baeae
          });
        }
      : function (_0x54fcfc, _0x3e1351) {
          const _0x4a4558 = a657_0x6e1674;
          _0x54fcfc[_0x4a4558(0x108)] = _0x3e1351;
        }),
  __importStar =
    (this && this['__importStar']) ||
    function (_0x130c8d) {
      const _0x28319c = a657_0x6e1674;
      if (_0x130c8d && _0x130c8d[_0x28319c(0x102)]) return _0x130c8d;
      var _0x23c969 = {};
      if (_0x130c8d != null) {
        for (var _0x8f8477 in _0x130c8d)
          if (
            _0x8f8477 !== _0x28319c(0x108) &&
            Object['prototype'][_0x28319c(0x100)]['call'](_0x130c8d, _0x8f8477)
          )
            __createBinding(_0x23c969, _0x130c8d, _0x8f8477);
      }
      return __setModuleDefault(_0x23c969, _0x130c8d), _0x23c969;
    },
  __importDefault =
    (this && this[a657_0x6e1674(0x101)]) ||
    function (_0x4b2e2c) {
      const _0x222ed1 = a657_0x6e1674;
      return _0x4b2e2c && _0x4b2e2c[_0x222ed1(0x102)]
        ? _0x4b2e2c
        : { default: _0x4b2e2c };
    };
Object[a657_0x6e1674(0x119)](exports, a657_0x6e1674(0x102), { value: !![] }),
  (exports['StartWhatsAppSession'] = void 0x0);
const wbot_1 = require('../../libs/wbot'),
  wbotMessageListener_1 = require(a657_0x6e1674(0x10e)),
  socket_1 = require('../../libs/socket'),
  wbotMonitor_1 = __importDefault(require('./wbotMonitor')),
  logger_1 = require(a657_0x6e1674(0x10c)),
  Sentry = __importStar(require(a657_0x6e1674(0x105))),
  StartWhatsAppSession = async (_0x130744, _0x48262f) => {
    const _0x1533aa = a657_0x6e1674;
    await _0x130744[_0x1533aa(0x10a)]({ status: 'OPENING' });
    const _0x1cdc74 = (0x0, socket_1[_0x1533aa(0x11b)])();
    _0x1cdc74[_0x1533aa(0x103)](
      _0x1533aa(0x11d) + _0x48262f + _0x1533aa(0x10f),
      { action: 'update', session: _0x130744 }
    );
    try {
      const _0x5ba754 = await (0x0, wbot_1[_0x1533aa(0x114)])(_0x130744);
      (0x0, wbotMessageListener_1[_0x1533aa(0x107)])(_0x5ba754, _0x48262f),
        (0x0, wbotMonitor_1['default'])(_0x5ba754, _0x130744, _0x48262f);
    } catch (_0x38d64f) {
      Sentry[_0x1533aa(0x111)](_0x38d64f),
        logger_1[_0x1533aa(0x118)][_0x1533aa(0x109)](_0x38d64f);
    }
  };
exports['StartWhatsAppSession'] = StartWhatsAppSession;
function a657_0x1694(_0x17ea88, _0xf83f26) {
  const _0x5762b3 = a657_0x5762();
  return (
    (a657_0x1694 = function (_0x169427, _0x271a8a) {
      _0x169427 = _0x169427 - 0xfc;
      let _0x504c5d = _0x5762b3[_0x169427];
      return _0x504c5d;
    }),
    a657_0x1694(_0x17ea88, _0xf83f26)
  );
}
function a657_0x5762() {
  const _0x3b3066 = [
    '6605604tbxAED',
    'captureException',
    '10vlpeyd',
    '__createBinding',
    'initWASocket',
    'getOwnPropertyDescriptor',
    '364282eqeeZm',
    '2715988BREFdM',
    'logger',
    'defineProperty',
    'writable',
    'getIO',
    '4764330yGVPoi',
    'company-',
    'configurable',
    'get',
    '718192xuMNkx',
    '15921460iXASDz',
    'hasOwnProperty',
    '__importDefault',
    '__esModule',
    'emit',
    '2zYykdw',
    '@sentry/node',
    '91atKaFG',
    'wbotMessageListener',
    'default',
    'error',
    'update',
    '93BDjeSe',
    '../../utils/logger',
    '194164TJRHDY',
    './wbotMessageListener',
    '-whatsappSession'
  ];
  a657_0x5762 = function () {
    return _0x3b3066;
  };
  return a657_0x5762();
}
