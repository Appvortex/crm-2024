'use strict';
const a532_0x310052 = a532_0xa088;
function a532_0xa088(_0x1105db, _0x3edcfd) {
  const _0x49a36d = a532_0x49a3();
  return (
    (a532_0xa088 = function (_0xa088a6, _0x1461b2) {
      _0xa088a6 = _0xa088a6 - 0x19e;
      let _0x284885 = _0x49a36d[_0xa088a6];
      return _0x284885;
    }),
    a532_0xa088(_0x1105db, _0x3edcfd)
  );
}
function a532_0x49a3() {
  const _0x48852b = [
    'Sequelize',
    'LIKE',
    '10GqKepB',
    'trim',
    '1578462zyxixf',
    'length',
    'LOWER',
    '3186008PacXeA',
    'toLowerCase',
    'col',
    '__esModule',
    'defineProperty',
    '244538PgPRzi',
    'default',
    'findAndCountAll',
    '4557966Mqqcnn',
    'name',
    '9GKGsDp',
    '1152798nwldTu',
    '__importDefault',
    'sequelize',
    '10576377XHbtzD',
    'where',
    'ASC',
    '1578340ZbsaLN',
    '../../models/Partner'
  ];
  a532_0x49a3 = function () {
    return _0x48852b;
  };
  return a532_0x49a3();
}
(function (_0x25f33f, _0x15398d) {
  const _0x2a2c74 = a532_0xa088,
    _0x3bc331 = _0x25f33f();
  while (!![]) {
    try {
      const _0x5c20ad =
        -parseInt(_0x2a2c74(0x1b2)) / 0x1 +
        parseInt(_0x2a2c74(0x19e)) / 0x2 +
        parseInt(_0x2a2c74(0x1b5)) / 0x3 +
        -parseInt(_0x2a2c74(0x1a4)) / 0x4 +
        (-parseInt(_0x2a2c74(0x1a8)) / 0x5) *
          (-parseInt(_0x2a2c74(0x1aa)) / 0x6) +
        -parseInt(_0x2a2c74(0x1a1)) / 0x7 +
        (-parseInt(_0x2a2c74(0x1ad)) / 0x8) *
          (-parseInt(_0x2a2c74(0x1b7)) / 0x9);
      if (_0x5c20ad === _0x15398d) break;
      else _0x3bc331['push'](_0x3bc331['shift']());
    } catch (_0x5a125b) {
      _0x3bc331['push'](_0x3bc331['shift']());
    }
  }
})(a532_0x49a3, 0xd46cc);
var __importDefault =
  (this && this[a532_0x310052(0x19f)]) ||
  function (_0xac23e6) {
    const _0x186d63 = a532_0x310052;
    return _0xac23e6 && _0xac23e6[_0x186d63(0x1b0)]
      ? _0xac23e6
      : { default: _0xac23e6 };
  };
Object[a532_0x310052(0x1b1)](exports, a532_0x310052(0x1b0), { value: !![] });
const sequelize_1 = require(a532_0x310052(0x1a0)),
  Partner_1 = __importDefault(require(a532_0x310052(0x1a5))),
  ListService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1'
  }) => {
    const _0x248188 = a532_0x310052,
      _0x1d1737 = {
        [sequelize_1['Op']['or']]: [
          {
            name: sequelize_1[_0x248188(0x1a6)][_0x248188(0x1a2)](
              sequelize_1[_0x248188(0x1a6)]['fn'](
                _0x248188(0x1ac),
                sequelize_1[_0x248188(0x1a6)][_0x248188(0x1af)](
                  _0x248188(0x1b6)
                )
              ),
              _0x248188(0x1a7),
              '%' + searchParam[_0x248188(0x1ae)]()[_0x248188(0x1a9)]() + '%'
            )
          }
        ]
      },
      _0x27a978 = 0x14,
      _0x42a94b = _0x27a978 * (+pageNumber - 0x1),
      { count: _0x54e631, rows: _0x29ff45 } = await Partner_1[_0x248188(0x1b3)][
        _0x248188(0x1b4)
      ]({
        where: _0x1d1737,
        limit: _0x27a978,
        offset: _0x42a94b,
        order: [[_0x248188(0x1b6), _0x248188(0x1a3)]]
      }),
      _0x542978 = _0x54e631 > _0x42a94b + _0x29ff45[_0x248188(0x1ab)];
    return { records: _0x29ff45, count: _0x54e631, hasMore: _0x542978 };
  };
exports[a532_0x310052(0x1b3)] = ListService;
