'use strict';
function a24_0x46b9(_0x1ca53f, _0x2e583a) {
  const _0x18fc47 = a24_0x18fc();
  return (
    (a24_0x46b9 = function (_0x46b9b2, _0x11749f) {
      _0x46b9b2 = _0x46b9b2 - 0xfd;
      let _0x1292f9 = _0x18fc47[_0x46b9b2];
      return _0x1292f9;
    }),
    a24_0x46b9(_0x1ca53f, _0x2e583a)
  );
}
const a24_0x2f1579 = a24_0x46b9;
(function (_0x18f753, _0x591f09) {
  const _0x56a53c = a24_0x46b9,
    _0x6de943 = _0x18f753();
  while (!![]) {
    try {
      const _0x225971 =
        (-parseInt(_0x56a53c(0x119)) / 0x1) *
          (-parseInt(_0x56a53c(0xfe)) / 0x2) +
        (parseInt(_0x56a53c(0x10f)) / 0x3) *
          (-parseInt(_0x56a53c(0x10e)) / 0x4) +
        (-parseInt(_0x56a53c(0x12e)) / 0x5) *
          (-parseInt(_0x56a53c(0x115)) / 0x6) +
        parseInt(_0x56a53c(0x101)) / 0x7 +
        -parseInt(_0x56a53c(0x117)) / 0x8 +
        (-parseInt(_0x56a53c(0xfd)) / 0x9) *
          (parseInt(_0x56a53c(0x11e)) / 0xa) +
        parseInt(_0x56a53c(0xff)) / 0xb;
      if (_0x225971 === _0x591f09) break;
      else _0x6de943['push'](_0x6de943['shift']());
    } catch (_0x1d6f59) {
      _0x6de943['push'](_0x6de943['shift']());
    }
  }
})(a24_0x18fc, 0x3db87);
var __createBinding =
    (this && this[a24_0x2f1579(0x135)]) ||
    (Object[a24_0x2f1579(0x110)]
      ? function (_0x4fde2c, _0x1f0c8e, _0x4d2a7d, _0x2cf3ab) {
          const _0x1758ee = a24_0x2f1579;
          if (_0x2cf3ab === undefined) _0x2cf3ab = _0x4d2a7d;
          var _0x5ec9c8 = Object[_0x1758ee(0x12b)](_0x1f0c8e, _0x4d2a7d);
          (!_0x5ec9c8 ||
            (_0x1758ee(0x125) in _0x5ec9c8
              ? !_0x1f0c8e[_0x1758ee(0x112)]
              : _0x5ec9c8[_0x1758ee(0x123)] || _0x5ec9c8['configurable'])) &&
            (_0x5ec9c8 = {
              enumerable: !![],
              get: function () {
                return _0x1f0c8e[_0x4d2a7d];
              }
            }),
            Object[_0x1758ee(0x103)](_0x4fde2c, _0x2cf3ab, _0x5ec9c8);
        }
      : function (_0x4a2c32, _0x1cb5dc, _0x194755, _0x4a1341) {
          if (_0x4a1341 === undefined) _0x4a1341 = _0x194755;
          _0x4a2c32[_0x4a1341] = _0x1cb5dc[_0x194755];
        }),
  __setModuleDefault =
    (this && this[a24_0x2f1579(0x10a)]) ||
    (Object[a24_0x2f1579(0x110)]
      ? function (_0x91f9a, _0x461d8b) {
          const _0x12f4e2 = a24_0x2f1579;
          Object['defineProperty'](_0x91f9a, _0x12f4e2(0x111), {
            enumerable: !![],
            value: _0x461d8b
          });
        }
      : function (_0x5479cd, _0x507a4d) {
          const _0x4b76db = a24_0x2f1579;
          _0x5479cd[_0x4b76db(0x111)] = _0x507a4d;
        }),
  __importStar =
    (this && this[a24_0x2f1579(0x120)]) ||
    function (_0x184b4e) {
      const _0x3a4d0e = a24_0x2f1579;
      if (_0x184b4e && _0x184b4e[_0x3a4d0e(0x112)]) return _0x184b4e;
      var _0x28f07b = {};
      if (_0x184b4e != null) {
        for (var _0x535877 in _0x184b4e)
          if (
            _0x535877 !== _0x3a4d0e(0x111) &&
            Object[_0x3a4d0e(0x12d)]['hasOwnProperty'][_0x3a4d0e(0x102)](
              _0x184b4e,
              _0x535877
            )
          )
            __createBinding(_0x28f07b, _0x184b4e, _0x535877);
      }
      return __setModuleDefault(_0x28f07b, _0x184b4e), _0x28f07b;
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0x302e33) {
      const _0xc2b873 = a24_0x2f1579;
      return _0x302e33 && _0x302e33[_0xc2b873(0x112)]
        ? _0x302e33
        : { default: _0x302e33 };
    };
Object[a24_0x2f1579(0x103)](exports, '__esModule', { value: !![] }),
  (exports[a24_0x2f1579(0x105)] =
    exports[a24_0x2f1579(0x134)] =
    exports[a24_0x2f1579(0x108)] =
    exports['store'] =
    exports[a24_0x2f1579(0x127)] =
    exports[a24_0x2f1579(0x12c)] =
      void 0x0);
const jsonwebtoken_1 = require(a24_0x2f1579(0x136)),
  auth_1 = __importDefault(require('../config/auth')),
  Yup = __importStar(require(a24_0x2f1579(0x100))),
  AppError_1 = __importDefault(require(a24_0x2f1579(0x107))),
  Plan_1 = __importDefault(require('../models/Plan')),
  ListPlansService_1 = __importDefault(require(a24_0x2f1579(0x121))),
  CreatePlanService_1 = __importDefault(
    require('../services/PlanService/CreatePlanService')
  ),
  UpdatePlanService_1 = __importDefault(require(a24_0x2f1579(0x133))),
  ShowPlanService_1 = __importDefault(require(a24_0x2f1579(0x129))),
  FindAllPlanService_1 = __importDefault(require(a24_0x2f1579(0x126))),
  DeletePlanService_1 = __importDefault(require(a24_0x2f1579(0x11a))),
  User_1 = __importDefault(require(a24_0x2f1579(0x11f))),
  Company_1 = __importDefault(require(a24_0x2f1579(0x128))),
  index = async (_0x17fa16, _0x506bb7) => {
    const _0x4cf533 = a24_0x2f1579,
      { searchParam: _0x4b8249, pageNumber: _0x206564 } =
        _0x17fa16[_0x4cf533(0x10d)],
      _0x47ab06 = _0x17fa16['headers'][_0x4cf533(0x118)],
      [, _0x24d7b5] = _0x47ab06[_0x4cf533(0x11d)]('\x20'),
      _0x58e566 = (0x0, jsonwebtoken_1[_0x4cf533(0x124)])(
        _0x24d7b5,
        auth_1[_0x4cf533(0x111)]['secret']
      ),
      { id: _0x1113f6, profile: _0x368cc5, companyId: _0xa7d292 } = _0x58e566,
      _0x53e0d2 = await User_1[_0x4cf533(0x111)][_0x4cf533(0x10c)](_0x1113f6),
      _0x1590dd =
        await Company_1[_0x4cf533(0x111)][_0x4cf533(0x10c)](_0xa7d292),
      _0x15808d = _0x1590dd[_0x4cf533(0x11b)],
      _0x4fbf38 = await Plan_1['default']['findByPk'](_0x15808d),
      _0x4ae02e = _0x4fbf38[_0x4cf533(0x113)];
    if (_0x53e0d2[_0x4cf533(0x116)] === !![]) {
      const {
        plans: _0x5770b7,
        count: _0xd41b3d,
        hasMore: _0x76a4a6
      } = await (0x0, ListPlansService_1[_0x4cf533(0x111)])({
        searchParam: _0x4b8249,
        pageNumber: _0x206564
      });
      return _0x506bb7['json']({
        plans: _0x5770b7,
        count: _0xd41b3d,
        hasMore: _0x76a4a6
      });
    } else {
      const {
        plans: _0x4c92ce,
        count: _0x2ad48a,
        hasMore: _0x5cc991
      } = await (0x0, ListPlansService_1[_0x4cf533(0x111)])({
        searchParam: _0x4ae02e,
        pageNumber: _0x206564
      });
      return _0x506bb7[_0x4cf533(0x10b)]({
        plans: _0x4c92ce,
        count: _0x2ad48a,
        hasMore: _0x5cc991
      });
    }
  };
exports[a24_0x2f1579(0x12c)] = index;
const list = async (_0x5c7f7d, _0x4dcdf3) => {
  const _0x1a4c98 = a24_0x2f1579,
    _0x16adc2 = await (0x0, FindAllPlanService_1[_0x1a4c98(0x111)])();
  return _0x4dcdf3['status'](0xc8)[_0x1a4c98(0x10b)](_0x16adc2);
};
exports[a24_0x2f1579(0x127)] = list;
function a24_0x18fc() {
  const _0x50597f = [
    '222sZXBzD',
    '../services/PlanService/DeletePlanService',
    'planId',
    'store',
    'split',
    '393650AAkIQn',
    '../models/User',
    '__importStar',
    '../services/PlanService/ListPlansService',
    'params',
    'writable',
    'verify',
    'get',
    '../services/PlanService/FindAllPlanService',
    'list',
    '../models/Company',
    '../services/PlanService/ShowPlanService',
    'required',
    'getOwnPropertyDescriptor',
    'index',
    'prototype',
    '35mtYJVz',
    'shape',
    'message',
    'headers',
    'object',
    '../services/PlanService/UpdatePlanService',
    'update',
    '__createBinding',
    'jsonwebtoken',
    '81TgYATe',
    '2774NrBcbx',
    '3343186MmubLO',
    'yup',
    '1700846kHFtga',
    'call',
    'defineProperty',
    'toString',
    'remove',
    'status',
    '../errors/AppError',
    'show',
    'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!',
    '__setModuleDefault',
    'json',
    'findByPk',
    'query',
    '35044UREUih',
    '21KDoXlW',
    'create',
    'default',
    '__esModule',
    'name',
    'validate',
    '224166AXVtPA',
    'super',
    '3583408qFBkmY',
    'authorization'
  ];
  a24_0x18fc = function () {
    return _0x50597f;
  };
  return a24_0x18fc();
}
const store = async (_0x3477a7, _0x325fb8) => {
  const _0x3fa47a = a24_0x2f1579,
    _0x55c6dc = _0x3477a7['body'],
    _0x4a4ae5 = Yup[_0x3fa47a(0x132)]()[_0x3fa47a(0x12f)]({
      name: Yup['string']()[_0x3fa47a(0x12a)]()
    });
  try {
    await _0x4a4ae5[_0x3fa47a(0x114)](_0x55c6dc);
  } catch (_0x311aaa) {
    throw new AppError_1['default'](_0x311aaa[_0x3fa47a(0x130)]);
  }
  const _0x5d62f4 = await (0x0, CreatePlanService_1[_0x3fa47a(0x111)])(
    _0x55c6dc
  );
  return _0x325fb8[_0x3fa47a(0x106)](0xc8)['json'](_0x5d62f4);
};
exports[a24_0x2f1579(0x11c)] = store;
const show = async (_0x249076, _0x4dd524) => {
  const _0x5c0b59 = a24_0x2f1579,
    { id: _0x48c9e9 } = _0x249076[_0x5c0b59(0x122)],
    _0x573424 = _0x249076['headers'][_0x5c0b59(0x118)],
    [, _0x7d62eb] = _0x573424['split']('\x20'),
    _0x2b5036 = (0x0, jsonwebtoken_1['verify'])(
      _0x7d62eb,
      auth_1['default']['secret']
    ),
    { id: _0x44f379, profile: _0x30227a, companyId: _0x333ba6 } = _0x2b5036,
    _0x3c7b03 = await User_1[_0x5c0b59(0x111)]['findByPk'](_0x44f379),
    _0x6a3f51 = await Company_1[_0x5c0b59(0x111)][_0x5c0b59(0x10c)](_0x333ba6),
    _0xce3adc = _0x6a3f51[_0x5c0b59(0x11b)];
  if (_0x3c7b03['super'] === !![]) {
    const _0x2f6841 = await (0x0, ShowPlanService_1['default'])(_0x48c9e9);
    return _0x4dd524[_0x5c0b59(0x106)](0xc8)[_0x5c0b59(0x10b)](_0x2f6841);
  } else {
    if (_0x48c9e9 !== _0xce3adc['toString']())
      return _0x4dd524[_0x5c0b59(0x106)](0x190)['json']({
        error: _0x5c0b59(0x109)
      });
    else {
      if (_0x48c9e9 === _0xce3adc['toString']()) {
        const _0x13df9e = await (0x0, ShowPlanService_1[_0x5c0b59(0x111)])(
          _0x48c9e9
        );
        return _0x4dd524[_0x5c0b59(0x106)](0xc8)[_0x5c0b59(0x10b)](_0x13df9e);
      }
    }
  }
};
exports[a24_0x2f1579(0x108)] = show;
const update = async (_0x3a1f91, _0x3ed102) => {
  const _0x3ada12 = a24_0x2f1579,
    _0x40d793 = _0x3a1f91['body'],
    _0x280414 = Yup[_0x3ada12(0x132)]()[_0x3ada12(0x12f)]({
      name: Yup['string']()
    });
  try {
    await _0x280414['validate'](_0x40d793);
  } catch (_0x1af6cc) {
    throw new AppError_1[_0x3ada12(0x111)](_0x1af6cc[_0x3ada12(0x130)]);
  }
  const { id: _0xb0a191 } = _0x40d793,
    _0x29d5dc = _0x3a1f91['headers'][_0x3ada12(0x118)],
    [, _0x27ad25] = _0x29d5dc[_0x3ada12(0x11d)]('\x20'),
    _0x58ccfa = (0x0, jsonwebtoken_1[_0x3ada12(0x124)])(
      _0x27ad25,
      auth_1[_0x3ada12(0x111)]['secret']
    ),
    { id: _0x295046, profile: _0x4500b3, companyId: _0x5d27b8 } = _0x58ccfa,
    _0x267909 = await User_1[_0x3ada12(0x111)][_0x3ada12(0x10c)](_0x295046),
    _0x23fb5c = await Company_1['default'][_0x3ada12(0x10c)](_0x5d27b8),
    _0xd44af2 = _0x23fb5c[_0x3ada12(0x11b)];
  if (_0x267909['super'] === !![]) {
    const _0x37cac1 = await (0x0, UpdatePlanService_1[_0x3ada12(0x111)])(
      _0x40d793
    );
    return _0x3ed102[_0x3ada12(0x106)](0xc8)['json'](_0x37cac1);
  } else {
    if (_0xd44af2[_0x3ada12(0x104)]() !== _0xb0a191)
      return _0x3ed102[_0x3ada12(0x106)](0x190)[_0x3ada12(0x10b)]({
        error:
          'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'
      });
  }
};
exports[a24_0x2f1579(0x134)] = update;
const remove = async (_0x33a671, _0x4f02bb) => {
  const _0x4dca3c = a24_0x2f1579,
    { id: _0x48b19e } = _0x33a671[_0x4dca3c(0x122)],
    _0x4cc5fe = _0x33a671[_0x4dca3c(0x131)][_0x4dca3c(0x118)],
    [, _0xfa334f] = _0x4cc5fe['split']('\x20'),
    _0xea09de = (0x0, jsonwebtoken_1[_0x4dca3c(0x124)])(
      _0xfa334f,
      auth_1[_0x4dca3c(0x111)]['secret']
    ),
    { id: _0x4effc6, profile: _0x4ac1c9, companyId: _0xe96df2 } = _0xea09de,
    _0x257f5b = await User_1['default']['findByPk'](_0x4effc6);
  if (_0x257f5b['super'] === !![]) {
    const _0x431859 = await (0x0, DeletePlanService_1[_0x4dca3c(0x111)])(
      _0x48b19e
    );
    return _0x4f02bb[_0x4dca3c(0x106)](0xc8)[_0x4dca3c(0x10b)](_0x431859);
  } else {
    if (_0xe96df2[_0x4dca3c(0x104)]() !== _0x48b19e)
      return _0x4f02bb[_0x4dca3c(0x106)](0x190)['json']({
        error: _0x4dca3c(0x109)
      });
  }
};
exports[a24_0x2f1579(0x105)] = remove;
