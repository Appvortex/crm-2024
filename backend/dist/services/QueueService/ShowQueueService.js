'use strict';
const a562_0x48c666 = a562_0x1e79;
function a562_0x41b7() {
  const _0x516aad = [
    '6460254NVrdTe',
    '1641379AOfsSe',
    '8163cIBBRF',
    '__importDefault',
    'findOne',
    'default',
    '../../models/User',
    '8750021gUihQi',
    '2yavJuN',
    '7664fryTus',
    '../../models/Chatbot',
    '612070JUxkFv',
    '2247516crPFZX',
    '6400216NSrNFb',
    'defineProperty',
    'chatbots',
    '__esModule',
    'asc',
    '../../models/Queue',
    '../../errors/AppError',
    'ERR_QUEUE_NOT_FOUND',
    'ASC'
  ];
  a562_0x41b7 = function () {
    return _0x516aad;
  };
  return a562_0x41b7();
}
function a562_0x1e79(_0x593bb5, _0x15fb4a) {
  const _0x41b772 = a562_0x41b7();
  return (
    (a562_0x1e79 = function (_0x1e799c, _0x31e8c8) {
      _0x1e799c = _0x1e799c - 0x175;
      let _0x2bcf5b = _0x41b772[_0x1e799c];
      return _0x2bcf5b;
    }),
    a562_0x1e79(_0x593bb5, _0x15fb4a)
  );
}
(function (_0x30fc33, _0x5269b5) {
  const _0x4e3636 = a562_0x1e79,
    _0x15255d = _0x30fc33();
  while (!![]) {
    try {
      const _0x3fdb32 =
        (-parseInt(_0x4e3636(0x176)) / 0x1) *
          (-parseInt(_0x4e3636(0x17d)) / 0x2) +
        parseInt(_0x4e3636(0x181)) / 0x3 +
        parseInt(_0x4e3636(0x182)) / 0x4 +
        parseInt(_0x4e3636(0x180)) / 0x5 +
        -parseInt(_0x4e3636(0x175)) / 0x6 +
        -parseInt(_0x4e3636(0x17c)) / 0x7 +
        (parseInt(_0x4e3636(0x17e)) / 0x8) *
          (-parseInt(_0x4e3636(0x177)) / 0x9);
      if (_0x3fdb32 === _0x5269b5) break;
      else _0x15255d['push'](_0x15255d['shift']());
    } catch (_0x21cefd) {
      _0x15255d['push'](_0x15255d['shift']());
    }
  }
})(a562_0x41b7, 0xdff99);
var __importDefault =
  (this && this[a562_0x48c666(0x178)]) ||
  function (_0x4e59f4) {
    const _0x1584a4 = a562_0x48c666;
    return _0x4e59f4 && _0x4e59f4[_0x1584a4(0x185)]
      ? _0x4e59f4
      : { default: _0x4e59f4 };
  };
Object[a562_0x48c666(0x183)](exports, a562_0x48c666(0x185), { value: !![] });
const AppError_1 = __importDefault(require(a562_0x48c666(0x188))),
  Chatbot_1 = __importDefault(require(a562_0x48c666(0x17f))),
  Queue_1 = __importDefault(require(a562_0x48c666(0x187))),
  User_1 = __importDefault(require(a562_0x48c666(0x17b))),
  ShowQueueService = async (_0x4b5606, _0x1cec4e) => {
    const _0x4f440d = a562_0x48c666,
      _0x5ad491 = await Queue_1[_0x4f440d(0x17a)][_0x4f440d(0x179)]({
        where: { id: _0x4b5606, companyId: _0x1cec4e },
        include: [
          {
            model: Chatbot_1[_0x4f440d(0x17a)],
            as: 'chatbots',
            include: [{ model: User_1[_0x4f440d(0x17a)], as: 'user' }]
          }
        ],
        order: [
          [
            { model: Chatbot_1[_0x4f440d(0x17a)], as: _0x4f440d(0x184) },
            'id',
            _0x4f440d(0x186)
          ],
          ['id', _0x4f440d(0x18a)]
        ]
      });
    if (!_0x5ad491) throw new AppError_1[_0x4f440d(0x17a)](_0x4f440d(0x189));
    return _0x5ad491;
  };
exports[a562_0x48c666(0x17a)] = ShowQueueService;
