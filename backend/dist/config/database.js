var a4_0x1f3c36 = a4_0x5c48;
function a4_0x5c48(_0x2fa005, _0x45d269) {
  var _0x376477 = a4_0x3764();
  return (
    (a4_0x5c48 = function (_0x5c48e8, _0x4b736b) {
      _0x5c48e8 = _0x5c48e8 - 0x144;
      var _0x10f7a6 = _0x376477[_0x5c48e8];
      return _0x10f7a6;
    }),
    a4_0x5c48(_0x2fa005, _0x45d269)
  );
}
function a4_0x3764() {
  var _0x54131d = [
    '304740KSHEGe',
    '123992SaYjdz',
    '4rAFCKO',
    '90bkndjD',
    '943491BVmbpZ',
    'DB_NAME',
    'America/Sao_Paulo',
    '4wNZWuB',
    'localhost',
    'exports',
    'DB_PORT',
    'utf8mb4',
    'env',
    '5432',
    '2364VhdJTr',
    '28gbSYJc',
    'DB_USER',
    '418194jUrffH',
    '5489GCbQNd',
    '../bootstrap',
    '530280IhAKjm',
    'postgres',
    'utf8mb4_bin',
    '1227665QbYCNK'
  ];
  a4_0x3764 = function () {
    return _0x54131d;
  };
  return a4_0x3764();
}
(function (_0x352536, _0xb6fc7d) {
  var _0x5e81f9 = a4_0x5c48,
    _0x4434d4 = _0x352536();
  while (!![]) {
    try {
      var _0x54a22d =
        (parseInt(_0x5e81f9(0x146)) / 0x1) *
          (parseInt(_0x5e81f9(0x158)) / 0x2) +
        (-parseInt(_0x5e81f9(0x15b)) / 0x3) *
          (parseInt(_0x5e81f9(0x159)) / 0x4) +
        parseInt(_0x5e81f9(0x156)) / 0x5 +
        -parseInt(_0x5e81f9(0x150)) / 0x6 +
        (parseInt(_0x5e81f9(0x14e)) / 0x7) *
          (parseInt(_0x5e81f9(0x153)) / 0x8) +
        (parseInt(_0x5e81f9(0x15a)) / 0x9) *
          (-parseInt(_0x5e81f9(0x157)) / 0xa) +
        (parseInt(_0x5e81f9(0x151)) / 0xb) * (parseInt(_0x5e81f9(0x14d)) / 0xc);
      if (_0x54a22d === _0xb6fc7d) break;
      else _0x4434d4['push'](_0x4434d4['shift']());
    } catch (_0x261352) {
      _0x4434d4['push'](_0x4434d4['shift']());
    }
  }
})(a4_0x3764, 0x29058),
  require(a4_0x1f3c36(0x152)),
  (module[a4_0x1f3c36(0x148)] = {
    define: { charset: a4_0x1f3c36(0x14a), collate: a4_0x1f3c36(0x155) },
    options: { requestTimeout: 0x927c0, encrypt: !![] },
    retry: {
      match: [
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/
      ],
      max: 0x64
    },
    pool: { max: 0x14, min: 0x0, acquire: 0xea60, idle: 0x927c0 },
    dialect: process[a4_0x1f3c36(0x14b)]['DB_DIALECT'] || a4_0x1f3c36(0x154),
    timezone: a4_0x1f3c36(0x145),
    host: process[a4_0x1f3c36(0x14b)]['DB_HOST'] || a4_0x1f3c36(0x147),
    port: process[a4_0x1f3c36(0x14b)][a4_0x1f3c36(0x149)] || a4_0x1f3c36(0x14c),
    database: process[a4_0x1f3c36(0x14b)][a4_0x1f3c36(0x144)],
    username: process[a4_0x1f3c36(0x14b)][a4_0x1f3c36(0x14f)],
    password: process[a4_0x1f3c36(0x14b)]['DB_PASS'],
    logging: ![]
  });
