'use strict';
const a19_0x3b1230 = a19_0x153c;
(function (_0x2bbbac, _0x585b58) {
  const _0x4c42eb = a19_0x153c,
    _0x370f50 = _0x2bbbac();
  while (!![]) {
    try {
      const _0x5eb872 =
        (parseInt(_0x4c42eb(0xcc)) / 0x1) * (-parseInt(_0x4c42eb(0xd9)) / 0x2) +
        (-parseInt(_0x4c42eb(0xf3)) / 0x3) * (parseInt(_0x4c42eb(0xf0)) / 0x4) +
        (parseInt(_0x4c42eb(0xec)) / 0x5) * (-parseInt(_0x4c42eb(0xe4)) / 0x6) +
        parseInt(_0x4c42eb(0xde)) / 0x7 +
        (-parseInt(_0x4c42eb(0xe0)) / 0x8) * (parseInt(_0x4c42eb(0xc3)) / 0x9) +
        -parseInt(_0x4c42eb(0xc4)) / 0xa +
        parseInt(_0x4c42eb(0xea)) / 0xb;
      if (_0x5eb872 === _0x585b58) break;
      else _0x370f50['push'](_0x370f50['shift']());
    } catch (_0x5af1aa) {
      _0x370f50['push'](_0x370f50['shift']());
    }
  }
})(a19_0x28df, 0xa658b);
var __importDefault =
  (this && this[a19_0x3b1230(0xdb)]) ||
  function (_0x42a5a0) {
    return _0x42a5a0 && _0x42a5a0['__esModule']
      ? _0x42a5a0
      : { default: _0x42a5a0 };
  };
Object['defineProperty'](exports, a19_0x3b1230(0xc8), { value: !![] }),
  (exports[a19_0x3b1230(0xbf)] =
    exports[a19_0x3b1230(0xd6)] =
    exports[a19_0x3b1230(0xe2)] =
    exports['update'] =
    exports[a19_0x3b1230(0xe8)] =
    exports[a19_0x3b1230(0xed)] =
    exports[a19_0x3b1230(0xd8)] =
    exports[a19_0x3b1230(0xe6)] =
      void 0x0);
const socket_1 = require(a19_0x3b1230(0xc5)),
  AppError_1 = __importDefault(require(a19_0x3b1230(0xc7))),
  lodash_1 = require(a19_0x3b1230(0xee)),
  CreateService_1 = __importDefault(require(a19_0x3b1230(0xd3))),
  ListService_1 = __importDefault(require(a19_0x3b1230(0xe9))),
  UpdateService_1 = __importDefault(
    require('../services/FileServices/UpdateService')
  ),
  ShowService_1 = __importDefault(require(a19_0x3b1230(0xf1))),
  DeleteService_1 = __importDefault(require(a19_0x3b1230(0xdc))),
  SimpleListService_1 = __importDefault(require(a19_0x3b1230(0xce))),
  DeleteAllService_1 = __importDefault(require(a19_0x3b1230(0xc0))),
  FilesOptions_1 = __importDefault(require(a19_0x3b1230(0xcf))),
  index = async (_0x4f7007, _0x4e9623) => {
    const _0x5d7d2a = a19_0x3b1230,
      { pageNumber: _0x55b84d, searchParam: _0x4d41fc } =
        _0x4f7007[_0x5d7d2a(0xc9)],
      { companyId: _0x38f2a4 } = _0x4f7007[_0x5d7d2a(0xd2)],
      {
        files: _0x439407,
        count: _0x33587a,
        hasMore: _0x3fe69f
      } = await (0x0, ListService_1[_0x5d7d2a(0xc2)])({
        searchParam: _0x4d41fc,
        pageNumber: _0x55b84d,
        companyId: _0x38f2a4
      });
    return _0x4e9623['json']({
      files: _0x439407,
      count: _0x33587a,
      hasMore: _0x3fe69f
    });
  };
function a19_0x28df() {
  const _0x524cb5 = [
    '../errors/AppError',
    '__esModule',
    'query',
    'message',
    'json',
    '160522CDhMUv',
    'create',
    '../services/FileServices/SimpleListService',
    '../models/FilesOptions',
    'isArray',
    'head',
    'user',
    '../services/FileServices/CreateService',
    'File\x20List\x20deleted',
    'findOne',
    'removeAll',
    'emit',
    'store',
    '14zugXyo',
    'entries',
    '__importDefault',
    '../services/FileServices/DeleteService',
    'getIO',
    '5986596JZogsU',
    '-file',
    '24EUPMuZ',
    'Arquivos\x20atualizados',
    'remove',
    'company',
    '489822aBtpFS',
    'ERR_NO_PERMISSION',
    'index',
    'body',
    'uploadMedias',
    '../services/FileServices/ListService',
    '32967231jxFJCw',
    'filename',
    '5myNgiT',
    'show',
    'lodash',
    'delete',
    '217804bHUXZE',
    '../services/FileServices/ShowService',
    'files',
    '21jzKnEy',
    'profile',
    'admin',
    'send',
    'update',
    'list',
    '../services/FileServices/DeleteAllService',
    'status',
    'default',
    '3858327GkNAKE',
    '2983370tBzaoV',
    '../libs/socket',
    'length'
  ];
  a19_0x28df = function () {
    return _0x524cb5;
  };
  return a19_0x28df();
}
exports['index'] = index;
const store = async (_0x4fd60f, _0x15356d) => {
  const _0x260684 = a19_0x3b1230,
    {
      name: _0x18c63e,
      message: _0x357b81,
      options: _0x2619d9
    } = _0x4fd60f[_0x260684(0xe7)],
    { companyId: _0x128bbe } = _0x4fd60f[_0x260684(0xd2)],
    _0xb1c30f = await (0x0, CreateService_1[_0x260684(0xc2)])({
      name: _0x18c63e,
      message: _0x357b81,
      options: _0x2619d9,
      companyId: _0x128bbe
    }),
    _0x4715e5 = (0x0, socket_1[_0x260684(0xdd)])();
  return (
    _0x4715e5[_0x260684(0xd7)](_0x260684(0xe3) + _0x128bbe + '-file', {
      action: _0x260684(0xcd),
      fileList: _0xb1c30f
    }),
    _0x15356d['status'](0xc8)[_0x260684(0xcb)](_0xb1c30f)
  );
};
exports[a19_0x3b1230(0xd8)] = store;
const show = async (_0x32e7a6, _0x1a0632) => {
  const _0x3a20e4 = a19_0x3b1230,
    { fileId: _0x52febc } = _0x32e7a6['params'],
    { companyId: _0x3c6b30 } = _0x32e7a6[_0x3a20e4(0xd2)],
    _0x247e53 = await (0x0, ShowService_1[_0x3a20e4(0xc2)])(
      _0x52febc,
      _0x3c6b30
    );
  return _0x1a0632[_0x3a20e4(0xc1)](0xc8)[_0x3a20e4(0xcb)](_0x247e53);
};
exports['show'] = show;
const uploadMedias = async (_0x49b1cf, _0x257f16) => {
  const _0x41c183 = a19_0x3b1230,
    {
      fileId: _0x17fc8e,
      id: _0x394354,
      mediaType: _0xac4c3
    } = _0x49b1cf['body'],
    _0x32e5fa = _0x49b1cf[_0x41c183(0xf2)],
    _0x4b6300 = (0x0, lodash_1[_0x41c183(0xd1)])(_0x32e5fa);
  try {
    let _0x196bab;
    if (_0x32e5fa[_0x41c183(0xc6)] > 0x0)
      for (const [_0xfb6c0a, _0x51ddf2] of _0x32e5fa[_0x41c183(0xda)]()) {
        (_0x196bab = await FilesOptions_1[_0x41c183(0xc2)][_0x41c183(0xd5)]({
          where: {
            fileId: _0x17fc8e,
            id: Array['isArray'](_0x394354) ? _0x394354[_0xfb6c0a] : _0x394354
          }
        })),
          await _0x196bab[_0x41c183(0xbe)]({
            path: _0x51ddf2[_0x41c183(0xeb)]['replace']('/', '-'),
            mediaType: Array[_0x41c183(0xd0)](_0xac4c3)
              ? _0xac4c3[_0xfb6c0a]
              : _0xac4c3
          });
      }
    return _0x257f16[_0x41c183(0xbd)]({ mensagem: _0x41c183(0xe1) });
  } catch (_0x5ef84f) {
    throw new AppError_1[_0x41c183(0xc2)](_0x5ef84f[_0x41c183(0xca)]);
  }
};
exports[a19_0x3b1230(0xe8)] = uploadMedias;
const update = async (_0x24ba9, _0x27b209) => {
  const _0x4e0a00 = a19_0x3b1230;
  if (_0x24ba9[_0x4e0a00(0xd2)][_0x4e0a00(0xf4)] !== _0x4e0a00(0xbc))
    throw new AppError_1[_0x4e0a00(0xc2)](_0x4e0a00(0xe5), 0x193);
  const { fileId: _0x150f80 } = _0x24ba9['params'],
    _0x381e88 = _0x24ba9[_0x4e0a00(0xe7)],
    { companyId: _0x5dd277 } = _0x24ba9[_0x4e0a00(0xd2)],
    _0x57083c = await (0x0, UpdateService_1[_0x4e0a00(0xc2)])({
      fileData: _0x381e88,
      id: _0x150f80,
      companyId: _0x5dd277
    }),
    _0x3e3c2a = (0x0, socket_1[_0x4e0a00(0xdd)])();
  return (
    _0x3e3c2a[_0x4e0a00(0xd7)](_0x4e0a00(0xe3) + _0x5dd277 + _0x4e0a00(0xdf), {
      action: _0x4e0a00(0xbe),
      fileList: _0x57083c
    }),
    _0x27b209[_0x4e0a00(0xc1)](0xc8)[_0x4e0a00(0xcb)](_0x57083c)
  );
};
exports[a19_0x3b1230(0xbe)] = update;
const remove = async (_0xeff0c7, _0x4f3e6c) => {
  const _0x14caf7 = a19_0x3b1230,
    { fileId: _0x4b49b6 } = _0xeff0c7['params'],
    { companyId: _0x3e8c57 } = _0xeff0c7[_0x14caf7(0xd2)];
  await (0x0, DeleteService_1['default'])(_0x4b49b6, _0x3e8c57);
  const _0x4b6cc3 = (0x0, socket_1[_0x14caf7(0xdd)])();
  return (
    _0x4b6cc3[_0x14caf7(0xd7)]('company' + _0x3e8c57 + '-file', {
      action: _0x14caf7(0xef),
      fileId: _0x4b49b6
    }),
    _0x4f3e6c[_0x14caf7(0xc1)](0xc8)[_0x14caf7(0xcb)]({
      message: _0x14caf7(0xd4)
    })
  );
};
exports[a19_0x3b1230(0xe2)] = remove;
const removeAll = async (_0x205402, _0x141632) => {
  const _0x3e2f48 = a19_0x3b1230,
    { companyId: _0x182aa4 } = _0x205402['user'];
  return (
    await (0x0, DeleteAllService_1[_0x3e2f48(0xc2)])(_0x182aa4),
    _0x141632[_0x3e2f48(0xbd)]()
  );
};
exports['removeAll'] = removeAll;
function a19_0x153c(_0xd5711d, _0x55bca6) {
  const _0x28df88 = a19_0x28df();
  return (
    (a19_0x153c = function (_0x153cea, _0x13b412) {
      _0x153cea = _0x153cea - 0xbc;
      let _0x1eb130 = _0x28df88[_0x153cea];
      return _0x1eb130;
    }),
    a19_0x153c(_0xd5711d, _0x55bca6)
  );
}
const list = async (_0x19ccf4, _0x5dcd95) => {
  const _0x50fa69 = a19_0x3b1230,
    { searchParam: _0x194675 } = _0x19ccf4[_0x50fa69(0xc9)],
    { companyId: _0x23699c } = _0x19ccf4[_0x50fa69(0xd2)],
    _0x185b68 = await (0x0, SimpleListService_1['default'])({
      searchParam: _0x194675,
      companyId: _0x23699c
    });
  return _0x5dcd95['json'](_0x185b68);
};
exports[a19_0x3b1230(0xbf)] = list;
