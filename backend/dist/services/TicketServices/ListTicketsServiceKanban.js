'use strict';
function a626_0x2464(_0x2b1370, _0x16c194) {
  const _0x534cad = a626_0x534c();
  return (
    (a626_0x2464 = function (_0x246461, _0x342b2e) {
      _0x246461 = _0x246461 - 0x187;
      let _0x570d1e = _0x534cad[_0x246461];
      return _0x570d1e;
    }),
    a626_0x2464(_0x2b1370, _0x16c194)
  );
}
function a626_0x534c() {
  const _0x3e9821 = [
    'name',
    'defineProperty',
    'urlPicture',
    'findAll',
    '8iVdUrk',
    'push',
    'open',
    'length',
    '525722AqzLdV',
    'parseISO',
    '../UserServices/ShowUserService',
    'default',
    'DESC',
    'intersection',
    '__esModule',
    'email',
    'companyId',
    '14256WpafOE',
    'startOfDay',
    'true',
    '../../models/User',
    '../../models/Tag',
    'LOWER',
    'between',
    '../../models/Ticket',
    '1922463FUYrcn',
    'queues',
    '4QrQaNr',
    'user',
    'messages',
    'isArray',
    '22865076fUhsAx',
    'like',
    'LIKE',
    'whatsapp',
    '../../models/Message',
    'toLocaleLowerCase',
    'body',
    'endOfDay',
    'col',
    'contact.name',
    '579845rqsMln',
    'where',
    'ticketId',
    '4555120SOUhjE',
    'number',
    '../../models/Whatsapp',
    'color',
    '../../models/TicketTag',
    '5572140rGWYCm',
    'tags',
    'pending',
    'map'
  ];
  a626_0x534c = function () {
    return _0x3e9821;
  };
  return a626_0x534c();
}
const a626_0x2c8069 = a626_0x2464;
(function (_0x220042, _0x2b0f16) {
  const _0xf598b1 = a626_0x2464,
    _0x3fb7e4 = _0x220042();
  while (!![]) {
    try {
      const _0x5f1a9f =
        parseInt(_0xf598b1(0x194)) / 0x1 +
        -parseInt(_0xf598b1(0x19d)) / 0x2 +
        (parseInt(_0xf598b1(0x1a5)) / 0x3) *
          (parseInt(_0xf598b1(0x1a7)) / 0x4) +
        parseInt(_0xf598b1(0x1b8)) / 0x5 +
        parseInt(_0xf598b1(0x188)) / 0x6 +
        (parseInt(_0xf598b1(0x1b5)) / 0x7) *
          (parseInt(_0xf598b1(0x190)) / 0x8) +
        -parseInt(_0xf598b1(0x1ab)) / 0x9;
      if (_0x5f1a9f === _0x2b0f16) break;
      else _0x3fb7e4['push'](_0x3fb7e4['shift']());
    } catch (_0x4be7dd) {
      _0x3fb7e4['push'](_0x3fb7e4['shift']());
    }
  }
})(a626_0x534c, 0x842d8);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x4bcf05) {
    const _0x4c5f63 = a626_0x2464;
    return _0x4bcf05 && _0x4bcf05[_0x4c5f63(0x19a)]
      ? _0x4bcf05
      : { default: _0x4bcf05 };
  };
Object[a626_0x2c8069(0x18d)](exports, a626_0x2c8069(0x19a), { value: !![] });
const sequelize_1 = require('sequelize'),
  date_fns_1 = require('date-fns'),
  Ticket_1 = __importDefault(require(a626_0x2c8069(0x1a4))),
  Contact_1 = __importDefault(require('../../models/Contact')),
  Message_1 = __importDefault(require(a626_0x2c8069(0x1af))),
  Queue_1 = __importDefault(require('../../models/Queue')),
  User_1 = __importDefault(require(a626_0x2c8069(0x1a0))),
  ShowUserService_1 = __importDefault(require(a626_0x2c8069(0x196))),
  Tag_1 = __importDefault(require(a626_0x2c8069(0x1a1))),
  TicketTag_1 = __importDefault(require(a626_0x2c8069(0x187))),
  lodash_1 = require('lodash'),
  Whatsapp_1 = __importDefault(require(a626_0x2c8069(0x1ba))),
  ListTicketsServiceKanban = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    queueIds: _0x8256a0,
    tags: _0x25cbc2,
    users: _0x587c3d,
    status: _0x1f08d1,
    date: _0x52874e,
    updatedAt: _0x138491,
    showAll: _0x428e95,
    userId: _0x26af49,
    withUnreadMessages: _0x365314,
    companyId: _0x36f2b5
  }) => {
    const _0x4ea563 = a626_0x2c8069;
    let _0x458bc7 = {
        [sequelize_1['Op']['or']]: [
          { userId: _0x26af49 },
          { status: _0x4ea563(0x18a) }
        ],
        queueId: { [sequelize_1['Op']['or']]: [_0x8256a0, null] }
      },
      _0x55249b;
    _0x55249b = [
      {
        model: Contact_1[_0x4ea563(0x197)],
        as: 'contact',
        attributes: [
          'id',
          _0x4ea563(0x18c),
          _0x4ea563(0x1b9),
          _0x4ea563(0x19b),
          _0x4ea563(0x19c),
          _0x4ea563(0x18e)
        ]
      },
      {
        model: Queue_1[_0x4ea563(0x197)],
        as: 'queue',
        attributes: ['id', _0x4ea563(0x18c), _0x4ea563(0x1bb)]
      },
      {
        model: User_1[_0x4ea563(0x197)],
        as: _0x4ea563(0x1a8),
        attributes: ['id', _0x4ea563(0x18c)]
      },
      {
        model: Tag_1['default'],
        as: _0x4ea563(0x189),
        attributes: ['id', _0x4ea563(0x18c), _0x4ea563(0x1bb)]
      },
      {
        model: Whatsapp_1['default'],
        as: _0x4ea563(0x1ae),
        attributes: ['name']
      }
    ];
    _0x428e95 === _0x4ea563(0x19f) &&
      (_0x458bc7 = {
        queueId: { [sequelize_1['Op']['or']]: [_0x8256a0, null] }
      });
    _0x458bc7 = {
      ..._0x458bc7,
      status: {
        [sequelize_1['Op']['or']]: [_0x4ea563(0x18a), _0x4ea563(0x192)]
      }
    };
    if (searchParam) {
      const _0x5843dc = searchParam[_0x4ea563(0x1b0)]()['trim']();
      (_0x55249b = [
        ..._0x55249b,
        {
          model: Message_1[_0x4ea563(0x197)],
          as: _0x4ea563(0x1a9),
          attributes: ['id', _0x4ea563(0x1b1)],
          where: {
            body: (0x0, sequelize_1[_0x4ea563(0x1b6)])(
              (0x0, sequelize_1['fn'])(
                _0x4ea563(0x1a2),
                (0x0, sequelize_1[_0x4ea563(0x1b3)])('body')
              ),
              _0x4ea563(0x1ad),
              '%' + _0x5843dc + '%'
            )
          },
          required: ![],
          duplicating: ![]
        }
      ]),
        (_0x458bc7 = {
          ..._0x458bc7,
          [sequelize_1['Op']['or']]: [
            {
              '$contact.name$': (0x0, sequelize_1[_0x4ea563(0x1b6)])(
                (0x0, sequelize_1['fn'])(
                  _0x4ea563(0x1a2),
                  (0x0, sequelize_1[_0x4ea563(0x1b3)])(_0x4ea563(0x1b4))
                ),
                'LIKE',
                '%' + _0x5843dc + '%'
              )
            },
            {
              '$contact.number$': {
                [sequelize_1['Op'][_0x4ea563(0x1ac)]]: '%' + _0x5843dc + '%'
              }
            },
            {
              '$message.body$': (0x0, sequelize_1['where'])(
                (0x0, sequelize_1['fn'])(
                  _0x4ea563(0x1a2),
                  (0x0, sequelize_1['col'])('body')
                ),
                'LIKE',
                '%' + _0x5843dc + '%'
              )
            }
          ]
        });
    }
    _0x52874e &&
      (_0x458bc7 = {
        createdAt: {
          [sequelize_1['Op']['between']]: [
            +(0x0, date_fns_1[_0x4ea563(0x19e)])(
              (0x0, date_fns_1[_0x4ea563(0x195)])(_0x52874e)
            ),
            +(0x0, date_fns_1[_0x4ea563(0x1b2)])(
              (0x0, date_fns_1[_0x4ea563(0x195)])(_0x52874e)
            )
          ]
        }
      });
    _0x138491 &&
      (_0x458bc7 = {
        updatedAt: {
          [sequelize_1['Op'][_0x4ea563(0x1a3)]]: [
            +(0x0, date_fns_1[_0x4ea563(0x19e)])(
              (0x0, date_fns_1[_0x4ea563(0x195)])(_0x138491)
            ),
            +(0x0, date_fns_1['endOfDay'])(
              (0x0, date_fns_1[_0x4ea563(0x195)])(_0x138491)
            )
          ]
        }
      });
    if (_0x365314 === _0x4ea563(0x19f)) {
      const _0x449f72 = await (0x0, ShowUserService_1['default'])(
          _0x26af49,
          _0x36f2b5
        ),
        _0x3bbc39 = _0x449f72[_0x4ea563(0x1a6)]['map'](
          _0x2ea36e => _0x2ea36e['id']
        );
      _0x458bc7 = {
        [sequelize_1['Op']['or']]: [
          { userId: _0x26af49 },
          { status: _0x4ea563(0x18a) }
        ],
        queueId: { [sequelize_1['Op']['or']]: [_0x3bbc39, null] },
        unreadMessages: { [sequelize_1['Op']['gt']]: 0x0 }
      };
    }
    if (
      Array[_0x4ea563(0x1aa)](_0x25cbc2) &&
      _0x25cbc2[_0x4ea563(0x193)] > 0x0
    ) {
      const _0x2c3c4b = [];
      for (let _0x4fec04 of _0x25cbc2) {
        const _0x6590ab = await TicketTag_1[_0x4ea563(0x197)][_0x4ea563(0x18f)](
          { where: { tagId: _0x4fec04 } }
        );
        _0x6590ab &&
          _0x2c3c4b[_0x4ea563(0x191)](
            _0x6590ab['map'](_0x22aa2b => _0x22aa2b[_0x4ea563(0x1b7)])
          );
      }
      const _0x1d20ff = (0x0, lodash_1[_0x4ea563(0x199)])(..._0x2c3c4b);
      _0x458bc7 = {
        ..._0x458bc7,
        id: { [sequelize_1['Op']['in']]: _0x1d20ff }
      };
    }
    if (
      Array[_0x4ea563(0x1aa)](_0x587c3d) &&
      _0x587c3d[_0x4ea563(0x193)] > 0x0
    ) {
      const _0x203a32 = [];
      for (let _0x5e7923 of _0x587c3d) {
        const _0x20268b = await Ticket_1[_0x4ea563(0x197)][_0x4ea563(0x18f)]({
          where: { userId: _0x5e7923 }
        });
        _0x20268b &&
          _0x203a32[_0x4ea563(0x191)](
            _0x20268b[_0x4ea563(0x18b)](_0x3a8b73 => _0x3a8b73['id'])
          );
      }
      const _0x194729 = (0x0, lodash_1[_0x4ea563(0x199)])(..._0x203a32);
      _0x458bc7 = {
        ..._0x458bc7,
        id: { [sequelize_1['Op']['in']]: _0x194729 }
      };
    }
    const _0x2bebe0 = 0x28,
      _0x1825f4 = _0x2bebe0 * (+pageNumber - 0x1);
    _0x458bc7 = { ..._0x458bc7, companyId: _0x36f2b5 };
    const { count: _0x361590, rows: _0x193ac3 } = await Ticket_1[
        _0x4ea563(0x197)
      ]['findAndCountAll']({
        where: _0x458bc7,
        include: _0x55249b,
        distinct: !![],
        limit: _0x2bebe0,
        offset: _0x1825f4,
        order: [['updatedAt', _0x4ea563(0x198)]],
        subQuery: ![]
      }),
      _0xc81e5a = _0x361590 > _0x1825f4 + _0x193ac3[_0x4ea563(0x193)];
    return { tickets: _0x193ac3, count: _0x361590, hasMore: _0xc81e5a };
  };
exports[a626_0x2c8069(0x197)] = ListTicketsServiceKanban;
