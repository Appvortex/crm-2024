'use strict';
const a15_0x2836fe = a15_0x392f;
(function (_0xa8b848, _0x341157) {
  const _0x37995c = a15_0x392f,
    _0x41e10d = _0xa8b848();
  while (!![]) {
    try {
      const _0x45bc23 =
        (-parseInt(_0x37995c(0x10b)) / 0x1) *
          (parseInt(_0x37995c(0x10f)) / 0x2) +
        (parseInt(_0x37995c(0xdc)) / 0x3) * (parseInt(_0x37995c(0xe4)) / 0x4) +
        -parseInt(_0x37995c(0x112)) / 0x5 +
        (-parseInt(_0x37995c(0xf5)) / 0x6) *
          (-parseInt(_0x37995c(0xd5)) / 0x7) +
        (-parseInt(_0x37995c(0x106)) / 0x8) *
          (-parseInt(_0x37995c(0xe6)) / 0x9) +
        (-parseInt(_0x37995c(0xd0)) / 0xa) * (parseInt(_0x37995c(0xfb)) / 0xb) +
        (-parseInt(_0x37995c(0xd4)) / 0xc) *
          (-parseInt(_0x37995c(0x117)) / 0xd);
      if (_0x45bc23 === _0x341157) break;
      else _0x41e10d['push'](_0x41e10d['shift']());
    } catch (_0x2e68ca) {
      _0x41e10d['push'](_0x41e10d['shift']());
    }
  }
})(a15_0x449e, 0x7ffcc);
var __createBinding =
    (this && this[a15_0x2836fe(0xeb)]) ||
    (Object['create']
      ? function (_0x1fe6ad, _0x3b8506, _0x1b7556, _0xba046a) {
          const _0x2e08b7 = a15_0x2836fe;
          if (_0xba046a === undefined) _0xba046a = _0x1b7556;
          var _0x9aa0d4 = Object[_0x2e08b7(0x102)](_0x3b8506, _0x1b7556);
          (!_0x9aa0d4 ||
            (_0x2e08b7(0xf7) in _0x9aa0d4
              ? !_0x3b8506[_0x2e08b7(0xd9)]
              : _0x9aa0d4[_0x2e08b7(0x11f)] || _0x9aa0d4[_0x2e08b7(0xfc)])) &&
            (_0x9aa0d4 = {
              enumerable: !![],
              get: function () {
                return _0x3b8506[_0x1b7556];
              }
            }),
            Object['defineProperty'](_0x1fe6ad, _0xba046a, _0x9aa0d4);
        }
      : function (_0x336e33, _0x143274, _0x22e30a, _0x388fe0) {
          if (_0x388fe0 === undefined) _0x388fe0 = _0x22e30a;
          _0x336e33[_0x388fe0] = _0x143274[_0x22e30a];
        }),
  __setModuleDefault =
    (this && this[a15_0x2836fe(0xd1)]) ||
    (Object[a15_0x2836fe(0xca)]
      ? function (_0x27106a, _0xce895f) {
          const _0x1a0e14 = a15_0x2836fe;
          Object['defineProperty'](_0x27106a, _0x1a0e14(0xda), {
            enumerable: !![],
            value: _0xce895f
          });
        }
      : function (_0x5690dd, _0x4b6fd8) {
          const _0x24e607 = a15_0x2836fe;
          _0x5690dd[_0x24e607(0xda)] = _0x4b6fd8;
        }),
  __importStar =
    (this && this[a15_0x2836fe(0xe5)]) ||
    function (_0x129875) {
      const _0x569143 = a15_0x2836fe;
      if (_0x129875 && _0x129875['__esModule']) return _0x129875;
      var _0x425d3b = {};
      if (_0x129875 != null) {
        for (var _0x3ded1b in _0x129875)
          if (
            _0x3ded1b !== 'default' &&
            Object[_0x569143(0x114)][_0x569143(0x10d)][_0x569143(0x11e)](
              _0x129875,
              _0x3ded1b
            )
          )
            __createBinding(_0x425d3b, _0x129875, _0x3ded1b);
      }
      return __setModuleDefault(_0x425d3b, _0x129875), _0x425d3b;
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0x1ce7c3) {
      const _0x200ecd = a15_0x2836fe;
      return _0x1ce7c3 && _0x1ce7c3[_0x200ecd(0xd9)]
        ? _0x1ce7c3
        : { default: _0x1ce7c3 };
    };
Object[a15_0x2836fe(0x101)](exports, a15_0x2836fe(0xd9), { value: !![] }),
  (exports[a15_0x2836fe(0x118)] =
    exports[a15_0x2836fe(0x10e)] =
    exports[a15_0x2836fe(0x11a)] =
    exports[a15_0x2836fe(0x125)] =
    exports['getContactVcard'] =
    exports[a15_0x2836fe(0xdd)] =
    exports[a15_0x2836fe(0x127)] =
    exports[a15_0x2836fe(0x109)] =
    exports[a15_0x2836fe(0xcf)] =
    exports[a15_0x2836fe(0xcd)] =
    exports[a15_0x2836fe(0xed)] =
    exports[a15_0x2836fe(0x110)] =
    exports[a15_0x2836fe(0xf2)] =
    exports[a15_0x2836fe(0xe9)] =
    exports[a15_0x2836fe(0xdb)] =
    exports[a15_0x2836fe(0x129)] =
    exports[a15_0x2836fe(0x124)] =
      void 0x0);
const Yup = __importStar(require(a15_0x2836fe(0xfa))),
  socket_1 = require(a15_0x2836fe(0xff)),
  lodash_1 = require(a15_0x2836fe(0xde)),
  ListContactsService_1 = __importDefault(require(a15_0x2836fe(0x122))),
  CreateContactService_1 = __importDefault(require(a15_0x2836fe(0xe3))),
  ShowContactService_1 = __importDefault(require(a15_0x2836fe(0x115))),
  UpdateContactService_1 = __importDefault(require(a15_0x2836fe(0xf9))),
  DeleteContactService_1 = __importDefault(require(a15_0x2836fe(0x128))),
  GetContactService_1 = __importDefault(require(a15_0x2836fe(0x10c))),
  CheckNumber_1 = __importDefault(require(a15_0x2836fe(0x100))),
  CheckIsValidContact_1 = __importDefault(require(a15_0x2836fe(0xc7))),
  GetProfilePicUrl_1 = __importDefault(
    require('../services/WbotServices/GetProfilePicUrl')
  ),
  AppError_1 = __importDefault(require(a15_0x2836fe(0xe8))),
  SimpleListService_1 = __importDefault(require(a15_0x2836fe(0xf4))),
  ToggleAcceptAudioContactService_1 = __importDefault(
    require(a15_0x2836fe(0x121))
  ),
  BlockUnblockContactService_1 = __importDefault(
    require('../services/ContactServices/BlockUnblockContactService')
  ),
  ImportContactsService_1 = require('../services/ContactServices/ImportContactsService'),
  NumberSimpleListService_1 = __importDefault(require(a15_0x2836fe(0xf1))),
  CreateOrUpdateContactServiceForImport_1 = __importDefault(
    require('../services/ContactServices/CreateOrUpdateContactServiceForImport')
  ),
  UpdateContactWalletsService_1 = __importDefault(require(a15_0x2836fe(0xf0))),
  FindContactTags_1 = __importDefault(require(a15_0x2836fe(0x105))),
  ToggleDisableBotContactService_1 = __importDefault(
    require(a15_0x2836fe(0x11b))
  ),
  importXls = async (_0x1dadca, _0x163047) => {
    const _0x3b7fd0 = a15_0x2836fe,
      { companyId: _0x202f1d } = _0x1dadca[_0x3b7fd0(0x10a)],
      {
        number: _0x419d9e,
        name: _0x55d528,
        email: _0x2a1bba
      } = _0x1dadca['body'],
      _0x218ea3 = _0x419d9e['replace'](/[^\d.-]+/g, '');
    console[_0x3b7fd0(0xc8)](_0x3b7fd0(0xef), _0x218ea3),
      console[_0x3b7fd0(0xc8)](_0x3b7fd0(0x119), _0x55d528);
    const _0x5f0825 = await (0x0, CheckNumber_1[_0x3b7fd0(0xda)])(
      _0x218ea3,
      _0x202f1d
    );
    console[_0x3b7fd0(0xc8)]('60', _0x5f0825);
    const _0x3e4315 = await (0x0, GetProfilePicUrl_1[_0x3b7fd0(0xda)])(
        _0x5f0825,
        _0x202f1d
      ),
      _0x45e166 = {
        name: '' + _0x55d528,
        number: _0x5f0825,
        profilePicUrl: _0x3e4315,
        isGroup: ![],
        email: _0x2a1bba,
        companyId: _0x202f1d
      },
      _0x5412ae = await (0x0,
      CreateOrUpdateContactServiceForImport_1['default'])(_0x45e166),
      _0x56915c = (0x0, socket_1['getIO'])();
    return (
      _0x56915c[_0x3b7fd0(0x111)](
        _0x3b7fd0(0xf8) + _0x202f1d + _0x3b7fd0(0xe2),
        { action: _0x3b7fd0(0xca), contact: _0x5412ae }
      ),
      _0x163047['status'](0xc8)[_0x3b7fd0(0x11d)](_0x5412ae)
    );
  };
exports[a15_0x2836fe(0x124)] = importXls;
const index = async (_0x59ef88, _0x3ac642) => {
  const _0x40ca5e = a15_0x2836fe,
    {
      searchParam: _0x453a12,
      pageNumber: _0x3fb598,
      contactTag: _0x15ce86,
      isGroup: _0x4d7f52
    } = _0x59ef88[_0x40ca5e(0xee)],
    { id: _0x117358, companyId: _0x4e2288 } = _0x59ef88[_0x40ca5e(0x10a)];
  let _0x17735b = [];
  _0x15ce86 && (_0x17735b = JSON['parse'](_0x15ce86));
  const {
    contacts: _0x264267,
    count: _0x4079e6,
    hasMore: _0x48874a
  } = await (0x0, ListContactsService_1[_0x40ca5e(0xda)])({
    searchParam: _0x453a12,
    pageNumber: _0x3fb598,
    companyId: _0x4e2288,
    tagsIds: _0x17735b,
    isGroup: _0x4d7f52,
    userId: Number(_0x117358)
  });
  return _0x3ac642['json']({
    contacts: _0x264267,
    count: _0x4079e6,
    hasMore: _0x48874a
  });
};
exports['index'] = index;
const getContact = async (_0x6ee67f, _0x109ef2) => {
  const _0x5a88ce = a15_0x2836fe,
    { name: _0x387ba9, number: _0x2ed08c } = _0x6ee67f[_0x5a88ce(0xe0)],
    { companyId: _0x4c7c53 } = _0x6ee67f[_0x5a88ce(0x10a)],
    _0x26f059 = await (0x0, GetContactService_1[_0x5a88ce(0xda)])({
      name: _0x387ba9,
      number: _0x2ed08c,
      companyId: _0x4c7c53
    });
  return _0x109ef2[_0x5a88ce(0x107)](0xc8)[_0x5a88ce(0x11d)](_0x26f059);
};
exports[a15_0x2836fe(0xdb)] = getContact;
const store = async (_0x4e435f, _0xad6cf0) => {
  const _0x4a18f9 = a15_0x2836fe,
    { companyId: _0x5d3fa2 } = _0x4e435f[_0x4a18f9(0x10a)],
    _0x4390b9 = _0x4e435f['body'],
    _0x583254 = _0x4390b9[_0x4a18f9(0xfe)];
  _0x4390b9[_0x4a18f9(0xfe)] = _0x4390b9[_0x4a18f9(0xfe)]
    [_0x4a18f9(0x120)]('-', '')
    [_0x4a18f9(0x120)]('\x20', '');
  const _0x470c62 = Yup[_0x4a18f9(0x116)]()[_0x4a18f9(0xfd)]({
    name: Yup['string']()[_0x4a18f9(0x113)](),
    number: Yup[_0x4a18f9(0xdf)]()
      [_0x4a18f9(0x113)]()
      [_0x4a18f9(0xea)](/^\d+$/, _0x4a18f9(0xf6))
  });
  try {
    await _0x470c62['validate'](_0x4390b9);
  } catch (_0x2b22d2) {
    throw new AppError_1[_0x4a18f9(0xda)](_0x2b22d2[_0x4a18f9(0xd2)]);
  }
  const _0x4c8531 = await (0x0, CheckNumber_1['default'])(
      _0x4390b9[_0x4a18f9(0xfe)],
      _0x5d3fa2
    ),
    _0x1e2b13 = await (0x0, CreateContactService_1[_0x4a18f9(0xda)])({
      ..._0x4390b9,
      number: _0x4c8531,
      companyId: _0x5d3fa2
    }),
    _0x548c71 = (0x0, socket_1[_0x4a18f9(0xd3)])();
  return (
    _0x548c71[_0x4a18f9(0x111)](_0x4a18f9(0xf8) + _0x5d3fa2 + _0x4a18f9(0xe2), {
      action: _0x4a18f9(0xca),
      contact: _0x1e2b13
    }),
    _0xad6cf0[_0x4a18f9(0x107)](0xc8)[_0x4a18f9(0x11d)](_0x1e2b13)
  );
};
exports[a15_0x2836fe(0xe9)] = store;
const show = async (_0x1c4d88, _0x3d1836) => {
  const _0x31f31b = a15_0x2836fe,
    { contactId: _0x1644a4 } = _0x1c4d88['params'],
    { companyId: _0x5a94ed } = _0x1c4d88[_0x31f31b(0x10a)],
    _0x290c03 = await (0x0, ShowContactService_1[_0x31f31b(0xda)])(
      _0x1644a4,
      _0x5a94ed
    );
  return _0x3d1836['status'](0xc8)[_0x31f31b(0x11d)](_0x290c03);
};
exports[a15_0x2836fe(0xf2)] = show;
const update = async (_0x1fb0c1, _0x15d988) => {
  const _0x50a0d9 = a15_0x2836fe,
    _0x519f02 = _0x1fb0c1[_0x50a0d9(0xe0)],
    { companyId: _0x1bebdb } = _0x1fb0c1[_0x50a0d9(0x10a)],
    _0x4e9b84 = Yup[_0x50a0d9(0x116)]()[_0x50a0d9(0xfd)]({
      name: Yup['string'](),
      number: Yup[_0x50a0d9(0xdf)]()[_0x50a0d9(0xea)](/^\d+$/, _0x50a0d9(0xf6))
    });
  try {
    await _0x4e9b84[_0x50a0d9(0xec)](_0x519f02);
  } catch (_0x24e4ba) {
    throw new AppError_1[_0x50a0d9(0xda)](_0x24e4ba['message']);
  }
  await (0x0, CheckIsValidContact_1[_0x50a0d9(0xda)])(
    _0x519f02['number'],
    _0x1bebdb
  );
  const _0x34573b = await (0x0, CheckNumber_1[_0x50a0d9(0xda)])(
      _0x519f02[_0x50a0d9(0xfe)],
      _0x1bebdb
    ),
    _0x34d8de = _0x34573b;
  _0x519f02[_0x50a0d9(0xfe)] = _0x34d8de;
  const { contactId: _0x34cefd } = _0x1fb0c1[_0x50a0d9(0xe7)],
    _0x58e3d4 = await (0x0, UpdateContactService_1['default'])({
      contactData: _0x519f02,
      contactId: _0x34cefd,
      companyId: _0x1bebdb
    }),
    _0x5d648d = (0x0, socket_1[_0x50a0d9(0xd3)])();
  return (
    _0x5d648d[_0x50a0d9(0x111)]('company-' + _0x1bebdb + _0x50a0d9(0xe2), {
      action: _0x50a0d9(0x110),
      contact: _0x58e3d4
    }),
    _0x15d988['status'](0xc8)['json'](_0x58e3d4)
  );
};
exports['update'] = update;
const remove = async (_0x107c76, _0xf2342a) => {
  const _0x5243e5 = a15_0x2836fe,
    { contactId: _0x43f6d5 } = _0x107c76['params'],
    { companyId: _0x34cace } = _0x107c76['user'];
  await (0x0, ShowContactService_1[_0x5243e5(0xda)])(_0x43f6d5, _0x34cace),
    await (0x0, DeleteContactService_1[_0x5243e5(0xda)])(_0x43f6d5);
  const _0x1da0bd = (0x0, socket_1[_0x5243e5(0xd3)])();
  return (
    _0x1da0bd['emit'](_0x5243e5(0xf8) + _0x34cace + _0x5243e5(0xe2), {
      action: 'delete',
      contactId: _0x43f6d5
    }),
    _0xf2342a[_0x5243e5(0x107)](0xc8)['json']({ message: _0x5243e5(0xce) })
  );
};
exports[a15_0x2836fe(0xed)] = remove;
const list = async (_0x256c48, _0x31ebd9) => {
  const _0x4672bb = a15_0x2836fe,
    { name: _0x23609f } = _0x256c48[_0x4672bb(0xee)],
    { companyId: _0x29970d } = _0x256c48['user'],
    _0x308ebf = await (0x0, SimpleListService_1[_0x4672bb(0xda)])({
      name: _0x23609f,
      companyId: _0x29970d
    });
  return _0x31ebd9[_0x4672bb(0x11d)](_0x308ebf);
};
exports[a15_0x2836fe(0xcd)] = list;
const toggleAcceptAudio = async (_0x160570, _0x5d7aa7) => {
  const _0x3fa4bc = a15_0x2836fe;
  var { contactId: _0x115a37 } = _0x160570[_0x3fa4bc(0xe7)];
  const { companyId: _0x4941a8 } = _0x160570[_0x3fa4bc(0x10a)],
    _0x52fe77 = await (0x0, ToggleAcceptAudioContactService_1[_0x3fa4bc(0xda)])(
      { contactId: _0x115a37 }
    ),
    _0x5a9949 = (0x0, socket_1[_0x3fa4bc(0xd3)])();
  return (
    _0x5a9949[_0x3fa4bc(0x111)](_0x3fa4bc(0xf8) + _0x4941a8 + _0x3fa4bc(0xe2), {
      action: _0x3fa4bc(0x110),
      contact: _0x52fe77
    }),
    _0x5d7aa7[_0x3fa4bc(0x107)](0xc8)[_0x3fa4bc(0x11d)](_0x52fe77)
  );
};
exports['toggleAcceptAudio'] = toggleAcceptAudio;
const blockUnblock = async (_0x1e2a63, _0x83d961) => {
  const _0x539db0 = a15_0x2836fe;
  var { contactId: _0x4d30be } = _0x1e2a63[_0x539db0(0xe7)];
  const { companyId: _0x43ee8b } = _0x1e2a63[_0x539db0(0x10a)],
    { active: _0x1a4b48 } = _0x1e2a63[_0x539db0(0xe0)],
    _0x258cb6 = await (0x0, BlockUnblockContactService_1[_0x539db0(0xda)])({
      contactId: _0x4d30be,
      companyId: _0x43ee8b,
      active: _0x1a4b48
    }),
    _0x19f33f = (0x0, socket_1[_0x539db0(0xd3)])();
  return (
    _0x19f33f['emit'](_0x539db0(0xf8) + _0x43ee8b + _0x539db0(0xe2), {
      action: _0x539db0(0x110),
      contact: _0x258cb6
    }),
    _0x83d961[_0x539db0(0x107)](0xc8)['json'](_0x258cb6)
  );
};
exports[a15_0x2836fe(0x109)] = blockUnblock;
const upload = async (_0x50b4ff, _0x53e17d) => {
  const _0x5464da = a15_0x2836fe,
    _0x3a76c2 = _0x50b4ff[_0x5464da(0x103)],
    _0x403cc0 = (0x0, lodash_1[_0x5464da(0xc9)])(_0x3a76c2),
    { companyId: _0x1033c6 } = _0x50b4ff['user'],
    _0x19a438 = await (0x0, ImportContactsService_1[_0x5464da(0x104)])(
      _0x1033c6,
      _0x403cc0
    ),
    _0x905684 = (0x0, socket_1[_0x5464da(0xd3)])();
  return (
    _0x905684['emit'](_0x5464da(0xf8) + _0x1033c6 + _0x5464da(0xe2), {
      action: _0x5464da(0x108),
      records: _0x19a438
    }),
    _0x53e17d[_0x5464da(0x107)](0xc8)[_0x5464da(0x11d)](_0x19a438)
  );
};
exports[a15_0x2836fe(0x127)] = upload;
const getContactProfileURL = async (_0x16bc82, _0x5b332b) => {
  const _0x2c1206 = a15_0x2836fe,
    { number: _0xd5fb99 } = _0x16bc82[_0x2c1206(0xe7)],
    { companyId: _0x5c27ad } = _0x16bc82[_0x2c1206(0x10a)];
  if (_0xd5fb99) {
    const _0x342796 = await (0x0, CheckNumber_1['default'])(
        _0xd5fb99,
        _0x5c27ad
      ),
      _0x6d246b = await (0x0, GetProfilePicUrl_1['default'])(
        _0x342796,
        _0x5c27ad
      ),
      _0x1dfacc = await (0x0, NumberSimpleListService_1[_0x2c1206(0xda)])({
        number: _0x342796,
        companyId: _0x5c27ad
      });
    let _0x82da53;
    return (
      _0x1dfacc[_0x2c1206(0x126)] > 0x0
        ? (_0x82da53 = {
            contactId: _0x1dfacc[0x0]['id'],
            profilePicUrl: _0x6d246b
          })
        : (_0x82da53 = { contactId: 0x0, profilePicUrl: _0x6d246b }),
      _0x5b332b[_0x2c1206(0x107)](0xc8)[_0x2c1206(0x11d)](_0x82da53)
    );
  }
};
exports[a15_0x2836fe(0xdd)] = getContactProfileURL;
const getContactVcard = async (_0x559705, _0x56e910) => {
  const _0x127537 = a15_0x2836fe,
    { name: _0xfac68f, number: _0x1c58ba } = _0x559705[_0x127537(0xee)],
    { companyId: _0x17fd47 } = _0x559705[_0x127537(0x10a)];
  let _0x5ad12a = _0x1c58ba;
  const _0x70e7ba = _0x5ad12a[_0x127537(0xcb)]()['substr'](0x0, 0x2),
    _0x517796 = _0x5ad12a['toString']()[_0x127537(0xd8)](0x2, 0x2),
    _0x666046 = _0x5ad12a[_0x127537(0xcb)]()[_0x127537(0xd8)](-0x8, 0x8);
  if (_0x517796 <= '30' && _0x70e7ba === '55')
    console[_0x127537(0xc8)](_0x127537(0x123)),
      (_0x5ad12a = _0x70e7ba + _0x517796 + 0x9 + _0x666046 + _0x127537(0xf3));
  else
    _0x517796 > '30' && _0x70e7ba === '55'
      ? (console[_0x127537(0xc8)]('maior\x2030'),
        (_0x5ad12a = _0x70e7ba + _0x517796 + _0x666046 + _0x127537(0xf3)))
      : (_0x5ad12a = _0x1c58ba + '@s.whatsapp.net');
  const _0x3642a2 = await (0x0, GetContactService_1[_0x127537(0xda)])({
    name: _0xfac68f,
    number: _0x1c58ba,
    companyId: _0x17fd47
  });
  return _0x56e910[_0x127537(0x107)](0xc8)[_0x127537(0x11d)](_0x3642a2);
};
exports[a15_0x2836fe(0xe1)] = getContactVcard;
const getContactTags = async (_0xb594e5, _0x2c175b) => {
  const _0x10b6ec = a15_0x2836fe,
    { contactId: _0x3a3e46 } = _0xb594e5[_0x10b6ec(0xe7)],
    _0x18e729 = await (0x0, FindContactTags_1[_0x10b6ec(0xda)])({
      contactId: _0x3a3e46
    });
  let _0x60dc74 = ![];
  return (
    _0x18e729[_0x10b6ec(0x126)] > 0x0 && (_0x60dc74 = !![]),
    _0x2c175b[_0x10b6ec(0x107)](0xc8)[_0x10b6ec(0x11d)]({ tags: _0x60dc74 })
  );
};
function a15_0x449e() {
  const _0x13fdd9 = [
    '__importStar',
    '9184878PBGqEz',
    'params',
    '../errors/AppError',
    'store',
    'matches',
    '__createBinding',
    'validate',
    'remove',
    'query',
    'simpleNumber>\x20',
    '../services/ContactServices/UpdateContactWalletsService',
    '../services/ContactServices/NumberSimpleListService',
    'show',
    '@s.whatsapp.net',
    '../services/ContactServices/SimpleListService',
    '678126JSYWCa',
    'Invalid\x20number\x20format.\x20Only\x20numbers\x20is\x20allowed.',
    'get',
    'company-',
    '../services/ContactServices/UpdateContactService',
    'yup',
    '5625037foqaDk',
    'configurable',
    'shape',
    'number',
    '../libs/socket',
    '../services/WbotServices/CheckNumber',
    'defineProperty',
    'getOwnPropertyDescriptor',
    'files',
    'ImportContactsService',
    '../services/ContactServices/FindContactTags',
    '8McyRGB',
    'status',
    'reload',
    'blockUnblock',
    'user',
    '40017oSiUtq',
    '../services/ContactServices/GetContactService',
    'hasOwnProperty',
    'updateContactWallet',
    '38mnzkWM',
    'update',
    'emit',
    '1749680NAzjWM',
    'required',
    'prototype',
    '../services/ContactServices/ShowContactService',
    'object',
    '2509yYKkCP',
    'listWhatsapp',
    'name>\x20',
    'toggleDisableBot',
    '../services/ContactServices/ToggleDisableBotContactService',
    'whatsapp',
    'json',
    'call',
    'writable',
    'replace',
    '../services/ContactServices/ToggleAcceptAudioContactService',
    '../services/ContactServices/ListContactsService',
    'menor\x2030',
    'importXls',
    'getContactTags',
    'length',
    'upload',
    '../services/ContactServices/DeleteContactService',
    'index',
    '../services/WbotServices/CheckIsValidContact',
    'log',
    'head',
    'create',
    'toString',
    'filter',
    'list',
    'Contact\x20deleted',
    'toggleAcceptAudio',
    '10keNzCa',
    '__setModuleDefault',
    'message',
    'getIO',
    '10884UdFSid',
    '49JQzERA',
    'CHEGOUAQUI',
    'channel',
    'substr',
    '__esModule',
    'default',
    'getContact',
    '238683EMvFhK',
    'getContactProfileURL',
    'lodash',
    'string',
    'body',
    'getContactVcard',
    '-contact',
    '../services/ContactServices/CreateContactService',
    '8YzCajm'
  ];
  a15_0x449e = function () {
    return _0x13fdd9;
  };
  return a15_0x449e();
}
exports[a15_0x2836fe(0x125)] = getContactTags;
const toggleDisableBot = async (_0x431c0f, _0x20dd69) => {
  const _0x3e7111 = a15_0x2836fe;
  var { contactId: _0x3a9fc9 } = _0x431c0f[_0x3e7111(0xe7)];
  const { companyId: _0x53a393 } = _0x431c0f[_0x3e7111(0x10a)],
    _0x16db68 = await (0x0, ToggleDisableBotContactService_1[_0x3e7111(0xda)])({
      contactId: _0x3a9fc9
    }),
    _0x508424 = (0x0, socket_1[_0x3e7111(0xd3)])();
  return (
    _0x508424[_0x3e7111(0x111)](_0x3e7111(0xf8) + _0x53a393 + _0x3e7111(0xe2), {
      action: _0x3e7111(0x110),
      contact: _0x16db68
    }),
    _0x20dd69[_0x3e7111(0x107)](0xc8)[_0x3e7111(0x11d)](_0x16db68)
  );
};
function a15_0x392f(_0x1971f7, _0x34bdc9) {
  const _0x449e75 = a15_0x449e();
  return (
    (a15_0x392f = function (_0x392f57, _0x113c8c) {
      _0x392f57 = _0x392f57 - 0xc7;
      let _0x5e69e7 = _0x449e75[_0x392f57];
      return _0x5e69e7;
    }),
    a15_0x392f(_0x1971f7, _0x34bdc9)
  );
}
exports[a15_0x2836fe(0x11a)] = toggleDisableBot;
const updateContactWallet = async (_0x11e88f, _0x1f5976) => {
  const _0x38a5e7 = a15_0x2836fe,
    { wallets: _0x560386 } = _0x11e88f[_0x38a5e7(0xe0)],
    { contactId: _0x7f8460 } = _0x11e88f[_0x38a5e7(0xe7)],
    { companyId: _0x3b1612 } = _0x11e88f[_0x38a5e7(0x10a)],
    _0x4685ee = await (0x0, UpdateContactWalletsService_1[_0x38a5e7(0xda)])({
      wallets: _0x560386,
      contactId: _0x7f8460,
      companyId: _0x3b1612
    });
  return _0x1f5976[_0x38a5e7(0x107)](0xc8)[_0x38a5e7(0x11d)](_0x4685ee);
};
exports[a15_0x2836fe(0x10e)] = updateContactWallet;
const listWhatsapp = async (_0x381dc2, _0x16d92e) => {
  const _0xafc528 = a15_0x2836fe;
  console['log'](_0xafc528(0xd6));
  const { name: _0x65c723 } = _0x381dc2[_0xafc528(0xee)],
    { companyId: _0x678b96 } = _0x381dc2[_0xafc528(0x10a)],
    _0x2a145a = await (0x0, SimpleListService_1[_0xafc528(0xda)])({
      name: _0x65c723,
      companyId: _0x678b96
    }),
    _0x597161 = _0x2a145a[_0xafc528(0xcc)](
      _0x3a559e => _0x3a559e[_0xafc528(0xd7)] == _0xafc528(0x11c)
    );
  return _0x16d92e[_0xafc528(0x11d)](_0x597161);
};
exports[a15_0x2836fe(0x118)] = listWhatsapp;
