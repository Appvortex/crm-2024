'use strict';
const a514_0x4641c1 = a514_0x393d;
(function (_0x2bb5f5, _0x147682) {
  const _0x1d110a = a514_0x393d,
    _0x30a5dd = _0x2bb5f5();
  while (!![]) {
    try {
      const _0x8f3ebc =
        (-parseInt(_0x1d110a(0x192)) / 0x1) *
          (parseInt(_0x1d110a(0x186)) / 0x2) +
        (parseInt(_0x1d110a(0x18b)) / 0x3) *
          (parseInt(_0x1d110a(0x18e)) / 0x4) +
        parseInt(_0x1d110a(0x190)) / 0x5 +
        parseInt(_0x1d110a(0x193)) / 0x6 +
        (-parseInt(_0x1d110a(0x183)) / 0x7) *
          (-parseInt(_0x1d110a(0x187)) / 0x8) +
        parseInt(_0x1d110a(0x181)) / 0x9 +
        (parseInt(_0x1d110a(0x17d)) / 0xa) *
          (-parseInt(_0x1d110a(0x18c)) / 0xb);
      if (_0x8f3ebc === _0x147682) break;
      else _0x30a5dd['push'](_0x30a5dd['shift']());
    } catch (_0xbff4b9) {
      _0x30a5dd['push'](_0x30a5dd['shift']());
    }
  }
})(a514_0x537a, 0x5543e);
function a514_0x393d(_0x34bcc0, _0x44474b) {
  const _0x537a98 = a514_0x537a();
  return (
    (a514_0x393d = function (_0x393d2a, _0x2bb49b) {
      _0x393d2a = _0x393d2a - 0x17c;
      let _0x4e5027 = _0x537a98[_0x393d2a];
      return _0x4e5027;
    }),
    a514_0x393d(_0x34bcc0, _0x44474b)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x4d3876) {
    const _0x194781 = a514_0x393d;
    return _0x4d3876 && _0x4d3876[_0x194781(0x185)]
      ? _0x4d3876
      : { default: _0x4d3876 };
  };
Object[a514_0x4641c1(0x18a)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a514_0x4641c1(0x18f)),
  Help_1 = __importDefault(require(a514_0x4641c1(0x180))),
  ListService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1'
  }) => {
    const _0xec0bc7 = a514_0x4641c1,
      _0x31f2c1 = {
        [sequelize_1['Op']['or']]: [
          {
            title: sequelize_1[_0xec0bc7(0x188)][_0xec0bc7(0x182)](
              sequelize_1[_0xec0bc7(0x188)]['fn'](
                _0xec0bc7(0x194),
                sequelize_1['Sequelize'][_0xec0bc7(0x17f)](_0xec0bc7(0x189))
              ),
              'LIKE',
              '%' + searchParam[_0xec0bc7(0x17c)]()[_0xec0bc7(0x17e)]() + '%'
            )
          }
        ]
      },
      _0x1c4417 = 0x14,
      _0x4a43a1 = _0x1c4417 * (+pageNumber - 0x1),
      { count: _0x2dbd09, rows: _0x469767 } = await Help_1[_0xec0bc7(0x184)][
        'findAndCountAll'
      ]({
        where: _0x31f2c1,
        limit: _0x1c4417,
        offset: _0x4a43a1,
        order: [[_0xec0bc7(0x189), _0xec0bc7(0x18d)]]
      }),
      _0x4c6be1 = _0x2dbd09 > _0x4a43a1 + _0x469767[_0xec0bc7(0x191)];
    return { records: _0x469767, count: _0x2dbd09, hasMore: _0x4c6be1 };
  };
exports[a514_0x4641c1(0x184)] = ListService;
function a514_0x537a() {
  const _0x530681 = [
    'where',
    '21700IqBqeW',
    'default',
    '__esModule',
    '4pIhotu',
    '1096fSaPUI',
    'Sequelize',
    'title',
    'defineProperty',
    '696840GhwwSh',
    '649goOfdA',
    'ASC',
    '12kftLRd',
    'sequelize',
    '2034825NzMZpu',
    'length',
    '257140iIPCiQ',
    '557064KegfYc',
    'LOWER',
    'toLowerCase',
    '233230STNTZc',
    'trim',
    'col',
    '../../models/Help',
    '5564106QFSzUo'
  ];
  a514_0x537a = function () {
    return _0x530681;
  };
  return a514_0x537a();
}
