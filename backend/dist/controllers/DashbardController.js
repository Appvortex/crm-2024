'use strict';
const a18_0x5e7079 = a18_0x1414;
(function (_0xcbc185, _0x4f970c) {
  const _0x1041ae = a18_0x1414,
    _0x3d95ea = _0xcbc185();
  while (!![]) {
    try {
      const _0x44779f =
        parseInt(_0x1041ae(0xf4)) / 0x1 +
        parseInt(_0x1041ae(0xf9)) / 0x2 +
        (parseInt(_0x1041ae(0xfd)) / 0x3) * (-parseInt(_0x1041ae(0xff)) / 0x4) +
        -parseInt(_0x1041ae(0xfe)) / 0x5 +
        parseInt(_0x1041ae(0x104)) / 0x6 +
        (-parseInt(_0x1041ae(0x103)) / 0x7) *
          (parseInt(_0x1041ae(0x106)) / 0x8) +
        (parseInt(_0x1041ae(0x107)) / 0x9) * (-parseInt(_0x1041ae(0xf0)) / 0xa);
      if (_0x44779f === _0x4f970c) break;
      else _0x3d95ea['push'](_0x3d95ea['shift']());
    } catch (_0x3ec2d1) {
      _0x3d95ea['push'](_0x3d95ea['shift']());
    }
  }
})(a18_0x1ba2, 0x2e7b1);
var __importDefault =
  (this && this[a18_0x5e7079(0xef)]) ||
  function (_0x7f8d8c) {
    return _0x7f8d8c && _0x7f8d8c['__esModule']
      ? _0x7f8d8c
      : { default: _0x7f8d8c };
  };
Object['defineProperty'](exports, a18_0x5e7079(0xf1), { value: !![] }),
  (exports[a18_0x5e7079(0xfa)] =
    exports[a18_0x5e7079(0xf6)] =
    exports[a18_0x5e7079(0x100)] =
    exports[a18_0x5e7079(0xf2)] =
      void 0x0);
const DashbardDataService_1 = __importDefault(
    require('../services/ReportService/DashbardDataService')
  ),
  TicketsAttendance_1 = require(a18_0x5e7079(0xfb)),
  TicketsDayService_1 = require(a18_0x5e7079(0x108)),
  TicketsQueuesService_1 = __importDefault(require(a18_0x5e7079(0xf7))),
  index = async (_0xac379e, _0x2ce27b) => {
    const _0x9ddc36 = a18_0x5e7079,
      _0x46f9c0 = _0xac379e[_0x9ddc36(0xee)],
      { companyId: _0x29200e } = _0xac379e[_0x9ddc36(0xf8)];
    let _0x3f8727 = 0x3;
    const _0x3a6d85 = await (0x0, DashbardDataService_1[_0x9ddc36(0xf5)])(
      _0x29200e,
      _0x46f9c0
    );
    return _0x2ce27b[_0x9ddc36(0x105)](0xc8)['json'](_0x3a6d85);
  };
exports[a18_0x5e7079(0xf2)] = index;
const reportsUsers = async (_0x3316c5, _0xfbec8a) => {
  const _0x3c9129 = a18_0x5e7079,
    {
      initialDate: _0x118b3d,
      finalDate: _0x3e8fbc,
      companyId: _0x431b28
    } = _0x3316c5[_0x3c9129(0xee)],
    { data: _0x3214cf } = await (0x0, TicketsAttendance_1[_0x3c9129(0x102)])({
      initialDate: _0x118b3d,
      finalDate: _0x3e8fbc,
      companyId: _0x431b28
    });
  return _0xfbec8a[_0x3c9129(0x101)]({ data: _0x3214cf });
};
function a18_0x1ba2() {
  const _0x4bae72 = [
    '343022ktrrJz',
    'default',
    'reportsDay',
    '../services/TicketServices/TicketsQueuesService',
    'user',
    '520610Vqvrpr',
    'DashTicketsQueues',
    '../services/ReportService/TicketsAttendance',
    'admin',
    '3wRBTqF',
    '239825eFSBpq',
    '866156dZuqOd',
    'reportsUsers',
    'json',
    'TicketsAttendance',
    '1239259QdLiGg',
    '1927146EzlRwq',
    'status',
    '8VngnWs',
    '144yCHKHx',
    '../services/ReportService/TicketsDayService',
    'query',
    '__importDefault',
    '182870GibZJJ',
    '__esModule',
    'index',
    'TicketsDayService'
  ];
  a18_0x1ba2 = function () {
    return _0x4bae72;
  };
  return a18_0x1ba2();
}
exports['reportsUsers'] = reportsUsers;
const reportsDay = async (_0x2eec9e, _0x27376a) => {
  const _0x38db73 = a18_0x5e7079,
    {
      initialDate: _0x5a20a2,
      finalDate: _0x4a87b8,
      companyId: _0xb78671
    } = _0x2eec9e[_0x38db73(0xee)],
    { count: _0x47afbb, data: _0xbb6d23 } = await (0x0,
    TicketsDayService_1[_0x38db73(0xf3)])({
      initialDate: _0x5a20a2,
      finalDate: _0x4a87b8,
      companyId: _0xb78671
    });
  return _0x27376a[_0x38db73(0x101)]({ count: _0x47afbb, data: _0xbb6d23 });
};
function a18_0x1414(_0x1bd46a, _0x1d0cc8) {
  const _0x1ba261 = a18_0x1ba2();
  return (
    (a18_0x1414 = function (_0x141435, _0x5ca584) {
      _0x141435 = _0x141435 - 0xee;
      let _0x33556b = _0x1ba261[_0x141435];
      return _0x33556b;
    }),
    a18_0x1414(_0x1bd46a, _0x1d0cc8)
  );
}
exports['reportsDay'] = reportsDay;
const DashTicketsQueues = async (_0x1313d6, _0x24b568) => {
  const _0x49ace0 = a18_0x5e7079,
    {
      companyId: _0x62c65c,
      profile: _0x2391ea,
      id: _0x580b79
    } = _0x1313d6['user'],
    {
      dateStart: _0x1ca5b4,
      dateEnd: _0xf0a577,
      status: _0x1377a5,
      queuesIds: _0x5ab504,
      showAll: _0x1c4f6d
    } = _0x1313d6['query'],
    _0x45cb9e = await (0x0, TicketsQueuesService_1[_0x49ace0(0xf5)])({
      showAll: _0x2391ea === _0x49ace0(0xfc) ? _0x1c4f6d : ![],
      dateStart: _0x1ca5b4,
      dateEnd: _0xf0a577,
      status: _0x1377a5,
      queuesIds: _0x5ab504,
      userId: _0x580b79,
      companyId: _0x62c65c,
      profile: _0x2391ea
    });
  return _0x24b568[_0x49ace0(0x105)](0xc8)[_0x49ace0(0x101)](_0x45cb9e);
};
exports[a18_0x5e7079(0xfa)] = DashTicketsQueues;
