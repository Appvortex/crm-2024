'use strict';
function a304_0x109d(_0x5df885, _0x4d1eb7) {
  const _0x4833a1 = a304_0x4833();
  return (
    (a304_0x109d = function (_0x109d32, _0x48fcc7) {
      _0x109d32 = _0x109d32 - 0x1f2;
      let _0x2efb58 = _0x4833a1[_0x109d32];
      return _0x2efb58;
    }),
    a304_0x109d(_0x5df885, _0x4d1eb7)
  );
}
const a304_0x1b1449 = a304_0x109d;
(function (_0x18526f, _0x42da93) {
  const _0x59a7a8 = a304_0x109d,
    _0x2cc7e9 = _0x18526f();
  while (!![]) {
    try {
      const _0x4cd5f4 =
        (parseInt(_0x59a7a8(0x21c)) / 0x1) *
          (parseInt(_0x59a7a8(0x1fa)) / 0x2) +
        -parseInt(_0x59a7a8(0x213)) / 0x3 +
        (-parseInt(_0x59a7a8(0x205)) / 0x4) *
          (-parseInt(_0x59a7a8(0x218)) / 0x5) +
        -parseInt(_0x59a7a8(0x20d)) / 0x6 +
        (parseInt(_0x59a7a8(0x1f9)) / 0x7) *
          (parseInt(_0x59a7a8(0x20c)) / 0x8) +
        -parseInt(_0x59a7a8(0x215)) / 0x9 +
        (parseInt(_0x59a7a8(0x1ff)) / 0xa) *
          (-parseInt(_0x59a7a8(0x214)) / 0xb);
      if (_0x4cd5f4 === _0x42da93) break;
      else _0x2cc7e9['push'](_0x2cc7e9['shift']());
    } catch (_0x2c4fe8) {
      _0x2cc7e9['push'](_0x2cc7e9['shift']());
    }
  }
})(a304_0x4833, 0x42923);
var __importDefault =
  (this && this[a304_0x1b1449(0x1fe)]) ||
  function (_0x3caa24) {
    const _0x4f3e3a = a304_0x1b1449;
    return _0x3caa24 && _0x3caa24[_0x4f3e3a(0x1f4)]
      ? _0x3caa24
      : { default: _0x3caa24 };
  };
Object[a304_0x1b1449(0x1fd)](exports, a304_0x1b1449(0x1f4), { value: !![] }),
  (exports['updateTicketByRemoteJid'] = void 0x0);
const Message_1 = __importDefault(require(a304_0x1b1449(0x200))),
  Ticket_1 = __importDefault(require(a304_0x1b1449(0x1f6))),
  sequelize_1 = require(a304_0x1b1449(0x211)),
  socket_1 = require('../libs/socket'),
  Contact_1 = __importDefault(require(a304_0x1b1449(0x1f7))),
  User_1 = __importDefault(require(a304_0x1b1449(0x203))),
  Queue_1 = __importDefault(require('../models/Queue')),
  Whatsapp_1 = __importDefault(require(a304_0x1b1449(0x207))),
  Tag_1 = __importDefault(require(a304_0x1b1449(0x20e))),
  updateTicketByRemoteJid = async (
    _0x4ecb69,
    _0x263a7f,
    _0x1043f2,
    _0x54cc4c,
    _0x516746
  ) => {
    const _0x872bf9 = a304_0x1b1449,
      { rows: _0x116c9b } = await Message_1['default'][_0x872bf9(0x21a)]({
        limit: 0x1,
        order: [[_0x872bf9(0x209), _0x872bf9(0x1f3)]],
        where: {
          remoteJid: {
            [sequelize_1['Op'][_0x872bf9(0x20a)]]: '%' + _0x4ecb69 + '%'
          }
        }
      });
    _0x116c9b['forEach'](async _0x4edaa4 => {
      const _0x41be3d = _0x872bf9;
      let _0x220f6b = _0x4edaa4[_0x41be3d(0x210)],
        _0x22e25f = await Ticket_1[_0x41be3d(0x204)]['findOne']({
          where: { id: _0x220f6b },
          include: [
            {
              model: Contact_1['default'],
              as: _0x41be3d(0x1f2),
              attributes: [
                'id',
                'name',
                _0x41be3d(0x216),
                _0x41be3d(0x1fb),
                _0x41be3d(0x206),
                _0x41be3d(0x217)
              ],
              include: [
                _0x41be3d(0x20f),
                _0x41be3d(0x21b),
                _0x41be3d(0x201),
                { association: 'wallets', attributes: ['id', 'name'] }
              ]
            },
            {
              model: User_1[_0x41be3d(0x204)],
              as: _0x41be3d(0x1f5),
              attributes: ['id', _0x41be3d(0x212)]
            },
            {
              model: Queue_1['default'],
              as: _0x41be3d(0x202),
              attributes: ['id', _0x41be3d(0x212), _0x41be3d(0x21d)]
            },
            {
              model: Whatsapp_1[_0x41be3d(0x204)],
              as: _0x41be3d(0x1f8),
              attributes: [_0x41be3d(0x212)]
            },
            {
              model: Tag_1[_0x41be3d(0x204)],
              as: _0x41be3d(0x201),
              attributes: ['id', _0x41be3d(0x212), 'color']
            }
          ]
        });
      const _0x5062f3 = _0x22e25f['status'],
        _0xe94832 = _0x22e25f[_0x41be3d(0x1f5)]?.['id'];
      await _0x22e25f[_0x41be3d(0x1fc)]({
        status: _0x54cc4c,
        queueId: _0x263a7f,
        userId: _0x1043f2,
        unreadMessages: _0x516746
      });
      const _0x17dcda = (0x0, socket_1[_0x41be3d(0x208)])();
      _0x17dcda['to'](_0x22e25f['id'][_0x41be3d(0x219)]())[_0x41be3d(0x20b)](
        'company-' + _0x22e25f['companyId'] + '-ticket',
        { action: 'update', ticket: _0x22e25f }
      );
    });
    return;
  };
exports['updateTicketByRemoteJid'] = updateTicketByRemoteJid;
function a304_0x4833() {
  const _0x20fda6 = [
    'contact',
    'DESC',
    '__esModule',
    'user',
    '../models/Ticket',
    '../models/Contact',
    'whatsapp',
    '67088ieaPIK',
    '310vuLKbP',
    'profilePicUrl',
    'update',
    'defineProperty',
    '__importDefault',
    '20ozXIkr',
    '../models/Message',
    'tags',
    'queue',
    '../models/User',
    'default',
    '8GrZfNJ',
    'companyId',
    '../models/Whatsapp',
    'getIO',
    'createdAt',
    'like',
    'emit',
    '408uNblow',
    '1335444XOCqQm',
    '../models/Tag',
    'extraInfo',
    'ticketId',
    'sequelize',
    'name',
    '63321TcvLpy',
    '2823502HJXvBO',
    '2431827WtmZNm',
    'number',
    'urlPicture',
    '807610xrrEOS',
    'toString',
    'findAndCountAll',
    'contactTags',
    '3149pArefl',
    'color'
  ];
  a304_0x4833 = function () {
    return _0x20fda6;
  };
  return a304_0x4833();
}
