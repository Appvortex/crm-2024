'use strict';
function a648_0x1102(_0x27f38c, _0x143f0c) {
  const _0x48bd74 = a648_0x48bd();
  return (
    (a648_0x1102 = function (_0x11024a, _0x15355e) {
      _0x11024a = _0x11024a - 0x1bb;
      let _0x38fbe8 = _0x48bd74[_0x11024a];
      return _0x38fbe8;
    }),
    a648_0x1102(_0x27f38c, _0x143f0c)
  );
}
const a648_0x5281e0 = a648_0x1102;
(function (_0x59a63e, _0x1d186e) {
  const _0x34875a = a648_0x1102,
    _0x5a64e6 = _0x59a63e();
  while (!![]) {
    try {
      const _0x31c98f =
        (-parseInt(_0x34875a(0x1bd)) / 0x1) *
          (parseInt(_0x34875a(0x1cc)) / 0x2) +
        -parseInt(_0x34875a(0x1c5)) / 0x3 +
        parseInt(_0x34875a(0x1c3)) / 0x4 +
        (-parseInt(_0x34875a(0x1bb)) / 0x5) *
          (-parseInt(_0x34875a(0x1c6)) / 0x6) +
        -parseInt(_0x34875a(0x1c1)) / 0x7 +
        (-parseInt(_0x34875a(0x1bf)) / 0x8) *
          (parseInt(_0x34875a(0x1c0)) / 0x9) +
        parseInt(_0x34875a(0x1c2)) / 0xa;
      if (_0x31c98f === _0x1d186e) break;
      else _0x5a64e6['push'](_0x5a64e6['shift']());
    } catch (_0x547062) {
      _0x5a64e6['push'](_0x5a64e6['shift']());
    }
  }
})(a648_0x48bd, 0x4baf2);
var __importDefault =
  (this && this[a648_0x5281e0(0x1ca)]) ||
  function (_0x4889d8) {
    const _0x167bc9 = a648_0x5281e0;
    return _0x4889d8 && _0x4889d8[_0x167bc9(0x1cd)]
      ? _0x4889d8
      : { default: _0x4889d8 };
  };
Object['defineProperty'](exports, a648_0x5281e0(0x1cd), { value: !![] });
const GetDefaultWhatsApp_1 = __importDefault(require(a648_0x5281e0(0x1c8))),
  wbot_1 = require('../../libs/wbot'),
  GetProfilePicUrl = async (_0x4dde90, _0x376ee7, _0x14c31d) => {
    const _0x521c9d = a648_0x5281e0,
      _0x420249 = await (0x0, GetDefaultWhatsApp_1[_0x521c9d(0x1bc)])(
        _0x376ee7
      ),
      _0x2723c7 = (0x0, wbot_1[_0x521c9d(0x1cf)])(_0x420249['id']);
    let _0x479b69;
    try {
      _0x479b69 = await _0x2723c7[_0x521c9d(0x1c9)](
        _0x14c31d && _0x14c31d[_0x521c9d(0x1c4)]
          ? _0x14c31d[_0x521c9d(0x1cb)]
          : _0x4dde90 + '@s.whatsapp.net',
        'image'
      );
    } catch (_0x382589) {
      _0x479b69 =
        process[_0x521c9d(0x1be)][_0x521c9d(0x1c7)] + _0x521c9d(0x1ce);
    }
    return _0x479b69;
  };
function a648_0x48bd() {
  const _0x282b4c = [
    'isGroup',
    '491316hsYVOk',
    '36Gkppyt',
    'FRONTEND_URL',
    '../../helpers/GetDefaultWhatsApp',
    'profilePictureUrl',
    '__importDefault',
    'remoteJid',
    '8458AUnHbP',
    '__esModule',
    '/nopicture.png',
    'getWbot',
    '125805ycTixw',
    'default',
    '53DPytqt',
    'env',
    '14768MVeDnL',
    '2988QLxDbW',
    '3008131UcEcvI',
    '10193780aNWBaj',
    '2280688hYiXiW'
  ];
  a648_0x48bd = function () {
    return _0x282b4c;
  };
  return a648_0x48bd();
}
exports['default'] = GetProfilePicUrl;
