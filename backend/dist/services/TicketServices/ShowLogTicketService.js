'use strict';
const a627_0x246bec = a627_0x1137;
(function (_0x33657b, _0x54464f) {
  const _0x1e3f13 = a627_0x1137,
    _0x1f094f = _0x33657b();
  while (!![]) {
    try {
      const _0x17d9b0 =
        (parseInt(_0x1e3f13(0x19c)) / 0x1) *
          (parseInt(_0x1e3f13(0x19b)) / 0x2) +
        parseInt(_0x1e3f13(0x194)) / 0x3 +
        -parseInt(_0x1e3f13(0x197)) / 0x4 +
        parseInt(_0x1e3f13(0x190)) / 0x5 +
        (parseInt(_0x1e3f13(0x18d)) / 0x6) *
          (parseInt(_0x1e3f13(0x19f)) / 0x7) +
        (-parseInt(_0x1e3f13(0x18c)) / 0x8) *
          (parseInt(_0x1e3f13(0x18e)) / 0x9) +
        (parseInt(_0x1e3f13(0x18f)) / 0xa) *
          (-parseInt(_0x1e3f13(0x195)) / 0xb);
      if (_0x17d9b0 === _0x54464f) break;
      else _0x1f094f['push'](_0x1f094f['shift']());
    } catch (_0x29a6bd) {
      _0x1f094f['push'](_0x1f094f['shift']());
    }
  }
})(a627_0x21b7, 0x4fbd2);
function a627_0x1137(_0xf6f196, _0x3c5873) {
  const _0x21b7b9 = a627_0x21b7();
  return (
    (a627_0x1137 = function (_0x1137e4, _0x114f12) {
      _0x1137e4 = _0x1137e4 - 0x18c;
      let _0x5bb8d4 = _0x21b7b9[_0x1137e4];
      return _0x5bb8d4;
    }),
    a627_0x1137(_0xf6f196, _0x3c5873)
  );
}
var __importDefault =
  (this && this[a627_0x246bec(0x19d)]) ||
  function (_0x131d38) {
    const _0x12ff6e = a627_0x246bec;
    return _0x131d38 && _0x131d38[_0x12ff6e(0x192)]
      ? _0x131d38
      : { default: _0x131d38 };
  };
Object['defineProperty'](exports, a627_0x246bec(0x192), { value: !![] });
function a627_0x21b7() {
  const _0x22ddf0 = [
    '13133WIueCx',
    '__importDefault',
    '../../models/LogTicket',
    '301mcxcZG',
    '8GhUqew',
    '57774ZXETAy',
    '4915593VsQRBh',
    '210240nkZxMK',
    '2398095NgvmkO',
    'name',
    '__esModule',
    '../../models/User',
    '1590447DJHHPc',
    '550iOcqnv',
    'user',
    '468316WchRui',
    'createdAt',
    'DESC',
    'default',
    '94aCTdCN'
  ];
  a627_0x21b7 = function () {
    return _0x22ddf0;
  };
  return a627_0x21b7();
}
const LogTicket_1 = __importDefault(require(a627_0x246bec(0x19e))),
  User_1 = __importDefault(require(a627_0x246bec(0x193))),
  Queue_1 = __importDefault(require('../../models/Queue')),
  ShowLogTicketService = async ({
    ticketId: _0x24d10f,
    companyId: _0x4a7bde
  }) => {
    const _0x1c11b6 = a627_0x246bec,
      _0x3688e9 = await LogTicket_1['default']['findAll']({
        where: { ticketId: _0x24d10f },
        include: [
          {
            model: User_1['default'],
            as: _0x1c11b6(0x196),
            attributes: ['id', _0x1c11b6(0x191)]
          },
          {
            model: Queue_1[_0x1c11b6(0x19a)],
            as: 'queue',
            attributes: ['id', _0x1c11b6(0x191)]
          }
        ],
        order: [[_0x1c11b6(0x198), _0x1c11b6(0x199)]]
      });
    return _0x3688e9;
  };
exports[a627_0x246bec(0x19a)] = ShowLogTicketService;
