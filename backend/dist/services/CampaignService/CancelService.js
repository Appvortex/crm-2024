'use strict';
const a420_0x585b86 = a420_0x3f71;
(function (_0x50495c, _0x4f1374) {
  const _0xc50d4f = a420_0x3f71,
    _0x54ac9e = _0x50495c();
  while (!![]) {
    try {
      const _0x468931 =
        parseInt(_0xc50d4f(0xa6)) / 0x1 +
        (parseInt(_0xc50d4f(0xaa)) / 0x2) * (-parseInt(_0xc50d4f(0xb0)) / 0x3) +
        (-parseInt(_0xc50d4f(0xa0)) / 0x4) * (parseInt(_0xc50d4f(0xb1)) / 0x5) +
        -parseInt(_0xc50d4f(0xa3)) / 0x6 +
        -parseInt(_0xc50d4f(0xa4)) / 0x7 +
        (parseInt(_0xc50d4f(0x9f)) / 0x8) * (parseInt(_0xc50d4f(0xac)) / 0x9) +
        parseInt(_0xc50d4f(0xaf)) / 0xa;
      if (_0x468931 === _0x4f1374) break;
      else _0x54ac9e['push'](_0x54ac9e['shift']());
    } catch (_0x3f00d2) {
      _0x54ac9e['push'](_0x54ac9e['shift']());
    }
  }
})(a420_0x155c, 0x390ef);
function a420_0x3f71(_0x56ec2d, _0x383f8f) {
  const _0x155ca2 = a420_0x155c();
  return (
    (a420_0x3f71 = function (_0x3f713e, _0x3a0c97) {
      _0x3f713e = _0x3f713e - 0x9e;
      let _0x14a2de = _0x155ca2[_0x3f713e];
      return _0x14a2de;
    }),
    a420_0x3f71(_0x56ec2d, _0x383f8f)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x3c42f7) {
    const _0x1c502d = a420_0x3f71;
    return _0x3c42f7 && _0x3c42f7[_0x1c502d(0xad)]
      ? _0x3c42f7
      : { default: _0x3c42f7 };
  };
Object[a420_0x585b86(0xa9)](exports, a420_0x585b86(0xad), { value: !![] }),
  (exports[a420_0x585b86(0xae)] = void 0x0);
function a420_0x155c() {
  const _0x43c6ec = [
    'defineProperty',
    '135988lZsxDP',
    'all',
    '9AZREgY',
    '__esModule',
    'CancelService',
    '5783880GgUXsZ',
    '12mQBqms',
    '559985pdaztO',
    'push',
    '../../models/CampaignShipping',
    '../../models/Campaign',
    'not',
    '423560CACbnI',
    '8LQqIhj',
    'CANCELADA',
    'campaignQueue',
    '434124vhRTgR',
    '2011289okdopX',
    'sequelize',
    '458029BUNXbM',
    'default',
    'update'
  ];
  a420_0x155c = function () {
    return _0x43c6ec;
  };
  return a420_0x155c();
}
const sequelize_1 = require(a420_0x585b86(0xa5)),
  Campaign_1 = __importDefault(require(a420_0x585b86(0xb4))),
  CampaignShipping_1 = __importDefault(require(a420_0x585b86(0xb3))),
  queues_1 = require('../../queues');
async function CancelService(_0x26c177) {
  const _0x1e536a = a420_0x585b86,
    _0x38ff27 = await Campaign_1[_0x1e536a(0xa7)]['findByPk'](_0x26c177);
  await _0x38ff27[_0x1e536a(0xa8)]({ status: _0x1e536a(0xa1) });
  const _0x40ceb3 = await CampaignShipping_1[_0x1e536a(0xa7)]['findAll']({
      where: {
        campaignId: _0x38ff27['id'],
        jobId: { [sequelize_1['Op'][_0x1e536a(0x9e)]]: null },
        deliveredAt: null
      }
    }),
    _0x4df2e1 = [];
  for (let _0x59cb63 of _0x40ceb3) {
    const _0x4be6b7 = await queues_1[_0x1e536a(0xa2)]['getJob'](
      +_0x59cb63['jobId']
    );
    _0x4df2e1[_0x1e536a(0xb2)](_0x4be6b7['remove']());
  }
  await Promise[_0x1e536a(0xab)](_0x4df2e1);
}
exports[a420_0x585b86(0xae)] = CancelService;
