'use strict';
const a601_0x1709dd = a601_0x3023;
function a601_0x3026() {
  const _0x5d2b8e = [
    '60956XqaowD',
    '__esModule',
    '5354668oCGHSD',
    'query',
    '\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a',
    '\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a',
    'defineProperty',
    'sequelize',
    '739510iLwoYl',
    '7HHRrOD',
    '9026886AXsgyt',
    'admin',
    '117exgeKW',
    'SELECT',
    'default',
    '1545525AYqpbO',
    '23GAurWM',
    '2384916bCJsFj',
    '5260384TWYMWe',
    '4tPnmeW'
  ];
  a601_0x3026 = function () {
    return _0x5d2b8e;
  };
  return a601_0x3026();
}
(function (_0x233670, _0x3fae44) {
  const _0x5a55c4 = a601_0x3023,
    _0x40fb09 = _0x233670();
  while (!![]) {
    try {
      const _0x7ce811 =
        (parseInt(_0x5a55c4(0x112)) / 0x1) *
          (-parseInt(_0x5a55c4(0x116)) / 0x2) +
        (-parseInt(_0x5a55c4(0x113)) / 0x3) *
          (parseInt(_0x5a55c4(0x115)) / 0x4) +
        -parseInt(_0x5a55c4(0x111)) / 0x5 +
        parseInt(_0x5a55c4(0x10c)) / 0x6 +
        (-parseInt(_0x5a55c4(0x10b)) / 0x7) *
          (-parseInt(_0x5a55c4(0x114)) / 0x8) +
        (-parseInt(_0x5a55c4(0x10e)) / 0x9) *
          (-parseInt(_0x5a55c4(0x10a)) / 0xa) +
        -parseInt(_0x5a55c4(0x118)) / 0xb;
      if (_0x7ce811 === _0x3fae44) break;
      else _0x40fb09['push'](_0x40fb09['shift']());
    } catch (_0x200073) {
      _0x40fb09['push'](_0x40fb09['shift']());
    }
  }
})(a601_0x3026, 0xcb02d);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x457fa6) {
    const _0x367e75 = a601_0x3023;
    return _0x457fa6 && _0x457fa6[_0x367e75(0x117)]
      ? _0x457fa6
      : { default: _0x457fa6 };
  };
Object[a601_0x1709dd(0x108)](exports, a601_0x1709dd(0x117), { value: !![] });
function a601_0x3023(_0x20ce36, _0x50f151) {
  const _0x302646 = a601_0x3026();
  return (
    (a601_0x3023 = function (_0x3023a9, _0x28296b) {
      _0x3023a9 = _0x3023a9 - 0x107;
      let _0x1010bd = _0x302646[_0x3023a9];
      return _0x1010bd;
    }),
    a601_0x3023(_0x20ce36, _0x50f151)
  );
}
const sequelize_1 = require(a601_0x1709dd(0x109)),
  database_1 = __importDefault(require('../../database')),
  query = a601_0x1709dd(0x11a),
  queryAdmin = a601_0x1709dd(0x107),
  DashTicketsQueue = async ({
    startDate: _0x4451ed,
    endDate: _0x6ca758,
    companyId: _0x2e4553,
    userId: _0x1f11f3,
    userProfile: _0x3be2dc
  }) => {
    const _0x3f0e6e = a601_0x1709dd,
      _0xd0c2e = await database_1[_0x3f0e6e(0x110)][_0x3f0e6e(0x119)](
        _0x3be2dc == _0x3f0e6e(0x10d) ? queryAdmin : query,
        {
          replacements: {
            companyId: _0x2e4553,
            startDate: _0x4451ed,
            endDate: _0x6ca758,
            userId: _0x1f11f3
          },
          type: sequelize_1['QueryTypes'][_0x3f0e6e(0x10f)]
        }
      );
    return _0xd0c2e;
  };
exports[a601_0x1709dd(0x110)] = DashTicketsQueue;
