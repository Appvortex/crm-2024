'use strict';
const a36_0x3fbf63 = a36_0xd2f8;
(function (_0x26aafb, _0x237ea2) {
  const _0x279487 = a36_0xd2f8,
    _0x5d29b6 = _0x26aafb();
  while (!![]) {
    try {
      const _0xef469b =
        (-parseInt(_0x279487(0x120)) / 0x1) *
          (parseInt(_0x279487(0x107)) / 0x2) +
        (-parseInt(_0x279487(0x12a)) / 0x3) *
          (-parseInt(_0x279487(0x123)) / 0x4) +
        -parseInt(_0x279487(0x115)) / 0x5 +
        (parseInt(_0x279487(0x113)) / 0x6) *
          (-parseInt(_0x279487(0x11d)) / 0x7) +
        -parseInt(_0x279487(0x109)) / 0x8 +
        (-parseInt(_0x279487(0x10c)) / 0x9) *
          (-parseInt(_0x279487(0x117)) / 0xa) +
        parseInt(_0x279487(0x11e)) / 0xb;
      if (_0xef469b === _0x237ea2) break;
      else _0x5d29b6['push'](_0x5d29b6['shift']());
    } catch (_0x596d18) {
      _0x5d29b6['push'](_0x5d29b6['shift']());
    }
  }
})(a36_0x4ee4, 0x301bf);
var __importDefault =
  (this && this[a36_0x3fbf63(0x116)]) ||
  function (_0x1ca401) {
    return _0x1ca401 && _0x1ca401['__esModule']
      ? _0x1ca401
      : { default: _0x1ca401 };
  };
function a36_0xd2f8(_0x9bac99, _0x43f8ad) {
  const _0x4ee452 = a36_0x4ee4();
  return (
    (a36_0xd2f8 = function (_0xd2f8e8, _0xd75485) {
      _0xd2f8e8 = _0xd2f8e8 - 0x106;
      let _0x5698c4 = _0x4ee452[_0xd2f8e8];
      return _0x5698c4;
    }),
    a36_0xd2f8(_0x9bac99, _0x43f8ad)
  );
}
Object[a36_0x3fbf63(0x12b)](exports, a36_0x3fbf63(0x12e), { value: !![] }),
  (exports[a36_0x3fbf63(0x12c)] =
    exports[a36_0x3fbf63(0x130)] =
    exports[a36_0x3fbf63(0x11a)] =
    exports[a36_0x3fbf63(0x10f)] =
    exports['update'] =
    exports['show'] =
    exports[a36_0x3fbf63(0x10b)] =
    exports[a36_0x3fbf63(0x119)] =
      void 0x0);
const socket_1 = require(a36_0x3fbf63(0x106)),
  AppError_1 = __importDefault(require('../errors/AppError')),
  CreateService_1 = __importDefault(require(a36_0x3fbf63(0x126))),
  ListService_1 = __importDefault(require(a36_0x3fbf63(0x12f))),
  UpdateService_1 = __importDefault(
    require('../services/TagServices/UpdateService')
  ),
  ShowService_1 = __importDefault(
    require('../services/TagServices/ShowService')
  ),
  DeleteService_1 = __importDefault(require(a36_0x3fbf63(0x118))),
  SimpleListService_1 = __importDefault(
    require('../services/TagServices/SimpleListService')
  ),
  SyncTagsService_1 = __importDefault(require(a36_0x3fbf63(0x10e))),
  KanbanListService_1 = __importDefault(require(a36_0x3fbf63(0x127))),
  index = async (_0x266854, _0xb46b72) => {
    const _0x1b7fcd = a36_0x3fbf63,
      {
        pageNumber: _0x3e189c,
        searchParam: _0x19adc2,
        kanban: _0x17bd6e
      } = _0x266854[_0x1b7fcd(0x128)],
      { companyId: _0x5dc355 } = _0x266854[_0x1b7fcd(0x121)],
      {
        tags: _0x449c9a,
        count: _0x1fb376,
        hasMore: _0x26a04c
      } = await (0x0, ListService_1[_0x1b7fcd(0x11f)])({
        searchParam: _0x19adc2,
        pageNumber: _0x3e189c,
        companyId: _0x5dc355,
        kanban: _0x17bd6e
      });
    return _0xb46b72[_0x1b7fcd(0x110)]({
      tags: _0x449c9a,
      count: _0x1fb376,
      hasMore: _0x26a04c
    });
  };
exports[a36_0x3fbf63(0x119)] = index;
const store = async (_0x30c409, _0x54b8e4) => {
  const _0x397d55 = a36_0x3fbf63,
    {
      name: _0x59298b,
      color: _0x5093f2,
      kanban: _0x168da8
    } = _0x30c409['body'],
    { companyId: _0x52004f } = _0x30c409[_0x397d55(0x121)],
    _0x23fc6f = await (0x0, CreateService_1[_0x397d55(0x11f)])({
      name: _0x59298b,
      color: _0x5093f2,
      kanban: _0x168da8,
      companyId: _0x52004f
    }),
    _0x24fe78 = (0x0, socket_1[_0x397d55(0x108)])();
  return (
    _0x24fe78['emit'](_0x397d55(0x112) + _0x52004f + _0x397d55(0x11b), {
      action: 'create',
      tag: _0x23fc6f
    }),
    _0x54b8e4[_0x397d55(0x12d)](0xc8)[_0x397d55(0x110)](_0x23fc6f)
  );
};
exports['store'] = store;
const show = async (_0x279941, _0x395642) => {
  const _0x2872cf = a36_0x3fbf63,
    { tagId: _0x8cd999 } = _0x279941[_0x2872cf(0x114)],
    _0x1fce19 = await (0x0, ShowService_1['default'])(_0x8cd999);
  return _0x395642[_0x2872cf(0x12d)](0xc8)['json'](_0x1fce19);
};
exports[a36_0x3fbf63(0x10d)] = show;
const update = async (_0x528e2b, _0x5e33ee) => {
  const _0x496b5a = a36_0x3fbf63,
    { kanban: _0x1a569d } = _0x528e2b[_0x496b5a(0x111)];
  if (
    _0x528e2b[_0x496b5a(0x121)][_0x496b5a(0x11c)] !== _0x496b5a(0x10a) &&
    _0x1a569d === 0x1
  )
    throw new AppError_1[_0x496b5a(0x11f)]('ERR_NO_PERMISSION', 0x193);
  const { tagId: _0x4b9963 } = _0x528e2b['params'],
    _0x441674 = _0x528e2b['body'],
    { companyId: _0x4afb69 } = _0x528e2b[_0x496b5a(0x121)],
    _0x3f4ffc = await (0x0, UpdateService_1[_0x496b5a(0x11f)])({
      tagData: _0x441674,
      id: _0x4b9963
    }),
    _0xe86f1d = (0x0, socket_1[_0x496b5a(0x108)])();
  return (
    _0xe86f1d[_0x496b5a(0x129)]('company' + _0x4afb69 + '-tag', {
      action: _0x496b5a(0x125),
      tag: _0x3f4ffc
    }),
    _0x5e33ee['status'](0xc8)[_0x496b5a(0x110)](_0x3f4ffc)
  );
};
exports[a36_0x3fbf63(0x125)] = update;
const remove = async (_0x3bb705, _0xded8b7) => {
  const _0x1c2ec7 = a36_0x3fbf63,
    { tagId: _0x4a47b3 } = _0x3bb705['params'],
    { companyId: _0x59f96d } = _0x3bb705[_0x1c2ec7(0x121)];
  await (0x0, DeleteService_1[_0x1c2ec7(0x11f)])(_0x4a47b3);
  const _0x2dcbf5 = (0x0, socket_1[_0x1c2ec7(0x108)])();
  return (
    _0x2dcbf5[_0x1c2ec7(0x129)](
      _0x1c2ec7(0x112) + _0x59f96d + _0x1c2ec7(0x11b),
      { action: _0x1c2ec7(0x124), tagId: _0x4a47b3 }
    ),
    _0xded8b7[_0x1c2ec7(0x12d)](0xc8)[_0x1c2ec7(0x110)]({
      message: _0x1c2ec7(0x122)
    })
  );
};
exports['remove'] = remove;
const list = async (_0x362d41, _0x4801b1) => {
  const _0x1cdb19 = a36_0x3fbf63,
    { searchParam: _0xba295d, kanban: _0x5ba10a } = _0x362d41[_0x1cdb19(0x128)],
    { companyId: _0x11dbdb } = _0x362d41[_0x1cdb19(0x121)],
    _0x35b853 = await (0x0, SimpleListService_1[_0x1cdb19(0x11f)])({
      searchParam: _0xba295d,
      kanban: _0x5ba10a,
      companyId: _0x11dbdb
    });
  return _0x4801b1[_0x1cdb19(0x110)](_0x35b853);
};
exports[a36_0x3fbf63(0x11a)] = list;
const kanban = async (_0x1c6681, _0x4cc51d) => {
  const _0x23302d = a36_0x3fbf63,
    { companyId: _0x985da1 } = _0x1c6681[_0x23302d(0x121)],
    _0x57a4e7 = await (0x0, KanbanListService_1['default'])({
      companyId: _0x985da1
    });
  return _0x4cc51d['json']({ lista: _0x57a4e7 });
};
exports[a36_0x3fbf63(0x130)] = kanban;
function a36_0x4ee4() {
  const _0x4579e2 = [
    'store',
    '549puQZtf',
    'show',
    '../services/TagServices/SyncTagsService',
    'remove',
    'json',
    'body',
    'company',
    '643254uIYnDk',
    'params',
    '1005900VraSQO',
    '__importDefault',
    '8070RfXvAf',
    '../services/TagServices/DeleteService',
    'index',
    'list',
    '-tag',
    'profile',
    '7ulYwvr',
    '10489347wOyhkM',
    'default',
    '138prnOBp',
    'user',
    'Tag\x20deleted',
    '684rNTKdR',
    'delete',
    'update',
    '../services/TagServices/CreateService',
    '../services/TagServices/KanbanListService',
    'query',
    'emit',
    '2484ViMYSt',
    'defineProperty',
    'syncTags',
    'status',
    '__esModule',
    '../services/TagServices/ListService',
    'kanban',
    '../libs/socket',
    '4106fuRVSS',
    'getIO',
    '2845072TrLyUa',
    'admin'
  ];
  a36_0x4ee4 = function () {
    return _0x4579e2;
  };
  return a36_0x4ee4();
}
const syncTags = async (_0x5221d9, _0x24efa3) => {
  const _0x21dcde = a36_0x3fbf63,
    _0x228b49 = _0x5221d9[_0x21dcde(0x111)],
    { companyId: _0x1d9ac7 } = _0x5221d9[_0x21dcde(0x121)],
    _0x190273 = await (0x0, SyncTagsService_1[_0x21dcde(0x11f)])({
      ..._0x228b49,
      companyId: _0x1d9ac7
    });
  return _0x24efa3['json'](_0x190273);
};
exports[a36_0x3fbf63(0x12c)] = syncTags;
