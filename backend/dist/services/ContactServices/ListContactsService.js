'use strict';
const a486_0x1aa059 = a486_0x3c45;
(function (_0x340e3e, _0x47f923) {
  const _0x5050f9 = a486_0x3c45,
    _0x174c40 = _0x340e3e();
  while (!![]) {
    try {
      const _0x282cea =
        -parseInt(_0x5050f9(0x85)) / 0x1 +
        -parseInt(_0x5050f9(0x8c)) / 0x2 +
        (parseInt(_0x5050f9(0x99)) / 0x3) * (parseInt(_0x5050f9(0xa8)) / 0x4) +
        (parseInt(_0x5050f9(0x86)) / 0x5) * (-parseInt(_0x5050f9(0xaa)) / 0x6) +
        (parseInt(_0x5050f9(0xa4)) / 0x7) * (parseInt(_0x5050f9(0xa0)) / 0x8) +
        parseInt(_0x5050f9(0x84)) / 0x9 +
        parseInt(_0x5050f9(0x8b)) / 0xa;
      if (_0x282cea === _0x47f923) break;
      else _0x174c40['push'](_0x174c40['shift']());
    } catch (_0x2cc697) {
      _0x174c40['push'](_0x174c40['shift']());
    }
  }
})(a486_0x3fa1, 0x52ec4);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x52ccdb) {
    return _0x52ccdb && _0x52ccdb['__esModule']
      ? _0x52ccdb
      : { default: _0x52ccdb };
  };
Object[a486_0x1aa059(0x89)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a486_0x1aa059(0x9d)),
  Contact_1 = __importDefault(require('../../models/Contact')),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  ContactTag_1 = __importDefault(require('../../models/ContactTag')),
  lodash_1 = require(a486_0x1aa059(0x90)),
  Tag_1 = __importDefault(require(a486_0x1aa059(0xa1))),
  remove_accents_1 = __importDefault(require('remove-accents')),
  Whatsapp_1 = __importDefault(require(a486_0x1aa059(0x88))),
  ListContactsService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    companyId: _0xbfc50d,
    tagsIds: _0x5ee222,
    isGroup: _0x341b0d,
    userId: _0x3f3fbb
  }) => {
    const _0x3fde07 = a486_0x1aa059,
      _0x2f67fa = (0x0, remove_accents_1[_0x3fde07(0x98)])(
        searchParam[_0x3fde07(0x87)]()[_0x3fde07(0x91)]()
      );
    let _0x4e0383 = {
      [sequelize_1['Op']['or']]: [
        {
          name: (0x0, sequelize_1['where'])(
            (0x0, sequelize_1['fn'])(
              'LOWER',
              (0x0, sequelize_1['fn'])(
                _0x3fde07(0xa3),
                (0x0, sequelize_1[_0x3fde07(0x9b)])(_0x3fde07(0x9f))
              )
            ),
            _0x3fde07(0x96),
            '%' + _0x2f67fa + '%'
          )
        },
        {
          number: {
            [sequelize_1['Op'][_0x3fde07(0x93)]]: '%' + _0x2f67fa + '%'
          }
        }
      ]
    };
    _0x4e0383 = { ..._0x4e0383, companyId: _0xbfc50d };
    if (Array[_0x3fde07(0x8f)](_0x5ee222) && _0x5ee222[_0x3fde07(0xa6)] > 0x0) {
      const _0x45e114 = [],
        _0x412836 = await ContactTag_1[_0x3fde07(0x98)][_0x3fde07(0xa9)]({
          where: { tagId: { [sequelize_1['Op']['in']]: _0x5ee222 } }
        });
      _0x412836 &&
        _0x45e114[_0x3fde07(0x97)](
          _0x412836[_0x3fde07(0x9a)](_0x4e8ad9 => _0x4e8ad9['contactId'])
        );
      const _0x1ee8fb = (0x0, lodash_1[_0x3fde07(0x9c)])(..._0x45e114);
      _0x4e0383 = {
        ..._0x4e0383,
        id: { [sequelize_1['Op']['in']]: _0x1ee8fb }
      };
    }
    _0x341b0d === _0x3fde07(0x92) &&
      (_0x4e0383 = { ..._0x4e0383, isGroup: ![] });
    const _0x53daa5 = 0x64,
      _0x362bdb = _0x53daa5 * (+pageNumber - 0x1),
      { count: _0x11773e, rows: _0x565ecf } = await Contact_1['default'][
        _0x3fde07(0x94)
      ]({
        where: _0x4e0383,
        limit: _0x53daa5,
        include: [
          {
            model: Ticket_1[_0x3fde07(0x98)],
            as: _0x3fde07(0x8a),
            attributes: [
              'id',
              _0x3fde07(0x9e),
              _0x3fde07(0x8d),
              _0x3fde07(0x8e)
            ],
            limit: 0x1,
            order: [[_0x3fde07(0x8e), _0x3fde07(0xa7)]]
          },
          {
            model: Tag_1[_0x3fde07(0x98)],
            as: _0x3fde07(0x95),
            attributes: ['id', _0x3fde07(0xa5)]
          },
          {
            model: Whatsapp_1['default'],
            as: _0x3fde07(0xa2),
            attributes: [
              'id',
              _0x3fde07(0xa5),
              _0x3fde07(0xab),
              'groupAsTicket'
            ]
          }
        ],
        offset: _0x362bdb,
        order: [[_0x3fde07(0xa5), 'ASC']]
      }),
      _0x13decf = _0x11773e > _0x362bdb + _0x565ecf[_0x3fde07(0xa6)];
    return { contacts: _0x565ecf, count: _0x11773e, hasMore: _0x13decf };
  };
function a486_0x3c45(_0x4dbf3b, _0x542930) {
  const _0x3fa1bc = a486_0x3fa1();
  return (
    (a486_0x3c45 = function (_0x3c45bf, _0x48844b) {
      _0x3c45bf = _0x3c45bf - 0x84;
      let _0x4f1143 = _0x3fa1bc[_0x3c45bf];
      return _0x4f1143;
    }),
    a486_0x3c45(_0x4dbf3b, _0x542930)
  );
}
exports[a486_0x1aa059(0x98)] = ListContactsService;
function a486_0x3fa1() {
  const _0x1c1003 = [
    '1392377Ruvtjt',
    'name',
    'length',
    'DESC',
    '164404jhLqND',
    'findAll',
    '6qMolFH',
    'expiresTicket',
    '4007736xgkZhI',
    '608618EzROPl',
    '3375685rhnJoL',
    'toLocaleLowerCase',
    '../../models/Whatsapp',
    'defineProperty',
    'tickets',
    '7922970ovPGES',
    '928254PDjumx',
    'createdAt',
    'updatedAt',
    'isArray',
    'lodash',
    'trim',
    'false',
    'like',
    'findAndCountAll',
    'tags',
    'LIKE',
    'push',
    'default',
    '33iHNnaJ',
    'map',
    'col',
    'intersection',
    'sequelize',
    'status',
    'Contact.name',
    '16SuYLUZ',
    '../../models/Tag',
    'whatsapp',
    'unaccent'
  ];
  a486_0x3fa1 = function () {
    return _0x1c1003;
  };
  return a486_0x3fa1();
}
