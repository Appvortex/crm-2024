'use strict';
var a611_0x30ba7b = a611_0x242b;
(function (_0x4637f2, _0x3e8116) {
  var _0x5a22b8 = a611_0x242b,
    _0x12c265 = _0x4637f2();
  while (!![]) {
    try {
      var _0x13f59c =
        -parseInt(_0x5a22b8(0x20a)) / 0x1 +
        -parseInt(_0x5a22b8(0x1fb)) / 0x2 +
        (parseInt(_0x5a22b8(0x1f6)) / 0x3) *
          (parseInt(_0x5a22b8(0x202)) / 0x4) +
        (-parseInt(_0x5a22b8(0x1fe)) / 0x5) *
          (-parseInt(_0x5a22b8(0x1fd)) / 0x6) +
        (parseInt(_0x5a22b8(0x1ee)) / 0x7) *
          (-parseInt(_0x5a22b8(0x209)) / 0x8) +
        (-parseInt(_0x5a22b8(0x200)) / 0x9) *
          (parseInt(_0x5a22b8(0x1f1)) / 0xa) +
        (-parseInt(_0x5a22b8(0x1fa)) / 0xb) *
          (-parseInt(_0x5a22b8(0x1f7)) / 0xc);
      if (_0x13f59c === _0x3e8116) break;
      else _0x12c265['push'](_0x12c265['shift']());
    } catch (_0x359bb3) {
      _0x12c265['push'](_0x12c265['shift']());
    }
  }
})(a611_0x4952, 0x7f7cf);
function a611_0x4952() {
  var _0x189744 = [
    '12BHCvKS',
    'message',
    'call',
    '24428998hIMUyt',
    '1295790xIOqgp',
    'validate',
    '426774ecMmcr',
    '15KILRzt',
    'hasOwnProperty',
    '9jLBQHY',
    '__esModule',
    '2092TBOjRJ',
    'configurable',
    '__importStar',
    'string',
    'create',
    'writable',
    'update',
    '2144yUpSQI',
    '843817mXNRny',
    'min',
    'defineProperty',
    '12866FEEjIg',
    '__createBinding',
    '__importDefault',
    '1688210lXNZbm',
    'object',
    'yup',
    'shape',
    'default',
    '1383qpsZHK'
  ];
  a611_0x4952 = function () {
    return _0x189744;
  };
  return a611_0x4952();
}
var __createBinding =
    (this && this[a611_0x30ba7b(0x1ef)]) ||
    (Object[a611_0x30ba7b(0x206)]
      ? function (_0x38511a, _0x30ef60, _0x3d8700, _0x5604d9) {
          var _0x32fc92 = a611_0x30ba7b;
          if (_0x5604d9 === undefined) _0x5604d9 = _0x3d8700;
          var _0x5e55c2 = Object['getOwnPropertyDescriptor'](
            _0x30ef60,
            _0x3d8700
          );
          (!_0x5e55c2 ||
            ('get' in _0x5e55c2
              ? !_0x30ef60['__esModule']
              : _0x5e55c2[_0x32fc92(0x207)] || _0x5e55c2[_0x32fc92(0x203)])) &&
            (_0x5e55c2 = {
              enumerable: !![],
              get: function () {
                return _0x30ef60[_0x3d8700];
              }
            }),
            Object[_0x32fc92(0x20c)](_0x38511a, _0x5604d9, _0x5e55c2);
        }
      : function (_0x4032c5, _0x40ca07, _0x4d0341, _0x5b84f8) {
          if (_0x5b84f8 === undefined) _0x5b84f8 = _0x4d0341;
          _0x4032c5[_0x5b84f8] = _0x40ca07[_0x4d0341];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object['create']
      ? function (_0x122831, _0xddf37) {
          var _0x38a219 = a611_0x30ba7b;
          Object[_0x38a219(0x20c)](_0x122831, 'default', {
            enumerable: !![],
            value: _0xddf37
          });
        }
      : function (_0x15719d, _0x9f69b) {
          var _0x53188e = a611_0x30ba7b;
          _0x15719d[_0x53188e(0x1f5)] = _0x9f69b;
        }),
  __importStar =
    (this && this[a611_0x30ba7b(0x204)]) ||
    function (_0x2e32e6) {
      var _0x3e3ccd = a611_0x30ba7b;
      if (_0x2e32e6 && _0x2e32e6[_0x3e3ccd(0x201)]) return _0x2e32e6;
      var _0x3153b1 = {};
      if (_0x2e32e6 != null) {
        for (var _0x45a029 in _0x2e32e6)
          if (
            _0x45a029 !== _0x3e3ccd(0x1f5) &&
            Object['prototype'][_0x3e3ccd(0x1ff)][_0x3e3ccd(0x1f9)](
              _0x2e32e6,
              _0x45a029
            )
          )
            __createBinding(_0x3153b1, _0x2e32e6, _0x45a029);
      }
      return __setModuleDefault(_0x3153b1, _0x2e32e6), _0x3153b1;
    },
  __importDefault =
    (this && this[a611_0x30ba7b(0x1f0)]) ||
    function (_0x327b2c) {
      var _0x1c48d5 = a611_0x30ba7b;
      return _0x327b2c && _0x327b2c[_0x1c48d5(0x201)]
        ? _0x327b2c
        : { default: _0x327b2c };
    };
Object[a611_0x30ba7b(0x20c)](exports, '__esModule', { value: !![] });
const Yup = __importStar(require(a611_0x30ba7b(0x1f3))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  ShowService_1 = __importDefault(require('./ShowService')),
  UpdateUserService = async ({ tagData: _0xdc637f, id: _0x230252 }) => {
    var _0x43c27d = a611_0x30ba7b;
    const _0x46c87e = await (0x0, ShowService_1[_0x43c27d(0x1f5)])(_0x230252),
      _0x54383b = Yup[_0x43c27d(0x1f2)]()[_0x43c27d(0x1f4)]({
        name: Yup[_0x43c27d(0x205)]()[_0x43c27d(0x20b)](0x3)
      }),
      { name: _0x999a76, color: _0x21b079, kanban: _0x10511a } = _0xdc637f;
    try {
      await _0x54383b[_0x43c27d(0x1fc)]({ name: _0x999a76 });
    } catch (_0x20e214) {
      throw new AppError_1['default'](_0x20e214[_0x43c27d(0x1f8)]);
    }
    return (
      await _0x46c87e[_0x43c27d(0x208)]({
        name: _0x999a76,
        color: _0x21b079,
        kanban: _0x10511a
      }),
      await _0x46c87e['reload'](),
      _0x46c87e
    );
  };
function a611_0x242b(_0x536708, _0x5b4383) {
  var _0x495280 = a611_0x4952();
  return (
    (a611_0x242b = function (_0x242bae, _0x1f4d74) {
      _0x242bae = _0x242bae - 0x1ee;
      var _0x53c431 = _0x495280[_0x242bae];
      return _0x53c431;
    }),
    a611_0x242b(_0x536708, _0x5b4383)
  );
}
exports[a611_0x30ba7b(0x1f5)] = UpdateUserService;
