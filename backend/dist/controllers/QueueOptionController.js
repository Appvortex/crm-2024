'use strict';
const a28_0x544e90 = a28_0x4264;
(function (_0x1805eb, _0x2fb6c9) {
  const _0x5bb68e = a28_0x4264,
    _0x269bd0 = _0x1805eb();
  while (!![]) {
    try {
      const _0x4cc699 =
        -parseInt(_0x5bb68e(0xcf)) / 0x1 +
        -parseInt(_0x5bb68e(0xda)) / 0x2 +
        -parseInt(_0x5bb68e(0xd5)) / 0x3 +
        -parseInt(_0x5bb68e(0xc7)) / 0x4 +
        (-parseInt(_0x5bb68e(0xdb)) / 0x5) *
          (-parseInt(_0x5bb68e(0xd3)) / 0x6) +
        (parseInt(_0x5bb68e(0xca)) / 0x7) * (parseInt(_0x5bb68e(0xce)) / 0x8) +
        parseInt(_0x5bb68e(0xd6)) / 0x9;
      if (_0x4cc699 === _0x2fb6c9) break;
      else _0x269bd0['push'](_0x269bd0['shift']());
    } catch (_0x98fe00) {
      _0x269bd0['push'](_0x269bd0['shift']());
    }
  }
})(a28_0x3816, 0xb2a4b);
var __importDefault =
  (this && this[a28_0x544e90(0xd9)]) ||
  function (_0x5185f4) {
    const _0xcb6ab3 = a28_0x544e90;
    return _0x5185f4 && _0x5185f4[_0xcb6ab3(0xcb)]
      ? _0x5185f4
      : { default: _0x5185f4 };
  };
Object[a28_0x544e90(0xc9)](exports, '__esModule', { value: !![] }),
  (exports[a28_0x544e90(0xc6)] =
    exports['update'] =
    exports['show'] =
    exports[a28_0x544e90(0xd4)] =
    exports['index'] =
      void 0x0);
const CreateService_1 = __importDefault(require(a28_0x544e90(0xd1))),
  ListService_1 = __importDefault(require(a28_0x544e90(0xdc))),
  UpdateService_1 = __importDefault(require(a28_0x544e90(0xd8))),
  ShowService_1 = __importDefault(require(a28_0x544e90(0xde))),
  DeleteService_1 = __importDefault(require(a28_0x544e90(0xd0))),
  index = async (_0x8416de, _0x43e38b) => {
    const _0x4d5a5c = a28_0x544e90,
      {
        queueId: _0x3be3c7,
        queueOptionId: _0x282c77,
        parentId: _0x34cd4e
      } = _0x8416de[_0x4d5a5c(0xc5)],
      _0x5cac32 = await (0x0, ListService_1[_0x4d5a5c(0xcc)])({
        queueId: _0x3be3c7,
        queueOptionId: _0x282c77,
        parentId: _0x34cd4e
      });
    return _0x43e38b[_0x4d5a5c(0xdf)](_0x5cac32);
  };
exports[a28_0x544e90(0xd7)] = index;
const store = async (_0x21fe55, _0x3a247f) => {
  const _0x145ef4 = a28_0x544e90,
    _0x355cea = _0x21fe55[_0x145ef4(0xd2)],
    _0x4ffd26 = await (0x0, CreateService_1[_0x145ef4(0xcc)])(_0x355cea);
  return _0x3a247f[_0x145ef4(0xe0)](0xc8)[_0x145ef4(0xdf)](_0x4ffd26);
};
function a28_0x4264(_0xc45c78, _0x33864b) {
  const _0x381629 = a28_0x3816();
  return (
    (a28_0x4264 = function (_0x4264c2, _0x3efd91) {
      _0x4264c2 = _0x4264c2 - 0xc5;
      let _0x403f43 = _0x381629[_0x4264c2];
      return _0x403f43;
    }),
    a28_0x4264(_0xc45c78, _0x33864b)
  );
}
exports[a28_0x544e90(0xd4)] = store;
const show = async (_0x1732eb, _0x391c7a) => {
  const _0x39e39c = a28_0x544e90,
    { queueOptionId: _0x26af7f } = _0x1732eb[_0x39e39c(0xe1)],
    _0x31d54f = await (0x0, ShowService_1[_0x39e39c(0xcc)])(_0x26af7f);
  return _0x391c7a[_0x39e39c(0xe0)](0xc8)[_0x39e39c(0xdf)](_0x31d54f);
};
exports[a28_0x544e90(0xdd)] = show;
const update = async (_0x1f58ec, _0x2c81b0) => {
  const _0x4c35ca = a28_0x544e90,
    { queueOptionId: _0x5e8a0a } = _0x1f58ec[_0x4c35ca(0xe1)],
    _0x9ca711 = _0x1f58ec[_0x4c35ca(0xd2)],
    _0x33b8d5 = await (0x0, UpdateService_1[_0x4c35ca(0xcc)])(
      _0x5e8a0a,
      _0x9ca711
    );
  return _0x2c81b0[_0x4c35ca(0xe0)](0xc8)[_0x4c35ca(0xdf)](_0x33b8d5);
};
exports[a28_0x544e90(0xc8)] = update;
const remove = async (_0xf9b9e3, _0x35f275) => {
  const _0x102d42 = a28_0x544e90,
    { queueOptionId: _0x4de924 } = _0xf9b9e3[_0x102d42(0xe1)];
  return (
    await (0x0, DeleteService_1[_0x102d42(0xcc)])(_0x4de924),
    _0x35f275['status'](0xc8)[_0x102d42(0xdf)]({ message: _0x102d42(0xcd) })
  );
};
function a28_0x3816() {
  const _0x2961fc = [
    '3126801GnbQEO',
    '9980091tFJLjD',
    'index',
    '../services/QueueOptionService/UpdateService',
    '__importDefault',
    '450510cjGuNY',
    '28445KJOmmm',
    '../services/QueueOptionService/ListService',
    'show',
    '../services/QueueOptionService/ShowService',
    'json',
    'status',
    'params',
    'query',
    'remove',
    '808268VvDVWJ',
    'update',
    'defineProperty',
    '50449idUzaW',
    '__esModule',
    'default',
    'Option\x20Delected',
    '112TuGXVT',
    '379534QThwOd',
    '../services/QueueOptionService/DeleteService',
    '../services/QueueOptionService/CreateService',
    'body',
    '1446XppbyF',
    'store'
  ];
  a28_0x3816 = function () {
    return _0x2961fc;
  };
  return a28_0x3816();
}
exports[a28_0x544e90(0xc6)] = remove;
