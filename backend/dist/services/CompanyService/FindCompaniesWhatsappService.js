'use strict';
const a454_0x31945c = a454_0x23ca;
(function (_0x3b7d59, _0x3b4b4a) {
  const _0x283f4d = a454_0x23ca,
    _0x5d13dd = _0x3b7d59();
  while (!![]) {
    try {
      const _0x25d782 =
        -parseInt(_0x283f4d(0x168)) / 0x1 +
        (-parseInt(_0x283f4d(0x161)) / 0x2) *
          (parseInt(_0x283f4d(0x163)) / 0x3) +
        (-parseInt(_0x283f4d(0x165)) / 0x4) *
          (parseInt(_0x283f4d(0x16c)) / 0x5) +
        parseInt(_0x283f4d(0x16d)) / 0x6 +
        (-parseInt(_0x283f4d(0x16f)) / 0x7) *
          (-parseInt(_0x283f4d(0x169)) / 0x8) +
        parseInt(_0x283f4d(0x167)) / 0x9 +
        parseInt(_0x283f4d(0x170)) / 0xa;
      if (_0x25d782 === _0x3b4b4a) break;
      else _0x5d13dd['push'](_0x5d13dd['shift']());
    } catch (_0x3b16a4) {
      _0x5d13dd['push'](_0x5d13dd['shift']());
    }
  }
})(a454_0x3acf, 0x473ef);
function a454_0x23ca(_0x4c2909, _0x55f430) {
  const _0x3acfd8 = a454_0x3acf();
  return (
    (a454_0x23ca = function (_0x23cae7, _0x1f5842) {
      _0x23cae7 = _0x23cae7 - 0x161;
      let _0xefcff7 = _0x3acfd8[_0x23cae7];
      return _0xefcff7;
    }),
    a454_0x23ca(_0x4c2909, _0x55f430)
  );
}
var __importDefault =
  (this && this[a454_0x31945c(0x16b)]) ||
  function (_0x4ff35d) {
    return _0x4ff35d && _0x4ff35d['__esModule']
      ? _0x4ff35d
      : { default: _0x4ff35d };
  };
function a454_0x3acf() {
  const _0x5e886f = [
    '6wxOnQq',
    '../../models/Whatsapp',
    '122745pkXEjM',
    'ASC',
    '4IRbAuw',
    '../../models/Company',
    '3450789yivszQ',
    '109697vKDAWF',
    '2328bKoOZw',
    'status',
    '__importDefault',
    '2587675LUzNVO',
    '88956eWthLI',
    'default',
    '2793gvDZpu',
    '5274440OvYGaI',
    'findOne'
  ];
  a454_0x3acf = function () {
    return _0x5e886f;
  };
  return a454_0x3acf();
}
Object['defineProperty'](exports, '__esModule', { value: !![] });
const Company_1 = __importDefault(require(a454_0x31945c(0x166))),
  Whatsapp_1 = __importDefault(require(a454_0x31945c(0x162))),
  FindCompaniesWhatsappService = async _0x1e1776 => {
    const _0x5e5613 = a454_0x31945c,
      _0x400585 = await Company_1[_0x5e5613(0x16e)][_0x5e5613(0x171)]({
        where: { id: _0x1e1776 },
        order: [['name', _0x5e5613(0x164)]],
        include: [
          {
            model: Whatsapp_1['default'],
            attributes: ['id', 'name', _0x5e5613(0x16a)],
            where: { isDefault: !![] }
          }
        ]
      });
    return _0x400585;
  };
exports[a454_0x31945c(0x16e)] = FindCompaniesWhatsappService;
