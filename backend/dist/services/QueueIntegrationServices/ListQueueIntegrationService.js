'use strict';
const a549_0x38adcf = a549_0x405b;
function a549_0x405b(_0xf8d577, _0xc39e8e) {
  const _0x368bee = a549_0x368b();
  return (
    (a549_0x405b = function (_0x405b3, _0x2bffd3) {
      _0x405b3 = _0x405b3 - 0x1e4;
      let _0x1daccc = _0x368bee[_0x405b3];
      return _0x1daccc;
    }),
    a549_0x405b(_0xf8d577, _0xc39e8e)
  );
}
(function (_0x54d84e, _0x3e90bf) {
  const _0x586f9d = a549_0x405b,
    _0x47e539 = _0x54d84e();
  while (!![]) {
    try {
      const _0x5b9b8f =
        (parseInt(_0x586f9d(0x1ec)) / 0x1) *
          (parseInt(_0x586f9d(0x1fd)) / 0x2) +
        (parseInt(_0x586f9d(0x1f7)) / 0x3) *
          (-parseInt(_0x586f9d(0x1f0)) / 0x4) +
        (parseInt(_0x586f9d(0x1fb)) / 0x5) *
          (parseInt(_0x586f9d(0x1fe)) / 0x6) +
        parseInt(_0x586f9d(0x1fc)) / 0x7 +
        (parseInt(_0x586f9d(0x1ed)) / 0x8) *
          (parseInt(_0x586f9d(0x1fa)) / 0x9) +
        (-parseInt(_0x586f9d(0x1f3)) / 0xa) *
          (-parseInt(_0x586f9d(0x1f5)) / 0xb) +
        (parseInt(_0x586f9d(0x1ea)) / 0xc) *
          (-parseInt(_0x586f9d(0x1f9)) / 0xd);
      if (_0x5b9b8f === _0x3e90bf) break;
      else _0x47e539['push'](_0x47e539['shift']());
    } catch (_0x14d4ce) {
      _0x47e539['push'](_0x47e539['shift']());
    }
  }
})(a549_0x368b, 0x49078);
function a549_0x368b() {
  const _0x14b4bd = [
    'findAndCountAll',
    '../../models/QueueIntegrations',
    '140730WsbnPl',
    '__esModule',
    '132yhUcUh',
    'LIKE',
    '759yxKLaK',
    'default',
    '390MnKOdh',
    '9EPMoCa',
    '465nFfYOX',
    '386246UkCigN',
    '2pmIzLI',
    '14754xyslbP',
    'where',
    'DESC',
    'defineProperty',
    'toLowerCase',
    'sequelize',
    'QueueIntegrations.name',
    '278736gZSUOG',
    'Sequelize',
    '499071qLJxOF',
    '4399224OSXdsO',
    'length',
    '__importDefault',
    '7996GAEgVd'
  ];
  a549_0x368b = function () {
    return _0x14b4bd;
  };
  return a549_0x368b();
}
var __importDefault =
  (this && this[a549_0x38adcf(0x1ef)]) ||
  function (_0x538c5a) {
    const _0x8acc29 = a549_0x38adcf;
    return _0x538c5a && _0x538c5a[_0x8acc29(0x1f4)]
      ? _0x538c5a
      : { default: _0x538c5a };
  };
Object[a549_0x38adcf(0x1e6)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a549_0x38adcf(0x1e8)),
  QueueIntegrations_1 = __importDefault(require(a549_0x38adcf(0x1f2))),
  ListQueueIntegrationService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    companyId: _0x234ce3
  }) => {
    const _0x1558df = a549_0x38adcf;
    let _0x2d907a = {
      [sequelize_1['Op']['or']]: [
        {
          '$QueueIntegrations.name$': sequelize_1[_0x1558df(0x1eb)][
            _0x1558df(0x1e4)
          ](
            sequelize_1[_0x1558df(0x1eb)]['fn'](
              'LOWER',
              sequelize_1[_0x1558df(0x1eb)]['col'](_0x1558df(0x1e9))
            ),
            _0x1558df(0x1f6),
            '%' + searchParam[_0x1558df(0x1e7)]() + '%'
          )
        }
      ]
    };
    _0x2d907a = { ..._0x2d907a, companyId: _0x234ce3 };
    const _0x4c6628 = 0x14,
      _0xeaef31 = _0x4c6628 * (+pageNumber - 0x1),
      { count: _0x2bc34d, rows: _0x134d39 } = await QueueIntegrations_1[
        _0x1558df(0x1f8)
      ][_0x1558df(0x1f1)]({
        where: _0x2d907a,
        limit: _0x4c6628,
        offset: _0xeaef31,
        order: [['createdAt', _0x1558df(0x1e5)]]
      }),
      _0x3160ef = _0x2bc34d > _0xeaef31 + _0x134d39[_0x1558df(0x1ee)];
    return {
      queueIntegrations: _0x134d39,
      count: _0x2bc34d,
      hasMore: _0x3160ef
    };
  };
exports['default'] = ListQueueIntegrationService;
