'use strict';
const a131_0x43d7eb = a131_0x866c;
(function (_0x7f8d39, _0x47addd) {
  const _0x4ea18a = a131_0x866c,
    _0x1f4bba = _0x7f8d39();
  while (!![]) {
    try {
      const _0x49d172 =
        parseInt(_0x4ea18a(0x14f)) / 0x1 +
        (-parseInt(_0x4ea18a(0x158)) / 0x2) *
          (-parseInt(_0x4ea18a(0x151)) / 0x3) +
        (parseInt(_0x4ea18a(0x15c)) / 0x4) *
          (-parseInt(_0x4ea18a(0x15e)) / 0x5) +
        (-parseInt(_0x4ea18a(0x162)) / 0x6) *
          (-parseInt(_0x4ea18a(0x163)) / 0x7) +
        (-parseInt(_0x4ea18a(0x161)) / 0x8) *
          (parseInt(_0x4ea18a(0x160)) / 0x9) +
        parseInt(_0x4ea18a(0x14d)) / 0xa +
        (parseInt(_0x4ea18a(0x150)) / 0xb) *
          (-parseInt(_0x4ea18a(0x159)) / 0xc);
      if (_0x49d172 === _0x47addd) break;
      else _0x1f4bba['push'](_0x1f4bba['shift']());
    } catch (_0x50e68a) {
      _0x1f4bba['push'](_0x1f4bba['shift']());
    }
  }
})(a131_0x4dea, 0x9b602);
function a131_0x4dea() {
  const _0x2f7142 = [
    '4KevaWD',
    'STRING',
    '4967345DsegUO',
    'CampaignSettings',
    '9BFZnqw',
    '4433512UdCzPK',
    '978VSnevV',
    '39025fCmDqa',
    'DATE',
    'INTEGER',
    'dropTable',
    '9666330sUlLSW',
    'Companies',
    '677229MhtqWO',
    '11OiYMro',
    '409623jZcqIG',
    'createTable',
    'TEXT',
    'defineProperty',
    'sequelize',
    'exports',
    'DataTypes',
    '4pDmqNE',
    '7699116xoBtZZ',
    'CASCADE',
    '__esModule'
  ];
  a131_0x4dea = function () {
    return _0x2f7142;
  };
  return a131_0x4dea();
}
function a131_0x866c(_0x5653ee, _0x73c83f) {
  const _0x4deabf = a131_0x4dea();
  return (
    (a131_0x866c = function (_0x866c6e, _0x370d2e) {
      _0x866c6e = _0x866c6e - 0x14a;
      let _0x32aaef = _0x4deabf[_0x866c6e];
      return _0x32aaef;
    }),
    a131_0x866c(_0x5653ee, _0x73c83f)
  );
}
Object[a131_0x43d7eb(0x154)](exports, a131_0x43d7eb(0x15b), { value: !![] });
const sequelize_1 = require(a131_0x43d7eb(0x155));
module[a131_0x43d7eb(0x156)] = {
  up: _0xe920dc => {
    const _0x2c22a1 = a131_0x43d7eb;
    return _0xe920dc[_0x2c22a1(0x152)]('CampaignSettings', {
      id: {
        type: sequelize_1[_0x2c22a1(0x157)][_0x2c22a1(0x14b)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      key: {
        type: sequelize_1[_0x2c22a1(0x157)][_0x2c22a1(0x15d)],
        allowNull: ![]
      },
      value: {
        type: sequelize_1['DataTypes'][_0x2c22a1(0x153)],
        allowNull: !![]
      },
      companyId: {
        type: sequelize_1[_0x2c22a1(0x157)][_0x2c22a1(0x14b)],
        references: { model: _0x2c22a1(0x14e), key: 'id' },
        onUpdate: _0x2c22a1(0x15a),
        onDelete: _0x2c22a1(0x15a),
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x2c22a1(0x14a)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x2c22a1(0x157)][_0x2c22a1(0x14a)],
        allowNull: ![]
      }
    });
  },
  down: _0xb9463b => {
    const _0x252f93 = a131_0x43d7eb;
    return _0xb9463b[_0x252f93(0x14c)](_0x252f93(0x15f));
  }
};
