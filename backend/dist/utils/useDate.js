'use strict';
const a674_0x4b9c1f = a674_0x1e1a;
(function (_0x58e019, _0x2bbbec) {
  const _0x11f7d6 = a674_0x1e1a,
    _0x5d6d56 = _0x58e019();
  while (!![]) {
    try {
      const _0x104f58 =
        parseInt(_0x11f7d6(0xed)) / 0x1 +
        -parseInt(_0x11f7d6(0xf3)) / 0x2 +
        (-parseInt(_0x11f7d6(0xef)) / 0x3) * (parseInt(_0x11f7d6(0xf0)) / 0x4) +
        (parseInt(_0x11f7d6(0xf5)) / 0x5) * (-parseInt(_0x11f7d6(0xf2)) / 0x6) +
        (parseInt(_0x11f7d6(0xee)) / 0x7) * (parseInt(_0x11f7d6(0xec)) / 0x8) +
        -parseInt(_0x11f7d6(0xe5)) / 0x9 +
        (-parseInt(_0x11f7d6(0xe6)) / 0xa) * (-parseInt(_0x11f7d6(0xe9)) / 0xb);
      if (_0x104f58 === _0x2bbbec) break;
      else _0x5d6d56['push'](_0x5d6d56['shift']());
    } catch (_0x7fef53) {
      _0x5d6d56['push'](_0x5d6d56['shift']());
    }
  }
})(a674_0x2d09, 0x4e0fc);
function a674_0x1e1a(_0xe3f96d, _0x42b857) {
  const _0x2d0966 = a674_0x2d09();
  return (
    (a674_0x1e1a = function (_0x1e1ac6, _0x584987) {
      _0x1e1ac6 = _0x1e1ac6 - 0xe3;
      let _0x7f9214 = _0x2d0966[_0x1e1ac6];
      return _0x7f9214;
    }),
    a674_0x1e1a(_0xe3f96d, _0x42b857)
  );
}
var __importDefault =
  (this && this[a674_0x4b9c1f(0xe3)]) ||
  function (_0x49d2e7) {
    return _0x49d2e7 && _0x49d2e7['__esModule']
      ? _0x49d2e7
      : { default: _0x49d2e7 };
  };
function a674_0x2d09() {
  const _0x590f90 = [
    'moment',
    'useDate',
    '8hhitNk',
    '335996DMLtPA',
    '1483909YXXDGQ',
    '762nWzjmS',
    '628hlGGVh',
    'isValid',
    '126QEBTFp',
    '989040idvPAa',
    'defineProperty',
    '76415OnhWuI',
    '__esModule',
    '__importDefault',
    'format',
    '3531609wpgmXX',
    '3398330qqpISC',
    'default',
    'DD/MM/YYYY',
    '33tGOlOj'
  ];
  a674_0x2d09 = function () {
    return _0x590f90;
  };
  return a674_0x2d09();
}
Object[a674_0x4b9c1f(0xf4)](exports, a674_0x4b9c1f(0xf6), { value: !![] }),
  (exports[a674_0x4b9c1f(0xeb)] = void 0x0);
const moment_1 = __importDefault(require(a674_0x4b9c1f(0xea)));
function useDate() {
  function _0x46f0c7(_0x375358) {
    const _0x1f7238 = a674_0x1e1a;
    if ((0x0, moment_1[_0x1f7238(0xe7)])(_0x375358)[_0x1f7238(0xf1)]())
      return (0x0, moment_1[_0x1f7238(0xe7)])(_0x375358)['format'](
        _0x1f7238(0xe8)
      );
    return _0x375358;
  }
  function _0x3399f6(_0x12deae) {
    const _0x3dd7f3 = a674_0x1e1a;
    if ((0x0, moment_1[_0x3dd7f3(0xe7)])(_0x12deae)['isValid']())
      return (0x0, moment_1[_0x3dd7f3(0xe7)])(_0x12deae)[_0x3dd7f3(0xe4)](
        'DD/MM/YYYY\x20HH:mm'
      );
    return _0x12deae;
  }
  function _0xf40ac0(_0x591cf2) {
    const _0x408dbc = a674_0x1e1a;
    if (
      (0x0, moment_1[_0x408dbc(0xe7)])(_0x591cf2, 'DD/MM/YYYY')[
        _0x408dbc(0xf1)
      ]()
    )
      return (0x0, moment_1['default'])(_0x591cf2)[_0x408dbc(0xe4)](
        'YYYY-MM-DD\x20HH:mm:ss'
      );
    return _0x591cf2;
  }
  function _0x4ad615(_0x5396e7) {
    let _0x320686 = new Date(),
      _0x2aa55f = new Date(_0x5396e7),
      _0x39a045 = _0x2aa55f['getTime']() - _0x320686['getTime'](),
      _0x4fe778 = Math['ceil'](_0x39a045 / (0x3e8 * 0x3c * 0x3c * 0x18));
    return _0x4fe778 === -0x0 && (_0x4fe778 = 0x0), _0x4fe778;
  }
  return {
    dateToClient: _0x46f0c7,
    datetimeToClient: _0x3399f6,
    dateToDatabase: _0xf40ac0,
    returnDays: _0x4ad615
  };
}
exports[a674_0x4b9c1f(0xeb)] = useDate;
