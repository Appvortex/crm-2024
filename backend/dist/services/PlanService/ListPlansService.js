'use strict';
const a538_0x10d963 = a538_0x7f43;
(function (_0x1d11db, _0x12ced8) {
  const _0x13c1f5 = a538_0x7f43,
    _0x5d34ae = _0x1d11db();
  while (!![]) {
    try {
      const _0x2840d4 =
        parseInt(_0x13c1f5(0x88)) / 0x1 +
        -parseInt(_0x13c1f5(0x84)) / 0x2 +
        parseInt(_0x13c1f5(0x8f)) / 0x3 +
        parseInt(_0x13c1f5(0x7f)) / 0x4 +
        -parseInt(_0x13c1f5(0x8b)) / 0x5 +
        parseInt(_0x13c1f5(0x8e)) / 0x6 +
        -parseInt(_0x13c1f5(0x85)) / 0x7;
      if (_0x2840d4 === _0x12ced8) break;
      else _0x5d34ae['push'](_0x5d34ae['shift']());
    } catch (_0x5a96b6) {
      _0x5d34ae['push'](_0x5d34ae['shift']());
    }
  }
})(a538_0x4837, 0xca365);
var __importDefault =
  (this && this[a538_0x10d963(0x7e)]) ||
  function (_0x4de72f) {
    const _0x34750e = a538_0x10d963;
    return _0x4de72f && _0x4de72f[_0x34750e(0x87)]
      ? _0x4de72f
      : { default: _0x4de72f };
  };
Object['defineProperty'](exports, a538_0x10d963(0x87), { value: !![] });
function a538_0x7f43(_0x17ef45, _0x15d534) {
  const _0x483795 = a538_0x4837();
  return (
    (a538_0x7f43 = function (_0x7f438e, _0x552dba) {
      _0x7f438e = _0x7f438e - 0x7e;
      let _0x5506c2 = _0x483795[_0x7f438e];
      return _0x5506c2;
    }),
    a538_0x7f43(_0x17ef45, _0x15d534)
  );
}
function a538_0x4837() {
  const _0x527387 = [
    'col',
    'toLowerCase',
    'Sequelize',
    'length',
    '__importDefault',
    '2749432jIUqvi',
    'trim',
    'sequelize',
    'LIKE',
    'default',
    '839628ZVCBNX',
    '9362143BNBilR',
    'ASC',
    '__esModule',
    '106831hIaEZy',
    'name',
    'where',
    '1748895doENEB',
    'LOWER',
    '../../models/Plan',
    '6922806JAtcLI',
    '2961939zxYvPs'
  ];
  a538_0x4837 = function () {
    return _0x527387;
  };
  return a538_0x4837();
}
const sequelize_1 = require(a538_0x10d963(0x81)),
  Plan_1 = __importDefault(require(a538_0x10d963(0x8d))),
  ListPlansService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1'
  }) => {
    const _0x4f4e9f = a538_0x10d963,
      _0xa6f4b0 = {
        [sequelize_1['Op']['or']]: [
          {
            name: sequelize_1[_0x4f4e9f(0x92)][_0x4f4e9f(0x8a)](
              sequelize_1['Sequelize']['fn'](
                _0x4f4e9f(0x8c),
                sequelize_1[_0x4f4e9f(0x92)][_0x4f4e9f(0x90)](_0x4f4e9f(0x89))
              ),
              _0x4f4e9f(0x82),
              '%' + searchParam[_0x4f4e9f(0x91)]()[_0x4f4e9f(0x80)]() + '%'
            )
          }
        ]
      },
      _0x152c48 = 0x14,
      _0x217bef = _0x152c48 * (+pageNumber - 0x1),
      { count: _0x4b2ce9, rows: _0x1b6335 } = await Plan_1[_0x4f4e9f(0x83)][
        'findAndCountAll'
      ]({
        where: _0xa6f4b0,
        limit: _0x152c48,
        offset: _0x217bef,
        order: [[_0x4f4e9f(0x89), _0x4f4e9f(0x86)]]
      }),
      _0x570dec = _0x4b2ce9 > _0x217bef + _0x1b6335[_0x4f4e9f(0x93)];
    return { plans: _0x1b6335, count: _0x4b2ce9, hasMore: _0x570dec };
  };
exports[a538_0x10d963(0x83)] = ListPlansService;
