'use strict';
const a38_0x1afe74 = a38_0xfd3d;
(function (_0x341f12, _0x3066b9) {
  const _0xa060e0 = a38_0xfd3d,
    _0x4fe387 = _0x341f12();
  while (!![]) {
    try {
      const _0x545a84 =
        (-parseInt(_0xa060e0(0xa6)) / 0x1) * (parseInt(_0xa060e0(0x94)) / 0x2) +
        -parseInt(_0xa060e0(0xb1)) / 0x3 +
        -parseInt(_0xa060e0(0x89)) / 0x4 +
        (-parseInt(_0xa060e0(0xae)) / 0x5) * (parseInt(_0xa060e0(0x9a)) / 0x6) +
        -parseInt(_0xa060e0(0x86)) / 0x7 +
        (parseInt(_0xa060e0(0x85)) / 0x8) * (parseInt(_0xa060e0(0xa9)) / 0x9) +
        parseInt(_0xa060e0(0xa0)) / 0xa;
      if (_0x545a84 === _0x3066b9) break;
      else _0x4fe387['push'](_0x4fe387['shift']());
    } catch (_0x806e44) {
      _0x4fe387['push'](_0x4fe387['shift']());
    }
  }
})(a38_0x46c0, 0x6be39);
var __createBinding =
    (this && this[a38_0x1afe74(0xaf)]) ||
    (Object['create']
      ? function (_0x2b64e9, _0x4959cc, _0x58d4cf, _0x39397e) {
          const _0x42828a = a38_0x1afe74;
          if (_0x39397e === undefined) _0x39397e = _0x58d4cf;
          var _0x52ba6a = Object['getOwnPropertyDescriptor'](
            _0x4959cc,
            _0x58d4cf
          );
          (!_0x52ba6a ||
            (_0x42828a(0x8d) in _0x52ba6a
              ? !_0x4959cc[_0x42828a(0x9c)]
              : _0x52ba6a[_0x42828a(0xb3)] || _0x52ba6a[_0x42828a(0x98)])) &&
            (_0x52ba6a = {
              enumerable: !![],
              get: function () {
                return _0x4959cc[_0x58d4cf];
              }
            }),
            Object[_0x42828a(0x8a)](_0x2b64e9, _0x39397e, _0x52ba6a);
        }
      : function (_0x3c52a0, _0x4aa223, _0x321d50, _0x32a5d5) {
          if (_0x32a5d5 === undefined) _0x32a5d5 = _0x321d50;
          _0x3c52a0[_0x32a5d5] = _0x4aa223[_0x321d50];
        }),
  __setModuleDefault =
    (this && this[a38_0x1afe74(0x92)]) ||
    (Object[a38_0x1afe74(0xa3)]
      ? function (_0x1ce85b, _0x315fb7) {
          const _0x287aa2 = a38_0x1afe74;
          Object[_0x287aa2(0x8a)](_0x1ce85b, _0x287aa2(0x8b), {
            enumerable: !![],
            value: _0x315fb7
          });
        }
      : function (_0x2fdb22, _0xa7bd62) {
          _0x2fdb22['default'] = _0xa7bd62;
        }),
  __importStar =
    (this && this['__importStar']) ||
    function (_0x53e06f) {
      const _0x58d596 = a38_0x1afe74;
      if (_0x53e06f && _0x53e06f[_0x58d596(0x9c)]) return _0x53e06f;
      var _0x1b4920 = {};
      if (_0x53e06f != null) {
        for (var _0x112510 in _0x53e06f)
          if (
            _0x112510 !== _0x58d596(0x8b) &&
            Object[_0x58d596(0xaa)][_0x58d596(0x9b)][_0x58d596(0x95)](
              _0x53e06f,
              _0x112510
            )
          )
            __createBinding(_0x1b4920, _0x53e06f, _0x112510);
      }
      return __setModuleDefault(_0x1b4920, _0x53e06f), _0x1b4920;
    },
  __importDefault =
    (this && this[a38_0x1afe74(0x99)]) ||
    function (_0x87f043) {
      const _0x43de29 = a38_0x1afe74;
      return _0x87f043 && _0x87f043[_0x43de29(0x9c)]
        ? _0x87f043
        : { default: _0x87f043 };
    };
Object[a38_0x1afe74(0x8a)](exports, a38_0x1afe74(0x9c), { value: !![] }),
  (exports[a38_0x1afe74(0xa1)] =
    exports['remove'] =
    exports[a38_0x1afe74(0xac)] =
    exports['show'] =
    exports['store'] =
    exports[a38_0x1afe74(0xb0)] =
    exports[a38_0x1afe74(0x96)] =
      void 0x0);
const Yup = __importStar(require('yup')),
  AppError_1 = __importDefault(require('../errors/AppError')),
  ListTicketNotesService_1 = __importDefault(require(a38_0x1afe74(0x9f))),
  CreateTicketNoteService_1 = __importDefault(
    require('../services/TicketNoteService/CreateTicketNoteService')
  ),
  UpdateTicketNoteService_1 = __importDefault(require(a38_0x1afe74(0xa8))),
  ShowTicketNoteService_1 = __importDefault(require(a38_0x1afe74(0x9e))),
  FindAllTicketNotesService_1 = __importDefault(require(a38_0x1afe74(0xa4))),
  DeleteTicketNoteService_1 = __importDefault(require(a38_0x1afe74(0x88))),
  FindNotesByContactIdAndTicketId_1 = __importDefault(
    require('../services/TicketNoteService/FindNotesByContactIdAndTicketId')
  ),
  index = async (_0x20959c, _0xaff413) => {
    const _0x32b9bc = a38_0x1afe74,
      { searchParam: _0x3a81c2, pageNumber: _0x467631 } =
        _0x20959c[_0x32b9bc(0x84)],
      {
        ticketNotes: _0x45e291,
        count: _0x13cddf,
        hasMore: _0x25c7a6
      } = await (0x0, ListTicketNotesService_1[_0x32b9bc(0x8b)])({
        searchParam: _0x3a81c2,
        pageNumber: _0x467631
      });
    return _0xaff413[_0x32b9bc(0xa5)]({
      ticketNotes: _0x45e291,
      count: _0x13cddf,
      hasMore: _0x25c7a6
    });
  };
exports['index'] = index;
const list = async (_0xcae742, _0x4197fc) => {
  const _0x7cfa27 = a38_0x1afe74,
    _0x12592a = await (0x0, FindAllTicketNotesService_1['default'])();
  return _0x4197fc[_0x7cfa27(0xa2)](0xc8)[_0x7cfa27(0xa5)](_0x12592a);
};
exports[a38_0x1afe74(0xb0)] = list;
function a38_0xfd3d(_0x109793, _0x2c40f7) {
  const _0x46c0cf = a38_0x46c0();
  return (
    (a38_0xfd3d = function (_0xfd3dbe, _0x3f111a) {
      _0xfd3dbe = _0xfd3dbe - 0x84;
      let _0x422cf6 = _0x46c0cf[_0xfd3dbe];
      return _0x422cf6;
    }),
    a38_0xfd3d(_0x109793, _0x2c40f7)
  );
}
const store = async (_0x3cfe7a, _0x3aab21) => {
  const _0x4761ad = a38_0x1afe74,
    _0x1c01e5 = _0x3cfe7a[_0x4761ad(0xa7)],
    { id: _0x42310a } = _0x3cfe7a[_0x4761ad(0x93)],
    _0x33b20e = Yup[_0x4761ad(0x9d)]()[_0x4761ad(0xad)]({
      note: Yup[_0x4761ad(0x8c)]()['required']()
    });
  try {
    await _0x33b20e[_0x4761ad(0x87)](_0x1c01e5);
  } catch (_0x5ebc38) {
    throw new AppError_1['default'](_0x5ebc38[_0x4761ad(0xb2)]);
  }
  const _0x3ab546 = await (0x0, CreateTicketNoteService_1[_0x4761ad(0x8b)])({
    ..._0x1c01e5,
    userId: _0x42310a
  });
  return _0x3aab21[_0x4761ad(0xa2)](0xc8)[_0x4761ad(0xa5)](_0x3ab546);
};
exports[a38_0x1afe74(0x91)] = store;
const show = async (_0x65c094, _0x564d49) => {
  const _0x36460c = a38_0x1afe74,
    { id: _0x49c91b } = _0x65c094[_0x36460c(0xab)],
    _0x381770 = await (0x0, ShowTicketNoteService_1[_0x36460c(0x8b)])(
      _0x49c91b
    );
  return _0x564d49[_0x36460c(0xa2)](0xc8)[_0x36460c(0xa5)](_0x381770);
};
exports[a38_0x1afe74(0x8e)] = show;
const update = async (_0x3b9dc3, _0x5e57d6) => {
  const _0x4b69d0 = a38_0x1afe74,
    _0x10820e = _0x3b9dc3[_0x4b69d0(0xa7)],
    _0x3de6df = Yup[_0x4b69d0(0x9d)]()[_0x4b69d0(0xad)]({
      note: Yup[_0x4b69d0(0x8c)]()
    });
  try {
    await _0x3de6df[_0x4b69d0(0x87)](_0x10820e);
  } catch (_0x4d2720) {
    throw new AppError_1['default'](_0x4d2720[_0x4b69d0(0xb2)]);
  }
  const _0x192fcb = await (0x0, UpdateTicketNoteService_1['default'])(
    _0x10820e
  );
  return _0x5e57d6[_0x4b69d0(0xa2)](0xc8)[_0x4b69d0(0xa5)](_0x192fcb);
};
function a38_0x46c0() {
  const _0x36b7da = [
    'writable',
    'query',
    '360IMnQTY',
    '6129788RyZTsv',
    'validate',
    '../services/TicketNoteService/DeleteTicketNoteService',
    '1389964SQaCws',
    'defineProperty',
    'default',
    'string',
    'get',
    'show',
    'ERR_NO_PERMISSION',
    'remove',
    'store',
    '__setModuleDefault',
    'user',
    '2qcWmxJ',
    'call',
    'index',
    'Observação\x20removida',
    'configurable',
    '__importDefault',
    '3802494vKQQCM',
    'hasOwnProperty',
    '__esModule',
    'object',
    '../services/TicketNoteService/ShowTicketNoteService',
    '../services/TicketNoteService/ListTicketNotesService',
    '33189220rVBiJl',
    'findFilteredList',
    'status',
    'create',
    '../services/TicketNoteService/FindAllTicketNotesService',
    'json',
    '857607QcxVQO',
    'body',
    '../services/TicketNoteService/UpdateTicketNoteService',
    '60651dknmFz',
    'prototype',
    'params',
    'update',
    'shape',
    '5lnQNgS',
    '__createBinding',
    'list',
    '1397199qapGmy',
    'message'
  ];
  a38_0x46c0 = function () {
    return _0x36b7da;
  };
  return a38_0x46c0();
}
exports[a38_0x1afe74(0xac)] = update;
const remove = async (_0x3d40a3, _0x40db32) => {
  const _0x1bbc09 = a38_0x1afe74,
    { id: _0x3bcbdb } = _0x3d40a3[_0x1bbc09(0xab)];
  if (_0x3d40a3[_0x1bbc09(0x93)]['profile'] !== 'admin')
    throw new AppError_1[_0x1bbc09(0x8b)](_0x1bbc09(0x8f), 0x193);
  return (
    await (0x0, DeleteTicketNoteService_1[_0x1bbc09(0x8b)])(_0x3bcbdb),
    _0x40db32[_0x1bbc09(0xa2)](0xc8)[_0x1bbc09(0xa5)]({
      message: _0x1bbc09(0x97)
    })
  );
};
exports[a38_0x1afe74(0x90)] = remove;
const findFilteredList = async (_0x30df2e, _0x17c28b) => {
  const _0x560315 = a38_0x1afe74;
  try {
    const { contactId: _0x3f7e0c, ticketId: _0x5c68a4 } =
        _0x30df2e[_0x560315(0x84)],
      _0x2f57b3 = await (0x0, FindNotesByContactIdAndTicketId_1['default'])({
        contactId: _0x3f7e0c,
        ticketId: _0x5c68a4
      });
    return _0x17c28b[_0x560315(0xa2)](0xc8)[_0x560315(0xa5)](_0x2f57b3);
  } catch (_0x56e6f8) {
    return _0x17c28b[_0x560315(0xa2)](0x1f4)[_0x560315(0xa5)]({
      message: _0x56e6f8
    });
  }
};
exports[a38_0x1afe74(0xa1)] = findFilteredList;
