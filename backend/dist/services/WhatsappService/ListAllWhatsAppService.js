'use strict';
const a665_0x4f36d7 = a665_0x2dd0;
(function (_0x169e06, _0x59d82f) {
  const _0x52962d = a665_0x2dd0,
    _0x1f789f = _0x169e06();
  while (!![]) {
    try {
      const _0x2f03bb =
        parseInt(_0x52962d(0x1fb)) / 0x1 +
        parseInt(_0x52962d(0x1f3)) / 0x2 +
        (parseInt(_0x52962d(0x1fe)) / 0x3) *
          (-parseInt(_0x52962d(0x1f0)) / 0x4) +
        (parseInt(_0x52962d(0x1f7)) / 0x5) *
          (-parseInt(_0x52962d(0x1ed)) / 0x6) +
        (-parseInt(_0x52962d(0x1f9)) / 0x7) *
          (-parseInt(_0x52962d(0x1f2)) / 0x8) +
        (-parseInt(_0x52962d(0x1ea)) / 0x9) *
          (parseInt(_0x52962d(0x1f8)) / 0xa) +
        (-parseInt(_0x52962d(0x1ef)) / 0xb) *
          (-parseInt(_0x52962d(0x1f6)) / 0xc);
      if (_0x2f03bb === _0x59d82f) break;
      else _0x1f789f['push'](_0x1f789f['shift']());
    } catch (_0x55782a) {
      _0x1f789f['push'](_0x1f789f['shift']());
    }
  }
})(a665_0x3140, 0xbf103);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x2ebf1a) {
    const _0x4f91ae = a665_0x2dd0;
    return _0x2ebf1a && _0x2ebf1a[_0x4f91ae(0x1eb)]
      ? _0x2ebf1a
      : { default: _0x2ebf1a };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] });
function a665_0x2dd0(_0x354d89, _0x4e79bd) {
  const _0x31408f = a665_0x3140();
  return (
    (a665_0x2dd0 = function (_0x2dd0c3, _0x104c65) {
      _0x2dd0c3 = _0x2dd0c3 - 0x1ea;
      let _0x38667e = _0x31408f[_0x2dd0c3];
      return _0x38667e;
    }),
    a665_0x2dd0(_0x354d89, _0x4e79bd)
  );
}
const Queue_1 = __importDefault(require(a665_0x4f36d7(0x1f5))),
  Whatsapp_1 = __importDefault(require(a665_0x4f36d7(0x1fc))),
  ListAllWhatsAppsService = async ({ session: _0x3b60dc }) => {
    const _0x5d4a4b = a665_0x4f36d7,
      _0x25e99b = {
        include: [
          {
            model: Queue_1[_0x5d4a4b(0x1f4)],
            as: 'queues',
            attributes: [
              'id',
              _0x5d4a4b(0x1fa),
              _0x5d4a4b(0x1ee),
              _0x5d4a4b(0x1f1)
            ]
          }
        ]
      };
    _0x3b60dc !== undefined &&
      _0x3b60dc == 0x0 &&
      (_0x25e99b[_0x5d4a4b(0x1ec)] = { exclude: ['session'] });
    const _0x3ca45d =
      await Whatsapp_1[_0x5d4a4b(0x1f4)][_0x5d4a4b(0x1fd)](_0x25e99b);
    return _0x3ca45d;
  };
function a665_0x3140() {
  const _0x503160 = [
    '322956nCInNP',
    'color',
    '2321ZcFVCj',
    '1233224immqMm',
    'greetingMessage',
    '103208JodFpT',
    '226748aPMATF',
    'default',
    '../../models/Queue',
    '78564WbtzBi',
    '10gohKjk',
    '260490HNhpwF',
    '301EmaUXH',
    'name',
    '1037750GoRNOb',
    '../../models/Whatsapp',
    'findAll',
    '12iicBkI',
    '333ehaQtH',
    '__esModule',
    'attributes'
  ];
  a665_0x3140 = function () {
    return _0x503160;
  };
  return a665_0x3140();
}
exports[a665_0x4f36d7(0x1f4)] = ListAllWhatsAppsService;
