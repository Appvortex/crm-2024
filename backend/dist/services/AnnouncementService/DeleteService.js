'use strict';
function a409_0x35ac(_0x1d9c13, _0x5a4ff4) {
  const _0x35808b = a409_0x3580();
  return (
    (a409_0x35ac = function (_0x35acb8, _0x4162a1) {
      _0x35acb8 = _0x35acb8 - 0x1d1;
      let _0x2962b4 = _0x35808b[_0x35acb8];
      return _0x2962b4;
    }),
    a409_0x35ac(_0x1d9c13, _0x5a4ff4)
  );
}
const a409_0x3f581b = a409_0x35ac;
(function (_0x2f96ee, _0x67aa8a) {
  const _0xdde8a = a409_0x35ac,
    _0x22be70 = _0x2f96ee();
  while (!![]) {
    try {
      const _0x3cd5d2 =
        (parseInt(_0xdde8a(0x1d7)) / 0x1) * (parseInt(_0xdde8a(0x1da)) / 0x2) +
        -parseInt(_0xdde8a(0x1d4)) / 0x3 +
        (-parseInt(_0xdde8a(0x1d9)) / 0x4) *
          (-parseInt(_0xdde8a(0x1d6)) / 0x5) +
        -parseInt(_0xdde8a(0x1d1)) / 0x6 +
        (parseInt(_0xdde8a(0x1d2)) / 0x7) * (-parseInt(_0xdde8a(0x1d8)) / 0x8) +
        (parseInt(_0xdde8a(0x1dc)) / 0x9) * (parseInt(_0xdde8a(0x1dd)) / 0xa) +
        parseInt(_0xdde8a(0x1d5)) / 0xb;
      if (_0x3cd5d2 === _0x67aa8a) break;
      else _0x22be70['push'](_0x22be70['shift']());
    } catch (_0x2ab584) {
      _0x22be70['push'](_0x22be70['shift']());
    }
  }
})(a409_0x3580, 0xe0925);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x2ea7f7) {
    return _0x2ea7f7 && _0x2ea7f7['__esModule']
      ? _0x2ea7f7
      : { default: _0x2ea7f7 };
  };
Object[a409_0x3f581b(0x1e0)](exports, a409_0x3f581b(0x1df), { value: !![] });
function a409_0x3580() {
  const _0x188c0a = [
    '2787Sapynb',
    '9399432xJRvlr',
    '215836GyAGGM',
    '314AmMzHk',
    '../../models/Announcement',
    '9KvOXrr',
    '10449170uHTpXr',
    'ERR_NO_ANNOUNCEMENT_FOUND',
    '__esModule',
    'defineProperty',
    'default',
    '9177108MRfbuL',
    '7coMKui',
    'findOne',
    '2184087jXjdJL',
    '30974746FrDqzY',
    '5JEpIsd'
  ];
  a409_0x3580 = function () {
    return _0x188c0a;
  };
  return a409_0x3580();
}
const Announcement_1 = __importDefault(require(a409_0x3f581b(0x1db))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  DeleteService = async _0x51cd4f => {
    const _0x176df4 = a409_0x3f581b,
      _0x51ab70 = await Announcement_1[_0x176df4(0x1e1)][_0x176df4(0x1d3)]({
        where: { id: _0x51cd4f }
      });
    if (!_0x51ab70)
      throw new AppError_1[_0x176df4(0x1e1)](_0x176df4(0x1de), 0x194);
    await _0x51ab70['destroy']();
  };
exports[a409_0x3f581b(0x1e1)] = DeleteService;
