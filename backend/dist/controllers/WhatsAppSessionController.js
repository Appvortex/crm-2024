'use strict';
const a44_0x169f2f = a44_0x3607;
(function (_0x24f4c8, _0x2353aa) {
  const _0xf7734 = a44_0x3607,
    _0x182397 = _0x24f4c8();
  while (!![]) {
    try {
      const _0x121d8a =
        parseInt(_0xf7734(0x8d)) / 0x1 +
        (-parseInt(_0xf7734(0x7d)) / 0x2) * (parseInt(_0xf7734(0x8e)) / 0x3) +
        (-parseInt(_0xf7734(0x89)) / 0x4) * (-parseInt(_0xf7734(0x86)) / 0x5) +
        parseInt(_0xf7734(0x8c)) / 0x6 +
        -parseInt(_0xf7734(0x90)) / 0x7 +
        -parseInt(_0xf7734(0x84)) / 0x8 +
        (parseInt(_0xf7734(0x85)) / 0x9) * (-parseInt(_0xf7734(0x91)) / 0xa);
      if (_0x121d8a === _0x2353aa) break;
      else _0x182397['push'](_0x182397['shift']());
    } catch (_0xcfa03c) {
      _0x182397['push'](_0x182397['shift']());
    }
  }
})(a44_0x273c, 0x9e70c);
var __importDefault =
  (this && this[a44_0x169f2f(0x80)]) ||
  function (_0x2682e4) {
    const _0x53df5d = a44_0x169f2f;
    return _0x2682e4 && _0x2682e4[_0x53df5d(0x82)]
      ? _0x2682e4
      : { default: _0x2682e4 };
  };
function a44_0x273c() {
  const _0x4c4550 = [
    '../services/WbotServices/StartWhatsAppSession',
    '39114eznVfM',
    'user',
    'Starting\x20session.',
    '__importDefault',
    '../services/WhatsappService/UpdateWhatsAppService',
    '__esModule',
    'status',
    '8548200BIKNgq',
    '36HZtUjK',
    '5aHkVvn',
    'json',
    'default',
    '4559196tWuELf',
    'channel',
    'params',
    '3002100TknXFp',
    '976020iKGtwh',
    '45CLuXUI',
    'defineProperty',
    '586047yOSlWW',
    '1303990IdhrcH',
    '../libs/wbot',
    'whatsapp',
    'logout',
    '../services/WhatsappService/ShowWhatsAppService'
  ];
  a44_0x273c = function () {
    return _0x4c4550;
  };
  return a44_0x273c();
}
Object[a44_0x169f2f(0x8f)](exports, a44_0x169f2f(0x82), { value: !![] });
function a44_0x3607(_0x34bb1e, _0x29c038) {
  const _0x273c32 = a44_0x273c();
  return (
    (a44_0x3607 = function (_0x36078a, _0x5e47d5) {
      _0x36078a = _0x36078a - 0x7d;
      let _0x3a788d = _0x273c32[_0x36078a];
      return _0x3a788d;
    }),
    a44_0x3607(_0x34bb1e, _0x29c038)
  );
}
const wbot_1 = require(a44_0x169f2f(0x92)),
  ShowWhatsAppService_1 = __importDefault(require(a44_0x169f2f(0x95))),
  StartWhatsAppSession_1 = require(a44_0x169f2f(0x96)),
  UpdateWhatsAppService_1 = __importDefault(require(a44_0x169f2f(0x81))),
  DeleteBaileysService_1 = __importDefault(
    require('../services/BaileysServices/DeleteBaileysService')
  ),
  store = async (_0x5a7130, _0x485e96) => {
    const _0x2ba04a = a44_0x169f2f,
      { whatsappId: _0x4e8c8a } = _0x5a7130[_0x2ba04a(0x8b)],
      { companyId: _0x4212d3 } = _0x5a7130[_0x2ba04a(0x7e)],
      _0x59e742 = await (0x0, ShowWhatsAppService_1[_0x2ba04a(0x88)])(
        _0x4e8c8a,
        _0x4212d3
      );
    return (
      await (0x0, StartWhatsAppSession_1['StartWhatsAppSession'])(
        _0x59e742,
        _0x4212d3
      ),
      _0x485e96[_0x2ba04a(0x83)](0xc8)['json']({ message: _0x2ba04a(0x7f) })
    );
  },
  update = async (_0xf242eb, _0xe7444a) => {
    const _0x3b4253 = a44_0x169f2f,
      { whatsappId: _0x20ed01 } = _0xf242eb[_0x3b4253(0x8b)],
      { companyId: _0x4e199c } = _0xf242eb['user'],
      { whatsapp: _0x11a450 } = await (0x0, UpdateWhatsAppService_1['default'])(
        {
          whatsappId: _0x20ed01,
          companyId: _0x4e199c,
          whatsappData: { session: '', requestQR: !![] }
        }
      );
    return (
      _0x11a450[_0x3b4253(0x8a)] === 'whatsapp' &&
        (await (0x0, StartWhatsAppSession_1['StartWhatsAppSession'])(
          _0x11a450,
          _0x4e199c
        )),
      _0xe7444a[_0x3b4253(0x83)](0xc8)['json']({ message: _0x3b4253(0x7f) })
    );
  },
  remove = async (_0x5e978e, _0x1e819c) => {
    const _0x55ca41 = a44_0x169f2f,
      { whatsappId: _0x4895f0 } = _0x5e978e[_0x55ca41(0x8b)],
      { companyId: _0x44a6e8 } = _0x5e978e[_0x55ca41(0x7e)],
      _0x12c4b1 = await (0x0, ShowWhatsAppService_1[_0x55ca41(0x88)])(
        _0x4895f0,
        _0x44a6e8
      );
    if (_0x12c4b1[_0x55ca41(0x8a)] === _0x55ca41(0x93)) {
      await (0x0, DeleteBaileysService_1[_0x55ca41(0x88)])(_0x4895f0);
      const _0xfae091 = (0x0, wbot_1['getWbot'])(_0x12c4b1['id']);
      _0xfae091[_0x55ca41(0x94)](), _0xfae091['ws']['close']();
    }
    return _0x1e819c[_0x55ca41(0x83)](0xc8)[_0x55ca41(0x87)]({
      message: 'Session\x20disconnected.'
    });
  };
exports[a44_0x169f2f(0x88)] = { store: store, remove: remove, update: update };
