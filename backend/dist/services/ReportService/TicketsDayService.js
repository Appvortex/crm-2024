'use strict';
const a573_0x16354c = a573_0xdb54;
(function (_0x310c2f, _0x7de51b) {
  const _0x1d9506 = a573_0xdb54,
    _0x3edf87 = _0x310c2f();
  while (!![]) {
    try {
      const _0x35e1dc =
        parseInt(_0x1d9506(0x1f0)) / 0x1 +
        parseInt(_0x1d9506(0x1f7)) / 0x2 +
        -parseInt(_0x1d9506(0x1fd)) / 0x3 +
        -parseInt(_0x1d9506(0x20a)) / 0x4 +
        (-parseInt(_0x1d9506(0x1fc)) / 0x5) *
          (parseInt(_0x1d9506(0x206)) / 0x6) +
        -parseInt(_0x1d9506(0x1f5)) / 0x7 +
        (-parseInt(_0x1d9506(0x1ff)) / 0x8) *
          (-parseInt(_0x1d9506(0x1f6)) / 0x9);
      if (_0x35e1dc === _0x7de51b) break;
      else _0x3edf87['push'](_0x3edf87['shift']());
    } catch (_0x2ed5ae) {
      _0x3edf87['push'](_0x3edf87['shift']());
    }
  }
})(a573_0x22b4, 0x7d3b2);
function a573_0x22b4() {
  const _0x242f59 = [
    '\x27\x0a\x20\x20GROUP\x20BY\x0a\x20\x20\x20\x20to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)\x0a\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20data\x20asc;\x0a\x20\x20',
    '36nnGwcD',
    '\x0a\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20COUNT(*)\x20AS\x20total,\x0a\x20\x20\x20\x20\x20\x20extract(hour\x20from\x20tick.\x22createdAt\x22)\x20AS\x20horario\x0a\x20\x20\x20\x20\x20\x20--to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd-mm-YYYY\x27)\x20as\x20horario\x0a\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x22TicketTraking\x22\x20tick\x0a\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20tick.\x22companyId\x22\x20=\x20',
    '\x27\x0a\x20\x20\x20\x20AND\x20DATE(tick.\x22createdAt\x22)\x20<=\x20\x27',
    '../../database/index',
    '2937300InnSRI',
    '658776hBqiNC',
    'total',
    'TicketsDayService',
    'SELECT',
    'forEach',
    '2829078roJfQD',
    '4347459MmUyDn',
    '1467828PWtqyA',
    'query',
    '\x2023:59:59\x27\x0a\x20\x20\x20\x20GROUP\x20BY\x0a\x20\x20\x20\x20\x20\x20extract(hour\x20from\x20tick.\x22createdAt\x22)\x0a\x20\x20\x20\x20\x20\x20--to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd-mm-YYYY\x27)\x0a\x20\x20\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20\x20\x20horario\x20asc;\x0a\x20\x20\x20\x20',
    '__esModule',
    '\x0a\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20COUNT(*)\x20AS\x20total,\x0a\x20\x20\x20\x20to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)\x20as\x20data\x0a\x20\x20FROM\x0a\x20\x20\x20\x20\x22TicketTraking\x22\x20tick\x0a\x20\x20WHERE\x0a\x20\x20\x20\x20tick.\x22companyId\x22\x20=\x20',
    '719350MAaduL',
    '981594eInUaB',
    'sequelize',
    '24hVoakI',
    '__importDefault',
    'default',
    '\x0a\x20\x20\x20\x20\x20\x20and\x20DATE(tick.\x22createdAt\x22)\x20>=\x20\x27',
    'QueryTypes',
    'trim'
  ];
  a573_0x22b4 = function () {
    return _0x242f59;
  };
  return a573_0x22b4();
}
function a573_0xdb54(_0x5882ad, _0x552c8b) {
  const _0x22b419 = a573_0x22b4();
  return (
    (a573_0xdb54 = function (_0xdb5445, _0xd90a4b) {
      _0xdb5445 = _0xdb5445 - 0x1f0;
      let _0x5b1f72 = _0x22b419[_0xdb5445];
      return _0x5b1f72;
    }),
    a573_0xdb54(_0x5882ad, _0x552c8b)
  );
}
var __importDefault =
  (this && this[a573_0x16354c(0x200)]) ||
  function (_0x3278c6) {
    return _0x3278c6 && _0x3278c6['__esModule']
      ? _0x3278c6
      : { default: _0x3278c6 };
  };
Object['defineProperty'](exports, a573_0x16354c(0x1fa), { value: !![] }),
  (exports[a573_0x16354c(0x1f2)] = void 0x0);
const index_1 = __importDefault(require(a573_0x16354c(0x209))),
  sequelize_1 = require(a573_0x16354c(0x1fe)),
  TicketsDayService = async ({
    initialDate: _0xde41e4,
    finalDate: _0x213646,
    companyId: _0x50ca31
  }) => {
    const _0x5214ec = a573_0x16354c;
    let _0x246958 = '',
      _0x28f869 = 0x0;
    _0xde41e4 &&
    _0xde41e4[_0x5214ec(0x204)]() === _0x213646 &&
    _0x213646[_0x5214ec(0x204)]()
      ? (_0x246958 =
          _0x5214ec(0x207) +
          _0x50ca31 +
          _0x5214ec(0x202) +
          _0xde41e4 +
          '\x2000:00:00\x27\x0a\x20\x20\x20\x20\x20\x20AND\x20DATE(tick.\x22createdAt\x22)\x20<=\x20\x27' +
          _0x213646 +
          _0x5214ec(0x1f9))
      : (_0x246958 =
          _0x5214ec(0x1fb) +
          _0x50ca31 +
          '\x0a\x20\x20\x20\x20and\x20DATE(tick.\x22createdAt\x22)\x20>=\x20\x27' +
          _0xde41e4 +
          _0x5214ec(0x208) +
          _0x213646 +
          _0x5214ec(0x205));
    const _0x48ce20 = await index_1[_0x5214ec(0x201)][_0x5214ec(0x1f8)](
      _0x246958,
      { type: sequelize_1[_0x5214ec(0x203)][_0x5214ec(0x1f3)] }
    );
    return (
      _0x48ce20[_0x5214ec(0x1f4)](_0xfe89d7 => {
        const _0x3e0b2d = _0x5214ec;
        _0x28f869 += Number(_0xfe89d7[_0x3e0b2d(0x1f1)]);
      }),
      { data: _0x48ce20, count: _0x28f869 }
    );
  };
exports['TicketsDayService'] = TicketsDayService;
