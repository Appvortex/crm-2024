'use strict';
const a9_0x326fdd = a9_0x4779;
(function (_0x3fffcd, _0xafbe53) {
  const _0x12290b = a9_0x4779,
    _0x369879 = _0x3fffcd();
  while (!![]) {
    try {
      const _0x5afa4b =
        (-parseInt(_0x12290b(0xe4)) / 0x1) *
          (parseInt(_0x12290b(0x104)) / 0x2) +
        parseInt(_0x12290b(0x115)) / 0x3 +
        (parseInt(_0x12290b(0xf3)) / 0x4) *
          (-parseInt(_0x12290b(0x107)) / 0x5) +
        (-parseInt(_0x12290b(0xe7)) / 0x6) *
          (parseInt(_0x12290b(0x111)) / 0x7) +
        (parseInt(_0x12290b(0xd6)) / 0x8) * (-parseInt(_0x12290b(0xd9)) / 0x9) +
        parseInt(_0x12290b(0x10c)) / 0xa +
        parseInt(_0x12290b(0xd5)) / 0xb;
      if (_0x5afa4b === _0xafbe53) break;
      else _0x369879['push'](_0x369879['shift']());
    } catch (_0x713e20) {
      _0x369879['push'](_0x369879['shift']());
    }
  }
})(a9_0x5099, 0x3c97a);
var __createBinding =
    (this && this[a9_0x326fdd(0x10a)]) ||
    (Object['create']
      ? function (_0x3b7492, _0x2d1222, _0x4bdaf9, _0x3147b7) {
          const _0x46ec31 = a9_0x326fdd;
          if (_0x3147b7 === undefined) _0x3147b7 = _0x4bdaf9;
          var _0x3eff2b = Object['getOwnPropertyDescriptor'](
            _0x2d1222,
            _0x4bdaf9
          );
          (!_0x3eff2b ||
            (_0x46ec31(0xd1) in _0x3eff2b
              ? !_0x2d1222[_0x46ec31(0x101)]
              : _0x3eff2b[_0x46ec31(0xf7)] || _0x3eff2b[_0x46ec31(0xda)])) &&
            (_0x3eff2b = {
              enumerable: !![],
              get: function () {
                return _0x2d1222[_0x4bdaf9];
              }
            }),
            Object[_0x46ec31(0x117)](_0x3b7492, _0x3147b7, _0x3eff2b);
        }
      : function (_0x44957b, _0xd058b4, _0x36054a, _0x142586) {
          if (_0x142586 === undefined) _0x142586 = _0x36054a;
          _0x44957b[_0x142586] = _0xd058b4[_0x36054a];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object[a9_0x326fdd(0xdd)]
      ? function (_0x1f86fd, _0xf0930b) {
          const _0xfbe142 = a9_0x326fdd;
          Object[_0xfbe142(0x117)](_0x1f86fd, _0xfbe142(0x10d), {
            enumerable: !![],
            value: _0xf0930b
          });
        }
      : function (_0x309e1c, _0x5d60ea) {
          const _0x2c8bb5 = a9_0x326fdd;
          _0x309e1c[_0x2c8bb5(0x10d)] = _0x5d60ea;
        }),
  __importStar =
    (this && this[a9_0x326fdd(0x102)]) ||
    function (_0x3a9438) {
      const _0x23b05b = a9_0x326fdd;
      if (_0x3a9438 && _0x3a9438['__esModule']) return _0x3a9438;
      var _0x29e390 = {};
      if (_0x3a9438 != null) {
        for (var _0x115d31 in _0x3a9438)
          if (
            _0x115d31 !== _0x23b05b(0x10d) &&
            Object[_0x23b05b(0xcd)][_0x23b05b(0xff)][_0x23b05b(0xf8)](
              _0x3a9438,
              _0x115d31
            )
          )
            __createBinding(_0x29e390, _0x3a9438, _0x115d31);
      }
      return __setModuleDefault(_0x29e390, _0x3a9438), _0x29e390;
    },
  __importDefault =
    (this && this[a9_0x326fdd(0xed)]) ||
    function (_0x266c3d) {
      return _0x266c3d && _0x266c3d['__esModule']
        ? _0x266c3d
        : { default: _0x266c3d };
    };
Object[a9_0x326fdd(0x117)](exports, a9_0x326fdd(0x101), { value: !![] }),
  (exports[a9_0x326fdd(0xfa)] =
    exports[a9_0x326fdd(0x114)] =
    exports[a9_0x326fdd(0xe3)] =
    exports[a9_0x326fdd(0x11f)] =
    exports[a9_0x326fdd(0xe2)] =
    exports['cancel'] =
    exports['update'] =
    exports['show'] =
    exports[a9_0x326fdd(0x11a)] =
    exports[a9_0x326fdd(0xd7)] =
      void 0x0);
const Yup = __importStar(require(a9_0x326fdd(0xd3))),
  socket_1 = require('../libs/socket'),
  lodash_1 = require(a9_0x326fdd(0xd2)),
  fs_1 = __importDefault(require('fs')),
  path_1 = __importDefault(require(a9_0x326fdd(0xfc))),
  ListService_1 = __importDefault(require(a9_0x326fdd(0xf6))),
  CreateService_1 = __importDefault(require(a9_0x326fdd(0xf0))),
  ShowService_1 = __importDefault(
    require('../services/CampaignService/ShowService')
  ),
  UpdateService_1 = __importDefault(require(a9_0x326fdd(0xe1))),
  DeleteService_1 = __importDefault(require(a9_0x326fdd(0xcc))),
  FindService_1 = __importDefault(require(a9_0x326fdd(0x11b))),
  Campaign_1 = __importDefault(require(a9_0x326fdd(0xfd))),
  ContactTag_1 = __importDefault(require(a9_0x326fdd(0xf5))),
  Contact_1 = __importDefault(require('../models/Contact')),
  ContactList_1 = __importDefault(require('../models/ContactList')),
  ContactListItem_1 = __importDefault(require(a9_0x326fdd(0xcf))),
  AppError_1 = __importDefault(require('../errors/AppError')),
  CancelService_1 = require('../services/CampaignService/CancelService'),
  RestartService_1 = require('../services/CampaignService/RestartService'),
  index = async (_0x2cdb39, _0x2f010e) => {
    const _0x3fea8f = a9_0x326fdd,
      { searchParam: _0x2fec14, pageNumber: _0x39aa59 } =
        _0x2cdb39[_0x3fea8f(0x10e)],
      { companyId: _0x3261cb } = _0x2cdb39['user'],
      {
        records: _0x164ad7,
        count: _0x378838,
        hasMore: _0x20b63a
      } = await (0x0, ListService_1[_0x3fea8f(0x10d)])({
        searchParam: _0x2fec14,
        pageNumber: _0x39aa59,
        companyId: _0x3261cb
      });
    return _0x2f010e[_0x3fea8f(0xc8)]({
      records: _0x164ad7,
      count: _0x378838,
      hasMore: _0x20b63a
    });
  };
exports[a9_0x326fdd(0xd7)] = index;
const store = async (_0x276115, _0x26fecc) => {
  const _0x3c3e7a = a9_0x326fdd,
    { companyId: _0x35215e } = _0x276115['user'],
    _0x293765 = _0x276115['body'],
    _0x946a5a = Yup[_0x3c3e7a(0x118)]()[_0x3c3e7a(0xfe)]({
      name: Yup[_0x3c3e7a(0xea)]()[_0x3c3e7a(0xfb)]()
    });
  try {
    await _0x946a5a['validate'](_0x293765);
  } catch (_0x215be8) {
    throw new AppError_1[_0x3c3e7a(0x10d)](_0x215be8['message']);
  }
  if (typeof _0x293765[_0x3c3e7a(0x105)] === 'number') {
    const _0xf9104c = _0x293765[_0x3c3e7a(0x105)],
      _0x38d00c = _0x293765['name'];
    async function _0x3d1581(_0x312b32) {
      const _0x5bcdd8 = _0x3c3e7a,
        _0x38f133 = new Date(),
        _0x232792 = _0x38f133[_0x5bcdd8(0x110)]();
      try {
        const _0x16cf88 = await ContactTag_1[_0x5bcdd8(0x10d)][
            _0x5bcdd8(0x100)
          ]({ where: { tagId: _0x312b32 } }),
          _0x5a4d3c = _0x16cf88[_0x5bcdd8(0xee)](
            _0x411eae => _0x411eae[_0x5bcdd8(0xde)]
          ),
          _0x3d4a71 = await Contact_1[_0x5bcdd8(0x10d)]['findAll']({
            where: { id: _0x5a4d3c }
          }),
          _0x4d5f29 =
            _0x38d00c + _0x5bcdd8(0xe6) + _0x312b32 + '\x20-\x20' + _0x232792,
          _0x2d1eda = await ContactList_1[_0x5bcdd8(0x10d)][_0x5bcdd8(0xdd)]({
            name: _0x4d5f29,
            companyId: _0x35215e
          }),
          { id: _0xa10428 } = _0x2d1eda,
          _0x579bb9 = _0x3d4a71[_0x5bcdd8(0xee)](_0xb5a534 => ({
            name: _0xb5a534[_0x5bcdd8(0xf9)],
            number: _0xb5a534['number'],
            email: _0xb5a534[_0x5bcdd8(0x11d)],
            contactListId: _0xa10428,
            companyId: _0x35215e,
            isWhatsappValid: !![],
            isGroup: _0xb5a534[_0x5bcdd8(0x112)]
          }));
        return (
          await ContactListItem_1[_0x5bcdd8(0x10d)][_0x5bcdd8(0xef)](_0x579bb9),
          _0xa10428
        );
      } catch (_0x31a00a) {
        console[_0x5bcdd8(0xe9)](
          'Error\x20creating\x20contact\x20list:',
          _0x31a00a
        );
        throw _0x31a00a;
      }
    }
    _0x3d1581(_0xf9104c)
      [_0x3c3e7a(0x119)](async _0x5e6a40 => {
        const _0x3151db = _0x3c3e7a,
          _0x145374 = await (0x0, CreateService_1['default'])({
            ..._0x293765,
            companyId: _0x35215e,
            contactListId: _0x5e6a40
          }),
          _0x474db5 = (0x0, socket_1[_0x3151db(0x106)])();
        return (
          _0x474db5[_0x3151db(0x11c)](
            _0x3151db(0x120) + _0x35215e + _0x3151db(0xd8),
            { action: _0x3151db(0xdd), record: _0x145374 }
          ),
          _0x26fecc[_0x3151db(0xf4)](0xc8)[_0x3151db(0xc8)](_0x145374)
        );
      })
      [_0x3c3e7a(0x116)](_0x2cca8d => {
        const _0x548bf2 = _0x3c3e7a;
        return (
          console[_0x548bf2(0xe9)](_0x548bf2(0x108), _0x2cca8d),
          _0x26fecc['status'](0x1f4)['json']({ error: _0x548bf2(0xdc) })
        );
      });
  } else {
    const _0x4430ec = await (0x0, CreateService_1[_0x3c3e7a(0x10d)])({
        ..._0x293765,
        companyId: _0x35215e
      }),
      _0x26a04c = (0x0, socket_1[_0x3c3e7a(0x106)])();
    return (
      _0x26a04c[_0x3c3e7a(0x11c)](
        _0x3c3e7a(0x120) + _0x35215e + _0x3c3e7a(0xd8),
        { action: _0x3c3e7a(0xdd), record: _0x4430ec }
      ),
      _0x26fecc[_0x3c3e7a(0xf4)](0xc8)['json'](_0x4430ec)
    );
  }
};
exports[a9_0x326fdd(0x11a)] = store;
function a9_0x4779(_0x2af84c, _0x3f0f50) {
  const _0x5099fe = a9_0x5099();
  return (
    (a9_0x4779 = function (_0x47795c, _0x135ae8) {
      _0x47795c = _0x47795c - 0xc7;
      let _0x1ef5a9 = _0x5099fe[_0x47795c];
      return _0x1ef5a9;
    }),
    a9_0x4779(_0x2af84c, _0x3f0f50)
  );
}
function a9_0x5099() {
  const _0x201c0 = [
    'toISOString',
    '111013dShxHg',
    'isGroup',
    'resolve',
    'mediaUpload',
    '1308954uHShWm',
    'catch',
    'defineProperty',
    'object',
    'then',
    'store',
    '../services/CampaignService/FindService',
    'emit',
    'email',
    'Reinício\x20dos\x20disparos',
    'remove',
    'company-',
    'message',
    'unlinkSync',
    'json',
    'Mensagem\x20enviada',
    'mediaName',
    'existsSync',
    '../services/CampaignService/DeleteService',
    'prototype',
    'user',
    '../models/ContactListItem',
    'save',
    'get',
    'lodash',
    'yup',
    'show',
    '3245704UhylaQ',
    '301888JTJEPg',
    'index',
    '-campaign',
    '9NBBliN',
    'configurable',
    'cancel',
    'Error\x20creating\x20contact\x20list',
    'create',
    'contactId',
    'delete',
    'validate',
    '../services/CampaignService/UpdateService',
    'restart',
    'findList',
    '74021RXnsoD',
    'params',
    '\x20|\x20TAG:\x20',
    '102nKYVPU',
    'mediaPath',
    'error',
    'string',
    'body',
    'send',
    '__importDefault',
    'map',
    'bulkCreate',
    '../services/CampaignService/CreateService',
    'CancelService',
    'public',
    '1445812kfXPQm',
    'status',
    '../models/ContactTag',
    '../services/CampaignService/ListService',
    'writable',
    'call',
    'name',
    'deleteMedia',
    'required',
    'path',
    '../models/Campaign',
    'shape',
    'hasOwnProperty',
    'findAll',
    '__esModule',
    '__importStar',
    'filename',
    '8XjMnCv',
    'tagListId',
    'getIO',
    '5lKUdxm',
    'Error:',
    'update',
    '__createBinding',
    'findByPk',
    '4816800KNyJHO',
    'default',
    'query',
    'RestartService'
  ];
  a9_0x5099 = function () {
    return _0x201c0;
  };
  return a9_0x5099();
}
const show = async (_0x1182e2, _0x50dba0) => {
  const _0x5850ec = a9_0x326fdd,
    { id: _0x37f832 } = _0x1182e2[_0x5850ec(0xe5)],
    _0x5a83c8 = await (0x0, ShowService_1[_0x5850ec(0x10d)])(_0x37f832);
  return _0x50dba0[_0x5850ec(0xf4)](0xc8)[_0x5850ec(0xc8)](_0x5a83c8);
};
exports[a9_0x326fdd(0xd4)] = show;
const update = async (_0x1209e5, _0xca17a9) => {
  const _0x1bb72d = a9_0x326fdd,
    _0x453cb6 = _0x1209e5[_0x1bb72d(0xeb)],
    { companyId: _0x10d6d3 } = _0x1209e5[_0x1bb72d(0xce)],
    _0x294f16 = Yup['object']()[_0x1bb72d(0xfe)]({
      name: Yup['string']()[_0x1bb72d(0xfb)]()
    });
  try {
    await _0x294f16[_0x1bb72d(0xe0)](_0x453cb6);
  } catch (_0x259fe4) {
    throw new AppError_1[_0x1bb72d(0x10d)](_0x259fe4[_0x1bb72d(0x121)]);
  }
  const { id: _0x2ffa55 } = _0x1209e5['params'],
    _0x51c853 = await (0x0, UpdateService_1[_0x1bb72d(0x10d)])({
      ..._0x453cb6,
      id: _0x2ffa55
    }),
    _0x2c65ee = (0x0, socket_1[_0x1bb72d(0x106)])();
  return (
    _0x2c65ee[_0x1bb72d(0x11c)](
      _0x1bb72d(0x120) + _0x10d6d3 + _0x1bb72d(0xd8),
      { action: _0x1bb72d(0x109), record: _0x51c853 }
    ),
    _0xca17a9[_0x1bb72d(0xf4)](0xc8)[_0x1bb72d(0xc8)](_0x51c853)
  );
};
exports['update'] = update;
const cancel = async (_0x12b0cd, _0x408576) => {
  const _0x11be4b = a9_0x326fdd,
    { id: _0x213c8d } = _0x12b0cd[_0x11be4b(0xe5)];
  return (
    await (0x0, CancelService_1[_0x11be4b(0xf1)])(+_0x213c8d),
    _0x408576[_0x11be4b(0xf4)](0xcc)[_0x11be4b(0xc8)]({
      message: 'Cancelamento\x20realizado'
    })
  );
};
exports[a9_0x326fdd(0xdb)] = cancel;
const restart = async (_0x3db749, _0x19d19c) => {
  const _0xdf6484 = a9_0x326fdd,
    { id: _0x35d7c6 } = _0x3db749[_0xdf6484(0xe5)];
  return (
    await (0x0, RestartService_1[_0xdf6484(0x10f)])(+_0x35d7c6),
    _0x19d19c[_0xdf6484(0xf4)](0xcc)['json']({ message: _0xdf6484(0x11e) })
  );
};
exports['restart'] = restart;
const remove = async (_0x11d370, _0x1c8eb3) => {
  const _0x381c43 = a9_0x326fdd,
    { id: _0x582f1f } = _0x11d370[_0x381c43(0xe5)],
    { companyId: _0x3b5ee8 } = _0x11d370[_0x381c43(0xce)];
  await (0x0, DeleteService_1[_0x381c43(0x10d)])(_0x582f1f);
  const _0x12af34 = (0x0, socket_1[_0x381c43(0x106)])();
  return (
    _0x12af34['emit'](_0x381c43(0x120) + _0x3b5ee8 + '-campaign', {
      action: _0x381c43(0xdf),
      id: _0x582f1f
    }),
    _0x1c8eb3[_0x381c43(0xf4)](0xc8)[_0x381c43(0xc8)]({
      message: 'Campaign\x20deleted'
    })
  );
};
exports['remove'] = remove;
const findList = async (_0x1f817a, _0x319f10) => {
  const _0x45e553 = a9_0x326fdd,
    _0x578b29 = _0x1f817a[_0x45e553(0x10e)],
    _0x379e25 = await (0x0, FindService_1[_0x45e553(0x10d)])(_0x578b29);
  return _0x319f10[_0x45e553(0xf4)](0xc8)[_0x45e553(0xc8)](_0x379e25);
};
exports[a9_0x326fdd(0xe3)] = findList;
const mediaUpload = async (_0xb5fb62, _0x3285cf) => {
  const _0x85ee9d = a9_0x326fdd,
    { id: _0x2f2930 } = _0xb5fb62[_0x85ee9d(0xe5)],
    _0x25f5b0 = _0xb5fb62['files'],
    _0x399980 = (0x0, lodash_1['head'])(_0x25f5b0);
  try {
    const _0x186a28 =
      await Campaign_1[_0x85ee9d(0x10d)][_0x85ee9d(0x10b)](_0x2f2930);
    return (
      (_0x186a28[_0x85ee9d(0xe8)] = _0x399980[_0x85ee9d(0x103)]),
      (_0x186a28[_0x85ee9d(0xca)] = _0x399980['originalname']),
      await _0x186a28[_0x85ee9d(0xd0)](),
      _0x3285cf[_0x85ee9d(0xec)]({ mensagem: _0x85ee9d(0xc9) })
    );
  } catch (_0x41efaf) {
    throw new AppError_1[_0x85ee9d(0x10d)](_0x41efaf['message']);
  }
};
exports[a9_0x326fdd(0x114)] = mediaUpload;
const deleteMedia = async (_0x1cbcaf, _0x53b424) => {
  const _0x1cd176 = a9_0x326fdd,
    { id: _0x4fc1b9 } = _0x1cbcaf[_0x1cd176(0xe5)];
  try {
    const _0x7827bb = await Campaign_1['default'][_0x1cd176(0x10b)](_0x4fc1b9),
      _0x45ed9b = path_1[_0x1cd176(0x10d)][_0x1cd176(0x113)](
        _0x1cd176(0xf2),
        _0x7827bb['mediaPath']
      ),
      _0x39c036 = fs_1[_0x1cd176(0x10d)][_0x1cd176(0xcb)](_0x45ed9b);
    return (
      _0x39c036 && fs_1['default'][_0x1cd176(0xc7)](_0x45ed9b),
      (_0x7827bb[_0x1cd176(0xe8)] = null),
      (_0x7827bb['mediaName'] = null),
      await _0x7827bb['save'](),
      _0x53b424['send']({ mensagem: 'Arquivo\x20excluído' })
    );
  } catch (_0x5396dc) {
    throw new AppError_1[_0x1cd176(0x10d)](_0x5396dc[_0x1cd176(0x121)]);
  }
};
exports['deleteMedia'] = deleteMedia;
