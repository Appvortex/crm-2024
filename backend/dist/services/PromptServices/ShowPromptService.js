'use strict';
const a544_0x2cd44d = a544_0x4143;
(function (_0x3ccc45, _0x569f4c) {
  const _0x420ca2 = a544_0x4143,
    _0x110b2a = _0x3ccc45();
  while (!![]) {
    try {
      const _0x443989 =
        (-parseInt(_0x420ca2(0x164)) / 0x1) *
          (-parseInt(_0x420ca2(0x167)) / 0x2) +
        (parseInt(_0x420ca2(0x16e)) / 0x3) *
          (parseInt(_0x420ca2(0x160)) / 0x4) +
        parseInt(_0x420ca2(0x15e)) / 0x5 +
        parseInt(_0x420ca2(0x16a)) / 0x6 +
        parseInt(_0x420ca2(0x165)) / 0x7 +
        -parseInt(_0x420ca2(0x15f)) / 0x8 +
        -parseInt(_0x420ca2(0x163)) / 0x9;
      if (_0x443989 === _0x569f4c) break;
      else _0x110b2a['push'](_0x110b2a['shift']());
    } catch (_0x3938e3) {
      _0x110b2a['push'](_0x110b2a['shift']());
    }
  }
})(a544_0x2df4, 0x5e887);
var __importDefault =
  (this && this[a544_0x2cd44d(0x169)]) ||
  function (_0x5c4a12) {
    const _0x36ec94 = a544_0x2cd44d;
    return _0x5c4a12 && _0x5c4a12[_0x36ec94(0x166)]
      ? _0x5c4a12
      : { default: _0x5c4a12 };
  };
function a544_0x4143(_0x25acf9, _0x584cec) {
  const _0x2df4e1 = a544_0x2df4();
  return (
    (a544_0x4143 = function (_0x4143c4, _0x49a4a3) {
      _0x4143c4 = _0x4143c4 - 0x15e;
      let _0x5bf211 = _0x2df4e1[_0x4143c4];
      return _0x5bf211;
    }),
    a544_0x4143(_0x25acf9, _0x584cec)
  );
}
Object[a544_0x2cd44d(0x16f)](exports, a544_0x2cd44d(0x166), { value: !![] });
const AppError_1 = __importDefault(require(a544_0x2cd44d(0x168))),
  Prompt_1 = __importDefault(require(a544_0x2cd44d(0x162))),
  Queue_1 = __importDefault(require(a544_0x2cd44d(0x16b))),
  ShowPromptService = async ({ promptId: _0x1c7ded, companyId: _0x4bea8a }) => {
    const _0x75948f = a544_0x2cd44d,
      _0x8ca2d8 = await Prompt_1[_0x75948f(0x161)]['findOne']({
        where: { id: _0x1c7ded, companyId: _0x4bea8a },
        include: [{ model: Queue_1[_0x75948f(0x161)], as: _0x75948f(0x16d) }]
      });
    if (!_0x8ca2d8) throw new AppError_1['default'](_0x75948f(0x16c), 0x194);
    return _0x8ca2d8;
  };
exports['default'] = ShowPromptService;
function a544_0x2df4() {
  const _0x1d38a3 = [
    '2743315RWNDyz',
    '2110280Xxribf',
    '20lSZuSp',
    'default',
    '../../models/Prompt',
    '8865846iPSkEG',
    '1863iubePe',
    '2098390bWOOCh',
    '__esModule',
    '404VLDGWl',
    '../../errors/AppError',
    '__importDefault',
    '631332nYXfFo',
    '../../models/Queue',
    'ERR_NO_PROMPT_FOUND',
    'queue',
    '183663pYJfex',
    'defineProperty'
  ];
  a544_0x2df4 = function () {
    return _0x1d38a3;
  };
  return a544_0x2df4();
}
