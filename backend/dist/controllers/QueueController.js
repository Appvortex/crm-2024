'use strict';
const a26_0x56d36d = a26_0x2674;
(function (_0x91d9e8, _0x594892) {
  const _0xb53f4e = a26_0x2674,
    _0x3682ae = _0x91d9e8();
  while (!![]) {
    try {
      const _0x188029 =
        (parseInt(_0xb53f4e(0x140)) / 0x1) *
          (parseInt(_0xb53f4e(0x135)) / 0x2) +
        parseInt(_0xb53f4e(0x134)) / 0x3 +
        (-parseInt(_0xb53f4e(0x13b)) / 0x4) *
          (parseInt(_0xb53f4e(0x137)) / 0x5) +
        parseInt(_0xb53f4e(0x142)) / 0x6 +
        (-parseInt(_0xb53f4e(0x123)) / 0x7) *
          (-parseInt(_0xb53f4e(0x13d)) / 0x8) +
        (parseInt(_0xb53f4e(0x128)) / 0x9) *
          (parseInt(_0xb53f4e(0x146)) / 0xa) +
        (-parseInt(_0xb53f4e(0x12a)) / 0xb) *
          (parseInt(_0xb53f4e(0x141)) / 0xc);
      if (_0x188029 === _0x594892) break;
      else _0x3682ae['push'](_0x3682ae['shift']());
    } catch (_0x406c5f) {
      _0x3682ae['push'](_0x3682ae['shift']());
    }
  }
})(a26_0x2d6d, 0x35bd2);
var __importDefault =
  (this && this[a26_0x56d36d(0x121)]) ||
  function (_0x5a35ec) {
    const _0xbf2ce4 = a26_0x56d36d;
    return _0x5a35ec && _0x5a35ec[_0xbf2ce4(0x13a)]
      ? _0x5a35ec
      : { default: _0x5a35ec };
  };
function a26_0x2674(_0x43746c, _0x4a1fc5) {
  const _0x2d6dc6 = a26_0x2d6d();
  return (
    (a26_0x2674 = function (_0x2674af, _0x3a052d) {
      _0x2674af = _0x2674af - 0x121;
      let _0x304133 = _0x2d6dc6[_0x2674af];
      return _0x304133;
    }),
    a26_0x2674(_0x43746c, _0x4a1fc5)
  );
}
Object['defineProperty'](exports, a26_0x56d36d(0x13a), { value: !![] }),
  (exports[a26_0x56d36d(0x13e)] =
    exports['update'] =
    exports[a26_0x56d36d(0x13c)] =
    exports[a26_0x56d36d(0x13f)] =
    exports[a26_0x56d36d(0x133)] =
      void 0x0);
const socket_1 = require(a26_0x56d36d(0x132)),
  CreateQueueService_1 = __importDefault(require(a26_0x56d36d(0x144))),
  DeleteQueueService_1 = __importDefault(require(a26_0x56d36d(0x129))),
  ListQueuesService_1 = __importDefault(require(a26_0x56d36d(0x12d))),
  ShowQueueService_1 = __importDefault(require(a26_0x56d36d(0x131))),
  UpdateQueueService_1 = __importDefault(require(a26_0x56d36d(0x12c))),
  lodash_1 = require(a26_0x56d36d(0x124)),
  index = async (_0xbd4fda, _0x34bd2c) => {
    const _0x1d5d9e = a26_0x56d36d,
      { companyId: _0xae2960 } = _0xbd4fda['user'],
      { companyId: _0x4b1d05 } = _0xbd4fda[_0x1d5d9e(0x127)];
    let _0x50331a = _0xae2960;
    !(0x0, lodash_1['isNil'])(_0x4b1d05) && (_0x50331a = +_0x4b1d05);
    const _0x30cd9b = await (0x0, ListQueuesService_1[_0x1d5d9e(0x138)])({
      companyId: _0x50331a
    });
    return _0x34bd2c['status'](0xc8)['json'](_0x30cd9b);
  };
exports[a26_0x56d36d(0x133)] = index;
const store = async (_0x8a129f, _0x1c9d21) => {
  const _0x1f96ac = a26_0x56d36d,
    {
      name: _0x54a405,
      color: _0x20d310,
      greetingMessage: _0x1d6646,
      outOfHoursMessage: _0x3f9734,
      schedules: _0x527411,
      chatbots: _0x28e19f,
      orderQueue: _0x585bfe,
      tempoRoteador: _0x405642,
      ativarRoteador: _0x5327af,
      integrationId: _0x405a2e,
      fileListId: _0x543c45,
      closeTicket: _0x4188b4
    } = _0x8a129f[_0x1f96ac(0x143)],
    { companyId: _0xd33552 } = _0x8a129f[_0x1f96ac(0x126)],
    _0x300743 = await (0x0, CreateQueueService_1['default'])({
      name: _0x54a405,
      color: _0x20d310,
      greetingMessage: _0x1d6646,
      companyId: _0xd33552,
      outOfHoursMessage: _0x3f9734,
      tempoRoteador: _0x405642 === '' ? 0x0 : _0x405642,
      ativarRoteador: _0x5327af,
      schedules: _0x527411,
      chatbots: _0x28e19f,
      orderQueue: _0x585bfe === '' ? null : _0x585bfe,
      integrationId: _0x405a2e === '' ? null : _0x405a2e,
      fileListId: _0x543c45 === '' ? null : _0x543c45,
      closeTicket: _0x4188b4
    }),
    _0x51cee8 = (0x0, socket_1[_0x1f96ac(0x12b)])();
  return (
    _0x51cee8[_0x1f96ac(0x139)]('company-' + _0xd33552 + _0x1f96ac(0x136), {
      action: 'update',
      queue: _0x300743
    }),
    _0x1c9d21[_0x1f96ac(0x12f)](0xc8)['json'](_0x300743)
  );
};
exports['store'] = store;
const show = async (_0x425a47, _0x169451) => {
  const _0x98be67 = a26_0x56d36d,
    { queueId: _0x384a88 } = _0x425a47['params'],
    { companyId: _0x2be0e3 } = _0x425a47[_0x98be67(0x126)],
    _0x1eb9f9 = await (0x0, ShowQueueService_1[_0x98be67(0x138)])(
      _0x384a88,
      _0x2be0e3
    );
  return _0x169451['status'](0xc8)['json'](_0x1eb9f9);
};
exports[a26_0x56d36d(0x13c)] = show;
const update = async (_0xe5953f, _0x1f3987) => {
  const _0x3051d1 = a26_0x56d36d,
    { queueId: _0x5d5f0a } = _0xe5953f[_0x3051d1(0x12e)],
    { companyId: _0x3fcc80 } = _0xe5953f['user'],
    {
      name: _0x3e9b7c,
      color: _0x35a3df,
      greetingMessage: _0x109a1f,
      outOfHoursMessage: _0x17e636,
      schedules: _0x210b03,
      chatbots: _0x5eeea8,
      orderQueue: _0x10494a,
      tempoRoteador: _0x21f2f7,
      ativarRoteador: _0x4c0a0d,
      integrationId: _0x5905d0,
      fileListId: _0x451ab8,
      closeTicket: _0x59e7bb
    } = _0xe5953f[_0x3051d1(0x143)],
    _0x427aaf = await (0x0, UpdateQueueService_1[_0x3051d1(0x138)])(
      _0x5d5f0a,
      {
        name: _0x3e9b7c,
        color: _0x35a3df,
        greetingMessage: _0x109a1f,
        outOfHoursMessage: _0x17e636,
        tempoRoteador: _0x21f2f7 === '' ? 0x0 : _0x21f2f7,
        ativarRoteador: _0x4c0a0d,
        schedules: _0x210b03,
        chatbots: _0x5eeea8,
        orderQueue: _0x10494a === '' ? null : _0x10494a,
        integrationId: _0x5905d0 === '' ? null : _0x5905d0,
        fileListId: _0x451ab8 === '' ? null : _0x451ab8,
        closeTicket: _0x59e7bb
      },
      _0x3fcc80
    ),
    _0x530a13 = (0x0, socket_1[_0x3051d1(0x12b)])();
  return (
    _0x530a13[_0x3051d1(0x139)]('company-' + _0x3fcc80 + _0x3051d1(0x136), {
      action: _0x3051d1(0x130),
      queue: _0x427aaf
    }),
    _0x1f3987[_0x3051d1(0x12f)](0xc9)[_0x3051d1(0x122)](_0x427aaf)
  );
};
exports[a26_0x56d36d(0x130)] = update;
const remove = async (_0x2e2231, _0x57bc45) => {
  const _0x2f3908 = a26_0x56d36d,
    { queueId: _0x39a4c5 } = _0x2e2231[_0x2f3908(0x12e)],
    { companyId: _0x271471 } = _0x2e2231['user'];
  await (0x0, DeleteQueueService_1[_0x2f3908(0x138)])(_0x39a4c5, _0x271471);
  const _0x489369 = (0x0, socket_1[_0x2f3908(0x12b)])();
  return (
    _0x489369[_0x2f3908(0x139)](
      _0x2f3908(0x125) + _0x271471 + _0x2f3908(0x136),
      { action: _0x2f3908(0x145), queueId: +_0x39a4c5 }
    ),
    _0x57bc45[_0x2f3908(0x12f)](0xc8)[_0x2f3908(0x147)]()
  );
};
exports[a26_0x56d36d(0x13e)] = remove;
function a26_0x2d6d() {
  const _0x1ca78c = [
    '6740088bzOvqS',
    '2429292LQvdJF',
    'body',
    '../services/QueueService/CreateQueueService',
    'delete',
    '257470mTkFeB',
    'send',
    '__importDefault',
    'json',
    '77waJpdN',
    'lodash',
    'company-',
    'user',
    'query',
    '99ggSKuI',
    '../services/QueueService/DeleteQueueService',
    '22PBKydx',
    'getIO',
    '../services/QueueService/UpdateQueueService',
    '../services/QueueService/ListQueuesService',
    'params',
    'status',
    'update',
    '../services/QueueService/ShowQueueService',
    '../libs/socket',
    'index',
    '849912wbctnt',
    '4pGqwcm',
    '-queue',
    '720Srlvzp',
    'default',
    'emit',
    '__esModule',
    '72Pjggqz',
    'show',
    '223784hFPiIq',
    'remove',
    'store',
    '33474YCIyZL'
  ];
  a26_0x2d6d = function () {
    return _0x1ca78c;
  };
  return a26_0x2d6d();
}
