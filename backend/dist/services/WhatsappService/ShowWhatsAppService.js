'use strict';
const a667_0x2eee60 = a667_0x3c12;
(function (_0x5b2da5, _0x44a62a) {
  const _0x384ab0 = a667_0x3c12,
    _0x3435d6 = _0x5b2da5();
  while (!![]) {
    try {
      const _0x40a9f0 =
        parseInt(_0x384ab0(0x136)) / 0x1 +
        (-parseInt(_0x384ab0(0x121)) / 0x2) *
          (parseInt(_0x384ab0(0x117)) / 0x3) +
        -parseInt(_0x384ab0(0x12f)) / 0x4 +
        (-parseInt(_0x384ab0(0x132)) / 0x5) *
          (-parseInt(_0x384ab0(0x116)) / 0x6) +
        (-parseInt(_0x384ab0(0x133)) / 0x7) *
          (parseInt(_0x384ab0(0x134)) / 0x8) +
        (parseInt(_0x384ab0(0x124)) / 0x9) *
          (parseInt(_0x384ab0(0x11b)) / 0xa) +
        (-parseInt(_0x384ab0(0x113)) / 0xb) *
          (-parseInt(_0x384ab0(0x118)) / 0xc);
      if (_0x40a9f0 === _0x44a62a) break;
      else _0x3435d6['push'](_0x3435d6['shift']());
    } catch (_0x3029e2) {
      _0x3435d6['push'](_0x3435d6['shift']());
    }
  }
})(a667_0x4998, 0xa5f2f);
function a667_0x3c12(_0x56eab4, _0x5d5304) {
  const _0x4998ac = a667_0x4998();
  return (
    (a667_0x3c12 = function (_0x3c123a, _0x260809) {
      _0x3c123a = _0x3c123a - 0x113;
      let _0x107c47 = _0x4998ac[_0x3c123a];
      return _0x107c47;
    }),
    a667_0x3c12(_0x56eab4, _0x5d5304)
  );
}
var __importDefault =
  (this && this[a667_0x2eee60(0x131)]) ||
  function (_0x1ce786) {
    const _0x1d3a3d = a667_0x2eee60;
    return _0x1ce786 && _0x1ce786[_0x1d3a3d(0x126)]
      ? _0x1ce786
      : { default: _0x1ce786 };
  };
Object[a667_0x2eee60(0x122)](exports, a667_0x2eee60(0x126), { value: !![] });
function a667_0x4998() {
  const _0x2eed3b = [
    '__esModule',
    'closeTicket',
    'name',
    'chatbots',
    'prompt',
    'companyId',
    'orderQueue',
    '../../errors/AppError',
    'integrationId',
    '3195984IClvny',
    'greetingMessage',
    '__importDefault',
    '30ykKyeW',
    '2881963pKDzJD',
    '8UAgiTG',
    '../../models/Queue',
    '116453OORbJV',
    '11kKpikv',
    'findByPk',
    'queues',
    '887118MTtZco',
    '1075116hWftzC',
    '16701852lPesuA',
    '../../models/Prompt',
    'ERR_NO_WAPP_FOUND',
    '920aIyxWC',
    'default',
    'fileListId',
    'Não\x20é\x20possível\x20acessar\x20registros\x20de\x20outra\x20empresa',
    'ASC',
    '../../models/Chatbot',
    '4ZciEGi',
    'defineProperty',
    'session',
    '20718nFFoZH',
    'color'
  ];
  a667_0x4998 = function () {
    return _0x2eed3b;
  };
  return a667_0x4998();
}
const Whatsapp_1 = __importDefault(require('../../models/Whatsapp')),
  AppError_1 = __importDefault(require(a667_0x2eee60(0x12d))),
  Queue_1 = __importDefault(require(a667_0x2eee60(0x135))),
  Chatbot_1 = __importDefault(require(a667_0x2eee60(0x120))),
  Prompt_1 = __importDefault(require(a667_0x2eee60(0x119))),
  ShowWhatsAppService = async (_0x3b243d, _0x468498, _0x2f1074) => {
    const _0x5a48f8 = a667_0x2eee60,
      _0x334ce5 = {
        include: [
          {
            model: Queue_1[_0x5a48f8(0x11c)],
            as: _0x5a48f8(0x115),
            attributes: [
              'id',
              _0x5a48f8(0x128),
              _0x5a48f8(0x125),
              _0x5a48f8(0x130),
              _0x5a48f8(0x12e),
              _0x5a48f8(0x11d),
              _0x5a48f8(0x127)
            ],
            include: [
              {
                model: Chatbot_1[_0x5a48f8(0x11c)],
                as: _0x5a48f8(0x129),
                attributes: [
                  'id',
                  _0x5a48f8(0x128),
                  'greetingMessage',
                  _0x5a48f8(0x127)
                ]
              }
            ]
          },
          { model: Prompt_1[_0x5a48f8(0x11c)], as: _0x5a48f8(0x12a) }
        ],
        order: [
          [_0x5a48f8(0x115), _0x5a48f8(0x12c), _0x5a48f8(0x11f)],
          [_0x5a48f8(0x115), _0x5a48f8(0x129), 'id', _0x5a48f8(0x11f)]
        ]
      };
    _0x2f1074 !== undefined &&
      _0x2f1074 == 0x0 &&
      (_0x334ce5['attributes'] = { exclude: [_0x5a48f8(0x123)] });
    const _0x47a8c6 = await Whatsapp_1[_0x5a48f8(0x11c)][_0x5a48f8(0x114)](
      _0x3b243d,
      _0x334ce5
    );
    if (_0x47a8c6?.[_0x5a48f8(0x12b)] !== _0x468498)
      throw new AppError_1[_0x5a48f8(0x11c)](_0x5a48f8(0x11e));
    if (!_0x47a8c6) throw new AppError_1['default'](_0x5a48f8(0x11a), 0x194);
    return _0x47a8c6;
  };
exports[a667_0x2eee60(0x11c)] = ShowWhatsAppService;
