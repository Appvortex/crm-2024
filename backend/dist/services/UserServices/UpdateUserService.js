'use strict';
const a641_0x3da00a = a641_0x1856;
(function (_0x4f1938, _0x5dee6c) {
  const _0x4ccb61 = a641_0x1856,
    _0x2a5c00 = _0x4f1938();
  while (!![]) {
    try {
      const _0x323fb3 =
        parseInt(_0x4ccb61(0x17d)) / 0x1 +
        -parseInt(_0x4ccb61(0x19b)) / 0x2 +
        (-parseInt(_0x4ccb61(0x187)) / 0x3) *
          (parseInt(_0x4ccb61(0x18f)) / 0x4) +
        -parseInt(_0x4ccb61(0x19c)) / 0x5 +
        (-parseInt(_0x4ccb61(0x177)) / 0x6) *
          (parseInt(_0x4ccb61(0x193)) / 0x7) +
        -parseInt(_0x4ccb61(0x17f)) / 0x8 +
        parseInt(_0x4ccb61(0x19e)) / 0x9;
      if (_0x323fb3 === _0x5dee6c) break;
      else _0x2a5c00['push'](_0x2a5c00['shift']());
    } catch (_0x6f6d9) {
      _0x2a5c00['push'](_0x2a5c00['shift']());
    }
  }
})(a641_0x8d10, 0x9544f);
function a641_0x1856(_0x382d30, _0x31d748) {
  const _0x8d10e7 = a641_0x8d10();
  return (
    (a641_0x1856 = function (_0x1856d9, _0x294c01) {
      _0x1856d9 = _0x1856d9 - 0x176;
      let _0x55659a = _0x8d10e7[_0x1856d9];
      return _0x55659a;
    }),
    a641_0x1856(_0x382d30, _0x31d748)
  );
}
var __createBinding =
    (this && this['__createBinding']) ||
    (Object[a641_0x3da00a(0x1a2)]
      ? function (_0x942936, _0xaa121c, _0x6dedd1, _0x57e51b) {
          const _0x528aa8 = a641_0x3da00a;
          if (_0x57e51b === undefined) _0x57e51b = _0x6dedd1;
          var _0x58ff4b = Object[_0x528aa8(0x199)](_0xaa121c, _0x6dedd1);
          (!_0x58ff4b ||
            (_0x528aa8(0x188) in _0x58ff4b
              ? !_0xaa121c['__esModule']
              : _0x58ff4b[_0x528aa8(0x18a)] || _0x58ff4b[_0x528aa8(0x195)])) &&
            (_0x58ff4b = {
              enumerable: !![],
              get: function () {
                return _0xaa121c[_0x6dedd1];
              }
            }),
            Object[_0x528aa8(0x18c)](_0x942936, _0x57e51b, _0x58ff4b);
        }
      : function (_0x12393f, _0x339ff9, _0x4171fd, _0x218d1d) {
          if (_0x218d1d === undefined) _0x218d1d = _0x4171fd;
          _0x12393f[_0x218d1d] = _0x339ff9[_0x4171fd];
        }),
  __setModuleDefault =
    (this && this[a641_0x3da00a(0x191)]) ||
    (Object[a641_0x3da00a(0x1a2)]
      ? function (_0x1281b5, _0x1773ac) {
          const _0x5a0a0c = a641_0x3da00a;
          Object[_0x5a0a0c(0x18c)](_0x1281b5, 'default', {
            enumerable: !![],
            value: _0x1773ac
          });
        }
      : function (_0x5e56a6, _0x218d40) {
          const _0x5d9940 = a641_0x3da00a;
          _0x5e56a6[_0x5d9940(0x17a)] = _0x218d40;
        }),
  __importStar =
    (this && this[a641_0x3da00a(0x192)]) ||
    function (_0x24cdc4) {
      const _0x2860df = a641_0x3da00a;
      if (_0x24cdc4 && _0x24cdc4[_0x2860df(0x1a3)]) return _0x24cdc4;
      var _0x2ff545 = {};
      if (_0x24cdc4 != null) {
        for (var _0x1d0636 in _0x24cdc4)
          if (
            _0x1d0636 !== _0x2860df(0x17a) &&
            Object['prototype']['hasOwnProperty'][_0x2860df(0x1a1)](
              _0x24cdc4,
              _0x1d0636
            )
          )
            __createBinding(_0x2ff545, _0x24cdc4, _0x1d0636);
      }
      return __setModuleDefault(_0x2ff545, _0x24cdc4), _0x2ff545;
    },
  __importDefault =
    (this && this[a641_0x3da00a(0x17b)]) ||
    function (_0x22ed88) {
      const _0x40f7c2 = a641_0x3da00a;
      return _0x22ed88 && _0x22ed88[_0x40f7c2(0x1a3)]
        ? _0x22ed88
        : { default: _0x22ed88 };
    };
Object['defineProperty'](exports, a641_0x3da00a(0x1a3), { value: !![] });
const Yup = __importStar(require(a641_0x3da00a(0x19f))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  ShowUserService_1 = __importDefault(require(a641_0x3da00a(0x18d))),
  Company_1 = __importDefault(require('../../models/Company')),
  User_1 = __importDefault(require(a641_0x3da00a(0x19a))),
  UpdateUserService = async ({
    userData: _0x3b8e5c,
    userId: _0x24f191,
    companyId: _0x434a11,
    requestUserId: _0xb4f550
  }) => {
    const _0x3bc9a2 = a641_0x3da00a,
      _0x7a692d = await (0x0, ShowUserService_1['default'])(
        _0x24f191,
        _0x434a11
      ),
      _0xf9fdd = await User_1[_0x3bc9a2(0x17a)][_0x3bc9a2(0x1a0)](_0xb4f550);
    if (
      _0xf9fdd[_0x3bc9a2(0x183)] === ![] &&
      _0x3b8e5c['companyId'] !== _0x434a11
    )
      throw new AppError_1[_0x3bc9a2(0x17a)](_0x3bc9a2(0x189));
    const _0x5e7d0b = Yup[_0x3bc9a2(0x181)]()['shape']({
        name: Yup[_0x3bc9a2(0x18b)]()[_0x3bc9a2(0x186)](0x2),
        allHistoric: Yup[_0x3bc9a2(0x18b)](),
        email: Yup['string']()[_0x3bc9a2(0x17c)](),
        profile: Yup[_0x3bc9a2(0x18b)](),
        password: Yup[_0x3bc9a2(0x18b)]()
      }),
      _0x46fc6d = _0x7a692d[_0x3bc9a2(0x17c)],
      {
        email: _0x493756,
        password: _0x27e31e,
        profile: _0x302e68,
        name: _0x1da609,
        queueIds: queueIds = [],
        startWork: _0x17736d,
        endWork: _0x43c630,
        farewellMessage: _0x2fe236,
        whatsappId: _0x4698ba,
        allTicket: _0x2fe401,
        defaultTheme: _0x411245,
        defaultMenu: _0x974975,
        allowGroup: _0x2bf57e,
        allHistoric: _0x2db9f7,
        allUserChat: _0x3ff78a,
        userClosePendingTicket: _0x1cbf6b,
        showDashboard: _0x4faae4,
        defaultTicketsManagerWidth: defaultTicketsManagerWidth = 0x226
      } = _0x3b8e5c;
    try {
      await _0x5e7d0b[_0x3bc9a2(0x185)]({
        email: _0x493756,
        password: _0x27e31e,
        profile: _0x302e68,
        name: _0x1da609
      });
    } catch (_0x5b5760) {
      throw new AppError_1[_0x3bc9a2(0x17a)](_0x5b5760['message']);
    }
    await _0x7a692d[_0x3bc9a2(0x176)]({
      email: _0x493756,
      password: _0x27e31e,
      profile: _0x302e68,
      name: _0x1da609,
      startWork: _0x17736d,
      endWork: _0x43c630,
      farewellMessage: _0x2fe236,
      whatsappId: _0x4698ba || null,
      allTicket: _0x2fe401,
      defaultTheme: _0x411245,
      defaultMenu: _0x974975,
      allowGroup: _0x2bf57e,
      allHistoric: _0x2db9f7,
      allUserChat: _0x3ff78a,
      userClosePendingTicket: _0x1cbf6b,
      showDashboard: _0x4faae4,
      defaultTicketsManagerWidth: defaultTicketsManagerWidth
    }),
      await _0x7a692d['$set'](_0x3bc9a2(0x180), queueIds),
      await _0x7a692d[_0x3bc9a2(0x17e)]();
    const _0x37c89e = await Company_1[_0x3bc9a2(0x17a)]['findByPk'](
      _0x7a692d[_0x3bc9a2(0x179)]
    );
    _0x37c89e[_0x3bc9a2(0x17c)] === _0x46fc6d &&
      (await _0x37c89e[_0x3bc9a2(0x176)]({
        email: _0x493756,
        password: _0x27e31e
      }));
    const _0x3e6179 = {
      id: _0x7a692d['id'],
      name: _0x7a692d[_0x3bc9a2(0x194)],
      email: _0x7a692d[_0x3bc9a2(0x17c)],
      profile: _0x7a692d['profile'],
      companyId: _0x7a692d[_0x3bc9a2(0x179)],
      company: _0x37c89e,
      queues: _0x7a692d[_0x3bc9a2(0x180)],
      startWork: _0x7a692d['startWork'],
      endWork: _0x7a692d[_0x3bc9a2(0x184)],
      greetingMessage: _0x7a692d[_0x3bc9a2(0x198)],
      allTicket: _0x7a692d['allTicket'],
      defaultMenu: _0x7a692d[_0x3bc9a2(0x18e)],
      defaultTheme: _0x7a692d[_0x3bc9a2(0x197)],
      allowGroup: _0x7a692d[_0x3bc9a2(0x190)],
      allHistoric: _0x7a692d[_0x3bc9a2(0x182)],
      userClosePendingTicket: _0x7a692d[_0x3bc9a2(0x19d)],
      showDashboard: _0x7a692d[_0x3bc9a2(0x196)],
      defaultTicketsManagerWidth: _0x7a692d[_0x3bc9a2(0x178)]
    };
    return _0x3e6179;
  };
exports['default'] = UpdateUserService;
function a641_0x8d10() {
  const _0x36fff4 = [
    'farewellMessage',
    'getOwnPropertyDescriptor',
    '../../models/User',
    '1217012NuSnhW',
    '4960625PaYNrc',
    'userClosePendingTicket',
    '35654481KJkDVC',
    'yup',
    'findByPk',
    'call',
    'create',
    '__esModule',
    'update',
    '78192iuVlFC',
    'defaultTicketsManagerWidth',
    'companyId',
    'default',
    '__importDefault',
    'email',
    '369542zpmVhS',
    'reload',
    '4729912EOuhbK',
    'queues',
    'object',
    'allHistoric',
    'super',
    'endWork',
    'validate',
    'min',
    '25086KqpNpU',
    'get',
    'El\x20usuario\x20no\x20pertenece\x20a\x20esta\x20empresa.',
    'writable',
    'string',
    'defineProperty',
    './ShowUserService',
    'defaultMenu',
    '388oKQbnT',
    'allowGroup',
    '__setModuleDefault',
    '__importStar',
    '385zTKsfg',
    'name',
    'configurable',
    'showDashboard',
    'defaultTheme'
  ];
  a641_0x8d10 = function () {
    return _0x36fff4;
  };
  return a641_0x8d10();
}
