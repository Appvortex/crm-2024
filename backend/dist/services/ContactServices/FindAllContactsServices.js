'use strict';
const a482_0x234664 = a482_0x2253;
(function (_0x325d85, _0x5e6cad) {
  const _0x35f155 = a482_0x2253,
    _0x8bd72d = _0x325d85();
  while (!![]) {
    try {
      const _0x121989 =
        (parseInt(_0x35f155(0x1cb)) / 0x1) *
          (-parseInt(_0x35f155(0x1c5)) / 0x2) +
        (-parseInt(_0x35f155(0x1c7)) / 0x3) *
          (-parseInt(_0x35f155(0x1c3)) / 0x4) +
        (parseInt(_0x35f155(0x1c6)) / 0x5) *
          (parseInt(_0x35f155(0x1cc)) / 0x6) +
        (parseInt(_0x35f155(0x1d0)) / 0x7) *
          (-parseInt(_0x35f155(0x1d3)) / 0x8) +
        parseInt(_0x35f155(0x1be)) / 0x9 +
        (parseInt(_0x35f155(0x1ca)) / 0xa) *
          (parseInt(_0x35f155(0x1d6)) / 0xb) +
        (-parseInt(_0x35f155(0x1cd)) / 0xc) *
          (parseInt(_0x35f155(0x1d1)) / 0xd);
      if (_0x121989 === _0x5e6cad) break;
      else _0x8bd72d['push'](_0x8bd72d['shift']());
    } catch (_0x3ca809) {
      _0x8bd72d['push'](_0x8bd72d['shift']());
    }
  }
})(a482_0x3983, 0x28ef8);
var __importDefault =
  (this && this[a482_0x234664(0x1c1)]) ||
  function (_0x42e966) {
    const _0x213ffb = a482_0x234664;
    return _0x42e966 && _0x42e966[_0x213ffb(0x1d5)]
      ? _0x42e966
      : { default: _0x42e966 };
  };
function a482_0x2253(_0x99c0bc, _0x45f4d5) {
  const _0x39834d = a482_0x3983();
  return (
    (a482_0x2253 = function (_0x225382, _0x4bc8f4) {
      _0x225382 = _0x225382 - 0x1be;
      let _0x4972d1 = _0x39834d[_0x225382];
      return _0x4972d1;
    }),
    a482_0x2253(_0x99c0bc, _0x45f4d5)
  );
}
Object[a482_0x234664(0x1ce)](exports, a482_0x234664(0x1d5), { value: !![] });
const Contact_1 = __importDefault(require(a482_0x234664(0x1c0))),
  ContactCustomField_1 = __importDefault(require(a482_0x234664(0x1d2))),
  Tag_1 = __importDefault(require(a482_0x234664(0x1c2))),
  FindAllContactService = async ({ companyId: _0x1615b3 }) => {
    const _0x10dd1d = a482_0x234664;
    let _0x220621 = { companyId: _0x1615b3 };
    const _0x17cd1b = await Contact_1['default'][_0x10dd1d(0x1c4)]({
      where: _0x220621,
      order: [[_0x10dd1d(0x1c8), _0x10dd1d(0x1cf)]],
      include: [
        {
          model: Tag_1[_0x10dd1d(0x1d7)],
          as: _0x10dd1d(0x1d4),
          attributes: ['id', _0x10dd1d(0x1c8), _0x10dd1d(0x1bf), 'updatedAt']
        },
        {
          model: ContactCustomField_1[_0x10dd1d(0x1d7)],
          as: 'extraInfo',
          attributes: ['id', 'name', _0x10dd1d(0x1c9)]
        }
      ]
    });
    return _0x17cd1b;
  };
function a482_0x3983() {
  const _0x2ca247 = [
    '11wIWtVs',
    'default',
    '2035476MUKPya',
    'color',
    '../../models/Contact',
    '__importDefault',
    '../../models/Tag',
    '4VPZCrQ',
    'findAll',
    '1642SdvNQN',
    '6995OFEfiw',
    '989619Ajnwiu',
    'name',
    'value',
    '3251930CDxDyq',
    '239aoEeOv',
    '1158AQrNpM',
    '5885508iwAURj',
    'defineProperty',
    'ASC',
    '427CFcGEI',
    '13mElAmV',
    '../../models/ContactCustomField',
    '38936xiFNbR',
    'tags',
    '__esModule'
  ];
  a482_0x3983 = function () {
    return _0x2ca247;
  };
  return a482_0x3983();
}
exports['default'] = FindAllContactService;
