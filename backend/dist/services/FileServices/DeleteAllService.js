'use strict';
function a504_0x49bd(_0x1b8585, _0x480d00) {
  const _0x34e5d7 = a504_0x34e5();
  return (
    (a504_0x49bd = function (_0x49bd01, _0x495138) {
      _0x49bd01 = _0x49bd01 - 0x65;
      let _0x1576d1 = _0x34e5d7[_0x49bd01];
      return _0x1576d1;
    }),
    a504_0x49bd(_0x1b8585, _0x480d00)
  );
}
const a504_0x3864da = a504_0x49bd;
(function (_0x5c369a, _0x37585d) {
  const _0x1e002e = a504_0x49bd,
    _0x55eb23 = _0x5c369a();
  while (!![]) {
    try {
      const _0xb6a4f4 =
        (-parseInt(_0x1e002e(0x66)) / 0x1) * (parseInt(_0x1e002e(0x70)) / 0x2) +
        (parseInt(_0x1e002e(0x6d)) / 0x3) * (-parseInt(_0x1e002e(0x74)) / 0x4) +
        (parseInt(_0x1e002e(0x71)) / 0x5) * (parseInt(_0x1e002e(0x6a)) / 0x6) +
        -parseInt(_0x1e002e(0x65)) / 0x7 +
        -parseInt(_0x1e002e(0x75)) / 0x8 +
        -parseInt(_0x1e002e(0x6b)) / 0x9 +
        parseInt(_0x1e002e(0x6e)) / 0xa;
      if (_0xb6a4f4 === _0x37585d) break;
      else _0x55eb23['push'](_0x55eb23['shift']());
    } catch (_0xc279f) {
      _0x55eb23['push'](_0x55eb23['shift']());
    }
  }
})(a504_0x34e5, 0x97727);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x304817) {
    const _0x307ffe = a504_0x49bd;
    return _0x304817 && _0x304817[_0x307ffe(0x6c)]
      ? _0x304817
      : { default: _0x304817 };
  };
Object[a504_0x3864da(0x73)](exports, '__esModule', { value: !![] });
function a504_0x34e5() {
  const _0x304925 = [
    '5VMmNlD',
    'default',
    'defineProperty',
    '332bMVZAz',
    '1461920UnkUAs',
    '2141699bTXLba',
    '1ukTAGR',
    'findAll',
    '../../errors/AppError',
    'ERR_NO_RATING_FOUND',
    '4055238GHqkSu',
    '4205700bOOeRS',
    '__esModule',
    '18399XDHsCx',
    '15765710jTSPNJ',
    'destroy',
    '334162xybAIS'
  ];
  a504_0x34e5 = function () {
    return _0x304925;
  };
  return a504_0x34e5();
}
const Files_1 = __importDefault(require('../../models/Files')),
  AppError_1 = __importDefault(require(a504_0x3864da(0x68))),
  DeleteAllService = async _0xf2edcd => {
    const _0x267ca4 = a504_0x3864da;
    await Files_1[_0x267ca4(0x72)][_0x267ca4(0x67)]({
      where: { companyId: _0xf2edcd }
    });
    if (!Files_1['default'])
      throw new AppError_1[_0x267ca4(0x72)](_0x267ca4(0x69), 0x194);
    await Files_1['default'][_0x267ca4(0x6f)]({ where: {} });
  };
exports['default'] = DeleteAllService;
