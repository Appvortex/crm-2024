'use strict';
function a468_0x1c69() {
  const _0x493338 = [
    '10mlGNYD',
    '1563eQNZhC',
    '__importDefault',
    'isWhatsappValid',
    '1810oCmgBs',
    '610024JNNIaD',
    '../../models/ContactListItem',
    'defineProperty',
    '__esModule',
    'number',
    '456072oakeNW',
    'default',
    '56275dQvfXu',
    '648262GTJgXD',
    'Número\x20de\x20contacto\x20inválido:\x20',
    '1077538eSUGPu',
    '../../errors/AppError',
    '5634711qVivFU',
    '172mGTqBx',
    'ERR_NO_CONTACTLISTITEM_FOUND',
    '35DtmAAT',
    'findByPk'
  ];
  a468_0x1c69 = function () {
    return _0x493338;
  };
  return a468_0x1c69();
}
const a468_0x9841e6 = a468_0x1d03;
(function (_0x54ca6b, _0x13d510) {
  const _0x343ad2 = a468_0x1d03,
    _0x4475a2 = _0x54ca6b();
  while (!![]) {
    try {
      const _0xd7effa =
        parseInt(_0x343ad2(0x1b6)) / 0x1 +
        (-parseInt(_0x343ad2(0x1c3)) / 0x2) *
          (-parseInt(_0x343ad2(0x1c0)) / 0x3) +
        (-parseInt(_0x343ad2(0x1bb)) / 0x4) *
          (parseInt(_0x343ad2(0x1b5)) / 0x5) +
        -parseInt(_0x343ad2(0x1b3)) / 0x6 +
        (-parseInt(_0x343ad2(0x1bd)) / 0x7) *
          (-parseInt(_0x343ad2(0x1c4)) / 0x8) +
        -parseInt(_0x343ad2(0x1ba)) / 0x9 +
        (-parseInt(_0x343ad2(0x1bf)) / 0xa) *
          (-parseInt(_0x343ad2(0x1b8)) / 0xb);
      if (_0xd7effa === _0x13d510) break;
      else _0x4475a2['push'](_0x4475a2['shift']());
    } catch (_0x2ff0d5) {
      _0x4475a2['push'](_0x4475a2['shift']());
    }
  }
})(a468_0x1c69, 0x64d06);
var __importDefault =
  (this && this[a468_0x9841e6(0x1c1)]) ||
  function (_0x284993) {
    const _0x394871 = a468_0x9841e6;
    return _0x284993 && _0x284993[_0x394871(0x1c7)]
      ? _0x284993
      : { default: _0x284993 };
  };
Object[a468_0x9841e6(0x1c6)](exports, a468_0x9841e6(0x1c7), { value: !![] });
function a468_0x1d03(_0x105114, _0x26db43) {
  const _0x1c6992 = a468_0x1c69();
  return (
    (a468_0x1d03 = function (_0x1d0368, _0x43ec55) {
      _0x1d0368 = _0x1d0368 - 0x1b2;
      let _0x43c7b3 = _0x1c6992[_0x1d0368];
      return _0x43c7b3;
    }),
    a468_0x1d03(_0x105114, _0x26db43)
  );
}
const AppError_1 = __importDefault(require(a468_0x9841e6(0x1b9))),
  ContactListItem_1 = __importDefault(require(a468_0x9841e6(0x1c5))),
  logger_1 = require('../../utils/logger'),
  CheckNumber_1 = __importDefault(require('../WbotServices/CheckNumber')),
  UpdateService = async _0xe0e702 => {
    const _0x4e43a0 = a468_0x9841e6,
      {
        id: _0x1debd8,
        name: _0x164310,
        number: _0x3ea396,
        email: _0x3690f0
      } = _0xe0e702,
      _0x36bcfd =
        await ContactListItem_1['default'][_0x4e43a0(0x1be)](_0x1debd8);
    if (!_0x36bcfd)
      throw new AppError_1[_0x4e43a0(0x1b4)](_0x4e43a0(0x1bc), 0x194);
    await _0x36bcfd['update']({
      name: _0x164310,
      number: _0x3ea396,
      email: _0x3690f0
    });
    try {
      const _0x52baf7 = await (0x0, CheckNumber_1[_0x4e43a0(0x1b4)])(
        _0x36bcfd[_0x4e43a0(0x1b2)],
        _0x36bcfd['companyId']
      );
      _0x36bcfd[_0x4e43a0(0x1c2)] = _0x52baf7 ? !![] : ![];
      const _0x1601f3 = _0x52baf7;
      (_0x36bcfd['number'] = _0x1601f3), await _0x36bcfd['save']();
    } catch (_0x553d36) {
      logger_1['logger']['error'](_0x4e43a0(0x1b7) + _0x36bcfd['number']);
    }
    return _0x36bcfd;
  };
exports['default'] = UpdateService;
