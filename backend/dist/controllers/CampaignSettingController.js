'use strict';
const a10_0x23d037 = a10_0x49c8;
function a10_0x49c8(_0x194e08, _0x59e2aa) {
  const _0x557390 = a10_0x5573();
  return (
    (a10_0x49c8 = function (_0x49c8d9, _0x6cae46) {
      _0x49c8d9 = _0x49c8d9 - 0x17f;
      let _0x2619a4 = _0x557390[_0x49c8d9];
      return _0x2619a4;
    }),
    a10_0x49c8(_0x194e08, _0x59e2aa)
  );
}
(function (_0xb30797, _0x378442) {
  const _0x184162 = a10_0x49c8,
    _0x3af44c = _0xb30797();
  while (!![]) {
    try {
      const _0x28bb87 =
        (parseInt(_0x184162(0x187)) / 0x1) *
          (parseInt(_0x184162(0x18a)) / 0x2) +
        (-parseInt(_0x184162(0x186)) / 0x3) *
          (-parseInt(_0x184162(0x188)) / 0x4) +
        -parseInt(_0x184162(0x192)) / 0x5 +
        parseInt(_0x184162(0x194)) / 0x6 +
        (-parseInt(_0x184162(0x197)) / 0x7) *
          (-parseInt(_0x184162(0x18b)) / 0x8) +
        parseInt(_0x184162(0x193)) / 0x9 +
        (-parseInt(_0x184162(0x183)) / 0xa) *
          (parseInt(_0x184162(0x17f)) / 0xb);
      if (_0x28bb87 === _0x378442) break;
      else _0x3af44c['push'](_0x3af44c['shift']());
    } catch (_0x16bce1) {
      _0x3af44c['push'](_0x3af44c['shift']());
    }
  }
})(a10_0x5573, 0xa3052);
var __importDefault =
  (this && this[a10_0x23d037(0x181)]) ||
  function (_0xc242b6) {
    const _0x255432 = a10_0x23d037;
    return _0xc242b6 && _0xc242b6[_0x255432(0x189)]
      ? _0xc242b6
      : { default: _0xc242b6 };
  };
function a10_0x5573() {
  const _0x33192e = [
    '686938baZtoh',
    '184njLYVU',
    '../services/CampaignSettingServices/CreateService',
    'getIO',
    'body',
    'user',
    '../libs/socket',
    'store',
    '3172515jrvwYk',
    '8637579ziyUrX',
    '2057760gVutNz',
    '-campaignSettings',
    'default',
    '309617FKxEuL',
    '209nlxiNk',
    'index',
    '__importDefault',
    'company-',
    '1351860pGvqHa',
    'json',
    '../services/CampaignSettingServices/ListService',
    '164631AXyZuf',
    '1DUKdWS',
    '88PbmRcx',
    '__esModule'
  ];
  a10_0x5573 = function () {
    return _0x33192e;
  };
  return a10_0x5573();
}
Object['defineProperty'](exports, '__esModule', { value: !![] }),
  (exports['store'] = exports[a10_0x23d037(0x180)] = void 0x0);
const socket_1 = require(a10_0x23d037(0x190)),
  ListService_1 = __importDefault(require(a10_0x23d037(0x185))),
  CreateService_1 = __importDefault(require(a10_0x23d037(0x18c))),
  index = async (_0x551556, _0x137ee5) => {
    const _0x5e375c = a10_0x23d037,
      { companyId: _0x46b245 } = _0x551556[_0x5e375c(0x18f)],
      _0x2d6fc5 = await (0x0, ListService_1[_0x5e375c(0x196)])({
        companyId: _0x46b245
      });
    return _0x137ee5['json'](_0x2d6fc5);
  };
exports['index'] = index;
const store = async (_0x55ff6a, _0x3558a9) => {
  const _0x2865a9 = a10_0x23d037,
    { companyId: _0x2230a3 } = _0x55ff6a['user'],
    _0x31bf8a = _0x55ff6a[_0x2865a9(0x18e)],
    _0x499ff4 = await (0x0, CreateService_1['default'])(_0x31bf8a, _0x2230a3),
    _0x1eae6e = (0x0, socket_1[_0x2865a9(0x18d)])();
  return (
    _0x1eae6e['emit'](_0x2865a9(0x182) + _0x2230a3 + _0x2865a9(0x195), {
      action: 'create',
      record: _0x499ff4
    }),
    _0x3558a9['status'](0xc8)[_0x2865a9(0x184)](_0x499ff4)
  );
};
exports[a10_0x23d037(0x191)] = store;
