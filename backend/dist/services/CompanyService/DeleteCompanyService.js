'use strict';
function a452_0x2bd3(_0x4247e3, _0xc17dcf) {
  const _0x449d9f = a452_0x449d();
  return (
    (a452_0x2bd3 = function (_0x2bd37a, _0x49b218) {
      _0x2bd37a = _0x2bd37a - 0x134;
      let _0x22ffdf = _0x449d9f[_0x2bd37a];
      return _0x22ffdf;
    }),
    a452_0x2bd3(_0x4247e3, _0xc17dcf)
  );
}
const a452_0x22467e = a452_0x2bd3;
(function (_0x2ad0e2, _0x3da02c) {
  const _0x5e1230 = a452_0x2bd3,
    _0x4f1590 = _0x2ad0e2();
  while (!![]) {
    try {
      const _0x57ed2d =
        parseInt(_0x5e1230(0x144)) / 0x1 +
        (-parseInt(_0x5e1230(0x13f)) / 0x2) *
          (-parseInt(_0x5e1230(0x13b)) / 0x3) +
        (-parseInt(_0x5e1230(0x13a)) / 0x4) *
          (parseInt(_0x5e1230(0x140)) / 0x5) +
        (parseInt(_0x5e1230(0x142)) / 0x6) *
          (-parseInt(_0x5e1230(0x137)) / 0x7) +
        parseInt(_0x5e1230(0x139)) / 0x8 +
        -parseInt(_0x5e1230(0x13d)) / 0x9 +
        parseInt(_0x5e1230(0x141)) / 0xa;
      if (_0x57ed2d === _0x3da02c) break;
      else _0x4f1590['push'](_0x4f1590['shift']());
    } catch (_0xf5c845) {
      _0x4f1590['push'](_0x4f1590['shift']());
    }
  }
})(a452_0x449d, 0xd0538);
function a452_0x449d() {
  const _0x5dd1ae = [
    'destroy',
    'default',
    '3382022pxCZVL',
    '__importDefault',
    '625664GtDYdo',
    '1651344camgEp',
    '453FpPRWn',
    '../../errors/AppError',
    '2202471EEJioO',
    'findOne',
    '7084foPwIc',
    '5SaJYKF',
    '6867760IVDMxQ',
    '6TiYurf',
    'ERR_NO_COMPANY_FOUND',
    '694179tZHgvI',
    '../../models/Company'
  ];
  a452_0x449d = function () {
    return _0x5dd1ae;
  };
  return a452_0x449d();
}
var __importDefault =
  (this && this[a452_0x22467e(0x138)]) ||
  function (_0x1f580f) {
    return _0x1f580f && _0x1f580f['__esModule']
      ? _0x1f580f
      : { default: _0x1f580f };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] });
const Company_1 = __importDefault(require(a452_0x22467e(0x134))),
  AppError_1 = __importDefault(require(a452_0x22467e(0x13c))),
  DeleteCompanyService = async _0x5087ef => {
    const _0x3638f5 = a452_0x22467e,
      _0x5bb340 = await Company_1['default'][_0x3638f5(0x13e)]({
        where: { id: _0x5087ef }
      });
    if (!_0x5bb340)
      throw new AppError_1[_0x3638f5(0x136)](_0x3638f5(0x143), 0x194);
    await _0x5bb340[_0x3638f5(0x135)]();
  };
exports['default'] = DeleteCompanyService;
