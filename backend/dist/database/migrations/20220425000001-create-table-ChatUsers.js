'use strict';
const a142_0xbeaf2c = a142_0x3143;
(function (_0x2f6f34, _0x1af216) {
  const _0x7262da = a142_0x3143,
    _0x5177bd = _0x2f6f34();
  while (!![]) {
    try {
      const _0x428617 =
        (-parseInt(_0x7262da(0x15d)) / 0x1) *
          (parseInt(_0x7262da(0x152)) / 0x2) +
        (parseInt(_0x7262da(0x15c)) / 0x3) *
          (parseInt(_0x7262da(0x149)) / 0x4) +
        -parseInt(_0x7262da(0x14d)) / 0x5 +
        (-parseInt(_0x7262da(0x14c)) / 0x6) *
          (-parseInt(_0x7262da(0x159)) / 0x7) +
        (-parseInt(_0x7262da(0x151)) / 0x8) *
          (-parseInt(_0x7262da(0x158)) / 0x9) +
        parseInt(_0x7262da(0x15e)) / 0xa +
        -parseInt(_0x7262da(0x15a)) / 0xb;
      if (_0x428617 === _0x1af216) break;
      else _0x5177bd['push'](_0x5177bd['shift']());
    } catch (_0x49b129) {
      _0x5177bd['push'](_0x5177bd['shift']());
    }
  }
})(a142_0x688b, 0x9a978);
function a142_0x688b() {
  const _0x3b32e8 = [
    'sequelize',
    '1016ZOVRTw',
    '2008dXMIyr',
    'createTable',
    'Users',
    'ChatUsers',
    'CASCADE',
    'DataTypes',
    '49284bryFre',
    '14AmfcVo',
    '12853071IZrBWG',
    'exports',
    '21LjFXzl',
    '108hrrOba',
    '6817040Gizggg',
    'INTEGER',
    '43696AofVjs',
    'defineProperty',
    'DATE',
    '2059710zHdQaq',
    '1150465ZPjIsf',
    '__esModule',
    'dropTable'
  ];
  a142_0x688b = function () {
    return _0x3b32e8;
  };
  return a142_0x688b();
}
function a142_0x3143(_0x25c042, _0x4ee978) {
  const _0x688ba5 = a142_0x688b();
  return (
    (a142_0x3143 = function (_0x31436e, _0x425515) {
      _0x31436e = _0x31436e - 0x148;
      let _0x53b253 = _0x688ba5[_0x31436e];
      return _0x53b253;
    }),
    a142_0x3143(_0x25c042, _0x4ee978)
  );
}
Object[a142_0xbeaf2c(0x14a)](exports, a142_0xbeaf2c(0x14e), { value: !![] });
const sequelize_1 = require(a142_0xbeaf2c(0x150));
module[a142_0xbeaf2c(0x15b)] = {
  up: _0x4bf766 => {
    const _0x227b05 = a142_0xbeaf2c;
    return _0x4bf766[_0x227b05(0x153)](_0x227b05(0x155), {
      id: {
        type: sequelize_1[_0x227b05(0x157)]['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      chatId: {
        type: sequelize_1[_0x227b05(0x157)][_0x227b05(0x148)],
        references: { model: 'Chats', key: 'id' },
        onUpdate: _0x227b05(0x156),
        onDelete: _0x227b05(0x156),
        allowNull: ![]
      },
      userId: {
        type: sequelize_1['DataTypes']['INTEGER'],
        references: { model: _0x227b05(0x154), key: 'id' },
        onUpdate: _0x227b05(0x156),
        onDelete: _0x227b05(0x156),
        allowNull: ![]
      },
      unreads: {
        type: sequelize_1['DataTypes'][_0x227b05(0x148)],
        defaultValue: 0x0
      },
      createdAt: {
        type: sequelize_1[_0x227b05(0x157)][_0x227b05(0x14b)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x227b05(0x157)][_0x227b05(0x14b)],
        allowNull: ![]
      }
    });
  },
  down: _0x488904 => {
    const _0x41fff0 = a142_0xbeaf2c;
    return _0x488904[_0x41fff0(0x14f)](_0x41fff0(0x155));
  }
};
