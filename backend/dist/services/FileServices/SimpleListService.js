'use strict';
function a508_0x4e52() {
  const _0x589bc7 = [
    'like',
    '1473060vNyDVJ',
    '5503UQFULz',
    'createdAt',
    'default',
    'updatedAt',
    '__esModule',
    '768472DgoKcv',
    '176JXgQBE',
    '7114597uwUTyz',
    '9xFWSGq',
    '152IYAmcg',
    'name',
    '101439VSEBsy',
    '5820115EBCTst',
    '../../models/Files',
    '116AmfETp',
    '2279958fbYFQZ'
  ];
  a508_0x4e52 = function () {
    return _0x589bc7;
  };
  return a508_0x4e52();
}
const a508_0x7841ed = a508_0x2095;
(function (_0x43948c, _0x454489) {
  const _0x577c6a = a508_0x2095,
    _0xb9df5 = _0x43948c();
  while (!![]) {
    try {
      const _0x1c3fb1 =
        (parseInt(_0x577c6a(0x18b)) / 0x1) *
          (-parseInt(_0x577c6a(0x187)) / 0x2) +
        (-parseInt(_0x577c6a(0x181)) / 0x3) *
          (-parseInt(_0x577c6a(0x190)) / 0x4) +
        -parseInt(_0x577c6a(0x185)) / 0x5 +
        parseInt(_0x577c6a(0x188)) / 0x6 +
        -parseInt(_0x577c6a(0x180)) / 0x7 +
        (-parseInt(_0x577c6a(0x182)) / 0x8) *
          (parseInt(_0x577c6a(0x184)) / 0x9) +
        (parseInt(_0x577c6a(0x18a)) / 0xa) * (parseInt(_0x577c6a(0x17f)) / 0xb);
      if (_0x1c3fb1 === _0x454489) break;
      else _0xb9df5['push'](_0xb9df5['shift']());
    } catch (_0x148ff8) {
      _0xb9df5['push'](_0xb9df5['shift']());
    }
  }
})(a508_0x4e52, 0x925e6);
function a508_0x2095(_0x2fd8ce, _0x267c8f) {
  const _0x4e520d = a508_0x4e52();
  return (
    (a508_0x2095 = function (_0x209586, _0x4b05d6) {
      _0x209586 = _0x209586 - 0x17f;
      let _0x22ae21 = _0x4e520d[_0x209586];
      return _0x22ae21;
    }),
    a508_0x2095(_0x2fd8ce, _0x267c8f)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x364433) {
    const _0x38007d = a508_0x2095;
    return _0x364433 && _0x364433[_0x38007d(0x18f)]
      ? _0x364433
      : { default: _0x364433 };
  };
Object['defineProperty'](exports, a508_0x7841ed(0x18f), { value: !![] });
const sequelize_1 = require('sequelize'),
  Files_1 = __importDefault(require(a508_0x7841ed(0x186))),
  ListService = async ({ searchParam: _0x25f759, companyId: _0x3f23c6 }) => {
    const _0x2604c3 = a508_0x7841ed;
    let _0x265349 = {};
    _0x25f759 &&
      (_0x265349 = {
        [sequelize_1['Op']['or']]: [
          {
            name: {
              [sequelize_1['Op'][_0x2604c3(0x189)]]: '%' + _0x25f759 + '%'
            }
          }
        ]
      });
    const _0x5066bf = await Files_1[_0x2604c3(0x18d)]['findAll']({
      where: { companyId: _0x3f23c6, ..._0x265349 },
      order: [[_0x2604c3(0x183), 'ASC']],
      attributes: { exclude: [_0x2604c3(0x18c), _0x2604c3(0x18e)] },
      group: ['Rating.id']
    });
    return _0x5066bf;
  };
exports[a508_0x7841ed(0x18d)] = ListService;
