'use strict';
var a359_0x542432 = a359_0x1de2;
function a359_0x1778() {
  var _0x4262ab = [
    '__esModule',
    './Queue',
    'object',
    'getOwnPropertyDescriptor',
    '1009269RDqFOx',
    'design:type',
    '__metadata',
    '59515CLpaIZ',
    'decorate',
    '26JYOule',
    '5130PUvccQ',
    '4yxfKPQ',
    '9hGAmxh',
    'createdAt',
    '3409OPDgLN',
    'sequelize-typescript',
    'Column',
    '4815472DIbnUp',
    'prototype',
    'CreatedAt',
    'length',
    'function',
    'default',
    'defineProperty',
    '91837zcefVR',
    '9585356uYZemR',
    'ForeignKey',
    'queueId',
    './User',
    '__importDefault',
    'metadata',
    '9185180GBlhax'
  ];
  a359_0x1778 = function () {
    return _0x4262ab;
  };
  return a359_0x1778();
}
(function (_0x52a824, _0x51a8e5) {
  var _0x1003bb = a359_0x1de2,
    _0x41752e = _0x52a824();
  while (!![]) {
    try {
      var _0x1253da =
        (-parseInt(_0x1003bb(0x1f9)) / 0x1) *
          (-parseInt(_0x1003bb(0x20a)) / 0x2) +
        -parseInt(_0x1003bb(0x205)) / 0x3 +
        (parseInt(_0x1003bb(0x20c)) / 0x4) *
          (-parseInt(_0x1003bb(0x208)) / 0x5) +
        (parseInt(_0x1003bb(0x20b)) / 0x6) *
          (parseInt(_0x1003bb(0x20f)) / 0x7) +
        (-parseInt(_0x1003bb(0x1f2)) / 0x8) *
          (parseInt(_0x1003bb(0x20d)) / 0x9) +
        parseInt(_0x1003bb(0x200)) / 0xa +
        -parseInt(_0x1003bb(0x1fa)) / 0xb;
      if (_0x1253da === _0x51a8e5) break;
      else _0x41752e['push'](_0x41752e['shift']());
    } catch (_0x48f718) {
      _0x41752e['push'](_0x41752e['shift']());
    }
  }
})(a359_0x1778, 0xaca38);
var __decorate =
    (this && this['__decorate']) ||
    function (_0x45105d, _0x8bd8ea, _0x860405, _0x4050ea) {
      var _0x3777d9 = a359_0x1de2,
        _0x579af7 = arguments[_0x3777d9(0x1f5)],
        _0x3ddbc9 =
          _0x579af7 < 0x3
            ? _0x8bd8ea
            : _0x4050ea === null
              ? (_0x4050ea = Object[_0x3777d9(0x204)](_0x8bd8ea, _0x860405))
              : _0x4050ea,
        _0x5e0e09;
      if (
        typeof Reflect === _0x3777d9(0x203) &&
        typeof Reflect[_0x3777d9(0x209)] === 'function'
      )
        _0x3ddbc9 = Reflect[_0x3777d9(0x209)](
          _0x45105d,
          _0x8bd8ea,
          _0x860405,
          _0x4050ea
        );
      else {
        for (
          var _0x10e460 = _0x45105d[_0x3777d9(0x1f5)] - 0x1;
          _0x10e460 >= 0x0;
          _0x10e460--
        )
          if ((_0x5e0e09 = _0x45105d[_0x10e460]))
            _0x3ddbc9 =
              (_0x579af7 < 0x3
                ? _0x5e0e09(_0x3ddbc9)
                : _0x579af7 > 0x3
                  ? _0x5e0e09(_0x8bd8ea, _0x860405, _0x3ddbc9)
                  : _0x5e0e09(_0x8bd8ea, _0x860405)) || _0x3ddbc9;
      }
      return (
        _0x579af7 > 0x3 &&
          _0x3ddbc9 &&
          Object[_0x3777d9(0x1f8)](_0x8bd8ea, _0x860405, _0x3ddbc9),
        _0x3ddbc9
      );
    },
  __metadata =
    (this && this[a359_0x542432(0x207)]) ||
    function (_0x573b27, _0x17d753) {
      var _0x3d1902 = a359_0x542432;
      if (
        typeof Reflect === _0x3d1902(0x203) &&
        typeof Reflect[_0x3d1902(0x1ff)] === _0x3d1902(0x1f6)
      )
        return Reflect[_0x3d1902(0x1ff)](_0x573b27, _0x17d753);
    },
  __importDefault =
    (this && this[a359_0x542432(0x1fe)]) ||
    function (_0x4fac60) {
      var _0x9223 = a359_0x542432;
      return _0x4fac60 && _0x4fac60[_0x9223(0x201)]
        ? _0x4fac60
        : { default: _0x4fac60 };
    };
Object[a359_0x542432(0x1f8)](exports, '__esModule', { value: !![] });
const sequelize_typescript_1 = require(a359_0x542432(0x210)),
  Queue_1 = __importDefault(require(a359_0x542432(0x202))),
  User_1 = __importDefault(require(a359_0x542432(0x1fd)));
let UserQueue = class UserQueue extends sequelize_typescript_1['Model'] {};
function a359_0x1de2(_0x331720, _0x3ea1dd) {
  var _0x1778e6 = a359_0x1778();
  return (
    (a359_0x1de2 = function (_0x1de200, _0xe97dad) {
      _0x1de200 = _0x1de200 - 0x1f2;
      var _0x354340 = _0x1778e6[_0x1de200];
      return _0x354340;
    }),
    a359_0x1de2(_0x331720, _0x3ea1dd)
  );
}
__decorate(
  [
    (0x0, sequelize_typescript_1['ForeignKey'])(() => User_1['default']),
    sequelize_typescript_1[a359_0x542432(0x211)],
    __metadata(a359_0x542432(0x206), Number)
  ],
  UserQueue[a359_0x542432(0x1f3)],
  'userId',
  void 0x0
),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a359_0x542432(0x1fb)])(
        () => Queue_1[a359_0x542432(0x1f7)]
      ),
      sequelize_typescript_1[a359_0x542432(0x211)],
      __metadata(a359_0x542432(0x206), Number)
    ],
    UserQueue[a359_0x542432(0x1f3)],
    a359_0x542432(0x1fc),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a359_0x542432(0x1f4)],
      __metadata('design:type', Date)
    ],
    UserQueue[a359_0x542432(0x1f3)],
    a359_0x542432(0x20e),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1['UpdatedAt'],
      __metadata(a359_0x542432(0x206), Date)
    ],
    UserQueue[a359_0x542432(0x1f3)],
    'updatedAt',
    void 0x0
  ),
  (UserQueue = __decorate([sequelize_typescript_1['Table']], UserQueue)),
  (exports[a359_0x542432(0x1f7)] = UserQueue);
