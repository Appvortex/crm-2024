'use strict';
const a550_0x537bb7 = a550_0x5ee2;
(function (_0x3bd539, _0x3daf1b) {
  const _0x5d8173 = a550_0x5ee2,
    _0x248ec1 = _0x3bd539();
  while (!![]) {
    try {
      const _0x3b6422 =
        parseInt(_0x5d8173(0x100)) / 0x1 +
        (parseInt(_0x5d8173(0x103)) / 0x2) *
          (-parseInt(_0x5d8173(0xf0)) / 0x3) +
        (-parseInt(_0x5d8173(0xe8)) / 0x4) * (parseInt(_0x5d8173(0xfc)) / 0x5) +
        -parseInt(_0x5d8173(0xee)) / 0x6 +
        (parseInt(_0x5d8173(0xf5)) / 0x7) * (parseInt(_0x5d8173(0xe5)) / 0x8) +
        (-parseInt(_0x5d8173(0x104)) / 0x9) *
          (parseInt(_0x5d8173(0xf6)) / 0xa) +
        parseInt(_0x5d8173(0xea)) / 0xb;
      if (_0x3b6422 === _0x3daf1b) break;
      else _0x248ec1['push'](_0x248ec1['shift']());
    } catch (_0x1aa225) {
      _0x248ec1['push'](_0x248ec1['shift']());
    }
  }
})(a550_0x238b, 0x8a264);
var __createBinding =
    (this && this[a550_0x537bb7(0x107)]) ||
    (Object[a550_0x537bb7(0xe9)]
      ? function (_0x3283ab, _0x262ee2, _0x279c30, _0x170d07) {
          const _0x366cbf = a550_0x537bb7;
          if (_0x170d07 === undefined) _0x170d07 = _0x279c30;
          var _0x26888 = Object[_0x366cbf(0x109)](_0x262ee2, _0x279c30);
          (!_0x26888 ||
            (_0x366cbf(0x108) in _0x26888
              ? !_0x262ee2[_0x366cbf(0xf4)]
              : _0x26888[_0x366cbf(0xf9)] || _0x26888[_0x366cbf(0xff)])) &&
            (_0x26888 = {
              enumerable: !![],
              get: function () {
                return _0x262ee2[_0x279c30];
              }
            }),
            Object[_0x366cbf(0xe3)](_0x3283ab, _0x170d07, _0x26888);
        }
      : function (_0x390c50, _0x3a5f5a, _0x195d90, _0x42005f) {
          if (_0x42005f === undefined) _0x42005f = _0x195d90;
          _0x390c50[_0x42005f] = _0x3a5f5a[_0x195d90];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object['create']
      ? function (_0x116008, _0x25a107) {
          const _0x51fe07 = a550_0x537bb7;
          Object[_0x51fe07(0xe3)](_0x116008, _0x51fe07(0x102), {
            enumerable: !![],
            value: _0x25a107
          });
        }
      : function (_0x55c5ed, _0x5dcbd6) {
          const _0x1af281 = a550_0x537bb7;
          _0x55c5ed[_0x1af281(0x102)] = _0x5dcbd6;
        }),
  __importStar =
    (this && this[a550_0x537bb7(0xf1)]) ||
    function (_0x790aa4) {
      const _0x575056 = a550_0x537bb7;
      if (_0x790aa4 && _0x790aa4['__esModule']) return _0x790aa4;
      var _0x432090 = {};
      if (_0x790aa4 != null) {
        for (var _0x40068e in _0x790aa4)
          if (
            _0x40068e !== _0x575056(0x102) &&
            Object[_0x575056(0xe4)][_0x575056(0x101)][_0x575056(0xed)](
              _0x790aa4,
              _0x40068e
            )
          )
            __createBinding(_0x432090, _0x790aa4, _0x40068e);
      }
      return __setModuleDefault(_0x432090, _0x790aa4), _0x432090;
    };
Object['defineProperty'](exports, a550_0x537bb7(0xf4), { value: !![] }),
  (exports[a550_0x537bb7(0xeb)] = void 0x0);
const Sentry = __importStar(require(a550_0x537bb7(0xf2))),
  logger_1 = require(a550_0x537bb7(0xe2));
async function detectIntent(
  _0x372e8d,
  _0x4b3672,
  _0x41d6bd,
  _0x39f42e,
  _0xc2fe5d
) {
  const _0x13f166 = a550_0x537bb7,
    _0x5b2a5e = _0x372e8d[_0x13f166(0xfd)](_0x4b3672, _0x41d6bd),
    _0x7edafb = {
      session: _0x5b2a5e,
      queryInput: { text: { text: _0x39f42e, languageCode: _0xc2fe5d } }
    },
    _0x12b6ca = await _0x372e8d['detectIntent'](_0x7edafb);
  return _0x12b6ca[0x0];
}
async function detectAudioIntent(
  _0x56bb23,
  _0xbf16f7,
  _0x522b4e,
  _0x5ea917,
  _0x5f4fac
) {
  const _0x173d40 = a550_0x537bb7,
    _0x3c5ce2 = _0x56bb23[_0x173d40(0xfd)](_0xbf16f7, _0x522b4e),
    _0x4780f9 = 0x6,
    _0x21a343 = 0x3e80,
    _0x57d560 = {
      session: _0x3c5ce2,
      queryInput: {
        audioConfig: {
          audioEncoding: _0x4780f9,
          sampleRateHertz: _0x21a343,
          languageCode: _0x5ea917
        }
      },
      inputAudio: _0x5f4fac
    },
    _0x47ed90 = await _0x56bb23[_0x173d40(0xfe)](_0x57d560);
  return _0x47ed90[0x0];
}
function a550_0x238b() {
  const _0x1d3853 = [
    '__createBinding',
    'get',
    'getOwnPropertyDescriptor',
    '../../utils/logger',
    'defineProperty',
    'prototype',
    '40xptEGg',
    'diagnosticInfo',
    'end_conversation',
    '64CoKgqM',
    'create',
    '7855056xFnAMl',
    'queryDialogFlow',
    'fulfillmentMessages',
    'call',
    '899190FGRdNH',
    'boolValue',
    '237dYcEXb',
    '__importStar',
    '@sentry/node',
    'length',
    '__esModule',
    '1133153CWJgBs',
    '10CyguRJ',
    'error',
    'parameters',
    'writable',
    'logger',
    'Error\x20handling\x20whatsapp\x20message:\x20Err:\x20',
    '13210cNbKPe',
    'projectAgentSessionPath',
    'detectIntent',
    'configurable',
    '137991AaqZkl',
    'hasOwnProperty',
    'default',
    '4362KXiEId',
    '6580674UqZRqJ',
    'queryResult',
    'fields'
  ];
  a550_0x238b = function () {
    return _0x1d3853;
  };
  return a550_0x238b();
}
async function queryDialogFlow(
  _0x4a0810,
  _0x261519,
  _0x44d3cd,
  _0x1b1dd5,
  _0x2422e9,
  _0x379e31
) {
  const _0x273065 = a550_0x537bb7;
  let _0x5b9d4b;
  if (_0x379e31) {
    try {
      _0x5b9d4b = await detectAudioIntent(
        _0x4a0810,
        _0x261519,
        _0x44d3cd,
        _0x2422e9,
        _0x379e31
      );
      const _0xfdcce = _0x5b9d4b?.['queryResult']?.[_0x273065(0xec)],
        _0xc11943 =
          _0x5b9d4b?.[_0x273065(0x105)]?.[_0x273065(0xe6)]?.[
            _0x273065(0x106)
          ]?.[_0x273065(0xe7)]?.[_0x273065(0xef)],
        _0x57f27c =
          _0x5b9d4b?.['queryResult']?.[_0x273065(0xf8)]?.[_0x273065(0x106)],
        _0x52593f = _0x5b9d4b?.['outputAudio'];
      return _0xfdcce?.[_0x273065(0xf3)] === 0x0
        ? null
        : {
            responses: _0xfdcce,
            endConversation: _0xc11943,
            parameters: _0x57f27c,
            encodedAudio: _0x52593f
          };
    } catch (_0x22eb25) {
      Sentry['captureException'](_0x22eb25),
        logger_1['logger'][_0x273065(0xf7)](_0x273065(0xfb) + _0x22eb25);
    }
    return null;
  } else {
    try {
      _0x5b9d4b = await detectIntent(
        _0x4a0810,
        _0x261519,
        _0x44d3cd,
        _0x1b1dd5,
        _0x2422e9
      );
      const _0x69f3b4 = _0x5b9d4b?.[_0x273065(0x105)]?.[_0x273065(0xec)],
        _0x287505 =
          _0x5b9d4b?.[_0x273065(0x105)]?.[_0x273065(0xe6)]?.[
            _0x273065(0x106)
          ]?.['end_conversation']?.[_0x273065(0xef)],
        _0x296edd =
          _0x5b9d4b?.[_0x273065(0x105)]?.[_0x273065(0xf8)]?.[_0x273065(0x106)],
        _0x259696 = _0x5b9d4b?.['outputAudio'];
      return _0x69f3b4?.['length'] === 0x0
        ? null
        : {
            responses: _0x69f3b4,
            endConversation: _0x287505,
            parameters: _0x296edd,
            encodedAudio: _0x259696
          };
    } catch (_0x5652d1) {
      Sentry['captureException'](_0x5652d1),
        logger_1[_0x273065(0xfa)][_0x273065(0xf7)](
          'Error\x20handling\x20whatsapp\x20message:\x20Err:\x20' + _0x5652d1
        );
    }
    return null;
  }
}
function a550_0x5ee2(_0x1199d0, _0x5919e3) {
  const _0x238b04 = a550_0x238b();
  return (
    (a550_0x5ee2 = function (_0x5ee292, _0x11704c) {
      _0x5ee292 = _0x5ee292 - 0xe2;
      let _0x50d953 = _0x238b04[_0x5ee292];
      return _0x50d953;
    }),
    a550_0x5ee2(_0x1199d0, _0x5919e3)
  );
}
exports[a550_0x537bb7(0xeb)] = queryDialogFlow;
