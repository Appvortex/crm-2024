'use strict';
const a600_0x5082e6 = a600_0x48dd;
(function (_0x2ae2ef, _0x19bd17) {
  const _0xecafac = a600_0x48dd,
    _0x148842 = _0x2ae2ef();
  while (!![]) {
    try {
      const _0xf94785 =
        (-parseInt(_0xecafac(0x19b)) / 0x1) *
          (parseInt(_0xecafac(0x195)) / 0x2) +
        (-parseInt(_0xecafac(0x19a)) / 0x3) *
          (-parseInt(_0xecafac(0x1a2)) / 0x4) +
        (parseInt(_0xecafac(0x1a0)) / 0x5) *
          (parseInt(_0xecafac(0x191)) / 0x6) +
        -parseInt(_0xecafac(0x197)) / 0x7 +
        -parseInt(_0xecafac(0x194)) / 0x8 +
        parseInt(_0xecafac(0x190)) / 0x9 +
        (-parseInt(_0xecafac(0x198)) / 0xa) *
          (-parseInt(_0xecafac(0x199)) / 0xb);
      if (_0xf94785 === _0x19bd17) break;
      else _0x148842['push'](_0x148842['shift']());
    } catch (_0x58b0e4) {
      _0x148842['push'](_0x148842['shift']());
    }
  }
})(a600_0x10c8, 0xcb980);
var __importDefault =
  (this && this[a600_0x5082e6(0x196)]) ||
  function (_0x5617a4) {
    const _0x283f9e = a600_0x5082e6;
    return _0x5617a4 && _0x5617a4[_0x283f9e(0x1a4)]
      ? _0x5617a4
      : { default: _0x5617a4 };
  };
Object['defineProperty'](exports, a600_0x5082e6(0x1a4), { value: !![] });
const sequelize_1 = require(a600_0x5082e6(0x192)),
  database_1 = __importDefault(require(a600_0x5082e6(0x1a3))),
  query = a600_0x5082e6(0x19c),
  queryAdmin =
    '\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20distinct(email),\x0a\x20\x20\x20\x20name,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27open\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_em_atendimento,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27pending\x27)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_pendentes,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27closed\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_resolvidos,\x0a\x20\x20\x20\x20count(*)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_por_usuario,\x0a\x20\x20\x20\x20--ROUND(MIN(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20menor_tma,\x0a\x20\x20\x20\x20--ROUND(MAX(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20maior_tma,\x0a\x20\x20\x20\x20concat(coalesce(ROUND(AVG(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200),\x200),\x20\x27minutes\x27)::interval\x20tma,\x0a\x20\x20\x20\x20--ROUND(MIN(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20menor_tme,\x0a\x20\x20\x20\x20--ROUND(MAX(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20maior_tme,\x0a\x20\x20\x20\x20concat(coalesce(ROUND(AVG(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200),\x200),\x20\x27minutes\x27)::interval\x20tme\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20t.\x22userId\x22\x20=\x20\x22u\x22.\x22id\x22\x0a\x20\x20\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20q.id\x20\x20=\x20t.\x22queueId\x22\x0a\x20\x20\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20order\x20by\x206\x20Desc\x0a',
  DashTicketsPerUsersDetail = async ({
    startDate: _0x24ab65,
    endDate: _0x45ba8e,
    companyId: _0x503984,
    userId: _0x2836a1,
    userProfile: _0xac63f3
  }) => {
    const _0x1037a1 = a600_0x5082e6,
      _0x534ffc = await database_1[_0x1037a1(0x193)][_0x1037a1(0x1a1)](
        _0xac63f3 == _0x1037a1(0x19d) ? queryAdmin : query,
        {
          replacements: {
            companyId: _0x503984,
            startDate: _0x24ab65,
            endDate: _0x45ba8e,
            userId: _0x2836a1
          },
          type: sequelize_1[_0x1037a1(0x19e)][_0x1037a1(0x19f)]
        }
      );
    return _0x534ffc;
  };
function a600_0x48dd(_0x420a4d, _0x396aca) {
  const _0x10c8ac = a600_0x10c8();
  return (
    (a600_0x48dd = function (_0x48dd36, _0x38fc1f) {
      _0x48dd36 = _0x48dd36 - 0x190;
      let _0x54faa8 = _0x10c8ac[_0x48dd36];
      return _0x54faa8;
    }),
    a600_0x48dd(_0x420a4d, _0x396aca)
  );
}
exports[a600_0x5082e6(0x193)] = DashTicketsPerUsersDetail;
function a600_0x10c8() {
  const _0x3a1e46 = [
    'query',
    '4ykoDtd',
    '../../database',
    '__esModule',
    '11355606TBafyO',
    '612792zGNMmZ',
    'sequelize',
    'default',
    '6647464dVOHhk',
    '443262BBifTv',
    '__importDefault',
    '9915675FLPHjB',
    '50VuhcYN',
    '2533322KErCzf',
    '4357578UrtpjP',
    '4mHawvH',
    '\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20distinct(email),\x0a\x20\x20\x20\x20name,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27open\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_em_atendimento,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27pending\x27)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_pendentes,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27closed\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_resolvidos,\x0a\x20\x20\x20\x20count(*)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_por_usuario,\x0a\x20\x20\x20\x20--ROUND(MIN(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20menor_tma,\x0a\x20\x20\x20\x20--ROUND(MAX(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20maior_tma,\x0a\x20\x20\x20\x20concat(coalesce(ROUND(AVG(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200),\x200),\x20\x27minutes\x27)::interval\x20tma,\x0a\x20\x20\x20\x20--ROUND(MIN(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20menor_tme,\x0a\x20\x20\x20\x20--ROUND(MAX(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20maior_tme,\x0a\x20\x20\x20\x20concat(coalesce(ROUND(AVG(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200),\x200),\x20\x27minutes\x27)::interval\x20tme\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20t.\x22userId\x22\x20=\x20\x22u\x22.\x22id\x22\x0a\x20\x20\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20q.id\x20\x20=\x20t.\x22queueId\x22\x0a\x20\x20\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20order\x20by\x206\x20Desc\x0a',
    'admin',
    'QueryTypes',
    'SELECT',
    '5gFmOYU'
  ];
  a600_0x10c8 = function () {
    return _0x3a1e46;
  };
  return a600_0x10c8();
}
