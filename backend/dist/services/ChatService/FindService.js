'use strict';
const a443_0x136a47 = a443_0x3f5e;
(function (_0x36b241, _0x5137df) {
  const _0x168389 = a443_0x3f5e,
    _0x43303b = _0x36b241();
  while (!![]) {
    try {
      const _0x5d5748 =
        (parseInt(_0x168389(0xc9)) / 0x1) * (-parseInt(_0x168389(0xca)) / 0x2) +
        (parseInt(_0x168389(0xc5)) / 0x3) * (parseInt(_0x168389(0xc6)) / 0x4) +
        (parseInt(_0x168389(0xce)) / 0x5) * (-parseInt(_0x168389(0xd7)) / 0x6) +
        -parseInt(_0x168389(0xd2)) / 0x7 +
        parseInt(_0x168389(0xcd)) / 0x8 +
        -parseInt(_0x168389(0xda)) / 0x9 +
        parseInt(_0x168389(0xd0)) / 0xa;
      if (_0x5d5748 === _0x5137df) break;
      else _0x43303b['push'](_0x43303b['shift']());
    } catch (_0x8f233) {
      _0x43303b['push'](_0x43303b['shift']());
    }
  }
})(a443_0x4619, 0xd8b13);
function a443_0x3f5e(_0x1d7cb0, _0x382616) {
  const _0x46199f = a443_0x4619();
  return (
    (a443_0x3f5e = function (_0x3f5e6f, _0x392176) {
      _0x3f5e6f = _0x3f5e6f - 0xc5;
      let _0x2f90d0 = _0x46199f[_0x3f5e6f];
      return _0x2f90d0;
    }),
    a443_0x3f5e(_0x1d7cb0, _0x382616)
  );
}
var __importDefault =
  (this && this[a443_0x136a47(0xd8)]) ||
  function (_0x10a426) {
    const _0x57d27f = a443_0x136a47;
    return _0x10a426 && _0x10a426[_0x57d27f(0xcf)]
      ? _0x10a426
      : { default: _0x10a426 };
  };
function a443_0x4619() {
  const _0x185b1d = [
    'company',
    '1217734dDkVSC',
    'default',
    '../../models/Chat',
    'defineProperty',
    'owner',
    '6dWUcmW',
    '__importDefault',
    'name',
    '7268319fBqCfg',
    '4906971ZjhHlZ',
    '4OjcDJZ',
    'DESC',
    'createdAt',
    '1715215Winyve',
    '2czmkOj',
    'findAll',
    '../../models/User',
    '14095680DHYXvc',
    '6175595zsALsb',
    '__esModule',
    '14218410zTzfuT'
  ];
  a443_0x4619 = function () {
    return _0x185b1d;
  };
  return a443_0x4619();
}
Object[a443_0x136a47(0xd5)](exports, a443_0x136a47(0xcf), { value: !![] });
const Chat_1 = __importDefault(require(a443_0x136a47(0xd4))),
  Company_1 = __importDefault(require('../../models/Company')),
  User_1 = __importDefault(require(a443_0x136a47(0xcc))),
  FindService = async ({ ownerId: _0x56781e, companyId: _0x103f35 }) => {
    const _0x44f30c = a443_0x136a47,
      _0x5d15b8 = await Chat_1['default'][_0x44f30c(0xcb)]({
        where: { ownerId: _0x56781e, companyId: _0x103f35 },
        include: [
          {
            model: Company_1['default'],
            as: _0x44f30c(0xd1),
            attributes: ['id', _0x44f30c(0xd9)]
          },
          {
            model: User_1[_0x44f30c(0xd3)],
            as: _0x44f30c(0xd6),
            attributes: ['id', _0x44f30c(0xd9)]
          }
        ],
        order: [[_0x44f30c(0xc8), _0x44f30c(0xc7)]]
      });
    return _0x5d15b8;
  };
exports['default'] = FindService;
