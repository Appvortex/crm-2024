'use strict';
const a517_0x1289f1 = a517_0x1e68;
(function (_0x552527, _0x5d97a1) {
  const _0x408e1b = a517_0x1e68,
    _0x3319bf = _0x552527();
  while (!![]) {
    try {
      const _0x4ff346 =
        -parseInt(_0x408e1b(0x1f0)) / 0x1 +
        -parseInt(_0x408e1b(0x1f9)) / 0x2 +
        parseInt(_0x408e1b(0x1f4)) / 0x3 +
        (parseInt(_0x408e1b(0x1ee)) / 0x4) *
          (-parseInt(_0x408e1b(0x1ec)) / 0x5) +
        (-parseInt(_0x408e1b(0x1f1)) / 0x6) *
          (parseInt(_0x408e1b(0x1f3)) / 0x7) +
        -parseInt(_0x408e1b(0x1f2)) / 0x8 +
        (-parseInt(_0x408e1b(0x1fa)) / 0x9) *
          (-parseInt(_0x408e1b(0x1ed)) / 0xa);
      if (_0x4ff346 === _0x5d97a1) break;
      else _0x3319bf['push'](_0x3319bf['shift']());
    } catch (_0x3bfcb4) {
      _0x3319bf['push'](_0x3319bf['shift']());
    }
  }
})(a517_0x43f0, 0x58865);
function a517_0x43f0() {
  const _0x1bf7a1 = [
    '483309krSfHp',
    '__esModule',
    '10bmasra',
    '460OCCNYS',
    '982832YyyKUt',
    '__importDefault',
    '586114hAvdXC',
    '1088538VuOLem',
    '5672184ugrRJZ',
    '21VAAFHa',
    '2060847prcdOK',
    'default',
    'update',
    '../../errors/AppError',
    'defineProperty',
    '927552SzHBqy'
  ];
  a517_0x43f0 = function () {
    return _0x1bf7a1;
  };
  return a517_0x43f0();
}
var __importDefault =
  (this && this[a517_0x1289f1(0x1ef)]) ||
  function (_0xc3742) {
    return _0xc3742 && _0xc3742['__esModule']
      ? _0xc3742
      : { default: _0xc3742 };
  };
function a517_0x1e68(_0x1ea109, _0x383ebd) {
  const _0x43f0f5 = a517_0x43f0();
  return (
    (a517_0x1e68 = function (_0x1e68da, _0x34bd51) {
      _0x1e68da = _0x1e68da - 0x1ec;
      let _0x3dfcd8 = _0x43f0f5[_0x1e68da];
      return _0x3dfcd8;
    }),
    a517_0x1e68(_0x1ea109, _0x383ebd)
  );
}
Object[a517_0x1289f1(0x1f8)](exports, a517_0x1289f1(0x1fb), { value: !![] });
const AppError_1 = __importDefault(require(a517_0x1289f1(0x1f7))),
  Integrations_1 = __importDefault(require('../../models/Integrations')),
  UpdateIntegrationsService = async ({
    integration: _0x1135ba,
    companyId: _0x454d1a,
    value: _0x4b8fcc
  }) => {
    const _0x2c1ca7 = a517_0x1289f1,
      _0x10a07b = await Integrations_1[_0x2c1ca7(0x1f5)]['findOne']({
        where: { name: _0x1135ba, companyId: _0x454d1a }
      });
    if (!_0x10a07b)
      throw new AppError_1[_0x2c1ca7(0x1f5)](
        'ERR_NO_INTEGRATIONS_FOUND',
        0x194
      );
    return (
      await _0x10a07b[_0x2c1ca7(0x1f6)]({
        token: _0x4b8fcc,
        where: { name: _0x1135ba, companyId: _0x454d1a }
      }),
      _0x10a07b
    );
  };
exports[a517_0x1289f1(0x1f5)] = UpdateIntegrationsService;
