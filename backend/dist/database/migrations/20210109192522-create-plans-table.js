'use strict';
const a91_0x578605 = a91_0x4b97;
(function (_0x1c0da1, _0x1ccc56) {
  const _0x34b69d = a91_0x4b97,
    _0x58a5ce = _0x1c0da1();
  while (!![]) {
    try {
      const _0xfa5aa7 =
        (-parseInt(_0x34b69d(0x189)) / 0x1) *
          (-parseInt(_0x34b69d(0x187)) / 0x2) +
        (-parseInt(_0x34b69d(0x188)) / 0x3) *
          (-parseInt(_0x34b69d(0x17f)) / 0x4) +
        -parseInt(_0x34b69d(0x178)) / 0x5 +
        parseInt(_0x34b69d(0x185)) / 0x6 +
        (-parseInt(_0x34b69d(0x177)) / 0x7) *
          (parseInt(_0x34b69d(0x17e)) / 0x8) +
        (-parseInt(_0x34b69d(0x186)) / 0x9) *
          (parseInt(_0x34b69d(0x179)) / 0xa) +
        (-parseInt(_0x34b69d(0x18a)) / 0xb) *
          (-parseInt(_0x34b69d(0x184)) / 0xc);
      if (_0xfa5aa7 === _0x1ccc56) break;
      else _0x58a5ce['push'](_0x58a5ce['shift']());
    } catch (_0x457e9b) {
      _0x58a5ce['push'](_0x58a5ce['shift']());
    }
  }
})(a91_0x4ddd, 0xc73d8);
function a91_0x4ddd() {
  const _0x363119 = [
    '2361hDogbB',
    '1yqxPrs',
    '6171242Zapidt',
    '7OqhhYl',
    '602140YYngjL',
    '6890AlldTq',
    'sequelize',
    'DATE',
    'STRING',
    'DataTypes',
    '4709176GRlMye',
    '1748WqbgYP',
    '__esModule',
    'INTEGER',
    'Plans',
    'exports',
    '48PUwncK',
    '109176vpCmoY',
    '18549TAiXWo',
    '677978lEsvjT'
  ];
  a91_0x4ddd = function () {
    return _0x363119;
  };
  return a91_0x4ddd();
}
Object['defineProperty'](exports, a91_0x578605(0x180), { value: !![] });
const sequelize_1 = require(a91_0x578605(0x17a));
function a91_0x4b97(_0x15caf8, _0x38bdc2) {
  const _0x4ddd8f = a91_0x4ddd();
  return (
    (a91_0x4b97 = function (_0x4b9795, _0x5a6778) {
      _0x4b9795 = _0x4b9795 - 0x177;
      let _0x493fd2 = _0x4ddd8f[_0x4b9795];
      return _0x493fd2;
    }),
    a91_0x4b97(_0x15caf8, _0x38bdc2)
  );
}
module[a91_0x578605(0x183)] = {
  up: _0x33b78a => {
    const _0x49fda6 = a91_0x578605;
    return _0x33b78a['createTable'](_0x49fda6(0x182), {
      id: {
        type: sequelize_1[_0x49fda6(0x17d)][_0x49fda6(0x181)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x49fda6(0x17d)][_0x49fda6(0x17c)],
        allowNull: ![],
        unique: !![]
      },
      users: {
        type: sequelize_1[_0x49fda6(0x17d)][_0x49fda6(0x181)],
        defaultValue: 0x0
      },
      connections: {
        type: sequelize_1[_0x49fda6(0x17d)][_0x49fda6(0x181)],
        defaultValue: 0x0
      },
      queues: {
        type: sequelize_1[_0x49fda6(0x17d)]['INTEGER'],
        defaultValue: 0x0
      },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x49fda6(0x17b)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x49fda6(0x17d)][_0x49fda6(0x17b)],
        allowNull: ![]
      }
    });
  },
  down: _0x2143ef => {
    const _0x23ecd7 = a91_0x578605;
    return _0x2143ef['dropTable'](_0x23ecd7(0x182));
  }
};
