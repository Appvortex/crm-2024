'use strict';
var a324_0x223c92 = a324_0x1944;
function a324_0x2f39() {
  var _0x38491a = [
    '__metadata',
    'AllowNull',
    'design:type',
    '__importDefault',
    'defineProperty',
    'metadata',
    'optUserId',
    '346092QrvDHW',
    '__decorate',
    'function',
    'prototype',
    'queue',
    '32997850ZuTVnV',
    'Column',
    'object',
    'file',
    'BelongsTo',
    'ForeignKey',
    'mainChatbot',
    '4uYVTdQ',
    'HasMany',
    'greetingMessage',
    'UpdatedAt',
    'queueType',
    'Default',
    'chatbotId',
    '1816jqxKpY',
    'closeTicket',
    'AutoIncrement',
    'updatedAt',
    'default',
    '679365brxGwb',
    'optIntegrationId',
    '499064LYRLqE',
    './Queue',
    '333911rlBkqT',
    'optFileId',
    'optQueueId',
    'decorate',
    '33901GJNhOS',
    'PrimaryKey',
    'options',
    '__esModule',
    'isAgent',
    '10VIMgCy',
    'user',
    '7456626ddiUCf',
    './User',
    './QueueIntegrations',
    'sequelize-typescript'
  ];
  a324_0x2f39 = function () {
    return _0x38491a;
  };
  return a324_0x2f39();
}
function a324_0x1944(_0x5e8bf2, _0xe18920) {
  var _0x2f39d4 = a324_0x2f39();
  return (
    (a324_0x1944 = function (_0x194402, _0x372b6f) {
      _0x194402 = _0x194402 - 0x1e8;
      var _0x5c19ca = _0x2f39d4[_0x194402];
      return _0x5c19ca;
    }),
    a324_0x1944(_0x5e8bf2, _0xe18920)
  );
}
(function (_0x15a288, _0x206c69) {
  var _0x3a2aa3 = a324_0x1944,
    _0x1e2b8d = _0x15a288();
  while (!![]) {
    try {
      var _0x38307e =
        (-parseInt(_0x3a2aa3(0x1f8)) / 0x1) *
          (parseInt(_0x3a2aa3(0x1e8)) / 0x2) +
        parseInt(_0x3a2aa3(0x1f4)) / 0x3 +
        -parseInt(_0x3a2aa3(0x1f6)) / 0x4 +
        (-parseInt(_0x3a2aa3(0x201)) / 0x5) *
          (parseInt(_0x3a2aa3(0x20e)) / 0x6) +
        (parseInt(_0x3a2aa3(0x1fc)) / 0x7) *
          (-parseInt(_0x3a2aa3(0x1ef)) / 0x8) +
        -parseInt(_0x3a2aa3(0x203)) / 0x9 +
        parseInt(_0x3a2aa3(0x213)) / 0xa;
      if (_0x38307e === _0x206c69) break;
      else _0x1e2b8d['push'](_0x1e2b8d['shift']());
    } catch (_0x58d615) {
      _0x1e2b8d['push'](_0x1e2b8d['shift']());
    }
  }
})(a324_0x2f39, 0xa88ed);
var __decorate =
    (this && this[a324_0x223c92(0x20f)]) ||
    function (_0x1c53ee, _0x449441, _0x498310, _0x35ec9f) {
      var _0x3a7604 = a324_0x223c92,
        _0x21de0d = arguments['length'],
        _0x2775fa =
          _0x21de0d < 0x3
            ? _0x449441
            : _0x35ec9f === null
              ? (_0x35ec9f = Object['getOwnPropertyDescriptor'](
                  _0x449441,
                  _0x498310
                ))
              : _0x35ec9f,
        _0x3f061f;
      if (
        typeof Reflect === _0x3a7604(0x215) &&
        typeof Reflect[_0x3a7604(0x1fb)] === _0x3a7604(0x210)
      )
        _0x2775fa = Reflect[_0x3a7604(0x1fb)](
          _0x1c53ee,
          _0x449441,
          _0x498310,
          _0x35ec9f
        );
      else {
        for (
          var _0x437690 = _0x1c53ee['length'] - 0x1;
          _0x437690 >= 0x0;
          _0x437690--
        )
          if ((_0x3f061f = _0x1c53ee[_0x437690]))
            _0x2775fa =
              (_0x21de0d < 0x3
                ? _0x3f061f(_0x2775fa)
                : _0x21de0d > 0x3
                  ? _0x3f061f(_0x449441, _0x498310, _0x2775fa)
                  : _0x3f061f(_0x449441, _0x498310)) || _0x2775fa;
      }
      return (
        _0x21de0d > 0x3 &&
          _0x2775fa &&
          Object[_0x3a7604(0x20b)](_0x449441, _0x498310, _0x2775fa),
        _0x2775fa
      );
    },
  __metadata =
    (this && this[a324_0x223c92(0x207)]) ||
    function (_0x133b76, _0x313fa0) {
      var _0x428af3 = a324_0x223c92;
      if (
        typeof Reflect === _0x428af3(0x215) &&
        typeof Reflect[_0x428af3(0x20c)] === _0x428af3(0x210)
      )
        return Reflect[_0x428af3(0x20c)](_0x133b76, _0x313fa0);
    },
  __importDefault =
    (this && this[a324_0x223c92(0x20a)]) ||
    function (_0x20fa2a) {
      return _0x20fa2a && _0x20fa2a['__esModule']
        ? _0x20fa2a
        : { default: _0x20fa2a };
    },
  Chatbot_1;
Object[a324_0x223c92(0x20b)](exports, a324_0x223c92(0x1ff), { value: !![] });
const sequelize_typescript_1 = require(a324_0x223c92(0x206)),
  Queue_1 = __importDefault(require(a324_0x223c92(0x1f7))),
  User_1 = __importDefault(require(a324_0x223c92(0x204))),
  QueueIntegrations_1 = __importDefault(require(a324_0x223c92(0x205))),
  Files_1 = __importDefault(require('./Files'));
let Chatbot = (Chatbot_1 = class Chatbot extends (
  sequelize_typescript_1['Model']
) {});
__decorate(
  [
    sequelize_typescript_1[a324_0x223c92(0x1fd)],
    sequelize_typescript_1[a324_0x223c92(0x1f1)],
    sequelize_typescript_1[a324_0x223c92(0x214)],
    __metadata(a324_0x223c92(0x209), Number)
  ],
  Chatbot[a324_0x223c92(0x211)],
  'id',
  void 0x0
),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x208)])(![]),
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata('design:type', String)
    ],
    Chatbot[a324_0x223c92(0x211)],
    'name',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1['Column'],
      __metadata(a324_0x223c92(0x209), String)
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x1ea),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x218)])(
        () => Queue_1['default']
      ),
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata('design:type', Number)
    ],
    Chatbot[a324_0x223c92(0x211)],
    'queueId',
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x217)])(
        () => Queue_1['default']
      ),
      __metadata(a324_0x223c92(0x209), Queue_1['default'])
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x212),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x218)])(() => Chatbot_1),
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata('design:type', Number)
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x1ee),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata(a324_0x223c92(0x209), Boolean)
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x200),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x217)])(() => Chatbot_1),
      __metadata(a324_0x223c92(0x209), Chatbot)
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x219),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x1e9)])(() => Chatbot_1),
      __metadata(a324_0x223c92(0x209), Array)
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x1fe),
    void 0x0
  ),
  __decorate(
    [sequelize_typescript_1['CreatedAt'], __metadata('design:type', Date)],
    Chatbot[a324_0x223c92(0x211)],
    'createdAt',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a324_0x223c92(0x1eb)],
      __metadata(a324_0x223c92(0x209), Date)
    ],
    Chatbot['prototype'],
    a324_0x223c92(0x1f2),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata(a324_0x223c92(0x209), String)
    ],
    Chatbot['prototype'],
    a324_0x223c92(0x1ec),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['ForeignKey'])(
        () => Queue_1[a324_0x223c92(0x1f3)]
      ),
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata(a324_0x223c92(0x209), Number)
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x1fa),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x218)])(
        () => User_1[a324_0x223c92(0x1f3)]
      ),
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata(a324_0x223c92(0x209), Number)
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x20d),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['BelongsTo'])(
        () => User_1[a324_0x223c92(0x1f3)]
      ),
      __metadata(a324_0x223c92(0x209), User_1[a324_0x223c92(0x1f3)])
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x202),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x218)])(
        () => QueueIntegrations_1[a324_0x223c92(0x1f3)]
      ),
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata(a324_0x223c92(0x209), Number)
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x1f5),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x217)])(
        () => QueueIntegrations_1[a324_0x223c92(0x1f3)]
      ),
      __metadata(
        a324_0x223c92(0x209),
        QueueIntegrations_1[a324_0x223c92(0x1f3)]
      )
    ],
    Chatbot[a324_0x223c92(0x211)],
    'queueIntegrations',
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x218)])(
        () => Files_1[a324_0x223c92(0x1f3)]
      ),
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata('design:type', Number)
    ],
    Chatbot['prototype'],
    a324_0x223c92(0x1f9),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x217)])(
        () => Files_1[a324_0x223c92(0x1f3)]
      ),
      __metadata(a324_0x223c92(0x209), Files_1[a324_0x223c92(0x1f3)])
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x216),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a324_0x223c92(0x1ed)])(![]),
      sequelize_typescript_1[a324_0x223c92(0x214)],
      __metadata(a324_0x223c92(0x209), Boolean)
    ],
    Chatbot[a324_0x223c92(0x211)],
    a324_0x223c92(0x1f0),
    void 0x0
  ),
  (Chatbot = Chatbot_1 =
    __decorate([sequelize_typescript_1['Table']], Chatbot)),
  (exports['default'] = Chatbot);
