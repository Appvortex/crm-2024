'use strict';
const a143_0x1a083a = a143_0x3472;
function a143_0x3472(_0x1d32a7, _0xe0e028) {
  const _0x343ee9 = a143_0x343e();
  return (
    (a143_0x3472 = function (_0x347266, _0x1758db) {
      _0x347266 = _0x347266 - 0xd6;
      let _0x13894f = _0x343ee9[_0x347266];
      return _0x13894f;
    }),
    a143_0x3472(_0x1d32a7, _0xe0e028)
  );
}
(function (_0x47f03a, _0x20b397) {
  const _0x261692 = a143_0x3472,
    _0x5675d1 = _0x47f03a();
  while (!![]) {
    try {
      const _0x4c88d7 =
        -parseInt(_0x261692(0xe6)) / 0x1 +
        (parseInt(_0x261692(0xdd)) / 0x2) * (parseInt(_0x261692(0xe9)) / 0x3) +
        -parseInt(_0x261692(0xd7)) / 0x4 +
        (parseInt(_0x261692(0xde)) / 0x5) * (-parseInt(_0x261692(0xda)) / 0x6) +
        -parseInt(_0x261692(0xe3)) / 0x7 +
        parseInt(_0x261692(0xdf)) / 0x8 +
        (parseInt(_0x261692(0xdb)) / 0x9) * (parseInt(_0x261692(0xe2)) / 0xa);
      if (_0x4c88d7 === _0x20b397) break;
      else _0x5675d1['push'](_0x5675d1['shift']());
    } catch (_0x26c6bf) {
      _0x5675d1['push'](_0x5675d1['shift']());
    }
  }
})(a143_0x343e, 0x9a1ad);
Object['defineProperty'](exports, a143_0x1a083a(0xd9), { value: !![] });
function a143_0x343e() {
  const _0xa12b2c = [
    'ChatMessages',
    '776972aagCkw',
    'exports',
    '__esModule',
    '6qUXfNS',
    '51696ALZJXa',
    'sequelize',
    '724zcszsk',
    '2088045jIsAnL',
    '6333432EWLqaS',
    'createTable',
    'INTEGER',
    '770NHzhDR',
    '7060991JTEZlN',
    'dropTable',
    'CASCADE',
    '128281GNRsMw',
    'TEXT',
    'DataTypes',
    '9498zMsgyA',
    'Chats',
    'Users',
    'DATE'
  ];
  a143_0x343e = function () {
    return _0xa12b2c;
  };
  return a143_0x343e();
}
const sequelize_1 = require(a143_0x1a083a(0xdc));
module[a143_0x1a083a(0xd8)] = {
  up: _0x335d29 => {
    const _0x59ece7 = a143_0x1a083a;
    return _0x335d29[_0x59ece7(0xe0)](_0x59ece7(0xd6), {
      id: {
        type: sequelize_1['DataTypes']['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      chatId: {
        type: sequelize_1[_0x59ece7(0xe8)][_0x59ece7(0xe1)],
        references: { model: _0x59ece7(0xea), key: 'id' },
        onUpdate: _0x59ece7(0xe5),
        onDelete: 'CASCADE',
        allowNull: ![]
      },
      senderId: {
        type: sequelize_1[_0x59ece7(0xe8)][_0x59ece7(0xe1)],
        references: { model: _0x59ece7(0xeb), key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: _0x59ece7(0xe5),
        allowNull: ![]
      },
      message: {
        type: sequelize_1[_0x59ece7(0xe8)][_0x59ece7(0xe7)],
        allowNull: !![],
        defaultValue: ''
      },
      mediaPath: {
        type: sequelize_1[_0x59ece7(0xe8)]['TEXT'],
        allowNull: !![]
      },
      mediaName: {
        type: sequelize_1[_0x59ece7(0xe8)][_0x59ece7(0xe7)],
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x59ece7(0xe8)][_0x59ece7(0xec)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1['DataTypes'][_0x59ece7(0xec)],
        allowNull: ![]
      }
    });
  },
  down: _0x3b010f => {
    const _0x969b0f = a143_0x1a083a;
    return _0x3b010f[_0x969b0f(0xe4)](_0x969b0f(0xd6));
  }
};
