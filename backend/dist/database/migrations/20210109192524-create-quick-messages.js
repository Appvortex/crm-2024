'use strict';
function a96_0x162a(_0x51d467, _0x225e41) {
  const _0x481862 = a96_0x4818();
  return (
    (a96_0x162a = function (_0x162aaa, _0x255d28) {
      _0x162aaa = _0x162aaa - 0x11d;
      let _0x294547 = _0x481862[_0x162aaa];
      return _0x294547;
    }),
    a96_0x162a(_0x51d467, _0x225e41)
  );
}
const a96_0x35a289 = a96_0x162a;
(function (_0x5c6fe3, _0x16838a) {
  const _0x5120ac = a96_0x162a,
    _0x584506 = _0x5c6fe3();
  while (!![]) {
    try {
      const _0x51ebc3 =
        (parseInt(_0x5120ac(0x11e)) / 0x1) *
          (-parseInt(_0x5120ac(0x12a)) / 0x2) +
        (-parseInt(_0x5120ac(0x12c)) / 0x3) *
          (-parseInt(_0x5120ac(0x124)) / 0x4) +
        -parseInt(_0x5120ac(0x12d)) / 0x5 +
        (-parseInt(_0x5120ac(0x125)) / 0x6) *
          (parseInt(_0x5120ac(0x12f)) / 0x7) +
        -parseInt(_0x5120ac(0x123)) / 0x8 +
        parseInt(_0x5120ac(0x122)) / 0x9 +
        parseInt(_0x5120ac(0x121)) / 0xa;
      if (_0x51ebc3 === _0x16838a) break;
      else _0x584506['push'](_0x584506['shift']());
    } catch (_0x38fedf) {
      _0x584506['push'](_0x584506['shift']());
    }
  }
})(a96_0x4818, 0xbb0a6);
Object['defineProperty'](exports, a96_0x35a289(0x129), { value: !![] });
function a96_0x4818() {
  const _0x1a5d28 = [
    'createTable',
    'QuickMessages',
    'INTEGER',
    '__esModule',
    '835342ZkCSCp',
    'STRING',
    '755337zAyWuC',
    '1630770TSgoJK',
    'DataTypes',
    '42iZfBsX',
    'CASCADE',
    'Companies',
    'DATE',
    '3wcoXlk',
    'dropTable',
    'sequelize',
    '20376050RMaNZb',
    '5674635jOhIyc',
    '1531296geZqdV',
    '4jnEdhB',
    '383202ufldIL'
  ];
  a96_0x4818 = function () {
    return _0x1a5d28;
  };
  return a96_0x4818();
}
const sequelize_1 = require(a96_0x35a289(0x120));
module['exports'] = {
  up: _0x143fa2 => {
    const _0x272504 = a96_0x35a289;
    return _0x143fa2[_0x272504(0x126)](_0x272504(0x127), {
      id: {
        type: sequelize_1[_0x272504(0x12e)][_0x272504(0x128)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      shortcode: {
        type: sequelize_1[_0x272504(0x12e)][_0x272504(0x12b)],
        allowNull: ![]
      },
      message: {
        type: sequelize_1[_0x272504(0x12e)][_0x272504(0x12b)],
        allowNull: ![]
      },
      companyId: {
        type: sequelize_1[_0x272504(0x12e)][_0x272504(0x128)],
        references: { model: _0x272504(0x131), key: 'id' },
        onUpdate: _0x272504(0x130),
        onDelete: _0x272504(0x130)
      },
      createdAt: {
        type: sequelize_1[_0x272504(0x12e)]['DATE'],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x272504(0x12e)][_0x272504(0x11d)],
        allowNull: ![]
      }
    });
  },
  down: _0x4204be => {
    const _0x3dcca1 = a96_0x35a289;
    return _0x4204be[_0x3dcca1(0x11f)](_0x3dcca1(0x127));
  }
};
