'use strict';
const a525_0x4d6b81 = a525_0x41c4;
(function (_0x3ce377, _0x13b2f3) {
  const _0x5d1996 = a525_0x41c4,
    _0x3d3e88 = _0x3ce377();
  while (!![]) {
    try {
      const _0x238284 =
        (-parseInt(_0x5d1996(0x14b)) / 0x1) *
          (-parseInt(_0x5d1996(0x147)) / 0x2) +
        (-parseInt(_0x5d1996(0x14a)) / 0x3) *
          (-parseInt(_0x5d1996(0x133)) / 0x4) +
        (-parseInt(_0x5d1996(0x12f)) / 0x5) *
          (-parseInt(_0x5d1996(0x13d)) / 0x6) +
        (parseInt(_0x5d1996(0x136)) / 0x7) *
          (parseInt(_0x5d1996(0x13e)) / 0x8) +
        (-parseInt(_0x5d1996(0x148)) / 0x9) *
          (parseInt(_0x5d1996(0x144)) / 0xa) +
        -parseInt(_0x5d1996(0x12a)) / 0xb +
        (-parseInt(_0x5d1996(0x12d)) / 0xc) *
          (parseInt(_0x5d1996(0x143)) / 0xd);
      if (_0x238284 === _0x13b2f3) break;
      else _0x3d3e88['push'](_0x3d3e88['shift']());
    } catch (_0x1bbc1d) {
      _0x3d3e88['push'](_0x3d3e88['shift']());
    }
  }
})(a525_0x28cf, 0xdd814);
var __importDefault =
  (this && this[a525_0x4d6b81(0x14d)]) ||
  function (_0x1ddeda) {
    const _0x617e50 = a525_0x4d6b81;
    return _0x1ddeda && _0x1ddeda[_0x617e50(0x132)]
      ? _0x1ddeda
      : { default: _0x1ddeda };
  };
function a525_0x28cf() {
  const _0x2d6f83 = [
    'default',
    'allTicket',
    'contactId',
    '3755089cAzTRk',
    '5503730ZGgQOX',
    'intersection',
    '../TicketServices/ShowTicketService',
    '319456bgfiva',
    '9KBRwzi',
    'map',
    '33CslMyT',
    '4GTyrWI',
    'push',
    '__importDefault',
    '7951218verwJD',
    'allowGroup',
    'findAll',
    '12zTAQJE',
    'findAndCountAll',
    '1646115ikOwBW',
    'contact',
    'whatsappId',
    '__esModule',
    '44108omCpjJ',
    'length',
    'defineProperty',
    '147BRUpwL',
    '../UserServices/isQueueIdHistoryBlocked',
    'ERR_NO_TICKET_FOUND',
    'isGroup',
    'lte',
    'companyId',
    'lodash',
    '12IBPVGK',
    '400264gzFpEL',
    'enable'
  ];
  a525_0x28cf = function () {
    return _0x2d6f83;
  };
  return a525_0x28cf();
}
Object[a525_0x4d6b81(0x135)](exports, a525_0x4d6b81(0x132), { value: !![] });
const AppError_1 = __importDefault(require('../../errors/AppError')),
  Message_1 = __importDefault(require('../../models/Message')),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  ShowTicketService_1 = __importDefault(require(a525_0x4d6b81(0x146))),
  sequelize_1 = require('sequelize'),
  lodash_1 = require(a525_0x4d6b81(0x13c)),
  isQueueIdHistoryBlocked_1 = __importDefault(require(a525_0x4d6b81(0x137))),
  ListMessagesService = async ({
    pageNumber: pageNumber = '1',
    ticketId: _0x1d446d,
    companyId: _0x476d57,
    queues: queues = [],
    user: _0x49a5ba
  }) => {
    const _0x2a180b = a525_0x4d6b81,
      _0x206a76 = await (0x0, ShowTicketService_1[_0x2a180b(0x140)])(
        _0x1d446d,
        _0x476d57
      ),
      _0xee13f4 = [],
      _0x41e3b0 = await (0x0, isQueueIdHistoryBlocked_1['default'])({
        userRequest: _0x49a5ba['id']
      });
    let _0x1d995a = [];
    !_0x41e3b0
      ? (_0x1d995a = await Ticket_1['default'][_0x2a180b(0x12c)]({
          where: {
            id: { [sequelize_1['Op'][_0x2a180b(0x13a)]]: _0x206a76['id'] },
            companyId: _0x206a76[_0x2a180b(0x13b)],
            contactId: _0x206a76[_0x2a180b(0x142)],
            whatsappId: _0x206a76[_0x2a180b(0x131)],
            isGroup: _0x206a76[_0x2a180b(0x139)],
            queueId:
              _0x49a5ba['profile'] === 'admin' ||
              _0x49a5ba[_0x2a180b(0x141)] === _0x2a180b(0x13f) ||
              (_0x206a76[_0x2a180b(0x139)] && _0x49a5ba[_0x2a180b(0x12b)])
                ? { [sequelize_1['Op']['or']]: [queues, null] }
                : { [sequelize_1['Op']['in']]: queues }
          },
          attributes: ['id']
        }))
      : (_0x1d995a = await Ticket_1[_0x2a180b(0x140)][_0x2a180b(0x12c)]({
          where: {
            id: { [sequelize_1['Op'][_0x2a180b(0x13a)]]: _0x206a76['id'] },
            companyId: _0x206a76[_0x2a180b(0x13b)],
            contactId: _0x206a76[_0x2a180b(0x142)],
            whatsappId: _0x206a76[_0x2a180b(0x131)],
            isGroup: _0x206a76[_0x2a180b(0x139)]
          },
          attributes: ['id']
        }));
    _0x1d995a &&
      _0xee13f4[_0x2a180b(0x14c)](
        _0x1d995a[_0x2a180b(0x149)](_0x274d6e => _0x274d6e['id'])
      );
    const _0xe5b01f = (0x0, lodash_1[_0x2a180b(0x145)])(..._0xee13f4);
    if (!_0xe5b01f)
      throw new AppError_1[_0x2a180b(0x140)](_0x2a180b(0x138), 0x194);
    const _0x322b33 = 0x14,
      _0x4ce8bd = _0x322b33 * (+pageNumber - 0x1),
      { count: _0x237e19, rows: _0x3dfba3 } = await Message_1[_0x2a180b(0x140)][
        _0x2a180b(0x12e)
      ]({
        where: { ticketId: _0xe5b01f, companyId: _0x476d57 },
        limit: _0x322b33,
        include: [
          'contact',
          {
            model: Message_1['default'],
            as: 'quotedMsg',
            include: [_0x2a180b(0x130)]
          },
          {
            model: Ticket_1[_0x2a180b(0x140)],
            required: !![],
            include: ['queue']
          }
        ],
        distinct: !![],
        offset: _0x4ce8bd,
        order: [['createdAt', 'DESC']]
      }),
      _0x435636 = _0x237e19 > _0x4ce8bd + _0x3dfba3[_0x2a180b(0x134)];
    return {
      messages: _0x3dfba3['reverse'](),
      ticket: _0x206a76,
      count: _0x237e19,
      hasMore: _0x435636
    };
  };
function a525_0x41c4(_0x8333ef, _0x28a632) {
  const _0x28cf03 = a525_0x28cf();
  return (
    (a525_0x41c4 = function (_0x41c464, _0x350b08) {
      _0x41c464 = _0x41c464 - 0x12a;
      let _0x4135e9 = _0x28cf03[_0x41c464];
      return _0x4135e9;
    }),
    a525_0x41c4(_0x8333ef, _0x28a632)
  );
}
exports[a525_0x4d6b81(0x140)] = ListMessagesService;
