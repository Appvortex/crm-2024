'use strict';
const a519_0xe5012a = a519_0x1c8b;
(function (_0x531fbe, _0xfd973a) {
  const _0x3f15a1 = a519_0x1c8b,
    _0x12ec6f = _0x531fbe();
  while (!![]) {
    try {
      const _0x166578 =
        parseInt(_0x3f15a1(0x14c)) / 0x1 +
        (-parseInt(_0x3f15a1(0x14d)) / 0x2) *
          (parseInt(_0x3f15a1(0x15d)) / 0x3) +
        parseInt(_0x3f15a1(0x14f)) / 0x4 +
        -parseInt(_0x3f15a1(0x160)) / 0x5 +
        parseInt(_0x3f15a1(0x159)) / 0x6 +
        (-parseInt(_0x3f15a1(0x152)) / 0x7) *
          (-parseInt(_0x3f15a1(0x157)) / 0x8) +
        (-parseInt(_0x3f15a1(0x15b)) / 0x9) *
          (parseInt(_0x3f15a1(0x14b)) / 0xa);
      if (_0x166578 === _0xfd973a) break;
      else _0x12ec6f['push'](_0x12ec6f['shift']());
    } catch (_0x381f98) {
      _0x12ec6f['push'](_0x12ec6f['shift']());
    }
  }
})(a519_0x18bb, 0xc85ce);
var __importDefault =
  (this && this[a519_0xe5012a(0x155)]) ||
  function (_0x27d1c0) {
    const _0x4e040b = a519_0xe5012a;
    return _0x27d1c0 && _0x27d1c0[_0x4e040b(0x151)]
      ? _0x27d1c0
      : { default: _0x27d1c0 };
  };
function a519_0x1c8b(_0x389dde, _0x5c806a) {
  const _0x18bb34 = a519_0x18bb();
  return (
    (a519_0x1c8b = function (_0x1c8bbc, _0x3b417b) {
      _0x1c8bbc = _0x1c8bbc - 0x14b;
      let _0x21c3a3 = _0x18bb34[_0x1c8bbc];
      return _0x21c3a3;
    }),
    a519_0x1c8b(_0x389dde, _0x5c806a)
  );
}
Object[a519_0xe5012a(0x15f)](exports, a519_0xe5012a(0x151), { value: !![] });
function a519_0x18bb() {
  const _0x2f8157 = [
    'LOWER',
    '3541656JOlbbE',
    'Sequelize',
    '__esModule',
    '7IVFOAN',
    'LIKE',
    'length',
    '__importDefault',
    'toLowerCase',
    '690152PWDMhx',
    'trim',
    '8820960faxeQS',
    'sequelize',
    '18IHHFDQ',
    'findAndCountAll',
    '285quUqMb',
    'detail',
    'defineProperty',
    '363975iCDFGV',
    '11108810cKqzOF',
    '825495IjqTXC',
    '3202lxhlnb'
  ];
  a519_0x18bb = function () {
    return _0x2f8157;
  };
  return a519_0x18bb();
}
const sequelize_1 = require(a519_0xe5012a(0x15a)),
  Invoices_1 = __importDefault(require('../../models/Invoices')),
  ListInvoicesServices = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1'
  }) => {
    const _0x3349fc = a519_0xe5012a,
      _0x2da396 = {
        [sequelize_1['Op']['or']]: [
          {
            name: sequelize_1['Sequelize']['where'](
              sequelize_1[_0x3349fc(0x150)]['fn'](
                _0x3349fc(0x14e),
                sequelize_1[_0x3349fc(0x150)]['col'](_0x3349fc(0x15e))
              ),
              _0x3349fc(0x153),
              '%' + searchParam[_0x3349fc(0x156)]()[_0x3349fc(0x158)]() + '%'
            )
          }
        ]
      },
      _0x5a27fd = 0x14,
      _0x52413f = _0x5a27fd * (+pageNumber - 0x1),
      { count: _0xaf6817, rows: _0x35be99 } = await Invoices_1['default'][
        _0x3349fc(0x15c)
      ]({
        where: _0x2da396,
        limit: _0x5a27fd,
        offset: _0x52413f,
        order: [['id', 'ASC']]
      }),
      _0x2988eb = _0xaf6817 > _0x52413f + _0x35be99[_0x3349fc(0x154)];
    return { invoices: _0x35be99, count: _0xaf6817, hasMore: _0x2988eb };
  };
exports['default'] = ListInvoicesServices;
