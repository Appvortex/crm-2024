'use strict';
function a655_0x4ca7(_0x357e84, _0x152fbe) {
  const _0x4d9bd4 = a655_0x4d9b();
  return (
    (a655_0x4ca7 = function (_0x4ca72e, _0x166933) {
      _0x4ca72e = _0x4ca72e - 0x190;
      let _0x47e674 = _0x4d9bd4[_0x4ca72e];
      return _0x47e674;
    }),
    a655_0x4ca7(_0x357e84, _0x152fbe)
  );
}
const a655_0x5c56ce = a655_0x4ca7;
(function (_0x1b93de, _0x3a0484) {
  const _0x18de8e = a655_0x4ca7,
    _0x360082 = _0x1b93de();
  while (!![]) {
    try {
      const _0x23a1cc =
        (parseInt(_0x18de8e(0x1b7)) / 0x1) *
          (parseInt(_0x18de8e(0x1b1)) / 0x2) +
        (parseInt(_0x18de8e(0x198)) / 0x3) *
          (parseInt(_0x18de8e(0x1af)) / 0x4) +
        (-parseInt(_0x18de8e(0x199)) / 0x5) *
          (parseInt(_0x18de8e(0x1ad)) / 0x6) +
        (parseInt(_0x18de8e(0x1b6)) / 0x7) *
          (-parseInt(_0x18de8e(0x197)) / 0x8) +
        -parseInt(_0x18de8e(0x1b4)) / 0x9 +
        -parseInt(_0x18de8e(0x195)) / 0xa +
        parseInt(_0x18de8e(0x1b2)) / 0xb;
      if (_0x23a1cc === _0x3a0484) break;
      else _0x360082['push'](_0x360082['shift']());
    } catch (_0x497167) {
      _0x360082['push'](_0x360082['shift']());
    }
  }
})(a655_0x4d9b, 0x45c47);
var __importDefault =
  (this && this[a655_0x5c56ce(0x1ba)]) ||
  function (_0x36a6c4) {
    const _0xa01337 = a655_0x5c56ce;
    return _0x36a6c4 && _0x36a6c4[_0xa01337(0x1b3)]
      ? _0x36a6c4
      : { default: _0x36a6c4 };
  };
function a655_0x4d9b() {
  const _0x566377 = [
    '1164633BGZScF',
    '1355KGENlu',
    '@whiskeysockets/baileys',
    'contactId',
    'available',
    'sendMessage',
    'random',
    'findByPk',
    '../../helpers/Mustache',
    '.png',
    'sendPresenceUpdate',
    'ERR_SENDING_WAPP_MSG',
    'default',
    'path',
    'defineProperty',
    'delay',
    'floor',
    'public',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    '/company',
    'charAt',
    '9966RoNcyG',
    'number',
    '4PnflDR',
    'companyId',
    '268846fcvBNY',
    '15534761NvqSEY',
    '__esModule',
    '3622239ssqLkq',
    'isGroup',
    '7hntIEx',
    '1NUPdiD',
    'g.us',
    '../../helpers/GetTicketWbot',
    '__importDefault',
    'readFileSync',
    's.whatsapp.net',
    'image/jpeg',
    'length',
    '../../errors/AppError',
    'remoteJid',
    'includes',
    '3733890kHBABO',
    'resolve',
    '3385016XasMUD'
  ];
  a655_0x4d9b = function () {
    return _0x566377;
  };
  return a655_0x4d9b();
}
Object[a655_0x5c56ce(0x1a6)](exports, a655_0x5c56ce(0x1b3), { value: !![] });
const baileys_1 = require(a655_0x5c56ce(0x19a)),
  AppError_1 = __importDefault(require(a655_0x5c56ce(0x192))),
  GetTicketWbot_1 = __importDefault(require(a655_0x5c56ce(0x1b9))),
  Mustache_1 = __importDefault(require(a655_0x5c56ce(0x1a0))),
  Contact_1 = __importDefault(require('../../models/Contact')),
  path_1 = __importDefault(require(a655_0x5c56ce(0x1a5))),
  fs_1 = __importDefault(require('fs'));
function makeid(_0x449574) {
  const _0x1865e4 = a655_0x5c56ce;
  var _0x28842c = '',
    _0xb87365 = _0x1865e4(0x1aa),
    _0x20bca2 = _0xb87365[_0x1865e4(0x191)];
  for (var _0x3ee958 = 0x0; _0x3ee958 < _0x449574; _0x3ee958++) {
    _0x28842c += _0xb87365[_0x1865e4(0x1ac)](
      Math[_0x1865e4(0x1a8)](Math[_0x1865e4(0x19e)]() * _0x20bca2)
    );
  }
  return _0x28842c;
}
const publicFolder = path_1['default'][a655_0x5c56ce(0x196)](
    __dirname,
    '..',
    '..',
    '..',
    a655_0x5c56ce(0x1a9)
  ),
  SendWhatsAppMediaImage = async ({
    ticket: _0x31a82d,
    url: _0x4e6fc6,
    caption: _0x579b25,
    msdelay: _0x1f1e90
  }) => {
    const _0xb9b570 = a655_0x5c56ce,
      _0x4305e2 = await (0x0, GetTicketWbot_1['default'])(_0x31a82d),
      _0x26b547 = await Contact_1[_0xb9b570(0x1a4)][_0xb9b570(0x19f)](
        _0x31a82d[_0xb9b570(0x19b)]
      );
    let _0x362407;
    _0x26b547[_0xb9b570(0x193)] &&
    _0x26b547[_0xb9b570(0x193)] !== '' &&
    _0x26b547[_0xb9b570(0x193)][_0xb9b570(0x194)]('@')
      ? (_0x362407 = _0x26b547['remoteJid'])
      : (_0x362407 =
          _0x26b547[_0xb9b570(0x1ae)] +
          '@' +
          (_0x31a82d[_0xb9b570(0x1b5)] ? _0xb9b570(0x1b8) : _0xb9b570(0x1bc)));
    try {
      _0x4305e2[_0xb9b570(0x1a2)](_0xb9b570(0x19c)),
        await (0x0, baileys_1[_0xb9b570(0x1a7)])(_0x1f1e90);
      const _0x233d42 = await _0x4305e2[_0xb9b570(0x19d)]('' + _0x362407, {
        image: _0x4e6fc6
          ? { url: _0x4e6fc6 }
          : fs_1['default'][_0xb9b570(0x1bb)](
              publicFolder +
                _0xb9b570(0x1ab) +
                _0x31a82d[_0xb9b570(0x1b0)] +
                '/' +
                _0x579b25 +
                '-' +
                makeid(0x5) +
                _0xb9b570(0x1a1)
            ),
        caption: (0x0, Mustache_1[_0xb9b570(0x1a4)])('' + _0x579b25, _0x31a82d),
        mimetype: _0xb9b570(0x190)
      });
      return _0x4305e2[_0xb9b570(0x1a2)]('unavailable'), _0x233d42;
    } catch (_0x5014c5) {
      throw new AppError_1['default'](_0xb9b570(0x1a3));
    }
  };
exports['default'] = SendWhatsAppMediaImage;
