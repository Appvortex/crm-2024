'use strict';
function a425_0x3b2d() {
  const _0x196a7a = [
    'lodash',
    '40tstSji',
    'scheduledAt',
    'LIKE',
    'DESC',
    '__importDefault',
    '../../models/Campaign',
    'trim',
    'where',
    '521349toKNwW',
    'defineProperty',
    'findAndCountAll',
    'status',
    '2393174RTowXh',
    '11NwFJRf',
    'name',
    'LOWER',
    '10pvyTpT',
    '1180BTsNDJ',
    'default',
    '1147494emGCjV',
    '1439040SZFPbr',
    'Campaign.name',
    '../../models/Whatsapp',
    'sequelize',
    '__esModule',
    'toLowerCase',
    '11669920RIbgGi',
    '469LyewhB',
    'isEmpty',
    'length',
    'ASC',
    '33606FiRbxI'
  ];
  a425_0x3b2d = function () {
    return _0x196a7a;
  };
  return a425_0x3b2d();
}
const a425_0x4a6112 = a425_0x20b0;
(function (_0x136f06, _0x350064) {
  const _0x3be51a = a425_0x20b0,
    _0x39f1b3 = _0x136f06();
  while (!![]) {
    try {
      const _0x4afd72 =
        (parseInt(_0x3be51a(0xe8)) / 0x1) * (parseInt(_0x3be51a(0xde)) / 0x2) +
        parseInt(_0x3be51a(0xf6)) / 0x3 +
        parseInt(_0x3be51a(0xe1)) / 0x4 +
        (-parseInt(_0x3be51a(0xdd)) / 0x5) *
          (-parseInt(_0x3be51a(0xe0)) / 0x6) +
        parseInt(_0x3be51a(0xfa)) / 0x7 +
        (-parseInt(_0x3be51a(0xee)) / 0x8) * (parseInt(_0x3be51a(0xec)) / 0x9) +
        (parseInt(_0x3be51a(0xe7)) / 0xa) * (-parseInt(_0x3be51a(0xfb)) / 0xb);
      if (_0x4afd72 === _0x350064) break;
      else _0x39f1b3['push'](_0x39f1b3['shift']());
    } catch (_0x6861b) {
      _0x39f1b3['push'](_0x39f1b3['shift']());
    }
  }
})(a425_0x3b2d, 0x5532b);
function a425_0x20b0(_0x550b83, _0x2d9954) {
  const _0x3b2d84 = a425_0x3b2d();
  return (
    (a425_0x20b0 = function (_0x20b0c5, _0x53d1a1) {
      _0x20b0c5 = _0x20b0c5 - 0xdc;
      let _0x1ccfeb = _0x3b2d84[_0x20b0c5];
      return _0x1ccfeb;
    }),
    a425_0x20b0(_0x550b83, _0x2d9954)
  );
}
var __importDefault =
  (this && this[a425_0x4a6112(0xf2)]) ||
  function (_0x38522c) {
    const _0x27d838 = a425_0x4a6112;
    return _0x38522c && _0x38522c[_0x27d838(0xe5)]
      ? _0x38522c
      : { default: _0x38522c };
  };
Object[a425_0x4a6112(0xf7)](exports, a425_0x4a6112(0xe5), { value: !![] });
const sequelize_1 = require(a425_0x4a6112(0xe4)),
  Campaign_1 = __importDefault(require(a425_0x4a6112(0xf3))),
  lodash_1 = require(a425_0x4a6112(0xed)),
  ContactList_1 = __importDefault(require('../../models/ContactList')),
  Whatsapp_1 = __importDefault(require(a425_0x4a6112(0xe3))),
  ListService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    companyId: _0x2d7177
  }) => {
    const _0xe2232d = a425_0x4a6112;
    let _0x47dce0 = { companyId: _0x2d7177 };
    !(0x0, lodash_1[_0xe2232d(0xe9)])(searchParam) &&
      (_0x47dce0 = {
        ..._0x47dce0,
        [sequelize_1['Op']['or']]: [
          {
            name: (0x0, sequelize_1[_0xe2232d(0xf5)])(
              (0x0, sequelize_1['fn'])(
                _0xe2232d(0xdc),
                (0x0, sequelize_1['col'])(_0xe2232d(0xe2))
              ),
              _0xe2232d(0xf0),
              '%' + searchParam[_0xe2232d(0xe6)]()[_0xe2232d(0xf4)]() + '%'
            )
          }
        ]
      });
    const _0x4777d3 = 0x14,
      _0x233143 = _0x4777d3 * (+pageNumber - 0x1),
      { count: _0x181355, rows: _0x236730 } = await Campaign_1[_0xe2232d(0xdf)][
        _0xe2232d(0xf8)
      ]({
        where: _0x47dce0,
        limit: _0x4777d3,
        offset: _0x233143,
        order: [
          [_0xe2232d(0xf9), _0xe2232d(0xeb)],
          [_0xe2232d(0xef), _0xe2232d(0xf1)]
        ],
        include: [
          { model: ContactList_1['default'] },
          {
            model: Whatsapp_1[_0xe2232d(0xdf)],
            attributes: ['id', _0xe2232d(0xfc)]
          }
        ]
      }),
      _0xe5fab9 = _0x181355 > _0x233143 + _0x236730[_0xe2232d(0xea)];
    return { records: _0x236730, count: _0x181355, hasMore: _0xe5fab9 };
  };
exports[a425_0x4a6112(0xdf)] = ListService;
