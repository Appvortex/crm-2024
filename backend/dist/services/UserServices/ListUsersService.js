'use strict';
const a637_0xf1528c = a637_0x2a5e;
(function (_0x24a3c2, _0x1549a4) {
  const _0x3afda6 = a637_0x2a5e,
    _0x4b33bd = _0x24a3c2();
  while (!![]) {
    try {
      const _0x3e5590 =
        -parseInt(_0x3afda6(0x154)) / 0x1 +
        parseInt(_0x3afda6(0x164)) / 0x2 +
        parseInt(_0x3afda6(0x153)) / 0x3 +
        (-parseInt(_0x3afda6(0x15f)) / 0x4) *
          (parseInt(_0x3afda6(0x155)) / 0x5) +
        (parseInt(_0x3afda6(0x14e)) / 0x6) *
          (parseInt(_0x3afda6(0x162)) / 0x7) +
        -parseInt(_0x3afda6(0x16c)) / 0x8 +
        parseInt(_0x3afda6(0x15b)) / 0x9;
      if (_0x3e5590 === _0x1549a4) break;
      else _0x4b33bd['push'](_0x4b33bd['shift']());
    } catch (_0x469d31) {
      _0x4b33bd['push'](_0x4b33bd['shift']());
    }
  }
})(a637_0x49c3, 0xa5793);
function a637_0x49c3() {
  const _0x3fe357 = [
    '__importDefault',
    'amount',
    '../../models/Ticket',
    '12878235TzJRdq',
    'User.name',
    'queues',
    'useFacebook',
    '1756492vszMuI',
    'useSchedules',
    'useIntegrations',
    '28AsqUcx',
    'length',
    '1114674qXTFFQ',
    'name',
    '../../models/Company',
    'Sequelize',
    'dueDate',
    '../../models/User',
    'company',
    'toLowerCase',
    '3505200hmdEiw',
    'tickets',
    'default',
    'useInternalChat',
    'useExternalApi',
    'plan',
    '912354UywQQm',
    'useCampaigns',
    'document',
    'LOWER',
    'useKanban',
    '3329742BWRbpS',
    '1273104dlwSsN',
    '15XMHmiM',
    'useWhatsapp',
    'col'
  ];
  a637_0x49c3 = function () {
    return _0x3fe357;
  };
  return a637_0x49c3();
}
function a637_0x2a5e(_0x2eb27c, _0x519876) {
  const _0x49c326 = a637_0x49c3();
  return (
    (a637_0x2a5e = function (_0x2a5ea3, _0x1b583a) {
      _0x2a5ea3 = _0x2a5ea3 - 0x14e;
      let _0x46e5f0 = _0x49c326[_0x2a5ea3];
      return _0x46e5f0;
    }),
    a637_0x2a5e(_0x2eb27c, _0x519876)
  );
}
var __importDefault =
  (this && this[a637_0xf1528c(0x158)]) ||
  function (_0x371bf9) {
    return _0x371bf9 && _0x371bf9['__esModule']
      ? _0x371bf9
      : { default: _0x371bf9 };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require('sequelize'),
  Queue_1 = __importDefault(require('../../models/Queue')),
  Company_1 = __importDefault(require(a637_0xf1528c(0x166))),
  User_1 = __importDefault(require(a637_0xf1528c(0x169))),
  Plan_1 = __importDefault(require('../../models/Plan')),
  Ticket_1 = __importDefault(require(a637_0xf1528c(0x15a))),
  ListUsersService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    companyId: _0x435120
  }) => {
    const _0x2ab4e9 = a637_0xf1528c,
      _0x3100b8 = {
        [sequelize_1['Op']['or']]: [
          {
            '$User.name$': sequelize_1['Sequelize']['where'](
              sequelize_1[_0x2ab4e9(0x167)]['fn'](
                _0x2ab4e9(0x151),
                sequelize_1[_0x2ab4e9(0x167)][_0x2ab4e9(0x157)](
                  _0x2ab4e9(0x15c)
                )
              ),
              'LIKE',
              '%' + searchParam[_0x2ab4e9(0x16b)]() + '%'
            )
          },
          {
            email: {
              [sequelize_1['Op']['like']]:
                '%' + searchParam[_0x2ab4e9(0x16b)]() + '%'
            }
          }
        ],
        companyId: { [sequelize_1['Op']['eq']]: _0x435120 }
      },
      _0x219a36 = 0x14,
      _0x222142 = _0x219a36 * (+pageNumber - 0x1),
      { count: _0x3e3aab, rows: _0x47ef72 } = await User_1[_0x2ab4e9(0x16e)][
        'findAndCountAll'
      ]({
        where: _0x3100b8,
        limit: _0x219a36,
        offset: _0x222142,
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: Queue_1[_0x2ab4e9(0x16e)],
            as: _0x2ab4e9(0x15d),
            attributes: ['id', _0x2ab4e9(0x165), 'color']
          },
          {
            model: Company_1[_0x2ab4e9(0x16e)],
            as: _0x2ab4e9(0x16a),
            attributes: [
              'id',
              _0x2ab4e9(0x165),
              _0x2ab4e9(0x168),
              _0x2ab4e9(0x150)
            ],
            include: [
              {
                model: Plan_1['default'],
                as: _0x2ab4e9(0x171),
                attributes: [
                  'id',
                  _0x2ab4e9(0x165),
                  _0x2ab4e9(0x159),
                  _0x2ab4e9(0x156),
                  _0x2ab4e9(0x15e),
                  'useInstagram',
                  _0x2ab4e9(0x14f),
                  _0x2ab4e9(0x160),
                  _0x2ab4e9(0x16f),
                  _0x2ab4e9(0x170),
                  _0x2ab4e9(0x161),
                  'useOpenAi',
                  _0x2ab4e9(0x152)
                ]
              }
            ]
          },
          { model: Ticket_1[_0x2ab4e9(0x16e)], as: _0x2ab4e9(0x16d) }
        ]
      }),
      _0x475ede = _0x3e3aab > _0x222142 + _0x47ef72[_0x2ab4e9(0x163)];
    return { users: _0x47ef72, count: _0x3e3aab, hasMore: _0x475ede };
  };
exports['default'] = ListUsersService;
