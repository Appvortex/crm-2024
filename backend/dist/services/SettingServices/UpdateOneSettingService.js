'use strict';
const a593_0x2d499a = a593_0xe3f4;
(function (_0x18bd22, _0x29fbac) {
  const _0x3d4d3d = a593_0xe3f4,
    _0x36f2aa = _0x18bd22();
  while (!![]) {
    try {
      const _0x1d6fd0 =
        parseInt(_0x3d4d3d(0x185)) / 0x1 +
        (-parseInt(_0x3d4d3d(0x183)) / 0x2) *
          (parseInt(_0x3d4d3d(0x17c)) / 0x3) +
        (parseInt(_0x3d4d3d(0x189)) / 0x4) *
          (-parseInt(_0x3d4d3d(0x17f)) / 0x5) +
        (parseInt(_0x3d4d3d(0x179)) / 0x6) *
          (-parseInt(_0x3d4d3d(0x17d)) / 0x7) +
        -parseInt(_0x3d4d3d(0x18a)) / 0x8 +
        (parseInt(_0x3d4d3d(0x17e)) / 0x9) *
          (parseInt(_0x3d4d3d(0x18c)) / 0xa) +
        (-parseInt(_0x3d4d3d(0x17b)) / 0xb) *
          (-parseInt(_0x3d4d3d(0x17a)) / 0xc);
      if (_0x1d6fd0 === _0x29fbac) break;
      else _0x36f2aa['push'](_0x36f2aa['shift']());
    } catch (_0x2770fc) {
      _0x36f2aa['push'](_0x36f2aa['shift']());
    }
  }
})(a593_0x198f, 0x1b2a2);
var __importDefault =
  (this && this[a593_0x2d499a(0x18b)]) ||
  function (_0x390601) {
    const _0x36cef0 = a593_0x2d499a;
    return _0x390601 && _0x390601[_0x36cef0(0x186)]
      ? _0x390601
      : { default: _0x390601 };
  };
function a593_0xe3f4(_0x889373, _0x513366) {
  const _0x198fed = a593_0x198f();
  return (
    (a593_0xe3f4 = function (_0xe3f414, _0x2793d3) {
      _0xe3f414 = _0xe3f414 - 0x179;
      let _0x6699ef = _0x198fed[_0xe3f414];
      return _0x6699ef;
    }),
    a593_0xe3f4(_0x889373, _0x513366)
  );
}
Object[a593_0x2d499a(0x188)](exports, a593_0x2d499a(0x186), { value: !![] });
const AppError_1 = __importDefault(require(a593_0x2d499a(0x184))),
  Setting_1 = __importDefault(require(a593_0x2d499a(0x181))),
  UpdateOneSettingService = async ({ key: _0x255026, value: _0x31eb8e }) => {
    const _0x299fdc = a593_0x2d499a,
      [_0x4f3920] = await Setting_1[_0x299fdc(0x180)]['findOrCreate']({
        where: { key: _0x255026 },
        defaults: { key: _0x255026, value: _0x31eb8e }
      });
    if (!_0x4f3920)
      throw new AppError_1[_0x299fdc(0x180)](_0x299fdc(0x187), 0x194);
    return await _0x4f3920[_0x299fdc(0x182)]({ value: _0x31eb8e }), _0x4f3920;
  };
exports[a593_0x2d499a(0x180)] = UpdateOneSettingService;
function a593_0x198f() {
  const _0x234454 = [
    '55HphGXh',
    '11634VIkllG',
    '14YAuXPB',
    '9WfGmaT',
    '165ydXFyo',
    'default',
    '../../models/Setting',
    'update',
    '106ymqpBr',
    '../../errors/AppError',
    '10482oazlUo',
    '__esModule',
    'ERR_NO_SETTING_FOUND',
    'defineProperty',
    '26868EjzHdG',
    '1234464WMKaVZ',
    '__importDefault',
    '126680LsFlNv',
    '250878ueKQQr',
    '1807788pIJVTU'
  ];
  a593_0x198f = function () {
    return _0x234454;
  };
  return a593_0x198f();
}
