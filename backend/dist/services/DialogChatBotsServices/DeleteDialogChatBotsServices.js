'use strict';
const a495_0x5e4c8c = a495_0x3ff6;
function a495_0x3ff6(_0x466193, _0x29f8e9) {
  const _0x37375f = a495_0x3737();
  return (
    (a495_0x3ff6 = function (_0x3ff6b4, _0x3c0e9e) {
      _0x3ff6b4 = _0x3ff6b4 - 0x163;
      let _0x15e6c8 = _0x37375f[_0x3ff6b4];
      return _0x15e6c8;
    }),
    a495_0x3ff6(_0x466193, _0x29f8e9)
  );
}
(function (_0x546070, _0x2358ec) {
  const _0x393b99 = a495_0x3ff6,
    _0x22baa6 = _0x546070();
  while (!![]) {
    try {
      const _0x44cc43 =
        (parseInt(_0x393b99(0x172)) / 0x1) *
          (-parseInt(_0x393b99(0x170)) / 0x2) +
        -parseInt(_0x393b99(0x16b)) / 0x3 +
        -parseInt(_0x393b99(0x171)) / 0x4 +
        (-parseInt(_0x393b99(0x169)) / 0x5) *
          (-parseInt(_0x393b99(0x173)) / 0x6) +
        (-parseInt(_0x393b99(0x167)) / 0x7) *
          (-parseInt(_0x393b99(0x16d)) / 0x8) +
        (-parseInt(_0x393b99(0x16c)) / 0x9) *
          (parseInt(_0x393b99(0x164)) / 0xa) +
        parseInt(_0x393b99(0x165)) / 0xb;
      if (_0x44cc43 === _0x2358ec) break;
      else _0x22baa6['push'](_0x22baa6['shift']());
    } catch (_0x5aa208) {
      _0x22baa6['push'](_0x22baa6['shift']());
    }
  }
})(a495_0x3737, 0xf3baa);
var __importDefault =
  (this && this[a495_0x5e4c8c(0x16e)]) ||
  function (_0x16bf2c) {
    const _0x27a3b9 = a495_0x5e4c8c;
    return _0x16bf2c && _0x16bf2c[_0x27a3b9(0x166)]
      ? _0x16bf2c
      : { default: _0x16bf2c };
  };
function a495_0x3737() {
  const _0x496faa = [
    '22956yVxgEe',
    'default',
    '242330ZNyomu',
    '53914817tOORXw',
    '__esModule',
    '21bGrZRA',
    'destroy',
    '1410MFxMRc',
    'findOne',
    '3343089nHeipu',
    '675ApPzTp',
    '384728zskiYN',
    '__importDefault',
    '../../models/DialogChatBots',
    '26dPPlvG',
    '1879540aOiXcS',
    '132655uUItGu'
  ];
  a495_0x3737 = function () {
    return _0x496faa;
  };
  return a495_0x3737();
}
Object['defineProperty'](exports, a495_0x5e4c8c(0x166), { value: !![] });
const DialogChatBots_1 = __importDefault(require(a495_0x5e4c8c(0x16f))),
  DeleteDialogChatBotsServices = async _0x34c608 => {
    const _0xb98aa4 = a495_0x5e4c8c,
      _0xc8ceca = await DialogChatBots_1[_0xb98aa4(0x163)][_0xb98aa4(0x16a)]({
        where: { contactId: _0x34c608 }
      });
    _0xc8ceca && (await _0xc8ceca[_0xb98aa4(0x168)]());
  };
exports[a495_0x5e4c8c(0x163)] = DeleteDialogChatBotsServices;
