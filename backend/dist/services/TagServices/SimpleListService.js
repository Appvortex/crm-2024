'use strict';
function a609_0x5d09() {
  const _0x33cd9f = [
    '1496559vUlPQe',
    'contacts',
    '__importDefault',
    '830OiFLGp',
    'like',
    'defineProperty',
    '8cIZsQn',
    '10926096zOckdz',
    '__esModule',
    '4hEeUKl',
    'Tag.id',
    '791MxKnvX',
    '1280825DjPOxd',
    '15489EEGahP',
    'COUNT',
    'default',
    '../../models/Contact',
    'sequelize',
    'Sequelize',
    'contacts.id',
    'contactsCount',
    'contacts.ContactTag.updatedAt',
    '17214VMebqQ',
    '4719253ZqRguI',
    'createdAt',
    '../../models/Tag',
    'findAll',
    'contacts.ContactTag.createdAt',
    'name',
    '325412bIcxoK',
    'contacts.ContactTag.tagId'
  ];
  a609_0x5d09 = function () {
    return _0x33cd9f;
  };
  return a609_0x5d09();
}
const a609_0x64271b = a609_0x3e63;
(function (_0x41a63e, _0x3bcb6a) {
  const _0x536e89 = a609_0x3e63,
    _0x141ab8 = _0x41a63e();
  while (!![]) {
    try {
      const _0x3f81bf =
        (parseInt(_0x536e89(0x1ef)) / 0x1) *
          (parseInt(_0x536e89(0x1e7)) / 0x2) +
        (parseInt(_0x536e89(0x1e9)) / 0x3) *
          (parseInt(_0x536e89(0x1f2)) / 0x4) +
        parseInt(_0x536e89(0x1f5)) / 0x5 +
        (parseInt(_0x536e89(0x1ff)) / 0x6) *
          (parseInt(_0x536e89(0x1f4)) / 0x7) +
        -parseInt(_0x536e89(0x1f0)) / 0x8 +
        (-parseInt(_0x536e89(0x1f6)) / 0x9) *
          (-parseInt(_0x536e89(0x1ec)) / 0xa) +
        -parseInt(_0x536e89(0x1e1)) / 0xb;
      if (_0x3f81bf === _0x3bcb6a) break;
      else _0x141ab8['push'](_0x141ab8['shift']());
    } catch (_0x5a931e) {
      _0x141ab8['push'](_0x141ab8['shift']());
    }
  }
})(a609_0x5d09, 0xb1f59);
var __importDefault =
  (this && this[a609_0x64271b(0x1eb)]) ||
  function (_0x3667e8) {
    const _0x1e0d30 = a609_0x64271b;
    return _0x3667e8 && _0x3667e8[_0x1e0d30(0x1f1)]
      ? _0x3667e8
      : { default: _0x3667e8 };
  };
Object[a609_0x64271b(0x1ee)](exports, a609_0x64271b(0x1f1), { value: !![] });
function a609_0x3e63(_0x43a803, _0x275247) {
  const _0x5d09bc = a609_0x5d09();
  return (
    (a609_0x3e63 = function (_0x3e6371, _0x3b2495) {
      _0x3e6371 = _0x3e6371 - 0x1e1;
      let _0x5ceb7f = _0x5d09bc[_0x3e6371];
      return _0x5ceb7f;
    }),
    a609_0x3e63(_0x43a803, _0x275247)
  );
}
const sequelize_1 = require(a609_0x64271b(0x1fa)),
  Tag_1 = __importDefault(require(a609_0x64271b(0x1e3))),
  Contact_1 = __importDefault(require(a609_0x64271b(0x1f9))),
  ListService = async ({
    companyId: _0xc107b9,
    searchParam: _0x164c36,
    kanban: kanban = 0x0
  }) => {
    const _0x5b3805 = a609_0x64271b;
    let _0x330925 = {};
    _0x164c36 &&
      (_0x330925 = {
        [sequelize_1['Op']['or']]: [
          {
            name: {
              [sequelize_1['Op'][_0x5b3805(0x1ed)]]: '%' + _0x164c36 + '%'
            }
          },
          {
            color: {
              [sequelize_1['Op'][_0x5b3805(0x1ed)]]: '%' + _0x164c36 + '%'
            }
          }
        ]
      });
    const _0x19cab4 = await Tag_1[_0x5b3805(0x1f8)][_0x5b3805(0x1e4)]({
      where: { ..._0x330925, companyId: _0xc107b9, kanban: kanban },
      order: [[_0x5b3805(0x1e6), 'ASC']],
      include: [{ model: Contact_1[_0x5b3805(0x1f8)], as: _0x5b3805(0x1ea) }],
      attributes: {
        exclude: [_0x5b3805(0x1e2), 'updatedAt'],
        include: [
          [
            sequelize_1[_0x5b3805(0x1fb)]['fn'](
              _0x5b3805(0x1f7),
              sequelize_1[_0x5b3805(0x1fb)]['col'](_0x5b3805(0x1fc))
            ),
            _0x5b3805(0x1fd)
          ]
        ]
      },
      group: [
        _0x5b3805(0x1f3),
        _0x5b3805(0x1e8),
        'contacts.ContactTag.contactId',
        _0x5b3805(0x1e5),
        _0x5b3805(0x1fe),
        'contacts.id'
      ]
    });
    return _0x19cab4;
  };
exports[a609_0x64271b(0x1f8)] = ListService;
