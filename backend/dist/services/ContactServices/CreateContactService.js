'use strict';
const a478_0x34adb6 = a478_0x12ce;
(function (_0x324fb9, _0x382d53) {
  const _0x80e786 = a478_0x12ce,
    _0x12607b = _0x324fb9();
  while (!![]) {
    try {
      const _0x462195 =
        (-parseInt(_0x80e786(0xe2)) / 0x1) * (parseInt(_0x80e786(0xe7)) / 0x2) +
        parseInt(_0x80e786(0xd8)) / 0x3 +
        (parseInt(_0x80e786(0xd7)) / 0x4) * (-parseInt(_0x80e786(0xeb)) / 0x5) +
        (-parseInt(_0x80e786(0xe6)) / 0x6) *
          (-parseInt(_0x80e786(0xd9)) / 0x7) +
        parseInt(_0x80e786(0xde)) / 0x8 +
        -parseInt(_0x80e786(0xed)) / 0x9 +
        parseInt(_0x80e786(0xe0)) / 0xa;
      if (_0x462195 === _0x382d53) break;
      else _0x12607b['push'](_0x12607b['shift']());
    } catch (_0x11fb33) {
      _0x12607b['push'](_0x12607b['shift']());
    }
  }
})(a478_0x32a6, 0x49b76);
function a478_0x12ce(_0x309353, _0x1a5496) {
  const _0x32a684 = a478_0x32a6();
  return (
    (a478_0x12ce = function (_0x12ce51, _0x4016c6) {
      _0x12ce51 = _0x12ce51 - 0xd4;
      let _0x5bdf90 = _0x32a684[_0x12ce51];
      return _0x5bdf90;
    }),
    a478_0x12ce(_0x309353, _0x1a5496)
  );
}
var __importDefault =
  (this && this[a478_0x34adb6(0xec)]) ||
  function (_0x56e6df) {
    const _0x8644ed = a478_0x34adb6;
    return _0x56e6df && _0x56e6df[_0x8644ed(0xdc)]
      ? _0x56e6df
      : { default: _0x56e6df };
  };
Object[a478_0x34adb6(0xe9)](exports, '__esModule', { value: !![] });
function a478_0x32a6() {
  const _0x358bcb = [
    'create',
    '6902390GGlQYX',
    '../../models/CompaniesSettings',
    '527211pVxIoH',
    'ERR_DUPLICATED_CONTACT',
    'destroy',
    'extraInfo',
    '955236qmIxUc',
    '2CmxChC',
    'forEach',
    'defineProperty',
    '../../errors/AppError',
    '694935FouxKN',
    '__importDefault',
    '1743624kotxfn',
    'name',
    'findOne',
    '../../models/ContactWallet',
    '../../models/Contact',
    '12KWWZWp',
    '595248ziYYgn',
    '21bPmAYk',
    'default',
    'wallets',
    '__esModule',
    'push',
    '588616Yjmguy'
  ];
  a478_0x32a6 = function () {
    return _0x358bcb;
  };
  return a478_0x32a6();
}
const AppError_1 = __importDefault(require(a478_0x34adb6(0xea))),
  CompaniesSettings_1 = __importDefault(require(a478_0x34adb6(0xe1))),
  Contact_1 = __importDefault(require(a478_0x34adb6(0xd6))),
  ContactWallet_1 = __importDefault(require(a478_0x34adb6(0xd5))),
  CreateContactService = async ({
    name: _0x57178e,
    number: _0xbc655,
    email: email = '',
    acceptAudioMessage: _0x1246a1,
    active: _0x5107b7,
    companyId: _0x2879d8,
    extraInfo: extraInfo = [],
    remoteJid: remoteJid = '',
    wallets: _0x5d4086
  }) => {
    const _0x206349 = a478_0x34adb6,
      _0x5e18ab = await Contact_1[_0x206349(0xda)][_0x206349(0xd4)]({
        where: { number: _0xbc655, companyId: _0x2879d8 }
      });
    if (_0x5e18ab) throw new AppError_1[_0x206349(0xda)](_0x206349(0xe3));
    const _0x42f3c8 = await CompaniesSettings_1[_0x206349(0xda)][
        _0x206349(0xd4)
      ]({ where: { companyId: _0x2879d8 } }),
      { acceptAudioMessageContact: _0x3b8d02 } = _0x42f3c8,
      _0x3ab881 = await Contact_1[_0x206349(0xda)][_0x206349(0xdf)](
        {
          name: _0x57178e,
          number: _0xbc655,
          email: email,
          acceptAudioMessage: _0x3b8d02 === 'enabled' ? !![] : ![],
          active: _0x5107b7,
          extraInfo: extraInfo,
          companyId: _0x2879d8,
          remoteJid: remoteJid
        },
        {
          include: [
            _0x206349(0xe5),
            {
              association: _0x206349(0xdb),
              attributes: ['id', _0x206349(0xee)]
            }
          ]
        }
      );
    if (_0x5d4086) {
      await ContactWallet_1[_0x206349(0xda)][_0x206349(0xe4)]({
        where: { companyId: _0x2879d8, contactId: _0x3ab881['id'] }
      });
      const _0x119a91 = [];
      _0x5d4086[_0x206349(0xe8)](_0xc00a32 => {
        const _0x4f9834 = _0x206349;
        _0x119a91[_0x4f9834(0xdd)]({
          walletId: !_0xc00a32['id'] ? _0xc00a32 : _0xc00a32['id'],
          contactId: _0x3ab881['id'],
          companyId: _0x2879d8
        });
      }),
        await ContactWallet_1['default']['bulkCreate'](_0x119a91);
    }
    return _0x3ab881;
  };
exports[a478_0x34adb6(0xda)] = CreateContactService;
