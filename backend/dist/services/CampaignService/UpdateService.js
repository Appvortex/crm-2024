'use strict';
const a428_0x429860 = a428_0x20ef;
(function (_0x15ef0b, _0x500867) {
  const _0x5844ae = a428_0x20ef,
    _0x555d11 = _0x15ef0b();
  while (!![]) {
    try {
      const _0x404504 =
        (parseInt(_0x5844ae(0xd7)) / 0x1) * (parseInt(_0x5844ae(0xce)) / 0x2) +
        (-parseInt(_0x5844ae(0xe2)) / 0x3) * (parseInt(_0x5844ae(0xd2)) / 0x4) +
        parseInt(_0x5844ae(0xe3)) / 0x5 +
        (-parseInt(_0x5844ae(0xe4)) / 0x6) *
          (-parseInt(_0x5844ae(0xcf)) / 0x7) +
        (parseInt(_0x5844ae(0xe0)) / 0x8) * (parseInt(_0x5844ae(0xdb)) / 0x9) +
        -parseInt(_0x5844ae(0xda)) / 0xa +
        -parseInt(_0x5844ae(0xd8)) / 0xb;
      if (_0x404504 === _0x500867) break;
      else _0x555d11['push'](_0x555d11['shift']());
    } catch (_0x397e2f) {
      _0x555d11['push'](_0x555d11['shift']());
    }
  }
})(a428_0x47b1, 0x4dc22);
var __importDefault =
  (this && this[a428_0x429860(0xcc)]) ||
  function (_0x4e7b32) {
    const _0x1c9586 = a428_0x429860;
    return _0x4e7b32 && _0x4e7b32[_0x1c9586(0xe1)]
      ? _0x4e7b32
      : { default: _0x4e7b32 };
  };
function a428_0x20ef(_0x562fab, _0x10da3f) {
  const _0x47b1ae = a428_0x47b1();
  return (
    (a428_0x20ef = function (_0x20ef5d, _0x8b7eb0) {
      _0x20ef5d = _0x20ef5d - 0xc8;
      let _0x583414 = _0x47b1ae[_0x20ef5d];
      return _0x583414;
    }),
    a428_0x20ef(_0x562fab, _0x10da3f)
  );
}
function a428_0x47b1() {
  const _0x2f304a = [
    'defineProperty',
    '2112aaQQfP',
    '__esModule',
    '46461EwSHfB',
    '1844505zaDMbD',
    '187902JBmvFs',
    '../../models/Whatsapp',
    'Solo\x20se\x20permite\x20alterar\x20campañas\x20Inactivas\x20y\x20Programadas',
    'name',
    'findByPk',
    '__importDefault',
    'default',
    '766iNVKYF',
    '7SjfWLp',
    'reload',
    'INATIVA',
    '56YmIMcJ',
    'CANCELADA',
    '../../models/User',
    'indexOf',
    '../../models/ContactList',
    '1493KfNbPc',
    '11264693VXCcwh',
    'scheduledAt',
    '380740rKTNGC',
    '21321yYAuyV',
    'status',
    '../../models/Queue',
    'PROGRAMADA'
  ];
  a428_0x47b1 = function () {
    return _0x2f304a;
  };
  return a428_0x47b1();
}
Object[a428_0x429860(0xdf)](exports, '__esModule', { value: !![] });
const AppError_1 = __importDefault(require('../../errors/AppError')),
  Campaign_1 = __importDefault(require('../../models/Campaign')),
  ContactList_1 = __importDefault(require(a428_0x429860(0xd6))),
  Queue_1 = __importDefault(require(a428_0x429860(0xdd))),
  User_1 = __importDefault(require(a428_0x429860(0xd4))),
  Whatsapp_1 = __importDefault(require(a428_0x429860(0xc8))),
  UpdateService = async _0x329c5c => {
    const _0x2ca3cd = a428_0x429860,
      { id: _0x1acb2d } = _0x329c5c,
      _0x42e88b = await Campaign_1[_0x2ca3cd(0xcd)][_0x2ca3cd(0xcb)](_0x1acb2d);
    if (!_0x42e88b)
      throw new AppError_1['default']('ERR_NO_CAMPAIGN_FOUND', 0x194);
    if (
      [_0x2ca3cd(0xd1), _0x2ca3cd(0xde), _0x2ca3cd(0xd3)][_0x2ca3cd(0xd5)](
        _0x329c5c['status']
      ) === -0x1
    )
      throw new AppError_1[_0x2ca3cd(0xcd)](_0x2ca3cd(0xc9), 0x190);
    return (
      _0x329c5c[_0x2ca3cd(0xd9)] != null &&
        _0x329c5c[_0x2ca3cd(0xd9)] != '' &&
        _0x329c5c[_0x2ca3cd(0xdc)] === _0x2ca3cd(0xd1) &&
        (_0x329c5c['status'] = _0x2ca3cd(0xde)),
      await _0x42e88b['update'](_0x329c5c),
      await _0x42e88b[_0x2ca3cd(0xd0)]({
        include: [
          { model: ContactList_1[_0x2ca3cd(0xcd)] },
          {
            model: Whatsapp_1[_0x2ca3cd(0xcd)],
            attributes: ['id', _0x2ca3cd(0xca)]
          },
          {
            model: User_1[_0x2ca3cd(0xcd)],
            attributes: ['id', _0x2ca3cd(0xca)]
          },
          { model: Queue_1[_0x2ca3cd(0xcd)], attributes: ['id', 'name'] }
        ]
      }),
      _0x42e88b
    );
  };
exports[a428_0x429860(0xcd)] = UpdateService;
