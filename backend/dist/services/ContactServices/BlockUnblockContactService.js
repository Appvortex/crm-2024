'use strict';
const a477_0x1ef16d = a477_0x527f;
(function (_0x4e80b0, _0x40c8af) {
  const _0x189f40 = a477_0x527f,
    _0x42bb87 = _0x4e80b0();
  while (!![]) {
    try {
      const _0x2ff869 =
        (parseInt(_0x189f40(0x109)) / 0x1) *
          (parseInt(_0x189f40(0x113)) / 0x2) +
        parseInt(_0x189f40(0x112)) / 0x3 +
        (parseInt(_0x189f40(0x110)) / 0x4) *
          (parseInt(_0x189f40(0x123)) / 0x5) +
        (-parseInt(_0x189f40(0x118)) / 0x6) *
          (-parseInt(_0x189f40(0x117)) / 0x7) +
        (parseInt(_0x189f40(0x10a)) / 0x8) *
          (-parseInt(_0x189f40(0x10d)) / 0x9) +
        (parseInt(_0x189f40(0x128)) / 0xa) *
          (parseInt(_0x189f40(0x122)) / 0xb) +
        -parseInt(_0x189f40(0x10b)) / 0xc;
      if (_0x2ff869 === _0x40c8af) break;
      else _0x42bb87['push'](_0x42bb87['shift']());
    } catch (_0x1f3ae1) {
      _0x42bb87['push'](_0x42bb87['shift']());
    }
  }
})(a477_0x2aa9, 0x4341b);
var __importDefault =
  (this && this[a477_0x1ef16d(0x121)]) ||
  function (_0x2b467f) {
    const _0x16c6ad = a477_0x1ef16d;
    return _0x2b467f && _0x2b467f[_0x16c6ad(0x126)]
      ? _0x2b467f
      : { default: _0x2b467f };
  };
Object[a477_0x1ef16d(0x11b)](exports, a477_0x1ef16d(0x126), { value: !![] });
const AppError_1 = __importDefault(require(a477_0x1ef16d(0x10c))),
  GetDefaultWhatsApp_1 = __importDefault(require(a477_0x1ef16d(0x11f))),
  wbot_1 = require('../../libs/wbot'),
  Contact_1 = __importDefault(require(a477_0x1ef16d(0x11d)));
function formatBRNumber(_0x28ef36) {
  const _0x2b676c = a477_0x1ef16d,
    _0xf2f5b0 = new RegExp(/^(\d{2})(\d{2})\d{1}(\d{8})$/);
  if (_0xf2f5b0[_0x2b676c(0x111)](_0x28ef36)) {
    const _0x5163a2 = _0xf2f5b0[_0x2b676c(0x120)](_0x28ef36);
    if (
      _0x5163a2 &&
      _0x5163a2[0x1] === '55' &&
      Number['isInteger'](Number['parseInt'](_0x5163a2[0x2]))
    ) {
      const _0x2dcf63 = Number[_0x2b676c(0x11a)](_0x5163a2[0x2]);
      if (_0x2dcf63 < 0x1f) return _0x5163a2[0x0];
      else {
        if (_0x2dcf63 >= 0x1f)
          return _0x5163a2[0x1] + _0x5163a2[0x2] + _0x5163a2[0x3];
      }
    }
  } else return _0x28ef36;
}
function a477_0x527f(_0x2e8778, _0x7c10af) {
  const _0x2aa9d1 = a477_0x2aa9();
  return (
    (a477_0x527f = function (_0x527fd9, _0x2f731b) {
      _0x527fd9 = _0x527fd9 - 0x109;
      let _0x3a2e1e = _0x2aa9d1[_0x527fd9];
      return _0x3a2e1e;
    }),
    a477_0x527f(_0x2e8778, _0x7c10af)
  );
}
function createJid(_0x4247a1) {
  const _0x70a627 = a477_0x1ef16d;
  if (
    _0x4247a1[_0x70a627(0x124)]('@g.us') ||
    _0x4247a1[_0x70a627(0x124)](_0x70a627(0x119))
  )
    return formatBRNumber(_0x4247a1);
  return _0x4247a1['includes']('-')
    ? _0x4247a1 + _0x70a627(0x11c)
    : formatBRNumber(_0x4247a1) + _0x70a627(0x119);
}
function a477_0x2aa9() {
  const _0x54c684 = [
    'test',
    '1503993TTwzYz',
    '2dyfmeK',
    'No\x20pude\x20desbloquear\x20el\x20contacto.',
    'update',
    'default',
    '616PNHSbx',
    '4476BbihEz',
    '@s.whatsapp.net',
    'parseInt',
    'defineProperty',
    '@g.us',
    '../../models/Contact',
    'ERR_NO_CONTACT_FOUND',
    '../../helpers/GetDefaultWhatsApp',
    'exec',
    '__importDefault',
    '22dYvIOK',
    '10wYBorx',
    'includes',
    'getWbot',
    '__esModule',
    'number',
    '2752850ELhTyJ',
    '380633XDifcc',
    '8wWbFbm',
    '14723856NnYavX',
    '../../errors/AppError',
    '590625rTcZkW',
    'updateBlockStatus',
    'log',
    '139828cPQRat'
  ];
  a477_0x2aa9 = function () {
    return _0x54c684;
  };
  return a477_0x2aa9();
}
const BlockUnblockContactService = async ({
  contactId: _0x1b0e9e,
  companyId: _0x152b0c,
  active: _0x2ff8bc
}) => {
  const _0x5d2784 = a477_0x1ef16d,
    _0x52e1e0 = await Contact_1[_0x5d2784(0x116)]['findByPk'](_0x1b0e9e);
  if (!_0x52e1e0) throw new AppError_1['default'](_0x5d2784(0x11e), 0x194);
  if (_0x2ff8bc)
    try {
      const _0x2cfe58 = await (0x0, GetDefaultWhatsApp_1[_0x5d2784(0x116)])(
          Number(_0x152b0c)
        ),
        _0x2802d4 = (0x0, wbot_1[_0x5d2784(0x125)])(_0x2cfe58['id']),
        _0x3636d8 = createJid(_0x52e1e0[_0x5d2784(0x127)]);
      await _0x2802d4[_0x5d2784(0x10e)](_0x3636d8, 'unblock'),
        await _0x52e1e0[_0x5d2784(0x115)]({ active: !![] });
    } catch (_0x24d25b) {
      console['log'](_0x5d2784(0x114));
    }
  if (!_0x2ff8bc)
    try {
      const _0x38a42a = await (0x0, GetDefaultWhatsApp_1['default'])(
          Number(_0x152b0c)
        ),
        _0x25b082 = (0x0, wbot_1[_0x5d2784(0x125)])(_0x38a42a['id']),
        _0x61d205 = createJid(_0x52e1e0[_0x5d2784(0x127)]);
      await _0x25b082['updateBlockStatus'](_0x61d205, 'block'),
        await _0x52e1e0['update']({ active: ![] });
    } catch (_0x217320) {
      console[_0x5d2784(0x10f)]('Não\x20consegui\x20bloquear\x20o\x20contato');
    }
  return _0x52e1e0;
};
exports[a477_0x1ef16d(0x116)] = BlockUnblockContactService;
