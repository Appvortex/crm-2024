'use strict';
const a526_0x532aeb = a526_0xd661;
(function (_0x47d834, _0x308098) {
  const _0x48e27a = a526_0xd661,
    _0x1f0b0d = _0x47d834();
  while (!![]) {
    try {
      const _0x3d6b92 =
        -parseInt(_0x48e27a(0xdd)) / 0x1 +
        -parseInt(_0x48e27a(0xd1)) / 0x2 +
        (parseInt(_0x48e27a(0xd5)) / 0x3) * (parseInt(_0x48e27a(0xd2)) / 0x4) +
        -parseInt(_0x48e27a(0xe0)) / 0x5 +
        (-parseInt(_0x48e27a(0xd7)) / 0x6) *
          (-parseInt(_0x48e27a(0xc9)) / 0x7) +
        (-parseInt(_0x48e27a(0xde)) / 0x8) * (parseInt(_0x48e27a(0xca)) / 0x9) +
        (parseInt(_0x48e27a(0xcb)) / 0xa) * (parseInt(_0x48e27a(0xd4)) / 0xb);
      if (_0x3d6b92 === _0x308098) break;
      else _0x1f0b0d['push'](_0x1f0b0d['shift']());
    } catch (_0x32e1c0) {
      _0x1f0b0d['push'](_0x1f0b0d['shift']());
    }
  }
})(a526_0x22fd, 0x5d566);
function a526_0x22fd() {
  const _0x6be741 = [
    '1206pJPxeX',
    'Sequelize',
    '\x2023:59:59\x27',
    'defineProperty',
    '\x20and\x20\x22createdAt\x22\x20between\x20\x27',
    'query',
    '38746jwwxkR',
    '1769312SEnHWd',
    'SELECT',
    '1744875vaQRVi',
    '10465VBOmPo',
    '9NyHoNX',
    '20HIFPgZ',
    'sequelize-typescript',
    '__esModule',
    '\x20and\x20\x22createdAt\x22\x20\x20between\x20\x27',
    'QueryTypes',
    'select\x20COUNT(*)\x20from\x20\x22Messages\x22\x20m\x20where\x20\x22companyId\x22\x20=\x20',
    '129542jhYqVm',
    '412oDKMsw',
    '\x20and\x20\x22fromMe\x22\x20=\x20',
    '1383206lqsIoq',
    '14679pifdKj',
    '\x2000:00:00\x27\x20and\x20\x27'
  ];
  a526_0x22fd = function () {
    return _0x6be741;
  };
  return a526_0x22fd();
}
function a526_0xd661(_0x431b4e, _0x35b222) {
  const _0x22fdc8 = a526_0x22fd();
  return (
    (a526_0xd661 = function (_0xd66109, _0x377a1c) {
      _0xd66109 = _0xd66109 - 0xc9;
      let _0x43b15e = _0x22fdc8[_0xd66109];
      return _0x43b15e;
    }),
    a526_0xd661(_0x431b4e, _0x35b222)
  );
}
Object[a526_0x532aeb(0xda)](exports, a526_0x532aeb(0xcd), { value: !![] });
const sequelize_typescript_1 = require(a526_0x532aeb(0xcc)),
  sequelize_1 = require('sequelize'),
  dbConfig = require('../../config/database'),
  sequelize = new sequelize_typescript_1[a526_0x532aeb(0xd8)](dbConfig),
  ListMessagesServiceAll = async ({
    companyId: _0x2b4bcc,
    fromMe: _0x32fe76,
    dateStart: _0x27a47a,
    dateEnd: _0x1a2fc1
  }) => {
    const _0x56a26e = a526_0x532aeb;
    let _0x141c53;
    return (
      _0x27a47a && _0x1a2fc1
        ? _0x32fe76
          ? (_0x141c53 = await sequelize['query'](
              'select\x20COUNT(*)\x20from\x20\x22Messages\x22\x20m\x20where\x20\x22companyId\x22\x20=\x20' +
                _0x2b4bcc +
                _0x56a26e(0xd3) +
                _0x32fe76 +
                _0x56a26e(0xce) +
                _0x27a47a +
                _0x56a26e(0xd6) +
                _0x1a2fc1 +
                _0x56a26e(0xd9),
              { type: sequelize_1['QueryTypes'][_0x56a26e(0xdf)] }
            ))
          : (_0x141c53 = await sequelize['query'](
              'select\x20COUNT(*)\x20from\x20\x22Messages\x22\x20m\x20where\x20\x22companyId\x22\x20=\x20' +
                _0x2b4bcc +
                _0x56a26e(0xdb) +
                _0x27a47a +
                _0x56a26e(0xd6) +
                _0x1a2fc1 +
                _0x56a26e(0xd9),
              { type: sequelize_1[_0x56a26e(0xcf)]['SELECT'] }
            ))
        : _0x32fe76
          ? (_0x141c53 = await sequelize[_0x56a26e(0xdc)](
              _0x56a26e(0xd0) +
                _0x2b4bcc +
                '\x20and\x20\x22fromMe\x22\x20=\x20' +
                _0x32fe76,
              { type: sequelize_1['QueryTypes']['SELECT'] }
            ))
          : (_0x141c53 = await sequelize[_0x56a26e(0xdc)](
              _0x56a26e(0xd0) + _0x2b4bcc,
              { type: sequelize_1[_0x56a26e(0xcf)]['SELECT'] }
            )),
      { count: _0x141c53 }
    );
  };
exports['default'] = ListMessagesServiceAll;
