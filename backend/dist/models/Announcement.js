'use strict';
var a315_0x5ed4ad = a315_0x3c75;
function a315_0x11f8() {
  var _0x5485d6 = [
    '8FufjJk',
    '__esModule',
    'PROXY_PORT',
    'getDataValue',
    '__metadata',
    '10353343LamvlG',
    'company',
    'length',
    'AutoIncrement',
    '36rOhSEy',
    'prototype',
    './Company',
    'defineProperty',
    'createdAt',
    'mediaPath',
    'metadata',
    'BelongsTo',
    'getOwnPropertyDescriptor',
    '__importDefault',
    'design:paramtypes',
    'BACKEND_URL',
    '6uqlwag',
    'status',
    '4061405GXpLZK',
    'function',
    'Column',
    'updatedAt',
    '2421264JAwyIA',
    'CreatedAt',
    '967150DgHBzi',
    '2293780ccnqze',
    'Table',
    'object',
    '536250kYNLfl',
    'mediaName',
    'design:type',
    '322974JZQrys',
    'TEXT',
    'UpdatedAt',
    '__decorate',
    'env',
    'DataType',
    'default'
  ];
  a315_0x11f8 = function () {
    return _0x5485d6;
  };
  return a315_0x11f8();
}
(function (_0x57e58a, _0xb2dbc1) {
  var _0x4edaf1 = a315_0x3c75,
    _0x1d8913 = _0x57e58a();
  while (!![]) {
    try {
      var _0x4130ba =
        -parseInt(_0x4edaf1(0x7e)) / 0x1 +
        parseInt(_0x4edaf1(0x7b)) / 0x2 +
        (parseInt(_0x4edaf1(0x81)) / 0x3) * (parseInt(_0x4edaf1(0x88)) / 0x4) +
        (parseInt(_0x4edaf1(0x74)) / 0x5) * (parseInt(_0x4edaf1(0x72)) / 0x6) +
        -parseInt(_0x4edaf1(0x8d)) / 0x7 +
        parseInt(_0x4edaf1(0x78)) / 0x8 +
        (parseInt(_0x4edaf1(0x91)) / 0x9) * (parseInt(_0x4edaf1(0x7a)) / 0xa);
      if (_0x4130ba === _0xb2dbc1) break;
      else _0x1d8913['push'](_0x1d8913['shift']());
    } catch (_0x55b4f3) {
      _0x1d8913['push'](_0x1d8913['shift']());
    }
  }
})(a315_0x11f8, 0xcf342);
var __decorate =
    (this && this[a315_0x5ed4ad(0x84)]) ||
    function (_0x2fcd9c, _0x56170d, _0x347ac1, _0x5a0920) {
      var _0x464af5 = a315_0x5ed4ad,
        _0x4d7244 = arguments[_0x464af5(0x8f)],
        _0x41613a =
          _0x4d7244 < 0x3
            ? _0x56170d
            : _0x5a0920 === null
              ? (_0x5a0920 = Object[_0x464af5(0x99)](_0x56170d, _0x347ac1))
              : _0x5a0920,
        _0x1ad77a;
      if (
        typeof Reflect === _0x464af5(0x7d) &&
        typeof Reflect['decorate'] === 'function'
      )
        _0x41613a = Reflect['decorate'](
          _0x2fcd9c,
          _0x56170d,
          _0x347ac1,
          _0x5a0920
        );
      else {
        for (
          var _0x20ff22 = _0x2fcd9c[_0x464af5(0x8f)] - 0x1;
          _0x20ff22 >= 0x0;
          _0x20ff22--
        )
          if ((_0x1ad77a = _0x2fcd9c[_0x20ff22]))
            _0x41613a =
              (_0x4d7244 < 0x3
                ? _0x1ad77a(_0x41613a)
                : _0x4d7244 > 0x3
                  ? _0x1ad77a(_0x56170d, _0x347ac1, _0x41613a)
                  : _0x1ad77a(_0x56170d, _0x347ac1)) || _0x41613a;
      }
      return (
        _0x4d7244 > 0x3 &&
          _0x41613a &&
          Object[_0x464af5(0x94)](_0x56170d, _0x347ac1, _0x41613a),
        _0x41613a
      );
    },
  __metadata =
    (this && this[a315_0x5ed4ad(0x8c)]) ||
    function (_0x27ea1c, _0x59be24) {
      var _0x3c6164 = a315_0x5ed4ad;
      if (
        typeof Reflect === _0x3c6164(0x7d) &&
        typeof Reflect[_0x3c6164(0x97)] === _0x3c6164(0x75)
      )
        return Reflect[_0x3c6164(0x97)](_0x27ea1c, _0x59be24);
    },
  __importDefault =
    (this && this[a315_0x5ed4ad(0x9a)]) ||
    function (_0x322ba0) {
      var _0x2e8af9 = a315_0x5ed4ad;
      return _0x322ba0 && _0x322ba0[_0x2e8af9(0x89)]
        ? _0x322ba0
        : { default: _0x322ba0 };
    };
Object[a315_0x5ed4ad(0x94)](exports, a315_0x5ed4ad(0x89), { value: !![] });
const sequelize_typescript_1 = require('sequelize-typescript'),
  Company_1 = __importDefault(require(a315_0x5ed4ad(0x93)));
let Announcement = class Announcement extends sequelize_typescript_1['Model'] {
  get [a315_0x5ed4ad(0x96)]() {
    var _0x1f809f = a315_0x5ed4ad;
    if (this[_0x1f809f(0x8b)]('mediaPath'))
      return (
        '' +
        process['env'][_0x1f809f(0x71)] +
        (process[_0x1f809f(0x85)][_0x1f809f(0x8a)]
          ? ':' + process[_0x1f809f(0x85)][_0x1f809f(0x8a)]
          : '') +
        '/public/announcements/' +
        this[_0x1f809f(0x8b)]('mediaPath')
      );
    return null;
  }
};
function a315_0x3c75(_0x28add4, _0x6d5ea6) {
  var _0x11f8e6 = a315_0x11f8();
  return (
    (a315_0x3c75 = function (_0x3c756b, _0x52c14f) {
      _0x3c756b = _0x3c756b - 0x70;
      var _0x2579bd = _0x11f8e6[_0x3c756b];
      return _0x2579bd;
    }),
    a315_0x3c75(_0x28add4, _0x6d5ea6)
  );
}
__decorate(
  [
    sequelize_typescript_1['PrimaryKey'],
    sequelize_typescript_1[a315_0x5ed4ad(0x90)],
    sequelize_typescript_1[a315_0x5ed4ad(0x76)],
    __metadata(a315_0x5ed4ad(0x80), Number)
  ],
  Announcement[a315_0x5ed4ad(0x92)],
  'id',
  void 0x0
),
  __decorate(
    [sequelize_typescript_1['Column'], __metadata(a315_0x5ed4ad(0x80), Number)],
    Announcement[a315_0x5ed4ad(0x92)],
    'priority',
    void 0x0
  ),
  __decorate(
    [sequelize_typescript_1['Column'], __metadata(a315_0x5ed4ad(0x80), String)],
    Announcement['prototype'],
    'title',
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a315_0x5ed4ad(0x76)])(
        sequelize_typescript_1[a315_0x5ed4ad(0x86)][a315_0x5ed4ad(0x82)]
      ),
      __metadata(a315_0x5ed4ad(0x80), String)
    ],
    Announcement[a315_0x5ed4ad(0x92)],
    'text',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a315_0x5ed4ad(0x76)],
      __metadata(a315_0x5ed4ad(0x80), String),
      __metadata(a315_0x5ed4ad(0x70), [])
    ],
    Announcement[a315_0x5ed4ad(0x92)],
    a315_0x5ed4ad(0x96),
    null
  ),
  __decorate(
    [
      sequelize_typescript_1[a315_0x5ed4ad(0x76)],
      __metadata('design:type', String)
    ],
    Announcement[a315_0x5ed4ad(0x92)],
    a315_0x5ed4ad(0x7f),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['ForeignKey'])(
        () => Company_1[a315_0x5ed4ad(0x87)]
      ),
      sequelize_typescript_1['Column'],
      __metadata('design:type', Number)
    ],
    Announcement['prototype'],
    'companyId',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a315_0x5ed4ad(0x76)],
      __metadata('design:type', Boolean)
    ],
    Announcement[a315_0x5ed4ad(0x92)],
    a315_0x5ed4ad(0x73),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a315_0x5ed4ad(0x79)],
      __metadata(a315_0x5ed4ad(0x80), Date)
    ],
    Announcement[a315_0x5ed4ad(0x92)],
    a315_0x5ed4ad(0x95),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a315_0x5ed4ad(0x83)],
      __metadata(a315_0x5ed4ad(0x80), Date)
    ],
    Announcement['prototype'],
    a315_0x5ed4ad(0x77),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a315_0x5ed4ad(0x98)])(
        () => Company_1[a315_0x5ed4ad(0x87)]
      ),
      __metadata(a315_0x5ed4ad(0x80), Company_1[a315_0x5ed4ad(0x87)])
    ],
    Announcement[a315_0x5ed4ad(0x92)],
    a315_0x5ed4ad(0x8e),
    void 0x0
  ),
  (Announcement = __decorate(
    [sequelize_typescript_1[a315_0x5ed4ad(0x7c)]],
    Announcement
  )),
  (exports[a315_0x5ed4ad(0x87)] = Announcement);
