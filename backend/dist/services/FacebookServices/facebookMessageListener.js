'use strict';
function a499_0x4d2a(_0x2c9a09, _0x3fed4f) {
  const _0x3ec34c = a499_0x3ec3();
  return (
    (a499_0x4d2a = function (_0x4d2aa0, _0x50a0c7) {
      _0x4d2aa0 = _0x4d2aa0 - 0x9e;
      let _0x716326 = _0x3ec34c[_0x4d2aa0];
      return _0x716326;
    }),
    a499_0x4d2a(_0x2c9a09, _0x3fed4f)
  );
}
const a499_0x308a11 = a499_0x4d2a;
(function (_0x6e1920, _0x5ee34e) {
  const _0x1018e = a499_0x4d2a,
    _0x27d222 = _0x6e1920();
  while (!![]) {
    try {
      const _0x3fe495 =
        -parseInt(_0x1018e(0xef)) / 0x1 +
        -parseInt(_0x1018e(0xa7)) / 0x2 +
        (-parseInt(_0x1018e(0x100)) / 0x3) * (-parseInt(_0x1018e(0xb6)) / 0x4) +
        parseInt(_0x1018e(0xd8)) / 0x5 +
        -parseInt(_0x1018e(0xde)) / 0x6 +
        -parseInt(_0x1018e(0xca)) / 0x7 +
        parseInt(_0x1018e(0xe1)) / 0x8;
      if (_0x3fe495 === _0x5ee34e) break;
      else _0x27d222['push'](_0x27d222['shift']());
    } catch (_0x21f141) {
      _0x27d222['push'](_0x27d222['shift']());
    }
  }
})(a499_0x3ec3, 0xdd178);
function a499_0x3ec3() {
  const _0x171497 = [
    'ext',
    '../TicketServices/UpdateTicketService',
    'text',
    'length',
    'lgpdLink',
    'userId',
    'number',
    '../../helpers/Mustache',
    'companyId',
    'mid',
    '51233lKjMSW',
    'sender',
    'attachments',
    'payload',
    '../../models/Chatbot',
    'get',
    'lgpdAcceptedAt',
    'isNil',
    'isGroup',
    'arraybuffer',
    'defineProperty',
    'file-type',
    'isNull',
    './sendFacebookMessage',
    '3476585VQFpgs',
    'farewellMessage',
    'lgpdMessage',
    'amountUsedBotQueues',
    '../TicketServices/FindOrCreateATicketTrakingService',
    '‎Opción\x20inválida,\x20intenta\x20nuevamente.\x0a', //aqui modifique
    '3252606eYlyzx',
    'lodash',
    '../../models/CompaniesSettings',
    '6886872AdLhCP',
    'amountUsedBotQueuesNPS',
    'enabled',
    'nps',
    'user',
    'isInteger',
    'public/company',
    'axios',
    '../../models/Queue',
    'stringify',
    'pending',
    './graphAPI',
    'is_echo',
    'facebookUserToken',
    '722043eZcAvU',
    '../ContactServices/CreateOrUpdateContactService',
    'last_name',
    'verifyMessageMedia',
    'sendText',
    'closed',
    'queues',
    'url',
    'verifyRating',
    'profilePsid',
    'ratingMessage',
    'greetingMessage',
    '__importDefault',
    'profile_pic',
    '‎Estoy\x20consciente\x20sobre\x20el\x20tratamiento\x20de\x20mis\x20datos\x20personales.\x20\x0a\x0a*[1]*\x20Si\x0a*[2]*\x20No', //aqui modifique
    '__esModule',
    'log',
    '2118966jPRLve',
    'default',
    'isNaN',
    'findOne',
    'lgpdSendMessageAt',
    'toDate',
    'lgpd',
    'chatbots',
    'update',
    'name',
    'status',
    'lgpdConsent',
    '170886OVLsgE',
    'writeFileSync',
    ']\x20-\x20',
    'forEach',
    'handleMessage',
    'test',
    'verifyMessageFace',
    '../TicketServices/FindOrCreateTicketService',
    '../WhatsappService/ShowWhatsAppService',
    'enableLGPD',
    '../MessageServices/CreateMessageService',
    'head',
    'verifyQuotedMessage',
    'queueId',
    'maxUseBotQueues',
    '4ihtgJl',
    'mkdirSync',
    'handleRating',
    'reload',
    'getTime',
    '../WbotServices/wbotMessageListener',
    'recipient',
    'channel',
    'complationMessage',
    'moment'
  ];
  a499_0x3ec3 = function () {
    return _0x171497;
  };
  return a499_0x3ec3();
}
var __importDefault =
  (this && this[a499_0x308a11(0xfb)]) ||
  function (_0x2648f2) {
    const _0x505409 = a499_0x308a11;
    return _0x2648f2 && _0x2648f2[_0x505409(0xfe)]
      ? _0x2648f2
      : { default: _0x2648f2 };
  };
Object[a499_0x308a11(0xd4)](exports, a499_0x308a11(0xfe), { value: !![] }),
  (exports[a499_0x308a11(0xab)] =
    exports[a499_0x308a11(0xb3)] =
    exports[a499_0x308a11(0xf2)] =
    exports[a499_0x308a11(0xad)] =
      void 0x0);
const fs_1 = require('fs'),
  fs_2 = __importDefault(require('fs')),
  axios_1 = __importDefault(require(a499_0x308a11(0xe8))),
  moment_1 = __importDefault(require(a499_0x308a11(0xbf))),
  path_1 = require('path'),
  CreateOrUpdateContactService_1 = __importDefault(
    require(a499_0x308a11(0xf0))
  ),
  CreateMessageService_1 = __importDefault(require(a499_0x308a11(0xb1))),
  FindOrCreateTicketService_1 = __importDefault(require(a499_0x308a11(0xae))),
  graphAPI_1 = require(a499_0x308a11(0xec)),
  Whatsapp_1 = __importDefault(require('../../models/Whatsapp')),
  UpdateTicketService_1 = __importDefault(require(a499_0x308a11(0xc1))),
  ShowWhatsAppService_1 = __importDefault(require(a499_0x308a11(0xaf))),
  Mustache_1 = __importDefault(require(a499_0x308a11(0xc7))),
  Queue_1 = __importDefault(require(a499_0x308a11(0xe9))),
  Chatbot_1 = __importDefault(require(a499_0x308a11(0xce))),
  Message_1 = __importDefault(require('../../models/Message')),
  ChatbotListenerFacebook_1 = require('../WbotServices/ChatbotListenerFacebook'),
  lodash_1 = require(a499_0x308a11(0xdf)),
  FindOrCreateATicketTrakingService_1 = __importDefault(
    require(a499_0x308a11(0xdc))
  ),
  wbotMessageListener_1 = require(a499_0x308a11(0xbb)),
  CompaniesSettings_1 = __importDefault(require(a499_0x308a11(0xe0))),
  sendFacebookMessage_1 = __importDefault(require(a499_0x308a11(0xd7))),
  verifyContact = async (_0x4ba919, _0x41203f, _0x4de0e4) => {
    const _0x23b5fd = a499_0x308a11;
    if (!_0x4ba919) return null;
    const _0x35379f = {
        name:
          _0x4ba919?.['name'] ||
          _0x4ba919?.['first_name'] + '\x20' + _0x4ba919?.[_0x23b5fd(0xf1)],
        number: _0x4ba919['id'],
        profilePicUrl: _0x4ba919[_0x23b5fd(0xfc)],
        isGroup: ![],
        companyId: _0x4de0e4,
        channel: _0x41203f
      },
      _0x3c2bc2 = (0x0, CreateOrUpdateContactService_1[_0x23b5fd(0x101)])(
        _0x35379f
      );
    return _0x3c2bc2;
  },
  verifyMessageFace = async (
    _0x397161,
    _0x18ccea,
    _0x2fce65,
    _0x1f5201,
    _0x3d7807 = ![]
  ) => {
    const _0x3b9351 = a499_0x308a11,
      _0x3f2cb5 = await (0x0, exports[_0x3b9351(0xb3)])(_0x397161),
      _0x37c987 = {
        wid: _0x397161[_0x3b9351(0xc9)] || _0x397161['message_id'],
        ticketId: _0x2fce65['id'],
        contactId: _0x3d7807
          ? undefined
          : _0x397161[_0x3b9351(0xed)]
            ? undefined
            : _0x1f5201['id'],
        body: _0x397161['text'] || _0x18ccea,
        fromMe: _0x3d7807 ? _0x3d7807 : _0x397161[_0x3b9351(0xed)] ? !![] : ![],
        read: _0x3d7807 ? _0x3d7807 : _0x397161[_0x3b9351(0xed)],
        quotedMsgId: _0x3f2cb5?.['id'],
        ack: 0x3,
        dataJson: JSON[_0x3b9351(0xea)](_0x397161),
        channel: _0x2fce65['channel']
      };
    await (0x0, CreateMessageService_1[_0x3b9351(0x101)])({
      messageData: _0x37c987,
      companyId: _0x2fce65[_0x3b9351(0xc8)]
    });
  };
exports[a499_0x308a11(0xad)] = verifyMessageFace;
const verifyMessageMedia = async (
  _0x1ff08d,
  _0x101549,
  _0x4b66ea,
  _0x491f1f = ![]
) => {
  const _0x50191c = a499_0x308a11,
    { data: _0x1272f5 } = await axios_1[_0x50191c(0x101)][_0x50191c(0xcf)](
      _0x1ff08d[_0x50191c(0xcc)][0x0][_0x50191c(0xcd)][_0x50191c(0xf6)],
      { responseType: _0x50191c(0xd3) }
    ),
    { fileTypeFromBuffer: _0x20136e } = await eval(
      'const _0x19bf7e = _0x50191c;import(_0x19bf7e(213));'
    ),
    _0x2013cd = await _0x20136e(_0x1272f5),
    _0x21e022 =
      new Date()[_0x50191c(0xba)]() + '.' + _0x2013cd[_0x50191c(0xc0)],
    _0x1c4da1 = _0x50191c(0xe7) + _0x101549['companyId'];
  !fs_2['default']['existsSync'](_0x1c4da1) &&
    (fs_2['default'][_0x50191c(0xb7)](_0x1c4da1),
    fs_2['default']['chmodSync'](_0x1c4da1, 0x1ff));
  (0x0, fs_1[_0x50191c(0xa8)])(
    (0x0, path_1['join'])(__dirname, '..', '..', '..', _0x1c4da1, _0x21e022),
    _0x1272f5,
    'base64'
  );
  const _0x2c0004 = {
    wid: _0x1ff08d[_0x50191c(0xc9)],
    ticketId: _0x101549['id'],
    contactId: _0x491f1f
      ? undefined
      : _0x1ff08d[_0x50191c(0xed)]
        ? undefined
        : _0x4b66ea['id'],
    body: _0x1ff08d[_0x50191c(0xc2)] || _0x21e022,
    fromMe: _0x491f1f ? _0x491f1f : _0x1ff08d['is_echo'] ? !![] : ![],
    mediaType: _0x1ff08d['attachments'][0x0]['type'],
    mediaUrl: _0x21e022,
    read: _0x491f1f ? _0x491f1f : _0x1ff08d['is_echo'],
    quotedMsgId: null,
    ack: 0x3,
    dataJson: JSON[_0x50191c(0xea)](_0x1ff08d),
    channel: _0x101549[_0x50191c(0xbd)]
  };
  await (0x0, CreateMessageService_1[_0x50191c(0x101)])({
    messageData: _0x2c0004,
    companyId: _0x101549['companyId']
  });
};
exports[a499_0x308a11(0xf2)] = verifyMessageMedia;
const verifyQuotedMessage = async _0x1894e2 => {
  const _0xd9e9be = a499_0x308a11;
  if (!_0x1894e2) return null;
  const _0x1913de = _0x1894e2?.['reply_to']?.[_0xd9e9be(0xc9)];
  if (!_0x1913de) return null;
  const _0x1ef68c = await Message_1[_0xd9e9be(0x101)][_0xd9e9be(0x9e)]({
    where: { wid: _0x1913de }
  });
  if (!_0x1ef68c) return null;
  return _0x1ef68c;
};
exports[a499_0x308a11(0xb3)] = verifyQuotedMessage;
const handleMessage = async (_0x53cf3f, _0x5cece3, _0x44a3e1, _0x46e27e) => {
  const _0x14b195 = a499_0x308a11;
  try {
    if (_0x5cece3['message']) {
      let _0x1b36ef,
        _0x4e74a1 = null;
      const _0x5b1a3c = _0x5cece3[_0x14b195(0xcb)]['id'],
        _0x132317 = _0x5cece3[_0x14b195(0xbc)]['id'],
        { message: _0x2c72cd } = _0x5cece3,
        _0x325fa9 = _0x2c72cd['is_echo'];
      let _0x5adab7 = _0x2c72cd[_0x14b195(0xc2)];
      if (_0x325fa9) {
        if (/\u200e/[_0x14b195(0xac)](_0x5adab7)) return;
        _0x1b36ef = await (0x0, graphAPI_1[_0x14b195(0xf8)])(
          _0x132317,
          _0x53cf3f[_0x14b195(0xee)]
        );
      } else
        _0x1b36ef = await (0x0, graphAPI_1[_0x14b195(0xf8)])(
          _0x5b1a3c,
          _0x53cf3f[_0x14b195(0xee)]
        );
      const _0x2490de = await verifyContact(_0x1b36ef, _0x44a3e1, _0x46e27e),
        _0x1b84ae = _0x325fa9 ? 0x0 : 0x1,
        _0x50f698 = await Whatsapp_1[_0x14b195(0x101)][_0x14b195(0x9e)]({
          where: { facebookPageUserId: _0x53cf3f['facebookPageUserId'] },
          include: [
            {
              model: Queue_1[_0x14b195(0x101)],
              as: 'queues',
              attributes: ['id', _0x14b195(0xa4), 'color', 'greetingMessage'],
              include: [
                {
                  model: Chatbot_1[_0x14b195(0x101)],
                  as: _0x14b195(0xa2),
                  attributes: ['id', _0x14b195(0xa4), _0x14b195(0xfa)]
                }
              ]
            }
          ],
          order: [
            [_0x14b195(0xf5), 'id', 'ASC'],
            [_0x14b195(0xf5), _0x14b195(0xa2), 'id', 'ASC']
          ]
        }),
        _0x3135f6 = await CompaniesSettings_1['default'][_0x14b195(0x9e)]({
          where: { companyId: _0x46e27e }
        }),
        { ticket: _0x44e321 } = await (0x0,
        FindOrCreateTicketService_1[_0x14b195(0x101)])(
          _0x2490de,
          _0x50f698,
          _0x1b84ae,
          _0x46e27e,
          0x0,
          0x0,
          null,
          _0x44a3e1,
          null,
          ![],
          _0x3135f6
        );
      _0x4e74a1 = _0x44e321;
      const _0x247ba0 = await (0x0,
      FindOrCreateATicketTrakingService_1[_0x14b195(0x101)])({
        ticketId: _0x4e74a1['id'],
        companyId: _0x46e27e,
        whatsappId: _0x50f698?.['id']
      });
      if (
        (_0x50f698[_0x14b195(0xd9)] &&
          (0x0, Mustache_1[_0x14b195(0x101)])(
            _0x50f698[_0x14b195(0xd9)],
            _0x4e74a1
          ) === _0x2c72cd[_0x14b195(0xc2)]) ||
        (_0x50f698[_0x14b195(0xf9)] &&
          (0x0, Mustache_1[_0x14b195(0x101)])(
            _0x50f698[_0x14b195(0xf9)],
            _0x4e74a1
          ) === _0x2c72cd[_0x14b195(0xc2)])
      )
        return;
      await _0x4e74a1[_0x14b195(0xa3)]({
        lastMessage: _0x2c72cd[_0x14b195(0xc2)]
      });
      try {
        if (!_0x325fa9) {
          if (
            _0x4e74a1[_0x14b195(0xa5)] === _0x14b195(0xe4) &&
            _0x247ba0 !== null &&
            (0x0, wbotMessageListener_1[_0x14b195(0xf7)])(_0x247ba0)
          ) {
            if (!isNaN(parseFloat(_0x5adab7))) {
              (0x0, wbotMessageListener_1[_0x14b195(0xb8)])(
                parseFloat(_0x5adab7),
                _0x4e74a1,
                _0x247ba0
              ),
                await _0x247ba0[_0x14b195(0xa3)]({
                  ratingAt: (0x0, moment_1[_0x14b195(0x101)])()['toDate'](),
                  finishedAt: (0x0, moment_1['default'])()[_0x14b195(0xa0)](),
                  rated: !![]
                });
              return;
            } else {
              if (
                _0x4e74a1['amountUsedBotQueuesNPS'] <
                _0x50f698['maxUseBotQueuesNPS']
              ) {
                let _0x5aa77a = _0x14b195(0xdd);
                const _0x3d6494 = await (0x0, graphAPI_1['sendText'])(
                  _0x2490de[_0x14b195(0xc6)],
                  _0x5aa77a,
                  _0x50f698[_0x14b195(0xee)]
                );
                await (0x0, exports[_0x14b195(0xad)])(
                  _0x3d6494,
                  _0x5aa77a,
                  _0x4e74a1,
                  _0x2490de
                );
                let _0x3b1493 = '‎' + _0x50f698[_0x14b195(0xf9)] + '\x0a';
                const _0x566f11 = await (0x0, graphAPI_1[_0x14b195(0xf3)])(
                  _0x2490de[_0x14b195(0xc6)],
                  _0x3b1493,
                  _0x50f698['facebookUserToken']
                );
                await (0x0, exports[_0x14b195(0xad)])(
                  _0x3d6494,
                  _0x3b1493,
                  _0x4e74a1,
                  _0x2490de
                ),
                  await _0x4e74a1['update']({
                    amountUsedBotQueuesNPS: _0x4e74a1[_0x14b195(0xe2)] + 0x1
                  });
              }
              return;
            }
          }
          const _0x53f6a9 = _0x3135f6[_0x14b195(0xb0)] === 'enabled';
          if (_0x53f6a9 && _0x4e74a1['status'] === 'lgpd') {
            if (
              (0x0, lodash_1[_0x14b195(0xd1)])(_0x4e74a1[_0x14b195(0xd0)]) &&
              !(0x0, lodash_1[_0x14b195(0xd1)])(_0x4e74a1[_0x14b195(0x9f)])
            ) {
              let _0x5d3b1a = null;
              !isNaN(parseFloat(_0x5adab7)) &&
                (_0x5d3b1a = parseFloat(_0x5adab7));
              if (
                !Number[_0x14b195(0x102)](_0x5d3b1a) &&
                Number[_0x14b195(0xe6)](_0x5d3b1a) &&
                !(0x0, lodash_1[_0x14b195(0xd6)])(_0x5d3b1a) &&
                _0x5d3b1a > 0x0
              ) {
                if (_0x5d3b1a === 0x1)
                  await _0x2490de['update']({
                    lgpdAcceptedAt: (0x0, moment_1[_0x14b195(0x101)])()[
                      _0x14b195(0xa0)
                    ]()
                  }),
                    await _0x4e74a1[_0x14b195(0xa3)]({
                      lgpdAcceptedAt: (0x0, moment_1[_0x14b195(0x101)])()[
                        _0x14b195(0xa0)
                      ](),
                      amountUsedBotQueues: 0x0
                    });
                else {
                  if (_0x5d3b1a === 0x2) {
                    if (
                      _0x50f698[_0x14b195(0xbe)] !== '' &&
                      _0x50f698['complationMessage'] !== undefined
                    ) {
                      const _0x19faad = await (0x0,
                      graphAPI_1[_0x14b195(0xf3)])(
                        _0x2490de[_0x14b195(0xc6)],
                        '‎' + _0x50f698['complationMessage'],
                        _0x50f698[_0x14b195(0xee)]
                      );
                      (0x0, exports[_0x14b195(0xad)])(
                        _0x19faad,
                        '‎' + _0x50f698['complationMessage'],
                        _0x4e74a1,
                        _0x2490de
                      );
                    }
                    await _0x4e74a1['update']({
                      status: _0x14b195(0xf4),
                      amountUsedBotQueues: 0x0
                    }),
                      await _0x247ba0['destroy'];
                    return;
                  } else
                    _0x4e74a1[_0x14b195(0xdb)] < _0x50f698['maxUseBotQueues'] &&
                      (await _0x4e74a1['update']({
                        amountUsedBotQueues:
                          _0x4e74a1['amountUsedBotQueues'] + 0x1,
                        lgpdSendMessageAt: null
                      }));
                }
              } else
                _0x4e74a1[_0x14b195(0xdb)] < _0x50f698[_0x14b195(0xb5)] &&
                  (await _0x4e74a1[_0x14b195(0xa3)]({
                    amountUsedBotQueues: _0x4e74a1[_0x14b195(0xdb)] + 0x1,
                    lgpdSendMessageAt: null
                  }));
            }
            if (
              (_0x2490de[_0x14b195(0xd0)] === null ||
                _0x3135f6?.[_0x14b195(0xa6)] === _0x14b195(0xe3)) &&
              !_0x2490de[_0x14b195(0xd2)] &&
              (0x0, lodash_1[_0x14b195(0xd1)])(
                _0x4e74a1['lgpdSendMessageAt']
              ) &&
              _0x4e74a1[_0x14b195(0xdb)] <= _0x50f698[_0x14b195(0xb5)] &&
              !(0x0, lodash_1[_0x14b195(0xd1)])(_0x3135f6?.[_0x14b195(0xda)])
            ) {
              _0x2c72cd['attachments']
                ? await (0x0, exports[_0x14b195(0xf2)])(
                    _0x2c72cd,
                    _0x4e74a1,
                    _0x2490de
                  )
                : await (0x0, exports[_0x14b195(0xad)])(
                    _0x2c72cd,
                    _0x2c72cd[_0x14b195(0xc2)],
                    _0x4e74a1,
                    _0x2490de
                  );
              if (
                !(0x0, lodash_1[_0x14b195(0xd1)])(_0x3135f6?.['lgpdMessage']) &&
                _0x3135f6[_0x14b195(0xda)] !== ''
              ) {
                const _0x323485 = (0x0, Mustache_1[_0x14b195(0x101)])(
                    '‎' + _0x3135f6[_0x14b195(0xda)],
                    _0x4e74a1
                  ),
                  _0x5dc76e = await (0x0, graphAPI_1[_0x14b195(0xf3)])(
                    _0x2490de['number'],
                    _0x323485,
                    _0x50f698['facebookUserToken']
                  );
                (0x0, exports[_0x14b195(0xad)])(
                  _0x5dc76e,
                  _0x323485,
                  _0x4e74a1,
                  _0x2490de
                );
              }
              if (
                !(0x0, lodash_1[_0x14b195(0xd1)])(_0x3135f6?.['lgpdLink']) &&
                _0x3135f6?.[_0x14b195(0xc4)] !== ''
              ) {
                const _0x3ef709 = (0x0, Mustache_1[_0x14b195(0x101)])(
                    '‎' + _0x3135f6[_0x14b195(0xc4)],
                    _0x4e74a1
                  ),
                  _0x4b8cc8 = await (0x0, graphAPI_1['sendText'])(
                    _0x2490de[_0x14b195(0xc6)],
                    _0x3ef709,
                    _0x50f698[_0x14b195(0xee)]
                  );
                (0x0, exports[_0x14b195(0xad)])(
                  _0x4b8cc8,
                  _0x3ef709,
                  _0x4e74a1,
                  _0x2490de
                );
              }
              const _0x5944ab = (0x0, Mustache_1[_0x14b195(0x101)])(
                  _0x14b195(0xfd),
                  _0x4e74a1
                ),
                _0x58930d = await (0x0, graphAPI_1[_0x14b195(0xf3)])(
                  _0x2490de[_0x14b195(0xc6)],
                  _0x5944ab,
                  _0x50f698[_0x14b195(0xee)]
                );
              (0x0, exports[_0x14b195(0xad)])(
                _0x58930d,
                _0x5944ab,
                _0x4e74a1,
                _0x2490de
              ),
                await _0x4e74a1[_0x14b195(0xa3)]({
                  lgpdSendMessageAt: (0x0, moment_1[_0x14b195(0x101)])()[
                    _0x14b195(0xa0)
                  ](),
                  amountUsedBotQueues: _0x4e74a1[_0x14b195(0xdb)] + 0x1
                }),
                await _0x4e74a1['reload']();
              return;
            }
            if (
              !(0x0, lodash_1[_0x14b195(0xd1)])(_0x4e74a1[_0x14b195(0x9f)]) &&
              (0x0, lodash_1['isNil'])(_0x4e74a1[_0x14b195(0xd0)])
            )
              return;
          }
        }
      } catch (_0x47f08c) {
        throw new Error(_0x47f08c);
        console[_0x14b195(0xff)](_0x47f08c);
      }
      _0x2c72cd[_0x14b195(0xcc)]
        ? await (0x0, exports['verifyMessageMedia'])(
            _0x2c72cd,
            _0x4e74a1,
            _0x2490de
          )
        : await (0x0, exports['verifyMessageFace'])(
            _0x2c72cd,
            _0x2c72cd[_0x14b195(0xc2)],
            _0x4e74a1,
            _0x2490de
          ),
        !_0x4e74a1['queue'] &&
          !_0x325fa9 &&
          !_0x4e74a1[_0x14b195(0xc5)] &&
          _0x50f698[_0x14b195(0xf5)][_0x14b195(0xc3)] >= 0x1 &&
          (await verifyQueue(_0x50f698, _0x2c72cd, _0x4e74a1, _0x2490de)),
        _0x4e74a1['queue'] &&
          _0x4e74a1[_0x14b195(0xb4)] &&
          !_0x4e74a1[_0x14b195(0xe5)] &&
          (await (0x0, ChatbotListenerFacebook_1['sayChatbot'])(
            _0x4e74a1[_0x14b195(0xb4)],
            _0x50f698,
            _0x4e74a1,
            _0x2490de,
            _0x2c72cd
          ));
    }
    return;
  } catch (_0x2aa100) {
    throw new Error(_0x2aa100);
  }
};
exports['handleMessage'] = handleMessage;
const verifyQueue = async (_0x2f2ebc, _0xf81203, _0x1a4bac, _0x1d0fa7) => {
  const _0x1951f3 = a499_0x308a11,
    { queues: _0x1480f3, greetingMessage: _0x4113ad } = await (0x0,
    ShowWhatsAppService_1[_0x1951f3(0x101)])(
      _0x2f2ebc['id'],
      _0x1a4bac[_0x1951f3(0xc8)]
    );
  if (_0x1480f3[_0x1951f3(0xc3)] === 0x1) {
    const _0x8a994b = (0x0, lodash_1[_0x1951f3(0xb2)])(_0x1480f3);
    let _0x43ccb0 = ![];
    _0x8a994b?.['chatbots'] &&
      (_0x43ccb0 = _0x8a994b?.['chatbots']?.['length'] > 0x0);
    await (0x0, UpdateTicketService_1[_0x1951f3(0x101)])({
      ticketData: { queueId: _0x1480f3[0x0]['id'], isBot: _0x43ccb0 },
      ticketId: _0x1a4bac['id'],
      companyId: _0x1a4bac[_0x1951f3(0xc8)]
    });
    return;
  }
  let _0x4f97c3 = '';
  if (_0x1a4bac[_0x1951f3(0xa5)] !== _0x1951f3(0xa1))
    _0x4f97c3 = _0xf81203['text'];
  else {
    if (!(0x0, lodash_1[_0x1951f3(0xd1)])(_0x1a4bac[_0x1951f3(0xd0)]))
      await _0x1a4bac[_0x1951f3(0xa3)]({ status: _0x1951f3(0xeb) });
    await _0x1a4bac[_0x1951f3(0xb9)]();
  }
  const _0x2a4a59 = _0x1480f3[+_0x4f97c3 - 0x1];
  if (_0x2a4a59) {
    await (0x0, UpdateTicketService_1['default'])({
      ticketData: { queueId: _0x2a4a59['id'] },
      ticketId: _0x1a4bac['id'],
      companyId: _0x1a4bac['companyId']
    });
    if (_0x2a4a59[_0x1951f3(0xa2)][_0x1951f3(0xc3)] > 0x0) {
      let _0x2f99a9 = '';
      _0x2a4a59[_0x1951f3(0xa2)][_0x1951f3(0xaa)]((_0x4aa420, _0x2d1d08) => {
        const _0x344641 = _0x1951f3;
        _0x2f99a9 +=
          '[' +
          (_0x2d1d08 + 0x1) +
          _0x344641(0xa9) +
          _0x4aa420[_0x344641(0xa4)] +
          '\x0a';
      });
      const _0x11993e =
          _0x2a4a59['greetingMessage'] +
          '\x0a\x0a' +
          _0x2f99a9 +
          '\x0a[#]\x20Voltar\x20para\x20o\x20menu\x20principal',
        _0x4a8ecf = await (0x0, sendFacebookMessage_1[_0x1951f3(0x101)])({
          ticket: _0x1a4bac,
          body: _0x11993e
        });
    }
    if (!_0x2a4a59['chatbots']['length']) {
      const _0x5945f2 = '' + _0x2a4a59[_0x1951f3(0xfa)],
        _0x37d161 = await (0x0, sendFacebookMessage_1['default'])({
          ticket: _0x1a4bac,
          body: _0x5945f2
        });
    }
  } else {
    let _0x28a939 = '';
    _0x1480f3[_0x1951f3(0xaa)]((_0x572d52, _0x35d7cb) => {
      const _0xe6473e = _0x1951f3;
      _0x28a939 +=
        '[' +
        (_0x35d7cb + 0x1) +
        _0xe6473e(0xa9) +
        _0x572d52[_0xe6473e(0xa4)] +
        '\x0a';
    });
    const _0x44a499 = _0x4113ad + '\x0a\x0a' + _0x28a939,
      _0x2cf7a9 = await (0x0, sendFacebookMessage_1['default'])({
        ticket: _0x1a4bac,
        body: _0x44a499
      });
  }
};
