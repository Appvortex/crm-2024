'use strict';
const a280_0x28d335 = a280_0x54a3;
function a280_0x58f1() {
  const _0x3748db = [
    'sequelize',
    'bulkDelete',
    '12BnmCmy',
    'bulkInsert',
    '5870415NskaHW',
    'admin',
    '20612hkFnCn',
    '48rjyRyg',
    '1791096zkZyug',
    '5376340hmwGsq',
    'hash',
    '42CWirDf',
    '118944mxvQKv',
    '123456',
    '22417043ViDlwM',
    '112050xUmjiN',
    '472PeZlsw',
    '__esModule',
    'defineProperty',
    'transaction',
    'exports',
    '4wLielH',
    'Users',
    'Admin',
    'admin@admin.com'
  ];
  a280_0x58f1 = function () {
    return _0x3748db;
  };
  return a280_0x58f1();
}
(function (_0x8ff3a4, _0x225725) {
  const _0x595ed5 = a280_0x54a3,
    _0x307497 = _0x8ff3a4();
  while (!![]) {
    try {
      const _0x2cd23f =
        (parseInt(_0x595ed5(0xf8)) / 0x1) * (parseInt(_0x595ed5(0xf3)) / 0x2) +
        parseInt(_0x595ed5(0xf5)) / 0x3 +
        (parseInt(_0x595ed5(0xe9)) / 0x4) * (-parseInt(_0x595ed5(0xf1)) / 0x5) +
        (parseInt(_0x595ed5(0xf4)) / 0x6) * (parseInt(_0x595ed5(0xf9)) / 0x7) +
        (-parseInt(_0x595ed5(0xfd)) / 0x8) * (parseInt(_0x595ed5(0xfc)) / 0x9) +
        -parseInt(_0x595ed5(0xf6)) / 0xa +
        (parseInt(_0x595ed5(0xfb)) / 0xb) * (parseInt(_0x595ed5(0xef)) / 0xc);
      if (_0x2cd23f === _0x225725) break;
      else _0x307497['push'](_0x307497['shift']());
    } catch (_0x33b7e5) {
      _0x307497['push'](_0x307497['shift']());
    }
  }
})(a280_0x58f1, 0xb8eda);
function a280_0x54a3(_0xd24886, _0x2ecae6) {
  const _0x58f17f = a280_0x58f1();
  return (
    (a280_0x54a3 = function (_0x54a330, _0x116ed8) {
      _0x54a330 = _0x54a330 - 0xe9;
      let _0x32afc3 = _0x58f17f[_0x54a330];
      return _0x32afc3;
    }),
    a280_0x54a3(_0xd24886, _0x2ecae6)
  );
}
Object[a280_0x28d335(0xff)](exports, a280_0x28d335(0xfe), { value: !![] });
const bcryptjs_1 = require('bcryptjs');
module[a280_0x28d335(0x101)] = {
  up: _0x1d2a4a => {
    const _0x2fbbd8 = a280_0x28d335;
    return _0x1d2a4a[_0x2fbbd8(0xed)][_0x2fbbd8(0x100)](async _0x2e305b => {
      const _0x121ec4 = _0x2fbbd8,
        _0x4052f5 = await (0x0, bcryptjs_1[_0x121ec4(0xf7)])(
          _0x121ec4(0xfa),
          0x8
        );
      return Promise['all']([
        _0x1d2a4a[_0x121ec4(0xf0)](
          _0x121ec4(0xea),
          [
            {
              name: _0x121ec4(0xeb),
              email: _0x121ec4(0xec),
              profile: _0x121ec4(0xf2),
              passwordHash: _0x4052f5,
              companyId: 0x1,
              createdAt: new Date(),
              updatedAt: new Date(),
              super: !![]
            }
          ],
          { transaction: _0x2e305b }
        )
      ]);
    });
  },
  down: async _0xf2d38 => {
    const _0xff0453 = a280_0x28d335;
    return _0xf2d38[_0xff0453(0xee)](_0xff0453(0xea), {});
  }
};
