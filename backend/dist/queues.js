'use strict';
const a364_0x31c8db = a364_0x4357;
(function (_0x28edcb, _0x27ad71) {
  const _0x41b567 = a364_0x4357,
    _0x583a55 = _0x28edcb();
  while (!![]) {
    try {
      const _0x4ea05d =
        -parseInt(_0x41b567(0xa5)) / 0x1 +
        parseInt(_0x41b567(0xf5)) / 0x2 +
        (-parseInt(_0x41b567(0x155)) / 0x3) *
          (-parseInt(_0x41b567(0x185)) / 0x4) +
        (-parseInt(_0x41b567(0xf4)) / 0x5) *
          (-parseInt(_0x41b567(0x162)) / 0x6) +
        parseInt(_0x41b567(0x107)) / 0x7 +
        (parseInt(_0x41b567(0xad)) / 0x8) *
          (-parseInt(_0x41b567(0x147)) / 0x9) +
        (parseInt(_0x41b567(0x110)) / 0xa) * (parseInt(_0x41b567(0x12b)) / 0xb);
      if (_0x4ea05d === _0x27ad71) break;
      else _0x583a55['push'](_0x583a55['shift']());
    } catch (_0x42f7ec) {
      _0x583a55['push'](_0x583a55['shift']());
    }
  }
})(a364_0x2b1a, 0x3ed6d);
var __createBinding =
    (this && this[a364_0x31c8db(0x13a)]) ||
    (Object[a364_0x31c8db(0xdb)]
      ? function (_0x5a35ab, _0x20228b, _0x551080, _0x29aa0e) {
          const _0x11a89c = a364_0x31c8db;
          if (_0x29aa0e === undefined) _0x29aa0e = _0x551080;
          var _0xf8f2b0 = Object[_0x11a89c(0xe0)](_0x20228b, _0x551080);
          (!_0xf8f2b0 ||
            (_0x11a89c(0x17c) in _0xf8f2b0
              ? !_0x20228b[_0x11a89c(0xc1)]
              : _0xf8f2b0[_0x11a89c(0x145)] || _0xf8f2b0['configurable'])) &&
            (_0xf8f2b0 = {
              enumerable: !![],
              get: function () {
                return _0x20228b[_0x551080];
              }
            }),
            Object[_0x11a89c(0x170)](_0x5a35ab, _0x29aa0e, _0xf8f2b0);
        }
      : function (_0x37f81c, _0x40dae7, _0x262e50, _0x34ecdf) {
          if (_0x34ecdf === undefined) _0x34ecdf = _0x262e50;
          _0x37f81c[_0x34ecdf] = _0x40dae7[_0x262e50];
        }),
  __setModuleDefault =
    (this && this[a364_0x31c8db(0x111)]) ||
    (Object[a364_0x31c8db(0xdb)]
      ? function (_0x20db77, _0x3e4721) {
          const _0xfd521b = a364_0x31c8db;
          Object['defineProperty'](_0x20db77, _0xfd521b(0xe2), {
            enumerable: !![],
            value: _0x3e4721
          });
        }
      : function (_0x4150ca, _0x5fb31b) {
          _0x4150ca['default'] = _0x5fb31b;
        }),
  __importStar =
    (this && this[a364_0x31c8db(0xb8)]) ||
    function (_0x19d354) {
      const _0x3adfeb = a364_0x31c8db;
      if (_0x19d354 && _0x19d354[_0x3adfeb(0xc1)]) return _0x19d354;
      var _0x59e65e = {};
      if (_0x19d354 != null) {
        for (var _0x2f6348 in _0x19d354)
          if (
            _0x2f6348 !== _0x3adfeb(0xe2) &&
            Object[_0x3adfeb(0x9d)]['hasOwnProperty'][_0x3adfeb(0x9a)](
              _0x19d354,
              _0x2f6348
            )
          )
            __createBinding(_0x59e65e, _0x19d354, _0x2f6348);
      }
      return __setModuleDefault(_0x59e65e, _0x19d354), _0x59e65e;
    },
  __importDefault =
    (this && this[a364_0x31c8db(0x78)]) ||
    function (_0x5e8a37) {
      const _0x388c5a = a364_0x31c8db;
      return _0x5e8a37 && _0x5e8a37[_0x388c5a(0xc1)]
        ? _0x5e8a37
        : { default: _0x5e8a37 };
    };
Object[a364_0x31c8db(0x170)](exports, a364_0x31c8db(0xc1), { value: !![] }),
  (exports[a364_0x31c8db(0xfa)] =
    exports[a364_0x31c8db(0x183)] =
    exports[a364_0x31c8db(0x13e)] =
    exports[a364_0x31c8db(0xde)] =
    exports[a364_0x31c8db(0xb6)] =
    exports[a364_0x31c8db(0x82)] =
    exports['sendScheduledMessages'] =
    exports[a364_0x31c8db(0xa2)] =
    exports[a364_0x31c8db(0x17b)] =
      void 0x0);
const Sentry = __importStar(require('@sentry/node')),
  bull_1 = __importDefault(require('bull')),
  SendMessage_1 = require(a364_0x31c8db(0xd5)),
  Whatsapp_1 = __importDefault(require(a364_0x31c8db(0x176))),
  logger_1 = require(a364_0x31c8db(0x137)),
  moment_1 = __importDefault(require(a364_0x31c8db(0x16e))),
  Schedule_1 = __importDefault(require(a364_0x31c8db(0xc0))),
  sequelize_1 = require(a364_0x31c8db(0xc5)),
  GetDefaultWhatsApp_1 = __importDefault(require(a364_0x31c8db(0x88))),
  Campaign_1 = __importDefault(require('./models/Campaign')),
  Queue_1 = __importDefault(require(a364_0x31c8db(0xbc))),
  ContactList_1 = __importDefault(require('./models/ContactList')),
  ContactListItem_1 = __importDefault(require(a364_0x31c8db(0x132))),
  lodash_1 = require(a364_0x31c8db(0xba)),
  CampaignSetting_1 = __importDefault(require(a364_0x31c8db(0x8f))),
  CampaignShipping_1 = __importDefault(require('./models/CampaignShipping')),
  GetWhatsappWbot_1 = __importDefault(require(a364_0x31c8db(0x173))),
  database_1 = __importDefault(require('./database')),
  SendWhatsAppMedia_1 = require(a364_0x31c8db(0xfc)),
  socket_1 = require(a364_0x31c8db(0xd2)),
  path_1 = __importDefault(require(a364_0x31c8db(0xd7))),
  User_1 = __importDefault(require(a364_0x31c8db(0xeb))),
  Company_1 = __importDefault(require(a364_0x31c8db(0xd4))),
  Contact_1 = __importDefault(require('./models/Contact')),
  Queue_2 = __importDefault(require('./models/Queue')),
  wbotClosedTickets_1 = require('./services/WbotServices/wbotClosedTickets'),
  Ticket_1 = __importDefault(require(a364_0x31c8db(0x178))),
  ShowContactService_1 = __importDefault(
    require('./services/ContactServices/ShowContactService')
  ),
  UserQueue_1 = __importDefault(require(a364_0x31c8db(0xe3))),
  ShowTicketService_1 = __importDefault(require(a364_0x31c8db(0x10c))),
  SendWhatsAppMessage_1 = __importDefault(require(a364_0x31c8db(0x87))),
  UpdateTicketService_1 = __importDefault(require(a364_0x31c8db(0x101))),
  date_fns_1 = require(a364_0x31c8db(0x16a)),
  GetWhatsapp_1 = require('./helpers/GetWhatsapp'),
  nodemailer = require(a364_0x31c8db(0x181)),
  CronJob = require(a364_0x31c8db(0x179))[a364_0x31c8db(0x10d)],
  CompaniesSettings_1 = __importDefault(require(a364_0x31c8db(0xbb))),
  wbotMessageListener_1 = require('./services/WbotServices/wbotMessageListener'),
  FindOrCreateTicketService_1 = __importDefault(require(a364_0x31c8db(0x77))),
  CreateLogTicketService_1 = __importDefault(
    require('./services/TicketServices/CreateLogTicketService')
  ),
  connection = process['env']['REDIS_URI'] || '',
  limiterMax = process['env'][a364_0x31c8db(0x153)] || 0x1,
  limiterDuration = process['env'][a364_0x31c8db(0x75)] || 0xbb8;
(exports['userMonitor'] = new bull_1[a364_0x31c8db(0xe2)](
  a364_0x31c8db(0x102),
  connection
)),
  (exports['scheduleMonitor'] = new bull_1[a364_0x31c8db(0xe2)](
    a364_0x31c8db(0xbe),
    connection
  )),
  (exports['sendScheduledMessages'] = new bull_1[a364_0x31c8db(0xe2)](
    a364_0x31c8db(0x154),
    connection
  )),
  (exports[a364_0x31c8db(0x82)] = new bull_1[a364_0x31c8db(0xe2)](
    'CampaignQueue',
    connection
  )),
  (exports['queueMonitor'] = new bull_1['default'](
    a364_0x31c8db(0x11a),
    connection
  )),
  (exports['messageQueue'] = new bull_1[a364_0x31c8db(0xe2)](
    a364_0x31c8db(0x91),
    connection,
    { limiter: { max: limiterMax, duration: limiterDuration } }
  ));
async function handleSendMessage(_0x577b7a) {
  const _0x366f6d = a364_0x31c8db;
  try {
    const { data: _0x11624e } = _0x577b7a,
      _0x3c697f = await Whatsapp_1['default'][_0x366f6d(0x142)](
        _0x11624e[_0x366f6d(0xb9)]
      );
    if (_0x3c697f === null) throw Error('Whatsapp\x20não\x20identificado');
    const _0x1c2d9e = _0x11624e[_0x366f6d(0x103)];
    await (0x0, SendMessage_1[_0x366f6d(0x127)])(_0x3c697f, _0x1c2d9e);
  } catch (_0x45e58f) {
    Sentry[_0x366f6d(0x7d)](_0x45e58f),
      logger_1['logger'][_0x366f6d(0x17a)](
        _0x366f6d(0x96),
        _0x45e58f['message']
      );
    throw _0x45e58f;
  }
}
async function handleVerifySchedules(_0x5d52cc) {
  const _0x18d0bc = a364_0x31c8db;
  try {
    const { count: _0x142476, rows: _0x1e6aec } = await Schedule_1[
      _0x18d0bc(0xe2)
    ][_0x18d0bc(0xf6)]({
      where: {
        status: _0x18d0bc(0xc2),
        sentAt: null,
        sendAt: {
          [sequelize_1['Op'][_0x18d0bc(0x136)]]: (0x0,
          moment_1[_0x18d0bc(0xe2)])()[_0x18d0bc(0xb5)](_0x18d0bc(0xf9)),
          [sequelize_1['Op'][_0x18d0bc(0xf8)]]: (0x0,
          moment_1[_0x18d0bc(0xe2)])()
            ['add']('30', _0x18d0bc(0x139))
            [_0x18d0bc(0xb5)](_0x18d0bc(0xf9))
        }
      },
      include: [{ model: Contact_1[_0x18d0bc(0xe2)], as: _0x18d0bc(0x14a) }]
    });
    _0x142476 > 0x0 &&
      _0x1e6aec['map'](async _0x1160e6 => {
        const _0x33629d = _0x18d0bc;
        await _0x1160e6[_0x33629d(0x98)]({ status: _0x33629d(0xf3) }),
          exports[_0x33629d(0x108)][_0x33629d(0x83)](
            'SendMessage',
            { schedule: _0x1160e6 },
            { delay: 0x9c40 }
          ),
          logger_1[_0x33629d(0x120)][_0x33629d(0xc8)](
            _0x33629d(0x8c) + _0x1160e6['contact'][_0x33629d(0x149)]
          );
      });
  } catch (_0x8c9ce1) {
    Sentry[_0x18d0bc(0x7d)](_0x8c9ce1),
      logger_1[_0x18d0bc(0x120)]['error'](
        _0x18d0bc(0x128),
        _0x8c9ce1[_0x18d0bc(0xab)]
      );
    throw _0x8c9ce1;
  }
}
async function handleSendScheduledMessage(_0x25b2aa) {
  const _0x17b883 = a364_0x31c8db,
    {
      data: { schedule: _0x2278aa }
    } = _0x25b2aa;
  let _0x44529d = null;
  try {
    _0x44529d = await Schedule_1[_0x17b883(0xe2)][_0x17b883(0x142)](
      _0x2278aa['id']
    );
  } catch (_0x440fc4) {
    Sentry[_0x17b883(0x7d)](_0x440fc4),
      logger_1['logger']['info'](_0x17b883(0xbd) + _0x2278aa['id']);
  }
  try {
    const _0x44a06f = await (0x0, GetDefaultWhatsApp_1[_0x17b883(0xe2)])(
        _0x2278aa[_0x17b883(0x14f)]
      ),
      _0x19018d = await CompaniesSettings_1[_0x17b883(0xe2)]['findOne']({
        where: { companyId: _0x2278aa[_0x17b883(0x14f)] }
      }),
      { ticket: _0x5a806a } = await (0x0,
      FindOrCreateTicketService_1[_0x17b883(0xe2)])(
        _0x2278aa[_0x17b883(0x14a)],
        _0x44a06f,
        0x1,
        _0x2278aa[_0x17b883(0x14f)],
        0x0,
        0x0,
        null,
        _0x17b883(0x7f),
        ![],
        ![],
        _0x19018d,
        ![],
        !![]
      );
    let _0x58fa66 = null;
    _0x2278aa[_0x17b883(0x84)] &&
      (_0x58fa66 = path_1['default'][_0x17b883(0x13b)](
        'public',
        _0x17b883(0xa4) + _0x2278aa[_0x17b883(0x14f)],
        _0x2278aa['mediaPath']
      ));
    const _0x3a6fa3 = await (0x0, SendMessage_1[_0x17b883(0x127)])(_0x44a06f, {
      number: _0x2278aa['contact']['number'],
      body: _0x2278aa[_0x17b883(0x99)],
      mediaPath: _0x58fa66
    });
    await (0x0, wbotMessageListener_1[_0x17b883(0x7b)])(
      _0x3a6fa3,
      _0x5a806a,
      _0x2278aa[_0x17b883(0x14a)][_0x17b883(0x11c)]
    ),
      await _0x44529d?.[_0x17b883(0x98)]({
        sentAt: (0x0, moment_1[_0x17b883(0xe2)])()[_0x17b883(0xb5)](
          _0x17b883(0xd0)
        ),
        status: 'ENVIADA'
      }),
      logger_1['logger'][_0x17b883(0xc8)](
        _0x17b883(0x17e) + _0x2278aa[_0x17b883(0x14a)][_0x17b883(0x149)]
      ),
      exports[_0x17b883(0x108)]['clean'](0x3a98, _0x17b883(0xf2));
  } catch (_0x2fa7db) {
    Sentry[_0x17b883(0x7d)](_0x2fa7db),
      await _0x44529d?.[_0x17b883(0x98)]({ status: 'ERRO' }),
      logger_1[_0x17b883(0x120)][_0x17b883(0x17a)](
        'SendScheduledMessage\x20->\x20SendMessage:\x20error',
        _0x2fa7db[_0x17b883(0xab)]
      );
    throw _0x2fa7db;
  }
}
async function handleVerifyCampaigns(_0x127a5f) {
  const _0x434ea8 = a364_0x31c8db,
    _0x5cea93 = await database_1[_0x434ea8(0xe2)][_0x434ea8(0x76)](
      _0x434ea8(0x168),
      { type: sequelize_1['QueryTypes'][_0x434ea8(0x97)] }
    );
  if (_0x5cea93[_0x434ea8(0x115)] > 0x0)
    logger_1[_0x434ea8(0x120)]['info'](
      'Campanhas\x20encontradas:\x20' + _0x5cea93[_0x434ea8(0x115)]
    );
  for (let _0x3e9e45 of _0x5cea93) {
    try {
      const _0x51f6e5 = (0x0, moment_1[_0x434ea8(0xe2)])(),
        _0x4f66ac = (0x0, moment_1[_0x434ea8(0xe2)])(
          _0x3e9e45[_0x434ea8(0x126)]
        ),
        _0x33463f = _0x4f66ac[_0x434ea8(0x79)](_0x51f6e5, _0x434ea8(0xdd));
      logger_1[_0x434ea8(0x120)][_0x434ea8(0xc8)](
        _0x434ea8(0xe7) + _0x3e9e45['id'] + _0x434ea8(0x12f) + _0x33463f
      ),
        exports[_0x434ea8(0x82)][_0x434ea8(0x83)](
          'ProcessCampaign',
          { id: _0x3e9e45['id'], delay: _0x33463f },
          {
            priority: 0x3,
            removeOnComplete: { age: 0x3c * 0x3c, count: 0xa },
            removeOnFail: { age: 0x3c * 0x3c, count: 0xa }
          }
        );
    } catch (_0x4cb495) {
      Sentry[_0x434ea8(0x7d)](_0x4cb495);
    }
  }
}
async function getCampaign(_0x27d056) {
  const _0x435e98 = a364_0x31c8db;
  return await Campaign_1[_0x435e98(0xe2)][_0x435e98(0xea)]({
    where: { id: _0x27d056 },
    include: [
      {
        model: ContactList_1[_0x435e98(0xe2)],
        as: _0x435e98(0xd1),
        attributes: ['id', 'name'],
        include: [
          {
            model: ContactListItem_1['default'],
            as: 'contacts',
            attributes: [
              'id',
              _0x435e98(0x149),
              _0x435e98(0x11c),
              'email',
              'isWhatsappValid',
              'isGroup'
            ],
            where: { isWhatsappValid: !![] }
          }
        ]
      },
      {
        model: Whatsapp_1['default'],
        as: _0x435e98(0x7f),
        attributes: ['id', _0x435e98(0x149)]
      }
    ]
  });
}
async function getContact(_0x14be41) {
  const _0x5ed4be = a364_0x31c8db;
  return await ContactListItem_1[_0x5ed4be(0xe2)][_0x5ed4be(0x142)](_0x14be41, {
    attributes: [
      'id',
      _0x5ed4be(0x149),
      'number',
      _0x5ed4be(0x105),
      _0x5ed4be(0x172)
    ]
  });
}
async function getSettings(_0x915d25) {
  const _0x2ac7e9 = a364_0x31c8db;
  try {
    const _0x36706c = await CampaignSetting_1[_0x2ac7e9(0xe2)][
      _0x2ac7e9(0x10e)
    ]({
      where: { companyId: _0x915d25['companyId'] },
      attributes: [_0x2ac7e9(0x174), _0x2ac7e9(0x169)]
    });
    let _0x550d8e = 0x14,
      _0x545790 = 0x14,
      _0x453a48 = 0x3c,
      _0x568acd = [];
    return (
      _0x36706c[_0x2ac7e9(0xec)](_0x2e96b4 => {
        const _0x2cea6f = _0x2ac7e9;
        _0x2e96b4['key'] === _0x2cea6f(0x151) &&
          (_0x550d8e = JSON[_0x2cea6f(0x17d)](_0x2e96b4[_0x2cea6f(0x169)])),
          _0x2e96b4[_0x2cea6f(0x174)] === _0x2cea6f(0x12e) &&
            (_0x545790 = JSON['parse'](_0x2e96b4[_0x2cea6f(0x169)])),
          _0x2e96b4[_0x2cea6f(0x174)] === _0x2cea6f(0xdf) &&
            (_0x453a48 = JSON[_0x2cea6f(0x17d)](_0x2e96b4[_0x2cea6f(0x169)])),
          _0x2e96b4['key'] === 'variables' &&
            (_0x568acd = JSON[_0x2cea6f(0x17d)](_0x2e96b4[_0x2cea6f(0x169)]));
      }),
      {
        messageInterval: _0x550d8e,
        longerIntervalAfter: _0x545790,
        greaterInterval: _0x453a48,
        variables: _0x568acd
      }
    );
  } catch (_0x28e712) {
    console[_0x2ac7e9(0x9c)](_0x28e712);
    throw _0x28e712;
  }
}
function parseToMilliseconds(_0xe87498) {
  return _0xe87498 * 0x3e8;
}
exports[a364_0x31c8db(0x13e)] = parseToMilliseconds;
async function sleep(_0x356d84) {
  const _0x267977 = a364_0x31c8db;
  return (
    logger_1[_0x267977(0x120)][_0x267977(0xc8)](
      _0x267977(0xcd) +
        _0x356d84 +
        '\x20segundos\x20iniciado:\x20' +
        (0x0, moment_1[_0x267977(0xe2)])()[_0x267977(0xb5)](_0x267977(0xf7))
    ),
    new Promise(_0x430f00 => {
      setTimeout(() => {
        const _0x2206f3 = a364_0x4357;
        logger_1['logger'][_0x2206f3(0xc8)](
          'Sleep\x20de\x20' +
            _0x356d84 +
            _0x2206f3(0x12c) +
            (0x0, moment_1[_0x2206f3(0xe2)])()['format'](_0x2206f3(0xf7))
        ),
          _0x430f00(!![]);
      }, parseToMilliseconds(_0x356d84));
    })
  );
}
function getCampaignValidMessages(_0x369cac) {
  const _0x1fa9d5 = a364_0x31c8db,
    _0x36a3cf = [];
  return (
    !(0x0, lodash_1[_0x1fa9d5(0x124)])(_0x369cac[_0x1fa9d5(0x12d)]) &&
      !(0x0, lodash_1[_0x1fa9d5(0xe5)])(_0x369cac[_0x1fa9d5(0x12d)]) &&
      _0x36a3cf[_0x1fa9d5(0xa9)](_0x369cac[_0x1fa9d5(0x12d)]),
    !(0x0, lodash_1[_0x1fa9d5(0x124)])(_0x369cac['message2']) &&
      !(0x0, lodash_1[_0x1fa9d5(0xe5)])(_0x369cac[_0x1fa9d5(0xb1)]) &&
      _0x36a3cf[_0x1fa9d5(0xa9)](_0x369cac[_0x1fa9d5(0xb1)]),
    !(0x0, lodash_1[_0x1fa9d5(0x124)])(_0x369cac[_0x1fa9d5(0x9e)]) &&
      !(0x0, lodash_1[_0x1fa9d5(0xe5)])(_0x369cac['message3']) &&
      _0x36a3cf[_0x1fa9d5(0xa9)](_0x369cac[_0x1fa9d5(0x9e)]),
    !(0x0, lodash_1[_0x1fa9d5(0x124)])(_0x369cac[_0x1fa9d5(0xae)]) &&
      !(0x0, lodash_1['isNil'])(_0x369cac[_0x1fa9d5(0xae)]) &&
      _0x36a3cf['push'](_0x369cac[_0x1fa9d5(0xae)]),
    !(0x0, lodash_1[_0x1fa9d5(0x124)])(_0x369cac[_0x1fa9d5(0x165)]) &&
      !(0x0, lodash_1[_0x1fa9d5(0xe5)])(_0x369cac[_0x1fa9d5(0x165)]) &&
      _0x36a3cf[_0x1fa9d5(0xa9)](_0x369cac[_0x1fa9d5(0x165)]),
    _0x36a3cf
  );
}
function getCampaignValidConfirmationMessages(_0x5ded6b) {
  const _0xfbb8a6 = a364_0x31c8db,
    _0x2854ec = [];
  return (
    !(0x0, lodash_1[_0xfbb8a6(0x124)])(_0x5ded6b[_0xfbb8a6(0x11d)]) &&
      !(0x0, lodash_1[_0xfbb8a6(0xe5)])(_0x5ded6b[_0xfbb8a6(0x11d)]) &&
      _0x2854ec[_0xfbb8a6(0xa9)](_0x5ded6b['confirmationMessage1']),
    !(0x0, lodash_1[_0xfbb8a6(0x124)])(_0x5ded6b[_0xfbb8a6(0x148)]) &&
      !(0x0, lodash_1[_0xfbb8a6(0xe5)])(_0x5ded6b['confirmationMessage2']) &&
      _0x2854ec['push'](_0x5ded6b[_0xfbb8a6(0x148)]),
    !(0x0, lodash_1['isEmpty'])(_0x5ded6b['confirmationMessage3']) &&
      !(0x0, lodash_1[_0xfbb8a6(0xe5)])(_0x5ded6b[_0xfbb8a6(0x182)]) &&
      _0x2854ec[_0xfbb8a6(0xa9)](_0x5ded6b[_0xfbb8a6(0x182)]),
    !(0x0, lodash_1[_0xfbb8a6(0x124)])(_0x5ded6b['confirmationMessage4']) &&
      !(0x0, lodash_1[_0xfbb8a6(0xe5)])(_0x5ded6b['confirmationMessage4']) &&
      _0x2854ec['push'](_0x5ded6b[_0xfbb8a6(0xe4)]),
    !(0x0, lodash_1[_0xfbb8a6(0x124)])(_0x5ded6b[_0xfbb8a6(0xcb)]) &&
      !(0x0, lodash_1['isNil'])(_0x5ded6b[_0xfbb8a6(0xcb)]) &&
      _0x2854ec['push'](_0x5ded6b[_0xfbb8a6(0xcb)]),
    _0x2854ec
  );
}
function getProcessedMessage(_0x22a517, _0x4045ac, _0x4094be) {
  const _0x25c0aa = a364_0x31c8db;
  let _0xa92c1e = _0x22a517;
  return (
    _0xa92c1e['includes'](_0x25c0aa(0x150)) &&
      (_0xa92c1e = _0xa92c1e['replace'](/{nome}/g, _0x4094be['name'])),
    _0xa92c1e['includes'](_0x25c0aa(0x17f)) &&
      (_0xa92c1e = _0xa92c1e[_0x25c0aa(0x93)](/{email}/g, _0x4094be['email'])),
    _0xa92c1e[_0x25c0aa(0xce)](_0x25c0aa(0x117)) &&
      (_0xa92c1e = _0xa92c1e[_0x25c0aa(0x93)](
        /{numero}/g,
        _0x4094be['number']
      )),
    _0x4045ac[0x0]?.[_0x25c0aa(0x169)] !== '[]' &&
      _0x4045ac[_0x25c0aa(0xec)](_0x468da4 => {
        const _0x2604c2 = _0x25c0aa;
        if (_0xa92c1e[_0x2604c2(0xce)]('{' + _0x468da4['key'] + '}')) {
          const _0x5af403 = new RegExp(
            '{' + _0x468da4[_0x2604c2(0x174)] + '}',
            'g'
          );
          _0xa92c1e = _0xa92c1e[_0x2604c2(0x93)](
            _0x5af403,
            _0x468da4[_0x2604c2(0x169)]
          );
        }
      }),
    _0xa92c1e
  );
}
const checkerWeek = async () => {
    const _0x276cfc = a364_0x31c8db,
      _0x963d64 = (0x0, moment_1['default'])()[_0x276cfc(0x171)]() === 0x6,
      _0x25905f =
        (0x0, moment_1[_0x276cfc(0xe2)])()[_0x276cfc(0x171)]() === 0x0,
      _0x11029c = await CampaignSetting_1[_0x276cfc(0xe2)][_0x276cfc(0xea)]({
        where: { key: _0x276cfc(0xdc) }
      }),
      _0x59ee12 = await CampaignSetting_1[_0x276cfc(0xe2)][_0x276cfc(0xea)]({
        where: { key: _0x276cfc(0xc9) }
      });
    if (_0x11029c?.[_0x276cfc(0x169)] === _0x276cfc(0x131) && _0x963d64)
      return exports[_0x276cfc(0xde)][_0x276cfc(0x143)](), !![];
    if (_0x59ee12?.[_0x276cfc(0x169)] === _0x276cfc(0x131) && _0x25905f)
      return exports[_0x276cfc(0xde)][_0x276cfc(0x143)](), !![];
    return exports[_0x276cfc(0xde)][_0x276cfc(0x175)](), ![];
  },
  checkTime = async () => {
    const _0x534397 = a364_0x31c8db,
      _0x583709 = await CampaignSetting_1['default'][_0x534397(0xea)]({
        where: { key: _0x534397(0xac) }
      }),
      _0x46f069 = await CampaignSetting_1[_0x534397(0xe2)][_0x534397(0xea)]({
        where: { key: 'endHour' }
      }),
      _0x46f6d1 = _0x583709[_0x534397(0x169)],
      _0xac4b3d = _0x46f069['value'],
      _0x557cec = (0x0, moment_1[_0x534397(0xe2)])()[_0x534397(0xb5)]('HH:mm');
    if (_0x557cec <= _0xac4b3d && _0x557cec >= _0x46f6d1)
      return exports[_0x534397(0xde)][_0x534397(0x175)](), !![];
    return (
      logger_1['logger'][_0x534397(0xc8)](
        _0x534397(0xed) +
          _0x46f6d1 +
          '\x20e\x20termina\x20as\x20' +
          _0xac4b3d +
          _0x534397(0x121) +
          _0x557cec +
          _0x534397(0xc4)
      ),
      exports[_0x534397(0xde)][_0x534397(0x167)](0x0, _0x534397(0x100)),
      exports[_0x534397(0xde)][_0x534397(0x167)](0x0, _0x534397(0x9b)),
      exports[_0x534397(0xde)]['clean'](0x0, _0x534397(0xa6)),
      exports[_0x534397(0xde)][_0x534397(0x167)](0x0, _0x534397(0xf2)),
      exports[_0x534397(0xde)][_0x534397(0x167)](0x0, _0x534397(0x16d)),
      exports[_0x534397(0xde)][_0x534397(0x143)](),
      ![]
    );
  };
function a364_0x2b1a() {
  const _0x379448 = [
    'company-',
    'Campanha\x20enviada\x20para\x20a\x20fila\x20de\x20processamento:\x20Campanha=',
    'GetWhatsapp',
    ';Registro=',
    'findOne',
    './models/User',
    'forEach',
    'Envio\x20inicia\x20as\x20',
    'EM_ANDAMENTO',
    'confirmationRequestedAt',
    'sendGreetingMessageOneQueues',
    'addSeconds',
    'completed',
    'AGENDADA',
    '77085rZOfIz',
    '327220ywwemp',
    'findAndCountAll',
    'HH:mm:ss',
    'lte',
    'YYYY-MM-DD\x20HH:mm:ss',
    'startQueueProcess',
    'join',
    './services/WbotServices/SendWhatsAppMedia',
    'verify',
    'deliveredAt',
    '\x20-\x20Empresa:\x20',
    'delayed',
    './services/TicketServices/UpdateTicketService',
    'UserMonitor',
    'data',
    'floor',
    'email',
    'Disparo\x20de\x20campanha\x20solicitado:\x20Campanha=',
    '1081843pqiskW',
    'sendScheduledMessages',
    'verify-login',
    'select\x20id\x20from\x20\x22Users\x22\x20where\x20\x22updatedAt\x22\x20<\x20now()\x20-\x20\x273\x20minutes\x27::interval\x20and\x20online\x20=\x20true',
    'acceptAudioMessage',
    './services/TicketServices/ShowTicketService',
    'CronJob',
    'findAll',
    'openTicket',
    '220YQztom',
    '__setModuleDefault',
    'updatedAt',
    'public',
    'stop',
    'length',
    'whatsapps',
    '{numero}',
    '-ticket',
    'expiresTicket',
    'QueueMonitor',
    'set',
    'number',
    'confirmationMessage1',
    'color',
    'audio/mp4',
    'logger',
    ',\x20hora\x20atual\x20',
    '\x20-\x20',
    ';Contato=',
    'isEmpty',
    '@s.whatsapp.net',
    'scheduledAt',
    'SendMessage',
    'SendScheduledMessage\x20->\x20Verify:\x20error',
    'notification',
    'keys',
    '25729QxnSIP',
    '\x20segundos\x20finalizado:\x20',
    'message1',
    'longerIntervalAfter',
    ',\x20Delay\x20Inicial=',
    'sendIdQueue',
    'false',
    './models/ContactListItem',
    'verifyMediaMessage',
    'getIO',
    '@g.us',
    'gte',
    './utils/logger',
    'delete',
    'seconds',
    '__createBinding',
    'resolve',
    'DispatchCampaign',
    'queueId',
    'parseToMilliseconds',
    'random',
    'Atendimento\x20Perdido:\x20',
    'extraInfo',
    'findByPk',
    'pause',
    'campaignQueue\x20->\x20DispatchCampaign\x20->\x20error:\x20wbot\x20not\x20found',
    'writable',
    'toDate',
    '4002363RjdqYA',
    'confirmationMessage2',
    'name',
    'contact',
    '*\x20*\x20*\x20*\x20*',
    'confirmation',
    'SearchForQueue\x20->\x20VerifyQueue:\x20error',
    'SearchForUsersRandom\x20->\x20VerifyUsersRandom:\x20error',
    'companyId',
    '{nome}',
    'messageInterval',
    'sendMessage',
    'REDIS_OPT_LIMITER_MAX',
    'SendSacheduledMessages',
    '18453gtwRRi',
    'isArray',
    'campaignQueue\x20->\x20DispatchCampaign\x20->\x20error:\x20whatsapp\x20not\x20found',
    'online',
    '-campaign',
    'filter',
    '*/20\x20*\x20*\x20*\x20*\x20*',
    'groupAsTicket',
    '*\x2015\x203\x20*\x20*\x20*',
    'utc',
    'CONNECTED',
    'Campanha\x20enviada\x20para:\x20Campanha=',
    'contactId',
    '6kUhSFB',
    'FINALIZADA',
    'mediaName',
    'message5',
    'differenceInSeconds',
    'clean',
    'select\x20id,\x20\x22scheduledAt\x22\x20from\x20\x22Campaigns\x22\x20c\x0a\x20\x20\x20\x20where\x20\x22scheduledAt\x22\x20between\x20now()\x20and\x20now()\x20+\x20\x273\x20hour\x27::interval\x20and\x20status\x20=\x20\x27PROGRAMADA\x27',
    'value',
    'date-fns',
    'confirmationMessage',
    '\x20updated\x20with\x20UserId\x20',
    'failed',
    'moment',
    'count',
    'defineProperty',
    'day',
    'isGroup',
    './helpers/GetWhatsappWbot',
    'key',
    'resume',
    './models/Whatsapp',
    'VerifyQueueStatus',
    './models/Ticket',
    'cron',
    'error',
    'userMonitor',
    'get',
    'parse',
    'Mensagem\x20agendada\x20enviada\x20para:\x20',
    '{email}',
    'tags',
    'nodemailer',
    'confirmationMessage3',
    'randomValue',
    'user',
    '304XTSsxL',
    'pending',
    'REDIS_OPT_LIMITER_DURATION',
    'query',
    './services/TicketServices/FindOrCreateTicketService',
    '__importDefault',
    'diff',
    'VerifyLoginStatus',
    'verifyMessage',
    'profilePicUrl',
    'captureException',
    'status',
    'whatsapp',
    'disableBot',
    'PrepareContact',
    'campaignQueue',
    'add',
    'mediaPath',
    'UPDATE',
    'all',
    './services/WbotServices/SendWhatsAppMessage',
    './helpers/GetDefaultWhatsApp',
    'start',
    'verify-campaing',
    '*/5\x20*\x20*\x20*\x20*\x20*',
    'Disparo\x20agendado\x20para:\x20',
    'timeSendQueue',
    'closed',
    './models/CampaignSetting',
    'enabled',
    'MessageQueue',
    '*/1\x20*\x20*\x20*\x20*',
    'replace',
    'minutes',
    'emit',
    'MessageQueue\x20->\x20SendMessage:\x20error',
    'SELECT',
    'update',
    'body',
    'call',
    'wait',
    'log',
    'prototype',
    'message3',
    'save',
    'urlPicture',
    'toString',
    'scheduleMonitor',
    'variables',
    'company',
    '150414qhNxMe',
    'active',
    'redirect',
    'contactTags',
    'push',
    'and',
    'message',
    'startHour',
    '8RHymmk',
    'message4',
    'userId',
    'VerifyCampaignsDaatabase',
    'message2',
    'isInteger',
    'lgpdAcceptedAt',
    'ClosedAllOpenTickets',
    'format',
    'queueMonitor',
    'Condição\x20não\x20respeitada\x20-\x20Empresa:\x20',
    '__importStar',
    'whatsappId',
    'lodash',
    './models/CompaniesSettings',
    './models/Queue',
    'Erro\x20ao\x20tentar\x20consultar\x20agendamento:\x20',
    'ScheduleMonitor',
    'verify-queue',
    './models/Schedule',
    '__esModule',
    'PENDENTE',
    'getMessageOptions',
    '\x20não\x20está\x20dentro\x20do\x20horário',
    'sequelize',
    'campaignId',
    'map',
    'info',
    'domingo',
    'UPDATE\x20\x22Users\x22\x20SET\x20\x22online\x22\x20=\x20false,\x20\x22updatedAt\x22\x20=\x20now()\x20WHERE\x20id\x20IN\x20(',
    'confirmationMessage5',
    'queue',
    'Sleep\x20de\x20',
    'includes',
    'subtract',
    'YYYY-MM-DD\x20HH:mm',
    'contactList',
    './libs/socket',
    'Ticket\x20ID\x20',
    './models/Company',
    './helpers/SendMessage',
    'Iniciando\x20processamento\x20de\x20filas',
    'path',
    'reload',
    ';delay=',
    'America/Sao_Paulo',
    'create',
    'sabado',
    'milliseconds',
    'messageQueue',
    'greaterInterval',
    'getOwnPropertyDescriptor',
    'process',
    'default',
    './models/UserQueue',
    'confirmationMessage4',
    'isNil'
  ];
  a364_0x2b1a = function () {
    return _0x379448;
  };
  return a364_0x2b1a();
}
function randomValue(_0x2c5186, _0x11c099) {
  const _0x5a1dfb = a364_0x31c8db;
  return (
    Math[_0x5a1dfb(0x104)](Math[_0x5a1dfb(0x13f)]() * _0x11c099) + _0x2c5186
  );
}
function a364_0x4357(_0x33bc0f, _0x2ad25b) {
  const _0x2b1a52 = a364_0x2b1a();
  return (
    (a364_0x4357 = function (_0x43571b, _0x561d46) {
      _0x43571b = _0x43571b - 0x75;
      let _0x3a8ba0 = _0x2b1a52[_0x43571b];
      return _0x3a8ba0;
    }),
    a364_0x4357(_0x33bc0f, _0x2ad25b)
  );
}
exports[a364_0x31c8db(0x183)] = randomValue;
async function verifyAndFinalizeCampaign(_0x29b255) {
  const _0x409a69 = a364_0x31c8db,
    { contacts: _0x342373 } = _0x29b255[_0x409a69(0xd1)],
    _0x4937ce = _0x342373[_0x409a69(0x115)],
    _0x583939 = await CampaignShipping_1[_0x409a69(0xe2)][_0x409a69(0x16f)]({
      where: {
        campaignId: _0x29b255['id'],
        deliveredAt: { [sequelize_1['Op']['ne']]: null },
        confirmation: _0x29b255[_0x409a69(0x14c)]
          ? !![]
          : { [sequelize_1['Op']['or']]: [null, ![]] }
      }
    });
  if (_0x4937ce === _0x583939) {
    await _0x29b255[_0x409a69(0x98)]({
      status: _0x409a69(0x163),
      completedAt: (0x0, moment_1[_0x409a69(0xe2)])()
    });
    if (_0x29b255?.['openTicket'] === _0x409a69(0x90)) {
    }
  }
  const _0x3812ae = (0x0, socket_1[_0x409a69(0x134)])();
  _0x3812ae['emit'](
    _0x409a69(0xe6) + _0x29b255[_0x409a69(0x14f)] + _0x409a69(0x159),
    { action: _0x409a69(0x98), record: _0x29b255 }
  );
}
async function handleProcessCampaign(_0x3a71b8) {
  const _0x43642c = a364_0x31c8db;
  try {
    const { id: _0x32bd4f } = _0x3a71b8[_0x43642c(0x103)],
      _0x3dd53f = await getCampaign(_0x32bd4f),
      _0x517346 = await getSettings(_0x3dd53f);
    if (_0x3dd53f) {
      const { contacts: _0x37b556 } = _0x3dd53f['contactList'];
      if ((0x0, lodash_1[_0x43642c(0x156)])(_0x37b556)) {
        const _0x1e1ae2 = _0x37b556[_0x43642c(0xc7)](_0x1d7a78 => ({
            contactId: _0x1d7a78['id'],
            campaignId: _0x3dd53f['id'],
            variables: _0x517346[_0x43642c(0xa3)],
            isGroup: _0x1d7a78[_0x43642c(0x172)]
          })),
          _0x4e9e41 = parseToMilliseconds(_0x517346['longerIntervalAfter']),
          _0x2b5295 = parseToMilliseconds(_0x517346['greaterInterval']),
          _0x5ddd3f = _0x517346[_0x43642c(0x151)];
        let _0x26f24e = _0x3dd53f['scheduledAt'];
        const _0x2af419 = [];
        for (
          let _0x6dea54 = 0x0;
          _0x6dea54 < _0x1e1ae2[_0x43642c(0x115)];
          _0x6dea54++
        ) {
          _0x26f24e = (0x0, date_fns_1[_0x43642c(0xf1)])(
            _0x26f24e,
            _0x6dea54 > _0x4e9e41 ? _0x2b5295 : _0x5ddd3f
          );
          const {
              contactId: _0x3b06a5,
              campaignId: _0x20054f,
              variables: _0x153397
            } = _0x1e1ae2[_0x6dea54],
            _0x31a72c = calculateDelay(
              _0x6dea54,
              _0x26f24e,
              _0x4e9e41,
              _0x2b5295,
              _0x5ddd3f
            ),
            _0x18c5cc = exports[_0x43642c(0x82)][_0x43642c(0x83)](
              _0x43642c(0x81),
              {
                contactId: _0x3b06a5,
                campaignId: _0x20054f,
                variables: _0x153397,
                delay: _0x31a72c
              },
              { removeOnComplete: !![] }
            );
          _0x2af419['push'](_0x18c5cc),
            logger_1[_0x43642c(0x120)][_0x43642c(0xc8)](
              'Registro\x20enviado\x20pra\x20fila\x20de\x20disparo:\x20Campanha=' +
                _0x3dd53f['id'] +
                ';Contato=' +
                _0x37b556[_0x6dea54][_0x43642c(0x149)] +
                _0x43642c(0xd9) +
                _0x31a72c
            );
        }
        await Promise[_0x43642c(0x86)](_0x2af419),
          await _0x3dd53f[_0x43642c(0x98)]({ status: _0x43642c(0xee) });
      }
    }
  } catch (_0x5dc93d) {
    Sentry[_0x43642c(0x7d)](_0x5dc93d);
  }
}
function calculateDelay(_0xec2c, _0xfd702a, _0x3700b5, _0x291c70, _0xabd5ac) {
  const _0x46ff56 = a364_0x31c8db,
    _0x5e3135 = (0x0, date_fns_1[_0x46ff56(0x166)])(_0xfd702a, new Date());
  return _0xec2c > _0x3700b5
    ? _0x5e3135 * 0x3e8 + _0x291c70
    : _0x5e3135 * 0x3e8 + _0xabd5ac;
}
async function handlePrepareContact(_0x56d0cc) {
  const _0x3d808b = a364_0x31c8db;
  try {
    const {
        contactId: _0x4dbd87,
        campaignId: _0x3ef424,
        delay: _0x143560,
        variables: _0x556095
      } = _0x56d0cc[_0x3d808b(0x103)],
      _0x1dea3f = await getCampaign(_0x3ef424),
      _0x26cc84 = await getContact(_0x4dbd87),
      _0x355529 = {};
    (_0x355529['number'] = _0x26cc84[_0x3d808b(0x11c)]),
      (_0x355529[_0x3d808b(0x161)] = _0x4dbd87),
      (_0x355529[_0x3d808b(0xc6)] = _0x3ef424);
    const _0x5b1ae0 = getCampaignValidMessages(_0x1dea3f);
    if (_0x5b1ae0[_0x3d808b(0x115)] >= 0x0) {
      const _0x36081e = randomValue(0x0, _0x5b1ae0['length']),
        _0x2c79bf = getProcessedMessage(
          _0x5b1ae0[_0x36081e] || '',
          _0x556095,
          _0x26cc84
        );
      _0x355529[_0x3d808b(0xab)] =
        _0x2c79bf === null ? '' : '‌\x20' + _0x2c79bf;
    }
    if (_0x1dea3f['confirmation']) {
      const _0x37478a = getCampaignValidConfirmationMessages(_0x1dea3f);
      if (_0x37478a[_0x3d808b(0x115)]) {
        const _0x3b6156 = randomValue(0x0, _0x37478a[_0x3d808b(0x115)]),
          _0x2ce723 = getProcessedMessage(
            _0x37478a[_0x3b6156] || '',
            _0x556095,
            _0x26cc84
          );
        _0x355529[_0x3d808b(0x16b)] = '‌\x20' + _0x2ce723;
      }
    }
    const [_0x1073c7, _0x3530d8] = await CampaignShipping_1[_0x3d808b(0xe2)][
      'findOrCreate'
    ]({
      where: {
        campaignId: _0x355529[_0x3d808b(0xc6)],
        contactId: _0x355529['contactId']
      },
      defaults: _0x355529
    });
    !_0x3530d8 &&
      _0x1073c7[_0x3d808b(0xfe)] === null &&
      _0x1073c7['confirmationRequestedAt'] === null &&
      (_0x1073c7[_0x3d808b(0x11b)](_0x355529),
      await _0x1073c7[_0x3d808b(0x9f)]());
    if (
      _0x1073c7[_0x3d808b(0xfe)] === null &&
      _0x1073c7[_0x3d808b(0xef)] === null
    ) {
      const _0x4de14d = await exports[_0x3d808b(0x82)][_0x3d808b(0x83)](
        _0x3d808b(0x13c),
        {
          campaignId: _0x1dea3f['id'],
          campaignShippingId: _0x1073c7['id'],
          contactListItemId: _0x4dbd87
        },
        { delay: _0x143560 }
      );
      await _0x1073c7[_0x3d808b(0x98)]({ jobId: _0x4de14d['id'] });
    }
    await verifyAndFinalizeCampaign(_0x1dea3f);
  } catch (_0x3fc1cf) {
    Sentry['captureException'](_0x3fc1cf),
      logger_1[_0x3d808b(0x120)][_0x3d808b(0x17a)](
        'campaignQueue\x20->\x20PrepareContact\x20->\x20error:\x20' +
          _0x3fc1cf[_0x3d808b(0xab)]
      );
  }
}
async function handleDispatchCampaign(_0x31d1a6) {
  const _0x493517 = a364_0x31c8db;
  try {
    const { data: _0x31f539 } = _0x31d1a6,
      { campaignShippingId: _0xd23bb5, campaignId: _0x2dcdc5 } = _0x31f539,
      _0x4f9ebd = await getCampaign(_0x2dcdc5),
      _0x36eceb = await (0x0, GetWhatsappWbot_1[_0x493517(0xe2)])(
        _0x4f9ebd[_0x493517(0x7f)]
      );
    if (!_0x36eceb) {
      logger_1[_0x493517(0x120)][_0x493517(0x17a)](_0x493517(0x144));
      return;
    }
    if (!_0x4f9ebd[_0x493517(0x7f)]) {
      logger_1[_0x493517(0x120)]['error'](_0x493517(0x157));
      return;
    }
    if (!_0x36eceb?.['user']?.['id']) {
      logger_1[_0x493517(0x120)][_0x493517(0x17a)](
        'campaignQueue\x20->\x20DispatchCampaign\x20->\x20error:\x20wbot\x20user\x20not\x20found'
      );
      return;
    }
    logger_1[_0x493517(0x120)][_0x493517(0xc8)](
      _0x493517(0x106) + _0x2dcdc5 + _0x493517(0xe9) + _0xd23bb5
    );
    const _0x46e407 = await CampaignShipping_1[_0x493517(0xe2)][
        _0x493517(0x142)
      ](_0xd23bb5, {
        include: [{ model: ContactListItem_1[_0x493517(0xe2)], as: 'contact' }]
      }),
      _0x44789a = _0x46e407['contact'][_0x493517(0x172)]
        ? _0x46e407[_0x493517(0x11c)] + _0x493517(0x135)
        : _0x46e407[_0x493517(0x11c)] + _0x493517(0x125);
    if (_0x4f9ebd[_0x493517(0x10f)] === _0x493517(0x90)) {
      const _0x27c913 = await Contact_1[_0x493517(0xe2)][_0x493517(0xea)]({
          where: {
            number: _0x46e407['number'],
            companyId: _0x4f9ebd[_0x493517(0x14f)]
          }
        }),
        _0x1db8e8 = await Whatsapp_1[_0x493517(0xe2)][_0x493517(0x142)](
          _0x4f9ebd[_0x493517(0xb9)]
        ),
        _0x96c0ba = await CompaniesSettings_1[_0x493517(0xe2)][_0x493517(0xea)](
          { where: { companyId: _0x4f9ebd[_0x493517(0x14f)] } }
        ),
        { ticket: _0x18da4a } = await (0x0,
        FindOrCreateTicketService_1[_0x493517(0xe2)])(
          _0x27c913,
          _0x1db8e8,
          0x1,
          _0x4f9ebd['companyId'],
          _0x4f9ebd?.[_0x493517(0x13d)],
          _0x4f9ebd?.[_0x493517(0xaf)],
          _0x46e407[_0x493517(0x14a)][_0x493517(0x172)] ? _0x27c913 : null,
          _0x493517(0x7f),
          ![],
          ![],
          _0x96c0ba,
          ![],
          !![]
        );
      if (_0x1db8e8[_0x493517(0x7e)] === 'CONNECTED') {
        if (_0x4f9ebd[_0x493517(0x14c)] && _0x46e407['confirmation'] === null) {
          const _0x40b7d5 = await _0x36eceb['sendMessage'](_0x44789a, {
            text: _0x46e407[_0x493517(0x16b)]
          });
          await (0x0, wbotMessageListener_1['verifyMessage'])(
            _0x40b7d5,
            _0x18da4a,
            _0x27c913
          ),
            await _0x46e407['update']({
              confirmationRequestedAt: (0x0, moment_1['default'])()
            });
        } else {
          if (!_0x4f9ebd['mediaPath']) {
            const _0xb8cc53 = await _0x36eceb[_0x493517(0x152)](_0x44789a, {
              text: _0x46e407[_0x493517(0xab)]
            });
            await (0x0, wbotMessageListener_1[_0x493517(0x7b)])(
              _0xb8cc53,
              _0x18da4a,
              _0x27c913
            );
          }
          if (_0x4f9ebd['mediaPath']) {
            const _0x48250d = path_1[_0x493517(0xe2)][_0x493517(0x13b)](
                __dirname,
                '..',
                _0x493517(0x113)
              ),
              _0x266938 = path_1['default'][_0x493517(0xfb)](
                _0x48250d,
                'company' + _0x4f9ebd[_0x493517(0x14f)],
                _0x4f9ebd[_0x493517(0x84)]
              ),
              _0x330695 = await (0x0, SendWhatsAppMedia_1[_0x493517(0xc3)])(
                _0x4f9ebd[_0x493517(0x164)],
                _0x266938,
                _0x4f9ebd[_0x493517(0x14f)][_0x493517(0xa1)](),
                _0x46e407[_0x493517(0xab)]
              );
            if (Object[_0x493517(0x12a)](_0x330695)[_0x493517(0x115)]) {
              if (_0x330695['mimetype'] === 'audio/mp4') {
                const _0xd7976c = await _0x36eceb[_0x493517(0x152)](_0x44789a, {
                  text: _0x46e407[_0x493517(0xab)]
                });
                await (0x0, wbotMessageListener_1[_0x493517(0x7b)])(
                  _0xd7976c,
                  _0x18da4a,
                  _0x27c913
                );
              }
              const _0x3e1861 = await _0x36eceb[_0x493517(0x152)](_0x44789a, {
                ..._0x330695
              });
              await (0x0, wbotMessageListener_1[_0x493517(0x133)])(
                _0x3e1861,
                _0x18da4a,
                _0x18da4a[_0x493517(0x14a)]
              );
            }
          }
        }
        if (_0x4f9ebd?.['openTicket'] === _0x493517(0x90)) {
          await _0x18da4a[_0x493517(0x98)]({ status: _0x493517(0x8e) });
          const _0x4d0d4e = (0x0, socket_1[_0x493517(0x134)])();
          _0x4d0d4e['to'](_0x493517(0x8e))
            ['to'](_0x18da4a['id'][_0x493517(0xa1)]())
            [_0x493517(0x95)](
              _0x493517(0xe6) + _0x18da4a[_0x493517(0x14f)] + _0x493517(0x118),
              { action: _0x493517(0x138), ticketId: _0x18da4a['id'] }
            );
        }
        await _0x46e407[_0x493517(0x98)]({
          deliveredAt: (0x0, moment_1[_0x493517(0xe2)])()
        });
      }
    } else {
      if (_0x4f9ebd[_0x493517(0x14c)] && _0x46e407[_0x493517(0x14c)] === null)
        await _0x36eceb['sendMessage'](_0x44789a, {
          text: _0x46e407[_0x493517(0x16b)]
        }),
          await _0x46e407['update']({
            confirmationRequestedAt: (0x0, moment_1[_0x493517(0xe2)])()
          });
      else {
        !_0x4f9ebd['mediaPath'] &&
          (await _0x36eceb[_0x493517(0x152)](_0x44789a, {
            text: _0x46e407['message']
          }));
        if (_0x4f9ebd[_0x493517(0x84)]) {
          const _0x124a72 = path_1['default']['resolve'](
              __dirname,
              '..',
              _0x493517(0x113)
            ),
            _0xae4cf5 = path_1[_0x493517(0xe2)][_0x493517(0xfb)](
              _0x124a72,
              _0x493517(0xa4) + _0x4f9ebd[_0x493517(0x14f)],
              _0x4f9ebd[_0x493517(0x84)]
            ),
            _0x978383 = await (0x0, SendWhatsAppMedia_1['getMessageOptions'])(
              _0x4f9ebd[_0x493517(0x164)],
              _0xae4cf5,
              _0x4f9ebd[_0x493517(0x14f)][_0x493517(0xa1)](),
              _0x46e407['message']
            );
          Object[_0x493517(0x12a)](_0x978383)['length'] &&
            (_0x978383['mimetype'] === _0x493517(0x11f) &&
              (await _0x36eceb[_0x493517(0x152)](_0x44789a, {
                text: _0x46e407[_0x493517(0xab)]
              })),
            await _0x36eceb[_0x493517(0x152)](_0x44789a, { ..._0x978383 }));
        }
      }
      await _0x46e407['update']({
        deliveredAt: (0x0, moment_1[_0x493517(0xe2)])()
      });
    }
    await verifyAndFinalizeCampaign(_0x4f9ebd);
    const _0x566661 = (0x0, socket_1[_0x493517(0x134)])();
    _0x566661[_0x493517(0x95)](
      _0x493517(0xe6) + _0x4f9ebd[_0x493517(0x14f)] + _0x493517(0x159),
      { action: _0x493517(0x98), record: _0x4f9ebd }
    ),
      logger_1[_0x493517(0x120)][_0x493517(0xc8)](
        _0x493517(0x160) +
          _0x2dcdc5 +
          _0x493517(0x123) +
          _0x46e407[_0x493517(0x14a)][_0x493517(0x149)]
      );
  } catch (_0xe3e69c) {
    Sentry['captureException'](_0xe3e69c),
      logger_1[_0x493517(0x120)]['error'](_0xe3e69c[_0x493517(0xab)]),
      console[_0x493517(0x9c)](_0xe3e69c['stack']);
  }
}
async function handleLoginStatus(_0x44b8e6) {
  const _0x4ccdb0 = a364_0x31c8db,
    _0x76d4ed = await database_1[_0x4ccdb0(0xe2)][_0x4ccdb0(0x76)](
      _0x4ccdb0(0x10a),
      { type: sequelize_1['QueryTypes'][_0x4ccdb0(0x97)] }
    ),
    _0x4d3316 = _0x76d4ed[_0x4ccdb0(0xc7)](_0x46d451 => _0x46d451['id']),
    _0x11c4fa = _0x4d3316[_0x4ccdb0(0xfb)](',\x20');
  try {
    const _0x296dc6 = _0x4ccdb0(0xca) + _0x11c4fa + ');',
      _0xfc1360 = await database_1[_0x4ccdb0(0xe2)][_0x4ccdb0(0x76)](
        _0x296dc6,
        { type: sequelize_1['QueryTypes'][_0x4ccdb0(0x85)] }
      );
  } catch (_0x58ac29) {
    Sentry[_0x4ccdb0(0x7d)](_0x58ac29);
  }
}
async function handleResumeTicketsOutOfHour(_0x3baf3a) {
  const _0x2cff86 = a364_0x31c8db;
  try {
    const _0x45b9ef = await Company_1['default']['findAll']({
      attributes: ['id', 'name'],
      where: { status: !![] },
      include: [
        {
          model: Whatsapp_1[_0x2cff86(0xe2)],
          attributes: [
            'id',
            _0x2cff86(0x149),
            _0x2cff86(0x7e),
            _0x2cff86(0x8d),
            _0x2cff86(0x130)
          ],
          where: { timeSendQueue: { [sequelize_1['Op']['gt']]: 0x0 } }
        }
      ]
    });
    _0x45b9ef['map'](async _0x4ea91e => {
      const _0x3fee3c = _0x2cff86;
      _0x4ea91e[_0x3fee3c(0x116)][_0x3fee3c(0xc7)](async _0x1a4458 => {
        const _0x314957 = _0x3fee3c;
        if (_0x1a4458[_0x314957(0x7e)] === _0x314957(0x15f)) {
          var _0x19567 = _0x4ea91e['id'];
          const _0x381e84 = _0x1a4458['timeSendQueue']
              ? _0x1a4458[_0x314957(0x8d)]
              : 0x0,
            _0x453c36 = _0x1a4458[_0x314957(0x130)],
            _0x263eb4 = _0x381e84,
            _0x3045dd = _0x453c36,
            _0x367898 = _0x263eb4;
          if (_0x381e84 > 0x0) {
            if (
              !isNaN(_0x3045dd) &&
              Number[_0x314957(0xb2)](_0x3045dd) &&
              !isNaN(_0x367898) &&
              Number[_0x314957(0xb2)](_0x367898)
            ) {
              const _0x4d875f = (0x0, moment_1[_0x314957(0xe2)])()
                  [_0x314957(0xcf)](_0x367898, _0x314957(0x94))
                  ['utc']()
                  [_0x314957(0xb5)](),
                { count: _0x32ef8e, rows: _0x4fa073 } = await Ticket_1[
                  _0x314957(0xe2)
                ][_0x314957(0xf6)]({
                  attributes: ['id'],
                  where: {
                    status: 'pending',
                    queueId: null,
                    companyId: _0x19567,
                    whatsappId: _0x1a4458['id'],
                    updatedAt: { [sequelize_1['Op']['lt']]: _0x4d875f }
                  },
                  include: [
                    {
                      model: Contact_1[_0x314957(0xe2)],
                      as: _0x314957(0x14a),
                      attributes: [
                        'id',
                        _0x314957(0x149),
                        _0x314957(0x11c),
                        _0x314957(0x105),
                        _0x314957(0x7c),
                        _0x314957(0x10b),
                        _0x314957(0xa6),
                        _0x314957(0x80),
                        'urlPicture',
                        _0x314957(0xb3),
                        _0x314957(0x14f)
                      ],
                      include: [
                        _0x314957(0x141),
                        _0x314957(0xa8),
                        _0x314957(0x180)
                      ]
                    },
                    {
                      model: Queue_2['default'],
                      as: 'queue',
                      attributes: ['id', _0x314957(0x149), _0x314957(0x11e)]
                    },
                    {
                      model: Whatsapp_1[_0x314957(0xe2)],
                      as: _0x314957(0x7f),
                      attributes: [
                        'id',
                        'name',
                        _0x314957(0x119),
                        _0x314957(0x15c)
                      ]
                    }
                  ]
                });
              _0x32ef8e > 0x0 &&
                _0x4fa073[_0x314957(0xc7)](async _0x5bc28e => {
                  const _0x2b023a = _0x314957;
                  await _0x5bc28e[_0x2b023a(0x98)]({ queueId: _0x3045dd }),
                    await _0x5bc28e[_0x2b023a(0xd8)]();
                  const _0x58468f = (0x0, socket_1[_0x2b023a(0x134)])();
                  _0x58468f['to'](_0x5bc28e['status'])
                    ['to'](_0x2b023a(0x129))
                    ['to'](_0x5bc28e['id'][_0x2b023a(0xa1)]())
                    [_0x2b023a(0x95)](
                      _0x2b023a(0xe6) + _0x19567 + _0x2b023a(0x118),
                      {
                        action: _0x2b023a(0x98),
                        ticket: _0x5bc28e,
                        ticketId: _0x5bc28e['id']
                      }
                    ),
                    logger_1[_0x2b023a(0x120)][_0x2b023a(0xc8)](
                      _0x2b023a(0x140) +
                        _0x5bc28e['id'] +
                        _0x2b023a(0xff) +
                        _0x19567
                    );
                });
            } else
              logger_1[_0x314957(0x120)][_0x314957(0xc8)](
                _0x314957(0xb7) + _0x19567
              );
          }
        }
      });
    });
  } catch (_0x335e90) {
    Sentry[_0x2cff86(0x7d)](_0x335e90),
      logger_1[_0x2cff86(0x120)][_0x2cff86(0x17a)](
        _0x2cff86(0x14d),
        _0x335e90[_0x2cff86(0xab)]
      );
    throw _0x335e90;
  }
}
async function handleVerifyQueue(_0x159088) {
  const _0x576d9b = a364_0x31c8db;
  try {
    const _0x4343f0 = await Company_1[_0x576d9b(0xe2)][_0x576d9b(0x10e)]({
      attributes: ['id', _0x576d9b(0x149)],
      where: { status: !![] },
      include: [
        {
          model: Whatsapp_1[_0x576d9b(0xe2)],
          attributes: [
            'id',
            _0x576d9b(0x149),
            _0x576d9b(0x7e),
            _0x576d9b(0x8d),
            'sendIdQueue'
          ]
        }
      ]
    });
    _0x4343f0['map'](async _0x2dca10 => {
      const _0x16c515 = _0x576d9b;
      _0x2dca10['whatsapps'][_0x16c515(0xc7)](async _0xc36803 => {
        const _0x4ddb93 = _0x16c515;
        if (_0xc36803[_0x4ddb93(0x7e)] === _0x4ddb93(0x15f)) {
          var _0x2fbe3e = _0x2dca10['id'];
          const _0x482901 = _0xc36803[_0x4ddb93(0x8d)]
              ? _0xc36803['timeSendQueue']
              : 0x0,
            _0x5207f5 = _0xc36803[_0x4ddb93(0x130)],
            _0x2bfab3 = _0x482901,
            _0x8e2b4c = _0x5207f5,
            _0x2ee7f9 = _0x2bfab3;
          if (_0x482901 > 0x0) {
            if (
              !isNaN(_0x8e2b4c) &&
              Number[_0x4ddb93(0xb2)](_0x8e2b4c) &&
              !isNaN(_0x2ee7f9) &&
              Number[_0x4ddb93(0xb2)](_0x2ee7f9)
            ) {
              const _0x863ecb = (0x0, moment_1[_0x4ddb93(0xe2)])()
                  [_0x4ddb93(0xcf)](_0x2ee7f9, _0x4ddb93(0x94))
                  [_0x4ddb93(0x15e)]()
                  [_0x4ddb93(0xb5)](),
                { count: _0x388689, rows: _0x5f16f1 } = await Ticket_1[
                  _0x4ddb93(0xe2)
                ]['findAndCountAll']({
                  attributes: ['id'],
                  where: {
                    status: _0x4ddb93(0x186),
                    queueId: null,
                    companyId: _0x2fbe3e,
                    whatsappId: _0xc36803['id'],
                    updatedAt: { [sequelize_1['Op']['lt']]: _0x863ecb }
                  },
                  include: [
                    {
                      model: Contact_1['default'],
                      as: 'contact',
                      attributes: [
                        'id',
                        _0x4ddb93(0x149),
                        _0x4ddb93(0x11c),
                        _0x4ddb93(0x105),
                        'profilePicUrl',
                        _0x4ddb93(0x10b),
                        _0x4ddb93(0xa6),
                        'disableBot',
                        _0x4ddb93(0xa0),
                        _0x4ddb93(0xb3),
                        _0x4ddb93(0x14f)
                      ],
                      include: [
                        _0x4ddb93(0x141),
                        _0x4ddb93(0xa8),
                        _0x4ddb93(0x180)
                      ]
                    },
                    {
                      model: Queue_2[_0x4ddb93(0xe2)],
                      as: _0x4ddb93(0xcc),
                      attributes: ['id', _0x4ddb93(0x149), _0x4ddb93(0x11e)]
                    },
                    {
                      model: Whatsapp_1[_0x4ddb93(0xe2)],
                      as: 'whatsapp',
                      attributes: [
                        'id',
                        'name',
                        _0x4ddb93(0x119),
                        'groupAsTicket'
                      ]
                    }
                  ]
                });
              _0x388689 > 0x0 &&
                _0x5f16f1['map'](async _0x57598a => {
                  const _0x32a13b = _0x4ddb93;
                  await _0x57598a[_0x32a13b(0x98)]({ queueId: _0x8e2b4c }),
                    await (0x0, CreateLogTicketService_1['default'])({
                      userId: null,
                      queueId: _0x8e2b4c,
                      ticketId: _0x57598a['id'],
                      type: _0x32a13b(0xa7)
                    }),
                    await _0x57598a[_0x32a13b(0xd8)]();
                  const _0x1ca1f4 = (0x0, socket_1[_0x32a13b(0x134)])();
                  _0x1ca1f4['to'](_0x57598a[_0x32a13b(0x7e)])
                    ['to'](_0x32a13b(0x129))
                    ['to'](_0x57598a['id'][_0x32a13b(0xa1)]())
                    [_0x32a13b(0x95)](_0x32a13b(0xe6) + _0x2fbe3e + '-ticket', {
                      action: _0x32a13b(0x98),
                      ticket: _0x57598a,
                      ticketId: _0x57598a['id']
                    }),
                    logger_1[_0x32a13b(0x120)]['info'](
                      _0x32a13b(0x140) +
                        _0x57598a['id'] +
                        _0x32a13b(0xff) +
                        _0x2fbe3e
                    );
                });
            } else
              logger_1['logger'][_0x4ddb93(0xc8)](
                'Condição\x20não\x20respeitada\x20-\x20Empresa:\x20' + _0x2fbe3e
              );
          }
        }
      });
    });
  } catch (_0x3acbd3) {
    Sentry[_0x576d9b(0x7d)](_0x3acbd3),
      logger_1[_0x576d9b(0x120)][_0x576d9b(0x17a)](
        _0x576d9b(0x14d),
        _0x3acbd3[_0x576d9b(0xab)]
      );
    throw _0x3acbd3;
  }
}
async function handleRandomUser() {
  const _0x34ef8d = a364_0x31c8db,
    _0x11b7c2 = new CronJob(_0x34ef8d(0x8b), async () => {
      const _0x143450 = _0x34ef8d;
      try {
        const { count: _0x47e9da, rows: _0x30237e } = await Ticket_1[
            _0x143450(0xe2)
          ][_0x143450(0xf6)]({
            where: {
              status: 'pending',
              [sequelize_1['Op'][_0x143450(0xaa)]]: [
                { queueId: { [sequelize_1['Op']['ne']]: null } },
                { queueId: { [sequelize_1['Op']['ne']]: 0x0 } }
              ],
              '$queue.ativarRoteador$': !![],
              '$queue.tempoRoteador$': { [sequelize_1['Op']['ne']]: 0x0 }
            },
            include: [{ model: Queue_1[_0x143450(0xe2)], as: 'queue' }]
          }),
          _0x3fc330 = _0x334922 => {
            const _0x89fc20 = _0x143450,
              _0x5e9954 = Math[_0x89fc20(0x104)](
                Math[_0x89fc20(0x13f)]() * _0x334922[_0x89fc20(0x115)]
              );
            return _0x334922[_0x5e9954];
          },
          _0x284e71 = async _0x40cdd8 => {
            const _0x46e5dd = _0x143450;
            try {
              const _0xa2be35 = await User_1['default']['findOne']({
                where: { id: _0x40cdd8 }
              });
              return _0xa2be35['profile'] === _0x46e5dd(0x184)
                ? _0xa2be35[_0x46e5dd(0x158)] === !![]
                  ? _0xa2be35['id']
                  : 0x0
                : 0x0;
            } catch (_0x3e9c12) {
              Sentry[_0x46e5dd(0x7d)](_0x3e9c12),
                logger_1[_0x46e5dd(0x120)][_0x46e5dd(0x17a)](
                  _0x46e5dd(0x14e),
                  _0x3e9c12[_0x46e5dd(0xab)]
                );
              throw _0x3e9c12;
            }
          };
        if (_0x47e9da > 0x0)
          for (const _0x177332 of _0x30237e) {
            const {
                queue: _0xfc0b7f,
                queueId: _0x3a1417,
                userId: _0xa11e9d
              } = _0x177332,
              _0x2e7ec3 = _0xfc0b7f['tempoRoteador'],
              _0x34e18a = await UserQueue_1[_0x143450(0xe2)][_0x143450(0x10e)]({
                where: { queueId: _0x3a1417 }
              }),
              _0xf56725 = await (0x0, ShowContactService_1[_0x143450(0xe2)])(
                _0x177332[_0x143450(0x161)],
                _0x177332['companyId']
              ),
              _0x5123df = _0x34e18a[_0x143450(0xc7)](
                _0x98ce2e => _0x98ce2e[_0x143450(0xaf)]
              ),
              _0x4f11c3 = (0x0, moment_1[_0x143450(0xe2)])()
                ['subtract'](_0x2e7ec3, _0x143450(0x94))
                [_0x143450(0x15e)]()
                [_0x143450(0x146)](),
              _0x163d88 = new Date(_0x177332[_0x143450(0x112)]);
            let _0x2a6f9f = await CompaniesSettings_1[_0x143450(0xe2)][
              _0x143450(0xea)
            ]({ where: { companyId: _0x177332['companyId'] } });
            const _0x4d0475 = _0x2a6f9f[_0x143450(0xf0)] === 'enabled' || ![];
            if (!_0xa11e9d) {
              const _0x5968ac = _0x3fc330(_0x5123df);
              if ((await _0x284e71(_0x5968ac)) > 0x0) {
                if (_0x4d0475) {
                  const _0x34be8c = await (0x0,
                  ShowTicketService_1[_0x143450(0xe2)])(
                    _0x177332['id'],
                    _0x177332[_0x143450(0x14f)]
                  );
                  await (0x0, SendWhatsAppMessage_1['default'])({
                    body: '‎\x20*Assistente\x20Virtual*:\x0aAguarde\x20enquanto\x20localizamos\x20um\x20atendente...\x20Você\x20será\x20atendido\x20em\x20breve!',
                    ticket: _0x34be8c
                  });
                }
                await (0x0, UpdateTicketService_1[_0x143450(0xe2)])({
                  ticketData: { status: 'pending', userId: _0x5968ac },
                  ticketId: _0x177332['id'],
                  companyId: _0x177332[_0x143450(0x14f)]
                }),
                  logger_1[_0x143450(0x120)][_0x143450(0xc8)](
                    _0x143450(0xd3) +
                      _0x177332['id'] +
                      _0x143450(0x16c) +
                      _0x5968ac +
                      _0x143450(0x122) +
                      _0x177332[_0x143450(0x112)]
                  );
              } else {
              }
            } else {
              if (_0x5123df[_0x143450(0xce)](_0xa11e9d)) {
                if (_0x4f11c3 > _0x163d88) {
                  const _0x4dd57d = _0x5123df[_0x143450(0x15a)](
                    _0x503756 => _0x503756 !== _0xa11e9d
                  );
                  if (_0x4dd57d['length'] > 0x0) {
                    const _0x5b3629 = _0x3fc330(_0x4dd57d);
                    if ((await _0x284e71(_0x5b3629)) > 0x0) {
                      if (_0x4d0475) {
                        const _0x373467 = await (0x0,
                        ShowTicketService_1[_0x143450(0xe2)])(
                          _0x177332['id'],
                          _0x177332[_0x143450(0x14f)]
                        );
                        await (0x0, SendWhatsAppMessage_1['default'])({
                          body: '*Assistente\x20Virtual*:\x0aAguarde\x20enquanto\x20localizamos\x20um\x20atendente...\x20Você\x20será\x20atendido\x20em\x20breve!',
                          ticket: _0x373467
                        });
                      }
                      await (0x0, UpdateTicketService_1[_0x143450(0xe2)])({
                        ticketData: { status: 'pending', userId: _0x5b3629 },
                        ticketId: _0x177332['id'],
                        companyId: _0x177332[_0x143450(0x14f)]
                      }),
                        await _0x177332['reload']();
                    } else {
                    }
                  } else {
                  }
                } else {
                }
              } else {
              }
            }
          }
      } catch (_0x30fe84) {
        Sentry[_0x143450(0x7d)](_0x30fe84),
          logger_1[_0x143450(0x120)][_0x143450(0x17a)](
            _0x143450(0x14e),
            _0x30fe84[_0x143450(0xab)]
          );
        throw _0x30fe84;
      }
    });
  _0x11b7c2[_0x34ef8d(0x89)]();
}
async function handleCloseTicketsAutomatic() {
  const _0x5081ee = a364_0x31c8db,
    _0x42a34c = new CronJob(_0x5081ee(0x92), async () => {
      const _0x31ec24 = _0x5081ee,
        _0x3e4955 = await Company_1[_0x31ec24(0xe2)][_0x31ec24(0x10e)]();
      _0x3e4955[_0x31ec24(0xc7)](async _0x122fab => {
        const _0x11350f = _0x31ec24;
        try {
          const _0x326c18 = _0x122fab['id'];
          await (0x0, wbotClosedTickets_1[_0x11350f(0xb4)])(_0x326c18);
        } catch (_0x283bf8) {
          Sentry[_0x11350f(0x7d)](_0x283bf8),
            logger_1[_0x11350f(0x120)][_0x11350f(0x17a)](
              'ClosedAllOpenTickets\x20->\x20Verify:\x20error',
              _0x283bf8[_0x11350f(0xab)]
            );
          throw _0x283bf8;
        }
      });
    });
  _0x42a34c[_0x5081ee(0x89)]();
}
async function handleWhatsapp() {
  const _0x2cacdb = a364_0x31c8db,
    _0x29b194 = new CronJob(
      _0x2cacdb(0x15d),
      async () => {
        const _0x30977f = _0x2cacdb;
        (0x0, GetWhatsapp_1[_0x30977f(0xe8)])(), _0x29b194[_0x30977f(0x114)]();
      },
      null,
      ![],
      _0x2cacdb(0xda)
    );
  _0x29b194[_0x2cacdb(0x89)]();
}
handleWhatsapp(), handleCloseTicketsAutomatic(), handleRandomUser();
async function startQueueProcess() {
  const _0x2fe4d3 = a364_0x31c8db;
  logger_1[_0x2fe4d3(0x120)][_0x2fe4d3(0xc8)](_0x2fe4d3(0xd6)),
    exports[_0x2fe4d3(0xde)][_0x2fe4d3(0xe1)](
      _0x2fe4d3(0x127),
      handleSendMessage
    ),
    exports[_0x2fe4d3(0xa2)][_0x2fe4d3(0xe1)]('Verify', handleVerifySchedules),
    exports['sendScheduledMessages']['process'](
      'SendMessage',
      handleSendScheduledMessage
    ),
    exports[_0x2fe4d3(0x82)][_0x2fe4d3(0xe1)](
      'VerifyCampaignsDaatabase',
      handleVerifyCampaigns
    ),
    exports[_0x2fe4d3(0x82)][_0x2fe4d3(0xe1)](
      'ProcessCampaign',
      handleProcessCampaign
    ),
    exports[_0x2fe4d3(0x82)]['process'](_0x2fe4d3(0x81), handlePrepareContact),
    exports[_0x2fe4d3(0x82)][_0x2fe4d3(0xe1)](
      _0x2fe4d3(0x13c),
      handleDispatchCampaign
    ),
    exports[_0x2fe4d3(0x17b)][_0x2fe4d3(0xe1)](
      _0x2fe4d3(0x7a),
      handleLoginStatus
    ),
    exports[_0x2fe4d3(0xb6)]['process'](_0x2fe4d3(0x177), handleVerifyQueue),
    exports[_0x2fe4d3(0xa2)][_0x2fe4d3(0x83)](
      'Verify',
      {},
      {
        repeat: { cron: _0x2fe4d3(0x8b), key: _0x2fe4d3(0xfd) },
        removeOnComplete: !![]
      }
    ),
    exports[_0x2fe4d3(0x82)][_0x2fe4d3(0x83)](
      _0x2fe4d3(0xb0),
      {},
      {
        repeat: { cron: _0x2fe4d3(0x15b), key: _0x2fe4d3(0x8a) },
        removeOnComplete: !![]
      }
    ),
    exports[_0x2fe4d3(0x17b)][_0x2fe4d3(0x83)](
      _0x2fe4d3(0x7a),
      {},
      {
        repeat: { cron: _0x2fe4d3(0x14b), key: _0x2fe4d3(0x109) },
        removeOnComplete: !![]
      }
    ),
    exports['queueMonitor'][_0x2fe4d3(0x83)](
      _0x2fe4d3(0x177),
      {},
      {
        repeat: { cron: '*/20\x20*\x20*\x20*\x20*\x20*', key: _0x2fe4d3(0xbf) },
        removeOnComplete: !![]
      }
    );
}
exports[a364_0x31c8db(0xfa)] = startQueueProcess;
