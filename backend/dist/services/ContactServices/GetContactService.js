'use strict';
function a484_0xb230(_0x486257, _0x4d7d02) {
  const _0x26cdd0 = a484_0x26cd();
  return (
    (a484_0xb230 = function (_0xb23068, _0x2a6156) {
      _0xb23068 = _0xb23068 - 0x7e;
      let _0x1984c0 = _0x26cdd0[_0xb23068];
      return _0x1984c0;
    }),
    a484_0xb230(_0x486257, _0x4d7d02)
  );
}
const a484_0x1fdcce = a484_0xb230;
(function (_0x54ce16, _0xf9a0b2) {
  const _0x2e49b7 = a484_0xb230,
    _0x324633 = _0x54ce16();
  while (!![]) {
    try {
      const _0x45a3cc =
        -parseInt(_0x2e49b7(0x88)) / 0x1 +
        (parseInt(_0x2e49b7(0x89)) / 0x2) * (-parseInt(_0x2e49b7(0x8f)) / 0x3) +
        (parseInt(_0x2e49b7(0x7f)) / 0x4) * (-parseInt(_0x2e49b7(0x87)) / 0x5) +
        (parseInt(_0x2e49b7(0x8c)) / 0x6) * (parseInt(_0x2e49b7(0x83)) / 0x7) +
        (-parseInt(_0x2e49b7(0x8b)) / 0x8) *
          (-parseInt(_0x2e49b7(0x90)) / 0x9) +
        (-parseInt(_0x2e49b7(0x86)) / 0xa) *
          (-parseInt(_0x2e49b7(0x80)) / 0xb) +
        -parseInt(_0x2e49b7(0x8e)) / 0xc;
      if (_0x45a3cc === _0xf9a0b2) break;
      else _0x324633['push'](_0x324633['shift']());
    } catch (_0x55d0e2) {
      _0x324633['push'](_0x324633['shift']());
    }
  }
})(a484_0x26cd, 0x954d1);
function a484_0x26cd() {
  const _0x1d1850 = [
    '15230jIwtuq',
    '93635KupDbA',
    '310419kNaLsH',
    '1015838EOxMQP',
    '../../errors/AppError',
    '16jnXGQe',
    '26364UAeKgJ',
    'CONTACT_NOT_FIND',
    '16898256Gxivgr',
    '3BKEJNb',
    '5323167AxcvLn',
    '__importDefault',
    '12xjaOOk',
    '7568UEBCYx',
    'defineProperty',
    'findOne',
    '1057XsNCLT',
    'default',
    '__esModule'
  ];
  a484_0x26cd = function () {
    return _0x1d1850;
  };
  return a484_0x26cd();
}
var __importDefault =
  (this && this[a484_0x1fdcce(0x7e)]) ||
  function (_0x431263) {
    const _0x78b62f = a484_0x1fdcce;
    return _0x431263 && _0x431263[_0x78b62f(0x85)]
      ? _0x431263
      : { default: _0x431263 };
  };
Object[a484_0x1fdcce(0x81)](exports, a484_0x1fdcce(0x85), { value: !![] });
const AppError_1 = __importDefault(require(a484_0x1fdcce(0x8a))),
  Contact_1 = __importDefault(require('../../models/Contact')),
  CreateContactService_1 = __importDefault(require('./CreateContactService')),
  GetContactService = async ({
    name: _0x5e6a55,
    number: _0xe824e1,
    companyId: _0x5304ed
  }) => {
    const _0xc95d28 = a484_0x1fdcce,
      _0x2b1084 = await Contact_1[_0xc95d28(0x84)][_0xc95d28(0x82)]({
        where: { number: _0xe824e1, companyId: _0x5304ed }
      });
    if (!_0x2b1084) {
      const _0x96f4a0 = await (0x0, CreateContactService_1[_0xc95d28(0x84)])({
        name: _0x5e6a55,
        number: _0xe824e1,
        companyId: _0x5304ed
      });
      if (_0x96f4a0 == null) throw new AppError_1['default'](_0xc95d28(0x8d));
      else return _0x96f4a0;
    }
    return _0x2b1084;
  };
exports[a484_0x1fdcce(0x84)] = GetContactService;
