'use strict';
function a597_0x2ef8() {
  const _0x338dfb = [
    'SELECT',
    '5IXoGHg',
    '\x0a\x20\x20select\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a',
    'admin',
    '__importDefault',
    '16922697ujhhgS',
    '1698348dcZuLu',
    '3HpbbZE',
    '6693240bXbozV',
    '7PcRIwS',
    '8823770BnqYCO',
    '5012988BmYCqP',
    'sequelize',
    '9PcGcVB',
    'default',
    '\x0a\x20\x20select\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a',
    '359243hjyMCc',
    '526982jYxIma'
  ];
  a597_0x2ef8 = function () {
    return _0x338dfb;
  };
  return a597_0x2ef8();
}
const a597_0x3a95be = a597_0x241e;
(function (_0x56a4df, _0x59b641) {
  const _0x105ac2 = a597_0x241e,
    _0x5ddb45 = _0x56a4df();
  while (!![]) {
    try {
      const _0x9da1f0 =
        -parseInt(_0x105ac2(0x1a1)) / 0x1 +
        (-parseInt(_0x105ac2(0x1a2)) / 0x2) *
          (parseInt(_0x105ac2(0x1aa)) / 0x3) +
        (-parseInt(_0x105ac2(0x1a9)) / 0x4) *
          (-parseInt(_0x105ac2(0x1a4)) / 0x5) +
        parseInt(_0x105ac2(0x19c)) / 0x6 +
        (-parseInt(_0x105ac2(0x19a)) / 0x7) *
          (parseInt(_0x105ac2(0x1ab)) / 0x8) +
        (-parseInt(_0x105ac2(0x19e)) / 0x9) *
          (parseInt(_0x105ac2(0x19b)) / 0xa) +
        parseInt(_0x105ac2(0x1a8)) / 0xb;
      if (_0x9da1f0 === _0x59b641) break;
      else _0x5ddb45['push'](_0x5ddb45['shift']());
    } catch (_0x2fb08e) {
      _0x5ddb45['push'](_0x5ddb45['shift']());
    }
  }
})(a597_0x2ef8, 0x6f82a);
var __importDefault =
  (this && this[a597_0x3a95be(0x1a7)]) ||
  function (_0x21bbd4) {
    return _0x21bbd4 && _0x21bbd4['__esModule']
      ? _0x21bbd4
      : { default: _0x21bbd4 };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a597_0x3a95be(0x19d)),
  database_1 = __importDefault(require('../../database')),
  queryAdmin = a597_0x3a95be(0x1a0),
  query = a597_0x3a95be(0x1a5),
  DashTicketsChannels = async ({
    startDate: _0x44928b,
    endDate: _0x2b5354,
    companyId: _0x5a3a4f,
    userId: _0x39916a,
    userProfile: _0x362407
  }) => {
    const _0x4f4c58 = a597_0x3a95be,
      _0x3d5a73 = await database_1[_0x4f4c58(0x19f)]['query'](
        _0x362407 == _0x4f4c58(0x1a6) ? queryAdmin : query,
        {
          replacements: {
            companyId: _0x5a3a4f,
            startDate: _0x44928b,
            endDate: _0x2b5354,
            userId: _0x39916a
          },
          type: sequelize_1['QueryTypes'][_0x4f4c58(0x1a3)]
        }
      );
    return _0x3d5a73;
  };
function a597_0x241e(_0x17108c, _0x1be690) {
  const _0x2ef841 = a597_0x2ef8();
  return (
    (a597_0x241e = function (_0x241ed8, _0x4bd734) {
      _0x241ed8 = _0x241ed8 - 0x19a;
      let _0x31090f = _0x2ef841[_0x241ed8];
      return _0x31090f;
    }),
    a597_0x241e(_0x17108c, _0x1be690)
  );
}
exports['default'] = DashTicketsChannels;
