'use strict';
const a209_0x2b8fd5 = a209_0x1e13;
(function (_0x110bd9, _0x3b13a3) {
  const _0x4cead7 = a209_0x1e13,
    _0x35948f = _0x110bd9();
  while (!![]) {
    try {
      const _0x35bc66 =
        -parseInt(_0x4cead7(0x110)) / 0x1 +
        -parseInt(_0x4cead7(0x111)) / 0x2 +
        (parseInt(_0x4cead7(0x107)) / 0x3) *
          (parseInt(_0x4cead7(0x106)) / 0x4) +
        (-parseInt(_0x4cead7(0x10f)) / 0x5) *
          (-parseInt(_0x4cead7(0x10d)) / 0x6) +
        (parseInt(_0x4cead7(0x10a)) / 0x7) *
          (parseInt(_0x4cead7(0x10e)) / 0x8) +
        parseInt(_0x4cead7(0x105)) / 0x9 +
        parseInt(_0x4cead7(0x113)) / 0xa;
      if (_0x35bc66 === _0x3b13a3) break;
      else _0x35948f['push'](_0x35948f['shift']());
    } catch (_0x122797) {
      _0x35948f['push'](_0x35948f['shift']());
    }
  }
})(a209_0x14af, 0xf3689);
function a209_0x1e13(_0x2e2b26, _0x1b2e1f) {
  const _0x14af17 = a209_0x14af();
  return (
    (a209_0x1e13 = function (_0x1e13b7, _0x5ae9a0) {
      _0x1e13b7 = _0x1e13b7 - 0x104;
      let _0x57684f = _0x14af17[_0x1e13b7];
      return _0x57684f;
    }),
    a209_0x1e13(_0x2e2b26, _0x1b2e1f)
  );
}
Object['defineProperty'](exports, a209_0x2b8fd5(0x104), { value: !![] });
const sequelize_1 = require(a209_0x2b8fd5(0x112));
function a209_0x14af() {
  const _0x159870 = [
    '282309nSErbL',
    '3542272DgIywR',
    'sequelize',
    '3565070SxLnCS',
    'exports',
    '__esModule',
    '5087277uDRqZc',
    '4SseQda',
    '767361aDgPpH',
    'INTEGER',
    'removeColumn',
    '7768481gQUKWO',
    'optFileId',
    'Chatbots',
    '342umtIrb',
    '8KKczwF',
    '66940vOcJAs'
  ];
  a209_0x14af = function () {
    return _0x159870;
  };
  return a209_0x14af();
}
module[a209_0x2b8fd5(0x114)] = {
  up: _0x109f9d => {
    const _0x334e4e = a209_0x2b8fd5;
    return _0x109f9d['addColumn'](_0x334e4e(0x10c), _0x334e4e(0x10b), {
      type: sequelize_1['DataTypes'][_0x334e4e(0x108)],
      references: { model: 'Files', key: 'id' },
      defaultValue: null,
      allowNull: !![]
    });
  },
  down: _0x4c07dc => {
    const _0x3dd23e = a209_0x2b8fd5;
    return _0x4c07dc[_0x3dd23e(0x109)](_0x3dd23e(0x10c), 'optFileId');
  }
};
