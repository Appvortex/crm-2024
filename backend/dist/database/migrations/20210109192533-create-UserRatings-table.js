'use strict';
const a104_0x4ba47d = a104_0x2181;
function a104_0x56e3() {
  const _0x47d3c7 = [
    '1208rMasnz',
    'dropTable',
    'INTEGER',
    '499263ZPqZoz',
    '38442lmaSuu',
    '24346kDQHtH',
    '429992jBkdhD',
    'SET\x20NULL',
    'Companies',
    '936990mdRXKG',
    '59150MdWrRm',
    '8FtJMOn',
    '170sYzROj',
    'sequelize',
    'DataTypes',
    '159920dJLjJr',
    'UserRatings',
    'defineProperty',
    'Tickets'
  ];
  a104_0x56e3 = function () {
    return _0x47d3c7;
  };
  return a104_0x56e3();
}
(function (_0x2f7088, _0x2dab52) {
  const _0x3c03a9 = a104_0x2181,
    _0x392227 = _0x2f7088();
  while (!![]) {
    try {
      const _0x3afb85 =
        parseInt(_0x3c03a9(0x158)) / 0x1 +
        parseInt(_0x3c03a9(0x14f)) / 0x2 +
        (parseInt(_0x3c03a9(0x14c)) / 0x3) *
          (parseInt(_0x3c03a9(0x154)) / 0x4) +
        (parseInt(_0x3c03a9(0x155)) / 0x5) *
          (parseInt(_0x3c03a9(0x14d)) / 0x6) +
        (parseInt(_0x3c03a9(0x14e)) / 0x7) *
          (-parseInt(_0x3c03a9(0x15c)) / 0x8) +
        -parseInt(_0x3c03a9(0x152)) / 0x9 +
        parseInt(_0x3c03a9(0x153)) / 0xa;
      if (_0x3afb85 === _0x2dab52) break;
      else _0x392227['push'](_0x392227['shift']());
    } catch (_0x517583) {
      _0x392227['push'](_0x392227['shift']());
    }
  }
})(a104_0x56e3, 0x49c8f);
function a104_0x2181(_0x18d5f6, _0x1bb665) {
  const _0x56e3a6 = a104_0x56e3();
  return (
    (a104_0x2181 = function (_0x2181d4, _0x147470) {
      _0x2181d4 = _0x2181d4 - 0x14b;
      let _0x4fc589 = _0x56e3a6[_0x2181d4];
      return _0x4fc589;
    }),
    a104_0x2181(_0x18d5f6, _0x1bb665)
  );
}
Object[a104_0x4ba47d(0x15a)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a104_0x4ba47d(0x156));
module['exports'] = {
  up: _0x264f39 => {
    const _0x2430a4 = a104_0x4ba47d;
    return _0x264f39['createTable'](_0x2430a4(0x159), {
      id: {
        type: sequelize_1[_0x2430a4(0x157)][_0x2430a4(0x14b)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      ticketId: {
        type: sequelize_1[_0x2430a4(0x157)][_0x2430a4(0x14b)],
        references: { model: _0x2430a4(0x15b), key: 'id' },
        onDelete: _0x2430a4(0x150)
      },
      companyId: {
        type: sequelize_1[_0x2430a4(0x157)][_0x2430a4(0x14b)],
        references: { model: _0x2430a4(0x151), key: 'id' },
        onDelete: _0x2430a4(0x150)
      },
      userId: {
        type: sequelize_1[_0x2430a4(0x157)][_0x2430a4(0x14b)],
        references: { model: 'Users', key: 'id' },
        onDelete: _0x2430a4(0x150),
        allowNull: !![]
      },
      rate: {
        type: sequelize_1[_0x2430a4(0x157)]['INTEGER'],
        defaultValue: 0x0
      },
      createdAt: {
        type: sequelize_1[_0x2430a4(0x157)]['DATE'],
        allowNull: !![]
      },
      updatedAt: {
        type: sequelize_1[_0x2430a4(0x157)]['DATE'],
        allowNull: !![]
      }
    });
  },
  down: _0x4a21d8 => {
    const _0x2b1b93 = a104_0x4ba47d;
    return _0x4a21d8[_0x2b1b93(0x15d)]('UserRatings');
  }
};
