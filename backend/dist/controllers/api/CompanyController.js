'use strict';
const a45_0x464ce1 = a45_0x2987;
(function (_0x47f8c5, _0x3a9bd5) {
  const _0x1e7e8c = a45_0x2987,
    _0x32440e = _0x47f8c5();
  while (!![]) {
    try {
      const _0x935b6f =
        -parseInt(_0x1e7e8c(0x172)) / 0x1 +
        parseInt(_0x1e7e8c(0x192)) / 0x2 +
        parseInt(_0x1e7e8c(0x195)) / 0x3 +
        (-parseInt(_0x1e7e8c(0x1a3)) / 0x4) *
          (parseInt(_0x1e7e8c(0x186)) / 0x5) +
        (parseInt(_0x1e7e8c(0x197)) / 0x6) *
          (-parseInt(_0x1e7e8c(0x19f)) / 0x7) +
        -parseInt(_0x1e7e8c(0x180)) / 0x8 +
        (parseInt(_0x1e7e8c(0x196)) / 0x9) * (parseInt(_0x1e7e8c(0x190)) / 0xa);
      if (_0x935b6f === _0x3a9bd5) break;
      else _0x32440e['push'](_0x32440e['shift']());
    } catch (_0x53b90d) {
      _0x32440e['push'](_0x32440e['shift']());
    }
  }
})(a45_0x2a62, 0x58923);
var __createBinding =
    (this && this[a45_0x464ce1(0x171)]) ||
    (Object['create']
      ? function (_0x10b26f, _0x4937a8, _0x3a64fe, _0x2e7125) {
          const _0x49ec59 = a45_0x464ce1;
          if (_0x2e7125 === undefined) _0x2e7125 = _0x3a64fe;
          var _0x44d4b3 = Object[_0x49ec59(0x16f)](_0x4937a8, _0x3a64fe);
          (!_0x44d4b3 ||
            (_0x49ec59(0x181) in _0x44d4b3
              ? !_0x4937a8[_0x49ec59(0x191)]
              : _0x44d4b3[_0x49ec59(0x198)] || _0x44d4b3[_0x49ec59(0x16e)])) &&
            (_0x44d4b3 = {
              enumerable: !![],
              get: function () {
                return _0x4937a8[_0x3a64fe];
              }
            }),
            Object[_0x49ec59(0x17a)](_0x10b26f, _0x2e7125, _0x44d4b3);
        }
      : function (_0x29f6f7, _0x2d7903, _0x329e0b, _0x9065d6) {
          if (_0x9065d6 === undefined) _0x9065d6 = _0x329e0b;
          _0x29f6f7[_0x9065d6] = _0x2d7903[_0x329e0b];
        }),
  __setModuleDefault =
    (this && this[a45_0x464ce1(0x18b)]) ||
    (Object[a45_0x464ce1(0x18a)]
      ? function (_0x1a6274, _0x1a1f09) {
          const _0x165a2f = a45_0x464ce1;
          Object[_0x165a2f(0x17a)](_0x1a6274, _0x165a2f(0x178), {
            enumerable: !![],
            value: _0x1a1f09
          });
        }
      : function (_0x5863bd, _0x521d15) {
          const _0x3dbd5f = a45_0x464ce1;
          _0x5863bd[_0x3dbd5f(0x178)] = _0x521d15;
        }),
  __importStar =
    (this && this[a45_0x464ce1(0x1a6)]) ||
    function (_0x328ddc) {
      const _0x395b92 = a45_0x464ce1;
      if (_0x328ddc && _0x328ddc[_0x395b92(0x191)]) return _0x328ddc;
      var _0x1a64de = {};
      if (_0x328ddc != null) {
        for (var _0x3ff6e6 in _0x328ddc)
          if (
            _0x3ff6e6 !== _0x395b92(0x178) &&
            Object['prototype']['hasOwnProperty']['call'](_0x328ddc, _0x3ff6e6)
          )
            __createBinding(_0x1a64de, _0x328ddc, _0x3ff6e6);
      }
      return __setModuleDefault(_0x1a64de, _0x328ddc), _0x1a64de;
    },
  __importDefault =
    (this && this[a45_0x464ce1(0x16d)]) ||
    function (_0x2a2926) {
      const _0x5d56d5 = a45_0x464ce1;
      return _0x2a2926 && _0x2a2926[_0x5d56d5(0x191)]
        ? _0x2a2926
        : { default: _0x2a2926 };
    };
Object[a45_0x464ce1(0x17a)](exports, a45_0x464ce1(0x191), { value: !![] }),
  (exports['remove'] =
    exports[a45_0x464ce1(0x18d)] =
    exports[a45_0x464ce1(0x182)] =
    exports[a45_0x464ce1(0x184)] =
    exports[a45_0x464ce1(0x185)] =
    exports[a45_0x464ce1(0x17e)] =
    exports[a45_0x464ce1(0x19e)] =
      void 0x0);
const Yup = __importStar(require(a45_0x464ce1(0x177))),
  sequelize_1 = require(a45_0x464ce1(0x187)),
  AppError_1 = __importDefault(require(a45_0x464ce1(0x19b))),
  Company_1 = __importDefault(require(a45_0x464ce1(0x174))),
  ListCompaniesService_1 = __importDefault(
    require('../../services/CompanyService/ListCompaniesService')
  ),
  CreateCompanyService_1 = __importDefault(require(a45_0x464ce1(0x18c))),
  UpdateCompanyService_1 = __importDefault(require(a45_0x464ce1(0x17f))),
  ShowCompanyService_1 = __importDefault(
    require('../../services/CompanyService/ShowCompanyService')
  ),
  UpdateSchedulesService_1 = __importDefault(require(a45_0x464ce1(0x176))),
  DeleteCompanyService_1 = __importDefault(require(a45_0x464ce1(0x17d))),
  FindAllCompaniesService_1 = __importDefault(require(a45_0x464ce1(0x17b))),
  index = async (_0x4b2d72, _0x46296a) => {
    const _0x573e98 = a45_0x464ce1,
      { searchParam: _0x1a086c, pageNumber: _0x173940 } =
        _0x4b2d72[_0x573e98(0x19c)],
      {
        companies: _0x1be6c2,
        count: _0x2a8e16,
        hasMore: _0x10dbfc
      } = await (0x0, ListCompaniesService_1[_0x573e98(0x178)])({
        searchParam: _0x1a086c,
        pageNumber: _0x173940
      });
    return _0x46296a[_0x573e98(0x183)]({
      companies: _0x1be6c2,
      count: _0x2a8e16,
      hasMore: _0x10dbfc
    });
  };
function a45_0x2a62() {
  const _0x21a3d9 = [
    'sequelize',
    'Check-unique-name',
    'max',
    'create',
    '__setModuleDefault',
    '../../services/CompanyService/CreateCompanyService',
    'updateSchedules',
    'findOne',
    'string',
    '250OqAfBm',
    '__esModule',
    '603414LmHtAK',
    'params',
    'body',
    '930327iZnMqw',
    '665073kcHOUD',
    '1980yZszPN',
    'writable',
    'Check-unique-document',
    'remove',
    '../../errors/AppError',
    'query',
    'validate',
    'index',
    '12005YpBQZc',
    'test',
    'ERR_COMPANY_INVALID_DOCUMENT',
    'message',
    '278444qxjmZz',
    'object',
    'status',
    '__importStar',
    'ERR_COMPANY_INVALID_NAME',
    'number',
    '__importDefault',
    'configurable',
    'getOwnPropertyDescriptor',
    'ERR_COMPANY_NAME_ALREADY_EXISTS',
    '__createBinding',
    '516376CoKAsc',
    'min',
    '../../models/Company',
    'required',
    '../../services/CompanyService/UpdateSchedulesService',
    'yup',
    'default',
    'shape',
    'defineProperty',
    '../../services/CompanyService/FindAllCompaniesService',
    'ERR_COMPANY_DOCUMENT_ALREADY_EXISTS',
    '../../services/CompanyService/DeleteCompanyService',
    'store',
    '../../services/CompanyService/UpdateCompanyService',
    '4771696nqRetz',
    'get',
    'update',
    'json',
    'list',
    'show',
    '30ZVTTtl'
  ];
  a45_0x2a62 = function () {
    return _0x21a3d9;
  };
  return a45_0x2a62();
}
exports[a45_0x464ce1(0x19e)] = index;
const store = async (_0x2e3250, _0x3ecf21) => {
  const _0xaf73fd = a45_0x464ce1,
    _0x56c1de = _0x2e3250[_0xaf73fd(0x194)],
    _0x160f73 = Yup[_0xaf73fd(0x1a4)]()['shape']({
      name: Yup[_0xaf73fd(0x18f)]()
        [_0xaf73fd(0x175)]()
        ['min'](0x2, 'ERR_COMPANY_INVALID_NAME')
        [_0xaf73fd(0x175)](_0xaf73fd(0x1a7))
        ['test'](_0xaf73fd(0x188), _0xaf73fd(0x170), async _0x19f9ee => {
          const _0x5ba6f5 = _0xaf73fd;
          if (_0x19f9ee) {
            const _0x4ee03a = await Company_1[_0x5ba6f5(0x178)][
              _0x5ba6f5(0x18e)
            ]({ where: { name: _0x19f9ee } });
            return !_0x4ee03a;
          }
          return ![];
        }),
      document: Yup[_0xaf73fd(0x18f)]()
        [_0xaf73fd(0x173)](0xb, 'ERR_COMPANY_INVALID_DOCUMENT')
        [_0xaf73fd(0x189)](0xe, _0xaf73fd(0x1a1))
        [_0xaf73fd(0x175)](_0xaf73fd(0x1a1))
        ['test'](_0xaf73fd(0x199), _0xaf73fd(0x17c), async _0x242f86 => {
          const _0x365102 = _0xaf73fd;
          if (_0x242f86) {
            const _0x1333e6 = await Company_1[_0x365102(0x178)][
              _0x365102(0x18e)
            ]({ where: { document: _0x242f86 } });
            return !_0x1333e6;
          }
          return ![];
        }),
      phone: Yup[_0xaf73fd(0x18f)](),
      email: Yup[_0xaf73fd(0x18f)](),
      planId: Yup[_0xaf73fd(0x1a8)]()[_0xaf73fd(0x175)](),
      password: Yup['string']()[_0xaf73fd(0x175)]()[_0xaf73fd(0x173)](0x5)
    });
  try {
    await _0x160f73[_0xaf73fd(0x19d)](_0x56c1de);
  } catch (_0x40f374) {
    throw new AppError_1[_0xaf73fd(0x178)](_0x40f374[_0xaf73fd(0x1a2)]);
  }
  const _0x58d900 = await (0x0, CreateCompanyService_1[_0xaf73fd(0x178)])(
    _0x56c1de
  );
  return _0x3ecf21[_0xaf73fd(0x1a5)](0xc8)['json'](_0x58d900);
};
function a45_0x2987(_0x812f4e, _0x49c223) {
  const _0x2a62e1 = a45_0x2a62();
  return (
    (a45_0x2987 = function (_0x29871a, _0x3df220) {
      _0x29871a = _0x29871a - 0x16d;
      let _0x3b73d7 = _0x2a62e1[_0x29871a];
      return _0x3b73d7;
    }),
    a45_0x2987(_0x812f4e, _0x49c223)
  );
}
exports[a45_0x464ce1(0x17e)] = store;
const show = async (_0x74bad7, _0x321c3c) => {
  const _0x2a287a = a45_0x464ce1,
    { id: _0x1d2fef } = _0x74bad7[_0x2a287a(0x193)],
    _0x1df54f = await (0x0, ShowCompanyService_1[_0x2a287a(0x178)])(_0x1d2fef);
  return _0x321c3c['status'](0xc8)['json'](_0x1df54f);
};
exports['show'] = show;
const list = async (_0x15bd19, _0x26ad48) => {
  const _0x5925cc = a45_0x464ce1,
    _0x27476b = await (0x0, FindAllCompaniesService_1[_0x5925cc(0x178)])();
  return _0x26ad48[_0x5925cc(0x1a5)](0xc8)['json'](_0x27476b);
};
exports[a45_0x464ce1(0x184)] = list;
const update = async (_0x13ff41, _0x442480) => {
  const _0x31787a = a45_0x464ce1,
    _0x6d40 = _0x13ff41[_0x31787a(0x194)],
    { id: _0x38923b } = _0x13ff41[_0x31787a(0x193)],
    _0x45a0f6 = Yup[_0x31787a(0x1a4)]()[_0x31787a(0x179)]({
      name: Yup['string']()
        [_0x31787a(0x175)]()
        [_0x31787a(0x173)](0x2, 'ERR_COMPANY_INVALID_NAME')
        [_0x31787a(0x175)]('ERR_COMPANY_INVALID_NAME')
        [_0x31787a(0x1a0)](
          _0x31787a(0x188),
          _0x31787a(0x170),
          async _0x18a3c7 => {
            const _0x104419 = _0x31787a;
            if (_0x18a3c7) {
              const _0x2e85f2 = await Company_1[_0x104419(0x178)]['findOne']({
                where: {
                  name: _0x18a3c7,
                  id: { [sequelize_1['Op']['ne']]: _0x6d40['id'] }
                }
              });
              return !_0x2e85f2;
            }
            return ![];
          }
        ),
      phone: Yup[_0x31787a(0x18f)](),
      email: Yup['string'](),
      document: Yup['string']()
        [_0x31787a(0x173)](0xb, _0x31787a(0x1a1))
        [_0x31787a(0x189)](0xe, _0x31787a(0x1a1))
        [_0x31787a(0x175)](_0x31787a(0x1a1))
        ['test'](_0x31787a(0x199), _0x31787a(0x17c), async _0x1f6e60 => {
          const _0x2b3a31 = _0x31787a;
          if (_0x1f6e60) {
            const _0x532b0c = await Company_1[_0x2b3a31(0x178)][
              _0x2b3a31(0x18e)
            ]({
              where: {
                document: _0x1f6e60,
                id: { [sequelize_1['Op']['ne']]: _0x6d40['id'] }
              }
            });
            return !_0x532b0c;
          }
          return ![];
        }),
      planId: Yup['number']()[_0x31787a(0x175)]()
    });
  try {
    await _0x45a0f6[_0x31787a(0x19d)](_0x6d40);
  } catch (_0x140d23) {
    throw new AppError_1[_0x31787a(0x178)](_0x140d23[_0x31787a(0x1a2)]);
  }
  const _0x3b22d7 = await (0x0, UpdateCompanyService_1['default'])({
    id: _0x38923b,
    ..._0x6d40
  });
  return _0x442480[_0x31787a(0x1a5)](0xc8)['json'](_0x3b22d7);
};
exports['update'] = update;
const updateSchedules = async (_0x47186b, _0x3d6a5b) => {
  const _0x21d27b = a45_0x464ce1,
    { schedules: _0x2ba6cc } = _0x47186b[_0x21d27b(0x194)],
    { id: _0x4c29db } = _0x47186b[_0x21d27b(0x193)],
    _0x401c2b = await (0x0, UpdateSchedulesService_1['default'])({
      id: _0x4c29db,
      schedules: _0x2ba6cc
    });
  return _0x3d6a5b[_0x21d27b(0x1a5)](0xc8)[_0x21d27b(0x183)](_0x401c2b);
};
exports[a45_0x464ce1(0x18d)] = updateSchedules;
const remove = async (_0x36593a, _0xd15563) => {
  const _0x55b5cc = a45_0x464ce1,
    { id: _0x30b443 } = _0x36593a[_0x55b5cc(0x193)],
    _0x224398 = await (0x0, DeleteCompanyService_1[_0x55b5cc(0x178)])(
      _0x30b443
    );
  return _0xd15563[_0x55b5cc(0x1a5)](0xc8)[_0x55b5cc(0x183)](_0x224398);
};
exports[a45_0x464ce1(0x19a)] = remove;
