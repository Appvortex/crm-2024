'use strict';
const a615_0x1f56c1 = a615_0xc624;
function a615_0xc624(_0x103bd5, _0x1f4d2a) {
  const _0x178f8c = a615_0x178f();
  return (
    (a615_0xc624 = function (_0xc624b7, _0x184fa3) {
      _0xc624b7 = _0xc624b7 - 0xcf;
      let _0x3b6644 = _0x178f8c[_0xc624b7];
      return _0x3b6644;
    }),
    a615_0xc624(_0x103bd5, _0x1f4d2a)
  );
}
(function (_0x30e407, _0x210a8e) {
  const _0xdecb99 = a615_0xc624,
    _0x5df65b = _0x30e407();
  while (!![]) {
    try {
      const _0x2d83a5 =
        parseInt(_0xdecb99(0xd6)) / 0x1 +
        parseInt(_0xdecb99(0xdc)) / 0x2 +
        (parseInt(_0xdecb99(0xd8)) / 0x3) * (parseInt(_0xdecb99(0xdd)) / 0x4) +
        (parseInt(_0xdecb99(0xe8)) / 0x5) * (parseInt(_0xdecb99(0xcf)) / 0x6) +
        (-parseInt(_0xdecb99(0xe3)) / 0x7) * (parseInt(_0xdecb99(0xd7)) / 0x8) +
        -parseInt(_0xdecb99(0xda)) / 0x9 +
        (-parseInt(_0xdecb99(0xde)) / 0xa) * (parseInt(_0xdecb99(0xd2)) / 0xb);
      if (_0x2d83a5 === _0x210a8e) break;
      else _0x5df65b['push'](_0x5df65b['shift']());
    } catch (_0x3d0468) {
      _0x5df65b['push'](_0x5df65b['shift']());
    }
  }
})(a615_0x178f, 0xd1d58);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x44ddc7) {
    const _0x1e6a68 = a615_0xc624;
    return _0x44ddc7 && _0x44ddc7[_0x1e6a68(0xe2)]
      ? _0x44ddc7
      : { default: _0x44ddc7 };
  };
function a615_0x178f() {
  const _0x5a37a5 = [
    '22thDrGd',
    '../../models/Ticket',
    'findAll',
    'user',
    '1391833RuMrhY',
    '1554568XVfCXv',
    '27618GdOtfu',
    'contact',
    '6269184mBDkAB',
    'email',
    '496742LUWAhu',
    '660aFDpLr',
    '8243590vwFsWO',
    'createdAt',
    '../../models/User',
    'default',
    '__esModule',
    '35hljVRk',
    'DESC',
    'defineProperty',
    '../../models/TicketNote',
    'status',
    '391225nysrMM',
    '78ebJUsf',
    'ticket',
    'name'
  ];
  a615_0x178f = function () {
    return _0x5a37a5;
  };
  return a615_0x178f();
}
Object[a615_0x1f56c1(0xe5)](exports, a615_0x1f56c1(0xe2), { value: !![] });
const TicketNote_1 = __importDefault(require(a615_0x1f56c1(0xe6))),
  User_1 = __importDefault(require(a615_0x1f56c1(0xe0))),
  Contact_1 = __importDefault(require('../../models/Contact')),
  Ticket_1 = __importDefault(require(a615_0x1f56c1(0xd3))),
  FindNotesByContactIdAndTicketId = async ({
    contactId: _0x27c1ad,
    ticketId: _0x3c3e99
  }) => {
    const _0x106ae6 = a615_0x1f56c1,
      _0xe9be77 = await TicketNote_1[_0x106ae6(0xe1)][_0x106ae6(0xd4)]({
        where: { contactId: _0x27c1ad, ticketId: _0x3c3e99 },
        include: [
          {
            model: User_1[_0x106ae6(0xe1)],
            as: _0x106ae6(0xd5),
            attributes: ['id', _0x106ae6(0xd1), _0x106ae6(0xdb)]
          },
          {
            model: Contact_1[_0x106ae6(0xe1)],
            as: _0x106ae6(0xd9),
            attributes: ['id', _0x106ae6(0xd1)]
          },
          {
            model: Ticket_1[_0x106ae6(0xe1)],
            as: _0x106ae6(0xd0),
            attributes: ['id', _0x106ae6(0xe7), _0x106ae6(0xdf)]
          }
        ],
        order: [['createdAt', _0x106ae6(0xe4)]]
      });
    return _0xe9be77;
  };
exports[a615_0x1f56c1(0xe1)] = FindNotesByContactIdAndTicketId;
