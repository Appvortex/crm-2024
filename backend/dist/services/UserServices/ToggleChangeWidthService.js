'use strict';
function a640_0x1a4e(_0x5d4a80, _0xe57881) {
  const _0x3ed9db = a640_0x3ed9();
  return (
    (a640_0x1a4e = function (_0x1a4ef3, _0x3b4612) {
      _0x1a4ef3 = _0x1a4ef3 - 0x1f4;
      let _0x169c2b = _0x3ed9db[_0x1a4ef3];
      return _0x169c2b;
    }),
    a640_0x1a4e(_0x5d4a80, _0xe57881)
  );
}
const a640_0x30d382 = a640_0x1a4e;
(function (_0x3cf126, _0x3031da) {
  const _0x1e33a4 = a640_0x1a4e,
    _0x28a0ea = _0x3cf126();
  while (!![]) {
    try {
      const _0x4a66d3 =
        (-parseInt(_0x1e33a4(0x1fd)) / 0x1) *
          (-parseInt(_0x1e33a4(0x200)) / 0x2) +
        parseInt(_0x1e33a4(0x203)) / 0x3 +
        -parseInt(_0x1e33a4(0x1fe)) / 0x4 +
        -parseInt(_0x1e33a4(0x1fc)) / 0x5 +
        (parseInt(_0x1e33a4(0x1f4)) / 0x6) *
          (parseInt(_0x1e33a4(0x204)) / 0x7) +
        (-parseInt(_0x1e33a4(0x209)) / 0x8) *
          (-parseInt(_0x1e33a4(0x1f9)) / 0x9) +
        (parseInt(_0x1e33a4(0x205)) / 0xa) *
          (-parseInt(_0x1e33a4(0x1fa)) / 0xb);
      if (_0x4a66d3 === _0x3031da) break;
      else _0x28a0ea['push'](_0x28a0ea['shift']());
    } catch (_0x115eea) {
      _0x28a0ea['push'](_0x28a0ea['shift']());
    }
  }
})(a640_0x3ed9, 0x7b4f3);
var __importDefault =
  (this && this[a640_0x30d382(0x201)]) ||
  function (_0x31ec85) {
    const _0x1f227e = a640_0x30d382;
    return _0x31ec85 && _0x31ec85[_0x1f227e(0x207)]
      ? _0x31ec85
      : { default: _0x31ec85 };
  };
Object[a640_0x30d382(0x20a)](exports, a640_0x30d382(0x207), { value: !![] });
function a640_0x3ed9() {
  const _0x5dc23e = [
    '../../models/User',
    '2WMRPbN',
    '__importDefault',
    'whatsapp',
    '782958CyvnpW',
    '14JQGakM',
    '348440RhEATX',
    'company',
    '__esModule',
    'reload',
    '2316592hqtCHF',
    'defineProperty',
    '../../errors/AppError',
    '1852548TgFrrp',
    'defaultTicketsManagerWidth',
    'queues',
    'findOne',
    'ERR_NO_USER_FOUND',
    '9rqVdQa',
    '110trorbT',
    'default',
    '3230780OrrbQI',
    '558057YoSkxs',
    '905848thuERs'
  ];
  a640_0x3ed9 = function () {
    return _0x5dc23e;
  };
  return a640_0x3ed9();
}
const AppError_1 = __importDefault(require(a640_0x30d382(0x20b))),
  User_1 = __importDefault(require(a640_0x30d382(0x1ff))),
  ToggleChangeWidthService = async ({
    userId: _0x110736,
    defaultTicketsManagerWidth: _0x41eb5a
  }) => {
    const _0x4fe389 = a640_0x30d382,
      _0x245d61 = await User_1['default'][_0x4fe389(0x1f7)]({
        where: { id: _0x110736 },
        attributes: ['id', _0x4fe389(0x1f5)]
      });
    if (!_0x245d61)
      throw new AppError_1[_0x4fe389(0x1fb)](_0x4fe389(0x1f8), 0x194);
    return (
      await _0x245d61['update']({
        defaultTicketsManagerWidth: Number(_0x41eb5a)
      }),
      await _0x245d61[_0x4fe389(0x208)]({
        include: [_0x4fe389(0x1f6), _0x4fe389(0x202), _0x4fe389(0x206)]
      }),
      _0x245d61
    );
  };
exports[a640_0x30d382(0x1fb)] = ToggleChangeWidthService;
