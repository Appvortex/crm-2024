'use strict';
const a431_0x5ab71a = a431_0x1429;
function a431_0x1429(_0x40e336, _0x250b02) {
  const _0x2e913d = a431_0x2e91();
  return (
    (a431_0x1429 = function (_0x1429ef, _0x331cad) {
      _0x1429ef = _0x1429ef - 0x1a4;
      let _0x58e0d3 = _0x2e913d[_0x1429ef];
      return _0x58e0d3;
    }),
    a431_0x1429(_0x40e336, _0x250b02)
  );
}
(function (_0x35140b, _0x36e0e8) {
  const _0x2ea841 = a431_0x1429,
    _0x35e75e = _0x35140b();
  while (!![]) {
    try {
      const _0x544df3 =
        -parseInt(_0x2ea841(0x1b3)) / 0x1 +
        -parseInt(_0x2ea841(0x1b2)) / 0x2 +
        -parseInt(_0x2ea841(0x1a8)) / 0x3 +
        (-parseInt(_0x2ea841(0x1ab)) / 0x4) *
          (-parseInt(_0x2ea841(0x1ad)) / 0x5) +
        parseInt(_0x2ea841(0x1b0)) / 0x6 +
        (parseInt(_0x2ea841(0x1aa)) / 0x7) *
          (parseInt(_0x2ea841(0x1ac)) / 0x8) +
        (-parseInt(_0x2ea841(0x1ae)) / 0x9) *
          (-parseInt(_0x2ea841(0x1a7)) / 0xa);
      if (_0x544df3 === _0x36e0e8) break;
      else _0x35e75e['push'](_0x35e75e['shift']());
    } catch (_0x8e537e) {
      _0x35e75e['push'](_0x35e75e['shift']());
    }
  }
})(a431_0x2e91, 0x82cb1);
function a431_0x2e91() {
  const _0x1ff1be = [
    'update',
    '183428VHnEkl',
    '1420504zqCFJf',
    '16CfejzC',
    '5JhKsMq',
    '27aeXBtk',
    'ERR_NO_CAMPAIGN_FOUND',
    '1768782BNyKcY',
    '__esModule',
    '599804RgFnxk',
    '250901wPBGUL',
    '../../errors/AppError',
    'defineProperty',
    'findByPk',
    'default',
    '__importDefault',
    '3033670RBFbMR',
    '1577700FqptKd'
  ];
  a431_0x2e91 = function () {
    return _0x1ff1be;
  };
  return a431_0x2e91();
}
var __importDefault =
  (this && this[a431_0x5ab71a(0x1a6)]) ||
  function (_0x210509) {
    const _0x2ac519 = a431_0x5ab71a;
    return _0x210509 && _0x210509[_0x2ac519(0x1b1)]
      ? _0x210509
      : { default: _0x210509 };
  };
Object[a431_0x5ab71a(0x1b5)](exports, a431_0x5ab71a(0x1b1), { value: !![] });
const AppError_1 = __importDefault(require(a431_0x5ab71a(0x1b4))),
  CampaignSetting_1 = __importDefault(require('../../models/CampaignSetting')),
  UpdateServiceCampaignSettings = async _0x318703 => {
    const _0x5f2400 = a431_0x5ab71a,
      { id: _0xe8f1aa } = _0x318703,
      _0x485575 =
        await CampaignSetting_1['default'][_0x5f2400(0x1a4)](_0xe8f1aa);
    if (!_0x485575) throw new AppError_1['default'](_0x5f2400(0x1af), 0x194);
    return await _0x485575[_0x5f2400(0x1a9)](_0x318703), _0x485575;
  };
exports[a431_0x5ab71a(0x1a5)] = UpdateServiceCampaignSettings;
