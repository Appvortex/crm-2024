'use strict';
function a507_0x2e35(_0x3e47a4, _0x500302) {
  const _0x3d3096 = a507_0x3d30();
  return (
    (a507_0x2e35 = function (_0x2e3540, _0x433ca5) {
      _0x2e3540 = _0x2e3540 - 0x147;
      let _0x4e367e = _0x3d3096[_0x2e3540];
      return _0x4e367e;
    }),
    a507_0x2e35(_0x3e47a4, _0x500302)
  );
}
const a507_0x248768 = a507_0x2e35;
(function (_0x5be833, _0x1aed3e) {
  const _0x463101 = a507_0x2e35,
    _0x34931f = _0x5be833();
  while (!![]) {
    try {
      const _0x3a412f =
        parseInt(_0x463101(0x14f)) / 0x1 +
        parseInt(_0x463101(0x14c)) / 0x2 +
        parseInt(_0x463101(0x148)) / 0x3 +
        (-parseInt(_0x463101(0x14a)) / 0x4) *
          (parseInt(_0x463101(0x149)) / 0x5) +
        (-parseInt(_0x463101(0x159)) / 0x6) *
          (parseInt(_0x463101(0x156)) / 0x7) +
        (-parseInt(_0x463101(0x155)) / 0x8) *
          (parseInt(_0x463101(0x152)) / 0x9) +
        parseInt(_0x463101(0x158)) / 0xa;
      if (_0x3a412f === _0x1aed3e) break;
      else _0x34931f['push'](_0x34931f['shift']());
    } catch (_0x260377) {
      _0x34931f['push'](_0x34931f['shift']());
    }
  }
})(a507_0x3d30, 0xd5789);
var __importDefault =
  (this && this[a507_0x248768(0x14e)]) ||
  function (_0x544c5e) {
    const _0x4e4fd5 = a507_0x248768;
    return _0x544c5e && _0x544c5e[_0x4e4fd5(0x14d)]
      ? _0x544c5e
      : { default: _0x544c5e };
  };
Object[a507_0x248768(0x154)](exports, a507_0x248768(0x14d), { value: !![] });
function a507_0x3d30() {
  const _0x3d9988 = [
    '20cxzCAA',
    '52816NAMGXq',
    'options',
    '1507086cyMCEw',
    '__esModule',
    '__importDefault',
    '495957ZSqcFj',
    '../../models/FilesOptions',
    '../../models/Files',
    '36tZqgOm',
    'ERR_NO_FILE_FOUND',
    'defineProperty',
    '1729744pALJZH',
    '28mxqTxZ',
    'ASC',
    '2014640nSMcES',
    '567186bilPWl',
    '../../errors/AppError',
    'default',
    '2157675ClfGZY'
  ];
  a507_0x3d30 = function () {
    return _0x3d9988;
  };
  return a507_0x3d30();
}
const Files_1 = __importDefault(require(a507_0x248768(0x151))),
  AppError_1 = __importDefault(require(a507_0x248768(0x15a))),
  FilesOptions_1 = __importDefault(require(a507_0x248768(0x150))),
  ShowFileService = async (_0x31c79f, _0x41fee4) => {
    const _0x4a38ce = a507_0x248768,
      _0x575408 = await Files_1['default']['findOne']({
        where: { id: _0x31c79f, companyId: _0x41fee4 },
        include: [
          _0x4a38ce(0x14b),
          {
            model: FilesOptions_1['default'],
            as: _0x4a38ce(0x14b),
            order: [['id', _0x4a38ce(0x157)]]
          }
        ]
      });
    if (!_0x575408)
      throw new AppError_1[_0x4a38ce(0x147)](_0x4a38ce(0x153), 0x194);
    return _0x575408;
  };
exports['default'] = ShowFileService;
