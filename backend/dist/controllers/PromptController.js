'use strict';
const a25_0x273c48 = a25_0x58d9;
(function (_0x665be7, _0x4e7149) {
  const _0x3929de = a25_0x58d9,
    _0x4d5541 = _0x665be7();
  while (!![]) {
    try {
      const _0x4d941a =
        (-parseInt(_0x3929de(0xb7)) / 0x1) *
          (-parseInt(_0x3929de(0xd3)) / 0x2) +
        -parseInt(_0x3929de(0xd8)) / 0x3 +
        (-parseInt(_0x3929de(0xc3)) / 0x4) *
          (-parseInt(_0x3929de(0xd5)) / 0x5) +
        (-parseInt(_0x3929de(0xc9)) / 0x6) * (parseInt(_0x3929de(0xd0)) / 0x7) +
        -parseInt(_0x3929de(0xd7)) / 0x8 +
        (-parseInt(_0x3929de(0xb0)) / 0x9) *
          (-parseInt(_0x3929de(0xc4)) / 0xa) +
        (-parseInt(_0x3929de(0xc1)) / 0xb) * (-parseInt(_0x3929de(0xbc)) / 0xc);
      if (_0x4d941a === _0x4e7149) break;
      else _0x4d5541['push'](_0x4d5541['shift']());
    } catch (_0x34a1a5) {
      _0x4d5541['push'](_0x4d5541['shift']());
    }
  }
})(a25_0x264a, 0xd87c2);
var __importDefault =
  (this && this[a25_0x273c48(0xc7)]) ||
  function (_0xadb554) {
    const _0x251445 = a25_0x273c48;
    return _0xadb554 && _0xadb554[_0x251445(0xd2)]
      ? _0xadb554
      : { default: _0xadb554 };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] }),
  (exports[a25_0x273c48(0xba)] =
    exports[a25_0x273c48(0xca)] =
    exports['show'] =
    exports['store'] =
    exports[a25_0x273c48(0xc6)] =
      void 0x0);
const socket_1 = require(a25_0x273c48(0xb3)),
  CreatePromptService_1 = __importDefault(require(a25_0x273c48(0xbf))),
  DeletePromptService_1 = __importDefault(
    require('../services/PromptServices/DeletePromptService')
  ),
  ListPromptsService_1 = __importDefault(
    require('../services/PromptServices/ListPromptsService')
  ),
  ShowPromptService_1 = __importDefault(
    require('../services/PromptServices/ShowPromptService')
  ),
  UpdatePromptService_1 = __importDefault(require(a25_0x273c48(0xaf))),
  Whatsapp_1 = __importDefault(require(a25_0x273c48(0xce))),
  jsonwebtoken_1 = require('jsonwebtoken'),
  auth_1 = __importDefault(require(a25_0x273c48(0xc0))),
  index = async (_0x68fb39, _0x5ecf3f) => {
    const _0x5e0852 = a25_0x273c48,
      { pageNumber: _0x10183c, searchParam: _0x438099 } =
        _0x68fb39[_0x5e0852(0xb4)],
      _0x2be526 = _0x68fb39[_0x5e0852(0xcf)]['authorization'],
      [, _0x49df6a] = _0x2be526[_0x5e0852(0xcd)]('\x20'),
      _0x3967fa = (0x0, jsonwebtoken_1[_0x5e0852(0xb5)])(
        _0x49df6a,
        auth_1['default'][_0x5e0852(0xb1)]
      ),
      { companyId: _0x43dc16 } = _0x3967fa,
      {
        prompts: _0x4e68a6,
        count: _0x3ca87e,
        hasMore: _0x17c291
      } = await (0x0, ListPromptsService_1['default'])({
        searchParam: _0x438099,
        pageNumber: _0x10183c,
        companyId: _0x43dc16
      });
    return _0x5ecf3f['status'](0xc8)['json']({
      prompts: _0x4e68a6,
      count: _0x3ca87e,
      hasMore: _0x17c291
    });
  };
exports[a25_0x273c48(0xc6)] = index;
const store = async (_0x412805, _0x5b3991) => {
  const _0x22a931 = a25_0x273c48,
    _0x364008 = _0x412805[_0x22a931(0xcf)][_0x22a931(0xbd)],
    [, _0x3f6e34] = _0x364008['split']('\x20'),
    _0x19f5c0 = (0x0, jsonwebtoken_1[_0x22a931(0xb5)])(
      _0x3f6e34,
      auth_1['default'][_0x22a931(0xb1)]
    ),
    { companyId: _0x3a5fad } = _0x19f5c0,
    {
      name: _0x2dbfab,
      apiKey: _0x20584a,
      prompt: _0xadfb79,
      maxTokens: _0x1d1044,
      temperature: _0x191867,
      promptTokens: _0x321cc6,
      completionTokens: _0xce2423,
      totalTokens: _0x1a1cc7,
      queueId: _0x48f761,
      maxMessages: _0x5e4b6a,
      voice: _0x56b36d,
      voiceKey: _0x8a81ea,
      voiceRegion: _0xee6c63
    } = _0x412805[_0x22a931(0xbe)],
    _0x29db63 = await (0x0, CreatePromptService_1['default'])({
      name: _0x2dbfab,
      apiKey: _0x20584a,
      prompt: _0xadfb79,
      maxTokens: _0x1d1044,
      temperature: _0x191867,
      promptTokens: _0x321cc6,
      completionTokens: _0xce2423,
      totalTokens: _0x1a1cc7,
      queueId: _0x48f761,
      maxMessages: _0x5e4b6a,
      companyId: _0x3a5fad,
      voice: _0x56b36d,
      voiceKey: _0x8a81ea,
      voiceRegion: _0xee6c63
    }),
    _0x10983f = (0x0, socket_1[_0x22a931(0xb6)])();
  return (
    _0x10983f[_0x22a931(0xb2)](_0x22a931(0xcb) + _0x3a5fad + '-prompt', {
      action: 'update',
      prompt: _0x29db63
    }),
    _0x5b3991['status'](0xc8)['json'](_0x29db63)
  );
};
exports[a25_0x273c48(0xc5)] = store;
function a25_0x58d9(_0x4c6831, _0x58412f) {
  const _0x264af9 = a25_0x264a();
  return (
    (a25_0x58d9 = function (_0x58d9d1, _0x27ad2a) {
      _0x58d9d1 = _0x58d9d1 - 0xaf;
      let _0x5020cd = _0x264af9[_0x58d9d1];
      return _0x5020cd;
    }),
    a25_0x58d9(_0x4c6831, _0x58412f)
  );
}
const show = async (_0x13bc76, _0x3334e0) => {
  const _0x1bbb5b = a25_0x273c48,
    { promptId: _0x97fb99 } = _0x13bc76[_0x1bbb5b(0xd1)],
    _0xfc6143 = _0x13bc76[_0x1bbb5b(0xcf)][_0x1bbb5b(0xbd)],
    [, _0x269e18] = _0xfc6143['split']('\x20'),
    _0x10c358 = (0x0, jsonwebtoken_1[_0x1bbb5b(0xb5)])(
      _0x269e18,
      auth_1[_0x1bbb5b(0xcc)]['secret']
    ),
    { companyId: _0x446558 } = _0x10c358,
    _0x58d7cc = await (0x0, ShowPromptService_1[_0x1bbb5b(0xcc)])({
      promptId: _0x97fb99,
      companyId: _0x446558
    });
  return _0x3334e0['status'](0xc8)['json'](_0x58d7cc);
};
exports['show'] = show;
function a25_0x264a() {
  const _0x57c47b = [
    'query',
    'verify',
    'getIO',
    '1351478OqyMlj',
    'Prompt\x20deleted',
    'json',
    'remove',
    'status',
    '36qaVwjT',
    'authorization',
    'body',
    '../services/PromptServices/CreatePromptService',
    '../config/auth',
    '1034561SSrFgN',
    'findAndCountAll',
    '1329368OrGnPL',
    '133060EAbTFJ',
    'store',
    'index',
    '__importDefault',
    '-prompt',
    '84nNKxsR',
    'update',
    'company-',
    'default',
    'split',
    '../models/Whatsapp',
    'headers',
    '65632jvUvbA',
    'params',
    '__esModule',
    '2MkkVBV',
    'Não\x20foi\x20possível\x20excluir!\x20Verifique\x20se\x20este\x20prompt\x20está\x20sendo\x20usado!',
    '15EEWwde',
    'Não\x20foi\x20possível\x20excluir!\x20Verifique\x20se\x20este\x20prompt\x20está\x20sendo\x20usado\x20nas\x20conexões\x20Whatsapp!',
    '13596552CDnZNp',
    '1974714joUVKz',
    '../services/PromptServices/UpdatePromptService',
    '504HSAsCo',
    'secret',
    'emit',
    '../libs/socket'
  ];
  a25_0x264a = function () {
    return _0x57c47b;
  };
  return a25_0x264a();
}
const update = async (_0x2a519e, _0xcd3a0c) => {
  const _0x1782b0 = a25_0x273c48,
    { promptId: _0x45f549 } = _0x2a519e[_0x1782b0(0xd1)],
    _0x7d4231 = _0x2a519e['body'],
    _0x43a1c1 = _0x2a519e['headers'][_0x1782b0(0xbd)],
    [, _0x52d174] = _0x43a1c1[_0x1782b0(0xcd)]('\x20'),
    _0x28a534 = (0x0, jsonwebtoken_1[_0x1782b0(0xb5)])(
      _0x52d174,
      auth_1[_0x1782b0(0xcc)][_0x1782b0(0xb1)]
    ),
    { companyId: _0x4395f8 } = _0x28a534,
    _0x32e5e4 = await (0x0, UpdatePromptService_1[_0x1782b0(0xcc)])({
      promptData: _0x7d4231,
      promptId: _0x45f549,
      companyId: _0x4395f8
    }),
    _0x50ed89 = (0x0, socket_1['getIO'])();
  return (
    _0x50ed89['emit'](_0x1782b0(0xcb) + _0x4395f8 + _0x1782b0(0xc8), {
      action: 'update',
      prompt: _0x32e5e4
    }),
    _0xcd3a0c[_0x1782b0(0xbb)](0xc8)[_0x1782b0(0xb9)](_0x32e5e4)
  );
};
exports['update'] = update;
const remove = async (_0x2febfc, _0x1857c9) => {
  const _0x19ddec = a25_0x273c48,
    { promptId: _0x52a081 } = _0x2febfc['params'],
    _0x5353a1 = _0x2febfc[_0x19ddec(0xcf)][_0x19ddec(0xbd)],
    [, _0x592723] = _0x5353a1[_0x19ddec(0xcd)]('\x20'),
    _0x1e1ee0 = (0x0, jsonwebtoken_1['verify'])(
      _0x592723,
      auth_1['default'][_0x19ddec(0xb1)]
    ),
    { companyId: _0x2569b5 } = _0x1e1ee0;
  try {
    const { count: _0x3cb0ad } = await Whatsapp_1[_0x19ddec(0xcc)][
      _0x19ddec(0xc2)
    ]({ where: { promptId: +_0x52a081, companyId: _0x2569b5 } });
    if (_0x3cb0ad > 0x0)
      return _0x1857c9[_0x19ddec(0xbb)](0xc8)['json']({
        message: _0x19ddec(0xd6)
      });
    await (0x0, DeletePromptService_1[_0x19ddec(0xcc)])(_0x52a081, _0x2569b5);
    const _0x49f11e = (0x0, socket_1['getIO'])();
    return (
      _0x49f11e[_0x19ddec(0xb2)](_0x19ddec(0xcb) + _0x2569b5 + '-prompt', {
        action: 'delete',
        intelligenceId: +_0x52a081
      }),
      _0x1857c9['status'](0xc8)[_0x19ddec(0xb9)]({ message: _0x19ddec(0xb8) })
    );
  } catch (_0x4c77d8) {
    return _0x1857c9[_0x19ddec(0xbb)](0x1f4)['json']({
      message: _0x19ddec(0xd4)
    });
  }
};
exports[a25_0x273c48(0xba)] = remove;
