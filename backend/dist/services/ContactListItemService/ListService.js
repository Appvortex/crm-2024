'use strict';
const a466_0x41cbd4 = a466_0x5e0b;
function a466_0xc1a7() {
  const _0x480e65 = [
    '514062WgvGGs',
    '__importDefault',
    '__esModule',
    '1448913pwyvzW',
    'like',
    '693AbSPCC',
    '1370696iRVGTB',
    'defineProperty',
    'toLowerCase',
    'length',
    'where',
    '1716534fRPxsd',
    '../../models/ContactListItem',
    '4368777BVNkjH',
    'name',
    'LIKE',
    'col',
    '3514112rEnYDV',
    '55eUUJKW',
    'default',
    'LOWER',
    'ASC',
    'Sequelize',
    'trim',
    '964oaYjYv'
  ];
  a466_0xc1a7 = function () {
    return _0x480e65;
  };
  return a466_0xc1a7();
}
(function (_0x3307f5, _0x5f3af1) {
  const _0x5ee8b0 = a466_0x5e0b,
    _0x5d1ace = _0x3307f5();
  while (!![]) {
    try {
      const _0x38ca4b =
        (-parseInt(_0x5ee8b0(0x200)) / 0x1) *
          (-parseInt(_0x5ee8b0(0x1fa)) / 0x2) +
        -parseInt(_0x5ee8b0(0x1fe)) / 0x3 +
        -parseInt(_0x5ee8b0(0x1f3)) / 0x4 +
        (-parseInt(_0x5ee8b0(0x1f4)) / 0x5) *
          (-parseInt(_0x5ee8b0(0x1fb)) / 0x6) +
        parseInt(_0x5ee8b0(0x1ef)) / 0x7 +
        -parseInt(_0x5ee8b0(0x201)) / 0x8 +
        parseInt(_0x5ee8b0(0x206)) / 0x9;
      if (_0x38ca4b === _0x5f3af1) break;
      else _0x5d1ace['push'](_0x5d1ace['shift']());
    } catch (_0x41e424) {
      _0x5d1ace['push'](_0x5d1ace['shift']());
    }
  }
})(a466_0xc1a7, 0x8858a);
function a466_0x5e0b(_0x670719, _0x13c010) {
  const _0xc1a746 = a466_0xc1a7();
  return (
    (a466_0x5e0b = function (_0x5e0bf6, _0x164fa6) {
      _0x5e0bf6 = _0x5e0bf6 - 0x1ef;
      let _0x58d54c = _0xc1a746[_0x5e0bf6];
      return _0x58d54c;
    }),
    a466_0x5e0b(_0x670719, _0x13c010)
  );
}
var __importDefault =
  (this && this[a466_0x41cbd4(0x1fc)]) ||
  function (_0x553a12) {
    return _0x553a12 && _0x553a12['__esModule']
      ? _0x553a12
      : { default: _0x553a12 };
  };
Object[a466_0x41cbd4(0x202)](exports, a466_0x41cbd4(0x1fd), { value: !![] });
const sequelize_1 = require('sequelize'),
  ContactListItem_1 = __importDefault(require(a466_0x41cbd4(0x207))),
  ListService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    companyId: _0x4a2387,
    contactListId: _0xdadeeb
  }) => {
    const _0x26b432 = a466_0x41cbd4,
      _0x135db2 = {
        [sequelize_1['Op']['or']]: [
          {
            name: sequelize_1[_0x26b432(0x1f8)][_0x26b432(0x205)](
              sequelize_1[_0x26b432(0x1f8)]['fn'](
                _0x26b432(0x1f6),
                sequelize_1[_0x26b432(0x1f8)][_0x26b432(0x1f2)](
                  _0x26b432(0x1f0)
                )
              ),
              _0x26b432(0x1f1),
              '%' + searchParam['toLowerCase']()[_0x26b432(0x1f9)]() + '%'
            )
          },
          {
            number: {
              [sequelize_1['Op'][_0x26b432(0x1ff)]]:
                '%' + searchParam[_0x26b432(0x203)]()[_0x26b432(0x1f9)]() + '%'
            }
          }
        ],
        companyId: _0x4a2387,
        contactListId: _0xdadeeb
      },
      _0x20b227 = 0x14,
      _0x229900 = _0x20b227 * (+pageNumber - 0x1),
      { count: _0x3b1788, rows: _0x2527ec } = await ContactListItem_1[
        _0x26b432(0x1f5)
      ]['findAndCountAll']({
        where: _0x135db2,
        limit: _0x20b227,
        offset: _0x229900,
        order: [[_0x26b432(0x1f0), _0x26b432(0x1f7)]]
      }),
      _0x3ae2e5 = _0x3b1788 > _0x229900 + _0x2527ec[_0x26b432(0x204)];
    return { contacts: _0x2527ec, count: _0x3b1788, hasMore: _0x3ae2e5 };
  };
exports['default'] = ListService;
