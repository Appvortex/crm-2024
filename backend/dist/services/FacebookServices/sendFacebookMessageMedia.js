'use strict';
const a502_0x24b920 = a502_0x5b3d;
(function (_0x36951a, _0x40b81d) {
  const _0x4dce96 = a502_0x5b3d,
    _0x3b933b = _0x36951a();
  while (!![]) {
    try {
      const _0x3072d7 =
        (-parseInt(_0x4dce96(0x167)) / 0x1) *
          (-parseInt(_0x4dce96(0x172)) / 0x2) +
        -parseInt(_0x4dce96(0x189)) / 0x3 +
        (parseInt(_0x4dce96(0x161)) / 0x4) *
          (-parseInt(_0x4dce96(0x160)) / 0x5) +
        -parseInt(_0x4dce96(0x175)) / 0x6 +
        (parseInt(_0x4dce96(0x180)) / 0x7) *
          (parseInt(_0x4dce96(0x168)) / 0x8) +
        parseInt(_0x4dce96(0x17c)) / 0x9 +
        parseInt(_0x4dce96(0x187)) / 0xa;
      if (_0x3072d7 === _0x40b81d) break;
      else _0x3b933b['push'](_0x3b933b['shift']());
    } catch (_0x487058) {
      _0x3b933b['push'](_0x3b933b['shift']());
    }
  }
})(a502_0x54fb, 0xe43e7);
var __importDefault =
  (this && this[a502_0x24b920(0x165)]) ||
  function (_0x12915e) {
    const _0x1012b6 = a502_0x24b920;
    return _0x12915e && _0x12915e[_0x1012b6(0x163)]
      ? _0x12915e
      : { default: _0x12915e };
  };
function a502_0x5b3d(_0x184a51, _0x410ab5) {
  const _0x54fbbf = a502_0x54fb();
  return (
    (a502_0x5b3d = function (_0x5b3ddc, _0x2c4413) {
      _0x5b3ddc = _0x5b3ddc - 0x15f;
      let _0xcd57b6 = _0x54fbbf[_0x5b3ddc];
      return _0xcd57b6;
    }),
    a502_0x5b3d(_0x184a51, _0x410ab5)
  );
}
Object['defineProperty'](exports, a502_0x24b920(0x163), { value: !![] }),
  (exports[a502_0x24b920(0x16f)] =
    exports['sendFacebookMessageMediaExternal'] =
    exports[a502_0x24b920(0x17d)] =
    exports[a502_0x24b920(0x183)] =
      void 0x0);
const fs_1 = __importDefault(require('fs')),
  AppError_1 = __importDefault(require(a502_0x24b920(0x16a))),
  graphAPI_1 = require('./graphAPI'),
  typeAttachment = _0x5912cd => {
    const _0x3d10ae = a502_0x24b920;
    if (_0x5912cd[_0x3d10ae(0x17b)][_0x3d10ae(0x162)](_0x3d10ae(0x181)))
      return _0x3d10ae(0x181);
    if (_0x5912cd['mimetype'][_0x3d10ae(0x162)]('video'))
      return _0x3d10ae(0x179);
    if (_0x5912cd[_0x3d10ae(0x17b)][_0x3d10ae(0x162)](_0x3d10ae(0x17e)))
      return _0x3d10ae(0x17e);
    return _0x3d10ae(0x164);
  };
exports['typeAttachment'] = typeAttachment;
const sendFacebookMessageMedia = async ({
  media: _0x4c3966,
  ticket: _0x46f229,
  body: _0x5eb9b9
}) => {
  const _0x2dbe66 = a502_0x24b920;
  try {
    const _0xcb1238 = (0x0, exports[_0x2dbe66(0x183)])(_0x4c3966),
      _0x58f2b6 =
        process[_0x2dbe66(0x170)][_0x2dbe66(0x16c)] +
        _0x2dbe66(0x171) +
        _0x46f229[_0x2dbe66(0x185)] +
        '/' +
        _0x4c3966[_0x2dbe66(0x177)],
      _0x560e6d = await (0x0, graphAPI_1[_0x2dbe66(0x16d)])(
        _0x46f229[_0x2dbe66(0x173)]['number'],
        _0x58f2b6,
        _0xcb1238,
        _0x46f229[_0x2dbe66(0x169)]['facebookUserToken']
      );
    return (
      await _0x46f229[_0x2dbe66(0x17f)]({
        lastMessage: _0x4c3966[_0x2dbe66(0x177)]
      }),
      fs_1[_0x2dbe66(0x176)][_0x2dbe66(0x184)](_0x4c3966[_0x2dbe66(0x17a)]),
      _0x560e6d
    );
  } catch (_0x25b7e3) {
    throw new AppError_1[_0x2dbe66(0x176)](_0x2dbe66(0x182));
  }
};
exports[a502_0x24b920(0x17d)] = sendFacebookMessageMedia;
const sendFacebookMessageMediaExternal = async ({
  url: _0x395ad6,
  ticket: _0x4f64c4,
  body: _0x11fc7c
}) => {
  const _0x18ae29 = a502_0x24b920;
  try {
    const _0x1e6791 = _0x18ae29(0x181),
      _0x135df1 = await (0x0, graphAPI_1[_0x18ae29(0x16d)])(
        _0x4f64c4[_0x18ae29(0x173)]['number'],
        _0x395ad6,
        _0x1e6791,
        _0x4f64c4['whatsapp'][_0x18ae29(0x186)]
      ),
      _0x1681ec = Math[_0x18ae29(0x188)]()
        [_0x18ae29(0x16b)](0x24)
        [_0x18ae29(0x174)](0x7);
    return (
      await _0x4f64c4[_0x18ae29(0x17f)]({
        lastMessage: _0x11fc7c || _0x1681ec + _0x18ae29(0x166)
      }),
      _0x135df1
    );
  } catch (_0x618d94) {
    throw new AppError_1[_0x18ae29(0x176)]('ERR_SENDING_FACEBOOK_MSG');
  }
};
exports[a502_0x24b920(0x16e)] = sendFacebookMessageMediaExternal;
const sendFacebookMessageFileExternal = async ({
  url: _0x28bb34,
  ticket: _0x5521fe,
  body: _0x5100dc
}) => {
  const _0x4c9a37 = a502_0x24b920;
  try {
    const _0x142bdb = _0x4c9a37(0x164),
      _0x21f1be = await (0x0, graphAPI_1[_0x4c9a37(0x16d)])(
        _0x5521fe[_0x4c9a37(0x173)][_0x4c9a37(0x178)],
        _0x28bb34,
        _0x142bdb,
        _0x5521fe['whatsapp'][_0x4c9a37(0x186)]
      ),
      _0x1a9d46 = Math[_0x4c9a37(0x188)]()
        [_0x4c9a37(0x16b)](0x24)
        ['substring'](0x7);
    return (
      await _0x5521fe[_0x4c9a37(0x17f)]({
        lastMessage: _0x5100dc || _0x1a9d46 + _0x4c9a37(0x15f)
      }),
      _0x21f1be
    );
  } catch (_0x704af5) {
    throw new AppError_1['default'](_0x4c9a37(0x182));
  }
};
function a502_0x54fb() {
  const _0x3a5aa8 = [
    'unlinkSync',
    'companyId',
    'facebookUserToken',
    '757050NXoInx',
    'random',
    '2210340dZNbAQ',
    '.pdf}',
    '4630085fOgDmc',
    '4jqaZIW',
    'includes',
    '__esModule',
    'file',
    '__importDefault',
    '.jpg}',
    '906877wFRYrd',
    '16JmBRCd',
    'whatsapp',
    '../../errors/AppError',
    'toString',
    'BACKEND_URL',
    'sendAttachmentFromUrl',
    'sendFacebookMessageMediaExternal',
    'sendFacebookMessageFileExternal',
    'env',
    '/public/company',
    '4hraJMa',
    'contact',
    'substring',
    '8536794bwVmed',
    'default',
    'filename',
    'number',
    'video',
    'path',
    'mimetype',
    '15254010GLcEzx',
    'sendFacebookMessageMedia',
    'audio',
    'update',
    '1526469mRuQhR',
    'image',
    'ERR_SENDING_FACEBOOK_MSG',
    'typeAttachment'
  ];
  a502_0x54fb = function () {
    return _0x3a5aa8;
  };
  return a502_0x54fb();
}
exports['sendFacebookMessageFileExternal'] = sendFacebookMessageFileExternal;
