'use strict';
function a429_0x339a(_0x4fb578, _0x3e0d95) {
  const _0x3a6271 = a429_0x3a62();
  return (
    (a429_0x339a = function (_0x339ab6, _0x141198) {
      _0x339ab6 = _0x339ab6 - 0x130;
      let _0x55aee4 = _0x3a6271[_0x339ab6];
      return _0x55aee4;
    }),
    a429_0x339a(_0x4fb578, _0x3e0d95)
  );
}
const a429_0x3190e3 = a429_0x339a;
(function (_0xa8b399, _0x3acb1a) {
  const _0x1d5128 = a429_0x339a,
    _0x2c2c39 = _0xa8b399();
  while (!![]) {
    try {
      const _0x2fdd66 =
        (-parseInt(_0x1d5128(0x137)) / 0x1) *
          (-parseInt(_0x1d5128(0x141)) / 0x2) +
        -parseInt(_0x1d5128(0x13c)) / 0x3 +
        (parseInt(_0x1d5128(0x134)) / 0x4) *
          (-parseInt(_0x1d5128(0x131)) / 0x5) +
        parseInt(_0x1d5128(0x132)) / 0x6 +
        -parseInt(_0x1d5128(0x13b)) / 0x7 +
        (-parseInt(_0x1d5128(0x143)) / 0x8) *
          (parseInt(_0x1d5128(0x13a)) / 0x9) +
        (-parseInt(_0x1d5128(0x135)) / 0xa) *
          (-parseInt(_0x1d5128(0x13d)) / 0xb);
      if (_0x2fdd66 === _0x3acb1a) break;
      else _0x2c2c39['push'](_0x2c2c39['shift']());
    } catch (_0x47eac2) {
      _0x2c2c39['push'](_0x2c2c39['shift']());
    }
  }
})(a429_0x3a62, 0x7c168);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x545072) {
    const _0x1cc5a0 = a429_0x339a;
    return _0x545072 && _0x545072[_0x1cc5a0(0x138)]
      ? _0x545072
      : { default: _0x545072 };
  };
Object[a429_0x3190e3(0x13f)](exports, a429_0x3190e3(0x138), { value: !![] });
const CampaignSetting_1 = __importDefault(
    require('../../models/CampaignSetting')
  ),
  lodash_1 = require('lodash'),
  CreateService = async (_0x2383d6, _0x4f6f99) => {
    const _0x36b60b = a429_0x3190e3,
      _0x414577 = [];
    for (let _0x13b005 of Object[_0x36b60b(0x136)](
      _0x2383d6[_0x36b60b(0x140)]
    )) {
      const _0x3d8811 =
          (0x0, lodash_1[_0x36b60b(0x13e)])(
            _0x2383d6[_0x36b60b(0x140)][_0x13b005]
          ) ||
          (0x0, lodash_1[_0x36b60b(0x139)])(
            _0x2383d6[_0x36b60b(0x140)][_0x13b005]
          )
            ? JSON[_0x36b60b(0x133)](_0x2383d6[_0x36b60b(0x140)][_0x13b005])
            : _0x2383d6[_0x36b60b(0x140)][_0x13b005],
        [_0x11e92d, _0x2dfca2] = await CampaignSetting_1['default'][
          'findOrCreate'
        ]({
          where: { key: _0x13b005, companyId: _0x4f6f99 },
          defaults: { key: _0x13b005, value: _0x3d8811, companyId: _0x4f6f99 }
        });
      !_0x2dfca2 && (await _0x11e92d['update']({ value: _0x3d8811 })),
        _0x414577[_0x36b60b(0x142)](_0x11e92d);
    }
    return _0x414577;
  };
exports[a429_0x3190e3(0x130)] = CreateService;
function a429_0x3a62() {
  const _0x4293a0 = [
    '3589278Lfjfhj',
    'stringify',
    '40JnooEf',
    '10Navzsi',
    'keys',
    '16UTESUG',
    '__esModule',
    'isObject',
    '540TpetYP',
    '6032292IcbsCe',
    '763839GJWDwR',
    '20144146NYaSbI',
    'isArray',
    'defineProperty',
    'settings',
    '97198SCZfKf',
    'push',
    '117936ATKBQN',
    'default',
    '348965degzyJ'
  ];
  a429_0x3a62 = function () {
    return _0x4293a0;
  };
  return a429_0x3a62();
}
