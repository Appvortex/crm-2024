'use strict';
function a666_0x4dd8() {
  const _0x4ba446 = [
    '115gtbqcl',
    'queues',
    'defineProperty',
    'session',
    '__esModule',
    'default',
    '42528FDUSZq',
    '560xYWOIX',
    'color',
    '../../models/Prompt',
    '9oSOKCn',
    'findAll',
    '2969712QbqdXu',
    '576144zgjfJq',
    'prompt',
    '395074JKvuvR',
    '38768Hisftk',
    '747676aJUWNn',
    'name',
    '6524000zrZIxZ',
    'attributes',
    '__importDefault'
  ];
  a666_0x4dd8 = function () {
    return _0x4ba446;
  };
  return a666_0x4dd8();
}
const a666_0x1e410a = a666_0x288f;
(function (_0x277028, _0x359746) {
  const _0x5bc25f = a666_0x288f,
    _0x13157f = _0x277028();
  while (!![]) {
    try {
      const _0x1c7326 =
        -parseInt(_0x5bc25f(0x197)) / 0x1 +
        (-parseInt(_0x5bc25f(0x195)) / 0x2) *
          (parseInt(_0x5bc25f(0x190)) / 0x3) +
        (-parseInt(_0x5bc25f(0x196)) / 0x4) *
          (-parseInt(_0x5bc25f(0x19c)) / 0x5) +
        (-parseInt(_0x5bc25f(0x1a2)) / 0x6) *
          (-parseInt(_0x5bc25f(0x18d)) / 0x7) +
        parseInt(_0x5bc25f(0x193)) / 0x8 +
        parseInt(_0x5bc25f(0x192)) / 0x9 +
        parseInt(_0x5bc25f(0x199)) / 0xa;
      if (_0x1c7326 === _0x359746) break;
      else _0x13157f['push'](_0x13157f['shift']());
    } catch (_0x116704) {
      _0x13157f['push'](_0x13157f['shift']());
    }
  }
})(a666_0x4dd8, 0x7b0f7);
function a666_0x288f(_0x3dcbff, _0x85c8ca) {
  const _0x4dd8e5 = a666_0x4dd8();
  return (
    (a666_0x288f = function (_0x288f55, _0x281341) {
      _0x288f55 = _0x288f55 - 0x18d;
      let _0x497968 = _0x4dd8e5[_0x288f55];
      return _0x497968;
    }),
    a666_0x288f(_0x3dcbff, _0x85c8ca)
  );
}
var __importDefault =
  (this && this[a666_0x1e410a(0x19b)]) ||
  function (_0x490e26) {
    const _0x3df93a = a666_0x1e410a;
    return _0x490e26 && _0x490e26[_0x3df93a(0x1a0)]
      ? _0x490e26
      : { default: _0x490e26 };
  };
Object[a666_0x1e410a(0x19e)](exports, a666_0x1e410a(0x1a0), { value: !![] });
const Queue_1 = __importDefault(require('../../models/Queue')),
  Whatsapp_1 = __importDefault(require('../../models/Whatsapp')),
  Prompt_1 = __importDefault(require(a666_0x1e410a(0x18f))),
  ListWhatsAppsService = async ({
    session: _0x16a497,
    companyId: _0x5472ce
  }) => {
    const _0x154b4d = a666_0x1e410a,
      _0x1814f4 = {
        where: { companyId: _0x5472ce },
        include: [
          {
            model: Queue_1[_0x154b4d(0x1a1)],
            as: _0x154b4d(0x19d),
            attributes: [
              'id',
              _0x154b4d(0x198),
              _0x154b4d(0x18e),
              'greetingMessage'
            ]
          },
          { model: Prompt_1[_0x154b4d(0x1a1)], as: _0x154b4d(0x194) }
        ]
      };
    _0x16a497 !== undefined &&
      _0x16a497 == 0x0 &&
      (_0x1814f4[_0x154b4d(0x19a)] = { exclude: [_0x154b4d(0x19f)] });
    const _0x413369 = await Whatsapp_1['default'][_0x154b4d(0x191)](_0x1814f4);
    return _0x413369;
  };
exports['default'] = ListWhatsAppsService;
