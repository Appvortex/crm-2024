'use strict';
function a580_0x5454(_0x41a033, _0x2baa16) {
  const _0x3d2907 = a580_0x3d29();
  return (
    (a580_0x5454 = function (_0x5454b7, _0x4310e5) {
      _0x5454b7 = _0x5454b7 - 0xd3;
      let _0x22a8a7 = _0x3d2907[_0x5454b7];
      return _0x22a8a7;
    }),
    a580_0x5454(_0x41a033, _0x2baa16)
  );
}
const a580_0xf1a3be = a580_0x5454;
(function (_0x350b72, _0x3644e6) {
  const _0x5cbe32 = a580_0x5454,
    _0x100d70 = _0x350b72();
  while (!![]) {
    try {
      const _0x1810eb =
        (-parseInt(_0x5cbe32(0xe3)) / 0x1) *
          (-parseInt(_0x5cbe32(0xd5)) / 0x2) +
        parseInt(_0x5cbe32(0xe2)) / 0x3 +
        (-parseInt(_0x5cbe32(0xd9)) / 0x4) *
          (-parseInt(_0x5cbe32(0xde)) / 0x5) +
        parseInt(_0x5cbe32(0xe5)) / 0x6 +
        (-parseInt(_0x5cbe32(0xd3)) / 0x7) * (parseInt(_0x5cbe32(0xd8)) / 0x8) +
        (-parseInt(_0x5cbe32(0xe1)) / 0x9) *
          (-parseInt(_0x5cbe32(0xdf)) / 0xa) +
        (-parseInt(_0x5cbe32(0xdc)) / 0xb) * (parseInt(_0x5cbe32(0xdb)) / 0xc);
      if (_0x1810eb === _0x3644e6) break;
      else _0x100d70['push'](_0x100d70['shift']());
    } catch (_0x4184fa) {
      _0x100d70['push'](_0x100d70['shift']());
    }
  }
})(a580_0x3d29, 0xc1068);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0xa9406c) {
    return _0xa9406c && _0xa9406c['__esModule']
      ? _0xa9406c
      : { default: _0xa9406c };
  };
Object[a580_0xf1a3be(0xda)](exports, a580_0xf1a3be(0xd7), { value: !![] });
const ScheduledMessages_1 = __importDefault(require(a580_0xf1a3be(0xdd))),
  AppError_1 = __importDefault(require(a580_0xf1a3be(0xd6))),
  DeleteService = async (_0x6f6ee5, _0x40d864, _0x502c03) => {
    const _0x421553 = a580_0xf1a3be,
      _0x55bdd3 = await ScheduledMessages_1['default'][_0x421553(0xe4)]({
        where: { id: _0x6f6ee5, companyId: _0x40d864, key: _0x502c03 }
      });
    if (!_0x55bdd3)
      throw new AppError_1[_0x421553(0xe0)]('ERR_NO_SCHEDULE_FOUND', 0x194);
    await _0x55bdd3[_0x421553(0xd4)]();
  };
function a580_0x3d29() {
  const _0x1b989a = [
    'findOne',
    '6876012CvKuiu',
    '7sROltj',
    'destroy',
    '2888092AYeDOm',
    '../../errors/AppError',
    '__esModule',
    '708568eSPQQV',
    '19144sATQlX',
    'defineProperty',
    '101208UYUpwC',
    '6578gWocSZ',
    '../../models/ScheduledMessages',
    '1585yRGPfY',
    '20EnBhCk',
    'default',
    '1377882BWUnDU',
    '4527987IbfqTD',
    '1GzKxre'
  ];
  a580_0x3d29 = function () {
    return _0x1b989a;
  };
  return a580_0x3d29();
}
exports[a580_0xf1a3be(0xe0)] = DeleteService;
