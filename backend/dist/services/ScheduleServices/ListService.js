'use strict';
const a576_0x3e6aa0 = a576_0x6467;
(function (_0x4034cd, _0x531bf9) {
  const _0x1d5b9d = a576_0x6467,
    _0x4f3946 = _0x4034cd();
  while (!![]) {
    try {
      const _0x5cf63f =
        (parseInt(_0x1d5b9d(0x1dc)) / 0x1) *
          (parseInt(_0x1d5b9d(0x1cd)) / 0x2) +
        (-parseInt(_0x1d5b9d(0x1d4)) / 0x3) *
          (-parseInt(_0x1d5b9d(0x1da)) / 0x4) +
        -parseInt(_0x1d5b9d(0x1d3)) / 0x5 +
        (parseInt(_0x1d5b9d(0x1d8)) / 0x6) *
          (-parseInt(_0x1d5b9d(0x1de)) / 0x7) +
        (parseInt(_0x1d5b9d(0x1e0)) / 0x8) *
          (parseInt(_0x1d5b9d(0x1d2)) / 0x9) +
        parseInt(_0x1d5b9d(0x1ce)) / 0xa +
        -parseInt(_0x1d5b9d(0x1e4)) / 0xb;
      if (_0x5cf63f === _0x531bf9) break;
      else _0x4f3946['push'](_0x4f3946['shift']());
    } catch (_0x372dd3) {
      _0x4f3946['push'](_0x4f3946['shift']());
    }
  }
})(a576_0x2119, 0xb5f3c);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x40ddc3) {
    const _0x14c751 = a576_0x6467;
    return _0x40ddc3 && _0x40ddc3[_0x14c751(0x1d1)]
      ? _0x40ddc3
      : { default: _0x40ddc3 };
  };
function a576_0x6467(_0x117387, _0x112252) {
  const _0x21198b = a576_0x2119();
  return (
    (a576_0x6467 = function (_0x6467e0, _0x5797f7) {
      _0x6467e0 = _0x6467e0 - 0x1cc;
      let _0x9d21d6 = _0x21198b[_0x6467e0];
      return _0x9d21d6;
    }),
    a576_0x6467(_0x117387, _0x112252)
  );
}
function a576_0x2119() {
  const _0xb09e7a = [
    'unaccent',
    'createdAt',
    '8226grcuFr',
    'contact',
    '4495484NUayMq',
    '../../models/User',
    '330399SzrMpd',
    'default',
    '2457BdXqcr',
    'where',
    '374456OHAbXq',
    'sequelize',
    'user',
    'name',
    '9958465cmOFnx',
    'length',
    'Schedule.body',
    'DESC',
    'LOWER',
    'contact.name',
    'defineProperty',
    'urlPicture',
    'LIKE',
    '6LtYLSt',
    '10716600yeuDfa',
    'col',
    'companyId',
    '__esModule',
    '45mCFtNr',
    '6444755tkUkxz',
    '3TnEGkf',
    '../../models/Contact'
  ];
  a576_0x2119 = function () {
    return _0xb09e7a;
  };
  return a576_0x2119();
}
Object[a576_0x3e6aa0(0x1ea)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a576_0x3e6aa0(0x1e1)),
  Contact_1 = __importDefault(require(a576_0x3e6aa0(0x1d5))),
  Schedule_1 = __importDefault(require('../../models/Schedule')),
  User_1 = __importDefault(require(a576_0x3e6aa0(0x1db))),
  ListService = async ({
    searchParam: _0x5c1211,
    contactId: contactId = '',
    userId: userId = '',
    pageNumber: pageNumber = '1',
    companyId: _0x231073
  }) => {
    const _0x7ace9a = a576_0x3e6aa0;
    let _0x28c60d = {};
    const _0x3ccbca = 0x14,
      _0x142c85 = _0x3ccbca * (+pageNumber - 0x1);
    _0x5c1211 &&
      (_0x28c60d = {
        [sequelize_1['Op']['or']]: [
          {
            '$Schedule.body$': (0x0, sequelize_1[_0x7ace9a(0x1df)])(
              (0x0, sequelize_1['fn'])(
                _0x7ace9a(0x1e8),
                (0x0, sequelize_1[_0x7ace9a(0x1cf)])(_0x7ace9a(0x1e6))
              ),
              _0x7ace9a(0x1cc),
              '%' + _0x5c1211['toLowerCase']() + '%'
            )
          },
          {
            '$Contact.name$': (0x0, sequelize_1[_0x7ace9a(0x1df)])(
              (0x0, sequelize_1['fn'])(
                'LOWER',
                (0x0, sequelize_1['fn'])(
                  _0x7ace9a(0x1d6),
                  (0x0, sequelize_1[_0x7ace9a(0x1cf)])(_0x7ace9a(0x1e9))
                )
              ),
              _0x7ace9a(0x1cc),
              '%' + _0x5c1211['toLowerCase']() + '%'
            )
          }
        ]
      });
    contactId !== '' && (_0x28c60d = { ..._0x28c60d, contactId: contactId });
    userId !== '' && (_0x28c60d = { ..._0x28c60d, userId: userId });
    _0x28c60d = {
      ..._0x28c60d,
      companyId: { [sequelize_1['Op']['eq']]: _0x231073 }
    };
    const { count: _0xae3e75, rows: _0x3767df } = await Schedule_1['default'][
        'findAndCountAll'
      ]({
        where: _0x28c60d,
        limit: _0x3ccbca,
        offset: _0x142c85,
        order: [[_0x7ace9a(0x1d7), _0x7ace9a(0x1e7)]],
        include: [
          {
            model: Contact_1[_0x7ace9a(0x1dd)],
            as: _0x7ace9a(0x1d9),
            attributes: [
              'id',
              _0x7ace9a(0x1e3),
              _0x7ace9a(0x1d0),
              _0x7ace9a(0x1eb)
            ]
          },
          {
            model: User_1[_0x7ace9a(0x1dd)],
            as: _0x7ace9a(0x1e2),
            attributes: ['id', _0x7ace9a(0x1e3)]
          }
        ]
      }),
      _0x20826b = _0xae3e75 > _0x142c85 + _0x3767df[_0x7ace9a(0x1e5)];
    return { schedules: _0x3767df, count: _0xae3e75, hasMore: _0x20826b };
  };
exports[a576_0x3e6aa0(0x1dd)] = ListService;
