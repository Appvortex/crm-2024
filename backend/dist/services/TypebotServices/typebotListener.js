'use strict';
const a632_0x1c9083 = a632_0x17de;
function a632_0x1a01() {
  const _0x28be40 = [
    'toString',
    'logger',
    'random',
    'post',
    'type',
    'remoteJid',
    'userId',
    'messages',
    'info',
    'choice\x20input',
    'stringify',
    'reload',
    'key',
    'closed',
    '825524FwEJjw',
    'Invalid\x20message.\x20Please,\x20try\x20again.',
    '@c.us',
    '203092qJVpUm',
    'setMinutes',
    'string',
    'url',
    'contact',
    '/api/v1/sessions/',
    'length',
    'sendMessage',
    '25112KZapTG',
    'underline',
    'isNil',
    'audio/mp4',
    '__importDefault',
    'richText',
    'application/json',
    '2082150LjGVnR',
    '3231FdIeyb',
    '../WbotServices/wbotMessageListener',
    'composing',
    'delay',
    'companyId',
    '/continueChat',
    'Error\x20on\x20typebotListener:\x20',
    '3007818RvbfdO',
    '710715cZCQbe',
    'replace',
    '20784440vAJxrM',
    '/startChat',
    'image',
    'data',
    'children',
    'lodash',
    '__esModule',
    'italic',
    '7xUkOyJ',
    'presenceSubscribe',
    'typebotSessionId',
    'text',
    'content',
    'pushName',
    '../TicketServices/UpdateTicketService',
    'stopBot',
    'getBodyMessage',
    'update',
    'parse',
    'updatedAt',
    'default',
    'queueId',
    'defineProperty',
    '▶️\x20',
    'startsWith',
    '4QVXnHb',
    'input',
    '@whiskeysockets/baileys',
    'audio',
    'sendPresenceUpdate',
    'bold',
    'paused'
  ];
  a632_0x1a01 = function () {
    return _0x28be40;
  };
  return a632_0x1a01();
}
function a632_0x17de(_0x25ba9f, _0x2c3425) {
  const _0x1a01f3 = a632_0x1a01();
  return (
    (a632_0x17de = function (_0x17de4c, _0x27cca9) {
      _0x17de4c = _0x17de4c - 0x113;
      let _0x454997 = _0x1a01f3[_0x17de4c];
      return _0x454997;
    }),
    a632_0x17de(_0x25ba9f, _0x2c3425)
  );
}
(function (_0x2f87ea, _0x5074a5) {
  const _0x3a0d15 = a632_0x17de,
    _0x280b49 = _0x2f87ea();
  while (!![]) {
    try {
      const _0x47e47e =
        -parseInt(_0x3a0d15(0x153)) / 0x1 +
        parseInt(_0x3a0d15(0x156)) / 0x2 +
        parseInt(_0x3a0d15(0x122)) / 0x3 +
        (-parseInt(_0x3a0d15(0x13e)) / 0x4) *
          (parseInt(_0x3a0d15(0x123)) / 0x5) +
        (-parseInt(_0x3a0d15(0x11a)) / 0x6) *
          (parseInt(_0x3a0d15(0x12d)) / 0x7) +
        (parseInt(_0x3a0d15(0x113)) / 0x8) *
          (-parseInt(_0x3a0d15(0x11b)) / 0x9) +
        parseInt(_0x3a0d15(0x125)) / 0xa;
      if (_0x47e47e === _0x5074a5) break;
      else _0x280b49['push'](_0x280b49['shift']());
    } catch (_0x225197) {
      _0x280b49['push'](_0x280b49['shift']());
    }
  }
})(a632_0x1a01, 0xb4e8b);
var __importDefault =
  (this && this[a632_0x1c9083(0x117)]) ||
  function (_0x3201e9) {
    const _0x473ab7 = a632_0x1c9083;
    return _0x3201e9 && _0x3201e9[_0x473ab7(0x12b)]
      ? _0x3201e9
      : { default: _0x3201e9 };
  };
Object[a632_0x1c9083(0x13b)](exports, a632_0x1c9083(0x12b), { value: !![] });
const axios_1 = __importDefault(require('axios')),
  baileys_1 = require(a632_0x1c9083(0x140)),
  wbotMessageListener_1 = require(a632_0x1c9083(0x11c)),
  logger_1 = require('../../utils/logger'),
  lodash_1 = require(a632_0x1c9083(0x12a)),
  UpdateTicketService_1 = __importDefault(require(a632_0x1c9083(0x133))),
  typebotListener = async ({
    wbot: _0xde22b2,
    msg: _0xfabe67,
    ticket: _0x1a8111,
    typebot: _0x250969
  }) => {
    const _0x55238f = a632_0x1c9083;
    if (_0xfabe67['key'][_0x55238f(0x14a)] === 'status@broadcast') return;
    const {
        urlN8N: _0x319c50,
        typebotExpires: _0x1e740a,
        typebotKeywordFinish: _0x1239b8,
        typebotKeywordRestart: _0x119f51,
        typebotUnknownMessage: _0x18a75d,
        typebotSlug: _0x11416a,
        typebotDelayMessage: _0x4f6661,
        typebotRestartMessage: _0x3920fd
      } = _0x250969,
      _0x1628d6 = _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)]['replace'](
        /\D/g,
        ''
      );
    let _0x2f6185 = (0x0, wbotMessageListener_1[_0x55238f(0x135)])(_0xfabe67);
    async function _0x3f162c(_0x4bd426, _0x1c864d, _0x347c3b) {
      const _0x50254e = _0x55238f;
      try {
        const _0x13338e = Math['floor'](Math[_0x50254e(0x147)]() * 0x2540be400)[
            _0x50254e(0x145)
          ](),
          _0x4a5d62 = JSON[_0x50254e(0x14f)]({
            isStreamEnabled: !![],
            message: _0x50254e(0x158),
            resultId: _0x50254e(0x158),
            isOnlyRegistering: ![],
            prefilledVariables: {
              number: _0x347c3b,
              pushName: _0x4bd426[_0x50254e(0x132)] || '',
              remoteJid: _0x1a8111?.[_0x50254e(0x15a)]?.[_0x50254e(0x14a)]
            }
          }),
          _0x3eac0a = {
            method: _0x50254e(0x148),
            maxBodyLength: Infinity,
            url: _0x319c50 + '/api/v1/typebots/' + _0x11416a + _0x50254e(0x126),
            headers: {
              'Content-Type': _0x50254e(0x119),
              Accept: _0x50254e(0x119)
            },
            data: _0x4a5d62
          },
          _0x537224 = await axios_1[_0x50254e(0x139)]['request'](_0x3eac0a);
        return _0x537224['data'];
      } catch (_0xddbde1) {
        logger_1['logger'][_0x50254e(0x14d)](
          'Erro\x20ao\x20criar\x20sessão\x20do\x20typebot:\x20',
          _0xddbde1
        );
        throw _0xddbde1;
      }
    }
    let _0x415f16,
      _0x27f9dc,
      _0x7cbf06 = ![];
    try {
      const _0x176154 = new Date();
      _0x176154[_0x55238f(0x157)](
        _0x176154['getMinutes']() - Number(_0x1e740a)
      );
      _0x1e740a > 0x0 &&
        _0x1a8111[_0x55238f(0x138)] < _0x176154 &&
        (await _0x1a8111['update']({ typebotSessionId: null, isBot: !![] }),
        await _0x1a8111['reload']());
      (0x0, lodash_1[_0x55238f(0x115)])(_0x1a8111[_0x55238f(0x12f)])
        ? ((_0x27f9dc = await _0x3f162c(_0xfabe67, _0x250969, _0x1628d6)),
          (_0x415f16 = _0x27f9dc['sessionId']),
          (_0x7cbf06 = !![]),
          await _0x1a8111[_0x55238f(0x136)]({
            typebotSessionId: _0x415f16,
            typebotStatus: !![],
            useIntegration: !![],
            integrationId: _0x250969['id']
          }))
        : ((_0x415f16 = _0x1a8111[_0x55238f(0x12f)]),
          (_0x7cbf06 = _0x1a8111['typebotStatus']));
      if (!_0x7cbf06) return;
      if (_0x2f6185 !== _0x1239b8 && _0x2f6185 !== _0x119f51) {
        let _0x2f4fb7, _0x25c9a4, _0x1a9024;
        if (
          _0x27f9dc?.['messages']['length'] === 0x0 ||
          _0x27f9dc === undefined
        ) {
          const _0x1b9e01 = JSON[_0x55238f(0x14f)]({ message: _0x2f6185 });
          let _0x50f68b = {
            method: _0x55238f(0x148),
            maxBodyLength: Infinity,
            url: _0x319c50 + _0x55238f(0x15b) + _0x415f16 + _0x55238f(0x120),
            headers: {
              'Content-Type': 'application/json',
              Accept: _0x55238f(0x119)
            },
            data: _0x1b9e01
          };
          (_0x2f4fb7 = await axios_1[_0x55238f(0x139)]['request'](_0x50f68b)),
            (_0x25c9a4 = _0x2f4fb7[_0x55238f(0x128)]?.[_0x55238f(0x14c)]),
            (_0x1a9024 = _0x2f4fb7[_0x55238f(0x128)]?.[_0x55238f(0x13f)]);
        } else
          (_0x25c9a4 = _0x27f9dc?.[_0x55238f(0x14c)]),
            (_0x1a9024 = _0x27f9dc?.[_0x55238f(0x13f)]);
        if (_0x25c9a4?.[_0x55238f(0x15c)] === 0x0)
          await _0xde22b2[_0x55238f(0x15d)](_0x1628d6 + _0x55238f(0x155), {
            text: _0x18a75d
          });
        else {
          for (const _0x26ea2f of _0x25c9a4) {
            if (_0x26ea2f[_0x55238f(0x149)] === _0x55238f(0x130)) {
              let _0x1d0e5a = '',
                _0x3502b3 = ![];
              for (const _0x5f415e of _0x26ea2f[_0x55238f(0x131)][
                _0x55238f(0x118)
              ]) {
                for (const _0x3b714b of _0x5f415e[_0x55238f(0x129)]) {
                  let _0x58a937 = '';
                  _0x3b714b[_0x55238f(0x130)] &&
                    (_0x58a937 = _0x3b714b[_0x55238f(0x130)]);
                  if (_0x3b714b[_0x55238f(0x149)] && _0x3b714b['children'])
                    for (const _0x1a396e of _0x3b714b[_0x55238f(0x129)]) {
                      let _0x9a5435 = '';
                      _0x1a396e[_0x55238f(0x130)] &&
                        (_0x9a5435 = _0x1a396e[_0x55238f(0x130)]);
                      if (_0x1a396e['type'] && _0x1a396e[_0x55238f(0x129)])
                        for (const _0x5d6d18 of _0x1a396e[_0x55238f(0x129)]) {
                          let _0x5c568d = '';
                          _0x5d6d18[_0x55238f(0x130)] &&
                            (_0x5c568d = _0x5d6d18[_0x55238f(0x130)]);
                          _0x5d6d18[_0x55238f(0x143)] &&
                            (_0x5c568d = '*' + _0x5c568d + '*');
                          _0x5d6d18[_0x55238f(0x12c)] &&
                            (_0x5c568d = '_' + _0x5c568d + '_');
                          _0x5d6d18[_0x55238f(0x114)] &&
                            (_0x5c568d = '~' + _0x5c568d + '~');
                          if (_0x5d6d18['url']) {
                            const _0x5691d1 =
                              _0x5d6d18[_0x55238f(0x129)][0x0]['text'];
                            (_0x5c568d =
                              '[' +
                              _0x5691d1 +
                              '](' +
                              _0x5d6d18[_0x55238f(0x159)] +
                              ')'),
                              (_0x3502b3 = !![]);
                          }
                          _0x1d0e5a += _0x5c568d;
                        }
                      _0x1a396e['bold'] && (_0x9a5435 = '*' + _0x9a5435 + '*');
                      _0x1a396e['italic'] &&
                        (_0x9a5435 = '_' + _0x9a5435 + '_');
                      _0x1a396e['underline'] &&
                        (_0x9a5435 = '~' + _0x9a5435 + '~');
                      if (_0x1a396e[_0x55238f(0x159)]) {
                        const _0x1bd328 =
                          _0x1a396e[_0x55238f(0x129)][0x0][_0x55238f(0x130)];
                        (_0x9a5435 =
                          '[' +
                          _0x1bd328 +
                          '](' +
                          _0x1a396e[_0x55238f(0x159)] +
                          ')'),
                          (_0x3502b3 = !![]);
                      }
                      _0x1d0e5a += _0x9a5435;
                    }
                  _0x3b714b[_0x55238f(0x143)] &&
                    (_0x58a937 = '*' + _0x58a937 + '*');
                  _0x3b714b[_0x55238f(0x12c)] &&
                    (_0x58a937 = '_' + _0x58a937 + '_');
                  _0x3b714b[_0x55238f(0x114)] &&
                    (_0x58a937 = '~' + _0x58a937 + '~');
                  if (_0x3b714b[_0x55238f(0x159)]) {
                    const _0x35965e = _0x3b714b[_0x55238f(0x129)][0x0]['text'];
                    (_0x58a937 =
                      '[' +
                      _0x35965e +
                      '](' +
                      _0x3b714b[_0x55238f(0x159)] +
                      ')'),
                      (_0x3502b3 = !![]);
                  }
                  _0x1d0e5a += _0x58a937;
                }
                _0x1d0e5a += '\x0a';
              }
              _0x1d0e5a = _0x1d0e5a[_0x55238f(0x124)]('**', '')[
                _0x55238f(0x124)
              ](/\n$/, '');
              _0x1d0e5a === _0x55238f(0x154) && (_0x1d0e5a = _0x18a75d);
              if (_0x1d0e5a[_0x55238f(0x13d)]('#')) {
                let _0x145e7a = _0x1d0e5a['replace']('#', '');
                try {
                  let _0x3a42d4 = JSON[_0x55238f(0x137)](_0x145e7a);
                  if (
                    _0x3a42d4[_0x55238f(0x134)] &&
                    (0x0, lodash_1[_0x55238f(0x115)])(
                      _0x3a42d4[_0x55238f(0x14b)]
                    ) &&
                    (0x0, lodash_1[_0x55238f(0x115)])(_0x3a42d4['queueId'])
                  ) {
                    await _0x1a8111['update']({
                      useIntegration: ![],
                      isBot: ![]
                    });
                    return;
                  }
                  if (
                    !(0x0, lodash_1['isNil'])(_0x3a42d4['queueId']) &&
                    _0x3a42d4['queueId'] > 0x0 &&
                    (0x0, lodash_1[_0x55238f(0x115)])(
                      _0x3a42d4[_0x55238f(0x14b)]
                    )
                  ) {
                    await (0x0, UpdateTicketService_1[_0x55238f(0x139)])({
                      ticketData: {
                        queueId: _0x3a42d4[_0x55238f(0x13a)],
                        isBot: ![],
                        useIntegration: ![],
                        integrationId: null
                      },
                      ticketId: _0x1a8111['id'],
                      companyId: _0x1a8111[_0x55238f(0x11f)]
                    });
                    return;
                  }
                  if (
                    !(0x0, lodash_1[_0x55238f(0x115)])(
                      _0x3a42d4[_0x55238f(0x13a)]
                    ) &&
                    _0x3a42d4[_0x55238f(0x13a)] > 0x0 &&
                    !(0x0, lodash_1[_0x55238f(0x115)])(
                      _0x3a42d4[_0x55238f(0x14b)]
                    ) &&
                    _0x3a42d4[_0x55238f(0x14b)] > 0x0
                  ) {
                    await (0x0, UpdateTicketService_1['default'])({
                      ticketData: {
                        queueId: _0x3a42d4[_0x55238f(0x13a)],
                        userId: _0x3a42d4[_0x55238f(0x14b)],
                        isBot: ![],
                        useIntegration: ![],
                        integrationId: null
                      },
                      ticketId: _0x1a8111['id'],
                      companyId: _0x1a8111[_0x55238f(0x11f)]
                    });
                    return;
                  }
                } catch (_0x137e7f) {
                  throw _0x137e7f;
                }
              }
              await _0xde22b2[_0x55238f(0x12e)](
                _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)]
              ),
                await _0xde22b2[_0x55238f(0x142)](
                  _0x55238f(0x11d),
                  _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)]
                ),
                await (0x0, baileys_1['delay'])(_0x4f6661),
                await _0xde22b2[_0x55238f(0x142)](
                  _0x55238f(0x144),
                  _0xfabe67['key']['remoteJid']
                ),
                await _0xde22b2[_0x55238f(0x15d)](
                  _0xfabe67[_0x55238f(0x151)]['remoteJid'],
                  { text: _0x1d0e5a }
                );
            }
            if (_0x26ea2f[_0x55238f(0x149)] === _0x55238f(0x141)) {
              await _0xde22b2['presenceSubscribe'](
                _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)]
              ),
                await _0xde22b2[_0x55238f(0x142)](
                  _0x55238f(0x11d),
                  _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)]
                ),
                await (0x0, baileys_1[_0x55238f(0x11e)])(_0x4f6661),
                await _0xde22b2[_0x55238f(0x142)](
                  _0x55238f(0x144),
                  _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)]
                );
              const _0x8418b3 = {
                audio: {
                  url: _0x26ea2f[_0x55238f(0x131)][_0x55238f(0x159)],
                  mimetype: _0x55238f(0x116),
                  ptt: !![]
                }
              };
              await _0xde22b2[_0x55238f(0x15d)](
                _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)],
                _0x8418b3
              );
            }
            if (_0x26ea2f[_0x55238f(0x149)] === _0x55238f(0x127)) {
              await _0xde22b2[_0x55238f(0x12e)](_0xfabe67['key']['remoteJid']),
                await _0xde22b2[_0x55238f(0x142)](
                  'composing',
                  _0xfabe67['key'][_0x55238f(0x14a)]
                ),
                await (0x0, baileys_1[_0x55238f(0x11e)])(_0x4f6661),
                await _0xde22b2[_0x55238f(0x142)](
                  'paused',
                  _0xfabe67[_0x55238f(0x151)]['remoteJid']
                );
              const _0x28c3c1 = { image: { url: _0x26ea2f['content']['url'] } };
              await _0xde22b2[_0x55238f(0x15d)](
                _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)],
                _0x28c3c1
              );
            }
          }
          if (_0x1a9024) {
            if (_0x1a9024[_0x55238f(0x149)] === _0x55238f(0x14e)) {
              let _0x5e4dbd = '';
              const _0x2347b6 = _0x1a9024['items'];
              for (const _0x521f6d of _0x2347b6) {
                _0x5e4dbd +=
                  _0x55238f(0x13c) + _0x521f6d[_0x55238f(0x131)] + '\x0a';
              }
              (_0x5e4dbd = _0x5e4dbd[_0x55238f(0x124)](/\n$/, '')),
                await _0xde22b2['presenceSubscribe'](
                  _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)]
                ),
                await _0xde22b2[_0x55238f(0x142)](
                  'composing',
                  _0xfabe67[_0x55238f(0x151)]['remoteJid']
                ),
                await (0x0, baileys_1[_0x55238f(0x11e)])(_0x4f6661),
                await _0xde22b2[_0x55238f(0x142)](
                  _0x55238f(0x144),
                  _0xfabe67[_0x55238f(0x151)][_0x55238f(0x14a)]
                ),
                await _0xde22b2[_0x55238f(0x15d)](
                  _0xfabe67['key'][_0x55238f(0x14a)],
                  { text: _0x5e4dbd }
                );
            }
          }
        }
      }
      _0x2f6185 === _0x119f51 &&
        (await _0x1a8111['update']({ isBot: !![], typebotSessionId: null }),
        await _0x1a8111[_0x55238f(0x150)](),
        await _0xde22b2[_0x55238f(0x15d)](_0x1628d6 + _0x55238f(0x155), {
          text: _0x3920fd
        }));
      if (_0x2f6185 === _0x1239b8) {
        await (0x0, UpdateTicketService_1[_0x55238f(0x139)])({
          ticketData: {
            status: _0x55238f(0x152),
            useIntegration: ![],
            integrationId: null,
            sendFarewellMessage: !![]
          },
          ticketId: _0x1a8111['id'],
          companyId: _0x1a8111[_0x55238f(0x11f)]
        });
        return;
      }
    } catch (_0x42c9bd) {
      logger_1[_0x55238f(0x146)][_0x55238f(0x14d)](_0x55238f(0x121), _0x42c9bd),
        await _0x1a8111[_0x55238f(0x136)]({ typebotSessionId: null });
      throw _0x42c9bd;
    }
  };
exports[a632_0x1c9083(0x139)] = typebotListener;
