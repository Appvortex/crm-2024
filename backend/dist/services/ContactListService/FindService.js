'use strict';
function a472_0x5471() {
  const _0xf99886 = [
    '102fttfZI',
    '1451191kHNhCd',
    '9087129EEsamh',
    'defineProperty',
    '26572920Gdnvhq',
    '../../models/Company',
    '57164yDEFcU',
    '4884072TPDFem',
    '../../models/ContactList',
    '__importDefault',
    '327779mvWCJW',
    '__esModule',
    '349228OWVHoR',
    '35NeqmWJ',
    '18IkBxvs',
    'company',
    'ASC',
    'default',
    'name'
  ];
  a472_0x5471 = function () {
    return _0xf99886;
  };
  return a472_0x5471();
}
const a472_0x5100f4 = a472_0x4462;
(function (_0x114a75, _0x3c2bba) {
  const _0x113ce8 = a472_0x4462,
    _0x5bbc6f = _0x114a75();
  while (!![]) {
    try {
      const _0x53fd04 =
        -parseInt(_0x113ce8(0x15a)) / 0x1 +
        (-parseInt(_0x113ce8(0x156)) / 0x2) *
          (parseInt(_0x113ce8(0x150)) / 0x3) +
        (-parseInt(_0x113ce8(0x15c)) / 0x4) *
          (parseInt(_0x113ce8(0x15d)) / 0x5) +
        (-parseInt(_0x113ce8(0x15e)) / 0x6) *
          (parseInt(_0x113ce8(0x151)) / 0x7) +
        -parseInt(_0x113ce8(0x157)) / 0x8 +
        parseInt(_0x113ce8(0x152)) / 0x9 +
        parseInt(_0x113ce8(0x154)) / 0xa;
      if (_0x53fd04 === _0x3c2bba) break;
      else _0x5bbc6f['push'](_0x5bbc6f['shift']());
    } catch (_0x581d7b) {
      _0x5bbc6f['push'](_0x5bbc6f['shift']());
    }
  }
})(a472_0x5471, 0x7fe21);
var __importDefault =
  (this && this[a472_0x5100f4(0x159)]) ||
  function (_0x5588e3) {
    const _0x1039f1 = a472_0x5100f4;
    return _0x5588e3 && _0x5588e3[_0x1039f1(0x15b)]
      ? _0x5588e3
      : { default: _0x5588e3 };
  };
function a472_0x4462(_0x39f06a, _0x2dcfd7) {
  const _0x5471dc = a472_0x5471();
  return (
    (a472_0x4462 = function (_0x4462ce, _0x102074) {
      _0x4462ce = _0x4462ce - 0x14c;
      let _0x2303a1 = _0x5471dc[_0x4462ce];
      return _0x2303a1;
    }),
    a472_0x4462(_0x39f06a, _0x2dcfd7)
  );
}
Object[a472_0x5100f4(0x153)](exports, a472_0x5100f4(0x15b), { value: !![] });
const ContactList_1 = __importDefault(require(a472_0x5100f4(0x158))),
  Company_1 = __importDefault(require(a472_0x5100f4(0x155))),
  FindService = async ({ companyId: _0x5447f2 }) => {
    const _0x57c81d = a472_0x5100f4,
      _0x5ae1c1 = await ContactList_1[_0x57c81d(0x14e)]['findAll']({
        where: { companyId: _0x5447f2 },
        include: [
          {
            model: Company_1['default'],
            as: _0x57c81d(0x14c),
            attributes: ['id', _0x57c81d(0x14f)]
          }
        ],
        order: [[_0x57c81d(0x14f), _0x57c81d(0x14d)]]
      });
    return _0x5ae1c1;
  };
exports[a472_0x5100f4(0x14e)] = FindService;
