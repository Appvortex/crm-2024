'use strict';
function a400_0x5c96() {
  var _0x3a3f28 = [
    'configurable',
    '27dMjVkT',
    '__importStar',
    '__createBinding',
    '5pdBQQg',
    '279804OVjByz',
    'express',
    '89772mTMPNj',
    'writable',
    'getOwnPropertyDescriptor',
    '__esModule',
    'remove',
    '3222835ugRNkA',
    '3747336sFmKMJ',
    'call',
    'hasOwnProperty',
    'default',
    '3130419hDZlNM',
    '__importDefault',
    'Router',
    'delete',
    'create',
    'store',
    '/ticket-tags/:ticketId',
    '../controllers/TicketTagController',
    '4803184YGVabc',
    'get',
    '__setModuleDefault',
    'defineProperty',
    '32628YqPmRe'
  ];
  a400_0x5c96 = function () {
    return _0x3a3f28;
  };
  return a400_0x5c96();
}
var a400_0x108db5 = a400_0x2de7;
function a400_0x2de7(_0x24b6ff, _0xb4f217) {
  var _0x5c962a = a400_0x5c96();
  return (
    (a400_0x2de7 = function (_0x2de70e, _0x23bcf3) {
      _0x2de70e = _0x2de70e - 0x100;
      var _0x46de62 = _0x5c962a[_0x2de70e];
      return _0x46de62;
    }),
    a400_0x2de7(_0x24b6ff, _0xb4f217)
  );
}
(function (_0x42380f, _0x4191d7) {
  var _0x342364 = a400_0x2de7,
    _0x382a9c = _0x42380f();
  while (!![]) {
    try {
      var _0x5b0a4b =
        parseInt(_0x342364(0x107)) / 0x1 +
        -parseInt(_0x342364(0x101)) / 0x2 +
        -parseInt(_0x342364(0x113)) / 0x3 +
        -parseInt(_0x342364(0x10f)) / 0x4 +
        (parseInt(_0x342364(0x106)) / 0x5) *
          (-parseInt(_0x342364(0x109)) / 0x6) +
        parseInt(_0x342364(0x10e)) / 0x7 +
        (parseInt(_0x342364(0x11b)) / 0x8) * (parseInt(_0x342364(0x103)) / 0x9);
      if (_0x5b0a4b === _0x4191d7) break;
      else _0x382a9c['push'](_0x382a9c['shift']());
    } catch (_0x422ddc) {
      _0x382a9c['push'](_0x382a9c['shift']());
    }
  }
})(a400_0x5c96, 0x8159c);
var __createBinding =
    (this && this[a400_0x108db5(0x105)]) ||
    (Object[a400_0x108db5(0x117)]
      ? function (_0xf98006, _0x39e807, _0x387f1c, _0x7f764a) {
          var _0x3f88f1 = a400_0x108db5;
          if (_0x7f764a === undefined) _0x7f764a = _0x387f1c;
          var _0x55d87e = Object[_0x3f88f1(0x10b)](_0x39e807, _0x387f1c);
          (!_0x55d87e ||
            (_0x3f88f1(0x11c) in _0x55d87e
              ? !_0x39e807[_0x3f88f1(0x10c)]
              : _0x55d87e[_0x3f88f1(0x10a)] || _0x55d87e[_0x3f88f1(0x102)])) &&
            (_0x55d87e = {
              enumerable: !![],
              get: function () {
                return _0x39e807[_0x387f1c];
              }
            }),
            Object[_0x3f88f1(0x100)](_0xf98006, _0x7f764a, _0x55d87e);
        }
      : function (_0x1aab34, _0xb04860, _0x1bd259, _0x1d46ed) {
          if (_0x1d46ed === undefined) _0x1d46ed = _0x1bd259;
          _0x1aab34[_0x1d46ed] = _0xb04860[_0x1bd259];
        }),
  __setModuleDefault =
    (this && this[a400_0x108db5(0x11d)]) ||
    (Object[a400_0x108db5(0x117)]
      ? function (_0x4e3802, _0x4fc510) {
          var _0x46538e = a400_0x108db5;
          Object[_0x46538e(0x100)](_0x4e3802, _0x46538e(0x112), {
            enumerable: !![],
            value: _0x4fc510
          });
        }
      : function (_0x337e29, _0x38f725) {
          _0x337e29['default'] = _0x38f725;
        }),
  __importStar =
    (this && this[a400_0x108db5(0x104)]) ||
    function (_0x2b806f) {
      var _0x2c5998 = a400_0x108db5;
      if (_0x2b806f && _0x2b806f[_0x2c5998(0x10c)]) return _0x2b806f;
      var _0x2b15d3 = {};
      if (_0x2b806f != null) {
        for (var _0x41c375 in _0x2b806f)
          if (
            _0x41c375 !== 'default' &&
            Object['prototype'][_0x2c5998(0x111)][_0x2c5998(0x110)](
              _0x2b806f,
              _0x41c375
            )
          )
            __createBinding(_0x2b15d3, _0x2b806f, _0x41c375);
      }
      return __setModuleDefault(_0x2b15d3, _0x2b806f), _0x2b15d3;
    },
  __importDefault =
    (this && this[a400_0x108db5(0x114)]) ||
    function (_0x315aa8) {
      return _0x315aa8 && _0x315aa8['__esModule']
        ? _0x315aa8
        : { default: _0x315aa8 };
    };
Object[a400_0x108db5(0x100)](exports, a400_0x108db5(0x10c), { value: !![] });
const express_1 = __importDefault(require(a400_0x108db5(0x108))),
  isAuth_1 = __importDefault(require('../middleware/isAuth')),
  TicketTagController = __importStar(require(a400_0x108db5(0x11a))),
  ticketTagRoutes = express_1[a400_0x108db5(0x112)][a400_0x108db5(0x115)]();
ticketTagRoutes['put'](
  '/ticket-tags/:ticketId/:tagId',
  isAuth_1[a400_0x108db5(0x112)],
  TicketTagController[a400_0x108db5(0x118)]
),
  ticketTagRoutes[a400_0x108db5(0x116)](
    a400_0x108db5(0x119),
    isAuth_1['default'],
    TicketTagController[a400_0x108db5(0x10d)]
  ),
  (exports[a400_0x108db5(0x112)] = ticketTagRoutes);
