'use strict';
const a492_0x22a793 = a492_0x5239;
(function (_0x23e086, _0x369782) {
  const _0x1e766a = a492_0x5239,
    _0x29ea4a = _0x23e086();
  while (!![]) {
    try {
      const _0x41da8a =
        parseInt(_0x1e766a(0xb6)) / 0x1 +
        -parseInt(_0x1e766a(0xa5)) / 0x2 +
        (parseInt(_0x1e766a(0x97)) / 0x3) * (-parseInt(_0x1e766a(0x99)) / 0x4) +
        (parseInt(_0x1e766a(0x9a)) / 0x5) * (parseInt(_0x1e766a(0xa8)) / 0x6) +
        parseInt(_0x1e766a(0x96)) / 0x7 +
        (-parseInt(_0x1e766a(0x9c)) / 0x8) *
          (-parseInt(_0x1e766a(0xb0)) / 0x9) +
        parseInt(_0x1e766a(0x9d)) / 0xa;
      if (_0x41da8a === _0x369782) break;
      else _0x29ea4a['push'](_0x29ea4a['shift']());
    } catch (_0xf6a6a8) {
      _0x29ea4a['push'](_0x29ea4a['shift']());
    }
  }
})(a492_0x3c22, 0x4d55d);
var __importDefault =
  (this && this[a492_0x22a793(0xaf)]) ||
  function (_0x4e1d27) {
    const _0x93c32c = a492_0x22a793;
    return _0x4e1d27 && _0x4e1d27[_0x93c32c(0x9e)]
      ? _0x4e1d27
      : { default: _0x4e1d27 };
  };
Object[a492_0x22a793(0x94)](exports, a492_0x22a793(0x9e), { value: !![] });
function a492_0x5239(_0x559257, _0x279411) {
  const _0x3c2286 = a492_0x3c22();
  return (
    (a492_0x5239 = function (_0x5239cc, _0x528308) {
      _0x5239cc = _0x5239cc - 0x91;
      let _0x47a1bf = _0x3c2286[_0x5239cc];
      return _0x47a1bf;
    }),
    a492_0x5239(_0x559257, _0x279411)
  );
}
const AppError_1 = __importDefault(require('../../errors/AppError')),
  Contact_1 = __importDefault(require(a492_0x22a793(0x92))),
  ContactCustomField_1 = __importDefault(
    require('../../models/ContactCustomField')
  ),
  ContactWallet_1 = __importDefault(require('../../models/ContactWallet')),
  UpdateContactService = async ({
    contactData: _0x2b1889,
    contactId: _0x1cd373,
    companyId: _0x47d3f9
  }) => {
    const _0x5572ae = a492_0x22a793,
      {
        email: _0x31fce8,
        name: _0x577c07,
        number: _0x50c2e6,
        extraInfo: _0x4834cd,
        acceptAudioMessage: _0x41850f,
        active: _0x4012bb,
        disableBot: _0xe6cac8,
        remoteJid: _0x2046b9,
        wallets: _0x23d167
      } = _0x2b1889,
      _0xd586a2 = await Contact_1[_0x5572ae(0xa3)][_0x5572ae(0x93)]({
        where: { id: _0x1cd373 },
        attributes: [
          'id',
          'name',
          _0x5572ae(0x98),
          _0x5572ae(0x9b),
          'email',
          _0x5572ae(0x95),
          'acceptAudioMessage',
          'active',
          _0x5572ae(0xab),
          'remoteJid',
          _0x5572ae(0xa4)
        ],
        include: [
          _0x5572ae(0xaa),
          'tags',
          { association: _0x5572ae(0xb1), attributes: ['id', 'name'] }
        ]
      });
    if (_0xd586a2?.[_0x5572ae(0x95)] !== _0x47d3f9)
      throw new AppError_1[_0x5572ae(0xa3)](_0x5572ae(0xac));
    if (!_0xd586a2) throw new AppError_1['default'](_0x5572ae(0xae), 0x194);
    _0x4834cd &&
      (await Promise[_0x5572ae(0xa0)](
        _0x4834cd['map'](async _0x2dca75 => {
          const _0x5ca407 = _0x5572ae;
          await ContactCustomField_1[_0x5ca407(0xa3)]['upsert']({
            ..._0x2dca75,
            contactId: _0xd586a2['id']
          });
        })
      ),
      await Promise[_0x5572ae(0xa0)](
        _0xd586a2[_0x5572ae(0xaa)][_0x5572ae(0xad)](async _0x158068 => {
          const _0x30b624 = _0x5572ae,
            _0x5170ba = _0x4834cd[_0x30b624(0xb5)](
              _0x4e8d59 => _0x4e8d59['id'] === _0x158068['id']
            );
          _0x5170ba === -0x1 &&
            (await ContactCustomField_1[_0x30b624(0xa3)]['destroy']({
              where: { id: _0x158068['id'] }
            }));
        })
      ));
    if (_0x23d167) {
      await ContactWallet_1[_0x5572ae(0xa3)][_0x5572ae(0x9f)]({
        where: { companyId: _0x47d3f9, contactId: _0x1cd373 }
      });
      const _0x2c9684 = [];
      _0x23d167[_0x5572ae(0xa2)](_0x4653cc => {
        const _0x253a63 = _0x5572ae;
        _0x2c9684[_0x253a63(0xa1)]({
          walletId: !_0x4653cc['id'] ? _0x4653cc : _0x4653cc['id'],
          contactId: _0x1cd373,
          companyId: _0x47d3f9
        });
      }),
        await ContactWallet_1[_0x5572ae(0xa3)]['bulkCreate'](_0x2c9684);
    }
    return (
      await _0xd586a2[_0x5572ae(0xb2)]({
        name: _0x577c07,
        number: _0x50c2e6,
        email: _0x31fce8,
        acceptAudioMessage: _0x41850f,
        active: _0x4012bb,
        disableBot: _0xe6cac8,
        remoteJid: _0x2046b9
      }),
      await _0xd586a2[_0x5572ae(0xa7)]({
        attributes: [
          'id',
          _0x5572ae(0xb4),
          _0x5572ae(0x9b),
          _0x5572ae(0x98),
          'email',
          _0x5572ae(0xa6),
          _0x5572ae(0xa9),
          _0x5572ae(0xab),
          _0x5572ae(0xb3)
        ],
        include: [
          _0x5572ae(0xaa),
          _0x5572ae(0x91),
          { association: _0x5572ae(0xb1), attributes: ['id', _0x5572ae(0xb4)] }
        ]
      }),
      _0xd586a2
    );
  };
function a492_0x3c22() {
  const _0x3fd093 = [
    '64850iUZgzU',
    'channel',
    '3628568PAXNDT',
    '799990pUQhJN',
    '__esModule',
    'destroy',
    'all',
    'push',
    'forEach',
    'default',
    'urlPicture',
    '374242AUqvat',
    'acceptAudioMessage',
    'reload',
    '78aWyGQS',
    'active',
    'extraInfo',
    'profilePicUrl',
    'Não\x20é\x20possível\x20alterar\x20registros\x20de\x20outra\x20empresa',
    'map',
    'ERR_NO_CONTACT_FOUND',
    '__importDefault',
    '9AxHMkS',
    'wallets',
    'update',
    'remoteJid',
    'name',
    'findIndex',
    '116401VWPRvB',
    'tags',
    '../../models/Contact',
    'findOne',
    'defineProperty',
    'companyId',
    '873824irMRJA',
    '6309CLtquR',
    'number',
    '836vLjRVX'
  ];
  a492_0x3c22 = function () {
    return _0x3fd093;
  };
  return a492_0x3c22();
}
exports[a492_0x22a793(0xa3)] = UpdateContactService;
