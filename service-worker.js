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
    "revision": "5510f8f83048785cbf260b12d52143d4"
  },
  {
    "url": "advanced/database/demo/index.html",
    "revision": "7b4ea954f3379f742ebad799e5c69f95"
  },
  {
    "url": "advanced/database/index.html",
    "revision": "c87f64b4bb2cd2d8c7cb5ecbebce5a71"
  },
  {
    "url": "advanced/design-patterns/demo/index.html",
    "revision": "fa9abf31432a9228ecadb47e13f6b086"
  },
  {
    "url": "advanced/design-patterns/index.html",
    "revision": "ec930f7817f111db3f4507972807153d"
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
    "url": "assets/js/66.e180931d.js",
    "revision": "15705452e82e2241dc4ea4676209c1e6"
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
    "url": "assets/js/75.e6263cbf.js",
    "revision": "006af3656e34866f139baa0ed9de8e86"
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
    "url": "assets/js/app.6dacf5ed.js",
    "revision": "c5fe70432345755da3d6b6accae95351"
  },
  {
    "url": "data-monitoring/android/demo/index.html",
    "revision": "adec5ac1e909e79440fa1605862082d7"
  },
  {
    "url": "data-monitoring/android/index.html",
    "revision": "e9642a4ede7598852a0bb7e094210d23"
  },
  {
    "url": "data-monitoring/applets/demo/index.html",
    "revision": "2477ae2f737baa91be5b3fc7e4e20417"
  },
  {
    "url": "data-monitoring/applets/index.html",
    "revision": "0a4259cfacdc6ed586c85ba7cfacc516"
  },
  {
    "url": "data-monitoring/ios/demo/index.html",
    "revision": "4c7070455496af2b327c398305acad36"
  },
  {
    "url": "data-monitoring/ios/index.html",
    "revision": "cf9d901bc90b6e2ce0f07993eea60d6e"
  },
  {
    "url": "data-monitoring/js/demo/index.html",
    "revision": "142b8b741b0672f69a56981e9d887e0d"
  },
  {
    "url": "data-monitoring/js/index.html",
    "revision": "ee91910c34bacb04cb0eef39e68245de"
  },
  {
    "url": "data-monitoring/monitoring/demo/index.html",
    "revision": "06b126ad5faaed2bd27cd13d61bae29f"
  },
  {
    "url": "data-monitoring/monitoring/index.html",
    "revision": "d345b18b205617611bb62dd41c1e1665"
  },
  {
    "url": "design/patterns-paradigms/demo/index.html",
    "revision": "9513db563b04926bb68c36acdc8a6ba0"
  },
  {
    "url": "design/patterns-paradigms/index.html",
    "revision": "badc036ec6edfb69981e1fcf0c9dd69c"
  },
  {
    "url": "design/principles-ideas/demo/index.html",
    "revision": "5c65ac915f2863185a31867019aa6c69"
  },
  {
    "url": "design/principles-ideas/index.html",
    "revision": "f0bc2c17a7885899ed3b85971854ce00"
  },
  {
    "url": "develop/commit/git-commit规范/index.html",
    "revision": "0a4a0448e6dd78802f7cd8a68d4d3527"
  },
  {
    "url": "develop/commit/index.html",
    "revision": "90077d9d587a5920fae088557037f366"
  },
  {
    "url": "develop/develop/index.html",
    "revision": "f580e399a3879f7cf151cf4bd93d5ae1"
  },
  {
    "url": "develop/develop/代码开发规范/index.html",
    "revision": "94e7366a558428ed88cd476a3db968bb"
  },
  {
    "url": "develop/directory/index.html",
    "revision": "ead45d4141a5088a4fbb1d6349d35cd7"
  },
  {
    "url": "develop/directory/项目目录设计规范/index.html",
    "revision": "b2d55fbf933917cf1cb5420d42e8c625"
  },
  {
    "url": "develop/eslint/eslint规范/index.html",
    "revision": "d1dd33e761fc78c26072a5dc6e8fe4f2"
  },
  {
    "url": "develop/eslint/index.html",
    "revision": "4bffc23e75fb930038a7143793deada3"
  },
  {
    "url": "engineering/browser/demo/index.html",
    "revision": "a0cc14115ccf5dfb5b94442443806f7f"
  },
  {
    "url": "engineering/browser/index.html",
    "revision": "1e001044e4595a9a3e7dbcf5bc0c11ac"
  },
  {
    "url": "engineering/cdn/demo/index.html",
    "revision": "0a4557c30289870955824d1c5a62477f"
  },
  {
    "url": "engineering/cdn/index.html",
    "revision": "3aae3b80362abeb50ae6f3d1ebf9a6b1"
  },
  {
    "url": "engineering/ci/demo/index.html",
    "revision": "f97af4ffe55c025be6c7ba1a0f80f4e5"
  },
  {
    "url": "engineering/ci/index.html",
    "revision": "c25adc9a1ae9b3000bb9d6bb978da386"
  },
  {
    "url": "engineering/cnstrong-cli/demo/index.html",
    "revision": "051b7a4e6286ce80c92091603457c6e6"
  },
  {
    "url": "engineering/cnstrong-cli/index.html",
    "revision": "46bde0bf0d144ab8a5b1a9408266bd8d"
  },
  {
    "url": "engineering/compile/demo/index.html",
    "revision": "8b33cf65d8df019bc008c05d187c6236"
  },
  {
    "url": "engineering/compile/index.html",
    "revision": "012bac225d0e9c1835620e69fb34bdcf"
  },
  {
    "url": "engineering/git/demo/index.html",
    "revision": "8a13e9423ebafaad731da64cda4f7374"
  },
  {
    "url": "engineering/git/index.html",
    "revision": "86ef04bfee9713289623a1e09c0516a5"
  },
  {
    "url": "engineering/nginx/demo/index.html",
    "revision": "c9f8801b613660afb3347a78cf47abdb"
  },
  {
    "url": "engineering/nginx/index.html",
    "revision": "2a774338ce8bf58ed1f0f78faf4ca0c8"
  },
  {
    "url": "engineering/pack/demo/index.html",
    "revision": "d4ebd0bae5d5cf1d380e9f6073f2fcbe"
  },
  {
    "url": "engineering/pack/index.html",
    "revision": "e392a63c0bf4f1fda3b131b1283eecbb"
  },
  {
    "url": "engineering/performance/demo/index.html",
    "revision": "816e26af5b30c02f06df15170158fbb7"
  },
  {
    "url": "engineering/performance/index.html",
    "revision": "c371656ed20e48ea1c6db934b0709c71"
  },
  {
    "url": "engineering/ssr/demo/index.html",
    "revision": "11cb263ae89f0797822368f53570639f"
  },
  {
    "url": "engineering/ssr/index.html",
    "revision": "ba8c354a4b5c25d1dc7c20095b6e76e0"
  },
  {
    "url": "explore/low-code/demo/index.html",
    "revision": "76ebe8477a98465150b861ed133bade2"
  },
  {
    "url": "explore/low-code/index.html",
    "revision": "22c0ad1003f02528edbaba9e5a85a360"
  },
  {
    "url": "explore/micro-fronted/demo/index.html",
    "revision": "7460071b67720bd6f0c0779cb5209830"
  },
  {
    "url": "explore/micro-fronted/index.html",
    "revision": "bd8f01bc6ca6d92e91c8fe2307edc3b7"
  },
  {
    "url": "explore/visualization/demo/index.html",
    "revision": "6c08b46e9bc70de9a8bebf4f41cfd3ec"
  },
  {
    "url": "explore/visualization/index.html",
    "revision": "261f55a14e66451089f6ffe986221f99"
  },
  {
    "url": "frame/alipay/alipay/index.html",
    "revision": "3cbfb3719e4894f7570468d05b01dd59"
  },
  {
    "url": "frame/alipay/index.html",
    "revision": "9cb952228c2e493a43f3cfeae07b5180"
  },
  {
    "url": "frame/react-router/index.html",
    "revision": "5def17b72422562d8a00ec19d9a7af0a"
  },
  {
    "url": "frame/react-router/react路由V6升级/index.html",
    "revision": "2178c3e884ef58cabff139e7bca3466a"
  },
  {
    "url": "frame/react/index.html",
    "revision": "d0507d9bf31f46579d016cd6462e07aa"
  },
  {
    "url": "frame/react/react生命周期/index.html",
    "revision": "5ee7df5c0a2621a09eb915b9905f13c2"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "616a3508903da9be0c85f35ba110e200"
  },
  {
    "url": "frame/vue/vueXXXX/index.html",
    "revision": "4c673b1ac74a8f4a7fa2bd862a5ad13f"
  },
  {
    "url": "frame/wechat/index.html",
    "revision": "9deff99f794ab4fdddbaafb6b33323e4"
  },
  {
    "url": "frame/wechat/wechat/index.html",
    "revision": "2b10a1d37d6784cbc0eab31eb789adf9"
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
    "revision": "fdb8da9f7d20c6c9d792c033084ae84e"
  },
  {
    "url": "problem/browser/blog/index.html",
    "revision": "8309901c670299f59a872f5fce7a8553"
  },
  {
    "url": "problem/browser/index.html",
    "revision": "e0555a79ce6cf5b0814360501bdb85b2"
  },
  {
    "url": "security/attack-prevention/demo/index.html",
    "revision": "9921a6653c0672b5494bf970092b0de6"
  },
  {
    "url": "security/attack-prevention/index.html",
    "revision": "f22c3fbd913e2f8c85a5282143287f66"
  },
  {
    "url": "security/code/demo/index.html",
    "revision": "58de504f9bfe7b461b0f12182ada86dd"
  },
  {
    "url": "security/code/index.html",
    "revision": "3cdedafa123fc86c402395c0f1a771fc"
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
