'use strict';
const a48_0x5b777b = a48_0x572d;
(function (_0x2ba002, _0x95c465) {
  const _0x5437e3 = a48_0x572d,
    _0x5162a4 = _0x2ba002();
  while (!![]) {
    try {
      const _0x5cf2ea =
        -parseInt(_0x5437e3(0x172)) / 0x1 +
        (-parseInt(_0x5437e3(0x17b)) / 0x2) *
          (parseInt(_0x5437e3(0x16b)) / 0x3) +
        parseInt(_0x5437e3(0x16d)) / 0x4 +
        (parseInt(_0x5437e3(0x16c)) / 0x5) *
          (parseInt(_0x5437e3(0x176)) / 0x6) +
        (-parseInt(_0x5437e3(0x177)) / 0x7) *
          (parseInt(_0x5437e3(0x171)) / 0x8) +
        (-parseInt(_0x5437e3(0x179)) / 0x9) *
          (-parseInt(_0x5437e3(0x178)) / 0xa) +
        (parseInt(_0x5437e3(0x17c)) / 0xb) * (parseInt(_0x5437e3(0x170)) / 0xc);
      if (_0x5cf2ea === _0x95c465) break;
      else _0x5162a4['push'](_0x5162a4['shift']());
    } catch (_0x58ec33) {
      _0x5162a4['push'](_0x5162a4['shift']());
    }
  }
})(a48_0x3d91, 0x50a9e);
function a48_0x572d(_0x40b4bc, _0x4e18dc) {
  const _0x3d9110 = a48_0x3d91();
  return (
    (a48_0x572d = function (_0x572d53, _0x111d9d) {
      _0x572d53 = _0x572d53 - 0x16b;
      let _0x47edf4 = _0x3d9110[_0x572d53];
      return _0x47edf4;
    }),
    a48_0x572d(_0x40b4bc, _0x4e18dc)
  );
}
function a48_0x3d91() {
  const _0x5f3e9c = [
    '3480728eaUXwd',
    '468743pfLYOg',
    'status',
    '__importDefault',
    'json',
    '6hOJEKt',
    '7yAmsiq',
    '5254490kmlVGW',
    '9mRElEx',
    '../../services/MessageServices/GetMessageRangeService',
    '5210MXGPVT',
    '1898501hwwFDJ',
    '69JDKYVr',
    '2780120TYccwW',
    '160332wQoJCO',
    'show',
    '__esModule',
    '12UgcFdy'
  ];
  a48_0x3d91 = function () {
    return _0x5f3e9c;
  };
  return a48_0x3d91();
}
var __importDefault =
  (this && this[a48_0x5b777b(0x174)]) ||
  function (_0x44be96) {
    const _0x176633 = a48_0x5b777b;
    return _0x44be96 && _0x44be96[_0x176633(0x16f)]
      ? _0x44be96
      : { default: _0x44be96 };
  };
Object['defineProperty'](exports, a48_0x5b777b(0x16f), { value: !![] }),
  (exports['show'] = void 0x0);
const GetMessageRangeService_1 = __importDefault(require(a48_0x5b777b(0x17a))),
  show = async (_0x5d0837, _0x2bf12a) => {
    const _0x34c627 = a48_0x5b777b,
      {
        companyId: _0x5fae4b,
        startDate: _0x252468,
        lastDate: _0x4d5b37
      } = _0x5d0837['body'],
      _0x2d55c3 = await (0x0, GetMessageRangeService_1['default'])({
        companyId: _0x5fae4b,
        startDate: _0x252468,
        lastDate: _0x4d5b37
      });
    return _0x2bf12a[_0x34c627(0x173)](0xc8)[_0x34c627(0x175)](_0x2d55c3);
  };
exports[a48_0x5b777b(0x16e)] = show;
