'use strict';
function a671_0x1cbe() {
  const _0x2dcbaa = [
    'Arquivo\x20adicionado!',
    'public',
    '225evFttq',
    '__esModule',
    'default',
    '267648lhwUzh',
    '__importDefault',
    'head',
    '1365gOxtID',
    '2103296KAdPOZ',
    '5939731exSrUZ',
    '504823swoucF',
    '95XrySnB',
    'send',
    'path',
    'message',
    'Arquivo\x20excluído',
    '302550nJssLE',
    'filename',
    'findByPk',
    'status',
    'mediaUpload',
    '4318180oKUZii',
    'params',
    'existsSync',
    'lodash',
    'json',
    '2958ywlusD',
    'deleteMedia',
    'save',
    'greetingMediaAttachment',
    '../../errors/AppError',
    'defineProperty',
    'unlinkSync',
    'resolve'
  ];
  a671_0x1cbe = function () {
    return _0x2dcbaa;
  };
  return a671_0x1cbe();
}
const a671_0x22a196 = a671_0x5c20;
(function (_0x423152, _0x3ab23f) {
  const _0x1a0f72 = a671_0x5c20,
    _0xafec3f = _0x423152();
  while (!![]) {
    try {
      const _0x33b336 =
        parseInt(_0x1a0f72(0x1ac)) / 0x1 +
        (-parseInt(_0x1a0f72(0x1bc)) / 0x2) *
          (-parseInt(_0x1a0f72(0x1a9)) / 0x3) +
        parseInt(_0x1a0f72(0x1aa)) / 0x4 +
        (-parseInt(_0x1a0f72(0x1ad)) / 0x5) *
          (-parseInt(_0x1a0f72(0x1b2)) / 0x6) +
        -parseInt(_0x1a0f72(0x1ab)) / 0x7 +
        (parseInt(_0x1a0f72(0x1a6)) / 0x8) *
          (-parseInt(_0x1a0f72(0x1a3)) / 0x9) +
        -parseInt(_0x1a0f72(0x1b7)) / 0xa;
      if (_0x33b336 === _0x3ab23f) break;
      else _0xafec3f['push'](_0xafec3f['shift']());
    } catch (_0x430507) {
      _0xafec3f['push'](_0xafec3f['shift']());
    }
  }
})(a671_0x1cbe, 0x85094);
var __importDefault =
  (this && this[a671_0x22a196(0x1a7)]) ||
  function (_0x34531b) {
    return _0x34531b && _0x34531b['__esModule']
      ? _0x34531b
      : { default: _0x34531b };
  };
Object[a671_0x22a196(0x1c1)](exports, a671_0x22a196(0x1a4), { value: !![] }),
  (exports[a671_0x22a196(0x1bd)] = exports[a671_0x22a196(0x1b6)] = void 0x0);
const lodash_1 = require(a671_0x22a196(0x1ba)),
  AppError_1 = __importDefault(require(a671_0x22a196(0x1c0))),
  Whatsapp_1 = __importDefault(require('../../models/Whatsapp')),
  path_1 = __importDefault(require(a671_0x22a196(0x1af))),
  fs_1 = __importDefault(require('fs')),
  mediaUpload = async (_0x290d2c, _0x1c0b42) => {
    const _0x43e868 = a671_0x22a196,
      { whatsappId: _0x2f3f36 } = _0x290d2c['params'],
      _0x153960 = _0x290d2c['files'],
      _0x1ab21b = (0x0, lodash_1[_0x43e868(0x1a8)])(_0x153960);
    try {
      const _0xb660a7 =
        await Whatsapp_1[_0x43e868(0x1a5)][_0x43e868(0x1b4)](_0x2f3f36);
      return (
        (_0xb660a7[_0x43e868(0x1bf)] = _0x1ab21b[_0x43e868(0x1b3)]),
        await _0xb660a7['save'](),
        _0x1c0b42[_0x43e868(0x1b5)](0xc8)[_0x43e868(0x1bb)]({
          mensagem: _0x43e868(0x1a1)
        })
      );
    } catch (_0x30c73c) {
      throw new AppError_1[_0x43e868(0x1a5)](_0x30c73c[_0x43e868(0x1b0)]);
    }
  };
function a671_0x5c20(_0x1328ce, _0x42ba8d) {
  const _0x1cbe55 = a671_0x1cbe();
  return (
    (a671_0x5c20 = function (_0x5c2059, _0x28169b) {
      _0x5c2059 = _0x5c2059 - 0x1a1;
      let _0xf5e7a7 = _0x1cbe55[_0x5c2059];
      return _0xf5e7a7;
    }),
    a671_0x5c20(_0x1328ce, _0x42ba8d)
  );
}
exports[a671_0x22a196(0x1b6)] = mediaUpload;
const deleteMedia = async (_0x49df3c, _0x5aa571) => {
  const _0x115e13 = a671_0x22a196,
    { whatsappId: _0x576d8a } = _0x49df3c[_0x115e13(0x1b8)];
  try {
    const _0x65a9b5 =
        await Whatsapp_1[_0x115e13(0x1a5)][_0x115e13(0x1b4)](_0x576d8a),
      _0x2b884a = path_1['default'][_0x115e13(0x1c3)](
        _0x115e13(0x1a2),
        _0x65a9b5[_0x115e13(0x1bf)]
      ),
      _0x56de4c = fs_1[_0x115e13(0x1a5)][_0x115e13(0x1b9)](_0x2b884a);
    return (
      _0x56de4c && fs_1[_0x115e13(0x1a5)][_0x115e13(0x1c2)](_0x2b884a),
      (_0x65a9b5[_0x115e13(0x1bf)] = null),
      await _0x65a9b5[_0x115e13(0x1be)](),
      _0x5aa571[_0x115e13(0x1ae)]({ message: _0x115e13(0x1b1) })
    );
  } catch (_0x5f8f07) {
    throw new AppError_1[_0x115e13(0x1a5)](_0x5f8f07[_0x115e13(0x1b0)]);
  }
};
exports[a671_0x22a196(0x1bd)] = deleteMedia;
