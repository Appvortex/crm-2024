'use strict';
const a2_0x5d3344 = a2_0x1783;
(function (_0x3d6790, _0xe9029a) {
  const _0x4a5a3a = a2_0x1783,
    _0x912910 = _0x3d6790();
  while (!![]) {
    try {
      const _0xac745a =
        (-parseInt(_0x4a5a3a(0x1a2)) / 0x1) *
          (-parseInt(_0x4a5a3a(0x19e)) / 0x2) +
        (-parseInt(_0x4a5a3a(0x1a1)) / 0x3) *
          (-parseInt(_0x4a5a3a(0x1a7)) / 0x4) +
        (parseInt(_0x4a5a3a(0x19c)) / 0x5) *
          (parseInt(_0x4a5a3a(0x1b1)) / 0x6) +
        -parseInt(_0x4a5a3a(0x1a3)) / 0x7 +
        -parseInt(_0x4a5a3a(0x19b)) / 0x8 +
        -parseInt(_0x4a5a3a(0x1a4)) / 0x9 +
        (-parseInt(_0x4a5a3a(0x19f)) / 0xa) *
          (-parseInt(_0x4a5a3a(0x1aa)) / 0xb);
      if (_0xac745a === _0xe9029a) break;
      else _0x912910['push'](_0x912910['shift']());
    } catch (_0x3a34bd) {
      _0x912910['push'](_0x912910['shift']());
    }
  }
})(a2_0x17a0, 0x33375);
var __importDefault =
  (this && this[a2_0x5d3344(0x1a6)]) ||
  function (_0xb49712) {
    const _0x46c042 = a2_0x5d3344;
    return _0xb49712 && _0xb49712[_0x46c042(0x19d)]
      ? _0xb49712
      : { default: _0xb49712 };
  };
function a2_0x1783(_0xbd48f1, _0x5983e4) {
  const _0x17a010 = a2_0x17a0();
  return (
    (a2_0x1783 = function (_0x1783f0, _0xdf75c0) {
      _0x1783f0 = _0x1783f0 - 0x199;
      let _0xd85828 = _0x17a010[_0x1783f0];
      return _0xd85828;
    }),
    a2_0x1783(_0xbd48f1, _0x5983e4)
  );
}
function a2_0x17a0() {
  const _0x260a7d = [
    '.p12',
    'env',
    '11jtnRFN',
    'homologacao',
    'exports',
    'default',
    'true',
    'producao',
    'GERENCIANET_SANDBOX',
    '42QkinQt',
    'false',
    '../../certs/',
    '1687232lUymZQ',
    '31745zSYkZU',
    '__esModule',
    '24UcsWpO',
    '5305410axqzwt',
    'path',
    '3hvRwco',
    '4332QrrEJc',
    '1557066TeBljk',
    '1101888wgULwN',
    'join',
    '__importDefault',
    '554348iTlzFg'
  ];
  a2_0x17a0 = function () {
    return _0x260a7d;
  };
  return a2_0x17a0();
}
const path_1 = __importDefault(require(a2_0x5d3344(0x1a0))),
  name =
    process[a2_0x5d3344(0x1a9)][a2_0x5d3344(0x1b0)] === a2_0x5d3344(0x199)
      ? a2_0x5d3344(0x1af)
      : a2_0x5d3344(0x1ab),
  cert = path_1[a2_0x5d3344(0x1ad)][a2_0x5d3344(0x1a5)](
    __dirname,
    a2_0x5d3344(0x19a) + name + a2_0x5d3344(0x1a8)
  );
module[a2_0x5d3344(0x1ac)] = {
  sandbox: process['env'][a2_0x5d3344(0x1b0)] === a2_0x5d3344(0x1ae),
  client_id: process[a2_0x5d3344(0x1a9)]['GERENCIANET_CLIENT_ID'],
  client_secret: process['env']['GERENCIANET_CLIENT_SECRET'],
  pix_cert: cert
};
