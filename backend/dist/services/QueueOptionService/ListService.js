'use strict';
function a556_0x2847(_0x10a366, _0x3a651d) {
  const _0x5929b9 = a556_0x5929();
  return (
    (a556_0x2847 = function (_0x284722, _0x153067) {
      _0x284722 = _0x284722 - 0x16e;
      let _0x1458b1 = _0x5929b9[_0x284722];
      return _0x1458b1;
    }),
    a556_0x2847(_0x10a366, _0x3a651d)
  );
}
const a556_0x418546 = a556_0x2847;
(function (_0x1cb148, _0x4e7f62) {
  const _0x21a36b = a556_0x2847,
    _0x26d456 = _0x1cb148();
  while (!![]) {
    try {
      const _0x4707b3 =
        -parseInt(_0x21a36b(0x173)) / 0x1 +
        (parseInt(_0x21a36b(0x172)) / 0x2) *
          (parseInt(_0x21a36b(0x17e)) / 0x3) +
        (parseInt(_0x21a36b(0x170)) / 0x4) *
          (parseInt(_0x21a36b(0x17d)) / 0x5) +
        parseInt(_0x21a36b(0x17a)) / 0x6 +
        (-parseInt(_0x21a36b(0x16f)) / 0x7) *
          (parseInt(_0x21a36b(0x16e)) / 0x8) +
        (-parseInt(_0x21a36b(0x177)) / 0x9) *
          (parseInt(_0x21a36b(0x17f)) / 0xa) +
        parseInt(_0x21a36b(0x178)) / 0xb;
      if (_0x4707b3 === _0x4e7f62) break;
      else _0x26d456['push'](_0x26d456['shift']());
    } catch (_0x366351) {
      _0x26d456['push'](_0x26d456['shift']());
    }
  }
})(a556_0x5929, 0xb2b4c);
var __importDefault =
  (this && this[a556_0x418546(0x179)]) ||
  function (_0x277c1a) {
    return _0x277c1a && _0x277c1a['__esModule']
      ? _0x277c1a
      : { default: _0x277c1a };
  };
Object['defineProperty'](exports, a556_0x418546(0x174), { value: !![] });
function a556_0x5929() {
  const _0x50d995 = [
    '423455RYdQZS',
    '3TTzVub',
    '10lWIVbc',
    '824aSrRiF',
    '61943UPLaCC',
    '8SotCmA',
    'default',
    '1574858CiFnEK',
    '1333948OkneYX',
    '__esModule',
    '../../models/QueueOption',
    'findAll',
    '10264167VIxVuC',
    '24170289GpiNlB',
    '__importDefault',
    '5782368DvzGna',
    'queueId',
    'parentId'
  ];
  a556_0x5929 = function () {
    return _0x50d995;
  };
  return a556_0x5929();
}
const QueueOption_1 = __importDefault(require(a556_0x418546(0x175))),
  ListService = async ({
    queueId: _0x40cf03,
    queueOptionId: _0x36d479,
    parentId: _0x154687
  }) => {
    const _0x56bf49 = a556_0x418546,
      _0x34eb3b = {};
    _0x40cf03 && (_0x34eb3b[_0x56bf49(0x17b)] = _0x40cf03);
    _0x36d479 && (_0x34eb3b['id'] = _0x36d479);
    _0x154687 == -0x1 && (_0x34eb3b[_0x56bf49(0x17c)] = null);
    _0x154687 > 0x0 && (_0x34eb3b[_0x56bf49(0x17c)] = _0x154687);
    const _0x290c89 = await QueueOption_1[_0x56bf49(0x171)][_0x56bf49(0x176)]({
      where: _0x34eb3b,
      order: [['id', 'ASC']]
    });
    return _0x290c89;
  };
exports['default'] = ListService;
