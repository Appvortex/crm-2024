'use strict';
const a476_0x56d3e7 = a476_0x44d1;
function a476_0x44d1(_0x4c8847, _0x1b577d) {
  const _0x8fed3d = a476_0x8fed();
  return (
    (a476_0x44d1 = function (_0x44d1d6, _0x15b2bc) {
      _0x44d1d6 = _0x44d1d6 - 0xab;
      let _0x3bf6e4 = _0x8fed3d[_0x44d1d6];
      return _0x3bf6e4;
    }),
    a476_0x44d1(_0x4c8847, _0x1b577d)
  );
}
function a476_0x8fed() {
  const _0x29cad0 = [
    'default',
    '3025812ysABdY',
    'findByPk',
    '__esModule',
    '5CMWoWF',
    '../../models/ContactList',
    'defineProperty',
    '267YeXfhX',
    '77aedpyK',
    '__importDefault',
    '556988LbYEeU',
    '207352ffFCBX',
    '56276uliore',
    '1217274vmzcVp',
    'ERR_NO_CONTACTLIST_FOUND',
    '3821841QOgvnz',
    '20563580NVNEHI'
  ];
  a476_0x8fed = function () {
    return _0x29cad0;
  };
  return a476_0x8fed();
}
(function (_0x535da9, _0x36bb01) {
  const _0x4f4a72 = a476_0x44d1,
    _0x1db373 = _0x535da9();
  while (!![]) {
    try {
      const _0x5a34f7 =
        -parseInt(_0x4f4a72(0xad)) / 0x1 +
        parseInt(_0x4f4a72(0xb0)) / 0x2 +
        (-parseInt(_0x4f4a72(0xbb)) / 0x3) * (parseInt(_0x4f4a72(0xaf)) / 0x4) +
        (parseInt(_0x4f4a72(0xb8)) / 0x5) * (parseInt(_0x4f4a72(0xb5)) / 0x6) +
        (parseInt(_0x4f4a72(0xab)) / 0x7) * (-parseInt(_0x4f4a72(0xae)) / 0x8) +
        -parseInt(_0x4f4a72(0xb2)) / 0x9 +
        parseInt(_0x4f4a72(0xb3)) / 0xa;
      if (_0x5a34f7 === _0x36bb01) break;
      else _0x1db373['push'](_0x1db373['shift']());
    } catch (_0x2fe0b9) {
      _0x1db373['push'](_0x1db373['shift']());
    }
  }
})(a476_0x8fed, 0x9ecaa);
var __importDefault =
  (this && this[a476_0x56d3e7(0xac)]) ||
  function (_0x1e8f09) {
    return _0x1e8f09 && _0x1e8f09['__esModule']
      ? _0x1e8f09
      : { default: _0x1e8f09 };
  };
Object[a476_0x56d3e7(0xba)](exports, a476_0x56d3e7(0xb7), { value: !![] });
const AppError_1 = __importDefault(require('../../errors/AppError')),
  ContactList_1 = __importDefault(require(a476_0x56d3e7(0xb9))),
  UpdateService = async _0x26906f => {
    const _0x5927c1 = a476_0x56d3e7,
      { id: _0x4ba925, name: _0x520285 } = _0x26906f,
      _0x526e18 =
        await ContactList_1[_0x5927c1(0xb4)][_0x5927c1(0xb6)](_0x4ba925);
    if (!_0x526e18) throw new AppError_1['default'](_0x5927c1(0xb1), 0x194);
    return await _0x526e18['update']({ name: _0x520285 }), _0x526e18;
  };
exports[a476_0x56d3e7(0xb4)] = UpdateService;
