'use strict';
const a577_0x20c316 = a577_0x537d;
function a577_0x2529() {
  const _0x48e254 = [
    'name',
    '2833152bUuADL',
    'ERR_NO_SCHEDULE_FOUND',
    '../../models/Contact',
    'findByPk',
    'companyId',
    '4DrJPyq',
    '../../models/Schedule',
    '1838940zqtPhR',
    '2WBuxEt',
    '105VoiYhJ',
    '__importDefault',
    'default',
    '__esModule',
    'No\x20es\x20posible\x20eliminar\x20el\x20registro\x20de\x20otra\x20empresa.',
    '867830AcjxaO',
    '10LpZpUL',
    'user',
    '4015wTMUpn',
    '../../models/User',
    '10896ZqaleT',
    '573123GsCNaZ',
    '466254QURbIO',
    '129296pfvYrn',
    'contact'
  ];
  a577_0x2529 = function () {
    return _0x48e254;
  };
  return a577_0x2529();
}
function a577_0x537d(_0x5873cc, _0x5f5905) {
  const _0x2529fe = a577_0x2529();
  return (
    (a577_0x537d = function (_0x537d8d, _0xbf2274) {
      _0x537d8d = _0x537d8d - 0x12c;
      let _0x158662 = _0x2529fe[_0x537d8d];
      return _0x158662;
    }),
    a577_0x537d(_0x5873cc, _0x5f5905)
  );
}
(function (_0x5584f5, _0x3dda90) {
  const _0x41e608 = a577_0x537d,
    _0x2c9c2a = _0x5584f5();
  while (!![]) {
    try {
      const _0x45aa79 =
        -parseInt(_0x41e608(0x130)) / 0x1 +
        (parseInt(_0x41e608(0x13d)) / 0x2) *
          (parseInt(_0x41e608(0x13c)) / 0x3) +
        (parseInt(_0x41e608(0x13a)) / 0x4) *
          (-parseInt(_0x41e608(0x143)) / 0x5) +
        parseInt(_0x41e608(0x135)) / 0x6 +
        (-parseInt(_0x41e608(0x13e)) / 0x7) *
          (parseInt(_0x41e608(0x132)) / 0x8) +
        (-parseInt(_0x41e608(0x131)) / 0x9) *
          (-parseInt(_0x41e608(0x144)) / 0xa) +
        (-parseInt(_0x41e608(0x12d)) / 0xb) *
          (-parseInt(_0x41e608(0x12f)) / 0xc);
      if (_0x45aa79 === _0x3dda90) break;
      else _0x2c9c2a['push'](_0x2c9c2a['shift']());
    } catch (_0x1405f2) {
      _0x2c9c2a['push'](_0x2c9c2a['shift']());
    }
  }
})(a577_0x2529, 0x7502f);
var __importDefault =
  (this && this[a577_0x20c316(0x13f)]) ||
  function (_0x2fa9f7) {
    const _0x257422 = a577_0x20c316;
    return _0x2fa9f7 && _0x2fa9f7[_0x257422(0x141)]
      ? _0x2fa9f7
      : { default: _0x2fa9f7 };
  };
Object['defineProperty'](exports, a577_0x20c316(0x141), { value: !![] });
const Schedule_1 = __importDefault(require(a577_0x20c316(0x13b))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  Contact_1 = __importDefault(require(a577_0x20c316(0x137))),
  User_1 = __importDefault(require(a577_0x20c316(0x12e))),
  ScheduleService = async (_0x1a391e, _0x4b5ca1) => {
    const _0x1dc469 = a577_0x20c316,
      _0x4c50fd = await Schedule_1[_0x1dc469(0x140)][_0x1dc469(0x138)](
        _0x1a391e,
        {
          include: [
            {
              model: Contact_1[_0x1dc469(0x140)],
              as: _0x1dc469(0x133),
              attributes: ['id', _0x1dc469(0x134)]
            },
            {
              model: User_1[_0x1dc469(0x140)],
              as: _0x1dc469(0x12c),
              attributes: ['id', _0x1dc469(0x134)]
            }
          ]
        }
      );
    if (_0x4c50fd?.[_0x1dc469(0x139)] !== _0x4b5ca1)
      throw new AppError_1[_0x1dc469(0x140)](_0x1dc469(0x142));
    if (!_0x4c50fd)
      throw new AppError_1[_0x1dc469(0x140)](_0x1dc469(0x136), 0x194);
    return _0x4c50fd;
  };
exports[a577_0x20c316(0x140)] = ScheduleService;
