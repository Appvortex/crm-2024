'use strict';
const a167_0x4d8c10 = a167_0x5420;
(function (_0x4ee217, _0x100b7d) {
  const _0x5b718c = a167_0x5420,
    _0x2dcad0 = _0x4ee217();
  while (!![]) {
    try {
      const _0x5bd4fb =
        (parseInt(_0x5b718c(0x11c)) / 0x1) *
          (-parseInt(_0x5b718c(0x118)) / 0x2) +
        (parseInt(_0x5b718c(0x128)) / 0x3) *
          (-parseInt(_0x5b718c(0x11f)) / 0x4) +
        -parseInt(_0x5b718c(0x125)) / 0x5 +
        -parseInt(_0x5b718c(0x126)) / 0x6 +
        (-parseInt(_0x5b718c(0x129)) / 0x7) *
          (parseInt(_0x5b718c(0x117)) / 0x8) +
        (-parseInt(_0x5b718c(0x12b)) / 0x9) *
          (-parseInt(_0x5b718c(0x122)) / 0xa) +
        (parseInt(_0x5b718c(0x11b)) / 0xb) * (parseInt(_0x5b718c(0x12c)) / 0xc);
      if (_0x5bd4fb === _0x100b7d) break;
      else _0x2dcad0['push'](_0x2dcad0['shift']());
    } catch (_0x51da64) {
      _0x2dcad0['push'](_0x2dcad0['shift']());
    }
  }
})(a167_0x1ea5, 0xb5fcd);
Object[a167_0x4d8c10(0x127)](exports, a167_0x4d8c10(0x12f), { value: !![] });
function a167_0x1ea5() {
  const _0x51f797 = [
    'Companies',
    'exports',
    '4864205nfMaOz',
    '5153484amydGy',
    'defineProperty',
    '15Mgjadu',
    '392NaYHqF',
    'Subscriptions',
    '450MyPLaS',
    '720084jdFsKE',
    'DATE',
    'DataTypes',
    '__esModule',
    'BOOLEAN',
    'CASCADE',
    '112184zjTxMd',
    '342758fyRpkq',
    'sequelize',
    'dropTable',
    '693yWKGRe',
    '3UpZKLJ',
    'STRING',
    'INTEGER',
    '971792SLuefd',
    'createTable',
    'SET\x20NULL',
    '262180AliabA'
  ];
  a167_0x1ea5 = function () {
    return _0x51f797;
  };
  return a167_0x1ea5();
}
const sequelize_1 = require(a167_0x4d8c10(0x119));
function a167_0x5420(_0x4ae5eb, _0x1907fb) {
  const _0x1ea548 = a167_0x1ea5();
  return (
    (a167_0x5420 = function (_0x542011, _0x4536c5) {
      _0x542011 = _0x542011 - 0x117;
      let _0x1d096a = _0x1ea548[_0x542011];
      return _0x1d096a;
    }),
    a167_0x5420(_0x4ae5eb, _0x1907fb)
  );
}
module[a167_0x4d8c10(0x124)] = {
  up: _0x101c29 => {
    const _0x1172bc = a167_0x4d8c10;
    return _0x101c29[_0x1172bc(0x120)]('Subscriptions', {
      id: {
        type: sequelize_1[_0x1172bc(0x12e)][_0x1172bc(0x11e)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      isActive: {
        type: sequelize_1['DataTypes'][_0x1172bc(0x130)],
        defaultValue: ![]
      },
      expiresAt: {
        type: sequelize_1[_0x1172bc(0x12e)]['DATE'],
        allowNull: ![]
      },
      userPriceCents: { type: sequelize_1[_0x1172bc(0x12e)][_0x1172bc(0x11e)] },
      whatsPriceCents: {
        type: sequelize_1[_0x1172bc(0x12e)][_0x1172bc(0x11e)]
      },
      lastInvoiceUrl: {
        type: sequelize_1[_0x1172bc(0x12e)][_0x1172bc(0x11d)],
        allowNull: !![]
      },
      lastPlanChange: {
        type: sequelize_1[_0x1172bc(0x12e)][_0x1172bc(0x12d)],
        allowNull: !![]
      },
      companyId: {
        type: sequelize_1[_0x1172bc(0x12e)][_0x1172bc(0x11e)],
        references: { model: _0x1172bc(0x123), key: 'id' },
        onUpdate: _0x1172bc(0x131),
        onDelete: _0x1172bc(0x121),
        allowNull: ![]
      },
      providerSubscriptionId: {
        type: sequelize_1[_0x1172bc(0x12e)][_0x1172bc(0x11d)],
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x1172bc(0x12e)][_0x1172bc(0x12d)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x1172bc(0x12e)][_0x1172bc(0x12d)],
        allowNull: ![]
      }
    });
  },
  down: _0x185a2d => {
    const _0x2f810c = a167_0x4d8c10;
    return _0x185a2d[_0x2f810c(0x11a)](_0x2f810c(0x12a));
  }
};
