'use strict';
const a307_0x50d2c8 = a307_0x4b17;
(function (_0x2ef5a7, _0x8fa3fa) {
  const _0x26282d = a307_0x4b17,
    _0x11a2e6 = _0x2ef5a7();
  while (!![]) {
    try {
      const _0x599dea =
        parseInt(_0x26282d(0xef)) / 0x1 +
        (parseInt(_0x26282d(0xf7)) / 0x2) * (-parseInt(_0x26282d(0xf3)) / 0x3) +
        (-parseInt(_0x26282d(0xf1)) / 0x4) *
          (-parseInt(_0x26282d(0xf0)) / 0x5) +
        (parseInt(_0x26282d(0xed)) / 0x6) * (parseInt(_0x26282d(0xfd)) / 0x7) +
        parseInt(_0x26282d(0xf5)) / 0x8 +
        (parseInt(_0x26282d(0x103)) / 0x9) * (parseInt(_0x26282d(0xfc)) / 0xa) +
        -parseInt(_0x26282d(0xff)) / 0xb;
      if (_0x599dea === _0x8fa3fa) break;
      else _0x11a2e6['push'](_0x11a2e6['shift']());
    } catch (_0x49778b) {
      _0x11a2e6['push'](_0x11a2e6['shift']());
    }
  }
})(a307_0xecb1, 0x9b1ee);
function a307_0xecb1() {
  const _0x498b1d = [
    'proto',
    'log',
    '@whiskeysockets/baileys',
    'fromObject',
    'push',
    'writeData\x20error',
    'get',
    'AppStateSyncKeyData',
    '../libs/cache',
    'stringify',
    'useMultiFileAuthState',
    'sessions:',
    '6oOJckF',
    'BufferJSON',
    '1077263iphVfK',
    '6865RRccLu',
    '236xPPbgK',
    'default',
    '59967GeRFyW',
    'initAuthCreds',
    '783216pLfIVy',
    'parse',
    '56tkXLeg',
    '__importDefault',
    'reviver',
    'creds',
    'Message',
    '82150zKUKRz',
    '2598771iufEkB',
    '__esModule',
    '14967194zhHpOb',
    'del',
    'replacer',
    'app-state-sync-key',
    '1017YDqPlI'
  ];
  a307_0xecb1 = function () {
    return _0x498b1d;
  };
  return a307_0xecb1();
}
var __importDefault =
  (this && this[a307_0x50d2c8(0xf8)]) ||
  function (_0x5b14b0) {
    const _0x9fec23 = a307_0x50d2c8;
    return _0x5b14b0 && _0x5b14b0[_0x9fec23(0xfe)]
      ? _0x5b14b0
      : { default: _0x5b14b0 };
  };
Object['defineProperty'](exports, a307_0x50d2c8(0xfe), { value: !![] }),
  (exports[a307_0x50d2c8(0xeb)] = void 0x0);
const baileys_1 = require(a307_0x50d2c8(0xe3)),
  baileys_2 = require('@whiskeysockets/baileys'),
  baileys_3 = require(a307_0x50d2c8(0xe3)),
  cache_1 = __importDefault(require(a307_0x50d2c8(0xe9))),
  useMultiFileAuthState = async _0x1aae38 => {
    const _0x537d0e = a307_0x50d2c8,
      _0x223cab = async (_0x2fa15c, _0x97f0db) => {
        const _0xf4eb52 = a307_0x4b17;
        try {
          await cache_1[_0xf4eb52(0xf2)]['set'](
            _0xf4eb52(0xec) + _0x1aae38['id'] + ':' + _0x97f0db,
            JSON[_0xf4eb52(0xea)](
              _0x2fa15c,
              baileys_3[_0xf4eb52(0xee)][_0xf4eb52(0x101)]
            )
          );
        } catch (_0x387292) {
          return console[_0xf4eb52(0xe2)](_0xf4eb52(0xe6), _0x387292), null;
        }
      },
      _0x39e029 = async _0x363759 => {
        const _0x478cf5 = a307_0x4b17;
        try {
          const _0x74a91a = await cache_1['default'][_0x478cf5(0xe7)](
            _0x478cf5(0xec) + _0x1aae38['id'] + ':' + _0x363759
          );
          return JSON[_0x478cf5(0xf6)](
            _0x74a91a,
            baileys_3['BufferJSON'][_0x478cf5(0xf9)]
          );
        } catch (_0x36b905) {
          return null;
        }
      },
      _0x56acc4 = async _0x233eca => {
        const _0x4456d0 = a307_0x4b17;
        try {
          await cache_1[_0x4456d0(0xf2)][_0x4456d0(0x100)](
            _0x4456d0(0xec) + _0x1aae38['id'] + ':' + _0x233eca
          );
        } catch {}
      },
      _0xf8152d =
        (await _0x39e029('creds')) || (0x0, baileys_2[_0x537d0e(0xf4)])();
    return {
      state: {
        creds: _0xf8152d,
        keys: {
          get: async (_0xbbacd7, _0x4e9a35) => {
            const _0x485c4a = {};
            return (
              await Promise['all'](
                _0x4e9a35['map'](async _0x5cabb5 => {
                  const _0x589b7b = a307_0x4b17;
                  let _0xb05d = await _0x39e029(_0xbbacd7 + '-' + _0x5cabb5);
                  _0xbbacd7 === _0x589b7b(0x102) &&
                    _0xb05d &&
                    (_0xb05d =
                      baileys_1[_0x589b7b(0x104)][_0x589b7b(0xfb)][
                        _0x589b7b(0xe8)
                      ][_0x589b7b(0xe4)](_0xb05d)),
                    (_0x485c4a[_0x5cabb5] = _0xb05d);
                })
              ),
              _0x485c4a
            );
          },
          set: async _0x50c944 => {
            const _0x31e1e6 = _0x537d0e,
              _0x358bbd = [];
            for (const _0x1ec276 in _0x50c944) {
              for (const _0x1ca1a5 in _0x50c944[_0x1ec276]) {
                const _0x5e7516 = _0x50c944[_0x1ec276][_0x1ca1a5],
                  _0x184182 = _0x1ec276 + '-' + _0x1ca1a5;
                _0x358bbd[_0x31e1e6(0xe5)](
                  _0x5e7516
                    ? _0x223cab(_0x5e7516, _0x184182)
                    : _0x56acc4(_0x184182)
                );
              }
            }
            await Promise['all'](_0x358bbd);
          }
        }
      },
      saveCreds: () => {
        const _0x1c9a22 = _0x537d0e;
        return _0x223cab(_0xf8152d, _0x1c9a22(0xfa));
      }
    };
  };
function a307_0x4b17(_0x3cec8f, _0x42aac9) {
  const _0xecb1c1 = a307_0xecb1();
  return (
    (a307_0x4b17 = function (_0x4b17be, _0x46fe35) {
      _0x4b17be = _0x4b17be - 0xe2;
      let _0x5cd87e = _0xecb1c1[_0x4b17be];
      return _0x5cd87e;
    }),
    a307_0x4b17(_0x3cec8f, _0x42aac9)
  );
}
exports[a307_0x50d2c8(0xeb)] = useMultiFileAuthState;
