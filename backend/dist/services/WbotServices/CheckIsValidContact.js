'use strict';
const a645_0x4e810c = a645_0x2f62;
(function (_0x2935c6, _0x2d70d5) {
  const _0x266dc2 = a645_0x2f62,
    _0x423288 = _0x2935c6();
  while (!![]) {
    try {
      const _0x19ae90 =
        (parseInt(_0x266dc2(0x14b)) / 0x1) *
          (parseInt(_0x266dc2(0x14c)) / 0x2) +
        (parseInt(_0x266dc2(0x14a)) / 0x3) *
          (parseInt(_0x266dc2(0x145)) / 0x4) +
        parseInt(_0x266dc2(0x150)) / 0x5 +
        parseInt(_0x266dc2(0x148)) / 0x6 +
        -parseInt(_0x266dc2(0x154)) / 0x7 +
        -parseInt(_0x266dc2(0x142)) / 0x8 +
        (-parseInt(_0x266dc2(0x151)) / 0x9) *
          (parseInt(_0x266dc2(0x156)) / 0xa);
      if (_0x19ae90 === _0x2d70d5) break;
      else _0x423288['push'](_0x423288['shift']());
    } catch (_0x502a0d) {
      _0x423288['push'](_0x423288['shift']());
    }
  }
})(a645_0x3ec4, 0x3dba1);
var __importDefault =
  (this && this[a645_0x4e810c(0x146)]) ||
  function (_0x3fe7ab) {
    const _0x53d062 = a645_0x4e810c;
    return _0x3fe7ab && _0x3fe7ab[_0x53d062(0x144)]
      ? _0x3fe7ab
      : { default: _0x3fe7ab };
  };
Object['defineProperty'](exports, a645_0x4e810c(0x144), { value: !![] });
function a645_0x2f62(_0x5c5eb1, _0x5da9b4) {
  const _0x3ec4d0 = a645_0x3ec4();
  return (
    (a645_0x2f62 = function (_0x2f6234, _0x415d25) {
      _0x2f6234 = _0x2f6234 - 0x142;
      let _0x28347c = _0x3ec4d0[_0x2f6234];
      return _0x28347c;
    }),
    a645_0x2f62(_0x5c5eb1, _0x5da9b4)
  );
}
const AppError_1 = __importDefault(require(a645_0x4e810c(0x149))),
  GetDefaultWhatsApp_1 = __importDefault(
    require('../../helpers/GetDefaultWhatsApp')
  ),
  wbot_1 = require(a645_0x4e810c(0x155)),
  CheckIsValidContact = async (_0x19b1be, _0x47636a) => {
    const _0x4c34e0 = a645_0x4e810c,
      _0x3cb82f = await (0x0, GetDefaultWhatsApp_1[_0x4c34e0(0x14f)])(
        _0x47636a
      ),
      _0x40dcc3 = (0x0, wbot_1[_0x4c34e0(0x157)])(_0x3cb82f['id']);
    try {
      const [_0x39c1ba] = await _0x40dcc3[_0x4c34e0(0x158)](
        _0x19b1be + _0x4c34e0(0x143)
      );
      if (!_0x39c1ba && !_0x39c1ba?.[_0x4c34e0(0x152)])
        throw new AppError_1[_0x4c34e0(0x14f)](_0x4c34e0(0x14e));
    } catch (_0x3087ae) {
      console['log'](_0x3087ae);
      if (_0x3087ae[_0x4c34e0(0x147)] === 'invalidNumber')
        throw new AppError_1[_0x4c34e0(0x14f)](_0x4c34e0(0x153));
      throw new AppError_1[_0x4c34e0(0x14f)](_0x4c34e0(0x14d));
    }
  };
exports['default'] = CheckIsValidContact;
function a645_0x3ec4() {
  const _0x210451 = [
    '2923794CPUxqW',
    '../../errors/AppError',
    '2181rYEDnU',
    '1499DOIAts',
    '2KfBBsc',
    'ERR_WAPP_CHECK_CONTACT',
    'invalidNumber',
    'default',
    '2230820DDluhN',
    '81fxarDa',
    'exists',
    'ERR_WAPP_INVALID_CONTACT',
    '2410660okMzpk',
    '../../libs/wbot',
    '387070FaGslM',
    'getWbot',
    'onWhatsApp',
    '991048YzSDjp',
    '@s.whatsapp.net',
    '__esModule',
    '740JHUHeE',
    '__importDefault',
    'message'
  ];
  a645_0x3ec4 = function () {
    return _0x210451;
  };
  return a645_0x3ec4();
}
