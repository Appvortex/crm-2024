'use strict';
function a437_0x19ae() {
  const _0x2fafc4 = [
    'destroy',
    '829770IORuaA',
    'update',
    'mainChatbot',
    'name',
    'reload',
    '5033tElfJL',
    '2319736QurPId',
    '162ggRPoR',
    'ASC',
    '1966260TUvHoh',
    '445Opavfg',
    'default',
    '10WMCiGM',
    'optUserId',
    'map',
    'optFileId',
    '3220evNACe',
    '__importDefault',
    'findIndex',
    '1194jFjrzP',
    '9eVkeYV',
    'upsert',
    'options',
    'asc',
    'optIntegrationId',
    'all',
    '__esModule',
    '../../models/Chatbot',
    'defineProperty',
    'optQueueId',
    'findOne',
    '6376931MJXGpy',
    'greetingMessage',
    'ERR_NO_CHATBOT_FOUND',
    '3198gNJgzQ'
  ];
  a437_0x19ae = function () {
    return _0x2fafc4;
  };
  return a437_0x19ae();
}
const a437_0x1ce760 = a437_0x5a6d;
(function (_0x134536, _0x1c4c5b) {
  const _0x4713a6 = a437_0x5a6d,
    _0x285593 = _0x134536();
  while (!![]) {
    try {
      const _0x5cb669 =
        parseInt(_0x4713a6(0x1d7)) / 0x1 +
        (-parseInt(_0x4713a6(0x1de)) / 0x2) *
          (-parseInt(_0x4713a6(0x1ea)) / 0x3) +
        (-parseInt(_0x4713a6(0x1e7)) / 0x4) *
          (parseInt(_0x4713a6(0x1e1)) / 0x5) +
        (-parseInt(_0x4713a6(0x1d5)) / 0x6) *
          (parseInt(_0x4713a6(0x1dc)) / 0x7) +
        (parseInt(_0x4713a6(0x1dd)) / 0x8) *
          (-parseInt(_0x4713a6(0x1eb)) / 0x9) +
        (-parseInt(_0x4713a6(0x1e3)) / 0xa) *
          (-parseInt(_0x4713a6(0x1d2)) / 0xb) +
        -parseInt(_0x4713a6(0x1e0)) / 0xc;
      if (_0x5cb669 === _0x1c4c5b) break;
      else _0x285593['push'](_0x285593['shift']());
    } catch (_0x12bc79) {
      _0x285593['push'](_0x285593['shift']());
    }
  }
})(a437_0x19ae, 0x8222b);
function a437_0x5a6d(_0x39eaa9, _0x4f71c4) {
  const _0x19aeb4 = a437_0x19ae();
  return (
    (a437_0x5a6d = function (_0x5a6d71, _0x3fd9ce) {
      _0x5a6d71 = _0x5a6d71 - 0x1d1;
      let _0x35322d = _0x19aeb4[_0x5a6d71];
      return _0x35322d;
    }),
    a437_0x5a6d(_0x39eaa9, _0x4f71c4)
  );
}
var __importDefault =
  (this && this[a437_0x1ce760(0x1e8)]) ||
  function (_0x22961f) {
    return _0x22961f && _0x22961f['__esModule']
      ? _0x22961f
      : { default: _0x22961f };
  };
Object[a437_0x1ce760(0x1f3)](exports, a437_0x1ce760(0x1f1), { value: !![] });
const AppError_1 = __importDefault(require('../../errors/AppError')),
  Chatbot_1 = __importDefault(require(a437_0x1ce760(0x1f2))),
  UpdateChatBotServices = async (_0x3f4ab9, _0x2f91f6) => {
    const _0x1139a8 = a437_0x1ce760,
      { options: _0x435fb1 } = _0x2f91f6,
      _0x2ce612 = await Chatbot_1[_0x1139a8(0x1e2)][_0x1139a8(0x1d1)]({
        where: { id: _0x3f4ab9 },
        include: [_0x1139a8(0x1ed)],
        order: [['id', _0x1139a8(0x1ee)]]
      });
    if (!_0x2ce612)
      throw new AppError_1[_0x1139a8(0x1e2)](_0x1139a8(0x1d4), 0x194);
    return (
      _0x435fb1 &&
        (await Promise[_0x1139a8(0x1f0)](
          _0x435fb1[_0x1139a8(0x1e5)](async _0x368789 => {
            const _0x3cde86 = _0x1139a8;
            await Chatbot_1['default'][_0x3cde86(0x1ec)]({
              ..._0x368789,
              chatbotId: _0x2ce612['id']
            });
          })
        ),
        await Promise[_0x1139a8(0x1f0)](
          _0x2ce612[_0x1139a8(0x1ed)][_0x1139a8(0x1e5)](async _0x37af86 => {
            const _0x21eb92 = _0x1139a8,
              _0x26a947 = _0x435fb1[_0x21eb92(0x1e9)](
                _0x572bf0 => _0x572bf0['id'] === _0x37af86['id']
              );
            _0x26a947 === -0x1 &&
              (await Chatbot_1['default'][_0x21eb92(0x1d6)]({
                where: { id: _0x37af86['id'] }
              }));
          })
        )),
      await _0x2ce612[_0x1139a8(0x1d8)](_0x2f91f6),
      await _0x2ce612[_0x1139a8(0x1db)]({
        include: [
          {
            model: Chatbot_1[_0x1139a8(0x1e2)],
            as: _0x1139a8(0x1d9),
            attributes: [
              'id',
              'name',
              _0x1139a8(0x1d3),
              'queueType',
              _0x1139a8(0x1ef),
              'optQueueId',
              _0x1139a8(0x1e4),
              _0x1139a8(0x1e6)
            ],
            order: [
              [
                { model: Chatbot_1['default'], as: 'mainChatbot' },
                'id',
                _0x1139a8(0x1df)
              ]
            ]
          },
          {
            model: Chatbot_1[_0x1139a8(0x1e2)],
            as: _0x1139a8(0x1ed),
            order: [
              [
                { model: Chatbot_1[_0x1139a8(0x1e2)], as: _0x1139a8(0x1ed) },
                'id',
                _0x1139a8(0x1df)
              ]
            ],
            attributes: [
              'id',
              _0x1139a8(0x1da),
              _0x1139a8(0x1d3),
              'queueType',
              'optIntegrationId',
              _0x1139a8(0x1f4),
              _0x1139a8(0x1e4),
              'optFileId'
            ]
          }
        ],
        order: [['id', _0x1139a8(0x1ee)]]
      }),
      _0x2ce612
    );
  };
exports['default'] = UpdateChatBotServices;
