'use strict';
const a602_0xba32f3 = a602_0x1698;
function a602_0x49d1() {
  const _0x3d3b25 = [
    '1298rylgyD',
    '676013BDBnrw',
    '2947240aaxiRW',
    'defineProperty',
    '132EpMcXx',
    '3ukUMgs',
    'query',
    '\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20distinct(email),\x0a\x20\x20\x20\x20name,\x0a\x20\x20\x20\x20--,\x20email,)\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27open\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_em_atendimento,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27pending\x27)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_pendentes,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27closed\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_resolvidos,\x0a\x20\x20\x20\x20count(*)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_por_usuario,\x0a\x20\x20\x20\x20min((DATE_PART(\x27day\x27,\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000))\x20*\x2024\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27hour\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20*\x2060\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27minute\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20menor_tempo_por_usuario,\x0a\x20\x20\x20\x20max((DATE_PART(\x27day\x27,\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000))\x20*\x2024\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27hour\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20*\x2060\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27minute\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20maior_tempo_por_usuario,\x0a\x20\x20\x20\x20avg((DATE_PART(\x27day\x27,\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000))\x20*\x2024\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27hour\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20*\x2060\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27minute\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20OVER\x20(PARTITION\x20by\x20email)\x20\x20as\x20tempo_medio_por_usuario\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20t.\x22userId\x22\x20=\x20\x22u\x22.\x22id\x22\x0a\x20\x20\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20q.id\x20\x20=\x20t.\x22queueId\x22\x0a\x20\x20\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20order\x20by\x206\x20Desc\x0a',
    '10210FyXkhd',
    'default',
    '__esModule',
    'SELECT',
    '294374rGvqJx',
    '131818LwFmKA',
    '77jGvAJe',
    'sequelize',
    '297552XareuM',
    '2251252zPWijN',
    '5RirAtL',
    '9EQnkdZ',
    '../../database'
  ];
  a602_0x49d1 = function () {
    return _0x3d3b25;
  };
  return a602_0x49d1();
}
(function (_0x57ac24, _0x321246) {
  const _0x1a3d02 = a602_0x1698,
    _0x509fb2 = _0x57ac24();
  while (!![]) {
    try {
      const _0x4bb5f0 =
        -parseInt(_0x1a3d02(0x9a)) / 0x1 +
        (-parseInt(_0x1a3d02(0x99)) / 0x2) *
          (-parseInt(_0x1a3d02(0x92)) / 0x3) +
        (parseInt(_0x1a3d02(0x89)) / 0x4) * (parseInt(_0x1a3d02(0x8a)) / 0x5) +
        (parseInt(_0x1a3d02(0x88)) / 0x6) * (-parseInt(_0x1a3d02(0x86)) / 0x7) +
        (-parseInt(_0x1a3d02(0x8f)) / 0x8) * (parseInt(_0x1a3d02(0x8b)) / 0x9) +
        (-parseInt(_0x1a3d02(0x95)) / 0xa) *
          (-parseInt(_0x1a3d02(0x8d)) / 0xb) +
        (parseInt(_0x1a3d02(0x91)) / 0xc) * (parseInt(_0x1a3d02(0x8e)) / 0xd);
      if (_0x4bb5f0 === _0x321246) break;
      else _0x509fb2['push'](_0x509fb2['shift']());
    } catch (_0x4873ee) {
      _0x509fb2['push'](_0x509fb2['shift']());
    }
  }
})(a602_0x49d1, 0x57192);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x205419) {
    const _0x4a1b2c = a602_0x1698;
    return _0x205419 && _0x205419[_0x4a1b2c(0x97)]
      ? _0x205419
      : { default: _0x205419 };
  };
function a602_0x1698(_0x22ea2f, _0x4fdbe8) {
  const _0x49d1e1 = a602_0x49d1();
  return (
    (a602_0x1698 = function (_0x16980b, _0x761600) {
      _0x16980b = _0x16980b - 0x86;
      let _0x420074 = _0x49d1e1[_0x16980b];
      return _0x420074;
    }),
    a602_0x1698(_0x22ea2f, _0x4fdbe8)
  );
}
Object[a602_0xba32f3(0x90)](exports, a602_0xba32f3(0x97), { value: !![] });
const sequelize_1 = require(a602_0xba32f3(0x87)),
  database_1 = __importDefault(require(a602_0xba32f3(0x8c))),
  query = a602_0xba32f3(0x94),
  StatisticsPerUser = async ({
    startDate: _0x205fb9,
    endDate: _0x61d14d,
    companyId: _0x41be1a
  }) => {
    const _0x3c76b4 = a602_0xba32f3,
      _0x353a66 = await database_1[_0x3c76b4(0x96)][_0x3c76b4(0x93)](query, {
        replacements: {
          companyId: _0x41be1a,
          startDate: _0x205fb9,
          endDate: _0x61d14d
        },
        type: sequelize_1['QueryTypes'][_0x3c76b4(0x98)]
      });
    return _0x353a66;
  };
exports[a602_0xba32f3(0x96)] = StatisticsPerUser;
