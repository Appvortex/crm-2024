'use strict';
const a473_0x28154c = a473_0x351e;
function a473_0x351e(_0x5bcedf, _0x23b39c) {
  const _0x26713e = a473_0x2671();
  return (
    (a473_0x351e = function (_0x351e6, _0x40b555) {
      _0x351e6 = _0x351e6 - 0x11d;
      let _0x27850d = _0x26713e[_0x351e6];
      return _0x27850d;
    }),
    a473_0x351e(_0x5bcedf, _0x23b39c)
  );
}
(function (_0x549768, _0xe970f2) {
  const _0x4a43d3 = a473_0x351e,
    _0x15c7c5 = _0x549768();
  while (!![]) {
    try {
      const _0x3a87a3 =
        -parseInt(_0x4a43d3(0x138)) / 0x1 +
        (parseInt(_0x4a43d3(0x122)) / 0x2) *
          (parseInt(_0x4a43d3(0x12d)) / 0x3) +
        (parseInt(_0x4a43d3(0x145)) / 0x4) *
          (parseInt(_0x4a43d3(0x11d)) / 0x5) +
        parseInt(_0x4a43d3(0x132)) / 0x6 +
        parseInt(_0x4a43d3(0x12f)) / 0x7 +
        (-parseInt(_0x4a43d3(0x129)) / 0x8) *
          (parseInt(_0x4a43d3(0x11e)) / 0x9) +
        (parseInt(_0x4a43d3(0x14a)) / 0xa) *
          (-parseInt(_0x4a43d3(0x134)) / 0xb);
      if (_0x3a87a3 === _0xe970f2) break;
      else _0x15c7c5['push'](_0x15c7c5['shift']());
    } catch (_0x5bb692) {
      _0x15c7c5['push'](_0x15c7c5['shift']());
    }
  }
})(a473_0x2671, 0xe4ca3);
function a473_0x2671() {
  const _0x4a316f = [
    'logger',
    '../../utils/logger',
    'push',
    'utils',
    '15668Ysrckr',
    'Número',
    '../WbotServices/CheckNumber',
    'Sheets',
    'sheet_to_json',
    '3568150ktPAKs',
    'map',
    'Nome',
    '1165BqeSfZ',
    '29790sPyuHf',
    'email',
    '__importDefault',
    'has',
    '28EHCLaQ',
    'Número\x20de\x20contato\x20inválido:\x20',
    'E-mail',
    'isWhatsappValid',
    'Email',
    'companyId',
    'numero',
    '1688tKnIwR',
    'Numero',
    'path',
    'readFile',
    '124971EcTYmc',
    'xlsx',
    '8237894jzNBoF',
    'number',
    'ImportContacts',
    '3491166FLIYrq',
    'número',
    '11TfFQhR',
    'contactListId',
    '../../models/ContactListItem',
    'e-mail',
    '1262214aDyERR',
    'head',
    '__esModule',
    'lodash',
    'findOrCreate',
    'nome',
    'defineProperty',
    'default',
    'save'
  ];
  a473_0x2671 = function () {
    return _0x4a316f;
  };
  return a473_0x2671();
}
var __importDefault =
  (this && this[a473_0x28154c(0x120)]) ||
  function (_0x23f8d4) {
    const _0xef93f3 = a473_0x28154c;
    return _0x23f8d4 && _0x23f8d4[_0xef93f3(0x13a)]
      ? _0x23f8d4
      : { default: _0x23f8d4 };
  };
Object[a473_0x28154c(0x13e)](exports, a473_0x28154c(0x13a), { value: !![] }),
  (exports[a473_0x28154c(0x131)] = void 0x0);
const lodash_1 = require(a473_0x28154c(0x13b)),
  xlsx_1 = __importDefault(require(a473_0x28154c(0x12e))),
  lodash_2 = require(a473_0x28154c(0x13b)),
  ContactListItem_1 = __importDefault(require(a473_0x28154c(0x136))),
  CheckNumber_1 = __importDefault(require(a473_0x28154c(0x147))),
  logger_1 = require(a473_0x28154c(0x142));
async function ImportContacts(_0x3c4d26, _0x17cddb, _0x52a608) {
  const _0x53ea0b = a473_0x28154c,
    _0x149a15 = xlsx_1[_0x53ea0b(0x13f)][_0x53ea0b(0x12c)](
      _0x52a608?.[_0x53ea0b(0x12b)]
    ),
    _0x40bbca = (0x0, lodash_1[_0x53ea0b(0x139)])(
      Object['values'](_0x149a15[_0x53ea0b(0x148)])
    ),
    _0x595754 = xlsx_1[_0x53ea0b(0x13f)][_0x53ea0b(0x144)][_0x53ea0b(0x149)](
      _0x40bbca,
      { header: 0x0 }
    ),
    _0x503c32 = _0x595754[_0x53ea0b(0x14b)](_0x3f45f1 => {
      const _0x191848 = _0x53ea0b;
      let _0xaba766 = '',
        _0xbc1458 = '',
        _0x535c34 = '';
      return (
        ((0x0, lodash_2[_0x191848(0x121)])(_0x3f45f1, _0x191848(0x13d)) ||
          (0x0, lodash_2[_0x191848(0x121)])(_0x3f45f1, _0x191848(0x14c))) &&
          (_0xaba766 = _0x3f45f1[_0x191848(0x13d)] || _0x3f45f1['Nome']),
        ((0x0, lodash_2[_0x191848(0x121)])(_0x3f45f1, 'numero') ||
          (0x0, lodash_2[_0x191848(0x121)])(_0x3f45f1, 'número') ||
          (0x0, lodash_2['has'])(_0x3f45f1, 'Numero') ||
          (0x0, lodash_2['has'])(_0x3f45f1, _0x191848(0x146))) &&
          ((_0xbc1458 =
            _0x3f45f1[_0x191848(0x128)] ||
            _0x3f45f1[_0x191848(0x133)] ||
            _0x3f45f1[_0x191848(0x12a)] ||
            _0x3f45f1[_0x191848(0x146)]),
          (_0xbc1458 = ('' + _0xbc1458)['replace'](/\D/g, ''))),
        ((0x0, lodash_2[_0x191848(0x121)])(_0x3f45f1, _0x191848(0x11f)) ||
          (0x0, lodash_2[_0x191848(0x121)])(_0x3f45f1, _0x191848(0x137)) ||
          (0x0, lodash_2[_0x191848(0x121)])(_0x3f45f1, _0x191848(0x126)) ||
          (0x0, lodash_2[_0x191848(0x121)])(_0x3f45f1, _0x191848(0x124))) &&
          (_0x535c34 =
            _0x3f45f1[_0x191848(0x11f)] ||
            _0x3f45f1[_0x191848(0x137)] ||
            _0x3f45f1[_0x191848(0x126)] ||
            _0x3f45f1['E-mail']),
        {
          name: _0xaba766,
          number: _0xbc1458,
          email: _0x535c34,
          contactListId: _0x3c4d26,
          companyId: _0x17cddb
        }
      );
    }),
    _0x1b45a8 = [];
  for (const _0x4a4f2e of _0x503c32) {
    const [_0x2c9fe1, _0x49dfed] = await ContactListItem_1[_0x53ea0b(0x13f)][
      _0x53ea0b(0x13c)
    ]({
      where: {
        number: '' + _0x4a4f2e[_0x53ea0b(0x130)],
        contactListId: _0x4a4f2e[_0x53ea0b(0x135)],
        companyId: _0x4a4f2e[_0x53ea0b(0x127)]
      },
      defaults: _0x4a4f2e
    });
    _0x49dfed && _0x1b45a8[_0x53ea0b(0x143)](_0x2c9fe1);
  }
  if (_0x1b45a8)
    for (let _0x513327 of _0x1b45a8) {
      try {
        const _0xd33cd7 = await (0x0, CheckNumber_1[_0x53ea0b(0x13f)])(
          _0x513327[_0x53ea0b(0x130)],
          _0x17cddb
        );
        _0x513327[_0x53ea0b(0x125)] = _0xd33cd7 ? !![] : ![];
        const _0x43d71a = _0xd33cd7;
        (_0x513327[_0x53ea0b(0x130)] = _0x43d71a),
          await _0x513327[_0x53ea0b(0x140)]();
      } catch (_0x141d57) {
        logger_1[_0x53ea0b(0x141)]['error'](
          _0x53ea0b(0x123) + _0x513327[_0x53ea0b(0x130)]
        );
      }
    }
  return _0x1b45a8;
}
exports[a473_0x28154c(0x131)] = ImportContacts;
