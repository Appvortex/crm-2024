'use strict';
const a250_0x14cdc1 = a250_0x3c2f;
(function (_0x3c1f90, _0x1cab6a) {
  const _0x3773b7 = a250_0x3c2f,
    _0xc8eca4 = _0x3c1f90();
  while (!![]) {
    try {
      const _0x568b60 =
        -parseInt(_0x3773b7(0x1e8)) / 0x1 +
        (parseInt(_0x3773b7(0x1e3)) / 0x2) *
          (parseInt(_0x3773b7(0x1d5)) / 0x3) +
        (parseInt(_0x3773b7(0x1e0)) / 0x4) *
          (-parseInt(_0x3773b7(0x1d9)) / 0x5) +
        (parseInt(_0x3773b7(0x1e7)) / 0x6) *
          (parseInt(_0x3773b7(0x1da)) / 0x7) +
        (parseInt(_0x3773b7(0x1e1)) / 0x8) *
          (parseInt(_0x3773b7(0x1d1)) / 0x9) +
        parseInt(_0x3773b7(0x1dc)) / 0xa +
        (-parseInt(_0x3773b7(0x1d8)) / 0xb) *
          (parseInt(_0x3773b7(0x1d2)) / 0xc);
      if (_0x568b60 === _0x1cab6a) break;
      else _0xc8eca4['push'](_0xc8eca4['shift']());
    } catch (_0x2aa713) {
      _0xc8eca4['push'](_0xc8eca4['shift']());
    }
  }
})(a250_0x570a, 0x22d91);
function a250_0x3c2f(_0x450082, _0x2a9e23) {
  const _0x570a33 = a250_0x570a();
  return (
    (a250_0x3c2f = function (_0x3c2fb4, _0x14fb86) {
      _0x3c2fb4 = _0x3c2fb4 - 0x1d1;
      let _0x4ef70d = _0x570a33[_0x3c2fb4];
      return _0x4ef70d;
    }),
    a250_0x3c2f(_0x450082, _0x2a9e23)
  );
}
Object[a250_0x14cdc1(0x1d3)](exports, a250_0x14cdc1(0x1df), { value: !![] });
function a250_0x570a() {
  const _0xde28e0 = [
    '56vPfYDK',
    '8WDjJde',
    'statusTicket',
    '52TEgrDd',
    'STRING',
    'removeColumn',
    'DataTypes',
    '6nlyWTg',
    '198724rdSfZB',
    '1467369psqQRW',
    '508056wWcMpE',
    'defineProperty',
    'queueId',
    '19071WaWkBd',
    'SET\x20NULL',
    'userId',
    '33dHCkpp',
    '40055kcCdaD',
    '448882IEWkQE',
    'sequelize',
    '1881800iQEuOA',
    'Campaigns',
    'addColumn',
    '__esModule'
  ];
  a250_0x570a = function () {
    return _0xde28e0;
  };
  return a250_0x570a();
}
const sequelize_1 = require(a250_0x14cdc1(0x1db));
module['exports'] = {
  up: _0x41a5c2 => {
    const _0x422cde = a250_0x14cdc1;
    return (
      _0x41a5c2[_0x422cde(0x1de)](_0x422cde(0x1dd), _0x422cde(0x1d7), {
        type: sequelize_1[_0x422cde(0x1e6)]['INTEGER'],
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: _0x422cde(0x1d6)
      }),
      _0x41a5c2[_0x422cde(0x1de)](_0x422cde(0x1dd), _0x422cde(0x1d4), {
        type: sequelize_1[_0x422cde(0x1e6)]['INTEGER'],
        references: { model: 'Queues', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET\x20NULL'
      }),
      _0x41a5c2[_0x422cde(0x1de)](_0x422cde(0x1dd), _0x422cde(0x1e2), {
        type: sequelize_1['DataTypes'][_0x422cde(0x1e4)],
        defaultValue: 'closed'
      })
    );
  },
  down: _0x5b0c20 => {
    const _0x4f3546 = a250_0x14cdc1;
    return (
      _0x5b0c20[_0x4f3546(0x1e5)]('Campaigns', _0x4f3546(0x1d7)),
      _0x5b0c20['removeColumn'](_0x4f3546(0x1dd), 'queueId'),
      _0x5b0c20[_0x4f3546(0x1e5)](_0x4f3546(0x1dd), _0x4f3546(0x1e2))
    );
  }
};
