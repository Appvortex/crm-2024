'use strict';
const a465_0x47df1e = a465_0x37c4;
(function (_0x4cfed4, _0x3d92de) {
  const _0x53e742 = a465_0x37c4,
    _0x21a674 = _0x4cfed4();
  while (!![]) {
    try {
      const _0x21cfe3 =
        -parseInt(_0x53e742(0x124)) / 0x1 +
        (-parseInt(_0x53e742(0x122)) / 0x2) *
          (-parseInt(_0x53e742(0x11b)) / 0x3) +
        parseInt(_0x53e742(0x119)) / 0x4 +
        (-parseInt(_0x53e742(0x118)) / 0x5) *
          (parseInt(_0x53e742(0x117)) / 0x6) +
        (-parseInt(_0x53e742(0x120)) / 0x7) *
          (-parseInt(_0x53e742(0x115)) / 0x8) +
        -parseInt(_0x53e742(0x11f)) / 0x9 +
        (-parseInt(_0x53e742(0x116)) / 0xa) *
          (-parseInt(_0x53e742(0x11d)) / 0xb);
      if (_0x21cfe3 === _0x3d92de) break;
      else _0x21a674['push'](_0x21a674['shift']());
    } catch (_0x3b3a46) {
      _0x21a674['push'](_0x21a674['shift']());
    }
  }
})(a465_0x5b20, 0xe3540);
function a465_0x37c4(_0x4fff12, _0x11d793) {
  const _0x5b2080 = a465_0x5b20();
  return (
    (a465_0x37c4 = function (_0x37c4cf, _0x48beda) {
      _0x37c4cf = _0x37c4cf - 0x115;
      let _0x17f780 = _0x5b2080[_0x37c4cf];
      return _0x17f780;
    }),
    a465_0x37c4(_0x4fff12, _0x11d793)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x36fd26) {
    const _0x5bd131 = a465_0x37c4;
    return _0x36fd26 && _0x36fd26[_0x5bd131(0x123)]
      ? _0x36fd26
      : { default: _0x36fd26 };
  };
Object['defineProperty'](exports, a465_0x47df1e(0x123), { value: !![] });
const ContactListItem_1 = __importDefault(
    require('../../models/ContactListItem')
  ),
  Company_1 = __importDefault(require('../../models/Company')),
  FindService = async ({ companyId: _0x1d4c48, contactListId: _0x57d510 }) => {
    const _0x262ce0 = a465_0x47df1e;
    let _0x3bfa82 = { companyId: _0x1d4c48 };
    _0x57d510 && (_0x3bfa82 = { ..._0x3bfa82, contactListId: _0x57d510 });
    const _0x544b49 = await ContactListItem_1[_0x262ce0(0x11c)][
      _0x262ce0(0x11a)
    ]({
      where: _0x3bfa82,
      include: [
        {
          model: Company_1[_0x262ce0(0x11c)],
          as: _0x262ce0(0x125),
          attributes: ['id', _0x262ce0(0x11e)]
        }
      ],
      order: [['name', _0x262ce0(0x121)]]
    });
    return _0x544b49;
  };
function a465_0x5b20() {
  const _0x110512 = [
    '__esModule',
    '1732844lhURib',
    'company',
    '11216UaEBgJ',
    '50JlueuX',
    '6bMMocY',
    '8845555suIodO',
    '5464424CzFOtI',
    'findAll',
    '521835hJEGVf',
    'default',
    '8421391iklqae',
    'name',
    '15167907xHxJTm',
    '273seYSnx',
    'ASC',
    '10SNPxak'
  ];
  a465_0x5b20 = function () {
    return _0x110512;
  };
  return a465_0x5b20();
}
exports[a465_0x47df1e(0x11c)] = FindService;
