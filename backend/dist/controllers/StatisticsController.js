'use strict';
const a34_0x355ff5 = a34_0x1bf3;
(function (_0x183143, _0x573ea1) {
  const _0x5e1985 = a34_0x1bf3,
    _0x5d322a = _0x183143();
  while (!![]) {
    try {
      const _0x56a3a6 =
        (parseInt(_0x5e1985(0xe6)) / 0x1) * (parseInt(_0x5e1985(0xda)) / 0x2) +
        (-parseInt(_0x5e1985(0xdf)) / 0x3) *
          (-parseInt(_0x5e1985(0xe9)) / 0x4) +
        (-parseInt(_0x5e1985(0xd9)) / 0x5) *
          (-parseInt(_0x5e1985(0xe5)) / 0x6) +
        -parseInt(_0x5e1985(0xdd)) / 0x7 +
        parseInt(_0x5e1985(0xe0)) / 0x8 +
        parseInt(_0x5e1985(0xd4)) / 0x9 +
        -parseInt(_0x5e1985(0xdc)) / 0xa;
      if (_0x56a3a6 === _0x573ea1) break;
      else _0x5d322a['push'](_0x5d322a['shift']());
    } catch (_0x3c9111) {
      _0x5d322a['push'](_0x5d322a['shift']());
    }
  }
})(a34_0x13c8, 0xb43bc);
function a34_0x13c8() {
  const _0x5c3721 = [
    '3831339iBwzfB',
    '10665312URHgWP',
    'admin',
    'DashTicketsQueues',
    'ContactsReport',
    'true',
    '373332wZzXSQ',
    '1oIJduZ',
    'query',
    'default',
    '4oZIljD',
    '6944247rLPdZp',
    'json',
    '__esModule',
    '__importDefault',
    'user',
    '55waigps',
    '2242634RoQeUB',
    '../services/Statistics/ContactsReportService',
    '40693590IGuOoe',
    '2660168oequhu',
    'profile'
  ];
  a34_0x13c8 = function () {
    return _0x5c3721;
  };
  return a34_0x13c8();
}
var __importDefault =
  (this && this[a34_0x355ff5(0xd7)]) ||
  function (_0x2d23f0) {
    return _0x2d23f0 && _0x2d23f0['__esModule']
      ? _0x2d23f0
      : { default: _0x2d23f0 };
  };
Object['defineProperty'](exports, a34_0x355ff5(0xd6), { value: !![] }),
  (exports[a34_0x355ff5(0xe3)] = exports[a34_0x355ff5(0xe2)] = void 0x0);
const TicketsQueuesService_1 = __importDefault(
    require('../services/Statistics/TicketsQueuesService')
  ),
  ContactsReportService_1 = __importDefault(require(a34_0x355ff5(0xdb))),
  DashTicketsQueues = async (_0xb1c0fe, _0x25b0c1) => {
    const _0x75babc = a34_0x355ff5,
      {
        companyId: _0x3d332b,
        profile: _0x3d2e26,
        id: _0x170c59
      } = _0xb1c0fe[_0x75babc(0xd8)],
      {
        dateStart: _0x17912a,
        dateEnd: _0x51367a,
        status: _0x5a04b7,
        queuesIds: _0x328273,
        showAll: _0x382b7e
      } = _0xb1c0fe[_0x75babc(0xe7)],
      _0x28d980 = await (0x0, TicketsQueuesService_1[_0x75babc(0xe8)])({
        showAll: _0x3d2e26 === _0x75babc(0xe1) ? _0x75babc(0xe4) : ![],
        dateStart: _0x17912a,
        dateEnd: _0x51367a,
        status: _0x5a04b7,
        queuesIds: _0x328273,
        userId: _0x170c59,
        companyId: _0x3d332b
      });
    return _0x25b0c1['status'](0xc8)[_0x75babc(0xd5)](_0x28d980);
  };
exports[a34_0x355ff5(0xe2)] = DashTicketsQueues;
function a34_0x1bf3(_0x9706da, _0x150e23) {
  const _0x13c8e6 = a34_0x13c8();
  return (
    (a34_0x1bf3 = function (_0x1bf3dc, _0x1f1193) {
      _0x1bf3dc = _0x1bf3dc - 0xd4;
      let _0x32f6f8 = _0x13c8e6[_0x1bf3dc];
      return _0x32f6f8;
    }),
    a34_0x1bf3(_0x9706da, _0x150e23)
  );
}
const ContactsReport = async (_0x8d806, _0x2bf7b6) => {
  const _0x4102a5 = a34_0x355ff5,
    { companyId: _0x9e0a36 } = _0x8d806[_0x4102a5(0xd8)],
    {
      startDate: _0x426ec8,
      endDate: _0x485751,
      tags: _0x2b2670,
      ddds: _0x38a44b,
      wallets: _0x2bb446,
      searchParam: _0x514c8e
    } = _0x8d806[_0x4102a5(0xe7)],
    _0xce41d6 = await (0x0, ContactsReportService_1[_0x4102a5(0xe8)])({
      startDate: _0x426ec8,
      endDate: _0x485751,
      tags: _0x2b2670,
      ddds: _0x38a44b,
      companyId: _0x9e0a36,
      profile: _0x8d806['user'][_0x4102a5(0xde)],
      userId: +_0x8d806[_0x4102a5(0xd8)]['id'],
      wallets: _0x2bb446,
      searchParam: _0x514c8e
    });
  return _0x2bf7b6['status'](0xc8)[_0x4102a5(0xd5)](_0xce41d6);
};
exports['ContactsReport'] = ContactsReport;
