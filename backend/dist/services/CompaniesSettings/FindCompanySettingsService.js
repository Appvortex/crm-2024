'use strict';
const a449_0x245188 = a449_0x296c;
(function (_0x17bf41, _0x3404d1) {
  const _0xeedcfd = a449_0x296c,
    _0x2c63b5 = _0x17bf41();
  while (!![]) {
    try {
      const _0x53859a =
        (parseInt(_0xeedcfd(0x133)) / 0x1) *
          (-parseInt(_0xeedcfd(0x12d)) / 0x2) +
        (parseInt(_0xeedcfd(0x127)) / 0x3) *
          (-parseInt(_0xeedcfd(0x123)) / 0x4) +
        (-parseInt(_0xeedcfd(0x131)) / 0x5) *
          (-parseInt(_0xeedcfd(0x132)) / 0x6) +
        parseInt(_0xeedcfd(0x124)) / 0x7 +
        (parseInt(_0xeedcfd(0x126)) / 0x8) *
          (parseInt(_0xeedcfd(0x125)) / 0x9) +
        (parseInt(_0xeedcfd(0x12e)) / 0xa) *
          (parseInt(_0xeedcfd(0x128)) / 0xb) +
        parseInt(_0xeedcfd(0x12a)) / 0xc;
      if (_0x53859a === _0x3404d1) break;
      else _0x2c63b5['push'](_0x2c63b5['shift']());
    } catch (_0x5cd45d) {
      _0x2c63b5['push'](_0x2c63b5['shift']());
    }
  }
})(a449_0x247b, 0x49482);
function a449_0x296c(_0x1ff5d3, _0x121423) {
  const _0x247b0b = a449_0x247b();
  return (
    (a449_0x296c = function (_0x296c9f, _0xc4c187) {
      _0x296c9f = _0x296c9f - 0x123;
      let _0x24b895 = _0x247b0b[_0x296c9f];
      return _0x24b895;
    }),
    a449_0x296c(_0x1ff5d3, _0x121423)
  );
}
function a449_0x247b() {
  const _0x26cb3e = [
    '560571lGojAr',
    '432355vneYSB',
    '../../models/CompaniesSettings',
    '5841876zUrclO',
    '__importDefault',
    '__esModule',
    '4bYrftQ',
    '50xtECob',
    'findOne',
    'default',
    '99830HOxmQT',
    '12PXGZSj',
    '266668AaeUSG',
    '4dSmOiq',
    '2056033tRBZOW',
    '15102XzqMtW',
    '16aBELfN'
  ];
  a449_0x247b = function () {
    return _0x26cb3e;
  };
  return a449_0x247b();
}
var __importDefault =
  (this && this[a449_0x245188(0x12b)]) ||
  function (_0x125788) {
    const _0x2be520 = a449_0x245188;
    return _0x125788 && _0x125788[_0x2be520(0x12c)]
      ? _0x125788
      : { default: _0x125788 };
  };
Object['defineProperty'](exports, a449_0x245188(0x12c), { value: !![] });
const CompaniesSettings_1 = __importDefault(require(a449_0x245188(0x129)));
const FindCompanySettingsService = async ({ companyId: _0x418873 }) => {
  const _0x3c41a0 = a449_0x245188,
    _0x3cf8bb = await CompaniesSettings_1[_0x3c41a0(0x130)][_0x3c41a0(0x12f)]({
      where: { companyId: _0x418873 }
    });
  return _0x3cf8bb;
};
exports[a449_0x245188(0x130)] = FindCompanySettingsService;
