'use strict';
function a646_0x31cb(_0xbee8b7, _0x268410) {
  const _0x1c9ad6 = a646_0x1c9a();
  return (
    (a646_0x31cb = function (_0x31cb39, _0x407f4e) {
      _0x31cb39 = _0x31cb39 - 0x1e2;
      let _0x354775 = _0x1c9ad6[_0x31cb39];
      return _0x354775;
    }),
    a646_0x31cb(_0xbee8b7, _0x268410)
  );
}
const a646_0x1a1649 = a646_0x31cb;
(function (_0x401a17, _0xf3d51) {
  const _0x4e8bc5 = a646_0x31cb,
    _0x52876b = _0x401a17();
  while (!![]) {
    try {
      const _0x4e8c3b =
        -parseInt(_0x4e8bc5(0x1f5)) / 0x1 +
        (-parseInt(_0x4e8bc5(0x1f2)) / 0x2) *
          (-parseInt(_0x4e8bc5(0x1f7)) / 0x3) +
        parseInt(_0x4e8bc5(0x1ef)) / 0x4 +
        parseInt(_0x4e8bc5(0x1e2)) / 0x5 +
        (parseInt(_0x4e8bc5(0x1e6)) / 0x6) *
          (-parseInt(_0x4e8bc5(0x1f0)) / 0x7) +
        parseInt(_0x4e8bc5(0x1e9)) / 0x8 +
        (-parseInt(_0x4e8bc5(0x1f4)) / 0x9) *
          (parseInt(_0x4e8bc5(0x1ee)) / 0xa);
      if (_0x4e8c3b === _0xf3d51) break;
      else _0x52876b['push'](_0x52876b['shift']());
    } catch (_0x1dd61d) {
      _0x52876b['push'](_0x52876b['shift']());
    }
  }
})(a646_0x1c9a, 0xe6dd7);
var __importDefault =
  (this && this[a646_0x1a1649(0x1e5)]) ||
  function (_0x599614) {
    const _0x1ac679 = a646_0x1a1649;
    return _0x599614 && _0x599614[_0x1ac679(0x1f8)]
      ? _0x599614
      : { default: _0x599614 };
  };
Object[a646_0x1a1649(0x1f6)](exports, a646_0x1a1649(0x1f8), { value: !![] });
const AppError_1 = __importDefault(require('../../errors/AppError')),
  GetDefaultWhatsApp_1 = __importDefault(require(a646_0x1a1649(0x1e8))),
  wbot_1 = require(a646_0x1a1649(0x1ea)),
  CheckContactNumber = async (_0x26a1b3, _0x137922) => {
    const _0x3f7d48 = a646_0x1a1649,
      _0x40291a = await (0x0, GetDefaultWhatsApp_1[_0x3f7d48(0x1eb)])(
        _0x137922
      ),
      _0xcb7930 = (0x0, wbot_1[_0x3f7d48(0x1ed)])(_0x40291a['id']),
      _0x2ae440 = _0x26a1b3[_0x3f7d48(0x1e4)]('@g.us');
    let _0x2e105c;
    if (_0x2ae440) {
      const _0x1c3428 = await _0xcb7930[_0x3f7d48(0x1e3)](_0x26a1b3);
      _0x2e105c = [{ jid: _0x1c3428['id'], exists: !![] }];
    } else
      _0x2e105c = await _0xcb7930[_0x3f7d48(0x1f9)](
        _0x26a1b3 + _0x3f7d48(0x1ec)
      );
    const _0x3d15b1 = _0x2e105c;
    if (!_0x3d15b1[0x0]?.[_0x3f7d48(0x1f1)])
      throw new AppError_1[_0x3f7d48(0x1eb)](
        'Este\x20número\x20não\x20está\x20cadastrado\x20no\x20whatsapp'
      );
    return _0x2ae440
      ? _0x26a1b3[_0x3f7d48(0x1e7)]('@')[0x0]
      : _0x3d15b1[0x0][_0x3f7d48(0x1f3)][_0x3f7d48(0x1e7)]('@')[0x0];
  };
exports[a646_0x1a1649(0x1eb)] = CheckContactNumber;
function a646_0x1c9a() {
  const _0x4386f2 = [
    '726358ygVchN',
    'jid',
    '9VEmbJg',
    '1398208LQwTmT',
    'defineProperty',
    '3FcXkMk',
    '__esModule',
    'onWhatsApp',
    '9436410sViUzO',
    'groupMetadata',
    'endsWith',
    '__importDefault',
    '12IBeese',
    'split',
    '../../helpers/GetDefaultWhatsApp',
    '7833032LwuyWS',
    '../../libs/wbot',
    'default',
    '@s.whatsapp.net',
    'getWbot',
    '5950660GRnRHE',
    '1273748NnDXQT',
    '2131955DMtoOn',
    'exists'
  ];
  a646_0x1c9a = function () {
    return _0x4386f2;
  };
  return a646_0x1c9a();
}
