'use strict';
const a496_0x3e8487 = a496_0x4473;
(function (_0xe545a4, _0x3ff706) {
  const _0x5a9ff5 = a496_0x4473,
    _0x2eb197 = _0xe545a4();
  while (!![]) {
    try {
      const _0x17b0b9 =
        (-parseInt(_0x5a9ff5(0x199)) / 0x1) *
          (-parseInt(_0x5a9ff5(0x1a0)) / 0x2) +
        (parseInt(_0x5a9ff5(0x196)) / 0x3) *
          (parseInt(_0x5a9ff5(0x195)) / 0x4) +
        (-parseInt(_0x5a9ff5(0x190)) / 0x5) *
          (-parseInt(_0x5a9ff5(0x19c)) / 0x6) +
        (parseInt(_0x5a9ff5(0x19a)) / 0x7) *
          (parseInt(_0x5a9ff5(0x193)) / 0x8) +
        (parseInt(_0x5a9ff5(0x194)) / 0x9) *
          (-parseInt(_0x5a9ff5(0x19f)) / 0xa) +
        parseInt(_0x5a9ff5(0x197)) / 0xb +
        -parseInt(_0x5a9ff5(0x198)) / 0xc;
      if (_0x17b0b9 === _0x3ff706) break;
      else _0x2eb197['push'](_0x2eb197['shift']());
    } catch (_0x368f9a) {
      _0x2eb197['push'](_0x2eb197['shift']());
    }
  }
})(a496_0x47a9, 0x6c4fa);
var __importDefault =
  (this && this[a496_0x3e8487(0x1a2)]) ||
  function (_0x9c1b00) {
    const _0xc7f4d1 = a496_0x3e8487;
    return _0x9c1b00 && _0x9c1b00[_0xc7f4d1(0x19d)]
      ? _0x9c1b00
      : { default: _0x9c1b00 };
  };
function a496_0x4473(_0x61624b, _0x4102d5) {
  const _0x47a94b = a496_0x47a9();
  return (
    (a496_0x4473 = function (_0x447334, _0x6893e2) {
      _0x447334 = _0x447334 - 0x190;
      let _0x1e248d = _0x47a94b[_0x447334];
      return _0x1e248d;
    }),
    a496_0x4473(_0x61624b, _0x4102d5)
  );
}
function a496_0x47a9() {
  const _0x28d1ea = [
    '9484376pWAxFF',
    '17055444PdkCvN',
    '11581fEzkgA',
    '152159NjJWNc',
    'default',
    '4506gHbrKF',
    '__esModule',
    'defineProperty',
    '10RBsSOi',
    '82uGTEDF',
    'name',
    '__importDefault',
    '2235JkUlmX',
    'sequelize',
    'ASC',
    '40svNtHM',
    '5322978CwPgpZ',
    '337476dIomEP',
    '24lrrqfF'
  ];
  a496_0x47a9 = function () {
    return _0x28d1ea;
  };
  return a496_0x47a9();
}
Object[a496_0x3e8487(0x19e)](exports, a496_0x3e8487(0x19d), { value: !![] });
const sequelize_1 = require(a496_0x3e8487(0x191)),
  DialogChatBots_1 = __importDefault(require('../../models/DialogChatBots')),
  ListDialogChatBotsServices = async () => {
    const _0x400559 = a496_0x3e8487,
      _0x5a98c7 = await DialogChatBots_1[_0x400559(0x19b)]['findAll']({
        where: { queueId: { [sequelize_1['Op']['or']]: [null] } },
        order: [[_0x400559(0x1a1), _0x400559(0x192)]]
      });
    return _0x5a98c7;
  };
exports[a496_0x3e8487(0x19b)] = ListDialogChatBotsServices;
