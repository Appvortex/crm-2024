'use strict';
function a111_0x1e90() {
  const _0x3f7ee8 = [
    '__esModule',
    'INTEGER',
    '395320CiKoih',
    'CASCADE',
    'sequelize',
    'exports',
    '18zSrUqH',
    '2407536uiwELX',
    'DATE',
    'Chatbots',
    'defineProperty',
    'dropTable',
    '1610791ayZKaT',
    '2586366egJxib',
    'Queues',
    'TEXT',
    '2163235ZScroL',
    '4544164AOKAna',
    'DataTypes',
    '14RzbxRi',
    'createTable',
    '330222FmEFJl'
  ];
  a111_0x1e90 = function () {
    return _0x3f7ee8;
  };
  return a111_0x1e90();
}
const a111_0x25880a = a111_0x762e;
(function (_0x427173, _0x1ae144) {
  const _0x2dabd2 = a111_0x762e,
    _0x1770e0 = _0x427173();
  while (!![]) {
    try {
      const _0x40f2e4 =
        parseInt(_0x2dabd2(0xce)) / 0x1 +
        (parseInt(_0x2dabd2(0xc9)) / 0x2) * (parseInt(_0x2dabd2(0xcb)) / 0x3) +
        parseInt(_0x2dabd2(0xc7)) / 0x4 +
        (parseInt(_0x2dabd2(0xc6)) / 0x5) * (-parseInt(_0x2dabd2(0xd2)) / 0x6) +
        -parseInt(_0x2dabd2(0xd8)) / 0x7 +
        -parseInt(_0x2dabd2(0xd3)) / 0x8 +
        parseInt(_0x2dabd2(0xd9)) / 0x9;
      if (_0x40f2e4 === _0x1ae144) break;
      else _0x1770e0['push'](_0x1770e0['shift']());
    } catch (_0x3e6eca) {
      _0x1770e0['push'](_0x1770e0['shift']());
    }
  }
})(a111_0x1e90, 0xb99c1);
Object[a111_0x25880a(0xd6)](exports, a111_0x25880a(0xcc), { value: !![] });
function a111_0x762e(_0x44df66, _0x8b9a2d) {
  const _0x1e90c2 = a111_0x1e90();
  return (
    (a111_0x762e = function (_0x762e11, _0x447811) {
      _0x762e11 = _0x762e11 - 0xc6;
      let _0x918471 = _0x1e90c2[_0x762e11];
      return _0x918471;
    }),
    a111_0x762e(_0x44df66, _0x8b9a2d)
  );
}
const sequelize_1 = require(a111_0x25880a(0xd0));
module[a111_0x25880a(0xd1)] = {
  up: _0xc242b8 => {
    const _0x1f17e8 = a111_0x25880a;
    return _0xc242b8[_0x1f17e8(0xca)](_0x1f17e8(0xd5), {
      id: {
        type: sequelize_1[_0x1f17e8(0xc8)]['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: { type: sequelize_1[_0x1f17e8(0xc8)]['STRING'], allowNull: ![] },
      queueId: {
        type: sequelize_1['DataTypes'][_0x1f17e8(0xcd)],
        references: { model: _0x1f17e8(0xda), key: 'id' },
        onUpdate: _0x1f17e8(0xcf),
        onDelete: _0x1f17e8(0xcf)
      },
      chatbotId: {
        type: sequelize_1[_0x1f17e8(0xc8)][_0x1f17e8(0xcd)],
        references: { model: _0x1f17e8(0xd5), key: 'id' },
        onUpdate: _0x1f17e8(0xcf),
        onDelete: _0x1f17e8(0xcf)
      },
      greetingMessage: { type: sequelize_1[_0x1f17e8(0xc8)][_0x1f17e8(0xdb)] },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x1f17e8(0xd4)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x1f17e8(0xc8)][_0x1f17e8(0xd4)],
        allowNull: ![]
      }
    });
  },
  down: _0x190534 => {
    const _0x3b90ed = a111_0x25880a;
    return _0x190534[_0x3b90ed(0xd7)](_0x3b90ed(0xd5));
  }
};
