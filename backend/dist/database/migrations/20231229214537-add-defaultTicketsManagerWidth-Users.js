'use strict';
function a272_0x3652() {
  const _0x5f5d4c = [
    '1PFRILy',
    '1447330rgjolP',
    'DataTypes',
    '4CvKxuQ',
    'defineProperty',
    'defaultTicketsManagerWidth',
    '2386525NgvQiI',
    'sequelize',
    'Users',
    '862730vQpNXj',
    'INTEGER',
    '72DDOgkq',
    '1726360adiHTf',
    '2672845jkAoOZ',
    '1759176rdrkVB',
    'exports',
    '1007940AaCSyJ'
  ];
  a272_0x3652 = function () {
    return _0x5f5d4c;
  };
  return a272_0x3652();
}
const a272_0x331bfa = a272_0x7db5;
(function (_0x52171e, _0x19fc50) {
  const _0x3df459 = a272_0x7db5,
    _0x3ceb9e = _0x52171e();
  while (!![]) {
    try {
      const _0x447e5a =
        (-parseInt(_0x3df459(0xf2)) / 0x1) * (parseInt(_0x3df459(0xfb)) / 0x2) +
        parseInt(_0x3df459(0x102)) / 0x3 +
        (-parseInt(_0x3df459(0xf5)) / 0x4) * (parseInt(_0x3df459(0xf8)) / 0x5) +
        parseInt(_0x3df459(0x100)) / 0x6 +
        -parseInt(_0x3df459(0xff)) / 0x7 +
        -parseInt(_0x3df459(0xfe)) / 0x8 +
        (parseInt(_0x3df459(0xfd)) / 0x9) * (parseInt(_0x3df459(0xf3)) / 0xa);
      if (_0x447e5a === _0x19fc50) break;
      else _0x3ceb9e['push'](_0x3ceb9e['shift']());
    } catch (_0x3c917f) {
      _0x3ceb9e['push'](_0x3ceb9e['shift']());
    }
  }
})(a272_0x3652, 0x448a4);
function a272_0x7db5(_0x5a7397, _0x22ac00) {
  const _0x3652cf = a272_0x3652();
  return (
    (a272_0x7db5 = function (_0x7db54c, _0x589161) {
      _0x7db54c = _0x7db54c - 0xf2;
      let _0x12c968 = _0x3652cf[_0x7db54c];
      return _0x12c968;
    }),
    a272_0x7db5(_0x5a7397, _0x22ac00)
  );
}
Object[a272_0x331bfa(0xf6)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a272_0x331bfa(0xf9));
module[a272_0x331bfa(0x101)] = {
  up: _0x4746f6 => {
    const _0x418752 = a272_0x331bfa;
    return _0x4746f6['addColumn'](_0x418752(0xfa), _0x418752(0xf7), {
      type: sequelize_1[_0x418752(0xf4)][_0x418752(0xfc)],
      allowNull: ![],
      defaultValue: 0x226
    });
  },
  down: _0x207af3 => {
    const _0x356522 = a272_0x331bfa;
    return _0x207af3['removeColumn']('Users', _0x356522(0xf7));
  }
};
