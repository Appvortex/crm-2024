'use strict';
const a630_0x49f235 = a630_0x5440;
(function (_0x2d617c, _0x37a5c0) {
  const _0x146be2 = a630_0x5440,
    _0x4435eb = _0x2d617c();
  while (!![]) {
    try {
      const _0x1706e7 =
        (parseInt(_0x146be2(0xf1)) / 0x1) * (parseInt(_0x146be2(0xe6)) / 0x2) +
        -parseInt(_0x146be2(0xf3)) / 0x3 +
        parseInt(_0x146be2(0xe4)) / 0x4 +
        parseInt(_0x146be2(0xe9)) / 0x5 +
        (parseInt(_0x146be2(0xef)) / 0x6) * (-parseInt(_0x146be2(0xfb)) / 0x7) +
        (-parseInt(_0x146be2(0xe2)) / 0x8) *
          (-parseInt(_0x146be2(0xf9)) / 0x9) +
        parseInt(_0x146be2(0xda)) / 0xa;
      if (_0x1706e7 === _0x37a5c0) break;
      else _0x4435eb['push'](_0x4435eb['shift']());
    } catch (_0xe9f22) {
      _0x4435eb['push'](_0x4435eb['shift']());
    }
  }
})(a630_0x49cd, 0x8863b);
function a630_0x49cd() {
  const _0x2c925c = [
    '2sfvWNg',
    'findAll',
    '2440125YgZpfB',
    'default',
    'lodash',
    'contactId',
    'user',
    '__importDefault',
    '63GdIjwf',
    'queue',
    '49PLNVZr',
    'intersection',
    'name',
    'push',
    'profilePicUrl',
    'max',
    'companyId',
    '8287830twBmgm',
    'between',
    'contact',
    '../../models/Contact',
    'profile',
    '../../models/Ticket',
    'urlPicture',
    'date-fns',
    '301928lBqzCV',
    'queueId',
    '1982952fwWZNm',
    '../../models/Queue',
    '502894jJWfiQ',
    'open',
    '__esModule',
    '1664965hyAvan',
    'sequelize',
    'endOfDay',
    'parseISO',
    'DESC',
    'defineProperty',
    '902202mrwqhV',
    '../../models/User'
  ];
  a630_0x49cd = function () {
    return _0x2c925c;
  };
  return a630_0x49cd();
}
var __importDefault =
  (this && this[a630_0x49f235(0xf8)]) ||
  function (_0x3123fd) {
    const _0x526dd1 = a630_0x49f235;
    return _0x3123fd && _0x3123fd[_0x526dd1(0xe8)]
      ? _0x3123fd
      : { default: _0x3123fd };
  };
Object[a630_0x49f235(0xee)](exports, '__esModule', { value: !![] });
function a630_0x5440(_0xac21c, _0x37f76b) {
  const _0x49cdfb = a630_0x49cd();
  return (
    (a630_0x5440 = function (_0x544013, _0x183831) {
      _0x544013 = _0x544013 - 0xd8;
      let _0xd560e9 = _0x49cdfb[_0x544013];
      return _0xd560e9;
    }),
    a630_0x5440(_0xac21c, _0x37f76b)
  );
}
const sequelize_1 = require(a630_0x49f235(0xea)),
  date_fns_1 = require(a630_0x49f235(0xe1)),
  Ticket_1 = __importDefault(require(a630_0x49f235(0xdf))),
  User_1 = __importDefault(require(a630_0x49f235(0xf0))),
  Contact_1 = __importDefault(require(a630_0x49f235(0xdd))),
  Queue_1 = __importDefault(require(a630_0x49f235(0xe5))),
  lodash_1 = require(a630_0x49f235(0xf5)),
  TicketsQueuesService = async ({
    dateStart: _0x562591,
    dateEnd: _0x3abbc6,
    status: _0xd7257b,
    userId: _0x5b4f4f,
    queuesIds: _0x39bd01,
    companyId: _0xb14285,
    showAll: _0x56b93f,
    profile: _0x441119
  }) => {
    const _0x11fdef = a630_0x49f235;
    let _0x4e1e2c = {};
    const _0x20c21a = [
      {
        model: Contact_1[_0x11fdef(0xf4)],
        as: _0x11fdef(0xdc),
        attributes: [
          'id',
          _0x11fdef(0xfd),
          'number',
          _0x11fdef(0xff),
          _0x11fdef(0xd9),
          _0x11fdef(0xe0)
        ]
      },
      {
        model: User_1['default'],
        as: _0x11fdef(0xf7),
        attributes: ['id', _0x11fdef(0xfd), _0x11fdef(0xde)]
      },
      { model: Queue_1[_0x11fdef(0xf4)], as: _0x11fdef(0xfa) }
    ];
    if (_0xd7257b) {
      const _0x35f84f = [],
        _0x6a94b3 = await Ticket_1[_0x11fdef(0xf4)][_0x11fdef(0xf2)]({
          where: { status: _0x11fdef(0xe7) },
          group: [
            _0x11fdef(0xd9),
            _0x11fdef(0xf6),
            _0x11fdef(0xe3),
            'whatsappId'
          ],
          attributes: [
            _0x11fdef(0xd9),
            _0x11fdef(0xf6),
            'queueId',
            'whatsappId',
            [
              (0x0, sequelize_1['fn'])(
                _0x11fdef(0xd8),
                (0x0, sequelize_1['col'])('id')
              ),
              'id'
            ]
          ]
        });
      _0x6a94b3 &&
        _0x35f84f[_0x11fdef(0xfe)](
          _0x6a94b3['map'](_0x3f810a => _0x3f810a['id'])
        );
      const _0xe42a7d = (0x0, lodash_1[_0x11fdef(0xfc)])(..._0x35f84f);
      _0x4e1e2c = {
        ..._0x4e1e2c,
        id: { [sequelize_1['Op']['in']]: _0xe42a7d }
      };
    }
    _0x441119 === _0x11fdef(0xf7) &&
      (_0x4e1e2c = { ..._0x4e1e2c, userId: _0x5b4f4f });
    _0x562591 &&
      _0x3abbc6 &&
      (_0x4e1e2c = {
        ..._0x4e1e2c,
        createdAt: {
          [sequelize_1['Op'][_0x11fdef(0xdb)]]: [
            +(0x0, date_fns_1['startOfDay'])(
              (0x0, date_fns_1[_0x11fdef(0xec)])(_0x562591)
            ),
            +(0x0, date_fns_1[_0x11fdef(0xeb)])(
              (0x0, date_fns_1[_0x11fdef(0xec)])(_0x3abbc6)
            )
          ]
        }
      });
    const _0x5e784c = await Ticket_1[_0x11fdef(0xf4)][_0x11fdef(0xf2)]({
      where: { ..._0x4e1e2c, companyId: _0xb14285 },
      include: _0x20c21a,
      order: [['updatedAt', _0x11fdef(0xed)]]
    });
    return _0x5e784c;
  };
exports[a630_0x49f235(0xf4)] = TicketsQueuesService;
