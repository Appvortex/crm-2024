'use strict';
const a622_0x1177df = a622_0x2d3f;
(function (_0x3b72f6, _0x24c407) {
  const _0x1d7b38 = a622_0x2d3f,
    _0x3e5b21 = _0x3b72f6();
  while (!![]) {
    try {
      const _0x281c49 =
        parseInt(_0x1d7b38(0xdb)) / 0x1 +
        (parseInt(_0x1d7b38(0xdd)) / 0x2) * (parseInt(_0x1d7b38(0xd3)) / 0x3) +
        (-parseInt(_0x1d7b38(0xd6)) / 0x4) *
          (-parseInt(_0x1d7b38(0xd4)) / 0x5) +
        (-parseInt(_0x1d7b38(0xdf)) / 0x6) * (parseInt(_0x1d7b38(0xd5)) / 0x7) +
        (parseInt(_0x1d7b38(0xce)) / 0x8) * (parseInt(_0x1d7b38(0xcd)) / 0x9) +
        (parseInt(_0x1d7b38(0xd0)) / 0xa) * (parseInt(_0x1d7b38(0xdc)) / 0xb) +
        (parseInt(_0x1d7b38(0xcf)) / 0xc) * (-parseInt(_0x1d7b38(0xd9)) / 0xd);
      if (_0x281c49 === _0x24c407) break;
      else _0x3e5b21['push'](_0x3e5b21['shift']());
    } catch (_0x23a95b) {
      _0x3e5b21['push'](_0x3e5b21['shift']());
    }
  }
})(a622_0x2c30, 0x8ad10);
function a622_0x2d3f(_0x116492, _0x555f80) {
  const _0x2c3089 = a622_0x2c30();
  return (
    (a622_0x2d3f = function (_0x2d3fd6, _0x1c169) {
      _0x2d3fd6 = _0x2d3fd6 - 0xcd;
      let _0x196a6c = _0x2c3089[_0x2d3fd6];
      return _0x196a6c;
    }),
    a622_0x2d3f(_0x116492, _0x555f80)
  );
}
var __importDefault =
  (this && this[a622_0x1177df(0xd7)]) ||
  function (_0x240df4) {
    return _0x240df4 && _0x240df4['__esModule']
      ? _0x240df4
      : { default: _0x240df4 };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a622_0x1177df(0xd1)),
  TicketTraking_1 = __importDefault(require(a622_0x1177df(0xde))),
  FindOrCreateATicketTrakingService = async ({
    ticketId: _0x39fa81,
    companyId: _0x211ca2,
    whatsappId: _0xbe6259,
    userId: _0x49d24a
  }) => {
    const _0x316d60 = a622_0x1177df,
      _0x1e1184 = await TicketTraking_1[_0x316d60(0xda)][_0x316d60(0xd8)]({
        where: {
          ticketId: _0x39fa81,
          finishedAt: { [sequelize_1['Op']['is']]: null }
        }
      });
    if (_0x1e1184) return _0x1e1184;
    const _0x3f95c4 = await TicketTraking_1[_0x316d60(0xda)][_0x316d60(0xd2)]({
      ticketId: _0x39fa81,
      companyId: _0x211ca2,
      whatsappId: _0xbe6259,
      userId: _0x49d24a
    });
    return _0x3f95c4;
  };
exports['default'] = FindOrCreateATicketTrakingService;
function a622_0x2c30() {
  const _0x4dddb9 = [
    '404EcXgFA',
    '__importDefault',
    'findOne',
    '26585AGNVlS',
    'default',
    '228433syjIeL',
    '11HgPlvc',
    '16WPDXmA',
    '../../models/TicketTraking',
    '78WsnKFz',
    '1008kcCGBQ',
    '62600MWnIDE',
    '6564exhtus',
    '2767410YYvbQm',
    'sequelize',
    'create',
    '134346HgglJB',
    '31870LFbUYc',
    '374983Bluzzd'
  ];
  a622_0x2c30 = function () {
    return _0x4dddb9;
  };
  return a622_0x2c30();
}
