'use strict';
function a480_0x4911() {
  const _0x5771f2 = [
    '84ZNOVOw',
    '4zuhopQ',
    'replace',
    '__esModule',
    '81qBvFMk',
    'emit',
    '1395823KCfOYa',
    'company-',
    '4474722VaQyGI',
    'companyId',
    '__importDefault',
    'create',
    'findOne',
    '../../models/Contact',
    '51660986UqUhkS',
    '-contact',
    '7nedZBo',
    '../../libs/socket',
    '1315570HqCiJM',
    'default',
    '675838FHKFlw',
    'update',
    '156EoGrWG',
    '5dAWfXx',
    '10839656IKvEse',
    'defineProperty',
    '59428TqZyEW'
  ];
  a480_0x4911 = function () {
    return _0x5771f2;
  };
  return a480_0x4911();
}
const a480_0x244028 = a480_0x107a;
(function (_0x58fd41, _0x498b95) {
  const _0x40a777 = a480_0x107a,
    _0x1bc77f = _0x58fd41();
  while (!![]) {
    try {
      const _0x505383 =
        (parseInt(_0x40a777(0xa1)) / 0x1) * (parseInt(_0x40a777(0xa9)) / 0x2) +
        (parseInt(_0x40a777(0xa3)) / 0x3) * (-parseInt(_0x40a777(0xa7)) / 0x4) +
        (parseInt(_0x40a777(0xa4)) / 0x5) * (parseInt(_0x40a777(0xb0)) / 0x6) +
        (parseInt(_0x40a777(0x9d)) / 0x7) * (parseInt(_0x40a777(0xa5)) / 0x8) +
        (-parseInt(_0x40a777(0xac)) / 0x9) *
          (-parseInt(_0x40a777(0x9f)) / 0xa) +
        (-parseInt(_0x40a777(0xae)) / 0xb) *
          (-parseInt(_0x40a777(0xa8)) / 0xc) +
        -parseInt(_0x40a777(0x9b)) / 0xd;
      if (_0x505383 === _0x498b95) break;
      else _0x1bc77f['push'](_0x1bc77f['shift']());
    } catch (_0x49fc30) {
      _0x1bc77f['push'](_0x1bc77f['shift']());
    }
  }
})(a480_0x4911, 0xbdfd6);
function a480_0x107a(_0x157ad0, _0x157608) {
  const _0x491118 = a480_0x4911();
  return (
    (a480_0x107a = function (_0x107a0c, _0x275450) {
      _0x107a0c = _0x107a0c - 0x9a;
      let _0x2fb8df = _0x491118[_0x107a0c];
      return _0x2fb8df;
    }),
    a480_0x107a(_0x157ad0, _0x157608)
  );
}
var __importDefault =
  (this && this[a480_0x244028(0xb2)]) ||
  function (_0x48b7e8) {
    const _0x4aefa0 = a480_0x244028;
    return _0x48b7e8 && _0x48b7e8[_0x4aefa0(0xab)]
      ? _0x48b7e8
      : { default: _0x48b7e8 };
  };
Object[a480_0x244028(0xa6)](exports, a480_0x244028(0xab), { value: !![] });
const socket_1 = require(a480_0x244028(0x9e)),
  Contact_1 = __importDefault(require(a480_0x244028(0x9a))),
  CreateOrUpdateContactServiceForImport = async ({
    name: _0x42d5d5,
    number: _0x1e98e9,
    profilePicUrl: _0x5f2bdc,
    isGroup: _0x3283fd,
    email: email = '',
    commandBot: commandBot = '',
    extraInfo: extraInfo = [],
    companyId: _0xfb0ba5
  }) => {
    const _0x3fa462 = a480_0x244028,
      _0x3153af = _0x3283fd
        ? _0x1e98e9
        : _0x1e98e9[_0x3fa462(0xaa)](/[^0-9]/g, ''),
      _0xe2b69b = (0x0, socket_1['getIO'])();
    let _0x1b9248;
    _0x1b9248 = await Contact_1[_0x3fa462(0xa0)][_0x3fa462(0xb4)]({
      where: { number: _0x3153af, companyId: _0xfb0ba5 }
    });
    if (_0x1b9248) {
      if (_0x1b9248[_0x3fa462(0xb1)] === null)
        await _0x1b9248[_0x3fa462(0xa2)]({
          name: _0x42d5d5,
          profilePicUrl: _0x5f2bdc,
          companyId: _0xfb0ba5
        });
      else
        await _0x1b9248['update']({
          name: _0x42d5d5,
          profilePicUrl: _0x5f2bdc
        });
      _0xe2b69b[_0x3fa462(0xad)](
        _0x3fa462(0xaf) + _0xfb0ba5 + _0x3fa462(0x9c),
        { action: _0x3fa462(0xa2), contact: _0x1b9248 }
      );
    } else
      (_0x1b9248 = await Contact_1[_0x3fa462(0xa0)]['create']({
        name: _0x42d5d5,
        companyId: _0xfb0ba5,
        number: _0x3153af,
        profilePicUrl: _0x5f2bdc,
        email: email,
        commandBot: commandBot,
        isGroup: _0x3283fd,
        extraInfo: extraInfo
      })),
        _0xe2b69b[_0x3fa462(0xad)]('company-' + _0xfb0ba5 + _0x3fa462(0x9c), {
          action: _0x3fa462(0xb3),
          contact: _0x1b9248
        });
    return _0x1b9248;
  };
exports['default'] = CreateOrUpdateContactServiceForImport;
