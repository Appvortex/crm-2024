'use strict';
function a27_0x52dd() {
  const _0x247cb9 = [
    '323520HtDQNW',
    'status',
    '7JWVZhS',
    'index',
    '3832528IWzwYs',
    '1867491EhjOas',
    'params',
    '../services/QueueIntegrationServices/TestSessionDialogflowService',
    'remove',
    'emit',
    'json',
    '-queueIntegration',
    'getIO',
    '2594251lwwJYN',
    '12MYZQLG',
    '../services/QueueIntegrationServices/ListQueueIntegrationService',
    '../services/QueueIntegrationServices/UpdateQueueIntegrationService',
    '20YdloZQ',
    '658026BqDyfY',
    '__importDefault',
    'testSession',
    '1200258WYtiYH',
    'company-',
    '__esModule',
    '../services/QueueIntegrationServices/CreateQueueIntegrationService',
    'send',
    'user',
    '../libs/socket',
    'show',
    '69400HblNno',
    'defineProperty',
    '../services/QueueIntegrationServices/DeleteQueueIntegrationService',
    'store',
    'create',
    'update',
    '66ZjhssW',
    'default',
    'delete',
    '12SeEzkM',
    'query',
    'body'
  ];
  a27_0x52dd = function () {
    return _0x247cb9;
  };
  return a27_0x52dd();
}
const a27_0x1e434c = a27_0x4275;
(function (_0x1861a7, _0x4cb2e9) {
  const _0x241d89 = a27_0x4275,
    _0x559da8 = _0x1861a7();
  while (!![]) {
    try {
      const _0x37db82 =
        -parseInt(_0x241d89(0x186)) / 0x1 +
        -parseInt(_0x241d89(0x189)) / 0x2 +
        (-parseInt(_0x241d89(0x182)) / 0x3) *
          (-parseInt(_0x241d89(0x19d)) / 0x4) +
        (parseInt(_0x241d89(0x191)) / 0x5) *
          (parseInt(_0x241d89(0x197)) / 0x6) +
        (-parseInt(_0x241d89(0x176)) / 0x7) *
          (-parseInt(_0x241d89(0x178)) / 0x8) +
        (parseInt(_0x241d89(0x179)) / 0x9) *
          (parseInt(_0x241d89(0x185)) / 0xa) +
        (-parseInt(_0x241d89(0x181)) / 0xb) *
          (-parseInt(_0x241d89(0x19a)) / 0xc);
      if (_0x37db82 === _0x4cb2e9) break;
      else _0x559da8['push'](_0x559da8['shift']());
    } catch (_0x226982) {
      _0x559da8['push'](_0x559da8['shift']());
    }
  }
})(a27_0x52dd, 0x54f2e);
var __importDefault =
  (this && this[a27_0x1e434c(0x187)]) ||
  function (_0x257061) {
    const _0x228314 = a27_0x1e434c;
    return _0x257061 && _0x257061[_0x228314(0x18b)]
      ? _0x257061
      : { default: _0x257061 };
  };
Object[a27_0x1e434c(0x192)](exports, '__esModule', { value: !![] }),
  (exports[a27_0x1e434c(0x188)] =
    exports[a27_0x1e434c(0x17c)] =
    exports[a27_0x1e434c(0x196)] =
    exports[a27_0x1e434c(0x190)] =
    exports[a27_0x1e434c(0x194)] =
    exports['index'] =
      void 0x0);
const socket_1 = require(a27_0x1e434c(0x18f)),
  CreateQueueIntegrationService_1 = __importDefault(
    require(a27_0x1e434c(0x18c))
  ),
  DeleteQueueIntegrationService_1 = __importDefault(
    require(a27_0x1e434c(0x193))
  ),
  ListQueueIntegrationService_1 = __importDefault(require(a27_0x1e434c(0x183))),
  ShowQueueIntegrationService_1 = __importDefault(
    require('../services/QueueIntegrationServices/ShowQueueIntegrationService')
  ),
  TestSessionDialogflowService_1 = __importDefault(
    require(a27_0x1e434c(0x17b))
  ),
  UpdateQueueIntegrationService_1 = __importDefault(
    require(a27_0x1e434c(0x184))
  ),
  index = async (_0x3b41ce, _0x583407) => {
    const _0x593f92 = a27_0x1e434c,
      { searchParam: _0x52e078, pageNumber: _0x37002c } =
        _0x3b41ce[_0x593f92(0x19b)],
      { companyId: _0x10f1f0 } = _0x3b41ce[_0x593f92(0x18e)],
      {
        queueIntegrations: _0x5c4ca9,
        count: _0x51bd14,
        hasMore: _0x426d96
      } = await (0x0, ListQueueIntegrationService_1[_0x593f92(0x198)])({
        searchParam: _0x52e078,
        pageNumber: _0x37002c,
        companyId: _0x10f1f0
      });
    return _0x583407[_0x593f92(0x175)](0xc8)['json']({
      queueIntegrations: _0x5c4ca9,
      count: _0x51bd14,
      hasMore: _0x426d96
    });
  };
exports[a27_0x1e434c(0x177)] = index;
const store = async (_0x431cad, _0x4a4b6e) => {
  const _0xd29e0d = a27_0x1e434c,
    {
      type: _0x3646c1,
      name: _0x3001a2,
      projectName: _0x119368,
      jsonContent: _0x1ceb63,
      language: _0x293b55,
      urlN8N: _0x506a50,
      typebotExpires: _0x163563,
      typebotKeywordFinish: _0x4a02bf,
      typebotSlug: _0x1dea7e,
      typebotUnknownMessage: _0x2e0734,
      typebotDelayMessage: _0x379b87,
      typebotKeywordRestart: _0x5bdef7,
      typebotRestartMessage: _0x4a3d7c
    } = _0x431cad['body'],
    { companyId: _0x3687a4 } = _0x431cad[_0xd29e0d(0x18e)],
    _0x496b28 = await (0x0, CreateQueueIntegrationService_1[_0xd29e0d(0x198)])({
      type: _0x3646c1,
      name: _0x3001a2,
      projectName: _0x119368,
      jsonContent: _0x1ceb63,
      language: _0x293b55,
      urlN8N: _0x506a50,
      companyId: _0x3687a4,
      typebotExpires: _0x163563,
      typebotKeywordFinish: _0x4a02bf,
      typebotSlug: _0x1dea7e,
      typebotUnknownMessage: _0x2e0734,
      typebotDelayMessage: _0x379b87,
      typebotKeywordRestart: _0x5bdef7,
      typebotRestartMessage: _0x4a3d7c
    }),
    _0x30285c = (0x0, socket_1[_0xd29e0d(0x180)])();
  return (
    _0x30285c[_0xd29e0d(0x17d)]('company-' + _0x3687a4 + '-queueIntegration', {
      action: _0xd29e0d(0x195),
      queueIntegration: _0x496b28
    }),
    _0x4a4b6e[_0xd29e0d(0x175)](0xc8)[_0xd29e0d(0x17e)](_0x496b28)
  );
};
exports[a27_0x1e434c(0x194)] = store;
const show = async (_0x52b6b0, _0x245566) => {
  const _0x6db13b = a27_0x1e434c,
    { integrationId: _0x4bb9ed } = _0x52b6b0[_0x6db13b(0x17a)],
    { companyId: _0x55ba96 } = _0x52b6b0[_0x6db13b(0x18e)],
    _0x1870df = await (0x0, ShowQueueIntegrationService_1['default'])(
      _0x4bb9ed,
      _0x55ba96
    );
  return _0x245566[_0x6db13b(0x175)](0xc8)[_0x6db13b(0x17e)](_0x1870df);
};
exports[a27_0x1e434c(0x190)] = show;
const update = async (_0x28473e, _0x3760ce) => {
  const _0x409d7c = a27_0x1e434c,
    { integrationId: _0x42ff43 } = _0x28473e[_0x409d7c(0x17a)],
    _0x11d09e = _0x28473e['body'],
    { companyId: _0x20de6b } = _0x28473e[_0x409d7c(0x18e)],
    _0x57c41b = await (0x0, UpdateQueueIntegrationService_1['default'])({
      integrationData: _0x11d09e,
      integrationId: _0x42ff43,
      companyId: _0x20de6b
    }),
    _0x1f34b1 = (0x0, socket_1[_0x409d7c(0x180)])();
  return (
    _0x1f34b1[_0x409d7c(0x17d)](
      _0x409d7c(0x18a) + _0x20de6b + _0x409d7c(0x17f),
      { action: _0x409d7c(0x196), queueIntegration: _0x57c41b }
    ),
    _0x3760ce['status'](0xc9)[_0x409d7c(0x17e)](_0x57c41b)
  );
};
exports['update'] = update;
const remove = async (_0xe1d21c, _0x272313) => {
  const _0x496e9d = a27_0x1e434c,
    { integrationId: _0x1cd6ab } = _0xe1d21c[_0x496e9d(0x17a)],
    { companyId: _0x3a3181 } = _0xe1d21c[_0x496e9d(0x18e)];
  await (0x0, DeleteQueueIntegrationService_1[_0x496e9d(0x198)])(_0x1cd6ab);
  const _0x4ba849 = (0x0, socket_1[_0x496e9d(0x180)])();
  return (
    _0x4ba849[_0x496e9d(0x17d)](
      _0x496e9d(0x18a) + _0x3a3181 + _0x496e9d(0x17f),
      { action: _0x496e9d(0x199), integrationId: +_0x1cd6ab }
    ),
    _0x272313[_0x496e9d(0x175)](0xc8)[_0x496e9d(0x18d)]()
  );
};
function a27_0x4275(_0x582af6, _0x1e0fcd) {
  const _0x52ddb5 = a27_0x52dd();
  return (
    (a27_0x4275 = function (_0x427536, _0x15a55c) {
      _0x427536 = _0x427536 - 0x175;
      let _0x2968da = _0x52ddb5[_0x427536];
      return _0x2968da;
    }),
    a27_0x4275(_0x582af6, _0x1e0fcd)
  );
}
exports[a27_0x1e434c(0x17c)] = remove;
const testSession = async (_0x3ba658, _0x122c40) => {
  const _0x139380 = a27_0x1e434c,
    {
      projectName: _0x1e6118,
      jsonContent: _0x3884d0,
      language: _0x27dcbc
    } = _0x3ba658[_0x139380(0x19c)],
    { companyId: _0x34cad8 } = _0x3ba658['user'],
    _0x30cd7e = await (0x0, TestSessionDialogflowService_1[_0x139380(0x198)])({
      projectName: _0x1e6118,
      jsonContent: _0x3884d0,
      language: _0x27dcbc
    }),
    _0x322bf1 = (0x0, socket_1['getIO'])();
  return (
    _0x322bf1[_0x139380(0x17d)]('company-' + _0x34cad8 + _0x139380(0x17f), {
      action: _0x139380(0x188),
      response: _0x30cd7e
    }),
    _0x122c40[_0x139380(0x175)](0xc8)[_0x139380(0x17e)](_0x30cd7e)
  );
};
exports[a27_0x1e434c(0x188)] = testSession;
