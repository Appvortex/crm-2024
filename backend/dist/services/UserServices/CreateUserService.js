'use strict';
const a635_0x768ee8 = a635_0x358b;
(function (_0x5763cd, _0x4994cb) {
  const _0x1e7f75 = a635_0x358b,
    _0x596f93 = _0x5763cd();
  while (!![]) {
    try {
      const _0x58cbfc =
        parseInt(_0x1e7f75(0x8b)) / 0x1 +
        -parseInt(_0x1e7f75(0xa2)) / 0x2 +
        -parseInt(_0x1e7f75(0x89)) / 0x3 +
        -parseInt(_0x1e7f75(0x95)) / 0x4 +
        parseInt(_0x1e7f75(0x83)) / 0x5 +
        (-parseInt(_0x1e7f75(0x97)) / 0x6) * (parseInt(_0x1e7f75(0x90)) / 0x7) +
        (parseInt(_0x1e7f75(0xa5)) / 0x8) * (parseInt(_0x1e7f75(0x7f)) / 0x9);
      if (_0x58cbfc === _0x4994cb) break;
      else _0x596f93['push'](_0x596f93['shift']());
    } catch (_0x5b62cd) {
      _0x596f93['push'](_0x596f93['shift']());
    }
  }
})(a635_0x40a0, 0x7fca4);
var __createBinding =
    (this && this[a635_0x768ee8(0x8f)]) ||
    (Object[a635_0x768ee8(0x9f)]
      ? function (_0x2eff71, _0xc1d0ab, _0x508347, _0x174822) {
          const _0x1cfa06 = a635_0x768ee8;
          if (_0x174822 === undefined) _0x174822 = _0x508347;
          var _0x14b58c = Object[_0x1cfa06(0x98)](_0xc1d0ab, _0x508347);
          (!_0x14b58c ||
            ('get' in _0x14b58c
              ? !_0xc1d0ab[_0x1cfa06(0x8e)]
              : _0x14b58c[_0x1cfa06(0x9c)] || _0x14b58c[_0x1cfa06(0x91)])) &&
            (_0x14b58c = {
              enumerable: !![],
              get: function () {
                return _0xc1d0ab[_0x508347];
              }
            }),
            Object[_0x1cfa06(0x96)](_0x2eff71, _0x174822, _0x14b58c);
        }
      : function (_0x163d95, _0x4a5199, _0x5235ab, _0x58fa47) {
          if (_0x58fa47 === undefined) _0x58fa47 = _0x5235ab;
          _0x163d95[_0x58fa47] = _0x4a5199[_0x5235ab];
        }),
  __setModuleDefault =
    (this && this[a635_0x768ee8(0x88)]) ||
    (Object['create']
      ? function (_0x288df1, _0x32f9f4) {
          const _0x284e60 = a635_0x768ee8;
          Object[_0x284e60(0x96)](_0x288df1, _0x284e60(0x85), {
            enumerable: !![],
            value: _0x32f9f4
          });
        }
      : function (_0x156700, _0x1d22e6) {
          const _0x2cf8ac = a635_0x768ee8;
          _0x156700[_0x2cf8ac(0x85)] = _0x1d22e6;
        }),
  __importStar =
    (this && this[a635_0x768ee8(0x81)]) ||
    function (_0x3b95f9) {
      const _0x23259d = a635_0x768ee8;
      if (_0x3b95f9 && _0x3b95f9[_0x23259d(0x8e)]) return _0x3b95f9;
      var _0x1ddb60 = {};
      if (_0x3b95f9 != null) {
        for (var _0x36f7ba in _0x3b95f9)
          if (
            _0x36f7ba !== _0x23259d(0x85) &&
            Object[_0x23259d(0xa3)][_0x23259d(0x82)][_0x23259d(0x8d)](
              _0x3b95f9,
              _0x36f7ba
            )
          )
            __createBinding(_0x1ddb60, _0x3b95f9, _0x36f7ba);
      }
      return __setModuleDefault(_0x1ddb60, _0x3b95f9), _0x1ddb60;
    },
  __importDefault =
    (this && this[a635_0x768ee8(0x9d)]) ||
    function (_0x29fd64) {
      return _0x29fd64 && _0x29fd64['__esModule']
        ? _0x29fd64
        : { default: _0x29fd64 };
    };
Object[a635_0x768ee8(0x96)](exports, '__esModule', { value: !![] });
function a635_0x40a0() {
  const _0x37fc2f = [
    'required',
    '../../models/Plan',
    'reload',
    'writable',
    '__importDefault',
    'count',
    'create',
    '../../models/User',
    'company',
    '190512uJMgrc',
    'prototype',
    'test',
    '8VeyqOd',
    'shape',
    'min',
    'object',
    'message',
    '8724834Iltqpo',
    'email',
    '__importStar',
    'hasOwnProperty',
    '4404405QFiWhk',
    '../../errors/AppError',
    'default',
    'validate',
    'admin',
    '__setModuleDefault',
    '1648422mvZvWm',
    'queues',
    '407667nBURBJ',
    'Check-email',
    'call',
    '__esModule',
    '__createBinding',
    '33061ICvQTc',
    'configurable',
    'string',
    'plan',
    'Un\x20usuario\x20con\x20este\x20correo\x20electrónico\x20ya\x20existe.',
    '3414664KFlKoZ',
    'defineProperty',
    '300nqzOUg',
    'getOwnPropertyDescriptor'
  ];
  a635_0x40a0 = function () {
    return _0x37fc2f;
  };
  return a635_0x40a0();
}
const Yup = __importStar(require('yup')),
  AppError_1 = __importDefault(require(a635_0x768ee8(0x84))),
  SerializeUser_1 = require('../../helpers/SerializeUser'),
  User_1 = __importDefault(require(a635_0x768ee8(0xa0))),
  Plan_1 = __importDefault(require(a635_0x768ee8(0x9a))),
  Company_1 = __importDefault(require('../../models/Company')),
  CreateUserService = async ({
    email: _0x510af9,
    password: _0x1bc474,
    name: _0x28a862,
    queueIds: queueIds = [],
    companyId: _0x4b5e83,
    profile: profile = a635_0x768ee8(0x87),
    startWork: _0x36ad25,
    endWork: _0x2e1fce,
    whatsappId: _0x47910c,
    allTicket: _0x504abc,
    defaultTheme: _0x3a6d57,
    defaultMenu: _0x5fd5da,
    allowGroup: _0x4c993c,
    allHistoric: _0x27795a,
    allUserChat: _0x49b336,
    userClosePendingTicket: _0x8b70d4,
    showDashboard: _0x5041e7,
    defaultTicketsManagerWidth: defaultTicketsManagerWidth = 0x226
  }) => {
    const _0x974c05 = a635_0x768ee8;
    if (_0x4b5e83 !== undefined) {
      const _0x14ba7f = await Company_1[_0x974c05(0x85)]['findOne']({
        where: { id: _0x4b5e83 },
        include: [{ model: Plan_1['default'], as: 'plan' }]
      });
      if (_0x14ba7f !== null) {
        const _0x2dbc3a = await User_1[_0x974c05(0x85)][_0x974c05(0x9e)]({
          where: { companyId: _0x4b5e83 }
        });
        if (_0x2dbc3a >= _0x14ba7f[_0x974c05(0x93)]['users'])
          throw new AppError_1[_0x974c05(0x85)](
            'Número\x20máximo\x20de\x20usuários\x20já\x20alcançado:\x20' +
              _0x2dbc3a
          );
      }
    }
    const _0x14af91 = Yup[_0x974c05(0x7d)]()[_0x974c05(0xa6)]({
      name: Yup[_0x974c05(0x92)]()[_0x974c05(0x99)]()[_0x974c05(0x7c)](0x2),
      allHistoric: Yup[_0x974c05(0x92)](),
      email: Yup['string']()
        [_0x974c05(0x80)]()
        [_0x974c05(0x99)]()
        [_0x974c05(0xa4)](_0x974c05(0x8c), _0x974c05(0x94), async _0x280c71 => {
          const _0x3fa1d6 = _0x974c05;
          if (!_0x280c71) return ![];
          const _0x1c191d = await User_1[_0x3fa1d6(0x85)]['findOne']({
            where: { email: _0x280c71 }
          });
          return !_0x1c191d;
        }),
      password: Yup['string']()[_0x974c05(0x99)]()[_0x974c05(0x7c)](0x5)
    });
    try {
      await _0x14af91[_0x974c05(0x86)]({
        email: _0x510af9,
        password: _0x1bc474,
        name: _0x28a862
      });
    } catch (_0xd78f0a) {
      throw new AppError_1['default'](_0xd78f0a[_0x974c05(0x7e)]);
    }
    const _0x23a0ba = await User_1[_0x974c05(0x85)][_0x974c05(0x9f)](
      {
        email: _0x510af9,
        password: _0x1bc474,
        name: _0x28a862,
        companyId: _0x4b5e83,
        profile: profile,
        startWork: _0x36ad25,
        endWork: _0x2e1fce,
        whatsappId: _0x47910c || null,
        allTicket: _0x504abc,
        defaultTheme: _0x3a6d57,
        defaultMenu: _0x5fd5da,
        allowGroup: _0x4c993c,
        allHistoric: _0x27795a,
        allUserChat: _0x49b336,
        userClosePendingTicket: _0x8b70d4,
        showDashboard: _0x5041e7,
        defaultTicketsManagerWidth: defaultTicketsManagerWidth
      },
      { include: [_0x974c05(0x8a), _0x974c05(0xa1)] }
    );
    await _0x23a0ba['$set'](_0x974c05(0x8a), queueIds),
      await _0x23a0ba[_0x974c05(0x9b)]();
    const _0x404a44 = (0x0, SerializeUser_1['SerializeUser'])(_0x23a0ba);
    return _0x404a44;
  };
function a635_0x358b(_0x2b00c2, _0x7d94aa) {
  const _0x40a030 = a635_0x40a0();
  return (
    (a635_0x358b = function (_0x358b6e, _0x408249) {
      _0x358b6e = _0x358b6e - 0x7c;
      let _0x50fcdc = _0x40a030[_0x358b6e];
      return _0x50fcdc;
    }),
    a635_0x358b(_0x2b00c2, _0x7d94aa)
  );
}
exports[a635_0x768ee8(0x85)] = CreateUserService;
