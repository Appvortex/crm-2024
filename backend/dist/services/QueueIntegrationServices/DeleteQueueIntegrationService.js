'use strict';
const a548_0x56f04b = a548_0x24bd;
(function (_0x454e60, _0x5d8366) {
  const _0x539365 = a548_0x24bd,
    _0x5bb8f0 = _0x454e60();
  while (!![]) {
    try {
      const _0x2aec37 =
        (parseInt(_0x539365(0x80)) / 0x1) * (parseInt(_0x539365(0x78)) / 0x2) +
        -parseInt(_0x539365(0x85)) / 0x3 +
        (-parseInt(_0x539365(0x7c)) / 0x4) * (parseInt(_0x539365(0x75)) / 0x5) +
        parseInt(_0x539365(0x82)) / 0x6 +
        (parseInt(_0x539365(0x7d)) / 0x7) * (-parseInt(_0x539365(0x79)) / 0x8) +
        parseInt(_0x539365(0x74)) / 0x9 +
        (parseInt(_0x539365(0x76)) / 0xa) * (-parseInt(_0x539365(0x77)) / 0xb);
      if (_0x2aec37 === _0x5d8366) break;
      else _0x5bb8f0['push'](_0x5bb8f0['shift']());
    } catch (_0x5610b6) {
      _0x5bb8f0['push'](_0x5bb8f0['shift']());
    }
  }
})(a548_0x2ab1, 0x6a744);
function a548_0x2ab1() {
  const _0x11d4bb = [
    '513232AClytz',
    '32TucenW',
    'destroy',
    'findOne',
    '64EFCANT',
    '829976REJlez',
    '__esModule',
    'default',
    '3EzNnSL',
    '../../models/QueueIntegrations',
    '4953726vtWuZz',
    '../../errors/AppError',
    'defineProperty',
    '558426CnghVT',
    '3046635zTzELd',
    '190075gerZCW',
    '1146470PGNmcU',
    '22PFSVkj'
  ];
  a548_0x2ab1 = function () {
    return _0x11d4bb;
  };
  return a548_0x2ab1();
}
function a548_0x24bd(_0x47c1ae, _0x2e64ce) {
  const _0x2ab19a = a548_0x2ab1();
  return (
    (a548_0x24bd = function (_0x24bd24, _0x452adb) {
      _0x24bd24 = _0x24bd24 - 0x74;
      let _0x598938 = _0x2ab19a[_0x24bd24];
      return _0x598938;
    }),
    a548_0x24bd(_0x47c1ae, _0x2e64ce)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x1141d7) {
    const _0x5cc4a0 = a548_0x24bd;
    return _0x1141d7 && _0x1141d7[_0x5cc4a0(0x7e)]
      ? _0x1141d7
      : { default: _0x1141d7 };
  };
Object[a548_0x56f04b(0x84)](exports, a548_0x56f04b(0x7e), { value: !![] });
const QueueIntegrations_1 = __importDefault(require(a548_0x56f04b(0x81))),
  AppError_1 = __importDefault(require(a548_0x56f04b(0x83))),
  DeleteQueueIntegrationService = async _0x45f546 => {
    const _0x34235c = a548_0x56f04b,
      _0x4e404a = await QueueIntegrations_1[_0x34235c(0x7f)][_0x34235c(0x7b)]({
        where: { id: _0x45f546 }
      });
    if (!_0x4e404a)
      throw new AppError_1['default']('ERR_NO_DIALOG_FOUND', 0x194);
    await _0x4e404a[_0x34235c(0x7a)]();
  };
exports[a548_0x56f04b(0x7f)] = DeleteQueueIntegrationService;
