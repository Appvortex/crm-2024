'use strict';
const a485_0x2c2b16 = a485_0x1dd5;
(function (_0x548b56, _0x5a851e) {
  const _0x2f90c6 = a485_0x1dd5,
    _0x21bd31 = _0x548b56();
  while (!![]) {
    try {
      const _0x444633 =
        (-parseInt(_0x2f90c6(0x1ac)) / 0x1) *
          (parseInt(_0x2f90c6(0x1aa)) / 0x2) +
        (parseInt(_0x2f90c6(0x1b5)) / 0x3) *
          (-parseInt(_0x2f90c6(0x1a8)) / 0x4) +
        parseInt(_0x2f90c6(0x19c)) / 0x5 +
        parseInt(_0x2f90c6(0x1ba)) / 0x6 +
        parseInt(_0x2f90c6(0x1b8)) / 0x7 +
        parseInt(_0x2f90c6(0x1a9)) / 0x8 +
        (parseInt(_0x2f90c6(0x1af)) / 0x9) *
          (-parseInt(_0x2f90c6(0x19d)) / 0xa);
      if (_0x444633 === _0x5a851e) break;
      else _0x21bd31['push'](_0x21bd31['shift']());
    } catch (_0x153c2e) {
      _0x21bd31['push'](_0x21bd31['shift']());
    }
  }
})(a485_0x5ebf, 0x8b04c);
function a485_0x5ebf() {
  const _0x3ba71c = [
    'readFile',
    '7098245SMqOKm',
    'nome',
    '3936006wEpFYV',
    'number',
    'utils',
    'sheet_to_json',
    'Número',
    'Email',
    'map',
    '4657410FnQKAj',
    '10lMLfIH',
    'has',
    'lodash',
    'path',
    'email',
    'Numero',
    '../../models/Contact',
    '__importDefault',
    'findOrCreate',
    'número',
    'ImportContactsService',
    '2390044TyNHMi',
    '4003888FDkXpU',
    '344612Bjwmlv',
    'replace',
    '3bmQzqy',
    'defineProperty',
    'push',
    '12763395FnDKst',
    'numero',
    '__esModule',
    'default',
    'E-mail',
    'companyId',
    '3lmFPCZ',
    'xlsx'
  ];
  a485_0x5ebf = function () {
    return _0x3ba71c;
  };
  return a485_0x5ebf();
}
var __importDefault =
  (this && this[a485_0x2c2b16(0x1a4)]) ||
  function (_0x1cfef5) {
    const _0x5271c0 = a485_0x2c2b16;
    return _0x1cfef5 && _0x1cfef5[_0x5271c0(0x1b1)]
      ? _0x1cfef5
      : { default: _0x1cfef5 };
  };
Object[a485_0x2c2b16(0x1ad)](exports, '__esModule', { value: !![] }),
  (exports[a485_0x2c2b16(0x1a7)] = void 0x0);
function a485_0x1dd5(_0x281c78, _0x5caa0b) {
  const _0x5ebfad = a485_0x5ebf();
  return (
    (a485_0x1dd5 = function (_0x1dd5c6, _0x4361da) {
      _0x1dd5c6 = _0x1dd5c6 - 0x196;
      let _0x4c53b6 = _0x5ebfad[_0x1dd5c6];
      return _0x4c53b6;
    }),
    a485_0x1dd5(_0x281c78, _0x5caa0b)
  );
}
const lodash_1 = require('lodash'),
  xlsx_1 = __importDefault(require(a485_0x2c2b16(0x1b6))),
  lodash_2 = require(a485_0x2c2b16(0x19f)),
  Contact_1 = __importDefault(require(a485_0x2c2b16(0x1a3)));
async function ImportContactsService(_0x3ef4d5, _0x3a6f88) {
  const _0x474892 = a485_0x2c2b16,
    _0x3fcf48 = xlsx_1['default'][_0x474892(0x1b7)](
      _0x3a6f88?.[_0x474892(0x1a0)]
    ),
    _0x3d2cf4 = (0x0, lodash_1['head'])(Object['values'](_0x3fcf48['Sheets'])),
    _0x25a9ce = xlsx_1[_0x474892(0x1b2)][_0x474892(0x197)][_0x474892(0x198)](
      _0x3d2cf4,
      { header: 0x0 }
    ),
    _0x5c3fb3 = _0x25a9ce[_0x474892(0x19b)](_0x51f88f => {
      const _0x652397 = _0x474892;
      let _0x3005e8 = '',
        _0x29c80f = '',
        _0xbc53a7 = '';
      return (
        ((0x0, lodash_2[_0x652397(0x19e)])(_0x51f88f, _0x652397(0x1b9)) ||
          (0x0, lodash_2['has'])(_0x51f88f, 'Nome')) &&
          (_0x3005e8 = _0x51f88f[_0x652397(0x1b9)] || _0x51f88f['Nome']),
        ((0x0, lodash_2[_0x652397(0x19e)])(_0x51f88f, _0x652397(0x1b0)) ||
          (0x0, lodash_2['has'])(_0x51f88f, _0x652397(0x1a6)) ||
          (0x0, lodash_2[_0x652397(0x19e)])(_0x51f88f, _0x652397(0x1a2)) ||
          (0x0, lodash_2[_0x652397(0x19e)])(_0x51f88f, _0x652397(0x199))) &&
          ((_0x29c80f =
            _0x51f88f['numero'] ||
            _0x51f88f['número'] ||
            _0x51f88f[_0x652397(0x1a2)] ||
            _0x51f88f['Número']),
          (_0x29c80f = ('' + _0x29c80f)[_0x652397(0x1ab)](/\D/g, ''))),
        ((0x0, lodash_2['has'])(_0x51f88f, 'email') ||
          (0x0, lodash_2['has'])(_0x51f88f, 'e-mail') ||
          (0x0, lodash_2['has'])(_0x51f88f, _0x652397(0x19a)) ||
          (0x0, lodash_2['has'])(_0x51f88f, 'E-mail')) &&
          (_0xbc53a7 =
            _0x51f88f[_0x652397(0x1a1)] ||
            _0x51f88f['e-mail'] ||
            _0x51f88f[_0x652397(0x19a)] ||
            _0x51f88f[_0x652397(0x1b3)]),
        {
          name: _0x3005e8,
          number: _0x29c80f,
          email: _0xbc53a7,
          companyId: _0x3ef4d5
        }
      );
    }),
    _0x1928fa = [];
  for (const _0x31b1dd of _0x5c3fb3) {
    const [_0x334865, _0x5e1fc4] = await Contact_1[_0x474892(0x1b2)][
      _0x474892(0x1a5)
    ]({
      where: {
        number: '' + _0x31b1dd[_0x474892(0x196)],
        companyId: _0x31b1dd[_0x474892(0x1b4)]
      },
      defaults: _0x31b1dd
    });
    _0x5e1fc4 && _0x1928fa[_0x474892(0x1ae)](_0x334865);
  }
  return _0x1928fa;
}
exports[a485_0x2c2b16(0x1a7)] = ImportContactsService;
