'use strict';
const a596_0x45deba = a596_0x227a;
(function (_0x3dae49, _0x20787a) {
  const _0x46486f = a596_0x227a,
    _0x5d98f9 = _0x3dae49();
  while (!![]) {
    try {
      const _0x369eae =
        parseInt(_0x46486f(0x154)) / 0x1 +
        (parseInt(_0x46486f(0x153)) / 0x2) *
          (parseInt(_0x46486f(0x14e)) / 0x3) +
        (parseInt(_0x46486f(0x150)) / 0x4) *
          (-parseInt(_0x46486f(0x160)) / 0x5) +
        (-parseInt(_0x46486f(0x161)) / 0x6) *
          (-parseInt(_0x46486f(0x151)) / 0x7) +
        -parseInt(_0x46486f(0x15a)) / 0x8 +
        (parseInt(_0x46486f(0x14d)) / 0x9) *
          (parseInt(_0x46486f(0x158)) / 0xa) +
        (parseInt(_0x46486f(0x152)) / 0xb) *
          (-parseInt(_0x46486f(0x14f)) / 0xc);
      if (_0x369eae === _0x20787a) break;
      else _0x5d98f9['push'](_0x5d98f9['shift']());
    } catch (_0x3c4adc) {
      _0x5d98f9['push'](_0x5d98f9['shift']());
    }
  }
})(a596_0x3f5f, 0x96701);
var __importDefault =
  (this && this[a596_0x45deba(0x15d)]) ||
  function (_0x18567d) {
    const _0xdb6df7 = a596_0x45deba;
    return _0x18567d && _0x18567d[_0xdb6df7(0x15c)]
      ? _0x18567d
      : { default: _0x18567d };
  };
Object['defineProperty'](exports, a596_0x45deba(0x15c), { value: !![] });
const sequelize_1 = require(a596_0x45deba(0x159)),
  database_1 = __importDefault(require(a596_0x45deba(0x155))),
  query =
    '\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(distinct(c.\x22id\x22))\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22Tickets\x22\x20tc\x20ON\x20tc.\x22contactId\x22\x20=\x20c.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20ltc\x20ON\x20ltc.\x22ticketId\x22\x20=\x20tc.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20ltc.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20lt.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a',
  queryAdmin = a596_0x45deba(0x156),
  DashTicketsAndTimes = async ({
    startDate: _0x2937c5,
    endDate: _0x39825b,
    tenantId: _0x3ac857,
    userId: _0x35d508,
    userProfile: _0x4f95c8
  }) => {
    const _0x20c15c = a596_0x45deba,
      _0x3b1c90 = await database_1[_0x20c15c(0x15f)][_0x20c15c(0x15b)](
        _0x4f95c8 == 'admin' ? queryAdmin : query,
        {
          replacements: {
            tenantId: _0x3ac857,
            startDate: _0x2937c5,
            endDate: _0x39825b,
            userId: _0x35d508
          },
          type: sequelize_1[_0x20c15c(0x15e)][_0x20c15c(0x157)]
        }
      );
    return _0x3b1c90;
  };
function a596_0x3f5f() {
  const _0x101bda = [
    '4gGugMX',
    '1099cybtMA',
    '89463ILICIj',
    '1161032vvYMXw',
    '425877XcqKzv',
    '../../database',
    '\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(1)\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a',
    'SELECT',
    '20RJdcPQ',
    'sequelize',
    '3941944BxUCdz',
    'query',
    '__esModule',
    '__importDefault',
    'QueryTypes',
    'default',
    '1918795cZzKWz',
    '32010QOFEYr',
    '5263101sxCLxQ',
    '3WKUMzx',
    '2244NFzHDG'
  ];
  a596_0x3f5f = function () {
    return _0x101bda;
  };
  return a596_0x3f5f();
}
function a596_0x227a(_0x1d5ca6, _0x583b2f) {
  const _0x3f5f28 = a596_0x3f5f();
  return (
    (a596_0x227a = function (_0x227a71, _0x4c6381) {
      _0x227a71 = _0x227a71 - 0x14d;
      let _0x399a97 = _0x3f5f28[_0x227a71];
      return _0x399a97;
    }),
    a596_0x227a(_0x1d5ca6, _0x583b2f)
  );
}
exports['default'] = DashTicketsAndTimes;
