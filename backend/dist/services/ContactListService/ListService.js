'use strict';
function a474_0x17aa() {
  const _0x190c4a = [
    '153zmTtiO',
    'sequelize',
    'count',
    'lodash',
    '150979zjjUYs',
    'contacts',
    'ASC',
    'isEmpty',
    '45768hmPEQM',
    '686MIZNpI',
    '120szOORH',
    'name',
    'ContactList.name',
    '7961870ekvCYb',
    'col',
    'findAndCountAll',
    'unaccent',
    '397188aBogET',
    'contactsCount',
    '33532VcLFBb',
    '2037960XbahYe',
    '6qXLwMQ',
    'remove-accents',
    'LIKE',
    '12144539ayXtel',
    '../../models/ContactListItem',
    'length',
    'defineProperty',
    'trim',
    'default',
    'where'
  ];
  a474_0x17aa = function () {
    return _0x190c4a;
  };
  return a474_0x17aa();
}
const a474_0xb7caeb = a474_0x2b6a;
(function (_0x31dc58, _0x25bd29) {
  const _0x20bd0c = a474_0x2b6a,
    _0x5044ca = _0x31dc58();
  while (!![]) {
    try {
      const _0x58e4a9 =
        (-parseInt(_0x20bd0c(0xc4)) / 0x1) * (parseInt(_0x20bd0c(0xb6)) / 0x2) +
        (-parseInt(_0x20bd0c(0xc0)) / 0x3) * (parseInt(_0x20bd0c(0xb4)) / 0x4) +
        -parseInt(_0x20bd0c(0xb5)) / 0x5 +
        (parseInt(_0x20bd0c(0xc8)) / 0x6) * (parseInt(_0x20bd0c(0xc9)) / 0x7) +
        (parseInt(_0x20bd0c(0xca)) / 0x8) * (parseInt(_0x20bd0c(0xd1)) / 0x9) +
        -parseInt(_0x20bd0c(0xcd)) / 0xa +
        parseInt(_0x20bd0c(0xb9)) / 0xb;
      if (_0x58e4a9 === _0x25bd29) break;
      else _0x5044ca['push'](_0x5044ca['shift']());
    } catch (_0x6ad9ee) {
      _0x5044ca['push'](_0x5044ca['shift']());
    }
  }
})(a474_0x17aa, 0x68d0c);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x55f8d1) {
    return _0x55f8d1 && _0x55f8d1['__esModule']
      ? _0x55f8d1
      : { default: _0x55f8d1 };
  };
Object[a474_0xb7caeb(0xbc)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a474_0xb7caeb(0xc1)),
  ContactList_1 = __importDefault(require('../../models/ContactList')),
  ContactListItem_1 = __importDefault(require(a474_0xb7caeb(0xba))),
  lodash_1 = require(a474_0xb7caeb(0xc3)),
  remove_accents_1 = __importDefault(require(a474_0xb7caeb(0xb7))),
  ListService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    companyId: _0x342dac
  }) => {
    const _0x5a773d = a474_0xb7caeb;
    let _0x451184 = { companyId: _0x342dac };
    if (!(0x0, lodash_1[_0x5a773d(0xc7)])(searchParam)) {
      const _0x23b036 = (0x0, remove_accents_1[_0x5a773d(0xbe)])(
        searchParam['toLocaleLowerCase']()[_0x5a773d(0xbd)]()
      );
      _0x451184 = {
        ..._0x451184,
        [sequelize_1['Op']['or']]: [
          {
            name: (0x0, sequelize_1[_0x5a773d(0xbf)])(
              (0x0, sequelize_1['fn'])(
                'LOWER',
                (0x0, sequelize_1['fn'])(
                  _0x5a773d(0xd0),
                  (0x0, sequelize_1[_0x5a773d(0xce)])(_0x5a773d(0xcc))
                )
              ),
              _0x5a773d(0xb8),
              '%' + _0x23b036 + '%'
            )
          }
        ]
      };
    }
    const _0x46009a = 0x14,
      _0x4094f1 = _0x46009a * (+pageNumber - 0x1),
      { count: _0x1cd3b1, rows: _0x28ae5d } = await ContactList_1[
        _0x5a773d(0xbe)
      ][_0x5a773d(0xcf)]({
        where: _0x451184,
        limit: _0x46009a,
        offset: _0x4094f1,
        order: [[_0x5a773d(0xcb), _0x5a773d(0xc6)]],
        subQuery: ![],
        include: [
          {
            model: ContactListItem_1['default'],
            as: _0x5a773d(0xc5),
            attributes: [],
            required: ![]
          }
        ],
        attributes: [
          'id',
          _0x5a773d(0xcb),
          [
            (0x0, sequelize_1['fn'])(
              _0x5a773d(0xc2),
              (0x0, sequelize_1[_0x5a773d(0xce)])('contacts.id')
            ),
            _0x5a773d(0xd2)
          ]
        ],
        group: ['ContactList.id']
      }),
      _0x1036ae = _0x1cd3b1 > _0x4094f1 + _0x28ae5d[_0x5a773d(0xbb)];
    return { records: _0x28ae5d, count: _0x1cd3b1, hasMore: _0x1036ae };
  };
function a474_0x2b6a(_0x880312, _0x3ab8fe) {
  const _0x17aaec = a474_0x17aa();
  return (
    (a474_0x2b6a = function (_0x2b6aa8, _0x5806b7) {
      _0x2b6aa8 = _0x2b6aa8 - 0xb4;
      let _0x348d90 = _0x17aaec[_0x2b6aa8];
      return _0x348d90;
    }),
    a474_0x2b6a(_0x880312, _0x3ab8fe)
  );
}
exports['default'] = ListService;
