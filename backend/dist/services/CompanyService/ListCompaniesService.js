'use strict';
const a456_0x25f9c6 = a456_0x2560;
function a456_0x530f() {
  const _0x51bd78 = [
    'defineProperty',
    'name',
    '8HYwZqb',
    '8008PkfrOk',
    '__esModule',
    'default',
    '2368120yXdHhN',
    '58800XsoyyE',
    '162788ZvBclV',
    '16fqTigQ',
    'plan',
    '3352530eLvaZP',
    '27sZhHVk',
    '__importDefault',
    '12YTgNxC',
    '8633172dtPQpo',
    '559905epZJhz',
    '341222aTuVmW',
    'findAndCountAll',
    'ASC'
  ];
  a456_0x530f = function () {
    return _0x51bd78;
  };
  return a456_0x530f();
}
(function (_0x37d397, _0x4c8354) {
  const _0x1524de = a456_0x2560,
    _0x7ea3cc = _0x37d397();
  while (!![]) {
    try {
      const _0x1b5db2 =
        (-parseInt(_0x1524de(0x154)) / 0x1) *
          (parseInt(_0x1524de(0x14e)) / 0x2) +
        -parseInt(_0x1524de(0x148)) / 0x3 +
        (parseInt(_0x1524de(0x146)) / 0x4) *
          (-parseInt(_0x1524de(0x152)) / 0x5) +
        -parseInt(_0x1524de(0x147)) / 0x6 +
        (-parseInt(_0x1524de(0x149)) / 0x7) *
          (parseInt(_0x1524de(0x141)) / 0x8) +
        (-parseInt(_0x1524de(0x144)) / 0x9) *
          (-parseInt(_0x1524de(0x143)) / 0xa) +
        (parseInt(_0x1524de(0x14f)) / 0xb) * (parseInt(_0x1524de(0x153)) / 0xc);
      if (_0x1b5db2 === _0x4c8354) break;
      else _0x7ea3cc['push'](_0x7ea3cc['shift']());
    } catch (_0x4ab619) {
      _0x7ea3cc['push'](_0x7ea3cc['shift']());
    }
  }
})(a456_0x530f, 0xbdeda);
var __importDefault =
  (this && this[a456_0x25f9c6(0x145)]) ||
  function (_0x47f2e6) {
    const _0xcc80a7 = a456_0x25f9c6;
    return _0x47f2e6 && _0x47f2e6[_0xcc80a7(0x150)]
      ? _0x47f2e6
      : { default: _0x47f2e6 };
  };
function a456_0x2560(_0x486a29, _0x2ffde3) {
  const _0x530f7d = a456_0x530f();
  return (
    (a456_0x2560 = function (_0x256049, _0x490626) {
      _0x256049 = _0x256049 - 0x141;
      let _0x88f18b = _0x530f7d[_0x256049];
      return _0x88f18b;
    }),
    a456_0x2560(_0x486a29, _0x2ffde3)
  );
}
Object[a456_0x25f9c6(0x14c)](exports, a456_0x25f9c6(0x150), { value: !![] });
const Company_1 = __importDefault(require('../../models/Company')),
  Plan_1 = __importDefault(require('../../models/Plan')),
  ListCompaniesService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1'
  }) => {
    const _0x1a931b = a456_0x25f9c6,
      _0x107b62 = 0x14,
      _0x214879 = _0x107b62 * (+pageNumber - 0x1),
      { count: _0x174d6f, rows: _0x23e0fc } = await Company_1['default'][
        _0x1a931b(0x14a)
      ]({
        include: [
          {
            model: Plan_1[_0x1a931b(0x151)],
            as: _0x1a931b(0x142),
            attributes: [_0x1a931b(0x14d)]
          }
        ],
        limit: _0x107b62,
        offset: _0x214879,
        order: [[_0x1a931b(0x14d), _0x1a931b(0x14b)]]
      }),
      _0x58089d = _0x174d6f > _0x214879 + _0x23e0fc['length'];
    return { companies: _0x23e0fc, count: _0x174d6f, hasMore: _0x58089d };
  };
exports[a456_0x25f9c6(0x151)] = ListCompaniesService;
