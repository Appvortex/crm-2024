'use strict';
const a651_0x489267 = a651_0x3f6a;
(function (_0x327579, _0xd480c2) {
  const _0x282313 = a651_0x3f6a,
    _0x3a9711 = _0x327579();
  while (!![]) {
    try {
      const _0x12fb35 =
        (-parseInt(_0x282313(0x153)) / 0x1) *
          (parseInt(_0x282313(0x141)) / 0x2) +
        -parseInt(_0x282313(0x14f)) / 0x3 +
        -parseInt(_0x282313(0x125)) / 0x4 +
        -parseInt(_0x282313(0x154)) / 0x5 +
        (parseInt(_0x282313(0x12b)) / 0x6) *
          (parseInt(_0x282313(0x143)) / 0x7) +
        -parseInt(_0x282313(0x136)) / 0x8 +
        parseInt(_0x282313(0x144)) / 0x9;
      if (_0x12fb35 === _0xd480c2) break;
      else _0x3a9711['push'](_0x3a9711['shift']());
    } catch (_0x218197) {
      _0x3a9711['push'](_0x3a9711['shift']());
    }
  }
})(a651_0x37be, 0xa7c2b);
function a651_0x3f6a(_0x15c24c, _0x450c1b) {
  const _0x37bea8 = a651_0x37be();
  return (
    (a651_0x3f6a = function (_0x3f6a2e, _0xe586c8) {
      _0x3f6a2e = _0x3f6a2e - 0x121;
      let _0x3a4ef0 = _0x37bea8[_0x3f6a2e];
      return _0x3a4ef0;
    }),
    a651_0x3f6a(_0x15c24c, _0x450c1b)
  );
}
var __createBinding =
    (this && this[a651_0x489267(0x152)]) ||
    (Object[a651_0x489267(0x161)]
      ? function (_0x31915b, _0x332fa8, _0x2b8378, _0x49aefa) {
          const _0x5aad91 = a651_0x489267;
          if (_0x49aefa === undefined) _0x49aefa = _0x2b8378;
          var _0x32ddbe = Object[_0x5aad91(0x126)](_0x332fa8, _0x2b8378);
          (!_0x32ddbe ||
            (_0x5aad91(0x14d) in _0x32ddbe
              ? !_0x332fa8[_0x5aad91(0x162)]
              : _0x32ddbe['writable'] || _0x32ddbe[_0x5aad91(0x14c)])) &&
            (_0x32ddbe = {
              enumerable: !![],
              get: function () {
                return _0x332fa8[_0x2b8378];
              }
            }),
            Object[_0x5aad91(0x134)](_0x31915b, _0x49aefa, _0x32ddbe);
        }
      : function (_0x3c675a, _0x30f606, _0x2607b3, _0x75aecd) {
          if (_0x75aecd === undefined) _0x75aecd = _0x2607b3;
          _0x3c675a[_0x75aecd] = _0x30f606[_0x2607b3];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object[a651_0x489267(0x161)]
      ? function (_0x9186d7, _0x148a00) {
          const _0x49a7e6 = a651_0x489267;
          Object['defineProperty'](_0x9186d7, _0x49a7e6(0x146), {
            enumerable: !![],
            value: _0x148a00
          });
        }
      : function (_0x26f547, _0x1b9045) {
          const _0x3737b8 = a651_0x489267;
          _0x26f547[_0x3737b8(0x146)] = _0x1b9045;
        }),
  __importStar =
    (this && this[a651_0x489267(0x15e)]) ||
    function (_0x3f5c6b) {
      const _0x58adb5 = a651_0x489267;
      if (_0x3f5c6b && _0x3f5c6b[_0x58adb5(0x162)]) return _0x3f5c6b;
      var _0x3758b8 = {};
      if (_0x3f5c6b != null) {
        for (var _0x1a2a6b in _0x3f5c6b)
          if (
            _0x1a2a6b !== _0x58adb5(0x146) &&
            Object[_0x58adb5(0x138)]['hasOwnProperty']['call'](
              _0x3f5c6b,
              _0x1a2a6b
            )
          )
            __createBinding(_0x3758b8, _0x3f5c6b, _0x1a2a6b);
      }
      return __setModuleDefault(_0x3758b8, _0x3f5c6b), _0x3758b8;
    },
  __importDefault =
    (this && this[a651_0x489267(0x160)]) ||
    function (_0x562edc) {
      const _0x1301c9 = a651_0x489267;
      return _0x562edc && _0x562edc[_0x1301c9(0x162)]
        ? _0x562edc
        : { default: _0x562edc };
    };
Object[a651_0x489267(0x134)](exports, '__esModule', { value: !![] }),
  (exports['getMessageOptions'] = void 0x0);
const Sentry = __importStar(require(a651_0x489267(0x15b))),
  fs_1 = __importStar(require('fs')),
  child_process_1 = require(a651_0x489267(0x15a)),
  path_1 = __importDefault(require(a651_0x489267(0x159))),
  ffmpeg_1 = __importDefault(require(a651_0x489267(0x123))),
  AppError_1 = __importDefault(require(a651_0x489267(0x121))),
  mime_types_1 = __importDefault(require(a651_0x489267(0x12d))),
  Contact_1 = __importDefault(require('../../models/Contact')),
  wbot_1 = require('../../libs/wbot'),
  CreateMessageService_1 = __importDefault(
    require('../MessageServices/CreateMessageService')
  ),
  Mustache_1 = __importDefault(require(a651_0x489267(0x127))),
  publicFolder = path_1['default']['resolve'](
    __dirname,
    '..',
    '..',
    '..',
    'public'
  ),
  processAudio = async (_0x1c6268, _0x5003b7) => {
    const _0x1ab9c2 = a651_0x489267,
      _0x3ac36e =
        publicFolder +
        _0x1ab9c2(0x129) +
        _0x5003b7 +
        '/' +
        new Date()[_0x1ab9c2(0x15f)]() +
        _0x1ab9c2(0x12a);
    return new Promise((_0x39f42c, _0x32a60c) => {
      const _0x356dcf = _0x1ab9c2;
      (0x0, child_process_1['exec'])(
        ffmpeg_1['default'][_0x356dcf(0x159)] +
          _0x356dcf(0x14a) +
          _0x1c6268 +
          _0x356dcf(0x13f) +
          _0x3ac36e +
          _0x356dcf(0x145),
        (_0x562729, _0x114f11, _0x16c67c) => {
          if (_0x562729) _0x32a60c(_0x562729);
          _0x39f42c(_0x3ac36e);
        }
      );
    });
  },
  processAudioFile = async (_0x1cefa4, _0x85fa6) => {
    const _0x87af5e = a651_0x489267,
      _0xc8af27 =
        publicFolder +
        _0x87af5e(0x129) +
        _0x85fa6 +
        '/' +
        new Date()['getTime']() +
        _0x87af5e(0x12a);
    return new Promise((_0x5ac585, _0x1c2fdc) => {
      const _0x45fbc7 = _0x87af5e;
      (0x0, child_process_1['exec'])(
        ffmpeg_1[_0x45fbc7(0x146)][_0x45fbc7(0x159)] +
          _0x45fbc7(0x14a) +
          _0x1cefa4 +
          '\x20-vn\x20-ar\x2044100\x20-ac\x202\x20-b:a\x20192k\x20' +
          _0xc8af27,
        (_0x29dd08, _0x2b26d0, _0x3f085e) => {
          if (_0x29dd08) _0x1c2fdc(_0x29dd08);
          _0x5ac585(_0xc8af27);
        }
      );
    });
  },
  getMessageOptions = async (_0x5204ad, _0x55602b, _0x728a9d, _0x1e1b19) => {
    const _0x30f02a = a651_0x489267,
      _0x5123e8 = mime_types_1[_0x30f02a(0x146)]['lookup'](_0x55602b),
      _0x1f44f5 = _0x5123e8['split']('/')[0x0];
    try {
      if (!_0x5123e8) throw new Error('Invalid\x20mimetype');
      let _0x24c025;
      if (_0x1f44f5 === _0x30f02a(0x149))
        _0x24c025 = {
          video: fs_1[_0x30f02a(0x146)]['readFileSync'](_0x55602b),
          caption: _0x1e1b19 ? _0x1e1b19 : null,
          fileName: _0x5204ad
        };
      else {
        if (_0x1f44f5 === _0x30f02a(0x132)) {
          const _0x29e76c = !![],
            _0x2fd059 = await processAudio(_0x55602b, _0x728a9d);
          _0x29e76c
            ? (_0x24c025 = {
                audio: fs_1['default']['readFileSync'](_0x2fd059),
                mimetype: _0x30f02a(0x130),
                ptt: !![]
              })
            : (_0x24c025 = {
                audio: fs_1[_0x30f02a(0x146)][_0x30f02a(0x13c)](_0x2fd059),
                mimetype: _0x29e76c ? _0x30f02a(0x130) : _0x5123e8,
                ptt: !![]
              });
        } else {
          if (_0x1f44f5 === _0x30f02a(0x131))
            _0x24c025 = {
              document: fs_1['default'][_0x30f02a(0x13c)](_0x55602b),
              caption: _0x1e1b19 ? _0x1e1b19 : null,
              fileName: _0x5204ad,
              mimetype: _0x5123e8
            };
          else
            _0x1f44f5 === _0x30f02a(0x150)
              ? (_0x24c025 = {
                  document: fs_1[_0x30f02a(0x146)][_0x30f02a(0x13c)](_0x55602b),
                  caption: _0x1e1b19 ? _0x1e1b19 : null,
                  fileName: _0x5204ad,
                  mimetype: _0x5123e8
                })
              : (_0x24c025 = {
                  image: fs_1[_0x30f02a(0x146)][_0x30f02a(0x13c)](_0x55602b),
                  caption: _0x1e1b19 ? _0x1e1b19 : null
                });
        }
      }
      return _0x24c025;
    } catch (_0x3bc9f1) {
      return (
        Sentry[_0x30f02a(0x140)](_0x3bc9f1),
        console[_0x30f02a(0x147)](_0x3bc9f1),
        null
      );
    }
  };
exports[a651_0x489267(0x12c)] = getMessageOptions;
const SendWhatsAppMedia = async ({
  media: _0x31d4a0,
  ticket: _0x49e9c6,
  body: _0x571581,
  isPrivate: _0x573bb3,
  isForwarded: isForwarded = ![]
}) => {
  const _0x29d0f1 = a651_0x489267;
  try {
    const _0x1bb6c0 = await (0x0, wbot_1[_0x29d0f1(0x13a)])(
        _0x49e9c6['whatsappId']
      ),
      _0x2eb8f4 = _0x49e9c6[_0x29d0f1(0x157)][_0x29d0f1(0x158)](),
      _0x2ae3ff = _0x31d4a0[_0x29d0f1(0x159)],
      _0x27b699 = _0x31d4a0[_0x29d0f1(0x13b)]['split']('/')[0x0];
    let _0x48b9d2,
      _0x2c7da9 = '';
    const _0x204c64 = _0x49e9c6
      ? (0x0, Mustache_1[_0x29d0f1(0x146)])(_0x571581, _0x49e9c6)
      : _0x571581;
    if (_0x27b699 === _0x29d0f1(0x149))
      (_0x48b9d2 = {
        video: fs_1[_0x29d0f1(0x146)][_0x29d0f1(0x13c)](_0x2ae3ff),
        caption: _0x204c64,
        fileName: _0x31d4a0[_0x29d0f1(0x15c)]['replace']('/', '-'),
        contextInfo: {
          forwardingScore: isForwarded ? 0x2 : 0x0,
          isForwarded: isForwarded
        }
      }),
        (_0x2c7da9 = '🎥\x20Arquivo\x20de\x20vídeo');
    else {
      if (_0x27b699 === _0x29d0f1(0x132)) {
        const _0x163a8d = !![];
        if (_0x163a8d) {
          const _0x47ddfe = await processAudio(
            _0x31d4a0[_0x29d0f1(0x159)],
            _0x2eb8f4
          );
          (_0x48b9d2 = {
            audio: fs_1[_0x29d0f1(0x146)][_0x29d0f1(0x13c)](_0x47ddfe),
            mimetype: _0x163a8d ? _0x29d0f1(0x130) : _0x31d4a0['mimetype'],
            ptt: !![],
            caption: _0x204c64,
            contextInfo: {
              forwardingScore: isForwarded ? 0x2 : 0x0,
              isForwarded: isForwarded
            }
          }),
            (0x0, fs_1[_0x29d0f1(0x15d)])(_0x47ddfe);
        } else {
          const _0x4494dc = await processAudio(
            _0x31d4a0[_0x29d0f1(0x159)],
            _0x2eb8f4
          );
          (_0x48b9d2 = {
            audio: fs_1['default'][_0x29d0f1(0x13c)](_0x4494dc),
            mimetype: _0x29d0f1(0x130),
            ptt: !![],
            caption: _0x204c64,
            contextInfo: {
              forwardingScore: isForwarded ? 0x2 : 0x0,
              isForwarded: isForwarded
            }
          }),
            (0x0, fs_1['unlinkSync'])(_0x4494dc);
        }
        _0x2c7da9 = _0x29d0f1(0x137);
      } else {
        if (_0x27b699 === _0x29d0f1(0x131) || _0x27b699 === _0x29d0f1(0x148))
          (_0x48b9d2 = {
            document: fs_1[_0x29d0f1(0x146)][_0x29d0f1(0x13c)](_0x2ae3ff),
            caption: _0x204c64,
            fileName: _0x31d4a0['originalname'][_0x29d0f1(0x156)]('/', '-'),
            mimetype: _0x31d4a0[_0x29d0f1(0x13b)],
            contextInfo: {
              forwardingScore: isForwarded ? 0x2 : 0x0,
              isForwarded: isForwarded
            }
          }),
            (_0x2c7da9 = _0x29d0f1(0x135));
        else
          _0x27b699 === _0x29d0f1(0x150)
            ? ((_0x48b9d2 = {
                document: fs_1[_0x29d0f1(0x146)]['readFileSync'](_0x2ae3ff),
                caption: _0x204c64,
                fileName: _0x31d4a0['originalname'][_0x29d0f1(0x156)]('/', '-'),
                mimetype: _0x31d4a0[_0x29d0f1(0x13b)],
                contextInfo: {
                  forwardingScore: isForwarded ? 0x2 : 0x0,
                  isForwarded: isForwarded
                }
              }),
              (_0x2c7da9 = _0x29d0f1(0x12e)))
            : ((_0x48b9d2 = {
                image: fs_1[_0x29d0f1(0x146)]['readFileSync'](_0x2ae3ff),
                caption: _0x204c64,
                contextInfo: {
                  forwardingScore: isForwarded ? 0x2 : 0x0,
                  isForwarded: isForwarded
                }
              }),
              (_0x2c7da9 = _0x29d0f1(0x12e)));
      }
    }
    if (_0x573bb3) {
      const _0x3fdb52 = {
        wid:
          'PVT' +
          _0x2eb8f4 +
          _0x49e9c6['id'] +
          _0x571581[_0x29d0f1(0x142)](0x0, 0x6),
        ticketId: _0x49e9c6['id'],
        contactId: undefined,
        body: _0x204c64,
        fromMe: !![],
        mediaUrl: _0x31d4a0[_0x29d0f1(0x14e)],
        mediaType: _0x31d4a0[_0x29d0f1(0x13b)][_0x29d0f1(0x139)]('/')[0x0],
        read: !![],
        quotedMsgId: null,
        ack: 0x2,
        remoteJid: null,
        participant: null,
        dataJson: null,
        ticketTrakingId: null,
        isPrivate: _0x573bb3
      };
      await (0x0, CreateMessageService_1[_0x29d0f1(0x146)])({
        messageData: _0x3fdb52,
        companyId: _0x49e9c6[_0x29d0f1(0x157)]
      });
      return;
    }
    const _0x412c9d = await Contact_1[_0x29d0f1(0x146)][_0x29d0f1(0x151)](
      _0x49e9c6[_0x29d0f1(0x128)]
    );
    let _0x441b8a;
    _0x412c9d[_0x29d0f1(0x133)] &&
    _0x412c9d[_0x29d0f1(0x133)] !== '' &&
    _0x412c9d[_0x29d0f1(0x133)][_0x29d0f1(0x13d)]('@')
      ? (_0x441b8a = _0x412c9d['remoteJid'])
      : (_0x441b8a =
          _0x412c9d[_0x29d0f1(0x122)] +
          '@' +
          (_0x49e9c6[_0x29d0f1(0x155)] ? _0x29d0f1(0x124) : _0x29d0f1(0x13e)));
    const _0x2c8d1c = await _0x1bb6c0[_0x29d0f1(0x12f)](_0x441b8a, {
      ..._0x48b9d2
    });
    return (
      await _0x49e9c6['update']({
        lastMessage:
          _0x571581 !== _0x31d4a0[_0x29d0f1(0x14e)] ? _0x571581 : _0x204c64,
        imported: null
      }),
      _0x2c8d1c
    );
  } catch (_0x2d51fa) {
    Sentry[_0x29d0f1(0x140)](_0x2d51fa), console[_0x29d0f1(0x147)](_0x2d51fa);
    throw new AppError_1[_0x29d0f1(0x146)](_0x29d0f1(0x14b));
  }
};
exports[a651_0x489267(0x146)] = SendWhatsAppMedia;
function a651_0x37be() {
  const _0x595d16 = [
    'getOwnPropertyDescriptor',
    '../../helpers/Mustache',
    'contactId',
    '/company',
    '.mp3',
    '6673854WuaEZQ',
    'getMessageOptions',
    'mime-types',
    '📎\x20Outros\x20anexos',
    'sendMessage',
    'audio/mp4',
    'document',
    'audio',
    'remoteJid',
    'defineProperty',
    '📂\x20Documento',
    '7549352vTBSwu',
    '🎵\x20Arquivo\x20de\x20áudio',
    'prototype',
    'split',
    'getWbot',
    'mimetype',
    'readFileSync',
    'includes',
    's.whatsapp.net',
    '\x20-vn\x20-ab\x20128k\x20-ar\x2044100\x20-f\x20ipod\x20',
    'captureException',
    '21802CUqqrG',
    'substring',
    '7PpWymw',
    '29781288OmOPou',
    '\x20-y',
    'default',
    'log',
    'text',
    'video',
    '\x20-i\x20',
    'ERR_SENDING_WAPP_MSG',
    'configurable',
    'get',
    'filename',
    '3781602ZEzdOG',
    'application',
    'findByPk',
    '__createBinding',
    '1eCinRU',
    '2126045Whggzd',
    'isGroup',
    'replace',
    'companyId',
    'toString',
    'path',
    'child_process',
    '@sentry/node',
    'originalname',
    'unlinkSync',
    '__importStar',
    'getTime',
    '__importDefault',
    'create',
    '__esModule',
    '../../errors/AppError',
    'number',
    '@ffmpeg-installer/ffmpeg',
    'g.us',
    '4375524XchGnt'
  ];
  a651_0x37be = function () {
    return _0x595d16;
  };
  return a651_0x37be();
}
