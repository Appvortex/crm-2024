'use strict';
const a501_0x1e1083 = a501_0x5a72;
(function (_0x28f5a0, _0x39beb7) {
  const _0x338666 = a501_0x5a72,
    _0x27cca6 = _0x28f5a0();
  while (!![]) {
    try {
      const _0x3f6775 =
        -parseInt(_0x338666(0x167)) / 0x1 +
        (-parseInt(_0x338666(0x16d)) / 0x2) *
          (-parseInt(_0x338666(0x17a)) / 0x3) +
        parseInt(_0x338666(0x16c)) / 0x4 +
        (-parseInt(_0x338666(0x175)) / 0x5) *
          (parseInt(_0x338666(0x166)) / 0x6) +
        -parseInt(_0x338666(0x179)) / 0x7 +
        (parseInt(_0x338666(0x16b)) / 0x8) *
          (parseInt(_0x338666(0x16e)) / 0x9) +
        (-parseInt(_0x338666(0x178)) / 0xa) *
          (-parseInt(_0x338666(0x16a)) / 0xb);
      if (_0x3f6775 === _0x39beb7) break;
      else _0x27cca6['push'](_0x27cca6['shift']());
    } catch (_0x15d9cc) {
      _0x27cca6['push'](_0x27cca6['shift']());
    }
  }
})(a501_0x2bbb, 0xe5afd);
var __importDefault =
  (this && this[a501_0x1e1083(0x17b)]) ||
  function (_0xd66e77) {
    const _0xd013c2 = a501_0x1e1083;
    return _0xd66e77 && _0xd66e77[_0xd013c2(0x176)]
      ? _0xd66e77
      : { default: _0xd66e77 };
  };
Object[a501_0x1e1083(0x171)](exports, a501_0x1e1083(0x176), { value: !![] });
function a501_0x5a72(_0x8d961, _0x4f69df) {
  const _0x2bbbe2 = a501_0x2bbb();
  return (
    (a501_0x5a72 = function (_0x5a7225, _0x237420) {
      _0x5a7225 = _0x5a7225 - 0x165;
      let _0x270d0a = _0x2bbbe2[_0x5a7225];
      return _0x270d0a;
    }),
    a501_0x5a72(_0x8d961, _0x4f69df)
  );
}
function a501_0x2bbb() {
  const _0x2a56f5 = [
    'ERR_SENDING_FACEBOOK_MSG',
    'log',
    'contact',
    '35mYqnPB',
    '__esModule',
    '../../helpers/Mustache',
    '2944910SdUQub',
    '12116160CQBbTx',
    '13071xmvCvG',
    '__importDefault',
    'update',
    '721746EhBTkh',
    '839300OeUJky',
    '../../errors/AppError',
    'default',
    '55NrHptg',
    '192sJTGAS',
    '1592784vNjyeN',
    '302JsiHyx',
    '684171fuiCSQ',
    'whatsapp',
    './graphAPI',
    'defineProperty'
  ];
  a501_0x2bbb = function () {
    return _0x2a56f5;
  };
  return a501_0x2bbb();
}
const AppError_1 = __importDefault(require(a501_0x1e1083(0x168))),
  graphAPI_1 = require(a501_0x1e1083(0x170)),
  Mustache_1 = __importDefault(require(a501_0x1e1083(0x177))),
  sendFacebookMessage = async ({
    body: _0xe192ab,
    ticket: _0x3a8360,
    quotedMsg: _0x213007
  }) => {
    const _0x220335 = a501_0x1e1083,
      { number: _0x4fab9f } = _0x3a8360[_0x220335(0x174)];
    try {
      const _0x4f9df6 = await (0x0, graphAPI_1['sendText'])(
        _0x4fab9f,
        (0x0, Mustache_1[_0x220335(0x169)])(_0xe192ab, _0x3a8360),
        _0x3a8360[_0x220335(0x16f)]['facebookUserToken']
      );
      return (
        await _0x3a8360[_0x220335(0x165)]({ lastMessage: _0xe192ab }), _0x4f9df6
      );
    } catch (_0x5120c0) {
      console[_0x220335(0x173)](_0x5120c0);
      throw new AppError_1[_0x220335(0x169)](_0x220335(0x172));
    }
  };
exports['default'] = sendFacebookMessage;
