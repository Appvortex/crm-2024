'use strict';
const a31_0x7ea577 = a31_0x1d7f;
(function (_0x30cd94, _0x1c270e) {
  const _0x3ee937 = a31_0x1d7f,
    _0x3394da = _0x30cd94();
  while (!![]) {
    try {
      const _0x2cd477 =
        parseInt(_0x3ee937(0xc3)) / 0x1 +
        (parseInt(_0x3ee937(0xdf)) / 0x2) * (-parseInt(_0x3ee937(0xd4)) / 0x3) +
        (parseInt(_0x3ee937(0xc6)) / 0x4) * (parseInt(_0x3ee937(0xd9)) / 0x5) +
        (-parseInt(_0x3ee937(0xcf)) / 0x6) *
          (-parseInt(_0x3ee937(0xca)) / 0x7) +
        parseInt(_0x3ee937(0xcc)) / 0x8 +
        parseInt(_0x3ee937(0xc8)) / 0x9 +
        -parseInt(_0x3ee937(0xdd)) / 0xa;
      if (_0x2cd477 === _0x1c270e) break;
      else _0x3394da['push'](_0x3394da['shift']());
    } catch (_0xbb8c) {
      _0x3394da['push'](_0x3394da['shift']());
    }
  }
})(a31_0x2d09, 0x63a0c);
var __importDefault =
  (this && this[a31_0x7ea577(0xe1)]) ||
  function (_0x2e4867) {
    const _0xa51d31 = a31_0x7ea577;
    return _0x2e4867 && _0x2e4867[_0xa51d31(0xc4)]
      ? _0x2e4867
      : { default: _0x2e4867 };
  };
Object[a31_0x7ea577(0xd5)](exports, a31_0x7ea577(0xc4), { value: !![] }),
  (exports[a31_0x7ea577(0xcb)] =
    exports[a31_0x7ea577(0xc2)] =
    exports[a31_0x7ea577(0xce)] =
    exports[a31_0x7ea577(0xdb)] =
    exports[a31_0x7ea577(0xc1)] =
      void 0x0);
function a31_0x1d7f(_0x3af2ea, _0x1ba654) {
  const _0x2d09c3 = a31_0x2d09();
  return (
    (a31_0x1d7f = function (_0x1d7fba, _0x2f1613) {
      _0x1d7fba = _0x1d7fba - 0xbf;
      let _0x53c215 = _0x2d09c3[_0x1d7fba];
      return _0x53c215;
    }),
    a31_0x1d7f(_0x3af2ea, _0x1ba654)
  );
}
const lodash_1 = require(a31_0x7ea577(0xbf)),
  AppError_1 = __importDefault(require('../errors/AppError')),
  CreateService_1 = __importDefault(require(a31_0x7ea577(0xd8))),
  ListService_1 = __importDefault(
    require('../services/ScheduledMessagesService/ListService')
  ),
  UpdateService_1 = __importDefault(
    require('../services/ScheduledMessagesService/UpdateService')
  ),
  ShowService_1 = __importDefault(require(a31_0x7ea577(0xda))),
  DeleteService_1 = __importDefault(
    require('../services/ScheduledMessagesService/DeleteService')
  ),
  index = async (_0x40f422, _0x2d9d27) => {
    const _0x426a21 = a31_0x7ea577,
      { pageNumber: _0x4caa76, searchParam: _0x5e8a86 } =
        _0x40f422[_0x426a21(0xd3)],
      { companyId: _0x26e07a } = _0x40f422[_0x426a21(0xcd)],
      {
        schedules: _0x4f6026,
        count: _0x4b10f0,
        hasMore: _0x138af1
      } = await (0x0, ListService_1[_0x426a21(0xd1)])({
        searchParam: _0x5e8a86,
        pageNumber: _0x4caa76,
        companyId: _0x26e07a
      });
    return _0x2d9d27['json']({
      schedules: _0x4f6026,
      count: _0x4b10f0,
      hasMore: _0x138af1
    });
  };
exports[a31_0x7ea577(0xc1)] = index;
const store = async (_0x1d17ed, _0x2fa4d4) => {
  const _0x4754c7 = a31_0x7ea577,
    {
      data_mensagem_programada: _0x3b2ed9,
      id_conexao: _0x24de5c,
      intervalo: _0x2068b7,
      valor_intervalo: _0x179c18,
      mensagem: _0x26b294,
      tipo_dias_envio: _0x465d20,
      mostrar_usuario_mensagem: _0x373ae0,
      criar_ticket: _0x458c87,
      contatos: _0x25efad,
      tags: _0x2ae411,
      nome: _0x542a8b,
      tipo_arquivo: _0x3dc881,
      usuario_envio: _0x2ddd3d,
      enviar_quantas_vezes: _0x149860
    } = _0x1d17ed[_0x4754c7(0xd6)],
    { companyId: _0x4ce044 } = _0x1d17ed['user'],
    _0x11abd3 = _0x1d17ed['files'],
    _0x1e3a9b = (0x0, lodash_1[_0x4754c7(0xe0)])(_0x11abd3),
    _0x5bcfbe = await (0x0, CreateService_1[_0x4754c7(0xd1)])({
      data_mensagem_programada: _0x3b2ed9,
      id_conexao: _0x24de5c,
      intervalo: _0x2068b7,
      valor_intervalo: _0x179c18,
      mensagem: _0x26b294,
      tipo_dias_envio: _0x465d20,
      mostrar_usuario_mensagem: _0x373ae0,
      criar_ticket: _0x458c87,
      contatos: String(_0x25efad)[_0x4754c7(0xd2)](','),
      tags: String(_0x2ae411)[_0x4754c7(0xd2)](','),
      nome: _0x542a8b,
      tipo_arquivo: _0x3dc881,
      usuario_envio: _0x2ddd3d,
      enviar_quantas_vezes: _0x149860,
      companyId: _0x4ce044,
      mediaPath: _0x1e3a9b?.[_0x4754c7(0xde)],
      mediaName: _0x1e3a9b?.[_0x4754c7(0xc0)]
    });
  return _0x2fa4d4[_0x4754c7(0xd0)](0xc8)[_0x4754c7(0xdc)](_0x5bcfbe);
};
exports[a31_0x7ea577(0xdb)] = store;
const show = async (_0x434627, _0x5563b0) => {
  const _0x43a9de = a31_0x7ea577,
    { scheduleId: _0x2dd52d } = _0x434627[_0x43a9de(0xc7)],
    { companyId: _0x52ef5a } = _0x434627[_0x43a9de(0xcd)],
    _0x7aaf06 = await (0x0, ShowService_1[_0x43a9de(0xd1)])(_0x2dd52d);
  return _0x5563b0['status'](0xc8)[_0x43a9de(0xdc)](_0x7aaf06);
};
function a31_0x2d09() {
  const _0x3d4488 = [
    '__esModule',
    'files',
    '20XJffDE',
    'params',
    '6272055LkXATP',
    'ERR_NO_PERMISSION',
    '203Gtzoun',
    'remove',
    '5472912nAgAxh',
    'user',
    'show',
    '110082QqSNmG',
    'status',
    'default',
    'split',
    'query',
    '6HIIMJI',
    'defineProperty',
    'body',
    'profile',
    '../services/ScheduledMessagesService/CreateService',
    '355195Xwlrqo',
    '../services/ScheduledMessagesService/ShowService',
    'store',
    'json',
    '21118800tyllgY',
    'filename',
    '52350OAdfJr',
    'head',
    '__importDefault',
    'lodash',
    'originalname',
    'index',
    'update',
    '304039OVicSl'
  ];
  a31_0x2d09 = function () {
    return _0x3d4488;
  };
  return a31_0x2d09();
}
exports[a31_0x7ea577(0xce)] = show;
const update = async (_0x3feb99, _0x3e930b) => {
  const _0x18bd32 = a31_0x7ea577;
  if (_0x3feb99[_0x18bd32(0xcd)][_0x18bd32(0xd7)] !== 'admin')
    throw new AppError_1[_0x18bd32(0xd1)](_0x18bd32(0xc9), 0x193);
  const { scheduleId: _0x1001a7 } = _0x3feb99[_0x18bd32(0xc7)],
    _0x58ecb3 = _0x3feb99[_0x18bd32(0xd6)],
    _0x52ed37 = _0x3feb99[_0x18bd32(0xc5)],
    _0x49e86a = (0x0, lodash_1[_0x18bd32(0xe0)])(_0x52ed37),
    _0x41ab61 = await (0x0, UpdateService_1['default'])({
      scheduleData: _0x58ecb3,
      id: _0x1001a7,
      mediaPath: !!_0x49e86a ? _0x49e86a?.['filename'] : null,
      mediaName: !!_0x49e86a ? _0x49e86a?.[_0x18bd32(0xc0)] : null
    });
  return _0x3e930b[_0x18bd32(0xd0)](0xc8)[_0x18bd32(0xdc)](_0x41ab61);
};
exports[a31_0x7ea577(0xc2)] = update;
const remove = async (_0x2186e6, _0xa5aea) => {
  const _0x135aee = a31_0x7ea577,
    { scheduleId: _0x238784 } = _0x2186e6[_0x135aee(0xc7)],
    { companyId: _0x113151 } = _0x2186e6['user'];
  return (
    await (0x0, DeleteService_1['default'])(+_0x238784, +_0x113151),
    _0xa5aea[_0x135aee(0xd0)](0xc8)[_0x135aee(0xdc)]({
      message: 'Schedule\x20deleted'
    })
  );
};
exports[a31_0x7ea577(0xcb)] = remove;
