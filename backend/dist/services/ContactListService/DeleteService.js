'use strict';
const a470_0x5ae503 = a470_0x5576;
(function (_0xb6038c, _0x265fe1) {
  const _0x59714c = a470_0x5576,
    _0x210391 = _0xb6038c();
  while (!![]) {
    try {
      const _0xaff484 =
        (parseInt(_0x59714c(0x127)) / 0x1) *
          (parseInt(_0x59714c(0x135)) / 0x2) +
        (-parseInt(_0x59714c(0x134)) / 0x3) *
          (parseInt(_0x59714c(0x129)) / 0x4) +
        -parseInt(_0x59714c(0x12a)) / 0x5 +
        (-parseInt(_0x59714c(0x12c)) / 0x6) *
          (-parseInt(_0x59714c(0x126)) / 0x7) +
        parseInt(_0x59714c(0x12f)) / 0x8 +
        parseInt(_0x59714c(0x124)) / 0x9 +
        (parseInt(_0x59714c(0x12d)) / 0xa) *
          (-parseInt(_0x59714c(0x123)) / 0xb);
      if (_0xaff484 === _0x265fe1) break;
      else _0x210391['push'](_0x210391['shift']());
    } catch (_0x5327b7) {
      _0x210391['push'](_0x210391['shift']());
    }
  }
})(a470_0x3383, 0xc1ae2);
function a470_0x5576(_0x1dbca9, _0x167bba) {
  const _0x3383d3 = a470_0x3383();
  return (
    (a470_0x5576 = function (_0x5576b8, _0x4f87b7) {
      _0x5576b8 = _0x5576b8 - 0x123;
      let _0x4d78e9 = _0x3383d3[_0x5576b8];
      return _0x4d78e9;
    }),
    a470_0x5576(_0x1dbca9, _0x167bba)
  );
}
var __importDefault =
  (this && this[a470_0x5ae503(0x131)]) ||
  function (_0x3afe2e) {
    return _0x3afe2e && _0x3afe2e['__esModule']
      ? _0x3afe2e
      : { default: _0x3afe2e };
  };
Object[a470_0x5ae503(0x125)](exports, a470_0x5ae503(0x12e), { value: !![] });
function a470_0x3383() {
  const _0x169e3f = [
    '2GqcZvR',
    '11mmHMuL',
    '2564289jqiLLO',
    'defineProperty',
    '7451248hXQsEE',
    '1306411ggwpKF',
    'ERR_NO_CONTACTLIST_FOUND',
    '3090292mhGaEy',
    '1625370XoRlPh',
    '../../models/ContactList',
    '6tsXAKJ',
    '8489430KPwyQv',
    '__esModule',
    '6853448dvRjgj',
    'default',
    '__importDefault',
    'findOne',
    '../../errors/AppError',
    '6afMojL'
  ];
  a470_0x3383 = function () {
    return _0x169e3f;
  };
  return a470_0x3383();
}
const ContactList_1 = __importDefault(require(a470_0x5ae503(0x12b))),
  AppError_1 = __importDefault(require(a470_0x5ae503(0x133))),
  DeleteService = async _0x371948 => {
    const _0x4dea16 = a470_0x5ae503,
      _0x239532 = await ContactList_1[_0x4dea16(0x130)][_0x4dea16(0x132)]({
        where: { id: _0x371948 }
      });
    if (!_0x239532)
      throw new AppError_1[_0x4dea16(0x130)](_0x4dea16(0x128), 0x194);
    await _0x239532['destroy']();
  };
exports[a470_0x5ae503(0x130)] = DeleteService;
