'use strict';
const a43_0x177cc8 = a43_0x289b;
(function (_0x5ec656, _0x1d968b) {
  const _0x453835 = a43_0x289b,
    _0x507d62 = _0x5ec656();
  while (!![]) {
    try {
      const _0xb031fc =
        (-parseInt(_0x453835(0x19d)) / 0x1) *
          (parseInt(_0x453835(0x1a8)) / 0x2) +
        parseInt(_0x453835(0x19a)) / 0x3 +
        (-parseInt(_0x453835(0x183)) / 0x4) *
          (-parseInt(_0x453835(0x1b6)) / 0x5) +
        parseInt(_0x453835(0x18f)) / 0x6 +
        (-parseInt(_0x453835(0x185)) / 0x7) *
          (-parseInt(_0x453835(0x1b1)) / 0x8) +
        parseInt(_0x453835(0x190)) / 0x9 +
        -parseInt(_0x453835(0x1b7)) / 0xa;
      if (_0xb031fc === _0x1d968b) break;
      else _0x507d62['push'](_0x507d62['shift']());
    } catch (_0x50607e) {
      _0x507d62['push'](_0x507d62['shift']());
    }
  }
})(a43_0x4587, 0xd00bd);
var __importDefault =
  (this && this[a43_0x177cc8(0x1be)]) ||
  function (_0x3435e9) {
    const _0x20d111 = a43_0x177cc8;
    return _0x3435e9 && _0x3435e9[_0x20d111(0x184)]
      ? _0x3435e9
      : { default: _0x3435e9 };
  };
Object[a43_0x177cc8(0x1ab)](exports, '__esModule', { value: !![] }),
  (exports[a43_0x177cc8(0x1a7)] =
    exports['removeAdmin'] =
    exports[a43_0x177cc8(0x1c5)] =
    exports['listAll'] =
    exports[a43_0x177cc8(0x17c)] =
    exports[a43_0x177cc8(0x1b5)] =
    exports['closedTickets'] =
    exports['update'] =
    exports[a43_0x177cc8(0x1ba)] =
    exports['storeFacebook'] =
    exports[a43_0x177cc8(0x1c9)] =
    exports['index'] =
      void 0x0);
const socket_1 = require(a43_0x177cc8(0x1c7)),
  cache_1 = __importDefault(require(a43_0x177cc8(0x1c3))),
  wbot_1 = require(a43_0x177cc8(0x1af)),
  Whatsapp_1 = __importDefault(require('../models/Whatsapp')),
  AppError_1 = __importDefault(require(a43_0x177cc8(0x1c8))),
  DeleteBaileysService_1 = __importDefault(require(a43_0x177cc8(0x19b))),
  ShowCompanyService_1 = __importDefault(
    require('../services/CompanyService/ShowCompanyService')
  ),
  graphAPI_1 = require(a43_0x177cc8(0x181)),
  ShowPlanService_1 = __importDefault(require(a43_0x177cc8(0x17f))),
  StartWhatsAppSession_1 = require(a43_0x177cc8(0x18b)),
  CreateWhatsAppService_1 = __importDefault(require(a43_0x177cc8(0x1bb))),
  DeleteWhatsAppService_1 = __importDefault(require(a43_0x177cc8(0x17e))),
  ListWhatsAppsService_1 = __importDefault(require(a43_0x177cc8(0x1ad))),
  ShowWhatsAppService_1 = __importDefault(
    require('../services/WhatsappService/ShowWhatsAppService')
  ),
  UpdateWhatsAppService_1 = __importDefault(require(a43_0x177cc8(0x1aa))),
  ImportWhatsAppMessageService_1 = require(a43_0x177cc8(0x1b4)),
  ShowWhatsAppServiceAdmin_1 = __importDefault(require(a43_0x177cc8(0x1c0))),
  UpdateWhatsAppServiceAdmin_1 = __importDefault(require(a43_0x177cc8(0x17d))),
  ListAllWhatsAppService_1 = __importDefault(require(a43_0x177cc8(0x1ac))),
  index = async (_0x1ceae3, _0x2f2d81) => {
    const _0x1793a7 = a43_0x177cc8,
      { companyId: _0x3174b9 } = _0x1ceae3[_0x1793a7(0x1bd)],
      { session: _0x35acaf } = _0x1ceae3[_0x1793a7(0x193)],
      _0x193f39 = await (0x0, ListWhatsAppsService_1[_0x1793a7(0x191)])({
        companyId: _0x3174b9,
        session: _0x35acaf
      });
    return _0x2f2d81[_0x1793a7(0x17b)](0xc8)[_0x1793a7(0x1a1)](_0x193f39);
  };
exports[a43_0x177cc8(0x19e)] = index;
const store = async (_0xe8a416, _0x4ae8ce) => {
  const _0x13c936 = a43_0x177cc8,
    {
      name: _0x5cf84f,
      status: _0x440bc7,
      isDefault: _0x423c02,
      greetingMessage: _0x20501a,
      complationMessage: _0x152334,
      outOfHoursMessage: _0x4ad90b,
      queueIds: _0x38fe4c,
      token: _0x44d69e,
      maxUseBotQueues: _0x3c43e0,
      timeUseBotQueues: _0x26488e,
      expiresTicket: _0x1b025e,
      allowGroup: _0x226b05,
      timeSendQueue: _0x3a9a8a,
      sendIdQueue: _0x20a636,
      timeInactiveMessage: _0x514fb7,
      inactiveMessage: _0x2cf943,
      ratingMessage: _0x5cbf64,
      maxUseBotQueuesNPS: _0x37541f,
      expiresTicketNPS: _0xb408a2,
      whenExpiresTicket: _0x2cbaf5,
      expiresInactiveMessage: _0x3891f2,
      importOldMessages: _0x1562e0,
      importRecentMessages: _0x5644b4,
      closedTicketsPostImported: _0x24f404,
      importOldMessagesGroups: _0x52d952,
      groupAsTicket: _0x189ab9,
      timeCreateNewTicket: _0x2faa5c,
      schedules: _0x294f9c,
      promptId: _0x338960,
      collectiveVacationEnd: _0x246cf0,
      collectiveVacationMessage: _0x2c1df9,
      collectiveVacationStart: _0x570b60
    } = _0xe8a416[_0x13c936(0x1a4)],
    { companyId: _0x30271d } = _0xe8a416[_0x13c936(0x1bd)],
    _0xa2c659 = await (0x0, ShowCompanyService_1[_0x13c936(0x191)])(_0x30271d),
    _0x6ecf44 = await (0x0, ShowPlanService_1['default'])(
      _0xa2c659[_0x13c936(0x194)]
    );
  if (!_0x6ecf44[_0x13c936(0x1a9)])
    return _0x4ae8ce[_0x13c936(0x17b)](0x190)[_0x13c936(0x1a1)]({
      error: _0x13c936(0x18d)
    });
  const { whatsapp: _0x88f247, oldDefaultWhatsapp: _0x567d5c } = await (0x0,
  CreateWhatsAppService_1[_0x13c936(0x191)])({
    name: _0x5cf84f,
    status: _0x440bc7,
    isDefault: _0x423c02,
    greetingMessage: _0x20501a,
    complationMessage: _0x152334,
    outOfHoursMessage: _0x4ad90b,
    queueIds: _0x38fe4c,
    companyId: _0x30271d,
    token: _0x44d69e,
    maxUseBotQueues: _0x3c43e0,
    timeUseBotQueues: _0x26488e,
    expiresTicket: _0x1b025e,
    allowGroup: _0x226b05,
    timeSendQueue: _0x3a9a8a,
    sendIdQueue: _0x20a636,
    timeInactiveMessage: _0x514fb7,
    inactiveMessage: _0x2cf943,
    ratingMessage: _0x5cbf64,
    maxUseBotQueuesNPS: _0x37541f,
    expiresTicketNPS: _0xb408a2,
    whenExpiresTicket: _0x2cbaf5,
    expiresInactiveMessage: _0x3891f2,
    importOldMessages: _0x1562e0,
    importRecentMessages: _0x5644b4,
    closedTicketsPostImported: _0x24f404,
    importOldMessagesGroups: _0x52d952,
    groupAsTicket: _0x189ab9,
    timeCreateNewTicket: _0x2faa5c,
    schedules: _0x294f9c,
    promptId: _0x338960,
    collectiveVacationEnd: _0x246cf0,
    collectiveVacationMessage: _0x2c1df9,
    collectiveVacationStart: _0x570b60
  });
  (0x0, StartWhatsAppSession_1[_0x13c936(0x1a3)])(_0x88f247, _0x30271d);
  const _0xe1ee3b = (0x0, socket_1['getIO'])();
  return (
    _0xe1ee3b[_0x13c936(0x199)](
      _0x13c936(0x1b0) + _0x30271d + _0x13c936(0x186),
      { action: _0x13c936(0x1a2), whatsapp: _0x88f247 }
    ),
    _0x567d5c &&
      _0xe1ee3b[_0x13c936(0x199)](
        _0x13c936(0x1b0) + _0x30271d + _0x13c936(0x186),
        { action: _0x13c936(0x1a2), whatsapp: _0x567d5c }
      ),
    _0x4ae8ce[_0x13c936(0x17b)](0xc8)[_0x13c936(0x1a1)](_0x88f247)
  );
};
exports[a43_0x177cc8(0x1c9)] = store;
const storeFacebook = async (_0x40e63c, _0x2d2925) => {
  const _0x2af448 = a43_0x177cc8;
  try {
    const {
        facebookUserId: _0x1c5a18,
        facebookUserToken: _0x193555,
        addInstagram: _0xf1185c
      } = _0x40e63c[_0x2af448(0x1a4)],
      { companyId: _0x3ea91f } = _0x40e63c[_0x2af448(0x1bd)],
      { data: _0x15920f } = await (0x0, graphAPI_1[_0x2af448(0x180)])(
        _0x1c5a18,
        _0x193555
      );
    if (_0x15920f[_0x2af448(0x1a5)] === 0x0)
      return _0x2d2925[_0x2af448(0x17b)](0x190)[_0x2af448(0x1a1)]({
        error: 'Facebook\x20page\x20not\x20found'
      });
    const _0x48f1a9 = (0x0, socket_1[_0x2af448(0x197)])(),
      _0x798c1a = [];
    for await (const _0x73ba73 of _0x15920f) {
      const {
          name: _0xf21849,
          access_token: _0x5f092d,
          id: _0x4bb7ab,
          instagram_business_account: _0x577e83
        } = _0x73ba73,
        _0x4569e1 = await (0x0, graphAPI_1['getAccessTokenFromPage'])(
          _0x5f092d
        );
      if (_0x577e83 && _0xf1185c) {
        const {
          id: _0x34f94c,
          username: _0x407b4f,
          name: _0x1e2da7
        } = _0x577e83;
        _0x798c1a[_0x2af448(0x182)]({
          companyId: _0x3ea91f,
          name: _0x2af448(0x187) + (_0x407b4f || _0x1e2da7),
          facebookUserId: _0x1c5a18,
          facebookPageUserId: _0x34f94c,
          facebookUserToken: _0x4569e1,
          tokenMeta: _0x193555,
          isDefault: ![],
          channel: _0x2af448(0x1c2),
          status: _0x2af448(0x19c),
          greetingMessage: '',
          farewellMessage: '',
          queueIds: [],
          isMultidevice: ![]
        }),
          _0x798c1a[_0x2af448(0x182)]({
            companyId: _0x3ea91f,
            name: _0xf21849,
            facebookUserId: _0x1c5a18,
            facebookPageUserId: _0x4bb7ab,
            facebookUserToken: _0x4569e1,
            tokenMeta: _0x193555,
            isDefault: ![],
            channel: 'facebook',
            status: _0x2af448(0x19c),
            greetingMessage: '',
            farewellMessage: '',
            queueIds: [],
            isMultidevice: ![]
          }),
          await (0x0, graphAPI_1[_0x2af448(0x188)])(_0x4bb7ab, _0x4569e1);
      }
      !_0x577e83 &&
        (_0x798c1a[_0x2af448(0x182)]({
          companyId: _0x3ea91f,
          name: _0xf21849,
          facebookUserId: _0x1c5a18,
          facebookPageUserId: _0x4bb7ab,
          facebookUserToken: _0x4569e1,
          tokenMeta: _0x193555,
          isDefault: ![],
          channel: _0x2af448(0x1b9),
          status: _0x2af448(0x19c),
          greetingMessage: '',
          farewellMessage: '',
          queueIds: [],
          isMultidevice: ![]
        }),
        await (0x0, graphAPI_1['subscribeApp'])(_0x73ba73['id'], _0x4569e1));
    }
    for await (const _0x3e094a of _0x798c1a) {
      const _0x40baef = await Whatsapp_1[_0x2af448(0x191)][_0x2af448(0x1bc)]({
        where: { facebookPageUserId: _0x3e094a[_0x2af448(0x1ae)] }
      });
      _0x40baef && (await _0x40baef[_0x2af448(0x1a2)]({ ..._0x3e094a }));
      if (!_0x40baef) {
        const { whatsapp: _0x84edc3 } = await (0x0,
        CreateWhatsAppService_1[_0x2af448(0x191)])(_0x3e094a);
        _0x48f1a9[_0x2af448(0x199)](
          _0x2af448(0x1b0) + _0x3ea91f + '-whatsapp',
          { action: _0x2af448(0x1a2), whatsapp: _0x84edc3 }
        );
      }
    }
    return _0x2d2925['status'](0xc8);
  } catch (_0x199bdb) {
    return (
      console[_0x2af448(0x1b2)](_0x199bdb),
      _0x2d2925[_0x2af448(0x17b)](0x190)[_0x2af448(0x1a1)]({
        error: 'Facebook\x20page\x20not\x20found'
      })
    );
  }
};
function a43_0x289b(_0x39492c, _0x174083) {
  const _0x458717 = a43_0x4587();
  return (
    (a43_0x289b = function (_0x289b7c, _0x5af83c) {
      _0x289b7c = _0x289b7c - 0x179;
      let _0x156415 = _0x458717[_0x289b7c];
      return _0x156415;
    }),
    a43_0x289b(_0x39492c, _0x174083)
  );
}
exports[a43_0x177cc8(0x17a)] = storeFacebook;
const show = async (_0x44cf8b, _0x143bdd) => {
  const _0x29097e = a43_0x177cc8,
    { whatsappId: _0x3de6c1 } = _0x44cf8b[_0x29097e(0x1b3)],
    { companyId: _0x1d818d } = _0x44cf8b[_0x29097e(0x1bd)],
    { session: _0x1d2e86 } = _0x44cf8b['query'],
    _0x22e7f7 = await (0x0, ShowWhatsAppService_1[_0x29097e(0x191)])(
      _0x3de6c1,
      _0x1d818d,
      _0x1d2e86
    );
  return _0x143bdd[_0x29097e(0x17b)](0xc8)['json'](_0x22e7f7);
};
exports[a43_0x177cc8(0x1ba)] = show;
const update = async (_0x483630, _0x590daf) => {
  const _0x8f206c = a43_0x177cc8,
    { whatsappId: _0xbd2667 } = _0x483630[_0x8f206c(0x1b3)],
    _0x23682c = _0x483630['body'],
    { companyId: _0x47048d } = _0x483630[_0x8f206c(0x1bd)],
    { whatsapp: _0xcc44ee, oldDefaultWhatsapp: _0x172843 } = await (0x0,
    UpdateWhatsAppService_1['default'])({
      whatsappData: _0x23682c,
      whatsappId: _0xbd2667,
      companyId: _0x47048d
    }),
    _0x31709f = (0x0, socket_1[_0x8f206c(0x197)])();
  return (
    _0x31709f[_0x8f206c(0x199)](_0x8f206c(0x1b0) + _0x47048d + '-whatsapp', {
      action: _0x8f206c(0x1a2),
      whatsapp: _0xcc44ee
    }),
    _0x172843 &&
      _0x31709f['emit'](_0x8f206c(0x1b0) + _0x47048d + _0x8f206c(0x186), {
        action: 'update',
        whatsapp: _0x172843
      }),
    _0x590daf[_0x8f206c(0x17b)](0xc8)[_0x8f206c(0x1a1)](_0xcc44ee)
  );
};
exports[a43_0x177cc8(0x1a2)] = update;
const closedTickets = async (_0x9527b8, _0x4c58bf) => {
  const _0x234308 = a43_0x177cc8,
    { whatsappId: _0x450583 } = _0x9527b8[_0x234308(0x1b3)];
  return (
    (0x0, ImportWhatsAppMessageService_1[_0x234308(0x1c4)])(_0x450583),
    _0x4c58bf['status'](0xc8)[_0x234308(0x1a1)](_0x234308(0x1b8))
  );
};
exports[a43_0x177cc8(0x1a0)] = closedTickets;
const remove = async (_0x201531, _0x5dd852) => {
  const _0x3dd1bb = a43_0x177cc8,
    { whatsappId: _0x3e7f88 } = _0x201531[_0x3dd1bb(0x1b3)],
    { companyId: _0x1bbd76, profile: _0x52ad92 } = _0x201531[_0x3dd1bb(0x1bd)],
    _0x91dbde = (0x0, socket_1[_0x3dd1bb(0x197)])();
  if (_0x52ad92 !== _0x3dd1bb(0x192))
    throw new AppError_1[_0x3dd1bb(0x191)](_0x3dd1bb(0x179), 0x193);
  const _0x1d7ad3 = await (0x0, ShowWhatsAppService_1['default'])(
    _0x3e7f88,
    _0x1bbd76
  );
  _0x1d7ad3['channel'] === _0x3dd1bb(0x1b8) &&
    (await (0x0, DeleteBaileysService_1[_0x3dd1bb(0x191)])(_0x3e7f88),
    await (0x0, DeleteWhatsAppService_1[_0x3dd1bb(0x191)])(_0x3e7f88),
    await cache_1[_0x3dd1bb(0x191)][_0x3dd1bb(0x196)](
      _0x3dd1bb(0x1c1) + _0x3e7f88 + ':*'
    ),
    (0x0, wbot_1['removeWbot'])(+_0x3e7f88),
    _0x91dbde[_0x3dd1bb(0x199)]('company-' + _0x1bbd76 + '-whatsapp', {
      action: _0x3dd1bb(0x189),
      whatsappId: +_0x3e7f88
    }));
  if (
    _0x1d7ad3[_0x3dd1bb(0x1bf)] === _0x3dd1bb(0x1b9) ||
    _0x1d7ad3[_0x3dd1bb(0x1bf)] === 'instagram'
  ) {
    const { facebookUserToken: _0x4f1573 } = _0x1d7ad3,
      _0x42c854 = await Whatsapp_1[_0x3dd1bb(0x191)]['findAll']({
        where: { facebookUserToken: _0x4f1573 }
      });
    await Whatsapp_1[_0x3dd1bb(0x191)][_0x3dd1bb(0x18c)]({
      where: { facebookUserToken: _0x4f1573 }
    });
    for await (const _0x506edf of _0x42c854) {
      _0x91dbde[_0x3dd1bb(0x199)](
        _0x3dd1bb(0x1b0) + _0x1bbd76 + _0x3dd1bb(0x186),
        { action: _0x3dd1bb(0x189), whatsappId: _0x506edf['id'] }
      );
    }
  }
  return _0x5dd852[_0x3dd1bb(0x17b)](0xc8)[_0x3dd1bb(0x1a1)]({
    message: _0x3dd1bb(0x1a6)
  });
};
function a43_0x4587() {
  const _0x18fa2b = [
    'restartWbot',
    '../services/WbotServices/StartWhatsAppSession',
    'destroy',
    'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!',
    'listAll',
    '9259362aFDVxT',
    '8423775qFGndl',
    'default',
    'admin',
    'query',
    'planId',
    'removeAdmin',
    'delFromPattern',
    'getIO',
    'admin-whatsapp',
    'emit',
    '343605xwPGRY',
    '../services/BaileysServices/DeleteBaileysService',
    'CONNECTED',
    '15CimaJP',
    'index',
    'findAll',
    'closedTickets',
    'json',
    'update',
    'StartWhatsAppSession',
    'body',
    'length',
    'Session\x20disconnected.',
    'showAdmin',
    '210912qFTSxG',
    'useWhatsapp',
    '../services/WhatsappService/UpdateWhatsAppService',
    'defineProperty',
    '../services/WhatsappService/ListAllWhatsAppService',
    '../services/WhatsappService/ListWhatsAppsService',
    'facebookPageUserId',
    '../libs/wbot',
    'company-',
    '187976sgZPQD',
    'log',
    'params',
    '../services/WhatsappService/ImportWhatsAppMessageService',
    'remove',
    '265bYRmPK',
    '13208920jXRhtG',
    'whatsapp',
    'facebook',
    'show',
    '../services/WhatsappService/CreateWhatsAppService',
    'findOne',
    'user',
    '__importDefault',
    'channel',
    '../services/WhatsappService/ShowWhatsAppServiceAdmin',
    'sessions:',
    'instagram',
    '../libs/cache',
    'closeTicketsImported',
    'updateAdmin',
    'removeWbot',
    '../libs/socket',
    '../errors/AppError',
    'store',
    'ERR_NO_PERMISSION',
    'storeFacebook',
    'status',
    'restart',
    '../services/WhatsappService/UpdateWhatsAppServiceAdmin',
    '../services/WhatsappService/DeleteWhatsAppService',
    '../services/PlanService/ShowPlanService',
    'getPageProfile',
    '../services/FacebookServices/graphAPI',
    'push',
    '32660ysJnGE',
    '__esModule',
    '217JSpskz',
    '-whatsapp',
    'Insta\x20',
    'subscribeApp',
    'delete'
  ];
  a43_0x4587 = function () {
    return _0x18fa2b;
  };
  return a43_0x4587();
}
exports[a43_0x177cc8(0x1b5)] = remove;
const restart = async (_0x5b25d7, _0x132379) => {
  const _0x18c432 = a43_0x177cc8,
    { companyId: _0x494752, profile: _0x3202eb } = _0x5b25d7[_0x18c432(0x1bd)];
  if (_0x3202eb !== _0x18c432(0x192))
    throw new AppError_1[_0x18c432(0x191)](_0x18c432(0x179), 0x193);
  return (
    await (0x0, wbot_1[_0x18c432(0x18a)])(_0x494752),
    _0x132379['status'](0xc8)[_0x18c432(0x1a1)]({
      message: 'Whatsapp\x20restart.'
    })
  );
};
exports['restart'] = restart;
const listAll = async (_0x149ff3, _0x52710d) => {
  const _0x48c607 = a43_0x177cc8,
    { companyId: _0x4bbc3f } = _0x149ff3[_0x48c607(0x1bd)],
    { session: _0x7af606 } = _0x149ff3[_0x48c607(0x193)],
    _0x56eafa = await (0x0, ListAllWhatsAppService_1[_0x48c607(0x191)])({
      session: _0x7af606
    });
  return _0x52710d[_0x48c607(0x17b)](0xc8)[_0x48c607(0x1a1)](_0x56eafa);
};
exports[a43_0x177cc8(0x18e)] = listAll;
const updateAdmin = async (_0x9be542, _0x166b4e) => {
  const _0x5902df = a43_0x177cc8,
    { whatsappId: _0x38c9d4 } = _0x9be542[_0x5902df(0x1b3)],
    _0x5c6beb = _0x9be542['body'],
    { companyId: _0x177aa1 } = _0x9be542[_0x5902df(0x1bd)],
    { whatsapp: _0x5cb1f6, oldDefaultWhatsapp: _0x21cdae } = await (0x0,
    UpdateWhatsAppServiceAdmin_1[_0x5902df(0x191)])({
      whatsappData: _0x5c6beb,
      whatsappId: _0x38c9d4,
      companyId: _0x177aa1
    }),
    _0x5e02de = (0x0, socket_1[_0x5902df(0x197)])();
  return (
    _0x5e02de['emit'](_0x5902df(0x198), {
      action: _0x5902df(0x1a2),
      whatsapp: _0x5cb1f6
    }),
    _0x21cdae &&
      _0x5e02de[_0x5902df(0x199)](_0x5902df(0x198), {
        action: _0x5902df(0x1a2),
        whatsapp: _0x21cdae
      }),
    _0x166b4e['status'](0xc8)[_0x5902df(0x1a1)](_0x5cb1f6)
  );
};
exports['updateAdmin'] = updateAdmin;
const removeAdmin = async (_0x129219, _0x3d555c) => {
  const _0x5b5dbe = a43_0x177cc8,
    { whatsappId: _0x16241d } = _0x129219[_0x5b5dbe(0x1b3)],
    { companyId: _0x2fa99d } = _0x129219['user'],
    _0x119011 = (0x0, socket_1[_0x5b5dbe(0x197)])(),
    _0x103c1b = await (0x0, ShowWhatsAppService_1[_0x5b5dbe(0x191)])(
      _0x16241d,
      _0x2fa99d
    );
  _0x103c1b[_0x5b5dbe(0x1bf)] === _0x5b5dbe(0x1b8) &&
    (await (0x0, DeleteBaileysService_1['default'])(_0x16241d),
    await (0x0, DeleteWhatsAppService_1[_0x5b5dbe(0x191)])(_0x16241d),
    await cache_1[_0x5b5dbe(0x191)]['delFromPattern'](
      _0x5b5dbe(0x1c1) + _0x16241d + ':*'
    ),
    (0x0, wbot_1[_0x5b5dbe(0x1c6)])(+_0x16241d),
    _0x119011[_0x5b5dbe(0x199)](_0x5b5dbe(0x198), {
      action: _0x5b5dbe(0x189),
      whatsappId: +_0x16241d
    }));
  if (
    _0x103c1b['channel'] === _0x5b5dbe(0x1b9) ||
    _0x103c1b[_0x5b5dbe(0x1bf)] === _0x5b5dbe(0x1c2)
  ) {
    const { facebookUserToken: _0x415edc } = _0x103c1b,
      _0x4ae694 = await Whatsapp_1[_0x5b5dbe(0x191)][_0x5b5dbe(0x19f)]({
        where: { facebookUserToken: _0x415edc }
      });
    await Whatsapp_1[_0x5b5dbe(0x191)][_0x5b5dbe(0x18c)]({
      where: { facebookUserToken: _0x415edc }
    });
    for await (const _0x4903dc of _0x4ae694) {
      _0x119011['emit']('company-' + _0x2fa99d + _0x5b5dbe(0x186), {
        action: 'delete',
        whatsappId: _0x4903dc['id']
      });
    }
  }
  return _0x3d555c[_0x5b5dbe(0x17b)](0xc8)[_0x5b5dbe(0x1a1)]({
    message: _0x5b5dbe(0x1a6)
  });
};
exports[a43_0x177cc8(0x195)] = removeAdmin;
const showAdmin = async (_0x571a52, _0x57e85f) => {
  const _0x1b7615 = a43_0x177cc8,
    { whatsappId: _0x4bf6b3 } = _0x571a52[_0x1b7615(0x1b3)],
    { companyId: _0x165cfb } = _0x571a52[_0x1b7615(0x1bd)],
    _0x54fd5f = await (0x0, ShowWhatsAppServiceAdmin_1[_0x1b7615(0x191)])(
      _0x4bf6b3
    );
  return _0x57e85f[_0x1b7615(0x17b)](0xc8)[_0x1b7615(0x1a1)](_0x54fd5f);
};
exports[a43_0x177cc8(0x1a7)] = showAdmin;
