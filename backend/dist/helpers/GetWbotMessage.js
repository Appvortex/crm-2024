'use strict';
const a292_0x26c459 = a292_0x1eee;
function a292_0x4dc9() {
  const _0xbfc41a = [
    '51006216buFqwl',
    '8184685ccDutt',
    'Cannot\x20found\x20message\x20within\x20100\x20last\x20messages',
    '14042529lYGuRA',
    '7299672bcokQM',
    '10IrsPTV',
    '773358YXRNEc',
    '10eBaPys',
    'log',
    '1383706erLmTz',
    '4528376souUIT',
    'GetWbotMessage',
    'defineProperty',
    'ERR_FETCH_WAPP_MSG',
    '../errors/AppError',
    'default',
    '__esModule',
    '__importDefault',
    '11TTMAFP',
    '4QoeJeP',
    '7HNhUKk'
  ];
  a292_0x4dc9 = function () {
    return _0xbfc41a;
  };
  return a292_0x4dc9();
}
(function (_0x3b3b39, _0x402bc8) {
  const _0x2109ca = a292_0x1eee,
    _0x169c6f = _0x3b3b39();
  while (!![]) {
    try {
      const _0x5831da =
        parseInt(_0x2109ca(0x99)) / 0x1 +
        (parseInt(_0x2109ca(0x97)) / 0x2) * (-parseInt(_0x2109ca(0x96)) / 0x3) +
        (parseInt(_0x2109ca(0x8e)) / 0x4) * (parseInt(_0x2109ca(0x91)) / 0x5) +
        parseInt(_0x2109ca(0x94)) / 0x6 +
        (-parseInt(_0x2109ca(0x8f)) / 0x7) *
          (-parseInt(_0x2109ca(0x9a)) / 0x8) +
        (-parseInt(_0x2109ca(0x93)) / 0x9) *
          (-parseInt(_0x2109ca(0x95)) / 0xa) +
        (parseInt(_0x2109ca(0x8d)) / 0xb) * (-parseInt(_0x2109ca(0x90)) / 0xc);
      if (_0x5831da === _0x402bc8) break;
      else _0x169c6f['push'](_0x169c6f['shift']());
    } catch (_0xbae91c) {
      _0x169c6f['push'](_0x169c6f['shift']());
    }
  }
})(a292_0x4dc9, 0xc9347);
var __importDefault =
  (this && this[a292_0x26c459(0x8c)]) ||
  function (_0xf9a61) {
    const _0x245e00 = a292_0x26c459;
    return _0xf9a61 && _0xf9a61[_0x245e00(0x8b)]
      ? _0xf9a61
      : { default: _0xf9a61 };
  };
Object[a292_0x26c459(0x9c)](exports, a292_0x26c459(0x8b), { value: !![] }),
  (exports[a292_0x26c459(0x9b)] = void 0x0);
const AppError_1 = __importDefault(require(a292_0x26c459(0x9e))),
  GetMessagesService_1 = __importDefault(
    require('../services/MessageServices/GetMessagesService')
  ),
  GetWbotMessage = async (_0x3260f4, _0x12d19c) => {
    const _0x5172b2 = a292_0x26c459,
      _0x1a9d24 = async () => {
        const _0x32d1a4 = a292_0x1eee,
          _0x3a9519 = await (0x0, GetMessagesService_1[_0x32d1a4(0x9f)])({
            id: _0x12d19c
          });
        return _0x3a9519;
      };
    try {
      const _0x3d5471 = await _0x1a9d24();
      if (!_0x3d5471) throw new Error(_0x5172b2(0x92));
      return _0x3d5471;
    } catch (_0x11d83c) {
      console[_0x5172b2(0x98)](_0x11d83c);
      throw new AppError_1[_0x5172b2(0x9f)](_0x5172b2(0x9d));
    }
  };
function a292_0x1eee(_0x434735, _0x23209a) {
  const _0x4dc988 = a292_0x4dc9();
  return (
    (a292_0x1eee = function (_0x1eeedc, _0x478d47) {
      _0x1eeedc = _0x1eeedc - 0x8b;
      let _0x35f27f = _0x4dc988[_0x1eeedc];
      return _0x35f27f;
    }),
    a292_0x1eee(_0x434735, _0x23209a)
  );
}
(exports[a292_0x26c459(0x9b)] = GetWbotMessage),
  (exports['default'] = exports[a292_0x26c459(0x9b)]);
