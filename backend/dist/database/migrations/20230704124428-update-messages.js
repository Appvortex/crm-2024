function a197_0x54f0() {
  var _0x5eb3d1 = [
    'ALTER\x20TABLE\x20\x22Messages\x22\x20ADD\x20CONSTRAINT\x20\x22Messages_pkey\x22\x20PRIMARY\x20KEY\x20(id)',
    'UPDATE\x20\x22Messages\x22\x20SET\x20\x22wid\x22\x20=\x20\x22id\x22',
    '38096bEFwSR',
    'INTEGER',
    'addColumn',
    'wid',
    '1446108ruxDJn',
    'SET\x20NULL',
    '80PmRiVt',
    'removeColumn',
    '188867GqxBUr',
    'removeConstraint',
    'Messages_pkey',
    '9AyaPwI',
    'Messages',
    '3845210QyPpWj',
    '968512VFnXNk',
    'addConstraint',
    'query',
    '272559yEhaRb',
    'CASCADE',
    'sequelize',
    '8HGyYPh',
    '155395yBQAON',
    'quotedMsgId',
    'Messages_quotedMsgId_fkey'
  ];
  a197_0x54f0 = function () {
    return _0x5eb3d1;
  };
  return a197_0x54f0();
}
function a197_0xfe76(_0x1aa958, _0x18c11) {
  var _0x54f032 = a197_0x54f0();
  return (
    (a197_0xfe76 = function (_0xfe76d1, _0x11f200) {
      _0xfe76d1 = _0xfe76d1 - 0xb2;
      var _0x519c2e = _0x54f032[_0xfe76d1];
      return _0x519c2e;
    }),
    a197_0xfe76(_0x1aa958, _0x18c11)
  );
}
(function (_0x11eb50, _0x28a0da) {
  var _0x58f32a = a197_0xfe76,
    _0xe75ed5 = _0x11eb50();
  while (!![]) {
    try {
      var _0x55b3d4 =
        -parseInt(_0x58f32a(0xc5)) / 0x1 +
        (parseInt(_0x58f32a(0xbf)) / 0x2) * (-parseInt(_0x58f32a(0xbc)) / 0x3) +
        -parseInt(_0x58f32a(0xb9)) / 0x4 +
        -parseInt(_0x58f32a(0xc0)) / 0x5 +
        parseInt(_0x58f32a(0xc9)) / 0x6 +
        (parseInt(_0x58f32a(0xb3)) / 0x7) * (parseInt(_0x58f32a(0xcb)) / 0x8) +
        (-parseInt(_0x58f32a(0xb6)) / 0x9) * (-parseInt(_0x58f32a(0xb8)) / 0xa);
      if (_0x55b3d4 === _0x28a0da) break;
      else _0xe75ed5['push'](_0xe75ed5['shift']());
    } catch (_0x2c68c8) {
      _0xe75ed5['push'](_0xe75ed5['shift']());
    }
  }
})(a197_0x54f0, 0x35dda),
  (module['exports'] = {
    up: async (_0x270b98, _0x4b1ee4) => {
      var _0x3c279c = a197_0xfe76;
      await _0x270b98['removeConstraint'](_0x3c279c(0xb7), _0x3c279c(0xc2)),
        await _0x270b98[_0x3c279c(0xb4)](_0x3c279c(0xb7), _0x3c279c(0xb5)),
        await _0x270b98[_0x3c279c(0xb2)](_0x3c279c(0xb7), _0x3c279c(0xc1)),
        await _0x270b98[_0x3c279c(0xc7)](_0x3c279c(0xb7), _0x3c279c(0xc1), {
          type: _0x4b1ee4[_0x3c279c(0xc6)],
          allowNull: !![]
        }),
        await _0x270b98['addColumn'](_0x3c279c(0xb7), _0x3c279c(0xc8), {
          type: _0x4b1ee4['STRING'],
          allowNull: !![],
          unique: ![]
        }),
        await _0x270b98['sequelize']['query'](_0x3c279c(0xc4)),
        await _0x270b98[_0x3c279c(0xb2)](_0x3c279c(0xb7), 'id'),
        await _0x270b98[_0x3c279c(0xc7)](_0x3c279c(0xb7), 'id', {
          type: _0x4b1ee4[_0x3c279c(0xc6)],
          allowNull: ![],
          primaryKey: !![],
          autoIncrement: !![],
          unique: !![]
        }),
        await _0x270b98[_0x3c279c(0xba)](_0x3c279c(0xb7), {
          fields: [_0x3c279c(0xc1)],
          type: 'foreign\x20key',
          name: _0x3c279c(0xc2),
          references: { table: _0x3c279c(0xb7), field: 'id' },
          onDelete: _0x3c279c(0xca),
          onUpdate: 'CASCADE'
        }),
        await _0x270b98[_0x3c279c(0xbe)]['query'](_0x3c279c(0xc3));
    },
    down: async (_0x534228, _0x47b41d) => {
      var _0x58ac26 = a197_0xfe76;
      await _0x534228[_0x58ac26(0xb4)](
        _0x58ac26(0xb7),
        'Messages_quotedMsgId_fkey'
      ),
        await _0x534228[_0x58ac26(0xb4)](_0x58ac26(0xb7), _0x58ac26(0xb5)),
        await _0x534228['removeColumn'](_0x58ac26(0xb7), _0x58ac26(0xc8)),
        await _0x534228[_0x58ac26(0xb2)](_0x58ac26(0xb7), _0x58ac26(0xc1)),
        await _0x534228[_0x58ac26(0xb2)](_0x58ac26(0xb7), 'id'),
        await _0x534228['addColumn'](_0x58ac26(0xb7), 'id', {
          type: _0x47b41d[_0x58ac26(0xc6)],
          allowNull: ![],
          autoIncrement: !![]
        }),
        await _0x534228[_0x58ac26(0xba)]('Messages', {
          fields: [_0x58ac26(0xc1)],
          type: 'foreign\x20key',
          name: _0x58ac26(0xc2),
          references: { table: 'Messages', field: 'id' },
          onDelete: _0x58ac26(0xca),
          onUpdate: _0x58ac26(0xbd)
        }),
        await _0x534228[_0x58ac26(0xbe)][_0x58ac26(0xbb)](
          'ALTER\x20TABLE\x20\x22Messages\x22\x20ADD\x20CONSTRAINT\x20\x22Messages_pkey\x22\x20PRIMARY\x20KEY\x20(id)'
        );
    }
  });
