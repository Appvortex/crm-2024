'use strict';
const a521_0x36de8c = a521_0x5d31;
(function (_0xe0dc85, _0x52d474) {
  const _0x3d77b4 = a521_0x5d31,
    _0x16ac82 = _0xe0dc85();
  while (!![]) {
    try {
      const _0x7bf39d =
        (parseInt(_0x3d77b4(0x135)) / 0x1) *
          (-parseInt(_0x3d77b4(0x12a)) / 0x2) +
        -parseInt(_0x3d77b4(0x133)) / 0x3 +
        (parseInt(_0x3d77b4(0x12c)) / 0x4) *
          (-parseInt(_0x3d77b4(0x130)) / 0x5) +
        parseInt(_0x3d77b4(0x12e)) / 0x6 +
        (-parseInt(_0x3d77b4(0x134)) / 0x7) *
          (parseInt(_0x3d77b4(0x12d)) / 0x8) +
        parseInt(_0x3d77b4(0x129)) / 0x9 +
        (-parseInt(_0x3d77b4(0x126)) / 0xa) *
          (-parseInt(_0x3d77b4(0x12b)) / 0xb);
      if (_0x7bf39d === _0x52d474) break;
      else _0x16ac82['push'](_0x16ac82['shift']());
    } catch (_0x579d67) {
      _0x16ac82['push'](_0x16ac82['shift']());
    }
  }
})(a521_0x24ff, 0xaedf9);
function a521_0x5d31(_0x1a9e34, _0x52b55f) {
  const _0x24ffde = a521_0x24ff();
  return (
    (a521_0x5d31 = function (_0x5d31e7, _0x372879) {
      _0x5d31e7 = _0x5d31e7 - 0x124;
      let _0x228d85 = _0x24ffde[_0x5d31e7];
      return _0x228d85;
    }),
    a521_0x5d31(_0x1a9e34, _0x52b55f)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x1731c3) {
    const _0x5b566a = a521_0x5d31;
    return _0x1731c3 && _0x1731c3[_0x5b566a(0x131)]
      ? _0x1731c3
      : { default: _0x1731c3 };
  };
Object[a521_0x36de8c(0x127)](exports, a521_0x36de8c(0x131), { value: !![] });
function a521_0x24ff() {
  const _0xf97644 = [
    'ERR_NO_PLAN_FOUND',
    '3497088VlYZeE',
    '14UbhtqC',
    '1ucqmwB',
    '../../errors/AppError',
    '../../models/Invoices',
    '6740WjFfEF',
    'defineProperty',
    'default',
    '8210502YclwkY',
    '1525214JTmYkU',
    '22682QhaqxO',
    '8RAOMYh',
    '589256GySgsJ',
    '7360644ExrSGD',
    'update',
    '1842355ZvhTLc',
    '__esModule'
  ];
  a521_0x24ff = function () {
    return _0xf97644;
  };
  return a521_0x24ff();
}
const AppError_1 = __importDefault(require(a521_0x36de8c(0x124))),
  Invoices_1 = __importDefault(require(a521_0x36de8c(0x125))),
  UpdateInvoiceService = async _0x42cff6 => {
    const _0x30589c = a521_0x36de8c,
      { id: _0x53f5fd, status: _0x53a768 } = _0x42cff6,
      _0x38196e = await Invoices_1['default']['findByPk'](_0x53f5fd);
    if (!_0x38196e)
      throw new AppError_1[_0x30589c(0x128)](_0x30589c(0x132), 0x194);
    return await _0x38196e[_0x30589c(0x12f)]({ status: _0x53a768 }), _0x38196e;
  };
exports[a521_0x36de8c(0x128)] = UpdateInvoiceService;
