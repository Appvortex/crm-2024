'use strict';
const a447_0x441f87 = a447_0x51b4;
(function (_0x20c4d3, _0x1e9fd4) {
  const _0x2ca24b = a447_0x51b4,
    _0x36c6ce = _0x20c4d3();
  while (!![]) {
    try {
      const _0x589e7b =
        (parseInt(_0x2ca24b(0xaf)) / 0x1) * (parseInt(_0x2ca24b(0xb0)) / 0x2) +
        -parseInt(_0x2ca24b(0xa2)) / 0x3 +
        -parseInt(_0x2ca24b(0x9f)) / 0x4 +
        parseInt(_0x2ca24b(0xa3)) / 0x5 +
        -parseInt(_0x2ca24b(0xa7)) / 0x6 +
        -parseInt(_0x2ca24b(0xac)) / 0x7 +
        (-parseInt(_0x2ca24b(0xa4)) / 0x8) * (-parseInt(_0x2ca24b(0xaa)) / 0x9);
      if (_0x589e7b === _0x1e9fd4) break;
      else _0x36c6ce['push'](_0x36c6ce['shift']());
    } catch (_0x4ddb15) {
      _0x36c6ce['push'](_0x36c6ce['shift']());
    }
  }
})(a447_0x4356, 0xa679f);
function a447_0x4356() {
  const _0x3dd224 = [
    '__importDefault',
    '../../models/User',
    '773288znHcun',
    'isArray',
    'users',
    '1066362DEbysx',
    '5617005UbaAMf',
    '6374824mrJvQQ',
    'user',
    'update',
    '7295034AVkzlM',
    'owner',
    'default',
    '9dVWhAy',
    'reload',
    '1566264PWdpwP',
    '__esModule',
    '../../models/ChatUser',
    '120SCWyYc',
    '12500wxawwG',
    '../../models/Chat',
    'defineProperty',
    'destroy'
  ];
  a447_0x4356 = function () {
    return _0x3dd224;
  };
  return a447_0x4356();
}
var __importDefault =
  (this && this[a447_0x441f87(0xb4)]) ||
  function (_0x2c7022) {
    const _0x42ee9b = a447_0x441f87;
    return _0x2c7022 && _0x2c7022[_0x42ee9b(0xad)]
      ? _0x2c7022
      : { default: _0x2c7022 };
  };
Object[a447_0x441f87(0xb2)](exports, a447_0x441f87(0xad), { value: !![] });
const Chat_1 = __importDefault(require(a447_0x441f87(0xb1))),
  ChatUser_1 = __importDefault(require(a447_0x441f87(0xae))),
  User_1 = __importDefault(require(a447_0x441f87(0xb5)));
async function UpdateService(_0x5f1e58) {
  const _0x32a611 = a447_0x441f87,
    { users: _0x39070a } = _0x5f1e58,
    _0x4cd936 = await Chat_1[_0x32a611(0xa9)]['findByPk'](_0x5f1e58['id'], {
      include: [{ model: ChatUser_1[_0x32a611(0xa9)], as: 'users' }]
    }),
    { ownerId: _0x1e5aa7 } = _0x4cd936;
  await _0x4cd936[_0x32a611(0xa6)]({ title: _0x5f1e58['title'] });
  if (Array[_0x32a611(0xa0)](_0x39070a)) {
    await ChatUser_1['default'][_0x32a611(0xb3)]({
      where: { chatId: _0x4cd936['id'] }
    }),
      await ChatUser_1['default']['create']({
        chatId: _0x4cd936['id'],
        userId: _0x1e5aa7
      });
    for (let _0x52ca75 of _0x39070a) {
      _0x52ca75['id'] !== _0x1e5aa7 &&
        (await ChatUser_1[_0x32a611(0xa9)]['create']({
          chatId: _0x4cd936['id'],
          userId: _0x52ca75['id']
        }));
    }
  }
  return (
    await _0x4cd936[_0x32a611(0xab)]({
      include: [
        {
          model: ChatUser_1[_0x32a611(0xa9)],
          as: _0x32a611(0xa1),
          include: [{ model: User_1[_0x32a611(0xa9)], as: _0x32a611(0xa5) }]
        },
        { model: User_1[_0x32a611(0xa9)], as: _0x32a611(0xa8) }
      ]
    }),
    _0x4cd936
  );
}
function a447_0x51b4(_0x13cdcb, _0x399847) {
  const _0x4356ba = a447_0x4356();
  return (
    (a447_0x51b4 = function (_0x51b470, _0x50b251) {
      _0x51b470 = _0x51b470 - 0x9f;
      let _0x5d7aaf = _0x4356ba[_0x51b470];
      return _0x5d7aaf;
    }),
    a447_0x51b4(_0x13cdcb, _0x399847)
  );
}
exports[a447_0x441f87(0xa9)] = UpdateService;
