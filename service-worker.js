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
    "url": "assets/apache-shiro/apache-shiro-logo.png",
    "revision": "8fa5c1aba46ab81eb78250732cf660cb"
  },
  {
    "url": "assets/apache-shiro/image4.jpeg",
    "revision": "4d0c1a46be44ea72a03041e97a14e0bc"
  },
  {
    "url": "assets/apache-shiro/image5.jpeg",
    "revision": "29d9a68fc15c1456a5418d95af4df8b2"
  },
  {
    "url": "assets/apache-shiro/image6.jpeg",
    "revision": "908fcacefd78bf797250b2e68ecf1574"
  },
  {
    "url": "assets/apache-shiro/yky_13495408237665.jpg",
    "revision": "532047a334d7dc0ce68cafe74c161274"
  },
  {
    "url": "assets/apache-shiro/yky_20200423151533733.png",
    "revision": "57836bba32e23e59d032a9ac72d8514b"
  },
  {
    "url": "assets/apache-shiro/yky_20200423163414191.png",
    "revision": "c4bf89167c25b1076b084816a35694be"
  },
  {
    "url": "assets/apache-shiro/yky_20200424104531685.png",
    "revision": "6d0ae6740da74f1edb6276cb310379a1"
  },
  {
    "url": "assets/apache-shiro/yky_20200424145508674.png",
    "revision": "6a164bcaad7c48d2ea74baf184bb3457"
  },
  {
    "url": "assets/apache-shiro/yky_20200424152851569.png",
    "revision": "0a87ce58929642a93b5f229ca482372f"
  },
  {
    "url": "assets/apache-shiro/yky_20200426143303884.png",
    "revision": "cc51049117b4a4ba7a135f6ee9ea00e8"
  },
  {
    "url": "assets/apache-shiro/yky_20200427094830658.png",
    "revision": "e771d1da5fc0ba24c9fc4e87ecfb3b3f"
  },
  {
    "url": "assets/apache-shiro/yky_20200427115525065.png",
    "revision": "d94d76aad9e9aea03601fd38b4098f36"
  },
  {
    "url": "assets/apache-shiro/yky_20200522092437.jpeg",
    "revision": "58b1c139284e8dde99fcf974ce630cfc"
  },
  {
    "url": "assets/apache-shiro/yky_20200522105155.png",
    "revision": "c76e09af1662a115a46ae76e49372e9f"
  },
  {
    "url": "assets/apache-shiro/yky_20200522105623.png",
    "revision": "100f51d67cbce8987cd1e48848521388"
  },
  {
    "url": "assets/apache-shiro/yky_20200522105823.png",
    "revision": "1a9c6ce0e78dbd5efeae95a722c28e43"
  },
  {
    "url": "assets/apache-shiro/yky_20200522105949.png",
    "revision": "67d849cd04e1d7eb50a66a18f7684e01"
  },
  {
    "url": "assets/apache-shiro/yky_20200522140014.png",
    "revision": "e00d25206115580b4605dcb3a00a4414"
  },
  {
    "url": "assets/apache-shiro/yky_20200522141516.png",
    "revision": "bb0efb445c662b4f52558c9ea6b274d4"
  },
  {
    "url": "assets/apache-shiro/yky_20200522144326.png",
    "revision": "8a106c3abb85c47bc211cf3dc20d880f"
  },
  {
    "url": "assets/apache-shiro/yky_20200522150216.png",
    "revision": "98e358307324c26d3182437ecdf57164"
  },
  {
    "url": "assets/apache-shiro/yky_20200522163822.png",
    "revision": "f304d34eaf720e8ec6cdd85839115421"
  },
  {
    "url": "assets/apache-shiro/yky_20200527110701.png",
    "revision": "e4548b89b118715108be10e5739970a0"
  },
  {
    "url": "assets/apache-shiro/yky_20200527111017.png",
    "revision": "8682111bad4c4ed1abcf84737e2c5195"
  },
  {
    "url": "assets/apache-shiro/yky_20200527111220.png",
    "revision": "4e4d332ca95545193b1f02d6ea999b8e"
  },
  {
    "url": "assets/apache-shiro/yky_20200527112336.png",
    "revision": "22758c6e6f7056e3d38614f370144bda"
  },
  {
    "url": "assets/apache-shiro/yky_20200601105756.png",
    "revision": "ce75a23ca32bb93b2966df0765c48a78"
  },
  {
    "url": "assets/apache-shiro/yky_20200601110055.png",
    "revision": "adb0f56763ee5bf86384b8a3b427d3c0"
  },
  {
    "url": "assets/apache-shiro/yky_20200601110228.png",
    "revision": "f646631ef14f291b6ade420c6f18df45"
  },
  {
    "url": "assets/apache-shiro/yky_20200601110401.png",
    "revision": "9eff27309418d1511edbb8aa288c79f3"
  },
  {
    "url": "assets/apache-shiro/yky_20200601141615.png",
    "revision": "1762a18d4eb2ee64c283e603d016912f"
  },
  {
    "url": "assets/css/0.styles.35d8fede.css",
    "revision": "f6685bee60dd25284ee3345f2e3dc4c5"
  },
  {
    "url": "assets/gitflow/git-workflow-feature_branch.png",
    "revision": "40a0910ee2aa48e4ad449764c784f68e"
  },
  {
    "url": "assets/gitflow/git-workflow-forking.png",
    "revision": "76f44f4a57abfa64b4762d13b62b4135"
  },
  {
    "url": "assets/gitflow/git-workflow-svn.png",
    "revision": "38c6c71e422682759bb171dde83c10ac"
  },
  {
    "url": "assets/gitflow/git-workflows-gitflow.png",
    "revision": "e6ad004e67ee5c6b0fa4ffec2c456eb9"
  },
  {
    "url": "assets/gitflow/yky-1789473621.png",
    "revision": "608b2c0e6bc3123adeb7c0f9a943601b"
  },
  {
    "url": "assets/idea/4afbfbedab64034f72b616b4a5c379310a551d0c.jpg",
    "revision": "46bf2f2b993c7616a0568d870228db2e"
  },
  {
    "url": "assets/idea/yky_20200520092922.jpg",
    "revision": "a805987fbc731d7fa6fc4ca8276c240f"
  },
  {
    "url": "assets/idea/yky_20200520093426.jpg",
    "revision": "afc24c510cc0e55a9b132f453f8feee4"
  },
  {
    "url": "assets/idea/yky_20200520093625.jpg",
    "revision": "480675c2070fa32b2fb29603b8b16669"
  },
  {
    "url": "assets/idea/yky_20200520093803.jpg",
    "revision": "60fe0f79658672e2481a604537086cda"
  },
  {
    "url": "assets/idea/yky_20200520094051.jpg",
    "revision": "9b9dc17fdeb98ff8648d2be5539f183f"
  },
  {
    "url": "assets/idea/yky_20200520094159.jpg",
    "revision": "3c51f586b9031dd9d11b01dd0bf52103"
  },
  {
    "url": "assets/idea/yky_20200520094246.jpg",
    "revision": "6ccd1b81e98ff6ba83781d21b7a70e70"
  },
  {
    "url": "assets/idea/yky_20200520094318.jpg",
    "revision": "e83de12050133a8af7396aa679ef3c34"
  },
  {
    "url": "assets/idea/yky_20200520094457.jpg",
    "revision": "eda00a8e87b604c9a9ecc054ab530fd5"
  },
  {
    "url": "assets/idea/yky_20200520094535.jpg",
    "revision": "f38de5f7bc4c04b04ca1f01896bd02d8"
  },
  {
    "url": "assets/idea/yky_20200520094615.jpg",
    "revision": "29ce94785e12f217eccd170ec8b3c575"
  },
  {
    "url": "assets/idea/yky_20200520094723.jpg",
    "revision": "4311949248076287634152f7c07f937f"
  },
  {
    "url": "assets/idea/yky_20200520095523.png",
    "revision": "5c8c422eccdb2cc9fe463d2768029917"
  },
  {
    "url": "assets/idea/YKYB1BD1BB389A744E5AC2B4983810A8C83.jpg",
    "revision": "4a87381bc32338704f6e279a1623f7c4"
  },
  {
    "url": "assets/idea/YKYF09E9A4E10D342928CCC98AD1E017581.jpg",
    "revision": "1feae0a5bfef630eb6b0d43d912f05d2"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/install-teaching/yky-20200515142628.jpg",
    "revision": "62d7683aa3a77daaef3fe3a6163db25e"
  },
  {
    "url": "assets/js/10.48c08d70.js",
    "revision": "7ccf7d1c1aea4631dda63d2a402be5a0"
  },
  {
    "url": "assets/js/100.18cca3a3.js",
    "revision": "3c301b94d179717910389cd1ca152bf7"
  },
  {
    "url": "assets/js/101.98092418.js",
    "revision": "b7627ce7b6a63ca4099465ffd7550717"
  },
  {
    "url": "assets/js/102.3a15ff39.js",
    "revision": "8e3217a5a1f12286a6af2593d68ec165"
  },
  {
    "url": "assets/js/103.8d673712.js",
    "revision": "ebc6bcd7d80e40037bff054bcad53791"
  },
  {
    "url": "assets/js/104.6cdd514a.js",
    "revision": "7296ed0b184a5202cfc865c75a65b6ef"
  },
  {
    "url": "assets/js/105.938ba79b.js",
    "revision": "951eea012a10316ae9b03feb20bbd4e0"
  },
  {
    "url": "assets/js/106.772e67b5.js",
    "revision": "16b779dd96dbd5701564a5ba9e77b43c"
  },
  {
    "url": "assets/js/107.51763d1c.js",
    "revision": "acfaadb769acaaf4e864e8d34ff8fb3b"
  },
  {
    "url": "assets/js/108.febf13fe.js",
    "revision": "1395b9fe99987149f576675c31fdd699"
  },
  {
    "url": "assets/js/109.a1dd45b0.js",
    "revision": "f1fb8cd83a15fe64bb1c14e2f8980089"
  },
  {
    "url": "assets/js/11.04529c8f.js",
    "revision": "42326803c321ecc2cf7e94c6da93447f"
  },
  {
    "url": "assets/js/110.25e56e43.js",
    "revision": "6bd67db7c5c8859e9b5476450fa05603"
  },
  {
    "url": "assets/js/111.705b3701.js",
    "revision": "78c83273c0bafe1ee95d332e8f448ab8"
  },
  {
    "url": "assets/js/12.3f1edc2d.js",
    "revision": "8a86bb50b5eecdb7d92266e892220764"
  },
  {
    "url": "assets/js/13.c3bee8d7.js",
    "revision": "c2cc57287846e5aeff6a4c8752fc0fc2"
  },
  {
    "url": "assets/js/14.6293b2b4.js",
    "revision": "804d6f61d9d9ef61cb9aff0e8a0883e0"
  },
  {
    "url": "assets/js/15.7f4a8446.js",
    "revision": "3703c992837f77ef21b403bdf95238e1"
  },
  {
    "url": "assets/js/16.eda0a3b7.js",
    "revision": "edb337ac7a936647293a1ebf427a6b77"
  },
  {
    "url": "assets/js/17.cb02c9c4.js",
    "revision": "06d1888f0e8af4b04c9823a14fc33cf2"
  },
  {
    "url": "assets/js/18.d869fa46.js",
    "revision": "4fdd28fea68584ccc49e4afc6d409b90"
  },
  {
    "url": "assets/js/19.a0e5b08a.js",
    "revision": "80cddd519304ce60babc950716468c86"
  },
  {
    "url": "assets/js/2.a772b342.js",
    "revision": "241385b3dbb5935aef1c670f7d4b6331"
  },
  {
    "url": "assets/js/20.70f207ac.js",
    "revision": "88df09ca707823ee51c8e4aa36666adb"
  },
  {
    "url": "assets/js/21.b23767cc.js",
    "revision": "d55771bdc4a9508680ef6e175493e76c"
  },
  {
    "url": "assets/js/22.724bec9d.js",
    "revision": "045accc23a6b090cd1631cedafa4951a"
  },
  {
    "url": "assets/js/23.81227d75.js",
    "revision": "621e8ccdc71efc45287a8cf1c4416afe"
  },
  {
    "url": "assets/js/24.89a3c8b5.js",
    "revision": "306d308634e163f777785d0f6183393b"
  },
  {
    "url": "assets/js/25.1911d3b9.js",
    "revision": "ec318d1807b90e9946f2191ae6f5be81"
  },
  {
    "url": "assets/js/26.6a2a48ea.js",
    "revision": "19eb1a541d08f160cc54adefb6ea129f"
  },
  {
    "url": "assets/js/27.14fee594.js",
    "revision": "b9959db5be2b6abd4ef7e8b63f28201f"
  },
  {
    "url": "assets/js/28.d4c32400.js",
    "revision": "a200bb3ba265015c904694e03dd83a47"
  },
  {
    "url": "assets/js/29.0e90262d.js",
    "revision": "5bae2aa1259d03c9f2414c4f225eaaef"
  },
  {
    "url": "assets/js/3.38ac8f19.js",
    "revision": "776f5fccc4e74e5df95d68a2e9f55435"
  },
  {
    "url": "assets/js/30.cf3b7db3.js",
    "revision": "0643b215eb20f320652affe696f1e06a"
  },
  {
    "url": "assets/js/31.072dedc7.js",
    "revision": "a75f10159d0d2c3f9f29be8e35359a7d"
  },
  {
    "url": "assets/js/32.e32bf6e6.js",
    "revision": "d8e329448689d3db64f71057c97c2aea"
  },
  {
    "url": "assets/js/33.2072ada3.js",
    "revision": "2c31c9e6d66161650cfc1813baa1858e"
  },
  {
    "url": "assets/js/34.efd56ab8.js",
    "revision": "a746fc22aa71a8251857f705975aa338"
  },
  {
    "url": "assets/js/35.f8ff5a47.js",
    "revision": "e8fc48993bbb64299762d0c5c779e3da"
  },
  {
    "url": "assets/js/36.3a86d332.js",
    "revision": "55a07a8fae4085ddae43f70cf44fbb44"
  },
  {
    "url": "assets/js/37.6f164a57.js",
    "revision": "c0a4e1e3d4d61bbe9100aea6f96df772"
  },
  {
    "url": "assets/js/38.92c6b404.js",
    "revision": "8e7d738fe286a14420a6dfd42cfc4169"
  },
  {
    "url": "assets/js/39.6559180a.js",
    "revision": "4fcc9367d338399a663aa4e5b3a47bcc"
  },
  {
    "url": "assets/js/4.11350ab7.js",
    "revision": "fa5ab16ff696b38c9fbe1f31885fcddb"
  },
  {
    "url": "assets/js/40.512d1e10.js",
    "revision": "b1e188bd2d675a3e051d4b2825307ba5"
  },
  {
    "url": "assets/js/41.35c70798.js",
    "revision": "39b1d5d079bb927b9f9be828e13803df"
  },
  {
    "url": "assets/js/42.7ea7a91e.js",
    "revision": "b46d2c334a40ee376ef3b6db4253882f"
  },
  {
    "url": "assets/js/43.84109dc8.js",
    "revision": "84c43ddbe389a6075462112c0a15cccc"
  },
  {
    "url": "assets/js/44.b460ef45.js",
    "revision": "05f37ea9e5bb06d353f54d55de1e1378"
  },
  {
    "url": "assets/js/45.719f5d4b.js",
    "revision": "2ece9da0e60c52e63f247f38fb5c0602"
  },
  {
    "url": "assets/js/46.a98859c0.js",
    "revision": "2af63f7340a4dd5c6177284a6e01ea20"
  },
  {
    "url": "assets/js/47.f82b4e26.js",
    "revision": "03627b07c20fba33f77a3fdba60e0a7d"
  },
  {
    "url": "assets/js/48.142909d8.js",
    "revision": "daaf5949821d72df3af563a6cd7a9af5"
  },
  {
    "url": "assets/js/49.b27f9bab.js",
    "revision": "ee1cecd2b966de41a2342ce001710b5e"
  },
  {
    "url": "assets/js/5.2db0d042.js",
    "revision": "ff491f2c5cd03de8285662c31654f212"
  },
  {
    "url": "assets/js/50.85e06373.js",
    "revision": "7131f5636be9b325f20738e423e761fd"
  },
  {
    "url": "assets/js/51.9a3843d7.js",
    "revision": "8b48aaac5de1845488fd7422bb052bad"
  },
  {
    "url": "assets/js/52.b8e4bc18.js",
    "revision": "158dd6ada67ed5b883c0ea9a61fd6a5d"
  },
  {
    "url": "assets/js/53.267c3ba7.js",
    "revision": "03a4d566cb20762b5f2fb9bf53664c94"
  },
  {
    "url": "assets/js/54.033977e5.js",
    "revision": "331fa5738ae2f551fbfda26cea87abc8"
  },
  {
    "url": "assets/js/55.7de8f365.js",
    "revision": "8452c84b2c6bfbec3ca00de453b74df5"
  },
  {
    "url": "assets/js/56.62206535.js",
    "revision": "f28d3aea44e38dfcbbc3dbf4276e63e7"
  },
  {
    "url": "assets/js/57.acb2afd9.js",
    "revision": "e2f06c5f1bea8bb53db0aee20348beb5"
  },
  {
    "url": "assets/js/58.208d40aa.js",
    "revision": "c129ece220506a4a74b6e9400a659d01"
  },
  {
    "url": "assets/js/59.fb3f0b8b.js",
    "revision": "75c4d53cda5f023a2e4bb4473866b0b4"
  },
  {
    "url": "assets/js/6.35e71b54.js",
    "revision": "6f747ac1a2ecd1cfa6d08b07138c35e1"
  },
  {
    "url": "assets/js/60.c13bf9e7.js",
    "revision": "c354920c7450ece96fc0007186581b0e"
  },
  {
    "url": "assets/js/61.7a7bd54e.js",
    "revision": "f29b75081efa51151c6e645660493f0c"
  },
  {
    "url": "assets/js/62.ae292538.js",
    "revision": "a339a2c74d6799b77d2f98d67bfcb6ac"
  },
  {
    "url": "assets/js/63.f37f6321.js",
    "revision": "f746b8b1a9fd30e952ba50e9ad9aa8f8"
  },
  {
    "url": "assets/js/64.fece8ec5.js",
    "revision": "16152f5d4656eda73c8b04e1a03c8952"
  },
  {
    "url": "assets/js/65.6ecb9849.js",
    "revision": "590902beefa50d2cf404458e507f60c4"
  },
  {
    "url": "assets/js/66.dd60e778.js",
    "revision": "e5e3c6f96390952cb15476590ef55d49"
  },
  {
    "url": "assets/js/67.4893cb78.js",
    "revision": "e2471311c53f1b40f0224fb6e7143a54"
  },
  {
    "url": "assets/js/68.350f4682.js",
    "revision": "9011ec515a2858c1ae66b8d5d5e17837"
  },
  {
    "url": "assets/js/69.a74c1848.js",
    "revision": "f36cb6c9e63d4159f1c2ba399117e330"
  },
  {
    "url": "assets/js/7.77865348.js",
    "revision": "fcb69728d0f52505a91accfa35ff505d"
  },
  {
    "url": "assets/js/70.ffc7d3d1.js",
    "revision": "509b6c79ef6faeda9eb282e5a743db0f"
  },
  {
    "url": "assets/js/71.7799fa1f.js",
    "revision": "5f48f554c2dfc9ddc3cd81573d704dc2"
  },
  {
    "url": "assets/js/72.d39e1f2c.js",
    "revision": "26ea5737f4383fbd5a8adb3428189ae9"
  },
  {
    "url": "assets/js/73.fd858676.js",
    "revision": "2a38d56b1e536b51044f4f5319619861"
  },
  {
    "url": "assets/js/74.26922735.js",
    "revision": "295dc90df875057d8ccd44fe9af612a4"
  },
  {
    "url": "assets/js/75.79e61785.js",
    "revision": "e4defc72e693ce04f16286bf09f8e0e8"
  },
  {
    "url": "assets/js/76.c0a40a8e.js",
    "revision": "3fb745330b83853214903aedcc17dda4"
  },
  {
    "url": "assets/js/77.bb7199f4.js",
    "revision": "1e67f1a81bd290ecc6d4015f371526ad"
  },
  {
    "url": "assets/js/78.3a055c70.js",
    "revision": "c530c23354b2c59d2f58e564b89cc52c"
  },
  {
    "url": "assets/js/79.c96c91af.js",
    "revision": "5ac87d7c3cdcdde3a7cbd599dce6dbf2"
  },
  {
    "url": "assets/js/8.a98dab0c.js",
    "revision": "ef6a8889940ff1dc2e90f47c46541b05"
  },
  {
    "url": "assets/js/80.cf6a38fd.js",
    "revision": "9417184de5e36c68f4a72a94146437d2"
  },
  {
    "url": "assets/js/81.00eae050.js",
    "revision": "fde055bcea9f1ae147eb909d80cd2ff2"
  },
  {
    "url": "assets/js/82.d177437c.js",
    "revision": "abc3f369b0ea45c0fe19d27fe77dc07d"
  },
  {
    "url": "assets/js/83.0a85de52.js",
    "revision": "1c385218669b1e2307ffcf185fd3b70d"
  },
  {
    "url": "assets/js/84.45a6d8ad.js",
    "revision": "e6acb9f56b40e135fd1620cdc4a7c6db"
  },
  {
    "url": "assets/js/85.215b6e7a.js",
    "revision": "fa0ba7fdda77eec21e747fbce97e7bea"
  },
  {
    "url": "assets/js/86.c141f2e5.js",
    "revision": "f18ee18010ad171842143e19a9e1b191"
  },
  {
    "url": "assets/js/87.667b398e.js",
    "revision": "993a8de22365e2e3ef5d488bf35fc71b"
  },
  {
    "url": "assets/js/88.03b42cff.js",
    "revision": "52554bc3e3fdb68115e83e7a93198ac6"
  },
  {
    "url": "assets/js/89.62956965.js",
    "revision": "c088bee9d5d07c774ba306022a665ce7"
  },
  {
    "url": "assets/js/9.d4c0e7b4.js",
    "revision": "2783c77a8ec846c2864e13c0d7f04983"
  },
  {
    "url": "assets/js/90.efba7245.js",
    "revision": "43caff201f87952a71df3b0a9b449954"
  },
  {
    "url": "assets/js/91.5f6ffa76.js",
    "revision": "8297bf7f97bca79303eb95a17662d1e5"
  },
  {
    "url": "assets/js/92.f35e42a2.js",
    "revision": "dc15b7d242742a281c10dd1899c70bdb"
  },
  {
    "url": "assets/js/93.25033592.js",
    "revision": "3c013668363d8675ef74235b9839ea69"
  },
  {
    "url": "assets/js/94.5543d738.js",
    "revision": "56687518e0649f14916122c4a7fff671"
  },
  {
    "url": "assets/js/95.32733803.js",
    "revision": "8262f9581a32a38d7c93274af53ef577"
  },
  {
    "url": "assets/js/96.932abcd0.js",
    "revision": "db1bef3b0baa01ce2646bac3b007079e"
  },
  {
    "url": "assets/js/97.596723ad.js",
    "revision": "31f58978621304793af4b31797f7e43a"
  },
  {
    "url": "assets/js/98.4ebd092d.js",
    "revision": "133292b9444dec7d893c136b6c5c1632"
  },
  {
    "url": "assets/js/99.9e578172.js",
    "revision": "6b1f39dc69a3f7f7dee388dbd53745a8"
  },
  {
    "url": "assets/maven/yky_1511451890.png",
    "revision": "77ff1442151e966c49fb824955221c8a"
  },
  {
    "url": "assets/maven/yky_1511452022.png",
    "revision": "90eadffaaf2d57c493d81c919d9a8f5a"
  },
  {
    "url": "assets/maven/yky_1511452924.png",
    "revision": "dda5912e2eb31e62b8c5b19513a01939"
  },
  {
    "url": "assets/maven/yky_1528025821.png",
    "revision": "73a2dea92b8669d2be3f203c266282e9"
  },
  {
    "url": "assets/maven/yky_1573115273.png",
    "revision": "1813bcc1b3a8f5de8e3711132a4d293e"
  },
  {
    "url": "assets/maven/yky_1573199544.png",
    "revision": "7bda5c7c9bc4ba999cc16920a5ec1cf7"
  },
  {
    "url": "assets/maven/yky_1573199700.png",
    "revision": "ea52b49005fadb189bd01a433cda7f56"
  },
  {
    "url": "assets/maven/yky_1573199996.png",
    "revision": "460e15f958a2e27626ea9bd1f1821bee"
  },
  {
    "url": "assets/maven/yky_1573200106.png",
    "revision": "65a71086f7c34f71185ae76691eafeb9"
  },
  {
    "url": "assets/maven/yky_1573200584.png",
    "revision": "ad52d736d9fddf0d9459e83619750596"
  },
  {
    "url": "assets/maven/yky_1573200610.png",
    "revision": "7d41c5d1eb494024b4f6a79dee4452fe"
  },
  {
    "url": "assets/maven/yky_1573200710.png",
    "revision": "39c07f2cdcc8b424e4858694f7ed7228"
  },
  {
    "url": "assets/maven/yky_20200520111258.png",
    "revision": "10d799adaff30c471b23dc4c5b4c9dd5"
  },
  {
    "url": "assets/maven/yky-1234522132.png",
    "revision": "bba65997e37ee04cdb43eb72ea45f7eb"
  },
  {
    "url": "assets/maven/yky-123741238.png",
    "revision": "e22cbca05c77e703dba939b92c983c71"
  },
  {
    "url": "assets/maven/yky-1521351232.png",
    "revision": "9adff42f1f55712d31fe8a2dfe1730d9"
  },
  {
    "url": "assets/maven/yky-1573111370.png",
    "revision": "dcc22d922577e61999e7113cda0b1243"
  },
  {
    "url": "assets/maven/yky-1573115273.png",
    "revision": "1813bcc1b3a8f5de8e3711132a4d293e"
  },
  {
    "url": "assets/maven/yky-15734312345.png",
    "revision": "d5139745977a95624a5b019022494c17"
  },
  {
    "url": "assets/maven/yky-15734367557.png",
    "revision": "d5139745977a95624a5b019022494c17"
  },
  {
    "url": "assets/maven/yky-1576253781.png",
    "revision": "0cabf4fef6df60683623610f8a5a7255"
  },
  {
    "url": "assets/maven/yky-1578321747.png",
    "revision": "e9e919ad026ea5b14db708a35d72b19c"
  },
  {
    "url": "assets/maven/yky-2579376612.png",
    "revision": "883c7548381e7801bb183256b69c594b"
  },
  {
    "url": "assets/mvc/yky-1827462833.png",
    "revision": "fa0e0fafe30c5648705b30285aac05aa"
  },
  {
    "url": "assets/mvc/yky-1834759827.png",
    "revision": "10eef05adc20280cac7aad1965461e07"
  },
  {
    "url": "assets/mvc/yky-1837462657.png",
    "revision": "cc2fbc1f9bf565e46baf54a72a1acf88"
  },
  {
    "url": "assets/mvc/yky-1837462674.png",
    "revision": "8edc9abe4ffb2c59fe337146f9c5423a"
  },
  {
    "url": "assets/nexus/clipboard.png",
    "revision": "65c40093829eef00976d9dbd76c1ec48"
  },
  {
    "url": "assets/nexus/yky-20200618194512.png",
    "revision": "7d8d944f4542d3457b31c4ed9a2368e8"
  },
  {
    "url": "assets/nginx/yky-20200424174214.png",
    "revision": "bd4fc4dd95753cee1d63784338aba8ed"
  },
  {
    "url": "assets/nginx/yky-20200510125604.png",
    "revision": "45af16007837fa6b179bbd9024b64d6b"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/0b59ccbdf26ea0dc1a01dfbdb4dd7386.jpeg",
    "revision": "edf6579716b25c4264cf01d211d761d3"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/0c7bae62d54ac26cba68b40bb90ec026.jpeg",
    "revision": "ee2184ba006271c9d4e5e3743a70bc14"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/174ACCD25CDA440EB69CF5692941F1FC.jpg",
    "revision": "9f0c7e1378b8a87ba1d55c5cbb45019b"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/1a48e6c7f504eb44254498ce1596edc6.jpeg",
    "revision": "b0691ae88d0133a71ef8579361e2b5e0"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/1fbc635f82dd1101ff6280349c4e2684.jpeg",
    "revision": "ceef88da42014ca641129a607066c154"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/23bbf940df9a190a229362809d735018.jpeg",
    "revision": "776b876a75863ed48b276150660a9e0c"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/2a207c1de72120429861b70f659862d6.jpeg",
    "revision": "891ec483a894a0521515324c47664121"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/2ced80556521d4a1ca99bd0819ffedf5.jpeg",
    "revision": "9704283459fd316416d6c41d632e9632"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/3277bbad2cd2a13205b073ea981c8c21.jpeg",
    "revision": "4e8e030fd09099069d18bb8bcbec5303"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/3656a562ee6bd458d45f6c8d239f8988.jpeg",
    "revision": "5f7a2d0ba0c07deb05799414f07c6810"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/3b964c8a4456f72e6c46e636afae3e77.jpeg",
    "revision": "c22f3001bf7960b77de002f35e51dff2"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/3bf2bd3ecc8e54601436a84c0e65e643.jpeg",
    "revision": "a42fc3931ddf1bb06d13325754b77f13"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/3c4f021ea82364bb288fed1af3dfc137.jpeg",
    "revision": "df2905524e397a9cc065428b4f30f68e"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/3dded82696e8fba43b6b731aec83c546.jpeg",
    "revision": "d4578dbd9c770e1c7e2ca9a3220b7aed"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/40575d0305adc6be6cb2014195ee8c90.jpeg",
    "revision": "419019a0aa960e1f9a28050afbed3b87"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/4d136fa2305b7fd9d826015d541b7fa2.jpeg",
    "revision": "55a3e29c9e5d3d150aa475148bc3e99e"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/54e642be85311b8ad8bf21924f3672df.jpeg",
    "revision": "cd4dc837b467728d789f2f7ff2a46c0b"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/56740561fdcb3f861dd5783bd7ec3e34.jpeg",
    "revision": "9d252fc1248ba8ab20ff8095358e8808"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/5bfe08f726122fa68da5ffbb97c47be8.jpeg",
    "revision": "86a1f90a0360ccc734195e433c9ac525"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/613059ec155422aefeadeee28afead70.jpeg",
    "revision": "7346030d25cee79521e3737ab283d8f4"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/6233ac9e721347373f24e99e36faf253.jpeg",
    "revision": "35909b83189b7096409a51b08ee26384"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/6a1c78ad1f71507b9bca786548c63efb.jpeg",
    "revision": "8140407463e0cbf85361ef8320df8d7d"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/6a8c9398354c12beeed8b2ed95ab1a07.jpeg",
    "revision": "8c569f813aee04ced7dc370d4bd4f750"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/76030947cb1bc4ebecfc57f2b3a08678.jpeg",
    "revision": "38f52aeba0ac225d0966410ff3ebe154"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/95b8eec16b32a85ddfee6ac5e28b2266.jpeg",
    "revision": "cbfefc48d8e40f9833f80768f4990a08"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/9cb5a92af42b325f742120da30d3bd45.jpeg",
    "revision": "d91e7e7e7ce83d631049d5fafbc3da31"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/aab6270ef48ada829f73af1aacf1594a.jpeg",
    "revision": "cd7c9ba1732b7f470a9ee143d4c38815"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/b16165e3b0af80f898cc150a468440d9.jpeg",
    "revision": "c4377d6504047a73f9d1148bd5e415e3"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/c0cabe76e369476bf8658a3b4820bce0.jpeg",
    "revision": "6f50786314992b1e52aca69e3941d4dc"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/c0e101dacdc6ea1f5e8e79517d12191e.jpeg",
    "revision": "35d4dcc5e965cae4fb435a8e2d3c8051"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/d0e83bd9e78fa329c30a6fe7010e8bf2.jpeg",
    "revision": "896acef299335b7db5319aa1408805bb"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/d391b705a0eeded2789c075ba6156ce6.jpeg",
    "revision": "1b902d292039bcaddf3bf9a440027808"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/d9f4327f00d2baaf9370f1a93b747946.jpeg",
    "revision": "7b5a7e282549284a61b32cdc2a2c6815"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/E2ADBF99DC86425E8DA5596558D8E38D.jpg",
    "revision": "ab8621a72686c4745408dc878da87b04"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/e3c99117bb3d2999b34360ddba3747d3.jpeg",
    "revision": "cfeacc5d35c1eca934e767fedcf35f8d"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/e6475ada548c9b1db45c5ccab4cf2800.jpeg",
    "revision": "52bad8c16438713b4305c9a179663734"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/e90f66800c9aa9f3d1398ccdd8443dc9.jpeg",
    "revision": "34c343d5cafbbb460a24330feca47f94"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/e9a1ceff20b64e58764c35ec6362949d.jpeg",
    "revision": "a0b92688a93c275aa1cd928498de232a"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/ee3a355a5efa0141ce272ec4c3c7f52d.jpeg",
    "revision": "fd11b562da05f7c12eeca481f9d7a11b"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/fd335fed3d87f9b493b0ca525013b32e.jpeg",
    "revision": "7cd4f21c0b3ff203d561f37b1656f8f1"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-102837612.png",
    "revision": "1ed7f4ca91f809d7e0ea0e2de65a5ac5"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-1231236612.png",
    "revision": "3b46ae9fb56f04a88f6833114397b567"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-123881272.png",
    "revision": "f684b06c4c17e9b3a08b8ee7f9745d2c"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-1584266705.png",
    "revision": "df91ed57d7604f5a109759ddc1392348"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-181726312.png",
    "revision": "35de7b2bedfac2d84d14c4388bc070ad"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-1827461273.png",
    "revision": "186f3a4f35d9538d825775f932eb0151"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-1917256312.png",
    "revision": "baaa6e8343c19ecf80648c7c7390fbca"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-192731233.png",
    "revision": "460978d1e1ff589f9809667b332d65e4"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-192736123.png",
    "revision": "08b104edbc1aa79311dcffa73d03b1eb"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-1927461233.png",
    "revision": "89c6b8e97ddf39b5d18a764004161121"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-19276482384.png",
    "revision": "6f3b47cf017ba49486532e56ead83170"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-1982736123.png",
    "revision": "4c01bf9d07227188401c6f1d1d9522cd"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-20150924172800834.png",
    "revision": "9d9adecbe04a93f480c4c5a612730f1d"
  },
  {
    "url": "assets/spring-cloud-itoken-prepare/yky-20150924173757246.png",
    "revision": "34180726462176654eb20841d292de2c"
  },
  {
    "url": "assets/spring-cloud-itoken/yky-071316110001.png",
    "revision": "c859eaa9eb160bfe13ec138ea608bcbe"
  },
  {
    "url": "assets/spring-cloud-itoken/yky-1531495566.png",
    "revision": "18d80bc6dddcf4daf686aa1a97d0f093"
  },
  {
    "url": "assets/spring-cloud-itoken/yky-1531497604.png",
    "revision": "f325afe58d3efbc15f74f239cc6856c1"
  },
  {
    "url": "assets/spring-cloud-itoken/yky-1531497963.png",
    "revision": "924dca5b43ed6825a8e14132966b0cfa"
  },
  {
    "url": "assets/spring-cloud-itoken/yky-1531499229.png",
    "revision": "284cfa17ce9ba1e47dc9c027fb29423c"
  },
  {
    "url": "assets/spring-cloud-itoken/yky-201807130002.png",
    "revision": "38bb9544ffa2ae1fed7b21c04f44ad48"
  },
  {
    "url": "assets/spring-cloud-itoken/yky-201807140001.png",
    "revision": "2f3b2eb354cf3528d0c29ee659037309"
  },
  {
    "url": "assets/spring-cloud-itoken/yky-2018072916110001.png",
    "revision": "0387e50b6e98d9a3b58e2c4812a39efe"
  },
  {
    "url": "assets/spring-security-oauth2/yky_201904010001.png",
    "revision": "561dca03b461216bc6887cbb11d06bca"
  },
  {
    "url": "assets/spring-security-oauth2/yky_20200521103727.png",
    "revision": "64c599be5b526e76019f3616831048a9"
  },
  {
    "url": "assets/zookeeper-analysis/yky-20200510142631.png",
    "revision": "ab3cf8e9d3ca057beb7613aa03515fbb"
  },
  {
    "url": "assets/zookeeper-analysis/yky-3AACcfiC01UY046.png",
    "revision": "8287dba09d3eaaee287174836f616a4f"
  },
  {
    "url": "assets/zookeeper-analysis/yky-AABFGHyGNc950.png",
    "revision": "810abf2d191aad53e039f18dda765cdb"
  },
  {
    "url": "assets/zookeeper-analysis/yky-AABQBLohKvo019.png",
    "revision": "c390864a2e1afcbf7aa5b9ca8d056aef"
  },
  {
    "url": "assets/zookeeper-analysis/yky-AABsJSpQkFI688.png",
    "revision": "4aed1628dcc081583cc5b79a71493ae7"
  },
  {
    "url": "assets/zookeeper-analysis/yky-AAC_yMQVCFo712.png",
    "revision": "c1097392a16df81730f47dabd7bb1a6e"
  },
  {
    "url": "assets/zookeeper-analysis/yky-AAnymAAB32xbrhxQ973.png",
    "revision": "dc84cbbf6ae448b572c4fcc99b944229"
  },
  {
    "url": "assets/zookeeper-analysis/yky-AOIONAAB3daUjikw147.png",
    "revision": "8898ef0584e0faa7d5fe445a29a68755"
  },
  {
    "url": "assets/zookeeper-analysis/yky-AZzwGAABPrrtajyI575.png",
    "revision": "92fcb15d622954f0365c6c59338e1526"
  },
  {
    "url": "assets/zookeeper-analysis/yky-uAAAtBwGI74E989.png",
    "revision": "91abcf7c82fa3592efd9e84bdd3d5edf"
  },
  {
    "url": "favicon.png",
    "revision": "0b342e93388594ff555f872d46db83e3"
  },
  {
    "url": "icons/128x128.png",
    "revision": "3ebb9fc0fdc1565e7f054925a379d728"
  },
  {
    "url": "icons/144x144.png",
    "revision": "3ebb9fc0fdc1565e7f054925a379d728"
  },
  {
    "url": "icons/192x192.png",
    "revision": "3ebb9fc0fdc1565e7f054925a379d728"
  },
  {
    "url": "icons/256x256.png",
    "revision": "3ebb9fc0fdc1565e7f054925a379d728"
  },
  {
    "url": "icons/512x512.png",
    "revision": "3ebb9fc0fdc1565e7f054925a379d728"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "9fb9bc8aa9a4de64716372cb3fc53901"
  },
  {
    "url": "index.html",
    "revision": "3628abb16ed3cfe1f16707939048571d"
  },
  {
    "url": "zh/apache-shiro/index.html",
    "revision": "62cc07d398fd584f3ffb3820ce2e8613"
  },
  {
    "url": "zh/apache-shiro/RememberMe.html",
    "revision": "caa0cbdde97e8c747fd8db31fe388762"
  },
  {
    "url": "zh/apache-shiro/session-管理.html",
    "revision": "7f2bb2ace17811fb259717a0442e5590"
  },
  {
    "url": "zh/apache-shiro/shiro-架构.html",
    "revision": "e9ddd1acf952466c9f3fee7d83add9dc"
  },
  {
    "url": "zh/apache-shiro/shiro-的标签使用.html",
    "revision": "508aefb3e4b8b23178203dee3dfd931a"
  },
  {
    "url": "zh/apache-shiro/Shiro-认证流程.html",
    "revision": "af36fe805ae21d7c5856ea4063b1e99f"
  },
  {
    "url": "zh/apache-shiro/SpringBoot-应用整合-Shiro-案例.html",
    "revision": "0aec1a01d89cb00934cc1d9d269c2406"
  },
  {
    "url": "zh/apache-shiro/SpringBoot-整合-Shiro-完成权限管理案例.html",
    "revision": "b690964f591bacd68c36783be7964b3c"
  },
  {
    "url": "zh/apache-shiro/基于JavaSE应用-Shiro-的基本使用.html",
    "revision": "466d910a6bb718f522290b2030c61358"
  },
  {
    "url": "zh/apache-shiro/密码加密介绍.html",
    "revision": "8062f27df092f80c7c4a92cd9638fd26"
  },
  {
    "url": "zh/apache-shiro/小知识点-权限管理.html",
    "revision": "9c72be615bf151a2b2527a4002069303"
  },
  {
    "url": "zh/apache-shiro/缓存使用.html",
    "revision": "3872a427af249d25d30899abe31105d1"
  },
  {
    "url": "zh/bootstrap/index.html",
    "revision": "9947a172edd12d3ece21f06e82607df2"
  },
  {
    "url": "zh/changelog/2020-05.html",
    "revision": "bdbbe8cc464d008beae01d9d30a446c9"
  },
  {
    "url": "zh/changelog/index.html",
    "revision": "931300197faf8c32728d1ed8ffbef0a7"
  },
  {
    "url": "zh/gengxin/index.html",
    "revision": "867dbcc00a6aaefbde7fa04dedf53db2"
  },
  {
    "url": "zh/gitflow/Forking-工作流.html",
    "revision": "f5d6ea75112006ca577cc47fd23d252e"
  },
  {
    "url": "zh/gitflow/Git-工作流简介.html",
    "revision": "c55a641f9912dcf2bf40736e29eb9f90"
  },
  {
    "url": "zh/gitflow/GitFlow-工作流.html",
    "revision": "3e2c16e76a20aa21e4a4fdffe3d04c63"
  },
  {
    "url": "zh/gitflow/index.html",
    "revision": "75c4cf8a70f7cbe9a3dfcc4b411213bf"
  },
  {
    "url": "zh/gitflow/Pull-Requests.html",
    "revision": "d081f11d2f9af8abd38a41226cd0a7c6"
  },
  {
    "url": "zh/gitflow/什么是-Git.html",
    "revision": "8efc82d4a7745b70dab7474e6e66b3ea"
  },
  {
    "url": "zh/gitflow/功能分支工作流.html",
    "revision": "66c34c75fdbe3072171bff1426da5e0b"
  },
  {
    "url": "zh/gitflow/安装-Git.html",
    "revision": "27d699341c5cf72fc2aa19802cfc6fc5"
  },
  {
    "url": "zh/gitflow/集中式工作流.html",
    "revision": "8eb69b094926cb10e82374d48e15d78c"
  },
  {
    "url": "zh/guide/Apache-Shiro.html",
    "revision": "b5a7c85798b930b51bf3887cc0ab6241"
  },
  {
    "url": "zh/guide/GitFlow-工作流指南.html",
    "revision": "4b02661ef27c0972c50d3e17d7bee09d"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c2b57cedcb83c0b7714dd7a4745fcc9b"
  },
  {
    "url": "zh/guide/Nginx.html",
    "revision": "75803007b3af887abb5cc8be1f957a9a"
  },
  {
    "url": "zh/guide/Spring-Cloud-iToken.html",
    "revision": "5a24f6f534c74316210db4bc5e8e2c3e"
  },
  {
    "url": "zh/guide/Spring-Security-oAuth2.html",
    "revision": "8e46f9679d21aa814901be778d73d5ee"
  },
  {
    "url": "zh/guide/Zookeeper-源码分析与实战.html",
    "revision": "41f2437c7ee524935630da7ec15307c7"
  },
  {
    "url": "zh/guide/再谈谈微服务.html",
    "revision": "6358fd52b438bc35174fc9d43b8c6010"
  },
  {
    "url": "zh/guide/安装教学篇.html",
    "revision": "5126c6954d19ad3262c91e64058ef3a3"
  },
  {
    "url": "zh/guide/平台管理.html",
    "revision": "235c106157f5be1206c5065e91ecb7ec"
  },
  {
    "url": "zh/guide/微服务解决复杂问题.html",
    "revision": "c2bb6290925ca5696f7583ecebfa8a6b"
  },
  {
    "url": "zh/guide/走向单体地狱.html",
    "revision": "44632bb71a9997f382fa91bc0c7ba299"
  },
  {
    "url": "zh/idea/index.html",
    "revision": "a8781894540a5ca9650ef30cef431594"
  },
  {
    "url": "zh/idea/第一个 IDEA 单体应用.html",
    "revision": "20b271351d0f92ea0b3d2fcd983447d9"
  },
  {
    "url": "zh/junit/index.html",
    "revision": "b5d79be37f15950f47e059d785033a89"
  },
  {
    "url": "zh/junit/JUnit-断言.html",
    "revision": "6a8f6d3033361972b1088c3c8667ee6a"
  },
  {
    "url": "zh/junit/JUnit-注解.html",
    "revision": "450ad2f284b7e93a09c49bc49b871d75"
  },
  {
    "url": "zh/junit/知识点：测试.html",
    "revision": "0b28bcb777311e76585a0bbacf92b3c8"
  },
  {
    "url": "zh/junit/第一个-JUnit-单元测试.html",
    "revision": "907f6e169ee7738a75d18efa4c687402"
  },
  {
    "url": "zh/log4j/index.html",
    "revision": "c1e4d447daef18de4c40c61b578db2bb"
  },
  {
    "url": "zh/log4j/Log4j-日志级别.html",
    "revision": "23366bbdfecf55cb23b3c387027a1b2c"
  },
  {
    "url": "zh/log4j/Log4j-日志输出控制文件.html",
    "revision": "1f97ccac097de73bcbd13549e1d561e0"
  },
  {
    "url": "zh/log4j/第一个-Log4j-日志文件.html",
    "revision": "ae0ad4c05a0296ca2aaa99d7d6a62c39"
  },
  {
    "url": "zh/maven/index.html",
    "revision": "5666d5545458ca99852d7ff86d73eab8"
  },
  {
    "url": "zh/maven/Maven POM.html",
    "revision": "396f15811089fa4a325deb7dda7fba1b"
  },
  {
    "url": "zh/maven/Maven 依赖机制.html",
    "revision": "22d4a44d08534b2e832c3c21e5da3229"
  },
  {
    "url": "zh/maven/Maven 安装配置.html",
    "revision": "24c38a0a1b19e949f45aa7a3b070e005"
  },
  {
    "url": "zh/maven/Maven 常用命令.html",
    "revision": "499a31655b57f06625b8b13020dd8f69"
  },
  {
    "url": "zh/maven/Maven 快照.html",
    "revision": "0bdfce469f1bcd2b7d283261b65c0146"
  },
  {
    "url": "zh/maven/Maven 插件.html",
    "revision": "a31826409144048e4695354cd72abd5e"
  },
  {
    "url": "zh/maven/Maven 的本地仓库与中央仓库.html",
    "revision": "fb6de8a90c76fd8aa08e86dcae073806"
  },
  {
    "url": "zh/maven/知识点 MavenPom.html",
    "revision": "54174cfd8baa51175e815b393175c4b4"
  },
  {
    "url": "zh/maven/第一个 Maven 程序.html",
    "revision": "322246f19f1d5c011baa6f0bf257890c"
  },
  {
    "url": "zh/maven/解决 Maven 无法自动下载依赖的问题.html",
    "revision": "c5cc2d44654a491ab092916c311aca81"
  },
  {
    "url": "zh/micro-service-about/index.html",
    "revision": "7630af499f7a7ce0358dbb21b781f77f"
  },
  {
    "url": "zh/micro-service-about/SOA-架构与微服务架构的区别.html",
    "revision": "f0d8cc6abec79673e42debb69aed69f7"
  },
  {
    "url": "zh/micro-service-about/传统架构与微服务架构的区别.html",
    "revision": "a678f0c6a18f91c02e381b0103880cd3"
  },
  {
    "url": "zh/micro-service-about/微服务的实践.html",
    "revision": "10291c9224c19635a2477002a8e686fb"
  },
  {
    "url": "zh/micro-service-about/微服务的特征.html",
    "revision": "e7dea81033cbcdb4a0cbe73d87a7eba0"
  },
  {
    "url": "zh/mvc/index.html",
    "revision": "735cd81a1e5bc672c0f7cad98e766f32"
  },
  {
    "url": "zh/mvc/什么是MVC模式.html",
    "revision": "5e7a8b0c87677fab5c95a1aaf157e23d"
  },
  {
    "url": "zh/mvc/小知识高内聚低耦合.html",
    "revision": "9383037ce2a90a65c955a260397ac476"
  },
  {
    "url": "zh/nexus/index.html",
    "revision": "5464f78d0b53d2f6b01c1b9fbfaf63fe"
  },
  {
    "url": "zh/nexus/Maven-仓库介绍.html",
    "revision": "63f1a426d9450e297b9a7841017fe67c"
  },
  {
    "url": "zh/nexus/Maven-私服-Nexus-的好处.html",
    "revision": "24f60c83eefa88a81a139a76710ce511"
  },
  {
    "url": "zh/nexus/在项目中使用-Maven-私服.html",
    "revision": "b976c04d21640741b62f63749a72ebdd"
  },
  {
    "url": "zh/nexus/基于-Docker-安装-Nexus.html",
    "revision": "054806cd29d221ae262d5642882de445"
  },
  {
    "url": "zh/nginx/index.html",
    "revision": "6057cca96f2478f0ea67bbd07eb5899b"
  },
  {
    "url": "zh/nginx/Nginx-虚拟主机.html",
    "revision": "90187c3857c86b2ebf45cf5005b10b80"
  },
  {
    "url": "zh/nginx/小知识-Nginx-惊群问题.html",
    "revision": "426e0477dad0d9571e864391aa2543fb"
  },
  {
    "url": "zh/nginx/知识点-CDN.html",
    "revision": "9399b80adefb921c4fbef976e3873b18"
  },
  {
    "url": "zh/spring-cloud-alibaba-dubbo/index.html",
    "revision": "5d0acfd3abdbaf7abf2518fd1a31ce21"
  },
  {
    "url": "zh/spring-cloud-itoken-prepare/index.html",
    "revision": "c2fb0ac7a1067b7b78c984bfd7056868"
  },
  {
    "url": "zh/spring-cloud-itoken-prepare/了解-XP-极限编程.html",
    "revision": "1901a05aa2f6a3772c7147861eb6aff3"
  },
  {
    "url": "zh/spring-cloud-itoken-prepare/在-GitLab-上创建项目.html",
    "revision": "14af1ee969030ea349a5fb78eb1dcfea"
  },
  {
    "url": "zh/spring-cloud-itoken-prepare/部署服务到容器.html",
    "revision": "a548917e8e33a6627902c34e81142ba4"
  },
  {
    "url": "zh/spring-cloud-itoken/index.html",
    "revision": "d09b5c2de4f0ce5af0399dc1fabbb073"
  },
  {
    "url": "zh/spring-cloud-itoken/iToken-项目简介.html",
    "revision": "8a043b5936fb3abe2ae9049b02c60d28"
  },
  {
    "url": "zh/Spring-mvc/index.html",
    "revision": "2fa255b1d50f70d3b99a459df21d6af4"
  },
  {
    "url": "zh/Spring-mvc/Maven-模块化开发.html",
    "revision": "b729b1082c7494c5ab1293d11f0ef179"
  },
  {
    "url": "zh/Spring-mvc/Spring MVC-@ResponseBody.html",
    "revision": "d552a48de01696cfe41b415d95747a45"
  },
  {
    "url": "zh/Spring-mvc/Spring-MVC-拦截器的使用.html",
    "revision": "ff38e30d021088be3ed57c7172d01cd2"
  },
  {
    "url": "zh/Spring-mvc/Spring-MVC-表单标签库.html",
    "revision": "9db889e93f9e009af076cfe687d7486d"
  },
  {
    "url": "zh/Spring-mvc/Spring-整合-Spring-MVC.html",
    "revision": "d268d6592b6b15e6babc37b084cb3a3b"
  },
  {
    "url": "zh/Spring-mvc/SpringMVC-@ModelAttribute.html",
    "revision": "617ec0af22794f35066de7debac8b864"
  },
  {
    "url": "zh/Spring-mvc/第一个-Controller-控制器.html",
    "revision": "a7adda67044ab6f2369f7c1f6b65a2bb"
  },
  {
    "url": "zh/spring-security-oAuth2/index.html",
    "revision": "323d172c610196cc32d93e41a8960ea2"
  },
  {
    "url": "zh/spring-security-oAuth2/为什么需要-oAuth2.html",
    "revision": "2c2416a68bad643b8dee89df612225f6"
  },
  {
    "url": "zh/spring-web/ApplicationContextAware.html",
    "revision": "917f23f1c27c3e37f697c2a95f247c83"
  },
  {
    "url": "zh/spring-web/Bean-的装配方式.html",
    "revision": "4481df6b00611a8297e5c5703ea36e27"
  },
  {
    "url": "zh/spring-web/index.html",
    "revision": "989d73e753f6e52349f15e7d16f0c8f7"
  },
  {
    "url": "zh/spring-web/浏览器端存储技术简介.html",
    "revision": "115256e0ae1f4ca7328b78f0e7e35243"
  },
  {
    "url": "zh/spring/index.html",
    "revision": "b500c9d8832b192cdff4b089c1d28b04"
  },
  {
    "url": "zh/spring/Spring-与-loC.html",
    "revision": "dd4533eaa9819f60eb7a71c465a512de"
  },
  {
    "url": "zh/spring/Spring-体系结构.html",
    "revision": "99fbeace4cab2a701678dacf502e3c88"
  },
  {
    "url": "zh/spring/Spring-的特点.html",
    "revision": "e28ee6a5ed2af7f53280c8678b9d2745"
  },
  {
    "url": "zh/spring/第一个-Spring-应用程序.html",
    "revision": "d8ed0ea2bbdafd35deb5c4a4235362ed"
  },
  {
    "url": "zh/zookeeper-analysis/index.html",
    "revision": "863d3519e81842f4271d200f6ca26a9e"
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
