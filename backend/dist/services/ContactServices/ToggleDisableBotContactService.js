'use strict';
const a491_0x2d3327 = a491_0x5c25;
(function (_0x564afa, _0x10a58c) {
  const _0x5e9850 = a491_0x5c25,
    _0x2a52df = _0x564afa();
  while (!![]) {
    try {
      const _0x2ed53f =
        (parseInt(_0x5e9850(0x13c)) / 0x1) *
          (parseInt(_0x5e9850(0x13f)) / 0x2) +
        (parseInt(_0x5e9850(0x146)) / 0x3) *
          (parseInt(_0x5e9850(0x147)) / 0x4) +
        (parseInt(_0x5e9850(0x132)) / 0x5) *
          (-parseInt(_0x5e9850(0x148)) / 0x6) +
        parseInt(_0x5e9850(0x14b)) / 0x7 +
        (parseInt(_0x5e9850(0x138)) / 0x8) *
          (parseInt(_0x5e9850(0x145)) / 0x9) +
        parseInt(_0x5e9850(0x13e)) / 0xa +
        (parseInt(_0x5e9850(0x13b)) / 0xb) *
          (-parseInt(_0x5e9850(0x14c)) / 0xc);
      if (_0x2ed53f === _0x10a58c) break;
      else _0x2a52df['push'](_0x2a52df['shift']());
    } catch (_0x3ae8a6) {
      _0x2a52df['push'](_0x2a52df['shift']());
    }
  }
})(a491_0xccbb, 0x212cf);
function a491_0xccbb() {
  const _0x6837ab = [
    '66RyDJVq',
    '20744VsYVTl',
    '42rALAut',
    'defineProperty',
    'default',
    '1237026OVEyKm',
    '51672VvrrMe',
    'urlPicture',
    'disableBot',
    '162845aazNKI',
    'profilePicUrl',
    'reload',
    'companyId',
    'findOne',
    'extraInfo',
    '32dbsncr',
    'name',
    'email',
    '770qTWgEk',
    '12511EGXHyE',
    'acceptAudioMessage',
    '1239240uxxVUt',
    '40JaRUlB',
    'number',
    'update',
    '__esModule',
    '../../models/Contact',
    '../../errors/AppError',
    '756AkVUPg'
  ];
  a491_0xccbb = function () {
    return _0x6837ab;
  };
  return a491_0xccbb();
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x2c51e3) {
    const _0x2d4b6d = a491_0x5c25;
    return _0x2c51e3 && _0x2c51e3[_0x2d4b6d(0x142)]
      ? _0x2c51e3
      : { default: _0x2c51e3 };
  };
Object[a491_0x2d3327(0x149)](exports, a491_0x2d3327(0x142), { value: !![] });
function a491_0x5c25(_0x221244, _0xb25209) {
  const _0xccbbeb = a491_0xccbb();
  return (
    (a491_0x5c25 = function (_0x5c25ca, _0x1111ab) {
      _0x5c25ca = _0x5c25ca - 0x132;
      let _0x592a89 = _0xccbbeb[_0x5c25ca];
      return _0x592a89;
    }),
    a491_0x5c25(_0x221244, _0xb25209)
  );
}
const AppError_1 = __importDefault(require(a491_0x2d3327(0x144))),
  Contact_1 = __importDefault(require(a491_0x2d3327(0x143))),
  ToggleDisableBotContactService = async ({ contactId: _0x5b2888 }) => {
    const _0x37921b = a491_0x2d3327,
      _0x3702c0 = await Contact_1['default'][_0x37921b(0x136)]({
        where: { id: _0x5b2888 },
        attributes: ['id', _0x37921b(0x14e)]
      });
    if (!_0x3702c0)
      throw new AppError_1[_0x37921b(0x14a)]('ERR_NO_CONTACT_FOUND', 0x194);
    const _0x4c6b1e = _0x3702c0?.['disableBot'] ? ![] : !![];
    return (
      await _0x3702c0[_0x37921b(0x141)]({ disableBot: _0x4c6b1e }),
      await _0x3702c0[_0x37921b(0x134)]({
        attributes: [
          'id',
          _0x37921b(0x139),
          _0x37921b(0x140),
          _0x37921b(0x13a),
          _0x37921b(0x133),
          _0x37921b(0x135),
          _0x37921b(0x13d),
          _0x37921b(0x14e),
          _0x37921b(0x14d)
        ],
        include: [_0x37921b(0x137)]
      }),
      _0x3702c0
    );
  };
exports[a491_0x2d3327(0x14a)] = ToggleDisableBotContactService;
