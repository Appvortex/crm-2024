'use strict';
const a11_0x560b1a = a11_0x210f;
(function (_0x548a30, _0x34fdd5) {
  const _0x323813 = a11_0x210f,
    _0x44433c = _0x548a30();
  while (!![]) {
    try {
      const _0x1d2762 =
        -parseInt(_0x323813(0x97)) / 0x1 +
        (-parseInt(_0x323813(0x9b)) / 0x2) *
          (-parseInt(_0x323813(0xab)) / 0x3) +
        -parseInt(_0x323813(0x92)) / 0x4 +
        parseInt(_0x323813(0xac)) / 0x5 +
        (parseInt(_0x323813(0xa9)) / 0x6) * (-parseInt(_0x323813(0x99)) / 0x7) +
        parseInt(_0x323813(0xb1)) / 0x8 +
        -parseInt(_0x323813(0xad)) / 0x9;
      if (_0x1d2762 === _0x34fdd5) break;
      else _0x44433c['push'](_0x44433c['shift']());
    } catch (_0x13e8c5) {
      _0x44433c['push'](_0x44433c['shift']());
    }
  }
})(a11_0x3c30, 0x2bf09);
function a11_0x3c30() {
  const _0x19cec1 = [
    '../services/ChatService/CreateMessageService',
    'owner',
    '-chat',
    'status',
    'json',
    'show',
    '../models/User',
    'saveMessage',
    '-chat-user-',
    '../libs/socket',
    'update',
    'getIO',
    '__importDefault',
    '66952SousbW',
    'emit',
    'user',
    '../services/ChatService/UpdateService',
    '../services/ChatService/FindMessages',
    '193699lepVOe',
    '../models/ChatUser',
    '215026gIdypr',
    'users',
    '380piyNqF',
    'company-',
    'create',
    'remove',
    '../services/ChatService/CreateService',
    'userId',
    '-chat-',
    '../services/ChatService/DeleteService',
    'findOne',
    'checkAsRead',
    'findByPk',
    'forEach',
    'params',
    'messages',
    '24vXDghy',
    '../services/ChatService/ListService',
    '1944oPvSDK',
    '1009120RiMxpn',
    '301320EbarfC',
    'query',
    'body',
    '../models/Chat',
    '1774576WQRdYg',
    '../services/ChatService/ShowFromUuidService',
    'store',
    'index',
    'default'
  ];
  a11_0x3c30 = function () {
    return _0x19cec1;
  };
  return a11_0x3c30();
}
function a11_0x210f(_0xd75f89, _0x591ce1) {
  const _0x3c30f3 = a11_0x3c30();
  return (
    (a11_0x210f = function (_0x210fcd, _0x4929c1) {
      _0x210fcd = _0x210fcd - 0x86;
      let _0x1f297c = _0x3c30f3[_0x210fcd];
      return _0x1f297c;
    }),
    a11_0x210f(_0xd75f89, _0x591ce1)
  );
}
var __importDefault =
  (this && this[a11_0x560b1a(0x91)]) ||
  function (_0x54279a) {
    return _0x54279a && _0x54279a['__esModule']
      ? _0x54279a
      : { default: _0x54279a };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] }),
  (exports[a11_0x560b1a(0xa8)] =
    exports[a11_0x560b1a(0xa4)] =
    exports[a11_0x560b1a(0x8c)] =
    exports[a11_0x560b1a(0x9e)] =
    exports[a11_0x560b1a(0x8a)] =
    exports[a11_0x560b1a(0x8f)] =
    exports['store'] =
    exports['index'] =
      void 0x0);
const socket_1 = require(a11_0x560b1a(0x8e)),
  CreateService_1 = __importDefault(require(a11_0x560b1a(0x9f))),
  ListService_1 = __importDefault(require(a11_0x560b1a(0xaa))),
  ShowFromUuidService_1 = __importDefault(require(a11_0x560b1a(0xb2))),
  DeleteService_1 = __importDefault(require(a11_0x560b1a(0xa2))),
  FindMessages_1 = __importDefault(require(a11_0x560b1a(0x96))),
  UpdateService_1 = __importDefault(require(a11_0x560b1a(0x95))),
  Chat_1 = __importDefault(require(a11_0x560b1a(0xb0))),
  CreateMessageService_1 = __importDefault(require(a11_0x560b1a(0xb6))),
  User_1 = __importDefault(require(a11_0x560b1a(0x8b))),
  ChatUser_1 = __importDefault(require(a11_0x560b1a(0x98))),
  index = async (_0xd5ea0d, _0x2b9c93) => {
    const _0x5f51e2 = a11_0x560b1a,
      { pageNumber: _0x157265 } = _0xd5ea0d[_0x5f51e2(0xae)],
      _0x585a4c = +_0xd5ea0d[_0x5f51e2(0x94)]['id'],
      {
        records: _0x4ef2c1,
        count: _0x23e44b,
        hasMore: _0xfba493
      } = await (0x0, ListService_1[_0x5f51e2(0xb5)])({
        ownerId: _0x585a4c,
        pageNumber: _0x157265
      });
    return _0x2b9c93['json']({
      records: _0x4ef2c1,
      count: _0x23e44b,
      hasMore: _0xfba493
    });
  };
exports[a11_0x560b1a(0xb4)] = index;
const store = async (_0x330a5c, _0x62e451) => {
  const _0x359df6 = a11_0x560b1a,
    { companyId: _0x1c24c2 } = _0x330a5c[_0x359df6(0x94)],
    _0x2097f9 = +_0x330a5c[_0x359df6(0x94)]['id'],
    _0x11f222 = _0x330a5c[_0x359df6(0xaf)],
    _0x54b545 = await (0x0, CreateService_1[_0x359df6(0xb5)])({
      ..._0x11f222,
      ownerId: _0x2097f9,
      companyId: _0x1c24c2
    }),
    _0x3cf962 = (0x0, socket_1[_0x359df6(0x90)])();
  return (
    _0x54b545[_0x359df6(0x9a)][_0x359df6(0xa6)](_0x4554e6 => {
      const _0x3866ef = _0x359df6;
      _0x3cf962[_0x3866ef(0x93)](
        _0x3866ef(0x9c) +
          _0x1c24c2 +
          _0x3866ef(0x8d) +
          _0x4554e6[_0x3866ef(0xa0)],
        { action: _0x3866ef(0x9d), record: _0x54b545 }
      );
    }),
    _0x62e451[_0x359df6(0x88)](0xc8)[_0x359df6(0x89)](_0x54b545)
  );
};
exports[a11_0x560b1a(0xb3)] = store;
const update = async (_0x35187e, _0x4226ec) => {
  const _0x405034 = a11_0x560b1a,
    { companyId: _0x1ed912 } = _0x35187e[_0x405034(0x94)],
    _0x1c47e1 = _0x35187e[_0x405034(0xaf)],
    { id: _0x4673be } = _0x35187e[_0x405034(0xa7)],
    _0x3c0ee6 = await (0x0, UpdateService_1['default'])({
      ..._0x1c47e1,
      id: +_0x4673be
    }),
    _0xd9070 = (0x0, socket_1[_0x405034(0x90)])();
  return (
    _0x3c0ee6[_0x405034(0x9a)]['forEach'](_0x497b25 => {
      const _0x547e83 = _0x405034;
      _0xd9070['emit'](
        _0x547e83(0x9c) +
          _0x1ed912 +
          '-chat-user-' +
          _0x497b25[_0x547e83(0xa0)],
        { action: 'update', record: _0x3c0ee6 }
      );
    }),
    _0x4226ec['status'](0xc8)[_0x405034(0x89)](_0x3c0ee6)
  );
};
exports['update'] = update;
const show = async (_0x4d48ef, _0x33fbf0) => {
  const _0x4fef6d = a11_0x560b1a,
    { id: _0x49f394 } = _0x4d48ef[_0x4fef6d(0xa7)],
    _0x934ce = await (0x0, ShowFromUuidService_1[_0x4fef6d(0xb5)])(_0x49f394);
  return _0x33fbf0[_0x4fef6d(0x88)](0xc8)[_0x4fef6d(0x89)](_0x934ce);
};
exports[a11_0x560b1a(0x8a)] = show;
const remove = async (_0x509081, _0x4d4aa5) => {
  const _0x6758f9 = a11_0x560b1a,
    { id: _0x103c41 } = _0x509081[_0x6758f9(0xa7)],
    { companyId: _0x28c74e } = _0x509081[_0x6758f9(0x94)];
  await (0x0, DeleteService_1['default'])(_0x103c41);
  const _0x538249 = (0x0, socket_1[_0x6758f9(0x90)])();
  return (
    _0x538249[_0x6758f9(0x93)]('company-' + _0x28c74e + _0x6758f9(0x87), {
      action: 'delete',
      id: _0x103c41
    }),
    _0x4d4aa5[_0x6758f9(0x88)](0xc8)[_0x6758f9(0x89)]({
      message: 'Chat\x20deleted'
    })
  );
};
exports['remove'] = remove;
const saveMessage = async (_0x11212b, _0x3ca568) => {
  const _0x2f6838 = a11_0x560b1a,
    { companyId: _0x36b8b5 } = _0x11212b[_0x2f6838(0x94)],
    { message: _0x58555e } = _0x11212b['body'],
    { id: _0x77a377 } = _0x11212b[_0x2f6838(0xa7)],
    _0x52d8c0 = +_0x11212b['user']['id'],
    _0x4ac2fb = +_0x77a377,
    _0x2c3d61 = await (0x0, CreateMessageService_1[_0x2f6838(0xb5)])({
      chatId: _0x4ac2fb,
      senderId: _0x52d8c0,
      message: _0x58555e
    }),
    _0x9c3a4f = await Chat_1[_0x2f6838(0xb5)]['findByPk'](_0x4ac2fb, {
      include: [
        { model: User_1['default'], as: _0x2f6838(0x86) },
        { model: ChatUser_1[_0x2f6838(0xb5)], as: 'users' }
      ]
    }),
    _0x208685 = (0x0, socket_1[_0x2f6838(0x90)])();
  return (
    _0x208685[_0x2f6838(0x93)](
      _0x2f6838(0x9c) + _0x36b8b5 + _0x2f6838(0xa1) + _0x4ac2fb,
      { action: 'new-message', newMessage: _0x2c3d61, chat: _0x9c3a4f }
    ),
    _0x208685[_0x2f6838(0x93)](_0x2f6838(0x9c) + _0x36b8b5 + _0x2f6838(0x87), {
      action: 'new-message',
      newMessage: _0x2c3d61,
      chat: _0x9c3a4f
    }),
    _0x3ca568[_0x2f6838(0x89)](_0x2c3d61)
  );
};
exports['saveMessage'] = saveMessage;
const checkAsRead = async (_0xc4f501, _0x43b839) => {
  const _0x3adf32 = a11_0x560b1a,
    { companyId: _0x144bda } = _0xc4f501['user'],
    { userId: _0x693cfe } = _0xc4f501[_0x3adf32(0xaf)],
    { id: _0x5953e9 } = _0xc4f501[_0x3adf32(0xa7)],
    _0xa8d8fa = await ChatUser_1['default'][_0x3adf32(0xa3)]({
      where: { chatId: _0x5953e9, userId: _0x693cfe }
    });
  await _0xa8d8fa[_0x3adf32(0x8f)]({ unreads: 0x0 });
  const _0x2b4c36 = await Chat_1[_0x3adf32(0xb5)][_0x3adf32(0xa5)](_0x5953e9, {
      include: [
        { model: User_1[_0x3adf32(0xb5)], as: _0x3adf32(0x86) },
        { model: ChatUser_1[_0x3adf32(0xb5)], as: _0x3adf32(0x9a) }
      ]
    }),
    _0x4c0746 = (0x0, socket_1[_0x3adf32(0x90)])();
  return (
    _0x4c0746[_0x3adf32(0x93)](
      _0x3adf32(0x9c) + _0x144bda + _0x3adf32(0xa1) + _0x5953e9,
      { action: _0x3adf32(0x8f), chat: _0x2b4c36 }
    ),
    _0x4c0746[_0x3adf32(0x93)](_0x3adf32(0x9c) + _0x144bda + _0x3adf32(0x87), {
      action: _0x3adf32(0x8f),
      chat: _0x2b4c36
    }),
    _0x43b839[_0x3adf32(0x89)](_0x2b4c36)
  );
};
exports[a11_0x560b1a(0xa4)] = checkAsRead;
const messages = async (_0x1c0fce, _0x43450f) => {
  const _0x2fd602 = a11_0x560b1a,
    { pageNumber: _0x3b603a } = _0x1c0fce['query'],
    { id: _0x463605 } = _0x1c0fce[_0x2fd602(0xa7)],
    _0x452203 = +_0x1c0fce[_0x2fd602(0x94)]['id'],
    {
      records: _0x35ba10,
      count: _0x45e1d8,
      hasMore: _0x15d367
    } = await (0x0, FindMessages_1['default'])({
      chatId: _0x463605,
      ownerId: _0x452203,
      pageNumber: _0x3b603a
    });
  return _0x43450f['json']({
    records: _0x35ba10,
    count: _0x45e1d8,
    hasMore: _0x15d367
  });
};
exports['messages'] = messages;
