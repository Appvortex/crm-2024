'use strict';
const a559_0x1191c3 = a559_0xac79;
(function (_0x35fcd4, _0xb5fbf0) {
  const _0x147712 = a559_0xac79,
    _0x271573 = _0x35fcd4();
  while (!![]) {
    try {
      const _0x28c40a =
        -parseInt(_0x147712(0x134)) / 0x1 +
        (parseInt(_0x147712(0x139)) / 0x2) *
          (parseInt(_0x147712(0x132)) / 0x3) +
        (parseInt(_0x147712(0x130)) / 0x4) *
          (parseInt(_0x147712(0x128)) / 0x5) +
        -parseInt(_0x147712(0x147)) / 0x6 +
        parseInt(_0x147712(0x138)) / 0x7 +
        parseInt(_0x147712(0x123)) / 0x8 +
        -parseInt(_0x147712(0x143)) / 0x9;
      if (_0x28c40a === _0xb5fbf0) break;
      else _0x271573['push'](_0x271573['shift']());
    } catch (_0x7e034d) {
      _0x271573['push'](_0x271573['shift']());
    }
  }
})(a559_0x5c5c, 0x6e110);
function a559_0x5c5c() {
  const _0x3c0c46 = [
    '../../models/Company',
    'configurable',
    'ERR_QUEUE_INVALID_NAME',
    '../../models/Chatbot',
    'chatbots',
    'Check-unique-name',
    'default',
    '4haRVJG',
    'getOwnPropertyDescriptor',
    '588NvQRHt',
    'user',
    '607793reQHQk',
    '../../models/User',
    'defineProperty',
    'call',
    '2442069HKyxUh',
    '8356wckjUa',
    'ERR_QUEUE_INVALID_COLOR',
    'test',
    'plan',
    'writable',
    'asc',
    '__createBinding',
    'hasOwnProperty',
    'Check-color-exists',
    'required',
    '3208419pxibDI',
    'yup',
    '../../models/Plan',
    'count',
    '80328iAbnjF',
    'prototype',
    '../../models/Queue',
    'create',
    '1817376uTzRgw',
    'findOne',
    '__setModuleDefault',
    'queues',
    '__esModule',
    '167885NfoyZm'
  ];
  a559_0x5c5c = function () {
    return _0x3c0c46;
  };
  return a559_0x5c5c();
}
var __createBinding =
    (this && this[a559_0x1191c3(0x13f)]) ||
    (Object[a559_0x1191c3(0x122)]
      ? function (_0x399f68, _0xc7ed5a, _0x5629d9, _0x177589) {
          const _0x3a17a4 = a559_0x1191c3;
          if (_0x177589 === undefined) _0x177589 = _0x5629d9;
          var _0x2f8355 = Object[_0x3a17a4(0x131)](_0xc7ed5a, _0x5629d9);
          (!_0x2f8355 ||
            ('get' in _0x2f8355
              ? !_0xc7ed5a['__esModule']
              : _0x2f8355[_0x3a17a4(0x13d)] || _0x2f8355[_0x3a17a4(0x12a)])) &&
            (_0x2f8355 = {
              enumerable: !![],
              get: function () {
                return _0xc7ed5a[_0x5629d9];
              }
            }),
            Object['defineProperty'](_0x399f68, _0x177589, _0x2f8355);
        }
      : function (_0x4d3636, _0x588d82, _0x34f010, _0x218f88) {
          if (_0x218f88 === undefined) _0x218f88 = _0x34f010;
          _0x4d3636[_0x218f88] = _0x588d82[_0x34f010];
        }),
  __setModuleDefault =
    (this && this[a559_0x1191c3(0x125)]) ||
    (Object[a559_0x1191c3(0x122)]
      ? function (_0x45501f, _0x40e6e1) {
          const _0x566aa3 = a559_0x1191c3;
          Object[_0x566aa3(0x136)](_0x45501f, _0x566aa3(0x12f), {
            enumerable: !![],
            value: _0x40e6e1
          });
        }
      : function (_0x2af065, _0x46fd77) {
          const _0x5729b8 = a559_0x1191c3;
          _0x2af065[_0x5729b8(0x12f)] = _0x46fd77;
        }),
  __importStar =
    (this && this['__importStar']) ||
    function (_0x37171b) {
      const _0x35ccd6 = a559_0x1191c3;
      if (_0x37171b && _0x37171b['__esModule']) return _0x37171b;
      var _0x495cb7 = {};
      if (_0x37171b != null) {
        for (var _0x1b7557 in _0x37171b)
          if (
            _0x1b7557 !== _0x35ccd6(0x12f) &&
            Object[_0x35ccd6(0x148)][_0x35ccd6(0x140)][_0x35ccd6(0x137)](
              _0x37171b,
              _0x1b7557
            )
          )
            __createBinding(_0x495cb7, _0x37171b, _0x1b7557);
      }
      return __setModuleDefault(_0x495cb7, _0x37171b), _0x495cb7;
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0x962115) {
      const _0xb2d956 = a559_0x1191c3;
      return _0x962115 && _0x962115[_0xb2d956(0x127)]
        ? _0x962115
        : { default: _0x962115 };
    };
Object['defineProperty'](exports, '__esModule', { value: !![] });
const Yup = __importStar(require(a559_0x1191c3(0x144))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  Queue_1 = __importDefault(require(a559_0x1191c3(0x121))),
  Company_1 = __importDefault(require(a559_0x1191c3(0x129))),
  Plan_1 = __importDefault(require(a559_0x1191c3(0x145))),
  Chatbot_1 = __importDefault(require(a559_0x1191c3(0x12c))),
  User_1 = __importDefault(require(a559_0x1191c3(0x135))),
  CreateQueueService = async _0x2fd35d => {
    const _0x35a37a = a559_0x1191c3,
      { color: _0x2c3425, name: _0x323fc0, companyId: _0x335452 } = _0x2fd35d,
      _0x5d6a8e = await Company_1['default'][_0x35a37a(0x124)]({
        where: { id: _0x335452 },
        include: [{ model: Plan_1[_0x35a37a(0x12f)], as: _0x35a37a(0x13c) }]
      });
    if (_0x5d6a8e !== null) {
      const _0x45b516 = await Queue_1['default'][_0x35a37a(0x146)]({
        where: { companyId: _0x335452 }
      });
      if (_0x45b516 >= _0x5d6a8e[_0x35a37a(0x13c)][_0x35a37a(0x126)])
        throw new AppError_1[_0x35a37a(0x12f)](
          'Número\x20máximo\x20de\x20filas\x20já\x20alcançado:\x20' + _0x45b516
        );
    }
    const _0x20e732 = Yup['object']()['shape']({
      name: Yup['string']()
        ['min'](0x2, _0x35a37a(0x12b))
        [_0x35a37a(0x142)](_0x35a37a(0x12b))
        [_0x35a37a(0x13b)](
          _0x35a37a(0x12e),
          'ERR_QUEUE_NAME_ALREADY_EXISTS',
          async _0x40ea1c => {
            const _0x548ed2 = _0x35a37a;
            if (_0x40ea1c) {
              const _0x2122a3 = await Queue_1[_0x548ed2(0x12f)][
                _0x548ed2(0x124)
              ]({ where: { name: _0x40ea1c, companyId: _0x335452 } });
              return !_0x2122a3;
            }
            return ![];
          }
        ),
      color: Yup['string']()
        [_0x35a37a(0x142)](_0x35a37a(0x13a))
        [_0x35a37a(0x13b)]('Check-color', _0x35a37a(0x13a), async _0x5daaaa => {
          const _0x17c799 = _0x35a37a;
          if (_0x5daaaa) {
            const _0x56da01 = /^#[0-9a-f]{3,6}$/i;
            return _0x56da01[_0x17c799(0x13b)](_0x5daaaa);
          }
          return ![];
        })
        [_0x35a37a(0x13b)](
          _0x35a37a(0x141),
          'ERR_QUEUE_COLOR_ALREADY_EXISTS',
          async _0x28f892 => {
            const _0x57fbb1 = _0x35a37a;
            if (_0x28f892) {
              const _0x489aaf = await Queue_1[_0x57fbb1(0x12f)][
                _0x57fbb1(0x124)
              ]({ where: { color: _0x28f892, companyId: _0x335452 } });
              return !_0x489aaf;
            }
            return ![];
          }
        )
    });
    try {
      await _0x20e732['validate']({ color: _0x2c3425, name: _0x323fc0 });
    } catch (_0x93865b) {
      throw new AppError_1[_0x35a37a(0x12f)](_0x93865b['message']);
    }
    const _0x2167a9 = await Queue_1[_0x35a37a(0x12f)][_0x35a37a(0x122)](
      _0x2fd35d,
      {
        include: [
          {
            model: Chatbot_1['default'],
            as: _0x35a37a(0x12d),
            include: [{ model: User_1['default'], as: _0x35a37a(0x133) }],
            order: [
              [
                { model: Chatbot_1['default'], as: _0x35a37a(0x12d) },
                'id',
                _0x35a37a(0x13e)
              ]
            ]
          }
        ]
      }
    );
    return _0x2167a9;
  };
function a559_0xac79(_0x52c733, _0x594f6f) {
  const _0x5c5cee = a559_0x5c5c();
  return (
    (a559_0xac79 = function (_0xac799, _0x4f18fb) {
      _0xac799 = _0xac799 - 0x121;
      let _0x36ac1d = _0x5c5cee[_0xac799];
      return _0x36ac1d;
    }),
    a559_0xac79(_0x52c733, _0x594f6f)
  );
}
exports['default'] = CreateQueueService;
