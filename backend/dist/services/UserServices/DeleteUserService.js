'use strict';
const a636_0x47d417 = a636_0x3271;
(function (_0x50fe0a, _0x5bb368) {
  const _0x5a4f6e = a636_0x3271,
    _0x2d8d34 = _0x50fe0a();
  while (!![]) {
    try {
      const _0x2427b7 =
        (parseInt(_0x5a4f6e(0xd1)) / 0x1) * (-parseInt(_0x5a4f6e(0xc3)) / 0x2) +
        (parseInt(_0x5a4f6e(0xc5)) / 0x3) * (parseInt(_0x5a4f6e(0xc9)) / 0x4) +
        (-parseInt(_0x5a4f6e(0xc4)) / 0x5) * (parseInt(_0x5a4f6e(0xc6)) / 0x6) +
        -parseInt(_0x5a4f6e(0xd8)) / 0x7 +
        (parseInt(_0x5a4f6e(0xcb)) / 0x8) * (-parseInt(_0x5a4f6e(0xd2)) / 0x9) +
        -parseInt(_0x5a4f6e(0xc7)) / 0xa +
        (-parseInt(_0x5a4f6e(0xda)) / 0xb) * (-parseInt(_0x5a4f6e(0xcf)) / 0xc);
      if (_0x2427b7 === _0x5bb368) break;
      else _0x2d8d34['push'](_0x2d8d34['shift']());
    } catch (_0x30b125) {
      _0x2d8d34['push'](_0x2d8d34['shift']());
    }
  }
})(a636_0x498f, 0xe575d);
function a636_0x498f() {
  const _0x4c401f = [
    'findOne',
    '../../helpers/UpdateDeletedUserOpenTicketsStatus',
    '7077721yCKhxj',
    '../../errors/AppError',
    '9581pcAYtm',
    'destroy',
    '../../models/User',
    '180514OwkLHB',
    '45RquhGK',
    '42321RQXzBy',
    '582018mHhAnS',
    '11280370RbPvyp',
    'length',
    '204uolrOQ',
    'open',
    '78024LZDNqQ',
    'default',
    'ERR_NO_USER_FOUND',
    '__esModule',
    '76728HrQkJD',
    'defineProperty',
    '18CZBTdQ',
    '657EVdSKJ',
    '__importDefault',
    '$get',
    'tickets'
  ];
  a636_0x498f = function () {
    return _0x4c401f;
  };
  return a636_0x498f();
}
var __importDefault =
  (this && this[a636_0x47d417(0xd3)]) ||
  function (_0x5c3a78) {
    const _0x3c0a76 = a636_0x47d417;
    return _0x5c3a78 && _0x5c3a78[_0x3c0a76(0xce)]
      ? _0x5c3a78
      : { default: _0x5c3a78 };
  };
Object[a636_0x47d417(0xd0)](exports, a636_0x47d417(0xce), { value: !![] });
function a636_0x3271(_0x30d337, _0x20c8b6) {
  const _0x498f81 = a636_0x498f();
  return (
    (a636_0x3271 = function (_0x3271bb, _0x17472a) {
      _0x3271bb = _0x3271bb - 0xc2;
      let _0x47f4a4 = _0x498f81[_0x3271bb];
      return _0x47f4a4;
    }),
    a636_0x3271(_0x30d337, _0x20c8b6)
  );
}
const User_1 = __importDefault(require(a636_0x47d417(0xc2))),
  AppError_1 = __importDefault(require(a636_0x47d417(0xd9))),
  UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(
    require(a636_0x47d417(0xd7))
  ),
  DeleteUserService = async (_0xde686c, _0x4eaba9) => {
    const _0x455924 = a636_0x47d417,
      _0x25b938 = await User_1[_0x455924(0xcc)][_0x455924(0xd6)]({
        where: { id: _0xde686c }
      });
    if (!_0x25b938)
      throw new AppError_1[_0x455924(0xcc)](_0x455924(0xcd), 0x194);
    const _0x490c17 = await _0x25b938[_0x455924(0xd4)](_0x455924(0xd5), {
      where: { status: _0x455924(0xca) }
    });
    _0x490c17[_0x455924(0xc8)] > 0x0 &&
      (0x0, UpdateDeletedUserOpenTicketsStatus_1[_0x455924(0xcc)])(
        _0x490c17,
        _0x4eaba9
      ),
      await _0x25b938[_0x455924(0xdb)]();
  };
exports[a636_0x47d417(0xcc)] = DeleteUserService;
