'use strict';
const a444_0x4e2b6f = a444_0x327f;
(function (_0x147a33, _0x28ce28) {
  const _0x1b08f5 = a444_0x327f,
    _0x30948c = _0x147a33();
  while (!![]) {
    try {
      const _0x6438ab =
        -parseInt(_0x1b08f5(0xcf)) / 0x1 +
        (-parseInt(_0x1b08f5(0xca)) / 0x2) *
          (-parseInt(_0x1b08f5(0xc8)) / 0x3) +
        parseInt(_0x1b08f5(0xb9)) / 0x4 +
        (-parseInt(_0x1b08f5(0xc0)) / 0x5) *
          (-parseInt(_0x1b08f5(0xc4)) / 0x6) +
        (parseInt(_0x1b08f5(0xbb)) / 0x7) * (-parseInt(_0x1b08f5(0xba)) / 0x8) +
        -parseInt(_0x1b08f5(0xcb)) / 0x9 +
        -parseInt(_0x1b08f5(0xb8)) / 0xa;
      if (_0x6438ab === _0x28ce28) break;
      else _0x30948c['push'](_0x30948c['shift']());
    } catch (_0x6f6c8f) {
      _0x30948c['push'](_0x30948c['shift']());
    }
  }
})(a444_0x23a9, 0xcf15d);
var __importDefault =
  (this && this[a444_0x4e2b6f(0xc3)]) ||
  function (_0x41a8ab) {
    return _0x41a8ab && _0x41a8ab['__esModule']
      ? _0x41a8ab
      : { default: _0x41a8ab };
  };
function a444_0x327f(_0xac68d7, _0x1418dc) {
  const _0x23a9fe = a444_0x23a9();
  return (
    (a444_0x327f = function (_0x327feb, _0x54ee43) {
      _0x327feb = _0x327feb - 0xb7;
      let _0x4aeb5a = _0x23a9fe[_0x327feb];
      return _0x4aeb5a;
    }),
    a444_0x327f(_0xac68d7, _0x1418dc)
  );
}
Object['defineProperty'](exports, a444_0x4e2b6f(0xb7), { value: !![] });
function a444_0x23a9() {
  const _0x3c3038 = [
    '486931xDDMZd',
    '__esModule',
    '1164830BrKKkF',
    '1877136uoCIyF',
    '14656XcayYH',
    '392iJUIHE',
    'owner',
    'map',
    'DESC',
    'sequelize',
    '620170ulJiby',
    'chatId',
    'default',
    '__importDefault',
    '54vafZDB',
    '../../models/ChatUser',
    'findAll',
    'user',
    '6fBdTyT',
    'createdAt',
    '1031970QsoBbB',
    '9569997vrPzGu',
    'length',
    '../../models/User',
    '../../models/Chat'
  ];
  a444_0x23a9 = function () {
    return _0x3c3038;
  };
  return a444_0x23a9();
}
const sequelize_1 = require(a444_0x4e2b6f(0xbf)),
  Chat_1 = __importDefault(require(a444_0x4e2b6f(0xce))),
  ChatUser_1 = __importDefault(require(a444_0x4e2b6f(0xc5))),
  User_1 = __importDefault(require(a444_0x4e2b6f(0xcd))),
  ListService = async ({
    ownerId: _0x443458,
    pageNumber: pageNumber = '1'
  }) => {
    const _0x1e0878 = a444_0x4e2b6f,
      _0x379d34 = await ChatUser_1[_0x1e0878(0xc2)][_0x1e0878(0xc6)]({
        where: { userId: _0x443458 }
      }),
      _0x487de3 = _0x379d34[_0x1e0878(0xbd)](
        _0x3d01e5 => _0x3d01e5[_0x1e0878(0xc1)]
      ),
      _0x5d6000 = 0x14,
      _0x122173 = _0x5d6000 * (+pageNumber - 0x1),
      { count: _0x5efc82, rows: _0x2a424b } = await Chat_1[_0x1e0878(0xc2)][
        'findAndCountAll'
      ]({
        where: { id: { [sequelize_1['Op']['in']]: _0x487de3 } },
        include: [
          { model: User_1[_0x1e0878(0xc2)], as: _0x1e0878(0xbc) },
          {
            model: ChatUser_1[_0x1e0878(0xc2)],
            as: 'users',
            include: [{ model: User_1['default'], as: _0x1e0878(0xc7) }]
          }
        ],
        limit: _0x5d6000,
        offset: _0x122173,
        order: [[_0x1e0878(0xc9), _0x1e0878(0xbe)]]
      }),
      _0x2f4b39 = _0x5efc82 > _0x122173 + _0x2a424b[_0x1e0878(0xcc)];
    return { records: _0x2a424b, count: _0x5efc82, hasMore: _0x2f4b39 };
  };
exports[a444_0x4e2b6f(0xc2)] = ListService;
