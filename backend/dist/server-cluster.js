'use strict';
const a406_0xdbf9f6 = a406_0x235c;
function a406_0x235c(_0x98897b, _0x2ec864) {
  const _0x36319d = a406_0x3631();
  return (
    (a406_0x235c = function (_0x235c7a, _0x273acc) {
      _0x235c7a = _0x235c7a - 0x107;
      let _0x4443a9 = _0x36319d[_0x235c7a];
      return _0x4443a9;
    }),
    a406_0x235c(_0x98897b, _0x2ec864)
  );
}
(function (_0x129d56, _0x535d7) {
  const _0x480843 = a406_0x235c,
    _0x24bf41 = _0x129d56();
  while (!![]) {
    try {
      const _0x2ce40c =
        (parseInt(_0x480843(0x12a)) / 0x1) *
          (-parseInt(_0x480843(0x125)) / 0x2) +
        -parseInt(_0x480843(0x123)) / 0x3 +
        parseInt(_0x480843(0x11b)) / 0x4 +
        -parseInt(_0x480843(0x119)) / 0x5 +
        -parseInt(_0x480843(0x10d)) / 0x6 +
        (-parseInt(_0x480843(0x12f)) / 0x7) *
          (-parseInt(_0x480843(0x124)) / 0x8) +
        parseInt(_0x480843(0x126)) / 0x9;
      if (_0x2ce40c === _0x535d7) break;
      else _0x24bf41['push'](_0x24bf41['shift']());
    } catch (_0x484e09) {
      _0x24bf41['push'](_0x24bf41['shift']());
    }
  }
})(a406_0x3631, 0x27010);
var __importDefault =
  (this && this[a406_0xdbf9f6(0x130)]) ||
  function (_0x21815c) {
    const _0x12d707 = a406_0xdbf9f6;
    return _0x21815c && _0x21815c[_0x12d707(0x11c)]
      ? _0x21815c
      : { default: _0x21815c };
  };
Object[a406_0xdbf9f6(0x10f)](exports, a406_0xdbf9f6(0x11c), { value: !![] });
const http_graceful_shutdown_1 = __importDefault(require(a406_0xdbf9f6(0x11d))),
  socket_1 = require('./libs/socket'),
  logger_1 = require(a406_0xdbf9f6(0x132)),
  StartAllWhatsAppsSessions_1 = require(a406_0xdbf9f6(0x118)),
  Company_1 = __importDefault(require(a406_0xdbf9f6(0x116))),
  queues_1 = require(a406_0xdbf9f6(0x128)),
  express = require(a406_0xdbf9f6(0x136)),
  os = require('os'),
  cluster = require(a406_0xdbf9f6(0x135)),
  PORT = process[a406_0xdbf9f6(0x117)][a406_0xdbf9f6(0x112)] || 0xfa0,
  clusterWorkerSize = os[a406_0xdbf9f6(0x10a)]()[a406_0xdbf9f6(0x121)];
console['log'](a406_0xdbf9f6(0x113), clusterWorkerSize);
if (clusterWorkerSize > 0x1) {
  if (cluster[a406_0xdbf9f6(0x107)]) {
    for (let i = 0x0; i < clusterWorkerSize; i++) {
      cluster[a406_0xdbf9f6(0x114)]();
    }
    cluster['on'](a406_0xdbf9f6(0x10b), function (_0x1f1b4c) {
      const _0x3f03cb = a406_0xdbf9f6;
      console[_0x3f03cb(0x12d)](
        'Worker',
        _0x1f1b4c['id'],
        '\x20has\x20exitted.'
      );
    });
  } else {
    const app = express(),
      server = app[a406_0xdbf9f6(0x122)](
        process[a406_0xdbf9f6(0x117)]['PORT'],
        async () => {
          const _0x18bb99 = a406_0xdbf9f6,
            _0x121230 = await Company_1['default']['findAll'](),
            _0xb52bbb = [];
          _0x121230[_0x18bb99(0x127)](async _0x420d4b => {
            const _0x8fc4e0 = _0x18bb99,
              _0x8ead5b = (0x0, StartAllWhatsAppsSessions_1[_0x8fc4e0(0x134)])(
                _0x420d4b['id']
              );
            _0xb52bbb[_0x8fc4e0(0x111)](_0x8ead5b);
          }),
            Promise['all'](_0xb52bbb)[_0x18bb99(0x131)](async () => {
              const _0x106fc7 = _0x18bb99;
              await (0x0, queues_1[_0x106fc7(0x137)])();
            }),
            logger_1[_0x18bb99(0x129)][_0x18bb99(0x108)](
              _0x18bb99(0x11a) +
                process[_0x18bb99(0x117)][_0x18bb99(0x112)] +
                _0x18bb99(0x110) +
                process[_0x18bb99(0x120)]
            );
        }
      );
    process['on'](a406_0xdbf9f6(0x10e), _0x446b91 => {
      const _0x130a1d = a406_0xdbf9f6;
      console[_0x130a1d(0x12c)](
        new Date()['toUTCString']() + _0x130a1d(0x11e),
        _0x446b91[_0x130a1d(0x115)]
      ),
        console[_0x130a1d(0x12c)](_0x446b91[_0x130a1d(0x133)]),
        process[_0x130a1d(0x10b)](0x1);
    }),
      process['on'](a406_0xdbf9f6(0x11f), (_0x204939, _0x41f9e1) => {
        const _0x11e7a7 = a406_0xdbf9f6;
        console[_0x11e7a7(0x12c)](
          new Date()[_0x11e7a7(0x10c)]() + _0x11e7a7(0x12b),
          _0x204939,
          _0x41f9e1
        ),
          process[_0x11e7a7(0x10b)](0x1);
      }),
      (0x0, socket_1[a406_0xdbf9f6(0x12e)])(server),
      (0x0, http_graceful_shutdown_1[a406_0xdbf9f6(0x109)])(server);
  }
} else {
  const app = express();
  app[a406_0xdbf9f6(0x122)](PORT, function () {
    console['log'](
      'Express\x20server\x20listening\x20on\x20port\x20' +
        PORT +
        '\x20with\x20the\x20single\x20worker\x20' +
        process['pid']
    );
  });
}
function a406_0x3631() {
  const _0x1558e3 = [
    'push',
    'PORT',
    'clusterWorkerSize',
    'fork',
    'message',
    './models/Company',
    'env',
    './services/WbotServices/StartAllWhatsAppsSessions',
    '1194335xmxAps',
    'Server\x20started\x20on\x20port:\x20',
    '108724wugadV',
    '__esModule',
    'http-graceful-shutdown',
    '\x20uncaughtException:',
    'unhandledRejection',
    'pid',
    'length',
    'listen',
    '578562ksdExE',
    '511080PgXJPF',
    '1054LBPabu',
    '8189415OwgxTI',
    'map',
    './queues',
    'logger',
    '303jggIgF',
    '\x20unhandledRejection:',
    'error',
    'log',
    'initIO',
    '7TmUxaY',
    '__importDefault',
    'then',
    './utils/logger',
    'stack',
    'StartAllWhatsAppsSessions',
    'cluster',
    'express',
    'startQueueProcess',
    'isMaster',
    'info',
    'default',
    'cpus',
    'exit',
    'toUTCString',
    '1499034KFDbhs',
    'uncaughtException',
    'defineProperty',
    '\x20and\x20worker\x20'
  ];
  a406_0x3631 = function () {
    return _0x1558e3;
  };
  return a406_0x3631();
}
