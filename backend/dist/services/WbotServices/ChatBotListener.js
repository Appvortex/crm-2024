'use strict';
const a643_0x1ad3ae = a643_0x2c2b;
(function (_0x5d8cf7, _0x2007d5) {
  const _0x4526b6 = a643_0x2c2b,
    _0x5bc9f3 = _0x5d8cf7();
  while (!![]) {
    try {
      const _0x95b635 =
        (parseInt(_0x4526b6(0x191)) / 0x1) *
          (parseInt(_0x4526b6(0x158)) / 0x2) +
        (parseInt(_0x4526b6(0x1a3)) / 0x3) *
          (parseInt(_0x4526b6(0x148)) / 0x4) +
        (-parseInt(_0x4526b6(0x161)) / 0x5) *
          (-parseInt(_0x4526b6(0x17c)) / 0x6) +
        (-parseInt(_0x4526b6(0x187)) / 0x7) *
          (-parseInt(_0x4526b6(0x16b)) / 0x8) +
        parseInt(_0x4526b6(0x162)) / 0x9 +
        -parseInt(_0x4526b6(0x14e)) / 0xa +
        -parseInt(_0x4526b6(0x13f)) / 0xb;
      if (_0x95b635 === _0x2007d5) break;
      else _0x5bc9f3['push'](_0x5bc9f3['shift']());
    } catch (_0x3afdde) {
      _0x5bc9f3['push'](_0x5bc9f3['shift']());
    }
  }
})(a643_0x4a2d, 0xe70f2);
var __createBinding =
    (this && this[a643_0x1ad3ae(0x16f)]) ||
    (Object['create']
      ? function (_0x14e9df, _0x4b9d75, _0x31c80d, _0x381203) {
          const _0x4cce27 = a643_0x1ad3ae;
          if (_0x381203 === undefined) _0x381203 = _0x31c80d;
          var _0x5e47ec = Object[_0x4cce27(0x14b)](_0x4b9d75, _0x31c80d);
          (!_0x5e47ec ||
            ('get' in _0x5e47ec
              ? !_0x4b9d75[_0x4cce27(0x1a4)]
              : _0x5e47ec[_0x4cce27(0x147)] || _0x5e47ec[_0x4cce27(0x16d)])) &&
            (_0x5e47ec = {
              enumerable: !![],
              get: function () {
                return _0x4b9d75[_0x31c80d];
              }
            }),
            Object[_0x4cce27(0x1aa)](_0x14e9df, _0x381203, _0x5e47ec);
        }
      : function (_0x538bae, _0x4b1577, _0x3d9441, _0x49ef2c) {
          if (_0x49ef2c === undefined) _0x49ef2c = _0x3d9441;
          _0x538bae[_0x49ef2c] = _0x4b1577[_0x3d9441];
        }),
  __setModuleDefault =
    (this && this[a643_0x1ad3ae(0x142)]) ||
    (Object[a643_0x1ad3ae(0x1a6)]
      ? function (_0x202d25, _0x3b26f4) {
          const _0x516533 = a643_0x1ad3ae;
          Object['defineProperty'](_0x202d25, _0x516533(0x195), {
            enumerable: !![],
            value: _0x3b26f4
          });
        }
      : function (_0x592bdc, _0x32bb3b) {
          _0x592bdc['default'] = _0x32bb3b;
        }),
  __importStar =
    (this && this[a643_0x1ad3ae(0x18b)]) ||
    function (_0x2f1b58) {
      const _0x4fbebb = a643_0x1ad3ae;
      if (_0x2f1b58 && _0x2f1b58[_0x4fbebb(0x1a4)]) return _0x2f1b58;
      var _0x5bd29b = {};
      if (_0x2f1b58 != null) {
        for (var _0x40e50c in _0x2f1b58)
          if (
            _0x40e50c !== _0x4fbebb(0x195) &&
            Object[_0x4fbebb(0x183)][_0x4fbebb(0x1a0)]['call'](
              _0x2f1b58,
              _0x40e50c
            )
          )
            __createBinding(_0x5bd29b, _0x2f1b58, _0x40e50c);
      }
      return __setModuleDefault(_0x5bd29b, _0x2f1b58), _0x5bd29b;
    },
  __importDefault =
    (this && this[a643_0x1ad3ae(0x14a)]) ||
    function (_0x21a755) {
      const _0x4720db = a643_0x1ad3ae;
      return _0x21a755 && _0x21a755[_0x4720db(0x1a4)]
        ? _0x21a755
        : { default: _0x21a755 };
    };
Object['defineProperty'](exports, a643_0x1ad3ae(0x1a4), { value: !![] }),
  (exports[a643_0x1ad3ae(0x15e)] = exports[a643_0x1ad3ae(0x19e)] = void 0x0);
const path_1 = __importDefault(require(a643_0x1ad3ae(0x175))),
  wbotMessageListener_1 = require('./wbotMessageListener'),
  ShowDialogChatBotsServices_1 = __importDefault(require(a643_0x1ad3ae(0x186))),
  ShowQueueService_1 = __importDefault(require(a643_0x1ad3ae(0x151))),
  ShowChatBotServices_1 = __importDefault(
    require('../ChatBotServices/ShowChatBotServices')
  ),
  DeleteDialogChatBotsServices_1 = __importDefault(
    require(a643_0x1ad3ae(0x14d))
  ),
  ShowChatBotByChatbotIdServices_1 = __importDefault(
    require('../ChatBotServices/ShowChatBotByChatbotIdServices')
  ),
  CreateDialogChatBotsServices_1 = __importDefault(
    require(a643_0x1ad3ae(0x1ad))
  ),
  ShowWhatsAppService_1 = __importDefault(require(a643_0x1ad3ae(0x179))),
  Mustache_1 = __importDefault(require(a643_0x1ad3ae(0x18c))),
  UpdateTicketService_1 = __importDefault(require(a643_0x1ad3ae(0x172))),
  ShowService_1 = __importDefault(require(a643_0x1ad3ae(0x171))),
  SendWhatsAppMedia_1 = __importStar(require(a643_0x1ad3ae(0x180))),
  CompaniesSettings_1 = __importDefault(
    require('../../models/CompaniesSettings')
  ),
  fs = require('fs');
var axios = require(a643_0x1ad3ae(0x174));
const isNumeric = _0x444370 => /^-?\d+$/[a643_0x1ad3ae(0x15d)](_0x444370),
  deleteAndCreateDialogStage = async (_0x3ba20f, _0x1ee917, _0x53a803) => {
    const _0x4791ae = a643_0x1ad3ae;
    try {
      await (0x0, DeleteDialogChatBotsServices_1['default'])(_0x3ba20f['id']);
      const _0x465bc7 = await (0x0,
      ShowChatBotByChatbotIdServices_1['default'])(_0x1ee917);
      return (
        !_0x465bc7 && (await _0x53a803['update']({ isBot: ![] })),
        await (0x0, CreateDialogChatBotsServices_1[_0x4791ae(0x195)])({
          awaiting: 0x1,
          contactId: _0x3ba20f['id'],
          chatbotId: _0x1ee917,
          queueId: _0x465bc7[_0x4791ae(0x19b)]
        })
      );
    } catch (_0x4c6bbd) {
      await _0x53a803[_0x4791ae(0x143)]({ isBot: ![] });
    }
  };
function a643_0x4a2d() {
  const _0x16beb0 = [
    'selectedRowId',
    'defineProperty',
    'Elige\x20una\x20opción',
    '\x0a*[\x20Sair\x20]*\x20-\x20Cerrar\x20Atención',
    '../DialogChatBotsServices/CreateDialogChatBotsServices',
    'chatbots',
    'entries',
    'fromMe',
    'greetingMessage',
    'push',
    'fileList',
    'queue',
    's.whatsapp.net',
    '44011033gxCPRZ',
    '\x0a*[\x20Sair\x20]*\x20Cerrar\x20Atención',
    'split',
    '__setModuleDefault',
    'update',
    'integration',
    'optIntegrationId',
    'optQueueId',
    'writable',
    '956qwbceM',
    'message',
    '__importDefault',
    'getOwnPropertyDescriptor',
    'sendMessage',
    '../DialogChatBotsServices/DeleteDialogChatBotsServices',
    '10327340wBeEqn',
    'attendent',
    'contact',
    '../QueueService/ShowQueueService',
    'getDate',
    'getFullYear',
    '\x0a*[\x20#\x20]\x20Volver\x20al\x20menú\x20principal\x0a[\x20Salir\x20]*\x20Terminar\x20la\x20atención',
    'dueDate',
    'selectedButtonId',
    'application/pdf',
    '4QYNHob',
    'optFileId',
    'toString',
    'name',
    'mediaType',
    'test',
    'sayChatbot',
    'company',
    'trim',
    '483820gEHbWY',
    '10125909KgnJbw',
    'getBodyMessage',
    'ticketId',
    'listResponseMessage',
    'g.us',
    'closed',
    'key',
    'list',
    'number',
    '328ausqXY',
    'readFileSync',
    'configurable',
    'public',
    '__createBinding',
    'verifyMediaMessage',
    '../../services/FileServices/ShowService',
    '../TicketServices/UpdateTicketService',
    'userId',
    'axios',
    'path',
    'getMonth',
    'sair',
    'length',
    '../WhatsappService/ShowWhatsAppService',
    'forEach',
    'text',
    '6TtGdGh',
    'file',
    'greetingMediaAttachment',
    'No\x20pude\x20enviar\x20el\x20PDF,\x20¡inténtalo\x20de\x20nuevo!',
    './SendWhatsAppMedia',
    'queueType',
    'replace',
    'prototype',
    'public/temp/',
    'options',
    '../DialogChatBotsServices/ShowDialogChatBotsServices',
    '279713YhUIfb',
    'optUserId',
    'medias',
    'whatsapp',
    '__importStar',
    '../../helpers/Mustache',
    'ticketData',
    'companyId',
    'substring',
    '7bit',
    '942051pdayVt',
    '*[\x20',
    'chatbotId',
    'closeTicket',
    'default',
    'pending',
    'verifyMessage',
    '\x20]*\x20-\x20',
    'resolve',
    'isGroup',
    'queueId',
    'buttonsResponseMessage',
    'toLocaleLowerCase',
    'deleteAndCreateDialogStage',
    'charAt',
    'hasOwnProperty',
    '‎No\x20pude\x20enviar\x20el\x20PDF,\x20¡inténtalo\x20de\x20nuevo!',
    'button',
    '15513webAng',
    '__esModule',
    'localeCompare',
    'create',
    'chatBotType',
    'findOne'
  ];
  a643_0x4a2d = function () {
    return _0x16beb0;
  };
  return a643_0x4a2d();
}
exports[a643_0x1ad3ae(0x19e)] = deleteAndCreateDialogStage;
const sendMessage = async (_0x1c75cf, _0x469738, _0x1050fa, _0x239935) => {
    const _0x35fb6c = a643_0x1ad3ae,
      _0x43c163 = await _0x1c75cf['sendMessage'](
        _0x469738[_0x35fb6c(0x16a)] +
          '@' +
          (_0x1050fa[_0x35fb6c(0x19a)] ? 'g.us' : _0x35fb6c(0x13e)),
        { text: (0x0, Mustache_1[_0x35fb6c(0x195)])(_0x239935, _0x1050fa) }
      );
    (0x0, wbotMessageListener_1[_0x35fb6c(0x197)])(
      _0x43c163,
      _0x1050fa,
      _0x469738
    );
  },
  sendMessageLink = async (
    _0x111efe,
    _0x5c32db,
    _0x226cc2,
    _0x4ea0f6,
    _0x41ff10
  ) => {
    const _0x209fbb = a643_0x1ad3ae;
    let _0x3ee4eb;
    try {
      _0x3ee4eb = await _0x111efe[_0x209fbb(0x14c)](
        _0x5c32db[_0x209fbb(0x16a)] +
          '@' +
          (_0x226cc2[_0x209fbb(0x19a)] ? _0x209fbb(0x166) : _0x209fbb(0x13e)),
        {
          document: _0x4ea0f6
            ? { url: _0x4ea0f6 }
            : fs[_0x209fbb(0x16c)](
                _0x209fbb(0x184) + _0x41ff10 + '-' + makeid(0xa)
              ),
          fileName: _0x41ff10,
          mimetype: _0x209fbb(0x157)
        }
      );
    } catch (_0x376ab0) {
      _0x3ee4eb = await _0x111efe['sendMessage'](
        _0x5c32db['number'] +
          '@' +
          (_0x226cc2[_0x209fbb(0x19a)] ? 'g.us' : _0x209fbb(0x13e)),
        {
          text: (0x0, Mustache_1[_0x209fbb(0x195)])(_0x209fbb(0x1a1), _0x226cc2)
        }
      );
    }
    (0x0, wbotMessageListener_1[_0x209fbb(0x197)])(
      _0x3ee4eb,
      _0x226cc2,
      _0x5c32db
    );
  },
  sendMessageImage = async (
    _0x516137,
    _0x4f023f,
    _0x2a2472,
    _0x4af65f,
    _0x5dfde4
  ) => {
    const _0x3c7ceb = a643_0x1ad3ae;
    let _0x52dfa4;
    try {
      _0x52dfa4 = await _0x516137[_0x3c7ceb(0x14c)](
        _0x4f023f['number'] +
          '@' +
          (_0x2a2472[_0x3c7ceb(0x19a)] ? _0x3c7ceb(0x166) : _0x3c7ceb(0x13e)),
        {
          image: _0x4af65f
            ? { url: _0x4af65f }
            : fs[_0x3c7ceb(0x16c)](
                _0x3c7ceb(0x184) + _0x5dfde4 + '-' + makeid(0xa)
              ),
          fileName: _0x5dfde4,
          caption: _0x5dfde4,
          mimetype: 'image/jpeg'
        }
      );
    } catch (_0x10e198) {
      _0x52dfa4 = await _0x516137[_0x3c7ceb(0x14c)](
        _0x4f023f['number'] +
          '@' +
          (_0x2a2472['isGroup'] ? _0x3c7ceb(0x166) : _0x3c7ceb(0x13e)),
        {
          text: (0x0, Mustache_1[_0x3c7ceb(0x195)])(_0x3c7ceb(0x17f), _0x2a2472)
        }
      );
    }
    (0x0, wbotMessageListener_1[_0x3c7ceb(0x197)])(
      _0x52dfa4,
      _0x2a2472,
      _0x4f023f
    );
  },
  sendDialog = async (_0x1d8743, _0x367e3a, _0x2444b8, _0x4b77e7) => {
    const _0x4c9768 = a643_0x1ad3ae,
      _0x4df969 = await (0x0, ShowChatBotServices_1[_0x4c9768(0x195)])(
        _0x1d8743['id']
      );
    if (_0x4df969[_0x4c9768(0x185)]) {
      let _0x8d40a = _0x4b77e7['companyId'];
      const _0x4c46f1 = await CompaniesSettings_1[_0x4c9768(0x195)]['findOne']({
          where: { companyId: _0x8d40a }
        }),
        _0x33a7e9 = _0x4c46f1?.['chatBotType'] || 'text',
        _0x366fe8 = async () => {
          const _0x2c96ab = _0x4c9768;
          let _0x26795f = '';
          _0x4df969[_0x2c96ab(0x185)][_0x2c96ab(0x17a)](
            (_0x5926f6, _0x464065) => {
              const _0x2ce0cc = _0x2c96ab;
              _0x26795f +=
                _0x2ce0cc(0x192) +
                (_0x464065 + 0x1) +
                _0x2ce0cc(0x198) +
                _0x5926f6[_0x2ce0cc(0x15b)] +
                '\x0a';
            }
          );
          const _0x10b83b =
            _0x26795f[_0x2c96ab(0x178)] > 0x0
              ? _0x26795f + _0x2c96ab(0x154)
              : _0x26795f + _0x2c96ab(0x140);
          if (_0x26795f[_0x2c96ab(0x178)] > 0x0) {
            const _0x5494ba = (0x0, Mustache_1['default'])(
                '‎\x20' + _0x1d8743[_0x2c96ab(0x13a)] + '\x0a\x0a' + _0x10b83b,
                _0x4b77e7
              ),
              _0x15fe63 = await sendMessage(
                _0x367e3a,
                _0x2444b8,
                _0x4b77e7,
                _0x5494ba
              );
            return _0x15fe63;
          }
          const _0x2a50c3 = (0x0, Mustache_1[_0x2c96ab(0x195)])(
              '‎\x20' + _0x1d8743['greetingMessage'],
              _0x4b77e7
            ),
            _0x464edb = await sendMessage(
              _0x367e3a,
              _0x2444b8,
              _0x4b77e7,
              _0x2a50c3
            );
          return _0x464edb;
        },
        _0xeb4ae3 = async () => {
          const _0x1a1e58 = _0x4c9768,
            _0x4ddb9a = [];
          _0x4df969[_0x1a1e58(0x185)][_0x1a1e58(0x17a)](
            (_0x43004e, _0x3d1b3f) => {
              const _0x539deb = _0x1a1e58;
              _0x4ddb9a[_0x539deb(0x13b)]({
                buttonId: '' + (_0x3d1b3f + 0x1),
                buttonText: { displayText: _0x43004e[_0x539deb(0x15b)] },
                type: 0x1
              });
            }
          );
          if (_0x4ddb9a[_0x1a1e58(0x178)] > 0x0) {
            const _0x1ff1e0 = {
                text: '‎' + _0x1d8743[_0x1a1e58(0x13a)],
                buttons: _0x4ddb9a,
                headerType: 0x1
              },
              _0x997f36 = await _0x367e3a[_0x1a1e58(0x14c)](
                _0x2444b8[_0x1a1e58(0x16a)] +
                  '@' +
                  (_0x4b77e7[_0x1a1e58(0x19a)]
                    ? _0x1a1e58(0x166)
                    : _0x1a1e58(0x13e)),
                _0x1ff1e0
              );
            return (
              await (0x0, wbotMessageListener_1[_0x1a1e58(0x197)])(
                _0x997f36,
                _0x4b77e7,
                _0x2444b8
              ),
              _0x997f36
            );
          }
          const _0x2e1f91 = '‎' + _0x1d8743[_0x1a1e58(0x13a)],
            _0x46ce8b = await sendMessage(
              _0x367e3a,
              _0x2444b8,
              _0x4b77e7,
              _0x2e1f91
            );
          return _0x46ce8b;
        },
        _0x3d7873 = async () => {
          const _0x27ba61 = _0x4c9768,
            _0x2cc15d = [];
          _0x4df969['options'][_0x27ba61(0x17a)]((_0x9349e0, _0x13cc94) => {
            const _0x124d5d = _0x27ba61;
            _0x2cc15d[_0x124d5d(0x13b)]({
              title: _0x9349e0[_0x124d5d(0x15b)],
              rowId: '' + (_0x13cc94 + 0x1)
            });
          });
          if (_0x2cc15d[_0x27ba61(0x178)] > 0x0) {
            const _0x54c408 = [{ title: 'Menu', rows: _0x2cc15d }],
              _0x103bb7 = {
                text: (0x0, Mustache_1[_0x27ba61(0x195)])(
                  '‎' + _0x1d8743[_0x27ba61(0x13a)],
                  _0x4b77e7
                ),
                buttonText: _0x27ba61(0x1ab),
                sections: _0x54c408
              },
              _0x59d915 = await _0x367e3a[_0x27ba61(0x14c)](
                _0x2444b8[_0x27ba61(0x16a)] +
                  '@' +
                  (_0x4b77e7[_0x27ba61(0x19a)]
                    ? _0x27ba61(0x166)
                    : 's.whatsapp.net'),
                _0x103bb7
              );
            return (
              await (0x0, wbotMessageListener_1[_0x27ba61(0x197)])(
                _0x59d915,
                _0x4b77e7,
                _0x2444b8
              ),
              _0x59d915
            );
          }
          const _0x2694b2 = '‎' + _0x1d8743[_0x27ba61(0x13a)],
            _0x30853f = await sendMessage(
              _0x367e3a,
              _0x2444b8,
              _0x4b77e7,
              _0x2694b2
            );
          return _0x30853f;
        };
      if (_0x33a7e9 === _0x4c9768(0x17b)) return await _0x366fe8();
      if (
        _0x33a7e9 === _0x4c9768(0x1a2) &&
        _0x4df969['options'][_0x4c9768(0x178)] > 0x4
      )
        return await _0x366fe8();
      if (
        _0x33a7e9 === 'button' &&
        _0x4df969[_0x4c9768(0x185)][_0x4c9768(0x178)] <= 0x4
      )
        return await _0xeb4ae3();
      if (_0x33a7e9 === _0x4c9768(0x169)) return await _0x3d7873();
    }
  },
  backToMainMenu = async (_0x3f13c8, _0x193bcf, _0x4944aa) => {
    const _0x3c9e9e = a643_0x1ad3ae;
    await (0x0, UpdateTicketService_1[_0x3c9e9e(0x195)])({
      ticketData: { queueId: null, userId: null },
      ticketId: _0x4944aa['id'],
      companyId: _0x4944aa[_0x3c9e9e(0x18e)]
    });
    const {
        queues: _0x1e8129,
        greetingMessage: _0x55e76e,
        greetingMediaAttachment: _0x1c9bb4
      } = await (0x0, ShowWhatsAppService_1['default'])(
        _0x3f13c8['id'],
        _0x4944aa[_0x3c9e9e(0x18e)]
      ),
      _0x34a4e8 = await CompaniesSettings_1[_0x3c9e9e(0x195)][_0x3c9e9e(0x1a8)](
        { where: { companyId: _0x4944aa[_0x3c9e9e(0x18e)] } }
      ),
      _0x2a8ad2 = async () => {
        const _0x42f3f8 = _0x3c9e9e;
        let _0x17ac40 = '';
        _0x1e8129['forEach']((_0x25d71b, _0x581c88) => {
          const _0x58b60d = a643_0x2c2b;
          _0x17ac40 +=
            _0x58b60d(0x192) +
            (_0x581c88 + 0x1) +
            _0x58b60d(0x198) +
            _0x25d71b[_0x58b60d(0x15b)] +
            '\x0a';
        }),
          (_0x17ac40 += _0x42f3f8(0x1ac));
        const _0x1352ee = (0x0, Mustache_1['default'])(
          '‎\x20' + _0x55e76e + '\x0a\x0a' + _0x17ac40,
          _0x4944aa
        );
        if (_0x1c9bb4 !== null) {
          const _0x457a55 = path_1['default']['resolve'](
              _0x42f3f8(0x16e),
              _0x42f3f8(0x15f) + _0x4944aa[_0x42f3f8(0x18e)],
              _0x4944aa[_0x42f3f8(0x18a)][_0x42f3f8(0x17e)]
            ),
            _0xd6d138 = _0x4944aa['whatsapp'][_0x42f3f8(0x17e)],
            _0x14328f = await (0x0, SendWhatsAppMedia_1['getMessageOptions'])(
              _0xd6d138,
              _0x457a55,
              String(_0x4944aa['companyId']),
              _0x1352ee
            ),
            _0x2596aa = await _0x3f13c8['sendMessage'](
              _0x4944aa['contact'][_0x42f3f8(0x16a)] +
                '@' +
                (_0x4944aa[_0x42f3f8(0x19a)] ? 'g.us' : _0x42f3f8(0x13e)),
              { ..._0x14328f }
            );
          await (0x0, wbotMessageListener_1[_0x42f3f8(0x170)])(
            _0x2596aa,
            _0x4944aa,
            _0x193bcf
          );
        } else {
          const _0x271204 = await _0x3f13c8[_0x42f3f8(0x14c)](
            _0x193bcf[_0x42f3f8(0x16a)] +
              '@' +
              (_0x4944aa[_0x42f3f8(0x19a)] ? 'g.us' : 's.whatsapp.net'),
            { text: _0x1352ee }
          );
          await (0x0, wbotMessageListener_1[_0x42f3f8(0x197)])(
            _0x271204,
            _0x4944aa,
            _0x193bcf
          );
        }
        const _0x316569 = await (0x0,
        DeleteDialogChatBotsServices_1[_0x42f3f8(0x195)])(_0x193bcf['id']);
        return _0x316569;
      };
    if (_0x34a4e8[_0x3c9e9e(0x1a7)] === _0x3c9e9e(0x17b)) return _0x2a8ad2();
  };
function validaCpfCnpj(_0x190b54) {
  const _0x318711 = a643_0x1ad3ae;
  if (_0x190b54[_0x318711(0x178)] == 0xb) {
    var _0x16d869 = _0x190b54[_0x318711(0x160)]();
    (_0x16d869 = _0x16d869[_0x318711(0x182)](/\./g, '')),
      (_0x16d869 = _0x16d869[_0x318711(0x182)]('-', '')),
      (_0x16d869 = _0x16d869[_0x318711(0x141)](''));
    var _0x42d076 = 0x0,
      _0x24d08a = 0x0,
      _0xb9118b = ![];
    for (
      var _0x3bc7c2 = 0x1;
      _0x16d869[_0x318711(0x178)] > _0x3bc7c2;
      _0x3bc7c2++
    ) {
      _0x16d869[_0x3bc7c2 - 0x1] != _0x16d869[_0x3bc7c2] && (_0xb9118b = !![]);
    }
    if (_0xb9118b == ![]) return ![];
    for (
      var _0x3bc7c2 = 0x0, _0x4e780c = 0xa;
      _0x16d869['length'] - 0x2 > _0x3bc7c2;
      _0x3bc7c2++, _0x4e780c--
    ) {
      _0x42d076 += _0x16d869[_0x3bc7c2] * _0x4e780c;
    }
    _0x42d076 = (_0x42d076 * 0xa) % 0xb;
    _0x42d076 == 0xa && (_0x42d076 = 0x0);
    if (_0x42d076 != _0x16d869[0x9]) return ![];
    for (
      var _0x3bc7c2 = 0x0, _0x4e780c = 0xb;
      _0x16d869[_0x318711(0x178)] - 0x1 > _0x3bc7c2;
      _0x3bc7c2++, _0x4e780c--
    ) {
      _0x24d08a += _0x16d869[_0x3bc7c2] * _0x4e780c;
    }
    return (
      (_0x24d08a = (_0x24d08a * 0xa) % 0xb),
      _0x24d08a == 0xa && (_0x24d08a = 0x0),
      _0x24d08a != _0x16d869[0xa] ? ![] : !![]
    );
  } else {
    if (_0x190b54[_0x318711(0x178)] == 0xe) {
      var _0x92ca4a = _0x190b54['trim']();
      (_0x92ca4a = _0x92ca4a[_0x318711(0x182)](/\./g, '')),
        (_0x92ca4a = _0x92ca4a[_0x318711(0x182)]('-', '')),
        (_0x92ca4a = _0x92ca4a['replace']('/', '')),
        (_0x92ca4a = _0x92ca4a[_0x318711(0x141)](''));
      var _0x42d076 = 0x0,
        _0x24d08a = 0x0,
        _0xb9118b = ![];
      for (
        var _0x3bc7c2 = 0x1;
        _0x92ca4a[_0x318711(0x178)] > _0x3bc7c2;
        _0x3bc7c2++
      ) {
        _0x92ca4a[_0x3bc7c2 - 0x1] != _0x92ca4a[_0x3bc7c2] &&
          (_0xb9118b = !![]);
      }
      if (_0xb9118b == ![]) return ![];
      for (
        var _0x3bc7c2 = 0x0, _0x1549d9 = 0x5, _0x2c8428 = 0xd;
        _0x92ca4a[_0x318711(0x178)] - 0x2 > _0x3bc7c2;
        _0x3bc7c2++, _0x1549d9--, _0x2c8428--
      ) {
        _0x1549d9 >= 0x2
          ? (_0x42d076 += _0x92ca4a[_0x3bc7c2] * _0x1549d9)
          : (_0x42d076 += _0x92ca4a[_0x3bc7c2] * _0x2c8428);
      }
      _0x42d076 = _0x42d076 % 0xb;
      _0x42d076 < 0x2 ? (_0x42d076 = 0x0) : (_0x42d076 = 0xb - _0x42d076);
      if (_0x42d076 != _0x92ca4a[0xc]) return ![];
      for (
        var _0x3bc7c2 = 0x0, _0x1549d9 = 0x6, _0x2c8428 = 0xe;
        _0x92ca4a['length'] - 0x1 > _0x3bc7c2;
        _0x3bc7c2++, _0x1549d9--, _0x2c8428--
      ) {
        _0x1549d9 >= 0x2
          ? (_0x24d08a += _0x92ca4a[_0x3bc7c2] * _0x1549d9)
          : (_0x24d08a += _0x92ca4a[_0x3bc7c2] * _0x2c8428);
      }
      return (
        (_0x24d08a = _0x24d08a % 0xb),
        _0x24d08a < 0x2 ? (_0x24d08a = 0x0) : (_0x24d08a = 0xb - _0x24d08a),
        _0x24d08a != _0x92ca4a[0xd] ? ![] : !![]
      );
    } else return ![];
  }
}
function timeout(_0x104330) {
  return new Promise(_0x3f76cd => setTimeout(_0x3f76cd, _0x104330));
}
async function sleep(_0x549ed8) {
  await timeout(_0x549ed8);
}
function firstDayOfMonth(_0x527a17) {
  const _0x322ec8 = a643_0x1ad3ae,
    _0x39cfbd = new Date(),
    _0xe3a790 = new Date(
      _0x39cfbd[_0x322ec8(0x153)](),
      _0x39cfbd['getMonth']() - _0x527a17,
      0x1
    );
  return _0xe3a790;
}
function lastDayOfMonth(_0x30f9ed) {
  const _0x2dac6f = a643_0x1ad3ae,
    _0x44e545 = new Date(),
    _0x5a3916 = new Date(
      _0x44e545['getFullYear'](),
      _0x44e545[_0x2dac6f(0x176)]() + _0x30f9ed,
      0x0
    );
  return _0x5a3916;
}
function dataAtualFormatada(_0xc99a67) {
  const _0x5dfe13 = a643_0x1ad3ae;
  var _0x2f9bf4 = _0xc99a67[_0x5dfe13(0x152)]()[_0x5dfe13(0x15a)](),
    _0x93beb0 =
      _0x2f9bf4[_0x5dfe13(0x178)] == 0x1 ? '0' + _0x2f9bf4 : _0x2f9bf4,
    _0x2d0baf = (_0xc99a67['getMonth']() + 0x1)['toString'](),
    _0x59c3ca = _0x2d0baf['length'] == 0x1 ? '0' + _0x2d0baf : _0x2d0baf,
    _0x585e4e = _0xc99a67[_0x5dfe13(0x153)]();
  return _0x93beb0 + '/' + _0x59c3ca + '/' + _0x585e4e;
}
function makeid(_0x558ff3) {
  const _0x22dd4c = a643_0x1ad3ae;
  var _0x4d1a83 = '',
    _0x32ef8d =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    _0x49d3d6 = _0x32ef8d['length'];
  for (var _0x5a1e52 = 0x0; _0x5a1e52 < _0x558ff3; _0x5a1e52++) {
    _0x4d1a83 += _0x32ef8d[_0x22dd4c(0x19f)](
      Math['floor'](Math['random']() * _0x49d3d6)
    );
  }
  return _0x4d1a83;
}
function a643_0x2c2b(_0x1f9f76, _0x41c48d) {
  const _0x4a2d26 = a643_0x4a2d();
  return (
    (a643_0x2c2b = function (_0x2c2b64, _0x1406d0) {
      _0x2c2b64 = _0x2c2b64 - 0x137;
      let _0x437b63 = _0x4a2d26[_0x2c2b64];
      return _0x437b63;
    }),
    a643_0x2c2b(_0x1f9f76, _0x41c48d)
  );
}
function replaceAll(_0x178cad, _0x198fc0, _0x38af86) {
  const _0x5d9834 = a643_0x1ad3ae;
  return _0x178cad[_0x5d9834(0x182)](new RegExp(_0x198fc0, 'g'), _0x38af86);
}
function formatDate(_0x39de84) {
  const _0x10283e = a643_0x1ad3ae;
  return (
    _0x39de84[_0x10283e(0x18f)](0x8, 0xa) +
    '/' +
    _0x39de84[_0x10283e(0x18f)](0x5, 0x7) +
    '/' +
    _0x39de84[_0x10283e(0x18f)](0x0, 0x4)
  );
}
function sortfunction(_0x46610e, _0x4019e2) {
  const _0x46b95c = a643_0x1ad3ae;
  return _0x46610e[_0x46b95c(0x155)][_0x46b95c(0x1a5)](
    _0x4019e2[_0x46b95c(0x155)]
  );
}
async function sendMsgAndCloseTicket(_0x1fa021, _0x3ae945, _0x1f5331) {
  const _0x5b55e5 = a643_0x1ad3ae,
    _0x5b3bf9 = {
      ticketData: {
        status: _0x5b55e5(0x167),
        userId: _0x1f5331?.[_0x5b55e5(0x173)] || null,
        sendFarewellMessage: ![],
        amountUsedBotQueues: 0x0
      },
      ticketId: _0x1f5331['id'],
      companyId: _0x1f5331[_0x5b55e5(0x18e)]
    };
  await sleep(0x7d0), await (0x0, UpdateTicketService_1['default'])(_0x5b3bf9);
}
const sayChatbot = async (
  _0x25241e,
  _0x4c9ef4,
  _0x5181b4,
  _0x547ca5,
  _0x37c595
) => {
  const _0x303737 = a643_0x1ad3ae,
    _0xf84a79 =
      _0x37c595?.[_0x303737(0x149)]?.[_0x303737(0x19c)]?.[_0x303737(0x156)] ||
      _0x37c595?.[_0x303737(0x149)]?.[_0x303737(0x165)]?.['singleSelectReply'][
        _0x303737(0x1a9)
      ] ||
      (0x0, wbotMessageListener_1[_0x303737(0x163)])(_0x37c595);
  if (!_0x25241e && _0xf84a79 && _0x37c595[_0x303737(0x168)][_0x303737(0x139)])
    return;
  const _0x5a644f = await (0x0, ShowDialogChatBotsServices_1[_0x303737(0x195)])(
    _0x547ca5['id']
  );
  if (_0xf84a79[_0x303737(0x19d)]() === _0x303737(0x177)) {
    const _0x1673e7 = {
      ticketData: {
        status: 'closed',
        sendFarewellMessage: !![],
        amountUsedBotQueues: 0x0
      },
      ticketId: _0x5181b4['id'],
      companyId: _0x5181b4[_0x303737(0x18e)]
    };
    await (0x0, UpdateTicketService_1[_0x303737(0x195)])(_0x1673e7);
    return;
  }
  if (_0xf84a79 === '#') {
    const _0x273d24 = await backToMainMenu(_0x4c9ef4, _0x547ca5, _0x5181b4);
    return;
  }
  if (!_0x5a644f) {
    const _0x191dbf = await (0x0, ShowQueueService_1[_0x303737(0x195)])(
        _0x25241e,
        _0x5181b4[_0x303737(0x18e)]
      ),
      _0x3c9e65 =
        _0x37c595?.[_0x303737(0x149)]?.[_0x303737(0x19c)]?.[_0x303737(0x156)] ||
        _0x37c595?.[_0x303737(0x149)]?.[_0x303737(0x165)]?.[
          'singleSelectReply'
        ][_0x303737(0x1a9)] ||
        (0x0, wbotMessageListener_1[_0x303737(0x163)])(_0x37c595),
      _0x28ad2e = _0x191dbf[_0x303737(0x137)][+_0x3c9e65 - 0x1];
    if (_0x28ad2e) {
      if (_0x28ad2e[_0x303737(0x181)] === 'integration')
        try {
          const _0x4078ab = {
            ticketData: {
              integrationId: _0x28ad2e[_0x303737(0x145)],
              useIntegration: !![],
              status: _0x303737(0x196)
            },
            ticketId: _0x5181b4['id']
          };
          await (0x0, UpdateTicketService_1[_0x303737(0x195)])({
            ticketData: { ..._0x4078ab['ticketData'] },
            ticketId: _0x4078ab[_0x303737(0x164)],
            companyId: _0x5181b4[_0x303737(0x18e)]
          });
        } catch (_0x5ae308) {
          await (0x0, exports[_0x303737(0x19e)])(
            _0x547ca5,
            _0x28ad2e['id'],
            _0x5181b4
          );
        }
      else {
        if (_0x28ad2e[_0x303737(0x181)] === _0x303737(0x13d))
          try {
            const _0x43a0f9 = {
              ticketData: {
                queueId: _0x28ad2e[_0x303737(0x146)],
                status: _0x303737(0x196)
              },
              ticketId: _0x5181b4['id']
            };
            await (0x0, UpdateTicketService_1[_0x303737(0x195)])({
              ticketData: { ..._0x43a0f9[_0x303737(0x18d)] },
              ticketId: _0x43a0f9['ticketId'],
              companyId: _0x5181b4[_0x303737(0x18e)]
            });
          } catch (_0x12b4aa) {
            await (0x0, exports[_0x303737(0x19e)])(
              _0x547ca5,
              _0x28ad2e['id'],
              _0x5181b4
            );
          }
        else {
          if (_0x28ad2e[_0x303737(0x181)] === _0x303737(0x14f))
            try {
              const _0x276dbb = {
                ticketData: {
                  queueId: _0x28ad2e[_0x303737(0x146)],
                  userId: _0x28ad2e[_0x303737(0x188)],
                  status: 'pending'
                },
                ticketId: _0x5181b4['id']
              };
              await (0x0, UpdateTicketService_1[_0x303737(0x195)])({
                ticketData: { ..._0x276dbb[_0x303737(0x18d)] },
                ticketId: _0x276dbb[_0x303737(0x164)],
                companyId: _0x5181b4[_0x303737(0x18e)]
              });
            } catch (_0x113929) {
              await (0x0, exports[_0x303737(0x19e)])(
                _0x547ca5,
                _0x28ad2e['id'],
                _0x5181b4
              );
            }
        }
      }
      await (0x0, exports[_0x303737(0x19e)])(
        _0x547ca5,
        _0x28ad2e['id'],
        _0x5181b4
      );
      let _0x372b6d;
      _0x28ad2e?.[_0x303737(0x13a)] &&
        (_0x372b6d = await sendDialog(
          _0x28ad2e,
          _0x4c9ef4,
          _0x547ca5,
          _0x5181b4
        ));
      if (_0x28ad2e[_0x303737(0x181)] === _0x303737(0x17d))
        try {
          const _0x2cc774 = path_1[_0x303737(0x195)][_0x303737(0x199)](
              __dirname,
              '..',
              '..',
              '..',
              'public'
            ),
            _0x6ae084 = await (0x0, ShowService_1[_0x303737(0x195)])(
              _0x28ad2e['optFileId'],
              _0x5181b4[_0x303737(0x18e)]
            ),
            _0x25f8a2 = path_1[_0x303737(0x195)][_0x303737(0x199)](
              _0x2cc774,
              'company' + _0x5181b4[_0x303737(0x18e)],
              _0x303737(0x13c),
              String(_0x6ae084['id'])
            );
          for (const [_0x230c49, _0xcf0df7] of _0x6ae084['options'][
            'entries'
          ]()) {
            const _0x16cd9e = {
              fieldname: _0x303737(0x189),
              originalname: _0xcf0df7[_0x303737(0x175)],
              encoding: '7bit',
              mimetype: _0xcf0df7[_0x303737(0x15c)],
              filename: _0xcf0df7[_0x303737(0x175)],
              path: path_1['default'][_0x303737(0x199)](
                _0x25f8a2,
                _0xcf0df7[_0x303737(0x175)]
              )
            };
            await (0x0, SendWhatsAppMedia_1[_0x303737(0x195)])({
              media: _0x16cd9e,
              ticket: _0x5181b4,
              body: _0xcf0df7[_0x303737(0x15b)],
              isForwarded: ![]
            });
          }
        } catch (_0x19cb87) {
          await (0x0, exports[_0x303737(0x19e)])(
            _0x547ca5,
            _0x28ad2e['id'],
            _0x5181b4
          );
        }
      return (
        _0x28ad2e[_0x303737(0x194)] &&
          (await sendMsgAndCloseTicket(
            _0x4c9ef4,
            _0x5181b4[_0x303737(0x150)],
            _0x5181b4
          )),
        _0x372b6d
      );
    }
  }
  if (_0x5a644f) {
    const _0x310aa3 = isNumeric(_0xf84a79) ? _0xf84a79 : 0x1,
      _0x35d623 = await (0x0, ShowChatBotServices_1['default'])(
        _0x5a644f[_0x303737(0x193)]
      ),
      _0x2b7474 = _0x35d623[_0x303737(0x185)][+_0x310aa3 - 0x1]
        ? _0x35d623[_0x303737(0x185)][+_0x310aa3 - 0x1]
        : _0x35d623[_0x303737(0x185)][0x0];
    if (!_0x2b7474[_0x303737(0x13a)]) {
      await (0x0, DeleteDialogChatBotsServices_1['default'])(_0x547ca5['id']);
      return;
    }
    if (_0x2b7474) {
      if (_0x2b7474[_0x303737(0x181)] === _0x303737(0x144))
        try {
          const _0x48d0a7 = {
            ticketData: {
              integrationId: _0x2b7474[_0x303737(0x145)],
              useIntegration: !![],
              status: 'pending'
            },
            ticketId: _0x5181b4['id']
          };
          await (0x0, UpdateTicketService_1[_0x303737(0x195)])({
            ticketData: { ..._0x48d0a7[_0x303737(0x18d)] },
            ticketId: _0x48d0a7['ticketId'],
            companyId: _0x5181b4[_0x303737(0x18e)]
          });
        } catch (_0x4a3577) {
          await (0x0, exports['deleteAndCreateDialogStage'])(
            _0x547ca5,
            _0x2b7474['id'],
            _0x5181b4
          );
        }
      else {
        if (_0x2b7474[_0x303737(0x181)] === _0x303737(0x13d))
          try {
            const _0x370037 = {
              ticketData: {
                queueId: _0x2b7474[_0x303737(0x146)],
                status: 'pending'
              },
              ticketId: _0x5181b4['id']
            };
            await (0x0, UpdateTicketService_1[_0x303737(0x195)])({
              ticketData: { ..._0x370037['ticketData'] },
              ticketId: _0x370037[_0x303737(0x164)],
              companyId: _0x5181b4[_0x303737(0x18e)]
            });
          } catch (_0x481eea) {
            await (0x0, exports['deleteAndCreateDialogStage'])(
              _0x547ca5,
              _0x2b7474['id'],
              _0x5181b4
            );
          }
        else {
          if (_0x2b7474[_0x303737(0x181)] === _0x303737(0x14f))
            try {
              const _0x1aab1b = {
                ticketData: {
                  queueId: _0x2b7474[_0x303737(0x146)],
                  userId: _0x2b7474[_0x303737(0x188)],
                  status: _0x303737(0x196)
                },
                ticketId: _0x5181b4['id']
              };
              await (0x0, UpdateTicketService_1['default'])({
                ticketData: { ..._0x1aab1b[_0x303737(0x18d)] },
                ticketId: _0x1aab1b[_0x303737(0x164)],
                companyId: _0x5181b4[_0x303737(0x18e)]
              });
            } catch (_0xf6bb38) {
              await (0x0, exports['deleteAndCreateDialogStage'])(
                _0x547ca5,
                _0x2b7474['id'],
                _0x5181b4
              );
            }
        }
      }
      await (0x0, exports[_0x303737(0x19e)])(
        _0x547ca5,
        _0x2b7474['id'],
        _0x5181b4
      );
      if (_0x2b7474[_0x303737(0x181)] === _0x303737(0x17d))
        try {
          const _0x34a569 = path_1[_0x303737(0x195)][_0x303737(0x199)](
              __dirname,
              '..',
              '..',
              '..',
              _0x303737(0x16e)
            ),
            _0x6d6bf = await (0x0, ShowService_1['default'])(
              _0x2b7474[_0x303737(0x159)],
              _0x5181b4[_0x303737(0x18e)]
            ),
            _0x2e9009 = path_1['default'][_0x303737(0x199)](
              _0x34a569,
              _0x303737(0x15f) + _0x5181b4['companyId'],
              _0x303737(0x13c),
              String(_0x6d6bf['id'])
            );
          for (const [_0x306437, _0xca713e] of _0x6d6bf[_0x303737(0x185)][
            _0x303737(0x138)
          ]()) {
            const _0x3c619f = {
              fieldname: 'medias',
              originalname: _0xca713e[_0x303737(0x175)],
              encoding: _0x303737(0x190),
              mimetype: _0xca713e[_0x303737(0x15c)],
              filename: _0xca713e[_0x303737(0x175)],
              path: path_1[_0x303737(0x195)]['resolve'](
                _0x2e9009,
                _0xca713e['path']
              )
            };
            await (0x0, SendWhatsAppMedia_1[_0x303737(0x195)])({
              media: _0x3c619f,
              ticket: _0x5181b4,
              body: _0xca713e[_0x303737(0x15b)],
              isForwarded: ![]
            });
          }
        } catch (_0x123f62) {
          await (0x0, exports[_0x303737(0x19e)])(
            _0x547ca5,
            _0x2b7474['id'],
            _0x5181b4
          );
        }
      _0x2b7474[_0x303737(0x194)] &&
        (await sendMsgAndCloseTicket(
          _0x4c9ef4,
          _0x5181b4[_0x303737(0x150)],
          _0x5181b4
        ));
      await (0x0, exports[_0x303737(0x19e)])(
        _0x547ca5,
        _0x2b7474['id'],
        _0x5181b4
      );
      const _0x216881 = await sendDialog(
        _0x2b7474,
        _0x4c9ef4,
        _0x547ca5,
        _0x5181b4
      );
      return _0x216881;
    }
  }
};
exports[a643_0x1ad3ae(0x15e)] = sayChatbot;
