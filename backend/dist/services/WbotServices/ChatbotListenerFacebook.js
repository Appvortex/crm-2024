'use strict';
const a644_0x180153 = a644_0x57dd;
(function (_0x436d6f, _0x87234c) {
  const _0x2b4319 = a644_0x57dd,
    _0x32dd71 = _0x436d6f();
  while (!![]) {
    try {
      const _0x2a2d1f =
        (-parseInt(_0x2b4319(0x1d6)) / 0x1) *
          (-parseInt(_0x2b4319(0x1c4)) / 0x2) +
        -parseInt(_0x2b4319(0x1d1)) / 0x3 +
        parseInt(_0x2b4319(0x1da)) / 0x4 +
        -parseInt(_0x2b4319(0x1e0)) / 0x5 +
        (parseInt(_0x2b4319(0x1b8)) / 0x6) *
          (parseInt(_0x2b4319(0x1b9)) / 0x7) +
        -parseInt(_0x2b4319(0x1c2)) / 0x8 +
        (parseInt(_0x2b4319(0x1ce)) / 0x9) *
          (-parseInt(_0x2b4319(0x1c0)) / 0xa);
      if (_0x2a2d1f === _0x87234c) break;
      else _0x32dd71['push'](_0x32dd71['shift']());
    } catch (_0x2b5ae0) {
      _0x32dd71['push'](_0x32dd71['shift']());
    }
  }
})(a644_0x5ace, 0xcee36);
var __importDefault =
  (this && this[a644_0x180153(0x1dc)]) ||
  function (_0x387da7) {
    const _0x28284a = a644_0x180153;
    return _0x387da7 && _0x387da7[_0x28284a(0x1c7)]
      ? _0x387da7
      : { default: _0x387da7 };
  };
Object[a644_0x180153(0x1cf)](exports, a644_0x180153(0x1c7), { value: !![] }),
  (exports[a644_0x180153(0x1d3)] = exports[a644_0x180153(0x1c6)] = void 0x0);
function a644_0x57dd(_0x1c7a27, _0x1d648b) {
  const _0x5acec6 = a644_0x5ace();
  return (
    (a644_0x57dd = function (_0x57ddd4, _0x5e9b29) {
      _0x57ddd4 = _0x57ddd4 - 0x1b8;
      let _0xf7c957 = _0x5acec6[_0x57ddd4];
      return _0xf7c957;
    }),
    a644_0x57dd(_0x1c7a27, _0x1d648b)
  );
}
const ShowDialogChatBotsServices_1 = __importDefault(
    require(a644_0x180153(0x1c3))
  ),
  ShowQueueService_1 = __importDefault(require(a644_0x180153(0x1cb))),
  ShowChatBotServices_1 = __importDefault(require(a644_0x180153(0x1c1))),
  DeleteDialogChatBotsServices_1 = __importDefault(
    require('../DialogChatBotsServices/DeleteDialogChatBotsServices')
  ),
  ShowChatBotByChatbotIdServices_1 = __importDefault(
    require(a644_0x180153(0x1d0))
  ),
  CreateDialogChatBotsServices_1 = __importDefault(
    require('../DialogChatBotsServices/CreateDialogChatBotsServices')
  ),
  ShowWhatsAppService_1 = __importDefault(require(a644_0x180153(0x1bf))),
  Mustache_1 = __importDefault(require(a644_0x180153(0x1ba))),
  UpdateTicketService_1 = __importDefault(require(a644_0x180153(0x1e1))),
  User_1 = __importDefault(require(a644_0x180153(0x1c8))),
  graphAPI_1 = require('../FacebookServices/graphAPI'),
  isNumeric = _0xa577b2 => /^-?\d+$/[a644_0x180153(0x1d9)](_0xa577b2),
  deleteAndCreateDialogStage = async (_0x124768, _0x2b3649, _0x326e81) => {
    const _0x3459e3 = a644_0x180153;
    try {
      await (0x0, DeleteDialogChatBotsServices_1[_0x3459e3(0x1bb)])(
        _0x124768['id']
      );
      const _0x95e26b = await (0x0,
      ShowChatBotByChatbotIdServices_1[_0x3459e3(0x1bb)])(_0x2b3649);
      return (
        !_0x95e26b && (await _0x326e81[_0x3459e3(0x1de)]({ isBot: ![] })),
        await (0x0, CreateDialogChatBotsServices_1[_0x3459e3(0x1bb)])({
          awaiting: 0x1,
          contactId: _0x124768['id'],
          chatbotId: _0x2b3649,
          queueId: _0x95e26b['queueId']
        })
      );
    } catch (_0x2ba9f5) {
      await _0x326e81['update']({ isBot: ![] });
    }
  };
function a644_0x5ace() {
  const _0x2c4fc3 = [
    '../../helpers/Mustache',
    'default',
    'forEach',
    'options',
    'sendText',
    '../WhatsappService/ShowWhatsAppService',
    '10YTEpro',
    '../ChatBotServices/ShowChatBotServices',
    '898536MYnmUD',
    '../DialogChatBotsServices/ShowDialogChatBotsServices',
    '2EZTVpZ',
    'isAgent',
    'deleteAndCreateDialogStage',
    '__esModule',
    '../../models/User',
    '*\x20-\x20',
    'chatbots',
    '../QueueService/ShowQueueService',
    'text',
    '\x0a*#*\x20Volver\x20al\x20menú\x20principal',
    '3216177yeeJzM',
    'defineProperty',
    '../ChatBotServices/ShowChatBotByChatbotIdServices',
    '1839273caAimz',
    'facebookUserToken',
    'sayChatbot',
    'whatsapp',
    'greetingMessage',
    '766091qoXVug',
    'findOne',
    'name',
    'test',
    '4165612jmrwqE',
    'is_echo',
    '__importDefault',
    'open',
    'update',
    'length',
    '5134995fyzqWD',
    '../TicketServices/UpdateTicketService',
    'companyId',
    'number',
    '12318fjIPop',
    '3920NvtTki'
  ];
  a644_0x5ace = function () {
    return _0x2c4fc3;
  };
  return a644_0x5ace();
}
exports[a644_0x180153(0x1c6)] = deleteAndCreateDialogStage;
const sendMessage = async (_0x2901fd, _0x225d5e, _0x37e4ce, _0x2594b3) => {
    const _0x5833c4 = a644_0x180153,
      _0x13b1a0 = await (0x0, graphAPI_1[_0x5833c4(0x1be)])(
        _0x225d5e[_0x5833c4(0x1e3)],
        (0x0, Mustache_1[_0x5833c4(0x1bb)])(_0x2594b3, _0x37e4ce),
        _0x37e4ce[_0x5833c4(0x1d4)][_0x5833c4(0x1d2)]
      );
  },
  sendDialog = async (_0x21365c, _0x5cea8f, _0xa466a9) => {
    const _0x1eb2e2 = a644_0x180153,
      _0x104ad4 = await (0x0, ShowChatBotServices_1[_0x1eb2e2(0x1bb)])(
        _0x21365c['id']
      );
    if (_0x104ad4[_0x1eb2e2(0x1bd)]) {
      let _0x316fa9 = '';
      _0x104ad4[_0x1eb2e2(0x1bd)][_0x1eb2e2(0x1bc)]((_0x29faae, _0x38f1e7) => {
        const _0x3aafcc = _0x1eb2e2;
        _0x316fa9 +=
          '*' +
          (_0x38f1e7 + 0x1) +
          '*\x20-\x20' +
          _0x29faae[_0x3aafcc(0x1d8)] +
          '\x0a';
      });
      const _0x30ff75 =
        _0x316fa9[_0x1eb2e2(0x1df)] > 0x0
          ? _0x316fa9 + _0x1eb2e2(0x1cd)
          : _0x316fa9;
      if (_0x316fa9[_0x1eb2e2(0x1df)] > 0x0) {
        const _0x497bb3 =
            '‎' + _0x21365c['greetingMessage'] + '\x0a\x0a' + _0x30ff75,
          _0x1f38fb = await (0x0, graphAPI_1['sendText'])(
            _0x5cea8f[_0x1eb2e2(0x1e3)],
            (0x0, Mustache_1[_0x1eb2e2(0x1bb)])(_0x497bb3, _0xa466a9),
            _0xa466a9[_0x1eb2e2(0x1d4)][_0x1eb2e2(0x1d2)]
          );
        return _0x1f38fb;
      }
      const _0x2ceb1a = '‎' + _0x21365c['greetingMessage'],
        _0x39442c = await (0x0, graphAPI_1['sendText'])(
          _0x5cea8f['number'],
          (0x0, Mustache_1[_0x1eb2e2(0x1bb)])(_0x2ceb1a, _0xa466a9),
          _0xa466a9['whatsapp'][_0x1eb2e2(0x1d2)]
        );
      return _0x39442c;
    }
    let _0x4596ca = '';
    _0x104ad4[_0x1eb2e2(0x1bd)][_0x1eb2e2(0x1bc)]((_0x42ce12, _0x1f3474) => {
      const _0x56fe90 = _0x1eb2e2;
      _0x4596ca +=
        '*' +
        (_0x1f3474 + 0x1) +
        '*\x20-\x20' +
        _0x42ce12[_0x56fe90(0x1d8)] +
        '\x0a';
    });
    const _0xefada6 =
      _0x4596ca[_0x1eb2e2(0x1df)] > 0x0
        ? _0x4596ca + _0x1eb2e2(0x1cd)
        : _0x4596ca;
    if (_0x4596ca[_0x1eb2e2(0x1df)] > 0x0) {
      const _0x3b2f11 =
          '‎' + _0x21365c['greetingMessage'] + '\x0a\x0a' + _0xefada6,
        _0x422658 = await (0x0, graphAPI_1['sendText'])(
          _0x5cea8f[_0x1eb2e2(0x1e3)],
          (0x0, Mustache_1[_0x1eb2e2(0x1bb)])(_0x3b2f11, _0xa466a9),
          _0xa466a9[_0x1eb2e2(0x1d4)][_0x1eb2e2(0x1d2)]
        );
      return _0x422658;
    }
    const _0x2260de = '‎' + _0x21365c[_0x1eb2e2(0x1d5)],
      _0x5eb7f0 = await (0x0, graphAPI_1['sendText'])(
        _0x5cea8f[_0x1eb2e2(0x1e3)],
        (0x0, Mustache_1[_0x1eb2e2(0x1bb)])(_0x2260de, _0xa466a9),
        _0xa466a9[_0x1eb2e2(0x1d4)][_0x1eb2e2(0x1d2)]
      );
    return _0x5eb7f0;
  },
  backToMainMenu = async (_0x42659a, _0x3fd6e6, _0x114c5a) => {
    const _0x30d6b4 = a644_0x180153;
    await (0x0, UpdateTicketService_1[_0x30d6b4(0x1bb)])({
      ticketData: { queueId: null },
      ticketId: _0x114c5a['id'],
      companyId: _0x114c5a[_0x30d6b4(0x1e2)]
    });
    const { queues: _0x2d385e, greetingMessage: _0x558e4a } = await (0x0,
    ShowWhatsAppService_1[_0x30d6b4(0x1bb)])(
      _0x42659a['id'],
      _0x114c5a['companyId']
    );
    let _0x49331b = '';
    _0x2d385e['forEach']((_0x4b7551, _0x389816) => {
      const _0x140796 = _0x30d6b4;
      _0x49331b +=
        '*' +
        (_0x389816 + 0x1) +
        _0x140796(0x1c9) +
        _0x4b7551[_0x140796(0x1d8)] +
        '\x0a';
    });
    const _0x3d26bf = (0x0, Mustache_1[_0x30d6b4(0x1bb)])(
      '‎' + _0x558e4a + '\x0a\x0a' + _0x49331b,
      _0x114c5a
    );
    await sendMessage(_0x42659a, _0x3fd6e6, _0x114c5a, _0x3d26bf);
    const _0x1bddb5 = await (0x0,
    DeleteDialogChatBotsServices_1[_0x30d6b4(0x1bb)])(_0x3fd6e6['id']);
    return _0x1bddb5;
  },
  sayChatbot = async (
    _0x595d84,
    _0x221d52,
    _0x108b17,
    _0x1e7dd2,
    _0x3ef8cc
  ) => {
    const _0xa0f603 = a644_0x180153,
      _0x426e60 = _0x3ef8cc[_0xa0f603(0x1cc)];
    if (!_0x595d84 && _0x426e60 && _0x3ef8cc[_0xa0f603(0x1db)]) return;
    const _0x1c0710 = await (0x0,
    ShowDialogChatBotsServices_1[_0xa0f603(0x1bb)])(_0x1e7dd2['id']);
    if (_0x426e60 === '#') {
      const _0x347eda = await backToMainMenu(_0x221d52, _0x1e7dd2, _0x108b17);
      return _0x347eda;
    }
    if (!_0x1c0710) {
      const _0x174ac1 = await (0x0, ShowQueueService_1[_0xa0f603(0x1bb)])(
          _0x595d84,
          _0x108b17['companyId']
        ),
        _0x4a7121 = _0x3ef8cc[_0xa0f603(0x1cc)],
        _0x465a1e = _0x174ac1[_0xa0f603(0x1ca)][+_0x4a7121 - 0x1];
      if (!_0x465a1e?.[_0xa0f603(0x1d5)]) {
        await (0x0, DeleteDialogChatBotsServices_1[_0xa0f603(0x1bb)])(
          _0x1e7dd2['id']
        );
        return;
      }
      if (_0x465a1e) {
        if (_0x465a1e['isAgent']) {
          const _0x3c8015 = await User_1[_0xa0f603(0x1bb)][_0xa0f603(0x1d7)]({
              where: { name: _0x465a1e[_0xa0f603(0x1d8)] }
            }),
            _0x5b99fa = {
              ticketData: { userId: _0x3c8015['id'], status: 'open' },
              ticketId: _0x108b17['id'],
              companyId: _0x108b17[_0xa0f603(0x1e2)]
            };
          await (0x0, UpdateTicketService_1[_0xa0f603(0x1bb)])(_0x5b99fa);
        }
        await (0x0, exports['deleteAndCreateDialogStage'])(
          _0x1e7dd2,
          _0x465a1e['id'],
          _0x108b17
        );
        const _0x5658fc = await sendDialog(_0x465a1e, _0x1e7dd2, _0x108b17);
        return _0x5658fc;
      }
    }
    if (_0x1c0710) {
      const _0x408d7b = isNumeric(_0x426e60) ? _0x426e60 : 0x1,
        _0x270e52 = await (0x0, ShowChatBotServices_1[_0xa0f603(0x1bb)])(
          _0x1c0710['chatbotId']
        ),
        _0x1503f3 = _0x270e52[_0xa0f603(0x1bd)][+_0x408d7b - 0x1]
          ? _0x270e52[_0xa0f603(0x1bd)][+_0x408d7b - 0x1]
          : _0x270e52['options'][0x0];
      if (!_0x1503f3[_0xa0f603(0x1d5)]) {
        await (0x0, DeleteDialogChatBotsServices_1['default'])(_0x1e7dd2['id']);
        return;
      }
      if (_0x1503f3) {
        if (_0x1503f3[_0xa0f603(0x1c5)]) {
          const _0x3479ad = await User_1[_0xa0f603(0x1bb)][_0xa0f603(0x1d7)]({
              where: { name: _0x1503f3[_0xa0f603(0x1d8)] }
            }),
            _0x384a23 = {
              ticketData: { userId: _0x3479ad['id'], status: _0xa0f603(0x1dd) },
              ticketId: _0x108b17['id'],
              companyId: _0x108b17['companyId']
            };
          await (0x0, UpdateTicketService_1[_0xa0f603(0x1bb)])(_0x384a23);
        }
        await (0x0, exports[_0xa0f603(0x1c6)])(
          _0x1e7dd2,
          _0x1503f3['id'],
          _0x108b17
        );
        const _0x56061e = await sendDialog(_0x1503f3, _0x1e7dd2, _0x108b17);
        return _0x56061e;
      }
    }
  };
exports[a644_0x180153(0x1d3)] = sayChatbot;
