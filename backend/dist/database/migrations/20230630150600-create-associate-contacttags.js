'use strict';
const a195_0x260497 = a195_0x42bb;
(function (_0x1f86d5, _0xfaae39) {
  const _0x152e68 = a195_0x42bb,
    _0x46d59c = _0x1f86d5();
  while (!![]) {
    try {
      const _0x5368f0 =
        parseInt(_0x152e68(0x189)) / 0x1 +
        parseInt(_0x152e68(0x192)) / 0x2 +
        -parseInt(_0x152e68(0x187)) / 0x3 +
        (parseInt(_0x152e68(0x194)) / 0x4) *
          (-parseInt(_0x152e68(0x18f)) / 0x5) +
        -parseInt(_0x152e68(0x191)) / 0x6 +
        (-parseInt(_0x152e68(0x186)) / 0x7) *
          (parseInt(_0x152e68(0x190)) / 0x8) +
        (parseInt(_0x152e68(0x18a)) / 0x9) * (parseInt(_0x152e68(0x197)) / 0xa);
      if (_0x5368f0 === _0xfaae39) break;
      else _0x46d59c['push'](_0x46d59c['shift']());
    } catch (_0x4676b3) {
      _0x46d59c['push'](_0x46d59c['shift']());
    }
  }
})(a195_0x7e0d, 0x88814);
Object[a195_0x260497(0x18c)](exports, a195_0x260497(0x196), { value: !![] });
function a195_0x42bb(_0x16cdb1, _0x3f37c1) {
  const _0x7e0dbf = a195_0x7e0d();
  return (
    (a195_0x42bb = function (_0x42bba7, _0x53ee9d) {
      _0x42bba7 = _0x42bba7 - 0x185;
      let _0x4b840e = _0x7e0dbf[_0x42bba7];
      return _0x4b840e;
    }),
    a195_0x42bb(_0x16cdb1, _0x3f37c1)
  );
}
function a195_0x7e0d() {
  const _0x2da237 = [
    'DATE',
    'DataTypes',
    '60dpncaA',
    '17728iKyowq',
    '6220680MJCxPM',
    '1340122PUPRZE',
    'ContactTags',
    '129396qXuVJr',
    'createTable',
    '__esModule',
    '310NeOmxX',
    'dropTable',
    '1386jHNOBe',
    '1420506iTCwRM',
    'Tags',
    '153858XTriny',
    '601677EaYNoa',
    'CASCADE',
    'defineProperty'
  ];
  a195_0x7e0d = function () {
    return _0x2da237;
  };
  return a195_0x7e0d();
}
const sequelize_1 = require('sequelize');
module['exports'] = {
  up: _0x258888 => {
    const _0x50bd10 = a195_0x260497;
    return _0x258888[_0x50bd10(0x195)](_0x50bd10(0x193), {
      contactId: {
        type: sequelize_1[_0x50bd10(0x18e)]['INTEGER'],
        references: { model: 'Contacts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: _0x50bd10(0x18b),
        allowNull: ![]
      },
      tagId: {
        type: sequelize_1[_0x50bd10(0x18e)]['INTEGER'],
        references: { model: _0x50bd10(0x188), key: 'id' },
        onUpdate: _0x50bd10(0x18b),
        onDelete: 'CASCADE',
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x50bd10(0x18d)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x50bd10(0x18e)][_0x50bd10(0x18d)],
        allowNull: ![]
      }
    });
  },
  down: _0xda8aaa => {
    const _0x5384ad = a195_0x260497;
    return _0xda8aaa[_0x5384ad(0x185)](_0x5384ad(0x193));
  }
};
