'use strict';
const a30_0x16018b = a30_0x4a31;
(function (_0x26e2d7, _0x193e95) {
  const _0x1ea526 = a30_0x4a31,
    _0x362357 = _0x26e2d7();
  while (!![]) {
    try {
      const _0x2fa531 =
        parseInt(_0x1ea526(0x1ea)) / 0x1 +
        parseInt(_0x1ea526(0x1e9)) / 0x2 +
        -parseInt(_0x1ea526(0x1f8)) / 0x3 +
        parseInt(_0x1ea526(0x1ce)) / 0x4 +
        parseInt(_0x1ea526(0x1e5)) / 0x5 +
        -parseInt(_0x1ea526(0x1d8)) / 0x6 +
        (parseInt(_0x1ea526(0x1dd)) / 0x7) *
          (-parseInt(_0x1ea526(0x1ee)) / 0x8);
      if (_0x2fa531 === _0x193e95) break;
      else _0x362357['push'](_0x362357['shift']());
    } catch (_0x2f5979) {
      _0x362357['push'](_0x362357['shift']());
    }
  }
})(a30_0x57b0, 0xc14c3);
var __importDefault =
  (this && this[a30_0x16018b(0x1d2)]) ||
  function (_0x54fb02) {
    const _0x4846dc = a30_0x16018b;
    return _0x54fb02 && _0x54fb02[_0x4846dc(0x1ca)]
      ? _0x54fb02
      : { default: _0x54fb02 };
  };
function a30_0x4a31(_0x1b9f6b, _0x386615) {
  const _0x57b062 = a30_0x57b0();
  return (
    (a30_0x4a31 = function (_0x4a3103, _0x53bb15) {
      _0x4a3103 = _0x4a3103 - 0x1c6;
      let _0x2a4cf5 = _0x57b062[_0x4a3103];
      return _0x2a4cf5;
    }),
    a30_0x4a31(_0x1b9f6b, _0x386615)
  );
}
Object['defineProperty'](exports, '__esModule', { value: !![] }),
  (exports[a30_0x16018b(0x1f5)] =
    exports['mediaUpload'] =
    exports[a30_0x16018b(0x1d7)] =
    exports[a30_0x16018b(0x1e4)] =
    exports[a30_0x16018b(0x1df)] =
    exports[a30_0x16018b(0x1cb)] =
    exports[a30_0x16018b(0x1cc)] =
      void 0x0);
const socket_1 = require('../libs/socket'),
  AppError_1 = __importDefault(require(a30_0x16018b(0x1da))),
  CreateService_1 = __importDefault(require(a30_0x16018b(0x1e8))),
  ListService_1 = __importDefault(require(a30_0x16018b(0x1d5))),
  UpdateService_1 = __importDefault(require(a30_0x16018b(0x1e1))),
  ShowService_1 = __importDefault(require(a30_0x16018b(0x1e2))),
  DeleteService_1 = __importDefault(require(a30_0x16018b(0x1de))),
  Schedule_1 = __importDefault(require('../models/Schedule')),
  path_1 = __importDefault(require(a30_0x16018b(0x1cf))),
  fs_1 = __importDefault(require('fs')),
  lodash_1 = require(a30_0x16018b(0x1db)),
  index = async (_0x6d5b2f, _0xa983c0) => {
    const _0x61af9a = a30_0x16018b,
      {
        contactId: _0x525650,
        userId: _0x4923dd,
        pageNumber: _0x5ced08,
        searchParam: _0x39e149
      } = _0x6d5b2f[_0x61af9a(0x1d4)],
      { companyId: _0x219143 } = _0x6d5b2f[_0x61af9a(0x1c8)],
      {
        schedules: _0x2f4d27,
        count: _0x19b96,
        hasMore: _0x564cb4
      } = await (0x0, ListService_1[_0x61af9a(0x1ed)])({
        searchParam: _0x39e149,
        contactId: _0x525650,
        userId: _0x4923dd,
        pageNumber: _0x5ced08,
        companyId: _0x219143
      });
    return _0xa983c0[_0x61af9a(0x1ec)]({
      schedules: _0x2f4d27,
      count: _0x19b96,
      hasMore: _0x564cb4
    });
  };
exports['index'] = index;
const store = async (_0x4ab9ed, _0x10c217) => {
  const _0x36986d = a30_0x16018b,
    {
      body: _0x354ef7,
      sendAt: _0x49c6e1,
      contactId: _0x2ddf2b,
      userId: _0x38cd8a
    } = _0x4ab9ed['body'],
    { companyId: _0x39041d } = _0x4ab9ed[_0x36986d(0x1c8)];
  let _0x2644b2 = await (0x0, CreateService_1[_0x36986d(0x1ed)])({
    body: _0x354ef7,
    sendAt: _0x49c6e1,
    contactId: _0x2ddf2b,
    companyId: _0x39041d,
    userId: _0x38cd8a
  });
  _0x2644b2 = await (0x0, ShowService_1['default'])(_0x2644b2['id'], _0x39041d);
  const _0x2e7330 = (0x0, socket_1[_0x36986d(0x1d1)])();
  return (
    _0x2e7330[_0x36986d(0x1f6)](
      _0x36986d(0x1f7) + _0x39041d + _0x36986d(0x1d3),
      { action: _0x36986d(0x1c7), schedule: _0x2644b2 }
    ),
    _0x10c217[_0x36986d(0x1e3)](0xc8)[_0x36986d(0x1ec)](_0x2644b2)
  );
};
exports['store'] = store;
const show = async (_0x5e760a, _0x3dbf2a) => {
  const _0x4c885c = a30_0x16018b,
    { scheduleId: _0x5ebc3c } = _0x5e760a[_0x4c885c(0x1f1)],
    { companyId: _0x224a0a } = _0x5e760a['user'],
    _0x91d6d0 = await (0x0, ShowService_1[_0x4c885c(0x1ed)])(
      _0x5ebc3c,
      _0x224a0a
    );
  return _0x3dbf2a[_0x4c885c(0x1e3)](0xc8)[_0x4c885c(0x1ec)](_0x91d6d0);
};
function a30_0x57b0() {
  const _0xb7422d = [
    'save',
    'message',
    'params',
    'send',
    'ERR_NO_PERMISSION',
    'mediaName',
    'deleteMedia',
    'emit',
    'company',
    '1396137hNrwOF',
    'unlinkSync',
    'files',
    'create',
    'user',
    'public',
    '__esModule',
    'store',
    'index',
    'mediaUpload',
    '2755796WCqEim',
    'path',
    'profile',
    'getIO',
    '__importDefault',
    '-schedule',
    'query',
    '../services/ScheduleServices/ListService',
    'filename',
    'remove',
    '3893346XAUXBG',
    'Schedule\x20deleted',
    '../errors/AppError',
    'lodash',
    'findByPk',
    '13339739hdnZWt',
    '../services/ScheduleServices/DeleteService',
    'show',
    'originalname',
    '../services/ScheduleServices/UpdateService',
    '../services/ScheduleServices/ShowService',
    'status',
    'update',
    '6523875QkZYfm',
    'Arquivo\x20Anexado',
    'admin',
    '../services/ScheduleServices/CreateService',
    '1561874HKBxYq',
    '1037033YnQJiu',
    'mediaPath',
    'json',
    'default',
    '8MSjQlR'
  ];
  a30_0x57b0 = function () {
    return _0xb7422d;
  };
  return a30_0x57b0();
}
exports[a30_0x16018b(0x1df)] = show;
const update = async (_0x539a47, _0x553a38) => {
  const _0x26d8bf = a30_0x16018b;
  if (_0x539a47[_0x26d8bf(0x1c8)][_0x26d8bf(0x1d0)] !== _0x26d8bf(0x1e7))
    throw new AppError_1['default'](_0x26d8bf(0x1f3), 0x193);
  const { scheduleId: _0x1ca97f } = _0x539a47[_0x26d8bf(0x1f1)],
    _0x38a113 = _0x539a47['body'],
    { companyId: _0xf96115 } = _0x539a47[_0x26d8bf(0x1c8)],
    _0x1ae888 = await (0x0, UpdateService_1['default'])({
      scheduleData: _0x38a113,
      id: _0x1ca97f,
      companyId: _0xf96115
    }),
    _0x55e5b4 = (0x0, socket_1[_0x26d8bf(0x1d1)])();
  return (
    _0x55e5b4[_0x26d8bf(0x1f6)](
      _0x26d8bf(0x1f7) + _0xf96115 + _0x26d8bf(0x1d3),
      { action: _0x26d8bf(0x1e4), schedule: _0x1ae888 }
    ),
    _0x553a38[_0x26d8bf(0x1e3)](0xc8)[_0x26d8bf(0x1ec)](_0x1ae888)
  );
};
exports[a30_0x16018b(0x1e4)] = update;
const remove = async (_0x4059fc, _0x186720) => {
  const _0x1eb7cb = a30_0x16018b,
    { scheduleId: _0x17f3f5 } = _0x4059fc['params'],
    { companyId: _0x277199 } = _0x4059fc['user'];
  await (0x0, DeleteService_1['default'])(_0x17f3f5, _0x277199);
  const _0x5e62a6 = (0x0, socket_1['getIO'])();
  return (
    _0x5e62a6[_0x1eb7cb(0x1f6)](
      _0x1eb7cb(0x1f7) + _0x277199 + _0x1eb7cb(0x1d3),
      { action: 'delete', scheduleId: _0x17f3f5 }
    ),
    _0x186720[_0x1eb7cb(0x1e3)](0xc8)[_0x1eb7cb(0x1ec)]({
      message: _0x1eb7cb(0x1d9)
    })
  );
};
exports[a30_0x16018b(0x1d7)] = remove;
const mediaUpload = async (_0x53f048, _0x46d73f) => {
  const _0x2b1875 = a30_0x16018b,
    { id: _0x37bc15 } = _0x53f048[_0x2b1875(0x1f1)],
    _0x2780c8 = _0x53f048[_0x2b1875(0x1c6)],
    _0xfb5522 = (0x0, lodash_1['head'])(_0x2780c8);
  try {
    const _0xff2086 = await Schedule_1['default']['findByPk'](_0x37bc15);
    return (
      (_0xff2086[_0x2b1875(0x1eb)] = _0xfb5522[_0x2b1875(0x1d6)]),
      (_0xff2086[_0x2b1875(0x1f4)] = _0xfb5522[_0x2b1875(0x1e0)]),
      await _0xff2086[_0x2b1875(0x1ef)](),
      _0x46d73f[_0x2b1875(0x1f2)]({ mensagem: _0x2b1875(0x1e6) })
    );
  } catch (_0x63be77) {
    throw new AppError_1['default'](_0x63be77[_0x2b1875(0x1f0)]);
  }
};
exports[a30_0x16018b(0x1cd)] = mediaUpload;
const deleteMedia = async (_0x13a25e, _0xc233c6) => {
  const _0x146325 = a30_0x16018b,
    { id: _0x2f5700 } = _0x13a25e[_0x146325(0x1f1)];
  try {
    const _0x4409d3 =
        await Schedule_1[_0x146325(0x1ed)][_0x146325(0x1dc)](_0x2f5700),
      _0x375b79 = path_1['default']['resolve'](
        _0x146325(0x1c9),
        _0x4409d3[_0x146325(0x1eb)]
      ),
      _0x61d8db = fs_1[_0x146325(0x1ed)]['existsSync'](_0x375b79);
    return (
      _0x61d8db && fs_1[_0x146325(0x1ed)][_0x146325(0x1f9)](_0x375b79),
      (_0x4409d3[_0x146325(0x1eb)] = null),
      (_0x4409d3[_0x146325(0x1f4)] = null),
      await _0x4409d3[_0x146325(0x1ef)](),
      _0xc233c6[_0x146325(0x1f2)]({ mensagem: 'Arquivo\x20Excluído' })
    );
  } catch (_0x7d338c) {
    throw new AppError_1['default'](_0x7d338c[_0x146325(0x1f0)]);
  }
};
exports[a30_0x16018b(0x1f5)] = deleteMedia;
