'use strict';
function a42_0x55b8() {
  const _0x585fa6 = [
    '117768lWTWZe',
    'forEach',
    '119IamPcW',
    'hub.verify_token',
    'entry',
    '../services/FacebookServices/facebookMessageListener',
    'EVENT_RECEIVED',
    'webHook',
    '__esModule',
    '132kCivLr',
    '1560772iJeaGk',
    'defineProperty',
    'instagram',
    'Forbidden',
    'handleMessage',
    'hub.mode',
    'hub.challenge',
    'subscribe',
    '1203718vvJeCG',
    'findOne',
    'send',
    '5763380IkXhsn',
    '288vFYRjP',
    '3RXTZtd',
    'facebook',
    '../models/Whatsapp',
    '__importDefault',
    '16519380CUPAbN',
    'page',
    'status',
    'index',
    'env',
    'query',
    'VERIFY_TOKEN',
    '3026326PUnrFA',
    'object',
    'json'
  ];
  a42_0x55b8 = function () {
    return _0x585fa6;
  };
  return a42_0x55b8();
}
const a42_0x26d7f7 = a42_0x3a2c;
(function (_0x42e8ff, _0x2cab88) {
  const _0x14d872 = a42_0x3a2c,
    _0x12dc42 = _0x42e8ff();
  while (!![]) {
    try {
      const _0x5500b3 =
        parseInt(_0x14d872(0xc8)) / 0x1 +
        (parseInt(_0x14d872(0xb3)) / 0x2) * (parseInt(_0x14d872(0xcd)) / 0x3) +
        parseInt(_0x14d872(0xc0)) / 0x4 +
        -parseInt(_0x14d872(0xcb)) / 0x5 +
        (-parseInt(_0x14d872(0xbf)) / 0x6) * (parseInt(_0x14d872(0xb8)) / 0x7) +
        (-parseInt(_0x14d872(0xb6)) / 0x8) *
          (-parseInt(_0x14d872(0xcc)) / 0x9) +
        -parseInt(_0x14d872(0xd1)) / 0xa;
      if (_0x5500b3 === _0x2cab88) break;
      else _0x12dc42['push'](_0x12dc42['shift']());
    } catch (_0x5d058a) {
      _0x12dc42['push'](_0x12dc42['shift']());
    }
  }
})(a42_0x55b8, 0xbcc26);
function a42_0x3a2c(_0xa174de, _0xaf7153) {
  const _0x55b85f = a42_0x55b8();
  return (
    (a42_0x3a2c = function (_0x3a2cd1, _0x48dcfa) {
      _0x3a2cd1 = _0x3a2cd1 - 0xaf;
      let _0x345f9a = _0x55b85f[_0x3a2cd1];
      return _0x345f9a;
    }),
    a42_0x3a2c(_0xa174de, _0xaf7153)
  );
}
var __importDefault =
  (this && this[a42_0x26d7f7(0xd0)]) ||
  function (_0x4ebfd4) {
    return _0x4ebfd4 && _0x4ebfd4['__esModule']
      ? _0x4ebfd4
      : { default: _0x4ebfd4 };
  };
Object[a42_0x26d7f7(0xc1)](exports, a42_0x26d7f7(0xbe), { value: !![] }),
  (exports[a42_0x26d7f7(0xbd)] = exports['index'] = void 0x0);
const Whatsapp_1 = __importDefault(require(a42_0x26d7f7(0xcf))),
  facebookMessageListener_1 = require(a42_0x26d7f7(0xbb)),
  index = async (_0x488c85, _0x59633a) => {
    const _0x11e6cd = a42_0x26d7f7,
      _0x977d36 = process[_0x11e6cd(0xb0)][_0x11e6cd(0xb2)] || 'whaticket',
      _0x2372b0 = _0x488c85['query'][_0x11e6cd(0xc5)],
      _0x361b8f = _0x488c85[_0x11e6cd(0xb1)][_0x11e6cd(0xb9)],
      _0x3edabd = _0x488c85['query'][_0x11e6cd(0xc6)];
    if (_0x2372b0 && _0x361b8f) {
      if (_0x2372b0 === _0x11e6cd(0xc7) && _0x361b8f === _0x977d36)
        return _0x59633a[_0x11e6cd(0xd3)](0xc8)[_0x11e6cd(0xca)](_0x3edabd);
    }
    return _0x59633a['status'](0x193)['json']({ message: _0x11e6cd(0xc3) });
  };
exports[a42_0x26d7f7(0xaf)] = index;
const webHook = async (_0x5e12c7, _0x2928d1) => {
  const _0x325783 = a42_0x26d7f7;
  try {
    const { body: _0x41b8ce } = _0x5e12c7;
    if (
      _0x41b8ce[_0x325783(0xb4)] === _0x325783(0xd2) ||
      _0x41b8ce['object'] === _0x325783(0xc2)
    ) {
      let _0x687373;
      return (
        _0x41b8ce[_0x325783(0xb4)] === _0x325783(0xd2)
          ? (_0x687373 = _0x325783(0xce))
          : (_0x687373 = 'instagram'),
        _0x41b8ce[_0x325783(0xba)]?.[_0x325783(0xb7)](async _0x1738b2 => {
          const _0x1d0a7d = _0x325783,
            _0xd16c60 = await Whatsapp_1['default'][_0x1d0a7d(0xc9)]({
              where: { facebookPageUserId: _0x1738b2['id'], channel: _0x687373 }
            });
          _0xd16c60 &&
            _0x1738b2['messaging']?.[_0x1d0a7d(0xb7)](_0x2ed92e => {
              const _0x48742e = _0x1d0a7d;
              (0x0, facebookMessageListener_1[_0x48742e(0xc4)])(
                _0xd16c60,
                _0x2ed92e,
                _0x687373,
                _0xd16c60['companyId']
              );
            });
        }),
        _0x2928d1[_0x325783(0xd3)](0xc8)[_0x325783(0xb5)]({
          message: _0x325783(0xbc)
        })
      );
    }
    return _0x2928d1[_0x325783(0xd3)](0x194)[_0x325783(0xb5)]({
      message: _0x41b8ce
    });
  } catch (_0x3e39d2) {
    return _0x2928d1[_0x325783(0xd3)](0x1f4)['json']({ message: _0x3e39d2 });
  }
};
exports['webHook'] = webHook;
