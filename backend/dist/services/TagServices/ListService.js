'use strict';
const a607_0x24a0b4 = a607_0x4c74;
function a607_0x2787() {
  const _0x4d62a1 = [
    '2296760BCcVQe',
    '2602830YTwDhM',
    'col',
    'ASC',
    'where',
    '5OPKpAo',
    '991217dwfqsl',
    'LOWER',
    '../../models/TicketTag',
    'sequelize',
    'default',
    'LIKE',
    'color',
    '659246TVBaLz',
    'length',
    'defineProperty',
    'toLocaleLowerCase',
    '../../models/Tag',
    'Tag.name',
    'trim',
    '__importDefault',
    'like',
    '179200NwEztk',
    '../../models/ContactTag',
    'ticketTags',
    '7464642zqzUFE',
    'Sequelize',
    '5527968LBKqLa',
    'findAndCountAll',
    '__esModule'
  ];
  a607_0x2787 = function () {
    return _0x4d62a1;
  };
  return a607_0x2787();
}
(function (_0x43f2ec, _0x392305) {
  const _0x3c45af = a607_0x4c74,
    _0x37d2ac = _0x43f2ec();
  while (!![]) {
    try {
      const _0x25460a =
        parseInt(_0x3c45af(0x127)) / 0x1 +
        -parseInt(_0x3c45af(0x121)) / 0x2 +
        parseInt(_0x3c45af(0x122)) / 0x3 +
        parseInt(_0x3c45af(0x13c)) / 0x4 +
        (parseInt(_0x3c45af(0x126)) / 0x5) *
          (-parseInt(_0x3c45af(0x13a)) / 0x6) +
        parseInt(_0x3c45af(0x12e)) / 0x7 +
        parseInt(_0x3c45af(0x137)) / 0x8;
      if (_0x25460a === _0x392305) break;
      else _0x37d2ac['push'](_0x37d2ac['shift']());
    } catch (_0x520ac2) {
      _0x37d2ac['push'](_0x37d2ac['shift']());
    }
  }
})(a607_0x2787, 0xeb92e);
var __importDefault =
  (this && this[a607_0x24a0b4(0x135)]) ||
  function (_0x102a2f) {
    const _0x230e7b = a607_0x24a0b4;
    return _0x102a2f && _0x102a2f[_0x230e7b(0x120)]
      ? _0x102a2f
      : { default: _0x102a2f };
  };
Object[a607_0x24a0b4(0x130)](exports, a607_0x24a0b4(0x120), { value: !![] });
const sequelize_1 = require(a607_0x24a0b4(0x12a)),
  Tag_1 = __importDefault(require(a607_0x24a0b4(0x132))),
  ContactTag_1 = __importDefault(require(a607_0x24a0b4(0x138))),
  TicketTag_1 = __importDefault(require(a607_0x24a0b4(0x129))),
  remove_accents_1 = __importDefault(require('remove-accents')),
  ListService = async ({
    companyId: _0x497fe4,
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    kanban: kanban = 0x0
  }) => {
    const _0x670b58 = a607_0x24a0b4;
    let _0xa321d8 = {};
    const _0x418b54 = 0x14,
      _0xb89f9 = _0x418b54 * (+pageNumber - 0x1),
      _0x381705 = (0x0, remove_accents_1[_0x670b58(0x12b)])(
        searchParam[_0x670b58(0x131)]()[_0x670b58(0x134)]()
      );
    if (Number(kanban) === 0x0) {
      searchParam &&
        (_0xa321d8 = {
          [sequelize_1['Op']['or']]: [
            {
              name: sequelize_1[_0x670b58(0x13b)][_0x670b58(0x125)](
                sequelize_1[_0x670b58(0x13b)]['fn'](
                  _0x670b58(0x128),
                  sequelize_1[_0x670b58(0x13b)]['col'](_0x670b58(0x133))
                ),
                _0x670b58(0x12c),
                '%' + _0x381705 + '%'
              )
            },
            {
              color: {
                [sequelize_1['Op'][_0x670b58(0x136)]]: '%' + _0x381705 + '%'
              }
            }
          ]
        });
      const { count: _0x2f6c4f, rows: _0x55f986 } = await Tag_1['default'][
          _0x670b58(0x13d)
        ]({
          where: { ..._0xa321d8, companyId: _0x497fe4, kanban: kanban },
          limit: _0x418b54,
          include: [
            { model: ContactTag_1[_0x670b58(0x12b)], as: 'contactTags' }
          ],
          attributes: ['id', 'name', _0x670b58(0x12d)],
          offset: _0xb89f9,
          order: [['name', 'ASC']]
        }),
        _0x4d1e8f = _0x2f6c4f > _0xb89f9 + _0x55f986['length'];
      return { tags: _0x55f986, count: _0x2f6c4f, hasMore: _0x4d1e8f };
    } else {
      searchParam &&
        (_0xa321d8 = {
          [sequelize_1['Op']['or']]: [
            {
              name: sequelize_1['Sequelize'][_0x670b58(0x125)](
                sequelize_1[_0x670b58(0x13b)]['fn'](
                  'LOWER',
                  sequelize_1[_0x670b58(0x13b)][_0x670b58(0x123)](
                    _0x670b58(0x133)
                  )
                ),
                _0x670b58(0x12c),
                '%' + _0x381705 + '%'
              )
            },
            {
              color: {
                [sequelize_1['Op'][_0x670b58(0x136)]]: '%' + _0x381705 + '%'
              }
            }
          ]
        });
      const { count: _0x565100, rows: _0x5f120e } = await Tag_1[
          _0x670b58(0x12b)
        ][_0x670b58(0x13d)]({
          where: { ..._0xa321d8, companyId: _0x497fe4, kanban: kanban },
          limit: _0x418b54,
          offset: _0xb89f9,
          order: [['name', _0x670b58(0x124)]],
          include: [{ model: TicketTag_1['default'], as: _0x670b58(0x139) }],
          attributes: ['id', 'name', _0x670b58(0x12d)]
        }),
        _0x35c14e = _0x565100 > _0xb89f9 + _0x5f120e[_0x670b58(0x12f)];
      return { tags: _0x5f120e, count: _0x565100, hasMore: _0x35c14e };
    }
  };
function a607_0x4c74(_0x2078ed, _0xddd0a9) {
  const _0x278773 = a607_0x2787();
  return (
    (a607_0x4c74 = function (_0x4c74cc, _0xa46a7e) {
      _0x4c74cc = _0x4c74cc - 0x120;
      let _0x454329 = _0x278773[_0x4c74cc];
      return _0x454329;
    }),
    a607_0x4c74(_0x2078ed, _0xddd0a9)
  );
}
exports[a607_0x24a0b4(0x12b)] = ListService;
