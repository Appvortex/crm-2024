'use strict';
const a624_0x408766 = a624_0x5839;
function a624_0x5839(_0x4b94dd, _0x4cccaa) {
  const _0x247eb8 = a624_0x247e();
  return (
    (a624_0x5839 = function (_0x58393e, _0x5ecae7) {
      _0x58393e = _0x58393e - 0x75;
      let _0x3cdfd3 = _0x247eb8[_0x58393e];
      return _0x3cdfd3;
    }),
    a624_0x5839(_0x4b94dd, _0x4cccaa)
  );
}
function a624_0x247e() {
  const _0x43ba38 = [
    '1171038VPglDN',
    'userId',
    '33462055zNvbPM',
    '../../models/Ticket',
    'value',
    './FindOrCreateATicketTrakingService',
    '__importDefault',
    'updatedAt',
    '18185rtdIFl',
    'update',
    '__esModule',
    'sequelize',
    '18xiVXqL',
    '3505695xTdUqP',
    'pending',
    'subHours',
    'findOne',
    'DESC',
    './ShowTicketService',
    '335HtzpZd',
    'defineProperty',
    '10EUxzKC',
    'date-fns',
    'closed',
    '885836ODhGmG',
    'whatsappId',
    'timeCreateNewTicket',
    '2269648xaBqeQ',
    'between',
    'default',
    '6098yrlUuZ',
    '440FPTadr'
  ];
  a624_0x247e = function () {
    return _0x43ba38;
  };
  return a624_0x247e();
}
(function (_0x1931e3, _0x38d41d) {
  const _0x1d8cde = a624_0x5839,
    _0x6d8334 = _0x1931e3();
  while (!![]) {
    try {
      const _0x441416 =
        (parseInt(_0x1d8cde(0x86)) / 0x1) * (-parseInt(_0x1d8cde(0x91)) / 0x2) +
        -parseInt(_0x1d8cde(0x80)) / 0x3 +
        (parseInt(_0x1d8cde(0x92)) / 0x4) * (parseInt(_0x1d8cde(0x7b)) / 0x5) +
        -parseInt(_0x1d8cde(0x93)) / 0x6 +
        parseInt(_0x1d8cde(0x8b)) / 0x7 +
        (parseInt(_0x1d8cde(0x8e)) / 0x8) * (-parseInt(_0x1d8cde(0x7f)) / 0x9) +
        (-parseInt(_0x1d8cde(0x88)) / 0xa) * (-parseInt(_0x1d8cde(0x75)) / 0xb);
      if (_0x441416 === _0x38d41d) break;
      else _0x6d8334['push'](_0x6d8334['shift']());
    } catch (_0x888901) {
      _0x6d8334['push'](_0x6d8334['shift']());
    }
  }
})(a624_0x247e, 0x9667a);
var __importDefault =
  (this && this[a624_0x408766(0x79)]) ||
  function (_0x3f3cc6) {
    const _0x148351 = a624_0x408766;
    return _0x3f3cc6 && _0x3f3cc6[_0x148351(0x7d)]
      ? _0x3f3cc6
      : { default: _0x3f3cc6 };
  };
Object[a624_0x408766(0x87)](exports, '__esModule', { value: !![] });
const date_fns_1 = require(a624_0x408766(0x89)),
  sequelize_1 = require(a624_0x408766(0x7e)),
  Ticket_1 = __importDefault(require(a624_0x408766(0x76))),
  ShowTicketService_1 = __importDefault(require(a624_0x408766(0x85))),
  FindOrCreateATicketTrakingService_1 = __importDefault(
    require(a624_0x408766(0x78))
  ),
  Setting_1 = __importDefault(require('../../models/Setting')),
  FindOrCreateTicketServiceMeta = async (
    _0xd1859,
    _0x4441d2,
    _0x5bec14,
    _0x3eeadb,
    _0x33081d
  ) => {
    const _0x3e3a81 = a624_0x408766;
    let _0x431ab5 = await Ticket_1[_0x3e3a81(0x90)][_0x3e3a81(0x83)]({
      where: {
        status: {
          [sequelize_1['Op']['or']]: ['open', _0x3e3a81(0x81), _0x3e3a81(0x8a)]
        },
        contactId: _0xd1859['id'],
        companyId: _0x3eeadb,
        channel: _0x33081d
      },
      order: [['id', 'DESC']]
    });
    _0x431ab5 &&
      (await _0x431ab5[_0x3e3a81(0x7c)]({ unreadMessages: _0x5bec14 }));
    if (!_0x431ab5) {
      _0x431ab5 = await Ticket_1[_0x3e3a81(0x90)]['findOne']({
        where: { contactId: _0xd1859['id'], channel: _0x33081d },
        order: [[_0x3e3a81(0x7a), _0x3e3a81(0x84)]]
      });
      _0x431ab5 &&
        (await _0x431ab5[_0x3e3a81(0x7c)]({
          status: _0x3e3a81(0x81),
          userId: null,
          unreadMessages: _0x5bec14,
          companyId: _0x3eeadb,
          channel: _0x33081d
        }),
        await (0x0, FindOrCreateATicketTrakingService_1[_0x3e3a81(0x90)])({
          ticketId: _0x431ab5['id'],
          companyId: _0x3eeadb,
          whatsappId: _0x431ab5[_0x3e3a81(0x8c)],
          userId: _0x431ab5[_0x3e3a81(0x94)]
        }));
      const _0x1f4479 = await Setting_1['default'][_0x3e3a81(0x83)]({
          where: { key: _0x3e3a81(0x8d) }
        }),
        _0x4783ab = _0x1f4479
          ? parseInt(_0x1f4479[_0x3e3a81(0x77)], 0xa)
          : 0x1c20;
    }
    return (
      !_0x431ab5 &&
        ((_0x431ab5 = await Ticket_1[_0x3e3a81(0x90)]['findOne']({
          where: {
            updatedAt: {
              [sequelize_1['Op'][_0x3e3a81(0x8f)]]: [
                +(0x0, date_fns_1[_0x3e3a81(0x82)])(new Date(), 0x2),
                +new Date()
              ]
            },
            contactId: _0xd1859['id']
          },
          order: [['updatedAt', _0x3e3a81(0x84)]]
        })),
        _0x431ab5 &&
          (await _0x431ab5['update']({
            status: _0x3e3a81(0x81),
            userId: null,
            unreadMessages: _0x5bec14,
            companyId: _0x3eeadb,
            channel: _0x33081d
          }),
          await (0x0, FindOrCreateATicketTrakingService_1['default'])({
            ticketId: _0x431ab5['id'],
            companyId: _0x3eeadb,
            whatsappId: _0x431ab5['whatsappId'],
            userId: _0x431ab5[_0x3e3a81(0x94)]
          }))),
      !_0x431ab5
        ? ((_0x431ab5 = await Ticket_1[_0x3e3a81(0x90)]['create']({
            contactId: _0xd1859['id'],
            status: _0x3e3a81(0x81),
            isGroup: ![],
            unreadMessages: _0x5bec14,
            whatsappId: _0x4441d2,
            companyId: _0x3eeadb,
            channel: _0x33081d,
            isActiveDemand: ![]
          })),
          await (0x0, FindOrCreateATicketTrakingService_1[_0x3e3a81(0x90)])({
            ticketId: _0x431ab5['id'],
            companyId: _0x3eeadb,
            whatsappId: _0x4441d2,
            userId: _0x431ab5[_0x3e3a81(0x94)]
          }))
        : await _0x431ab5['update']({ whatsappId: _0x4441d2 }),
      (_0x431ab5 = await (0x0, ShowTicketService_1[_0x3e3a81(0x90)])(
        _0x431ab5['id'],
        _0x3eeadb
      )),
      _0x431ab5
    );
  };
exports[a624_0x408766(0x90)] = FindOrCreateTicketServiceMeta;
