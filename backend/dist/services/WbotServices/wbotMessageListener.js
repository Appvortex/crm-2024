'use strict';
const a659_0x31ccb2 = a659_0x1c81;
(function (_0x1aa70f, _0x4a7e50) {
  const _0x4ec35b = a659_0x1c81,
    _0x2bb5c8 = _0x1aa70f();
  while (!![]) {
    try {
      const _0x4eaa05 =
        (-parseInt(_0x4ec35b(0x247)) / 0x1) *
          (-parseInt(_0x4ec35b(0x1ca)) / 0x2) +
        (parseInt(_0x4ec35b(0x291)) / 0x3) *
          (parseInt(_0x4ec35b(0x2cb)) / 0x4) +
        -parseInt(_0x4ec35b(0x1f3)) / 0x5 +
        (-parseInt(_0x4ec35b(0x30c)) / 0x6) *
          (-parseInt(_0x4ec35b(0x2ba)) / 0x7) +
        -parseInt(_0x4ec35b(0x2d3)) / 0x8 +
        -parseInt(_0x4ec35b(0x2ca)) / 0x9 +
        parseInt(_0x4ec35b(0x273)) / 0xa;
      if (_0x4eaa05 === _0x4a7e50) break;
      else _0x2bb5c8['push'](_0x2bb5c8['shift']());
    } catch (_0x5ba39b) {
      _0x2bb5c8['push'](_0x2bb5c8['shift']());
    }
  }
})(a659_0x20d0, 0x649e6);
var __createBinding =
    (this && this[a659_0x31ccb2(0x265)]) ||
    (Object[a659_0x31ccb2(0x259)]
      ? function (_0x3af49e, _0x1a27d1, _0xca8e3a, _0xbd6955) {
          const _0x2865d2 = a659_0x31ccb2;
          if (_0xbd6955 === undefined) _0xbd6955 = _0xca8e3a;
          var _0x5c5aac = Object[_0x2865d2(0x2d2)](_0x1a27d1, _0xca8e3a);
          (!_0x5c5aac ||
            (_0x2865d2(0x1d2) in _0x5c5aac
              ? !_0x1a27d1[_0x2865d2(0x2ac)]
              : _0x5c5aac['writable'] || _0x5c5aac[_0x2865d2(0x264)])) &&
            (_0x5c5aac = {
              enumerable: !![],
              get: function () {
                return _0x1a27d1[_0xca8e3a];
              }
            }),
            Object['defineProperty'](_0x3af49e, _0xbd6955, _0x5c5aac);
        }
      : function (_0x58b51e, _0x198b9e, _0x539149, _0x7af620) {
          if (_0x7af620 === undefined) _0x7af620 = _0x539149;
          _0x58b51e[_0x7af620] = _0x198b9e[_0x539149];
        }),
  __setModuleDefault =
    (this && this[a659_0x31ccb2(0x26b)]) ||
    (Object['create']
      ? function (_0x13d4fa, _0x398716) {
          const _0x250212 = a659_0x31ccb2;
          Object[_0x250212(0x2a7)](_0x13d4fa, _0x250212(0x222), {
            enumerable: !![],
            value: _0x398716
          });
        }
      : function (_0x583eef, _0x32b33f) {
          const _0x4e1ee9 = a659_0x31ccb2;
          _0x583eef[_0x4e1ee9(0x222)] = _0x32b33f;
        }),
  __importStar =
    (this && this[a659_0x31ccb2(0x212)]) ||
    function (_0x46bfda) {
      const _0x274fc7 = a659_0x31ccb2;
      if (_0x46bfda && _0x46bfda[_0x274fc7(0x2ac)]) return _0x46bfda;
      var _0x18fc24 = {};
      if (_0x46bfda != null) {
        for (var _0x586b26 in _0x46bfda)
          if (
            _0x586b26 !== _0x274fc7(0x222) &&
            Object[_0x274fc7(0x24b)][_0x274fc7(0x1f8)]['call'](
              _0x46bfda,
              _0x586b26
            )
          )
            __createBinding(_0x18fc24, _0x46bfda, _0x586b26);
      }
      return __setModuleDefault(_0x18fc24, _0x46bfda), _0x18fc24;
    },
  __importDefault =
    (this && this[a659_0x31ccb2(0x279)]) ||
    function (_0x4b1786) {
      const _0x4586b4 = a659_0x31ccb2;
      return _0x4b1786 && _0x4b1786[_0x4586b4(0x2ac)]
        ? _0x4b1786
        : { default: _0x4b1786 };
    };
Object[a659_0x31ccb2(0x2a7)](exports, '__esModule', { value: !![] }),
  (exports[a659_0x31ccb2(0x2b9)] =
    exports[a659_0x31ccb2(0x293)] =
    exports[a659_0x31ccb2(0x1ad)] =
    exports[a659_0x31ccb2(0x31c)] =
    exports['handleMessageIntegration'] =
    exports['handleRating'] =
    exports[a659_0x31ccb2(0x31b)] =
    exports[a659_0x31ccb2(0x2ce)] =
    exports['verifyMediaMessage'] =
    exports[a659_0x31ccb2(0x1e1)] =
    exports[a659_0x31ccb2(0x174)] =
    exports['getQuotedMessage'] =
    exports[a659_0x31ccb2(0x24c)] =
      void 0x0);
const path_1 = __importStar(require('path')),
  util_1 = require(a659_0x31ccb2(0x1e4)),
  fs_1 = require('fs'),
  fs_2 = __importDefault(require('fs')),
  Sentry = __importStar(require(a659_0x31ccb2(0x1f5))),
  lodash_1 = require(a659_0x31ccb2(0x290)),
  baileys_1 = require(a659_0x31ccb2(0x20e)),
  Contact_1 = __importDefault(require('../../models/Contact')),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  Message_1 = __importDefault(require('../../models/Message')),
  socket_1 = require(a659_0x31ccb2(0x1c5)),
  CreateMessageService_1 = __importDefault(
    require('../MessageServices/CreateMessageService')
  ),
  logger_1 = require(a659_0x31ccb2(0x2df)),
  CreateOrUpdateContactService_1 = __importDefault(
    require(a659_0x31ccb2(0x1c0))
  ),
  FindOrCreateTicketService_1 = __importDefault(require(a659_0x31ccb2(0x240))),
  ShowWhatsAppService_1 = __importDefault(
    require('../WhatsappService/ShowWhatsAppService')
  ),
  Debounce_1 = require(a659_0x31ccb2(0x2d8)),
  UpdateTicketService_1 = __importDefault(require(a659_0x31ccb2(0x239))),
  Mustache_1 = __importDefault(require('../../helpers/Mustache')),
  UserRating_1 = __importDefault(require(a659_0x31ccb2(0x1cd))),
  SendWhatsAppMessage_1 = __importDefault(require('./SendWhatsAppMessage')),
  sendFacebookMessage_1 = __importDefault(require(a659_0x31ccb2(0x208))),
  moment_1 = __importDefault(require(a659_0x31ccb2(0x176))),
  Queue_1 = __importDefault(require('../../models/Queue')),
  FindOrCreateATicketTrakingService_1 = __importDefault(
    require(a659_0x31ccb2(0x1bf))
  ),
  VerifyCurrentSchedule_1 = __importDefault(require(a659_0x31ccb2(0x1d6))),
  Campaign_1 = __importDefault(require(a659_0x31ccb2(0x294))),
  CampaignShipping_1 = __importDefault(require(a659_0x31ccb2(0x227))),
  sequelize_1 = require(a659_0x31ccb2(0x2e7)),
  queues_1 = require('../../queues'),
  User_1 = __importDefault(require(a659_0x31ccb2(0x242))),
  ChatBotListener_1 = require(a659_0x31ccb2(0x262)),
  MarkDeleteWhatsAppMessage_1 = __importDefault(require(a659_0x31ccb2(0x26e))),
  ListUserQueueServices_1 = __importDefault(require(a659_0x31ccb2(0x298))),
  cache_1 = __importDefault(require('../../libs/cache')),
  addLogs_1 = require(a659_0x31ccb2(0x22e)),
  SendWhatsAppMedia_1 = __importStar(require(a659_0x31ccb2(0x2ee))),
  ShowQueueIntegrationService_1 = __importDefault(
    require('../QueueIntegrationServices/ShowQueueIntegrationService')
  ),
  CreateSessionDialogflow_1 = require('../QueueIntegrationServices/CreateSessionDialogflow'),
  QueryDialogflow_1 = require(a659_0x31ccb2(0x1ce)),
  CompaniesSettings_1 = __importDefault(require(a659_0x31ccb2(0x311))),
  CreateLogTicketService_1 = __importDefault(
    require('../TicketServices/CreateLogTicketService')
  ),
  Whatsapp_1 = __importDefault(require('../../models/Whatsapp')),
  ShowService_1 = __importDefault(require('../FileServices/ShowService')),
  openai_1 = __importDefault(require('openai')),
  fluent_ffmpeg_1 = __importDefault(require('fluent-ffmpeg')),
  microsoft_cognitiveservices_speech_sdk_1 = require(a659_0x31ccb2(0x23c)),
  typebotListener_1 = __importDefault(require(a659_0x31ccb2(0x191))),
  os = require('os'),
  request = require(a659_0x31ccb2(0x1b8));
let ffmpegPath;
if (os[a659_0x31ccb2(0x2e5)]() === a659_0x31ccb2(0x1f1))
  ffmpegPath = a659_0x31ccb2(0x192);
else
  os[a659_0x31ccb2(0x2e5)]() === a659_0x31ccb2(0x1c3)
    ? (ffmpegPath = a659_0x31ccb2(0x249))
    : (ffmpegPath = '/usr/bin/ffmpeg');
fluent_ffmpeg_1[a659_0x31ccb2(0x222)]['setFfmpegPath'](ffmpegPath);
let i = 0x0;
function a659_0x1c81(_0x54768f, _0x5e81cd) {
  const _0x20d0fc = a659_0x20d0();
  return (
    (a659_0x1c81 = function (_0x1c81df, _0x3b835b) {
      _0x1c81df = _0x1c81df - 0x173;
      let _0x52353a = _0x20d0fc[_0x1c81df];
      return _0x52353a;
    }),
    a659_0x1c81(_0x54768f, _0x5e81cd)
  );
}
setInterval(() => {
  i = 0x0;
}, 0x1388);
const sessionsOpenAi = [],
  writeFileAsync = (0x0, util_1[a659_0x31ccb2(0x1de)])(
    fs_1[a659_0x31ccb2(0x209)]
  );
function removeFile(_0x2996ea) {
  const _0x5e22f1 = a659_0x31ccb2;
  fs_2[_0x5e22f1(0x222)][_0x5e22f1(0x253)](_0x2996ea, _0x4ecbbd => {
    if (_0x4ecbbd) throw _0x4ecbbd;
  });
}
const getTimestampMessage = _0x2d7cbe => {
    return _0x2d7cbe * 0x1;
  },
  multVecardGet = function (_0x14ea58) {
    const _0x47404b = a659_0x31ccb2;
    let _0x50cbf8 = '\x20',
      _0x367787 = _0x14ea58['split']('\x0a')[0x2]
        ['replace'](_0x47404b(0x175), '\x0a')
        [_0x47404b(0x2c6)]('N:', '')
        [_0x47404b(0x2c6)](';', '')
        [_0x47404b(0x2c6)](';', '\x20')
        ['replace'](';;', '\x20')
        [_0x47404b(0x2c6)]('\x0a', ''),
      _0x3b5a57 =
        _0x14ea58[_0x47404b(0x1a0)]('\x0a')[0x4][_0x47404b(0x1b2)]('='),
      _0x1f233e = _0x14ea58[_0x47404b(0x1a0)]('\x0a')[0x4]['indexOf'](':'),
      _0x45f468 = _0x14ea58['split']('\x0a')[0x4]
        [_0x47404b(0x2e6)](_0x3b5a57 + 0x1, _0x1f233e)
        [_0x47404b(0x2c6)](';', ''),
      _0x4085e5 = _0x14ea58[_0x47404b(0x1a0)]('\x0a')[0x4][_0x47404b(0x2c6)](
        _0x47404b(0x197),
        ''
      );
    if (_0x45f468 != _0x47404b(0x2fd))
      _0x50cbf8 =
        _0x50cbf8 + _0x367787 + _0x47404b(0x317) + _0x45f468 + '' + '\x0a';
    else
      _0x50cbf8 =
        _0x50cbf8 + _0x367787 + _0x47404b(0x317) + _0x4085e5 + '' + '\x0a';
    return _0x50cbf8;
  },
  contactsArrayMessageGet = _0x59f711 => {
    const _0x319feb = a659_0x31ccb2;
    let _0x41a137 =
        _0x59f711[_0x319feb(0x268)]?.[_0x319feb(0x17f)]?.[_0x319feb(0x1a2)],
      _0x2564e6 = _0x41a137['map'](function (_0x1846a9, _0xf75b23) {
        const _0x15e130 = _0x319feb;
        return _0x1846a9[_0x15e130(0x2d9)];
      }),
      _0x505b34 = '';
    _0x2564e6['forEach'](function (_0xdd4bc2, _0x1799d0) {
      _0x505b34 += _0xdd4bc2 + '\x0a\x0a' + '';
    });
    let _0x4becb6 = _0x505b34[_0x319feb(0x1a0)](_0x319feb(0x28e));
    _0x4becb6[_0x319feb(0x29b)]();
    let _0x24ee44 = '';
    for (let _0x114279 of _0x4becb6) {
      _0x24ee44 = _0x24ee44 + multVecardGet(_0x114279);
    }
    return _0x24ee44;
  },
  getTypeMessage = _0x43cea3 => {
    const _0x46888a = a659_0x31ccb2,
      _0x2ad603 = (0x0, baileys_1[_0x46888a(0x233)])(
        _0x43cea3[_0x46888a(0x268)]
      );
    if (_0x43cea3[_0x46888a(0x268)]?.[_0x46888a(0x23f)])
      return 'viewOnceMessageV2';
    return _0x2ad603;
  };
exports['getTypeMessage'] = getTypeMessage;
const getBodyButton = _0x42b267 => {
    const _0x59bdcf = a659_0x31ccb2;
    if (
      _0x42b267['key'][_0x59bdcf(0x28c)] &&
      _0x42b267[_0x59bdcf(0x268)][_0x59bdcf(0x2ed)]?.[_0x59bdcf(0x313)]
    ) {
      let _0x527679 =
        '' +
        _0x42b267?.[_0x59bdcf(0x268)]?.[_0x59bdcf(0x2ed)]?.[_0x59bdcf(0x313)];
      for (const _0x2f9903 of _0x42b267[_0x59bdcf(0x268)]?.[_0x59bdcf(0x2ed)]?.[
        _0x59bdcf(0x2e3)
      ]) {
        _0x527679 +=
          '\x0a\x0a' + _0x2f9903[_0x59bdcf(0x18e)]?.[_0x59bdcf(0x2e2)];
      }
      return _0x527679;
    }
    if (
      _0x42b267[_0x59bdcf(0x29e)][_0x59bdcf(0x28c)] &&
      _0x42b267?.[_0x59bdcf(0x268)]?.[_0x59bdcf(0x2dc)]?.[_0x59bdcf(0x268)]?.[
        _0x59bdcf(0x1e6)
      ]
    ) {
      let _0x327f6d =
        '' +
        _0x42b267?.[_0x59bdcf(0x268)]?.[_0x59bdcf(0x2dc)]?.[_0x59bdcf(0x268)]?.[
          _0x59bdcf(0x1e6)
        ]?.[_0x59bdcf(0x2c4)];
      for (const _0x3b144a of _0x42b267[_0x59bdcf(0x268)]?.[_0x59bdcf(0x2dc)]?.[
        'message'
      ]?.['listMessage']?.[_0x59bdcf(0x260)]) {
        for (const _0x3fa834 of _0x3b144a[_0x59bdcf(0x281)]) {
          _0x327f6d += '\x0a\x0a' + _0x3fa834[_0x59bdcf(0x217)];
        }
      }
      return _0x327f6d;
    }
  },
  getBodyList = _0x4a6b56 => {
    const _0xeca242 = a659_0x31ccb2;
    if (
      _0x4a6b56[_0xeca242(0x29e)][_0xeca242(0x28c)] &&
      _0x4a6b56[_0xeca242(0x268)][_0xeca242(0x1e6)]?.[_0xeca242(0x2c4)]
    ) {
      let _0xbea638 =
        '' + _0x4a6b56[_0xeca242(0x268)][_0xeca242(0x1e6)]?.[_0xeca242(0x2c4)];
      for (const _0x2c2050 of _0x4a6b56['message'][_0xeca242(0x1e6)]?.[
        _0xeca242(0x260)
      ]) {
        for (const _0x387952 of _0x2c2050[_0xeca242(0x281)]) {
          _0xbea638 += '\x0a\x0a' + _0x387952['title'];
        }
      }
      return _0xbea638;
    }
    if (
      _0x4a6b56['key'][_0xeca242(0x28c)] &&
      _0x4a6b56?.['message']?.[_0xeca242(0x2dc)]?.['message']?.['listMessage']
    ) {
      let _0x509298 =
        '' +
        _0x4a6b56?.[_0xeca242(0x268)]?.[_0xeca242(0x2dc)]?.['message']?.[
          _0xeca242(0x1e6)
        ]?.[_0xeca242(0x2c4)];
      for (const _0x4ccac1 of _0x4a6b56['message']?.['viewOnceMessage']?.[
        _0xeca242(0x268)
      ]?.['listMessage']?.[_0xeca242(0x260)]) {
        for (const _0x5928c1 of _0x4ccac1['rows']) {
          _0x509298 += '\x0a\x0a' + _0x5928c1[_0xeca242(0x217)];
        }
      }
      return _0x509298;
    }
  },
  msgLocation = (_0x1d91a0, _0x4614cc, _0x283b74) => {
    const _0x2f71d1 = a659_0x31ccb2;
    if (_0x1d91a0) {
      var _0x344878 = Buffer['from'](_0x1d91a0)[_0x2f71d1(0x189)]('base64');
      let _0x5e25de =
        _0x2f71d1(0x2bb) +
        _0x344878 +
        _0x2f71d1(0x24a) +
        _0x4614cc +
        '%2C' +
        _0x283b74 +
        _0x2f71d1(0x234) +
        _0x4614cc +
        ',\x20' +
        _0x283b74 +
        '\x20';
      return _0x5e25de;
    }
  },
  getBodyMessage = _0x5a1560 => {
    const _0x45a182 = a659_0x31ccb2;
    try {
      let _0x5175d6 = getTypeMessage(_0x5a1560);
      if (_0x5175d6 === undefined) console[_0x45a182(0x2d4)](_0x5a1560);
      const _0x613152 = {
          conversation: _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x2bd)],
          imageMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x213)]?.[_0x45a182(0x1cb)],
          videoMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x19c)]?.['caption'],
          extendedTextMessage:
            _0x5a1560?.[_0x45a182(0x268)]?.['extendedTextMessage']?.[
              _0x45a182(0x1bd)
            ],
          buttonsResponseMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x27d)]?.[_0x45a182(0x1ea)],
          listResponseMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x27f)]?.[
              _0x45a182(0x217)
            ] ||
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x27f)]?.[
              _0x45a182(0x244)
            ]?.[_0x45a182(0x1b4)],
          templateButtonReplyMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x1e8)]?.[_0x45a182(0x25d)],
          messageContextInfo:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x27d)]?.[
              _0x45a182(0x2b1)
            ] ||
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x27f)]?.[_0x45a182(0x217)],
          buttonsMessage:
            getBodyButton(_0x5a1560) ||
            _0x5a1560[_0x45a182(0x268)]?.['listResponseMessage']?.[
              _0x45a182(0x217)
            ],
          stickerMessage: _0x45a182(0x1c6),
          contactMessage: _0x5a1560['message']?.['contactMessage']?.['vcard'],
          contactsArrayMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x17f)]?.['contacts'] &&
            contactsArrayMessageGet(_0x5a1560),
          locationMessage: msgLocation(
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x307)]?.[_0x45a182(0x2c9)],
            _0x5a1560['message']?.[_0x45a182(0x307)]?.['degreesLatitude'],
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x307)]?.[
              'degreesLongitude'
            ]
          ),
          liveLocationMessage:
            _0x45a182(0x183) +
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x220)]?.[
              'degreesLatitude'
            ] +
            _0x45a182(0x29d) +
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x220)]?.[_0x45a182(0x237)],
          documentMessage:
            _0x5a1560['message']?.['documentMessage']?.[_0x45a182(0x1cb)],
          audioMessage: _0x45a182(0x2eb),
          listMessage:
            getBodyList(_0x5a1560) ||
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x27f)]?.['title'],
          viewOnceMessage: getBodyButton(_0x5a1560),
          reactionMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x1fc)]?.[
              _0x45a182(0x1bd)
            ] || _0x45a182(0x198),
          senderKeyDistributionMessage:
            _0x5a1560?.[_0x45a182(0x268)]?.[_0x45a182(0x2bc)]?.[
              'axolotlSenderKeyDistributionMessage'
            ],
          documentWithCaptionMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x202)]?.[
              _0x45a182(0x268)
            ]?.[_0x45a182(0x22d)]?.[_0x45a182(0x1cb)],
          viewOnceMessageV2:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x23f)]?.[
              _0x45a182(0x268)
            ]?.['imageMessage']?.[_0x45a182(0x1cb)],
          editedMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x193)]?.[
              _0x45a182(0x268)
            ]?.[_0x45a182(0x2f8)]?.['text'],
          ephemeralMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x2e9)]?.['message']?.[
              'extendedTextMessage'
            ]?.['text'],
          imageWhitCaptionMessage:
            _0x5a1560?.[_0x45a182(0x268)]?.[_0x45a182(0x2e9)]?.['message']?.[
              _0x45a182(0x213)
            ],
          highlyStructuredMessage:
            _0x5a1560[_0x45a182(0x268)]?.[_0x45a182(0x17a)]
        },
        _0x5b02b5 = Object[_0x45a182(0x219)](_0x613152)[_0x45a182(0x1d8)](
          _0x48c9f4 => _0x48c9f4 === _0x5175d6
        );
      return (
        !_0x5b02b5 &&
          (logger_1['logger'][_0x45a182(0x1dc)](
            _0x45a182(0x21f) +
              _0x5175d6 +
              '\x0a' +
              JSON[_0x45a182(0x2b7)](_0x5a1560)
          ),
          Sentry['setExtra'](_0x45a182(0x24f), {
            BodyMsg: _0x5a1560[_0x45a182(0x268)],
            msg: _0x5a1560,
            type: _0x5175d6
          }),
          Sentry[_0x45a182(0x17e)](new Error(_0x45a182(0x2c1)))),
        _0x613152[_0x5175d6]
      );
    } catch (_0x10d322) {
      Sentry[_0x45a182(0x2be)]('Error\x20getTypeMessage', {
        msg: _0x5a1560,
        BodyMsg: _0x5a1560[_0x45a182(0x268)]
      }),
        Sentry['captureException'](_0x10d322),
        console[_0x45a182(0x2d4)](_0x10d322);
    }
  };
exports[a659_0x31ccb2(0x24c)] = getBodyMessage;
const getQuotedMessage = _0x47e1e1 => {
  const _0x33994c = a659_0x31ccb2,
    _0xbce1fe = (0x0, baileys_1[_0x33994c(0x246)])(_0x47e1e1['message'])[
      Object['keys'](_0x47e1e1?.[_0x33994c(0x268)])
        [_0x33994c(0x1ae)]()
        ['next']()[_0x33994c(0x301)]
    ];
  if (!_0xbce1fe?.[_0x33994c(0x2de)]?.[_0x33994c(0x22c)]) return;
  const _0x1913b7 = (0x0, baileys_1[_0x33994c(0x246)])(
    _0xbce1fe?.[_0x33994c(0x2de)]?.['quotedMessage'][
      Object[_0x33994c(0x219)](_0xbce1fe?.[_0x33994c(0x2de)]?.['quotedMessage'])
        ['values']()
        [_0x33994c(0x2e1)]()['value']
    ]
  );
  return _0x1913b7;
};
exports[a659_0x31ccb2(0x21b)] = getQuotedMessage;
const getQuotedMessageId = _0x50831e => {
  const _0x1c1a75 = a659_0x31ccb2,
    _0x28ba9a = (0x0, baileys_1[_0x1c1a75(0x246)])(_0x50831e['message'])[
      Object[_0x1c1a75(0x219)](_0x50831e?.[_0x1c1a75(0x268)])
        [_0x1c1a75(0x1ae)]()
        [_0x1c1a75(0x2e1)]()[_0x1c1a75(0x301)]
    ];
  let _0x438500 = _0x50831e?.['message']?.[_0x1c1a75(0x1fc)]
    ? _0x50831e?.['message']?.[_0x1c1a75(0x1fc)]?.[_0x1c1a75(0x29e)]?.['id']
    : '';
  return _0x438500
    ? _0x438500
    : _0x28ba9a?.[_0x1c1a75(0x2de)]?.[_0x1c1a75(0x18c)];
};
exports['getQuotedMessageId'] = getQuotedMessageId;
const getMeSocket = _0x3c54f5 => {
    const _0x2c2495 = a659_0x31ccb2;
    return {
      id: (0x0, baileys_1[_0x2c2495(0x225)])(_0x3c54f5['user']['id']),
      name: _0x3c54f5[_0x2c2495(0x280)]['name']
    };
  },
  getSenderMessage = (_0x3ff270, _0x1030a8) => {
    const _0x108d01 = a659_0x31ccb2,
      _0x403681 = getMeSocket(_0x1030a8);
    if (_0x3ff270[_0x108d01(0x29e)][_0x108d01(0x28c)]) return _0x403681['id'];
    const _0x578bed =
      _0x3ff270['participant'] ||
      _0x3ff270[_0x108d01(0x29e)]['participant'] ||
      _0x3ff270[_0x108d01(0x29e)][_0x108d01(0x21a)] ||
      undefined;
    return _0x578bed && (0x0, baileys_1[_0x108d01(0x225)])(_0x578bed);
  },
  getContactMessage = async (_0x3af0e5, _0x451c1e) => {
    const _0x3a1bf1 = a659_0x31ccb2,
      _0x3d618c = _0x3af0e5['key'][_0x3a1bf1(0x21a)][_0x3a1bf1(0x1d5)](
        _0x3a1bf1(0x28b)
      ),
      _0x44d9e6 = _0x3af0e5[_0x3a1bf1(0x29e)][_0x3a1bf1(0x21a)][
        _0x3a1bf1(0x2c6)
      ](/\D/g, '');
    return _0x3d618c
      ? {
          id: getSenderMessage(_0x3af0e5, _0x451c1e),
          name: _0x3af0e5[_0x3a1bf1(0x258)]
        }
      : {
          id: _0x3af0e5[_0x3a1bf1(0x29e)][_0x3a1bf1(0x21a)],
          name: _0x3af0e5[_0x3a1bf1(0x29e)][_0x3a1bf1(0x28c)]
            ? _0x44d9e6
            : _0x3af0e5['pushName']
        };
  },
  downloadMedia = async (_0x45cf02, _0x3e9d2d = null) => {
    const _0x21372a = a659_0x31ccb2;
    let _0xbda49;
    try {
      _0xbda49 = await (0x0, baileys_1[_0x21372a(0x17d)])(
        _0x45cf02,
        _0x21372a(0x2ea),
        {}
      );
    } catch (_0x1f8706) {
      _0x3e9d2d
        ? console[_0x21372a(0x2d4)](_0x21372a(0x199))
        : console[_0x21372a(0x194)](_0x21372a(0x2b2), _0x1f8706);
    }
    let _0x999154 =
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x22d)]?.[_0x21372a(0x1c4)] || '';
    const _0x548e00 =
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x213)] ||
      _0x45cf02[_0x21372a(0x268)]?.['audioMessage'] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x19c)] ||
      _0x45cf02['message']?.[_0x21372a(0x2e8)] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x22d)] ||
      _0x45cf02['message']?.['documentWithCaptionMessage']?.[
        _0x21372a(0x268)
      ]?.['documentMessage'] ||
      _0x45cf02['message']?.[_0x21372a(0x2e9)]?.[_0x21372a(0x268)]?.[
        'audioMessage'
      ] ||
      _0x45cf02['message']?.[_0x21372a(0x2e9)]?.[_0x21372a(0x268)]?.[
        _0x21372a(0x22d)
      ] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x2e9)]?.[_0x21372a(0x268)]?.[
        _0x21372a(0x19c)
      ] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x2e9)]?.[_0x21372a(0x268)]?.[
        _0x21372a(0x2e8)
      ] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x2e9)]?.['message']?.[
        'imageMessage'
      ] ||
      _0x45cf02['message']?.[_0x21372a(0x2dc)]?.[_0x21372a(0x268)]?.[
        _0x21372a(0x213)
      ] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x2dc)]?.[_0x21372a(0x268)]?.[
        _0x21372a(0x19c)
      ] ||
      _0x45cf02['message']?.['ephemeralMessage']?.[_0x21372a(0x268)]?.[
        _0x21372a(0x2dc)
      ]?.['message']?.['imageMessage'] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x2e9)]?.['message']?.[
        'viewOnceMessage'
      ]?.[_0x21372a(0x268)]?.[_0x21372a(0x19c)] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x2e9)]?.[_0x21372a(0x268)]?.[
        _0x21372a(0x2dc)
      ]?.[_0x21372a(0x268)]?.[_0x21372a(0x28f)] ||
      _0x45cf02[_0x21372a(0x268)]?.['ephemeralMessage']?.[_0x21372a(0x268)]?.[
        _0x21372a(0x2dc)
      ]?.[_0x21372a(0x268)]?.['documentMessage'] ||
      _0x45cf02['message']?.[_0x21372a(0x202)]?.['message']?.[
        'documentMessage'
      ] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x1fa)]?.['hydratedTemplate']?.[
        'imageMessage'
      ] ||
      _0x45cf02['message']?.[_0x21372a(0x1fa)]?.[_0x21372a(0x1d9)]?.[
        _0x21372a(0x22d)
      ] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x1fa)]?.[_0x21372a(0x1d9)]?.[
        'videoMessage'
      ] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x1fa)]?.[
        'hydratedFourRowTemplate'
      ]?.[_0x21372a(0x213)] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x1fa)]?.[
        'hydratedFourRowTemplate'
      ]?.['documentMessage'] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x1fa)]?.[
        'hydratedFourRowTemplate'
      ]?.[_0x21372a(0x19c)] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x1fa)]?.[_0x21372a(0x2a8)]?.[
        _0x21372a(0x213)
      ] ||
      _0x45cf02[_0x21372a(0x268)]?.['templateMessage']?.[_0x21372a(0x2a8)]?.[
        _0x21372a(0x22d)
      ] ||
      _0x45cf02[_0x21372a(0x268)]?.[_0x21372a(0x1fa)]?.[_0x21372a(0x2a8)]?.[
        'videoMessage'
      ] ||
      _0x45cf02['message']?.[_0x21372a(0x270)]?.[_0x21372a(0x297)]?.[
        _0x21372a(0x213)
      ] ||
      _0x45cf02['message']?.[_0x21372a(0x270)]?.['header']?.[
        'documentMessage'
      ] ||
      _0x45cf02['message']?.['interactiveMessage']?.[_0x21372a(0x297)]?.[
        _0x21372a(0x19c)
      ];
    if (!_0x548e00) console[_0x21372a(0x2d4)](_0x45cf02);
    if (!_0x999154) {
      const _0x4e74c1 = _0x548e00[_0x21372a(0x2c2)]
        [_0x21372a(0x1a0)]('/')[0x1]
        [_0x21372a(0x1a0)](';')[0x0];
      _0x999154 = new Date()[_0x21372a(0x1ec)]() + '.' + _0x4e74c1;
    } else _0x999154 = new Date()[_0x21372a(0x1ec)]() + '_' + _0x999154;
    const _0xcd2361 = {
      data: _0xbda49,
      mimetype: _0x548e00[_0x21372a(0x2c2)],
      filename: _0x999154
    };
    return _0xcd2361;
  };
exports[a659_0x31ccb2(0x1e1)] = downloadMedia;
const verifyContact = async (_0x55461f, _0x24a2c0, _0xb0188a) => {
    const _0x57726b = a659_0x31ccb2;
    let _0x1e8085;
    try {
      _0x1e8085 = await _0x24a2c0[_0x57726b(0x1cc)](
        _0x55461f['id'],
        _0x57726b(0x2b3)
      );
    } catch (_0x3eed63) {
      Sentry[_0x57726b(0x17e)](_0x3eed63),
        (_0x1e8085 =
          process[_0x57726b(0x1aa)]['FRONTEND_URL'] + _0x57726b(0x200));
    }
    const _0x4827bc = {
      name: _0x55461f['name'] || _0x55461f['id']['replace'](/\D/g, ''),
      number: _0x55461f['id'][_0x57726b(0x2c6)](/\D/g, ''),
      profilePicUrl: _0x1e8085,
      isGroup: _0x55461f['id'][_0x57726b(0x1d5)](_0x57726b(0x28b)),
      companyId: _0xb0188a,
      remoteJid: _0x55461f['id'],
      whatsappId: _0x24a2c0['id']
    };
    _0x4827bc[_0x57726b(0x2f9)] &&
      (_0x4827bc['number'] = _0x55461f['id'][_0x57726b(0x2c6)](
        _0x57726b(0x28d),
        ''
      ));
    const _0xff82c3 = await (0x0,
    CreateOrUpdateContactService_1[_0x57726b(0x222)])(_0x4827bc);
    return _0xff82c3;
  },
  verifyQuotedMessage = async _0x4942df => {
    const _0x2842c3 = a659_0x31ccb2;
    if (!_0x4942df) return null;
    const _0x472a21 = (0x0, exports[_0x2842c3(0x174)])(_0x4942df);
    if (!_0x472a21) return null;
    const _0x3f0480 = await Message_1[_0x2842c3(0x222)][_0x2842c3(0x205)]({
      where: { wid: _0x472a21 }
    });
    if (!_0x3f0480) return null;
    return _0x3f0480;
  },
  verifyMediaMessage = async (
    _0x284167,
    _0x1d8b51,
    _0x4f8fcc,
    _0xc8e779,
    _0x300855
  ) => {
    const _0x2c89c8 = a659_0x31ccb2,
      _0x1601fc = (0x0, socket_1['getIO'])(),
      _0x43d2c3 = await verifyQuotedMessage(_0x284167),
      _0x5a9aa1 = _0x1d8b51[_0x2c89c8(0x21e)];
    try {
      const _0x3846eb = await (0x0, exports[_0x2c89c8(0x1e1)])(
        _0x284167,
        _0x1d8b51?.[_0x2c89c8(0x216)]
      );
      if (!_0x3846eb && _0x1d8b51[_0x2c89c8(0x216)]) {
        const _0x53dc32 = _0x2c89c8(0x232),
          _0x19aae9 = {
            wid: _0x284167[_0x2c89c8(0x29e)]['id'],
            ticketId: _0x1d8b51['id'],
            contactId: _0x284167[_0x2c89c8(0x29e)][_0x2c89c8(0x28c)]
              ? undefined
              : _0x1d8b51[_0x2c89c8(0x2fb)],
            body: _0x53dc32,
            reactionMessage: _0x284167[_0x2c89c8(0x268)]?.['reactionMessage'],
            fromMe: _0x284167[_0x2c89c8(0x29e)][_0x2c89c8(0x28c)],
            mediaType: getTypeMessage(_0x284167),
            read: _0x284167['key'][_0x2c89c8(0x28c)],
            quotedMsgId:
              _0x43d2c3?.['id'] ||
              _0x284167[_0x2c89c8(0x268)]?.[_0x2c89c8(0x1fc)]?.[
                _0x2c89c8(0x29e)
              ]?.['id'],
            ack: _0x284167[_0x2c89c8(0x23a)],
            companyId: _0x5a9aa1,
            remoteJid: _0x284167[_0x2c89c8(0x29e)][_0x2c89c8(0x21a)],
            participant: _0x284167['key'][_0x2c89c8(0x26d)],
            timestamp: getTimestampMessage(_0x284167['messageTimestamp']),
            createdAt: new Date(
              Math[_0x2c89c8(0x266)](
                getTimestampMessage(_0x284167[_0x2c89c8(0x1b5)]) * 0x3e8
              )
            )[_0x2c89c8(0x210)](),
            dataJson: JSON[_0x2c89c8(0x2b7)](_0x284167),
            ticketImported: _0x1d8b51[_0x2c89c8(0x216)],
            isForwarded: _0x300855
          };
        return (
          await _0x1d8b51[_0x2c89c8(0x184)]({ lastMessage: _0x53dc32 }),
          logger_1[_0x2c89c8(0x19b)][_0x2c89c8(0x194)](Error(_0x2c89c8(0x302))),
          (0x0, CreateMessageService_1[_0x2c89c8(0x222)])({
            messageData: _0x19aae9,
            companyId: _0x5a9aa1
          })
        );
      }
      if (!_0x3846eb) throw new Error(_0x2c89c8(0x302));
      if (!_0x3846eb['filename']) {
        const _0x471efb = _0x3846eb[_0x2c89c8(0x2c2)]
          ['split']('/')[0x1]
          ['split'](';')[0x0];
        _0x3846eb['filename'] =
          new Date()[_0x2c89c8(0x1ec)]() + '.' + _0x471efb;
      } else {
        const _0x39820f = _0x3846eb[_0x2c89c8(0x231)]
            [_0x2c89c8(0x1a0)]('.')
            [_0x2c89c8(0x1e2)](),
          _0x346719 = _0x3846eb[_0x2c89c8(0x231)]
            [_0x2c89c8(0x1a0)]('.')
            [_0x2c89c8(0x1a9)](0x0, -0x1)
            [_0x2c89c8(0x1d4)]('.')
            [_0x2c89c8(0x2c6)](/\s/g, '_')
            [_0x2c89c8(0x1d0)](_0x2c89c8(0x2f6))
            ['replace'](/[\u0300-\u036f]/g, '');
        _0x3846eb[_0x2c89c8(0x231)] =
          _0x346719['trim']() +
          '_' +
          new Date()[_0x2c89c8(0x1ec)]() +
          '.' +
          _0x39820f;
      }
      try {
        const _0x3ec3e1 = path_1[_0x2c89c8(0x222)][_0x2c89c8(0x2a4)](
          __dirname,
          '..',
          '..',
          '..',
          _0x2c89c8(0x195),
          'company' + _0x5a9aa1
        );
        !fs_2[_0x2c89c8(0x222)]['existsSync'](_0x3ec3e1) &&
          (fs_2[_0x2c89c8(0x222)][_0x2c89c8(0x1df)](_0x3ec3e1, {
            recursive: !![]
          }),
          fs_2[_0x2c89c8(0x222)][_0x2c89c8(0x27a)](_0x3ec3e1, 0x1ff)),
          await writeFileAsync(
            (0x0, path_1['join'])(_0x3ec3e1, _0x3846eb[_0x2c89c8(0x231)]),
            _0x3846eb[_0x2c89c8(0x1da)][_0x2c89c8(0x189)](_0x2c89c8(0x284)),
            _0x2c89c8(0x284)
          )['then'](() => {
            const _0x512390 = _0x2c89c8;
            if (_0x3846eb['mimetype'][_0x512390(0x1d5)](_0x512390(0x22b))) {
              const _0x2a3f77 = path_1[_0x512390(0x222)][_0x512390(0x1d4)](
                _0x3ec3e1,
                _0x3846eb[_0x512390(0x231)]
              );
              let _0xb4634;
              if (_0x2a3f77[_0x512390(0x2ff)]('.mpeg'))
                _0xb4634 = _0x2a3f77[_0x512390(0x2c6)](
                  '.mpeg',
                  _0x512390(0x286)
                );
              else {
                if (_0x2a3f77['endsWith'](_0x512390(0x31e)))
                  _0xb4634 = _0x2a3f77[_0x512390(0x2c6)](
                    _0x512390(0x31e),
                    _0x512390(0x286)
                  );
                else {
                  console[_0x512390(0x194)](_0x512390(0x2d6), _0x2a3f77);
                  return;
                }
              }
              return new Promise((_0x1dc58a, _0x51cf60) => {
                const _0x3c04c9 = _0x512390;
                (0x0, fluent_ffmpeg_1[_0x3c04c9(0x222)])(_0x2a3f77)
                  [_0x3c04c9(0x2b4)](_0x3c04c9(0x25e))
                  [_0x3c04c9(0x2c8)](_0xb4634)
                  ['on']('end', () => {
                    _0x1dc58a();
                  })
                  ['on']('error', _0x1e80c3 => {
                    _0x51cf60(_0x1e80c3);
                  });
              });
            }
          });
      } catch (_0x33c2e3) {
        Sentry['setExtra']('Erro\x20media', {
          companyId: _0x5a9aa1,
          ticket: _0x1d8b51,
          contact: _0x4f8fcc,
          media: _0x3846eb,
          quotedMsg: _0x43d2c3
        }),
          Sentry[_0x2c89c8(0x17e)](_0x33c2e3),
          logger_1['logger'][_0x2c89c8(0x194)](_0x33c2e3),
          console[_0x2c89c8(0x2d4)](_0x284167);
      }
      const _0xd31eb1 = (0x0, exports[_0x2c89c8(0x24c)])(_0x284167),
        _0x428d86 = {
          wid: _0x284167[_0x2c89c8(0x29e)]['id'],
          ticketId: _0x1d8b51['id'],
          contactId: _0x284167[_0x2c89c8(0x29e)]['fromMe']
            ? undefined
            : _0x4f8fcc['id'],
          body: _0xd31eb1 || _0x3846eb[_0x2c89c8(0x231)],
          fromMe: _0x284167[_0x2c89c8(0x29e)][_0x2c89c8(0x28c)],
          read: _0x284167[_0x2c89c8(0x29e)][_0x2c89c8(0x28c)],
          mediaUrl: _0x3846eb[_0x2c89c8(0x231)],
          mediaType: _0x3846eb[_0x2c89c8(0x2c2)][_0x2c89c8(0x1a0)]('/')[0x0],
          quotedMsgId: _0x43d2c3?.['id'],
          ack: _0x284167['status'],
          remoteJid: _0x284167['key'][_0x2c89c8(0x21a)],
          participant: _0x284167[_0x2c89c8(0x29e)][_0x2c89c8(0x26d)],
          dataJson: JSON[_0x2c89c8(0x2b7)](_0x284167),
          ticketTrakingId: _0xc8e779?.['id'],
          createdAt: new Date(
            Math[_0x2c89c8(0x266)](
              getTimestampMessage(_0x284167[_0x2c89c8(0x1b5)]) * 0x3e8
            )
          )[_0x2c89c8(0x210)](),
          ticketImported: _0x1d8b51[_0x2c89c8(0x216)],
          isForwarded: _0x300855
        };
      await _0x1d8b51[_0x2c89c8(0x184)]({
        lastMessage: _0xd31eb1 || _0x3846eb[_0x2c89c8(0x231)]
      });
      const _0xef6fb6 = await (0x0, CreateMessageService_1['default'])({
        messageData: _0x428d86,
        companyId: _0x5a9aa1
      });
      return (
        !_0x284167[_0x2c89c8(0x29e)][_0x2c89c8(0x28c)] &&
          _0x1d8b51[_0x2c89c8(0x23a)] === _0x2c89c8(0x289) &&
          (await _0x1d8b51[_0x2c89c8(0x184)]({ status: _0x2c89c8(0x26c) }),
          await _0x1d8b51[_0x2c89c8(0x1db)]({
            include: [
              { model: Queue_1[_0x2c89c8(0x222)], as: 'queue' },
              { model: User_1[_0x2c89c8(0x222)], as: _0x2c89c8(0x280) },
              { model: Contact_1[_0x2c89c8(0x222)], as: _0x2c89c8(0x182) },
              { model: Whatsapp_1[_0x2c89c8(0x222)], as: _0x2c89c8(0x22f) }
            ]
          }),
          _0x1601fc['to'](_0x2c89c8(0x289))[_0x2c89c8(0x1b9)](
            'company-' + _0x5a9aa1 + _0x2c89c8(0x2a9),
            {
              action: _0x2c89c8(0x19f),
              ticket: _0x1d8b51,
              ticketId: _0x1d8b51['id']
            }
          ),
          _0x1601fc['to'](_0x1d8b51[_0x2c89c8(0x23a)])
            ['to'](_0x1d8b51['id'][_0x2c89c8(0x189)]())
            [_0x2c89c8(0x1b9)](_0x2c89c8(0x2f7) + _0x5a9aa1 + '-ticket', {
              action: _0x2c89c8(0x184),
              ticket: _0x1d8b51,
              ticketId: _0x1d8b51['id']
            })),
        _0xef6fb6
      );
    } catch (_0x4968bc) {
      console['log'](_0x4968bc),
        logger_1['logger'][_0x2c89c8(0x1dc)](_0x2c89c8(0x2fa));
    }
  };
exports[a659_0x31ccb2(0x2cd)] = verifyMediaMessage;
const verifyMessage = async (
  _0x3054a5,
  _0x46bedd,
  _0x13b8d8,
  _0x5065bb,
  _0xa80ef0,
  _0x1a019f
) => {
  const _0x10a2d0 = a659_0x31ccb2,
    _0x2dbd9d = (0x0, socket_1[_0x10a2d0(0x2da)])(),
    _0x24ded9 = await verifyQuotedMessage(_0x3054a5),
    _0x29e9d6 = (0x0, exports['getBodyMessage'])(_0x3054a5),
    _0x39c456 = _0x46bedd[_0x10a2d0(0x21e)],
    _0x52a6fe = {
      wid: _0x3054a5['key']['id'],
      ticketId: _0x46bedd['id'],
      contactId: _0x3054a5[_0x10a2d0(0x29e)]['fromMe']
        ? undefined
        : _0x13b8d8['id'],
      body: _0x29e9d6,
      fromMe: _0x3054a5[_0x10a2d0(0x29e)]['fromMe'],
      mediaType: getTypeMessage(_0x3054a5),
      read: _0x3054a5['key'][_0x10a2d0(0x28c)],
      quotedMsgId: _0x24ded9?.['id'],
      ack: _0x3054a5[_0x10a2d0(0x23a)],
      remoteJid: _0x3054a5[_0x10a2d0(0x29e)][_0x10a2d0(0x21a)],
      participant: _0x3054a5[_0x10a2d0(0x29e)][_0x10a2d0(0x26d)],
      dataJson: JSON[_0x10a2d0(0x2b7)](_0x3054a5),
      ticketTrakingId: _0x5065bb?.['id'],
      isPrivate: ![],
      createdAt: new Date(
        Math['floor'](getTimestampMessage(_0x3054a5[_0x10a2d0(0x1b5)]) * 0x3e8)
      )[_0x10a2d0(0x210)](),
      ticketImported: _0x46bedd[_0x10a2d0(0x216)],
      isForwarded: _0x1a019f
    };
  await _0x46bedd[_0x10a2d0(0x184)]({ lastMessage: _0x29e9d6 }),
    await (0x0, CreateMessageService_1[_0x10a2d0(0x222)])({
      messageData: _0x52a6fe,
      companyId: _0x39c456
    }),
    !_0x3054a5[_0x10a2d0(0x29e)][_0x10a2d0(0x28c)] &&
      _0x46bedd[_0x10a2d0(0x23a)] === _0x10a2d0(0x289) &&
      (await _0x46bedd[_0x10a2d0(0x184)]({ status: _0x10a2d0(0x26c) }),
      await _0x46bedd['reload']({
        include: [
          { model: Queue_1[_0x10a2d0(0x222)], as: _0x10a2d0(0x190) },
          { model: User_1[_0x10a2d0(0x222)], as: 'user' },
          { model: Contact_1[_0x10a2d0(0x222)], as: _0x10a2d0(0x182) },
          { model: Whatsapp_1[_0x10a2d0(0x222)], as: _0x10a2d0(0x22f) }
        ]
      }),
      !_0x46bedd[_0x10a2d0(0x216)] &&
        _0x2dbd9d['to'](_0x46bedd[_0x10a2d0(0x23a)])
          ['to'](_0x46bedd['id'][_0x10a2d0(0x189)]())
          ['emit'](_0x10a2d0(0x2f7) + _0x39c456 + _0x10a2d0(0x2a9), {
            action: _0x10a2d0(0x184),
            ticket: _0x46bedd,
            ticketId: _0x46bedd['id']
          }));
};
exports['verifyMessage'] = verifyMessage;
const isValidMsg = _0x66b47d => {
  const _0xe0f6dd = a659_0x31ccb2;
  if (_0x66b47d['key'][_0xe0f6dd(0x21a)] === _0xe0f6dd(0x1f0)) return ![];
  try {
    const _0x561e79 = getTypeMessage(_0x66b47d);
    if (!_0x561e79) return;
    const _0x4e64f5 =
      _0x561e79 === _0xe0f6dd(0x2bd) ||
      _0x561e79 === _0xe0f6dd(0x2f8) ||
      _0x561e79 === 'audioMessage' ||
      _0x561e79 === _0xe0f6dd(0x19c) ||
      _0x561e79 === 'imageMessage' ||
      _0x561e79 === _0xe0f6dd(0x22d) ||
      _0x561e79 === _0xe0f6dd(0x2e8) ||
      _0x561e79 === _0xe0f6dd(0x27d) ||
      _0x561e79 === _0xe0f6dd(0x2ed) ||
      _0x561e79 === 'messageContextInfo' ||
      _0x561e79 === _0xe0f6dd(0x307) ||
      _0x561e79 === _0xe0f6dd(0x220) ||
      _0x561e79 === _0xe0f6dd(0x2f2) ||
      _0x561e79 === 'voiceMessage' ||
      _0x561e79 === _0xe0f6dd(0x2db) ||
      _0x561e79 === _0xe0f6dd(0x17f) ||
      _0x561e79 === _0xe0f6dd(0x1fc) ||
      _0x561e79 === _0xe0f6dd(0x2e9) ||
      _0x561e79 === _0xe0f6dd(0x186) ||
      _0x561e79 === 'listResponseMessage' ||
      _0x561e79 === _0xe0f6dd(0x1e6) ||
      _0x561e79 === _0xe0f6dd(0x2dc) ||
      _0x561e79 === _0xe0f6dd(0x202) ||
      _0x561e79 === _0xe0f6dd(0x23f) ||
      _0x561e79 === 'editedMessage' ||
      _0x561e79 === _0xe0f6dd(0x17a);
    return (
      !_0x4e64f5 &&
        (logger_1[_0xe0f6dd(0x19b)][_0xe0f6dd(0x1dc)](
          '####\x20Nao\x20achou\x20o\x20type\x20em\x20isValidMsg:\x20' +
            _0x561e79 +
            '\x0a' +
            JSON[_0xe0f6dd(0x2b7)](_0x66b47d?.[_0xe0f6dd(0x268)])
        ),
        Sentry[_0xe0f6dd(0x2be)]('Mensagem', {
          BodyMsg: _0x66b47d['message'],
          msg: _0x66b47d,
          msgType: _0x561e79
        }),
        Sentry[_0xe0f6dd(0x17e)](new Error(_0xe0f6dd(0x187)))),
      !!_0x4e64f5
    );
  } catch (_0x503528) {
    Sentry[_0xe0f6dd(0x2be)](_0xe0f6dd(0x2bf), { msg: _0x66b47d }),
      Sentry[_0xe0f6dd(0x17e)](_0x503528);
  }
};
exports[a659_0x31ccb2(0x293)] = isValidMsg;
const sendDialogflowAwswer = async (
  _0x53399f,
  _0x5a2e65,
  _0x305ab5,
  _0x988e02,
  _0xf50835,
  _0x38429b,
  _0x500e5e
) => {
  const _0x47fffc = a659_0x31ccb2,
    _0x37e779 = await (0x0, CreateSessionDialogflow_1[_0x47fffc(0x295)])(
      _0x500e5e
    );
  if (_0x37e779 === undefined) return;
  _0x53399f['presenceSubscribe'](_0x988e02[_0x47fffc(0x21a)]),
    await (0x0, baileys_1[_0x47fffc(0x2f1)])(0x1f4);
  let _0x4a6758 = await (0x0, QueryDialogflow_1['queryDialogFlow'])(
    _0x37e779,
    _0x500e5e['projectName'],
    _0x988e02[_0x47fffc(0x21a)],
    (0x0, exports['getBodyMessage'])(_0x305ab5),
    _0x500e5e[_0x47fffc(0x2dd)],
    _0xf50835
  );
  if (!_0x4a6758) {
    _0x53399f[_0x47fffc(0x1fd)](_0x47fffc(0x29f), _0x988e02[_0x47fffc(0x21a)]);
    const _0x115ed = (0x0, Mustache_1[_0x47fffc(0x222)])(
      _0x47fffc(0x1f2) + _0x500e5e?.[_0x47fffc(0x203)] + _0x47fffc(0x2cf)
    );
    await (0x0, baileys_1[_0x47fffc(0x2f1)])(0x3e8),
      await _0x53399f['sendPresenceUpdate'](
        _0x47fffc(0x1af),
        _0x988e02['remoteJid']
      );
    const _0x3b63a5 = await _0x53399f[_0x47fffc(0x2a1)](
      _0x988e02['number'] + '@c.us',
      { text: _0x115ed }
    );
    await (0x0, exports[_0x47fffc(0x2ce)])(_0x3b63a5, _0x5a2e65, _0x988e02);
    return;
  }
  _0x4a6758[_0x47fffc(0x224)] &&
    (await _0x5a2e65['update']({
      contactId: _0x5a2e65[_0x47fffc(0x182)]['id']['toString'](),
      useIntegration: ![]
    }));
  const _0x275f24 =
      _0x4a6758[_0x47fffc(0x1b0)][_0x47fffc(0x2b3)]?.[_0x47fffc(0x243)] ??
      undefined,
    _0x62a369 =
      _0x4a6758[_0x47fffc(0x1b0)]['react']?.['stringValue'] ?? undefined,
    _0x37371e = _0x4a6758[_0x47fffc(0x1c8)]['toString']('base64') ?? undefined;
  _0x53399f[_0x47fffc(0x1fd)](_0x47fffc(0x29f), _0x988e02[_0x47fffc(0x21a)]),
    await (0x0, baileys_1[_0x47fffc(0x2f1)])(0x1f4);
  let _0xe63606;
  for (let _0x5e93bf of _0x4a6758[_0x47fffc(0x2af)]) {
    _0xe63606 = _0x5e93bf[_0x47fffc(0x1bd)][_0x47fffc(0x1bd)][0x0]
      ? _0x5e93bf['text'][_0x47fffc(0x1bd)][0x0]
      : _0xe63606;
  }
  for (let _0x38b24d of _0x4a6758[_0x47fffc(0x2af)]) {
    _0x38b24d[_0x47fffc(0x1bd)] &&
      (await sendDelayedMessages(
        _0x53399f,
        _0x5a2e65,
        _0x988e02,
        _0x38b24d[_0x47fffc(0x1bd)][_0x47fffc(0x1bd)][0x0],
        _0xe63606,
        _0x37371e,
        _0x500e5e
      ));
  }
};
async function sendDelayedMessages(
  _0x4012bb,
  _0x34953f,
  _0x3875b3,
  _0x508e88,
  _0x342404,
  _0x314c73,
  _0x123f42
) {
  const _0x5dc037 = a659_0x31ccb2,
    _0x2e5b33 = _0x34953f['companyId'],
    _0x4d5531 = await (0x0, ShowWhatsAppService_1['default'])(
      _0x4012bb['id'],
      _0x2e5b33
    ),
    _0x5aefe5 = _0x4d5531[_0x5dc037(0x2ab)][_0x5dc037(0x2c6)](/[_*]/g, ''),
    _0x1bb942 = await _0x4012bb[_0x5dc037(0x2a1)](
      _0x3875b3[_0x5dc037(0x245)] + _0x5dc037(0x310),
      {
        text:
          '‎\x20*' +
          _0x123f42?.[_0x5dc037(0x203)] +
          _0x5dc037(0x1c9) +
          _0x508e88
      }
    );
  await (0x0, exports[_0x5dc037(0x2ce)])(_0x1bb942, _0x34953f, _0x3875b3);
  if (_0x508e88 != _0x342404)
    await (0x0, baileys_1[_0x5dc037(0x2f1)])(0x1f4),
      _0x4012bb[_0x5dc037(0x1fd)]('composing', _0x3875b3[_0x5dc037(0x21a)]);
  else
    _0x314c73 &&
      (_0x4012bb[_0x5dc037(0x1fd)](
        _0x5dc037(0x178),
        _0x3875b3[_0x5dc037(0x21a)]
      ),
      await (0x0, baileys_1[_0x5dc037(0x2f1)])(0x1f4),
      _0x5aefe5 &&
        _0x508e88['includes'](_0x5aefe5) &&
        (await (0x0, baileys_1[_0x5dc037(0x2f1)])(0x3e8),
        setTimeout(async () => {
          const _0x356b02 = _0x5dc037;
          await _0x34953f[_0x356b02(0x184)]({
            contactId: _0x34953f[_0x356b02(0x182)]['id'][_0x356b02(0x189)](),
            useIntegration: !![]
          }),
            await (0x0, UpdateTicketService_1['default'])({
              ticketId: _0x34953f['id'],
              ticketData: { status: _0x356b02(0x289) },
              companyId: _0x2e5b33
            });
        }, 0xbb8)));
}
const verifyQueue = async (
    _0x12037f,
    _0x892801,
    _0x180d39,
    _0x39723b,
    _0x4bc9cc,
    _0x3ddf91
  ) => {
    const _0x3b8a69 = a659_0x31ccb2,
      _0x16e006 = _0x180d39[_0x3b8a69(0x21e)],
      {
        queues: _0xed421c,
        greetingMessage: _0x5dddf4,
        maxUseBotQueues: _0x4eee65,
        timeUseBotQueues: _0x56e98c
      } = await (0x0, ShowWhatsAppService_1[_0x3b8a69(0x222)])(
        _0x12037f['id'],
        _0x16e006
      );
    let _0x1641e7 = ![];
    _0xed421c[_0x3b8a69(0x29a)] === 0x1 &&
      (_0x1641e7 = _0xed421c[0x0]?.['chatbots'][_0x3b8a69(0x29a)] > 0x1);
    const _0x576243 = _0x4bc9cc[_0x3b8a69(0x17c)] === _0x3b8a69(0x24d);
    if (_0xed421c[_0x3b8a69(0x29a)] === 0x1 && !_0x1641e7) {
      const _0x1e9c73 =
        _0x4bc9cc['sendGreetingMessageOneQueues'] === _0x3b8a69(0x24d) || ![];
      if (
        !_0x892801[_0x3b8a69(0x29e)][_0x3b8a69(0x28c)] &&
        !_0x180d39[_0x3b8a69(0x2f9)] &&
        _0xed421c[0x0]['integrationId']
      ) {
        const _0x31f1ae = await (0x0,
        ShowQueueIntegrationService_1[_0x3b8a69(0x222)])(
          _0xed421c[0x0][_0x3b8a69(0x215)],
          _0x16e006
        );
        await (0x0, exports[_0x3b8a69(0x287)])(
          _0x892801,
          _0x12037f,
          _0x16e006,
          _0x31f1ae,
          _0x180d39
        ),
          await _0x180d39[_0x3b8a69(0x184)]({
            useIntegration: !![],
            integrationId: _0x31f1ae['id']
          });
      }
      if (_0x5dddf4[_0x3b8a69(0x29a)] > 0x1 && _0x1e9c73) {
        const _0x252aab = (0x0, Mustache_1[_0x3b8a69(0x222)])(
          '' + _0x5dddf4,
          _0x180d39
        );
        if (_0x180d39[_0x3b8a69(0x22f)][_0x3b8a69(0x299)] !== null) {
          const _0xdcd508 = path_1[_0x3b8a69(0x222)][_0x3b8a69(0x2a4)](
              _0x3b8a69(0x195),
              _0x3b8a69(0x304) + _0x16e006,
              _0x180d39[_0x3b8a69(0x22f)]['greetingMediaAttachment']
            ),
            _0x22682b = _0x180d39['whatsapp']['greetingMediaAttachment'],
            _0x4c13b4 = await (0x0, SendWhatsAppMedia_1[_0x3b8a69(0x2b6)])(
              _0x22682b,
              _0xdcd508,
              String(_0x16e006),
              _0x252aab
            ),
            _0x11e481 = (0x0, Debounce_1['debounce'])(
              async () => {
                const _0x5c9d9b = _0x3b8a69,
                  _0x4609d4 = await _0x12037f['sendMessage'](
                    _0x180d39[_0x5c9d9b(0x182)]['number'] +
                      '@' +
                      (_0x180d39[_0x5c9d9b(0x2f9)]
                        ? _0x5c9d9b(0x28b)
                        : 's.whatsapp.net'),
                    { ..._0x4c13b4 }
                  );
                await (0x0, exports[_0x5c9d9b(0x2cd)])(
                  _0x4609d4,
                  _0x180d39,
                  _0x39723b,
                  _0x3ddf91
                );
              },
              0x3e8,
              _0x180d39['id']
            );
          _0x11e481();
        } else
          await _0x12037f[_0x3b8a69(0x2a1)](
            _0x39723b[_0x3b8a69(0x245)] +
              '@' +
              (_0x180d39['isGroup'] ? _0x3b8a69(0x28b) : _0x3b8a69(0x308)),
            { text: _0x252aab }
          );
      }
      if (!(0x0, lodash_1[_0x3b8a69(0x2ae)])(_0xed421c[0x0][_0x3b8a69(0x25a)]))
        try {
          const _0x25e013 = path_1['default']['resolve'](
              __dirname,
              '..',
              '..',
              '..',
              _0x3b8a69(0x195)
            ),
            _0x468c2b = await (0x0, ShowService_1[_0x3b8a69(0x222)])(
              _0xed421c[0x0][_0x3b8a69(0x25a)],
              _0x180d39['companyId']
            ),
            _0x5e7057 = path_1[_0x3b8a69(0x222)][_0x3b8a69(0x2a4)](
              _0x25e013,
              'company' + _0x180d39[_0x3b8a69(0x21e)],
              _0x3b8a69(0x255),
              String(_0x468c2b['id'])
            );
          for (const [_0x13c9d8, _0x58b493] of _0x468c2b['options'][
            _0x3b8a69(0x1e7)
          ]()) {
            const _0x514663 = {
              fieldname: _0x3b8a69(0x1fb),
              originalname: _0x58b493[_0x3b8a69(0x188)],
              encoding: _0x3b8a69(0x2f0),
              mimetype: _0x58b493[_0x3b8a69(0x22a)],
              filename: _0x58b493['path'],
              path: path_1[_0x3b8a69(0x222)]['resolve'](
                _0x5e7057,
                _0x58b493[_0x3b8a69(0x188)]
              )
            };
            await (0x0, SendWhatsAppMedia_1[_0x3b8a69(0x222)])({
              media: _0x514663,
              ticket: _0x180d39,
              body: _0x58b493[_0x3b8a69(0x203)],
              isPrivate: ![],
              isForwarded: ![]
            });
          }
        } catch (_0x198660) {
          logger_1[_0x3b8a69(0x19b)]['info'](_0x198660);
        }
      if (_0xed421c[0x0][_0x3b8a69(0x180)]) {
        await (0x0, UpdateTicketService_1[_0x3b8a69(0x222)])({
          ticketData: {
            status: _0x3b8a69(0x289),
            queueId: _0xed421c[0x0]['id'],
            sendFarewellMessage: ![]
          },
          ticketId: _0x180d39['id'],
          companyId: _0x16e006
        });
        return;
      } else
        await (0x0, UpdateTicketService_1[_0x3b8a69(0x222)])({
          ticketData: { queueId: _0xed421c[0x0]['id'] },
          ticketId: _0x180d39['id'],
          companyId: _0x16e006
        });
      const _0x2c144b = await Ticket_1[_0x3b8a69(0x222)]['findAndCountAll']({
        where: {
          userId: null,
          status: _0x3b8a69(0x26c),
          companyId: _0x16e006,
          queueId: _0xed421c[0x0]['id'],
          isGroup: ![]
        }
      });
      if (_0x576243) {
        const _0x1fcd77 =
            _0x2c144b[_0x3b8a69(0x251)] === 0x0
              ? 0x1
              : _0x2c144b[_0x3b8a69(0x251)],
          _0x1223fd =
            '*Assistente\x20Virtual:*\x0a{{ms}}\x20*{{name}}*,\x20sua\x20posição\x20na\x20fila\x20de\x20atendimento\x20é:\x20*' +
            _0x1fcd77 +
            '*',
          _0x25b3bd = (0x0, Mustache_1[_0x3b8a69(0x222)])(
            '' + _0x1223fd,
            _0x180d39
          ),
          _0x545623 = (0x0, Debounce_1['debounce'])(
            async () => {
              const _0x1c4130 = _0x3b8a69;
              await _0x12037f[_0x1c4130(0x2a1)](
                _0x39723b[_0x1c4130(0x245)] +
                  '@' +
                  (_0x180d39['isGroup'] ? _0x1c4130(0x28b) : _0x1c4130(0x308)),
                { text: _0x25b3bd }
              );
            },
            0xbb8,
            _0x180d39['id']
          );
        _0x545623();
      }
      return;
    }
    if (_0x39723b[_0x3b8a69(0x305)]) return;
    let _0x5b2ecf = '';
    if (_0x180d39[_0x3b8a69(0x23a)] !== _0x3b8a69(0x177))
      _0x5b2ecf =
        _0x892801?.[_0x3b8a69(0x268)]?.['buttonsResponseMessage']?.[
          _0x3b8a69(0x2b1)
        ] ||
        _0x892801?.[_0x3b8a69(0x268)]?.['listResponseMessage']?.[
          _0x3b8a69(0x244)
        ][_0x3b8a69(0x1b4)] ||
        (0x0, exports['getBodyMessage'])(_0x892801);
    else {
      if (!(0x0, lodash_1['isNil'])(_0x180d39[_0x3b8a69(0x31a)]))
        await _0x180d39[_0x3b8a69(0x184)]({ status: 'pending' });
      await _0x180d39[_0x3b8a69(0x1db)]();
    }
    if (_0x5b2ecf[_0x3b8a69(0x207)]() == _0x3b8a69(0x269)) {
      const _0x3e8d23 = {
        isBot: ![],
        status: _0x3b8a69(0x289),
        sendFarewellMessage: !![],
        maxUseBotQueues: 0x0
      };
      await (0x0, UpdateTicketService_1[_0x3b8a69(0x222)])({
        ticketData: _0x3e8d23,
        ticketId: _0x180d39['id'],
        companyId: _0x16e006
      });
      return;
    }
    let _0x34a0ad =
      _0x1641e7 && _0xed421c['length'] === 0x1
        ? _0xed421c[+_0x5b2ecf]
        : _0xed421c[+_0x5b2ecf - 0x1];
    const _0x25ee1f = _0x4bc9cc?.[_0x3b8a69(0x1be)] || 'text';
    let _0x10da15;
    if (_0x34a0ad)
      try {
        const _0x1dba95 = await (0x0, ListUserQueueServices_1['default'])(
          _0x34a0ad['id']
        );
        _0x1dba95['userId'] > -0x1 && (_0x10da15 = _0x1dba95['userId']);
      } catch (_0x573b96) {
        console['error'](_0x573b96);
      }
    const _0x4feff3 = async () => {
      const _0x18710d = _0x3b8a69;
      if (_0x34a0ad || (_0xed421c[_0x18710d(0x29a)] === 0x1 && _0x1641e7)) {
        if (_0xed421c['length'] === 0x1) _0x34a0ad = _0xed421c[0x0];
        const _0x31a625 = await Queue_1[_0x18710d(0x222)][_0x18710d(0x28a)](
          _0x34a0ad['id']
        );
        let _0x46f121;
        _0x4bc9cc?.[_0x18710d(0x181)] === _0x18710d(0x190) &&
          (_0x46f121 = await (0x0, VerifyCurrentSchedule_1[_0x18710d(0x222)])(
            _0x16e006,
            _0x31a625['id'],
            0x0
          ));
        if (
          _0x4bc9cc?.[_0x18710d(0x181)] === 'queue' &&
          !(0x0, lodash_1[_0x18710d(0x2ae)])(_0x46f121) &&
          (!_0x46f121 || _0x46f121[_0x18710d(0x2f4)] === ![]) &&
          (!_0x180d39['isGroup'] ||
            _0x180d39[_0x18710d(0x22f)]?.[_0x18710d(0x214)] === 'enabled')
        ) {
          const _0x448ce7 = _0x31a625[_0x18710d(0x30d)];
          if (_0x448ce7 !== '') {
            const _0x44d695 = (0x0, Mustache_1[_0x18710d(0x222)])(
                '' + _0x448ce7,
                _0x180d39
              ),
              _0x43ea86 = (0x0, Debounce_1[_0x18710d(0x1f9)])(
                async () => {
                  const _0x2856e1 = _0x18710d;
                  await _0x12037f['sendMessage'](
                    _0x180d39[_0x2856e1(0x182)][_0x2856e1(0x245)] +
                      '@' +
                      (_0x180d39[_0x2856e1(0x2f9)] ? 'g.us' : _0x2856e1(0x308)),
                    { text: _0x44d695 }
                  );
                },
                0x3e8,
                _0x180d39['id']
              );
            _0x43ea86(),
              await _0x180d39[_0x18710d(0x184)]({
                queueId: _0x31a625['id'],
                isOutOfHour: !![],
                amountUsedBotQueues: _0x180d39[_0x18710d(0x1a3)] + 0x1
              });
            return;
          }
          await _0x180d39[_0x18710d(0x184)]({
            isOutOfHour: !![],
            amountUsedBotQueues: _0x180d39[_0x18710d(0x1a3)] + 0x1
          });
          return;
        }
        await (0x0, UpdateTicketService_1[_0x18710d(0x222)])({
          ticketData: { amountUsedBotQueues: 0x0, queueId: _0x34a0ad['id'] },
          ticketId: _0x180d39['id'],
          companyId: _0x16e006
        });
        if (
          _0x34a0ad[_0x18710d(0x2c0)][_0x18710d(0x29a)] > 0x0 &&
          !_0x180d39[_0x18710d(0x2f9)]
        ) {
          let _0x5c00fc = '';
          _0x34a0ad[_0x18710d(0x2c0)][_0x18710d(0x1bc)](
            (_0x57251b, _0x2dc2eb) => {
              const _0x3cef3d = _0x18710d;
              _0x5c00fc +=
                '*[\x20' +
                (_0x2dc2eb + 0x1) +
                '\x20]*\x20-\x20' +
                _0x57251b[_0x3cef3d(0x203)] +
                '\x0a';
            }
          );
          const _0x24b933 = (0x0, Mustache_1['default'])(
              '‎\x20' +
                _0x34a0ad['greetingMessage'] +
                '\x0a\x0a' +
                _0x5c00fc +
                _0x18710d(0x2c7),
              _0x180d39
            ),
            _0xcc07fc = await _0x12037f[_0x18710d(0x2a1)](
              _0x39723b[_0x18710d(0x245)] +
                '@' +
                (_0x180d39[_0x18710d(0x2f9)]
                  ? _0x18710d(0x28b)
                  : 's.whatsapp.net'),
              { text: _0x24b933 }
            );
          await (0x0, exports['verifyMessage'])(
            _0xcc07fc,
            _0x180d39,
            _0x39723b,
            _0x3ddf91
          ),
            _0x4bc9cc?.['settingsUserRandom'] === _0x18710d(0x24d) &&
              (await (0x0, UpdateTicketService_1[_0x18710d(0x222)])({
                ticketData: { userId: _0x10da15 },
                ticketId: _0x180d39['id'],
                companyId: _0x16e006
              }));
        }
        if (
          !_0x34a0ad['chatbots']['length'] &&
          _0x34a0ad['greetingMessage']['length'] !== 0x0
        ) {
          const _0x4d4a19 = (0x0, Mustache_1['default'])(
              '‎' + _0x34a0ad['greetingMessage'],
              _0x180d39
            ),
            _0x177fc0 = await _0x12037f[_0x18710d(0x2a1)](
              _0x39723b['number'] +
                '@' +
                (_0x180d39['isGroup'] ? _0x18710d(0x28b) : _0x18710d(0x308)),
              { text: _0x4d4a19 }
            );
          await (0x0, exports['verifyMessage'])(
            _0x177fc0,
            _0x180d39,
            _0x39723b,
            _0x3ddf91
          );
        }
        if (
          !_0x892801[_0x18710d(0x29e)]['fromMe'] &&
          !_0x180d39[_0x18710d(0x2f9)] &&
          _0x34a0ad?.[_0x18710d(0x215)]
        ) {
          const _0x206591 = await (0x0,
          ShowQueueIntegrationService_1[_0x18710d(0x222)])(
            _0x34a0ad['integrationId'],
            _0x16e006
          );
          await (0x0, exports[_0x18710d(0x287)])(
            _0x892801,
            _0x12037f,
            _0x16e006,
            _0x206591,
            _0x180d39
          ),
            await _0x180d39['update']({
              useIntegration: !![],
              integrationId: _0x34a0ad['integrationId']
            });
        }
        if (!(0x0, lodash_1[_0x18710d(0x2ae)])(_0x34a0ad['fileListId']))
          try {
            const _0x36e060 = path_1[_0x18710d(0x222)]['resolve'](
                __dirname,
                '..',
                '..',
                '..',
                _0x18710d(0x195)
              ),
              _0x4d9d76 = await (0x0, ShowService_1[_0x18710d(0x222)])(
                _0x34a0ad[_0x18710d(0x25a)],
                _0x180d39[_0x18710d(0x21e)]
              ),
              _0x4083ec = path_1[_0x18710d(0x222)][_0x18710d(0x2a4)](
                _0x36e060,
                _0x18710d(0x304) + _0x180d39[_0x18710d(0x21e)],
                _0x18710d(0x255),
                String(_0x4d9d76['id'])
              );
            for (const [_0x528066, _0x77ecab] of _0x4d9d76[_0x18710d(0x288)][
              _0x18710d(0x1e7)
            ]()) {
              const _0x56f7d0 = {
                  fieldname: 'medias',
                  originalname: _0x77ecab['path'],
                  encoding: _0x18710d(0x2f0),
                  mimetype: _0x77ecab[_0x18710d(0x22a)],
                  filename: _0x77ecab[_0x18710d(0x188)],
                  path: path_1[_0x18710d(0x222)][_0x18710d(0x2a4)](
                    _0x4083ec,
                    _0x77ecab[_0x18710d(0x188)]
                  )
                },
                _0x2531b4 = await (0x0, SendWhatsAppMedia_1[_0x18710d(0x222)])({
                  media: _0x56f7d0,
                  ticket: _0x180d39,
                  body: '‎\x20' + _0x77ecab['name'],
                  isPrivate: ![],
                  isForwarded: ![]
                });
              await (0x0, exports['verifyMediaMessage'])(
                _0x2531b4,
                _0x180d39,
                _0x180d39[_0x18710d(0x182)],
                _0x3ddf91,
                ![]
              );
            }
          } catch (_0x934ed) {
            logger_1[_0x18710d(0x19b)][_0x18710d(0x20c)](_0x934ed);
          }
        await (0x0, baileys_1['delay'])(0xfa0);
        if (_0x34a0ad[_0x18710d(0x180)]) {
          try {
            await (0x0, UpdateTicketService_1[_0x18710d(0x222)])({
              ticketData: {
                status: _0x18710d(0x289),
                queueId: _0x34a0ad['id'],
                sendFarewellMessage: ![]
              },
              ticketId: _0x180d39['id'],
              companyId: _0x16e006
            });
          } catch (_0x5a25a3) {
            logger_1[_0x18710d(0x19b)]['info'](_0x5a25a3);
          }
          return;
        }
        const _0x2ce36a = await Ticket_1['default'][_0x18710d(0x2fc)]({
          where: {
            userId: null,
            status: _0x18710d(0x26c),
            companyId: _0x16e006,
            queueId: _0x34a0ad['id'],
            isGroup: ![]
          }
        });
        await (0x0, CreateLogTicketService_1[_0x18710d(0x222)])({
          ticketId: _0x180d39['id'],
          type: 'queue',
          queueId: _0x34a0ad['id']
        });
        if (_0x576243 && !_0x34a0ad[_0x18710d(0x2c0)][_0x18710d(0x29a)]) {
          const _0x35e833 =
              _0x2ce36a[_0x18710d(0x251)] === 0x0
                ? 0x1
                : _0x2ce36a[_0x18710d(0x251)],
            _0x1db83b = _0x18710d(0x20b) + _0x35e833 + '*',
            _0x38654b = (0x0, Mustache_1[_0x18710d(0x222)])(
              '' + _0x1db83b,
              _0x180d39
            ),
            _0x3b95d0 = (0x0, Debounce_1[_0x18710d(0x1f9)])(
              async () => {
                const _0x5a3341 = _0x18710d;
                await _0x12037f[_0x5a3341(0x2a1)](
                  _0x39723b['number'] +
                    '@' +
                    (_0x180d39[_0x5a3341(0x2f9)]
                      ? _0x5a3341(0x28b)
                      : 's.whatsapp.net'),
                  { text: _0x38654b }
                );
              },
              0xbb8,
              _0x180d39['id']
            );
          _0x3b95d0();
        }
      } else {
        if (_0x180d39[_0x18710d(0x2f9)]) return;
        if (
          _0x4eee65 &&
          _0x4eee65 !== 0x0 &&
          _0x180d39['amountUsedBotQueues'] >= _0x4eee65
        )
          return;
        const _0x1d1dcf = await (0x0,
        FindOrCreateATicketTrakingService_1[_0x18710d(0x222)])({
          ticketId: _0x180d39['id'],
          companyId: _0x16e006
        });
        let _0x56aa35 = new Date(),
          _0x2ed989 = new Date();
        if (_0x1d1dcf['chatbotAt'] !== null) {
          _0x56aa35['setMinutes'](
            _0x1d1dcf['chatbotAt']['getMinutes']() + Number(_0x56e98c)
          );
          if (
            _0x1d1dcf[_0x18710d(0x2b5)] !== null &&
            _0x2ed989 < _0x56aa35 &&
            _0x56e98c !== '0' &&
            _0x180d39[_0x18710d(0x1a3)] !== 0x0
          )
            return;
        }
        await _0x1d1dcf[_0x18710d(0x184)]({ chatbotAt: null }),
          _0x12037f['presenceSubscribe'](_0x39723b[_0x18710d(0x21a)]);
        let _0xd3a8d = '';
        _0x12037f[_0x18710d(0x1fd)](
          _0x18710d(0x29f),
          _0x39723b[_0x18710d(0x21a)]
        ),
          _0xed421c[_0x18710d(0x1bc)]((_0x7733b7, _0x2e6541) => {
            const _0x21631c = _0x18710d;
            _0xd3a8d +=
              '*[\x20' +
              (_0x2e6541 + 0x1) +
              _0x21631c(0x18a) +
              _0x7733b7[_0x21631c(0x203)] +
              '\x0a';
          }),
          (_0xd3a8d += '\x0a*[\x20Sair\x20]*\x20-\x20Encerrar\x20atendimento');
        const _0x5ccf59 = (0x0, Mustache_1[_0x18710d(0x222)])(
          '‎' + _0x5dddf4 + '\x0a\x0a' + _0xd3a8d,
          _0x180d39
        );
        await (0x0, CreateLogTicketService_1[_0x18710d(0x222)])({
          ticketId: _0x180d39['id'],
          type: _0x18710d(0x309)
        }),
          await (0x0, baileys_1[_0x18710d(0x2f1)])(0x3e8),
          await _0x12037f[_0x18710d(0x1fd)](
            _0x18710d(0x1af),
            _0x39723b[_0x18710d(0x21a)]
          );
        if (_0x180d39[_0x18710d(0x22f)][_0x18710d(0x299)] !== null) {
          const _0x309519 = path_1[_0x18710d(0x222)][_0x18710d(0x2a4)](
              'public',
              _0x18710d(0x304) + _0x16e006,
              _0x180d39['whatsapp'][_0x18710d(0x299)]
            ),
            _0xefb196 = _0x180d39[_0x18710d(0x22f)]['greetingMediaAttachment'],
            _0x5d35f6 = await (0x0, SendWhatsAppMedia_1[_0x18710d(0x2b6)])(
              _0xefb196,
              _0x309519,
              String(_0x16e006),
              _0x5ccf59
            ),
            _0x1fb538 = (0x0, Debounce_1['debounce'])(
              async () => {
                const _0x50b5cf = _0x18710d;
                let _0x493fd3 = await _0x12037f[_0x50b5cf(0x2a1)](
                  _0x180d39['contact'][_0x50b5cf(0x245)] +
                    '@' +
                    (_0x180d39[_0x50b5cf(0x2f9)]
                      ? _0x50b5cf(0x28b)
                      : _0x50b5cf(0x308)),
                  { ..._0x5d35f6 }
                );
                await (0x0, exports[_0x50b5cf(0x2cd)])(
                  _0x493fd3,
                  _0x180d39,
                  _0x39723b,
                  _0x1d1dcf
                );
              },
              0x3e8,
              _0x180d39['id']
            );
          _0x1fb538(),
            await (0x0, UpdateTicketService_1['default'])({
              ticketData: {
                amountUsedBotQueues: _0x180d39[_0x18710d(0x1a3)] + 0x1
              },
              ticketId: _0x180d39['id'],
              companyId: _0x16e006
            });
          return;
        } else {
          const _0x2833cd = (0x0, Debounce_1[_0x18710d(0x1f9)])(
            async () => {
              const _0x2013d3 = _0x18710d,
                _0x1d0639 = await _0x12037f[_0x2013d3(0x2a1)](
                  _0x39723b[_0x2013d3(0x245)] +
                    '@' +
                    (_0x180d39[_0x2013d3(0x2f9)]
                      ? _0x2013d3(0x28b)
                      : _0x2013d3(0x308)),
                  { text: _0x5ccf59 }
                );
              (0x0, exports['verifyMessage'])(
                _0x1d0639,
                _0x180d39,
                _0x39723b,
                _0x1d1dcf
              );
            },
            0x3e8,
            _0x180d39['id']
          );
          await (0x0, UpdateTicketService_1[_0x18710d(0x222)])({
            ticketData: {
              amountUsedBotQueues: _0x180d39[_0x18710d(0x1a3)] + 0x1
            },
            ticketId: _0x180d39['id'],
            companyId: _0x16e006
          }),
            _0x2833cd();
        }
      }
    };
    if (_0x25ee1f === _0x3b8a69(0x1bd)) return _0x4feff3();
    if (_0x25ee1f === 'button' && _0xed421c[_0x3b8a69(0x29a)] > 0x3)
      return _0x4feff3();
  },
  verifyRating = _0x490659 => {
    const _0x19b22e = a659_0x31ccb2;
    if (
      _0x490659 &&
      _0x490659[_0x19b22e(0x21c)] === null &&
      _0x490659['closedAt'] !== null &&
      _0x490659[_0x19b22e(0x1ab)] !== null &&
      _0x490659[_0x19b22e(0x2c5)] === null
    )
      return !![];
    return ![];
  };
exports[a659_0x31ccb2(0x31b)] = verifyRating;
const handleRating = async (_0x30f0bf, _0x3642c1, _0x101bf9) => {
  const _0x19f44e = a659_0x31ccb2,
    _0x1551a7 = (0x0, socket_1['getIO'])(),
    _0x1486bd = _0x3642c1[_0x19f44e(0x21e)],
    { complationMessage: _0x4b1ef2 } = await (0x0,
    ShowWhatsAppService_1[_0x19f44e(0x222)])(
      _0x3642c1[_0x19f44e(0x285)],
      _0x1486bd
    );
  let _0x4822f0 = _0x30f0bf;
  _0x30f0bf < 0x0 && (_0x4822f0 = 0x0);
  _0x30f0bf > 0xa && (_0x4822f0 = 0xa);
  await UserRating_1[_0x19f44e(0x222)][_0x19f44e(0x259)]({
    ticketId: _0x101bf9['ticketId'],
    companyId: _0x101bf9[_0x19f44e(0x21e)],
    userId: _0x101bf9[_0x19f44e(0x1ab)],
    rate: _0x4822f0
  });
  if (
    !(0x0, lodash_1[_0x19f44e(0x2ae)])(_0x4b1ef2) &&
    _0x4b1ef2 !== '' &&
    !_0x3642c1['isGroup']
  ) {
    const _0x302112 = (0x0, Mustache_1[_0x19f44e(0x222)])(
      '‎' + _0x4b1ef2,
      _0x3642c1
    );
    if (_0x3642c1[_0x19f44e(0x1b7)] === 'whatsapp') {
      const _0x3cf42b = await (0x0, SendWhatsAppMessage_1[_0x19f44e(0x222)])({
        body: _0x302112,
        ticket: _0x3642c1
      });
      await (0x0, exports[_0x19f44e(0x2ce)])(
        _0x3cf42b,
        _0x3642c1,
        _0x3642c1['contact'],
        _0x101bf9
      );
    }
    [_0x19f44e(0x261), _0x19f44e(0x2c3)]['includes'](
      _0x3642c1[_0x19f44e(0x1b7)]
    ) &&
      (await (0x0, sendFacebookMessage_1[_0x19f44e(0x222)])({
        body: _0x302112,
        ticket: _0x3642c1
      }));
  }
  await _0x3642c1['update']({
    chatbot: null,
    status: _0x19f44e(0x289),
    amountUsedBotQueuesNPS: 0x0
  }),
    await (0x0, CreateLogTicketService_1[_0x19f44e(0x222)])({
      userId: _0x3642c1[_0x19f44e(0x1ab)],
      queueId: _0x3642c1[_0x19f44e(0x1fe)],
      ticketId: _0x3642c1['id'],
      type: _0x19f44e(0x289)
    }),
    _0x1551a7['to'](_0x19f44e(0x23d))[_0x19f44e(0x1b9)](
      _0x19f44e(0x2f7) + _0x1486bd + _0x19f44e(0x2a9),
      { action: 'delete', ticket: _0x3642c1, ticketId: _0x3642c1['id'] }
    ),
    _0x1551a7['to'](_0x3642c1[_0x19f44e(0x23a)])
      ['to'](_0x3642c1['id'][_0x19f44e(0x189)]())
      [_0x19f44e(0x1b9)](_0x19f44e(0x2f7) + _0x1486bd + '-ticket', {
        action: _0x19f44e(0x184),
        ticket: _0x3642c1,
        ticketId: _0x3642c1['id']
      });
};
exports[a659_0x31ccb2(0x1ac)] = handleRating;
const sanitizeName = _0x56a3c2 => {
    const _0xd8d9fb = a659_0x31ccb2;
    let _0x1a1ce3 = _0x56a3c2['split']('\x20')[0x0];
    return (
      (_0x1a1ce3 = _0x1a1ce3[_0xd8d9fb(0x2c6)](/[^a-zA-Z0-9]/g, '')),
      _0x1a1ce3[_0xd8d9fb(0x2e6)](0x0, 0x3c)
    );
  },
  deleteFileSync = _0x15a93e => {
    const _0x5bc7e2 = a659_0x31ccb2;
    try {
      fs_2[_0x5bc7e2(0x222)]['unlinkSync'](_0x15a93e);
    } catch (_0xb6f59a) {
      console[_0x5bc7e2(0x194)](_0x5bc7e2(0x228), _0xb6f59a);
    }
  },
  convertTextToSpeechAndSaveToFile = (
    _0x1d0c1b,
    _0x1e5ec5,
    _0x1f6c17,
    _0xf35e61,
    _0xfd65b1 = 'pt-BR-FabioNeural',
    _0x26040f = 'mp3'
  ) => {
    return new Promise((_0x3226bd, _0x339dc1) => {
      const _0x40276e = a659_0x1c81,
        _0xd5e382 = microsoft_cognitiveservices_speech_sdk_1[_0x40276e(0x19a)][
          'fromSubscription'
        ](_0x1f6c17, _0xf35e61);
      _0xd5e382[_0x40276e(0x1ed)] = _0xfd65b1;
      const _0x19ae8c = microsoft_cognitiveservices_speech_sdk_1[
          _0x40276e(0x2a6)
        ][_0x40276e(0x254)](_0x1e5ec5 + _0x40276e(0x1ee)),
        _0x2641d9 = new microsoft_cognitiveservices_speech_sdk_1[
          _0x40276e(0x25b)
        ](_0xd5e382, _0x19ae8c);
      _0x2641d9[_0x40276e(0x1e0)](
        _0x1d0c1b,
        _0x8151f5 => {
          const _0x28a93c = _0x40276e;
          _0x8151f5
            ? convertWavToAnotherFormat(
                _0x1e5ec5 + _0x28a93c(0x1ee),
                _0x1e5ec5 + '.' + _0x26040f,
                _0x26040f
              )
                [_0x28a93c(0x196)](_0x134c00 => {
                  _0x3226bd();
                })
                [_0x28a93c(0x23e)](_0x16c2b2 => {
                  console['error'](_0x16c2b2), _0x339dc1(_0x16c2b2);
                })
            : _0x339dc1(new Error(_0x28a93c(0x30b))),
            _0x2641d9[_0x28a93c(0x26f)]();
        },
        _0x581961 => {
          const _0xb5c16d = _0x40276e;
          console[_0xb5c16d(0x194)](_0xb5c16d(0x282) + _0x581961),
            _0x2641d9[_0xb5c16d(0x26f)](),
            _0x339dc1(_0x581961);
        }
      );
    });
  },
  convertWavToAnotherFormat = (_0x3184dd, _0x50ce40, _0x731f05) => {
    return new Promise((_0x5b3704, _0x4bfdf2) => {
      const _0x2f1c00 = a659_0x1c81;
      (0x0, fluent_ffmpeg_1[_0x2f1c00(0x222)])()
        [_0x2f1c00(0x1e5)](_0x3184dd)
        [_0x2f1c00(0x2b4)](_0x731f05)
        ['on'](_0x2f1c00(0x2e0), () => _0x5b3704(_0x50ce40))
        ['on']('error', _0x42523d =>
          _0x4bfdf2(new Error(_0x2f1c00(0x24e) + _0x42523d[_0x2f1c00(0x268)]))
        )
        [_0x2f1c00(0x2c8)](_0x50ce40);
    });
  },
  keepOnlySpecifiedChars = _0x646437 => {
    const _0x23aec9 = a659_0x31ccb2;
    return _0x646437[_0x23aec9(0x2c6)](
      /[^a-zA-Z0-9áéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕçÇ!?.,;:\s]/g,
      ''
    );
  },
  handleOpenAi = async (
    _0x38c3ef,
    _0x51155d,
    _0x341eed,
    _0x2ce042,
    _0x12891d
  ) => {
    const _0x1ec205 = a659_0x31ccb2;
    if (_0x2ce042['disableBot']) return;
    const _0x292b32 = (0x0, exports[_0x1ec205(0x24c)])(_0x38c3ef);
    if (!_0x292b32) return;
    const { prompt: _0x38adde } = await (0x0, ShowWhatsAppService_1['default'])(
      _0x51155d['id'],
      _0x341eed['companyId']
    );
    if (!_0x38adde) return;
    if (_0x38c3ef[_0x1ec205(0x2d5)]) return;
    const _0x50a851 = path_1[_0x1ec205(0x222)][_0x1ec205(0x2a4)](
      __dirname,
      '..',
      '..',
      '..',
      _0x1ec205(0x195),
      _0x1ec205(0x304) + _0x341eed[_0x1ec205(0x21e)]
    );
    let _0x5ca164;
    const _0x5d8328 = sessionsOpenAi[_0x1ec205(0x221)](
      _0x4081db => _0x4081db['id'] === _0x51155d['id']
    );
    _0x5d8328 === -0x1
      ? ((_0x5ca164 = new openai_1[_0x1ec205(0x222)]({
          apiKey: _0x38adde['apiKey']
        })),
        sessionsOpenAi[_0x1ec205(0x1a6)](_0x5ca164))
      : (_0x5ca164 = sessionsOpenAi[_0x5d8328]);
    const _0x5ced2d = await Message_1[_0x1ec205(0x222)]['findAll']({
        where: { ticketId: _0x341eed['id'] },
        order: [[_0x1ec205(0x238), _0x1ec205(0x27e)]],
        limit: _0x38adde[_0x1ec205(0x1e9)]
      }),
      _0x1f6e6b =
        _0x1ec205(0x320) +
        sanitizeName(_0x2ce042[_0x1ec205(0x203)] || _0x1ec205(0x18f)) +
        _0x1ec205(0x316) +
        _0x38adde[_0x1ec205(0x250)] +
        _0x1ec205(0x1d3) +
        _0x38adde[_0x1ec205(0x1c1)] +
        '\x0a';
    let _0x2de02b = [];
    if (
      _0x38c3ef['message']?.[_0x1ec205(0x2bd)] ||
      _0x38c3ef[_0x1ec205(0x268)]?.['extendedTextMessage']?.[_0x1ec205(0x1bd)]
    ) {
      (_0x2de02b = []),
        _0x2de02b[_0x1ec205(0x1a6)]({ role: 'system', content: _0x1f6e6b });
      for (
        let _0x5e3367 = 0x0;
        _0x5e3367 <
        Math['min'](_0x38adde[_0x1ec205(0x1e9)], _0x5ced2d['length']);
        _0x5e3367++
      ) {
        const _0x9341af = _0x5ced2d[_0x5e3367];
        _0x9341af[_0x1ec205(0x22a)] === _0x1ec205(0x2ec) &&
          (_0x9341af['fromMe']
            ? _0x2de02b[_0x1ec205(0x1a6)]({
                role: _0x1ec205(0x306),
                content: _0x9341af[_0x1ec205(0x241)]
              })
            : _0x2de02b['push']({
                role: _0x1ec205(0x280),
                content: _0x9341af[_0x1ec205(0x241)]
              }));
      }
      _0x2de02b['push']({ role: _0x1ec205(0x280), content: _0x292b32 });
      const _0x47cdcd = await _0x5ca164[_0x1ec205(0x2ec)]['completions'][
        _0x1ec205(0x259)
      ]({
        model: _0x1ec205(0x19d),
        messages: _0x2de02b,
        max_tokens: _0x38adde[_0x1ec205(0x250)],
        temperature: _0x38adde['temperature']
      });
      let _0x528695 =
        _0x47cdcd[_0x1ec205(0x1a1)][0x0][_0x1ec205(0x268)]?.['content'];
      _0x528695?.['includes'](_0x1ec205(0x2f3)) &&
        (await transferQueue(_0x38adde[_0x1ec205(0x1fe)], _0x341eed, _0x2ce042),
        (_0x528695 = _0x528695['replace'](_0x1ec205(0x2f3), '')[
          _0x1ec205(0x1eb)
        ]()));
      if (_0x38adde[_0x1ec205(0x1bb)] === _0x1ec205(0x201)) {
        const _0x2673a3 = await _0x51155d[_0x1ec205(0x2a1)](
          _0x38c3ef[_0x1ec205(0x29e)][_0x1ec205(0x21a)],
          { text: '‎\x20' + _0x528695 }
        );
        await (0x0, exports[_0x1ec205(0x2ce)])(_0x2673a3, _0x341eed, _0x2ce042);
      } else {
        const _0x41d960 = _0x341eed['id'] + '_' + Date[_0x1ec205(0x263)]();
        convertTextToSpeechAndSaveToFile(
          keepOnlySpecifiedChars(_0x528695),
          _0x50a851 + '/' + _0x41d960,
          _0x38adde[_0x1ec205(0x206)],
          _0x38adde['voiceRegion'],
          _0x38adde[_0x1ec205(0x1bb)],
          _0x1ec205(0x25e)
        )[_0x1ec205(0x196)](async () => {
          const _0x446eb4 = _0x1ec205;
          try {
            const _0x3f80ee = await _0x51155d[_0x446eb4(0x2a1)](
              _0x38c3ef['key'][_0x446eb4(0x21a)],
              {
                audio: { url: _0x50a851 + '/' + _0x41d960 + _0x446eb4(0x286) },
                mimetype: 'audio/mpeg',
                ptt: !![]
              }
            );
            await (0x0, exports[_0x446eb4(0x2cd)])(
              _0x3f80ee,
              _0x341eed,
              _0x2ce042
            ),
              deleteFileSync(_0x50a851 + '/' + _0x41d960 + _0x446eb4(0x286)),
              deleteFileSync(_0x50a851 + '/' + _0x41d960 + _0x446eb4(0x1ee));
          } catch (_0x2e9ea1) {
            console[_0x446eb4(0x2d4)](_0x446eb4(0x21d) + _0x2e9ea1);
          }
        });
      }
    } else {
      if (_0x38c3ef['message']?.[_0x1ec205(0x28f)]) {
        const _0x1f9e15 = _0x12891d[_0x1ec205(0x18b)]
            ['split']('/')
            [_0x1ec205(0x1e2)](),
          _0xcd1c4a = fs_2['default'][_0x1ec205(0x1ba)](
            _0x50a851 + '/' + _0x1f9e15
          ),
          _0x19fec6 = await _0x5ca164[_0x1ec205(0x22b)][_0x1ec205(0x20f)][
            _0x1ec205(0x259)
          ]({ model: 'whisper-1', file: _0xcd1c4a });
        (_0x2de02b = []),
          _0x2de02b[_0x1ec205(0x1a6)]({
            role: _0x1ec205(0x27c),
            content: _0x1f6e6b
          });
        for (
          let _0x56dbe7 = 0x0;
          _0x56dbe7 <
          Math[_0x1ec205(0x276)](_0x38adde['maxMessages'], _0x5ced2d['length']);
          _0x56dbe7++
        ) {
          const _0x1b24c2 = _0x5ced2d[_0x56dbe7];
          _0x1b24c2['mediaType'] === _0x1ec205(0x2ec) &&
            (_0x1b24c2[_0x1ec205(0x28c)]
              ? _0x2de02b['push']({
                  role: 'assistant',
                  content: _0x1b24c2[_0x1ec205(0x241)]
                })
              : _0x2de02b[_0x1ec205(0x1a6)]({
                  role: _0x1ec205(0x280),
                  content: _0x1b24c2[_0x1ec205(0x241)]
                }));
        }
        _0x2de02b[_0x1ec205(0x1a6)]({
          role: _0x1ec205(0x280),
          content: _0x19fec6[_0x1ec205(0x1bd)]
        });
        const _0x1318b1 = await _0x5ca164[_0x1ec205(0x2ec)][_0x1ec205(0x319)][
          _0x1ec205(0x259)
        ]({
          model: 'gpt-3.5-turbo-1106',
          messages: _0x2de02b,
          max_tokens: _0x38adde['maxTokens'],
          temperature: _0x38adde[_0x1ec205(0x31f)]
        });
        let _0x270819 = _0x1318b1['choices'][0x0]['message']?.['content'];
        _0x270819?.[_0x1ec205(0x1d5)](
          'Ação:\x20Transferir\x20para\x20o\x20setor\x20de\x20atendimento'
        ) &&
          (await transferQueue(
            _0x38adde[_0x1ec205(0x1fe)],
            _0x341eed,
            _0x2ce042
          ),
          (_0x270819 = _0x270819[_0x1ec205(0x2c6)](_0x1ec205(0x2f3), '')[
            'trim'
          ]()));
        if (_0x38adde[_0x1ec205(0x1bb)] === _0x1ec205(0x201)) {
          const _0x50ab22 = await _0x51155d['sendMessage'](
            _0x38c3ef[_0x1ec205(0x29e)]['remoteJid'],
            { text: '‎\x20' + _0x270819 }
          );
          await (0x0, exports[_0x1ec205(0x2ce)])(
            _0x50ab22,
            _0x341eed,
            _0x2ce042
          );
        } else {
          const _0x44d783 = _0x341eed['id'] + '_' + Date[_0x1ec205(0x263)]();
          convertTextToSpeechAndSaveToFile(
            keepOnlySpecifiedChars(_0x270819),
            _0x50a851 + '/' + _0x44d783,
            _0x38adde[_0x1ec205(0x206)],
            _0x38adde[_0x1ec205(0x223)],
            _0x38adde[_0x1ec205(0x1bb)],
            _0x1ec205(0x25e)
          )['then'](async () => {
            const _0x455e19 = _0x1ec205;
            try {
              const _0x43d0a9 = await _0x51155d[_0x455e19(0x2a1)](
                _0x38c3ef[_0x455e19(0x29e)][_0x455e19(0x21a)],
                {
                  audio: {
                    url: _0x50a851 + '/' + _0x44d783 + _0x455e19(0x286)
                  },
                  mimetype: _0x455e19(0x31d),
                  ptt: !![]
                }
              );
              await (0x0, exports[_0x455e19(0x2cd)])(
                _0x43d0a9,
                _0x341eed,
                _0x2ce042
              ),
                deleteFileSync(_0x50a851 + '/' + _0x44d783 + '.mp3'),
                deleteFileSync(_0x50a851 + '/' + _0x44d783 + _0x455e19(0x1ee));
            } catch (_0x40fb36) {
              console[_0x455e19(0x2d4)](_0x455e19(0x21d) + _0x40fb36);
            }
          });
        }
      }
    }
    _0x2de02b = [];
  },
  transferQueue = async (_0x3b6f04, _0xa6ac4f, _0x121c0b) => {
    const _0x477c17 = a659_0x31ccb2;
    await (0x0, UpdateTicketService_1['default'])({
      ticketData: { queueId: _0x3b6f04 },
      ticketId: _0xa6ac4f['id'],
      companyId: _0xa6ac4f[_0x477c17(0x21e)]
    });
  },
  handleMessageIntegration = async (
    _0x1f3179,
    _0x80379b,
    _0x158a9e,
    _0xcf3fa1,
    _0x59f9e1
  ) => {
    const _0x30e651 = a659_0x31ccb2,
      _0x2e863e = getTypeMessage(_0x1f3179);
    if (_0x59f9e1?.[_0x30e651(0x182)]?.['disableBot']) return;
    if (
      _0xcf3fa1[_0x30e651(0x267)] === _0x30e651(0x30e) ||
      _0xcf3fa1[_0x30e651(0x267)] === _0x30e651(0x1b6)
    ) {
      if (_0xcf3fa1?.[_0x30e651(0x2d1)]) {
        const _0x4fa000 = {
          method: _0x30e651(0x318),
          url: _0xcf3fa1?.[_0x30e651(0x2d1)],
          headers: { 'Content-Type': _0x30e651(0x256) },
          json: _0x1f3179
        };
        try {
          request(_0x4fa000, function (_0x4c6532, _0x498118) {
            const _0x491361 = _0x30e651;
            if (_0x4c6532) throw new Error(_0x4c6532);
            else console[_0x491361(0x2d4)](_0x498118[_0x491361(0x241)]);
          });
        } catch (_0x429c92) {
          throw new Error(_0x429c92);
        }
      }
    } else {
      if (_0xcf3fa1[_0x30e651(0x267)] === _0x30e651(0x19e)) {
        let _0x405ed8;
        if (_0x2e863e === _0x30e651(0x28f)) {
          let _0x390a71 = _0x1f3179[_0x30e651(0x1b5)] + _0x30e651(0x31e);
          (0x0, fs_1[_0x30e651(0x314)])(
            (0x0, path_1[_0x30e651(0x1d4)])(
              __dirname,
              '..',
              '..',
              '..',
              _0x30e651(0x195),
              _0x30e651(0x304) + _0x158a9e,
              _0x390a71
            ),
            _0x30e651(0x284),
            (_0x40becb, _0x5a3e92) => {
              const _0x42cf12 = _0x30e651;
              (_0x405ed8 = _0x5a3e92),
                _0x40becb &&
                  logger_1[_0x42cf12(0x19b)][_0x42cf12(0x194)](_0x40becb);
            }
          );
        } else _0x405ed8 = undefined;
        const _0xc2eaf3 = (0x0, Debounce_1[_0x30e651(0x1f9)])(
          async () => {
            const _0x3a73a7 = _0x30e651;
            await sendDialogflowAwswer(
              _0x80379b,
              _0x59f9e1,
              _0x1f3179,
              _0x59f9e1[_0x3a73a7(0x182)],
              _0x405ed8,
              _0x158a9e,
              _0xcf3fa1
            );
          },
          0x1f4,
          _0x59f9e1['id']
        );
        _0xc2eaf3();
      } else
        _0xcf3fa1[_0x30e651(0x267)] === _0x30e651(0x179) &&
          (console[_0x30e651(0x2d4)](_0x30e651(0x1a7)),
          await (0x0, typebotListener_1[_0x30e651(0x222)])({
            ticket: _0x59f9e1,
            msg: _0x1f3179,
            wbot: _0x80379b,
            typebot: _0xcf3fa1
          }));
    }
  };
exports[a659_0x31ccb2(0x287)] = handleMessageIntegration;
const handleMessage = async (
  _0x21c239,
  _0x5dd465,
  _0x282717,
  _0x4451ba = ![]
) => {
  const _0x588bdf = a659_0x31ccb2;
  if (_0x4451ba) {
    (0x0, addLogs_1[_0x588bdf(0x321)])({
      fileName: _0x588bdf(0x1dd) + _0x5dd465['id'] + _0x588bdf(0x29c),
      text:
        _0x588bdf(0x272) +
        JSON['stringify'](_0x21c239, null, 0x2) +
        _0x588bdf(0x1d1)
    });
    let _0x5c3490 = _0x21c239[_0x588bdf(0x29e)]['id'],
      _0x57311c = await Message_1['default'][_0x588bdf(0x205)]({
        where: { wid: _0x5c3490 }
      });
    if (_0x57311c) {
      await new Promise(_0x42e7f3 => setTimeout(_0x42e7f3, 0x96)),
        console[_0x588bdf(0x2d4)](_0x588bdf(0x2a2));
      return;
    } else
      await new Promise(_0x5ade3b =>
        setTimeout(
          _0x5ade3b,
          parseInt(process[_0x588bdf(0x1aa)][_0x588bdf(0x236)]) || 0x14a
        )
      );
  } else await new Promise(_0x2c60c3 => setTimeout(_0x2c60c3, i * 0x28a)), i++;
  if (!isValidMsg(_0x21c239)) return;
  try {
    let _0x50a107,
      _0x4cb633,
      _0x11b97b = 0x0,
      _0x390807 = 0x0,
      _0x58ae1e = 0x0,
      _0x5107a6 = (0x0, exports[_0x588bdf(0x24c)])(_0x21c239);
    const _0x2fabda = getTypeMessage(_0x21c239);
    if (_0x2fabda === 'protocolMessage') return;
    const _0x1706f5 =
      _0x21c239['message']?.[_0x588bdf(0x213)] ||
      _0x21c239[_0x588bdf(0x268)]?.['audioMessage'] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x19c)] ||
      _0x21c239['message']?.[_0x588bdf(0x2e8)] ||
      _0x21c239[_0x588bdf(0x268)]?.['documentMessage'] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x202)]?.['message']?.[
        _0x588bdf(0x22d)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x2e9)]?.['message']?.[
        _0x588bdf(0x28f)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x2e9)]?.['message']?.[
        _0x588bdf(0x22d)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x2e9)]?.['message']?.[
        _0x588bdf(0x19c)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x2e9)]?.[_0x588bdf(0x268)]?.[
        _0x588bdf(0x2e8)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x2e9)]?.['message']?.[
        _0x588bdf(0x213)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x2dc)]?.['message']?.[
        _0x588bdf(0x213)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.['viewOnceMessage']?.['message']?.[
        _0x588bdf(0x19c)
      ] ||
      _0x21c239['message']?.[_0x588bdf(0x2e9)]?.[_0x588bdf(0x268)]?.[
        _0x588bdf(0x2dc)
      ]?.['message']?.[_0x588bdf(0x213)] ||
      _0x21c239['message']?.['ephemeralMessage']?.[_0x588bdf(0x268)]?.[
        _0x588bdf(0x2dc)
      ]?.[_0x588bdf(0x268)]?.[_0x588bdf(0x19c)] ||
      _0x21c239['message']?.['ephemeralMessage']?.['message']?.[
        'viewOnceMessage'
      ]?.[_0x588bdf(0x268)]?.[_0x588bdf(0x28f)] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x2e9)]?.['message']?.[
        'viewOnceMessage'
      ]?.[_0x588bdf(0x268)]?.['documentMessage'] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x202)]?.['message']?.[
        _0x588bdf(0x22d)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.['templateMessage']?.[_0x588bdf(0x1d9)]?.[
        _0x588bdf(0x213)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x1fa)]?.['hydratedTemplate']?.[
        _0x588bdf(0x22d)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x1fa)]?.[_0x588bdf(0x1d9)]?.[
        _0x588bdf(0x19c)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.['templateMessage']?.[
        'hydratedFourRowTemplate'
      ]?.['imageMessage'] ||
      _0x21c239[_0x588bdf(0x268)]?.['templateMessage']?.[
        'hydratedFourRowTemplate'
      ]?.[_0x588bdf(0x22d)] ||
      _0x21c239[_0x588bdf(0x268)]?.['templateMessage']?.[_0x588bdf(0x271)]?.[
        _0x588bdf(0x19c)
      ] ||
      _0x21c239['message']?.[_0x588bdf(0x1fa)]?.[_0x588bdf(0x2a8)]?.[
        _0x588bdf(0x213)
      ] ||
      _0x21c239['message']?.[_0x588bdf(0x1fa)]?.['fourRowTemplate']?.[
        'documentMessage'
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x1fa)]?.[_0x588bdf(0x2a8)]?.[
        _0x588bdf(0x19c)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x270)]?.[_0x588bdf(0x297)]?.[
        _0x588bdf(0x213)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x270)]?.[_0x588bdf(0x297)]?.[
        _0x588bdf(0x22d)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x270)]?.[_0x588bdf(0x297)]?.[
        _0x588bdf(0x19c)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.['highlyStructuredMessage']?.[
        'hydratedHsm'
      ]?.[_0x588bdf(0x1d9)]?.[_0x588bdf(0x22d)] ||
      _0x21c239['message']?.[_0x588bdf(0x17a)]?.[_0x588bdf(0x26a)]?.[
        'hydratedTemplate'
      ]?.[_0x588bdf(0x19c)] ||
      _0x21c239[_0x588bdf(0x268)]?.['highlyStructuredMessage']?.[
        _0x588bdf(0x26a)
      ]?.[_0x588bdf(0x1d9)]?.[_0x588bdf(0x213)] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x17a)]?.[_0x588bdf(0x26a)]?.[
        _0x588bdf(0x1d9)
      ]?.['locationMessage'];
    if (_0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x28c)]) {
      if (/\u200e/['test'](_0x5107a6)) return;
      if (
        !_0x1706f5 &&
        _0x2fabda !== _0x588bdf(0x2bd) &&
        _0x2fabda !== _0x588bdf(0x2f8) &&
        _0x2fabda !== _0x588bdf(0x2f2) &&
        _0x2fabda !== _0x588bdf(0x1fc) &&
        _0x2fabda !== _0x588bdf(0x2e9) &&
        _0x2fabda !== _0x588bdf(0x186) &&
        _0x2fabda !== _0x588bdf(0x2dc) &&
        _0x2fabda !== _0x588bdf(0x193) &&
        _0x2fabda !== 'hydratedContentText'
      )
        return;
      _0x50a107 = await getContactMessage(_0x21c239, _0x5dd465);
    } else _0x50a107 = await getContactMessage(_0x21c239, _0x5dd465);
    const _0x1d0336 = _0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x21a)]?.[
        _0x588bdf(0x2ff)
      ](_0x588bdf(0x28d)),
      _0x54fb33 = await (0x0, ShowWhatsAppService_1[_0x588bdf(0x222)])(
        _0x5dd465['id'],
        _0x282717
      );
    if (!_0x54fb33[_0x588bdf(0x1d7)] && _0x1d0336) return;
    if (_0x1d0336) {
      const _0x45ab1f = await _0x5dd465[_0x588bdf(0x1f4)](
          _0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x21a)]
        ),
        _0x72f308 = { id: _0x45ab1f['id'], name: _0x45ab1f['subject'] };
      _0x4cb633 = await verifyContact(_0x72f308, _0x5dd465, _0x282717);
    }
    const _0x2e8ea8 = await verifyContact(_0x50a107, _0x5dd465, _0x282717);
    let _0x5bfebc = 0x0;
    if (_0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x28c)])
      await cache_1[_0x588bdf(0x222)][_0x588bdf(0x2f5)](
        _0x588bdf(0x25c) + _0x2e8ea8['id'] + _0x588bdf(0x226),
        '0'
      );
    else {
      const _0x23a75f = await cache_1[_0x588bdf(0x222)][_0x588bdf(0x1d2)](
        _0x588bdf(0x25c) + _0x2e8ea8['id'] + _0x588bdf(0x226)
      );
      (_0x5bfebc = +_0x23a75f + 0x1),
        await cache_1[_0x588bdf(0x222)]['set'](
          'contacts:' + _0x2e8ea8['id'] + _0x588bdf(0x226),
          '' + _0x5bfebc
        );
    }
    const _0x565411 = await CompaniesSettings_1['default'][_0x588bdf(0x205)]({
        where: { companyId: _0x282717 }
      }),
      _0x50ed06 = _0x565411[_0x588bdf(0x20a)] === _0x588bdf(0x24d),
      { ticket: _0x170507 } = await (0x0,
      FindOrCreateTicketService_1[_0x588bdf(0x222)])(
        _0x2e8ea8,
        _0x54fb33,
        _0x5bfebc,
        _0x282717,
        _0x11b97b,
        _0x58ae1e,
        _0x4cb633,
        _0x588bdf(0x22f),
        _0x4451ba,
        ![],
        _0x565411
      );
    if (
      _0x170507['status'] === _0x588bdf(0x289) ||
      (_0x5bfebc === 0x0 &&
        _0x54fb33[_0x588bdf(0x2ad)] &&
        (0x0, Mustache_1['default'])(_0x54fb33[_0x588bdf(0x2ad)], _0x170507) ===
          _0x5107a6)
    )
      return;
    if (_0x2fabda === _0x588bdf(0x193)) {
      const _0x5b1994 =
          _0x21c239[_0x588bdf(0x268)]['editedMessage'][_0x588bdf(0x268)][
            _0x588bdf(0x186)
          ]['key']['id'],
        _0x2a820b =
          _0x21c239[_0x588bdf(0x268)][_0x588bdf(0x193)][_0x588bdf(0x268)][
            'protocolMessage'
          ][_0x588bdf(0x193)][_0x588bdf(0x2bd)],
        _0x1bc94e = (0x0, socket_1[_0x588bdf(0x2da)])();
      try {
        const _0x6c9b81 = await Message_1['default']['findOne']({
          where: {
            wid: _0x5b1994,
            companyId: _0x282717,
            ticketId: _0x170507['id']
          }
        });
        if (!_0x6c9b81) return;
        await _0x6c9b81[_0x588bdf(0x184)]({ isEdited: !![], body: _0x2a820b }),
          await _0x170507[_0x588bdf(0x184)]({ lastMessage: _0x2a820b }),
          _0x1bc94e['to'](_0x6c9b81['ticketId'][_0x588bdf(0x189)]())[
            _0x588bdf(0x1b9)
          ](_0x588bdf(0x2f7) + _0x6c9b81[_0x588bdf(0x21e)] + _0x588bdf(0x1cf), {
            action: 'update',
            message: _0x6c9b81
          });
      } catch (_0xf6fd0c) {
        Sentry[_0x588bdf(0x17e)](_0xf6fd0c),
          logger_1[_0x588bdf(0x19b)]['error'](_0x588bdf(0x185) + _0xf6fd0c);
      }
      return;
    }
    const _0x26709d = await (0x0,
    FindOrCreateATicketTrakingService_1[_0x588bdf(0x222)])({
      ticketId: _0x170507['id'],
      companyId: _0x282717,
      whatsappId: _0x54fb33?.['id']
    });
    try {
      if (!_0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x28c)]) {
        if (
          !(0x0, lodash_1['isNil'])(_0x54fb33[_0x588bdf(0x1a8)] && !_0x1d0336)
        ) {
          const _0x598eb5 = (0x0, moment_1['default'])();
          if (
            _0x598eb5[_0x588bdf(0x229)](
              (0x0, moment_1[_0x588bdf(0x222)])(_0x54fb33[_0x588bdf(0x252)]),
              (0x0, moment_1[_0x588bdf(0x222)])(_0x54fb33[_0x588bdf(0x2e4)])
            )
          ) {
            _0x1706f5
              ? await (0x0, exports[_0x588bdf(0x2cd)])(
                  _0x21c239,
                  _0x170507,
                  _0x2e8ea8
                )
              : await (0x0, exports['verifyMessage'])(
                  _0x21c239,
                  _0x170507,
                  _0x2e8ea8,
                  _0x26709d
                );
            _0x5dd465[_0x588bdf(0x2a1)](_0x2e8ea8[_0x588bdf(0x21a)], {
              text: _0x54fb33['collectiveVacationMessage']
            });
            return;
          }
        }
        if (
          _0x170507[_0x588bdf(0x23a)] === _0x588bdf(0x230) &&
          _0x26709d !== null &&
          (0x0, exports[_0x588bdf(0x31b)])(_0x26709d)
        ) {
          _0x1706f5
            ? await (0x0, exports['verifyMediaMessage'])(
                _0x21c239,
                _0x170507,
                _0x2e8ea8
              )
            : await (0x0, exports[_0x588bdf(0x2ce)])(
                _0x21c239,
                _0x170507,
                _0x2e8ea8,
                _0x26709d
              );
          if (!isNaN(parseFloat(_0x5107a6))) {
            (0x0, exports[_0x588bdf(0x1ac)])(
              parseFloat(_0x5107a6),
              _0x170507,
              _0x26709d
            ),
              await _0x26709d[_0x588bdf(0x184)]({
                ratingAt: (0x0, moment_1[_0x588bdf(0x222)])()[
                  _0x588bdf(0x30f)
                ](),
                finishedAt: (0x0, moment_1[_0x588bdf(0x222)])()[
                  _0x588bdf(0x30f)
                ](),
                rated: !![]
              });
            return;
          } else {
            if (
              _0x170507['amountUsedBotQueuesNPS'] <
              _0x54fb33['maxUseBotQueuesNPS']
            ) {
              let _0x530499 = _0x588bdf(0x30a);
              const _0x2a9001 = await _0x5dd465[_0x588bdf(0x2a1)](
                _0x170507[_0x588bdf(0x182)]['number'] +
                  '@' +
                  (_0x170507['isGroup'] ? _0x588bdf(0x28b) : _0x588bdf(0x308)),
                { text: _0x530499 }
              );
              (0x0, exports['verifyMessage'])(
                _0x2a9001,
                _0x170507,
                _0x2e8ea8,
                _0x26709d
              ),
                await (0x0, baileys_1[_0x588bdf(0x2f1)])(0x3e8);
              let _0x546b37 = '‎' + _0x54fb33[_0x588bdf(0x315)] + '\x0a';
              const _0x13b577 = await (0x0,
              SendWhatsAppMessage_1[_0x588bdf(0x222)])({
                body: _0x546b37,
                ticket: _0x170507
              });
              await (0x0, exports['verifyMessage'])(
                _0x13b577,
                _0x170507,
                _0x170507[_0x588bdf(0x182)]
              ),
                await _0x170507[_0x588bdf(0x184)]({
                  amountUsedBotQueuesNPS:
                    _0x170507['amountUsedBotQueuesNPS'] + 0x1
                });
            }
            return;
          }
        }
        if (
          _0x50ed06 &&
          _0x170507[_0x588bdf(0x23a)] === _0x588bdf(0x177) &&
          !_0x4451ba
        ) {
          _0x1706f5
            ? await (0x0, exports[_0x588bdf(0x2cd)])(
                _0x21c239,
                _0x170507,
                _0x2e8ea8
              )
            : await (0x0, exports[_0x588bdf(0x2ce)])(
                _0x21c239,
                _0x170507,
                _0x2e8ea8,
                _0x26709d
              );
          if (
            (0x0, lodash_1[_0x588bdf(0x2ae)])(_0x170507[_0x588bdf(0x31a)]) &&
            !(0x0, lodash_1[_0x588bdf(0x2ae)])(_0x170507[_0x588bdf(0x2ef)])
          ) {
            let _0x36a10b = parseFloat(_0x5107a6);
            if (
              !Number[_0x588bdf(0x1a5)](_0x36a10b) &&
              Number[_0x588bdf(0x283)](_0x36a10b) &&
              !(0x0, lodash_1[_0x588bdf(0x277)])(_0x36a10b) &&
              _0x36a10b > 0x0
            ) {
              if (_0x36a10b === 0x1)
                await _0x2e8ea8[_0x588bdf(0x184)]({
                  lgpdAcceptedAt: (0x0, moment_1[_0x588bdf(0x222)])()[
                    _0x588bdf(0x30f)
                  ]()
                }),
                  await _0x170507[_0x588bdf(0x184)]({
                    lgpdAcceptedAt: (0x0, moment_1[_0x588bdf(0x222)])()[
                      _0x588bdf(0x30f)
                    ](),
                    amountUsedBotQueues: 0x0,
                    status: 'pending'
                  });
              else {
                if (_0x36a10b === 0x2) {
                  if (
                    _0x54fb33[_0x588bdf(0x2ad)] !== '' &&
                    _0x54fb33[_0x588bdf(0x2ad)] !== undefined
                  ) {
                    const _0x30c785 = await _0x5dd465[_0x588bdf(0x2a1)](
                      _0x170507[_0x588bdf(0x182)]['number'] +
                        '@' +
                        (_0x170507[_0x588bdf(0x2f9)]
                          ? _0x588bdf(0x28b)
                          : _0x588bdf(0x308)),
                      { text: '‎' + _0x54fb33[_0x588bdf(0x2ad)] }
                    );
                    (0x0, exports[_0x588bdf(0x2ce)])(
                      _0x30c785,
                      _0x170507,
                      _0x2e8ea8,
                      _0x26709d
                    );
                  }
                  await _0x170507[_0x588bdf(0x184)]({
                    status: 'closed',
                    amountUsedBotQueues: 0x0
                  }),
                    await _0x26709d[_0x588bdf(0x2b0)];
                  return;
                } else
                  _0x170507[_0x588bdf(0x1a3)] < _0x54fb33[_0x588bdf(0x17b)] &&
                    _0x54fb33[_0x588bdf(0x17b)] > 0x0 &&
                    (await _0x170507[_0x588bdf(0x184)]({
                      amountUsedBotQueues:
                        _0x170507['amountUsedBotQueues'] + 0x1,
                      lgpdSendMessageAt: null
                    }));
              }
            } else
              ((_0x170507[_0x588bdf(0x1a3)] < _0x54fb33[_0x588bdf(0x17b)] &&
                _0x54fb33[_0x588bdf(0x17b)] > 0x0) ||
                _0x54fb33['maxUseBotQueues'] === 0x0) &&
                (await _0x170507[_0x588bdf(0x184)]({
                  amountUsedBotQueues: _0x170507['amountUsedBotQueues'] + 0x1,
                  lgpdSendMessageAt: null
                }));
          }
          if (
            (_0x2e8ea8[_0x588bdf(0x31a)] === null ||
              _0x565411?.[_0x588bdf(0x303)] === _0x588bdf(0x24d)) &&
            !_0x2e8ea8[_0x588bdf(0x2f9)] &&
            (0x0, lodash_1[_0x588bdf(0x2ae)])(_0x170507[_0x588bdf(0x2ef)]) &&
            (_0x54fb33[_0x588bdf(0x17b)] === 0x0 ||
              _0x170507[_0x588bdf(0x1a3)] <= _0x54fb33[_0x588bdf(0x17b)]) &&
            !(0x0, lodash_1[_0x588bdf(0x2ae)])(_0x565411?.['lgpdMessage'])
          ) {
            if (
              !(0x0, lodash_1[_0x588bdf(0x2ae)])(
                _0x565411?.[_0x588bdf(0x25f)]
              ) &&
              _0x565411[_0x588bdf(0x25f)] !== ''
            ) {
              const _0x4eb652 = (0x0, Mustache_1['default'])(
                  '‎' + _0x565411?.[_0x588bdf(0x25f)],
                  _0x170507
                ),
                _0x397ea5 = await _0x5dd465[_0x588bdf(0x2a1)](
                  _0x170507[_0x588bdf(0x182)]['number'] +
                    '@' +
                    (_0x170507['isGroup']
                      ? _0x588bdf(0x28b)
                      : _0x588bdf(0x308)),
                  { text: _0x4eb652 }
                );
              (0x0, exports[_0x588bdf(0x2ce)])(
                _0x397ea5,
                _0x170507,
                _0x2e8ea8,
                _0x26709d
              );
            }
            await (0x0, baileys_1['delay'])(0x3e8);
            if (
              !(0x0, lodash_1['isNil'])(_0x565411?.['lgpdLink']) &&
              _0x565411?.[_0x588bdf(0x1ef)] !== ''
            ) {
              const _0x1a4ed9 = (0x0, Mustache_1['default'])(
                  '‎' + _0x565411?.[_0x588bdf(0x1ef)],
                  _0x170507
                ),
                _0x547bab = await _0x5dd465[_0x588bdf(0x2a1)](
                  _0x170507['contact'][_0x588bdf(0x245)] +
                    '@' +
                    (_0x170507[_0x588bdf(0x2f9)]
                      ? _0x588bdf(0x28b)
                      : _0x588bdf(0x308)),
                  { text: _0x1a4ed9 }
                );
              await (0x0, exports[_0x588bdf(0x2ce)])(
                _0x547bab,
                _0x170507,
                _0x2e8ea8,
                _0x26709d
              );
            }
            await (0x0, baileys_1[_0x588bdf(0x2f1)])(0x3e8);
            const _0x4b670e = (0x0, Mustache_1['default'])(
                _0x588bdf(0x23b),
                _0x170507
              ),
              _0x4e777d = await _0x5dd465[_0x588bdf(0x2a1)](
                _0x170507[_0x588bdf(0x182)][_0x588bdf(0x245)] +
                  '@' +
                  (_0x170507['isGroup'] ? _0x588bdf(0x28b) : _0x588bdf(0x308)),
                { text: _0x4b670e }
              );
            await (0x0, exports[_0x588bdf(0x2ce)])(
              _0x4e777d,
              _0x170507,
              _0x2e8ea8,
              _0x26709d
            ),
              await _0x170507[_0x588bdf(0x184)]({
                lgpdSendMessageAt: (0x0, moment_1['default'])()[
                  _0x588bdf(0x30f)
                ](),
                amountUsedBotQueues: _0x170507['amountUsedBotQueues'] + 0x1
              }),
              await _0x170507[_0x588bdf(0x1db)]();
            return;
          }
          if (
            !(0x0, lodash_1[_0x588bdf(0x2ae)])(
              _0x170507['lgpdSendMessageAt']
            ) &&
            (0x0, lodash_1['isNil'])(_0x170507[_0x588bdf(0x31a)])
          )
            return;
        }
      }
    } catch (_0x44b5b0) {
      Sentry['captureException'](_0x44b5b0), console['log'](_0x44b5b0);
    }
    const _0x512e3e =
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x2f8)]?.[_0x588bdf(0x2de)]?.[
        _0x588bdf(0x1b3)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x213)]?.[_0x588bdf(0x2de)]?.[
        _0x588bdf(0x1b3)
      ] ||
      _0x21c239['message']?.[_0x588bdf(0x28f)]?.['contextInfo']?.[
        'isForwarded'
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.[_0x588bdf(0x19c)]?.['contextInfo']?.[
        _0x588bdf(0x1b3)
      ] ||
      _0x21c239[_0x588bdf(0x268)]?.['documentMessage']?.['contextInfo']?.[
        'isForwarded'
      ];
    let _0x54edec;
    _0x1706f5
      ? (_0x54edec = await (0x0, exports[_0x588bdf(0x2cd)])(
          _0x21c239,
          _0x170507,
          _0x2e8ea8,
          _0x26709d,
          _0x512e3e
        ))
      : await (0x0, exports[_0x588bdf(0x2ce)])(
          _0x21c239,
          _0x170507,
          _0x2e8ea8,
          _0x26709d,
          ![],
          _0x512e3e
        );
    try {
      await _0x170507[_0x588bdf(0x184)]({
        fromMe: _0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x28c)]
      });
    } catch (_0x2d94a3) {
      Sentry[_0x588bdf(0x17e)](_0x2d94a3), console[_0x588bdf(0x2d4)](_0x2d94a3);
    }
    let _0x1d6a5e;
    if (_0x565411[_0x588bdf(0x181)] === _0x588bdf(0x304))
      _0x1d6a5e = await (0x0, VerifyCurrentSchedule_1['default'])(
        _0x282717,
        0x0,
        0x0
      );
    else
      _0x565411[_0x588bdf(0x181)] === _0x588bdf(0x275) &&
        (_0x1d6a5e = await (0x0, VerifyCurrentSchedule_1[_0x588bdf(0x222)])(
          _0x282717,
          0x0,
          _0x54fb33['id']
        ));
    try {
      if (
        !_0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x28c)] &&
        _0x565411[_0x588bdf(0x181)] &&
        (!_0x170507[_0x588bdf(0x2f9)] ||
          _0x54fb33[_0x588bdf(0x214)] === _0x588bdf(0x24d))
      ) {
        if (
          (_0x565411[_0x588bdf(0x181)] === _0x588bdf(0x304) ||
            _0x565411['scheduleType'] === 'connection') &&
          !(0x0, lodash_1[_0x588bdf(0x2ae)])(_0x1d6a5e) &&
          (!_0x1d6a5e || _0x1d6a5e[_0x588bdf(0x2f4)] === ![])
        ) {
          _0x26709d['chatbotAt'] === null &&
            (await _0x26709d[_0x588bdf(0x184)]({
              chatbotAt: (0x0, moment_1[_0x588bdf(0x222)])()['toDate']()
            }));
          if (
            _0x54fb33[_0x588bdf(0x17b)] &&
            _0x54fb33[_0x588bdf(0x17b)] !== 0x0 &&
            _0x170507['amountUsedBotQueues'] >= _0x54fb33[_0x588bdf(0x17b)]
          )
            return;
          let _0x4c140e = new Date(),
            _0x17dbfe = new Date();
          if (_0x26709d[_0x588bdf(0x2b5)] !== null) {
            _0x4c140e[_0x588bdf(0x2d7)](
              _0x26709d['chatbotAt'][_0x588bdf(0x1f6)]() +
                Number(_0x54fb33['timeUseBotQueues'])
            );
            if (
              _0x26709d[_0x588bdf(0x2b5)] !== null &&
              _0x17dbfe < _0x4c140e &&
              _0x54fb33[_0x588bdf(0x20d)] !== '0' &&
              _0x170507['amountUsedBotQueues'] !== 0x0
            )
              return;
          }
          await _0x26709d[_0x588bdf(0x184)]({ chatbotAt: null });
          if (
            _0x54fb33[_0x588bdf(0x30d)] !== '' &&
            !_0x170507[_0x588bdf(0x216)]
          ) {
            const _0x38aeef = (0x0, Mustache_1[_0x588bdf(0x222)])(
                '' + _0x54fb33[_0x588bdf(0x30d)],
                _0x170507
              ),
              _0x10c04a = (0x0, Debounce_1['debounce'])(
                async () => {
                  const _0x8c4a9 = _0x588bdf;
                  await _0x5dd465[_0x8c4a9(0x2a1)](
                    _0x170507[_0x8c4a9(0x182)][_0x8c4a9(0x245)] +
                      '@' +
                      (_0x170507[_0x8c4a9(0x2f9)]
                        ? _0x8c4a9(0x28b)
                        : _0x8c4a9(0x308)),
                    { text: _0x38aeef }
                  );
                },
                0x3e8,
                _0x170507['id']
              );
            _0x10c04a(),
              await _0x170507[_0x588bdf(0x184)]({
                isOutOfHour: !![],
                amountUsedBotQueues: _0x170507[_0x588bdf(0x1a3)] + 0x1
              });
            return;
          }
          await _0x170507[_0x588bdf(0x184)]({
            isOutOfHour: !![],
            amountUsedBotQueues: _0x170507[_0x588bdf(0x1a3)] + 0x1
          });
          return;
        }
      }
    } catch (_0x1c88d4) {
      Sentry[_0x588bdf(0x17e)](_0x1c88d4), console['log'](_0x1c88d4);
    }
    !_0x170507[_0x588bdf(0x216)] &&
      !_0x170507[_0x588bdf(0x190)] &&
      !_0x1d0336 &&
      !_0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x28c)] &&
      !_0x170507[_0x588bdf(0x1ab)] &&
      !(0x0, lodash_1[_0x588bdf(0x2ae)])(_0x54fb33[_0x588bdf(0x312)]) &&
      (await handleOpenAi(
        _0x21c239,
        _0x5dd465,
        _0x170507,
        _0x2e8ea8,
        _0x54edec
      ));
    if (
      !_0x170507[_0x588bdf(0x216)] &&
      !_0x21c239['key'][_0x588bdf(0x28c)] &&
      !_0x170507[_0x588bdf(0x2f9)] &&
      !_0x170507[_0x588bdf(0x190)] &&
      !_0x170507[_0x588bdf(0x280)] &&
      _0x170507[_0x588bdf(0x2aa)] &&
      !(0x0, lodash_1[_0x588bdf(0x2ae)])(_0x54fb33[_0x588bdf(0x215)]) &&
      !_0x170507[_0x588bdf(0x2a5)]
    ) {
      const _0x977c02 = await (0x0,
      ShowQueueIntegrationService_1[_0x588bdf(0x222)])(
        _0x54fb33[_0x588bdf(0x215)],
        _0x282717
      );
      await (0x0, exports['handleMessageIntegration'])(
        _0x21c239,
        _0x5dd465,
        _0x282717,
        _0x977c02,
        _0x170507
      );
      return;
    }
    if (
      !_0x170507[_0x588bdf(0x216)] &&
      !_0x21c239['key'][_0x588bdf(0x28c)] &&
      !_0x170507[_0x588bdf(0x2f9)] &&
      !_0x170507[_0x588bdf(0x1ab)] &&
      _0x170507[_0x588bdf(0x215)] &&
      _0x170507['useIntegration']
    ) {
      const _0x195c4f = await (0x0,
      ShowQueueIntegrationService_1[_0x588bdf(0x222)])(
        _0x170507[_0x588bdf(0x215)],
        _0x282717
      );
      await (0x0, exports[_0x588bdf(0x287)])(
        _0x21c239,
        _0x5dd465,
        _0x282717,
        _0x195c4f,
        _0x170507
      );
    }
    !_0x170507[_0x588bdf(0x216)] &&
      !_0x170507[_0x588bdf(0x190)] &&
      (!_0x170507[_0x588bdf(0x2f9)] ||
        _0x54fb33[_0x588bdf(0x214)] === _0x588bdf(0x24d)) &&
      !_0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x28c)] &&
      !_0x170507[_0x588bdf(0x1ab)] &&
      _0x54fb33[_0x588bdf(0x248)]['length'] >= 0x1 &&
      !_0x170507['useIntegration'] &&
      (await verifyQueue(_0x5dd465, _0x21c239, _0x170507, _0x2e8ea8, _0x565411),
      _0x26709d[_0x588bdf(0x2b5)] === null &&
        (await _0x26709d[_0x588bdf(0x184)]({
          chatbotAt: (0x0, moment_1[_0x588bdf(0x222)])()['toDate']()
        })));
    _0x170507[_0x588bdf(0x1fe)] > 0x0 &&
      (await _0x26709d[_0x588bdf(0x184)]({
        queueId: _0x170507[_0x588bdf(0x1fe)]
      }));
    if (
      (getTypeMessage(_0x21c239) === _0x588bdf(0x28f) ||
        getTypeMessage(_0x21c239) === _0x588bdf(0x19c)) &&
      !_0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x28c)] &&
      (!_0x170507[_0x588bdf(0x2f9)] ||
        _0x54fb33[_0x588bdf(0x214)] === 'enabled') &&
      (!_0x2e8ea8?.[_0x588bdf(0x1ff)] ||
        _0x565411?.[_0x588bdf(0x2fe)] === 'disabled')
    ) {
      const _0x186e60 = await _0x5dd465['sendMessage'](
        _0x2e8ea8['number'] + '@c.us',
        { text: _0x588bdf(0x2b8) },
        {
          quoted: {
            key: _0x21c239[_0x588bdf(0x29e)],
            message: {
              extendedTextMessage: _0x21c239[_0x588bdf(0x268)][_0x588bdf(0x2f8)]
            }
          }
        }
      );
      await (0x0, exports[_0x588bdf(0x2ce)])(
        _0x186e60,
        _0x170507,
        _0x2e8ea8,
        _0x26709d
      );
    }
    try {
      if (
        !_0x21c239[_0x588bdf(0x29e)]['fromMe'] &&
        _0x565411?.[_0x588bdf(0x181)] &&
        _0x170507[_0x588bdf(0x1fe)] !== null &&
        (!_0x170507['isGroup'] || _0x54fb33[_0x588bdf(0x214)] === 'enabled')
      ) {
        const _0x1f56bf = await Queue_1[_0x588bdf(0x222)][_0x588bdf(0x28a)](
          _0x170507[_0x588bdf(0x1fe)]
        );
        _0x565411?.['scheduleType'] === _0x588bdf(0x190) &&
          (_0x1d6a5e = await (0x0, VerifyCurrentSchedule_1[_0x588bdf(0x222)])(
            _0x282717,
            _0x1f56bf['id'],
            0x0
          ));
        if (
          _0x565411?.[_0x588bdf(0x181)] === _0x588bdf(0x190) &&
          !(0x0, lodash_1[_0x588bdf(0x2ae)])(_0x1d6a5e) &&
          (!_0x1d6a5e || _0x1d6a5e[_0x588bdf(0x2f4)] === ![]) &&
          !_0x170507[_0x588bdf(0x216)]
        ) {
          const _0x5b3253 = _0x1f56bf[_0x588bdf(0x30d)];
          if (_0x5b3253 !== '') {
            const _0x39a12d = (0x0, Mustache_1[_0x588bdf(0x222)])(
                '' + _0x5b3253,
                _0x170507
              ),
              _0x5ed2fc = (0x0, Debounce_1['debounce'])(
                async () => {
                  const _0x2edeef = _0x588bdf;
                  await _0x5dd465[_0x2edeef(0x2a1)](
                    _0x170507[_0x2edeef(0x182)][_0x2edeef(0x245)] +
                      '@' +
                      (_0x170507[_0x2edeef(0x2f9)]
                        ? _0x2edeef(0x28b)
                        : 's.whatsapp.net'),
                    { text: _0x39a12d }
                  );
                },
                0x3e8,
                _0x170507['id']
              );
            _0x5ed2fc(),
              await _0x170507[_0x588bdf(0x184)]({
                isOutOfHour: !![],
                amountUsedBotQueues: _0x170507[_0x588bdf(0x1a3)] + 0x1
              });
            return;
          }
          await _0x170507['update']({
            isOutOfHour: !![],
            amountUsedBotQueues: _0x170507[_0x588bdf(0x1a3)] + 0x1
          });
          return;
        }
      }
    } catch (_0x5d6120) {
      Sentry[_0x588bdf(0x17e)](_0x5d6120), console[_0x588bdf(0x2d4)](_0x5d6120);
    }
    _0x170507[_0x588bdf(0x190)] &&
      _0x170507[_0x588bdf(0x1fe)] &&
      !_0x21c239[_0x588bdf(0x29e)][_0x588bdf(0x28c)] &&
      ((!_0x170507['user'] ||
        _0x170507[_0x588bdf(0x190)]?.['chatbots']?.[_0x588bdf(0x29a)] > 0x0) &&
        (await (0x0, ChatBotListener_1['sayChatbot'])(
          _0x170507[_0x588bdf(0x1fe)],
          _0x5dd465,
          _0x170507,
          _0x2e8ea8,
          _0x21c239
        )),
      await _0x170507[_0x588bdf(0x184)]({ sendInactiveMessage: ![] })),
      await _0x170507[_0x588bdf(0x1db)]();
  } catch (_0x1ab94e) {
    Sentry[_0x588bdf(0x17e)](_0x1ab94e),
      console['log'](_0x1ab94e),
      logger_1[_0x588bdf(0x19b)]['error'](_0x588bdf(0x2a3) + _0x1ab94e);
  }
};
exports[a659_0x31ccb2(0x1ad)] = handleMessage;
const handleMsgAck = async (_0x1082c4, _0x13eed3) => {
    const _0x19ed1f = a659_0x31ccb2;
    await new Promise(_0x243abb => setTimeout(_0x243abb, 0x1f4));
    const _0x5240a0 = (0x0, socket_1[_0x19ed1f(0x2da)])();
    try {
      const _0x179d0b = await Message_1[_0x19ed1f(0x222)]['findOne']({
        where: { wid: _0x1082c4[_0x19ed1f(0x29e)]['id'] },
        include: [
          _0x19ed1f(0x182),
          {
            model: Message_1[_0x19ed1f(0x222)],
            as: _0x19ed1f(0x18d),
            include: [_0x19ed1f(0x182)]
          }
        ]
      });
      if (!_0x179d0b) return;
      await _0x179d0b[_0x19ed1f(0x184)]({ ack: _0x13eed3 }),
        _0x5240a0['to'](_0x179d0b[_0x19ed1f(0x173)]['toString']())[
          _0x19ed1f(0x1b9)
        ](_0x19ed1f(0x2f7) + _0x179d0b[_0x19ed1f(0x21e)] + '-appMessage', {
          action: _0x19ed1f(0x184),
          message: _0x179d0b
        });
    } catch (_0x5d71d6) {
      Sentry['captureException'](_0x5d71d6),
        logger_1[_0x19ed1f(0x19b)][_0x19ed1f(0x194)](
          _0x19ed1f(0x185) + _0x5d71d6
        );
    }
  },
  verifyRecentCampaign = async (_0x428581, _0x26cec4) => {
    const _0x407322 = a659_0x31ccb2;
    if (!isValidMsg(_0x428581)) return;
    if (!_0x428581[_0x407322(0x29e)][_0x407322(0x28c)]) {
      const _0x537c57 = _0x428581[_0x407322(0x29e)][_0x407322(0x21a)][
          'replace'
        ](/\D/g, ''),
        _0x48f47a = await Campaign_1['default'][_0x407322(0x218)]({
          where: {
            companyId: _0x26cec4,
            status: 'EM_ANDAMENTO',
            confirmation: !![]
          }
        });
      if (_0x48f47a) {
        const _0x2c5fc3 = _0x48f47a[_0x407322(0x204)](
            _0x20d481 => _0x20d481['id']
          ),
          _0x64a09 = await CampaignShipping_1[_0x407322(0x222)]['findOne']({
            where: {
              campaignId: { [sequelize_1['Op']['in']]: _0x2c5fc3 },
              number: _0x537c57,
              confirmation: null,
              deliveredAt: { [sequelize_1['Op']['ne']]: null }
            }
          });
        _0x64a09 &&
          (await _0x64a09[_0x407322(0x184)]({
            confirmedAt: (0x0, moment_1[_0x407322(0x222)])(),
            confirmation: !![]
          }),
          await queues_1['campaignQueue'][_0x407322(0x2cc)](
            _0x407322(0x257),
            {
              campaignShippingId: _0x64a09['id'],
              campaignId: _0x64a09[_0x407322(0x300)]
            },
            {
              delay: (0x0, queues_1[_0x407322(0x1f7)])(
                (0x0, queues_1[_0x407322(0x278)])(0x0, 0xa)
              )
            }
          ));
      }
    }
  },
  verifyCampaignMessageAndCloseTicket = async (
    _0x4a9208,
    _0x54ac14,
    _0x3c6cb4
  ) => {
    const _0xaa6e44 = a659_0x31ccb2;
    if (!isValidMsg(_0x4a9208)) return;
    let _0x2fd71f;
    _0x2fd71f = await getContactMessage(_0x4a9208, _0x3c6cb4);
    const _0x151b93 = await verifyContact(_0x2fd71f, _0x3c6cb4, _0x54ac14),
      _0x144c3e = (0x0, socket_1[_0xaa6e44(0x2da)])(),
      _0x37fbca = await (0x0, exports['getBodyMessage'])(_0x4a9208),
      _0x2e9583 = /\u200c/[_0xaa6e44(0x2d0)](_0x37fbca);
    if (_0x4a9208['key'][_0xaa6e44(0x28c)] && _0x2e9583) {
      const _0x53fb21 = await Message_1[_0xaa6e44(0x222)][_0xaa6e44(0x205)]({
        where: {
          [sequelize_1['Op']['or']]: [
            { wid: _0x4a9208[_0xaa6e44(0x29e)]['id'] },
            { contactId: _0x151b93['id'] }
          ],
          companyId: _0x54ac14
        }
      });
      if (
        !(0x0, lodash_1[_0xaa6e44(0x277)])(_0x53fb21) ||
        !(0x0, lodash_1[_0xaa6e44(0x2ae)])(_0x53fb21) ||
        _0x53fb21 !== null
      ) {
        const _0x1d1e5e = await Ticket_1[_0xaa6e44(0x222)][_0xaa6e44(0x28a)](
          _0x53fb21[_0xaa6e44(0x173)]
        );
        await _0x1d1e5e[_0xaa6e44(0x184)]({
          status: _0xaa6e44(0x289),
          amountUsedBotQueues: 0x0,
          amountUseOutOfHours: 0x0
        }),
          _0x144c3e['to'](_0xaa6e44(0x23d))[_0xaa6e44(0x1b9)](
            'company-' + _0x54ac14 + _0xaa6e44(0x2a9),
            {
              action: _0xaa6e44(0x19f),
              ticket: _0x1d1e5e,
              ticketId: _0x1d1e5e['id']
            }
          ),
          _0x144c3e['to'](_0x1d1e5e['status'])
            ['to'](_0x1d1e5e['id'][_0xaa6e44(0x189)]())
            [_0xaa6e44(0x1b9)]('company-' + _0x54ac14 + _0xaa6e44(0x2a9), {
              action: _0xaa6e44(0x184),
              ticket: _0x1d1e5e,
              ticketId: _0x1d1e5e['id']
            });
      }
    }
  },
  filterMessages = _0x492b60 => {
    const _0x5c4d5e = a659_0x31ccb2;
    if (_0x492b60[_0x5c4d5e(0x268)]?.[_0x5c4d5e(0x186)]) return ![];
    if (
      [
        baileys_1[_0x5c4d5e(0x274)][_0x5c4d5e(0x1b1)],
        baileys_1[_0x5c4d5e(0x274)][_0x5c4d5e(0x2a0)],
        baileys_1[_0x5c4d5e(0x274)][_0x5c4d5e(0x1a4)],
        baileys_1[_0x5c4d5e(0x274)][_0x5c4d5e(0x211)]
      ][_0x5c4d5e(0x1d5)](_0x492b60[_0x5c4d5e(0x2d5)])
    )
      return ![];
    return !![];
  },
  wbotMessageListener = (_0xa6842b, _0x2eea2d) => {
    const _0x86b4ad = a659_0x31ccb2;
    _0xa6842b['ev']['on']('messages.upsert', async _0x32c36d => {
      const _0x364bb5 = a659_0x1c81,
        _0x3bb0a0 = _0x32c36d[_0x364bb5(0x296)]
          ['filter'](filterMessages)
          [_0x364bb5(0x204)](_0x1d16d4 => _0x1d16d4);
      if (!_0x3bb0a0) return;
      _0x3bb0a0['forEach'](async _0x17e8d5 => {
        const _0x196a1c = _0x364bb5,
          _0x1f2907 = await Message_1[_0x196a1c(0x222)][_0x196a1c(0x251)]({
            where: {
              wid: _0x17e8d5[_0x196a1c(0x29e)]['id'],
              companyId: _0x2eea2d
            }
          });
        if (!_0x1f2907) {
          let _0x42439b = ![],
            _0x6c9bc3 = await (0x0, exports['getBodyMessage'])(_0x17e8d5);
          const _0x1515f3 = _0x17e8d5?.['key']?.[_0x196a1c(0x28c)];
          if (_0x1515f3) _0x42439b = /\u200c/[_0x196a1c(0x2d0)](_0x6c9bc3);
          else {
            if (/\u200c/[_0x196a1c(0x2d0)](_0x6c9bc3))
              _0x6c9bc3 = _0x6c9bc3[_0x196a1c(0x2c6)](/\u200c/, '');
            logger_1[_0x196a1c(0x19b)][_0x196a1c(0x1e3)](
              _0x196a1c(0x1c7) + _0x6c9bc3
            );
          }
          !_0x42439b && (await handleMessage(_0x17e8d5, _0xa6842b, _0x2eea2d)),
            await verifyRecentCampaign(_0x17e8d5, _0x2eea2d),
            await verifyCampaignMessageAndCloseTicket(
              _0x17e8d5,
              _0x2eea2d,
              _0xa6842b
            );
        }
        _0x17e8d5['key'][_0x196a1c(0x21a)]?.['endsWith'](_0x196a1c(0x28d)) &&
          handleMsgAck(_0x17e8d5, 0x2);
      });
    }),
      _0xa6842b['ev']['on'](_0x86b4ad(0x1c2), _0x54fc5c => {
        const _0x35e77a = _0x86b4ad;
        if (_0x54fc5c[_0x35e77a(0x29a)] === 0x0) return;
        _0x54fc5c[_0x35e77a(0x1bc)](async _0x2a8fef => {
          const _0x56fd36 = _0x35e77a;
          _0xa6842b['readMessages']([_0x2a8fef[_0x56fd36(0x29e)]]);
          const _0x44db1a = { ..._0x54fc5c };
          _0x44db1a['0']?.[_0x56fd36(0x184)]['messageStubType'] === 0x1 &&
            _0x44db1a['0']?.[_0x56fd36(0x29e)][_0x56fd36(0x21a)] !==
              _0x56fd36(0x1f0) &&
            (0x0, MarkDeleteWhatsAppMessage_1[_0x56fd36(0x222)])(
              _0x44db1a['0']?.['key']['remoteJid'],
              null,
              _0x44db1a['0']?.['key']['id'],
              _0x2eea2d
            );
          let _0x205f1b;
          _0x2a8fef[_0x56fd36(0x184)][_0x56fd36(0x23a)] === 0x3 &&
          _0x2a8fef?.[_0x56fd36(0x29e)]?.[_0x56fd36(0x28c)]
            ? (_0x205f1b = 0x2)
            : (_0x205f1b = _0x2a8fef['update'][_0x56fd36(0x23a)]),
            handleMsgAck(_0x2a8fef, _0x205f1b);
        });
      }),
      _0xa6842b['ev']['on'](_0x86b4ad(0x292), _0x24ae6f => {
        const _0x13626d = _0x86b4ad;
        if (_0x24ae6f[_0x13626d(0x29a)] === 0x0) return;
        _0x24ae6f[_0x13626d(0x1bc)](async _0x3563f9 => {
          const _0x400eba = _0x13626d,
            _0xdd896a = _0x3563f9['id'][_0x400eba(0x2c6)](/\D/g, ''),
            _0xa51db = _0x3563f9[_0x400eba(0x27b)] || _0xdd896a;
          let _0x494d1a;
          try {
            _0x494d1a = await _0xa6842b[_0x400eba(0x1cc)](
              _0x3563f9['id'],
              _0x400eba(0x2b3)
            );
          } catch (_0xff6b2d) {
            Sentry['captureException'](_0xff6b2d),
              (_0x494d1a = process['env'][_0x400eba(0x235)] + _0x400eba(0x200));
          }
          const _0x46f9d7 = {
              name: _0xa51db,
              number: _0xdd896a,
              isGroup: !![],
              companyId: _0x2eea2d,
              remoteJid: _0x3563f9['id'],
              profilePicUrl: _0x494d1a,
              whatsappId: _0xa6842b['id']
            },
            _0x4d3b0e = await (0x0,
            CreateOrUpdateContactService_1[_0x400eba(0x222)])(_0x46f9d7);
        });
      });
  };
function a659_0x20d0() {
  const _0xb433ae = [
    'Erro\x20para\x20responder\x20com\x20audio:\x20',
    'companyId',
    '####\x20Nao\x20achou\x20o\x20type\x20152:\x20',
    'liveLocationMessage',
    'findIndex',
    'default',
    'voiceRegion',
    'endConversation',
    'jidNormalizedUser',
    ':unreads',
    '../../models/CampaignShipping',
    'Erro\x20ao\x20deletar\x20o\x20arquivo:',
    'isBetween',
    'mediaType',
    'audio',
    'quotedMessage',
    'documentMessage',
    '../../helpers/addLogs',
    'whatsapp',
    'nps',
    'filename',
    '*System:*\x20\x0aFalha\x20no\x20download\x20da\x20mídia\x20verifique\x20no\x20dispositivo',
    'getContentType',
    '&z=17&hl=pt-BR|',
    'FRONTEND_URL',
    'TIMEOUT_TO_IMPORT_MESSAGE',
    'degreesLongitude',
    'createdAt',
    '../TicketServices/UpdateTicketService',
    'status',
    '‎Estoy\x20consciente\x20sobre\x20el\x20tratamiento\x20de\x20mis\x20datos\x20personales.\x20\x0a\x0a*[1]\x20Sí\x0a[2]*\x20No',
    'microsoft-cognitiveservices-speech-sdk',
    'open',
    'catch',
    'viewOnceMessageV2',
    '../TicketServices/FindOrCreateTicketService',
    'body',
    '../../models/User',
    'stringValue',
    'singleSelectReply',
    'number',
    'extractMessageContent',
    '1ztIUwM',
    'queues',
    '/opt/homebrew/bin/ffmpeg',
    '\x20|\x20https://maps.google.com/maps?q=',
    'prototype',
    'getBodyMessage',
    'enabled',
    'Error\x20converting\x20file:\x20',
    'Mensagem',
    'maxTokens',
    'count',
    'collectiveVacationStart',
    'unlink',
    'fromAudioFileOutput',
    'fileList',
    'application/json',
    'DispatchCampaign',
    'pushName',
    'create',
    'fileListId',
    'SpeechSynthesizer',
    'contacts:',
    'selectedId',
    'mp3',
    'lgpdMessage',
    'sections',
    'facebook',
    './ChatBotListener',
    'now',
    'configurable',
    '__createBinding',
    'floor',
    'type',
    'message',
    'sair',
    'hydratedHsm',
    '__setModuleDefault',
    'pending',
    'participant',
    './MarkDeleteWhatsAppMessage',
    'close',
    'interactiveMessage',
    'hydratedFourRowTemplate',
    'Importando\x20Mensagem:\x20',
    '6161160ngHkpd',
    'WAMessageStubType',
    'connection',
    'min',
    'isNull',
    'randomValue',
    '__importDefault',
    'chmodSync',
    'subject',
    'system',
    'buttonsResponseMessage',
    'ASC',
    'listResponseMessage',
    'user',
    'rows',
    'Error:\x20',
    'isInteger',
    'base64',
    'whatsappId',
    '.mp3',
    'handleMessageIntegration',
    'options',
    'closed',
    'findByPk',
    'g.us',
    'fromMe',
    '@g.us',
    'BEGIN:',
    'audioMessage',
    'lodash',
    '66549NRMIdQ',
    'groups.update',
    'isValidMsg',
    '../../models/Campaign',
    'createDialogflowSessionWithModel',
    'messages',
    'header',
    '../UserQueueServices/ListUserQueueServices',
    'greetingMediaAttachment',
    'length',
    'shift',
    '.txt',
    '\x20-\x20Longitude:\x20',
    'key',
    'composing',
    'E2E_DEVICE_CHANGED',
    'sendMessage',
    'Esta\x20mensagem\x20já\x20existe',
    'Error\x20handling\x20whatsapp\x20message:\x20Err:\x20',
    'resolve',
    'useIntegration',
    'AudioConfig',
    'defineProperty',
    'fourRowTemplate',
    '-ticket',
    'isBot',
    'farewellMessage',
    '__esModule',
    'complationMessage',
    'isNil',
    'responses',
    'destroy',
    'selectedButtonId',
    'Erro\x20ao\x20baixar\x20mídia:',
    'image',
    'toFormat',
    'chatbotAt',
    'getMessageOptions',
    'stringify',
    '‎*Asistente\x20Virtual*:\x0aDesafortunadamente\x20no\x20podemos\x20escuchar\x20ni\x20enviar\x20audios\x20a\x20través\x20de\x20WhatsApp.\x20Por\x20favor,\x20envie\x20un\x20mensaje\x20de\x20texto.', //aqui modifique
    'getTypeMessage',
    '1731765KyBGMk',
    'data:image/png;base64,\x20',
    'senderKeyDistributionMessage',
    'conversation',
    'setExtra',
    'Error\x20isValidMsg',
    'chatbots',
    'Novo\x20Tipo\x20de\x20Mensagem\x20em\x20getTypeMessage',
    'mimetype',
    'instagram',
    'description',
    'ratingAt',
    'replace',
    '[\x20#\x20]\x20Volver\x20al\x20menú\x20principal\x0a[\x20Salir\x20]*\x20Cerrar\x20la\x20atención',
    'save',
    'jpegThumbnail',
    '939438OIgbWl',
    '4JpkzJS',
    'add',
    'verifyMediaMessage',
    'verifyMessage',
    ':*\x20No\x20pude\x20entender\x20tu\x20pregunta.',
    'test',
    'urlN8N',
    'getOwnPropertyDescriptor',
    '3871912ScoQfS',
    'log',
    'messageStubType',
    'Formato\x20de\x20archivo\x20no\x20soportado:',
    'setMinutes',
    '../../helpers/Debounce',
    'vcard',
    'getIO',
    'mediaMessage',
    'viewOnceMessage',
    'language',
    'contextInfo',
    '../../utils/logger',
    'end',
    'next',
    'displayText',
    'buttons',
    'collectiveVacationEnd',
    'platform',
    'substring',
    'sequelize',
    'stickerMessage',
    'ephemeralMessage',
    'buffer',
    'Áudio',
    'chat',
    'buttonsMessage',
    './SendWhatsAppMedia',
    'lgpdSendMessageAt',
    '7bit',
    'delay',
    'contactMessage',
    'Acción:\x20Transferir\x20al\x20sector\x20de\x20atención',
    'inActivity',
    'set',
    'NFD',
    'company-',
    'extendedTextMessage',
    'isGroup',
    'Erro\x20ao\x20baixar\x20media',
    'contactId',
    'findAndCountAll',
    'item1.TEL',
    'acceptAudioMessageContact',
    'endsWith',
    'campaignId',
    'value',
    'ERR_WAPP_DOWNLOAD_MEDIA',
    'lgpdConsent',
    'company',
    'disableBot',
    'assistant',
    'locationMessage',
    's.whatsapp.net',
    'chatBot',
    '‎Opción\x20inválida,\x20intente\x20nuevamente.\x0a', //aqui modifique
    'No\x20result\x20from\x20synthesizer',
    '12MHatif',
    'outOfHoursMessage',
    'n8n',
    'toDate',
    '@c.us',
    '../../models/CompaniesSettings',
    'promptId',
    'contentText',
    'readFile',
    'ratingMessage',
    '\x20para\x20identificar\x20o\x20cliente.\x0aSua\x20resposta\x20deve\x20usar\x20no\x20máximo\x20',
    ':\x20📞',
    'POST',
    'completions',
    'lgpdAcceptedAt',
    'verifyRating',
    'wbotMessageListener',
    'audio/mpeg',
    '.ogg',
    'temperature',
    'Nas\x20respostas\x20utilize\x20o\x20nome\x20',
    'addLogs',
    'ticketId',
    'getQuotedMessageId',
    ';;;',
    'moment',
    'lgpd',
    'recording',
    'typebot',
    'highlyStructuredMessage',
    'maxUseBotQueues',
    'sendQueuePosition',
    'downloadMediaMessage',
    'captureException',
    'contactsArrayMessage',
    'closeTicket',
    'scheduleType',
    'contact',
    'Latitude:\x20',
    'update',
    'Error\x20handling\x20message\x20ack.\x20Err:\x20',
    'protocolMessage',
    'Novo\x20Tipo\x20de\x20Mensagem\x20em\x20isValidMsg',
    'path',
    'toString',
    '\x20]*\x20-\x20',
    'mediaUrl',
    'stanzaId',
    'quotedMsg',
    'buttonText',
    'Amigo(a)',
    'queue',
    '../TypebotServices/typebotListener',
    'C:\x5cffmpeg\x5cffmpeg.exe',
    'editedMessage',
    'error',
    'public',
    'then',
    'item1.TEL:',
    'reaction',
    'Falha\x20ao\x20fazer\x20o\x20download\x20de\x20uma\x20mensagem\x20importada,\x20provavelmente\x20a\x20mensagem\x20já\x20não\x20esta\x20mais\x20disponível',
    'SpeechConfig',
    'logger',
    'videoMessage',
    'gpt-3.5-turbo-1106',
    'dialogflow',
    'delete',
    'split',
    'choices',
    'contacts',
    'amountUsedBotQueues',
    'E2E_IDENTITY_CHANGED',
    'isNaN',
    'push',
    'entrou\x20no\x20typebot',
    'collectiveVacationMessage',
    'slice',
    'env',
    'userId',
    'handleRating',
    'handleMessage',
    'values',
    'paused',
    'parameters',
    'REVOKE',
    'indexOf',
    'isForwarded',
    'selectedRowId',
    'messageTimestamp',
    'webhook',
    'channel',
    'request',
    'emit',
    'createReadStream',
    'voice',
    'forEach',
    'text',
    'chatBotType',
    '../TicketServices/FindOrCreateATicketTrakingService',
    '../ContactServices/CreateOrUpdateContactService',
    'prompt',
    'messages.update',
    'darwin',
    'fileName',
    '../../libs/socket',
    'sticker',
    'Validação\x20de\x20mensagem\x20de\x20campanha\x20enviada\x20por\x20terceiros:\x20',
    'encodedAudio',
    ':*\x20',
    '170398KekQMe',
    'caption',
    'profilePictureUrl',
    '../../models/UserRating',
    '../QueueIntegrationServices/QueryDialogflow',
    '-appMessage',
    'normalize',
    '>>>>>>>>>>>>>>>>>>>',
    'get',
    '\x20tokens\x20e\x20cuide\x20para\x20não\x20truncar\x20o\x20final.\x0aSempre\x20que\x20possível,\x20mencione\x20o\x20nome\x20dele\x20para\x20ser\x20mais\x20personalizado\x20o\x20atendimento\x20e\x20mais\x20educado.\x20Quando\x20a\x20resposta\x20requer\x20uma\x20transferência\x20para\x20o\x20setor\x20de\x20atendimento,\x20comece\x20sua\x20resposta\x20com\x20\x27Ação:\x20Transferir\x20para\x20o\x20setor\x20de\x20atendimento\x27.\x0a\x0a\x20\x20',
    'join',
    'includes',
    '../CompanyService/VerifyCurrentSchedule',
    'allowGroup',
    'find',
    'hydratedTemplate',
    'data',
    'reload',
    'warn',
    'processImportMessagesWppId',
    'promisify',
    'mkdirSync',
    'speakTextAsync',
    'downloadMedia',
    'pop',
    'debug',
    'util',
    'input',
    'listMessage',
    'entries',
    'templateButtonReplyMessage',
    'maxMessages',
    'selectedDisplayText',
    'trim',
    'getTime',
    'speechSynthesisVoiceName',
    '.wav',
    'lgpdLink',
    'status@broadcast',
    'win32',
    '‎\x20*',
    '1088915LEMugD',
    'groupMetadata',
    '@sentry/node',
    'getMinutes',
    'parseToMilliseconds',
    'hasOwnProperty',
    'debounce',
    'templateMessage',
    'medias',
    'reactionMessage',
    'sendPresenceUpdate',
    'queueId',
    'acceptAudioMessage',
    '/nopicture.png',
    'texto',
    'documentWithCaptionMessage',
    'name',
    'map',
    'findOne',
    'voiceKey',
    'toLocaleLowerCase',
    '../FacebookServices/sendFacebookMessage',
    'writeFile',
    'enableLGPD',
    '*Asistente\x20Virtual:*\x0a{{ms}}\x20*{{name}}*,\x20tu\x20posición\x20en\x20la\x20fila\x20de\x20atención\x20es:\x20*',
    'info',
    'timeUseBotQueues',
    '@whiskeysockets/baileys',
    'transcriptions',
    'toISOString',
    'CIPHERTEXT',
    '__importStar',
    'imageMessage',
    'groupAsTicket',
    'integrationId',
    'imported',
    'title',
    'findAll',
    'keys',
    'remoteJid',
    'getQuotedMessage',
    'finishedAt'
  ];
  a659_0x20d0 = function () {
    return _0xb433ae;
  };
  return a659_0x20d0();
}
exports[a659_0x31ccb2(0x31c)] = wbotMessageListener;
