'use strict';
const a603_0x2376b2 = a603_0x390b;
function a603_0xcedb() {
  const _0x5da789 = [
    'whatsapp',
    'name',
    'count',
    'number',
    'DESC',
    'contact',
    'startOfDay',
    '2630735oCcPvx',
    '2073594fVcovD',
    'indexOf',
    'color',
    'urlPicture',
    '28VfcklX',
    '2072268ySWODf',
    'profilePicUrl',
    'default',
    'findAll',
    '816132mbdVfk',
    'queue',
    'date-fns',
    'user',
    'parseISO',
    '../../models/Contact',
    '../../models/UserQueue',
    '4XpZdWT',
    '746752aPrXIG',
    'sequelize',
    'online',
    'profile',
    'ASC',
    'defineProperty',
    'updatedAt',
    'open',
    '1009438rfjFsd',
    'findAndCountAll',
    '5678919XYJxMq',
    '../../models/User',
    '../../models/Queue',
    'profileImage',
    '__importDefault'
  ];
  a603_0xcedb = function () {
    return _0x5da789;
  };
  return a603_0xcedb();
}
(function (_0x1b365e, _0x296d14) {
  const _0x2e0bbf = a603_0x390b,
    _0x11c9d6 = _0x1b365e();
  while (!![]) {
    try {
      const _0x1546f7 =
        parseInt(_0x2e0bbf(0xff)) / 0x1 +
        parseInt(_0x2e0bbf(0xef)) / 0x2 +
        (-parseInt(_0x2e0bbf(0x10e)) / 0x3) *
          (-parseInt(_0x2e0bbf(0xf6)) / 0x4) +
        -parseInt(_0x2e0bbf(0x10d)) / 0x5 +
        parseInt(_0x2e0bbf(0x113)) / 0x6 +
        (parseInt(_0x2e0bbf(0x112)) / 0x7) *
          (-parseInt(_0x2e0bbf(0xf7)) / 0x8) +
        -parseInt(_0x2e0bbf(0x101)) / 0x9;
      if (_0x1546f7 === _0x296d14) break;
      else _0x11c9d6['push'](_0x11c9d6['shift']());
    } catch (_0x10d2fa) {
      _0x11c9d6['push'](_0x11c9d6['shift']());
    }
  }
})(a603_0xcedb, 0xe17ae);
function a603_0x390b(_0x3515bd, _0xfc504b) {
  const _0xcedbca = a603_0xcedb();
  return (
    (a603_0x390b = function (_0x390bc3, _0x57aa9b) {
      _0x390bc3 = _0x390bc3 - 0xed;
      let _0x4aeb91 = _0xcedbca[_0x390bc3];
      return _0x4aeb91;
    }),
    a603_0x390b(_0x3515bd, _0xfc504b)
  );
}
var __importDefault =
  (this && this[a603_0x2376b2(0x105)]) ||
  function (_0x29c083) {
    return _0x29c083 && _0x29c083['__esModule']
      ? _0x29c083
      : { default: _0x29c083 };
  };
Object[a603_0x2376b2(0xfc)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a603_0x2376b2(0xf8)),
  date_fns_1 = require(a603_0x2376b2(0xf1)),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  UserQueue_1 = __importDefault(require(a603_0x2376b2(0xf5))),
  User_1 = __importDefault(require(a603_0x2376b2(0x102))),
  Contact_1 = __importDefault(require(a603_0x2376b2(0xf4))),
  Queue_1 = __importDefault(require(a603_0x2376b2(0x103))),
  TicketsQueuesService = async ({
    dateStart: _0x2b2650,
    dateEnd: _0xa813aa,
    status: _0x51bf48,
    userId: _0x4efcbd,
    queuesIds: _0x190a99,
    companyId: _0x37aa83,
    showAll: _0x14980f
  }) => {
    const _0x23d6f6 = a603_0x2376b2;
    let _0x3b88fd = {};
    const _0x3d0b5a = [
        {
          model: User_1[_0x23d6f6(0xed)],
          as: _0x23d6f6(0xf2),
          attributes: [
            'id',
            _0x23d6f6(0x107),
            _0x23d6f6(0xfa),
            _0x23d6f6(0xf9),
            _0x23d6f6(0x104)
          ]
        },
        {
          model: Contact_1[_0x23d6f6(0xed)],
          as: _0x23d6f6(0x10b),
          attributes: [
            'id',
            _0x23d6f6(0x107),
            _0x23d6f6(0x109),
            _0x23d6f6(0x114),
            'companyId',
            _0x23d6f6(0x111)
          ]
        },
        {
          model: Queue_1[_0x23d6f6(0xed)],
          as: _0x23d6f6(0xf0),
          attributes: ['id', _0x23d6f6(0x107), _0x23d6f6(0x110)]
        },
        { association: _0x23d6f6(0x106), attributes: ['id', 'name'] }
      ],
      _0x2e1bbc = await Queue_1['default'][_0x23d6f6(0x108)]({
        where: { companyId: _0x37aa83 }
      });
    if (_0x2e1bbc) {
      const _0x4f71d1 = await UserQueue_1[_0x23d6f6(0xed)][_0x23d6f6(0xee)]({
        where: { userId: _0x4efcbd }
      });
      let _0x4c0a63 = _0x4f71d1['map'](_0x5d566f => _0x5d566f['queueId']);
      if (_0x190a99) {
        const _0x55ca22 = [];
        _0x190a99['forEach'](_0x4dc314 => {
          const _0x2289be = _0x23d6f6,
            _0x1ee2bc = _0x4c0a63[_0x2289be(0x10f)](+_0x4dc314);
          _0x1ee2bc && _0x55ca22['push'](+_0x4dc314);
        }),
          (_0x4c0a63 = _0x55ca22);
      }
      _0x3b88fd = {
        ..._0x3b88fd,
        queueId: { [sequelize_1['Op']['in']]: _0x4c0a63 }
      };
    }
    _0x14980f == 'true' && (_0x3b88fd = {});
    _0x3b88fd = {
      ..._0x3b88fd,
      status: { [sequelize_1['Op']['in']]: [_0x23d6f6(0xfe), 'pending'] },
      companyId: _0x37aa83
    };
    _0x2b2650 &&
      _0xa813aa &&
      (_0x3b88fd = {
        ..._0x3b88fd,
        createdAt: {
          [sequelize_1['Op']['between']]: [
            +(0x0, date_fns_1[_0x23d6f6(0x10c)])(
              (0x0, date_fns_1[_0x23d6f6(0xf3)])(_0x2b2650)
            ),
            +(0x0, date_fns_1['endOfDay'])(
              (0x0, date_fns_1['parseISO'])(_0xa813aa)
            )
          ]
        }
      });
    const { count: _0x3340ef, rows: _0x1942b9 } = await Ticket_1[
      _0x23d6f6(0xed)
    ][_0x23d6f6(0x100)]({
      where: _0x3b88fd,
      include: _0x3d0b5a,
      distinct: !![],
      subQuery: ![],
      order: [
        [_0x23d6f6(0xf2), _0x23d6f6(0x107), _0x23d6f6(0xfb)],
        [_0x23d6f6(0xfd), _0x23d6f6(0x10a)]
      ]
    });
    return _0x1942b9;
  };
exports[a603_0x2376b2(0xed)] = TicketsQueuesService;
