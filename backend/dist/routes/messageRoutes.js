'use strict';
var a386_0x118623 = a386_0x142a;
(function (_0x5cf110, _0x335cb7) {
  var _0x3cedf0 = a386_0x142a,
    _0x4d695b = _0x5cf110();
  while (!![]) {
    try {
      var _0x3714b1 =
        (-parseInt(_0x3cedf0(0x19b)) / 0x1) *
          (parseInt(_0x3cedf0(0x193)) / 0x2) +
        -parseInt(_0x3cedf0(0x18f)) / 0x3 +
        parseInt(_0x3cedf0(0x1a4)) / 0x4 +
        -parseInt(_0x3cedf0(0x19e)) / 0x5 +
        parseInt(_0x3cedf0(0x1b3)) / 0x6 +
        (parseInt(_0x3cedf0(0x19d)) / 0x7) *
          (parseInt(_0x3cedf0(0x1a1)) / 0x8) +
        parseInt(_0x3cedf0(0x1a8)) / 0x9;
      if (_0x3714b1 === _0x335cb7) break;
      else _0x4d695b['push'](_0x4d695b['shift']());
    } catch (_0x4a0d16) {
      _0x4d695b['push'](_0x4d695b['shift']());
    }
  }
})(a386_0x5f23, 0x4085f);
var __createBinding =
    (this && this[a386_0x118623(0x1a5)]) ||
    (Object[a386_0x118623(0x1a3)]
      ? function (_0x6b0b5c, _0x24ac4c, _0x9390f7, _0x4686da) {
          var _0x2af8d1 = a386_0x118623;
          if (_0x4686da === undefined) _0x4686da = _0x9390f7;
          var _0x32d5d6 = Object[_0x2af8d1(0x1ae)](_0x24ac4c, _0x9390f7);
          (!_0x32d5d6 ||
            ('get' in _0x32d5d6
              ? !_0x24ac4c[_0x2af8d1(0x18d)]
              : _0x32d5d6[_0x2af8d1(0x1a6)] || _0x32d5d6[_0x2af8d1(0x1af)])) &&
            (_0x32d5d6 = {
              enumerable: !![],
              get: function () {
                return _0x24ac4c[_0x9390f7];
              }
            }),
            Object[_0x2af8d1(0x199)](_0x6b0b5c, _0x4686da, _0x32d5d6);
        }
      : function (_0x240453, _0x197ef2, _0x282543, _0x2feb05) {
          if (_0x2feb05 === undefined) _0x2feb05 = _0x282543;
          _0x240453[_0x2feb05] = _0x197ef2[_0x282543];
        }),
  __setModuleDefault =
    (this && this['__setModuleDefault']) ||
    (Object['create']
      ? function (_0x44ec0d, _0x3e8d59) {
          var _0x588c1b = a386_0x118623;
          Object[_0x588c1b(0x199)](_0x44ec0d, 'default', {
            enumerable: !![],
            value: _0x3e8d59
          });
        }
      : function (_0xd8d530, _0x314aa8) {
          var _0x561b4c = a386_0x118623;
          _0xd8d530[_0x561b4c(0x197)] = _0x314aa8;
        }),
  __importStar =
    (this && this['__importStar']) ||
    function (_0x19af51) {
      var _0x19b6d3 = a386_0x118623;
      if (_0x19af51 && _0x19af51[_0x19b6d3(0x18d)]) return _0x19af51;
      var _0x30afe0 = {};
      if (_0x19af51 != null) {
        for (var _0x505084 in _0x19af51)
          if (
            _0x505084 !== _0x19b6d3(0x197) &&
            Object[_0x19b6d3(0x19c)][_0x19b6d3(0x190)]['call'](
              _0x19af51,
              _0x505084
            )
          )
            __createBinding(_0x30afe0, _0x19af51, _0x505084);
      }
      return __setModuleDefault(_0x30afe0, _0x19af51), _0x30afe0;
    },
  __importDefault =
    (this && this['__importDefault']) ||
    function (_0x4a034e) {
      return _0x4a034e && _0x4a034e['__esModule']
        ? _0x4a034e
        : { default: _0x4a034e };
    };
Object['defineProperty'](exports, a386_0x118623(0x18d), { value: !![] });
function a386_0x142a(_0x3bc68, _0x149a70) {
  var _0x5f23ec = a386_0x5f23();
  return (
    (a386_0x142a = function (_0x142a54, _0x2dcd33) {
      _0x142a54 = _0x142a54 - 0x18d;
      var _0x2d5221 = _0x5f23ec[_0x142a54];
      return _0x2d5221;
    }),
    a386_0x142a(_0x3bc68, _0x149a70)
  );
}
const express_1 = require(a386_0x118623(0x194)),
  multer_1 = __importDefault(require(a386_0x118623(0x1aa))),
  isAuth_1 = __importDefault(require(a386_0x118623(0x1a0))),
  upload_1 = __importDefault(require(a386_0x118623(0x1a9))),
  MessageController = __importStar(require(a386_0x118623(0x1ac))),
  messageRoutes = (0x0, express_1[a386_0x118623(0x1b2)])(),
  upload = (0x0, multer_1[a386_0x118623(0x197)])(
    upload_1[a386_0x118623(0x197)]
  );
messageRoutes[a386_0x118623(0x1b0)](
  a386_0x118623(0x19f),
  isAuth_1[a386_0x118623(0x197)],
  MessageController[a386_0x118623(0x1ad)]
),
  messageRoutes[a386_0x118623(0x191)](
    a386_0x118623(0x19f),
    isAuth_1[a386_0x118623(0x197)],
    upload[a386_0x118623(0x18e)](a386_0x118623(0x19a)),
    MessageController['store']
  ),
  messageRoutes['post'](
    a386_0x118623(0x198),
    isAuth_1[a386_0x118623(0x197)],
    MessageController[a386_0x118623(0x1a7)]
  ),
  messageRoutes[a386_0x118623(0x196)](
    a386_0x118623(0x1a2),
    isAuth_1[a386_0x118623(0x197)],
    MessageController[a386_0x118623(0x1b1)]
  ),
  messageRoutes['get'](
    a386_0x118623(0x195),
    isAuth_1[a386_0x118623(0x197)],
    MessageController['allMe']
  ),
  messageRoutes[a386_0x118623(0x191)](
    a386_0x118623(0x192),
    isAuth_1['default'],
    MessageController[a386_0x118623(0x1ab)]
  ),
  (exports['default'] = messageRoutes);
function a386_0x5f23() {
  var _0x47a3fc = [
    '/forwardmessage',
    'defineProperty',
    'medias',
    '4317GXEVEG',
    'prototype',
    '7RFRcbq',
    '54710zFhLOB',
    '/messages/:ticketId',
    '../middleware/isAuth',
    '771784Ihktub',
    '/messages/:messageId',
    'create',
    '531480WwqrjT',
    '__createBinding',
    'writable',
    'forwardmessage',
    '3425040zjLcVe',
    '../config/upload',
    'multer',
    'forwardMessage',
    '../controllers/MessageController',
    'index',
    'getOwnPropertyDescriptor',
    'configurable',
    'get',
    'remove',
    'Router',
    '2406018eXviXu',
    '__esModule',
    'array',
    '1442922ckWIxh',
    'hasOwnProperty',
    'post',
    '/message/forward',
    '118FKMKRu',
    'express',
    '/messages-allMe',
    'delete',
    'default'
  ];
  a386_0x5f23 = function () {
    return _0x47a3fc;
  };
  return a386_0x5f23();
}
