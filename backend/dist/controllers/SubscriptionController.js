'use strict';
const a35_0x261661 = a35_0x186b;
(function (_0x4e27c7, _0x378d5a) {
  const _0x304036 = a35_0x186b,
    _0x4600dc = _0x4e27c7();
  while (!![]) {
    try {
      const _0x32da25 =
        parseInt(_0x304036(0x15d)) / 0x1 +
        (-parseInt(_0x304036(0x178)) / 0x2) *
          (-parseInt(_0x304036(0x148)) / 0x3) +
        (parseInt(_0x304036(0x169)) / 0x4) *
          (parseInt(_0x304036(0x16d)) / 0x5) +
        (parseInt(_0x304036(0x12e)) / 0x6) *
          (-parseInt(_0x304036(0x130)) / 0x7) +
        (-parseInt(_0x304036(0x16f)) / 0x8) *
          (-parseInt(_0x304036(0x17d)) / 0x9) +
        (parseInt(_0x304036(0x167)) / 0xa) *
          (-parseInt(_0x304036(0x151)) / 0xb) +
        -parseInt(_0x304036(0x145)) / 0xc;
      if (_0x32da25 === _0x378d5a) break;
      else _0x4600dc['push'](_0x4600dc['shift']());
    } catch (_0xfa8d63) {
      _0x4600dc['push'](_0x4600dc['shift']());
    }
  }
})(a35_0x15a6, 0x926c3);
var __createBinding =
    (this && this[a35_0x261661(0x17c)]) ||
    (Object[a35_0x261661(0x12c)]
      ? function (_0x4ce81b, _0x4bdb5b, _0x483604, _0x41b11f) {
          const _0x5790aa = a35_0x261661;
          if (_0x41b11f === undefined) _0x41b11f = _0x483604;
          var _0xad7abc = Object[_0x5790aa(0x135)](_0x4bdb5b, _0x483604);
          (!_0xad7abc ||
            (_0x5790aa(0x14e) in _0xad7abc
              ? !_0x4bdb5b[_0x5790aa(0x136)]
              : _0xad7abc['writable'] || _0xad7abc[_0x5790aa(0x181)])) &&
            (_0xad7abc = {
              enumerable: !![],
              get: function () {
                return _0x4bdb5b[_0x483604];
              }
            }),
            Object[_0x5790aa(0x157)](_0x4ce81b, _0x41b11f, _0xad7abc);
        }
      : function (_0x5870bd, _0x4c6bb9, _0x529243, _0x493631) {
          if (_0x493631 === undefined) _0x493631 = _0x529243;
          _0x5870bd[_0x493631] = _0x4c6bb9[_0x529243];
        }),
  __setModuleDefault =
    (this && this[a35_0x261661(0x162)]) ||
    (Object[a35_0x261661(0x12c)]
      ? function (_0x4d517b, _0xbefd2a) {
          Object['defineProperty'](_0x4d517b, 'default', {
            enumerable: !![],
            value: _0xbefd2a
          });
        }
      : function (_0x1dfd68, _0x2337c0) {
          const _0x539f86 = a35_0x261661;
          _0x1dfd68[_0x539f86(0x164)] = _0x2337c0;
        }),
  __importStar =
    (this && this[a35_0x261661(0x176)]) ||
    function (_0x37fb6b) {
      const _0x4c4f5c = a35_0x261661;
      if (_0x37fb6b && _0x37fb6b['__esModule']) return _0x37fb6b;
      var _0x3149ea = {};
      if (_0x37fb6b != null) {
        for (var _0x4c24ae in _0x37fb6b)
          if (
            _0x4c24ae !== _0x4c4f5c(0x164) &&
            Object[_0x4c4f5c(0x138)][_0x4c4f5c(0x15e)]['call'](
              _0x37fb6b,
              _0x4c24ae
            )
          )
            __createBinding(_0x3149ea, _0x37fb6b, _0x4c24ae);
      }
      return __setModuleDefault(_0x3149ea, _0x37fb6b), _0x3149ea;
    },
  __importDefault =
    (this && this[a35_0x261661(0x183)]) ||
    function (_0x26cbb9) {
      const _0x2c6170 = a35_0x261661;
      return _0x26cbb9 && _0x26cbb9[_0x2c6170(0x136)]
        ? _0x26cbb9
        : { default: _0x26cbb9 };
    };
Object[a35_0x261661(0x157)](exports, '__esModule', { value: !![] }),
  (exports['webhook'] =
    exports[a35_0x261661(0x15a)] =
    exports[a35_0x261661(0x141)] =
    exports[a35_0x261661(0x153)] =
    exports['index'] =
      void 0x0);
const Yup = __importStar(require(a35_0x261661(0x14d))),
  gn_api_sdk_typescript_1 = __importDefault(require(a35_0x261661(0x16c))),
  AppError_1 = __importDefault(require(a35_0x261661(0x16b))),
  Gn_1 = __importDefault(require(a35_0x261661(0x154))),
  Company_1 = __importDefault(require(a35_0x261661(0x173))),
  Invoices_1 = __importDefault(require(a35_0x261661(0x146))),
  socket_1 = require(a35_0x261661(0x17e)),
  Plan_1 = __importDefault(require(a35_0x261661(0x161))),
  index = async (_0x2084f9, _0x5add59) => {
    const _0x545464 = a35_0x261661,
      _0x50981d = new gn_api_sdk_typescript_1['default'](
        Gn_1[_0x545464(0x164)]
      );
    return _0x5add59['json'](_0x50981d[_0x545464(0x149)]());
  };
function a35_0x186b(_0x26d410, _0x92f112) {
  const _0x15a600 = a35_0x15a6();
  return (
    (a35_0x186b = function (_0x186b8c, _0x4ec472) {
      _0x186b8c = _0x186b8c - 0x12c;
      let _0x44ab61 = _0x15a600[_0x186b8c];
      return _0x44ab61;
    }),
    a35_0x186b(_0x26d410, _0x92f112)
  );
}
exports[a35_0x261661(0x159)] = index;
const createSubscription = async (_0x31d08a, _0x1d04a8) => {
  const _0x5823c2 = a35_0x261661,
    _0x2c6291 = new gn_api_sdk_typescript_1[_0x5823c2(0x164)](
      Gn_1[_0x5823c2(0x164)]
    ),
    { companyId: _0x43442d } = _0x31d08a[_0x5823c2(0x13c)],
    _0xcb15e9 = Yup[_0x5823c2(0x13d)]()[_0x5823c2(0x171)]({
      price: Yup[_0x5823c2(0x140)]()['required'](),
      users: Yup['string']()[_0x5823c2(0x139)](),
      plan: Yup[_0x5823c2(0x140)]()['required']()
    });
  if (!(await _0xcb15e9[_0x5823c2(0x16e)](_0x31d08a[_0x5823c2(0x133)])))
    throw new AppError_1['default'](_0x5823c2(0x186), 0x190);
  const _0x2104c1 = new Intl[_0x5823c2(0x12d)]('en-US', {
      style: _0x5823c2(0x144),
      currency: _0x5823c2(0x131)
    }),
    _0x24ebdd = await Company_1[_0x5823c2(0x164)]['findOne']({
      where: { id: _0x43442d }
    }),
    _0x5644ff = await Plan_1[_0x5823c2(0x164)][_0x5823c2(0x168)]({
      where: { id: _0x24ebdd[_0x5823c2(0x175)] }
    }),
    { invoiceId: _0x3b8727 } = _0x31d08a[_0x5823c2(0x133)],
    _0x581868 = _0x5644ff[_0x5823c2(0x17b)],
    _0x322b92 = _0x2104c1[_0x5823c2(0x180)](_0x581868)[_0x5823c2(0x14c)](
      '$',
      ''
    ),
    _0x582994 = { nome: _0x24ebdd[_0x5823c2(0x12f)] },
    _0x5cdd51 = _0x24ebdd[_0x5823c2(0x158)][_0x5823c2(0x14c)](/\D/g, '');
  _0x5cdd51[_0x5823c2(0x15f)] === 0xb
    ? (_0x582994[_0x5823c2(0x13f)] = _0x5cdd51)
    : (_0x582994[_0x5823c2(0x147)] = _0x5cdd51);
  const _0x3d5792 = {
    calendario: { expiracao: 0xe10 },
    devedor: { ..._0x582994 },
    valor: { original: _0x322b92 },
    chave: process[_0x5823c2(0x172)][_0x5823c2(0x13b)],
    solicitacaoPagador: _0x5823c2(0x134) + _0x3b8727
  };
  try {
    const _0x51635b = await _0x2c6291[_0x5823c2(0x13a)](null, _0x3d5792),
      _0x1dc7ad = await _0x2c6291[_0x5823c2(0x184)]({
        id: _0x51635b[_0x5823c2(0x170)]['id']
      });
    if (!_0x24ebdd)
      throw new AppError_1[_0x5823c2(0x164)](_0x5823c2(0x143), 0x194);
    return _0x1d04a8[_0x5823c2(0x152)]({ ..._0x51635b, qrcode: _0x1dc7ad });
  } catch (_0x3bd836) {
    console[_0x5823c2(0x160)](_0x5823c2(0x182), _0x3bd836);
    throw new AppError_1[_0x5823c2(0x164)]('Validation\x20fails', 0x190);
  }
};
exports[a35_0x261661(0x153)] = createSubscription;
function a35_0x15a6() {
  const _0x2ab56c = [
    'error_subscription',
    '__importDefault',
    'pixGenerateQRCode',
    'txid',
    'Validation\x20fails',
    'create',
    'NumberFormat',
    '6bOBLLY',
    'name',
    '4250379VutDbv',
    'USD',
    'status',
    'body',
    '#Fatura:',
    'getOwnPropertyDescriptor',
    '__esModule',
    'update',
    'prototype',
    'required',
    'pixCreateImmediateCharge',
    'GERENCIANET_CHAVEPIX',
    'user',
    'object',
    '-payment',
    'cpf',
    'string',
    'createWebhook',
    'params',
    'Company\x20not\x20found',
    'currency',
    '3192180vKVJmX',
    '../models/Invoices',
    'cnpj',
    '7983ccwhaM',
    'getSubscriptions',
    'toISOString',
    'reload',
    'replace',
    'yup',
    'get',
    'webhook',
    'pix',
    '6265842zKvwnI',
    'json',
    'createSubscription',
    '../config/Gn',
    'pixDetailCharge',
    'paid',
    'defineProperty',
    'document',
    'index',
    'deleteWebhook',
    'dueDate',
    'companyId',
    '808286btGvPE',
    'hasOwnProperty',
    'length',
    'log',
    '../models/Plan',
    '__setModuleDefault',
    'company-',
    'default',
    'teste_webhook',
    'forEach',
    '10dtlVnZ',
    'findOne',
    '539632MTdzSt',
    'emit',
    '../errors/AppError',
    'gn-api-sdk-typescript',
    '10keRnaB',
    'isValid',
    '8TUDwvN',
    'loc',
    'shape',
    'env',
    '../models/Company',
    'getDate',
    'planId',
    '__importStar',
    'findByPk',
    '656kQINmb',
    'CONCLUIDA',
    'getIO',
    'amount',
    '__createBinding',
    '825039LHmDpM',
    '../libs/socket',
    'pixConfigWebhook',
    'format',
    'configurable'
  ];
  a35_0x15a6 = function () {
    return _0x2ab56c;
  };
  return a35_0x15a6();
}
const createWebhook = async (_0xfb5e52, _0x4536fc) => {
  const _0x51fa10 = a35_0x261661,
    _0x31e181 = Yup['object']()[_0x51fa10(0x171)]({
      chave: Yup[_0x51fa10(0x140)]()[_0x51fa10(0x139)](),
      url: Yup[_0x51fa10(0x140)]()[_0x51fa10(0x139)]()
    });
  if (!(await _0x31e181['isValid'](_0xfb5e52[_0x51fa10(0x133)])))
    throw new AppError_1[_0x51fa10(0x164)](_0x51fa10(0x186), 0x190);
  const { chave: _0x157774, url: _0x5d2251 } = _0xfb5e52['body'],
    _0x33c686 = { webhookUrl: _0x5d2251 },
    _0x3f17c5 = { chave: _0x157774 };
  try {
    const _0xe2fd24 = new gn_api_sdk_typescript_1['default'](
        Gn_1[_0x51fa10(0x164)]
      ),
      _0x415967 = await _0xe2fd24[_0x51fa10(0x17f)](_0x3f17c5, _0x33c686);
    return _0x4536fc[_0x51fa10(0x152)](_0x415967);
  } catch (_0x4dc929) {
    console[_0x51fa10(0x160)](_0x4dc929);
  }
};
exports[a35_0x261661(0x141)] = createWebhook;
const deleteWebhook = async (_0x1429bc, _0x389955) => {
  const _0x2c5b09 = a35_0x261661,
    _0x4a40bb = Yup[_0x2c5b09(0x13d)]()[_0x2c5b09(0x171)]({
      chave: Yup[_0x2c5b09(0x140)]()[_0x2c5b09(0x139)]()
    });
  if (!(await _0x4a40bb['isValid'](_0x1429bc[_0x2c5b09(0x133)])))
    throw new AppError_1[_0x2c5b09(0x164)](_0x2c5b09(0x186), 0x190);
  const { chave: _0x3327b5 } = _0x1429bc[_0x2c5b09(0x133)],
    _0x462e06 = { chave: _0x3327b5 },
    _0x41aac0 = new gn_api_sdk_typescript_1[_0x2c5b09(0x164)](
      Gn_1[_0x2c5b09(0x164)]
    ),
    _0x3ff13d = await _0x41aac0['pixDeleteWebhook'](_0x462e06);
  return _0x389955['json'](_0x3ff13d);
};
exports['deleteWebhook'] = deleteWebhook;
const webhook = async (_0x352639, _0x4a8a21) => {
  const _0x4f1fd2 = a35_0x261661,
    { type: _0x51f1cc } = _0x352639[_0x4f1fd2(0x142)],
    { evento: _0x200594 } = _0x352639[_0x4f1fd2(0x133)];
  if (_0x200594 === _0x4f1fd2(0x165)) return _0x4a8a21['json']({ ok: !![] });
  if (_0x352639[_0x4f1fd2(0x133)][_0x4f1fd2(0x150)]) {
    const _0x2d019e = new gn_api_sdk_typescript_1[_0x4f1fd2(0x164)](
      Gn_1[_0x4f1fd2(0x164)]
    );
    _0x352639['body'][_0x4f1fd2(0x150)][_0x4f1fd2(0x166)](async _0x458cf9 => {
      const _0x31129b = _0x4f1fd2,
        _0x5168b4 = await _0x2d019e[_0x31129b(0x155)]({
          txid: _0x458cf9[_0x31129b(0x185)]
        });
      if (_0x5168b4[_0x31129b(0x132)] === _0x31129b(0x179)) {
        const { solicitacaoPagador: _0x2690a2 } = _0x5168b4,
          _0x36d0ac = _0x2690a2[_0x31129b(0x14c)](_0x31129b(0x134), ''),
          _0x28d0c0 =
            await Invoices_1[_0x31129b(0x164)][_0x31129b(0x177)](_0x36d0ac),
          _0xec79f1 = _0x28d0c0[_0x31129b(0x15c)],
          _0x32edb8 = await Company_1[_0x31129b(0x164)]['findByPk'](_0xec79f1),
          _0x5b514c = new Date(_0x32edb8[_0x31129b(0x15b)]);
        _0x5b514c['setDate'](_0x5b514c[_0x31129b(0x174)]() + 0x1e);
        const _0x7118c7 = _0x5b514c[_0x31129b(0x14a)]()['split']('T')[0x0];
        if (_0x32edb8) {
          await _0x32edb8[_0x31129b(0x137)]({ dueDate: _0x7118c7 });
          const _0x22a72c = await _0x28d0c0[_0x31129b(0x137)]({
            id: _0x36d0ac,
            status: _0x31129b(0x156)
          });
          await _0x32edb8[_0x31129b(0x14b)]();
          const _0x80454 = (0x0, socket_1[_0x31129b(0x17a)])(),
            _0x3e8781 = await Company_1['default'][_0x31129b(0x168)]({
              where: { id: _0xec79f1 }
            });
          _0x80454[_0x31129b(0x16a)](
            _0x31129b(0x163) + _0xec79f1 + _0x31129b(0x13e),
            { action: _0x5168b4[_0x31129b(0x132)], company: _0x3e8781 }
          );
        }
      }
    });
  }
  return _0x4a8a21['json']({ ok: !![] });
};
exports[a35_0x261661(0x14f)] = webhook;
