'use strict';
const a606_0x363c91 = a606_0x3526;
(function (_0x237d11, _0x54bfcd) {
  const _0x470a8e = a606_0x3526,
    _0x3630c4 = _0x237d11();
  while (!![]) {
    try {
      const _0x351167 =
        parseInt(_0x470a8e(0x1f2)) / 0x1 +
        (parseInt(_0x470a8e(0x1e4)) / 0x2) *
          (parseInt(_0x470a8e(0x1eb)) / 0x3) +
        (parseInt(_0x470a8e(0x1ee)) / 0x4) *
          (-parseInt(_0x470a8e(0x1ea)) / 0x5) +
        (parseInt(_0x470a8e(0x1ed)) / 0x6) *
          (parseInt(_0x470a8e(0x1f1)) / 0x7) +
        -parseInt(_0x470a8e(0x1e9)) / 0x8 +
        parseInt(_0x470a8e(0x1e7)) / 0x9 +
        (parseInt(_0x470a8e(0x1e5)) / 0xa) *
          (-parseInt(_0x470a8e(0x1e8)) / 0xb);
      if (_0x351167 === _0x54bfcd) break;
      else _0x3630c4['push'](_0x3630c4['shift']());
    } catch (_0x4ef91a) {
      _0x3630c4['push'](_0x3630c4['shift']());
    }
  }
})(a606_0x1fee, 0x57bdd);
var __importDefault =
  (this && this[a606_0x363c91(0x1f0)]) ||
  function (_0xa2340b) {
    const _0xc139d5 = a606_0x363c91;
    return _0xa2340b && _0xa2340b[_0xc139d5(0x1ef)]
      ? _0xa2340b
      : { default: _0xa2340b };
  };
Object[a606_0x363c91(0x1ec)](exports, '__esModule', { value: !![] });
const Tag_1 = __importDefault(require('../../models/Tag')),
  KanbanListService = async ({ companyId: _0x462f2f }) => {
    const _0x160114 = a606_0x363c91,
      _0x4a1b7b = await Tag_1['default']['findAll']({
        where: { kanban: 0x1, companyId: _0x462f2f },
        order: [['id', _0x160114(0x1e6)]],
        raw: !![]
      });
    return _0x4a1b7b;
  };
function a606_0x3526(_0x5242a3, _0x4af442) {
  const _0x1fee67 = a606_0x1fee();
  return (
    (a606_0x3526 = function (_0x352615, _0x3fb9a1) {
      _0x352615 = _0x352615 - 0x1e4;
      let _0x30346d = _0x1fee67[_0x352615];
      return _0x30346d;
    }),
    a606_0x3526(_0x5242a3, _0x4af442)
  );
}
function a606_0x1fee() {
  const _0x17e650 = [
    '1112nIKDrV',
    '__esModule',
    '__importDefault',
    '28fJTkCZ',
    '386092nKYznE',
    '1208DUxkIh',
    '50vExgwG',
    'ASC',
    '5174370DeSMGD',
    '2235893pijTzu',
    '621344JtOjzM',
    '11195TOQkab',
    '2952MAvnbS',
    'defineProperty',
    '780684cjHkju'
  ];
  a606_0x1fee = function () {
    return _0x17e650;
  };
  return a606_0x1fee();
}
exports['default'] = KanbanListService;
