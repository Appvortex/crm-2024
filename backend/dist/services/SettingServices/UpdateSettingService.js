'use strict';
const a594_0x4045d3 = a594_0x1e84;
(function (_0x3fda6e, _0x25a989) {
  const _0x13d087 = a594_0x1e84,
    _0x599c44 = _0x3fda6e();
  while (!![]) {
    try {
      const _0x278787 =
        (-parseInt(_0x13d087(0x191)) / 0x1) *
          (-parseInt(_0x13d087(0x1a1)) / 0x2) +
        parseInt(_0x13d087(0x19b)) / 0x3 +
        (parseInt(_0x13d087(0x197)) / 0x4) *
          (-parseInt(_0x13d087(0x192)) / 0x5) +
        (-parseInt(_0x13d087(0x1a0)) / 0x6) *
          (parseInt(_0x13d087(0x19a)) / 0x7) +
        parseInt(_0x13d087(0x198)) / 0x8 +
        -parseInt(_0x13d087(0x196)) / 0x9 +
        parseInt(_0x13d087(0x194)) / 0xa;
      if (_0x278787 === _0x25a989) break;
      else _0x599c44['push'](_0x599c44['shift']());
    } catch (_0x42b726) {
      _0x599c44['push'](_0x599c44['shift']());
    }
  }
})(a594_0x4389, 0xb6459);
var __importDefault =
  (this && this[a594_0x4045d3(0x19c)]) ||
  function (_0x32ba82) {
    const _0x44cbc3 = a594_0x4045d3;
    return _0x32ba82 && _0x32ba82[_0x44cbc3(0x19d)]
      ? _0x32ba82
      : { default: _0x32ba82 };
  };
function a594_0x4389() {
  const _0x457d50 = [
    'defineProperty',
    '405293JoMdED',
    '1745970vXmxVQ',
    '__importDefault',
    '__esModule',
    'default',
    'No\x20es\x20posible\x20consultar\x20registros\x20de\x20otra\x20empresa.',
    '102vFzcTU',
    '22IZtsCw',
    '60385aUJJxX',
    '876625zrdRoX',
    'update',
    '11643910lsMRef',
    'companyId',
    '10179567ZwEalj',
    '12FqCimV',
    '7818320KmyVxa'
  ];
  a594_0x4389 = function () {
    return _0x457d50;
  };
  return a594_0x4389();
}
function a594_0x1e84(_0x283e1f, _0x266158) {
  const _0x4389e9 = a594_0x4389();
  return (
    (a594_0x1e84 = function (_0x1e84e1, _0xf8731b) {
      _0x1e84e1 = _0x1e84e1 - 0x191;
      let _0x1615d9 = _0x4389e9[_0x1e84e1];
      return _0x1615d9;
    }),
    a594_0x1e84(_0x283e1f, _0x266158)
  );
}
Object[a594_0x4045d3(0x199)](exports, a594_0x4045d3(0x19d), { value: !![] });
const AppError_1 = __importDefault(require('../../errors/AppError')),
  Setting_1 = __importDefault(require('../../models/Setting')),
  UpdateSettingService = async ({
    key: _0x48508d,
    value: _0x525b9a,
    companyId: _0x15d658
  }) => {
    const _0x484e55 = a594_0x4045d3,
      [_0x7b2152] = await Setting_1['default']['findOrCreate']({
        where: { key: _0x48508d, companyId: _0x15d658 },
        defaults: { key: _0x48508d, value: _0x525b9a, companyId: _0x15d658 }
      });
    if (_0x7b2152 != null && _0x7b2152?.[_0x484e55(0x195)] !== _0x15d658)
      throw new AppError_1[_0x484e55(0x19e)](_0x484e55(0x19f));
    if (!_0x7b2152)
      throw new AppError_1[_0x484e55(0x19e)]('ERR_NO_SETTING_FOUND', 0x194);
    return await _0x7b2152[_0x484e55(0x193)]({ value: _0x525b9a }), _0x7b2152;
  };
exports[a594_0x4045d3(0x19e)] = UpdateSettingService;
