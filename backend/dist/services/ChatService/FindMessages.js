'use strict';
function a442_0x23c4() {
  const _0x450660 = [
    '2268zxoDFs',
    'length',
    '__esModule',
    '../../models/ChatUser',
    'createdAt',
    '3597900NkUepM',
    'count',
    '2376220EGRivi',
    'sender',
    'sortBy',
    'ASC',
    'name',
    '516948LVlFsk',
    'defineProperty',
    '3224TlZyfb',
    '../../errors/AppError',
    '12790AJtksT',
    '5iIUpml',
    '../../models/ChatMessage',
    '454453EhRIaI',
    '16744lgJHjb',
    'default',
    'DESC',
    'findAndCountAll',
    '6rtaONA',
    '../../models/User',
    '__importDefault',
    '1156359VlczDB'
  ];
  a442_0x23c4 = function () {
    return _0x450660;
  };
  return a442_0x23c4();
}
function a442_0x3f2d(_0x562496, _0x47a224) {
  const _0x23c45b = a442_0x23c4();
  return (
    (a442_0x3f2d = function (_0x3f2daf, _0xff8208) {
      _0x3f2daf = _0x3f2daf - 0x13d;
      let _0x12644a = _0x23c45b[_0x3f2daf];
      return _0x12644a;
    }),
    a442_0x3f2d(_0x562496, _0x47a224)
  );
}
const a442_0x2cc716 = a442_0x3f2d;
(function (_0x9c22d7, _0xce02db) {
  const _0x378cb7 = a442_0x3f2d,
    _0x46367f = _0x9c22d7();
  while (!![]) {
    try {
      const _0x21d98e =
        (parseInt(_0x378cb7(0x158)) / 0x1) *
          (parseInt(_0x378cb7(0x141)) / 0x2) +
        parseInt(_0x378cb7(0x144)) / 0x3 +
        (-parseInt(_0x378cb7(0x151)) / 0x4) *
          (parseInt(_0x378cb7(0x156)) / 0x5) +
        parseInt(_0x378cb7(0x14a)) / 0x6 +
        (-parseInt(_0x378cb7(0x13d)) / 0x7) *
          (parseInt(_0x378cb7(0x153)) / 0x8) +
        (parseInt(_0x378cb7(0x145)) / 0x9) *
          (-parseInt(_0x378cb7(0x155)) / 0xa) +
        -parseInt(_0x378cb7(0x14c)) / 0xb;
      if (_0x21d98e === _0xce02db) break;
      else _0x46367f['push'](_0x46367f['shift']());
    } catch (_0x5bf9f) {
      _0x46367f['push'](_0x46367f['shift']());
    }
  }
})(a442_0x23c4, 0xaf079);
var __importDefault =
  (this && this[a442_0x2cc716(0x143)]) ||
  function (_0x230bf4) {
    return _0x230bf4 && _0x230bf4['__esModule']
      ? _0x230bf4
      : { default: _0x230bf4 };
  };
Object[a442_0x2cc716(0x152)](exports, a442_0x2cc716(0x147), { value: !![] });
const AppError_1 = __importDefault(require(a442_0x2cc716(0x154))),
  ChatMessage_1 = __importDefault(require(a442_0x2cc716(0x157))),
  ChatUser_1 = __importDefault(require(a442_0x2cc716(0x148))),
  User_1 = __importDefault(require(a442_0x2cc716(0x142))),
  lodash_1 = require('lodash'),
  FindMessages = async ({
    chatId: _0x3d3002,
    ownerId: _0x16699d,
    pageNumber: pageNumber = '1'
  }) => {
    const _0x4fc6c6 = a442_0x2cc716,
      _0x2f08a8 = await ChatUser_1['default'][_0x4fc6c6(0x14b)]({
        where: { chatId: _0x3d3002, userId: _0x16699d }
      });
    if (_0x2f08a8 === 0x0)
      throw new AppError_1['default']('UNAUTHORIZED', 0x190);
    const _0x3cbb37 = 0x14,
      _0x2873b4 = _0x3cbb37 * (+pageNumber - 0x1),
      { count: _0x2687c5, rows: _0xb43f7e } = await ChatMessage_1['default'][
        _0x4fc6c6(0x140)
      ]({
        where: { chatId: _0x3d3002 },
        include: [
          {
            model: User_1[_0x4fc6c6(0x13e)],
            as: _0x4fc6c6(0x14d),
            attributes: ['id', _0x4fc6c6(0x150)]
          }
        ],
        limit: _0x3cbb37,
        offset: _0x2873b4,
        order: [[_0x4fc6c6(0x149), _0x4fc6c6(0x13f)]]
      }),
      _0x44291b = _0x2687c5 > _0x2873b4 + _0xb43f7e[_0x4fc6c6(0x146)],
      _0x194ad1 = (0x0, lodash_1[_0x4fc6c6(0x14e)])(_0xb43f7e, [
        'id',
        _0x4fc6c6(0x14f)
      ]);
    return { records: _0x194ad1, count: _0x2687c5, hasMore: _0x44291b };
  };
exports[a442_0x2cc716(0x13e)] = FindMessages;
