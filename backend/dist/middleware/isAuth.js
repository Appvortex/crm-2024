'use strict';
const a312_0x44b092 = a312_0x596e;
(function (_0x46891c, _0x5998b6) {
  const _0x59f1b6 = a312_0x596e,
    _0x1c910d = _0x46891c();
  while (!![]) {
    try {
      const _0x55b38b =
        parseInt(_0x59f1b6(0x8a)) / 0x1 +
        (-parseInt(_0x59f1b6(0x8d)) / 0x2) *
          (-parseInt(_0x59f1b6(0x92)) / 0x3) +
        (-parseInt(_0x59f1b6(0x8c)) / 0x4) *
          (-parseInt(_0x59f1b6(0x88)) / 0x5) +
        -parseInt(_0x59f1b6(0x95)) / 0x6 +
        (-parseInt(_0x59f1b6(0x87)) / 0x7) *
          (-parseInt(_0x59f1b6(0x9a)) / 0x8) +
        (parseInt(_0x59f1b6(0x99)) / 0x9) * (-parseInt(_0x59f1b6(0x94)) / 0xa) +
        -parseInt(_0x59f1b6(0x97)) / 0xb;
      if (_0x55b38b === _0x5998b6) break;
      else _0x1c910d['push'](_0x1c910d['shift']());
    } catch (_0x10e15c) {
      _0x1c910d['push'](_0x1c910d['shift']());
    }
  }
})(a312_0x33a1, 0x9d1a9);
function a312_0x33a1() {
  const _0x4544f3 = [
    '__importDefault',
    'split',
    '../libs/socket',
    '77mlJgXy',
    '165znRVJk',
    'Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request',
    '716393tgDqNv',
    'default',
    '138036dwmeSR',
    '221912zAWJnZ',
    '../config/auth',
    'verify',
    'changed',
    'update',
    '24lQHcnW',
    'updatedAt',
    '10EJqNim',
    '5585448dofiXy',
    'ERR_SESSION_EXPIRED',
    '18961250mFwbWE',
    'authorization',
    '1670589QhIffJ',
    '538864CjLPeC',
    'getIO',
    'companyId',
    'company-',
    'reload',
    '__esModule',
    'statusCode',
    'defineProperty',
    'headers',
    '-user',
    'message'
  ];
  a312_0x33a1 = function () {
    return _0x4544f3;
  };
  return a312_0x33a1();
}
var __importDefault =
  (this && this[a312_0x44b092(0x84)]) ||
  function (_0x492973) {
    const _0x28c8b3 = a312_0x44b092;
    return _0x492973 && _0x492973[_0x28c8b3(0x9f)]
      ? _0x492973
      : { default: _0x492973 };
  };
function a312_0x596e(_0x243a34, _0x11fef5) {
  const _0x33a15f = a312_0x33a1();
  return (
    (a312_0x596e = function (_0x596e00, _0x6d1776) {
      _0x596e00 = _0x596e00 - 0x82;
      let _0x32e4e6 = _0x33a15f[_0x596e00];
      return _0x32e4e6;
    }),
    a312_0x596e(_0x243a34, _0x11fef5)
  );
}
Object[a312_0x44b092(0xa1)](exports, '__esModule', { value: !![] });
const jsonwebtoken_1 = require('jsonwebtoken'),
  AppError_1 = __importDefault(require('../errors/AppError')),
  auth_1 = __importDefault(require(a312_0x44b092(0x8e))),
  socket_1 = require(a312_0x44b092(0x86)),
  ShowUserService_1 = __importDefault(
    require('../services/UserServices/ShowUserService')
  ),
  updateUser = async (_0x31f150, _0x140109) => {
    const _0x101fb2 = a312_0x44b092,
      _0xbf81b8 = await (0x0, ShowUserService_1['default'])(
        _0x31f150,
        _0x140109
      );
    _0xbf81b8[_0x101fb2(0x90)](_0x101fb2(0x93), !![]);
    let _0x45fc2f = null;
    _0x45fc2f = { updatedAt: new Date() };
    if (!_0xbf81b8['online']) {
      (_0x45fc2f = { ..._0x45fc2f, online: !![] }),
        await _0xbf81b8[_0x101fb2(0x91)](_0x45fc2f),
        await _0xbf81b8[_0x101fb2(0x9e)]();
      const _0x28ae9b = (0x0, socket_1[_0x101fb2(0x9b)])();
      _0x28ae9b['emit'](
        _0x101fb2(0x9d) + _0xbf81b8[_0x101fb2(0x9c)] + _0x101fb2(0x82),
        { action: _0x101fb2(0x91), user: _0xbf81b8 }
      );
    } else await _0xbf81b8[_0x101fb2(0x91)](_0x45fc2f);
  },
  isAuth = async (_0x101f19, _0x4d09da, _0x234f94) => {
    const _0x7458ab = a312_0x44b092,
      _0x26fc3f = _0x101f19[_0x7458ab(0xa2)][_0x7458ab(0x98)];
    if (!_0x26fc3f)
      throw new AppError_1[_0x7458ab(0x8b)](_0x7458ab(0x96), 0x191);
    const [, _0x5b8489] = _0x26fc3f[_0x7458ab(0x85)]('\x20');
    try {
      const _0x484dce = (0x0, jsonwebtoken_1[_0x7458ab(0x8f)])(
          _0x5b8489,
          auth_1[_0x7458ab(0x8b)]['secret']
        ),
        { id: _0x22ce24, profile: _0x14bc77, companyId: _0x4f4585 } = _0x484dce;
      updateUser(_0x22ce24, _0x4f4585),
        (_0x101f19['user'] = {
          id: _0x22ce24,
          profile: _0x14bc77,
          companyId: _0x4f4585
        });
    } catch (_0x229bfc) {
      if (
        _0x229bfc['message'] === _0x7458ab(0x96) &&
        _0x229bfc[_0x7458ab(0xa0)] === 0x191
      )
        throw new AppError_1[_0x7458ab(0x8b)](
          _0x229bfc[_0x7458ab(0x83)],
          0x191
        );
      else throw new AppError_1[_0x7458ab(0x8b)](_0x7458ab(0x89), 0x193);
    }
    return _0x234f94();
  };
exports[a312_0x44b092(0x8b)] = isAuth;
