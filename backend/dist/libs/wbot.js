'use strict';
const a310_0x31bac5 = a310_0x1735;
(function (_0x1e379e, _0x39d581) {
  const _0x3857ac = a310_0x1735,
    _0x4d6389 = _0x1e379e();
  while (!![]) {
    try {
      const _0x55b49b =
        parseInt(_0x3857ac(0x1c3)) / 0x1 +
        (-parseInt(_0x3857ac(0x18a)) / 0x2) *
          (-parseInt(_0x3857ac(0x1d4)) / 0x3) +
        (-parseInt(_0x3857ac(0x189)) / 0x4) *
          (parseInt(_0x3857ac(0x16c)) / 0x5) +
        parseInt(_0x3857ac(0x17b)) / 0x6 +
        (-parseInt(_0x3857ac(0x1e0)) / 0x7) *
          (-parseInt(_0x3857ac(0x19b)) / 0x8) +
        (-parseInt(_0x3857ac(0x1a5)) / 0x9) *
          (parseInt(_0x3857ac(0x1aa)) / 0xa) +
        -parseInt(_0x3857ac(0x175)) / 0xb;
      if (_0x55b49b === _0x39d581) break;
      else _0x4d6389['push'](_0x4d6389['shift']());
    } catch (_0x301c60) {
      _0x4d6389['push'](_0x4d6389['shift']());
    }
  }
})(a310_0x4726, 0xb2d4e);
var __createBinding =
    (this && this[a310_0x31bac5(0x1e4)]) ||
    (Object['create']
      ? function (_0x231ee5, _0x3a769f, _0x1ec040, _0x3a2be8) {
          const _0x49363d = a310_0x31bac5;
          if (_0x3a2be8 === undefined) _0x3a2be8 = _0x1ec040;
          var _0x4f72cf = Object[_0x49363d(0x1c9)](_0x3a769f, _0x1ec040);
          (!_0x4f72cf ||
            ('get' in _0x4f72cf
              ? !_0x3a769f['__esModule']
              : _0x4f72cf['writable'] || _0x4f72cf['configurable'])) &&
            (_0x4f72cf = {
              enumerable: !![],
              get: function () {
                return _0x3a769f[_0x1ec040];
              }
            }),
            Object[_0x49363d(0x16d)](_0x231ee5, _0x3a2be8, _0x4f72cf);
        }
      : function (_0x10e47a, _0x3a7b15, _0x19a85a, _0x2fa828) {
          if (_0x2fa828 === undefined) _0x2fa828 = _0x19a85a;
          _0x10e47a[_0x2fa828] = _0x3a7b15[_0x19a85a];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object[a310_0x31bac5(0x1a3)]
      ? function (_0x49832e, _0xf1d2ac) {
          const _0x2604b2 = a310_0x31bac5;
          Object[_0x2604b2(0x16d)](_0x49832e, _0x2604b2(0x170), {
            enumerable: !![],
            value: _0xf1d2ac
          });
        }
      : function (_0xd5d2cc, _0x516774) {
          const _0x54940e = a310_0x31bac5;
          _0xd5d2cc[_0x54940e(0x170)] = _0x516774;
        }),
  __importStar =
    (this && this[a310_0x31bac5(0x1ce)]) ||
    function (_0x510349) {
      const _0x51328d = a310_0x31bac5;
      if (_0x510349 && _0x510349[_0x51328d(0x1d6)]) return _0x510349;
      var _0xb95351 = {};
      if (_0x510349 != null) {
        for (var _0xf16f19 in _0x510349)
          if (
            _0xf16f19 !== _0x51328d(0x170) &&
            Object[_0x51328d(0x1a8)][_0x51328d(0x1b2)][_0x51328d(0x174)](
              _0x510349,
              _0xf16f19
            )
          )
            __createBinding(_0xb95351, _0x510349, _0xf16f19);
      }
      return __setModuleDefault(_0xb95351, _0x510349), _0xb95351;
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0x400c02) {
      return _0x400c02 && _0x400c02['__esModule']
        ? _0x400c02
        : { default: _0x400c02 };
    };
function a310_0x1735(_0x110e6d, _0xe5d0bc) {
  const _0x472656 = a310_0x4726();
  return (
    (a310_0x1735 = function (_0x17354c, _0x33e83b) {
      _0x17354c = _0x17354c - 0x168;
      let _0x2df807 = _0x472656[_0x17354c];
      return _0x2df807;
    }),
    a310_0x1735(_0x110e6d, _0xe5d0bc)
  );
}
Object[a310_0x31bac5(0x16d)](exports, a310_0x31bac5(0x1d6), { value: !![] }),
  (exports[a310_0x31bac5(0x183)] =
    exports[a310_0x31bac5(0x195)] =
    exports[a310_0x31bac5(0x185)] =
    exports['restartWbot'] =
    exports[a310_0x31bac5(0x1b5)] =
      void 0x0);
const Sentry = __importStar(require(a310_0x31bac5(0x18f))),
  baileys_1 = __importStar(require(a310_0x31bac5(0x1d3))),
  Whatsapp_1 = __importDefault(require('../models/Whatsapp')),
  logger_1 = require(a310_0x31bac5(0x1dd)),
  logger_2 = __importDefault(require(a310_0x31bac5(0x180))),
  useMultiFileAuthState_1 = require('../helpers/useMultiFileAuthState'),
  AppError_1 = __importDefault(require(a310_0x31bac5(0x1a0))),
  socket_1 = require(a310_0x31bac5(0x186)),
  StartWhatsAppSession_1 = require('../services/WbotServices/StartWhatsAppSession'),
  DeleteBaileysService_1 = __importDefault(require(a310_0x31bac5(0x17a))),
  cache_1 = __importDefault(require(a310_0x31bac5(0x1bb))),
  ImportWhatsAppMessageService_1 = __importDefault(
    require(a310_0x31bac5(0x1c0))
  ),
  date_fns_1 = require(a310_0x31bac5(0x169)),
  moment_1 = __importDefault(require(a310_0x31bac5(0x182))),
  wbotMessageListener_1 = require(a310_0x31bac5(0x171)),
  addLogs_1 = require(a310_0x31bac5(0x168)),
  node_cache_1 = __importDefault(require(a310_0x31bac5(0x181))),
  loggerBaileys = logger_2['default'][a310_0x31bac5(0x1e3)]({});
loggerBaileys[a310_0x31bac5(0x1b6)] = a310_0x31bac5(0x1d8);
const sessions = [],
  retriesQrCodeMap = new Map(),
  getWbot = _0x23f74a => {
    const _0x197a86 = a310_0x31bac5,
      _0x390801 = sessions[_0x197a86(0x1c1)](
        _0x16f23c => _0x16f23c['id'] === _0x23f74a
      );
    if (_0x390801 === -0x1)
      throw new AppError_1[_0x197a86(0x170)](_0x197a86(0x1c7));
    return sessions[_0x390801];
  };
exports['getWbot'] = getWbot;
const restartWbot = async (_0x439f7d, _0x41606b) => {
  const _0x5cecfe = a310_0x31bac5;
  try {
    const _0x251906 = { where: { companyId: _0x439f7d }, attributes: ['id'] },
      _0x3b71a0 =
        await Whatsapp_1[_0x5cecfe(0x170)][_0x5cecfe(0x198)](_0x251906);
    _0x3b71a0[_0x5cecfe(0x1b8)](async _0x314907 => {
      const _0xda6966 = _0x5cecfe,
        _0xdc85cb = sessions[_0xda6966(0x1c1)](
          _0x52a0a9 => _0x52a0a9['id'] === _0x314907['id']
        );
      _0xdc85cb !== -0x1 && sessions[_0xdc85cb]['ws'][_0xda6966(0x1b3)]();
    });
  } catch (_0x254fa7) {
    logger_1['logger'][_0x5cecfe(0x1d8)](_0x254fa7);
  }
};
function a310_0x4726() {
  const _0x2168fd = [
    'qrcode',
    '\x0a\x20\x20Selecionado\x20Data\x20de\x20inicio\x20de\x20importação:\x20',
    '../services/WhatsappService/ImportWhatsAppMessageService',
    'findIndex',
    'status',
    '776539BIqtUt',
    'forEach',
    'companyId',
    'company-',
    'ERR_WAPP_NOT_INITIALIZED',
    'logout',
    'getOwnPropertyDescriptor',
    '\x0a\x20\x20Contato\x20da\x20Mensagem\x20:\x20',
    'messages',
    'fetchLatestWaWebVersion',
    'whatsappSession',
    '__importStar',
    'useMultiFileAuthState',
    'type',
    'set',
    'captureException',
    '@whiskeysockets/baileys',
    '69738kwYieO',
    '\x0a\x20\x20Tipo\x20da\x20mensagem\x20:\x20',
    '__esModule',
    'split',
    'error',
    'delete',
    '\x20\x0a\x20\x20',
    'statusImportMessages',
    'jidNormalizedUser',
    '../utils/logger',
    '\x20Connection\x20Update\x20',
    'importOldMessages',
    '63329aBSJWR',
    'logger',
    'info',
    'child',
    '__createBinding',
    'getTypeMessage',
    '../helpers/addLogs',
    'date-fns',
    'user',
    'Adicionando\x20mensagem\x20para\x20pos\x20processamento:\x0a\x20\x20Mensagem\x20de\x20GRUPO\x20>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\x0a\x20\x20Data\x20e\x20hora\x20da\x20mensagem:\x20',
    '20XnoWQc',
    'defineProperty',
    ',\x20isLatest:\x20',
    'creds.update',
    'default',
    '../services/WbotServices/wbotMessageListener',
    'using\x20WA\x20v',
    'name',
    'call',
    '12470447iIZtxa',
    'push',
    'get',
    '\x0a\x20\x20\x0a\x20\x20',
    'splice',
    '../services/BaileysServices/DeleteBaileysService',
    '5661540DasHoO',
    'importMessages-',
    'Session\x20QRCode\x20Generate\x20',
    'removeAllListeners',
    'messaging-history.set',
    '@whiskeysockets/baileys/lib/Utils/logger',
    'node-cache',
    'moment',
    'initWASocket',
    'low',
    'removeWbot',
    './socket',
    'getTime',
    'importRecentMessages',
    '1396996FngZLd',
    '78bcwXcO',
    '\x0a\x20\x20Whatsapp\x20Id:\x20',
    'delFromPattern',
    'isJidBroadcast',
    'connection.update',
    '@sentry/node',
    'Browsers',
    'importOldMessagesGroups',
    'unshift',
    'findOne',
    'DD/MM/YYYY\x20HH:mm:ss',
    'dataMessages',
    'DISCONNECTED',
    'appropriate',
    'findAll',
    'update',
    '\x0a\x20\x20Criação\x20do\x20arquivo\x20de\x20logs:\x20',
    '728vWoRUo',
    'remoteJid',
    'Running',
    'StartWhatsAppSession',
    'addLogs',
    '../errors/AppError',
    'sessions:',
    'Starting\x20session\x20',
    'create',
    'g.us',
    '9gELlSo',
    'PENDING',
    'message',
    'prototype',
    '.txt',
    '1868330NZWLsF',
    'Socket\x20\x20',
    'statusCode',
    'floor',
    'findByPk',
    'emit',
    'key',
    'output',
    'hasOwnProperty',
    'close',
    'CONNECTED',
    'getWbot',
    'level',
    'Desktop',
    'map',
    'open',
    'Aguardando\x20conexão\x20para\x20iniciar\x20a\x20importação\x20de\x20mensagens:\x0a\x20\x20Whatsapp\x20nome:\x20',
    '../libs/cache',
    'preparingImportMessagesWppId',
    '-whatsappSession'
  ];
  a310_0x4726 = function () {
    return _0x2168fd;
  };
  return a310_0x4726();
}
exports['restartWbot'] = restartWbot;
const removeWbot = async (_0xffe68b, _0x33f380 = !![]) => {
  const _0x28e7f8 = a310_0x31bac5;
  try {
    const _0x397ef7 = sessions[_0x28e7f8(0x1c1)](
      _0x321007 => _0x321007['id'] === _0xffe68b
    );
    _0x397ef7 !== -0x1 &&
      (_0x33f380 &&
        (sessions[_0x397ef7][_0x28e7f8(0x1c8)](),
        sessions[_0x397ef7]['ws'][_0x28e7f8(0x1b3)]()),
      sessions[_0x28e7f8(0x179)](_0x397ef7, 0x1));
  } catch (_0x1bd689) {
    logger_1[_0x28e7f8(0x1e1)][_0x28e7f8(0x1d8)](_0x1bd689);
  }
};
(exports[a310_0x31bac5(0x185)] = removeWbot),
  (exports[a310_0x31bac5(0x195)] = {});
const initWASocket = async _0x2c8d37 => {
  return new Promise(async (_0x56caba, _0x3d8842) => {
    const _0x16820b = a310_0x1735;
    try {
      (async () => {
        const _0x4149bb = a310_0x1735,
          _0xf95bd8 = (0x0, socket_1['getIO'])(),
          _0x470779 = await Whatsapp_1[_0x4149bb(0x170)][_0x4149bb(0x193)]({
            where: { id: _0x2c8d37['id'] }
          });
        if (!_0x470779) return;
        const {
            id: _0x3a1d7a,
            name: _0xdfcc16,
            provider: _0x2cb243
          } = _0x470779,
          { version: _0x3f14ed, isLatest: _0x488779 } = await (0x0,
          baileys_1[_0x4149bb(0x1cc)])({});
        logger_1[_0x4149bb(0x1e1)][_0x4149bb(0x1e2)](
          _0x4149bb(0x172) +
            _0x3f14ed['join']('.') +
            _0x4149bb(0x16e) +
            _0x488779
        ),
          logger_1[_0x4149bb(0x1e1)][_0x4149bb(0x1e2)](
            _0x4149bb(0x1a2) + _0xdfcc16
          );
        let _0x290141 = 0x0,
          _0x3d89cb = null;
        const { state: _0x1bae4c, saveCreds: _0x4ca35d } = await (0x0,
          useMultiFileAuthState_1[_0x4149bb(0x1cf)])(_0x2c8d37),
          _0xc787cd = new node_cache_1['default']();
        (_0x3d89cb = (0x0, baileys_1[_0x4149bb(0x170)])({
          version: _0x3f14ed,
          logger: loggerBaileys,
          printQRInTerminal: ![],
          auth: _0x1bae4c,
          generateHighQualityLinkPreview: ![],
          shouldIgnoreJid: _0x1ed5a5 =>
            (0x0, baileys_1[_0x4149bb(0x18d)])(_0x1ed5a5),
          browser: baileys_1[_0x4149bb(0x190)][_0x4149bb(0x197)](
            _0x4149bb(0x1b7)
          ),
          defaultQueryTimeoutMs: 0x2710,
          msgRetryCounterCache: _0xc787cd,
          retryRequestDelayMs: 0xfa,
          transactionOpts: {
            maxCommitRetries: 0xa,
            delayBetweenTriesMs: 0xbb8
          },
          connectTimeoutMs: 0xea60,
          getMessage: async () => undefined
        })),
          setTimeout(async () => {
            const _0x1c5c4f = _0x4149bb,
              _0x30a1bf = await Whatsapp_1[_0x1c5c4f(0x170)][_0x1c5c4f(0x1ae)](
                _0x2c8d37['id']
              );
            if (
              _0x30a1bf?.['importOldMessages'] &&
              _0x30a1bf[_0x1c5c4f(0x1c2)] === _0x1c5c4f(0x1b4)
            ) {
              let _0x2456e9 = new Date(_0x30a1bf[_0x1c5c4f(0x1df)])[
                  'getTime'
                ](),
                _0x443d4f = new Date(_0x30a1bf[_0x1c5c4f(0x188)])[
                  _0x1c5c4f(0x187)
                ]();
              (0x0, addLogs_1[_0x1c5c4f(0x19f)])({
                fileName: _0x1c5c4f(0x1bc) + _0x2c8d37['id'] + '.txt',
                forceNewFile: !![],
                text:
                  _0x1c5c4f(0x1ba) +
                  _0x30a1bf[_0x1c5c4f(0x173)] +
                  _0x1c5c4f(0x18b) +
                  _0x30a1bf['id'] +
                  _0x1c5c4f(0x19a) +
                  (0x0, moment_1[_0x1c5c4f(0x170)])()['format'](
                    'DD/MM/YYYY\x20HH:mm:ss'
                  ) +
                  _0x1c5c4f(0x1bf) +
                  (0x0, moment_1['default'])(_0x2456e9)['format'](
                    _0x1c5c4f(0x194)
                  ) +
                  '\x20\x0a\x20\x20Selecionado\x20Data\x20final\x20da\x20importação:\x20' +
                  (0x0, moment_1['default'])(_0x443d4f)['format'](
                    _0x1c5c4f(0x194)
                  ) +
                  _0x1c5c4f(0x1da)
              });
              const _0x493bef = new Date()[_0x1c5c4f(0x187)]();
              await _0x30a1bf[_0x1c5c4f(0x199)]({
                statusImportMessages: _0x493bef
              }),
                _0x3d89cb['ev']['on'](_0x1c5c4f(0x17f), async _0xa8e585 => {
                  const _0x117006 = _0x1c5c4f,
                    _0x5e9827 = new Date()['getTime']();
                  await _0x30a1bf[_0x117006(0x199)]({
                    statusImportMessages: _0x5e9827
                  });
                  const _0x1287a4 = _0x2c8d37['id'];
                  let _0x504980 = _0xa8e585[_0x117006(0x1cb)],
                    _0x39b934 = [];
                  _0x504980[_0x117006(0x1c4)](_0x494b8d => {
                    const _0x456197 = _0x117006,
                      _0xff5340 = Math[_0x456197(0x1ad)](
                        _0x494b8d['messageTimestamp'][_0x456197(0x184)] * 0x3e8
                      );
                    (0x0, wbotMessageListener_1['isValidMsg'])(_0x494b8d) &&
                      _0x2456e9 < _0xff5340 &&
                      _0x443d4f > _0xff5340 &&
                      (_0x494b8d[_0x456197(0x1b0)]?.[_0x456197(0x19c)]['split'](
                        '@'
                      )[0x1] != _0x456197(0x1a4)
                        ? ((0x0, addLogs_1[_0x456197(0x19f)])({
                            fileName:
                              _0x456197(0x1bc) +
                              _0x2c8d37['id'] +
                              _0x456197(0x1a9),
                            text:
                              'Adicionando\x20mensagem\x20para\x20pos\x20processamento:\x0a\x20\x20Não\x20é\x20Mensagem\x20de\x20GRUPO\x20>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\x0a\x20\x20Data\x20e\x20hora\x20da\x20mensagem:\x20' +
                              (0x0, moment_1['default'])(_0xff5340)['format'](
                                _0x456197(0x194)
                              ) +
                              _0x456197(0x1ca) +
                              _0x494b8d[_0x456197(0x1b0)]?.['remoteJid'] +
                              _0x456197(0x1d5) +
                              (0x0, wbotMessageListener_1[_0x456197(0x1e5)])(
                                _0x494b8d
                              ) +
                              _0x456197(0x178)
                          }),
                          _0x39b934['push'](_0x494b8d))
                        : _0x30a1bf?.[_0x456197(0x191)] &&
                          ((0x0, addLogs_1[_0x456197(0x19f)])({
                            fileName:
                              _0x456197(0x1bc) +
                              _0x2c8d37['id'] +
                              _0x456197(0x1a9),
                            text:
                              _0x456197(0x16b) +
                              (0x0, moment_1[_0x456197(0x170)])(_0xff5340)[
                                'format'
                              ](_0x456197(0x194)) +
                              _0x456197(0x1ca) +
                              _0x494b8d[_0x456197(0x1b0)]?.['remoteJid'] +
                              _0x456197(0x1d5) +
                              (0x0, wbotMessageListener_1[_0x456197(0x1e5)])(
                                _0x494b8d
                              ) +
                              '\x0a\x20\x20\x0a\x20\x20'
                          }),
                          _0x39b934[_0x456197(0x176)](_0x494b8d)));
                  }),
                    !exports[_0x117006(0x195)]?.[_0x1287a4]
                      ? ((exports['dataMessages'][_0x1287a4] = []),
                        exports[_0x117006(0x195)][_0x1287a4][_0x117006(0x192)](
                          ..._0x39b934
                        ))
                      : exports[_0x117006(0x195)][_0x1287a4][_0x117006(0x192)](
                          ..._0x39b934
                        ),
                    setTimeout(async () => {
                      const _0x14bdc3 = _0x117006,
                        _0x3af37f =
                          await Whatsapp_1[_0x14bdc3(0x170)][_0x14bdc3(0x1ae)](
                            _0x1287a4
                          );
                      _0xf95bd8[_0x14bdc3(0x1af)](
                        _0x14bdc3(0x17c) + _0x3af37f[_0x14bdc3(0x1c5)],
                        {
                          action: _0x14bdc3(0x199),
                          status: { this: -0x1, all: -0x1 }
                        }
                      ),
                        _0xf95bd8[_0x14bdc3(0x1af)]('whatsappSession', {
                          action: _0x14bdc3(0x199),
                          session: _0x3af37f
                        });
                    }, 0x1f4),
                    setTimeout(async () => {
                      const _0x543f43 = _0x117006,
                        _0x3605de =
                          await Whatsapp_1[_0x543f43(0x170)][_0x543f43(0x1ae)](
                            _0x1287a4
                          );
                      if (_0x3605de?.[_0x543f43(0x1df)]) {
                        let _0x28da42 = !isNaN(
                          new Date(
                            Math[_0x543f43(0x1ad)](
                              parseInt(_0x3605de?.[_0x543f43(0x1db)])
                            )
                          )[_0x543f43(0x187)]()
                        );
                        if (_0x28da42) {
                          const _0x579bc4 = new Date(
                              Math[_0x543f43(0x1ad)](
                                parseInt(_0x3605de?.['statusImportMessages'])
                              )
                            )[_0x543f43(0x187)](),
                            _0x25c340 = +(0x0, date_fns_1['add'])(_0x579bc4, {
                              seconds: +0x2d
                            })[_0x543f43(0x187)]();
                          if (_0x25c340 < new Date()['getTime']())
                            (0x0,
                            ImportWhatsAppMessageService_1[_0x543f43(0x170)])(
                              _0x3605de['id']
                            ),
                              _0x3605de[_0x543f43(0x199)]({
                                statusImportMessages: _0x543f43(0x19d)
                              });
                          else {
                          }
                        }
                      }
                      _0xf95bd8[_0x543f43(0x1af)](_0x543f43(0x1cd), {
                        action: _0x543f43(0x199),
                        session: _0x3605de
                      });
                    }, 0x3e8 * 0x2d);
                });
            }
          }, 0x9c4),
          _0x3d89cb['ev']['on'](
            _0x4149bb(0x18e),
            async ({
              connection: _0x4744fa,
              lastDisconnect: _0x71298e,
              qr: _0x5ee1b5
            }) => {
              const _0x174c3c = _0x4149bb;
              logger_1[_0x174c3c(0x1e1)][_0x174c3c(0x1e2)](
                _0x174c3c(0x1ab) +
                  _0xdfcc16 +
                  _0x174c3c(0x1de) +
                  (_0x4744fa || '') +
                  '\x20' +
                  (_0x71298e ? _0x71298e['error'][_0x174c3c(0x1a7)] : '')
              );
              _0x4744fa === _0x174c3c(0x1b3) &&
                (logger_1['logger'][_0x174c3c(0x1e2)](
                  _0x174c3c(0x1ab) +
                    _0xdfcc16 +
                    _0x174c3c(0x1de) +
                    (_0x4744fa || '') +
                    '\x20' +
                    (_0x71298e
                      ? _0x71298e[_0x174c3c(0x1d8)][_0x174c3c(0x1a7)]
                      : '')
                ),
                _0x71298e?.[_0x174c3c(0x1d8)]?.[_0x174c3c(0x1b1)]?.[
                  _0x174c3c(0x1ac)
                ] === 0x193 &&
                  (await _0x2c8d37[_0x174c3c(0x199)]({
                    status: _0x174c3c(0x1a6),
                    session: ''
                  }),
                  await (0x0, DeleteBaileysService_1[_0x174c3c(0x170)])(
                    _0x2c8d37['id']
                  ),
                  await cache_1[_0x174c3c(0x170)][_0x174c3c(0x18c)](
                    _0x174c3c(0x1a1) + _0x2c8d37['id'] + ':*'
                  ),
                  _0xf95bd8[_0x174c3c(0x1af)](
                    'company-' + _0x2c8d37['companyId'] + _0x174c3c(0x1bd),
                    { action: _0x174c3c(0x199), session: _0x2c8d37 }
                  ),
                  (0x0, exports[_0x174c3c(0x185)])(_0x3a1d7a, ![])),
                _0x71298e?.['error']?.[_0x174c3c(0x1b1)]?.[_0x174c3c(0x1ac)] !==
                baileys_1['DisconnectReason']['loggedOut']
                  ? ((0x0, exports['removeWbot'])(_0x3a1d7a, ![]),
                    setTimeout(
                      () =>
                        (0x0, StartWhatsAppSession_1[_0x174c3c(0x19e)])(
                          _0x2c8d37,
                          _0x2c8d37[_0x174c3c(0x1c5)]
                        ),
                      0x7d0
                    ))
                  : (await _0x2c8d37[_0x174c3c(0x199)]({
                      status: _0x174c3c(0x1a6),
                      session: ''
                    }),
                    await (0x0, DeleteBaileysService_1[_0x174c3c(0x170)])(
                      _0x2c8d37['id']
                    ),
                    await cache_1[_0x174c3c(0x170)][_0x174c3c(0x18c)](
                      'sessions:' + _0x2c8d37['id'] + ':*'
                    ),
                    _0xf95bd8['emit'](
                      _0x174c3c(0x1c6) +
                        _0x2c8d37[_0x174c3c(0x1c5)] +
                        _0x174c3c(0x1bd),
                      { action: _0x174c3c(0x199), session: _0x2c8d37 }
                    ),
                    (0x0, exports[_0x174c3c(0x185)])(_0x3a1d7a, ![]),
                    setTimeout(
                      () =>
                        (0x0, StartWhatsAppSession_1['StartWhatsAppSession'])(
                          _0x2c8d37,
                          _0x2c8d37[_0x174c3c(0x1c5)]
                        ),
                      0x7d0
                    )));
              if (_0x4744fa === _0x174c3c(0x1b9)) {
                await _0x2c8d37[_0x174c3c(0x199)]({
                  status: _0x174c3c(0x1b4),
                  qrcode: '',
                  retries: 0x0,
                  number:
                    _0x3d89cb[_0x174c3c(0x1d0)] === 'md'
                      ? (0x0, baileys_1[_0x174c3c(0x1dc)])(
                          _0x3d89cb[_0x174c3c(0x16a)]['id']
                        )[_0x174c3c(0x1d7)]('@')[0x0]
                      : '-'
                }),
                  _0xf95bd8[_0x174c3c(0x1af)](
                    _0x174c3c(0x1c6) +
                      _0x2c8d37[_0x174c3c(0x1c5)] +
                      _0x174c3c(0x1bd),
                    { action: 'update', session: _0x2c8d37 }
                  );
                const _0x55e040 = sessions[_0x174c3c(0x1c1)](
                  _0x114712 => _0x114712['id'] === _0x2c8d37['id']
                );
                _0x55e040 === -0x1 &&
                  ((_0x3d89cb['id'] = _0x2c8d37['id']),
                  sessions['push'](_0x3d89cb)),
                  _0x56caba(_0x3d89cb);
              }
              if (_0x5ee1b5 !== undefined) {
                if (
                  retriesQrCodeMap[_0x174c3c(0x177)](_0x3a1d7a) &&
                  retriesQrCodeMap[_0x174c3c(0x177)](_0x3a1d7a) >= 0x3
                )
                  await _0x470779['update']({
                    status: _0x174c3c(0x196),
                    qrcode: ''
                  }),
                    await (0x0, DeleteBaileysService_1[_0x174c3c(0x170)])(
                      _0x470779['id']
                    ),
                    await cache_1[_0x174c3c(0x170)][_0x174c3c(0x18c)](
                      _0x174c3c(0x1a1) + _0x2c8d37['id'] + ':*'
                    ),
                    _0xf95bd8[_0x174c3c(0x1af)](
                      'company-' + _0x2c8d37['companyId'] + _0x174c3c(0x1bd),
                      { action: _0x174c3c(0x199), session: _0x470779 }
                    ),
                    _0x3d89cb['ev'][_0x174c3c(0x17e)](_0x174c3c(0x18e)),
                    _0x3d89cb['ws']['close'](),
                    (_0x3d89cb = null),
                    retriesQrCodeMap[_0x174c3c(0x1d9)](_0x3a1d7a);
                else {
                  logger_1['logger'][_0x174c3c(0x1e2)](
                    _0x174c3c(0x17d) + _0xdfcc16
                  ),
                    retriesQrCodeMap[_0x174c3c(0x1d1)](
                      _0x3a1d7a,
                      (_0x290141 += 0x1)
                    ),
                    await _0x2c8d37['update']({
                      qrcode: _0x5ee1b5,
                      status: _0x174c3c(0x1be),
                      retries: 0x0,
                      number: ''
                    });
                  const _0x552e32 = sessions[_0x174c3c(0x1c1)](
                    _0x45f41b => _0x45f41b['id'] === _0x2c8d37['id']
                  );
                  _0x552e32 === -0x1 &&
                    ((_0x3d89cb['id'] = _0x2c8d37['id']),
                    sessions[_0x174c3c(0x176)](_0x3d89cb)),
                    _0xf95bd8['emit'](
                      'company-' +
                        _0x2c8d37[_0x174c3c(0x1c5)] +
                        _0x174c3c(0x1bd),
                      { action: _0x174c3c(0x199), session: _0x2c8d37 }
                    );
                }
              }
            }
          ),
          _0x3d89cb['ev']['on'](_0x4149bb(0x16f), _0x4ca35d);
      })();
    } catch (_0x33028e) {
      Sentry[_0x16820b(0x1d2)](_0x33028e),
        console['log'](_0x33028e),
        _0x3d8842(_0x33028e);
    }
  });
};
exports[a310_0x31bac5(0x183)] = initWASocket;
