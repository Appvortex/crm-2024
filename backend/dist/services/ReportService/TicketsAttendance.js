'use strict';
const a572_0x5c0e6e = a572_0x3a04;
(function (_0x36951f, _0x58fa04) {
  const _0x538d5b = a572_0x3a04,
    _0x528f72 = _0x36951f();
  while (!![]) {
    try {
      const _0x4a38db =
        -parseInt(_0x538d5b(0x105)) / 0x1 +
        (-parseInt(_0x538d5b(0xf1)) / 0x2) *
          (-parseInt(_0x538d5b(0x104)) / 0x3) +
        (parseInt(_0x538d5b(0x102)) / 0x4) *
          (-parseInt(_0x538d5b(0xf4)) / 0x5) +
        parseInt(_0x538d5b(0xf3)) / 0x6 +
        -parseInt(_0x538d5b(0xf8)) / 0x7 +
        -parseInt(_0x538d5b(0xfb)) / 0x8 +
        (-parseInt(_0x538d5b(0xf0)) / 0x9) * (-parseInt(_0x538d5b(0xff)) / 0xa);
      if (_0x4a38db === _0x58fa04) break;
      else _0x528f72['push'](_0x528f72['shift']());
    } catch (_0x12b05) {
      _0x528f72['push'](_0x528f72['shift']());
    }
  }
})(a572_0x47b0, 0x451d3);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x30f719) {
    return _0x30f719 && _0x30f719['__esModule']
      ? _0x30f719
      : { default: _0x30f719 };
  };
function a572_0x3a04(_0x48bd8d, _0x448df3) {
  const _0x47b04b = a572_0x47b0();
  return (
    (a572_0x3a04 = function (_0x3a04a7, _0x5cac91) {
      _0x3a04a7 = _0x3a04a7 - 0xef;
      let _0x43f618 = _0x47b04b[_0x3a04a7];
      return _0x43f618;
    }),
    a572_0x3a04(_0x48bd8d, _0x448df3)
  );
}
Object[a572_0x5c0e6e(0xfa)](exports, a572_0x5c0e6e(0x103), { value: !![] }),
  (exports[a572_0x5c0e6e(0xf9)] = void 0x0);
const index_1 = __importDefault(require(a572_0x5c0e6e(0xfe))),
  sequelize_1 = require(a572_0x5c0e6e(0x100)),
  TicketsAttendance = async ({
    initialDate: _0x25974f,
    finalDate: _0x26e46e,
    companyId: _0x1ba53a
  }) => {
    const _0x38727e = a572_0x5c0e6e,
      _0xbe93d6 = _0x38727e(0xfd) + _0x1ba53a,
      _0x255b05 = await index_1[_0x38727e(0xef)]['query'](_0xbe93d6, {
        type: sequelize_1['QueryTypes'][_0x38727e(0xf5)]
      }),
      _0x5010e3 =
        _0x38727e(0xf6) +
        _0x1ba53a +
        _0x38727e(0xf7) +
        _0x25974f +
        '\x2000:00:00\x27\x0a\x20\x20\x20\x20and\x20tt.\x22createdAt\x22\x20<=\x20\x27' +
        _0x26e46e +
        '\x2023:59:59\x27\x0a\x20\x20group\x20by\x0a\x20\x20\x20\x20nome\x0a\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20nome\x20asc',
      _0x42cdb1 = await index_1['default']['query'](_0x5010e3, {
        type: sequelize_1[_0x38727e(0x101)][_0x38727e(0xf5)]
      });
    return (
      _0x255b05['map'](_0x458945 => {
        const _0x1a31f4 = _0x38727e;
        let _0x3f0d71 = _0x42cdb1['findIndex'](
          _0x3db614 =>
            _0x3db614[_0x1a31f4(0xfc)] === _0x458945[_0x1a31f4(0x106)]
        );
        _0x3f0d71 === -0x1 &&
          _0x42cdb1[_0x1a31f4(0xf2)]({
            quantidade: 0x0,
            nome: _0x458945[_0x1a31f4(0x106)]
          });
      }),
      { data: _0x42cdb1 }
    );
  };
function a572_0x47b0() {
  const _0x3afbf6 = [
    '2581248qVTeEW',
    '10aCasQm',
    'SELECT',
    '\x0a\x20\x20select\x0a\x20\x20\x20\x20COUNT(*)\x20AS\x20quantidade,\x0a\x20\x20\x20\x20u.name\x20AS\x20nome\x0a\x20\x20from\x0a\x20\x20\x20\x20\x22TicketTraking\x22\x20tt\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20u.id\x20=\x20tt.\x22userId\x22\x0a\x20\x20where\x0a\x20\x20\x20\x20tt.\x22companyId\x22\x20=\x20',
    '\x0a\x20\x20\x20\x20and\x20\x22ticketId\x22\x20is\x20not\x20null\x0a\x20\x20\x20\x20and\x20tt.\x22userId\x22\x20is\x20not\x20null\x0a\x20\x20\x20\x20and\x20tt.\x22createdAt\x22\x20>=\x20\x27',
    '2814812OLwgYz',
    'TicketsAttendance',
    'defineProperty',
    '1306728lLGwUg',
    'nome',
    'select\x20u.name\x20from\x20\x22Users\x22\x20u\x20where\x20u.\x22companyId\x22\x20=\x20',
    '../../database/index',
    '4360EDoFpG',
    'sequelize',
    'QueryTypes',
    '240236OTwCqk',
    '__esModule',
    '24xgNhbq',
    '156202VwnpSo',
    'name',
    'default',
    '2943RXVYhl',
    '138022LNrWik',
    'push'
  ];
  a572_0x47b0 = function () {
    return _0x3afbf6;
  };
  return a572_0x47b0();
}
exports[a572_0x5c0e6e(0xf9)] = TicketsAttendance;
