'use strict';
const a586_0x3c64ba = a586_0x29ba;
(function (_0x2dd67f, _0x3f35e3) {
  const _0x18b4a5 = a586_0x29ba,
    _0x4c9274 = _0x2dd67f();
  while (!![]) {
    try {
      const _0x9c9ee8 =
        -parseInt(_0x18b4a5(0x1b5)) / 0x1 +
        (parseInt(_0x18b4a5(0x1b1)) / 0x2) *
          (parseInt(_0x18b4a5(0x1c1)) / 0x3) +
        -parseInt(_0x18b4a5(0x1b4)) / 0x4 +
        -parseInt(_0x18b4a5(0x1c3)) / 0x5 +
        parseInt(_0x18b4a5(0x1c4)) / 0x6 +
        (-parseInt(_0x18b4a5(0x1c5)) / 0x7) *
          (-parseInt(_0x18b4a5(0x1b6)) / 0x8) +
        parseInt(_0x18b4a5(0x1b3)) / 0x9;
      if (_0x9c9ee8 === _0x3f35e3) break;
      else _0x4c9274['push'](_0x4c9274['shift']());
    } catch (_0xbe7780) {
      _0x4c9274['push'](_0x4c9274['shift']());
    }
  }
})(a586_0x2f67, 0xed0bc);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x5e0521) {
    const _0x2f3503 = a586_0x29ba;
    return _0x5e0521 && _0x5e0521[_0x2f3503(0x1c6)]
      ? _0x5e0521
      : { default: _0x5e0521 };
  };
function a586_0x29ba(_0x16c2df, _0x8bdf96) {
  const _0x2f67c0 = a586_0x2f67();
  return (
    (a586_0x29ba = function (_0x29bada, _0x34b0bc) {
      _0x29bada = _0x29bada - 0x1b1;
      let _0xe3904c = _0x2f67c0[_0x29bada];
      return _0xe3904c;
    }),
    a586_0x29ba(_0x16c2df, _0x8bdf96)
  );
}
Object[a586_0x3c64ba(0x1c7)](exports, '__esModule', { value: !![] });
function a586_0x2f67() {
  const _0x2c75dd = [
    'createdAt',
    'Sequelize',
    'where',
    'LIKE',
    'findAndCountAll',
    'toLowerCase',
    'default',
    'col',
    'sequelize',
    '2901879RYRQTo',
    'Schedule.message',
    '4587430pdOJci',
    '4108284gWjbLY',
    '7CwoYAE',
    '__esModule',
    'defineProperty',
    '../../models/ScheduledMessages',
    '2CJyMNF',
    'DESC',
    '21506841KAEnVi',
    '2563364hqHCEq',
    '1560468kFmWZF',
    '384632rcdppY',
    'LOWER'
  ];
  a586_0x2f67 = function () {
    return _0x2c75dd;
  };
  return a586_0x2f67();
}
const sequelize_1 = require(a586_0x3c64ba(0x1c0)),
  ScheduledMessages_1 = __importDefault(require(a586_0x3c64ba(0x1c8))),
  ListService = async ({
    searchParam: _0x502f43,
    pageNumber: pageNumber = '1',
    companyId: _0x38bac7
  }) => {
    const _0x223a11 = a586_0x3c64ba;
    let _0x11a941 = {};
    const _0x546b1b = 0x14,
      _0x47338e = _0x546b1b * (+pageNumber - 0x1);
    !!_0x502f43 &&
      (_0x11a941 = {
        [sequelize_1['Op']['or']]: [
          {
            '$Schedule.body$': sequelize_1[_0x223a11(0x1b9)]['where'](
              sequelize_1[_0x223a11(0x1b9)]['fn'](
                _0x223a11(0x1b7),
                sequelize_1[_0x223a11(0x1b9)]['col'](_0x223a11(0x1c2))
              ),
              _0x223a11(0x1bb),
              '%' + _0x502f43[_0x223a11(0x1bd)]() + '%'
            )
          },
          {
            '$Contact.name$': sequelize_1['Sequelize'][_0x223a11(0x1ba)](
              sequelize_1[_0x223a11(0x1b9)]['fn'](
                'LOWER',
                sequelize_1[_0x223a11(0x1b9)][_0x223a11(0x1bf)]('contact.name')
              ),
              _0x223a11(0x1bb),
              '%' + _0x502f43[_0x223a11(0x1bd)]() + '%'
            )
          }
        ]
      });
    _0x11a941 = {
      ..._0x11a941,
      companyId: { [sequelize_1['Op']['eq']]: _0x38bac7 }
    };
    const { count: _0x453c3f, rows: _0x39679f } = await ScheduledMessages_1[
        _0x223a11(0x1be)
      ][_0x223a11(0x1bc)]({
        where: _0x11a941,
        limit: _0x546b1b,
        offset: _0x47338e,
        order: [[_0x223a11(0x1b8), _0x223a11(0x1b2)]]
      }),
      _0x4a2f86 = _0x453c3f > _0x47338e + _0x39679f['length'];
    return { schedules: _0x39679f, count: _0x453c3f, hasMore: _0x4a2f86 };
  };
exports['default'] = ListService;
