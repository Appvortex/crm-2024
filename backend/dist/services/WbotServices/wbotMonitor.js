'use strict';
const a660_0x311716 = a660_0x28d1;
(function (_0x3e5134, _0x2ebf28) {
  const _0x22bd15 = a660_0x28d1,
    _0x16e3d6 = _0x3e5134();
  while (!![]) {
    try {
      const _0x1f9641 =
        parseInt(_0x22bd15(0x184)) / 0x1 +
        (parseInt(_0x22bd15(0x1a8)) / 0x2) *
          (parseInt(_0x22bd15(0x1a4)) / 0x3) +
        -parseInt(_0x22bd15(0x1b0)) / 0x4 +
        -parseInt(_0x22bd15(0x1a0)) / 0x5 +
        (parseInt(_0x22bd15(0x1a9)) / 0x6) *
          (parseInt(_0x22bd15(0x1b1)) / 0x7) +
        parseInt(_0x22bd15(0x18a)) / 0x8 +
        -parseInt(_0x22bd15(0x18b)) / 0x9;
      if (_0x1f9641 === _0x2ebf28) break;
      else _0x16e3d6['push'](_0x16e3d6['shift']());
    } catch (_0x39343b) {
      _0x16e3d6['push'](_0x16e3d6['shift']());
    }
  }
})(a660_0x394f, 0xf1c7b);
var __createBinding =
    (this && this['__createBinding']) ||
    (Object[a660_0x311716(0x1a7)]
      ? function (_0x24d277, _0x2f9d6f, _0x3d154b, _0x42a06c) {
          const _0xd8d5d3 = a660_0x311716;
          if (_0x42a06c === undefined) _0x42a06c = _0x3d154b;
          var _0x10145f = Object['getOwnPropertyDescriptor'](
            _0x2f9d6f,
            _0x3d154b
          );
          (!_0x10145f ||
            ('get' in _0x10145f
              ? !_0x2f9d6f[_0xd8d5d3(0x1b7)]
              : _0x10145f[_0xd8d5d3(0x17f)] || _0x10145f['configurable'])) &&
            (_0x10145f = {
              enumerable: !![],
              get: function () {
                return _0x2f9d6f[_0x3d154b];
              }
            }),
            Object[_0xd8d5d3(0x19b)](_0x24d277, _0x42a06c, _0x10145f);
        }
      : function (_0x329e33, _0x2732be, _0x442927, _0x2cdb80) {
          if (_0x2cdb80 === undefined) _0x2cdb80 = _0x442927;
          _0x329e33[_0x2cdb80] = _0x2732be[_0x442927];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object[a660_0x311716(0x1a7)]
      ? function (_0x184921, _0x48dc4f) {
          const _0x36f760 = a660_0x311716;
          Object[_0x36f760(0x19b)](_0x184921, _0x36f760(0x1b8), {
            enumerable: !![],
            value: _0x48dc4f
          });
        }
      : function (_0x1aceb0, _0x2fdaf0) {
          _0x1aceb0['default'] = _0x2fdaf0;
        }),
  __importStar =
    (this && this[a660_0x311716(0x190)]) ||
    function (_0x2102c0) {
      const _0x3737bd = a660_0x311716;
      if (_0x2102c0 && _0x2102c0[_0x3737bd(0x1b7)]) return _0x2102c0;
      var _0x170d33 = {};
      if (_0x2102c0 != null) {
        for (var _0x154e90 in _0x2102c0)
          if (
            _0x154e90 !== _0x3737bd(0x1b8) &&
            Object[_0x3737bd(0x1a6)][_0x3737bd(0x1a1)][_0x3737bd(0x180)](
              _0x2102c0,
              _0x154e90
            )
          )
            __createBinding(_0x170d33, _0x2102c0, _0x154e90);
      }
      return __setModuleDefault(_0x170d33, _0x2102c0), _0x170d33;
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0x3a1feb) {
      const _0x56e109 = a660_0x311716;
      return _0x3a1feb && _0x3a1feb[_0x56e109(0x1b7)]
        ? _0x3a1feb
        : { default: _0x3a1feb };
    };
Object[a660_0x311716(0x19b)](exports, a660_0x311716(0x1b7), { value: !![] });
const baileys_1 = require(a660_0x311716(0x183)),
  Sentry = __importStar(require(a660_0x311716(0x193))),
  fs_1 = __importDefault(require('fs')),
  Contact_1 = __importDefault(require(a660_0x311716(0x1b2))),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  logger_1 = require('../../utils/logger'),
  CreateOrUpdateBaileysService_1 = __importDefault(
    require('../BaileysServices/CreateOrUpdateBaileysService')
  ),
  CreateMessageService_1 = __importDefault(require(a660_0x311716(0x186))),
  CompaniesSettings_1 = __importDefault(require(a660_0x311716(0x185))),
  path_1 = __importDefault(require(a660_0x311716(0x18c))),
  wbotMessageListener_1 = require('./wbotMessageListener');
let i = 0x0;
setInterval(() => {
  i = 0x0;
}, 0x1388);
const wbotMonitor = async (_0xaf30d4, _0x2faae8, _0x27953e) => {
  const _0x3a2a42 = a660_0x311716;
  try {
    _0xaf30d4['ws']['on'](_0x3a2a42(0x19c), async _0x320be9 => {
      const _0x2d9aba = _0x3a2a42,
        _0x9a4b4e = _0x320be9[_0x2d9aba(0x1ae)][0x0];
      await new Promise(_0x41690b => setTimeout(_0x41690b, i * 0x28a)), i++;
      if (
        _0x9a4b4e[_0x2d9aba(0x189)] === 'terminate' &&
        !_0x320be9['attrs'][_0x2d9aba(0x1b3)][_0x2d9aba(0x182)](
          _0x2d9aba(0x1ad)
        )
      ) {
        const _0x134fe0 = await CompaniesSettings_1['default'][
          _0x2d9aba(0x181)
        ]({ where: { companyId: _0x27953e } });
        if (_0x134fe0['acceptCallWhatsapp'] === _0x2d9aba(0x17e)) {
          const _0x181940 = await _0xaf30d4[_0x2d9aba(0x1a3)](
              _0x320be9[_0x2d9aba(0x19e)]['from'],
              { text: _0x2d9aba(0x18d) }
            ),
            _0x146a8c = _0x320be9[_0x2d9aba(0x19e)]['from']
              [_0x2d9aba(0x19a)](':')[0x0]
              [_0x2d9aba(0x1b4)](/\D/g, ''),
            _0x33bbf4 = await Contact_1[_0x2d9aba(0x1b8)][_0x2d9aba(0x181)]({
              where: { companyId: _0x27953e, number: _0x146a8c }
            });
          if (!_0x33bbf4) return;
          const _0x9c6166 = await Ticket_1[_0x2d9aba(0x1b8)]['findOne']({
            where: {
              contactId: _0x33bbf4['id'],
              whatsappId: _0xaf30d4['id'],
              companyId: _0x27953e
            },
            order: [['id', _0x2d9aba(0x1b6)]]
          });
          if (!_0x9c6166) return;
          await (0x0, wbotMessageListener_1['verifyMessage'])(
            _0x181940,
            _0x9c6166,
            _0x33bbf4
          );
          const _0x1ff223 = new Date(),
            _0x430823 = _0x1ff223[_0x2d9aba(0x18e)](),
            _0x583b19 = _0x1ff223[_0x2d9aba(0x187)](),
            _0x4eda00 =
              'Chamada\x20de\x20voz/vídeo\x20perdida\x20às\x20' +
              _0x430823 +
              ':' +
              _0x583b19,
            _0x3efe8f = {
              wid: _0x9a4b4e[_0x2d9aba(0x19e)][_0x2d9aba(0x195)],
              ticketId: _0x9c6166['id'],
              contactId: _0x33bbf4['id'],
              body: _0x4eda00,
              fromMe: ![],
              mediaType: 'call_log',
              read: !![],
              quotedMsgId: null,
              ack: 0x1
            };
          return (
            await _0x9c6166[_0x2d9aba(0x19f)]({ lastMessage: _0x4eda00 }),
            _0x9c6166[_0x2d9aba(0x199)] === 'closed' &&
              (await _0x9c6166[_0x2d9aba(0x19f)]({ status: _0x2d9aba(0x194) })),
            (0x0, CreateMessageService_1[_0x2d9aba(0x1b8)])({
              messageData: _0x3efe8f,
              companyId: _0x27953e
            })
          );
        }
      }
    });
    function _0x8acad1(_0x47d4be) {
      const _0x45eea7 = _0x3a2a42;
      return _0x47d4be[_0x45eea7(0x1b4)](/[\x00-\x1F"\\']/g, '');
    }
    _0xaf30d4['ev']['on']('contacts.upsert', async _0x511c50 => {
      const _0xbcf5a = _0x3a2a42,
        _0x665382 = [];
      try {
        Promise['all'](
          _0x511c50[_0xbcf5a(0x191)](async _0x32dfed => {
            const _0x161850 = _0xbcf5a;
            if (
              !(0x0, baileys_1[_0x161850(0x18f)])(_0x32dfed['id']) &&
              !(0x0, baileys_1['isJidStatusBroadcast'])(_0x32dfed['id']) &&
              (0x0, baileys_1[_0x161850(0x1ab)])(_0x32dfed['id'])
            ) {
              const _0x2c1170 = {
                id: _0x32dfed['id'],
                name: _0x32dfed[_0x161850(0x198)]
                  ? _0x8acad1(_0x32dfed[_0x161850(0x198)])
                  : _0x32dfed['id']
                      ['split']('@')[0x0]
                      [_0x161850(0x19a)](':')[0x0]
              };
              _0x665382[_0x161850(0x1a2)](_0x2c1170);
            }
          })
        );
        const _0x4a04c3 = path_1[_0xbcf5a(0x1b8)][_0xbcf5a(0x197)](
          __dirname,
          '..',
          '..',
          '..',
          'public'
        );
        !fs_1['default']['existsSync'](
          path_1['default']['join'](_0x4a04c3, _0xbcf5a(0x19d) + _0x27953e)
        ) &&
          (fs_1[_0xbcf5a(0x1b8)][_0xbcf5a(0x1ac)](
            path_1['default'][_0xbcf5a(0x1a5)](
              _0x4a04c3,
              _0xbcf5a(0x19d) + _0x27953e
            ),
            { recursive: !![] }
          ),
          fs_1[_0xbcf5a(0x1b8)][_0xbcf5a(0x1bc)](
            path_1['default'][_0xbcf5a(0x1a5)](
              _0x4a04c3,
              _0xbcf5a(0x19d) + _0x27953e
            ),
            0x1ff
          ));
        const _0x21260b = path_1[_0xbcf5a(0x1b8)][_0xbcf5a(0x1a5)](
          _0x4a04c3,
          _0xbcf5a(0x19d) + _0x27953e,
          _0xbcf5a(0x196)
        );
        fs_1['default'][_0xbcf5a(0x1aa)](_0x21260b) &&
          (await fs_1[_0xbcf5a(0x1b8)][_0xbcf5a(0x1b9)](_0x21260b)),
          await fs_1[_0xbcf5a(0x1b8)]['promises'][_0xbcf5a(0x1ba)](
            _0x21260b,
            JSON[_0xbcf5a(0x1b5)](_0x665382, null, 0x2)
          ),
          console[_0xbcf5a(0x1af)](_0x665382);
      } catch (_0x1f8083) {
        Sentry[_0xbcf5a(0x188)](_0x1f8083),
          logger_1[_0xbcf5a(0x17d)][_0xbcf5a(0x192)](
            _0xbcf5a(0x1bb) + JSON['stringify'](_0x1f8083)
          );
      }
      try {
        await (0x0, CreateOrUpdateBaileysService_1[_0xbcf5a(0x1b8)])({
          whatsappId: _0x2faae8['id'],
          contacts: _0x665382
        });
      } catch (_0x3c06d0) {
        logger_1[_0xbcf5a(0x17d)][_0xbcf5a(0x192)](_0x3c06d0);
      }
    });
  } catch (_0x476d9a) {
    Sentry[_0x3a2a42(0x188)](_0x476d9a),
      logger_1[_0x3a2a42(0x17d)][_0x3a2a42(0x192)](_0x476d9a);
  }
};
exports['default'] = wbotMonitor;
function a660_0x28d1(_0x46278f, _0x2885ab) {
  const _0x394f91 = a660_0x394f();
  return (
    (a660_0x28d1 = function (_0x28d185, _0x270850) {
      _0x28d185 = _0x28d185 - 0x17d;
      let _0xe56cf8 = _0x394f91[_0x28d185];
      return _0xe56cf8;
    }),
    a660_0x28d1(_0x46278f, _0x2885ab)
  );
}
function a660_0x394f() {
  const _0x4032bb = [
    '@sentry/node',
    'pending',
    'call-id',
    'contactJson.txt',
    'resolve',
    'name',
    'status',
    'split',
    'defineProperty',
    'CB:call',
    'company',
    'attrs',
    'update',
    '3008170EZktfe',
    'hasOwnProperty',
    'push',
    'sendMessage',
    '2608923RmvOqc',
    'join',
    'prototype',
    'create',
    '2XluUHH',
    '453246dDUdCr',
    'existsSync',
    'isJidUser',
    'mkdirSync',
    '@call',
    'content',
    'log',
    '1306176pzwyrq',
    '119qjckpo',
    '../../models/Contact',
    'from',
    'replace',
    'stringify',
    'DESC',
    '__esModule',
    'default',
    'unlinkSync',
    'writeFile',
    'Erro\x20contacts.upsert:\x20',
    'chmodSync',
    'logger',
    'enabled',
    'writable',
    'call',
    'findOne',
    'includes',
    '@whiskeysockets/baileys',
    '334606AMNfhd',
    '../../models/CompaniesSettings',
    '../MessageServices/CreateMessageService',
    'getMinutes',
    'captureException',
    'tag',
    '4356024DpXHEC',
    '10029942DTBhKf',
    'path',
    '‎\x20Mensaje\x20Automático:\x0a\x0aLas\x20llamadas\x20de\x20voz\x20y\x20vídeo\x20están\x20deshabilitadas\x20para\x20este\x20WhatsApp,\x20por\x20favor,\x20envía\x20un\x20mensaje\x20de\x20texto.\x20Gracias',
    'getHours',
    'isJidBroadcast',
    '__importStar',
    'map',
    'error'
  ];
  a660_0x394f = function () {
    return _0x4032bb;
  };
  return a660_0x394f();
}
