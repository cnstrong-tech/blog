/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9ca6a795c39886ed6876b237d7313a60"
  },
  {
    "url": "advanced/database/demo/index.html",
    "revision": "f59f2f9949a9d07988b28a759a5b873b"
  },
  {
    "url": "advanced/database/index.html",
    "revision": "7b265a51ebabcaba818feb2edcb5d7f8"
  },
  {
    "url": "advanced/design-patterns/demo/index.html",
    "revision": "4940c7d96a1195cc8af47ba2418cb00d"
  },
  {
    "url": "advanced/design-patterns/index.html",
    "revision": "375f599467915cce8acc2a3949e3cf9e"
  },
  {
    "url": "assets/css/0.styles.fca33451.css",
    "revision": "5b3b89e0fbf00c264ede9ef3f03de9b5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c7aef5a.js",
    "revision": "c2b7075ea3654438dd6026bd13e49fd7"
  },
  {
    "url": "assets/js/11.c663b353.js",
    "revision": "92449520a37ebd5bed570ee7c401416f"
  },
  {
    "url": "assets/js/12.60d866a4.js",
    "revision": "13b0c4897c02034da4cd43a0b35c9e20"
  },
  {
    "url": "assets/js/13.492cbd86.js",
    "revision": "a468d9ed941d64ff44d0b9b1aeb6960e"
  },
  {
    "url": "assets/js/14.554b674d.js",
    "revision": "2cf73a6a937e33f6c97823556a52edd1"
  },
  {
    "url": "assets/js/15.83f13bf7.js",
    "revision": "ecd7d0414ddde88162e451ddeb013952"
  },
  {
    "url": "assets/js/16.bf648abf.js",
    "revision": "edff5e69dcc29a61d008614d49333227"
  },
  {
    "url": "assets/js/17.a8a204d3.js",
    "revision": "4dcbe0dd07af7469609fa40b1a2536de"
  },
  {
    "url": "assets/js/18.41a472d3.js",
    "revision": "68faeddf0e7b23ee1bd44d8bdb803735"
  },
  {
    "url": "assets/js/19.b636a949.js",
    "revision": "9f630800fc329528b01b8924c8e936a5"
  },
  {
    "url": "assets/js/2.3887d51d.js",
    "revision": "b33f869771c827af9bfcf4badff8217e"
  },
  {
    "url": "assets/js/20.b949af3a.js",
    "revision": "8b887425baee12135e62437d1d14008d"
  },
  {
    "url": "assets/js/21.b4fd4077.js",
    "revision": "4a72ae9dc8120eb45354c1760f7d1f23"
  },
  {
    "url": "assets/js/22.f617f1b4.js",
    "revision": "239560f47cb0ac59be9b409a1fdc8158"
  },
  {
    "url": "assets/js/23.772ca613.js",
    "revision": "b04b30718aeac9e46305f13f6116ab30"
  },
  {
    "url": "assets/js/24.ca3c0072.js",
    "revision": "3edbb89d14a76737d62f97e43d0156c6"
  },
  {
    "url": "assets/js/25.6fc7a1d9.js",
    "revision": "6d00883196998d3b0fcf59a4bd004246"
  },
  {
    "url": "assets/js/26.37b0448f.js",
    "revision": "2ead064f8143877a7e0caa28ef200946"
  },
  {
    "url": "assets/js/27.554a327d.js",
    "revision": "f259e6735ec9925002cde230c2cba681"
  },
  {
    "url": "assets/js/28.cb2dc677.js",
    "revision": "4f83e50cf4e4eee4fc46cd16e191fe49"
  },
  {
    "url": "assets/js/29.bdc5a4c3.js",
    "revision": "b1eb82bf5dc1c76e29ac3022d3cc54d6"
  },
  {
    "url": "assets/js/3.610d4656.js",
    "revision": "7d9bbb003d0d86c6452cc577d2439e19"
  },
  {
    "url": "assets/js/30.fe71ad84.js",
    "revision": "2bfe19f7a231ae66b7f1f7b77ff3b5df"
  },
  {
    "url": "assets/js/31.5892240e.js",
    "revision": "fd1423f797006c0cc90de7b17f6dba0f"
  },
  {
    "url": "assets/js/32.e4bbe0d2.js",
    "revision": "e3a00249e9047aada718af5dfea40f69"
  },
  {
    "url": "assets/js/33.d47872dd.js",
    "revision": "1a18ac96e29ba0a879af31133a276b14"
  },
  {
    "url": "assets/js/34.022ba898.js",
    "revision": "cf88b8f728d60773ac841c83fc64ce81"
  },
  {
    "url": "assets/js/35.1baaf2a6.js",
    "revision": "1f6413887f9c658be21420a07c8ad231"
  },
  {
    "url": "assets/js/36.fc7dacf0.js",
    "revision": "5cad1958aaf35184ba4604bf66fe678c"
  },
  {
    "url": "assets/js/37.3d08af5a.js",
    "revision": "e13b7d00cd8bf97425d43b9e733a887b"
  },
  {
    "url": "assets/js/38.391a128c.js",
    "revision": "4b00e96c8ea6a3f0d0a856763e5d700b"
  },
  {
    "url": "assets/js/39.5675135a.js",
    "revision": "c205c3e02e7e5d29e7b95e839056c331"
  },
  {
    "url": "assets/js/4.995844b8.js",
    "revision": "a37f378758470098d40927ca9a6e1052"
  },
  {
    "url": "assets/js/40.574bc607.js",
    "revision": "33923eb58755476d34d9e65596e55f37"
  },
  {
    "url": "assets/js/41.18063c64.js",
    "revision": "f78b2d90c7158cfffd2fe3c3a5e6b063"
  },
  {
    "url": "assets/js/42.5f8f0130.js",
    "revision": "2aee4203f54a000792d77b1a09ae4133"
  },
  {
    "url": "assets/js/43.e32592b5.js",
    "revision": "a275577e5d0227991ced660843fb3112"
  },
  {
    "url": "assets/js/44.c0ea261f.js",
    "revision": "c657a61af292886c75ce02b6043b7ec3"
  },
  {
    "url": "assets/js/45.c0923688.js",
    "revision": "e4ebe38253360cb402f1089e5ea32f63"
  },
  {
    "url": "assets/js/46.41e40ca1.js",
    "revision": "133ba88ad243d1ee81f87e350a0d7b0d"
  },
  {
    "url": "assets/js/47.c3472130.js",
    "revision": "5a2d7935de1a2a8c58bcf2468b588f57"
  },
  {
    "url": "assets/js/48.25be37d3.js",
    "revision": "0a10ad743e8599b86ff2414f0d5c5642"
  },
  {
    "url": "assets/js/49.ba28de4a.js",
    "revision": "3d18975b2e33b2b222c7d5efb9ede499"
  },
  {
    "url": "assets/js/5.31023dab.js",
    "revision": "7a12eded5402364cdfc7cd0e04702527"
  },
  {
    "url": "assets/js/50.16a82ba8.js",
    "revision": "7c1f6aadc128da079c5357ee50464884"
  },
  {
    "url": "assets/js/51.c7052847.js",
    "revision": "6d4d84f88304c28035ca5a0d22aa808c"
  },
  {
    "url": "assets/js/52.4182c5e3.js",
    "revision": "bf9dc1ad6864106e1b3526a634a34cce"
  },
  {
    "url": "assets/js/53.d539461c.js",
    "revision": "5fef85a92496cfaedde0dc13e79baff3"
  },
  {
    "url": "assets/js/54.00cea51a.js",
    "revision": "1415664a75618a6c5fab460f0c0ff2e7"
  },
  {
    "url": "assets/js/55.0a07e600.js",
    "revision": "ea1790f450e6c0145fcfa77ea020ae74"
  },
  {
    "url": "assets/js/56.1c4dceef.js",
    "revision": "ed91f1277f507f0cd6f20f50273a3508"
  },
  {
    "url": "assets/js/57.a00b24b6.js",
    "revision": "cea293d21928a554150300172d45f33f"
  },
  {
    "url": "assets/js/58.3dc7d5ec.js",
    "revision": "587b402dd02eaddaa1b8c3e6b597a7c8"
  },
  {
    "url": "assets/js/59.1911e34e.js",
    "revision": "d74486df7ad398c953ce2b1c950bb261"
  },
  {
    "url": "assets/js/6.1c2097f4.js",
    "revision": "03e58325a32851183fc80d1a8e5ad41b"
  },
  {
    "url": "assets/js/60.eb5d931e.js",
    "revision": "2cfa92ff649a0e6d4aa58b2b12fe0d21"
  },
  {
    "url": "assets/js/61.42fcfd11.js",
    "revision": "4ef96422afe1da19c646d9f9d2b5e38d"
  },
  {
    "url": "assets/js/62.03978e48.js",
    "revision": "e93ba416bd4b20bf7f56b6ce1bb9687a"
  },
  {
    "url": "assets/js/63.c9a2af24.js",
    "revision": "dbde14707934cda8d0b86a6f56c4556e"
  },
  {
    "url": "assets/js/64.f1c5612d.js",
    "revision": "dc147e460b7daac5030c784848b08e3e"
  },
  {
    "url": "assets/js/65.5e0c1b9d.js",
    "revision": "13ba48494d7a1a6ded375ab3587ee028"
  },
  {
    "url": "assets/js/66.701969d8.js",
    "revision": "1bd333d4fb7019704ae0c3aa22223d28"
  },
  {
    "url": "assets/js/67.6c3427c0.js",
    "revision": "82eab080f9a44e75a39a8e4477964d5c"
  },
  {
    "url": "assets/js/68.377a56c2.js",
    "revision": "5107ce16a867c33fa1768ec4e21f1be9"
  },
  {
    "url": "assets/js/69.f9a891b7.js",
    "revision": "44cc7f253e7e140640a6554ac97aaec4"
  },
  {
    "url": "assets/js/7.5c1c4270.js",
    "revision": "f487aabb0cd843679a3607700d677912"
  },
  {
    "url": "assets/js/70.0efe8cd0.js",
    "revision": "0a4557ad1ab998add75c5a6231fae6a1"
  },
  {
    "url": "assets/js/71.7b269075.js",
    "revision": "14e9472033a4f910344a5a251b5872eb"
  },
  {
    "url": "assets/js/72.374e3ed9.js",
    "revision": "7b90b31b459fd2db8059dc5210fc7f8f"
  },
  {
    "url": "assets/js/73.566a9897.js",
    "revision": "a9ffeac0a5ae7fdbc344c392384dbf55"
  },
  {
    "url": "assets/js/74.f27e1af3.js",
    "revision": "b896da9a37ff16f4d575523262e1c93a"
  },
  {
    "url": "assets/js/75.4979c8b8.js",
    "revision": "0f11580419a15cfa7a9fdda6de3f135c"
  },
  {
    "url": "assets/js/76.a503d694.js",
    "revision": "a77ced3015104b889eae1d9006a3a74e"
  },
  {
    "url": "assets/js/77.d9e39100.js",
    "revision": "932ca66705c66ac2df6a1b0aa2749a7a"
  },
  {
    "url": "assets/js/78.9f13a4a5.js",
    "revision": "a20636784aac1ba5994f7495ffd0061c"
  },
  {
    "url": "assets/js/8.337d1876.js",
    "revision": "bd14b5dd3a0a4bc3d3418879be6d1f71"
  },
  {
    "url": "assets/js/9.84c2f1d3.js",
    "revision": "32cc9ecb3bcababf25756a488022754d"
  },
  {
    "url": "assets/js/app.efd4e355.js",
    "revision": "dfb55679f8eefefc21f84137ac0ca9c7"
  },
  {
    "url": "data-monitoring/android/demo/index.html",
    "revision": "976d36d32486fc143d781ff37d763c93"
  },
  {
    "url": "data-monitoring/android/index.html",
    "revision": "40f4ca1ac7d92362c216cdb5c9b48f0d"
  },
  {
    "url": "data-monitoring/applets/demo/index.html",
    "revision": "28424274b961f06904f44955d4775818"
  },
  {
    "url": "data-monitoring/applets/index.html",
    "revision": "8410d989bc0557675870e38b21162f57"
  },
  {
    "url": "data-monitoring/ios/demo/index.html",
    "revision": "9081914c4cd0236648fb7889684b6935"
  },
  {
    "url": "data-monitoring/ios/index.html",
    "revision": "11d7a436e9846a3a1fb650ee90c5ccbc"
  },
  {
    "url": "data-monitoring/js/demo/index.html",
    "revision": "489da4241dc3e0ade372ee643dd167ca"
  },
  {
    "url": "data-monitoring/js/index.html",
    "revision": "8c570d18356be3011b190fb849297ea9"
  },
  {
    "url": "data-monitoring/monitoring/demo/index.html",
    "revision": "da32623355774f4ac524dfde3fd27a77"
  },
  {
    "url": "data-monitoring/monitoring/index.html",
    "revision": "f6b8902a68ed2afd4f6118989c1dee13"
  },
  {
    "url": "design/patterns-paradigms/demo/index.html",
    "revision": "5e847bc00234c7bc7dfc3a6f66525bbb"
  },
  {
    "url": "design/patterns-paradigms/index.html",
    "revision": "4328938704ea0cffdba504c043909b12"
  },
  {
    "url": "design/principles-ideas/demo/index.html",
    "revision": "1724b747d34e5c624e3b7aef87cdb070"
  },
  {
    "url": "design/principles-ideas/index.html",
    "revision": "e19f8e0b07b84c26b97d4c87a4fcd24b"
  },
  {
    "url": "develop/commit/git-commit规范/index.html",
    "revision": "c3244b4f10c038fe30f191f8ac068ae5"
  },
  {
    "url": "develop/commit/index.html",
    "revision": "0455133ee158021dce9041dd0e3902fc"
  },
  {
    "url": "develop/develop/index.html",
    "revision": "8bf58257aac999f72221b0eba6b9e0a1"
  },
  {
    "url": "develop/develop/代码开发规范/index.html",
    "revision": "7f3abeb0b19514ff469bec8987885afc"
  },
  {
    "url": "develop/directory/index.html",
    "revision": "00c9c4b1212b721a2d6d87d872b85492"
  },
  {
    "url": "develop/directory/项目目录设计规范/index.html",
    "revision": "d7e572875fefc9400ec7014bd4a2c443"
  },
  {
    "url": "develop/eslint/eslint规范/index.html",
    "revision": "165b883bc544b91f9b2250c0acb84bd1"
  },
  {
    "url": "develop/eslint/index.html",
    "revision": "0bb7f09c409945d0d19f97d77b8123e1"
  },
  {
    "url": "engineering/browser/demo/index.html",
    "revision": "7dec78024f924998047691766e9d4743"
  },
  {
    "url": "engineering/browser/index.html",
    "revision": "fe88123648e9c33b7078d5a374a89a6c"
  },
  {
    "url": "engineering/cdn/demo/index.html",
    "revision": "a57a4247ed5f7cdb10a2a677e293dd72"
  },
  {
    "url": "engineering/cdn/index.html",
    "revision": "f64eea268421ef91402f47e075f97ae8"
  },
  {
    "url": "engineering/ci/demo/index.html",
    "revision": "559b73c7a04815a334b467c4addaf18e"
  },
  {
    "url": "engineering/ci/index.html",
    "revision": "9c08989cecca1ed72458e063ce571145"
  },
  {
    "url": "engineering/cnstrong-cli/demo/index.html",
    "revision": "1a00910d35002607de786b44923fa82e"
  },
  {
    "url": "engineering/cnstrong-cli/index.html",
    "revision": "d756e9c3f1060643d33d8dade3aa4005"
  },
  {
    "url": "engineering/compile/demo/index.html",
    "revision": "b5501d7b1cac9cf3d210c6b2cf2882ad"
  },
  {
    "url": "engineering/compile/index.html",
    "revision": "1d828fb87a7d02c2772f743162caffc2"
  },
  {
    "url": "engineering/git/demo/index.html",
    "revision": "987503ee3aaba083047a6b0acb1e4e69"
  },
  {
    "url": "engineering/git/index.html",
    "revision": "efb85d9a175a4c8e3e572bfab01b0b9e"
  },
  {
    "url": "engineering/nginx/demo/index.html",
    "revision": "d15e37ac555727fbce26f425be3289b8"
  },
  {
    "url": "engineering/nginx/index.html",
    "revision": "8a4d3aaead99d9d6872db62844762805"
  },
  {
    "url": "engineering/pack/demo/index.html",
    "revision": "01ba50b47edae65ca473e4f91164085a"
  },
  {
    "url": "engineering/pack/index.html",
    "revision": "e8d0eac0e0d339f9284b962febbf69a1"
  },
  {
    "url": "engineering/performance/demo/index.html",
    "revision": "40c32e6884b5a515d2caa0fcdd8970e1"
  },
  {
    "url": "engineering/performance/index.html",
    "revision": "01330666e5a366a836710bc7609435ba"
  },
  {
    "url": "engineering/ssr/demo/index.html",
    "revision": "5a3f5fa487514979ae6dd3e29cd79039"
  },
  {
    "url": "engineering/ssr/index.html",
    "revision": "c7852606867502cad7fa44160d09315f"
  },
  {
    "url": "explore/low-code/demo/index.html",
    "revision": "c2e12ea28c27d23da6679d4612f5949e"
  },
  {
    "url": "explore/low-code/index.html",
    "revision": "3a5b66e88f3b87270f26956160f5fb61"
  },
  {
    "url": "explore/micro-fronted/demo/index.html",
    "revision": "38f9523780683854743745a590c13a73"
  },
  {
    "url": "explore/micro-fronted/index.html",
    "revision": "0e22022f9c43d4657b71342891ce12cf"
  },
  {
    "url": "explore/visualization/demo/index.html",
    "revision": "242ea2481abc4d18b90a72dc42c47312"
  },
  {
    "url": "explore/visualization/index.html",
    "revision": "1c9bf2c4651591c1a43f9b81513bfbb6"
  },
  {
    "url": "frame/alipay/alipay/index.html",
    "revision": "865527f8aca06e3e9e18f43b012aa5e5"
  },
  {
    "url": "frame/alipay/index.html",
    "revision": "5d5888f44906b55b2245cc0bf23d09ee"
  },
  {
    "url": "frame/react-router/index.html",
    "revision": "384fb16b7a897fba6a84787d26bf1094"
  },
  {
    "url": "frame/react-router/react路由V6升级/index.html",
    "revision": "36b16446fe377027bfc9b5c35caface2"
  },
  {
    "url": "frame/react/index.html",
    "revision": "6c7263a9c2e2c5de9aea39d4234cd218"
  },
  {
    "url": "frame/react/react生命周期/index.html",
    "revision": "79456ef01d7fc2f5fc89047e223ffa2b"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "bfaa6cae82f4ac472d5e2df2bb68ed60"
  },
  {
    "url": "frame/vue/vueXXXX/index.html",
    "revision": "48a5dac568a66dc8d012e849f1ad3938"
  },
  {
    "url": "frame/wechat/index.html",
    "revision": "cdc574cbe7f6718d7c158797691d7c04"
  },
  {
    "url": "frame/wechat/wechat/index.html",
    "revision": "dc33e1d1c0801aad17f25db8aa28ca78"
  },
  {
    "url": "images/knowledge.png",
    "revision": "d15da5bd010b4330c590aaf43cd97612"
  },
  {
    "url": "images/logo.png",
    "revision": "4a020375ee8551759fc54942d3522f9d"
  },
  {
    "url": "index.html",
    "revision": "8a7e7326d0cd5eb1821ac7e8dc8ac7aa"
  },
  {
    "url": "problem/browser/blog/index.html",
    "revision": "60d750a6b8b2d9a256e1c3ab4ffceb8b"
  },
  {
    "url": "problem/browser/index.html",
    "revision": "fa4f6044c35bea6aa8efaf3e2d5ded57"
  },
  {
    "url": "security/attack-prevention/demo/index.html",
    "revision": "5c304a7f1f30bd2b11be3c45a87ae9d9"
  },
  {
    "url": "security/attack-prevention/index.html",
    "revision": "f1597232b4524c676be31214c834133a"
  },
  {
    "url": "security/code/demo/index.html",
    "revision": "ebc8357a8805d6db492e07e2afd9baa5"
  },
  {
    "url": "security/code/index.html",
    "revision": "26491f3feb5c7aeba1c72b9618d4d11f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
