'use strict';
const a616_0x92faca = a616_0x2a93;
(function (_0x2a2671, _0x2ca312) {
  const _0x5bb728 = a616_0x2a93,
    _0x4a164b = _0x2a2671();
  while (!![]) {
    try {
      const _0x4c83c6 =
        parseInt(_0x5bb728(0xdf)) / 0x1 +
        (parseInt(_0x5bb728(0xcc)) / 0x2) * (parseInt(_0x5bb728(0xda)) / 0x3) +
        (parseInt(_0x5bb728(0xd5)) / 0x4) * (parseInt(_0x5bb728(0xca)) / 0x5) +
        -parseInt(_0x5bb728(0xdb)) / 0x6 +
        (-parseInt(_0x5bb728(0xd4)) / 0x7) *
          (-parseInt(_0x5bb728(0xd0)) / 0x8) +
        (parseInt(_0x5bb728(0xd2)) / 0x9) * (parseInt(_0x5bb728(0xd1)) / 0xa) +
        (-parseInt(_0x5bb728(0xe0)) / 0xb) * (parseInt(_0x5bb728(0xcd)) / 0xc);
      if (_0x4c83c6 === _0x2ca312) break;
      else _0x4a164b['push'](_0x4a164b['shift']());
    } catch (_0x351529) {
      _0x4a164b['push'](_0x4a164b['shift']());
    }
  }
})(a616_0x35c5, 0xb0959);
function a616_0x2a93(_0x428875, _0x37ebd2) {
  const _0x35c5d5 = a616_0x35c5();
  return (
    (a616_0x2a93 = function (_0x2a9383, _0x2229a3) {
      _0x2a9383 = _0x2a9383 - 0xca;
      let _0x5b62ab = _0x35c5d5[_0x2a9383];
      return _0x5b62ab;
    }),
    a616_0x2a93(_0x428875, _0x37ebd2)
  );
}
function a616_0x35c5() {
  const _0x14b705 = [
    'LOWER',
    'Sequelize',
    'sequelize',
    '1029fsKaYt',
    '3267606FMFrFN',
    '../../models/TicketNote',
    'default',
    'DESC',
    '69178ltEkoZ',
    '3113hvrllG',
    '1690HRbenp',
    'createdAt',
    '5654BWMOWm',
    '37308KRvnzl',
    'note',
    '__esModule',
    '2994088ymBrnL',
    '10MVrWTL',
    '34929OfQBeA',
    'length',
    '7iOcrvz',
    '8648jgaYSL',
    'col'
  ];
  a616_0x35c5 = function () {
    return _0x14b705;
  };
  return a616_0x35c5();
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x38a469) {
    return _0x38a469 && _0x38a469['__esModule']
      ? _0x38a469
      : { default: _0x38a469 };
  };
Object['defineProperty'](exports, a616_0x92faca(0xcf), { value: !![] });
const sequelize_1 = require(a616_0x92faca(0xd9)),
  TicketNote_1 = __importDefault(require(a616_0x92faca(0xdc))),
  ListTicketNotesService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1'
  }) => {
    const _0x294da9 = a616_0x92faca,
      _0xfb6fb8 = {
        [sequelize_1['Op']['or']]: [
          {
            note: sequelize_1[_0x294da9(0xd8)]['where'](
              sequelize_1['Sequelize']['fn'](
                _0x294da9(0xd7),
                sequelize_1[_0x294da9(0xd8)][_0x294da9(0xd6)](_0x294da9(0xce))
              ),
              'LIKE',
              '%' + searchParam['toLowerCase']()['trim']() + '%'
            )
          }
        ]
      },
      _0x417523 = 0x14,
      _0x172dd7 = _0x417523 * (+pageNumber - 0x1),
      { count: _0x39ed24, rows: _0x21b0ef } = await TicketNote_1[
        _0x294da9(0xdd)
      ]['findAndCountAll']({
        where: _0xfb6fb8,
        limit: _0x417523,
        offset: _0x172dd7,
        order: [[_0x294da9(0xcb), _0x294da9(0xde)]]
      }),
      _0x7f0bde = _0x39ed24 > _0x172dd7 + _0x21b0ef[_0x294da9(0xd3)];
    return { ticketNotes: _0x21b0ef, count: _0x39ed24, hasMore: _0x7f0bde };
  };
exports[a616_0x92faca(0xdd)] = ListTicketNotesService;
