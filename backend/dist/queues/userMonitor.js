'use strict';
const a363_0x51907a = a363_0x2169;
(function (_0x3fa01f, _0x17cafb) {
  const _0x4f11f1 = a363_0x2169,
    _0x11e0a9 = _0x3fa01f();
  while (!![]) {
    try {
      const _0x160e88 =
        (-parseInt(_0x4f11f1(0x18a)) / 0x1) *
          (-parseInt(_0x4f11f1(0x16f)) / 0x2) +
        (-parseInt(_0x4f11f1(0x181)) / 0x3) *
          (parseInt(_0x4f11f1(0x197)) / 0x4) +
        (parseInt(_0x4f11f1(0x19e)) / 0x5) *
          (parseInt(_0x4f11f1(0x17a)) / 0x6) +
        parseInt(_0x4f11f1(0x182)) / 0x7 +
        parseInt(_0x4f11f1(0x16e)) / 0x8 +
        parseInt(_0x4f11f1(0x172)) / 0x9 +
        -parseInt(_0x4f11f1(0x171)) / 0xa;
      if (_0x160e88 === _0x17cafb) break;
      else _0x11e0a9['push'](_0x11e0a9['shift']());
    } catch (_0x1d72d2) {
      _0x11e0a9['push'](_0x11e0a9['shift']());
    }
  }
})(a363_0x23f4, 0xc7e8e);
var __createBinding =
    (this && this['__createBinding']) ||
    (Object[a363_0x51907a(0x188)]
      ? function (_0x2aac34, _0x4135d9, _0x267fb1, _0x412fbd) {
          const _0x29faea = a363_0x51907a;
          if (_0x412fbd === undefined) _0x412fbd = _0x267fb1;
          var _0x472e9d = Object['getOwnPropertyDescriptor'](
            _0x4135d9,
            _0x267fb1
          );
          (!_0x472e9d ||
            ('get' in _0x472e9d
              ? !_0x4135d9[_0x29faea(0x176)]
              : _0x472e9d[_0x29faea(0x18b)] || _0x472e9d['configurable'])) &&
            (_0x472e9d = {
              enumerable: !![],
              get: function () {
                return _0x4135d9[_0x267fb1];
              }
            }),
            Object[_0x29faea(0x19c)](_0x2aac34, _0x412fbd, _0x472e9d);
        }
      : function (_0x47a6d8, _0x454b4b, _0x52280e, _0x2e59e5) {
          if (_0x2e59e5 === undefined) _0x2e59e5 = _0x52280e;
          _0x47a6d8[_0x2e59e5] = _0x454b4b[_0x52280e];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object[a363_0x51907a(0x188)]
      ? function (_0x2d9e71, _0x4dcf77) {
          const _0x330874 = a363_0x51907a;
          Object[_0x330874(0x19c)](_0x2d9e71, 'default', {
            enumerable: !![],
            value: _0x4dcf77
          });
        }
      : function (_0x4698f6, _0x32c92a) {
          const _0x9af93 = a363_0x51907a;
          _0x4698f6[_0x9af93(0x173)] = _0x32c92a;
        }),
  __importStar =
    (this && this[a363_0x51907a(0x19a)]) ||
    function (_0x1803ff) {
      const _0x5be28a = a363_0x51907a;
      if (_0x1803ff && _0x1803ff['__esModule']) return _0x1803ff;
      var _0x4d5e3b = {};
      if (_0x1803ff != null) {
        for (var _0x13f76 in _0x1803ff)
          if (
            _0x13f76 !== _0x5be28a(0x173) &&
            Object[_0x5be28a(0x193)][_0x5be28a(0x196)][_0x5be28a(0x195)](
              _0x1803ff,
              _0x13f76
            )
          )
            __createBinding(_0x4d5e3b, _0x1803ff, _0x13f76);
      }
      return __setModuleDefault(_0x4d5e3b, _0x1803ff), _0x4d5e3b;
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0x1fd587) {
      const _0x26c8f0 = a363_0x51907a;
      return _0x1fd587 && _0x1fd587[_0x26c8f0(0x176)]
        ? _0x1fd587
        : { default: _0x1fd587 };
    };
Object[a363_0x51907a(0x19c)](exports, a363_0x51907a(0x176), { value: !![] }),
  (exports[a363_0x51907a(0x187)] = exports[a363_0x51907a(0x17c)] = void 0x0);
const bull_1 = __importDefault(require(a363_0x51907a(0x17d))),
  Sentry = __importStar(require(a363_0x51907a(0x190))),
  sequelize_1 = require(a363_0x51907a(0x170)),
  lodash_1 = require(a363_0x51907a(0x189)),
  logger_1 = require(a363_0x51907a(0x191)),
  database_1 = __importDefault(require('../database')),
  User_1 = __importDefault(require(a363_0x51907a(0x17b))),
  connection = process['env'][a363_0x51907a(0x183)] || '';
exports['userMonitor'] = new bull_1[a363_0x51907a(0x173)](
  a363_0x51907a(0x198),
  connection
);
async function handleLoginStatus(_0x2be863) {
  const _0x5c0ced = a363_0x51907a,
    _0xdbbb7a = await database_1['default']['query'](_0x5c0ced(0x1a0), {
      type: sequelize_1[_0x5c0ced(0x194)][_0x5c0ced(0x184)]
    });
  for (let _0x2c6d41 of _0xdbbb7a) {
    try {
      const _0xf5c05a = await User_1[_0x5c0ced(0x173)][_0x5c0ced(0x19d)](
        _0x2c6d41['id']
      );
      await _0xf5c05a[_0x5c0ced(0x199)]({ online: ![] }),
        logger_1[_0x5c0ced(0x177)][_0x5c0ced(0x19f)](
          _0x5c0ced(0x179) + _0x2c6d41['id']
        );
    } catch (_0x19019f) {
      Sentry[_0x5c0ced(0x180)](_0x19019f);
    }
  }
}
async function handleUserConnection(_0x18e2b8) {
  const _0x15e71f = a363_0x51907a;
  try {
    const { id: _0x4418dd } = _0x18e2b8[_0x15e71f(0x18c)];
    if (
      !(0x0, lodash_1[_0x15e71f(0x186)])(_0x4418dd) &&
      _0x4418dd !== _0x15e71f(0x17f)
    ) {
      const _0x1893a3 =
        await User_1[_0x15e71f(0x173)][_0x15e71f(0x19d)](_0x4418dd);
      _0x1893a3 &&
        ((_0x1893a3[_0x15e71f(0x178)] = !![]),
        await _0x1893a3[_0x15e71f(0x18e)]());
    }
  } catch (_0x3b0ecd) {
    Sentry[_0x15e71f(0x180)](_0x3b0ecd);
  }
}
exports['userMonitor'][a363_0x51907a(0x174)](
  a363_0x51907a(0x18f),
  handleUserConnection
),
  exports['userMonitor'][a363_0x51907a(0x174)](
    a363_0x51907a(0x19b),
    handleLoginStatus
  );
function a363_0x2169(_0xe2b99a, _0xa52cc7) {
  const _0x23f4fb = a363_0x23f4();
  return (
    (a363_0x2169 = function (_0x2169b8, _0x14514b) {
      _0x2169b8 = _0x2169b8 - 0x16e;
      let _0x3ecb50 = _0x23f4fb[_0x2169b8];
      return _0x3ecb50;
    }),
    a363_0x2169(_0xe2b99a, _0xa52cc7)
  );
}
function a363_0x23f4() {
  const _0x53dc4f = [
    'add',
    'isNil',
    'initUserMonitorQueues',
    'create',
    'lodash',
    '13961VoPYSW',
    'writable',
    'data',
    'key',
    'save',
    'UserConnection',
    '@sentry/node',
    '../utils/logger',
    'removeRepeatableByKey',
    'prototype',
    'QueryTypes',
    'call',
    'hasOwnProperty',
    '204YgXnch',
    'UserMonitor',
    'update',
    '__importStar',
    'VerifyLoginStatus',
    'defineProperty',
    'findByPk',
    '2740nopybt',
    'info',
    'select\x20id\x20from\x20\x22Users\x22\x20where\x20\x22updatedAt\x22\x20<\x20now()\x20-\x20\x275\x20minutes\x27::interval\x20and\x20online\x20=\x20true',
    '5106224BrJoWM',
    '32GJfiGe',
    'sequelize',
    '14761490CFFukR',
    '6453801TdIzkj',
    'default',
    'process',
    'getRepeatableJobs',
    '__esModule',
    'logger',
    'online',
    'Usuario\x20passado\x20para\x20offline:\x20',
    '14928YdFxKS',
    '../models/User',
    'userMonitor',
    'bull',
    '*\x20*\x20*\x20*\x20*',
    'null',
    'captureException',
    '44913PPGPSF',
    '814331eETwZG',
    'REDIS_URI',
    'SELECT'
  ];
  a363_0x23f4 = function () {
    return _0x53dc4f;
  };
  return a363_0x23f4();
}
async function initUserMonitorQueues() {
  const _0x426880 = a363_0x51907a,
    _0x6b6c3e = await exports[_0x426880(0x17c)][_0x426880(0x175)]();
  for (let _0x56b88d of _0x6b6c3e) {
    await exports[_0x426880(0x17c)][_0x426880(0x192)](
      _0x56b88d[_0x426880(0x18d)]
    );
  }
  exports[_0x426880(0x17c)][_0x426880(0x185)](
    _0x426880(0x19b),
    {},
    {
      repeat: { cron: _0x426880(0x17e), key: 'verify-loginstatus' },
      removeOnComplete: { age: 0x3c * 0x3c, count: 0xa },
      removeOnFail: { age: 0x3c * 0x3c, count: 0xa }
    }
  ),
    logger_1['logger'][_0x426880(0x19f)](
      'Queue:\x20monitoramento\x20de\x20status\x20de\x20usuário\x20inicializado'
    );
}
exports[a363_0x51907a(0x187)] = initUserMonitorQueues;
