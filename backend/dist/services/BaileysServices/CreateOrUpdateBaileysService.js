'use strict';
const a417_0x185717 = a417_0x9c09;
function a417_0x583a() {
  const _0x35ac36 = [
    'contacts',
    '__esModule',
    'parse',
    'default',
    '__importDefault',
    '2796647hggUda',
    'create',
    '../../models/Baileys',
    '2986164ljQNaY',
    'push',
    'findIndex',
    '3393080UiqPIW',
    '776131NQvnRl',
    'chats',
    '23384EHbNra',
    'defineProperty',
    '162MTYfUJ',
    'log',
    'filter',
    'stringify',
    '6548wUFZYb',
    'sort',
    '2641230xIyTyL',
    '2853obPdrh'
  ];
  a417_0x583a = function () {
    return _0x35ac36;
  };
  return a417_0x583a();
}
function a417_0x9c09(_0xb219c0, _0x26a9aa) {
  const _0x583a97 = a417_0x583a();
  return (
    (a417_0x9c09 = function (_0x9c0962, _0x2875f1) {
      _0x9c0962 = _0x9c0962 - 0x19e;
      let _0xa9f575 = _0x583a97[_0x9c0962];
      return _0xa9f575;
    }),
    a417_0x9c09(_0xb219c0, _0x26a9aa)
  );
}
(function (_0x375a76, _0x4ef483) {
  const _0x23a0f6 = a417_0x9c09,
    _0x3a886a = _0x375a76();
  while (!![]) {
    try {
      const _0xe0967e =
        -parseInt(_0x23a0f6(0x1ad)) / 0x1 +
        (-parseInt(_0x23a0f6(0x1b5)) / 0x2) *
          (parseInt(_0x23a0f6(0x1b1)) / 0x3) +
        -parseInt(_0x23a0f6(0x1ac)) / 0x4 +
        parseInt(_0x23a0f6(0x19f)) / 0x5 +
        parseInt(_0x23a0f6(0x1a9)) / 0x6 +
        parseInt(_0x23a0f6(0x1a6)) / 0x7 +
        (-parseInt(_0x23a0f6(0x1af)) / 0x8) *
          (-parseInt(_0x23a0f6(0x1a0)) / 0x9);
      if (_0xe0967e === _0x4ef483) break;
      else _0x3a886a['push'](_0x3a886a['shift']());
    } catch (_0x1b02fe) {
      _0x3a886a['push'](_0x3a886a['shift']());
    }
  }
})(a417_0x583a, 0x867c7);
var __importDefault =
  (this && this[a417_0x185717(0x1a5)]) ||
  function (_0x3b9c5a) {
    const _0x1790cf = a417_0x185717;
    return _0x3b9c5a && _0x3b9c5a[_0x1790cf(0x1a2)]
      ? _0x3b9c5a
      : { default: _0x3b9c5a };
  };
Object[a417_0x185717(0x1b0)](exports, a417_0x185717(0x1a2), { value: !![] });
const Baileys_1 = __importDefault(require(a417_0x185717(0x1a8))),
  createOrUpdateBaileysService = async ({
    whatsappId: _0x293859,
    contacts: _0x5254e4,
    chats: _0x54af35
  }) => {
    const _0x3faad5 = a417_0x185717;
    try {
      const _0x25b11e = await Baileys_1['default']['findOne']({
        where: { whatsappId: _0x293859 }
      });
      if (_0x25b11e) {
        const _0x1f1bf0 = _0x25b11e[_0x3faad5(0x1ae)]
            ? JSON[_0x3faad5(0x1a3)](_0x25b11e['chats'])
            : [],
          _0x507c6c = _0x25b11e[_0x3faad5(0x1a1)]
            ? JSON[_0x3faad5(0x1a3)](_0x25b11e[_0x3faad5(0x1a1)])
            : [];
        if (_0x54af35) {
          _0x1f1bf0[_0x3faad5(0x1aa)](..._0x54af35), _0x1f1bf0['sort']();
          const _0x24aaa9 = _0x1f1bf0[_0x3faad5(0x1b3)](
            (_0x2887da, _0x266ef2, _0x1cd8f1) =>
              _0x1cd8f1[_0x3faad5(0x1ab)](
                _0x37bff0 => _0x37bff0['id'] === _0x2887da['id']
              ) === _0x266ef2
          );
          return await _0x25b11e['update']({
            chats: JSON[_0x3faad5(0x1b4)](_0x24aaa9)
          });
        }
        if (_0x5254e4) {
          _0x507c6c['push'](..._0x5254e4), _0x507c6c[_0x3faad5(0x19e)]();
          const _0xa6b4e6 = _0x507c6c[_0x3faad5(0x1b3)](
            (_0x46bf5e, _0x1c5729, _0xc9749) =>
              _0xc9749[_0x3faad5(0x1ab)](
                _0x58f137 => _0x58f137['id'] === _0x46bf5e['id']
              ) === _0x1c5729
          );
          return await _0x25b11e['update']({
            contacts: JSON[_0x3faad5(0x1b4)](_0xa6b4e6)
          });
        }
      }
      const _0x261815 = await Baileys_1[_0x3faad5(0x1a4)][_0x3faad5(0x1a7)]({
        whatsappId: _0x293859,
        contacts: JSON[_0x3faad5(0x1b4)](_0x5254e4),
        chats: JSON[_0x3faad5(0x1b4)](_0x54af35)
      });
      return (
        await new Promise(_0x31049b => setTimeout(_0x31049b, 0x3e8)), _0x261815
      );
    } catch (_0x1c8fef) {
      console[_0x3faad5(0x1b2)](_0x1c8fef, _0x293859, _0x5254e4);
      throw new Error(_0x1c8fef);
    }
  };
exports[a417_0x185717(0x1a4)] = createOrUpdateBaileysService;
