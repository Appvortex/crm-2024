'use strict';
const a412_0x49bccd = a412_0x536a;
(function (_0x196c2c, _0x40d7b0) {
  const _0x3c61de = a412_0x536a,
    _0x47e8da = _0x196c2c();
  while (!![]) {
    try {
      const _0x5e35f2 =
        (-parseInt(_0x3c61de(0x1c7)) / 0x1) *
          (parseInt(_0x3c61de(0x1ba)) / 0x2) +
        -parseInt(_0x3c61de(0x1ce)) / 0x3 +
        (parseInt(_0x3c61de(0x1c1)) / 0x4) *
          (parseInt(_0x3c61de(0x1be)) / 0x5) +
        (-parseInt(_0x3c61de(0x1c4)) / 0x6) *
          (-parseInt(_0x3c61de(0x1ca)) / 0x7) +
        (-parseInt(_0x3c61de(0x1b6)) / 0x8) *
          (parseInt(_0x3c61de(0x1c8)) / 0x9) +
        (-parseInt(_0x3c61de(0x1cd)) / 0xa) *
          (parseInt(_0x3c61de(0x1cc)) / 0xb) +
        parseInt(_0x3c61de(0x1cb)) / 0xc;
      if (_0x5e35f2 === _0x40d7b0) break;
      else _0x47e8da['push'](_0x47e8da['shift']());
    } catch (_0x353f77) {
      _0x47e8da['push'](_0x47e8da['shift']());
    }
  }
})(a412_0x29c6, 0x9496a);
function a412_0x536a(_0x1c84bf, _0x3b3a39) {
  const _0x29c6ef = a412_0x29c6();
  return (
    (a412_0x536a = function (_0x536a91, _0xa51898) {
      _0x536a91 = _0x536a91 - 0x1b5;
      let _0x2437cb = _0x29c6ef[_0x536a91];
      return _0x2437cb;
    }),
    a412_0x536a(_0x1c84bf, _0x3b3a39)
  );
}
var __importDefault =
  (this && this[a412_0x49bccd(0x1bc)]) ||
  function (_0x561983) {
    return _0x561983 && _0x561983['__esModule']
      ? _0x561983
      : { default: _0x561983 };
  };
function a412_0x29c6() {
  const _0x21dcfb = [
    '2fCtcGC',
    '__esModule',
    '__importDefault',
    'col',
    '5cpOBAa',
    'LIKE',
    'where',
    '223388YZbDKr',
    'lodash',
    'DESC',
    '4674594kEmxYx',
    'length',
    'createdAt',
    '175016yiqyLq',
    '34479dGvtJi',
    'isEmpty',
    '7WJAjNJ',
    '22143432AEkDwP',
    '11LSFMnk',
    '8108010JFyLvL',
    '2924094roDaNm',
    'LOWER',
    'default',
    '232SpKDYW',
    'trim',
    'findAndCountAll',
    'defineProperty'
  ];
  a412_0x29c6 = function () {
    return _0x21dcfb;
  };
  return a412_0x29c6();
}
Object[a412_0x49bccd(0x1b9)](exports, a412_0x49bccd(0x1bb), { value: !![] });
const sequelize_1 = require('sequelize'),
  lodash_1 = require(a412_0x49bccd(0x1c2)),
  Announcement_1 = __importDefault(require('../../models/Announcement')),
  ListService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1'
  }) => {
    const _0x9ef563 = a412_0x49bccd;
    let _0x125529 = { status: !![] };
    !(0x0, lodash_1[_0x9ef563(0x1c9)])(searchParam) &&
      (_0x125529 = {
        ..._0x125529,
        [sequelize_1['Op']['or']]: [
          {
            title: (0x0, sequelize_1[_0x9ef563(0x1c0)])(
              (0x0, sequelize_1['fn'])(
                _0x9ef563(0x1cf),
                (0x0, sequelize_1[_0x9ef563(0x1bd)])('Announcement.title')
              ),
              _0x9ef563(0x1bf),
              '%' + searchParam['toLowerCase']()[_0x9ef563(0x1b7)]() + '%'
            )
          }
        ]
      });
    const _0x10c371 = 0x14,
      _0x42c857 = _0x10c371 * (+pageNumber - 0x1),
      { count: _0x26232b, rows: _0x2a94be } = await Announcement_1[
        _0x9ef563(0x1b5)
      ][_0x9ef563(0x1b8)]({
        where: _0x125529,
        limit: _0x10c371,
        offset: _0x42c857,
        order: [[_0x9ef563(0x1c6), _0x9ef563(0x1c3)]]
      }),
      _0x2f560f = _0x26232b > _0x42c857 + _0x2a94be[_0x9ef563(0x1c5)];
    return { records: _0x2a94be, count: _0x26232b, hasMore: _0x2f560f };
  };
exports[a412_0x49bccd(0x1b5)] = ListService;
