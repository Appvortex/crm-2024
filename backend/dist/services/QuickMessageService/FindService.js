'use strict';
const a567_0x11eb27 = a567_0x2aa4;
(function (_0x4e9929, _0x395d56) {
  const _0x8de1d1 = a567_0x2aa4,
    _0x48c9a8 = _0x4e9929();
  while (!![]) {
    try {
      const _0x2a1928 =
        -parseInt(_0x8de1d1(0x18b)) / 0x1 +
        (parseInt(_0x8de1d1(0x189)) / 0x2) *
          (parseInt(_0x8de1d1(0x18f)) / 0x3) +
        -parseInt(_0x8de1d1(0x18e)) / 0x4 +
        (parseInt(_0x8de1d1(0x183)) / 0x5) *
          (parseInt(_0x8de1d1(0x17f)) / 0x6) +
        (parseInt(_0x8de1d1(0x191)) / 0x7) *
          (parseInt(_0x8de1d1(0x192)) / 0x8) +
        parseInt(_0x8de1d1(0x185)) / 0x9 +
        (parseInt(_0x8de1d1(0x18a)) / 0xa) *
          (-parseInt(_0x8de1d1(0x190)) / 0xb);
      if (_0x2a1928 === _0x395d56) break;
      else _0x48c9a8['push'](_0x48c9a8['shift']());
    } catch (_0x228b5d) {
      _0x48c9a8['push'](_0x48c9a8['shift']());
    }
  }
})(a567_0x185e, 0x433c6);
var __importDefault =
  (this && this[a567_0x11eb27(0x188)]) ||
  function (_0x588bc1) {
    const _0x1ab42a = a567_0x11eb27;
    return _0x588bc1 && _0x588bc1[_0x1ab42a(0x184)]
      ? _0x588bc1
      : { default: _0x588bc1 };
  };
Object['defineProperty'](exports, a567_0x11eb27(0x184), { value: !![] });
function a567_0x2aa4(_0x48ae95, _0x437c47) {
  const _0x185ede = a567_0x185e();
  return (
    (a567_0x2aa4 = function (_0x2aa43d, _0x5731b3) {
      _0x2aa43d = _0x2aa43d - 0x17e;
      let _0x4c8af4 = _0x185ede[_0x2aa43d];
      return _0x4c8af4;
    }),
    a567_0x2aa4(_0x48ae95, _0x437c47)
  );
}
function a567_0x185e() {
  const _0x106a38 = [
    '304578YXBlBV',
    '30sHslNR',
    '18038mZLwFa',
    'default',
    '../../models/Company',
    '492216hPLRrT',
    '9ZcGgcr',
    '2263261PQqMrS',
    '14PUSlMG',
    '1173808kVUvnJ',
    'shortcode',
    '6sWNMMP',
    'ASC',
    'company',
    'findAll',
    '522485cOjIVQ',
    '__esModule',
    '1610343jaQIMY',
    '../../models/QuickMessage',
    'name',
    '__importDefault'
  ];
  a567_0x185e = function () {
    return _0x106a38;
  };
  return a567_0x185e();
}
const QuickMessage_1 = __importDefault(require(a567_0x11eb27(0x186))),
  Company_1 = __importDefault(require(a567_0x11eb27(0x18d))),
  FindService = async ({ companyId: _0x5a8bcc, userId: _0x5466b8 }) => {
    const _0xeb08ca = a567_0x11eb27,
      _0x25a5f3 = await QuickMessage_1['default'][_0xeb08ca(0x182)]({
        where: { companyId: _0x5a8bcc },
        include: [
          {
            model: Company_1[_0xeb08ca(0x18c)],
            as: _0xeb08ca(0x181),
            attributes: ['id', _0xeb08ca(0x187)]
          }
        ],
        order: [[_0xeb08ca(0x17e), _0xeb08ca(0x180)]]
      });
    return _0x25a5f3;
  };
exports[a567_0x11eb27(0x18c)] = FindService;
