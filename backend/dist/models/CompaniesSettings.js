'use strict';
var a325_0x43b006 = a325_0x2eec;
(function (_0x5c5e4c, _0x2c9064) {
  var _0x287bfd = a325_0x2eec,
    _0x40b8b0 = _0x5c5e4c();
  while (!![]) {
    try {
      var _0x451c30 =
        (parseInt(_0x287bfd(0x8d)) / 0x1) * (parseInt(_0x287bfd(0xba)) / 0x2) +
        (-parseInt(_0x287bfd(0x97)) / 0x3) *
          (-parseInt(_0x287bfd(0xa5)) / 0x4) +
        parseInt(_0x287bfd(0x8a)) / 0x5 +
        -parseInt(_0x287bfd(0xab)) / 0x6 +
        parseInt(_0x287bfd(0xa1)) / 0x7 +
        (-parseInt(_0x287bfd(0xa0)) / 0x8) *
          (-parseInt(_0x287bfd(0xb8)) / 0x9) +
        (-parseInt(_0x287bfd(0x95)) / 0xa) * (parseInt(_0x287bfd(0x9f)) / 0xb);
      if (_0x451c30 === _0x2c9064) break;
      else _0x40b8b0['push'](_0x40b8b0['shift']());
    } catch (_0x2d2208) {
      _0x40b8b0['push'](_0x40b8b0['shift']());
    }
  }
})(a325_0xd3de, 0xeaca8);
var __decorate =
    (this && this[a325_0x43b006(0x8b)]) ||
    function (_0x1b1f67, _0x3deb91, _0x56e383, _0x59f744) {
      var _0x2da98e = a325_0x43b006,
        _0x2fbec6 = arguments[_0x2da98e(0x9d)],
        _0x536167 =
          _0x2fbec6 < 0x3
            ? _0x3deb91
            : _0x59f744 === null
              ? (_0x59f744 = Object[_0x2da98e(0xa8)](_0x3deb91, _0x56e383))
              : _0x59f744,
        _0x26d024;
      if (
        typeof Reflect === _0x2da98e(0xad) &&
        typeof Reflect[_0x2da98e(0x99)] === _0x2da98e(0x8e)
      )
        _0x536167 = Reflect['decorate'](
          _0x1b1f67,
          _0x3deb91,
          _0x56e383,
          _0x59f744
        );
      else {
        for (
          var _0x29f6e5 = _0x1b1f67[_0x2da98e(0x9d)] - 0x1;
          _0x29f6e5 >= 0x0;
          _0x29f6e5--
        )
          if ((_0x26d024 = _0x1b1f67[_0x29f6e5]))
            _0x536167 =
              (_0x2fbec6 < 0x3
                ? _0x26d024(_0x536167)
                : _0x2fbec6 > 0x3
                  ? _0x26d024(_0x3deb91, _0x56e383, _0x536167)
                  : _0x26d024(_0x3deb91, _0x56e383)) || _0x536167;
      }
      return (
        _0x2fbec6 > 0x3 &&
          _0x536167 &&
          Object[_0x2da98e(0xb4)](_0x3deb91, _0x56e383, _0x536167),
        _0x536167
      );
    },
  __metadata =
    (this && this[a325_0x43b006(0xb1)]) ||
    function (_0x1eb3ed, _0x59090c) {
      var _0x2bf303 = a325_0x43b006;
      if (
        typeof Reflect === _0x2bf303(0xad) &&
        typeof Reflect[_0x2bf303(0xa7)] === _0x2bf303(0x8e)
      )
        return Reflect[_0x2bf303(0xa7)](_0x1eb3ed, _0x59090c);
    },
  __importDefault =
    (this && this[a325_0x43b006(0x9e)]) ||
    function (_0x5f16a3) {
      return _0x5f16a3 && _0x5f16a3['__esModule']
        ? _0x5f16a3
        : { default: _0x5f16a3 };
    };
function a325_0x2eec(_0xcb9e3f, _0xc84eb) {
  var _0xd3de50 = a325_0xd3de();
  return (
    (a325_0x2eec = function (_0x2eecd9, _0x319953) {
      _0x2eecd9 = _0x2eecd9 - 0x83;
      var _0x1e7d6f = _0xd3de50[_0x2eecd9];
      return _0x1e7d6f;
    }),
    a325_0x2eec(_0xcb9e3f, _0xc84eb)
  );
}
Object[a325_0x43b006(0xb4)](exports, a325_0x43b006(0xa4), { value: !![] });
const sequelize_typescript_1 = require(a325_0x43b006(0x91)),
  Company_1 = __importDefault(require(a325_0x43b006(0x92)));
let CompaniesSettings = class CompaniesSettings extends sequelize_typescript_1[
  a325_0x43b006(0xa3)
] {};
__decorate(
  [
    sequelize_typescript_1[a325_0x43b006(0x98)],
    sequelize_typescript_1['AutoIncrement'],
    sequelize_typescript_1[a325_0x43b006(0x85)],
    __metadata(a325_0x43b006(0x96), Number)
  ],
  CompaniesSettings[a325_0x43b006(0xb2)],
  'id',
  void 0x0
),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a325_0x43b006(0x89)])(
        () => Company_1[a325_0x43b006(0xb3)]
      ),
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), Number)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0x9a),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['BelongsTo'])(
        () => Company_1[a325_0x43b006(0xb3)]
      ),
      __metadata(a325_0x43b006(0x96), Company_1[a325_0x43b006(0xb3)])
    ],
    CompaniesSettings['prototype'],
    a325_0x43b006(0x8c),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata('design:type', String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    'hoursCloseTicketsAuto',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0x88),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    'acceptCallWhatsapp',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings['prototype'],
    a325_0x43b006(0xa9),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings['prototype'],
    a325_0x43b006(0x86),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0xb6),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0xb5),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0x9c),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata('design:type', String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0x94),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0xae),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings['prototype'],
    a325_0x43b006(0xaf),
    void 0x0
  ),
  __decorate(
    [sequelize_typescript_1['Column'], __metadata(a325_0x43b006(0x96), String)],
    CompaniesSettings['prototype'],
    'scheduleType',
    void 0x0
  ),
  __decorate(
    [sequelize_typescript_1['Column'], __metadata(a325_0x43b006(0x96), String)],
    CompaniesSettings['prototype'],
    a325_0x43b006(0xb9),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0xaa),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata('design:type', String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0xa6),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata('design:type', String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0x8f),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings['prototype'],
    'lgpdDeleteMessage',
    void 0x0
  ),
  __decorate(
    [sequelize_typescript_1['Column'], __metadata(a325_0x43b006(0x96), String)],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0x84),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata('design:type', String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0x87),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0xbb),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), String)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0x90),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0x93)],
      __metadata(a325_0x43b006(0x96), Date)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0x83),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a325_0x43b006(0xac)],
      __metadata(a325_0x43b006(0x96), Date)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0xa2),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['Default'])(![]),
      sequelize_typescript_1['Column'],
      __metadata(a325_0x43b006(0x96), Boolean)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    'DirectTicketsToWallets',
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['Default'])(![]),
      sequelize_typescript_1[a325_0x43b006(0x85)],
      __metadata(a325_0x43b006(0x96), Boolean)
    ],
    CompaniesSettings[a325_0x43b006(0xb2)],
    a325_0x43b006(0xb0),
    void 0x0
  ),
  (CompaniesSettings = __decorate(
    [
      (0x0, sequelize_typescript_1[a325_0x43b006(0x9b)])({
        tableName: a325_0x43b006(0xb7)
      })
    ],
    CompaniesSettings
  )),
  (exports[a325_0x43b006(0xb3)] = CompaniesSettings);
function a325_0xd3de() {
  var _0x17febf = [
    'decorate',
    'companyId',
    'Table',
    'userRating',
    'length',
    '__importDefault',
    '24012868sSTdiz',
    '1235240NNlhuD',
    '12190178uOWcbS',
    'updatedAt',
    'Model',
    '__esModule',
    '12zwCVMf',
    'enableLGPD',
    'metadata',
    'getOwnPropertyDescriptor',
    'userRandom',
    'sendMsgTransfTicket',
    '4703508ZVuTYZ',
    'UpdatedAt',
    'object',
    'CheckMsgIsGroup',
    'sendQueuePosition',
    'closeTicketOnTransfer',
    '__metadata',
    'prototype',
    'default',
    'defineProperty',
    'sendFarewellWaitingTicket',
    'sendSignMessage',
    'CompaniesSettings',
    '9QQpgBa',
    'acceptAudioMessageContact',
    '1786242tIcbGj',
    'lgpdLink',
    'createdAt',
    'lgpdHideNumber',
    'Column',
    'sendGreetingMessageOneQueues',
    'lgpdConsent',
    'chatBotType',
    'ForeignKey',
    '1715095TQsUuw',
    '__decorate',
    'company',
    '1zSKxlN',
    'function',
    'requiredTag',
    'lgpdMessage',
    'sequelize-typescript',
    './Company',
    'CreatedAt',
    'sendGreetingAccepted',
    '10PDFeha',
    'design:type',
    '796611GZjfAu',
    'PrimaryKey'
  ];
  a325_0xd3de = function () {
    return _0x17febf;
  };
  return a325_0xd3de();
}
