'use strict';
const a33_0x2fb635 = a33_0x312c;
function a33_0x4b24() {
  const _0x19e40a = [
    'status',
    '../services/SettingServices/GetSettingService',
    'emit',
    '1912308xAJlFT',
    'updateOne',
    'showOne',
    '5rVnCoG',
    'defineProperty',
    '__esModule',
    'user',
    'index',
    '4975784VZFdnm',
    'body',
    'getSetting',
    'update',
    'json',
    '3273844OBaXLJ',
    '9652902ODhIMc',
    'default',
    '../services/SettingServices/ListSettingsServiceOne',
    'admin',
    '../services/SettingServices/UpdateOneSettingService',
    'params',
    '3414825FunnIN',
    'getIO',
    '../services/SettingServices/UpdateSettingService',
    '../errors/AppError',
    '1365611rFhBTY',
    '16416984lNgWbs'
  ];
  a33_0x4b24 = function () {
    return _0x19e40a;
  };
  return a33_0x4b24();
}
(function (_0x18553f, _0x502f0d) {
  const _0x34b6cf = a33_0x312c,
    _0x1a3f62 = _0x18553f();
  while (!![]) {
    try {
      const _0x5cb2d1 =
        parseInt(_0x34b6cf(0xea)) / 0x1 +
        -parseInt(_0x34b6cf(0xdf)) / 0x2 +
        -parseInt(_0x34b6cf(0xe6)) / 0x3 +
        (-parseInt(_0x34b6cf(0xda)) / 0x4) *
          (-parseInt(_0x34b6cf(0xf2)) / 0x5) +
        parseInt(_0x34b6cf(0xef)) / 0x6 +
        -parseInt(_0x34b6cf(0xe0)) / 0x7 +
        parseInt(_0x34b6cf(0xeb)) / 0x8;
      if (_0x5cb2d1 === _0x502f0d) break;
      else _0x1a3f62['push'](_0x1a3f62['shift']());
    } catch (_0x3b9968) {
      _0x1a3f62['push'](_0x1a3f62['shift']());
    }
  }
})(a33_0x4b24, 0xc9b67);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x1947d6) {
    const _0x35f1bf = a33_0x312c;
    return _0x1947d6 && _0x1947d6[_0x35f1bf(0xf4)]
      ? _0x1947d6
      : { default: _0x1947d6 };
  };
Object[a33_0x2fb635(0xf3)](exports, '__esModule', { value: !![] }),
  (exports[a33_0x2fb635(0xf0)] =
    exports['getSetting'] =
    exports[a33_0x2fb635(0xdd)] =
    exports[a33_0x2fb635(0xf1)] =
    exports[a33_0x2fb635(0xd9)] =
      void 0x0);
const socket_1 = require('../libs/socket'),
  AppError_1 = __importDefault(require(a33_0x2fb635(0xe9))),
  UpdateSettingService_1 = __importDefault(require(a33_0x2fb635(0xe8))),
  ListSettingsService_1 = __importDefault(
    require('../services/SettingServices/ListSettingsService')
  ),
  ListSettingsServiceOne_1 = __importDefault(require(a33_0x2fb635(0xe2))),
  GetSettingService_1 = __importDefault(require(a33_0x2fb635(0xed))),
  UpdateOneSettingService_1 = __importDefault(require(a33_0x2fb635(0xe4))),
  index = async (_0x4b6ee1, _0x1f4da0) => {
    const _0x5eeb86 = a33_0x2fb635,
      { companyId: _0x16bbb3 } = _0x4b6ee1['user'],
      _0x54338a = await (0x0, ListSettingsService_1['default'])({
        companyId: _0x16bbb3
      });
    return _0x1f4da0[_0x5eeb86(0xec)](0xc8)[_0x5eeb86(0xde)](_0x54338a);
  };
exports['index'] = index;
const showOne = async (_0x9f521c, _0x4b0977) => {
  const _0x4ee301 = a33_0x2fb635,
    { companyId: _0x34dc23 } = _0x9f521c['user'],
    { settingKey: _0x30f826 } = _0x9f521c[_0x4ee301(0xe5)],
    _0x5816f9 = await (0x0, ListSettingsServiceOne_1[_0x4ee301(0xe1)])({
      companyId: _0x34dc23,
      key: _0x30f826
    });
  return _0x4b0977[_0x4ee301(0xec)](0xc8)['json'](_0x5816f9);
};
exports[a33_0x2fb635(0xf1)] = showOne;
const update = async (_0x2d4991, _0x1b3680) => {
  const _0x1643ac = a33_0x2fb635;
  if (_0x2d4991['user']['profile'] !== _0x1643ac(0xe3))
    throw new AppError_1['default']('ERR_NO_PERMISSION', 0x193);
  const { settingKey: _0x263890 } = _0x2d4991['params'],
    { value: _0x4dffd6 } = _0x2d4991[_0x1643ac(0xdb)],
    { companyId: _0x4cdd92 } = _0x2d4991[_0x1643ac(0xf5)],
    _0x13f5f4 = await (0x0, UpdateSettingService_1[_0x1643ac(0xe1)])({
      key: _0x263890,
      value: _0x4dffd6,
      companyId: _0x4cdd92
    }),
    _0x19d1f7 = (0x0, socket_1[_0x1643ac(0xe7)])();
  return (
    _0x19d1f7[_0x1643ac(0xee)]('company-' + _0x4cdd92 + '-settings', {
      action: _0x1643ac(0xdd),
      setting: _0x13f5f4
    }),
    _0x1b3680[_0x1643ac(0xec)](0xc8)[_0x1643ac(0xde)](_0x13f5f4)
  );
};
function a33_0x312c(_0x4bc71d, _0x159efe) {
  const _0x4b243d = a33_0x4b24();
  return (
    (a33_0x312c = function (_0x312cbe, _0x380123) {
      _0x312cbe = _0x312cbe - 0xd9;
      let _0x1cfa2a = _0x4b243d[_0x312cbe];
      return _0x1cfa2a;
    }),
    a33_0x312c(_0x4bc71d, _0x159efe)
  );
}
exports[a33_0x2fb635(0xdd)] = update;
const getSetting = async (_0x522ba, _0x2e7688) => {
  const _0x3e39a8 = a33_0x2fb635,
    { settingKey: _0x227bee } = _0x522ba['params'],
    _0x386884 = await (0x0, GetSettingService_1[_0x3e39a8(0xe1)])({
      key: _0x227bee
    });
  return _0x2e7688[_0x3e39a8(0xec)](0xc8)['json'](_0x386884);
};
exports[a33_0x2fb635(0xdc)] = getSetting;
const updateOne = async (_0x2814fa, _0x3018f9) => {
  const _0x421b31 = a33_0x2fb635,
    { settingKey: _0xb2d60e } = _0x2814fa['params'],
    { value: _0x37b493 } = _0x2814fa[_0x421b31(0xdb)],
    _0x55fb9e = await (0x0, UpdateOneSettingService_1[_0x421b31(0xe1)])({
      key: _0xb2d60e,
      value: _0x37b493
    });
  return _0x3018f9[_0x421b31(0xec)](0xc8)[_0x421b31(0xde)](_0x55fb9e);
};
exports[a33_0x2fb635(0xf0)] = updateOne;
