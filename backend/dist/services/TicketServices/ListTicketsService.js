'use strict';
const a625_0x24105d = a625_0x2d1c;
(function (_0x2ed226, _0x2c3d65) {
  const _0x34ce53 = a625_0x2d1c,
    _0x1f7b4e = _0x2ed226();
  while (!![]) {
    try {
      const _0x975eca =
        parseInt(_0x34ce53(0x22d)) / 0x1 +
        -parseInt(_0x34ce53(0x1f5)) / 0x2 +
        -parseInt(_0x34ce53(0x215)) / 0x3 +
        -parseInt(_0x34ce53(0x1f6)) / 0x4 +
        (parseInt(_0x34ce53(0x1fd)) / 0x5) *
          (-parseInt(_0x34ce53(0x21b)) / 0x6) +
        (-parseInt(_0x34ce53(0x229)) / 0x7) *
          (-parseInt(_0x34ce53(0x237)) / 0x8) +
        (-parseInt(_0x34ce53(0x1f1)) / 0x9) *
          (-parseInt(_0x34ce53(0x206)) / 0xa);
      if (_0x975eca === _0x2c3d65) break;
      else _0x1f7b4e['push'](_0x1f7b4e['shift']());
    } catch (_0x4b0f17) {
      _0x1f7b4e['push'](_0x1f7b4e['shift']());
    }
  }
})(a625_0x115a, 0x25c0d);
function a625_0x2d1c(_0x25f347, _0x38a3e9) {
  const _0x115ace = a625_0x115a();
  return (
    (a625_0x2d1c = function (_0x2d1c35, _0x57e5bb) {
      _0x2d1c35 = _0x2d1c35 - 0x1ea;
      let _0x462a0c = _0x115ace[_0x2d1c35];
      return _0x462a0c;
    }),
    a625_0x2d1c(_0x25f347, _0x38a3e9)
  );
}
function a625_0x115a() {
  const _0x111af9 = [
    'unaccent',
    'lgpd',
    'like',
    'email',
    'LIKE',
    'findAndCountAll',
    'toLocaleLowerCase',
    'contactId',
    'findAll',
    'enabled',
    '56kKyJFt',
    'group',
    'acceptAudioMessage',
    'search',
    '261570pQqlTI',
    'map',
    'contact.name',
    '../../models/Whatsapp',
    'LOWER',
    'MAX(\x22id\x22)',
    'literal',
    'defineProperty',
    'open',
    '../../models/Tag',
    '175368xZSMBm',
    'length',
    'default',
    'allTicket',
    'admin',
    'updatedAt',
    'closed',
    'queues',
    '91737KYTxaS',
    'isArray',
    'enable',
    'messages',
    '499444yNtBgd',
    '536032AWLgeC',
    'allHistoric',
    '../../models/Message',
    'whatsappId',
    'contact',
    'false',
    'groupAsTicket',
    '85535XeYnic',
    'true',
    'queue',
    'user',
    'urlPicture',
    'extraInfo',
    '__esModule',
    '../../models/ContactTag',
    'profile',
    '300zdwWdQ',
    'allUserChat',
    'remove-accents',
    'active',
    'name',
    'expiresTicket',
    'disable',
    'DESC',
    '../../models/Queue',
    'trim',
    'body',
    'color',
    '../../models/User',
    'col',
    'number',
    '202515fYSuOs',
    'where',
    'notIn',
    'intersection',
    'allowGroup',
    'pending',
    '48VlyRWH',
    '../../models/Contact',
    'push',
    'companyId'
  ];
  a625_0x115a = function () {
    return _0x111af9;
  };
  return a625_0x115a();
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x1cfe72) {
    const _0x2625c9 = a625_0x2d1c;
    return _0x1cfe72 && _0x1cfe72[_0x2625c9(0x203)]
      ? _0x1cfe72
      : { default: _0x1cfe72 };
  };
Object[a625_0x24105d(0x234)](exports, a625_0x24105d(0x203), { value: !![] });
const sequelize_1 = require('sequelize'),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  Contact_1 = __importDefault(require(a625_0x24105d(0x21c))),
  Message_1 = __importDefault(require(a625_0x24105d(0x1f8))),
  Queue_1 = __importDefault(require(a625_0x24105d(0x20e))),
  User_1 = __importDefault(require(a625_0x24105d(0x212))),
  ShowUserService_1 = __importDefault(
    require('../UserServices/ShowUserService')
  ),
  Tag_1 = __importDefault(require(a625_0x24105d(0x236))),
  lodash_1 = require('lodash'),
  Whatsapp_1 = __importDefault(require(a625_0x24105d(0x230))),
  ContactTag_1 = __importDefault(require(a625_0x24105d(0x204))),
  remove_accents_1 = __importDefault(require(a625_0x24105d(0x208))),
  isQueueIdHistoryBlocked_1 = __importDefault(
    require('../UserServices/isQueueIdHistoryBlocked')
  ),
  ListTicketsService = async ({
    searchParam: searchParam = '',
    pageNumber: pageNumber = '1',
    queueIds: _0x4a5091,
    tags: _0x5c869f,
    users: _0x471d99,
    status: _0x556ab0,
    date: _0x209fa9,
    dateStart: _0x3a6e23,
    dateEnd: _0x47913f,
    updatedAt: _0x4cbe66,
    showAll: _0x34c401,
    userId: _0x1f86a2,
    withUnreadMessages: _0x4099bf,
    whatsappIds: _0x393146,
    statusFilters: _0x510487,
    companyId: _0x479d2d
  }) => {
    const _0x5302f6 = a625_0x24105d,
      _0x43a0d6 = await (0x0, isQueueIdHistoryBlocked_1[_0x5302f6(0x1eb)])({
        userRequest: _0x1f86a2
      });
    let _0x377959;
    !_0x43a0d6
      ? (_0x377959 = {
          [sequelize_1['Op']['or']]: [
            { userId: _0x1f86a2 },
            { status: _0x5302f6(0x21a) }
          ],
          queueId: { [sequelize_1['Op']['or']]: [_0x4a5091, null] },
          companyId: _0x479d2d
        })
      : (_0x377959 = {
          [sequelize_1['Op']['or']]: [
            { userId: _0x1f86a2 },
            { status: 'pending' }
          ],
          companyId: _0x479d2d
        });
    let _0x3985de;
    _0x3985de = [
      {
        model: Contact_1[_0x5302f6(0x1eb)],
        as: _0x5302f6(0x1fa),
        attributes: [
          'id',
          _0x5302f6(0x20a),
          _0x5302f6(0x214),
          _0x5302f6(0x222),
          'profilePicUrl',
          _0x5302f6(0x22b),
          _0x5302f6(0x209),
          _0x5302f6(0x201),
          'companyId'
        ],
        include: [_0x5302f6(0x202), 'contactTags']
      },
      {
        model: Queue_1[_0x5302f6(0x1eb)],
        as: _0x5302f6(0x1ff),
        attributes: ['id', _0x5302f6(0x20a), 'color']
      },
      {
        model: User_1['default'],
        as: 'user',
        attributes: ['id', _0x5302f6(0x20a)]
      },
      {
        model: Tag_1[_0x5302f6(0x1eb)],
        as: 'tags',
        attributes: ['id', _0x5302f6(0x20a), _0x5302f6(0x211)]
      },
      {
        model: Whatsapp_1[_0x5302f6(0x1eb)],
        as: 'whatsapp',
        attributes: ['id', _0x5302f6(0x20a), _0x5302f6(0x20b), _0x5302f6(0x1fc)]
      }
    ];
    const _0x66e8f = await (0x0, ShowUserService_1[_0x5302f6(0x1eb)])(
        _0x1f86a2,
        _0x479d2d
      ),
      _0x294c24 = _0x66e8f[_0x5302f6(0x1f0)][_0x5302f6(0x22e)](
        _0x438e02 => _0x438e02['id']
      );
    if (_0x556ab0 === _0x5302f6(0x235))
      _0x377959 = {
        ..._0x377959,
        userId: _0x1f86a2,
        queueId: { [sequelize_1['Op']['in']]: _0x4a5091 }
      };
    else {
      if (
        _0x556ab0 === _0x5302f6(0x22a) &&
        (_0x66e8f[_0x5302f6(0x219)] ||
          _0x66e8f[_0x5302f6(0x205)] === _0x5302f6(0x1ed)) &&
        _0x66e8f[_0x5302f6(0x1f9)]
      )
        _0x377959 = {
          companyId: _0x479d2d,
          queueId: { [sequelize_1['Op']['or']]: [_0x4a5091, null] },
          whatsappId: _0x66e8f[_0x5302f6(0x1f9)]
        };
      else {
        if (
          _0x556ab0 === _0x5302f6(0x22a) &&
          (_0x66e8f[_0x5302f6(0x219)] ||
            _0x66e8f[_0x5302f6(0x205)] === 'admin') &&
          !_0x66e8f[_0x5302f6(0x1f9)]
        )
          _0x377959 = {
            companyId: _0x479d2d,
            queueId: { [sequelize_1['Op']['or']]: [_0x4a5091, null] }
          };
        else {
          if (
            _0x66e8f[_0x5302f6(0x205)] === 'user' &&
            _0x556ab0 === _0x5302f6(0x21a) &&
            _0x66e8f[_0x5302f6(0x1ec)] === _0x5302f6(0x1f3)
          ) {
            const _0x2f966c = [];
            let _0x363e02 = [];
            !_0x43a0d6
              ? (_0x363e02 = await Ticket_1[_0x5302f6(0x1eb)]['findAll']({
                  where: {
                    userId: {
                      [sequelize_1['Op']['or']]: [_0x66e8f['id'], null]
                    },
                    queueId: { [sequelize_1['Op']['or']]: [_0x4a5091, null] },
                    status: _0x5302f6(0x21a),
                    companyId: _0x479d2d
                  }
                }))
              : (_0x363e02 = await Ticket_1[_0x5302f6(0x1eb)][_0x5302f6(0x227)](
                  {
                    where: {
                      userId: {
                        [sequelize_1['Op']['or']]: [_0x66e8f['id'], null]
                      },
                      status: _0x5302f6(0x21a),
                      companyId: _0x479d2d
                    }
                  }
                ));
            _0x363e02 &&
              _0x2f966c['push'](
                _0x363e02[_0x5302f6(0x22e)](_0x14e50e => _0x14e50e['id'])
              );
            const _0x282cf4 = (0x0, lodash_1['intersection'])(..._0x2f966c);
            _0x377959 = { ..._0x377959, id: _0x282cf4 };
          } else {
            if (
              _0x66e8f['profile'] === _0x5302f6(0x200) &&
              _0x556ab0 === _0x5302f6(0x21a) &&
              _0x66e8f[_0x5302f6(0x1ec)] === _0x5302f6(0x20c)
            ) {
              const _0x379448 = [];
              let _0x4a2916 = [];
              !_0x43a0d6
                ? (_0x4a2916 = await Ticket_1['default']['findAll']({
                    where: {
                      companyId: _0x479d2d,
                      userId: {
                        [sequelize_1['Op']['or']]: [_0x66e8f['id'], null]
                      },
                      status: _0x5302f6(0x21a),
                      queueId: { [sequelize_1['Op']['in']]: _0x4a5091 }
                    }
                  }))
                : (_0x4a2916 = await Ticket_1[_0x5302f6(0x1eb)][
                    _0x5302f6(0x227)
                  ]({
                    where: {
                      companyId: _0x479d2d,
                      [sequelize_1['Op']['or']]: [
                        {
                          userId: {
                            [sequelize_1['Op']['or']]: [_0x66e8f['id'], null]
                          }
                        },
                        { status: 'pending' }
                      ],
                      status: 'pending'
                    }
                  }));
              _0x4a2916 &&
                _0x379448['push'](
                  _0x4a2916[_0x5302f6(0x22e)](_0x12f0be => _0x12f0be['id'])
                );
              const _0x4ff636 = (0x0, lodash_1[_0x5302f6(0x218)])(..._0x379448);
              _0x377959 = { ..._0x377959, id: _0x4ff636 };
            }
          }
        }
      }
    }
    _0x34c401 === _0x5302f6(0x1fe) &&
      (_0x66e8f['profile'] === _0x5302f6(0x1ed) ||
        _0x66e8f['allUserChat'] === _0x5302f6(0x228)) &&
      (_0x66e8f[_0x5302f6(0x1f7)] === _0x5302f6(0x228)
        ? (_0x377959 = {})
        : (_0x377959 = {
            queueId: { [sequelize_1['Op']['or']]: [_0x4a5091, null] }
          }));
    _0x556ab0 &&
      _0x556ab0 !== 'search' &&
      (_0x377959 = {
        ..._0x377959,
        status:
          _0x34c401 === _0x5302f6(0x1fe) && _0x556ab0 === _0x5302f6(0x21a)
            ? { [sequelize_1['Op']['or']]: [_0x556ab0, _0x5302f6(0x220)] }
            : _0x556ab0
      });
    if (_0x556ab0 === _0x5302f6(0x1ef)) {
      let _0x47b02c;
      if (!_0x43a0d6) {
        let _0x4b510a = { companyId: _0x479d2d, status: _0x5302f6(0x1ef) };
        _0x34c401 === 'false' && _0x66e8f[_0x5302f6(0x205)] === 'admin'
          ? (_0x4b510a = {
              ..._0x4b510a,
              queueId: _0x4a5091,
              userId: _0x1f86a2
            })
          : (_0x4b510a = {
              ..._0x4b510a,
              queueId:
                _0x34c401 === _0x5302f6(0x1fe) ||
                _0x66e8f['allTicket'] === _0x5302f6(0x1f3)
                  ? { [sequelize_1['Op']['or']]: [_0x4a5091, null] }
                  : _0x4a5091
            }),
          (_0x47b02c = await Ticket_1[_0x5302f6(0x1eb)][_0x5302f6(0x227)]({
            attributes: [
              _0x5302f6(0x21e),
              _0x5302f6(0x226),
              _0x5302f6(0x1f9),
              [(0x0, sequelize_1['literal'])(_0x5302f6(0x232)), 'id']
            ],
            where: _0x4b510a,
            group: ['companyId', _0x5302f6(0x226), _0x5302f6(0x1f9)]
          }));
      } else {
        let _0x150759 = { companyId: _0x479d2d, status: _0x5302f6(0x1ef) };
        _0x34c401 === _0x5302f6(0x1fb) &&
        (_0x66e8f[_0x5302f6(0x205)] === _0x5302f6(0x1ed) ||
          _0x66e8f[_0x5302f6(0x207)] === 'enabled')
          ? (_0x150759 = {
              ..._0x150759,
              queueId: _0x4a5091,
              userId: _0x1f86a2
            })
          : (_0x150759 = {
              ..._0x150759,
              queueId:
                _0x34c401 === _0x5302f6(0x1fe) ||
                _0x66e8f[_0x5302f6(0x1ec)] === 'enable'
                  ? { [sequelize_1['Op']['or']]: [_0x4a5091, null] }
                  : _0x4a5091
            }),
          (_0x47b02c = await Ticket_1[_0x5302f6(0x1eb)]['findAll']({
            attributes: [
              _0x5302f6(0x21e),
              _0x5302f6(0x226),
              'whatsappId',
              [(0x0, sequelize_1['literal'])(_0x5302f6(0x232)), 'id']
            ],
            where: _0x150759,
            group: [_0x5302f6(0x21e), _0x5302f6(0x226), _0x5302f6(0x1f9)]
          }));
      }
      const _0x3a478f = _0x47b02c[_0x5302f6(0x22e)](
        _0x112c1d => _0x112c1d['id']
      );
      _0x377959 = { id: _0x3a478f };
    } else {
      if (_0x556ab0 === _0x5302f6(0x22c)) {
        _0x377959 = { companyId: _0x479d2d };
        let _0x2a497d;
        if (!_0x43a0d6 && _0x66e8f[_0x5302f6(0x205)] === _0x5302f6(0x200))
          _0x2a497d = await Ticket_1['default'][_0x5302f6(0x227)]({
            attributes: [
              _0x5302f6(0x21e),
              _0x5302f6(0x226),
              _0x5302f6(0x1f9),
              [(0x0, sequelize_1[_0x5302f6(0x233)])(_0x5302f6(0x232)), 'id']
            ],
            where: {
              [sequelize_1['Op']['or']]: [
                { userId: _0x1f86a2 },
                { status: [_0x5302f6(0x21a), 'closed', _0x5302f6(0x22a)] }
              ],
              queueId:
                _0x34c401 === _0x5302f6(0x1fe) ||
                _0x66e8f[_0x5302f6(0x1ec)] === 'enable'
                  ? { [sequelize_1['Op']['or']]: [_0x4a5091, null] }
                  : _0x4a5091,
              companyId: _0x479d2d
            },
            group: [_0x5302f6(0x21e), _0x5302f6(0x226), _0x5302f6(0x1f9)]
          });
        else {
          let _0x56133a = {
            companyId: _0x479d2d,
            [sequelize_1['Op']['or']]: [
              { userId: _0x1f86a2 },
              { status: ['pending', _0x5302f6(0x1ef), _0x5302f6(0x22a)] }
            ]
          };
          if (
            _0x34c401 === _0x5302f6(0x1fb) &&
            _0x66e8f[_0x5302f6(0x205)] === _0x5302f6(0x1ed)
          )
            _0x56133a = { ..._0x56133a, queueId: _0x4a5091 };
          else
            _0x34c401 === _0x5302f6(0x1fe) &&
              _0x66e8f[_0x5302f6(0x205)] === _0x5302f6(0x1ed) &&
              (_0x56133a = {
                companyId: _0x479d2d,
                queueId: { [sequelize_1['Op']['or']]: [_0x4a5091, null] }
              });
          _0x2a497d = await Ticket_1[_0x5302f6(0x1eb)][_0x5302f6(0x227)]({
            attributes: [
              _0x5302f6(0x21e),
              _0x5302f6(0x226),
              _0x5302f6(0x1f9),
              [(0x0, sequelize_1['literal'])(_0x5302f6(0x232)), 'id']
            ],
            where: _0x56133a,
            group: [_0x5302f6(0x21e), _0x5302f6(0x226), _0x5302f6(0x1f9)]
          });
        }
        const _0x4dcdfa = _0x2a497d[_0x5302f6(0x22e)](
          _0xed5c43 => _0xed5c43['id']
        );
        _0x377959 = {
          ..._0x377959,
          id: { [sequelize_1['Op']['in']]: _0x4dcdfa }
        };
        if (searchParam) {
          const _0x3ec793 = (0x0, remove_accents_1['default'])(
            searchParam[_0x5302f6(0x225)]()[_0x5302f6(0x20f)]()
          );
          (_0x3985de = [
            ..._0x3985de,
            {
              model: Message_1['default'],
              as: _0x5302f6(0x1f4),
              attributes: ['id', _0x5302f6(0x210)],
              where: {
                body: (0x0, sequelize_1[_0x5302f6(0x216)])(
                  (0x0, sequelize_1['fn'])(
                    _0x5302f6(0x231),
                    (0x0, sequelize_1['fn'])(
                      _0x5302f6(0x21f),
                      (0x0, sequelize_1[_0x5302f6(0x213)])(_0x5302f6(0x210))
                    )
                  ),
                  _0x5302f6(0x223),
                  '%' + _0x3ec793 + '%'
                )
              },
              required: ![],
              duplicating: ![]
            }
          ]),
            (_0x377959 = {
              ..._0x377959,
              [sequelize_1['Op']['or']]: [
                {
                  '$contact.name$': (0x0, sequelize_1[_0x5302f6(0x216)])(
                    (0x0, sequelize_1['fn'])(
                      _0x5302f6(0x231),
                      (0x0, sequelize_1['fn'])(
                        _0x5302f6(0x21f),
                        (0x0, sequelize_1[_0x5302f6(0x213)])(_0x5302f6(0x22f))
                      )
                    ),
                    _0x5302f6(0x223),
                    '%' + _0x3ec793 + '%'
                  )
                },
                {
                  '$contact.number$': {
                    [sequelize_1['Op'][_0x5302f6(0x221)]]: '%' + _0x3ec793 + '%'
                  }
                },
                {
                  '$message.body$': (0x0, sequelize_1['where'])(
                    (0x0, sequelize_1['fn'])(
                      'LOWER',
                      (0x0, sequelize_1['fn'])(
                        _0x5302f6(0x21f),
                        (0x0, sequelize_1['col'])('body')
                      )
                    ),
                    'LIKE',
                    '%' + _0x3ec793 + '%'
                  )
                }
              ]
            });
        }
        if (
          Array[_0x5302f6(0x1f2)](_0x5c869f) &&
          _0x5c869f[_0x5302f6(0x1ea)] > 0x0
        ) {
          const _0x15778f = [],
            _0x3e62a5 = await ContactTag_1[_0x5302f6(0x1eb)][_0x5302f6(0x227)]({
              where: { tagId: { [sequelize_1['Op']['in']]: _0x5c869f } }
            });
          _0x3e62a5 &&
            _0x15778f[_0x5302f6(0x21d)](
              _0x3e62a5['map'](_0x16f24b => _0x16f24b[_0x5302f6(0x226)])
            );
          const _0x471d75 = (0x0, lodash_1['intersection'])(..._0x15778f);
          _0x377959 = {
            ..._0x377959,
            contactId: { [sequelize_1['Op']['in']]: _0x471d75 }
          };
        }
        Array[_0x5302f6(0x1f2)](_0x471d99) &&
          _0x471d99[_0x5302f6(0x1ea)] > 0x0 &&
          (_0x377959 = {
            ..._0x377959,
            userId: { [sequelize_1['Op']['in']]: _0x471d99 }
          }),
          Array[_0x5302f6(0x1f2)](_0x393146) &&
            _0x393146['length'] > 0x0 &&
            (_0x377959 = {
              ..._0x377959,
              whatsappId: { [sequelize_1['Op']['in']]: _0x393146 }
            }),
          Array['isArray'](_0x510487) &&
            _0x510487[_0x5302f6(0x1ea)] > 0x0 &&
            (_0x377959 = {
              ..._0x377959,
              status: { [sequelize_1['Op']['in']]: _0x510487 }
            });
      }
    }
    _0x4099bf === _0x5302f6(0x1fe) &&
      ((_0x377959 = {
        [sequelize_1['Op']['or']]: [
          {
            userId: _0x1f86a2,
            status: {
              [sequelize_1['Op'][_0x5302f6(0x217)]]: [
                _0x5302f6(0x1ef),
                'lgpd',
                'nps'
              ]
            },
            queueId: { [sequelize_1['Op']['in']]: _0x294c24 },
            unreadMessages: { [sequelize_1['Op']['gt']]: 0x0 },
            companyId: _0x479d2d
          },
          {
            status: {
              [sequelize_1['Op']['in']]: ['pending', _0x5302f6(0x22a)]
            },
            queueId: { [sequelize_1['Op']['or']]: [_0x294c24, null] },
            unreadMessages: { [sequelize_1['Op']['gt']]: 0x0 },
            companyId: _0x479d2d
          }
        ]
      }),
      _0x556ab0 === _0x5302f6(0x22a) &&
        (_0x66e8f[_0x5302f6(0x219)] || _0x34c401 === _0x5302f6(0x1fe)) &&
        (_0x377959 = {
          ..._0x377959,
          queueId: { [sequelize_1['Op']['or']]: [_0x294c24, null] }
        }));
    _0x377959 = { ..._0x377959, companyId: _0x479d2d };
    const _0x40e9c5 = 0x28,
      _0x46d2a9 = _0x40e9c5 * (+pageNumber - 0x1),
      { count: _0x55af73, rows: _0x1e690d } = await Ticket_1['default'][
        _0x5302f6(0x224)
      ]({
        where: _0x377959,
        include: _0x3985de,
        distinct: !![],
        limit: _0x40e9c5,
        offset: _0x46d2a9,
        order: [[_0x5302f6(0x1ee), _0x5302f6(0x20d)]],
        subQuery: ![]
      }),
      _0x4ab404 = _0x55af73 > _0x46d2a9 + _0x1e690d[_0x5302f6(0x1ea)];
    return { tickets: _0x1e690d, count: _0x55af73, hasMore: _0x4ab404 };
  };
exports[a625_0x24105d(0x1eb)] = ListTicketsService;
