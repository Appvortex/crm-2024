'use strict';
function a453_0x18e9() {
  const _0x519afb = [
    'default',
    '63860AcYamM',
    '4cvsEZo',
    '1782822ooKKXh',
    'name',
    '../../models/Company',
    '__esModule',
    '48771VekNyP',
    '619330TDQINC',
    '4231152SkNytj',
    '1448cMgBca',
    '4499621MNMIcb',
    'settings',
    'plan',
    'ASC',
    '366AzGkhr',
    '1192793TbBMye',
    '737ZIrzdT',
    '../../models/Plan',
    'defineProperty'
  ];
  a453_0x18e9 = function () {
    return _0x519afb;
  };
  return a453_0x18e9();
}
const a453_0x2d3ece = a453_0x1622;
(function (_0x1748c1, _0x36e2fe) {
  const _0x3c1f85 = a453_0x1622,
    _0x375699 = _0x1748c1();
  while (!![]) {
    try {
      const _0x16eceb =
        parseInt(_0x3c1f85(0x167)) / 0x1 +
        (parseInt(_0x3c1f85(0x16d)) / 0x2) *
          (-parseInt(_0x3c1f85(0x16e)) / 0x3) +
        -parseInt(_0x3c1f85(0x160)) / 0x4 +
        (-parseInt(_0x3c1f85(0x16c)) / 0x5) *
          (parseInt(_0x3c1f85(0x166)) / 0x6) +
        -parseInt(_0x3c1f85(0x162)) / 0x7 +
        (parseInt(_0x3c1f85(0x161)) / 0x8) *
          (-parseInt(_0x3c1f85(0x172)) / 0x9) +
        (-parseInt(_0x3c1f85(0x173)) / 0xa) *
          (-parseInt(_0x3c1f85(0x168)) / 0xb);
      if (_0x16eceb === _0x36e2fe) break;
      else _0x375699['push'](_0x375699['shift']());
    } catch (_0x3a5786) {
      _0x375699['push'](_0x375699['shift']());
    }
  }
})(a453_0x18e9, 0xa93f2);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x48cf56) {
    const _0x593e51 = a453_0x1622;
    return _0x48cf56 && _0x48cf56[_0x593e51(0x171)]
      ? _0x48cf56
      : { default: _0x48cf56 };
  };
Object[a453_0x2d3ece(0x16a)](exports, a453_0x2d3ece(0x171), { value: !![] });
function a453_0x1622(_0x3ecba9, _0x22ef55) {
  const _0x18e918 = a453_0x18e9();
  return (
    (a453_0x1622 = function (_0x162282, _0x4b16a8) {
      _0x162282 = _0x162282 - 0x160;
      let _0x14520a = _0x18e918[_0x162282];
      return _0x14520a;
    }),
    a453_0x1622(_0x3ecba9, _0x22ef55)
  );
}
const Company_1 = __importDefault(require(a453_0x2d3ece(0x170))),
  Plan_1 = __importDefault(require(a453_0x2d3ece(0x169))),
  Setting_1 = __importDefault(require('../../models/Setting')),
  FindAllCompanyService = async () => {
    const _0x282781 = a453_0x2d3ece,
      _0x12459d = await Company_1['default']['findAll']({
        order: [[_0x282781(0x16f), _0x282781(0x165)]],
        include: [
          {
            model: Plan_1[_0x282781(0x16b)],
            as: _0x282781(0x164),
            attributes: ['id', _0x282781(0x16f), 'amount']
          },
          { model: Setting_1[_0x282781(0x16b)], as: _0x282781(0x163) }
        ]
      });
    return _0x12459d;
  };
exports[a453_0x2d3ece(0x16b)] = FindAllCompanyService;
