'use strict';
const a543_0x37f4a5 = a543_0x2212;
function a543_0xfe61() {
  const _0x585793 = [
    '1072rMSAkJ',
    'name',
    'queue',
    '273048irvoQX',
    '7751435ZPepah',
    'defineProperty',
    '8877253FKBSNw',
    '__esModule',
    'sequelize',
    '401FFXiQK',
    '79899NpUhUU',
    '27qtBoOq',
    '../../models/Prompt',
    '799236sxRnch',
    '__importDefault',
    'default',
    'findAndCountAll',
    '27042730dthvaa',
    '236NlHYCU'
  ];
  a543_0xfe61 = function () {
    return _0x585793;
  };
  return a543_0xfe61();
}
(function (_0x4493cb, _0x5389fb) {
  const _0x5b87a5 = a543_0x2212,
    _0x5360f0 = _0x4493cb();
  while (!![]) {
    try {
      const _0x598384 =
        (-parseInt(_0x5b87a5(0xff)) / 0x1) *
          (-parseInt(_0x5b87a5(0xf6)) / 0x2) +
        (parseInt(_0x5b87a5(0x100)) / 0x3) *
          (-parseInt(_0x5b87a5(0xf5)) / 0x4) +
        -parseInt(_0x5b87a5(0xfa)) / 0x5 +
        -parseInt(_0x5b87a5(0xf0)) / 0x6 +
        parseInt(_0x5b87a5(0xfc)) / 0x7 +
        (parseInt(_0x5b87a5(0xf9)) / 0x8) * (-parseInt(_0x5b87a5(0xee)) / 0x9) +
        parseInt(_0x5b87a5(0xf4)) / 0xa;
      if (_0x598384 === _0x5389fb) break;
      else _0x5360f0['push'](_0x5360f0['shift']());
    } catch (_0x22daf1) {
      _0x5360f0['push'](_0x5360f0['shift']());
    }
  }
})(a543_0xfe61, 0xcaacb);
function a543_0x2212(_0x4f937c, _0x429436) {
  const _0xfe6185 = a543_0xfe61();
  return (
    (a543_0x2212 = function (_0x2212e2, _0x4dafa2) {
      _0x2212e2 = _0x2212e2 - 0xee;
      let _0x106fe8 = _0xfe6185[_0x2212e2];
      return _0x106fe8;
    }),
    a543_0x2212(_0x4f937c, _0x429436)
  );
}
var __importDefault =
  (this && this[a543_0x37f4a5(0xf1)]) ||
  function (_0x3f51b8) {
    const _0x3cdf77 = a543_0x37f4a5;
    return _0x3f51b8 && _0x3f51b8[_0x3cdf77(0xfd)]
      ? _0x3f51b8
      : { default: _0x3f51b8 };
  };
Object[a543_0x37f4a5(0xfb)](exports, a543_0x37f4a5(0xfd), { value: !![] });
const sequelize_1 = require(a543_0x37f4a5(0xfe)),
  Prompt_1 = __importDefault(require(a543_0x37f4a5(0xef))),
  Queue_1 = __importDefault(require('../../models/Queue')),
  ListPromptsService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    companyId: _0x568b56
  }) => {
    const _0x5a2a64 = a543_0x37f4a5;
    let _0x1ae495 = {};
    const _0x3c3ff9 = 0x14,
      _0x2c5db8 = _0x3c3ff9 * (+pageNumber - 0x1);
    searchParam &&
      (_0x1ae495 = {
        [sequelize_1['Op']['or']]: [
          { name: { [sequelize_1['Op']['like']]: '%' + searchParam + '%' } }
        ]
      });
    const { count: _0x209035, rows: _0x67b150 } = await Prompt_1[
        _0x5a2a64(0xf2)
      ][_0x5a2a64(0xf3)]({
        where: { ..._0x1ae495, companyId: _0x568b56 },
        include: [
          {
            model: Queue_1[_0x5a2a64(0xf2)],
            as: _0x5a2a64(0xf8),
            attributes: ['id', _0x5a2a64(0xf7)]
          }
        ],
        limit: _0x3c3ff9,
        offset: _0x2c5db8,
        order: [[_0x5a2a64(0xf7), 'ASC']]
      }),
      _0x588c6a = _0x209035 > _0x2c5db8 + _0x67b150['length'];
    return { prompts: _0x67b150, count: _0x209035, hasMore: _0x588c6a };
  };
exports[a543_0x37f4a5(0xf2)] = ListPromptsService;
