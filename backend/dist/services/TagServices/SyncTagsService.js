'use strict';
const a610_0x3fb59a = a610_0x1520;
(function (_0x33a416, _0x3ff783) {
  const _0x34300c = a610_0x1520,
    _0x4a18d8 = _0x33a416();
  while (!![]) {
    try {
      const _0x4c55cb =
        -parseInt(_0x34300c(0xd3)) / 0x1 +
        -parseInt(_0x34300c(0xd5)) / 0x2 +
        (parseInt(_0x34300c(0xd9)) / 0x3) * (-parseInt(_0x34300c(0xd7)) / 0x4) +
        (-parseInt(_0x34300c(0xdf)) / 0x5) *
          (-parseInt(_0x34300c(0xe6)) / 0x6) +
        -parseInt(_0x34300c(0xe4)) / 0x7 +
        (-parseInt(_0x34300c(0xe5)) / 0x8) * (parseInt(_0x34300c(0xd6)) / 0x9) +
        (-parseInt(_0x34300c(0xde)) / 0xa) * (-parseInt(_0x34300c(0xe0)) / 0xb);
      if (_0x4c55cb === _0x3ff783) break;
      else _0x4a18d8['push'](_0x4a18d8['shift']());
    } catch (_0x49d405) {
      _0x4a18d8['push'](_0x4a18d8['shift']());
    }
  }
})(a610_0x3cea, 0x2da11);
function a610_0x1520(_0x4ed634, _0x61b4a8) {
  const _0x3ceaf3 = a610_0x3cea();
  return (
    (a610_0x1520 = function (_0x152062, _0x170dc4) {
      _0x152062 = _0x152062 - 0xd3;
      let _0x20096 = _0x3ceaf3[_0x152062];
      return _0x20096;
    }),
    a610_0x1520(_0x4ed634, _0x61b4a8)
  );
}
function a610_0x3cea() {
  const _0x29fa79 = [
    '44310SmxnqD',
    '30239iTVMYl',
    'reload',
    'map',
    '../../models/ContactTag',
    '2087967BQZBWV',
    '8sTrXJz',
    '234McXKzS',
    '26352eJBTsu',
    '__esModule',
    '718162joEJYg',
    '1171719ZjSjdp',
    '67020VUVDUA',
    '../../models/Tag',
    '21Umieyh',
    '../../models/Contact',
    'default',
    'findByPk',
    'bulkCreate',
    '2810UyKBXM'
  ];
  a610_0x3cea = function () {
    return _0x29fa79;
  };
  return a610_0x3cea();
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x17c515) {
    const _0x15653b = a610_0x1520;
    return _0x17c515 && _0x17c515[_0x15653b(0xd4)]
      ? _0x17c515
      : { default: _0x17c515 };
  };
Object['defineProperty'](exports, a610_0x3fb59a(0xd4), { value: !![] });
const Tag_1 = __importDefault(require(a610_0x3fb59a(0xd8))),
  Contact_1 = __importDefault(require(a610_0x3fb59a(0xda))),
  ContactTag_1 = __importDefault(require(a610_0x3fb59a(0xe3))),
  SyncTags = async ({ tags: _0x57f3fd, contactId: _0x2f0bfd }) => {
    const _0x5bce4c = a610_0x3fb59a,
      _0x14f956 = await Contact_1['default'][_0x5bce4c(0xdc)](_0x2f0bfd, {
        include: [Tag_1[_0x5bce4c(0xdb)]]
      }),
      _0x27ff8d = _0x57f3fd[_0x5bce4c(0xe2)](_0x23c1f1 => ({
        tagId: _0x23c1f1['id'],
        contactId: _0x2f0bfd
      }));
    return (
      await ContactTag_1[_0x5bce4c(0xdb)]['destroy']({
        where: { contactId: _0x2f0bfd }
      }),
      await ContactTag_1[_0x5bce4c(0xdb)][_0x5bce4c(0xdd)](_0x27ff8d),
      _0x14f956?.[_0x5bce4c(0xe1)](),
      _0x14f956
    );
  };
exports[a610_0x3fb59a(0xdb)] = SyncTags;
