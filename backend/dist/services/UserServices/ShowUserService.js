'use strict';
function a638_0x4bb8() {
  const _0x66a167 = [
    'useInstagram',
    'useIntegrations',
    'useSchedules',
    'useCampaigns',
    '../../models/User',
    'amount',
    'findOne',
    '6423912OXquAM',
    '3056RXVqhU',
    '2kcIAiV',
    '23539260dshVFq',
    '10105480flehpP',
    '../../models/Queue',
    'useKanban',
    'color',
    '../../models/Company',
    'queues',
    'default',
    'defineProperty',
    '1586089EkKOtu',
    'name',
    '5FSLizv',
    '__esModule',
    'useFacebook',
    '6426BLHdEE',
    'document',
    '136020KZZGNJ',
    'useOpenAi',
    '8733736LMUDna',
    'ERR_NO_USER_FOUND',
    '__importDefault',
    'dueDate',
    'company'
  ];
  a638_0x4bb8 = function () {
    return _0x66a167;
  };
  return a638_0x4bb8();
}
const a638_0x122982 = a638_0x5b0f;
(function (_0x97bfd8, _0x596681) {
  const _0xd352fc = a638_0x5b0f,
    _0x53076b = _0x97bfd8();
  while (!![]) {
    try {
      const _0x435b5d =
        (parseInt(_0xd352fc(0xab)) / 0x1) * (parseInt(_0xd352fc(0xa1)) / 0x2) +
        (-parseInt(_0xd352fc(0xb0)) / 0x3) * (parseInt(_0xd352fc(0xa0)) / 0x4) +
        (parseInt(_0xd352fc(0xad)) / 0x5) * (-parseInt(_0xd352fc(0xb2)) / 0x6) +
        parseInt(_0xd352fc(0xa3)) / 0x7 +
        parseInt(_0xd352fc(0xb4)) / 0x8 +
        parseInt(_0xd352fc(0x9f)) / 0x9 +
        -parseInt(_0xd352fc(0xa2)) / 0xa;
      if (_0x435b5d === _0x596681) break;
      else _0x53076b['push'](_0x53076b['shift']());
    } catch (_0x84527a) {
      _0x53076b['push'](_0x53076b['shift']());
    }
  }
})(a638_0x4bb8, 0xc8b72);
function a638_0x5b0f(_0x38815b, _0x4abdae) {
  const _0x4bb8be = a638_0x4bb8();
  return (
    (a638_0x5b0f = function (_0x5b0fbd, _0x4e2af9) {
      _0x5b0fbd = _0x5b0fbd - 0x95;
      let _0x11bb5c = _0x4bb8be[_0x5b0fbd];
      return _0x11bb5c;
    }),
    a638_0x5b0f(_0x38815b, _0x4abdae)
  );
}
var __importDefault =
  (this && this[a638_0x122982(0x95)]) ||
  function (_0x40c937) {
    const _0x379886 = a638_0x122982;
    return _0x40c937 && _0x40c937[_0x379886(0xae)]
      ? _0x40c937
      : { default: _0x40c937 };
  };
Object[a638_0x122982(0xaa)](exports, a638_0x122982(0xae), { value: !![] });
const User_1 = __importDefault(require(a638_0x122982(0x9c))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  Queue_1 = __importDefault(require(a638_0x122982(0xa4))),
  Company_1 = __importDefault(require(a638_0x122982(0xa7))),
  Plan_1 = __importDefault(require('../../models/Plan')),
  ShowUserService = async (_0x3df02b, _0x4be4ab) => {
    const _0x1f85f0 = a638_0x122982,
      _0x3f90c0 = await User_1[_0x1f85f0(0xa9)][_0x1f85f0(0x9e)]({
        where: { id: _0x3df02b, companyId: _0x4be4ab },
        include: [
          {
            model: Queue_1[_0x1f85f0(0xa9)],
            as: _0x1f85f0(0xa8),
            attributes: ['id', _0x1f85f0(0xac), _0x1f85f0(0xa6)]
          },
          {
            model: Company_1[_0x1f85f0(0xa9)],
            as: _0x1f85f0(0x97),
            attributes: [
              'id',
              _0x1f85f0(0xac),
              _0x1f85f0(0x96),
              _0x1f85f0(0xb1)
            ],
            include: [
              {
                model: Plan_1['default'],
                as: 'plan',
                attributes: [
                  'id',
                  _0x1f85f0(0xac),
                  _0x1f85f0(0x9d),
                  'useWhatsapp',
                  _0x1f85f0(0xaf),
                  _0x1f85f0(0x98),
                  _0x1f85f0(0x9b),
                  _0x1f85f0(0x9a),
                  'useInternalChat',
                  'useExternalApi',
                  _0x1f85f0(0x99),
                  _0x1f85f0(0xb3),
                  _0x1f85f0(0xa5)
                ]
              }
            ]
          }
        ]
      });
    if (!_0x3f90c0)
      throw new AppError_1[_0x1f85f0(0xa9)](_0x1f85f0(0xb5), 0x194);
    return _0x3f90c0;
  };
exports[a638_0x122982(0xa9)] = ShowUserService;
