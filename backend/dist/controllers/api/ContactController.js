'use strict';
const a46_0x29f5ab = a46_0x3612;
(function (_0x3c3d0d, _0xa77e0) {
  const _0x1f7ca9 = a46_0x3612,
    _0x5e96c7 = _0x3c3d0d();
  while (!![]) {
    try {
      const _0x4532a2 =
        (parseInt(_0x1f7ca9(0xf2)) / 0x1) * (-parseInt(_0x1f7ca9(0xf0)) / 0x2) +
        -parseInt(_0x1f7ca9(0xeb)) / 0x3 +
        (parseInt(_0x1f7ca9(0xf4)) / 0x4) * (-parseInt(_0x1f7ca9(0xf6)) / 0x5) +
        -parseInt(_0x1f7ca9(0xf5)) / 0x6 +
        (parseInt(_0x1f7ca9(0xf1)) / 0x7) * (parseInt(_0x1f7ca9(0xed)) / 0x8) +
        (-parseInt(_0x1f7ca9(0xfa)) / 0x9) * (parseInt(_0x1f7ca9(0xfc)) / 0xa) +
        parseInt(_0x1f7ca9(0xf9)) / 0xb;
      if (_0x4532a2 === _0xa77e0) break;
      else _0x5e96c7['push'](_0x5e96c7['shift']());
    } catch (_0x555335) {
      _0x5e96c7['push'](_0x5e96c7['shift']());
    }
  }
})(a46_0x3178, 0x339a5);
var __importDefault =
  (this && this[a46_0x29f5ab(0xec)]) ||
  function (_0x4ee084) {
    const _0x59c47b = a46_0x29f5ab;
    return _0x4ee084 && _0x4ee084[_0x59c47b(0xfd)]
      ? _0x4ee084
      : { default: _0x4ee084 };
  };
Object[a46_0x29f5ab(0xff)](exports, a46_0x29f5ab(0xfd), { value: !![] }),
  (exports[a46_0x29f5ab(0xf7)] = exports['show'] = void 0x0);
const FindAllContactsServices_1 = __importDefault(require(a46_0x29f5ab(0xf3))),
  show = async (_0x3c66bb, _0x4aef8e) => {
    const _0x3fbf7a = a46_0x29f5ab,
      { companyId: _0x2ccc5a } = _0x3c66bb[_0x3fbf7a(0xf8)],
      _0x441e8d = await (0x0, FindAllContactsServices_1[_0x3fbf7a(0xef)])({
        companyId: _0x2ccc5a
      });
    return _0x4aef8e[_0x3fbf7a(0xfe)]({
      count: _0x441e8d['length'],
      contacts: _0x441e8d
    });
  };
function a46_0x3612(_0x3fc93c, _0x5d9e97) {
  const _0x31787c = a46_0x3178();
  return (
    (a46_0x3612 = function (_0x361208, _0x3e085d) {
      _0x361208 = _0x361208 - 0xeb;
      let _0x22f902 = _0x31787c[_0x361208];
      return _0x22f902;
    }),
    a46_0x3612(_0x3fc93c, _0x5d9e97)
  );
}
exports[a46_0x29f5ab(0xfb)] = show;
function a46_0x3178() {
  const _0x5d4b4e = [
    'length',
    'default',
    '630328YOGGym',
    '411278gQqXpi',
    '1PpaJze',
    '../../services/ContactServices/FindAllContactsServices',
    '48upEtTY',
    '16716bLUSJI',
    '158920lSAOqe',
    'count',
    'body',
    '14880998pXXVMW',
    '284571lLnnVs',
    'show',
    '130UoDOMn',
    '__esModule',
    'json',
    'defineProperty',
    '974454SGIFpF',
    '__importDefault',
    '40BbELJO'
  ];
  a46_0x3178 = function () {
    return _0x5d4b4e;
  };
  return a46_0x3178();
}
const count = async (_0x1484bf, _0x280f48) => {
  const _0x4453a5 = a46_0x29f5ab,
    { companyId: _0x330701 } = _0x1484bf[_0x4453a5(0xf8)],
    _0x27c961 = await (0x0, FindAllContactsServices_1[_0x4453a5(0xef)])({
      companyId: _0x330701
    });
  return _0x280f48[_0x4453a5(0xfe)]({ count: _0x27c961[_0x4453a5(0xee)] });
};
exports['count'] = count;
