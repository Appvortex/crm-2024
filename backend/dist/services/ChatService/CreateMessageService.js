'use strict';
const a438_0x34af49 = a438_0x37e9;
(function (_0x4d5993, _0x461322) {
  const _0x1f8723 = a438_0x37e9,
    _0x472e28 = _0x4d5993();
  while (!![]) {
    try {
      const _0xba63e4 =
        -parseInt(_0x1f8723(0x1e7)) / 0x1 +
        -parseInt(_0x1f8723(0x1df)) / 0x2 +
        -parseInt(_0x1f8723(0x1dd)) / 0x3 +
        (parseInt(_0x1f8723(0x1eb)) / 0x4) *
          (parseInt(_0x1f8723(0x1da)) / 0x5) +
        -parseInt(_0x1f8723(0x1e6)) / 0x6 +
        (-parseInt(_0x1f8723(0x1e5)) / 0x7) *
          (-parseInt(_0x1f8723(0x1ee)) / 0x8) +
        (parseInt(_0x1f8723(0x1de)) / 0x9) * (parseInt(_0x1f8723(0x1e9)) / 0xa);
      if (_0xba63e4 === _0x461322) break;
      else _0x472e28['push'](_0x472e28['shift']());
    } catch (_0x1d5fd2) {
      _0x472e28['push'](_0x472e28['shift']());
    }
  }
})(a438_0x3edd, 0xe2f53);
var __importDefault =
  (this && this[a438_0x34af49(0x1e8)]) ||
  function (_0x50f711) {
    const _0x439e5b = a438_0x34af49;
    return _0x50f711 && _0x50f711[_0x439e5b(0x1ed)]
      ? _0x50f711
      : { default: _0x50f711 };
  };
Object[a438_0x34af49(0x1ec)](exports, a438_0x34af49(0x1ed), { value: !![] });
function a438_0x37e9(_0x7dbfba, _0x438683) {
  const _0x3eddce = a438_0x3edd();
  return (
    (a438_0x37e9 = function (_0x37e935, _0x78b5e4) {
      _0x37e935 = _0x37e935 - 0x1d9;
      let _0x1888cc = _0x3eddce[_0x37e935];
      return _0x1888cc;
    }),
    a438_0x37e9(_0x7dbfba, _0x438683)
  );
}
const Chat_1 = __importDefault(require('../../models/Chat')),
  ChatMessage_1 = __importDefault(require(a438_0x34af49(0x1ef))),
  ChatUser_1 = __importDefault(require(a438_0x34af49(0x1e4))),
  User_1 = __importDefault(require(a438_0x34af49(0x1dc)));
async function CreateMessageService({
  senderId: _0x4f012e,
  chatId: _0x4f340c,
  message: _0x54e272
}) {
  const _0xa76a55 = a438_0x34af49,
    _0xc961a = await ChatMessage_1[_0xa76a55(0x1f1)][_0xa76a55(0x1ea)]({
      senderId: _0x4f012e,
      chatId: _0x4f340c,
      message: _0x54e272
    });
  await _0xc961a[_0xa76a55(0x1e1)]({
    include: [
      {
        model: User_1['default'],
        as: _0xa76a55(0x1f0),
        attributes: ['id', 'name']
      },
      {
        model: Chat_1['default'],
        as: _0xa76a55(0x1db),
        include: [{ model: ChatUser_1[_0xa76a55(0x1f1)], as: _0xa76a55(0x1e0) }]
      }
    ]
  });
  const _0x5aff51 = await User_1['default']['findByPk'](_0x4f012e);
  await _0xc961a[_0xa76a55(0x1db)]['update']({
    lastMessage: _0x5aff51[_0xa76a55(0x1f2)] + ':\x20' + _0x54e272
  });
  const _0x54175f = await ChatUser_1['default']['findAll']({
    where: { chatId: _0x4f340c }
  });
  for (let _0x598992 of _0x54175f) {
    _0x598992[_0xa76a55(0x1e2)] === _0x4f012e
      ? await _0x598992[_0xa76a55(0x1d9)]({ unreads: 0x0 })
      : await _0x598992['update']({
          unreads: _0x598992[_0xa76a55(0x1e3)] + 0x1
        });
  }
  return _0xc961a;
}
exports[a438_0x34af49(0x1f1)] = CreateMessageService;
function a438_0x3edd() {
  const _0x79c7bd = [
    'default',
    'name',
    'update',
    '1915vPnPpv',
    'chat',
    '../../models/User',
    '3511857KbMGoF',
    '11077659dJbphE',
    '2741130XScGzF',
    'users',
    'reload',
    'userId',
    'unreads',
    '../../models/ChatUser',
    '259tSFAzk',
    '1947168BrOJiz',
    '142441AqmEyP',
    '__importDefault',
    '10VMmxJV',
    'create',
    '10144sJxULw',
    'defineProperty',
    '__esModule',
    '375272Nqwdpf',
    '../../models/ChatMessage',
    'sender'
  ];
  a438_0x3edd = function () {
    return _0x79c7bd;
  };
  return a438_0x3edd();
}
