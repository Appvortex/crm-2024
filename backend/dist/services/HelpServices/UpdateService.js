'use strict';
function a516_0x9d14() {
  const _0x47a748 = [
    '855330FuAyAI',
    '42fkkVrD',
    '536557JXgtsk',
    'defineProperty',
    '5145470MSjRKs',
    'update',
    '55056eiHbUI',
    'findByPk',
    '6563709vtWejK',
    '../../errors/AppError',
    '12mqluSD',
    'default',
    '1YurCUt',
    '722403gFSFjD',
    '__importDefault',
    '36cQMkBa',
    '__esModule',
    '1300698aGASId',
    '8QNRwyY'
  ];
  a516_0x9d14 = function () {
    return _0x47a748;
  };
  return a516_0x9d14();
}
const a516_0xd00d19 = a516_0x244e;
(function (_0x7f681b, _0x207d60) {
  const _0x9cc828 = a516_0x244e,
    _0x12b42b = _0x7f681b();
  while (!![]) {
    try {
      const _0x241cff =
        (parseInt(_0x9cc828(0x7f)) / 0x1) * (parseInt(_0x9cc828(0x84)) / 0x2) +
        (parseInt(_0x9cc828(0x7d)) / 0x3) * (parseInt(_0x9cc828(0x79)) / 0x4) +
        parseInt(_0x9cc828(0x86)) / 0x5 +
        (parseInt(_0x9cc828(0x74)) / 0x6) * (parseInt(_0x9cc828(0x75)) / 0x7) +
        (parseInt(_0x9cc828(0x85)) / 0x8) * (-parseInt(_0x9cc828(0x7b)) / 0x9) +
        -parseInt(_0x9cc828(0x77)) / 0xa +
        (parseInt(_0x9cc828(0x80)) / 0xb) * (parseInt(_0x9cc828(0x82)) / 0xc);
      if (_0x241cff === _0x207d60) break;
      else _0x12b42b['push'](_0x12b42b['shift']());
    } catch (_0x1e8a5b) {
      _0x12b42b['push'](_0x12b42b['shift']());
    }
  }
})(a516_0x9d14, 0x59677);
function a516_0x244e(_0x3d7f91, _0x237e49) {
  const _0x9d1497 = a516_0x9d14();
  return (
    (a516_0x244e = function (_0x244e9e, _0x1b6899) {
      _0x244e9e = _0x244e9e - 0x74;
      let _0x2dc6e0 = _0x9d1497[_0x244e9e];
      return _0x2dc6e0;
    }),
    a516_0x244e(_0x3d7f91, _0x237e49)
  );
}
var __importDefault =
  (this && this[a516_0xd00d19(0x81)]) ||
  function (_0x27a861) {
    const _0x4baa16 = a516_0xd00d19;
    return _0x27a861 && _0x27a861[_0x4baa16(0x83)]
      ? _0x27a861
      : { default: _0x27a861 };
  };
Object[a516_0xd00d19(0x76)](exports, a516_0xd00d19(0x83), { value: !![] });
const AppError_1 = __importDefault(require(a516_0xd00d19(0x7c))),
  Help_1 = __importDefault(require('../../models/Help')),
  UpdateService = async _0xef10f3 => {
    const _0x157d8d = a516_0xd00d19,
      { id: _0x11adf3 } = _0xef10f3,
      _0xc2d1ef = await Help_1[_0x157d8d(0x7e)][_0x157d8d(0x7a)](_0x11adf3);
    if (!_0xc2d1ef)
      throw new AppError_1[_0x157d8d(0x7e)]('ERR_NO_HELP_FOUND', 0x194);
    return await _0xc2d1ef[_0x157d8d(0x78)](_0xef10f3), _0xc2d1ef;
  };
exports[a516_0xd00d19(0x7e)] = UpdateService;
