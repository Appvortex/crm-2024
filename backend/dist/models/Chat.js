'use strict';
const a321_0x19beed = a321_0x236a;
(function (_0x147fbe, _0x49c390) {
  const _0x33b4e3 = a321_0x236a,
    _0x13cb8b = _0x147fbe();
  while (!![]) {
    try {
      const _0x154fa2 =
        (-parseInt(_0x33b4e3(0x191)) / 0x1) *
          (parseInt(_0x33b4e3(0x16f)) / 0x2) +
        (parseInt(_0x33b4e3(0x18a)) / 0x3) *
          (parseInt(_0x33b4e3(0x17c)) / 0x4) +
        parseInt(_0x33b4e3(0x187)) / 0x5 +
        -parseInt(_0x33b4e3(0x176)) / 0x6 +
        (parseInt(_0x33b4e3(0x197)) / 0x7) *
          (-parseInt(_0x33b4e3(0x180)) / 0x8) +
        (parseInt(_0x33b4e3(0x184)) / 0x9) *
          (parseInt(_0x33b4e3(0x195)) / 0xa) +
        parseInt(_0x33b4e3(0x177)) / 0xb;
      if (_0x154fa2 === _0x49c390) break;
      else _0x13cb8b['push'](_0x13cb8b['shift']());
    } catch (_0x4f2b1) {
      _0x13cb8b['push'](_0x13cb8b['shift']());
    }
  }
})(a321_0x4232, 0x9af00);
function a321_0x236a(_0x64169d, _0x3cf5a3) {
  const _0x4232f7 = a321_0x4232();
  return (
    (a321_0x236a = function (_0x236ac7, _0x41e351) {
      _0x236ac7 = _0x236ac7 - 0x169;
      let _0x201c9a = _0x4232f7[_0x236ac7];
      return _0x201c9a;
    }),
    a321_0x236a(_0x64169d, _0x3cf5a3)
  );
}
var __decorate =
    (this && this[a321_0x19beed(0x18e)]) ||
    function (_0x57ce59, _0x13da80, _0x2b3010, _0x5bb12a) {
      const _0x165fff = a321_0x19beed;
      var _0x8ffc59 = arguments[_0x165fff(0x16b)],
        _0xfe616c =
          _0x8ffc59 < 0x3
            ? _0x13da80
            : _0x5bb12a === null
              ? (_0x5bb12a = Object['getOwnPropertyDescriptor'](
                  _0x13da80,
                  _0x2b3010
                ))
              : _0x5bb12a,
        _0x3f9a03;
      if (
        typeof Reflect === 'object' &&
        typeof Reflect[_0x165fff(0x193)] === _0x165fff(0x17f)
      )
        _0xfe616c = Reflect[_0x165fff(0x193)](
          _0x57ce59,
          _0x13da80,
          _0x2b3010,
          _0x5bb12a
        );
      else {
        for (
          var _0x47c5ea = _0x57ce59[_0x165fff(0x16b)] - 0x1;
          _0x47c5ea >= 0x0;
          _0x47c5ea--
        )
          if ((_0x3f9a03 = _0x57ce59[_0x47c5ea]))
            _0xfe616c =
              (_0x8ffc59 < 0x3
                ? _0x3f9a03(_0xfe616c)
                : _0x8ffc59 > 0x3
                  ? _0x3f9a03(_0x13da80, _0x2b3010, _0xfe616c)
                  : _0x3f9a03(_0x13da80, _0x2b3010)) || _0xfe616c;
      }
      return (
        _0x8ffc59 > 0x3 &&
          _0xfe616c &&
          Object[_0x165fff(0x198)](_0x13da80, _0x2b3010, _0xfe616c),
        _0xfe616c
      );
    },
  __metadata =
    (this && this['__metadata']) ||
    function (_0x345ba6, _0x20af46) {
      const _0x274979 = a321_0x19beed;
      if (
        typeof Reflect === _0x274979(0x192) &&
        typeof Reflect[_0x274979(0x171)] === _0x274979(0x17f)
      )
        return Reflect['metadata'](_0x345ba6, _0x20af46);
    },
  __importDefault =
    (this && this[a321_0x19beed(0x16e)]) ||
    function (_0x2dca2c) {
      const _0x314d01 = a321_0x19beed;
      return _0x2dca2c && _0x2dca2c[_0x314d01(0x18d)]
        ? _0x2dca2c
        : { default: _0x2dca2c };
    };
Object[a321_0x19beed(0x198)](exports, a321_0x19beed(0x18d), { value: !![] });
const sequelize_typescript_1 = require(a321_0x19beed(0x16d)),
  uuid_1 = require(a321_0x19beed(0x196)),
  ChatMessage_1 = __importDefault(require(a321_0x19beed(0x186))),
  ChatUser_1 = __importDefault(require(a321_0x19beed(0x179))),
  Company_1 = __importDefault(require(a321_0x19beed(0x18f))),
  User_1 = __importDefault(require('./User'));
let Chat = class Chat extends sequelize_typescript_1[a321_0x19beed(0x173)] {
  static [a321_0x19beed(0x169)](_0x67a97e) {
    const _0x1df4de = a321_0x19beed;
    _0x67a97e[_0x1df4de(0x196)] = (0x0, uuid_1['v4'])();
  }
};
__decorate(
  [
    sequelize_typescript_1[a321_0x19beed(0x18b)],
    sequelize_typescript_1['AutoIncrement'],
    sequelize_typescript_1[a321_0x19beed(0x172)],
    __metadata(a321_0x19beed(0x18c), Number)
  ],
  Chat[a321_0x19beed(0x190)],
  'id',
  void 0x0
),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a321_0x19beed(0x17a)])(
        (0x0, uuid_1['v4'])()
      ),
      sequelize_typescript_1[a321_0x19beed(0x172)],
      __metadata(a321_0x19beed(0x18c), String)
    ],
    Chat[a321_0x19beed(0x190)],
    a321_0x19beed(0x196),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a321_0x19beed(0x172)])({ defaultValue: '' }),
      __metadata(a321_0x19beed(0x18c), String)
    ],
    Chat[a321_0x19beed(0x190)],
    'title',
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a321_0x19beed(0x189)])(
        () => User_1[a321_0x19beed(0x181)]
      ),
      sequelize_typescript_1['Column'],
      __metadata(a321_0x19beed(0x18c), Number)
    ],
    Chat[a321_0x19beed(0x190)],
    a321_0x19beed(0x182),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a321_0x19beed(0x172)])({ defaultValue: '' }),
      __metadata('design:type', String)
    ],
    Chat[a321_0x19beed(0x190)],
    a321_0x19beed(0x17b),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a321_0x19beed(0x189)])(
        () => Company_1[a321_0x19beed(0x181)]
      ),
      sequelize_typescript_1[a321_0x19beed(0x172)],
      __metadata(a321_0x19beed(0x18c), Number)
    ],
    Chat[a321_0x19beed(0x190)],
    'companyId',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a321_0x19beed(0x185)],
      __metadata(a321_0x19beed(0x18c), Date)
    ],
    Chat[a321_0x19beed(0x190)],
    a321_0x19beed(0x188),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a321_0x19beed(0x16a)],
      __metadata(a321_0x19beed(0x18c), Date)
    ],
    Chat['prototype'],
    a321_0x19beed(0x178),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a321_0x19beed(0x16c)])(
        () => Company_1[a321_0x19beed(0x181)]
      ),
      __metadata(a321_0x19beed(0x18c), Company_1['default'])
    ],
    Chat['prototype'],
    a321_0x19beed(0x174),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a321_0x19beed(0x16c)])(
        () => User_1[a321_0x19beed(0x181)]
      ),
      __metadata(a321_0x19beed(0x18c), User_1[a321_0x19beed(0x181)])
    ],
    Chat[a321_0x19beed(0x190)],
    a321_0x19beed(0x17e),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a321_0x19beed(0x175)])(
        () => ChatUser_1[a321_0x19beed(0x181)]
      ),
      __metadata('design:type', Array)
    ],
    Chat[a321_0x19beed(0x190)],
    'users',
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['HasMany'])(() => ChatMessage_1['default']),
      __metadata(a321_0x19beed(0x18c), Array)
    ],
    Chat[a321_0x19beed(0x190)],
    'messages',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a321_0x19beed(0x194)],
      __metadata(a321_0x19beed(0x18c), Function),
      __metadata('design:paramtypes', [Chat]),
      __metadata(a321_0x19beed(0x170), void 0x0)
    ],
    Chat,
    a321_0x19beed(0x169),
    null
  ),
  (Chat = __decorate(
    [
      (0x0, sequelize_typescript_1[a321_0x19beed(0x17d)])({
        tableName: a321_0x19beed(0x183)
      })
    ],
    Chat
  )),
  (exports[a321_0x19beed(0x181)] = Chat);
function a321_0x4232() {
  const _0x2c1279 = [
    'Model',
    'company',
    'HasMany',
    '6134946jWasOT',
    '8348098Hdckao',
    'updatedAt',
    './ChatUser',
    'Default',
    'lastMessage',
    '38004oHHkXL',
    'Table',
    'owner',
    'function',
    '402272Dsdsuh',
    'default',
    'ownerId',
    'Chats',
    '18gCnpmU',
    'CreatedAt',
    './ChatMessage',
    '1914520wPXABQ',
    'createdAt',
    'ForeignKey',
    '21QMAYFT',
    'PrimaryKey',
    'design:type',
    '__esModule',
    '__decorate',
    './Company',
    'prototype',
    '1514VAAkFH',
    'object',
    'decorate',
    'BeforeCreate',
    '3438860TnLSRW',
    'uuid',
    '28AUiXHS',
    'defineProperty',
    'setUUID',
    'UpdatedAt',
    'length',
    'BelongsTo',
    'sequelize-typescript',
    '__importDefault',
    '50hJdPkA',
    'design:returntype',
    'metadata',
    'Column'
  ];
  a321_0x4232 = function () {
    return _0x2c1279;
  };
  return a321_0x4232();
}
