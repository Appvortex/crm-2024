'use strict';
const a14_0x5ca33d = a14_0x1fa7;
(function (_0x18bbc2, _0x2859d6) {
  const _0x328641 = a14_0x1fa7,
    _0x3a593c = _0x18bbc2();
  while (!![]) {
    try {
      const _0x3b7f06 =
        parseInt(_0x328641(0xf7)) / 0x1 +
        (-parseInt(_0x328641(0x10c)) / 0x2) *
          (parseInt(_0x328641(0x103)) / 0x3) +
        (parseInt(_0x328641(0x106)) / 0x4) *
          (-parseInt(_0x328641(0xfb)) / 0x5) +
        -parseInt(_0x328641(0x10e)) / 0x6 +
        (-parseInt(_0x328641(0xfe)) / 0x7) *
          (parseInt(_0x328641(0x105)) / 0x8) +
        -parseInt(_0x328641(0x108)) / 0x9 +
        (-parseInt(_0x328641(0xfd)) / 0xa) *
          (-parseInt(_0x328641(0x10b)) / 0xb);
      if (_0x3b7f06 === _0x2859d6) break;
      else _0x3a593c['push'](_0x3a593c['shift']());
    } catch (_0x205dd2) {
      _0x3a593c['push'](_0x3a593c['shift']());
    }
  }
})(a14_0x2f1b, 0x533af);
var __importDefault =
  (this && this[a14_0x5ca33d(0x101)]) ||
  function (_0x67323a) {
    return _0x67323a && _0x67323a['__esModule']
      ? _0x67323a
      : { default: _0x67323a };
  };
Object[a14_0x5ca33d(0x10d)](exports, a14_0x5ca33d(0xff), { value: !![] }),
  (exports['update'] =
    exports[a14_0x5ca33d(0xfc)] =
    exports[a14_0x5ca33d(0xfa)] =
      void 0x0);
const FindCompanySettingsService_1 = __importDefault(
    require(a14_0x5ca33d(0xf8))
  ),
  UpdateCompanySettingService_1 = __importDefault(require(a14_0x5ca33d(0xf9))),
  FindCompanySettingOneService_1 = __importDefault(
    require('../services/CompaniesSettings/FindCompanySettingOneService')
  ),
  show = async (_0x28d7a7, _0x54aa) => {
    const _0x448db0 = a14_0x5ca33d,
      { companyId: _0x22c2b5 } = _0x28d7a7[_0x448db0(0x102)],
      _0x57bb5d = await (0x0, FindCompanySettingsService_1[_0x448db0(0x104)])({
        companyId: _0x22c2b5
      });
    return _0x54aa['status'](0xc8)[_0x448db0(0x109)](_0x57bb5d);
  };
exports[a14_0x5ca33d(0xfa)] = show;
const showOne = async (_0x5f3b7c, _0x4dfdf2) => {
  const _0x40be6b = a14_0x5ca33d,
    { column: _0x7ce23 } = _0x5f3b7c[_0x40be6b(0x107)],
    { companyId: _0x2cfb3d } = _0x5f3b7c[_0x40be6b(0x102)],
    _0x4bdfe2 = await (0x0, FindCompanySettingOneService_1[_0x40be6b(0x104)])({
      companyId: _0x2cfb3d,
      column: _0x7ce23
    });
  return _0x4dfdf2['status'](0xc8)[_0x40be6b(0x109)](_0x4bdfe2[0x0]);
};
exports[a14_0x5ca33d(0xfc)] = showOne;
function a14_0x1fa7(_0x17f80c, _0xeceadc) {
  const _0x2f1b88 = a14_0x2f1b();
  return (
    (a14_0x1fa7 = function (_0x1fa7ee, _0x37ca73) {
      _0x1fa7ee = _0x1fa7ee - 0xf7;
      let _0x2a8a8f = _0x2f1b88[_0x1fa7ee];
      return _0x2a8a8f;
    }),
    a14_0x1fa7(_0x17f80c, _0xeceadc)
  );
}
const update = async (_0x4c3ed6, _0x4322ca) => {
  const _0x143195 = a14_0x5ca33d,
    { column: _0x1fd4bb, data: _0x547055 } = _0x4c3ed6[_0x143195(0x10a)],
    { companyId: _0x5ff7ba } = _0x4c3ed6[_0x143195(0x102)],
    _0x2a24ca = await (0x0, UpdateCompanySettingService_1['default'])({
      companyId: _0x5ff7ba,
      column: _0x1fd4bb,
      data: _0x547055
    });
  return _0x4322ca[_0x143195(0x100)](0xc8)[_0x143195(0x109)]({
    response: !![],
    result: _0x2a24ca
  });
};
function a14_0x2f1b() {
  const _0x450d62 = [
    '../services/CompaniesSettings/FindCompanySettingsService',
    '../services/CompaniesSettings/UpdateCompanySettingService',
    'show',
    '220XQbuhj',
    'showOne',
    '10laZygo',
    '175301lRCrou',
    '__esModule',
    'status',
    '__importDefault',
    'user',
    '74187CeFubh',
    'default',
    '48GpLVrf',
    '27332zoFqUg',
    'query',
    '139824PgUinh',
    'json',
    'body',
    '20407519tjBlUn',
    '52oZjQqi',
    'defineProperty',
    '2628318xANKTC',
    '33135BlPBMx'
  ];
  a14_0x2f1b = function () {
    return _0x450d62;
  };
  return a14_0x2f1b();
}
exports['update'] = update;
