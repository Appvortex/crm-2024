'use strict';
const a76_0x2803da = a76_0x3c51;
(function (_0x31ddf3, _0x2d7cdb) {
  const _0x2ef0ff = a76_0x3c51,
    _0x4c444e = _0x31ddf3();
  while (!![]) {
    try {
      const _0x12e3cf =
        (-parseInt(_0x2ef0ff(0x158)) / 0x1) *
          (parseInt(_0x2ef0ff(0x150)) / 0x2) +
        -parseInt(_0x2ef0ff(0x14b)) / 0x3 +
        -parseInt(_0x2ef0ff(0x14d)) / 0x4 +
        parseInt(_0x2ef0ff(0x147)) / 0x5 +
        parseInt(_0x2ef0ff(0x154)) / 0x6 +
        -parseInt(_0x2ef0ff(0x148)) / 0x7 +
        (-parseInt(_0x2ef0ff(0x152)) / 0x8) *
          (-parseInt(_0x2ef0ff(0x14a)) / 0x9);
      if (_0x12e3cf === _0x2d7cdb) break;
      else _0x4c444e['push'](_0x4c444e['shift']());
    } catch (_0x493aec) {
      _0x4c444e['push'](_0x4c444e['shift']());
    }
  }
})(a76_0x5302, 0x65c67);
function a76_0x5302() {
  const _0x3e24fe = [
    '716716NIpNka',
    'Messages',
    '6034792KGRdZu',
    'removeColumn',
    '436878ziyroo',
    '__esModule',
    'exports',
    'DataTypes',
    '1ucmTEo',
    'STRING',
    '2999970oFsFqy',
    '3038266ElsTdX',
    'CASCADE',
    '9PjbWhu',
    '64818pTsZpw',
    'sequelize',
    '785132vuooIa',
    'addColumn',
    'quotedMsgId'
  ];
  a76_0x5302 = function () {
    return _0x3e24fe;
  };
  return a76_0x5302();
}
Object['defineProperty'](exports, a76_0x2803da(0x155), { value: !![] });
function a76_0x3c51(_0xe42139, _0xe49c25) {
  const _0x5302ee = a76_0x5302();
  return (
    (a76_0x3c51 = function (_0x3c518d, _0x3c4dde) {
      _0x3c518d = _0x3c518d - 0x146;
      let _0x4faedd = _0x5302ee[_0x3c518d];
      return _0x4faedd;
    }),
    a76_0x3c51(_0xe42139, _0xe49c25)
  );
}
const sequelize_1 = require(a76_0x2803da(0x14c));
module[a76_0x2803da(0x156)] = {
  up: _0x3e5aa9 => {
    const _0x326814 = a76_0x2803da;
    return _0x3e5aa9[_0x326814(0x14e)](_0x326814(0x151), _0x326814(0x14f), {
      type: sequelize_1[_0x326814(0x157)][_0x326814(0x146)],
      references: { model: _0x326814(0x151), key: 'id' },
      onUpdate: _0x326814(0x149),
      onDelete: 'SET\x20NULL'
    });
  },
  down: _0x2e264e => {
    const _0x315348 = a76_0x2803da;
    return _0x2e264e[_0x315348(0x153)](_0x315348(0x151), 'quotedMsgId');
  }
};
