'use strict';
const a547_0x1cf98b = a547_0x3b87;
function a547_0x3b87(_0x57f832, _0x524154) {
  const _0x101462 = a547_0x1014();
  return (
    (a547_0x3b87 = function (_0x3b87f0, _0x1b35fa) {
      _0x3b87f0 = _0x3b87f0 - 0x13e;
      let _0x343a59 = _0x101462[_0x3b87f0];
      return _0x343a59;
    }),
    a547_0x3b87(_0x57f832, _0x524154)
  );
}
(function (_0x407c36, _0x3e2fc9) {
  const _0x36f2a1 = a547_0x3b87,
    _0x40d086 = _0x407c36();
  while (!![]) {
    try {
      const _0x5ed7ed =
        -parseInt(_0x36f2a1(0x149)) / 0x1 +
        parseInt(_0x36f2a1(0x145)) / 0x2 +
        (-parseInt(_0x36f2a1(0x143)) / 0x3) *
          (parseInt(_0x36f2a1(0x157)) / 0x4) +
        -parseInt(_0x36f2a1(0x15a)) / 0x5 +
        (parseInt(_0x36f2a1(0x156)) / 0x6) *
          (-parseInt(_0x36f2a1(0x14e)) / 0x7) +
        -parseInt(_0x36f2a1(0x13f)) / 0x8 +
        parseInt(_0x36f2a1(0x160)) / 0x9;
      if (_0x5ed7ed === _0x3e2fc9) break;
      else _0x40d086['push'](_0x40d086['shift']());
    } catch (_0x37704e) {
      _0x40d086['push'](_0x40d086['shift']());
    }
  }
})(a547_0x1014, 0xb1481);
var __importDefault =
  (this && this[a547_0x1cf98b(0x14b)]) ||
  function (_0x1e9786) {
    return _0x1e9786 && _0x1e9786['__esModule']
      ? _0x1e9786
      : { default: _0x1e9786 };
  };
Object[a547_0x1cf98b(0x142)](exports, a547_0x1cf98b(0x151), { value: !![] }),
  (exports[a547_0x1cf98b(0x144)] = exports[a547_0x1cf98b(0x140)] = void 0x0);
const dialogflow_1 = require(a547_0x1cf98b(0x152)),
  path_1 = __importDefault(require(a547_0x1cf98b(0x146))),
  fs_1 = __importDefault(require('fs')),
  os_1 = __importDefault(require('os')),
  logger_1 = require(a547_0x1cf98b(0x14c)),
  sessions = new Map(),
  createDialogflowSession = async (_0x4b6cbf, _0x2df8c6, _0x70f3ab) => {
    const _0x42a59d = a547_0x1cf98b;
    if (sessions[_0x42a59d(0x15d)](_0x4b6cbf))
      return sessions[_0x42a59d(0x159)](_0x4b6cbf);
    const _0x23c11e = path_1['default']['join'](
      os_1[_0x42a59d(0x147)][_0x42a59d(0x13e)](),
      _0x42a59d(0x14f) + _0x4b6cbf + _0x42a59d(0x155)
    );
    logger_1[_0x42a59d(0x15b)][_0x42a59d(0x150)](
      _0x42a59d(0x154) + _0x2df8c6 + _0x42a59d(0x14a) + _0x23c11e + '\x27'
    ),
      await fs_1[_0x42a59d(0x147)][_0x42a59d(0x153)](_0x23c11e, _0x70f3ab);
    const _0x2aa372 = new dialogflow_1['SessionsClient']({
      keyFilename: _0x23c11e
    });
    return sessions[_0x42a59d(0x14d)](_0x4b6cbf, _0x2aa372), _0x2aa372;
  };
exports[a547_0x1cf98b(0x140)] = createDialogflowSession;
const createDialogflowSessionWithModel = async _0x195e9b => {
  const _0x1e7cea = a547_0x1cf98b;
  return (
    console[_0x1e7cea(0x148)](
      _0x1e7cea(0x141) +
        _0x195e9b['id'] +
        _0x1e7cea(0x15f) +
        _0x195e9b[_0x1e7cea(0x15e)] +
        _0x1e7cea(0x158) +
        _0x195e9b['jsonContent']
    ),
    createDialogflowSession(
      _0x195e9b['id'],
      _0x195e9b['projectName'],
      _0x195e9b[_0x1e7cea(0x15c)]
    )
  );
};
exports[a547_0x1cf98b(0x144)] = createDialogflowSessionWithModel;
function a547_0x1014() {
  const _0x5c9565 = [
    'createDialogflowSessionWithModel',
    '1051308AlOHRh',
    'path',
    'default',
    'log',
    '582533fAhOZi',
    '\x20in\x20\x27',
    '__importDefault',
    '../../utils/logger',
    'set',
    '77YZbIuh',
    'whaticket_',
    'info',
    '__esModule',
    '@google-cloud/dialogflow',
    'writeFileSync',
    'Openig\x20new\x20dialogflow\x20session\x20#',
    '.json',
    '500028UZNBGn',
    '910124oPgBmm',
    '\x20json:',
    'get',
    '3070515PcpJpa',
    'logger',
    'jsonContent',
    'has',
    'projectName',
    '\x20name:',
    '33755841QMCmyw',
    'tmpdir',
    '7853936Mpsfaq',
    'createDialogflowSession',
    'ID:',
    'defineProperty',
    '6pOphbM'
  ];
  a547_0x1014 = function () {
    return _0x5c9565;
  };
  return a547_0x1014();
}
