'use strict';
const a599_0x1b2945 = a599_0x1ed1;
(function (_0x1bb5a9, _0x4c6628) {
  const _0x4ee83d = a599_0x1ed1,
    _0x51476f = _0x1bb5a9();
  while (!![]) {
    try {
      const _0x344871 =
        (parseInt(_0x4ee83d(0xae)) / 0x1) * (parseInt(_0x4ee83d(0xb2)) / 0x2) +
        (-parseInt(_0x4ee83d(0xb1)) / 0x3) *
          (-parseInt(_0x4ee83d(0xbc)) / 0x4) +
        (-parseInt(_0x4ee83d(0xb7)) / 0x5) * (parseInt(_0x4ee83d(0xb8)) / 0x6) +
        parseInt(_0x4ee83d(0xc0)) / 0x7 +
        (parseInt(_0x4ee83d(0xbf)) / 0x8) * (parseInt(_0x4ee83d(0xb9)) / 0x9) +
        (parseInt(_0x4ee83d(0xad)) / 0xa) * (-parseInt(_0x4ee83d(0xb5)) / 0xb) +
        (parseInt(_0x4ee83d(0xbd)) / 0xc) * (-parseInt(_0x4ee83d(0xb4)) / 0xd);
      if (_0x344871 === _0x4c6628) break;
      else _0x51476f['push'](_0x51476f['shift']());
    } catch (_0x4c144b) {
      _0x51476f['push'](_0x51476f['shift']());
    }
  }
})(a599_0x4afb, 0x703c6);
function a599_0x4afb() {
  const _0xeab320 = [
    '1604575jvlSej',
    '../../database',
    'query',
    'default',
    '20wyRToP',
    '1RGLZoT',
    'sequelize',
    'SELECT',
    '2254740TbnFGe',
    '515002lwXOiC',
    '\x0a\x20\x20select\x20dt_ref,\x20to_char(dt_ref,\x20\x27DD/MM/YYYY\x27)\x20dt_referencia\x20,\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20dt_ref,\x0a\x20\x20--to_char(date_trunc(\x27day\x27,\x20t.\x22createdAt\x22),\x20\x27DD/MM/YYYY\x27)\x20,\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22),\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x201\x0a',
    '26ljjufd',
    '2287241xIxEUn',
    'QueryTypes',
    '56615UtGUcz',
    '258OFEtHv',
    '9boJBMy',
    '\x0a\x20\x20select\x20dt_ref,\x20to_char(dt_ref,\x20\x27DD/MM/YYYY\x27)\x20dt_referencia\x20,\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20dt_ref,\x0a\x20\x20--to_char(date_trunc(\x27day\x27,\x20t.\x22createdAt\x22),\x20\x27DD/MM/YYYY\x27)\x20,\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20\x20AND\x20lt.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22),\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x201\x0a',
    '__esModule',
    '4NAvnzu',
    '2850492CeowCZ',
    'admin',
    '4793960plztBi'
  ];
  a599_0x4afb = function () {
    return _0xeab320;
  };
  return a599_0x4afb();
}
function a599_0x1ed1(_0x250e0b, _0x29e292) {
  const _0x4afb93 = a599_0x4afb();
  return (
    (a599_0x1ed1 = function (_0x1ed14a, _0x1bc9ef) {
      _0x1ed14a = _0x1ed14a - 0xad;
      let _0x453ca4 = _0x4afb93[_0x1ed14a];
      return _0x453ca4;
    }),
    a599_0x1ed1(_0x250e0b, _0x29e292)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x1fdfd8) {
    const _0x4f7cb6 = a599_0x1ed1;
    return _0x1fdfd8 && _0x1fdfd8[_0x4f7cb6(0xbb)]
      ? _0x1fdfd8
      : { default: _0x1fdfd8 };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a599_0x1b2945(0xaf)),
  database_1 = __importDefault(require(a599_0x1b2945(0xc1))),
  query = a599_0x1b2945(0xba),
  queryAdmin = a599_0x1b2945(0xb3),
  DashTicketsEvolutionChannels = async ({
    startDate: _0x3fdc7b,
    endDate: _0x2e334b,
    companyId: _0x1685d0,
    userId: _0x420712,
    userProfile: _0x51376f
  }) => {
    const _0x13e421 = a599_0x1b2945,
      _0x108f1e = await database_1['default'][_0x13e421(0xc2)](
        _0x51376f == _0x13e421(0xbe) ? queryAdmin : query,
        {
          replacements: {
            companyId: _0x1685d0,
            startDate: _0x3fdc7b,
            endDate: _0x2e334b,
            userId: _0x420712
          },
          type: sequelize_1[_0x13e421(0xb6)][_0x13e421(0xb0)]
        }
      );
    return _0x108f1e;
  };
exports[a599_0x1b2945(0xc3)] = DashTicketsEvolutionChannels;
