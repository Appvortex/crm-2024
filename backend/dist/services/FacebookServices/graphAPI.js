'use strict';
const a500_0x3c137d = a500_0x7830;
(function (_0x4e12f2, _0x2d1780) {
  const _0x389fda = a500_0x7830,
    _0x58f5b6 = _0x4e12f2();
  while (!![]) {
    try {
      const _0x49a58b =
        -parseInt(_0x389fda(0x206)) / 0x1 +
        (-parseInt(_0x389fda(0x217)) / 0x2) *
          (-parseInt(_0x389fda(0x201)) / 0x3) +
        -parseInt(_0x389fda(0x1f7)) / 0x4 +
        (parseInt(_0x389fda(0x209)) / 0x5) *
          (-parseInt(_0x389fda(0x1e7)) / 0x6) +
        (-parseInt(_0x389fda(0x21e)) / 0x7) *
          (parseInt(_0x389fda(0x212)) / 0x8) +
        parseInt(_0x389fda(0x1f2)) / 0x9 +
        parseInt(_0x389fda(0x20c)) / 0xa;
      if (_0x49a58b === _0x2d1780) break;
      else _0x58f5b6['push'](_0x58f5b6['shift']());
    } catch (_0x895c6b) {
      _0x58f5b6['push'](_0x58f5b6['shift']());
    }
  }
})(a500_0x1e26, 0x3eb5b);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x148b40) {
    const _0x6e466f = a500_0x7830;
    return _0x148b40 && _0x148b40[_0x6e466f(0x211)]
      ? _0x148b40
      : { default: _0x148b40 };
  };
Object[a500_0x3c137d(0x1f9)](exports, a500_0x3c137d(0x211), { value: !![] }),
  (exports[a500_0x3c137d(0x208)] =
    exports[a500_0x3c137d(0x1fd)] =
    exports[a500_0x3c137d(0x210)] =
    exports[a500_0x3c137d(0x21b)] =
    exports[a500_0x3c137d(0x214)] =
    exports[a500_0x3c137d(0x1e8)] =
    exports[a500_0x3c137d(0x21c)] =
    exports[a500_0x3c137d(0x1f1)] =
    exports['genText'] =
    exports[a500_0x3c137d(0x1fe)] =
    exports[a500_0x3c137d(0x202)] =
    exports[a500_0x3c137d(0x218)] =
    exports[a500_0x3c137d(0x1e4)] =
    exports['getAccessToken'] =
      void 0x0);
const axios_1 = __importDefault(require(a500_0x3c137d(0x220))),
  form_data_1 = __importDefault(require('form-data')),
  fs_1 = require('fs'),
  logger_1 = require(a500_0x3c137d(0x1e1)),
  formData = new form_data_1[a500_0x3c137d(0x21a)](),
  apiBase = _0x37a644 =>
    axios_1[a500_0x3c137d(0x21a)][a500_0x3c137d(0x1ee)]({
      baseURL: a500_0x3c137d(0x20b),
      params: { access_token: _0x37a644 }
    }),
  getAccessToken = async () => {
    const _0x98ae14 = a500_0x3c137d,
      { data: _0x1717ad } = await axios_1[_0x98ae14(0x21a)]['get'](
        _0x98ae14(0x1ef),
        {
          params: {
            client_id: process[_0x98ae14(0x1ff)]['FACEBOOK_APP_ID'],
            client_secret: process[_0x98ae14(0x1ff)][_0x98ae14(0x1e2)],
            grant_type: _0x98ae14(0x203)
          }
        }
      );
    return _0x1717ad[_0x98ae14(0x1f0)];
  };
function a500_0x7830(_0x3999d3, _0x1c2e59) {
  const _0x1e26b3 = a500_0x1e26();
  return (
    (a500_0x7830 = function (_0x78303d, _0x38f309) {
      _0x78303d = _0x78303d - 0x1e1;
      let _0x32fc65 = _0x1e26b3[_0x78303d];
      return _0x32fc65;
    }),
    a500_0x7830(_0x3999d3, _0x1c2e59)
  );
}
exports[a500_0x3c137d(0x1f4)] = getAccessToken;
const markSeen = async (_0x5e19f9, _0x4622a7) => {
  const _0x4567f1 = a500_0x3c137d;
  await apiBase(_0x4622a7)['post'](_0x5e19f9 + _0x4567f1(0x1f8), {
    recipient: { id: _0x5e19f9 },
    sender_action: _0x4567f1(0x1f3)
  });
};
exports['markSeen'] = markSeen;
const sendText = async (_0x5f417d, _0x36b06d, _0x5104b1) => {
  const _0x175f77 = a500_0x3c137d;
  try {
    const { data: _0x124b39 } = await apiBase(_0x5104b1)[_0x175f77(0x1ec)](
      _0x175f77(0x20e),
      { recipient: { id: _0x5f417d }, message: { text: '' + _0x36b06d } }
    );
    return _0x124b39;
  } catch (_0x557a5d) {
    console[_0x175f77(0x1e3)](_0x557a5d);
  }
};
exports['sendText'] = sendText;
function a500_0x1e26() {
  const _0xd7cdd5 = [
    'sendAttachmentFromUrl',
    'client_credentials',
    'ERR_FETCHING_FB_USER_TOKEN',
    'genText',
    '679Adrgba',
    'createReadStream',
    'removeApplcation',
    '1245nwiExo',
    '/accounts?fields=name,access_token,instagram_business_account{id,username,profile_picture_url,name}',
    'https://graph.facebook.com/v18.0/',
    '9721520HXTkks',
    'messaging_postbacks',
    'me/messages',
    'logger',
    'getSubscribedApps',
    '__esModule',
    '296MRkkdy',
    'message_reads',
    'subscribeApp',
    'get',
    'ERR_REMOVING_APP_FROM_PAGE',
    '2sDefgZ',
    'sendText',
    'recipient',
    'default',
    'unsubscribeApp',
    'getPageProfile',
    'message_echoes',
    '72317aXRUzF',
    'ERR_UNSUBSCRIBING_PAGE_TO_MESSAGE_WEBHOOKS',
    'axios',
    '../../utils/logger',
    'FACEBOOK_APP_SECRET',
    'log',
    'markSeen',
    'filedata',
    '/permissions',
    '9570OdjfQt',
    'profilePsid',
    'stringify',
    'ERR_SUBSCRIBING_PAGE_TO_MESSAGE_WEBHOOKS',
    'getHeaders',
    'post',
    '?access_token=',
    'create',
    'https://graph.facebook.com/v18.0/oauth/access_token',
    'access_token',
    'getProfile',
    '1754118yLsDTi',
    'mark_seen',
    'getAccessToken',
    'FACEBOOK_APP_ID',
    'ERR_FETCHING_FB_PAGES',
    '1146400DnEPNg',
    '/messages',
    'defineProperty',
    'delete',
    'data',
    'message',
    'getAccessTokenFromPage',
    'sendAttachment',
    'env',
    'append',
    '469458JdXqff'
  ];
  a500_0x1e26 = function () {
    return _0xd7cdd5;
  };
  return a500_0x1e26();
}
const sendAttachmentFromUrl = async (
  _0x4fcf91,
  _0x28ea03,
  _0x7bbdf4,
  _0x48dd54
) => {
  const _0x127906 = a500_0x3c137d;
  try {
    const { data: _0x67c148 } = await apiBase(_0x48dd54)[_0x127906(0x1ec)](
      _0x127906(0x20e),
      {
        recipient: { id: _0x4fcf91 },
        message: {
          attachment: { type: _0x7bbdf4, payload: { url: _0x28ea03 } }
        }
      }
    );
    return _0x67c148;
  } catch (_0x282130) {
    console[_0x127906(0x1e3)](_0x282130);
  }
};
exports[a500_0x3c137d(0x202)] = sendAttachmentFromUrl;
const sendAttachment = async (_0x69ceaf, _0x4199a7, _0x3b7e02, _0xb2e698) => {
  const _0x2798ad = a500_0x3c137d;
  formData[_0x2798ad(0x200)](
    _0x2798ad(0x219),
    JSON[_0x2798ad(0x1e9)]({ id: _0x69ceaf })
  ),
    formData['append'](
      _0x2798ad(0x1fc),
      JSON['stringify']({
        attachment: { type: _0x3b7e02, payload: { is_reusable: !![] } }
      })
    );
  const _0x8623f0 = (0x0, fs_1[_0x2798ad(0x207)])(_0x4199a7['path']);
  formData[_0x2798ad(0x200)](_0x2798ad(0x1e5), _0x8623f0);
  try {
    await apiBase(_0xb2e698)[_0x2798ad(0x1ec)]('me/messages', formData, {
      headers: { ...formData[_0x2798ad(0x1eb)]() }
    });
  } catch (_0x4aba8e) {
    throw new Error(_0x4aba8e);
  }
};
exports[a500_0x3c137d(0x1fe)] = sendAttachment;
const genText = _0x3b09aa => {
  const _0x519f2e = { text: _0x3b09aa };
  return _0x519f2e;
};
exports[a500_0x3c137d(0x205)] = genText;
const getProfile = async (_0x14d01b, _0x414bc4) => {
  const _0x4753c9 = a500_0x3c137d;
  try {
    const { data: _0x2f0505 } =
      await apiBase(_0x414bc4)[_0x4753c9(0x215)](_0x14d01b);
    return _0x2f0505;
  } catch (_0x3a72a5) {
    console['log'](_0x3a72a5);
    throw new Error('ERR_FETCHING_FB_USER_PROFILE_2');
  }
};
exports[a500_0x3c137d(0x1f1)] = getProfile;
const getPageProfile = async (_0x2b7823, _0x338746) => {
  const _0x48ac4f = a500_0x3c137d;
  try {
    const { data: _0x5414fa } = await apiBase(_0x338746)[_0x48ac4f(0x215)](
      _0x2b7823 + _0x48ac4f(0x20a)
    );
    return _0x5414fa;
  } catch (_0x3c524f) {
    console['log'](_0x3c524f);
    throw new Error(_0x48ac4f(0x1f6));
  }
};
exports[a500_0x3c137d(0x21c)] = getPageProfile;
const profilePsid = async (_0x13d170, _0x34b6b6) => {
  const _0x3ffd23 = a500_0x3c137d;
  try {
    const { data: _0x113f35 } = await axios_1[_0x3ffd23(0x21a)][
      _0x3ffd23(0x215)
    ](
      'https://graph.facebook.com/v18.0/' +
        _0x13d170 +
        _0x3ffd23(0x1ed) +
        _0x34b6b6
    );
    return _0x113f35;
  } catch (_0xc5c2ac) {
    console['log'](_0xc5c2ac),
      await (0x0, exports['getProfile'])(_0x13d170, _0x34b6b6);
  }
};
exports[a500_0x3c137d(0x1e8)] = profilePsid;
const subscribeApp = async (_0x1458cd, _0x1f169f) => {
  const _0x1df10f = a500_0x3c137d;
  try {
    const { data: _0x10ea01 } = await axios_1[_0x1df10f(0x21a)][
      _0x1df10f(0x1ec)
    ](
      _0x1df10f(0x20b) +
        _0x1458cd +
        '/subscribed_apps?access_token=' +
        _0x1f169f,
      {
        subscribed_fields: [
          'messages',
          _0x1df10f(0x20d),
          'message_deliveries',
          _0x1df10f(0x213),
          _0x1df10f(0x21d)
        ]
      }
    );
    return _0x10ea01;
  } catch (_0x2991da) {
    console[_0x1df10f(0x1e3)](_0x2991da);
    throw new Error(_0x1df10f(0x1ea));
  }
};
exports[a500_0x3c137d(0x214)] = subscribeApp;
const unsubscribeApp = async (_0x3ec24b, _0x25f43d) => {
  const _0x5e0756 = a500_0x3c137d;
  try {
    const { data: _0x31dd09 } = await axios_1[_0x5e0756(0x21a)][
      _0x5e0756(0x1fa)
    ](
      _0x5e0756(0x20b) +
        _0x3ec24b +
        '/subscribed_apps?access_token=' +
        _0x25f43d
    );
    return _0x31dd09;
  } catch (_0x3c5800) {
    throw new Error(_0x5e0756(0x21f));
  }
};
exports[a500_0x3c137d(0x21b)] = unsubscribeApp;
const getSubscribedApps = async (_0x57526d, _0x28aabd) => {
  try {
    const { data: _0x11b970 } = await apiBase(_0x28aabd)['get'](
      _0x57526d + '/subscribed_apps'
    );
    return _0x11b970;
  } catch (_0x39273c) {
    throw new Error('ERR_GETTING_SUBSCRIBED_APPS');
  }
};
exports[a500_0x3c137d(0x210)] = getSubscribedApps;
const getAccessTokenFromPage = async _0x47802c => {
  const _0xef2626 = a500_0x3c137d;
  try {
    if (!_0x47802c) throw new Error(_0xef2626(0x204));
    const _0x26657a = await axios_1[_0xef2626(0x21a)]['get'](_0xef2626(0x1ef), {
      params: {
        client_id: process['env'][_0xef2626(0x1f5)],
        client_secret: process['env'][_0xef2626(0x1e2)],
        grant_type: 'fb_exchange_token',
        fb_exchange_token: _0x47802c
      }
    });
    return _0x26657a[_0xef2626(0x1fb)]['access_token'];
  } catch (_0x1bd296) {
    console['log'](_0x1bd296);
    throw new Error(_0xef2626(0x204));
  }
};
exports['getAccessTokenFromPage'] = getAccessTokenFromPage;
const removeApplcation = async (_0x653849, _0x4c1178) => {
  const _0x1a887f = a500_0x3c137d;
  try {
    await axios_1['default']['delete'](
      _0x1a887f(0x20b) + _0x653849 + _0x1a887f(0x1e6),
      { params: { access_token: _0x4c1178 } }
    );
  } catch (_0x22d044) {
    logger_1[_0x1a887f(0x20f)]['error'](_0x1a887f(0x216));
  }
};
exports['removeApplcation'] = removeApplcation;
