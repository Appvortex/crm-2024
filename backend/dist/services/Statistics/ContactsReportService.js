'use strict';
const a595_0x19871f = a595_0x574c;
(function (_0x1aad09, _0x1a8f61) {
  const _0x853ac5 = a595_0x574c,
    _0x4bdd42 = _0x1aad09();
  while (!![]) {
    try {
      const _0x5524c0 =
        -parseInt(_0x853ac5(0xae)) / 0x1 +
        (-parseInt(_0x853ac5(0xa6)) / 0x2) * (parseInt(_0x853ac5(0xc1)) / 0x3) +
        -parseInt(_0x853ac5(0xad)) / 0x4 +
        parseInt(_0x853ac5(0xbe)) / 0x5 +
        (-parseInt(_0x853ac5(0xc0)) / 0x6) * (parseInt(_0x853ac5(0xbc)) / 0x7) +
        -parseInt(_0x853ac5(0xb1)) / 0x8 +
        (-parseInt(_0x853ac5(0xac)) / 0x9) * (-parseInt(_0x853ac5(0xa2)) / 0xa);
      if (_0x5524c0 === _0x1a8f61) break;
      else _0x4bdd42['push'](_0x4bdd42['shift']());
    } catch (_0x4d23b4) {
      _0x4bdd42['push'](_0x4bdd42['shift']());
    }
  }
})(a595_0x5a8d, 0xa245f);
var __importDefault =
  (this && this[a595_0x19871f(0xc3)]) ||
  function (_0x3e03f0) {
    const _0x3cbc34 = a595_0x19871f;
    return _0x3e03f0 && _0x3e03f0[_0x3cbc34(0xba)]
      ? _0x3e03f0
      : { default: _0x3e03f0 };
  };
Object[a595_0x19871f(0xb8)](exports, a595_0x19871f(0xba), { value: !![] });
function a595_0x574c(_0x1ae9d0, _0x2197c9) {
  const _0x5a8d19 = a595_0x5a8d();
  return (
    (a595_0x574c = function (_0x574c1a, _0x5a0a38) {
      _0x574c1a = _0x574c1a - 0xa2;
      let _0x49ee77 = _0x5a8d19[_0x574c1a];
      return _0x49ee77;
    }),
    a595_0x574c(_0x1ae9d0, _0x2197c9)
  );
}
const date_fns_1 = require(a595_0x19871f(0xaa)),
  sequelize_1 = require('sequelize'),
  Contact_1 = __importDefault(require(a595_0x19871f(0xc4))),
  Tag_1 = __importDefault(require(a595_0x19871f(0xb2))),
  dddsPorEstado = [
    { estado: 'AC', ddds: ['68'] },
    { estado: 'AL', ddds: ['82'] },
    { estado: 'AM', ddds: ['92', '97'] },
    { estado: 'AP', ddds: ['96'] },
    { estado: 'BA', ddds: ['71', '73', '74', '75', '77'] },
    { estado: 'CE', ddds: ['85', '88'] },
    { estado: 'DF', ddds: ['61'] },
    { estado: 'ES', ddds: ['27', '28'] },
    { estado: 'GO', ddds: ['62', '64'] },
    { estado: 'MA', ddds: ['98', '99'] },
    { estado: 'MG', ddds: ['31', '32', '33', '34', '35', '37', '38'] },
    { estado: 'MS', ddds: ['67'] },
    { estado: 'MT', ddds: ['65', '66'] },
    { estado: 'PA', ddds: ['91', '93', '94'] },
    { estado: 'PB', ddds: ['83'] },
    { estado: 'PE', ddds: ['81', '87'] },
    { estado: 'PI', ddds: ['86', '89'] },
    { estado: 'PR', ddds: ['41', '42', '43', '44', '45', '46'] },
    { estado: 'RJ', ddds: ['21', '22', '24'] },
    { estado: 'RN', ddds: ['84'] },
    { estado: 'RO', ddds: ['69'] },
    { estado: 'RR', ddds: ['95'] },
    { estado: 'RS', ddds: ['51', '53', '54', '55'] },
    { estado: 'SC', ddds: ['47', '48', '49'] },
    { estado: 'SE', ddds: ['79'] },
    {
      estado: 'SP',
      ddds: ['11', '12', '13', '14', '15', '16', '17', '18', '19']
    },
    { estado: 'TO', ddds: ['63'] }
  ],
  ListContactsService = async ({
    startDate: _0x5049f4,
    endDate: _0x3770f8,
    companyId: _0x46eb70,
    tags: _0x2ac2ea,
    wallets: _0x14c849,
    ddds: _0x30bb6b,
    userId: _0x5e4778,
    profile: _0x4e6eeb,
    searchParam: _0x313362
  }) => {
    const _0x3b1c2e = a595_0x19871f;
    let _0xaf1988 = [],
      _0x1d0cf6 = { companyId: _0x46eb70, isGroup: ![] };
    _0x313362 &&
      (_0x1d0cf6 = {
        ..._0x1d0cf6,
        [sequelize_1['Op']['or']]: [
          {
            name: sequelize_1['Sequelize'][_0x3b1c2e(0xb4)](
              sequelize_1['Sequelize']['fn'](
                _0x3b1c2e(0xc5),
                sequelize_1[_0x3b1c2e(0xb5)][_0x3b1c2e(0xbd)](_0x3b1c2e(0xb7))
              ),
              _0x3b1c2e(0xbf),
              '%' + _0x313362[_0x3b1c2e(0xa5)]()[_0x3b1c2e(0xc7)]() + '%'
            )
          },
          {
            number: {
              [sequelize_1['Op']['like']]:
                '%' + _0x313362[_0x3b1c2e(0xa5)]()[_0x3b1c2e(0xc7)]() + '%'
            }
          }
        ]
      });
    _0x5049f4 &&
      _0x3770f8 &&
      (_0x1d0cf6 = {
        ..._0x1d0cf6,
        createdAt: {
          [sequelize_1['Op'][_0x3b1c2e(0xa8)]]: [
            +(0x0, date_fns_1[_0x3b1c2e(0xb6)])(
              (0x0, date_fns_1[_0x3b1c2e(0xb9)])(_0x5049f4)
            ),
            +(0x0, date_fns_1[_0x3b1c2e(0xab)])(
              (0x0, date_fns_1[_0x3b1c2e(0xb9)])(_0x3770f8)
            )
          ]
        }
      });
    _0x2ac2ea &&
      (_0xaf1988 = [
        {
          model: Tag_1[_0x3b1c2e(0xa9)],
          as: 'tags',
          where: { id: { [sequelize_1['Op']['in']]: _0x2ac2ea } },
          required: !![]
        }
      ]);
    if (_0x30bb6b) {
      let _0x52da3a = [];
      _0x30bb6b[_0x3b1c2e(0xb3)](_0x27c958 => {
        const _0x280656 = _0x3b1c2e;
        if (_0x27c958) {
          const _0x38aa5b = dddsPorEstado[_0x280656(0xbb)](
            _0x1c0c04 => _0x1c0c04[_0x280656(0xa4)] === _0x27c958
          )?.[_0x280656(0xa7)];
          _0x38aa5b && (_0x52da3a = _0x52da3a[_0x280656(0xc2)](_0x38aa5b));
        }
      }),
        (_0x1d0cf6 = {
          ..._0x1d0cf6,
          number: {
            [sequelize_1['Op']['or']]: _0x52da3a['map'](_0x2e634d => ({
              [sequelize_1['Op']['like']]: '55' + _0x2e634d + '%'
            }))
          }
        });
    }
    const _0x48ea48 = await Contact_1[_0x3b1c2e(0xa9)][_0x3b1c2e(0xc8)]({
      where: _0x1d0cf6,
      attributes: ['id', _0x3b1c2e(0xa3), _0x3b1c2e(0xc6), _0x3b1c2e(0xb0)],
      include: _0xaf1988,
      order: [[_0x3b1c2e(0xa3), _0x3b1c2e(0xaf)]]
    });
    return { contacts: _0x48ea48 };
  };
function a595_0x5a8d() {
  const _0x448f6d = [
    'findAll',
    '10sOCLjP',
    'name',
    'estado',
    'toLowerCase',
    '2degSTu',
    'ddds',
    'between',
    'default',
    'date-fns',
    'endOfDay',
    '45507492aubivF',
    '2514396WUwOcp',
    '1116128PcwgOx',
    'ASC',
    'email',
    '4950280GPsAbH',
    '../../models/Tag',
    'forEach',
    'where',
    'Sequelize',
    'startOfDay',
    'Contact.name',
    'defineProperty',
    'parseISO',
    '__esModule',
    'find',
    '7483NpopyG',
    'col',
    '2707275niCJBA',
    'LIKE',
    '7104uhwmAR',
    '3911892SAIEvF',
    'concat',
    '__importDefault',
    '../../models/Contact',
    'LOWER',
    'number',
    'trim'
  ];
  a595_0x5a8d = function () {
    return _0x448f6d;
  };
  return a595_0x5a8d();
}
exports[a595_0x19871f(0xa9)] = ListContactsService;
