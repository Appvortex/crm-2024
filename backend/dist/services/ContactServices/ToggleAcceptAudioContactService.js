'use strict';
const a490_0x5951a7 = a490_0x44e6;
(function (_0xaabe47, _0xc62f65) {
  const _0x1202c3 = a490_0x44e6,
    _0x2bc375 = _0xaabe47();
  while (!![]) {
    try {
      const _0x3ff0fd =
        -parseInt(_0x1202c3(0xf4)) / 0x1 +
        (parseInt(_0x1202c3(0xe2)) / 0x2) * (-parseInt(_0x1202c3(0xe8)) / 0x3) +
        -parseInt(_0x1202c3(0xf1)) / 0x4 +
        -parseInt(_0x1202c3(0xf2)) / 0x5 +
        (parseInt(_0x1202c3(0xec)) / 0x6) * (parseInt(_0x1202c3(0xef)) / 0x7) +
        parseInt(_0x1202c3(0xed)) / 0x8 +
        (parseInt(_0x1202c3(0xe9)) / 0x9) * (parseInt(_0x1202c3(0xf8)) / 0xa);
      if (_0x3ff0fd === _0xc62f65) break;
      else _0x2bc375['push'](_0x2bc375['shift']());
    } catch (_0x2e545f) {
      _0x2bc375['push'](_0x2bc375['shift']());
    }
  }
})(a490_0x6ae0, 0x411e1);
var __importDefault =
  (this && this[a490_0x5951a7(0xdf)]) ||
  function (_0x493506) {
    const _0x102c1e = a490_0x5951a7;
    return _0x493506 && _0x493506[_0x102c1e(0xeb)]
      ? _0x493506
      : { default: _0x493506 };
  };
function a490_0x44e6(_0x3f18d3, _0x4a0c5b) {
  const _0x6ae076 = a490_0x6ae0();
  return (
    (a490_0x44e6 = function (_0x44e63d, _0x18ae69) {
      _0x44e63d = _0x44e63d - 0xdf;
      let _0x4a408e = _0x6ae076[_0x44e63d];
      return _0x4a408e;
    }),
    a490_0x44e6(_0x3f18d3, _0x4a0c5b)
  );
}
Object[a490_0x5951a7(0xf3)](exports, a490_0x5951a7(0xeb), { value: !![] });
const AppError_1 = __importDefault(require(a490_0x5951a7(0xfb))),
  Contact_1 = __importDefault(require(a490_0x5951a7(0xee))),
  ToggleUseQueuesContactService = async ({ contactId: _0x607af8 }) => {
    const _0xa0c065 = a490_0x5951a7,
      _0x199af5 = await Contact_1[_0xa0c065(0xea)][_0xa0c065(0xf7)]({
        where: { id: _0x607af8 },
        attributes: ['id', _0xa0c065(0xe1)]
      });
    if (!_0x199af5) throw new AppError_1['default'](_0xa0c065(0xe6), 0x194);
    const _0x2fa8d0 = _0x199af5?.['acceptAudioMessage'] ? ![] : !![];
    return (
      await _0x199af5[_0xa0c065(0xf6)]({ acceptAudioMessage: _0x2fa8d0 }),
      await _0x199af5[_0xa0c065(0xe0)]({
        attributes: [
          'id',
          _0xa0c065(0xe4),
          _0xa0c065(0xfa),
          _0xa0c065(0xf5),
          _0xa0c065(0xe3),
          _0xa0c065(0xf9),
          _0xa0c065(0xe1),
          _0xa0c065(0xe7)
        ],
        include: [
          _0xa0c065(0xf0),
          { association: _0xa0c065(0xe5), attributes: ['id', _0xa0c065(0xe4)] }
        ]
      }),
      _0x199af5
    );
  };
exports['default'] = ToggleUseQueuesContactService;
function a490_0x6ae0() {
  const _0x352dfa = [
    'name',
    'wallets',
    'ERR_NO_CONTACT_FOUND',
    'urlPicture',
    '45CWgpMF',
    '22833WvcUsH',
    'default',
    '__esModule',
    '24yMqixb',
    '3022544zunGwq',
    '../../models/Contact',
    '196574wlqIwk',
    'extraInfo',
    '1860096mxnVhd',
    '1497135mrhBAw',
    'defineProperty',
    '47713LdTAnu',
    'email',
    'update',
    'findOne',
    '3170WTECou',
    'companyId',
    'number',
    '../../errors/AppError',
    '__importDefault',
    'reload',
    'acceptAudioMessage',
    '28732PPChto',
    'profilePicUrl'
  ];
  a490_0x6ae0 = function () {
    return _0x352dfa;
  };
  return a490_0x6ae0();
}
