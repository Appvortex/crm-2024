'use strict';
function a523_0x5ed2(_0x338fdd, _0x24518e) {
  const _0x420feb = a523_0x420f();
  return (
    (a523_0x5ed2 = function (_0x5ed251, _0x34f43b) {
      _0x5ed251 = _0x5ed251 - 0xbf;
      let _0x2079d5 = _0x420feb[_0x5ed251];
      return _0x2079d5;
    }),
    a523_0x5ed2(_0x338fdd, _0x24518e)
  );
}
const a523_0x18f224 = a523_0x5ed2;
(function (_0x1bb43e, _0x637b98) {
  const _0x2d8471 = a523_0x5ed2,
    _0x236877 = _0x1bb43e();
  while (!![]) {
    try {
      const _0x4991db =
        (parseInt(_0x2d8471(0xbf)) / 0x1) * (-parseInt(_0x2d8471(0xcd)) / 0x2) +
        (parseInt(_0x2d8471(0xcc)) / 0x3) * (parseInt(_0x2d8471(0xd6)) / 0x4) +
        parseInt(_0x2d8471(0xd2)) / 0x5 +
        (-parseInt(_0x2d8471(0xcf)) / 0x6) * (parseInt(_0x2d8471(0xd1)) / 0x7) +
        (-parseInt(_0x2d8471(0xd0)) / 0x8) * (parseInt(_0x2d8471(0xca)) / 0x9) +
        (-parseInt(_0x2d8471(0xc9)) / 0xa) *
          (-parseInt(_0x2d8471(0xc5)) / 0xb) +
        (parseInt(_0x2d8471(0xcb)) / 0xc) * (parseInt(_0x2d8471(0xc3)) / 0xd);
      if (_0x4991db === _0x637b98) break;
      else _0x236877['push'](_0x236877['shift']());
    } catch (_0xde86bb) {
      _0x236877['push'](_0x236877['shift']());
    }
  }
})(a523_0x420f, 0x2a30f);
var __importDefault =
  (this && this[a523_0x18f224(0xc6)]) ||
  function (_0x1b2115) {
    return _0x1b2115 && _0x1b2115['__esModule']
      ? _0x1b2115
      : { default: _0x1b2115 };
  };
Object['defineProperty'](exports, a523_0x18f224(0xd4), { value: !![] });
function a523_0x420f() {
  const _0x18c691 = [
    '226203CksBzn',
    '106qwAIiU',
    'MESSAGES_NOT_FIND',
    '671556VifDDw',
    '32GMWwrr',
    '21JEKMTn',
    '1673590lSwBye',
    'sequelize-typescript',
    '__esModule',
    'default',
    '8vBxHpx',
    'QueryTypes',
    '4037jdWbbb',
    '../../errors/AppError',
    'query',
    '\x2023:59:59\x27',
    '2319707hzMngG',
    '\x20and\x20\x22createdAt\x22\x20between\x20\x27',
    '11viLDLu',
    '__importDefault',
    'Sequelize',
    'SELECT',
    '1415110BVMcga',
    '186561RAwipN',
    '12zDKCQn'
  ];
  a523_0x420f = function () {
    return _0x18c691;
  };
  return a523_0x420f();
}
const AppError_1 = __importDefault(require(a523_0x18f224(0xc0))),
  sequelize_typescript_1 = require(a523_0x18f224(0xd3)),
  sequelize_1 = require('sequelize'),
  dbConfig = require('../../config/database'),
  sequelize = new sequelize_typescript_1[a523_0x18f224(0xc7)](dbConfig),
  GetMessageRangeService = async ({
    companyId: _0x1beba5,
    startDate: _0x327967,
    lastDate: _0x2d4ac0
  }) => {
    const _0x2b934a = a523_0x18f224;
    let _0x2198bf;
    _0x2198bf = await sequelize[_0x2b934a(0xc1)](
      'select\x20*\x20from\x20\x22Messages\x22\x20m\x20where\x20\x22companyId\x22\x20=\x20' +
        _0x1beba5 +
        _0x2b934a(0xc4) +
        _0x327967 +
        '\x2000:00:00\x27\x20and\x20\x27' +
        _0x2d4ac0 +
        _0x2b934a(0xc2),
      { type: sequelize_1[_0x2b934a(0xd7)][_0x2b934a(0xc8)] }
    );
    if (!_0x2198bf) throw new AppError_1[_0x2b934a(0xd5)](_0x2b934a(0xce));
    return _0x2198bf;
  };
exports[a523_0x18f224(0xd5)] = GetMessageRangeService;
