'use strict';
const a283_0x4b62ef = a283_0x1b2a;
(function (_0x21fde8, _0x442ef6) {
  const _0x302e30 = a283_0x1b2a,
    _0x42da81 = _0x21fde8();
  while (!![]) {
    try {
      const _0x2f64d4 =
        (parseInt(_0x302e30(0x1e8)) / 0x1) *
          (parseInt(_0x302e30(0x1f8)) / 0x2) +
        (-parseInt(_0x302e30(0x1e9)) / 0x3) *
          (parseInt(_0x302e30(0x1e4)) / 0x4) +
        (parseInt(_0x302e30(0x1fa)) / 0x5) *
          (parseInt(_0x302e30(0x1f4)) / 0x6) +
        -parseInt(_0x302e30(0x1e7)) / 0x7 +
        (parseInt(_0x302e30(0x1e5)) / 0x8) *
          (-parseInt(_0x302e30(0x1fb)) / 0x9) +
        -parseInt(_0x302e30(0x1f0)) / 0xa +
        (parseInt(_0x302e30(0x1e6)) / 0xb) * (parseInt(_0x302e30(0x1ed)) / 0xc);
      if (_0x2f64d4 === _0x442ef6) break;
      else _0x42da81['push'](_0x42da81['shift']());
    } catch (_0xca7ae3) {
      _0x42da81['push'](_0x42da81['shift']());
    }
  }
})(a283_0x2b21, 0x19512);
function a283_0x1b2a(_0x200844, _0x4374c1) {
  const _0x2b2174 = a283_0x2b21();
  return (
    (a283_0x1b2a = function (_0x1b2a1d, _0x1224af) {
      _0x1b2a1d = _0x1b2a1d - 0x1e3;
      let _0x28d3d2 = _0x2b2174[_0x1b2a1d];
      return _0x28d3d2;
    }),
    a283_0x1b2a(_0x200844, _0x4374c1)
  );
}
var __importDefault =
  (this && this[a283_0x4b62ef(0x1ef)]) ||
  function (_0x2b7884) {
    const _0x5ee78b = a283_0x4b62ef;
    return _0x2b7884 && _0x2b7884[_0x5ee78b(0x1f5)]
      ? _0x2b7884
      : { default: _0x2b7884 };
  };
Object[a283_0x4b62ef(0x1f7)](exports, a283_0x4b62ef(0x1f5), { value: !![] });
const sequelize_1 = require(a283_0x4b62ef(0x1eb)),
  AppError_1 = __importDefault(require(a283_0x4b62ef(0x1ea))),
  Ticket_1 = __importDefault(require('../models/Ticket')),
  User_1 = __importDefault(require(a283_0x4b62ef(0x1ee))),
  Queue_1 = __importDefault(require(a283_0x4b62ef(0x1f6))),
  CheckContactOpenTickets = async (_0x47fd49, _0x3e8faa) => {
    const _0x238692 = a283_0x4b62ef,
      _0x485e69 = await Ticket_1[_0x238692(0x1ec)]['findOne']({
        where: {
          contactId: _0x47fd49,
          status: {
            [sequelize_1['Op']['or']]: [_0x238692(0x1f1), _0x238692(0x1f2)]
          },
          whatsappId: _0x3e8faa
        },
        include: [
          {
            model: Queue_1[_0x238692(0x1ec)],
            as: _0x238692(0x1f9),
            attributes: ['id', 'name', 'color']
          },
          {
            model: User_1[_0x238692(0x1ec)],
            as: _0x238692(0x1f3),
            attributes: ['id', 'name']
          }
        ]
      });
    if (_0x485e69)
      throw new AppError_1[_0x238692(0x1ec)](
        JSON[_0x238692(0x1e3)](_0x485e69),
        0x199
      );
  };
exports[a283_0x4b62ef(0x1ec)] = CheckContactOpenTickets;
function a283_0x2b21() {
  const _0x4eaa95 = [
    '72vGLavo',
    '1139608pzEgge',
    '4483006sHOFQE',
    '1450876AriwjO',
    '70FHOSmH',
    '8583iSFLaV',
    '../errors/AppError',
    'sequelize',
    'default',
    '12QVveuX',
    '../models/User',
    '__importDefault',
    '309420UOTHqN',
    'open',
    'pending',
    'user',
    '244722atQbhQ',
    '__esModule',
    '../models/Queue',
    'defineProperty',
    '170aEASNN',
    'queue',
    '15GBBmfb',
    '9rZzkQu',
    'stringify'
  ];
  a283_0x2b21 = function () {
    return _0x4eaa95;
  };
  return a283_0x2b21();
}
