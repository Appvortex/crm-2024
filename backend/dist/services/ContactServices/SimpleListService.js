'use strict';
function a489_0x641a(_0x332003, _0x27707b) {
  const _0x4601d0 = a489_0x4601();
  return (
    (a489_0x641a = function (_0x641a86, _0x1ec7f7) {
      _0x641a86 = _0x641a86 - 0x8f;
      let _0x4746f9 = _0x4601d0[_0x641a86];
      return _0x4746f9;
    }),
    a489_0x641a(_0x332003, _0x27707b)
  );
}
const a489_0x48683e = a489_0x641a;
(function (_0x9ab73e, _0x4de233) {
  const _0x358465 = a489_0x641a,
    _0x7f6b3e = _0x9ab73e();
  while (!![]) {
    try {
      const _0x4e72a2 =
        (-parseInt(_0x358465(0x93)) / 0x1) * (parseInt(_0x358465(0xa0)) / 0x2) +
        (parseInt(_0x358465(0x9a)) / 0x3) * (-parseInt(_0x358465(0xa3)) / 0x4) +
        (parseInt(_0x358465(0x94)) / 0x5) * (-parseInt(_0x358465(0x8f)) / 0x6) +
        (parseInt(_0x358465(0x99)) / 0x7) * (-parseInt(_0x358465(0x91)) / 0x8) +
        parseInt(_0x358465(0x9f)) / 0x9 +
        (-parseInt(_0x358465(0x9d)) / 0xa) * (parseInt(_0x358465(0x9e)) / 0xb) +
        (-parseInt(_0x358465(0x9b)) / 0xc) * (-parseInt(_0x358465(0x97)) / 0xd);
      if (_0x4e72a2 === _0x4de233) break;
      else _0x7f6b3e['push'](_0x7f6b3e['shift']());
    } catch (_0x287fc9) {
      _0x7f6b3e['push'](_0x7f6b3e['shift']());
    }
  }
})(a489_0x4601, 0x46264);
function a489_0x4601() {
  const _0x1c18e1 = [
    '1gPjaPk',
    '5uujpjz',
    'name',
    'ASC',
    '559nGWxvE',
    'default',
    '2744FNJGgI',
    '1084278zWBsCP',
    '475692ENJoOc',
    'sequelize',
    '1109510LjnJCT',
    '11WngOrz',
    '640332SZeXGZ',
    '964506WXpfqH',
    '__esModule',
    'findAll',
    '4RrUUfr',
    '1760718GTzrgp',
    'where',
    '4904tuBPEW',
    '../../models/Contact'
  ];
  a489_0x4601 = function () {
    return _0x1c18e1;
  };
  return a489_0x4601();
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x426d3f) {
    const _0x186ec5 = a489_0x641a;
    return _0x426d3f && _0x426d3f[_0x186ec5(0xa1)]
      ? _0x426d3f
      : { default: _0x426d3f };
  };
Object['defineProperty'](exports, a489_0x48683e(0xa1), { value: !![] });
const Contact_1 = __importDefault(require(a489_0x48683e(0x92))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  sequelize_1 = require(a489_0x48683e(0x9c)),
  SimpleListService = async ({ name: _0x457d01, companyId: _0x17c41e }) => {
    const _0x38030c = a489_0x48683e;
    let _0x149624 = { order: [[_0x38030c(0x95), _0x38030c(0x96)]] };
    _0x457d01 &&
      (_0x149624[_0x38030c(0x90)] = {
        name: { [sequelize_1['Op']['like']]: '%' + _0x457d01 + '%' }
      });
    _0x149624[_0x38030c(0x90)] = {
      ..._0x149624[_0x38030c(0x90)],
      companyId: _0x17c41e
    };
    const _0x4112fc =
      await Contact_1[_0x38030c(0x98)][_0x38030c(0xa2)](_0x149624);
    if (!_0x4112fc)
      throw new AppError_1[_0x38030c(0x98)]('ERR_NO_CONTACT_FOUND', 0x194);
    return _0x4112fc;
  };
exports[a489_0x48683e(0x98)] = SimpleListService;
