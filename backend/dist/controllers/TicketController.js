'use strict';
const a37_0xc473c9 = a37_0x64db;
(function (_0xf46cc8, _0x3af48a) {
  const _0x34568a = a37_0x64db,
    _0x1a48f9 = _0xf46cc8();
  while (!![]) {
    try {
      const _0x21731a =
        (-parseInt(_0x34568a(0x1de)) / 0x1) *
          (-parseInt(_0x34568a(0x1dd)) / 0x2) +
        -parseInt(_0x34568a(0x1e7)) / 0x3 +
        -parseInt(_0x34568a(0x1e6)) / 0x4 +
        -parseInt(_0x34568a(0x1e0)) / 0x5 +
        -parseInt(_0x34568a(0x1e3)) / 0x6 +
        parseInt(_0x34568a(0x1f8)) / 0x7 +
        (-parseInt(_0x34568a(0x1e4)) / 0x8) *
          (-parseInt(_0x34568a(0x1fb)) / 0x9);
      if (_0x21731a === _0x3af48a) break;
      else _0x1a48f9['push'](_0x1a48f9['shift']());
    } catch (_0x29f9f2) {
      _0x1a48f9['push'](_0x1a48f9['shift']());
    }
  }
})(a37_0x55c9, 0x81daa);
var __importDefault =
  (this && this[a37_0xc473c9(0x206)]) ||
  function (_0x506b89) {
    const _0x529fad = a37_0xc473c9;
    return _0x506b89 && _0x506b89[_0x529fad(0x201)]
      ? _0x506b89
      : { default: _0x506b89 };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] }),
  (exports[a37_0xc473c9(0x1f5)] =
    exports[a37_0xc473c9(0x20c)] =
    exports[a37_0xc473c9(0x1ec)] =
    exports['showFromUUID'] =
    exports[a37_0xc473c9(0x1fe)] =
    exports[a37_0xc473c9(0x1f4)] =
    exports[a37_0xc473c9(0x207)] =
    exports[a37_0xc473c9(0x203)] =
    exports['index'] =
      void 0x0);
const socket_1 = require(a37_0xc473c9(0x1ef)),
  Ticket_1 = __importDefault(require(a37_0xc473c9(0x1f1))),
  CreateTicketService_1 = __importDefault(require(a37_0xc473c9(0x1e2))),
  DeleteTicketService_1 = __importDefault(require(a37_0xc473c9(0x1f2))),
  ListTicketsService_1 = __importDefault(require(a37_0xc473c9(0x1df))),
  ShowTicketFromUUIDService_1 = __importDefault(require(a37_0xc473c9(0x20a))),
  ShowTicketService_1 = __importDefault(require(a37_0xc473c9(0x200))),
  UpdateTicketService_1 = __importDefault(require(a37_0xc473c9(0x20e))),
  ListTicketsServiceKanban_1 = __importDefault(require(a37_0xc473c9(0x20f))),
  CreateLogTicketService_1 = __importDefault(require(a37_0xc473c9(0x1f7))),
  ShowLogTicketService_1 = __importDefault(require(a37_0xc473c9(0x1e1))),
  index = async (_0x378e91, _0x46021e) => {
    const _0x586ec3 = a37_0xc473c9,
      {
        pageNumber: _0x5ba5a6,
        status: _0x8adf4c,
        date: _0x32c06b,
        dateStart: _0x1f89f1,
        dateEnd: _0x539b78,
        updatedAt: _0x2e72e8,
        searchParam: _0x45b4c0,
        showAll: _0x556087,
        queueIds: _0xbe94bd,
        tags: _0x56d717,
        users: _0x1b8c3d,
        withUnreadMessages: _0x57033b,
        whatsapps: _0x4f69e9,
        statusFilter: _0x173214
      } = _0x378e91[_0x586ec3(0x1ed)],
      _0x501b10 = Number(_0x378e91['user']['id']),
      { companyId: _0x157a7c } = _0x378e91['user'];
    let _0x2cb167 = [],
      _0x41724d = [],
      _0x1f2f2c = [],
      _0xda2c09 = [],
      _0x496232 = [];
    _0xbe94bd && (_0x2cb167 = JSON[_0x586ec3(0x1f6)](_0xbe94bd));
    _0x56d717 && (_0x41724d = JSON[_0x586ec3(0x1f6)](_0x56d717));
    _0x1b8c3d && (_0x1f2f2c = JSON['parse'](_0x1b8c3d));
    _0x4f69e9 && (_0xda2c09 = JSON['parse'](_0x4f69e9));
    _0x173214 && (_0x496232 = JSON[_0x586ec3(0x1f6)](_0x173214));
    const {
      tickets: _0x1a713c,
      count: _0x47762,
      hasMore: _0x420ef4
    } = await (0x0, ListTicketsService_1[_0x586ec3(0x20d)])({
      searchParam: _0x45b4c0,
      tags: _0x41724d,
      users: _0x1f2f2c,
      pageNumber: _0x5ba5a6,
      status: _0x8adf4c,
      date: _0x32c06b,
      dateStart: _0x1f89f1,
      dateEnd: _0x539b78,
      updatedAt: _0x2e72e8,
      showAll: _0x556087,
      userId: _0x501b10,
      queueIds: _0x2cb167,
      withUnreadMessages: _0x57033b,
      whatsappIds: _0xda2c09,
      statusFilters: _0x496232,
      companyId: _0x157a7c
    });
    return _0x46021e[_0x586ec3(0x1e9)](0xc8)[_0x586ec3(0x1ff)]({
      tickets: _0x1a713c,
      count: _0x47762,
      hasMore: _0x420ef4
    });
  };
exports['index'] = index;
function a37_0x64db(_0x54576e, _0x229fb1) {
  const _0x55c952 = a37_0x55c9();
  return (
    (a37_0x64db = function (_0x64db88, _0x3f3767) {
      _0x64db88 = _0x64db88 - 0x1dd;
      let _0x42e37c = _0x55c952[_0x64db88];
      return _0x42e37c;
    }),
    a37_0x64db(_0x54576e, _0x229fb1)
  );
}
const kanban = async (_0x16cfc3, _0x1a9757) => {
  const _0x406b25 = a37_0xc473c9,
    {
      pageNumber: _0x21eefb,
      status: _0x1313aa,
      date: _0x531def,
      updatedAt: _0x5bd8c6,
      searchParam: _0x12569c,
      showAll: _0x134de1,
      queueIds: _0x1d1cbf,
      tags: _0x181d57,
      users: _0x4875ce,
      withUnreadMessages: _0x374ac6
    } = _0x16cfc3[_0x406b25(0x1ed)],
    _0x58bace = _0x16cfc3[_0x406b25(0x1e5)]['id'],
    { companyId: _0x14401b } = _0x16cfc3['user'];
  let _0x34acae = [],
    _0x22aca4 = [],
    _0x2726c4 = [];
  _0x1d1cbf && (_0x34acae = JSON['parse'](_0x1d1cbf));
  _0x181d57 && (_0x22aca4 = JSON[_0x406b25(0x1f6)](_0x181d57));
  _0x4875ce && (_0x2726c4 = JSON['parse'](_0x4875ce));
  const {
    tickets: _0xda87e8,
    count: _0x4a8a01,
    hasMore: _0x3b933b
  } = await (0x0, ListTicketsServiceKanban_1[_0x406b25(0x20d)])({
    searchParam: _0x12569c,
    tags: _0x22aca4,
    users: _0x2726c4,
    pageNumber: _0x21eefb,
    status: _0x1313aa,
    date: _0x531def,
    updatedAt: _0x5bd8c6,
    showAll: _0x134de1,
    userId: _0x58bace,
    queueIds: _0x34acae,
    withUnreadMessages: _0x374ac6,
    companyId: _0x14401b
  });
  return _0x1a9757[_0x406b25(0x1e9)](0xc8)['json']({
    tickets: _0xda87e8,
    count: _0x4a8a01,
    hasMore: _0x3b933b
  });
};
exports['kanban'] = kanban;
const store = async (_0x40f864, _0x40e363) => {
  const _0x3e314d = a37_0xc473c9,
    {
      contactId: _0x2ff69b,
      status: _0x4ec865,
      userId: _0xa7e96e,
      queueId: _0xfdce3a,
      whatsappId: _0x434927
    } = _0x40f864[_0x3e314d(0x1fa)],
    { companyId: _0x5471ce } = _0x40f864[_0x3e314d(0x1e5)],
    _0x43eeac = await (0x0, CreateTicketService_1[_0x3e314d(0x20d)])({
      contactId: _0x2ff69b,
      status: _0x4ec865,
      userId: _0xa7e96e,
      companyId: _0x5471ce,
      queueId: _0xfdce3a,
      whatsappId: _0x434927
    }),
    _0x1d1a6e = (0x0, socket_1[_0x3e314d(0x208)])();
  return (
    _0x1d1a6e['to'](_0x43eeac['status'])[_0x3e314d(0x202)](
      _0x3e314d(0x1f3) + _0x5471ce + _0x3e314d(0x1fd),
      { action: _0x3e314d(0x1ec), ticket: _0x43eeac }
    ),
    _0x40e363[_0x3e314d(0x1e9)](0xc8)[_0x3e314d(0x1ff)](_0x43eeac)
  );
};
exports['store'] = store;
const show = async (_0x16f1ae, _0x2e1185) => {
  const _0x50b482 = a37_0xc473c9,
    { ticketId: _0x4863ef } = _0x16f1ae[_0x50b482(0x1f0)],
    { id: _0x4e3213, companyId: _0x385717 } = _0x16f1ae[_0x50b482(0x1e5)],
    _0x5ce323 = await (0x0, ShowTicketService_1[_0x50b482(0x20d)])(
      _0x4863ef,
      _0x385717
    );
  return (
    await (0x0, CreateLogTicketService_1[_0x50b482(0x20d)])({
      userId: _0x4e3213,
      ticketId: _0x4863ef,
      type: 'access'
    }),
    _0x2e1185[_0x50b482(0x1e9)](0xc8)[_0x50b482(0x1ff)](_0x5ce323)
  );
};
exports[a37_0xc473c9(0x1f4)] = show;
const showLog = async (_0x3650c6, _0x13c157) => {
  const _0x1e66cd = a37_0xc473c9,
    { ticketId: _0x28de41 } = _0x3650c6['params'],
    { id: _0x17a946, companyId: _0x5bb408 } = _0x3650c6[_0x1e66cd(0x1e5)],
    _0x58c471 = await (0x0, ShowLogTicketService_1[_0x1e66cd(0x20d)])({
      ticketId: _0x28de41,
      companyId: _0x5bb408
    });
  return _0x13c157[_0x1e66cd(0x1e9)](0xc8)[_0x1e66cd(0x1ff)](_0x58c471);
};
exports[a37_0xc473c9(0x1fe)] = showLog;
const showFromUUID = async (_0x2a795c, _0x210944) => {
  const _0x2bdac9 = a37_0xc473c9,
    { uuid: _0x1dfba9 } = _0x2a795c[_0x2bdac9(0x1f0)],
    { id: _0x1dd323, companyId: _0x416f26 } = _0x2a795c['user'],
    _0x1b9a01 = await (0x0, ShowTicketFromUUIDService_1[_0x2bdac9(0x20d)])(
      _0x1dfba9,
      _0x416f26
    );
  return (
    await (0x0, CreateLogTicketService_1['default'])({
      userId: _0x1dd323,
      ticketId: _0x1b9a01['id'],
      type: 'access'
    }),
    _0x210944['status'](0xc8)[_0x2bdac9(0x1ff)](_0x1b9a01)
  );
};
exports[a37_0xc473c9(0x1eb)] = showFromUUID;
const update = async (_0x5bb9d3, _0x58a351) => {
  const _0x4db1d3 = a37_0xc473c9,
    { ticketId: _0x244a1b } = _0x5bb9d3[_0x4db1d3(0x1f0)],
    _0x288e3d = _0x5bb9d3['body'],
    { companyId: _0x7f74ed } = _0x5bb9d3[_0x4db1d3(0x1e5)],
    { ticket: _0xbda2be } = await (0x0, UpdateTicketService_1['default'])({
      ticketData: _0x288e3d,
      ticketId: _0x244a1b,
      companyId: _0x7f74ed
    });
  return _0x58a351[_0x4db1d3(0x1e9)](0xc8)[_0x4db1d3(0x1ff)](_0xbda2be);
};
exports[a37_0xc473c9(0x1ec)] = update;
const remove = async (_0x1825d2, _0x36ea3c) => {
  const _0x262da4 = a37_0xc473c9,
    { ticketId: _0x5c8d78 } = _0x1825d2[_0x262da4(0x1f0)],
    { id: _0x26715b, companyId: _0x246360 } = _0x1825d2[_0x262da4(0x1e5)];
  await (0x0, ShowTicketService_1[_0x262da4(0x20d)])(_0x5c8d78, _0x246360);
  const _0x3c2e84 = await (0x0, DeleteTicketService_1[_0x262da4(0x20d)])(
      _0x5c8d78,
      _0x26715b,
      _0x246360
    ),
    _0x1e7670 = (0x0, socket_1['getIO'])();
  return (
    _0x1e7670['to'](_0x3c2e84[_0x262da4(0x1e9)])
      ['to'](_0x5c8d78)
      ['to'](_0x262da4(0x1f9))
      ['emit'](_0x262da4(0x1f3) + _0x246360 + _0x262da4(0x1fd), {
        action: _0x262da4(0x209),
        ticketId: +_0x5c8d78
      }),
    _0x36ea3c[_0x262da4(0x1e9)](0xc8)[_0x262da4(0x1ff)]({
      message: _0x262da4(0x1e8)
    })
  );
};
exports[a37_0xc473c9(0x20c)] = remove;
const closeAll = async (_0x203686, _0x177652) => {
  const _0x2a570e = a37_0xc473c9,
    { companyId: _0x2c13e6 } = _0x203686['user'],
    { status: _0x186d43 } = _0x203686['body'],
    _0x42eff = (0x0, socket_1[_0x2a570e(0x208)])(),
    { rows: _0x3988b9 } = await Ticket_1[_0x2a570e(0x20d)][_0x2a570e(0x1fc)]({
      where: { companyId: _0x2c13e6, status: _0x186d43 },
      order: [[_0x2a570e(0x1ee), _0x2a570e(0x204)]]
    });
  return (
    _0x3988b9['forEach'](async _0x5d0246 => {
      const _0x5daead = _0x2a570e,
        _0x231ae4 = {
          status: _0x5daead(0x1ea),
          userId: _0x5d0246[_0x5daead(0x20b)] || null,
          queueId: _0x5d0246[_0x5daead(0x205)] || null,
          unreadMessages: 0x0,
          amountUsedBotQueues: 0x0,
          sendFarewellMessage: ![]
        };
      await (0x0, UpdateTicketService_1[_0x5daead(0x20d)])({
        ticketData: _0x231ae4,
        ticketId: _0x5d0246['id'],
        companyId: _0x2c13e6
      });
    }),
    _0x177652[_0x2a570e(0x1e9)](0xc8)['json']()
  );
};
exports['closeAll'] = closeAll;
function a37_0x55c9() {
  const _0x3a52ea = [
    '../services/TicketServices/ShowTicketService',
    '__esModule',
    'emit',
    'kanban',
    'DESC',
    'queueId',
    '__importDefault',
    'store',
    'getIO',
    'delete',
    '../services/TicketServices/ShowTicketFromUUIDService',
    'userId',
    'remove',
    'default',
    '../services/TicketServices/UpdateTicketService',
    '../services/TicketServices/ListTicketsServiceKanban',
    '2792qQeANn',
    '347RIKlZK',
    '../services/TicketServices/ListTicketsService',
    '2173845ZcpxHe',
    '../services/TicketServices/ShowLogTicketService',
    '../services/TicketServices/CreateTicketService',
    '5815368SGiPwp',
    '3880BwhjQm',
    'user',
    '493144zylZja',
    '1095153llAcCs',
    'ticket\x20deleted',
    'status',
    'closed',
    'showFromUUID',
    'update',
    'query',
    'updatedAt',
    '../libs/socket',
    'params',
    '../models/Ticket',
    '../services/TicketServices/DeleteTicketService',
    'company-',
    'show',
    'closeAll',
    'parse',
    '../services/TicketServices/CreateLogTicketService',
    '2602593fyJpZe',
    'notification',
    'body',
    '29097lEEcXQ',
    'findAndCountAll',
    '-ticket',
    'showLog',
    'json'
  ];
  a37_0x55c9 = function () {
    return _0x3a52ea;
  };
  return a37_0x55c9();
}
