'use strict';
var a398_0x30ce64 = a398_0x467a;
(function (_0x55f341, _0x17bc94) {
  var _0x17e074 = a398_0x467a,
    _0x2a29a6 = _0x55f341();
  while (!![]) {
    try {
      var _0x1ebd0 =
        -parseInt(_0x17e074(0x1f4)) / 0x1 +
        (-parseInt(_0x17e074(0x1eb)) / 0x2) *
          (parseInt(_0x17e074(0x1e7)) / 0x3) +
        -parseInt(_0x17e074(0x1dd)) / 0x4 +
        (parseInt(_0x17e074(0x1d9)) / 0x5) *
          (-parseInt(_0x17e074(0x1de)) / 0x6) +
        -parseInt(_0x17e074(0x1e9)) / 0x7 +
        -parseInt(_0x17e074(0x1e5)) / 0x8 +
        parseInt(_0x17e074(0x1e0)) / 0x9;
      if (_0x1ebd0 === _0x17bc94) break;
      else _0x2a29a6['push'](_0x2a29a6['shift']());
    } catch (_0x3e0fb6) {
      _0x2a29a6['push'](_0x2a29a6['shift']());
    }
  }
})(a398_0x5f25, 0x8e085);
function a398_0x5f25() {
  var _0x1c5c7c = [
    '121885jpzpHe',
    '__importDefault',
    'configurable',
    '__importStar',
    '540988LFsnvR',
    '42XnXCtR',
    'create',
    '33279453jgACyK',
    'default',
    '/ticket-notes/list',
    'get',
    '/ticket-notes/:id',
    '7501648jAgiZA',
    'defineProperty',
    '3CFSCWj',
    'call',
    '364931dDpvrs',
    '__esModule',
    '1614542rgYamV',
    'remove',
    'update',
    '../middleware/isAuth',
    'prototype',
    'delete',
    '/ticket-notes',
    'Router',
    'express',
    '1012956xtqgVi',
    'getOwnPropertyDescriptor',
    '__createBinding'
  ];
  a398_0x5f25 = function () {
    return _0x1c5c7c;
  };
  return a398_0x5f25();
}
var __createBinding =
    (this && this[a398_0x30ce64(0x1d8)]) ||
    (Object[a398_0x30ce64(0x1df)]
      ? function (_0x1e6d61, _0x394a66, _0x5f019f, _0x51d55d) {
          var _0x54e4e2 = a398_0x30ce64;
          if (_0x51d55d === undefined) _0x51d55d = _0x5f019f;
          var _0x16d7dd = Object[_0x54e4e2(0x1d7)](_0x394a66, _0x5f019f);
          (!_0x16d7dd ||
            ('get' in _0x16d7dd
              ? !_0x394a66['__esModule']
              : _0x16d7dd['writable'] || _0x16d7dd[_0x54e4e2(0x1db)])) &&
            (_0x16d7dd = {
              enumerable: !![],
              get: function () {
                return _0x394a66[_0x5f019f];
              }
            }),
            Object[_0x54e4e2(0x1e6)](_0x1e6d61, _0x51d55d, _0x16d7dd);
        }
      : function (_0x172098, _0x217e94, _0x245b58, _0xbaefe6) {
          if (_0xbaefe6 === undefined) _0xbaefe6 = _0x245b58;
          _0x172098[_0xbaefe6] = _0x217e94[_0x245b58];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object[a398_0x30ce64(0x1df)]
      ? function (_0x27ea8a, _0x1948f0) {
          Object['defineProperty'](_0x27ea8a, 'default', {
            enumerable: !![],
            value: _0x1948f0
          });
        }
      : function (_0x55107c, _0x15dcdf) {
          var _0x4318df = a398_0x30ce64;
          _0x55107c[_0x4318df(0x1e1)] = _0x15dcdf;
        }),
  __importStar =
    (this && this[a398_0x30ce64(0x1dc)]) ||
    function (_0x149840) {
      var _0x32488a = a398_0x30ce64;
      if (_0x149840 && _0x149840[_0x32488a(0x1ea)]) return _0x149840;
      var _0x244f05 = {};
      if (_0x149840 != null) {
        for (var _0x5b1ae3 in _0x149840)
          if (
            _0x5b1ae3 !== _0x32488a(0x1e1) &&
            Object[_0x32488a(0x1ef)]['hasOwnProperty'][_0x32488a(0x1e8)](
              _0x149840,
              _0x5b1ae3
            )
          )
            __createBinding(_0x244f05, _0x149840, _0x5b1ae3);
      }
      return __setModuleDefault(_0x244f05, _0x149840), _0x244f05;
    },
  __importDefault =
    (this && this[a398_0x30ce64(0x1da)]) ||
    function (_0x35a6cb) {
      return _0x35a6cb && _0x35a6cb['__esModule']
        ? _0x35a6cb
        : { default: _0x35a6cb };
    };
function a398_0x467a(_0x2b0d95, _0x5805d3) {
  var _0x5f2584 = a398_0x5f25();
  return (
    (a398_0x467a = function (_0x467ae3, _0x290d59) {
      _0x467ae3 = _0x467ae3 - 0x1d7;
      var _0x47b8e8 = _0x5f2584[_0x467ae3];
      return _0x47b8e8;
    }),
    a398_0x467a(_0x2b0d95, _0x5805d3)
  );
}
Object['defineProperty'](exports, '__esModule', { value: !![] });
const express_1 = __importDefault(require(a398_0x30ce64(0x1f3))),
  isAuth_1 = __importDefault(require(a398_0x30ce64(0x1ee))),
  TicketNoteController = __importStar(
    require('../controllers/TicketNoteController')
  ),
  ticketNoteRoutes = express_1[a398_0x30ce64(0x1e1)][a398_0x30ce64(0x1f2)]();
ticketNoteRoutes['get'](
  a398_0x30ce64(0x1e2),
  isAuth_1[a398_0x30ce64(0x1e1)],
  TicketNoteController['findFilteredList']
),
  ticketNoteRoutes[a398_0x30ce64(0x1e3)](
    a398_0x30ce64(0x1f1),
    isAuth_1[a398_0x30ce64(0x1e1)],
    TicketNoteController['index']
  ),
  ticketNoteRoutes['get'](
    a398_0x30ce64(0x1e4),
    isAuth_1[a398_0x30ce64(0x1e1)],
    TicketNoteController['show']
  ),
  ticketNoteRoutes['post'](
    '/ticket-notes',
    isAuth_1[a398_0x30ce64(0x1e1)],
    TicketNoteController['store']
  ),
  ticketNoteRoutes['put'](
    a398_0x30ce64(0x1e4),
    isAuth_1[a398_0x30ce64(0x1e1)],
    TicketNoteController[a398_0x30ce64(0x1ed)]
  ),
  ticketNoteRoutes[a398_0x30ce64(0x1f0)](
    a398_0x30ce64(0x1e4),
    isAuth_1[a398_0x30ce64(0x1e1)],
    TicketNoteController[a398_0x30ce64(0x1ec)]
  ),
  (exports[a398_0x30ce64(0x1e1)] = ticketNoteRoutes);
