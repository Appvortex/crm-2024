'use strict';
function a654_0x15c1(_0x15873d, _0x2cfe4a) {
  const _0x575a85 = a654_0x575a();
  return (
    (a654_0x15c1 = function (_0x15c16f, _0x544a98) {
      _0x15c16f = _0x15c16f - 0x1ed;
      let _0x5a0067 = _0x575a85[_0x15c16f];
      return _0x5a0067;
    }),
    a654_0x15c1(_0x15873d, _0x2cfe4a)
  );
}
const a654_0x40a1c0 = a654_0x15c1;
(function (_0x3d5497, _0x19040a) {
  const _0x5976ef = a654_0x15c1,
    _0x49b6ec = _0x3d5497();
  while (!![]) {
    try {
      const _0x55e5b0 =
        (-parseInt(_0x5976ef(0x1fe)) / 0x1) *
          (-parseInt(_0x5976ef(0x1f6)) / 0x2) +
        (-parseInt(_0x5976ef(0x1f1)) / 0x3) *
          (parseInt(_0x5976ef(0x1f5)) / 0x4) +
        -parseInt(_0x5976ef(0x202)) / 0x5 +
        -parseInt(_0x5976ef(0x1fb)) / 0x6 +
        parseInt(_0x5976ef(0x208)) / 0x7 +
        parseInt(_0x5976ef(0x1fa)) / 0x8 +
        -parseInt(_0x5976ef(0x209)) / 0x9;
      if (_0x55e5b0 === _0x19040a) break;
      else _0x49b6ec['push'](_0x49b6ec['shift']());
    } catch (_0x3f2824) {
      _0x49b6ec['push'](_0x49b6ec['shift']());
    }
  }
})(a654_0x575a, 0xe13fe);
function a654_0x575a() {
  const _0xfc06bb = [
    '.pdf',
    '@whiskeysockets/baileys',
    'getWbot',
    '2572raTMkq',
    '28608yAMpdp',
    'charAt',
    '__importDefault',
    '/company',
    '3885632QDeOqo',
    '2462238nuXVTw',
    'sendMessage',
    'g.us',
    '113VmcRXd',
    'ERR_SENDING_WAPP_MSG',
    'isGroup',
    '__esModule',
    '447310BEefcs',
    'delay',
    'companyId',
    'default',
    'resolve',
    'defineProperty',
    '5465257vowwqy',
    '13137363SnMsBn',
    'readFileSync',
    'floor',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    'replace',
    'public',
    '3hHYgnD'
  ];
  a654_0x575a = function () {
    return _0xfc06bb;
  };
  return a654_0x575a();
}
var __importDefault =
  (this && this[a654_0x40a1c0(0x1f8)]) ||
  function (_0xf3343c) {
    return _0xf3343c && _0xf3343c['__esModule']
      ? _0xf3343c
      : { default: _0xf3343c };
  };
Object[a654_0x40a1c0(0x207)](exports, a654_0x40a1c0(0x201), { value: !![] });
const baileys_1 = require(a654_0x40a1c0(0x1f3)),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  fs_1 = __importDefault(require('fs')),
  path_1 = __importDefault(require('path')),
  wbot_1 = require('../../libs/wbot');
function makeid(_0xe421a3) {
  const _0x169912 = a654_0x40a1c0;
  var _0x256ead = '',
    _0x14b0fe = _0x169912(0x1ee),
    _0x2dac30 = _0x14b0fe['length'];
  for (var _0x71105e = 0x0; _0x71105e < _0xe421a3; _0x71105e++) {
    _0x256ead += _0x14b0fe[_0x169912(0x1f7)](
      Math[_0x169912(0x1ed)](Math['random']() * _0x2dac30)
    );
  }
  return _0x256ead;
}
const publicFolder = path_1[a654_0x40a1c0(0x205)][a654_0x40a1c0(0x206)](
    __dirname,
    '..',
    '..',
    '..',
    a654_0x40a1c0(0x1f0)
  ),
  SendWhatsAppMessageLink = async ({
    whatsappId: _0x410140,
    contact: _0x57f081,
    url: _0x456a4d,
    caption: _0x498506,
    msdelay: _0x4799cc
  }) => {
    const _0x2daa84 = a654_0x40a1c0,
      _0x2c9d8a = await (0x0, wbot_1[_0x2daa84(0x1f4)])(_0x410140),
      _0x55aee1 =
        _0x57f081['number'] +
        '@' +
        (_0x57f081[_0x2daa84(0x200)] ? _0x2daa84(0x1fd) : 's.whatsapp.net'),
      _0x5ef133 = _0x498506[_0x2daa84(0x1ef)]('/', '-');
    try {
      await (0x0, baileys_1[_0x2daa84(0x203)])(_0x4799cc);
      const _0x1a125a = await _0x2c9d8a[_0x2daa84(0x1fc)]('' + _0x55aee1, {
        document: _0x456a4d
          ? { url: _0x456a4d }
          : fs_1['default'][_0x2daa84(0x20a)](
              publicFolder +
                _0x2daa84(0x1f9) +
                _0x57f081[_0x2daa84(0x204)] +
                '/' +
                _0x5ef133 +
                '-' +
                makeid(0x5) +
                _0x2daa84(0x1f2)
            ),
        fileName: _0x5ef133,
        mimetype: 'application/pdf'
      });
      return _0x1a125a;
    } catch (_0x29704d) {
      throw new AppError_1[_0x2daa84(0x205)](_0x2daa84(0x1ff));
    }
  };
exports[a654_0x40a1c0(0x205)] = SendWhatsAppMessageLink;
