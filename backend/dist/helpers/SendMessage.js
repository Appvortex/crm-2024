'use strict';
function a298_0x2b23() {
  const _0x238196 = [
    'g.us',
    'defineProperty',
    '28150FytMoX',
    '2228TVHakc',
    '2484UqChog',
    'companyId',
    'toString',
    'mediaPath',
    'SendMessage',
    's.whatsapp.net',
    'body',
    '7zEHQjc',
    '2036824LaDKIH',
    'readFileSync',
    '../services/WbotServices/SendWhatsAppMedia',
    '350914XzpAxm',
    'default',
    '../helpers/Mustache',
    '3115FbYTVn',
    './GetWhatsappWbot',
    '__importDefault',
    '1508688UzNHPm',
    '707270inQLJJ',
    '605550WBorHy',
    '__esModule',
    'sendMessage'
  ];
  a298_0x2b23 = function () {
    return _0x238196;
  };
  return a298_0x2b23();
}
const a298_0x25ac77 = a298_0x119c;
(function (_0x3c2c72, _0x475f59) {
  const _0x22e542 = a298_0x119c,
    _0x4d8fd4 = _0x3c2c72();
  while (!![]) {
    try {
      const _0x32335b =
        parseInt(_0x22e542(0xe7)) / 0x1 +
        -parseInt(_0x22e542(0xee)) / 0x2 +
        -parseInt(_0x22e542(0xef)) / 0x3 +
        (-parseInt(_0x22e542(0xdb)) / 0x4) * (parseInt(_0x22e542(0xea)) / 0x5) +
        -parseInt(_0x22e542(0xed)) / 0x6 +
        (parseInt(_0x22e542(0xe3)) / 0x7) * (parseInt(_0x22e542(0xe4)) / 0x8) +
        (parseInt(_0x22e542(0xdc)) / 0x9) * (parseInt(_0x22e542(0xda)) / 0xa);
      if (_0x32335b === _0x475f59) break;
      else _0x4d8fd4['push'](_0x4d8fd4['shift']());
    } catch (_0x29c255) {
      _0x4d8fd4['push'](_0x4d8fd4['shift']());
    }
  }
})(a298_0x2b23, 0x37ca1);
var __importDefault =
  (this && this[a298_0x25ac77(0xec)]) ||
  function (_0x166b09) {
    const _0x492f43 = a298_0x25ac77;
    return _0x166b09 && _0x166b09[_0x492f43(0xf0)]
      ? _0x166b09
      : { default: _0x166b09 };
  };
function a298_0x119c(_0x5d2ae0, _0x3b8fe5) {
  const _0x2b239b = a298_0x2b23();
  return (
    (a298_0x119c = function (_0x119c76, _0x5164de) {
      _0x119c76 = _0x119c76 - 0xd8;
      let _0xde78b5 = _0x2b239b[_0x119c76];
      return _0xde78b5;
    }),
    a298_0x119c(_0x5d2ae0, _0x3b8fe5)
  );
}
Object[a298_0x25ac77(0xd9)](exports, a298_0x25ac77(0xf0), { value: !![] }),
  (exports[a298_0x25ac77(0xe0)] = void 0x0);
const GetWhatsappWbot_1 = __importDefault(require(a298_0x25ac77(0xeb))),
  fs_1 = __importDefault(require('fs')),
  Mustache_1 = __importDefault(require(a298_0x25ac77(0xe9))),
  SendWhatsAppMedia_1 = require(a298_0x25ac77(0xe6)),
  SendMessage = async (_0x5254e6, _0x530342, _0x3af1fc = ![]) => {
    const _0xe1b839 = a298_0x25ac77;
    try {
      const _0x36bb57 = await (0x0, GetWhatsappWbot_1[_0xe1b839(0xe8)])(
          _0x5254e6
        ),
        _0x3cfaa3 =
          _0x530342['number'] +
          '@' +
          (!!_0x3af1fc ? _0xe1b839(0xd8) : _0xe1b839(0xe1)),
        _0x4b99b0 = _0x530342?.[_0xe1b839(0xdd)]
          ? _0x530342[_0xe1b839(0xdd)][_0xe1b839(0xde)]()
          : null;
      let _0x4b60d9;
      if (_0x530342[_0xe1b839(0xdf)]) {
        const _0xe8cae8 = await (0x0, SendWhatsAppMedia_1['getMessageOptions'])(
          _0x530342[_0xe1b839(0xe2)],
          _0x530342[_0xe1b839(0xdf)],
          _0x4b99b0
        );
        if (_0xe8cae8) {
          const _0x16ab9b = fs_1[_0xe1b839(0xe8)][_0xe1b839(0xe5)](
            _0x530342[_0xe1b839(0xdf)]
          );
          _0x4b60d9 = await _0x36bb57['sendMessage'](_0x3cfaa3, {
            ..._0xe8cae8
          });
        }
      } else {
        const _0x22254b = (0x0, Mustache_1[_0xe1b839(0xe8)])(
          '‎\x20' + _0x530342[_0xe1b839(0xe2)]
        );
        _0x4b60d9 = await _0x36bb57[_0xe1b839(0xf1)](_0x3cfaa3, {
          text: _0x22254b
        });
      }
      return _0x4b60d9;
    } catch (_0x2c67db) {
      throw new Error(_0x2c67db);
    }
  };
exports[a298_0x25ac77(0xe0)] = SendMessage;
