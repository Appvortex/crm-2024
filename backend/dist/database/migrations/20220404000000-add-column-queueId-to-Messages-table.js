'use strict';
const a134_0x2dbeae = a134_0x5869;
function a134_0x260e() {
  const _0x44509d = [
    '950632AxAMlG',
    'INTEGER',
    'queueId',
    'Messages',
    'addColumn',
    '30Bhcehh',
    'defineProperty',
    '73117SNxsPp',
    '32432ijvDae',
    'sequelize',
    'exports',
    '925UZuONb',
    '451837qerkHz',
    '912108KLvAOl',
    '3440zxATwX',
    '177342DVPArG',
    '1404179vnZpNU',
    'SET\x20NULL',
    '9UVXNDi'
  ];
  a134_0x260e = function () {
    return _0x44509d;
  };
  return a134_0x260e();
}
(function (_0x174c74, _0x3eb7bb) {
  const _0x1589ba = a134_0x5869,
    _0x272257 = _0x174c74();
  while (!![]) {
    try {
      const _0x17f2a4 =
        parseInt(_0x1589ba(0xa7)) / 0x1 +
        -parseInt(_0x1589ba(0xaa)) / 0x2 +
        parseInt(_0x1589ba(0xa8)) / 0x3 +
        (-parseInt(_0x1589ba(0xa3)) / 0x4) *
          (-parseInt(_0x1589ba(0xa6)) / 0x5) +
        (-parseInt(_0x1589ba(0xa0)) / 0x6) *
          (-parseInt(_0x1589ba(0x98)) / 0x7) +
        (-parseInt(_0x1589ba(0x9b)) / 0x8) * (parseInt(_0x1589ba(0x9a)) / 0x9) +
        (parseInt(_0x1589ba(0xa9)) / 0xa) * (-parseInt(_0x1589ba(0xa2)) / 0xb);
      if (_0x17f2a4 === _0x3eb7bb) break;
      else _0x272257['push'](_0x272257['shift']());
    } catch (_0x5a2f96) {
      _0x272257['push'](_0x272257['shift']());
    }
  }
})(a134_0x260e, 0xbab62);
Object[a134_0x2dbeae(0xa1)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a134_0x2dbeae(0xa4));
function a134_0x5869(_0x44f9f4, _0x31f319) {
  const _0x260e3d = a134_0x260e();
  return (
    (a134_0x5869 = function (_0x586913, _0x2257ee) {
      _0x586913 = _0x586913 - 0x98;
      let _0x457a4b = _0x260e3d[_0x586913];
      return _0x457a4b;
    }),
    a134_0x5869(_0x44f9f4, _0x31f319)
  );
}
module[a134_0x2dbeae(0xa5)] = {
  up: _0xa3c3f3 => {
    const _0x595a34 = a134_0x2dbeae;
    return _0xa3c3f3[_0x595a34(0x9f)]('Messages', 'queueId', {
      type: sequelize_1['DataTypes'][_0x595a34(0x9c)],
      references: { model: 'Queues', key: 'id' },
      onUpdate: 'SET\x20NULL',
      onDelete: _0x595a34(0x99)
    });
  },
  down: _0x46707f => {
    const _0x509735 = a134_0x2dbeae;
    return _0x46707f['removeColumn'](_0x509735(0x9e), _0x509735(0x9d));
  }
};
