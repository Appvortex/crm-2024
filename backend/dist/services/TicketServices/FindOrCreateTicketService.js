'use strict';
const a623_0x300cdd = a623_0x2f13;
(function (_0x1fdae5, _0x1ce3f4) {
  const _0x373c34 = a623_0x2f13,
    _0x5e83d5 = _0x1fdae5();
  while (!![]) {
    try {
      const _0xea691b =
        (-parseInt(_0x373c34(0xa5)) / 0x1) *
          (-parseInt(_0x373c34(0xb7)) / 0x2) +
        -parseInt(_0x373c34(0xaa)) / 0x3 +
        parseInt(_0x373c34(0xbf)) / 0x4 +
        parseInt(_0x373c34(0xc8)) / 0x5 +
        parseInt(_0x373c34(0xc1)) / 0x6 +
        parseInt(_0x373c34(0xa4)) / 0x7 +
        (parseInt(_0x373c34(0xc6)) / 0x8) * (-parseInt(_0x373c34(0xc0)) / 0x9);
      if (_0xea691b === _0x1ce3f4) break;
      else _0x5e83d5['push'](_0x5e83d5['shift']());
    } catch (_0x9b9428) {
      _0x5e83d5['push'](_0x5e83d5['shift']());
    }
  }
})(a623_0xce1f, 0xc7318);
function a623_0xce1f() {
  const _0x1cbf22 = [
    'date-fns',
    'company-',
    '-ticket',
    'disabled',
    'pending',
    'enableLGPD',
    '69226BJrBPr',
    'isNil',
    'Ticket\x20en\x20otra\x20atención.',
    'Atendiendo:\x20',
    'enabled',
    'notification',
    'getWallets',
    '../../models/Ticket',
    '4608184rFIzOm',
    '22096233feXVXY',
    '6986136XTJKcE',
    'update',
    'updatedAt',
    'getIO',
    'name',
    '8WRbdts',
    'findOne',
    '951105SuBgwf',
    '__esModule',
    'lgpd',
    'status',
    'group',
    'lgpdConsent',
    '__importDefault',
    'defineProperty',
    'create',
    'groupAsTicket',
    'timeCreateNewTicket',
    'userId',
    'lgpdMessage',
    'queue',
    'open',
    '4736690OcECpH',
    '22PUDHWD',
    'sequelize',
    'default',
    'emit',
    'queueId',
    '2021238iCGwYa',
    'DESC',
    'lgpdAcceptedAt',
    './FindOrCreateATicketTrakingService',
    'nps',
    'user',
    './CreateLogTicketService'
  ];
  a623_0xce1f = function () {
    return _0x1cbf22;
  };
  return a623_0xce1f();
}
var __importDefault =
  (this && this[a623_0x300cdd(0xce)]) ||
  function (_0x46e4f0) {
    const _0x589e6c = a623_0x300cdd;
    return _0x46e4f0 && _0x46e4f0[_0x589e6c(0xc9)]
      ? _0x46e4f0
      : { default: _0x46e4f0 };
  };
Object[a623_0x300cdd(0xcf)](exports, '__esModule', { value: !![] });
function a623_0x2f13(_0x184216, _0x37ea38) {
  const _0xce1fba = a623_0xce1f();
  return (
    (a623_0x2f13 = function (_0x2f13c3, _0x4693a4) {
      _0x2f13c3 = _0x2f13c3 - 0x9e;
      let _0x33fdcd = _0xce1fba[_0x2f13c3];
      return _0x33fdcd;
    }),
    a623_0x2f13(_0x184216, _0x37ea38)
  );
}
const sequelize_1 = require(a623_0x300cdd(0xa6)),
  date_fns_1 = require(a623_0x300cdd(0xb1)),
  Ticket_1 = __importDefault(require(a623_0x300cdd(0xbe))),
  ShowTicketService_1 = __importDefault(require('./ShowTicketService')),
  FindOrCreateATicketTrakingService_1 = __importDefault(
    require(a623_0x300cdd(0xad))
  ),
  lodash_1 = require('lodash'),
  socket_1 = require('../../libs/socket'),
  CreateLogTicketService_1 = __importDefault(require(a623_0x300cdd(0xb0))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  FindOrCreateTicketService = async (
    _0x2b1324,
    _0x302ac3,
    _0x19850d,
    _0x21f7e9,
    _0x4f4e14 = null,
    _0x1c67e7 = null,
    _0x5c4581,
    _0x47d69f,
    _0x14aec2,
    _0x190108,
    _0x12a3f5,
    _0x29d772,
    _0x46ffc2 = ![]
  ) => {
    const _0x472546 = a623_0x300cdd;
    let _0x1928df = ![],
      _0x1211ee = ![];
    _0x12a3f5[_0x472546(0xb6)] &&
      (_0x1211ee =
        !_0x46ffc2 &&
        !_0x29d772 &&
        _0x12a3f5['enableLGPD'] === _0x472546(0xbb) &&
        _0x12a3f5[_0x472546(0xa1)] !== '' &&
        (_0x12a3f5[_0x472546(0xcd)] === _0x472546(0xbb) ||
          (_0x12a3f5[_0x472546(0xcd)] === _0x472546(0xb4) &&
            (0x0, lodash_1['isNil'])(_0x2b1324?.[_0x472546(0xac)]))));
    const _0x4af5c7 = (0x0, socket_1[_0x472546(0xc4)])(),
      _0x482d6b = _0x12a3f5['DirectTicketsToWallets'];
    let _0x4cfafe = await Ticket_1[_0x472546(0xa7)][_0x472546(0xc7)]({
      where: {
        status: {
          [sequelize_1['Op']['or']]: [
            _0x472546(0xa3),
            'pending',
            _0x472546(0xcc),
            _0x472546(0xae),
            _0x472546(0xca)
          ]
        },
        contactId: _0x5c4581 ? _0x5c4581['id'] : _0x2b1324['id'],
        companyId: _0x21f7e9,
        whatsappId: _0x302ac3['id']
      },
      order: [['id', _0x472546(0xab)]]
    });
    if (_0x4cfafe) {
      _0x46ffc2
        ? await _0x4cfafe[_0x472546(0xc2)]({
            userId:
              _0x1c67e7 !== _0x4cfafe['userId']
                ? _0x4cfafe[_0x472546(0xa0)]
                : _0x1c67e7,
            queueId:
              _0x4f4e14 !== _0x4cfafe[_0x472546(0xa9)]
                ? _0x4cfafe[_0x472546(0xa9)]
                : _0x4f4e14
          })
        : await _0x4cfafe[_0x472546(0xc2)]({
            unreadMessages: _0x19850d,
            isBot: ![]
          });
      _0x4cfafe = await (0x0, ShowTicketService_1['default'])(
        _0x4cfafe['id'],
        _0x21f7e9
      );
      if (!_0x46ffc2) {
        if (
          (Number(_0x4cfafe?.[_0x472546(0xa0)]) !== Number(_0x1c67e7) &&
            _0x1c67e7 !== 0x0 &&
            _0x1c67e7 !== '' &&
            _0x1c67e7 !== '0' &&
            !(0x0, lodash_1['isNil'])(_0x1c67e7)) ||
          (_0x4f4e14 !== 0x0 &&
            Number(_0x4cfafe?.[_0x472546(0xa9)]) !== Number(_0x4f4e14) &&
            _0x4f4e14 !== '' &&
            _0x4f4e14 !== '0' &&
            !(0x0, lodash_1[_0x472546(0xb8)])(_0x4f4e14))
        )
          throw new AppError_1[_0x472546(0xa7)](
            _0x472546(0xb9) +
              (_0x472546(0xba) +
                _0x4cfafe?.[_0x472546(0xaf)]?.[_0x472546(0xc5)]) +
              '\x20-\x20' +
              ('Fila:\x20' + _0x4cfafe?.[_0x472546(0xa2)]?.['name'])
          );
      }
      return (_0x1928df = !![]), { ticket: _0x4cfafe, isCreated: _0x1928df };
    }
    const _0x4877a9 = _0x302ac3[_0x472546(0x9f)];
    !_0x4cfafe &&
      _0x4877a9 !== 0x0 &&
      (_0x4877a9 !== 0x0 &&
        _0x4877a9 !== '0' &&
        (_0x4cfafe = await Ticket_1[_0x472546(0xa7)][_0x472546(0xc7)]({
          where: {
            updatedAt: {
              [sequelize_1['Op']['between']]: [
                +(0x0, date_fns_1['sub'])(new Date(), {
                  minutes: Number(_0x4877a9)
                }),
                +new Date()
              ]
            },
            contactId: _0x2b1324['id'],
            companyId: _0x21f7e9,
            whatsappId: _0x302ac3['id']
          },
          order: [[_0x472546(0xc3), _0x472546(0xab)]]
        })),
      _0x4cfafe &&
        _0x4cfafe['status'] !== 'nps' &&
        (await _0x4cfafe[_0x472546(0xc2)]({
          status: 'pending',
          unreadMessages: _0x19850d,
          companyId: _0x21f7e9
        })));
    if (!_0x4cfafe) {
      const _0x5bd21c = {
        contactId: _0x5c4581 ? _0x5c4581['id'] : _0x2b1324['id'],
        status:
          !_0x14aec2 &&
          !(0x0, lodash_1['isNil'])(_0x12a3f5[_0x472546(0xb6)]) &&
          _0x1211ee &&
          !_0x5c4581
            ? _0x472546(0xca)
            : _0x302ac3[_0x472546(0x9e)] === 'enabled' || !_0x5c4581
              ? _0x472546(0xb5)
              : 'group',
        isGroup: !!_0x5c4581,
        unreadMessages: _0x19850d,
        whatsappId: _0x302ac3['id'],
        companyId: _0x21f7e9,
        isBot: _0x5c4581 ? ![] : !![],
        channel: _0x47d69f,
        imported: _0x14aec2 ? new Date() : null,
        isActiveDemand: ![]
      };
      if (_0x482d6b && _0x2b1324['id']) {
        const _0x4301b5 = _0x2b1324,
          _0xf38760 = await _0x4301b5[_0x472546(0xbd)]();
        _0xf38760 &&
          _0xf38760[0x0]?.['id'] &&
          ((_0x5bd21c[_0x472546(0xcb)] =
            !_0x14aec2 &&
            !(0x0, lodash_1[_0x472546(0xb8)])(_0x12a3f5[_0x472546(0xb6)]) &&
            _0x1211ee &&
            !_0x5c4581
              ? _0x472546(0xca)
              : _0x302ac3[_0x472546(0x9e)] === 'enabled' || !_0x5c4581
                ? _0x472546(0xa3)
                : _0x472546(0xcc)),
          (_0x5bd21c[_0x472546(0xa0)] = _0xf38760[0x0]['id']));
      }
      (_0x4cfafe = await Ticket_1[_0x472546(0xa7)][_0x472546(0xd0)](_0x5bd21c)),
        await (0x0, FindOrCreateATicketTrakingService_1['default'])({
          ticketId: _0x4cfafe['id'],
          companyId: _0x21f7e9,
          whatsappId: _0x302ac3['id'],
          userId: _0x1c67e7 ? _0x1c67e7 : _0x4cfafe['userId']
        }),
        (_0x1928df = !![]);
    }
    _0x4f4e14 != 0x0 &&
      !(0x0, lodash_1[_0x472546(0xb8)])(_0x4f4e14) &&
      (await _0x4cfafe['update']({ queueId: _0x4f4e14 }));
    _0x1c67e7 != 0x0 &&
      !(0x0, lodash_1[_0x472546(0xb8)])(_0x1c67e7) &&
      (await _0x4cfafe[_0x472546(0xc2)]({ userId: _0x1c67e7 }));
    (_0x4cfafe = await (0x0, ShowTicketService_1[_0x472546(0xa7)])(
      _0x4cfafe['id'],
      _0x21f7e9
    )),
      await (0x0, CreateLogTicketService_1[_0x472546(0xa7)])({
        ticketId: _0x4cfafe['id'],
        type: _0x1211ee ? _0x472546(0xca) : _0x472546(0xd0)
      });
    !_0x190108 &&
      !_0x29d772 &&
      _0x4af5c7['to'](_0x4cfafe['status'])
        ['to'](_0x472546(0xbc))
        ['to'](_0x4cfafe['id']['toString']())
        [_0x472546(0xa8)](_0x472546(0xb2) + _0x21f7e9 + _0x472546(0xb3), {
          action: 'update',
          ticket: _0x4cfafe
        });
    return { ticket: _0x4cfafe, isCreated: _0x1928df };
  };
exports[a623_0x300cdd(0xa7)] = FindOrCreateTicketService;
