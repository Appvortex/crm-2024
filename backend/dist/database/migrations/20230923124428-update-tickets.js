function a243_0x9b67() {
  var _0x3b8f5f = [
    '587312dgZySq',
    'removeConstraint',
    '199696NTaOtD',
    '7szoYMI',
    '649534ZGBhMI',
    '18175fyySRz',
    '2rlyisj',
    '2721678XxlkHr',
    'query',
    '5942016xEpIyZ',
    '1062cvmNlA',
    '1967470hCuCBb',
    'Tickets',
    'ALTER\x20TABLE\x20public.\x22Tickets\x22\x20ADD\x20CONSTRAINT\x20\x22Tickets_integrationId_fkey\x22\x20FOREIGN\x20KEY\x20(\x22integrationId\x22)\x20REFERENCES\x20public.\x22QueueIntegrations\x22(id)\x20ON\x20DELETE\x20SET\x20NULL\x20ON\x20UPDATE\x20CASCADE;',
    'sequelize',
    'Tickets_integrationId_fkey'
  ];
  a243_0x9b67 = function () {
    return _0x3b8f5f;
  };
  return a243_0x9b67();
}
function a243_0x1650(_0x27803e, _0x5d1385) {
  var _0x9b67ed = a243_0x9b67();
  return (
    (a243_0x1650 = function (_0x165010, _0xd260c7) {
      _0x165010 = _0x165010 - 0xf6;
      var _0x4bcf7a = _0x9b67ed[_0x165010];
      return _0x4bcf7a;
    }),
    a243_0x1650(_0x27803e, _0x5d1385)
  );
}
(function (_0x2248e7, _0x4842f0) {
  var _0x1b1d17 = a243_0x1650,
    _0x4a381c = _0x2248e7();
  while (!![]) {
    try {
      var _0xb8909f =
        (parseInt(_0x1b1d17(0x100)) / 0x1) *
          (-parseInt(_0x1b1d17(0xfe)) / 0x2) +
        parseInt(_0x1b1d17(0x101)) / 0x3 +
        -parseInt(_0x1b1d17(0xfc)) / 0x4 +
        (-parseInt(_0x1b1d17(0xff)) / 0x5) *
          (-parseInt(_0x1b1d17(0x104)) / 0x6) +
        (parseInt(_0x1b1d17(0xfd)) / 0x7) * (parseInt(_0x1b1d17(0xfa)) / 0x8) +
        -parseInt(_0x1b1d17(0x103)) / 0x9 +
        parseInt(_0x1b1d17(0x105)) / 0xa;
      if (_0xb8909f === _0x4842f0) break;
      else _0x4a381c['push'](_0x4a381c['shift']());
    } catch (_0x5d99a9) {
      _0x4a381c['push'](_0x4a381c['shift']());
    }
  }
})(a243_0x9b67, 0x7092c),
  (module['exports'] = {
    up: async (_0x4c222e, _0x2f19c5) => {
      var _0x3be01b = a243_0x1650;
      await _0x4c222e[_0x3be01b(0xfb)](_0x3be01b(0xf6), _0x3be01b(0xf9)),
        await _0x4c222e[_0x3be01b(0xf8)][_0x3be01b(0x102)](_0x3be01b(0xf7));
    },
    down: async (_0x362ac9, _0x1fd381) => {
      var _0x4aeeb0 = a243_0x1650;
      await _0x362ac9[_0x4aeeb0(0xfb)]('Tickets', _0x4aeeb0(0xf9)),
        await _0x362ac9[_0x4aeeb0(0xf8)][_0x4aeeb0(0x102)](_0x4aeeb0(0xf7));
    }
  });
