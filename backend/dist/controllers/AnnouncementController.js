'use strict';
const a7_0x25bfd7 = a7_0x4ddc;
(function (_0x3aeb64, _0x567bc8) {
  const _0x238776 = a7_0x4ddc,
    _0xf922d2 = _0x3aeb64();
  while (!![]) {
    try {
      const _0x5ede00 =
        (parseInt(_0x238776(0x1c6)) / 0x1) *
          (-parseInt(_0x238776(0x19b)) / 0x2) +
        -parseInt(_0x238776(0x1cb)) / 0x3 +
        parseInt(_0x238776(0x190)) / 0x4 +
        (-parseInt(_0x238776(0x1cc)) / 0x5) *
          (parseInt(_0x238776(0x18b)) / 0x6) +
        (parseInt(_0x238776(0x1a7)) / 0x7) *
          (-parseInt(_0x238776(0x1a8)) / 0x8) +
        parseInt(_0x238776(0x1b8)) / 0x9 +
        (-parseInt(_0x238776(0x18c)) / 0xa) *
          (parseInt(_0x238776(0x1a4)) / 0xb);
      if (_0x5ede00 === _0x567bc8) break;
      else _0xf922d2['push'](_0xf922d2['shift']());
    } catch (_0x43617b) {
      _0xf922d2['push'](_0xf922d2['shift']());
    }
  }
})(a7_0x27ef, 0x728b9);
var __createBinding =
    (this && this[a7_0x25bfd7(0x18f)]) ||
    (Object[a7_0x25bfd7(0x1af)]
      ? function (_0x3c1b9e, _0x5d2449, _0x50a3e2, _0x2e6ac8) {
          const _0x276084 = a7_0x25bfd7;
          if (_0x2e6ac8 === undefined) _0x2e6ac8 = _0x50a3e2;
          var _0xe39e26 = Object['getOwnPropertyDescriptor'](
            _0x5d2449,
            _0x50a3e2
          );
          (!_0xe39e26 ||
            ('get' in _0xe39e26
              ? !_0x5d2449[_0x276084(0x18e)]
              : _0xe39e26[_0x276084(0x19e)] || _0xe39e26['configurable'])) &&
            (_0xe39e26 = {
              enumerable: !![],
              get: function () {
                return _0x5d2449[_0x50a3e2];
              }
            }),
            Object['defineProperty'](_0x3c1b9e, _0x2e6ac8, _0xe39e26);
        }
      : function (_0x3dbdc4, _0x52c846, _0xe5c605, _0x5d84b2) {
          if (_0x5d84b2 === undefined) _0x5d84b2 = _0xe5c605;
          _0x3dbdc4[_0x5d84b2] = _0x52c846[_0xe5c605];
        }),
  __setModuleDefault =
    (this && this[a7_0x25bfd7(0x1b7)]) ||
    (Object[a7_0x25bfd7(0x1af)]
      ? function (_0x5da268, _0x366314) {
          const _0xb3e77d = a7_0x25bfd7;
          Object[_0xb3e77d(0x1ae)](_0x5da268, 'default', {
            enumerable: !![],
            value: _0x366314
          });
        }
      : function (_0x5cea2b, _0x443825) {
          const _0x7eb834 = a7_0x25bfd7;
          _0x5cea2b[_0x7eb834(0x19a)] = _0x443825;
        }),
  __importStar =
    (this && this[a7_0x25bfd7(0x1b0)]) ||
    function (_0x1b5207) {
      const _0x57206b = a7_0x25bfd7;
      if (_0x1b5207 && _0x1b5207[_0x57206b(0x18e)]) return _0x1b5207;
      var _0x29f07f = {};
      if (_0x1b5207 != null) {
        for (var _0x1ddafb in _0x1b5207)
          if (
            _0x1ddafb !== _0x57206b(0x19a) &&
            Object[_0x57206b(0x1c0)]['hasOwnProperty'][_0x57206b(0x18d)](
              _0x1b5207,
              _0x1ddafb
            )
          )
            __createBinding(_0x29f07f, _0x1b5207, _0x1ddafb);
      }
      return __setModuleDefault(_0x29f07f, _0x1b5207), _0x29f07f;
    },
  __importDefault =
    (this && this[a7_0x25bfd7(0x1c2)]) ||
    function (_0x361fbc) {
      const _0x4bb66c = a7_0x25bfd7;
      return _0x361fbc && _0x361fbc[_0x4bb66c(0x18e)]
        ? _0x361fbc
        : { default: _0x361fbc };
    };
Object['defineProperty'](exports, a7_0x25bfd7(0x18e), { value: !![] }),
  (exports[a7_0x25bfd7(0x1b2)] =
    exports['mediaUpload'] =
    exports[a7_0x25bfd7(0x1c1)] =
    exports[a7_0x25bfd7(0x1c7)] =
    exports[a7_0x25bfd7(0x1ab)] =
    exports[a7_0x25bfd7(0x1a0)] =
    exports[a7_0x25bfd7(0x1ca)] =
    exports['index'] =
      void 0x0);
function a7_0x4ddc(_0x334f3d, _0x6c15b9) {
  const _0x27ef74 = a7_0x27ef();
  return (
    (a7_0x4ddc = function (_0x4ddc16, _0x3b13ad) {
      _0x4ddc16 = _0x4ddc16 - 0x18a;
      let _0x731106 = _0x27ef74[_0x4ddc16];
      return _0x731106;
    }),
    a7_0x4ddc(_0x334f3d, _0x6c15b9)
  );
}
const Yup = __importStar(require(a7_0x25bfd7(0x197))),
  socket_1 = require('../libs/socket'),
  lodash_1 = require(a7_0x25bfd7(0x1a5)),
  fs_1 = __importDefault(require('fs')),
  path_1 = __importDefault(require(a7_0x25bfd7(0x1c5))),
  ListService_1 = __importDefault(
    require('../services/AnnouncementService/ListService')
  ),
  CreateService_1 = __importDefault(require(a7_0x25bfd7(0x1be))),
  ShowService_1 = __importDefault(require(a7_0x25bfd7(0x1c9))),
  UpdateService_1 = __importDefault(
    require('../services/AnnouncementService/UpdateService')
  ),
  DeleteService_1 = __importDefault(require(a7_0x25bfd7(0x1a9))),
  FindService_1 = __importDefault(require(a7_0x25bfd7(0x19d))),
  Announcement_1 = __importDefault(require(a7_0x25bfd7(0x18a))),
  AppError_1 = __importDefault(require(a7_0x25bfd7(0x1a1))),
  index = async (_0x27abde, _0x3f802d) => {
    const _0x4b8b6c = a7_0x25bfd7,
      { searchParam: _0x277dd9, pageNumber: _0x1924de } = _0x27abde['query'],
      {
        records: _0x2d4c07,
        count: _0xa74f5f,
        hasMore: _0x59db5f
      } = await (0x0, ListService_1[_0x4b8b6c(0x19a)])({
        searchParam: _0x277dd9,
        pageNumber: _0x1924de
      });
    return _0x3f802d[_0x4b8b6c(0x1ad)]({
      records: _0x2d4c07,
      count: _0xa74f5f,
      hasMore: _0x59db5f
    });
  };
exports['index'] = index;
const store = async (_0xcaaf37, _0x41f3ec) => {
  const _0x1a9a73 = a7_0x25bfd7,
    { companyId: _0x270676 } = _0xcaaf37[_0x1a9a73(0x1c3)],
    _0x477153 = _0xcaaf37[_0x1a9a73(0x196)],
    _0x20092a = Yup[_0x1a9a73(0x19c)]()[_0x1a9a73(0x1b1)]({
      title: Yup[_0x1a9a73(0x1b9)]()['required']()
    });
  try {
    await _0x20092a[_0x1a9a73(0x198)](_0x477153);
  } catch (_0x231953) {
    throw new AppError_1[_0x1a9a73(0x19a)](_0x231953[_0x1a9a73(0x1aa)]);
  }
  const _0x2a3d5f = await (0x0, CreateService_1[_0x1a9a73(0x19a)])({
      ..._0x477153,
      companyId: _0x270676
    }),
    _0x102c11 = (0x0, socket_1['getIO'])();
  return (
    _0x102c11['emit']('company-announcement', {
      action: _0x1a9a73(0x1af),
      record: _0x2a3d5f
    }),
    _0x41f3ec[_0x1a9a73(0x191)](0xc8)[_0x1a9a73(0x1ad)](_0x2a3d5f)
  );
};
exports[a7_0x25bfd7(0x1ca)] = store;
const show = async (_0x3f1e79, _0x5a8bb9) => {
  const _0x215ae6 = a7_0x25bfd7,
    { id: _0x327ee7 } = _0x3f1e79[_0x215ae6(0x1b3)],
    _0x52710d = await (0x0, ShowService_1[_0x215ae6(0x19a)])(_0x327ee7);
  return _0x5a8bb9[_0x215ae6(0x191)](0xc8)[_0x215ae6(0x1ad)](_0x52710d);
};
exports['show'] = show;
const update = async (_0x286266, _0xa060f7) => {
  const _0x44bf4a = a7_0x25bfd7,
    _0x4a8359 = _0x286266[_0x44bf4a(0x196)],
    _0x1e804d = Yup[_0x44bf4a(0x19c)]()[_0x44bf4a(0x1b1)]({
      title: Yup[_0x44bf4a(0x1b9)]()[_0x44bf4a(0x192)]()
    });
  try {
    await _0x1e804d[_0x44bf4a(0x198)](_0x4a8359);
  } catch (_0x1a3dd1) {
    throw new AppError_1[_0x44bf4a(0x19a)](_0x1a3dd1[_0x44bf4a(0x1aa)]);
  }
  const { id: _0x743c33 } = _0x286266[_0x44bf4a(0x1b3)],
    _0x27afef = await (0x0, UpdateService_1[_0x44bf4a(0x19a)])({
      ..._0x4a8359,
      id: _0x743c33
    }),
    _0x197716 = (0x0, socket_1['getIO'])();
  return (
    _0x197716[_0x44bf4a(0x1bf)](_0x44bf4a(0x195), {
      action: _0x44bf4a(0x1ab),
      record: _0x27afef
    }),
    _0xa060f7[_0x44bf4a(0x191)](0xc8)[_0x44bf4a(0x1ad)](_0x27afef)
  );
};
exports['update'] = update;
function a7_0x27ef() {
  const _0x481c49 = [
    '594535OFWUbS',
    '../models/Announcement',
    '12NmevDR',
    '50pJNSDA',
    'call',
    '__esModule',
    '__createBinding',
    '3518724eeURsw',
    'status',
    'required',
    'files',
    'getIO',
    'company-announcement',
    'body',
    'yup',
    'validate',
    'findByPk',
    'default',
    '2UpOyCE',
    'object',
    '../services/AnnouncementService/FindService',
    'writable',
    'Announcement\x20deleted',
    'show',
    '../errors/AppError',
    'resolve',
    'replace',
    '192533YDavph',
    'lodash',
    'unlinkSync',
    '7suZrad',
    '553792jSwChF',
    '../services/AnnouncementService/DeleteService',
    'message',
    'update',
    'mediaPath',
    'json',
    'defineProperty',
    'create',
    '__importStar',
    'shape',
    'deleteMedia',
    'params',
    'existsSync',
    'announcements',
    'query',
    '__setModuleDefault',
    '7672869qmiwYi',
    'string',
    'public',
    'reload',
    'Mensagem\x20enviada',
    'delete',
    '../services/AnnouncementService/CreateService',
    'emit',
    'prototype',
    'findList',
    '__importDefault',
    'user',
    'originalname',
    'path',
    '790873RXWRjl',
    'remove',
    'send',
    '../services/AnnouncementService/ShowService',
    'store',
    '232857IoVgQD'
  ];
  a7_0x27ef = function () {
    return _0x481c49;
  };
  return a7_0x27ef();
}
const remove = async (_0x5f16e4, _0x1a6bc6) => {
  const _0x4936e4 = a7_0x25bfd7,
    { id: _0x34b3e5 } = _0x5f16e4[_0x4936e4(0x1b3)],
    { companyId: _0x2ec7d6 } = _0x5f16e4['user'];
  await (0x0, DeleteService_1[_0x4936e4(0x19a)])(_0x34b3e5);
  const _0x49c087 = (0x0, socket_1[_0x4936e4(0x194)])();
  return (
    _0x49c087[_0x4936e4(0x1bf)](_0x4936e4(0x195), {
      action: _0x4936e4(0x1bd),
      id: _0x34b3e5
    }),
    _0x1a6bc6[_0x4936e4(0x191)](0xc8)[_0x4936e4(0x1ad)]({
      message: _0x4936e4(0x19f)
    })
  );
};
exports[a7_0x25bfd7(0x1c7)] = remove;
const findList = async (_0x5c5f4a, _0x5ad487) => {
  const _0x3be173 = a7_0x25bfd7,
    _0x1fa8c4 = _0x5c5f4a[_0x3be173(0x1b6)],
    _0x185568 = await (0x0, FindService_1['default'])(_0x1fa8c4);
  return _0x5ad487[_0x3be173(0x191)](0xc8)[_0x3be173(0x1ad)](_0x185568);
};
exports['findList'] = findList;
const mediaUpload = async (_0x41cc27, _0xbaddee) => {
  const _0x59aa00 = a7_0x25bfd7,
    { id: _0x2deb0f } = _0x41cc27['params'],
    _0x234a56 = _0x41cc27[_0x59aa00(0x193)],
    _0xab61ba = (0x0, lodash_1['head'])(_0x234a56);
  try {
    const _0xe04f2a =
      await Announcement_1[_0x59aa00(0x19a)][_0x59aa00(0x199)](_0x2deb0f);
    await _0xe04f2a[_0x59aa00(0x1ab)]({
      mediaPath: _0xab61ba['filename'][_0x59aa00(0x1a3)]('/', '-'),
      mediaName: _0xab61ba[_0x59aa00(0x1c4)][_0x59aa00(0x1a3)]('/', '-')
    }),
      await _0xe04f2a[_0x59aa00(0x1bb)]();
    const _0x34ff0e = (0x0, socket_1[_0x59aa00(0x194)])();
    return (
      _0x34ff0e['emit']('company-announcement', {
        action: _0x59aa00(0x1ab),
        record: _0xe04f2a
      }),
      _0xbaddee[_0x59aa00(0x1c8)]({ mensagem: _0x59aa00(0x1bc) })
    );
  } catch (_0x4de9f2) {
    throw new AppError_1[_0x59aa00(0x19a)](_0x4de9f2['message']);
  }
};
exports['mediaUpload'] = mediaUpload;
const deleteMedia = async (_0x50827f, _0x24b7ff) => {
  const _0x58b566 = a7_0x25bfd7,
    { id: _0x3b07e5 } = _0x50827f[_0x58b566(0x1b3)];
  try {
    const _0x3197cc =
        await Announcement_1[_0x58b566(0x19a)][_0x58b566(0x199)](_0x3b07e5),
      _0x2eda9b = path_1[_0x58b566(0x19a)][_0x58b566(0x1a2)](
        _0x58b566(0x1ba),
        _0x58b566(0x1b5),
        _0x3197cc[_0x58b566(0x1ac)]
      ),
      _0x40dc1d = fs_1[_0x58b566(0x19a)][_0x58b566(0x1b4)](_0x2eda9b);
    _0x40dc1d && fs_1[_0x58b566(0x19a)][_0x58b566(0x1a6)](_0x2eda9b);
    await _0x3197cc[_0x58b566(0x1ab)]({ mediaPath: null, mediaName: null }),
      await _0x3197cc[_0x58b566(0x1bb)]();
    const _0x3aec47 = (0x0, socket_1[_0x58b566(0x194)])();
    return (
      _0x3aec47[_0x58b566(0x1bf)](_0x58b566(0x195), {
        action: 'update',
        record: _0x3197cc
      }),
      _0x24b7ff[_0x58b566(0x1c8)]({ mensagem: 'Arquivo\x20excluído' })
    );
  } catch (_0x268e5c) {
    throw new AppError_1[_0x58b566(0x19a)](_0x268e5c[_0x58b566(0x1aa)]);
  }
};
exports['deleteMedia'] = deleteMedia;
