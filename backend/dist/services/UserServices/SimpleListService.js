'use strict';
const a639_0x36d920 = a639_0x29c6;
(function (_0x895a62, _0x3ca88e) {
  const _0x43ce1b = a639_0x29c6,
    _0x3d0190 = _0x895a62();
  while (!![]) {
    try {
      const _0x3ec34a =
        parseInt(_0x43ce1b(0x1f3)) / 0x1 +
        parseInt(_0x43ce1b(0x204)) / 0x2 +
        (parseInt(_0x43ce1b(0x203)) / 0x3) *
          (parseInt(_0x43ce1b(0x1f8)) / 0x4) +
        (-parseInt(_0x43ce1b(0x1ef)) / 0x5) *
          (-parseInt(_0x43ce1b(0x202)) / 0x6) +
        -parseInt(_0x43ce1b(0x1fd)) / 0x7 +
        (-parseInt(_0x43ce1b(0x1ff)) / 0x8) *
          (-parseInt(_0x43ce1b(0x1f1)) / 0x9) +
        -parseInt(_0x43ce1b(0x1f9)) / 0xa;
      if (_0x3ec34a === _0x3ca88e) break;
      else _0x3d0190['push'](_0x3d0190['shift']());
    } catch (_0x7f072b) {
      _0x3d0190['push'](_0x3d0190['shift']());
    }
  }
})(a639_0x257d, 0x2e182);
function a639_0x257d() {
  const _0x1c995f = [
    '__esModule',
    'ERR_NO_USER_FOUND',
    '6yLoaku',
    '69sMNtxV',
    '406816MFMEFC',
    'name',
    '1456495WNhiuD',
    'defineProperty',
    '45cupRXQ',
    'email',
    '374035XFumAP',
    '../../errors/AppError',
    '../../models/User',
    '../../models/Queue',
    'queues',
    '20364xroKMt',
    '7085870rhxQAU',
    '__importDefault',
    'findAll',
    'ASC',
    '2159997lxiQej',
    'default',
    '352200ORRBES'
  ];
  a639_0x257d = function () {
    return _0x1c995f;
  };
  return a639_0x257d();
}
var __importDefault =
  (this && this[a639_0x36d920(0x1fa)]) ||
  function (_0x259a42) {
    const _0x55a4d8 = a639_0x36d920;
    return _0x259a42 && _0x259a42[_0x55a4d8(0x200)]
      ? _0x259a42
      : { default: _0x259a42 };
  };
function a639_0x29c6(_0x106203, _0x9eea2) {
  const _0x257d1b = a639_0x257d();
  return (
    (a639_0x29c6 = function (_0x29c64c, _0x45c989) {
      _0x29c64c = _0x29c64c - 0x1ee;
      let _0x529353 = _0x257d1b[_0x29c64c];
      return _0x529353;
    }),
    a639_0x29c6(_0x106203, _0x9eea2)
  );
}
Object[a639_0x36d920(0x1f0)](exports, a639_0x36d920(0x200), { value: !![] });
const User_1 = __importDefault(require(a639_0x36d920(0x1f5))),
  AppError_1 = __importDefault(require(a639_0x36d920(0x1f4))),
  Queue_1 = __importDefault(require(a639_0x36d920(0x1f6))),
  SimpleListService = async ({ companyId: _0x57696e }) => {
    const _0x4bf167 = a639_0x36d920,
      _0x373c8d = await User_1[_0x4bf167(0x1fe)][_0x4bf167(0x1fb)]({
        where: { companyId: _0x57696e },
        attributes: [_0x4bf167(0x1ee), 'id', _0x4bf167(0x1f2)],
        include: [{ model: Queue_1[_0x4bf167(0x1fe)], as: _0x4bf167(0x1f7) }],
        order: [['id', _0x4bf167(0x1fc)]]
      });
    if (!_0x373c8d)
      throw new AppError_1[_0x4bf167(0x1fe)](_0x4bf167(0x201), 0x194);
    return _0x373c8d;
  };
exports[a639_0x36d920(0x1fe)] = SimpleListService;
