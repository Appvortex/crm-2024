'use strict';
const a459_0x2bb0f7 = a459_0x3d35;
(function (_0x50b62a, _0x973478) {
  const _0x50a108 = a459_0x3d35,
    _0x5cc47a = _0x50b62a();
  while (!![]) {
    try {
      const _0x2c5f9a =
        parseInt(_0x50a108(0x18a)) / 0x1 +
        (parseInt(_0x50a108(0x17f)) / 0x2) *
          (-parseInt(_0x50a108(0x184)) / 0x3) +
        -parseInt(_0x50a108(0x17d)) / 0x4 +
        parseInt(_0x50a108(0x188)) / 0x5 +
        (parseInt(_0x50a108(0x189)) / 0x6) *
          (parseInt(_0x50a108(0x17c)) / 0x7) +
        (-parseInt(_0x50a108(0x180)) / 0x8) *
          (parseInt(_0x50a108(0x187)) / 0x9) +
        parseInt(_0x50a108(0x17b)) / 0xa;
      if (_0x2c5f9a === _0x973478) break;
      else _0x5cc47a['push'](_0x5cc47a['shift']());
    } catch (_0x693bf8) {
      _0x5cc47a['push'](_0x5cc47a['shift']());
    }
  }
})(a459_0x2235, 0xdd4c0);
function a459_0x3d35(_0x2added, _0x2a922f) {
  const _0x2235ab = a459_0x2235();
  return (
    (a459_0x3d35 = function (_0x3d351d, _0xfd2766) {
      _0x3d351d = _0x3d351d - 0x174;
      let _0x2241f3 = _0x2235ab[_0x3d351d];
      return _0x2241f3;
    }),
    a459_0x3d35(_0x2added, _0x2a922f)
  );
}
var __importDefault =
  (this && this[a459_0x2bb0f7(0x179)]) ||
  function (_0x37fe7b) {
    return _0x37fe7b && _0x37fe7b['__esModule']
      ? _0x37fe7b
      : { default: _0x37fe7b };
  };
Object[a459_0x2bb0f7(0x175)](exports, '__esModule', { value: !![] });
const AppError_1 = __importDefault(require('../../errors/AppError')),
  Company_1 = __importDefault(require(a459_0x2bb0f7(0x186))),
  Setting_1 = __importDefault(require('../../models/Setting')),
  User_1 = __importDefault(require('../../models/User')),
  UpdateCompanyService = async _0x37f43b => {
    const _0x3cf768 = a459_0x2bb0f7,
      _0x5527fb = await Company_1[_0x3cf768(0x176)][_0x3cf768(0x181)](
        _0x37f43b['id']
      ),
      {
        name: _0x419d06,
        phone: _0x4d3e2b,
        email: _0x87d138,
        status: _0x236d47,
        planId: _0x12dfea,
        campaignsEnabled: _0x52dd95,
        dueDate: _0x48d1bd,
        recurrence: _0x5b6f4e,
        document: _0x29a54f,
        paymentMethod: _0x5a01e8,
        password: _0x52aaaf
      } = _0x37f43b;
    if (!_0x5527fb) throw new AppError_1['default'](_0x3cf768(0x177), 0x194);
    const _0x58ed05 = await User_1[_0x3cf768(0x176)][_0x3cf768(0x174)]({
      where: { companyId: _0x5527fb['id'], email: _0x87d138 }
    });
    if (
      _0x58ed05 &&
      _0x58ed05[_0x3cf768(0x178)] !== _0x5527fb[_0x3cf768(0x178)]
    )
      throw new AppError_1[_0x3cf768(0x176)](_0x3cf768(0x182), 0x194);
    const _0x1664ce = await User_1[_0x3cf768(0x176)][_0x3cf768(0x174)]({
      where: { companyId: _0x5527fb['id'], email: _0x5527fb[_0x3cf768(0x178)] }
    });
    if (!_0x1664ce)
      throw new AppError_1[_0x3cf768(0x176)](_0x3cf768(0x183), 0x194);
    await _0x1664ce['update']({ email: _0x87d138, password: _0x52aaaf }),
      await _0x5527fb[_0x3cf768(0x17e)]({
        name: _0x419d06,
        phone: _0x4d3e2b,
        email: _0x87d138,
        status: _0x236d47,
        planId: _0x12dfea,
        dueDate: _0x48d1bd,
        recurrence: _0x5b6f4e,
        document: _0x29a54f,
        paymentMethod: _0x5a01e8
      });
    if (_0x37f43b[_0x3cf768(0x185)] !== undefined) {
      const [_0x2f61b8, _0xf43094] = await Setting_1[_0x3cf768(0x176)][
        _0x3cf768(0x17a)
      ]({
        where: { companyId: _0x5527fb['id'], key: _0x3cf768(0x185) },
        defaults: {
          companyId: _0x5527fb['id'],
          key: _0x3cf768(0x185),
          value: '' + _0x52dd95
        }
      });
      !_0xf43094 &&
        (await _0x2f61b8[_0x3cf768(0x17e)]({ value: '' + _0x52dd95 }));
    }
    return _0x5527fb;
  };
exports[a459_0x2bb0f7(0x176)] = UpdateCompanyService;
function a459_0x2235() {
  const _0x5d0bff = [
    'ERR_NO_COMPANY_FOUND',
    'email',
    '__importDefault',
    'findOrCreate',
    '8644960KWMgFH',
    '3681174xyxCTY',
    '5145280rqqVca',
    'update',
    '4pVWXYM',
    '2806072LqKVor',
    'findByPk',
    'Usuario\x20ya\x20existe\x20con\x20ese\x20correo\x20electrónico!',
    'ERR_NO_USER_FOUND',
    '279921CsCPiJ',
    'campaignsEnabled',
    '../../models/Company',
    '27XWJQIO',
    '1517485rNlSNn',
    '6cwFonw',
    '1737768YbwkGc',
    'findOne',
    'defineProperty',
    'default'
  ];
  a459_0x2235 = function () {
    return _0x5d0bff;
  };
  return a459_0x2235();
}
