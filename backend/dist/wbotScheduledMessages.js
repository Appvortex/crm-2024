'use strict';
const a675_0x102108 = a675_0x1cde;
(function (_0x5e1746, _0x45ecfb) {
  const _0x19ed70 = a675_0x1cde,
    _0x370212 = _0x5e1746();
  while (!![]) {
    try {
      const _0x48dfc9 =
        parseInt(_0x19ed70(0x141)) / 0x1 +
        -parseInt(_0x19ed70(0x17b)) / 0x2 +
        parseInt(_0x19ed70(0x193)) / 0x3 +
        (-parseInt(_0x19ed70(0x19c)) / 0x4) *
          (-parseInt(_0x19ed70(0x177)) / 0x5) +
        (-parseInt(_0x19ed70(0x14c)) / 0x6) *
          (-parseInt(_0x19ed70(0x175)) / 0x7) +
        parseInt(_0x19ed70(0x16f)) / 0x8 +
        -parseInt(_0x19ed70(0x192)) / 0x9;
      if (_0x48dfc9 === _0x45ecfb) break;
      else _0x370212['push'](_0x370212['shift']());
    } catch (_0x102e65) {
      _0x370212['push'](_0x370212['shift']());
    }
  }
})(a675_0x2401, 0x6091f);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x6b7c8c) {
    return _0x6b7c8c && _0x6b7c8c['__esModule']
      ? _0x6b7c8c
      : { default: _0x6b7c8c };
  };
Object[a675_0x102108(0x174)](exports, '__esModule', { value: !![] }),
  (exports[a675_0x102108(0x19f)] =
    exports[a675_0x102108(0x146)] =
    exports[a675_0x102108(0x16e)] =
    exports['ScheduledMessagesJob'] =
      void 0x0);
const ScheduledMessages_1 = __importDefault(
    require('./models/ScheduledMessages')
  ),
  ScheduledMessagesEnvio_1 = __importDefault(require(a675_0x102108(0x161))),
  Whatsapp_1 = __importDefault(require(a675_0x102108(0x14e))),
  Contact_1 = __importDefault(require(a675_0x102108(0x194))),
  cache_1 = __importDefault(require(a675_0x102108(0x13b))),
  User_1 = __importDefault(require(a675_0x102108(0x190))),
  SendMessage_1 = require(a675_0x102108(0x17c)),
  ShowContactService_1 = __importDefault(require(a675_0x102108(0x182))),
  Ticket_1 = __importDefault(require(a675_0x102108(0x140))),
  wbotMessageListener_1 = require('./services/WbotServices/wbotMessageListener'),
  logger_1 = require(a675_0x102108(0x17a)),
  config = {
    intervalo: { DIAS: '1', SEMANA: '2', MESES: '3' },
    tipo_dias_envio: {
      ENVIAR_NORMALMENTE: '4',
      ENVIAR_UM_DIA_UTIL_ANTES: '5',
      ENVIAR_UM_DIA_UTIL_DEPOIS: '6'
    },
    DIAS_SEMANA: {
      DOMINGO: 0x0,
      SEGUNDA: 0x1,
      TERCA: 0x2,
      QUARTA: 0x3,
      QUINTA: 0x4,
      SEXTA: 0x5,
      SABADO: 0x6
    }
  };
function a675_0x2401() {
  const _0x568d2a = [
    'MESES',
    'create',
    './libs/cache',
    'setMonth',
    'Mensagem\x20agendada\x20enviada\x20para:\x20',
    'scheduled-messages',
    'findIndex',
    './models/Ticket',
    '556365RAFkUm',
    'status',
    'enviar_quantas_vezes',
    'mediaName',
    'get',
    'ScheduleMessagesEnvioJob',
    'SEMANA',
    'find',
    'CONNECTED',
    'getHours',
    'error\x20',
    '6xYGrvw',
    'some',
    './models/Whatsapp',
    'getMinutes',
    'mostrar_usuario_mensagem',
    '*:\x0a',
    'valor_intervalo',
    'getMonth',
    'message',
    'number',
    'stringify',
    'getDay',
    'parse',
    'verifyMessage',
    'map',
    'setHours',
    'true',
    'diaUtil',
    'data_mensagem_programada',
    'setMinutes',
    'run-scheduled-messages-envios-forahorario',
    './models/ScheduledMessagesEnvio',
    'companyId',
    'getFullYear',
    'reduce',
    'SABADO',
    'run-scheduled-messages-envios',
    'warn',
    'key',
    'findOrCreate',
    'scheduledmessages',
    '05-21',
    '*:\x20\x0a\x20',
    'forEach',
    'ScheduleMessagesGenerateJob',
    '622472UaXZPL',
    '25-12',
    'getDate',
    'ENVIAR_UM_DIA_UTIL_DEPOIS',
    'update',
    'defineProperty',
    '2840621TMqpXi',
    'scheduled_message_envio',
    '425IxVNmj',
    'false',
    'create_ticket',
    './utils/logger',
    '590290CxPSEu',
    './helpers/SendMessage',
    'entries',
    'scheduled-messages-envios',
    '10-12',
    'usuario_envio',
    '09-07',
    './services/ContactServices/ShowContactService',
    'conexao',
    'DIAS',
    'numbers',
    'generate-scheduled-messages-envios',
    '15-11',
    'run',
    'data_envio',
    'ScheduledMessagesJob\x20run',
    'mensagem_enviada',
    'contatos',
    'envios',
    'del',
    'isGroup',
    './models/User',
    'open',
    '10837584hnsoQO',
    '1872360mrloGT',
    './models/Contact',
    'whatsapp',
    'ScheduledMessagesJob',
    '05-01',
    'SendMessage',
    'default',
    'tipo_dias_envio',
    'push',
    '10860gjGRbv',
    'findAll',
    'public/company',
    'ScheduleMessagesEnvioForaHorarioJob',
    'verifyMediaMessage',
    'set-scheduled-messages-envios',
    '02-11',
    'log',
    'user_envio',
    'setDate',
    'name',
    'findOne',
    'mediaPath',
    'filter',
    'length',
    'logger',
    'set',
    'DOMINGO'
  ];
  a675_0x2401 = function () {
    return _0x568d2a;
  };
  return a675_0x2401();
}
function generateStringDate(_0x1d0e8c) {
  const _0x60c605 = a675_0x102108,
    _0x4e797c =
      String(_0x1d0e8c[_0x60c605(0x171)]())[_0x60c605(0x135)] == 0x1
        ? '0' + _0x1d0e8c['getDate']()
        : String(_0x1d0e8c[_0x60c605(0x171)]()),
    _0x2d1c96 =
      String(_0x1d0e8c[_0x60c605(0x153)]() + 0x1)['length'] == 0x1
        ? '0' + (_0x1d0e8c[_0x60c605(0x153)]() + 0x1)
        : String(_0x1d0e8c[_0x60c605(0x153)]() + 0x1),
    _0x1e39e8 = _0x1d0e8c[_0x60c605(0x163)]();
  return _0x1e39e8 + '-' + _0x2d1c96 + '-' + _0x4e797c;
}
function verificaSabadoDomingo(_0x363a90) {
  const _0x488846 = a675_0x102108,
    { DIAS_SEMANA: _0x226901 } = config,
    _0x257778 = [
      '01-01',
      _0x488846(0x16b),
      _0x488846(0x197),
      _0x488846(0x181),
      _0x488846(0x17f),
      _0x488846(0x1a2),
      _0x488846(0x187),
      _0x488846(0x170)
    ],
    _0x52cb37 = _0x257778[_0x488846(0x15a)](_0x30842a => {
      const _0x324510 = _0x488846;
      return _0x363a90[_0x324510(0x163)]() + '-' + _0x30842a;
    }),
    _0x330db1 = generateStringDate(_0x363a90),
    _0x50631c = _0x52cb37['findIndex'](_0x66dc6b => _0x66dc6b == _0x330db1);
  if (_0x50631c != -0x1) return { diaUtil: ![], dia_semana: 0x9 };
  return _0x363a90[_0x488846(0x157)]() == _0x226901[_0x488846(0x138)] ||
    _0x363a90[_0x488846(0x157)]() == _0x226901[_0x488846(0x165)]
    ? { diaUtil: ![], dia_semana: _0x363a90[_0x488846(0x157)]() }
    : { diaUtil: !![], dia_semana: _0x363a90[_0x488846(0x157)]() };
}
function addDays(_0x3a2389, _0x670453, _0x52db2a, _0x2e9ebf) {
  const _0x5da249 = a675_0x102108,
    _0x127ac2 = new Date();
  if (_0x52db2a == 0x0) {
    const _0x3ebf1f = new Date();
    let _0x1d446c = 0x0,
      _0x252f28 = _0x3ebf1f['getFullYear']();
    const _0x58b856 = _0x3ebf1f[_0x5da249(0x163)]();
    while (_0x252f28 <= _0x58b856) {
      _0x3ebf1f[_0x5da249(0x1a5)](_0x3ebf1f[_0x5da249(0x171)]() + 0x1),
        (_0x252f28 = _0x3ebf1f['getFullYear']());
      if (_0x252f28 == _0x58b856) _0x1d446c++;
    }
    _0x52db2a = _0x1d446c;
  }
  _0x127ac2[_0x5da249(0x1a5)](_0x127ac2[_0x5da249(0x171)]() + _0x52db2a);
  const _0x4666b0 = [];
  let _0x570143 = ![],
    _0x3d4456 = _0x3a2389;
  _0x4666b0[_0x5da249(0x19b)](new Date(verificaEnvio(_0x3d4456, _0x2e9ebf)));
  if (_0x52db2a == 0x1) return _0x4666b0;
  while (!_0x570143) {
    _0x3d4456[_0x5da249(0x1a5)](_0x3d4456['getDate']() + _0x670453),
      _0x3d4456 > _0x127ac2
        ? (_0x570143 = !![])
        : _0x4666b0[_0x5da249(0x19b)](
            new Date(verificaEnvio(_0x3d4456, _0x2e9ebf))
          );
  }
  return _0x4666b0;
}
function addweek(_0x4b2a3c, _0x4b7bbf, _0xcd2757, _0x4ce374) {
  const _0x41dfc6 = a675_0x102108,
    _0x16ea8e = new Date();
  if (_0xcd2757 == 0x0) {
    const _0x294b96 = new Date();
    let _0x45b447 = 0x0,
      _0x2a5ed = _0x294b96[_0x41dfc6(0x163)]();
    const _0x21f160 = _0x294b96[_0x41dfc6(0x163)]();
    while (_0x2a5ed <= _0x21f160) {
      _0x294b96[_0x41dfc6(0x1a5)](_0x294b96['getDate']() + 0x7),
        (_0x2a5ed = _0x294b96[_0x41dfc6(0x163)]());
      if (_0x2a5ed == _0x21f160) _0x45b447++;
    }
    _0xcd2757 = _0x45b447;
  }
  _0x16ea8e[_0x41dfc6(0x1a5)](_0x16ea8e[_0x41dfc6(0x171)]() + _0xcd2757 * 0x7);
  const _0x4141b7 = [];
  let _0x4bb50c = ![],
    _0x4cfcbf = _0x4b2a3c;
  _0x4141b7['push'](new Date(verificaEnvio(_0x4cfcbf, _0x4ce374)));
  if (_0xcd2757 == 0x1) return _0x4141b7;
  while (!_0x4bb50c) {
    _0x4cfcbf[_0x41dfc6(0x1a5)](
      _0x4cfcbf[_0x41dfc6(0x171)]() + _0x4b7bbf * 0x7
    ),
      _0x4cfcbf > _0x16ea8e
        ? (_0x4bb50c = !![])
        : _0x4141b7['push'](new Date(verificaEnvio(_0x4cfcbf, _0x4ce374)));
  }
  return _0x4141b7;
}
function addMonth(_0x17db47, _0x154978, _0x31e94e, _0x33562b) {
  const _0x3028a3 = a675_0x102108,
    _0xb40774 = new Date();
  if (_0x31e94e == 0x0) {
    const _0x3a1f89 = new Date();
    let _0x1bdf25 = 0x0,
      _0x185c45 = _0x3a1f89[_0x3028a3(0x163)]();
    const _0x5d791e = _0x3a1f89[_0x3028a3(0x163)]();
    while (_0x185c45 <= _0x5d791e) {
      _0x3a1f89[_0x3028a3(0x13c)](_0x3a1f89['getMonth']() + 0x1),
        (_0x185c45 = _0x3a1f89[_0x3028a3(0x163)]());
      if (_0x185c45 == _0x5d791e) _0x1bdf25++;
    }
    _0x31e94e = _0x1bdf25;
  }
  _0xb40774[_0x3028a3(0x13c)](_0xb40774[_0x3028a3(0x153)]() + _0x31e94e);
  const _0x13ee02 = [];
  let _0x3deade = ![],
    _0x1d1701 = _0x17db47;
  _0x13ee02[_0x3028a3(0x19b)](new Date(verificaEnvio(_0x1d1701, _0x33562b)));
  if (_0x31e94e == 0x1) return _0x13ee02;
  while (!_0x3deade) {
    _0x1d1701[_0x3028a3(0x13c)](_0x1d1701[_0x3028a3(0x153)]() + _0x154978),
      _0x1d1701 > _0xb40774
        ? (_0x3deade = !![])
        : _0x13ee02['push'](new Date(verificaEnvio(_0x1d1701, _0x33562b)));
  }
  return _0x13ee02;
}
function verificaEnvio(_0x515310, _0x4ac9c8) {
  const _0x53253d = a675_0x102108;
  _0x515310 = new Date(_0x515310);
  const { tipo_dias_envio: _0x5a1bfe } = config;
  let _0x3b25fb = verificaSabadoDomingo(_0x515310);
  switch (_0x4ac9c8) {
    case _0x5a1bfe['ENVIAR_NORMALMENTE']:
      return _0x515310;
    case _0x5a1bfe['ENVIAR_UM_DIA_UTIL_ANTES']:
      if (!_0x3b25fb['diaUtil'])
        while (!_0x3b25fb[_0x53253d(0x15d)]) {
          (_0x3b25fb = verificaSabadoDomingo(_0x515310)),
            !_0x3b25fb[_0x53253d(0x15d)] &&
              _0x515310[_0x53253d(0x1a5)](_0x515310['getDate']() - 0x1);
        }
      return _0x515310;
      break;
    case _0x5a1bfe[_0x53253d(0x172)]:
      if (!_0x3b25fb[_0x53253d(0x15d)])
        while (!_0x3b25fb[_0x53253d(0x15d)]) {
          _0x515310['setDate'](_0x515310[_0x53253d(0x171)]() + 0x1),
            (_0x3b25fb = verificaSabadoDomingo(_0x515310));
        }
      return _0x515310;
      break;
    default:
      return _0x515310;
      break;
  }
}
const ScheduledMessagesJob = async () => {
  const _0x20ff78 = a675_0x102108;
  try {
    const _0xe586f4 = await cache_1[_0x20ff78(0x199)][_0x20ff78(0x145)](
      _0x20ff78(0x1a1)
    );
    console['log'](_0x20ff78(0x18a), _0xe586f4);
    if (!_0xe586f4)
      await cache_1[_0x20ff78(0x199)][_0x20ff78(0x137)](
        _0x20ff78(0x1a1),
        _0x20ff78(0x178)
      );
    if (_0xe586f4 == 'false') {
      await cache_1[_0x20ff78(0x199)][_0x20ff78(0x137)](
        'set-scheduled-messages-envios',
        _0x20ff78(0x15c)
      );
      const _0x23b1ad =
          await ScheduledMessages_1[_0x20ff78(0x199)][_0x20ff78(0x19d)](),
        _0x29fd51 = await User_1[_0x20ff78(0x199)]['findAll'](),
        { intervalo: _0x265de2 } = config,
        _0x27e4d4 = await Contact_1['default'][_0x20ff78(0x19d)]({
          where: { channel: _0x20ff78(0x195) }
        }),
        _0x403c6d = _0x23b1ad[_0x20ff78(0x164)]((_0x3c5332, _0xdc6987) => {
          const _0x242c51 = _0x20ff78,
            _0x22e366 = _0x27e4d4[_0x242c51(0x134)](_0x500316 =>
              _0xdc6987[_0x242c51(0x18c)][_0x242c51(0x14d)](
                _0x2eb920 => +_0x2eb920 == _0x500316['id']
              )
            ),
            _0x4d7b39 = [];
          switch (_0xdc6987['intervalo']) {
            case _0x265de2[_0x242c51(0x184)]:
              const _0x3fb9a8 = addDays(
                _0xdc6987[_0x242c51(0x15e)],
                +_0xdc6987[_0x242c51(0x152)],
                +_0xdc6987[_0x242c51(0x143)],
                _0xdc6987[_0x242c51(0x19a)]
              );
              _0x4d7b39[_0x242c51(0x19b)](..._0x3fb9a8);
              break;
            case _0x265de2[_0x242c51(0x147)]:
              const _0x34f468 = addweek(
                _0xdc6987[_0x242c51(0x15e)],
                +_0xdc6987[_0x242c51(0x152)],
                +_0xdc6987[_0x242c51(0x143)],
                _0xdc6987[_0x242c51(0x19a)]
              );
              _0x4d7b39[_0x242c51(0x19b)](..._0x34f468);
              break;
            case _0x265de2[_0x242c51(0x139)]:
              const _0x1211ad = addMonth(
                _0xdc6987[_0x242c51(0x15e)],
                +_0xdc6987[_0x242c51(0x152)],
                +_0xdc6987['enviar_quantas_vezes'],
                _0xdc6987[_0x242c51(0x19a)]
              );
              _0x4d7b39[_0x242c51(0x19b)](..._0x1211ad);
              break;
            default:
              break;
          }
          console[_0x242c51(0x1a3)](
            'scheduled_messages\x20cur\x20323',
            _0xdc6987
          );
          if (_0x4d7b39[_0x242c51(0x135)] == 0x0) return _0x3c5332;
          let _0x141680 = {};
          if (!!_0xdc6987[_0x242c51(0x150)] && !!_0xdc6987[_0x242c51(0x180)])
            _0x141680 = _0x29fd51[_0x242c51(0x148)](
              _0xf86b5f => _0xf86b5f['id'] == +_0xdc6987[_0x242c51(0x180)]
            );
          return (
            !_0x3c5332[_0xdc6987['id']] &&
              !!_0x141680 &&
              (_0x3c5332[_0xdc6987['id']] = {
                id: _0xdc6987['id'],
                envios: _0x4d7b39,
                mostrar_user_ticket: _0xdc6987['mostrar_usuario_mensagem'],
                create_ticket: _0xdc6987['criar_ticket'],
                message: _0xdc6987['mensagem'],
                numbers: _0x22e366,
                conexao: _0xdc6987['id_conexao'],
                user_envio: _0x141680,
                companyId: _0xdc6987[_0x242c51(0x162)],
                mediaPath: _0xdc6987[_0x242c51(0x133)],
                mediaName: _0xdc6987[_0x242c51(0x144)]
              }),
            _0x3c5332
          );
        }, {});
      await cache_1['default'][_0x20ff78(0x137)](
        'scheduled-messages',
        JSON[_0x20ff78(0x156)](_0x403c6d)
      ),
        await cache_1[_0x20ff78(0x199)]['set'](
          'set-scheduled-messages-envios',
          _0x20ff78(0x178)
        );
    }
  } catch (_0x261056) {
    await cache_1[_0x20ff78(0x199)][_0x20ff78(0x137)](
      _0x20ff78(0x1a1),
      _0x20ff78(0x178)
    ),
      await cache_1[_0x20ff78(0x199)][_0x20ff78(0x18e)](_0x20ff78(0x1a1)),
      console[_0x20ff78(0x1a3)]('e', _0x261056);
  }
};
exports[a675_0x102108(0x196)] = ScheduledMessagesJob;
const ScheduleMessagesGenerateJob = async () => {
  const _0x219101 = a675_0x102108;
  try {
    const _0x3712c3 = await cache_1[_0x219101(0x199)]['get'](_0x219101(0x186));
    if (!_0x3712c3)
      await cache_1[_0x219101(0x199)][_0x219101(0x137)](
        'generate-scheduled-messages-envios',
        _0x219101(0x178)
      );
    if (_0x3712c3 == _0x219101(0x178)) {
      console['log'](_0x219101(0x188), 0x18c),
        await cache_1['default'][_0x219101(0x137)](_0x219101(0x186), 'true');
      const _0x10ee8a =
        await ScheduledMessagesEnvio_1[_0x219101(0x199)][_0x219101(0x19d)]();
      console[_0x219101(0x1a3)](_0x10ee8a, _0x219101(0x176));
      if (_0x10ee8a[_0x219101(0x135)] === 0x0) {
        await cache_1['default'][_0x219101(0x137)](
          _0x219101(0x1a1),
          _0x219101(0x178)
        );
        return;
      }
      return await new Promise(async (_0x48e2f0, _0x322dbe) => {
        const _0xb1645 = _0x219101,
          _0x40dbf9 = JSON['parse'](
            await cache_1[_0xb1645(0x199)][_0xb1645(0x145)](_0xb1645(0x13e))
          );
        let _0x125d94 = JSON[_0xb1645(0x158)](
          await cache_1[_0xb1645(0x199)]['get'](_0xb1645(0x17e))
        );
        console[_0xb1645(0x1a3)](_0x125d94);
        if (!_0x125d94) _0x125d94 = {};
        for (let [_0x5dd062, _0x1c73b8] of Object[_0xb1645(0x17d)](_0x40dbf9)) {
          console[_0xb1645(0x1a3)](_0x40dbf9);
          const _0x33c6a0 = _0x1c73b8;
          _0x33c6a0[_0xb1645(0x18d)][_0xb1645(0x16d)](_0x2c9a15 => {
            const _0x118604 = _0xb1645,
              _0x630cee = generateStringDate(new Date(_0x2c9a15));
            if (!_0x125d94[_0x630cee]) _0x125d94[_0x630cee] = [];
            const _0x34c6a5 =
                _0x125d94[_0x630cee][_0x118604(0x135)] == 0x0
                  ? -0x1
                  : _0x125d94[_0x630cee][_0x118604(0x13f)](
                      _0x2c2001 => _0x2c2001[_0x118604(0x168)] == _0x630cee
                    ),
              _0x4a519d = _0x10ee8a[_0x118604(0x13f)](
                _0x16801a =>
                  _0x16801a[_0x118604(0x168)] == _0x630cee &&
                  _0x16801a[_0x118604(0x16a)] == +_0x5dd062 &&
                  _0x16801a['companyId'] == _0x33c6a0[_0x118604(0x162)]
              );
            if (_0x34c6a5 == -0x1)
              _0x125d94[_0x630cee][_0x118604(0x19b)]({
                id: +_0x5dd062,
                key: _0x630cee,
                data_envio: new Date(_0x2c9a15),
                numbers: _0x33c6a0[_0x118604(0x185)],
                mostrar_user_ticket: _0x33c6a0['mostrar_user_ticket'],
                create_ticket: _0x33c6a0['create_ticket'],
                message: _0x33c6a0['message'],
                user_envio: _0x33c6a0[_0x118604(0x1a4)],
                mensagem_enviada: _0x4a519d == -0x1 ? ![] : !![],
                conexao: _0x33c6a0['conexao'],
                companyId: _0x33c6a0[_0x118604(0x162)],
                mediaPath: _0x33c6a0[_0x118604(0x133)],
                mediaName: _0x33c6a0['mediaName']
              });
            else {
              const _0x3caf9d = _0x125d94[_0x630cee][_0x118604(0x13f)](
                _0x320b00 => _0x320b00['id'] == _0x5dd062
              );
              _0x3caf9d != -0x1
                ? (_0x125d94[_0x630cee][_0x3caf9d] = {
                    id: +_0x5dd062,
                    key: _0x630cee,
                    data_envio: new Date(_0x2c9a15),
                    numbers: _0x33c6a0['numbers'],
                    mostrar_user_ticket: _0x33c6a0['mostrar_user_ticket'],
                    create_ticket: _0x33c6a0[_0x118604(0x179)],
                    message: _0x33c6a0[_0x118604(0x154)],
                    user_envio: _0x33c6a0[_0x118604(0x1a4)],
                    mensagem_enviada: _0x4a519d == -0x1 ? ![] : !![],
                    conexao: _0x33c6a0[_0x118604(0x183)],
                    companyId: _0x33c6a0[_0x118604(0x162)],
                    mediaPath: _0x33c6a0[_0x118604(0x133)],
                    mediaName: _0x33c6a0[_0x118604(0x144)]
                  })
                : _0x125d94[_0x630cee][_0x118604(0x19b)]({
                    id: +_0x5dd062,
                    key: _0x630cee,
                    data_envio: new Date(_0x2c9a15),
                    numbers: _0x33c6a0[_0x118604(0x185)],
                    mostrar_user_ticket: _0x33c6a0['mostrar_user_ticket'],
                    create_ticket: _0x33c6a0[_0x118604(0x179)],
                    message: _0x33c6a0[_0x118604(0x154)],
                    user_envio: _0x33c6a0[_0x118604(0x1a4)],
                    mensagem_enviada: _0x4a519d == -0x1 ? ![] : !![],
                    conexao: _0x33c6a0[_0x118604(0x183)],
                    companyId: _0x33c6a0[_0x118604(0x162)],
                    mediaPath: _0x33c6a0[_0x118604(0x133)],
                    mediaName: _0x33c6a0[_0x118604(0x144)]
                  });
            }
          });
        }
        await cache_1[_0xb1645(0x199)][_0xb1645(0x137)](
          _0xb1645(0x17e),
          JSON[_0xb1645(0x156)](_0x125d94)
        ),
          await cache_1['default'][_0xb1645(0x137)](
            _0xb1645(0x186),
            _0xb1645(0x178)
          ),
          console[_0xb1645(0x1a3)]('470', _0x3712c3),
          _0x48e2f0();
      });
    }
  } catch (_0x2ed516) {
    await cache_1[_0x219101(0x199)][_0x219101(0x137)](
      _0x219101(0x186),
      'false'
    ),
      console[_0x219101(0x1a3)](_0x219101(0x14b), _0x2ed516);
  }
};
exports[a675_0x102108(0x16e)] = ScheduleMessagesGenerateJob;
const ScheduleMessagesEnvioJob = async () => {
  const _0xfbf619 = a675_0x102108;
  try {
    const _0x467274 = await cache_1[_0xfbf619(0x199)][_0xfbf619(0x145)](
      _0xfbf619(0x166)
    );
    if (!_0x467274)
      await cache_1['default'][_0xfbf619(0x137)](
        _0xfbf619(0x166),
        _0xfbf619(0x178)
      );
    if (_0x467274 == _0xfbf619(0x178)) {
      await cache_1[_0xfbf619(0x199)][_0xfbf619(0x137)](
        _0xfbf619(0x166),
        _0xfbf619(0x15c)
      );
      const _0xc9cbe6 = new Date(),
        _0x1a999d = await Whatsapp_1[_0xfbf619(0x199)][_0xfbf619(0x19d)]({
          where: { channel: 'whatsapp' }
        }),
        _0x411743 = generateStringDate(_0xc9cbe6),
        _0x2d9289 = await cache_1[_0xfbf619(0x199)][_0xfbf619(0x145)](
          _0xfbf619(0x17e)
        ),
        _0xaecdd9 = JSON['parse'](_0x2d9289);
      if (!_0xaecdd9) return;
      const _0x41b484 = _0xaecdd9[_0x411743];
      if (!_0x41b484) return;
      const _0x4a0973 = new Date();
      _0x4a0973[_0xfbf619(0x15b)](_0x4a0973[_0xfbf619(0x14a)]() - 0x3);
      const _0x4f5827 = new Date();
      _0x4f5827[_0xfbf619(0x15b)](_0x4f5827[_0xfbf619(0x14a)]() - 0x3),
        _0x4f5827[_0xfbf619(0x15f)](_0x4f5827[_0xfbf619(0x14f)]() + 0x2);
      if (_0x41b484 instanceof Array && _0x41b484[_0xfbf619(0x135)] > 0x0) {
        const _0x3bd9d0 = _0x41b484[_0xfbf619(0x134)](
            _0xe9dc4 => !_0xe9dc4[_0xfbf619(0x18b)]
          ),
          _0x29851a = [];
        _0x3bd9d0[_0xfbf619(0x16d)](_0x18208e => {
          const _0x5d54e9 = _0xfbf619,
            _0x3662fb = new Date(_0x18208e['data_envio']);
          _0x3662fb[_0x5d54e9(0x15b)](_0x3662fb['getHours']() - 0x3);
          if (_0x3662fb <= _0x4f5827) _0x29851a['push'](_0x18208e);
        });
        for (let _0x3697a2 of _0x29851a) {
          const {
              mostrar_user_ticket: _0x3e545c,
              user_envio: _0x1eca30,
              message: _0x246999,
              numbers: _0x823fe,
              create_ticket: _0x42a07a,
              companyId: _0x4e27f0,
              id: _0x5922f5
            } = _0x3697a2,
            _0xdeba1 = await ScheduledMessagesEnvio_1[_0xfbf619(0x199)][
              'findOne'
            ]({
              where: {
                key: _0x411743,
                scheduledmessages: +_0x5922f5,
                companyId: _0x4e27f0
              }
            });
          if (!_0xdeba1) {
            const _0x5cd6a0 = !!_0x3e545c && !!_0x1eca30;
            let _0x33ba29 = !!_0x5cd6a0
              ? '*' + _0x1eca30['name'] + _0xfbf619(0x151)
              : '';
            _0x33ba29 += _0x246999;
            const _0x407748 = _0x1a999d[_0xfbf619(0x148)](
              _0x1d5959 => _0x1d5959['id'] == +_0x3697a2['conexao']
            );
            if (!!_0x407748) {
              if (_0x407748[_0xfbf619(0x142)] == _0xfbf619(0x149))
                for (let _0x15ba33 of _0x823fe) {
                  logger_1[_0xfbf619(0x136)][_0xfbf619(0x167)](
                    'Mensagem\x20agendada\x20enviada\x20para:\x20' +
                      _0x15ba33[_0xfbf619(0x155)]
                  );
                  let _0x585f67 = {
                    number: _0x15ba33['number'],
                    body: _0x33ba29
                  };
                  if (_0x3697a2['mediaPath'])
                    _0x585f67['mediaPath'] =
                      _0xfbf619(0x19e) +
                      _0x4e27f0 +
                      '/' +
                      _0x3697a2['mediaPath'];
                  const _0x4d0c66 = await (0x0,
                  SendMessage_1[_0xfbf619(0x198)])(
                    _0x407748,
                    _0x585f67,
                    _0x15ba33['isGroup']
                  );
                  if (!!_0x4d0c66) {
                    const { isGroup: _0x3bb658 } = await (0x0,
                      ShowContactService_1[_0xfbf619(0x199)])(
                        _0x15ba33['id'],
                        _0x4e27f0
                      ),
                      [{ id: _0x2e0dba, status: _0x226eac }] = await Ticket_1[
                        'default'
                      ][_0xfbf619(0x169)]({
                        where: {
                          contactId: _0x15ba33['id'],
                          companyId: _0x4e27f0
                        },
                        defaults: {
                          contactId: _0x15ba33['id'],
                          companyId: _0x4e27f0,
                          whatsappId: _0x407748['id'],
                          isGroup: _0x3bb658,
                          userId: _0x1eca30['id']
                        }
                      });
                    await Ticket_1[_0xfbf619(0x199)][_0xfbf619(0x173)](
                      {
                        companyId: _0x4e27f0,
                        userId: _0x1eca30['id'],
                        whatsappId: _0x407748['id'],
                        status: !_0x42a07a ? _0x226eac : _0xfbf619(0x191)
                      },
                      { where: { id: _0x2e0dba } }
                    );
                    const _0x545eaf = await Ticket_1[_0xfbf619(0x199)][
                        _0xfbf619(0x132)
                      ]({ where: { id: _0x2e0dba } }),
                      _0x2d5b73 = await Contact_1[_0xfbf619(0x199)]['findOne']({
                        where: { id: _0x15ba33['id'] }
                      });
                    _0x3697a2['mediaPath']
                      ? await (0x0,
                        wbotMessageListener_1['verifyMediaMessage'])(
                          _0x4d0c66,
                          _0x545eaf,
                          _0x2d5b73,
                          _0x4e27f0
                        )
                      : await (0x0, wbotMessageListener_1[_0xfbf619(0x159)])(
                          _0x4d0c66,
                          _0x545eaf,
                          _0x2d5b73,
                          _0x4e27f0
                        ),
                      await ScheduledMessagesEnvio_1[_0xfbf619(0x199)][
                        _0xfbf619(0x13a)
                      ]({
                        mensagem: JSON[_0xfbf619(0x156)](_0x33ba29),
                        mediaPath: _0x585f67[_0xfbf619(0x133)],
                        mediaName: '',
                        companyId: _0x4e27f0,
                        data_envio: new Date(),
                        scheduledmessages: +_0x5922f5,
                        key: _0x411743
                      });
                  }
                }
            }
          }
        }
        await cache_1['default'][_0xfbf619(0x137)](
          _0xfbf619(0x166),
          _0xfbf619(0x178)
        );
      } else
        await cache_1[_0xfbf619(0x199)][_0xfbf619(0x137)](
          _0xfbf619(0x166),
          _0xfbf619(0x178)
        );
    }
    await cache_1[_0xfbf619(0x199)][_0xfbf619(0x137)](
      _0xfbf619(0x166),
      _0xfbf619(0x178)
    );
  } catch (_0x4d4d57) {
    await cache_1[_0xfbf619(0x199)][_0xfbf619(0x137)](
      'run-scheduled-messages-envios',
      _0xfbf619(0x178)
    ),
      console[_0xfbf619(0x1a3)]('error\x20', _0x4d4d57);
  }
};
exports[a675_0x102108(0x146)] = ScheduleMessagesEnvioJob;
const ScheduleMessagesEnvioForaHorarioJob = async () => {
  const _0x4e9919 = a675_0x102108;
  try {
    const _0xe52877 = await cache_1[_0x4e9919(0x199)]['get'](_0x4e9919(0x160));
    if (!_0xe52877)
      await cache_1[_0x4e9919(0x199)]['set'](
        'run-scheduled-messages-envios-forahorario',
        _0x4e9919(0x178)
      );
    if (_0xe52877 == _0x4e9919(0x178)) {
      await cache_1[_0x4e9919(0x199)][_0x4e9919(0x137)](
        _0x4e9919(0x160),
        _0x4e9919(0x15c)
      );
      const _0xe05ffe = new Date(),
        _0x397221 = await Whatsapp_1[_0x4e9919(0x199)][_0x4e9919(0x19d)]({
          where: { channel: _0x4e9919(0x195) }
        }),
        _0x1b1910 = generateStringDate(_0xe05ffe),
        _0x25ae61 = await cache_1[_0x4e9919(0x199)]['get'](
          'scheduled-messages-envios'
        ),
        _0x2380fa = JSON[_0x4e9919(0x158)](_0x25ae61),
        _0x2ce1be = _0x2380fa[_0x1b1910];
      if (!_0x2ce1be) return;
      const _0x5f25a8 = new Date();
      _0x5f25a8[_0x4e9919(0x15b)](_0x5f25a8[_0x4e9919(0x14a)]() - 0x3);
      if (_0x2ce1be instanceof Array && _0x2ce1be['length'] > 0x0) {
        const _0x33e179 = _0x2ce1be[_0x4e9919(0x134)](
            _0x1b175b => !_0x1b175b['mensagem_enviada']
          ),
          _0x24a36c = [];
        _0x33e179[_0x4e9919(0x16d)](_0x4e0365 => {
          const _0x4f602e = _0x4e9919,
            _0x15078d = new Date(_0x4e0365[_0x4f602e(0x189)]);
          _0x15078d[_0x4f602e(0x15b)](_0x15078d['getHours']() - 0x3);
          if (_0x5f25a8 >= _0x15078d) _0x24a36c['push'](_0x4e0365);
        });
        for (let _0x410522 of _0x24a36c) {
          const {
              mostrar_user_ticket: _0x5a9c5a,
              user_envio: _0x4b492a,
              message: _0xb02fca,
              numbers: _0x3b032a,
              create_ticket: _0x242571,
              companyId: _0xe0ee85,
              id: _0x44dccc
            } = _0x410522,
            _0x337aaf = await ScheduledMessagesEnvio_1[_0x4e9919(0x199)][
              _0x4e9919(0x132)
            ]({
              where: {
                key: _0x1b1910,
                scheduledmessages: +_0x44dccc,
                companyId: _0xe0ee85
              }
            });
          if (!_0x337aaf) {
            const _0x520969 = !!_0x5a9c5a && !!_0x4b492a;
            let _0x19071d = !!_0x520969
              ? '*' + _0x4b492a[_0x4e9919(0x131)] + _0x4e9919(0x16c)
              : '';
            _0x19071d += _0xb02fca;
            const _0x1eac24 = _0x397221[_0x4e9919(0x148)](
              _0x496d03 => _0x496d03['id'] == +_0x410522[_0x4e9919(0x183)]
            );
            if (!!_0x1eac24) {
              if (_0x1eac24[_0x4e9919(0x142)] == 'CONNECTED')
                for (let _0x474726 of _0x3b032a) {
                  logger_1['logger'][_0x4e9919(0x167)](
                    _0x4e9919(0x13d) + _0x474726[_0x4e9919(0x155)]
                  );
                  let _0x462407 = {
                    number: _0x474726['number'],
                    body: _0x19071d
                  };
                  _0x410522[_0x4e9919(0x133)] &&
                    ((_0x462407[_0x4e9919(0x133)] =
                      _0x4e9919(0x19e) +
                      _0xe0ee85 +
                      '/' +
                      _0x410522[_0x4e9919(0x133)]),
                    (_0x462407[_0x4e9919(0x144)] = _0x410522['mediaName']));
                  const _0x5d051d = await (0x0,
                  SendMessage_1[_0x4e9919(0x198)])(
                    _0x1eac24,
                    _0x462407,
                    _0x474726[_0x4e9919(0x18f)]
                  );
                  if (!!_0x5d051d) {
                    const { isGroup: _0x356436 } = await (0x0,
                      ShowContactService_1[_0x4e9919(0x199)])(
                        _0x474726['id'],
                        _0xe0ee85
                      ),
                      [{ id: _0x4dd5de, status: _0x429999 }] = await Ticket_1[
                        _0x4e9919(0x199)
                      ]['findOrCreate']({
                        where: {
                          contactId: _0x474726['id'],
                          companyId: _0xe0ee85
                        },
                        defaults: {
                          contactId: _0x474726['id'],
                          companyId: _0xe0ee85,
                          whatsappId: _0x1eac24['id'],
                          isGroup: _0x356436,
                          userId: _0x4b492a['id']
                        }
                      });
                    await Ticket_1[_0x4e9919(0x199)][_0x4e9919(0x173)](
                      {
                        companyId: _0xe0ee85,
                        userId: _0x4b492a['id'],
                        whatsappId: _0x1eac24['id'],
                        status: !_0x242571 ? _0x429999 : _0x4e9919(0x191)
                      },
                      { where: { id: _0x4dd5de } }
                    );
                    const _0x4e34c0 = await Ticket_1[_0x4e9919(0x199)][
                        _0x4e9919(0x132)
                      ]({ where: { id: _0x4dd5de } }),
                      _0x303d9c = await Contact_1[_0x4e9919(0x199)]['findOne']({
                        where: { id: _0x474726['id'] }
                      });
                    _0x410522[_0x4e9919(0x133)]
                      ? await (0x0, wbotMessageListener_1[_0x4e9919(0x1a0)])(
                          _0x5d051d,
                          _0x4e34c0,
                          _0x303d9c,
                          _0xe0ee85
                        )
                      : await (0x0, wbotMessageListener_1[_0x4e9919(0x159)])(
                          _0x5d051d,
                          _0x4e34c0,
                          _0x303d9c,
                          _0xe0ee85
                        ),
                      await ScheduledMessagesEnvio_1[_0x4e9919(0x199)][
                        _0x4e9919(0x13a)
                      ]({
                        mensagem: JSON['stringify'](_0x19071d),
                        mediaPath: _0x462407[_0x4e9919(0x133)],
                        mediaName: '',
                        companyId: _0xe0ee85,
                        data_envio: new Date(),
                        scheduledmessages: +_0x44dccc,
                        key: _0x1b1910
                      });
                  }
                }
            }
          }
        }
        await cache_1[_0x4e9919(0x199)]['set'](
          'run-scheduled-messages-envios-forahorario',
          'false'
        );
      } else
        await cache_1[_0x4e9919(0x199)][_0x4e9919(0x137)](
          _0x4e9919(0x160),
          _0x4e9919(0x178)
        );
    }
    await cache_1[_0x4e9919(0x199)][_0x4e9919(0x137)](
      _0x4e9919(0x160),
      _0x4e9919(0x178)
    );
  } catch (_0xe2c08f) {
    await cache_1[_0x4e9919(0x199)]['set'](_0x4e9919(0x160), 'false'),
      console[_0x4e9919(0x1a3)](_0x4e9919(0x14b), _0xe2c08f);
  }
};
function a675_0x1cde(_0x4fca7b, _0x1ab408) {
  const _0x240149 = a675_0x2401();
  return (
    (a675_0x1cde = function (_0x1cde33, _0x423538) {
      _0x1cde33 = _0x1cde33 - 0x131;
      let _0x3037c4 = _0x240149[_0x1cde33];
      return _0x3037c4;
    }),
    a675_0x1cde(_0x4fca7b, _0x1ab408)
  );
}
exports[a675_0x102108(0x19f)] = ScheduleMessagesEnvioForaHorarioJob;
