'use strict';
const a662_0x4ef7af = a662_0x1ef5;
(function (_0x11865d, _0x55bc18) {
  const _0x43f4dc = a662_0x1ef5,
    _0x1eca36 = _0x11865d();
  while (!![]) {
    try {
      const _0x38a3b6 =
        (-parseInt(_0x43f4dc(0xc5)) / 0x1) *
          (-parseInt(_0x43f4dc(0xd0)) / 0x2) +
        (parseInt(_0x43f4dc(0xce)) / 0x3) * (-parseInt(_0x43f4dc(0xda)) / 0x4) +
        (-parseInt(_0x43f4dc(0xc1)) / 0x5) * (parseInt(_0x43f4dc(0xd4)) / 0x6) +
        -parseInt(_0x43f4dc(0xcc)) / 0x7 +
        -parseInt(_0x43f4dc(0xcb)) / 0x8 +
        parseInt(_0x43f4dc(0xbe)) / 0x9 +
        parseInt(_0x43f4dc(0xc7)) / 0xa;
      if (_0x38a3b6 === _0x55bc18) break;
      else _0x1eca36['push'](_0x1eca36['shift']());
    } catch (_0x228791) {
      _0x1eca36['push'](_0x1eca36['shift']());
    }
  }
})(a662_0x44ef, 0xa106a);
function a662_0x1ef5(_0x2f2954, _0x577447) {
  const _0x44ef63 = a662_0x44ef();
  return (
    (a662_0x1ef5 = function (_0x1ef574, _0x1b801e) {
      _0x1ef574 = _0x1ef574 - 0xb7;
      let _0x40b0a3 = _0x44ef63[_0x1ef574];
      return _0x40b0a3;
    }),
    a662_0x1ef5(_0x2f2954, _0x577447)
  );
}
var __createBinding =
    (this && this['__createBinding']) ||
    (Object['create']
      ? function (_0x2ab03d, _0x58c605, _0x3f7a6c, _0x41c94d) {
          const _0x4263bf = a662_0x1ef5;
          if (_0x41c94d === undefined) _0x41c94d = _0x3f7a6c;
          var _0x22782d = Object[_0x4263bf(0xc8)](_0x58c605, _0x3f7a6c);
          (!_0x22782d ||
            (_0x4263bf(0xca) in _0x22782d
              ? !_0x58c605[_0x4263bf(0xc0)]
              : _0x22782d[_0x4263bf(0xbc)] || _0x22782d['configurable'])) &&
            (_0x22782d = {
              enumerable: !![],
              get: function () {
                return _0x58c605[_0x3f7a6c];
              }
            }),
            Object[_0x4263bf(0xbb)](_0x2ab03d, _0x41c94d, _0x22782d);
        }
      : function (_0x34129f, _0x4e6c9f, _0x552920, _0x10d6ab) {
          if (_0x10d6ab === undefined) _0x10d6ab = _0x552920;
          _0x34129f[_0x10d6ab] = _0x4e6c9f[_0x552920];
        }),
  __setModuleDefault =
    (this && this[a662_0x4ef7af(0xdd)]) ||
    (Object[a662_0x4ef7af(0xb7)]
      ? function (_0x337a1b, _0x1b7715) {
          const _0x58c5d4 = a662_0x4ef7af;
          Object[_0x58c5d4(0xbb)](_0x337a1b, _0x58c5d4(0xc2), {
            enumerable: !![],
            value: _0x1b7715
          });
        }
      : function (_0xc67b1f, _0x2b776d) {
          _0xc67b1f['default'] = _0x2b776d;
        }),
  __importStar =
    (this && this['__importStar']) ||
    function (_0x43fea8) {
      const _0x1428c0 = a662_0x4ef7af;
      if (_0x43fea8 && _0x43fea8['__esModule']) return _0x43fea8;
      var _0x1dc072 = {};
      if (_0x43fea8 != null) {
        for (var _0x5448d5 in _0x43fea8)
          if (
            _0x5448d5 !== _0x1428c0(0xc2) &&
            Object['prototype']['hasOwnProperty']['call'](_0x43fea8, _0x5448d5)
          )
            __createBinding(_0x1dc072, _0x43fea8, _0x5448d5);
      }
      return __setModuleDefault(_0x1dc072, _0x43fea8), _0x1dc072;
    },
  __importDefault =
    (this && this[a662_0x4ef7af(0xde)]) ||
    function (_0x110bca) {
      const _0x1ef4d5 = a662_0x4ef7af;
      return _0x110bca && _0x110bca[_0x1ef4d5(0xc0)]
        ? _0x110bca
        : { default: _0x110bca };
    };
Object[a662_0x4ef7af(0xbb)](exports, '__esModule', { value: !![] });
const Yup = __importStar(require(a662_0x4ef7af(0xd3))),
  AppError_1 = __importDefault(require(a662_0x4ef7af(0xdf))),
  Whatsapp_1 = __importDefault(require(a662_0x4ef7af(0xc9))),
  Company_1 = __importDefault(require('../../models/Company')),
  Plan_1 = __importDefault(require('../../models/Plan')),
  AssociateWhatsappQueue_1 = __importDefault(
    require('./AssociateWhatsappQueue')
  ),
  CreateWhatsAppService = async ({
    name: _0x4b8b16,
    status: status = a662_0x4ef7af(0xcf),
    queueIds: queueIds = [],
    greetingMessage: _0xef6d38,
    complationMessage: _0x40d3dd,
    outOfHoursMessage: _0x115e2a,
    isDefault: isDefault = ![],
    companyId: _0x32433c,
    token: token = '',
    provider: provider = a662_0x4ef7af(0xc6),
    facebookUserId: _0x2734e1,
    facebookUserToken: _0xd0aeb1,
    facebookPageUserId: _0x462092,
    tokenMeta: _0x57a521,
    channel: channel = 'whatsapp',
    maxUseBotQueues: _0x1432d0,
    timeUseBotQueues: _0x5ba831,
    expiresTicket: _0x4bc549,
    allowGroup: allowGroup = ![],
    timeSendQueue: _0x1056ea,
    sendIdQueue: _0x11efb,
    timeInactiveMessage: _0x1213b7,
    inactiveMessage: _0x317734,
    ratingMessage: _0x1bae9d,
    maxUseBotQueuesNPS: _0x5baef7,
    expiresTicketNPS: _0x34d276,
    whenExpiresTicket: _0x67ee3d,
    expiresInactiveMessage: _0x1e51e4,
    groupAsTicket: _0x3a72e3,
    importOldMessages: _0x51e5c3,
    importRecentMessages: _0x54dce9,
    closedTicketsPostImported: _0x5c3844,
    importOldMessagesGroups: _0x2028f0,
    timeCreateNewTicket: _0x13dcbf,
    integrationId: _0x16cc56,
    schedules: _0x5715d4,
    promptId: _0x3b53f8,
    collectiveVacationEnd: _0x496fbb,
    collectiveVacationMessage: _0x1df58d,
    collectiveVacationStart: _0x159cd5
  }) => {
    const _0x143543 = a662_0x4ef7af,
      _0x19eaf1 = await Company_1[_0x143543(0xc2)]['findOne']({
        where: { id: _0x32433c },
        include: [{ model: Plan_1[_0x143543(0xc2)], as: 'plan' }]
      });
    if (_0x19eaf1 !== null) {
      const _0x2184e7 = await Whatsapp_1['default']['count']({
        where: { companyId: _0x32433c, channel: channel }
      });
      if (_0x2184e7 >= _0x19eaf1[_0x143543(0xd9)][_0x143543(0xba)])
        throw new AppError_1[_0x143543(0xc2)](
          'Número\x20máximo\x20de\x20conexões\x20já\x20alcançado:\x20' +
            _0x2184e7
        );
    }
    const _0xd16e05 = Yup[_0x143543(0xbd)]()[_0x143543(0xc4)]({
      name: Yup['string']()
        [_0x143543(0xb9)]()
        [_0x143543(0xd5)](0x2)
        [_0x143543(0xbf)](
          _0x143543(0xdb),
          'Esse\x20nome\x20já\x20está\x20sendo\x20utilizado\x20por\x20outra\x20conexão',
          async _0x1165c4 => {
            const _0x499579 = _0x143543;
            if (!_0x1165c4) return ![];
            const _0x1ff8a6 = await Whatsapp_1[_0x499579(0xc2)][
              _0x499579(0xb8)
            ]({
              where: { name: _0x1165c4, channel: channel, companyId: _0x32433c }
            });
            return !_0x1ff8a6;
          }
        ),
      isDefault: Yup[_0x143543(0xd1)]()[_0x143543(0xb9)]()
    });
    try {
      await _0xd16e05[_0x143543(0xd2)]({
        name: _0x4b8b16,
        status: status,
        isDefault: isDefault
      });
    } catch (_0x234817) {
      throw new AppError_1[_0x143543(0xc2)](_0x234817[_0x143543(0xc3)]);
    }
    const _0x4c3b15 = await Whatsapp_1[_0x143543(0xc2)][_0x143543(0xb8)]({
      where: { companyId: _0x32433c }
    });
    isDefault = channel === _0x143543(0xcd) ? !_0x4c3b15 : ![];
    let _0x9ed6a9 = null;
    channel === _0x143543(0xcd) &&
      isDefault &&
      ((_0x9ed6a9 = await Whatsapp_1[_0x143543(0xc2)][_0x143543(0xb8)]({
        where: { isDefault: !![], companyId: _0x32433c, channel: channel }
      })),
      _0x9ed6a9 &&
        (await _0x9ed6a9[_0x143543(0xd8)]({
          isDefault: ![],
          companyId: _0x32433c
        })));
    if (queueIds['length'] > 0x1 && !_0xef6d38)
      throw new AppError_1['default']('ERR_WAPP_GREETING_REQUIRED');
    if (token !== null && token !== '') {
      const _0x4296ba = Yup[_0x143543(0xbd)]()[_0x143543(0xc4)]({
        token: Yup['string']()
          [_0x143543(0xb9)]()
          [_0x143543(0xd5)](0x2)
          [_0x143543(0xbf)](
            _0x143543(0xdc),
            _0x143543(0xd7),
            async _0x20d40d => {
              const _0x161209 = _0x143543;
              if (!_0x20d40d) return ![];
              const _0x50ce10 = await Whatsapp_1[_0x161209(0xc2)][
                _0x161209(0xb8)
              ]({ where: { token: _0x20d40d, channel: channel } });
              return !_0x50ce10;
            }
          )
      });
      try {
        await _0x4296ba[_0x143543(0xd2)]({ token: token });
      } catch (_0x2ba0bf) {
        throw new AppError_1[_0x143543(0xc2)](_0x2ba0bf[_0x143543(0xc3)]);
      }
    }
    const _0x252e12 = await Whatsapp_1[_0x143543(0xc2)]['create'](
      {
        name: _0x4b8b16,
        status: status,
        greetingMessage: _0xef6d38,
        complationMessage: _0x40d3dd,
        outOfHoursMessage: _0x115e2a,
        ratingMessage: _0x1bae9d,
        isDefault: isDefault,
        companyId: _0x32433c,
        token: token,
        provider: provider,
        channel: channel,
        facebookUserId: _0x2734e1,
        facebookUserToken: _0xd0aeb1,
        facebookPageUserId: _0x462092,
        tokenMeta: _0x57a521,
        maxUseBotQueues: _0x1432d0,
        timeUseBotQueues: _0x5ba831,
        expiresTicket: _0x4bc549,
        allowGroup: allowGroup,
        timeSendQueue: _0x1056ea,
        sendIdQueue: _0x11efb,
        timeInactiveMessage: _0x1213b7,
        inactiveMessage: _0x317734,
        maxUseBotQueuesNPS: _0x5baef7,
        expiresTicketNPS: _0x34d276,
        whenExpiresTicket: _0x67ee3d,
        expiresInactiveMessage: _0x1e51e4,
        groupAsTicket: _0x3a72e3,
        importOldMessages: _0x51e5c3,
        importRecentMessages: _0x54dce9,
        closedTicketsPostImported: _0x5c3844,
        importOldMessagesGroups: _0x2028f0,
        timeCreateNewTicket: _0x13dcbf,
        integrationId: _0x16cc56,
        schedules: _0x5715d4,
        promptId: _0x3b53f8,
        collectiveVacationEnd: _0x496fbb,
        collectiveVacationMessage: _0x1df58d,
        collectiveVacationStart: _0x159cd5
      },
      { include: [_0x143543(0xd6)] }
    );
    return (
      await (0x0, AssociateWhatsappQueue_1[_0x143543(0xc2)])(
        _0x252e12,
        queueIds
      ),
      { whatsapp: _0x252e12, oldDefaultWhatsapp: _0x9ed6a9 }
    );
  };
exports['default'] = CreateWhatsAppService;
function a662_0x44ef() {
  const _0x2d0324 = [
    '4219911aCIoNb',
    'test',
    '__esModule',
    '25690PWcilx',
    'default',
    'message',
    'shape',
    '35842ZhvHcs',
    'beta',
    '6765050wjqoCd',
    'getOwnPropertyDescriptor',
    '../../models/Whatsapp',
    'get',
    '2028800OATdvp',
    '1876700tbVzhO',
    'whatsapp',
    '3396corHtZ',
    'OPENING',
    '58GPiuWX',
    'boolean',
    'validate',
    'yup',
    '852WXrPbd',
    'min',
    'queues',
    'This\x20whatsapp\x20token\x20is\x20already\x20used.',
    'update',
    'plan',
    '968Scetnt',
    'Check-name',
    'Check-token',
    '__setModuleDefault',
    '__importDefault',
    '../../errors/AppError',
    'create',
    'findOne',
    'required',
    'connections',
    'defineProperty',
    'writable',
    'object'
  ];
  a662_0x44ef = function () {
    return _0x2d0324;
  };
  return a662_0x44ef();
}
