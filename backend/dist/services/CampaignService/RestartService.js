'use strict';
function a426_0x2e86(_0x2a86e6, _0x282c8f) {
  const _0x3f6b01 = a426_0x3f6b();
  return (
    (a426_0x2e86 = function (_0x2e8631, _0x3d0568) {
      _0x2e8631 = _0x2e8631 - 0xed;
      let _0x43ce3e = _0x3f6b01[_0x2e8631];
      return _0x43ce3e;
    }),
    a426_0x2e86(_0x2a86e6, _0x282c8f)
  );
}
const a426_0x307a96 = a426_0x2e86;
(function (_0x30ec03, _0x453be5) {
  const _0x53e574 = a426_0x2e86,
    _0x3a1b1f = _0x30ec03();
  while (!![]) {
    try {
      const _0x18a5bc =
        -parseInt(_0x53e574(0xed)) / 0x1 +
        parseInt(_0x53e574(0xf3)) / 0x2 +
        parseInt(_0x53e574(0xff)) / 0x3 +
        (-parseInt(_0x53e574(0xfd)) / 0x4) * (parseInt(_0x53e574(0xfe)) / 0x5) +
        (parseInt(_0x53e574(0xf8)) / 0x6) * (parseInt(_0x53e574(0xee)) / 0x7) +
        parseInt(_0x53e574(0xf6)) / 0x8 +
        parseInt(_0x53e574(0xf2)) / 0x9;
      if (_0x18a5bc === _0x453be5) break;
      else _0x3a1b1f['push'](_0x3a1b1f['shift']());
    } catch (_0x25c91c) {
      _0x3a1b1f['push'](_0x3a1b1f['shift']());
    }
  }
})(a426_0x3f6b, 0x58f5e);
function a426_0x3f6b() {
  const _0x4e99fd = [
    '../../models/Campaign',
    '184057qDXePn',
    '201866prGJrl',
    '__importDefault',
    '../../queues',
    'update',
    '1221489TeOppV',
    '978446odMzGl',
    'defineProperty',
    'EM_ANDAMENTO',
    '3356080xmoyac',
    '__esModule',
    '6nBllAi',
    'default',
    'ProcessCampaign',
    'RestartService',
    'campaignQueue',
    '124ZLlpQP',
    '93405JLHXeM',
    '162774EJcLUg'
  ];
  a426_0x3f6b = function () {
    return _0x4e99fd;
  };
  return a426_0x3f6b();
}
var __importDefault =
  (this && this[a426_0x307a96(0xef)]) ||
  function (_0x583b4e) {
    const _0x2add34 = a426_0x307a96;
    return _0x583b4e && _0x583b4e[_0x2add34(0xf7)]
      ? _0x583b4e
      : { default: _0x583b4e };
  };
Object[a426_0x307a96(0xf4)](exports, a426_0x307a96(0xf7), { value: !![] }),
  (exports[a426_0x307a96(0xfb)] = void 0x0);
const Campaign_1 = __importDefault(require(a426_0x307a96(0x100))),
  queues_1 = require(a426_0x307a96(0xf0));
async function RestartService(_0x19b95b) {
  const _0x5a0112 = a426_0x307a96,
    _0x40c326 = await Campaign_1[_0x5a0112(0xf9)]['findByPk'](_0x19b95b);
  await _0x40c326[_0x5a0112(0xf1)]({ status: _0x5a0112(0xf5) }),
    await queues_1[_0x5a0112(0xfc)]['add'](_0x5a0112(0xfa), {
      id: _0x40c326['id'],
      delay: 0xbb8
    });
}
exports[a426_0x307a96(0xfb)] = RestartService;
