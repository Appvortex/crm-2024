'use strict';
const a568_0x57037d = a568_0x36f3;
(function (_0x159e85, _0x828d0d) {
  const _0x59f2e4 = a568_0x36f3,
    _0x6c886 = _0x159e85();
  while (!![]) {
    try {
      const _0x407aa3 =
        parseInt(_0x59f2e4(0x164)) / 0x1 +
        (-parseInt(_0x59f2e4(0x169)) / 0x2) *
          (parseInt(_0x59f2e4(0x15d)) / 0x3) +
        (parseInt(_0x59f2e4(0x15c)) / 0x4) *
          (-parseInt(_0x59f2e4(0x167)) / 0x5) +
        (parseInt(_0x59f2e4(0x152)) / 0x6) *
          (parseInt(_0x59f2e4(0x156)) / 0x7) +
        (parseInt(_0x59f2e4(0x16a)) / 0x8) *
          (parseInt(_0x59f2e4(0x155)) / 0x9) +
        (parseInt(_0x59f2e4(0x154)) / 0xa) *
          (parseInt(_0x59f2e4(0x165)) / 0xb) +
        (-parseInt(_0x59f2e4(0x15b)) / 0xc) *
          (parseInt(_0x59f2e4(0x153)) / 0xd);
      if (_0x407aa3 === _0x828d0d) break;
      else _0x6c886['push'](_0x6c886['shift']());
    } catch (_0xeddbb7) {
      _0x6c886['push'](_0x6c886['shift']());
    }
  }
})(a568_0x531d, 0x653e1);
function a568_0x531d() {
  const _0x59f744 = [
    '1807YRsBXQ',
    '208870YGehrG',
    '25182LyByYO',
    '59927tDRHkc',
    'LIKE',
    'findAndCountAll',
    'col',
    'trim',
    '17244IpdNqM',
    '85128YQNcnS',
    '3bhPqCI',
    'log',
    'ASC',
    'length',
    'shortcode',
    'Sequelize',
    '../../models/QuickMessage',
    '346400NvdxmT',
    '209WhAxKp',
    'toLocaleLowerCase',
    '55fOMkRw',
    '__importDefault',
    '956078OZffPi',
    '1472aBSwnu',
    'defineProperty',
    'sequelize',
    'where',
    'default',
    '48gZxmUv'
  ];
  a568_0x531d = function () {
    return _0x59f744;
  };
  return a568_0x531d();
}
var __importDefault =
  (this && this[a568_0x57037d(0x168)]) ||
  function (_0x30b1b1) {
    return _0x30b1b1 && _0x30b1b1['__esModule']
      ? _0x30b1b1
      : { default: _0x30b1b1 };
  };
Object[a568_0x57037d(0x16b)](exports, '__esModule', { value: !![] });
function a568_0x36f3(_0x1ad049, _0x3824a4) {
  const _0x531d4f = a568_0x531d();
  return (
    (a568_0x36f3 = function (_0x36f3c3, _0x24b012) {
      _0x36f3c3 = _0x36f3c3 - 0x152;
      let _0x4e9e46 = _0x531d4f[_0x36f3c3];
      return _0x4e9e46;
    }),
    a568_0x36f3(_0x1ad049, _0x3824a4)
  );
}
const sequelize_1 = require(a568_0x57037d(0x16c)),
  QuickMessage_1 = __importDefault(require(a568_0x57037d(0x163))),
  ListService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    companyId: _0x93762b,
    userId: _0x2b7af6
  }) => {
    const _0x2685c7 = a568_0x57037d,
      _0x3e9d9a = searchParam[_0x2685c7(0x166)]()[_0x2685c7(0x15a)]();
    let _0x570e80 = {
      shortcode: sequelize_1['Sequelize'][_0x2685c7(0x16d)](
        sequelize_1[_0x2685c7(0x162)]['fn'](
          'LOWER',
          sequelize_1[_0x2685c7(0x162)][_0x2685c7(0x159)](_0x2685c7(0x161))
        ),
        _0x2685c7(0x157),
        '%' + _0x3e9d9a + '%'
      )
    };
    (_0x570e80 = {
      ..._0x570e80,
      companyId: _0x93762b,
      [sequelize_1['Op']['or']]: [
        { visao: !![] },
        { visao: ![], userId: _0x2b7af6 }
      ]
    }),
      console[_0x2685c7(0x15e)](_0x570e80);
    const _0x26e02c = 0x14,
      _0x5ee52e = _0x26e02c * (+pageNumber - 0x1),
      { count: _0x26574e, rows: _0x1441e5 } = await QuickMessage_1['default'][
        _0x2685c7(0x158)
      ]({
        where: _0x570e80,
        limit: _0x26e02c,
        offset: _0x5ee52e,
        order: [[_0x2685c7(0x161), _0x2685c7(0x15f)]]
      }),
      _0x3c2316 = _0x26574e > _0x5ee52e + _0x1441e5[_0x2685c7(0x160)];
    return { records: _0x1441e5, count: _0x26574e, hasMore: _0x3c2316 };
  };
exports[a568_0x57037d(0x16e)] = ListService;
