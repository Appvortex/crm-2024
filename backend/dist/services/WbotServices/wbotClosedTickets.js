'use strict';
const a658_0xc822ac = a658_0x1018;
function a658_0x1018(_0x5564a6, _0x5b500f) {
  const _0x131e0b = a658_0x131e();
  return (
    (a658_0x1018 = function (_0x101896, _0x1f563b) {
      _0x101896 = _0x101896 - 0x17e;
      let _0x2d9b0c = _0x131e0b[_0x101896];
      return _0x2d9b0c;
    }),
    a658_0x1018(_0x5564a6, _0x5b500f)
  );
}
function a658_0x131e() {
  const _0x1d73b1 = [
    '1461840PdGYem',
    'timeInactiveMessage',
    'sendIdQueue',
    'expiresTicketNPS',
    'status',
    'findOne',
    'default',
    'autoClose',
    'nps',
    '7218BLWRfd',
    '678342dlJRco',
    'sequelize',
    'queueId',
    'length',
    'DESC',
    'isGroup',
    'setMinutes',
    '2283248TriNyU',
    'company-',
    'expiresInactiveMessage',
    '-ticket',
    'defineProperty',
    'update',
    'findAll',
    'timeSendQueue',
    'findAndCountAll',
    '../../models/Ticket',
    'open',
    'inactiveMessage',
    'sendInactiveMessage',
    'info',
    'whatsappId',
    '\x20para\x20encerrar\x20NPS!',
    'whenExpiresTicket',
    'ClosedAllOpenTickets',
    '63vaXewP',
    'whatsapps',
    'verifyMessage',
    '../TicketServices/CreateLogTicketService',
    'toDate',
    'updatedAt',
    'contact',
    'forEach',
    'logger',
    'map',
    '72ylNiMV',
    'emit',
    'userId',
    '2311001zlAhQG',
    'fromMe',
    '10QpODej',
    'complationMessage',
    '../../libs/socket',
    'moment',
    '1333902XZgUXR',
    'Encontrou\x20',
    'log',
    'name',
    '5LizzCS',
    '128682FkDUgw',
    '__importDefault',
    './SendWhatsAppMessage',
    'CONNECTED',
    'getMinutes',
    'delete',
    'closed',
    '../../models/Company',
    '../../models/TicketTraking',
    '__esModule',
    'expiresTicket',
    '\x20para\x20encerrar\x20por\x20inatividade!'
  ];
  a658_0x131e = function () {
    return _0x1d73b1;
  };
  return a658_0x131e();
}
(function (_0x43c382, _0x36fa44) {
  const _0x590c03 = a658_0x1018,
    _0x442a71 = _0x43c382();
  while (!![]) {
    try {
      const _0xa3b39a =
        (parseInt(_0x590c03(0x187)) / 0x1) *
          (parseInt(_0x590c03(0x1b4)) / 0x2) +
        parseInt(_0x590c03(0x1b5)) / 0x3 +
        parseInt(_0x590c03(0x1ab)) / 0x4 +
        (parseInt(_0x590c03(0x19e)) / 0x5) *
          (-parseInt(_0x590c03(0x19a)) / 0x6) +
        -parseInt(_0x590c03(0x194)) / 0x7 +
        (-parseInt(_0x590c03(0x191)) / 0x8) *
          (-parseInt(_0x590c03(0x19f)) / 0x9) +
        (-parseInt(_0x590c03(0x196)) / 0xa) *
          (parseInt(_0x590c03(0x1bc)) / 0xb);
      if (_0xa3b39a === _0x36fa44) break;
      else _0x442a71['push'](_0x442a71['shift']());
    } catch (_0x35afc) {
      _0x442a71['push'](_0x442a71['shift']());
    }
  }
})(a658_0x131e, 0x2dccb);
var __importDefault =
  (this && this[a658_0xc822ac(0x1a0)]) ||
  function (_0x1a4170) {
    const _0x560504 = a658_0xc822ac;
    return _0x1a4170 && _0x1a4170[_0x560504(0x1a8)]
      ? _0x1a4170
      : { default: _0x1a4170 };
  };
Object[a658_0xc822ac(0x1c0)](exports, a658_0xc822ac(0x1a8), { value: !![] }),
  (exports[a658_0xc822ac(0x186)] = void 0x0);
const sequelize_1 = require(a658_0xc822ac(0x1b6)),
  Ticket_1 = __importDefault(require(a658_0xc822ac(0x17e))),
  Whatsapp_1 = __importDefault(require('../../models/Whatsapp')),
  socket_1 = require(a658_0xc822ac(0x198)),
  Mustache_1 = __importDefault(require('../../helpers/Mustache')),
  SendWhatsAppMessage_1 = __importDefault(require(a658_0xc822ac(0x1a1))),
  moment_1 = __importDefault(require(a658_0xc822ac(0x199))),
  ShowTicketService_1 = __importDefault(
    require('../TicketServices/ShowTicketService')
  ),
  wbotMessageListener_1 = require('./wbotMessageListener'),
  TicketTraking_1 = __importDefault(require(a658_0xc822ac(0x1a7))),
  CreateLogTicketService_1 = __importDefault(require(a658_0xc822ac(0x18a))),
  Company_1 = __importDefault(require(a658_0xc822ac(0x1a6))),
  logger_1 = require('../../utils/logger'),
  ClosedAllOpenTickets = async _0x4a2c50 => {
    const _0x242d96 = a658_0xc822ac,
      _0xdee98e = async (_0x28555a, _0x375db7, _0x5bcec0) => {
        const _0xb2594e = a658_0x1018;
        if (_0x375db7 === 'nps')
          await _0x28555a[_0xb2594e(0x1c1)]({
            status: _0xb2594e(0x1a5),
            lastMessage: _0x5bcec0,
            unreadMessages: 0x0,
            amountUsedBotQueues: 0x0
          });
        else
          _0x375db7 === 'open'
            ? await _0x28555a[_0xb2594e(0x1c1)]({
                status: _0xb2594e(0x1a5),
                lastMessage: _0x5bcec0,
                unreadMessages: 0x0,
                amountUsedBotQueues: 0x0
              })
            : await _0x28555a[_0xb2594e(0x1c1)]({
                status: _0xb2594e(0x1a5),
                unreadMessages: 0x0
              });
        await (0x0, CreateLogTicketService_1[_0xb2594e(0x1b1)])({
          userId: _0x28555a[_0xb2594e(0x193)] || null,
          queueId: _0x28555a[_0xb2594e(0x1b7)] || null,
          ticketId: _0x28555a['id'],
          type: _0xb2594e(0x1b2)
        });
      },
      _0x8d49c4 = (0x0, socket_1['getIO'])();
    try {
      const _0x47e324 = await Company_1[_0x242d96(0x1b1)]['findAll']({
        attributes: ['id', _0x242d96(0x19d)],
        where: { status: !![] },
        include: [
          {
            model: Whatsapp_1[_0x242d96(0x1b1)],
            attributes: [
              'id',
              _0x242d96(0x19d),
              'status',
              _0x242d96(0x1c3),
              'sendIdQueue',
              _0x242d96(0x1ac),
              _0x242d96(0x1be),
              'inactiveMessage',
              'expiresTicket',
              _0x242d96(0x1ae),
              _0x242d96(0x185),
              _0x242d96(0x197)
            ],
            where: {
              expiresTicket: { [sequelize_1['Op']['gt']]: '0' },
              status: _0x242d96(0x1a2)
            }
          }
        ]
      });
      _0x47e324[_0x242d96(0x190)](async _0x201210 => {
        const _0x16d542 = _0x242d96;
        _0x201210[_0x16d542(0x188)]['map'](async _0x4ab3bc => {
          const _0x4a9a8a = _0x16d542,
            _0x1b234c = new Date(),
            _0x1fb34e = _0x1b234c;
          _0x1b234c[_0x4a9a8a(0x1bb)](
            _0x1b234c[_0x4a9a8a(0x1a3)]() - Number(_0x4ab3bc[_0x4a9a8a(0x1a9)])
          );
          Number(_0x4ab3bc[_0x4a9a8a(0x1ac)]) > 0x0 &&
            (_0x1fb34e[_0x4a9a8a(0x1bb)](
              _0x1fb34e[_0x4a9a8a(0x1a3)]() -
                Number(_0x4ab3bc[_0x4a9a8a(0x1ac)])
            ),
            _0x1b234c[_0x4a9a8a(0x1bb)](
              _0x1b234c[_0x4a9a8a(0x1a3)]() -
                Number(_0x4ab3bc[_0x4a9a8a(0x1ac)])
            ));
          const { rows: _0x316b08 } = await Ticket_1[_0x4a9a8a(0x1b1)][
            'findAndCountAll'
          ]({
            where: {
              status: _0x4a9a8a(0x17f),
              companyId: _0x4a2c50,
              whatsappId: _0x4ab3bc['id'],
              updatedAt: { [sequelize_1['Op']['lt']]: _0x1b234c },
              imported: null
            },
            order: [[_0x4a9a8a(0x18c), _0x4a9a8a(0x1b9)]]
          });
          _0x316b08 &&
            _0x316b08[_0x4a9a8a(0x1b8)] > 0x0 &&
            (logger_1['logger'][_0x4a9a8a(0x182)](
              _0x4a9a8a(0x19b) + _0x316b08['length'] + _0x4a9a8a(0x1aa)
            ),
            _0x316b08[_0x4a9a8a(0x18e)](async _0x62e139 => {
              const _0x20d9ff = _0x4a9a8a,
                _0x4b41d7 = await (0x0, ShowTicketService_1['default'])(
                  _0x62e139['id'],
                  _0x4a2c50
                ),
                _0x3e6bea = await TicketTraking_1['default'][_0x20d9ff(0x1b0)]({
                  where: { ticketId: _0x62e139['id'], finishedAt: null }
                });
              if (!_0x4ab3bc) return;
              let {
                timeInactiveMessage: _0xd35c6a,
                expiresInactiveMessage: _0x2818d5,
                inactiveMessage: _0x4460e7,
                expiresTicket: _0x2157bc,
                expiresTicketNPS: _0x13cfbc,
                whenExpiresTicket: _0x1ac5e2,
                complationMessage: _0x35edeb
              } = _0x4ab3bc;
              if (
                _0x2157bc &&
                _0x2157bc !== '' &&
                _0x2157bc !== '0' &&
                Number(_0x2157bc) > 0x0
              ) {
                const _0x820e6c = (0x0, Mustache_1['default'])(
                  '‎' + _0x2818d5,
                  _0x4b41d7
                );
                if (
                  _0x4b41d7[_0x20d9ff(0x1af)] === 'open' &&
                  !_0x4b41d7[_0x20d9ff(0x1ba)]
                ) {
                  const _0x4c83de = new Date(_0x4b41d7[_0x20d9ff(0x18c)]);
                  if (
                    _0x4c83de < _0x1b234c &&
                    (_0x1ac5e2 === '0' ||
                      (_0x1ac5e2 === '1' && _0x4b41d7[_0x20d9ff(0x195)]))
                  ) {
                    _0xdee98e(
                      _0x4b41d7,
                      _0x4b41d7[_0x20d9ff(0x1af)],
                      _0x820e6c
                    );
                    if (_0x2818d5 !== '' && _0x2818d5 !== undefined) {
                      const _0x3b71e1 = await (0x0,
                      SendWhatsAppMessage_1[_0x20d9ff(0x1b1)])({
                        body: _0x820e6c,
                        ticket: _0x4b41d7
                      });
                      await (0x0, wbotMessageListener_1['verifyMessage'])(
                        _0x3b71e1,
                        _0x4b41d7,
                        _0x4b41d7['contact']
                      );
                    }
                    await _0x3e6bea[_0x20d9ff(0x1c1)]({
                      finishedAt: (0x0, moment_1[_0x20d9ff(0x1b1)])()[
                        _0x20d9ff(0x18b)
                      ](),
                      closedAt: (0x0, moment_1[_0x20d9ff(0x1b1)])()[
                        _0x20d9ff(0x18b)
                      ](),
                      whatsappId: _0x62e139[_0x20d9ff(0x183)],
                      userId: _0x62e139[_0x20d9ff(0x193)]
                    }),
                      _0x8d49c4['to'](_0x20d9ff(0x17f))['emit'](
                        _0x20d9ff(0x1bd) + _0x4a2c50 + _0x20d9ff(0x1bf),
                        { action: _0x20d9ff(0x1a4), ticketId: _0x4b41d7['id'] }
                      );
                  }
                }
              }
              if (
                _0xd35c6a &&
                _0xd35c6a !== '' &&
                _0xd35c6a !== '0' &&
                Number(_0xd35c6a) > 0x0
              ) {
                const _0x4c7805 = (0x0, Mustache_1[_0x20d9ff(0x1b1)])(
                  '‎' + _0x4460e7,
                  _0x4b41d7
                );
                if (
                  _0x4b41d7[_0x20d9ff(0x1af)] === _0x20d9ff(0x17f) &&
                  !_0x4b41d7[_0x20d9ff(0x1ba)]
                ) {
                  const _0x5cc8bd = new Date(_0x4b41d7[_0x20d9ff(0x18c)]);
                  if (
                    _0x5cc8bd < _0x1fb34e &&
                    !_0x4b41d7[_0x20d9ff(0x181)] &&
                    (_0x1ac5e2 === '0' ||
                      (_0x1ac5e2 === '1' && _0x4b41d7[_0x20d9ff(0x195)]))
                  ) {
                    const _0x46e35d = await (0x0,
                    SendWhatsAppMessage_1[_0x20d9ff(0x1b1)])({
                      body: _0x4c7805,
                      ticket: _0x4b41d7
                    });
                    await (0x0, wbotMessageListener_1[_0x20d9ff(0x189)])(
                      _0x46e35d,
                      _0x4b41d7,
                      _0x4b41d7[_0x20d9ff(0x18d)]
                    ),
                      await _0x4b41d7[_0x20d9ff(0x1c1)]({
                        sendInactiveMessage: !![]
                      }),
                      _0x8d49c4['to'](_0x20d9ff(0x17f))[_0x20d9ff(0x192)](
                        _0x20d9ff(0x1bd) + _0x4a2c50 + _0x20d9ff(0x1bf),
                        {
                          action: 'delete',
                          ticket: _0x4b41d7,
                          ticketId: _0x4b41d7['id']
                        }
                      );
                  }
                }
              }
            }));
        });
      });
      const _0x4009e0 = await Company_1[_0x242d96(0x1b1)][_0x242d96(0x1c2)]({
        attributes: ['id', 'name'],
        where: { status: !![] },
        include: [
          {
            model: Whatsapp_1[_0x242d96(0x1b1)],
            attributes: [
              'id',
              _0x242d96(0x19d),
              _0x242d96(0x1af),
              _0x242d96(0x1c3),
              _0x242d96(0x1ad),
              _0x242d96(0x1ac),
              _0x242d96(0x1be),
              _0x242d96(0x180),
              'expiresTicket',
              _0x242d96(0x1ae),
              'whenExpiresTicket',
              _0x242d96(0x197)
            ],
            where: {
              expiresTicketNPS: { [sequelize_1['Op']['gt']]: '0' },
              status: _0x242d96(0x1a2)
            }
          }
        ]
      });
      _0x4009e0[_0x242d96(0x190)](async _0x2d2e7e => {
        const _0x2ccc0b = _0x242d96;
        _0x2d2e7e[_0x2ccc0b(0x188)]['map'](async _0x15942c => {
          const _0x1eee51 = _0x2ccc0b,
            _0xc0b834 = new Date();
          _0xc0b834[_0x1eee51(0x1bb)](
            _0xc0b834[_0x1eee51(0x1a3)]() - Number(_0x15942c[_0x1eee51(0x1ae)])
          );
          const { rows: _0x5137c9 } = await Ticket_1[_0x1eee51(0x1b1)][
            _0x1eee51(0x1c4)
          ]({
            where: {
              status: _0x1eee51(0x1b3),
              companyId: _0x4a2c50,
              whatsappId: _0x15942c['id'],
              updatedAt: { [sequelize_1['Op']['lt']]: _0xc0b834 },
              imported: null
            },
            order: [[_0x1eee51(0x18c), _0x1eee51(0x1b9)]]
          });
          _0x5137c9 &&
            _0x5137c9['length'] > 0x0 &&
            (logger_1[_0x1eee51(0x18f)]['info'](
              _0x1eee51(0x19b) + _0x5137c9['length'] + _0x1eee51(0x184)
            ),
            _0x5137c9[_0x1eee51(0x18e)](async _0x508620 => {
              const _0x3c2b23 = _0x1eee51,
                _0x3de792 = await (0x0, ShowTicketService_1[_0x3c2b23(0x1b1)])(
                  _0x508620['id'],
                  _0x4a2c50
                ),
                _0x518011 = await TicketTraking_1[_0x3c2b23(0x1b1)][
                  _0x3c2b23(0x1b0)
                ]({ where: { ticketId: _0x508620['id'], finishedAt: null } });
              if (!_0x15942c) return;
              let {
                timeInactiveMessage: _0x533233,
                expiresInactiveMessage: _0x430769,
                inactiveMessage: _0x38b0e4,
                expiresTicket: _0x478aa6,
                expiresTicketNPS: _0xa95841,
                whenExpiresTicket: _0x320846,
                complationMessage: _0xf8c253
              } = _0x15942c;
              if (
                _0xa95841 &&
                _0xa95841 !== '' &&
                _0xa95841 !== '0' &&
                Number(_0xa95841) > 0x0
              ) {
                if (_0x508620[_0x3c2b23(0x1af)] === _0x3c2b23(0x1b3)) {
                  const _0x1a6cf8 = new Date(_0x3de792['updatedAt']);
                  if (_0x1a6cf8 < _0xc0b834) {
                    _0xdee98e(_0x3de792, _0x3de792[_0x3c2b23(0x1af)], '');
                    const _0x58e5a7 = (0x0, Mustache_1[_0x3c2b23(0x1b1)])(
                      '‎' + _0xf8c253,
                      _0x3de792
                    );
                    if (_0xf8c253 !== '' && _0xf8c253 !== undefined) {
                      const _0x144345 = await (0x0,
                      SendWhatsAppMessage_1[_0x3c2b23(0x1b1)])({
                        body: _0x58e5a7,
                        ticket: _0x3de792
                      });
                      await (0x0, wbotMessageListener_1['verifyMessage'])(
                        _0x144345,
                        _0x3de792,
                        _0x3de792['contact']
                      );
                    }
                    await _0x518011[_0x3c2b23(0x1c1)]({
                      finishedAt: (0x0, moment_1[_0x3c2b23(0x1b1)])()[
                        _0x3c2b23(0x18b)
                      ](),
                      closedAt: (0x0, moment_1[_0x3c2b23(0x1b1)])()[
                        _0x3c2b23(0x18b)
                      ](),
                      whatsappId: _0x508620['whatsappId'],
                      userId: _0x508620['userId']
                    }),
                      _0x8d49c4['to']('open')[_0x3c2b23(0x192)](
                        _0x3c2b23(0x1bd) + _0x4a2c50 + _0x3c2b23(0x1bf),
                        { action: _0x3c2b23(0x1a4), ticketId: _0x3de792['id'] }
                      );
                  }
                }
              }
            }));
        });
      });
    } catch (_0x43370d) {
      console[_0x242d96(0x19c)]('e', _0x43370d);
    }
  };
exports[a658_0xc822ac(0x186)] = ClosedAllOpenTickets;
