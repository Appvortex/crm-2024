'use strict';
const a483_0x79853c = a483_0x17d4;
(function (_0x372790, _0x33b37f) {
  const _0x4c891f = a483_0x17d4,
    _0xe84b11 = _0x372790();
  while (!![]) {
    try {
      const _0x339bbb =
        -parseInt(_0x4c891f(0xac)) / 0x1 +
        parseInt(_0x4c891f(0xa5)) / 0x2 +
        parseInt(_0x4c891f(0xa8)) / 0x3 +
        parseInt(_0x4c891f(0xa9)) / 0x4 +
        (-parseInt(_0x4c891f(0xaf)) / 0x5) *
          (-parseInt(_0x4c891f(0xa3)) / 0x6) +
        parseInt(_0x4c891f(0xab)) / 0x7 +
        -parseInt(_0x4c891f(0xae)) / 0x8;
      if (_0x339bbb === _0x33b37f) break;
      else _0xe84b11['push'](_0xe84b11['shift']());
    } catch (_0x513e1e) {
      _0xe84b11['push'](_0xe84b11['shift']());
    }
  }
})(a483_0x42d2, 0xce900);
var __importDefault =
  (this && this[a483_0x79853c(0xaa)]) ||
  function (_0x13db02) {
    const _0x5bd97a = a483_0x79853c;
    return _0x13db02 && _0x13db02[_0x5bd97a(0xa6)]
      ? _0x13db02
      : { default: _0x13db02 };
  };
function a483_0x17d4(_0x1faef1, _0x44d993) {
  const _0x42d226 = a483_0x42d2();
  return (
    (a483_0x17d4 = function (_0x17d444, _0x51ad53) {
      _0x17d444 = _0x17d444 - 0xa3;
      let _0x476cb7 = _0x42d226[_0x17d444];
      return _0x476cb7;
    }),
    a483_0x17d4(_0x1faef1, _0x44d993)
  );
}
Object[a483_0x79853c(0xb0)](exports, a483_0x79853c(0xa6), { value: !![] });
function a483_0x42d2() {
  const _0x34b1af = [
    '2058952KXFUXw',
    '1234221GBAsSC',
    'default',
    '3316736loPdzC',
    '1565QPJvoe',
    'defineProperty',
    '9948wZJHIv',
    'findAll',
    '2596744aAyOQC',
    '__esModule',
    '../../models/ContactTag',
    '479514LhAWos',
    '894372KMBnNC',
    '__importDefault'
  ];
  a483_0x42d2 = function () {
    return _0x34b1af;
  };
  return a483_0x42d2();
}
const ContactTag_1 = __importDefault(require(a483_0x79853c(0xa7))),
  FindContactTags = async ({ contactId: _0x20f4a2 }) => {
    const _0x153d01 = a483_0x79853c;
    let _0x381d77 = { contactId: _0x20f4a2 };
    const _0x473acd = await ContactTag_1['default'][_0x153d01(0xa4)]({
      where: _0x381d77
    });
    return _0x473acd;
  };
exports[a483_0x79853c(0xad)] = FindContactTags;
