'use strict';
const a297_0x2df959 = a297_0x3a0b;
(function (_0x3dffc6, _0x5a467a) {
  const _0x4ef103 = a297_0x3a0b,
    _0x1a6e96 = _0x3dffc6();
  while (!![]) {
    try {
      const _0x2252f2 =
        parseInt(_0x4ef103(0x1f6)) / 0x1 +
        (parseInt(_0x4ef103(0x1f5)) / 0x2) *
          (-parseInt(_0x4ef103(0x1f3)) / 0x3) +
        -parseInt(_0x4ef103(0x1e3)) / 0x4 +
        (-parseInt(_0x4ef103(0x1e6)) / 0x5) *
          (-parseInt(_0x4ef103(0x1f2)) / 0x6) +
        (parseInt(_0x4ef103(0x1e0)) / 0x7) *
          (-parseInt(_0x4ef103(0x1ef)) / 0x8) +
        parseInt(_0x4ef103(0x1e9)) / 0x9 +
        parseInt(_0x4ef103(0x1e1)) / 0xa;
      if (_0x2252f2 === _0x5a467a) break;
      else _0x1a6e96['push'](_0x1a6e96['shift']());
    } catch (_0x20896d) {
      _0x1a6e96['push'](_0x1a6e96['shift']());
    }
  }
})(a297_0x82a9, 0xc36a8);
function a297_0x3a0b(_0x39d579, _0x1610cc) {
  const _0x82a96d = a297_0x82a9();
  return (
    (a297_0x3a0b = function (_0x3a0b9d, _0x4a43a1) {
      _0x3a0b9d = _0x3a0b9d - 0x1e0;
      let _0x4d1f13 = _0x82a96d[_0x3a0b9d];
      return _0x4d1f13;
    }),
    a297_0x3a0b(_0x39d579, _0x1610cc)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x4e5b52) {
    return _0x4e5b52 && _0x4e5b52['__esModule']
      ? _0x4e5b52
      : { default: _0x4e5b52 };
  };
Object['defineProperty'](exports, a297_0x2df959(0x1f7), { value: !![] }),
  (exports[a297_0x2df959(0x1ec)] = void 0x0);
const nodemailer_1 = __importDefault(require('nodemailer'));
function a297_0x82a9() {
  const _0x5f4437 = [
    'SendMail',
    'MAIL_PASS',
    'MAIL_FROM',
    '108768rjLbts',
    'subject',
    'MAIL_HOST',
    '184686wvFVpE',
    '27TLbbxA',
    'default',
    '321808bydwUI',
    '991836JzxwhG',
    '__esModule',
    '371djHiho',
    '20275080MPvDJX',
    'MAIL_USER',
    '2669204oDRIrv',
    'env',
    'createTransport',
    '30idXPYM',
    'text',
    'log',
    '3891771HsZLFR',
    'getTestMessageUrl',
    'Preview\x20URL:\x20%s'
  ];
  a297_0x82a9 = function () {
    return _0x5f4437;
  };
  return a297_0x82a9();
}
async function SendMail(_0x3d97a7) {
  const _0x270e16 = a297_0x2df959,
    _0x42c991 = {
      host: process[_0x270e16(0x1e4)][_0x270e16(0x1f1)],
      auth: {
        user: process[_0x270e16(0x1e4)][_0x270e16(0x1e2)],
        pass: process[_0x270e16(0x1e4)][_0x270e16(0x1ed)]
      }
    },
    _0xbafffe = nodemailer_1[_0x270e16(0x1f4)][_0x270e16(0x1e5)](_0x42c991);
  let _0x13c968 = await _0xbafffe['sendMail']({
    from: process[_0x270e16(0x1e4)][_0x270e16(0x1ee)],
    to: _0x3d97a7['to'],
    subject: _0x3d97a7[_0x270e16(0x1f0)],
    text: _0x3d97a7[_0x270e16(0x1e7)],
    html: _0x3d97a7['html'] || _0x3d97a7['text']
  });
  console['log']('Message\x20sent:\x20%s', _0x13c968['messageId']),
    console[_0x270e16(0x1e8)](
      _0x270e16(0x1eb),
      nodemailer_1[_0x270e16(0x1f4)][_0x270e16(0x1ea)](_0x13c968)
    );
}
exports[a297_0x2df959(0x1ec)] = SendMail;
