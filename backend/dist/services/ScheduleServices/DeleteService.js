'use strict';
function a575_0x3d19(_0x24e13d, _0x127308) {
  const _0x1a3a52 = a575_0x1a3a();
  return (
    (a575_0x3d19 = function (_0x3d1973, _0x27e4ae) {
      _0x3d1973 = _0x3d1973 - 0x1d7;
      let _0x1d0098 = _0x1a3a52[_0x3d1973];
      return _0x1d0098;
    }),
    a575_0x3d19(_0x24e13d, _0x127308)
  );
}
const a575_0x5657d6 = a575_0x3d19;
function a575_0x1a3a() {
  const _0x3a735f = [
    '8244OZsRKw',
    '713916koepCL',
    '513910woPFUR',
    '__esModule',
    '__importDefault',
    '1170831ZiomMJ',
    '15925848CyMIXx',
    '807736OIgFmU',
    '728792ugutIE',
    '2JZihXx',
    '24gTMCsG',
    '../../errors/AppError',
    '9664TNXBmm',
    'ERR_NO_SCHEDULE_FOUND',
    'defineProperty',
    '20Nmppkj',
    'default',
    '165wvKnrS'
  ];
  a575_0x1a3a = function () {
    return _0x3a735f;
  };
  return a575_0x1a3a();
}
(function (_0x447fdb, _0x4c70a2) {
  const _0xc372c7 = a575_0x3d19,
    _0x26ce8f = _0x447fdb();
  while (!![]) {
    try {
      const _0x426cac =
        (-parseInt(_0xc372c7(0x1dd)) / 0x1) *
          (-parseInt(_0xc372c7(0x1de)) / 0x2) +
        parseInt(_0xc372c7(0x1da)) / 0x3 +
        (parseInt(_0xc372c7(0x1dc)) / 0x4) *
          (parseInt(_0xc372c7(0x1e4)) / 0x5) +
        (parseInt(_0xc372c7(0x1df)) / 0x6) *
          (parseInt(_0xc372c7(0x1e8)) / 0x7) +
        (parseInt(_0xc372c7(0x1e1)) / 0x8) *
          (-parseInt(_0xc372c7(0x1e7)) / 0x9) +
        (-parseInt(_0xc372c7(0x1d7)) / 0xa) *
          (-parseInt(_0xc372c7(0x1e6)) / 0xb) +
        -parseInt(_0xc372c7(0x1db)) / 0xc;
      if (_0x426cac === _0x4c70a2) break;
      else _0x26ce8f['push'](_0x26ce8f['shift']());
    } catch (_0x15c279) {
      _0x26ce8f['push'](_0x26ce8f['shift']());
    }
  }
})(a575_0x1a3a, 0xa40c4);
var __importDefault =
  (this && this[a575_0x5657d6(0x1d9)]) ||
  function (_0x4b968a) {
    return _0x4b968a && _0x4b968a['__esModule']
      ? _0x4b968a
      : { default: _0x4b968a };
  };
Object[a575_0x5657d6(0x1e3)](exports, a575_0x5657d6(0x1d8), { value: !![] });
const Schedule_1 = __importDefault(require('../../models/Schedule')),
  AppError_1 = __importDefault(require(a575_0x5657d6(0x1e0))),
  DeleteService = async (_0x16e163, _0x49d9a3) => {
    const _0x245de6 = a575_0x5657d6,
      _0x4f3259 = await Schedule_1[_0x245de6(0x1e5)]['findOne']({
        where: { id: _0x16e163, companyId: _0x49d9a3 }
      });
    if (!_0x4f3259)
      throw new AppError_1[_0x245de6(0x1e5)](_0x245de6(0x1e2), 0x194);
    await _0x4f3259['destroy']();
  };
exports[a575_0x5657d6(0x1e5)] = DeleteService;
