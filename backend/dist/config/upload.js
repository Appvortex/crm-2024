'use strict';
const a6_0x54a2b9 = a6_0x3f65;
(function (_0x1d08f6, _0x3831c2) {
  const _0x2607c8 = a6_0x3f65,
    _0x5bf971 = _0x1d08f6();
  while (!![]) {
    try {
      const _0x16b34b =
        -parseInt(_0x2607c8(0x121)) / 0x1 +
        parseInt(_0x2607c8(0x127)) / 0x2 +
        (parseInt(_0x2607c8(0x139)) / 0x3) *
          (parseInt(_0x2607c8(0x137)) / 0x4) +
        -parseInt(_0x2607c8(0x138)) / 0x5 +
        parseInt(_0x2607c8(0x13a)) / 0x6 +
        (-parseInt(_0x2607c8(0x12e)) / 0x7) *
          (parseInt(_0x2607c8(0x132)) / 0x8) +
        (parseInt(_0x2607c8(0x125)) / 0x9) * (parseInt(_0x2607c8(0x124)) / 0xa);
      if (_0x16b34b === _0x3831c2) break;
      else _0x5bf971['push'](_0x5bf971['shift']());
    } catch (_0x2f466b) {
      _0x5bf971['push'](_0x5bf971['shift']());
    }
  }
})(a6_0x3719, 0x843db);
function a6_0x3719() {
  const _0x4ca8a0 = [
    'lodash',
    'announcements',
    'mkdirSync',
    '__importDefault',
    '435892hxGwuU',
    '2751385JleCcj',
    '9kTgmad',
    '3059448Tpgmzt',
    'split',
    '836178nRmLSP',
    'user',
    'companyId',
    '10QrEGdL',
    '8987481VVTXCh',
    '__esModule',
    '1807170RXzZLJ',
    'replace',
    'path',
    'isEmpty',
    'originalname',
    'company',
    'default',
    '5676349pUTCBD',
    'authorization',
    'resolve',
    'body',
    '8zCwPZe'
  ];
  a6_0x3719 = function () {
    return _0x4ca8a0;
  };
  return a6_0x3719();
}
var __importDefault =
  (this && this[a6_0x54a2b9(0x136)]) ||
  function (_0x228ae8) {
    const _0x4a9f38 = a6_0x54a2b9;
    return _0x228ae8 && _0x228ae8[_0x4a9f38(0x126)]
      ? _0x228ae8
      : { default: _0x228ae8 };
  };
Object['defineProperty'](exports, a6_0x54a2b9(0x126), { value: !![] });
const path_1 = __importDefault(require(a6_0x54a2b9(0x129))),
  multer_1 = __importDefault(require('multer')),
  fs_1 = __importDefault(require('fs')),
  Whatsapp_1 = __importDefault(require('../models/Whatsapp')),
  lodash_1 = require(a6_0x54a2b9(0x133)),
  publicFolder = path_1['default'][a6_0x54a2b9(0x130)](
    __dirname,
    '..',
    '..',
    'public'
  );
function a6_0x3f65(_0x599ba2, _0x1b008a) {
  const _0x3719b6 = a6_0x3719();
  return (
    (a6_0x3f65 = function (_0x3f6588, _0xdd8fc4) {
      _0x3f6588 = _0x3f6588 - 0x121;
      let _0x4dbc5e = _0x3719b6[_0x3f6588];
      return _0x4dbc5e;
    }),
    a6_0x3f65(_0x599ba2, _0x1b008a)
  );
}
exports[a6_0x54a2b9(0x12d)] = {
  directory: publicFolder,
  storage: multer_1[a6_0x54a2b9(0x12d)]['diskStorage']({
    destination: async function (_0x382d4c, _0x5676b9, _0x2b3f64) {
      const _0x37ba02 = a6_0x54a2b9;
      let _0x1e76cd;
      _0x1e76cd = _0x382d4c[_0x37ba02(0x122)]?.[_0x37ba02(0x123)];
      const { typeArch: _0x13b8b0, fileId: _0x325a7a } = _0x382d4c['body'];
      if (
        _0x1e76cd === undefined &&
        (0x0, lodash_1['isNil'])(_0x1e76cd) &&
        (0x0, lodash_1[_0x37ba02(0x12a)])(_0x1e76cd)
      ) {
        const _0xa6983f = _0x382d4c['headers'][_0x37ba02(0x12f)],
          [, _0x14b975] = _0xa6983f[_0x37ba02(0x13b)]('\x20'),
          _0x3977b7 = await Whatsapp_1[_0x37ba02(0x12d)]['findOne']({
            where: { token: _0x14b975 }
          });
        _0x1e76cd = _0x3977b7['companyId'];
      }
      let _0xe40de8;
      if (_0x13b8b0 && _0x13b8b0 !== _0x37ba02(0x134))
        _0xe40de8 = path_1[_0x37ba02(0x12d)]['resolve'](
          publicFolder,
          _0x37ba02(0x12c) + _0x1e76cd,
          _0x13b8b0,
          _0x325a7a ? _0x325a7a : ''
        );
      else
        _0x13b8b0 && _0x13b8b0 === _0x37ba02(0x134)
          ? (_0xe40de8 = path_1[_0x37ba02(0x12d)][_0x37ba02(0x130)](
              publicFolder,
              _0x13b8b0
            ))
          : (_0xe40de8 = path_1[_0x37ba02(0x12d)]['resolve'](
              publicFolder,
              _0x37ba02(0x12c) + _0x1e76cd
            ));
      return (
        !fs_1['default']['existsSync'](_0xe40de8) &&
          (fs_1[_0x37ba02(0x12d)][_0x37ba02(0x135)](_0xe40de8, {
            recursive: !![]
          }),
          fs_1[_0x37ba02(0x12d)]['chmodSync'](_0xe40de8, 0x1ff)),
        _0x2b3f64(null, _0xe40de8)
      );
    },
    filename(_0x4392d2, _0x31c172, _0x3e9d0c) {
      const _0x269fea = a6_0x54a2b9,
        { typeArch: _0x5a504f } = _0x4392d2[_0x269fea(0x131)],
        _0x1a60ba =
          _0x5a504f && _0x5a504f !== 'announcements'
            ? _0x31c172[_0x269fea(0x12b)]
                [_0x269fea(0x128)]('/', '-')
                [_0x269fea(0x128)](/ /g, '_')
            : new Date()['getTime']() +
              '_' +
              _0x31c172[_0x269fea(0x12b)]
                ['replace']('/', '-')
                [_0x269fea(0x128)](/ /g, '_');
      return _0x3e9d0c(null, _0x1a60ba);
    }
  })
};
