'use strict';
const a206_0x425b14 = a206_0x4c8e;
(function (_0x5063c6, _0x51c9a3) {
  const _0xdae449 = a206_0x4c8e,
    _0x36f8cc = _0x5063c6();
  while (!![]) {
    try {
      const _0x14bdf3 =
        parseInt(_0xdae449(0x96)) / 0x1 +
        (-parseInt(_0xdae449(0x9d)) / 0x2) * (parseInt(_0xdae449(0x99)) / 0x3) +
        parseInt(_0xdae449(0xa7)) / 0x4 +
        (-parseInt(_0xdae449(0xaa)) / 0x5) * (parseInt(_0xdae449(0xa0)) / 0x6) +
        parseInt(_0xdae449(0xa1)) / 0x7 +
        parseInt(_0xdae449(0xa2)) / 0x8 +
        -parseInt(_0xdae449(0xa9)) / 0x9;
      if (_0x14bdf3 === _0x51c9a3) break;
      else _0x36f8cc['push'](_0x36f8cc['shift']());
    } catch (_0x224ee7) {
      _0x36f8cc['push'](_0x36f8cc['shift']());
    }
  }
})(a206_0x5b15, 0x7c715);
Object[a206_0x425b14(0xa3)](exports, a206_0x425b14(0x98), { value: !![] });
function a206_0x5b15() {
  const _0x2b9935 = [
    'INTEGER',
    '881844sJGYEG',
    'createTable',
    'STRING',
    '174cIyeQR',
    '1435616QvxxhN',
    '5845904fdTehI',
    'defineProperty',
    'dropTable',
    'exports',
    'CASCADE',
    '3550448pYZCTA',
    'sequelize',
    '9808236zVQsul',
    '136465fMmtZX',
    '1008502wQARsz',
    'DATE',
    '__esModule',
    '3mcCgxZ',
    'FilesOptions',
    'DataTypes'
  ];
  a206_0x5b15 = function () {
    return _0x2b9935;
  };
  return a206_0x5b15();
}
const sequelize_1 = require(a206_0x425b14(0xa8));
function a206_0x4c8e(_0x56294e, _0x5797e9) {
  const _0x5b157c = a206_0x5b15();
  return (
    (a206_0x4c8e = function (_0x4c8ef7, _0x179834) {
      _0x4c8ef7 = _0x4c8ef7 - 0x96;
      let _0x166835 = _0x5b157c[_0x4c8ef7];
      return _0x166835;
    }),
    a206_0x4c8e(_0x56294e, _0x5797e9)
  );
}
module[a206_0x425b14(0xa5)] = {
  up: _0xb4039b => {
    const _0x4f38ee = a206_0x425b14;
    return _0xb4039b[_0x4f38ee(0x9e)]('FilesOptions', {
      id: {
        type: sequelize_1[_0x4f38ee(0x9b)][_0x4f38ee(0x9c)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: { type: sequelize_1['DataTypes'][_0x4f38ee(0x9f)], allowNull: ![] },
      path: {
        type: sequelize_1[_0x4f38ee(0x9b)][_0x4f38ee(0x9f)],
        allowNull: ![]
      },
      fileId: {
        type: sequelize_1[_0x4f38ee(0x9b)][_0x4f38ee(0x9c)],
        references: { model: 'Files', key: 'id' },
        onUpdate: _0x4f38ee(0xa6),
        onDelete: _0x4f38ee(0xa6),
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x4f38ee(0x9b)]['DATE'](0x6),
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x4f38ee(0x9b)][_0x4f38ee(0x97)](0x6),
        allowNull: ![]
      }
    });
  },
  down: _0x4c394a => {
    const _0x1c60bd = a206_0x425b14;
    return _0x4c394a[_0x1c60bd(0xa4)](_0x1c60bd(0x9a));
  }
};
