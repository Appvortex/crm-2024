'use strict';
var a323_0x3ee83b = a323_0x1bd4;
(function (_0x2dcce4, _0x2a1ee7) {
  var _0x2f5322 = a323_0x1bd4,
    _0x16e4e9 = _0x2dcce4();
  while (!![]) {
    try {
      var _0xd78ddd =
        parseInt(_0x2f5322(0x85)) / 0x1 +
        (parseInt(_0x2f5322(0xa4)) / 0x2) * (-parseInt(_0x2f5322(0x98)) / 0x3) +
        (parseInt(_0x2f5322(0x95)) / 0x4) * (parseInt(_0x2f5322(0x87)) / 0x5) +
        parseInt(_0x2f5322(0x9f)) / 0x6 +
        parseInt(_0x2f5322(0x9e)) / 0x7 +
        (parseInt(_0x2f5322(0x8a)) / 0x8) * (-parseInt(_0x2f5322(0x88)) / 0x9) +
        -parseInt(_0x2f5322(0x8d)) / 0xa;
      if (_0xd78ddd === _0x2a1ee7) break;
      else _0x16e4e9['push'](_0x16e4e9['shift']());
    } catch (_0x203aaf) {
      _0x16e4e9['push'](_0x16e4e9['shift']());
    }
  }
})(a323_0x5a61, 0x77dd9);
var __decorate =
    (this && this[a323_0x3ee83b(0x94)]) ||
    function (_0xd22ae4, _0x59660f, _0x360382, _0x37eb08) {
      var _0x4d9914 = a323_0x3ee83b,
        _0x23528f = arguments['length'],
        _0x94650b =
          _0x23528f < 0x3
            ? _0x59660f
            : _0x37eb08 === null
              ? (_0x37eb08 = Object['getOwnPropertyDescriptor'](
                  _0x59660f,
                  _0x360382
                ))
              : _0x37eb08,
        _0x5d68e8;
      if (
        typeof Reflect === _0x4d9914(0x90) &&
        typeof Reflect[_0x4d9914(0xa3)] === 'function'
      )
        _0x94650b = Reflect['decorate'](
          _0xd22ae4,
          _0x59660f,
          _0x360382,
          _0x37eb08
        );
      else {
        for (
          var _0x1896b4 = _0xd22ae4['length'] - 0x1;
          _0x1896b4 >= 0x0;
          _0x1896b4--
        )
          if ((_0x5d68e8 = _0xd22ae4[_0x1896b4]))
            _0x94650b =
              (_0x23528f < 0x3
                ? _0x5d68e8(_0x94650b)
                : _0x23528f > 0x3
                  ? _0x5d68e8(_0x59660f, _0x360382, _0x94650b)
                  : _0x5d68e8(_0x59660f, _0x360382)) || _0x94650b;
      }
      return (
        _0x23528f > 0x3 &&
          _0x94650b &&
          Object[_0x4d9914(0x89)](_0x59660f, _0x360382, _0x94650b),
        _0x94650b
      );
    },
  __metadata =
    (this && this[a323_0x3ee83b(0x83)]) ||
    function (_0x13258f, _0x395c0d) {
      var _0x326529 = a323_0x3ee83b;
      if (
        typeof Reflect === _0x326529(0x90) &&
        typeof Reflect['metadata'] === 'function'
      )
        return Reflect[_0x326529(0x97)](_0x13258f, _0x395c0d);
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0xefd4fd) {
      return _0xefd4fd && _0xefd4fd['__esModule']
        ? _0xefd4fd
        : { default: _0xefd4fd };
    };
function a323_0x5a61() {
  var _0x19f2e3 = [
    'defineProperty',
    '16ZSwVsv',
    'chatId',
    'prototype',
    '1306120YYsrXA',
    'user',
    'BelongsTo',
    'object',
    'Table',
    'default',
    'UpdatedAt',
    '__decorate',
    '2853988LTEcCa',
    'sequelize-typescript',
    'metadata',
    '42trcrAa',
    'createdAt',
    'PrimaryKey',
    'chat',
    'design:type',
    'ChatUsers',
    '5541830YNcStq',
    '1700796acKuEA',
    'Model',
    'updatedAt',
    'Column',
    'decorate',
    '120232KoRemE',
    './User',
    '__metadata',
    'unreads',
    '208854tzytKi',
    './Chat',
    '5gxxeXv',
    '2404359kREzal'
  ];
  a323_0x5a61 = function () {
    return _0x19f2e3;
  };
  return a323_0x5a61();
}
Object['defineProperty'](exports, '__esModule', { value: !![] });
function a323_0x1bd4(_0x5dbbb1, _0x3363c9) {
  var _0x5a6196 = a323_0x5a61();
  return (
    (a323_0x1bd4 = function (_0x1bd43e, _0x40a7bf) {
      _0x1bd43e = _0x1bd43e - 0x83;
      var _0x3dc5ba = _0x5a6196[_0x1bd43e];
      return _0x3dc5ba;
    }),
    a323_0x1bd4(_0x5dbbb1, _0x3363c9)
  );
}
const sequelize_typescript_1 = require(a323_0x3ee83b(0x96)),
  User_1 = __importDefault(require(a323_0x3ee83b(0xa5))),
  Chat_1 = __importDefault(require(a323_0x3ee83b(0x86)));
let ChatUser = class ChatUser extends sequelize_typescript_1[
  a323_0x3ee83b(0xa0)
] {};
__decorate(
  [
    sequelize_typescript_1[a323_0x3ee83b(0x9a)],
    sequelize_typescript_1['AutoIncrement'],
    sequelize_typescript_1[a323_0x3ee83b(0xa2)],
    __metadata(a323_0x3ee83b(0x9c), Number)
  ],
  ChatUser['prototype'],
  'id',
  void 0x0
),
  __decorate(
    [
      (0x0, sequelize_typescript_1['ForeignKey'])(
        () => Chat_1[a323_0x3ee83b(0x92)]
      ),
      sequelize_typescript_1[a323_0x3ee83b(0xa2)],
      __metadata('design:type', Number)
    ],
    ChatUser['prototype'],
    a323_0x3ee83b(0x8b),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['ForeignKey'])(
        () => User_1[a323_0x3ee83b(0x92)]
      ),
      sequelize_typescript_1[a323_0x3ee83b(0xa2)],
      __metadata(a323_0x3ee83b(0x9c), Number)
    ],
    ChatUser['prototype'],
    'userId',
    void 0x0
  ),
  __decorate(
    [sequelize_typescript_1['Column'], __metadata(a323_0x3ee83b(0x9c), Number)],
    ChatUser['prototype'],
    a323_0x3ee83b(0x84),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1['CreatedAt'],
      __metadata(a323_0x3ee83b(0x9c), Date)
    ],
    ChatUser[a323_0x3ee83b(0x8c)],
    a323_0x3ee83b(0x99),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a323_0x3ee83b(0x93)],
      __metadata('design:type', Date)
    ],
    ChatUser[a323_0x3ee83b(0x8c)],
    a323_0x3ee83b(0xa1),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a323_0x3ee83b(0x8f)])(
        () => Chat_1[a323_0x3ee83b(0x92)]
      ),
      __metadata(a323_0x3ee83b(0x9c), Chat_1[a323_0x3ee83b(0x92)])
    ],
    ChatUser[a323_0x3ee83b(0x8c)],
    a323_0x3ee83b(0x9b),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['BelongsTo'])(
        () => User_1[a323_0x3ee83b(0x92)]
      ),
      __metadata(a323_0x3ee83b(0x9c), User_1[a323_0x3ee83b(0x92)])
    ],
    ChatUser[a323_0x3ee83b(0x8c)],
    a323_0x3ee83b(0x8e),
    void 0x0
  ),
  (ChatUser = __decorate(
    [
      (0x0, sequelize_typescript_1[a323_0x3ee83b(0x91)])({
        tableName: a323_0x3ee83b(0x9d)
      })
    ],
    ChatUser
  )),
  (exports[a323_0x3ee83b(0x92)] = ChatUser);
