'use strict';
const a40_0x2d9e8c = a40_0x7cba;
(function (_0x4de8e4, _0x123a89) {
  const _0x52beb1 = a40_0x7cba,
    _0x5aa384 = _0x4de8e4();
  while (!![]) {
    try {
      const _0x47c9c7 =
        parseInt(_0x52beb1(0x1b7)) / 0x1 +
        (-parseInt(_0x52beb1(0x1cf)) / 0x2) *
          (parseInt(_0x52beb1(0x1c6)) / 0x3) +
        -parseInt(_0x52beb1(0x1ad)) / 0x4 +
        -parseInt(_0x52beb1(0x181)) / 0x5 +
        (parseInt(_0x52beb1(0x19f)) / 0x6) *
          (parseInt(_0x52beb1(0x1b4)) / 0x7) +
        parseInt(_0x52beb1(0x18a)) / 0x8 +
        (parseInt(_0x52beb1(0x17c)) / 0x9) *
          (-parseInt(_0x52beb1(0x1c3)) / 0xa);
      if (_0x47c9c7 === _0x123a89) break;
      else _0x5aa384['push'](_0x5aa384['shift']());
    } catch (_0x14ec19) {
      _0x5aa384['push'](_0x5aa384['shift']());
    }
  }
})(a40_0x348b, 0x6a30e);
var __importDefault =
  (this && this[a40_0x2d9e8c(0x189)]) ||
  function (_0x1289b6) {
    return _0x1289b6 && _0x1289b6['__esModule']
      ? _0x1289b6
      : { default: _0x1289b6 };
  };
Object[a40_0x2d9e8c(0x182)](exports, '__esModule', { value: !![] }),
  (exports[a40_0x2d9e8c(0x1aa)] =
    exports[a40_0x2d9e8c(0x17f)] =
    exports[a40_0x2d9e8c(0x194)] =
    exports[a40_0x2d9e8c(0x190)] =
    exports[a40_0x2d9e8c(0x197)] =
    exports[a40_0x2d9e8c(0x196)] =
    exports[a40_0x2d9e8c(0x1c1)] =
    exports[a40_0x2d9e8c(0x17d)] =
      void 0x0);
const socket_1 = require(a40_0x2d9e8c(0x1bd)),
  lodash_1 = require(a40_0x2d9e8c(0x1d1)),
  CheckSettings_1 = __importDefault(require(a40_0x2d9e8c(0x1a8))),
  AppError_1 = __importDefault(require('../errors/AppError')),
  CreateUserService_1 = __importDefault(require(a40_0x2d9e8c(0x1bc))),
  ListUsersService_1 = __importDefault(require(a40_0x2d9e8c(0x198))),
  UpdateUserService_1 = __importDefault(
    require('../services/UserServices/UpdateUserService')
  ),
  ShowUserService_1 = __importDefault(require(a40_0x2d9e8c(0x1d2))),
  DeleteUserService_1 = __importDefault(require(a40_0x2d9e8c(0x1b9))),
  SimpleListService_1 = __importDefault(require(a40_0x2d9e8c(0x18b))),
  CreateCompanyService_1 = __importDefault(require(a40_0x2d9e8c(0x1a5))),
  SendMail_1 = require(a40_0x2d9e8c(0x1c8)),
  useDate_1 = require(a40_0x2d9e8c(0x193)),
  ShowCompanyService_1 = __importDefault(require(a40_0x2d9e8c(0x1ce))),
  wbot_1 = require(a40_0x2d9e8c(0x1ab)),
  FindCompaniesWhatsappService_1 = __importDefault(
    require('../services/CompanyService/FindCompaniesWhatsappService')
  ),
  User_1 = __importDefault(require(a40_0x2d9e8c(0x183))),
  lodash_2 = require(a40_0x2d9e8c(0x1d1)),
  ToggleChangeWidthService_1 = __importDefault(require(a40_0x2d9e8c(0x1b2))),
  index = async (_0x4a5ac1, _0x3c4997) => {
    const _0x39ef2c = a40_0x2d9e8c,
      { searchParam: _0x3bc87f, pageNumber: _0x56e9ba } =
        _0x4a5ac1[_0x39ef2c(0x1a0)],
      { companyId: _0x53106d, profile: _0x43d80b } =
        _0x4a5ac1[_0x39ef2c(0x1be)],
      {
        users: _0x15509f,
        count: _0x2aab04,
        hasMore: _0x207dbe
      } = await (0x0, ListUsersService_1[_0x39ef2c(0x1a6)])({
        searchParam: _0x3bc87f,
        pageNumber: _0x56e9ba,
        companyId: _0x53106d,
        profile: _0x43d80b
      });
    return _0x3c4997[_0x39ef2c(0x187)]({
      users: _0x15509f,
      count: _0x2aab04,
      hasMore: _0x207dbe
    });
  };
function a40_0x7cba(_0x2b7e9c, _0x1efa21) {
  const _0x348b6c = a40_0x348b();
  return (
    (a40_0x7cba = function (_0x7cba91, _0x5a80b8) {
      _0x7cba91 = _0x7cba91 - 0x17b;
      let _0x557e28 = _0x348b6c[_0x7cba91];
      return _0x557e28;
    }),
    a40_0x7cba(_0x2b7e9c, _0x1efa21)
  );
}
exports[a40_0x2d9e8c(0x17d)] = index;
function a40_0x348b() {
  const _0x1e1de0 = [
    'replace',
    'CONNECTED',
    'remove',
    '\x0aSenha:\x20',
    'create',
    '../utils/useDate',
    'list',
    'admin',
    'show',
    'update',
    '../services/UserServices/ListUsersService',
    'ERR_USER_CREATION_DISABLED',
    'Login\x20e\x20senha\x20da\x20Empresa\x20',
    'params',
    'delete',
    'body',
    'profile',
    '174SSoOXv',
    'query',
    'light',
    'Olá\x20',
    'disabled',
    'findByPk',
    '../services/CompanyService/CreateCompanyService',
    'default',
    'ERR_NO_PERMISSION',
    '../helpers/CheckSettings',
    'closed',
    'toggleChangeWidht',
    '../libs/wbot',
    'message',
    '2386508FCFFCl',
    'getWbot',
    '-user',
    '<br>Email:\x20',
    'filename',
    '../services/UserServices/ToggleChangeWidthService',
    '<br>Senha:\x20',
    '153195KZKzzj',
    'company-',
    '!<br><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Segue\x20os\x20dados\x20da\x20sua\x20empresa:<br><br>Nome:\x20',
    '515013OVarVx',
    'profileImage',
    '../services/UserServices/DeleteUserService',
    'log',
    'isNil',
    '../services/UserServices/CreateUserService',
    '../libs/socket',
    'user',
    'emit',
    'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!',
    'store',
    '/signup',
    '10uQIoCp',
    '<br>Data\x20Vencimento\x20Trial:\x20',
    'sendMessage',
    '4854GEgLCB',
    '\x0aEmail:\x20',
    '../helpers/SendMail',
    'split',
    'userCreation',
    'getIO',
    'companyId',
    '\x0aData\x20Vencimento\x20Trial:\x20',
    '../services/CompanyService/ShowCompanyService',
    '256GwHtQG',
    '@s.whatsapp.net',
    'lodash',
    '../services/UserServices/ShowUserService',
    'files',
    '348183prxnaJ',
    'index',
    'setDate',
    'mediaUpload',
    'DEMO',
    '3004815IsCrKV',
    'defineProperty',
    '../models/User',
    'save',
    'findOne',
    '!\x0a\x0aSegue\x20os\x20dados\x20da\x20sua\x20empresa:\x0a\x0aNome:\x20',
    'json',
    'env',
    '__importDefault',
    '5829288fQfcTC',
    '../services/UserServices/SimpleListService',
    'status',
    'url'
  ];
  a40_0x348b = function () {
    return _0x1e1de0;
  };
  return a40_0x348b();
}
const store = async (_0x577953, _0x29c340) => {
  const _0x583ee9 = a40_0x2d9e8c,
    {
      email: _0x53a888,
      password: _0x1227ba,
      name: _0x23e094,
      phone: _0x3e1a1a,
      profile: _0x4c7796,
      companyId: _0x468d4c,
      queueIds: _0x5c8b5f,
      companyName: _0x99d25a,
      planId: _0xc244fc,
      startWork: _0x7c0509,
      endWork: _0x39c3f3,
      whatsappId: _0x27846c,
      allTicket: _0x4c1073,
      defaultTheme: _0x3de6d5,
      defaultMenu: _0xcb1cfb,
      allowGroup: _0x33b58b,
      allHistoric: _0x4fc947,
      allUserChat: _0x18caaa,
      userClosePendingTicket: _0x2d723b,
      showDashboard: _0x215ed8,
      defaultTicketsManagerWidth: defaultTicketsManagerWidth = 0x226
    } = _0x577953[_0x583ee9(0x19d)];
  let _0x36f6f9 = null;
  const { dateToClient: _0x317fe9 } = (0x0, useDate_1['useDate'])();
  if (_0x577953[_0x583ee9(0x1be)] !== undefined) {
    const { companyId: _0x59f634 } = _0x577953[_0x583ee9(0x1be)];
    _0x36f6f9 = _0x59f634;
  }
  if (
    _0x577953['url'] === _0x583ee9(0x1c2) &&
    (await (0x0, CheckSettings_1[_0x583ee9(0x1a6)])(_0x583ee9(0x1ca))) ===
      _0x583ee9(0x1a3)
  )
    throw new AppError_1['default'](_0x583ee9(0x199), 0x193);
  else {
    if (
      _0x577953[_0x583ee9(0x18d)] !== _0x583ee9(0x1c2) &&
      _0x577953[_0x583ee9(0x1be)][_0x583ee9(0x19e)] !== _0x583ee9(0x195)
    )
      throw new AppError_1['default'](_0x583ee9(0x1a7), 0x193);
  }
  if (process[_0x583ee9(0x188)][_0x583ee9(0x180)] === 'ON')
    throw new AppError_1['default']('ERR_NO_PERMISSION', 0x193);
  const _0x1f463d = _0x468d4c || _0x36f6f9;
  if (!_0x1f463d) {
    const _0x4637c1 = new Date();
    _0x4637c1[_0x583ee9(0x17e)](_0x4637c1['getDate']() + 0x3);
    const _0x1fa79b = _0x4637c1['toISOString']()[_0x583ee9(0x1c9)]('T')[0x0],
      _0x143280 = {
        name: _0x99d25a,
        email: _0x53a888,
        phone: _0x3e1a1a,
        planId: _0xc244fc,
        status: !![],
        dueDate: _0x1fa79b,
        recurrence: '',
        document: '',
        paymentMethod: '',
        password: _0x1227ba,
        companyUserName: _0x23e094,
        startWork: _0x7c0509,
        endWork: _0x39c3f3,
        defaultTheme: _0x583ee9(0x1a1),
        defaultMenu: _0x583ee9(0x1a9),
        allowGroup: ![],
        allHistoric: ![],
        userClosePendingTicket: 'enabled',
        showDashboard: _0x583ee9(0x1a3),
        defaultTicketsManagerWidth: 0x226
      },
      _0xfd7310 = await (0x0, CreateCompanyService_1['default'])(_0x143280);
    try {
      const _0x10a24f = {
        to: _0x53a888,
        subject: _0x583ee9(0x19a) + _0x99d25a,
        text:
          _0x583ee9(0x1a2) +
          _0x23e094 +
          ',\x20este\x20é\x20um\x20email\x20sobre\x20o\x20cadastro\x20da\x20' +
          _0x99d25a +
          _0x583ee9(0x1b6) +
          _0x99d25a +
          _0x583ee9(0x1b0) +
          _0x53a888 +
          _0x583ee9(0x1b3) +
          _0x1227ba +
          _0x583ee9(0x1c4) +
          _0x317fe9(_0x1fa79b)
      };
      await (0x0, SendMail_1['SendMail'])(_0x10a24f);
    } catch (_0x5b4941) {
      console[_0x583ee9(0x1ba)]('Não\x20consegui\x20enviar\x20o\x20email');
    }
    try {
      const _0x7922f5 = await (0x0, ShowCompanyService_1[_0x583ee9(0x1a6)])(
          0x1
        ),
        _0x47812e = await (0x0,
        FindCompaniesWhatsappService_1[_0x583ee9(0x1a6)])(_0x7922f5['id']);
      if (
        _0x47812e['whatsapps'][0x0][_0x583ee9(0x18c)] === _0x583ee9(0x18f) &&
        (_0x3e1a1a !== undefined ||
          !(0x0, lodash_1[_0x583ee9(0x1bb)])(_0x3e1a1a) ||
          !(0x0, lodash_1['isEmpty'])(_0x3e1a1a))
      ) {
        const _0x116b9c = _0x47812e['whatsapps'][0x0]['id'],
          _0x5e1944 = (0x0, wbot_1[_0x583ee9(0x1ae)])(_0x116b9c),
          _0x3a93dd =
            _0x583ee9(0x1a2) +
            _0x23e094 +
            ',\x20este\x20é\x20uma\x20mensagem\x20sobre\x20o\x20cadastro\x20da\x20' +
            _0x99d25a +
            _0x583ee9(0x186) +
            _0x99d25a +
            _0x583ee9(0x1c7) +
            _0x53a888 +
            _0x583ee9(0x191) +
            _0x1227ba +
            _0x583ee9(0x1cd) +
            _0x317fe9(_0x1fa79b);
        await _0x5e1944[_0x583ee9(0x1c5)]('55' + _0x3e1a1a + _0x583ee9(0x1d0), {
          text: _0x3a93dd
        });
      }
    } catch (_0x534485) {
      console[_0x583ee9(0x1ba)]('Não\x20consegui\x20enviar\x20a\x20mensagem');
    }
    return _0x29c340[_0x583ee9(0x18c)](0xc8)[_0x583ee9(0x187)](_0xfd7310);
  }
  if (_0x1f463d) {
    const _0x37038c = await (0x0, CreateUserService_1[_0x583ee9(0x1a6)])({
        email: _0x53a888,
        password: _0x1227ba,
        name: _0x23e094,
        profile: _0x4c7796,
        companyId: _0x1f463d,
        queueIds: _0x5c8b5f,
        startWork: _0x7c0509,
        endWork: _0x39c3f3,
        whatsappId: _0x27846c,
        allTicket: _0x4c1073,
        defaultTheme: _0x3de6d5,
        defaultMenu: _0xcb1cfb,
        allowGroup: _0x33b58b,
        allHistoric: _0x4fc947,
        allUserChat: _0x18caaa,
        userClosePendingTicket: _0x2d723b,
        showDashboard: _0x215ed8,
        defaultTicketsManagerWidth: defaultTicketsManagerWidth
      }),
      _0x586523 = (0x0, socket_1[_0x583ee9(0x1cb)])();
    return (
      _0x586523[_0x583ee9(0x1bf)](
        _0x583ee9(0x1b5) + _0x36f6f9 + _0x583ee9(0x1af),
        { action: _0x583ee9(0x192), user: _0x37038c }
      ),
      _0x29c340[_0x583ee9(0x18c)](0xc8)['json'](_0x37038c)
    );
  }
};
exports[a40_0x2d9e8c(0x1c1)] = store;
const show = async (_0x2ebf88, _0x2695f2) => {
  const _0x5b3322 = a40_0x2d9e8c,
    { userId: _0x25dec0 } = _0x2ebf88[_0x5b3322(0x19b)],
    { companyId: _0x2195ba } = _0x2ebf88[_0x5b3322(0x1be)],
    _0x288274 = await (0x0, ShowUserService_1[_0x5b3322(0x1a6)])(
      _0x25dec0,
      _0x2195ba
    );
  return _0x2695f2[_0x5b3322(0x18c)](0xc8)[_0x5b3322(0x187)](_0x288274);
};
exports[a40_0x2d9e8c(0x196)] = show;
const update = async (_0x139cfd, _0x2672cb) => {
  const _0x23b930 = a40_0x2d9e8c;
  if (process[_0x23b930(0x188)][_0x23b930(0x180)] === 'ON')
    throw new AppError_1[_0x23b930(0x1a6)](_0x23b930(0x1a7), 0x193);
  const { id: _0x3a1650, companyId: _0x4f0fd3 } = _0x139cfd['user'],
    { userId: _0x4aabfb } = _0x139cfd['params'],
    _0x5410de = _0x139cfd[_0x23b930(0x19d)],
    _0x37d874 = await (0x0, UpdateUserService_1[_0x23b930(0x1a6)])({
      userData: _0x5410de,
      userId: _0x4aabfb,
      companyId: _0x4f0fd3,
      requestUserId: +_0x3a1650
    }),
    _0x4d0863 = (0x0, socket_1[_0x23b930(0x1cb)])();
  return (
    _0x4d0863[_0x23b930(0x1bf)](_0x23b930(0x1b5) + _0x4f0fd3 + '-user', {
      action: 'update',
      user: _0x37d874
    }),
    _0x2672cb[_0x23b930(0x18c)](0xc8)[_0x23b930(0x187)](_0x37d874)
  );
};
exports[a40_0x2d9e8c(0x197)] = update;
const remove = async (_0x3ae041, _0x175019) => {
  const _0x135a7d = a40_0x2d9e8c,
    { userId: _0x3ef1f5 } = _0x3ae041[_0x135a7d(0x19b)],
    {
      companyId: _0x3ddc0a,
      id: _0x5e22f3,
      profile: _0x1af558
    } = _0x3ae041[_0x135a7d(0x1be)];
  if (_0x1af558 !== 'admin')
    throw new AppError_1[_0x135a7d(0x1a6)](_0x135a7d(0x1a7), 0x193);
  if (process[_0x135a7d(0x188)][_0x135a7d(0x180)] === 'ON')
    throw new AppError_1[_0x135a7d(0x1a6)](_0x135a7d(0x1a7), 0x193);
  const _0x3781fd = await User_1['default'][_0x135a7d(0x185)]({
    where: { id: _0x3ef1f5 }
  });
  if (_0x3ddc0a !== _0x3781fd[_0x135a7d(0x1cc)])
    return _0x175019['status'](0x190)[_0x135a7d(0x187)]({
      error: _0x135a7d(0x1c0)
    });
  else {
    await (0x0, DeleteUserService_1[_0x135a7d(0x1a6)])(_0x3ef1f5, _0x3ddc0a);
    const _0x218d74 = (0x0, socket_1['getIO'])();
    return (
      _0x218d74[_0x135a7d(0x1bf)](
        _0x135a7d(0x1b5) + _0x3ddc0a + _0x135a7d(0x1af),
        { action: _0x135a7d(0x19c), userId: _0x3ef1f5 }
      ),
      _0x175019[_0x135a7d(0x18c)](0xc8)[_0x135a7d(0x187)]({
        message: 'User\x20deleted'
      })
    );
  }
};
exports['remove'] = remove;
const list = async (_0x393b7e, _0x3ac506) => {
  const _0x3da275 = a40_0x2d9e8c,
    { companyId: _0x37be56 } = _0x393b7e[_0x3da275(0x1a0)],
    { companyId: _0x11a69f } = _0x393b7e[_0x3da275(0x1be)],
    _0x58a252 = await (0x0, SimpleListService_1[_0x3da275(0x1a6)])({
      companyId: _0x37be56 ? +_0x37be56 : _0x11a69f
    });
  return _0x3ac506['status'](0xc8)['json'](_0x58a252);
};
exports[a40_0x2d9e8c(0x194)] = list;
const mediaUpload = async (_0x2d6570, _0x95739e) => {
  const _0x46ba39 = a40_0x2d9e8c,
    { userId: _0x4383f5 } = _0x2d6570[_0x46ba39(0x19b)],
    _0x26bf57 = _0x2d6570[_0x46ba39(0x17b)],
    _0x3d982e = (0x0, lodash_2['head'])(_0x26bf57);
  try {
    const _0x9bb51 =
      await User_1[_0x46ba39(0x1a6)][_0x46ba39(0x1a4)](_0x4383f5);
    return (
      (_0x9bb51[_0x46ba39(0x1b8)] = _0x3d982e[_0x46ba39(0x1b1)][
        _0x46ba39(0x18e)
      ]('/', '-')),
      await _0x9bb51[_0x46ba39(0x184)](),
      _0x95739e[_0x46ba39(0x18c)](0xc8)[_0x46ba39(0x187)]({
        user: _0x9bb51,
        message: 'Imagem\x20atualizada'
      })
    );
  } catch (_0x156fe9) {
    throw new AppError_1[_0x46ba39(0x1a6)](_0x156fe9[_0x46ba39(0x1ac)]);
  }
};
exports[a40_0x2d9e8c(0x17f)] = mediaUpload;
const toggleChangeWidht = async (_0x13929b, _0x2c25e1) => {
  const _0x37fef3 = a40_0x2d9e8c;
  var { userId: _0x1630b7 } = _0x13929b[_0x37fef3(0x19b)];
  const { defaultTicketsManagerWidth: _0x2eeaa6 } = _0x13929b['body'],
    { companyId: _0x58b12d } = _0x13929b[_0x37fef3(0x1be)],
    _0x3d7a56 = await (0x0, ToggleChangeWidthService_1[_0x37fef3(0x1a6)])({
      userId: _0x1630b7,
      defaultTicketsManagerWidth: _0x2eeaa6
    }),
    _0x2e85a8 = (0x0, socket_1[_0x37fef3(0x1cb)])();
  return (
    _0x2e85a8[_0x37fef3(0x1bf)](
      _0x37fef3(0x1b5) + _0x58b12d + _0x37fef3(0x1af),
      { action: 'update', user: _0x3d7a56 }
    ),
    _0x2c25e1[_0x37fef3(0x18c)](0xc8)['json'](_0x3d7a56)
  );
};
exports[a40_0x2d9e8c(0x1aa)] = toggleChangeWidht;
