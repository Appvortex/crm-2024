'use strict';
function a493_0x59b2() {
  const _0x78d288 = [
    '__esModule',
    '2019356sMMJCc',
    'destroy',
    'wallets',
    '2316740JHOtFM',
    'email',
    'urlPicture',
    'findOne',
    'push',
    '1939626FGrlbQ',
    '981972wMCoHz',
    '471538BGmdIe',
    '44YsvpLk',
    'ERR_NO_CONTACT_FOUND',
    '../../errors/AppError',
    'default',
    'profilePicUrl',
    'companyId',
    '3fVXBIW',
    '26106kfHaDm',
    'tags',
    'bulkCreate',
    'forEach',
    '../../models/ContactWallet',
    '145691emZWFk',
    'defineProperty',
    '64vdiOfA',
    'name',
    '10nGqdiF',
    'extraInfo'
  ];
  a493_0x59b2 = function () {
    return _0x78d288;
  };
  return a493_0x59b2();
}
const a493_0x476e8d = a493_0x423f;
(function (_0x4c6ae4, _0x146c06) {
  const _0x20b573 = a493_0x423f,
    _0x525bbd = _0x4c6ae4();
  while (!![]) {
    try {
      const _0x225460 =
        -parseInt(_0x20b573(0x188)) / 0x1 +
        parseInt(_0x20b573(0x190)) / 0x2 +
        (parseInt(_0x20b573(0x18f)) / 0x3) *
          (parseInt(_0x20b573(0x17e)) / 0x4) +
        (parseInt(_0x20b573(0x199)) / 0x5) *
          (-parseInt(_0x20b573(0x187)) / 0x6) +
        (parseInt(_0x20b573(0x195)) / 0x7) *
          (-parseInt(_0x20b573(0x197)) / 0x8) +
        -parseInt(_0x20b573(0x186)) / 0x9 +
        (-parseInt(_0x20b573(0x181)) / 0xa) *
          (-parseInt(_0x20b573(0x189)) / 0xb);
      if (_0x225460 === _0x146c06) break;
      else _0x525bbd['push'](_0x525bbd['shift']());
    } catch (_0x4036f1) {
      _0x525bbd['push'](_0x525bbd['shift']());
    }
  }
})(a493_0x59b2, 0x4061c);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x1b3cb8) {
    const _0x29c984 = a493_0x423f;
    return _0x1b3cb8 && _0x1b3cb8[_0x29c984(0x17d)]
      ? _0x1b3cb8
      : { default: _0x1b3cb8 };
  };
function a493_0x423f(_0x17895f, _0x1647fc) {
  const _0x59b252 = a493_0x59b2();
  return (
    (a493_0x423f = function (_0x423f6c, _0x11c38e) {
      _0x423f6c = _0x423f6c - 0x17c;
      let _0xc633c4 = _0x59b252[_0x423f6c];
      return _0xc633c4;
    }),
    a493_0x423f(_0x17895f, _0x1647fc)
  );
}
Object[a493_0x476e8d(0x196)](exports, a493_0x476e8d(0x17d), { value: !![] });
const AppError_1 = __importDefault(require(a493_0x476e8d(0x18b))),
  Contact_1 = __importDefault(require('../../models/Contact')),
  ContactWallet_1 = __importDefault(require(a493_0x476e8d(0x194))),
  UpdateContactWalletsService = async ({
    wallets: _0x3aae6,
    contactId: _0x66cba6,
    companyId: _0x5d21e7
  }) => {
    const _0x43ea58 = a493_0x476e8d;
    await ContactWallet_1['default'][_0x43ea58(0x17f)]({
      where: { companyId: _0x5d21e7, contactId: _0x66cba6 }
    });
    const _0x4d4cc6 = [];
    _0x3aae6[_0x43ea58(0x193)](_0x4d70ce => {
      const _0x27443c = _0x43ea58;
      _0x4d4cc6[_0x27443c(0x185)]({
        walletId: !_0x4d70ce['id'] ? _0x4d70ce : _0x4d70ce['id'],
        contactId: _0x66cba6,
        companyId: _0x5d21e7
      });
    }),
      await ContactWallet_1['default'][_0x43ea58(0x192)](_0x4d4cc6);
    const _0x437f38 = await Contact_1[_0x43ea58(0x18c)][_0x43ea58(0x184)]({
      where: { id: _0x66cba6, companyId: _0x5d21e7 },
      attributes: [
        'id',
        _0x43ea58(0x198),
        'number',
        _0x43ea58(0x182),
        _0x43ea58(0x18d),
        _0x43ea58(0x183),
        _0x43ea58(0x18e)
      ],
      include: [
        _0x43ea58(0x17c),
        _0x43ea58(0x191),
        { association: _0x43ea58(0x180), attributes: ['id', _0x43ea58(0x198)] }
      ]
    });
    if (!_0x437f38)
      throw new AppError_1[_0x43ea58(0x18c)](_0x43ea58(0x18a), 0x194);
    return _0x437f38;
  };
exports[a493_0x476e8d(0x18c)] = UpdateContactWalletsService;
