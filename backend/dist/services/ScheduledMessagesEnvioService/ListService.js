'use strict';
const a581_0x582f66 = a581_0xa954;
function a581_0x442b() {
  const _0x5e97f3 = [
    'length',
    '3274952DlpTwz',
    'where',
    'col',
    '__importDefault',
    '../../models/ScheduledMessages',
    'contact.name',
    'createdAt',
    '114QVpyoR',
    '8768305CsDsYB',
    'LIKE',
    '10GbmWeP',
    '22YSNluD',
    'Schedule.message',
    'LOWER',
    'defineProperty',
    '__esModule',
    '13869732KYbCtX',
    '2065976UDXPrC',
    'toLowerCase',
    'sequelize',
    '2385225RUEzkS',
    '3XFsSFl',
    '11omVWtq',
    'default',
    '57160JomGWu',
    '32955VZWMuN',
    'DESC',
    'Sequelize',
    'findAndCountAll'
  ];
  a581_0x442b = function () {
    return _0x5e97f3;
  };
  return a581_0x442b();
}
(function (_0x119448, _0x1e5366) {
  const _0x3bebc8 = a581_0xa954,
    _0x3447b0 = _0x119448();
  while (!![]) {
    try {
      const _0x46c842 =
        (parseInt(_0x3bebc8(0xbe)) / 0x1) * (parseInt(_0x3bebc8(0xce)) / 0x2) +
        (-parseInt(_0x3bebc8(0xba)) / 0x3) *
          (-parseInt(_0x3bebc8(0xd4)) / 0x4) +
        (-parseInt(_0x3bebc8(0xbd)) / 0x5) * (parseInt(_0x3bebc8(0xca)) / 0x6) +
        -parseInt(_0x3bebc8(0xcb)) / 0x7 +
        parseInt(_0x3bebc8(0xc3)) / 0x8 +
        (-parseInt(_0x3bebc8(0xd7)) / 0x9) * (parseInt(_0x3bebc8(0xcd)) / 0xa) +
        (parseInt(_0x3bebc8(0xbb)) / 0xb) * (parseInt(_0x3bebc8(0xd3)) / 0xc);
      if (_0x46c842 === _0x1e5366) break;
      else _0x3447b0['push'](_0x3447b0['shift']());
    } catch (_0x32d7a0) {
      _0x3447b0['push'](_0x3447b0['shift']());
    }
  }
})(a581_0x442b, 0xad2d3);
var __importDefault =
  (this && this[a581_0x582f66(0xc6)]) ||
  function (_0x537fe1) {
    const _0x5977e9 = a581_0x582f66;
    return _0x537fe1 && _0x537fe1[_0x5977e9(0xd2)]
      ? _0x537fe1
      : { default: _0x537fe1 };
  };
function a581_0xa954(_0x85cff7, _0xa6a031) {
  const _0x442bff = a581_0x442b();
  return (
    (a581_0xa954 = function (_0xa9546, _0x4cd863) {
      _0xa9546 = _0xa9546 - 0xba;
      let _0x5a42c8 = _0x442bff[_0xa9546];
      return _0x5a42c8;
    }),
    a581_0xa954(_0x85cff7, _0xa6a031)
  );
}
Object[a581_0x582f66(0xd1)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a581_0x582f66(0xd6)),
  ScheduledMessages_1 = __importDefault(require(a581_0x582f66(0xc7))),
  ListService = async ({
    searchParam: _0x4d948d,
    pageNumber: pageNumber = '1',
    companyId: _0x484bd6
  }) => {
    const _0x2b9ce4 = a581_0x582f66;
    let _0x2ec129 = {};
    const _0x98ef64 = 0x14,
      _0x2b0521 = _0x98ef64 * (+pageNumber - 0x1);
    !!_0x4d948d &&
      (_0x2ec129 = {
        [sequelize_1['Op']['or']]: [
          {
            '$Schedule.body$': sequelize_1[_0x2b9ce4(0xc0)][_0x2b9ce4(0xc4)](
              sequelize_1['Sequelize']['fn'](
                _0x2b9ce4(0xd0),
                sequelize_1[_0x2b9ce4(0xc0)]['col'](_0x2b9ce4(0xcf))
              ),
              _0x2b9ce4(0xcc),
              '%' + _0x4d948d[_0x2b9ce4(0xd5)]() + '%'
            )
          },
          {
            '$Contact.name$': sequelize_1['Sequelize'][_0x2b9ce4(0xc4)](
              sequelize_1[_0x2b9ce4(0xc0)]['fn'](
                'LOWER',
                sequelize_1[_0x2b9ce4(0xc0)][_0x2b9ce4(0xc5)](_0x2b9ce4(0xc8))
              ),
              _0x2b9ce4(0xcc),
              '%' + _0x4d948d[_0x2b9ce4(0xd5)]() + '%'
            )
          }
        ]
      });
    _0x2ec129 = {
      ..._0x2ec129,
      companyId: { [sequelize_1['Op']['eq']]: _0x484bd6 }
    };
    const { count: _0x5cd97a, rows: _0x47047f } = await ScheduledMessages_1[
        _0x2b9ce4(0xbc)
      ][_0x2b9ce4(0xc1)]({
        where: _0x2ec129,
        limit: _0x98ef64,
        offset: _0x2b0521,
        order: [[_0x2b9ce4(0xc9), _0x2b9ce4(0xbf)]]
      }),
      _0x30cce7 = _0x5cd97a > _0x2b0521 + _0x47047f[_0x2b9ce4(0xc2)];
    return { schedules: _0x47047f, count: _0x5cd97a, hasMore: _0x30cce7 };
  };
exports[a581_0x582f66(0xbc)] = ListService;
