'use strict';
const a633_0x54ff7c = a633_0x2c61;
(function (_0x8c92a9, _0x5cfb1f) {
  const _0x4af32e = a633_0x2c61,
    _0x5c2fb9 = _0x8c92a9();
  while (!![]) {
    try {
      const _0x2bb2be =
        (parseInt(_0x4af32e(0x11a)) / 0x1) *
          (-parseInt(_0x4af32e(0x116)) / 0x2) +
        (parseInt(_0x4af32e(0x125)) / 0x3) *
          (-parseInt(_0x4af32e(0x11f)) / 0x4) +
        parseInt(_0x4af32e(0x11b)) / 0x5 +
        -parseInt(_0x4af32e(0x124)) / 0x6 +
        (-parseInt(_0x4af32e(0x113)) / 0x7) *
          (-parseInt(_0x4af32e(0x121)) / 0x8) +
        parseInt(_0x4af32e(0x115)) / 0x9 +
        (-parseInt(_0x4af32e(0x122)) / 0xa) *
          (-parseInt(_0x4af32e(0x114)) / 0xb);
      if (_0x2bb2be === _0x5cfb1f) break;
      else _0x5c2fb9['push'](_0x5c2fb9['shift']());
    } catch (_0x386799) {
      _0x5c2fb9['push'](_0x5c2fb9['shift']());
    }
  }
})(a633_0x5340, 0x22f73);
var __importDefault =
  (this && this[a633_0x54ff7c(0x11e)]) ||
  function (_0x2b4783) {
    return _0x2b4783 && _0x2b4783['__esModule']
      ? _0x2b4783
      : { default: _0x2b4783 };
  };
function a633_0x2c61(_0x47f4df, _0x3f3928) {
  const _0x5340b3 = a633_0x5340();
  return (
    (a633_0x2c61 = function (_0x2c611d, _0x1f43e5) {
      _0x2c611d = _0x2c611d - 0x112;
      let _0x5c22a1 = _0x5340b3[_0x2c611d];
      return _0x5c22a1;
    }),
    a633_0x2c61(_0x47f4df, _0x3f3928)
  );
}
function a633_0x5340() {
  const _0xba5fe6 = [
    '__esModule',
    '460230DafvvK',
    '3AcExFS',
    'literal',
    'defineProperty',
    '336UbmjZc',
    '154MFqGmt',
    '669510NgNybX',
    '2UeCAXZ',
    '../../errors/AppError',
    'sequelize',
    'findOne',
    '46885ZtxkrV',
    '1045840dYqgKa',
    'Sequelize',
    'random()',
    '__importDefault',
    '1114716Gwkkre',
    'default',
    '23824foLEsC',
    '84990KneFCy'
  ];
  a633_0x5340 = function () {
    return _0xba5fe6;
  };
  return a633_0x5340();
}
Object[a633_0x54ff7c(0x112)](exports, a633_0x54ff7c(0x123), { value: !![] });
const sequelize_1 = require(a633_0x54ff7c(0x118)),
  AppError_1 = __importDefault(require(a633_0x54ff7c(0x117))),
  UserQueue_1 = __importDefault(require('../../models/UserQueue')),
  ListUserQueueServices = async _0x135d87 => {
    const _0x4397e3 = a633_0x54ff7c,
      _0x3da0ed = await UserQueue_1[_0x4397e3(0x120)][_0x4397e3(0x119)]({
        where: { queueId: { [sequelize_1['Op']['or']]: [_0x135d87] } },
        order: sequelize_1[_0x4397e3(0x11c)][_0x4397e3(0x126)](_0x4397e3(0x11d))
      });
    if (!_0x3da0ed)
      throw new AppError_1[_0x4397e3(0x120)](
        'ERR_NOT_FOUND_USER_IN_QUEUE',
        0x194
      );
    return _0x3da0ed;
  };
exports[a633_0x54ff7c(0x120)] = ListUserQueueServices;
