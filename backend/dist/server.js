'use strict';
const a407_0x2d2b8d = a407_0x1016;
(function (_0x16c53b, _0x372e91) {
  const _0x343fd3 = a407_0x1016,
    _0x2ffc7a = _0x16c53b();
  while (!![]) {
    try {
      const _0x229983 =
        (parseInt(_0x343fd3(0x14e)) / 0x1) *
          (parseInt(_0x343fd3(0x141)) / 0x2) +
        (parseInt(_0x343fd3(0x147)) / 0x3) *
          (-parseInt(_0x343fd3(0x13d)) / 0x4) +
        parseInt(_0x343fd3(0x152)) / 0x5 +
        (-parseInt(_0x343fd3(0x139)) / 0x6) *
          (parseInt(_0x343fd3(0x14a)) / 0x7) +
        -parseInt(_0x343fd3(0x14d)) / 0x8 +
        parseInt(_0x343fd3(0x143)) / 0x9 +
        parseInt(_0x343fd3(0x149)) / 0xa;
      if (_0x229983 === _0x372e91) break;
      else _0x2ffc7a['push'](_0x2ffc7a['shift']());
    } catch (_0x33247d) {
      _0x2ffc7a['push'](_0x2ffc7a['shift']());
    }
  }
})(a407_0x26ff, 0xda879);
function a407_0x1016(_0x6f239e, _0x367e1a) {
  const _0x26ff96 = a407_0x26ff();
  return (
    (a407_0x1016 = function (_0x1016e1, _0x461c38) {
      _0x1016e1 = _0x1016e1 - 0x135;
      let _0x64b139 = _0x26ff96[_0x1016e1];
      return _0x64b139;
    }),
    a407_0x1016(_0x6f239e, _0x367e1a)
  );
}
var __importDefault =
  (this && this[a407_0x2d2b8d(0x140)]) ||
  function (_0x5b7eba) {
    const _0x2c3ad0 = a407_0x2d2b8d;
    return _0x5b7eba && _0x5b7eba[_0x2c3ad0(0x137)]
      ? _0x5b7eba
      : { default: _0x5b7eba };
  };
Object[a407_0x2d2b8d(0x13f)](exports, a407_0x2d2b8d(0x137), { value: !![] });
function a407_0x26ff() {
  const _0x140a69 = [
    '__importDefault',
    '15634sgSvjL',
    '\x20unhandledRejection:',
    '6079563uPcMKi',
    'exit',
    'stack',
    '\x20uncaughtException:',
    '168447IcFQxT',
    'message',
    '3483580qDtNfb',
    '567HLNHtP',
    './services/WbotServices/StartAllWhatsAppsSessions',
    'Server\x20started\x20on\x20port:\x20',
    '12218568BHRWtO',
    '211YeoQXI',
    'StartAllWhatsAppsSessions',
    'error',
    'env',
    '4846580xdQzuX',
    'info',
    './app',
    'listen',
    './libs/socket',
    './models/Company',
    'default',
    'findAll',
    'push',
    '__esModule',
    'unhandledRejection',
    '57108ArowPL',
    'PORT',
    'all',
    'toUTCString',
    '32xpGFcl',
    'logger',
    'defineProperty'
  ];
  a407_0x26ff = function () {
    return _0x140a69;
  };
  return a407_0x26ff();
}
const http_graceful_shutdown_1 = __importDefault(
    require('http-graceful-shutdown')
  ),
  app_1 = __importDefault(require(a407_0x2d2b8d(0x154))),
  socket_1 = require(a407_0x2d2b8d(0x156)),
  logger_1 = require('./utils/logger'),
  StartAllWhatsAppsSessions_1 = require(a407_0x2d2b8d(0x14b)),
  Company_1 = __importDefault(require(a407_0x2d2b8d(0x157))),
  queues_1 = require('./queues'),
  server = app_1['default'][a407_0x2d2b8d(0x155)](
    process[a407_0x2d2b8d(0x151)][a407_0x2d2b8d(0x13a)],
    async () => {
      const _0x13b7c8 = a407_0x2d2b8d,
        _0x501a01 = await Company_1[_0x13b7c8(0x158)][_0x13b7c8(0x135)](),
        _0x4cfb77 = [];
      _0x501a01['map'](async _0x5e4e03 => {
        const _0x7d5d1d = _0x13b7c8,
          _0x7c41f0 = (0x0, StartAllWhatsAppsSessions_1[_0x7d5d1d(0x14f)])(
            _0x5e4e03['id']
          );
        _0x4cfb77[_0x7d5d1d(0x136)](_0x7c41f0);
      }),
        Promise[_0x13b7c8(0x13b)](_0x4cfb77)['then'](async () => {
          await (0x0, queues_1['startQueueProcess'])();
        }),
        logger_1[_0x13b7c8(0x13e)][_0x13b7c8(0x153)](
          _0x13b7c8(0x14c) + process['env']['PORT']
        );
    }
  );
process['on']('uncaughtException', _0x1f3ac1 => {
  const _0x69e61f = a407_0x2d2b8d;
  console[_0x69e61f(0x150)](
    new Date()[_0x69e61f(0x13c)]() + _0x69e61f(0x146),
    _0x1f3ac1[_0x69e61f(0x148)]
  ),
    console[_0x69e61f(0x150)](_0x1f3ac1[_0x69e61f(0x145)]),
    process[_0x69e61f(0x144)](0x1);
}),
  process['on'](a407_0x2d2b8d(0x138), (_0x3b569d, _0x211c8c) => {
    const _0xb1d7e4 = a407_0x2d2b8d;
    console[_0xb1d7e4(0x150)](
      new Date()[_0xb1d7e4(0x13c)]() + _0xb1d7e4(0x142),
      _0x3b569d,
      _0x211c8c
    ),
      process[_0xb1d7e4(0x144)](0x1);
  }),
  (0x0, socket_1['initIO'])(server),
  (0x0, http_graceful_shutdown_1[a407_0x2d2b8d(0x158)])(server);
