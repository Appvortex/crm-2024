'use strict';
function a306_0x397f(_0x255f42, _0x40178e) {
  const _0x67d8e1 = a306_0x67d8();
  return (
    (a306_0x397f = function (_0x397f95, _0x2f46fb) {
      _0x397f95 = _0x397f95 - 0xdf;
      let _0x2af2d3 = _0x67d8e1[_0x397f95];
      return _0x2af2d3;
    }),
    a306_0x397f(_0x255f42, _0x40178e)
  );
}
const a306_0x1d66db = a306_0x397f;
(function (_0x52622b, _0x133766) {
  const _0x6ab7e1 = a306_0x397f,
    _0xb997de = _0x52622b();
  while (!![]) {
    try {
      const _0x27164e =
        -parseInt(_0x6ab7e1(0xe8)) / 0x1 +
        parseInt(_0x6ab7e1(0xfb)) / 0x2 +
        -parseInt(_0x6ab7e1(0xfa)) / 0x3 +
        parseInt(_0x6ab7e1(0xf9)) / 0x4 +
        parseInt(_0x6ab7e1(0xeb)) / 0x5 +
        (parseInt(_0x6ab7e1(0xee)) / 0x6) * (parseInt(_0x6ab7e1(0xf6)) / 0x7) +
        -parseInt(_0x6ab7e1(0xe1)) / 0x8;
      if (_0x27164e === _0x133766) break;
      else _0xb997de['push'](_0xb997de['shift']());
    } catch (_0x5640e1) {
      _0xb997de['push'](_0xb997de['shift']());
    }
  }
})(a306_0x67d8, 0x22850);
Object[a306_0x1d66db(0xf7)](exports, a306_0x1d66db(0xe4), { value: !![] });
function a306_0x67d8() {
  const _0x2f527e = [
    'sessions',
    '144585PBbXNi',
    'update',
    'replacer',
    '466940npUnYO',
    'preKeys',
    'assign',
    '6sPnxXP',
    'appStateVersions',
    'parse',
    'senderKeys',
    'reduce',
    'senderKeyMemory',
    'proto',
    'app-state-sync-key',
    '1598716cOtwwo',
    'defineProperty',
    'appStateSyncKeys',
    '885976FDQzNg',
    '350961bIdkOG',
    '306232oJPIPT',
    '@whiskeysockets/baileys',
    'session',
    'default',
    'initAuthCreds',
    '2347376CbPQvI',
    'reviver',
    'Message',
    '__esModule',
    'BufferJSON',
    'keys'
  ];
  a306_0x67d8 = function () {
    return _0x2f527e;
  };
  return a306_0x67d8();
}
const baileys_1 = require(a306_0x1d66db(0xfc)),
  KEY_MAP = {
    'pre-key': a306_0x1d66db(0xec),
    session: a306_0x1d66db(0xe7),
    'sender-key': a306_0x1d66db(0xf1),
    'app-state-sync-key': a306_0x1d66db(0xf8),
    'app-state-sync-version': a306_0x1d66db(0xef),
    'sender-key-memory': a306_0x1d66db(0xf3)
  },
  authState = async _0x476a2b => {
    const _0x369a93 = a306_0x1d66db;
    let _0x347deb,
      _0x24f680 = {};
    const _0x521d1b = async () => {
      const _0x4b940b = a306_0x397f;
      try {
        await _0x476a2b[_0x4b940b(0xe9)]({
          session: JSON['stringify'](
            { creds: _0x347deb, keys: _0x24f680 },
            baileys_1[_0x4b940b(0xe5)][_0x4b940b(0xea)],
            0x0
          )
        });
      } catch (_0x21c702) {
        console['log'](_0x21c702);
      }
    };
    if (_0x476a2b['session'] && _0x476a2b[_0x369a93(0xfd)] !== null) {
      const _0x730307 = JSON[_0x369a93(0xf0)](
        _0x476a2b[_0x369a93(0xfd)],
        baileys_1[_0x369a93(0xe5)][_0x369a93(0xe2)]
      );
      (_0x347deb = _0x730307['creds']),
        (_0x24f680 = _0x730307[_0x369a93(0xe6)]);
    } else (_0x347deb = (0x0, baileys_1[_0x369a93(0xe0)])()), (_0x24f680 = {});
    return {
      state: {
        creds: _0x347deb,
        keys: {
          get: (_0x4704b0, _0x36cfc2) => {
            const _0x901e90 = _0x369a93,
              _0x210a3b = KEY_MAP[_0x4704b0];
            return _0x36cfc2[_0x901e90(0xf2)]((_0x36599a, _0x8dc49d) => {
              const _0xd3cadd = _0x901e90;
              let _0x27a1a0 = _0x24f680[_0x210a3b]?.[_0x8dc49d];
              return (
                _0x27a1a0 &&
                  (_0x4704b0 === _0xd3cadd(0xf5) &&
                    (_0x27a1a0 =
                      baileys_1[_0xd3cadd(0xf4)][_0xd3cadd(0xe3)][
                        'AppStateSyncKeyData'
                      ]['fromObject'](_0x27a1a0)),
                  (_0x36599a[_0x8dc49d] = _0x27a1a0)),
                _0x36599a
              );
            }, {});
          },
          set: _0x1d77a7 => {
            const _0x549ea8 = _0x369a93;
            for (const _0xd8487b in _0x1d77a7) {
              const _0x537f0f = KEY_MAP[_0xd8487b];
              (_0x24f680[_0x537f0f] = _0x24f680[_0x537f0f] || {}),
                Object[_0x549ea8(0xed)](
                  _0x24f680[_0x537f0f],
                  _0x1d77a7[_0xd8487b]
                );
            }
            _0x521d1b();
          }
        }
      },
      saveState: _0x521d1b
    };
  };
exports[a306_0x1d66db(0xdf)] = authState;
