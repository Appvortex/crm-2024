'use strict';
const a439_0x3fb231 = a439_0x5ea1;
function a439_0x5ea1(_0x2f5129, _0x76d5ca) {
  const _0x1795f3 = a439_0x1795();
  return (
    (a439_0x5ea1 = function (_0x5ea1f2, _0xa57195) {
      _0x5ea1f2 = _0x5ea1f2 - 0xfe;
      let _0x10caa1 = _0x1795f3[_0x5ea1f2];
      return _0x10caa1;
    }),
    a439_0x5ea1(_0x2f5129, _0x76d5ca)
  );
}
(function (_0x5a0f39, _0x82e282) {
  const _0x5f5a4b = a439_0x5ea1,
    _0x4a4ee3 = _0x5a0f39();
  while (!![]) {
    try {
      const _0x5286ef =
        -parseInt(_0x5f5a4b(0x105)) / 0x1 +
        (-parseInt(_0x5f5a4b(0x101)) / 0x2) *
          (-parseInt(_0x5f5a4b(0x102)) / 0x3) +
        parseInt(_0x5f5a4b(0x107)) / 0x4 +
        (parseInt(_0x5f5a4b(0x103)) / 0x5) *
          (parseInt(_0x5f5a4b(0x10d)) / 0x6) +
        (parseInt(_0x5f5a4b(0x10f)) / 0x7) *
          (parseInt(_0x5f5a4b(0x106)) / 0x8) +
        -parseInt(_0x5f5a4b(0x10c)) / 0x9 +
        (-parseInt(_0x5f5a4b(0xfe)) / 0xa) * (parseInt(_0x5f5a4b(0x10b)) / 0xb);
      if (_0x5286ef === _0x82e282) break;
      else _0x4a4ee3['push'](_0x4a4ee3['shift']());
    } catch (_0x7789ca) {
      _0x4a4ee3['push'](_0x4a4ee3['shift']());
    }
  }
})(a439_0x1795, 0xd6385);
function a439_0x1795() {
  const _0x5dd9ee = [
    '10561779azektk',
    '6VCYmsE',
    'default',
    '4290769yTSKzI',
    'users',
    '../../models/User',
    'defineProperty',
    'create',
    '10YIKFzZ',
    'owner',
    'user',
    '2bxSoxd',
    '2349159GPQWyw',
    '5669960azKOZH',
    'length',
    '256580YWvYxm',
    '16dmxvPA',
    '5803760ydoAIB',
    '../../models/ChatUser',
    '__esModule',
    'isArray',
    '25149993yKgcmV'
  ];
  a439_0x1795 = function () {
    return _0x5dd9ee;
  };
  return a439_0x1795();
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x3d4c3d) {
    const _0x484646 = a439_0x5ea1;
    return _0x3d4c3d && _0x3d4c3d[_0x484646(0x109)]
      ? _0x3d4c3d
      : { default: _0x3d4c3d };
  };
Object[a439_0x3fb231(0x112)](exports, a439_0x3fb231(0x109), { value: !![] });
const Chat_1 = __importDefault(require('../../models/Chat')),
  ChatUser_1 = __importDefault(require(a439_0x3fb231(0x108))),
  User_1 = __importDefault(require(a439_0x3fb231(0x111))),
  CreateService = async _0x5578fe => {
    const _0x199e09 = a439_0x3fb231,
      {
        ownerId: _0x1a3e00,
        companyId: _0x1c4a37,
        users: _0x5281eb,
        title: _0x341d3f
      } = _0x5578fe,
      _0x2413e3 = await Chat_1[_0x199e09(0x10e)][_0x199e09(0x113)]({
        ownerId: _0x1a3e00,
        companyId: _0x1c4a37,
        title: _0x341d3f
      });
    if (
      Array[_0x199e09(0x10a)](_0x5281eb) &&
      _0x5281eb[_0x199e09(0x104)] > 0x0
    ) {
      await ChatUser_1[_0x199e09(0x10e)]['create']({
        chatId: _0x2413e3['id'],
        userId: _0x1a3e00
      });
      for (let _0x2bce68 of _0x5281eb) {
        await ChatUser_1['default'][_0x199e09(0x113)]({
          chatId: _0x2413e3['id'],
          userId: _0x2bce68['id']
        });
      }
    }
    return (
      await _0x2413e3['reload']({
        include: [
          {
            model: ChatUser_1[_0x199e09(0x10e)],
            as: _0x199e09(0x110),
            include: [{ model: User_1[_0x199e09(0x10e)], as: _0x199e09(0x100) }]
          },
          { model: User_1[_0x199e09(0x10e)], as: _0x199e09(0xff) }
        ]
      }),
      _0x2413e3
    );
  };
exports[a439_0x3fb231(0x10e)] = CreateService;
