'use strict';
function a506_0x1cc1(_0x957167, _0xa4b062) {
  const _0x266b8a = a506_0x266b();
  return (
    (a506_0x1cc1 = function (_0x1cc1b9, _0x58e112) {
      _0x1cc1b9 = _0x1cc1b9 - 0xba;
      let _0x5c9025 = _0x266b8a[_0x1cc1b9];
      return _0x5c9025;
    }),
    a506_0x1cc1(_0x957167, _0xa4b062)
  );
}
const a506_0x9b5486 = a506_0x1cc1;
(function (_0x49e20e, _0xe24e26) {
  const _0x122259 = a506_0x1cc1,
    _0x524d66 = _0x49e20e();
  while (!![]) {
    try {
      const _0x15080d =
        (-parseInt(_0x122259(0xc1)) / 0x1) * (parseInt(_0x122259(0xc8)) / 0x2) +
        parseInt(_0x122259(0xbe)) / 0x3 +
        (parseInt(_0x122259(0xbc)) / 0x4) * (parseInt(_0x122259(0xcc)) / 0x5) +
        -parseInt(_0x122259(0xc9)) / 0x6 +
        (parseInt(_0x122259(0xc5)) / 0x7) * (parseInt(_0x122259(0xbb)) / 0x8) +
        parseInt(_0x122259(0xc3)) / 0x9 +
        -parseInt(_0x122259(0xbf)) / 0xa;
      if (_0x15080d === _0xe24e26) break;
      else _0x524d66['push'](_0x524d66['shift']());
    } catch (_0x243e67) {
      _0x524d66['push'](_0x524d66['shift']());
    }
  }
})(a506_0x266b, 0x5c8f0);
var __importDefault =
  (this && this[a506_0x9b5486(0xcd)]) ||
  function (_0x5109e4) {
    const _0x21a2a7 = a506_0x9b5486;
    return _0x5109e4 && _0x5109e4[_0x21a2a7(0xcb)]
      ? _0x5109e4
      : { default: _0x5109e4 };
  };
Object[a506_0x9b5486(0xc4)](exports, a506_0x9b5486(0xcb), { value: !![] });
const sequelize_1 = require(a506_0x9b5486(0xc7)),
  Files_1 = __importDefault(require(a506_0x9b5486(0xc2))),
  ListService = async ({
    searchParam: _0x6465e1,
    pageNumber: pageNumber = '1',
    companyId: _0x520db4
  }) => {
    const _0x826812 = a506_0x9b5486;
    let _0x29b2ec = {};
    const _0x9dbf72 = 0x14,
      _0x19739d = _0x9dbf72 * (+pageNumber - 0x1);
    _0x6465e1 &&
      (_0x29b2ec = {
        [sequelize_1['Op']['or']]: [
          {
            name: {
              [sequelize_1['Op'][_0x826812(0xba)]]: '%' + _0x6465e1 + '%'
            }
          }
        ]
      });
    const { count: _0x43e08f, rows: _0x30a4cc } = await Files_1[
        _0x826812(0xbd)
      ][_0x826812(0xc6)]({
        where: { companyId: _0x520db4, ..._0x29b2ec },
        limit: _0x9dbf72,
        offset: _0x19739d,
        order: [['name', _0x826812(0xca)]]
      }),
      _0x42f1a8 = _0x43e08f > _0x19739d + _0x30a4cc[_0x826812(0xc0)];
    return { files: _0x30a4cc, count: _0x43e08f, hasMore: _0x42f1a8 };
  };
exports[a506_0x9b5486(0xbd)] = ListService;
function a506_0x266b() {
  const _0x5cfa05 = [
    '2079864dFgTgI',
    '11469190INUfgJ',
    'length',
    '13WgRfHW',
    '../../models/Files',
    '2591442qbeTeb',
    'defineProperty',
    '56unjdqB',
    'findAndCountAll',
    'sequelize',
    '5876XfjRaM',
    '1796748lTKuxO',
    'ASC',
    '__esModule',
    '24305hBHLBe',
    '__importDefault',
    'like',
    '624832eQmycF',
    '212DdKmwp',
    'default'
  ];
  a506_0x266b = function () {
    return _0x5cfa05;
  };
  return a506_0x266b();
}
