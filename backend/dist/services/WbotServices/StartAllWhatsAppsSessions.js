'use strict';
var a656_0x2bc752 = a656_0x2453;
(function (_0x240a21, _0x3923a0) {
  var _0x4593f6 = a656_0x2453,
    _0x14ec30 = _0x240a21();
  while (!![]) {
    try {
      var _0x5d86fe =
        (-parseInt(_0x4593f6(0x17b)) / 0x1) *
          (parseInt(_0x4593f6(0x18a)) / 0x2) +
        -parseInt(_0x4593f6(0x186)) / 0x3 +
        (-parseInt(_0x4593f6(0x170)) / 0x4) *
          (parseInt(_0x4593f6(0x189)) / 0x5) +
        parseInt(_0x4593f6(0x177)) / 0x6 +
        (parseInt(_0x4593f6(0x18b)) / 0x7) *
          (parseInt(_0x4593f6(0x172)) / 0x8) +
        (-parseInt(_0x4593f6(0x181)) / 0x9) *
          (parseInt(_0x4593f6(0x178)) / 0xa) +
        (parseInt(_0x4593f6(0x176)) / 0xb) * (parseInt(_0x4593f6(0x171)) / 0xc);
      if (_0x5d86fe === _0x3923a0) break;
      else _0x14ec30['push'](_0x14ec30['shift']());
    } catch (_0x50ccd9) {
      _0x14ec30['push'](_0x14ec30['shift']());
    }
  }
})(a656_0x478d, 0x5a423);
var __createBinding =
    (this && this['__createBinding']) ||
    (Object[a656_0x2bc752(0x16f)]
      ? function (_0x2b2007, _0x438830, _0x19dcc9, _0x3792a9) {
          var _0x9f4566 = a656_0x2bc752;
          if (_0x3792a9 === undefined) _0x3792a9 = _0x19dcc9;
          var _0x10087d = Object[_0x9f4566(0x182)](_0x438830, _0x19dcc9);
          (!_0x10087d ||
            (_0x9f4566(0x17c) in _0x10087d
              ? !_0x438830[_0x9f4566(0x187)]
              : _0x10087d['writable'] || _0x10087d[_0x9f4566(0x17a)])) &&
            (_0x10087d = {
              enumerable: !![],
              get: function () {
                return _0x438830[_0x19dcc9];
              }
            }),
            Object[_0x9f4566(0x17f)](_0x2b2007, _0x3792a9, _0x10087d);
        }
      : function (_0x11cee4, _0x53fca7, _0x6525ea, _0x3497a7) {
          if (_0x3497a7 === undefined) _0x3497a7 = _0x6525ea;
          _0x11cee4[_0x3497a7] = _0x53fca7[_0x6525ea];
        }),
  __setModuleDefault =
    (this && this[a656_0x2bc752(0x179)]) ||
    (Object[a656_0x2bc752(0x16f)]
      ? function (_0xaf8703, _0x4ffe20) {
          var _0x47c0af = a656_0x2bc752;
          Object['defineProperty'](_0xaf8703, _0x47c0af(0x174), {
            enumerable: !![],
            value: _0x4ffe20
          });
        }
      : function (_0x90eb70, _0x1251b0) {
          var _0x35b3a9 = a656_0x2bc752;
          _0x90eb70[_0x35b3a9(0x174)] = _0x1251b0;
        }),
  __importStar =
    (this && this[a656_0x2bc752(0x180)]) ||
    function (_0x57ba0a) {
      var _0x1baf0c = a656_0x2bc752;
      if (_0x57ba0a && _0x57ba0a[_0x1baf0c(0x187)]) return _0x57ba0a;
      var _0x179f78 = {};
      if (_0x57ba0a != null) {
        for (var _0x5a4640 in _0x57ba0a)
          if (
            _0x5a4640 !== _0x1baf0c(0x174) &&
            Object['prototype'][_0x1baf0c(0x183)]['call'](_0x57ba0a, _0x5a4640)
          )
            __createBinding(_0x179f78, _0x57ba0a, _0x5a4640);
      }
      return __setModuleDefault(_0x179f78, _0x57ba0a), _0x179f78;
    },
  __importDefault =
    (this && this[a656_0x2bc752(0x175)]) ||
    function (_0x1dff95) {
      var _0x365b2d = a656_0x2bc752;
      return _0x1dff95 && _0x1dff95[_0x365b2d(0x187)]
        ? _0x1dff95
        : { default: _0x1dff95 };
    };
function a656_0x2453(_0x33cb17, _0x57563e) {
  var _0x478d25 = a656_0x478d();
  return (
    (a656_0x2453 = function (_0x245395, _0x4d7ae7) {
      _0x245395 = _0x245395 - 0x16e;
      var _0x5bf94b = _0x478d25[_0x245395];
      return _0x5bf94b;
    }),
    a656_0x2453(_0x33cb17, _0x57563e)
  );
}
Object[a656_0x2bc752(0x17f)](exports, a656_0x2bc752(0x187), { value: !![] }),
  (exports['StartAllWhatsAppsSessions'] = void 0x0);
const ListWhatsAppsService_1 = __importDefault(require(a656_0x2bc752(0x185))),
  StartWhatsAppSession_1 = require(a656_0x2bc752(0x184)),
  Sentry = __importStar(require('@sentry/node')),
  StartAllWhatsAppsSessions = async _0x3a7414 => {
    var _0x3e5f61 = a656_0x2bc752;
    try {
      const _0x11bd4f = await (0x0, ListWhatsAppsService_1[_0x3e5f61(0x174)])({
        companyId: _0x3a7414
      });
      _0x11bd4f[_0x3e5f61(0x173)] > 0x0 &&
        _0x11bd4f[_0x3e5f61(0x17e)](_0x326523 => {
          var _0x2ee5c6 = _0x3e5f61;
          _0x326523['channel'] === _0x2ee5c6(0x188) &&
            (0x0, StartWhatsAppSession_1[_0x2ee5c6(0x17d)])(
              _0x326523,
              _0x3a7414
            );
        });
    } catch (_0x5516e7) {
      Sentry['captureException'](_0x5516e7);
    }
  };
exports[a656_0x2bc752(0x16e)] = StartAllWhatsAppsSessions;
function a656_0x478d() {
  var _0x223122 = [
    'forEach',
    'defineProperty',
    '__importStar',
    '80991PsIStv',
    'getOwnPropertyDescriptor',
    'hasOwnProperty',
    './StartWhatsAppSession',
    '../WhatsappService/ListWhatsAppsService',
    '1911060xOsQEL',
    '__esModule',
    'whatsapp',
    '2000030KiieTC',
    '94FNSvyZ',
    '14959fGjfzt',
    'StartAllWhatsAppsSessions',
    'create',
    '4rEGPea',
    '175920suvloS',
    '2680TMAKtU',
    'length',
    'default',
    '__importDefault',
    '990bhcaKm',
    '1627452MgsjYa',
    '490TQZnHq',
    '__setModuleDefault',
    'configurable',
    '9763FZYCan',
    'get',
    'StartWhatsAppSession'
  ];
  a656_0x478d = function () {
    return _0x223122;
  };
  return a656_0x478d();
}
