'use strict';
var a343_0x28b395 = a343_0x3bfe;
(function (_0x253273, _0x524757) {
  var _0x1ca20d = a343_0x3bfe,
    _0x18abc3 = _0x253273();
  while (!![]) {
    try {
      var _0x4248d3 =
        (parseInt(_0x1ca20d(0xf5)) / 0x1) *
          (-parseInt(_0x1ca20d(0x111)) / 0x2) +
        (-parseInt(_0x1ca20d(0xf7)) / 0x3) *
          (parseInt(_0x1ca20d(0x100)) / 0x4) +
        -parseInt(_0x1ca20d(0x10a)) / 0x5 +
        (parseInt(_0x1ca20d(0x115)) / 0x6) *
          (-parseInt(_0x1ca20d(0x11b)) / 0x7) +
        parseInt(_0x1ca20d(0xf9)) / 0x8 +
        -parseInt(_0x1ca20d(0xef)) / 0x9 +
        parseInt(_0x1ca20d(0x110)) / 0xa;
      if (_0x4248d3 === _0x524757) break;
      else _0x18abc3['push'](_0x18abc3['shift']());
    } catch (_0x253352) {
      _0x18abc3['push'](_0x18abc3['shift']());
    }
  }
})(a343_0x1edd, 0x8eee2);
var __decorate =
    (this && this[a343_0x28b395(0xfe)]) ||
    function (_0x48fe0e, _0x4bd5c1, _0x3d295c, _0x509b77) {
      var _0x107630 = a343_0x28b395,
        _0x2e3754 = arguments[_0x107630(0x117)],
        _0x1fe2f0 =
          _0x2e3754 < 0x3
            ? _0x4bd5c1
            : _0x509b77 === null
              ? (_0x509b77 = Object['getOwnPropertyDescriptor'](
                  _0x4bd5c1,
                  _0x3d295c
                ))
              : _0x509b77,
        _0x50e7ca;
      if (
        typeof Reflect === _0x107630(0xf4) &&
        typeof Reflect[_0x107630(0x116)] === _0x107630(0x105)
      )
        _0x1fe2f0 = Reflect[_0x107630(0x116)](
          _0x48fe0e,
          _0x4bd5c1,
          _0x3d295c,
          _0x509b77
        );
      else {
        for (
          var _0xb5f8e = _0x48fe0e['length'] - 0x1;
          _0xb5f8e >= 0x0;
          _0xb5f8e--
        )
          if ((_0x50e7ca = _0x48fe0e[_0xb5f8e]))
            _0x1fe2f0 =
              (_0x2e3754 < 0x3
                ? _0x50e7ca(_0x1fe2f0)
                : _0x2e3754 > 0x3
                  ? _0x50e7ca(_0x4bd5c1, _0x3d295c, _0x1fe2f0)
                  : _0x50e7ca(_0x4bd5c1, _0x3d295c)) || _0x1fe2f0;
      }
      return (
        _0x2e3754 > 0x3 &&
          _0x1fe2f0 &&
          Object['defineProperty'](_0x4bd5c1, _0x3d295c, _0x1fe2f0),
        _0x1fe2f0
      );
    },
  __metadata =
    (this && this[a343_0x28b395(0x113)]) ||
    function (_0x55b6cb, _0x575adf) {
      var _0x4ca588 = a343_0x28b395;
      if (
        typeof Reflect === _0x4ca588(0xf4) &&
        typeof Reflect[_0x4ca588(0xf2)] === _0x4ca588(0x105)
      )
        return Reflect[_0x4ca588(0xf2)](_0x55b6cb, _0x575adf);
    },
  __importDefault =
    (this && this[a343_0x28b395(0x106)]) ||
    function (_0x4ada89) {
      return _0x4ada89 && _0x4ada89['__esModule']
        ? _0x4ada89
        : { default: _0x4ada89 };
    };
function a343_0x3bfe(_0x5122a5, _0xfb1a1f) {
  var _0x1edd51 = a343_0x1edd();
  return (
    (a343_0x3bfe = function (_0x3bfe55, _0x31a13c) {
      _0x3bfe55 = _0x3bfe55 - 0xee;
      var _0x4e9a60 = _0x1edd51[_0x3bfe55];
      return _0x4e9a60;
    }),
    a343_0x3bfe(_0x5122a5, _0xfb1a1f)
  );
}
Object['defineProperty'](exports, '__esModule', { value: !![] });
function a343_0x1edd() {
  var _0x312a4a = [
    'function',
    '__importDefault',
    'prototype',
    'createdAt',
    'sequelize-typescript',
    '5321750YKTMVt',
    'Table',
    'maxTokens',
    'completionTokens',
    'design:type',
    'AllowNull',
    '41730150LFXxpC',
    '46tvLXMr',
    'queue',
    '__metadata',
    'maxMessages',
    '114lBEbOd',
    'decorate',
    'length',
    './Company',
    'promptTokens',
    'voice',
    '156548PbQFsX',
    'voiceKey',
    '3981447jXurvE',
    'BelongsTo',
    'queueId',
    'metadata',
    'PrimaryKey',
    'object',
    '46349zTgpIP',
    'Column',
    '270aegDtw',
    'temperature',
    '3850984RyNFhR',
    'apiKey',
    'UpdatedAt',
    'Model',
    'voiceRegion',
    '__decorate',
    'totalTokens',
    '47612CxlezX',
    'ForeignKey',
    'prompt',
    'default',
    'updatedAt'
  ];
  a343_0x1edd = function () {
    return _0x312a4a;
  };
  return a343_0x1edd();
}
const sequelize_typescript_1 = require(a343_0x28b395(0x109)),
  Queue_1 = __importDefault(require('./Queue')),
  Company_1 = __importDefault(require(a343_0x28b395(0x118)));
let Prompt = class Prompt extends sequelize_typescript_1[
  a343_0x28b395(0xfc)
] {};
__decorate(
  [
    sequelize_typescript_1[a343_0x28b395(0xf3)],
    sequelize_typescript_1['AutoIncrement'],
    sequelize_typescript_1['Column'],
    __metadata(a343_0x28b395(0x10e), Number)
  ],
  Prompt[a343_0x28b395(0x107)],
  'id',
  void 0x0
),
  __decorate(
    [
      (0x0, sequelize_typescript_1['AllowNull'])(![]),
      sequelize_typescript_1[a343_0x28b395(0xf6)],
      __metadata('design:type', String)
    ],
    Prompt[a343_0x28b395(0x107)],
    'name',
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0x10f)])(![]),
      sequelize_typescript_1['Column'],
      __metadata(a343_0x28b395(0x10e), String)
    ],
    Prompt[a343_0x28b395(0x107)],
    a343_0x28b395(0x102),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0x10f)])(![]),
      sequelize_typescript_1['Column'],
      __metadata(a343_0x28b395(0x10e), String)
    ],
    Prompt['prototype'],
    a343_0x28b395(0xfa),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0xf6)])({ defaultValue: 0xa }),
      __metadata(a343_0x28b395(0x10e), Number)
    ],
    Prompt[a343_0x28b395(0x107)],
    a343_0x28b395(0x114),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['Column'])({ defaultValue: 0x64 }),
      __metadata(a343_0x28b395(0x10e), Number)
    ],
    Prompt[a343_0x28b395(0x107)],
    a343_0x28b395(0x10c),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0xf6)])({ defaultValue: 0x1 }),
      __metadata('design:type', Number)
    ],
    Prompt['prototype'],
    a343_0x28b395(0xf8),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0xf6)])({ defaultValue: 0x0 }),
      __metadata('design:type', Number)
    ],
    Prompt['prototype'],
    a343_0x28b395(0x119),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['Column'])({ defaultValue: 0x0 }),
      __metadata('design:type', Number)
    ],
    Prompt['prototype'],
    a343_0x28b395(0x10d),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['Column'])({ defaultValue: 0x0 }),
      __metadata(a343_0x28b395(0x10e), Number)
    ],
    Prompt['prototype'],
    a343_0x28b395(0xff),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0x10f)])(![]),
      sequelize_typescript_1['Column'],
      __metadata('design:type', String)
    ],
    Prompt['prototype'],
    a343_0x28b395(0x11a),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1['AllowNull'])(!![]),
      sequelize_typescript_1[a343_0x28b395(0xf6)],
      __metadata(a343_0x28b395(0x10e), String)
    ],
    Prompt[a343_0x28b395(0x107)],
    a343_0x28b395(0xee),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0x10f)])(!![]),
      sequelize_typescript_1[a343_0x28b395(0xf6)],
      __metadata(a343_0x28b395(0x10e), String)
    ],
    Prompt['prototype'],
    a343_0x28b395(0xfd),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a343_0x28b395(0x10f)],
      (0x0, sequelize_typescript_1[a343_0x28b395(0x101)])(
        () => Queue_1[a343_0x28b395(0x103)]
      ),
      sequelize_typescript_1[a343_0x28b395(0xf6)],
      __metadata('design:type', Number)
    ],
    Prompt[a343_0x28b395(0x107)],
    a343_0x28b395(0xf1),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0xf0)])(
        () => Queue_1[a343_0x28b395(0x103)]
      ),
      __metadata(a343_0x28b395(0x10e), Queue_1[a343_0x28b395(0x103)])
    ],
    Prompt[a343_0x28b395(0x107)],
    a343_0x28b395(0x112),
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0x101)])(
        () => Company_1['default']
      ),
      sequelize_typescript_1[a343_0x28b395(0xf6)],
      __metadata('design:type', Number)
    ],
    Prompt[a343_0x28b395(0x107)],
    'companyId',
    void 0x0
  ),
  __decorate(
    [
      (0x0, sequelize_typescript_1[a343_0x28b395(0xf0)])(
        () => Company_1[a343_0x28b395(0x103)]
      ),
      __metadata(a343_0x28b395(0x10e), Company_1['default'])
    ],
    Prompt[a343_0x28b395(0x107)],
    'company',
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1['CreatedAt'],
      __metadata(a343_0x28b395(0x10e), Date)
    ],
    Prompt[a343_0x28b395(0x107)],
    a343_0x28b395(0x108),
    void 0x0
  ),
  __decorate(
    [
      sequelize_typescript_1[a343_0x28b395(0xfb)],
      __metadata('design:type', Date)
    ],
    Prompt[a343_0x28b395(0x107)],
    a343_0x28b395(0x104),
    void 0x0
  ),
  (Prompt = __decorate([sequelize_typescript_1[a343_0x28b395(0x10b)]], Prompt)),
  (exports[a343_0x28b395(0x103)] = Prompt);
