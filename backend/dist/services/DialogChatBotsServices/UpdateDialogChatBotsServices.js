'use strict';
const a498_0x14a2e7 = a498_0x4d42;
(function (_0x1c8438, _0x225755) {
  const _0x11ac77 = a498_0x4d42,
    _0x18dcbb = _0x1c8438();
  while (!![]) {
    try {
      const _0x3d2459 =
        (-parseInt(_0x11ac77(0x202)) / 0x1) *
          (-parseInt(_0x11ac77(0x201)) / 0x2) +
        (-parseInt(_0x11ac77(0x1fc)) / 0x3) *
          (-parseInt(_0x11ac77(0x206)) / 0x4) +
        parseInt(_0x11ac77(0x200)) / 0x5 +
        parseInt(_0x11ac77(0x1f3)) / 0x6 +
        (parseInt(_0x11ac77(0x1fb)) / 0x7) *
          (-parseInt(_0x11ac77(0x205)) / 0x8) +
        (-parseInt(_0x11ac77(0x1fe)) / 0x9) *
          (parseInt(_0x11ac77(0x203)) / 0xa) +
        parseInt(_0x11ac77(0x1fd)) / 0xb;
      if (_0x3d2459 === _0x225755) break;
      else _0x18dcbb['push'](_0x18dcbb['shift']());
    } catch (_0x1b2d22) {
      _0x18dcbb['push'](_0x18dcbb['shift']());
    }
  }
})(a498_0x41ef, 0x56e9d);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x374954) {
    const _0x24f4ca = a498_0x4d42;
    return _0x374954 && _0x374954[_0x24f4ca(0x1f9)]
      ? _0x374954
      : { default: _0x374954 };
  };
function a498_0x4d42(_0x5d4068, _0x1e4d36) {
  const _0x41ef78 = a498_0x41ef();
  return (
    (a498_0x4d42 = function (_0x4d421b, _0x35a6ca) {
      _0x4d421b = _0x4d421b - 0x1f2;
      let _0x930d67 = _0x41ef78[_0x4d421b];
      return _0x930d67;
    }),
    a498_0x4d42(_0x5d4068, _0x1e4d36)
  );
}
Object['defineProperty'](exports, '__esModule', { value: !![] });
function a498_0x41ef() {
  const _0x8b5903 = [
    '4124071yOnzgt',
    '211896bzcQTw',
    '2399375RPNsuV',
    '54XOOrZa',
    'default',
    '1479200IfPNyy',
    '2bzOMlk',
    '170693WfhFXc',
    '76430qtEvsn',
    'awaitingt',
    '8qWknck',
    '16ORubCz',
    'findOne',
    '142932dznnsw',
    'chatbotId',
    '../../models/DialogChatBots',
    'contactId',
    '../../errors/AppError',
    'ERR_NO_DIALOG_CHATBOT_FOUND',
    '__esModule',
    'reload'
  ];
  a498_0x41ef = function () {
    return _0x8b5903;
  };
  return a498_0x41ef();
}
const DialogChatBots_1 = __importDefault(require(a498_0x14a2e7(0x1f5))),
  AppError_1 = __importDefault(require(a498_0x14a2e7(0x1f7))),
  UpdateDialogChatBotsServices = async ({
    quickAnswerData: _0x2350c6,
    quickAnswerId: _0x5b8d57
  }) => {
    const _0x33bb0d = a498_0x14a2e7,
      {
        awaiting: _0x20f839,
        contactId: _0x317ec1,
        chatbotId: _0xddf34d
      } = _0x2350c6,
      _0x35e8c5 = await DialogChatBots_1[_0x33bb0d(0x1ff)][_0x33bb0d(0x1f2)]({
        where: { id: _0x5b8d57 },
        attributes: ['id', _0x33bb0d(0x204), 'contactId', 'chatbotId']
      });
    if (!_0x35e8c5) throw new AppError_1['default'](_0x33bb0d(0x1f8), 0x194);
    return (
      await _0x35e8c5['update']({
        awaiting: _0x20f839,
        contactId: _0x317ec1,
        chatbotId: _0xddf34d
      }),
      await _0x35e8c5[_0x33bb0d(0x1fa)]({
        attributes: ['id', _0x33bb0d(0x204), _0x33bb0d(0x1f6), _0x33bb0d(0x1f4)]
      }),
      _0x35e8c5
    );
  };
exports[a498_0x14a2e7(0x1ff)] = UpdateDialogChatBotsServices;
