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
    "url": "assets/js/100.31f4f587.js",
    "revision": "a6409bc30f46eabb95ebc5510e99b941"
  },
  {
    "url": "assets/js/101.3a5d09ab.js",
    "revision": "650019b9caf919b5b51a51af871ce501"
  },
  {
    "url": "assets/js/102.3f4bdca5.js",
    "revision": "b3e5d0b66e890d365579dfa416ea1aed"
  },
  {
    "url": "assets/js/103.d3ea5566.js",
    "revision": "ebc2218ceb1db243f52fb8ced8c48394"
  },
  {
    "url": "assets/js/104.c21ffabf.js",
    "revision": "3958b564d2313f5d2e32b6dc3205c70a"
  },
  {
    "url": "assets/js/105.2b0c1d17.js",
    "revision": "cae5d8d57d334a1f2915f29ab1d4fc61"
  },
  {
    "url": "assets/js/11.04529c8f.js",
    "revision": "42326803c321ecc2cf7e94c6da93447f"
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
    "url": "assets/js/20.fbd38832.js",
    "revision": "4fdafff702612c79ac0c1363b5040c9e"
  },
  {
    "url": "assets/js/21.470029c0.js",
    "revision": "76d3028e4f1877857b90da5ef6bfb1c3"
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
    "url": "assets/js/28.d47473d1.js",
    "revision": "db6105faafc1851c83d399ba7a407369"
  },
  {
    "url": "assets/js/29.fd63b927.js",
    "revision": "37f484ee662e0e7af838d36515a606f4"
  },
  {
    "url": "assets/js/3.318575c0.js",
    "revision": "39126e0ed15a4afe3afdd4993e7bb712"
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
    "url": "assets/js/35.507f9dfd.js",
    "revision": "9e142fe1d675e9652dbdd9921d305317"
  },
  {
    "url": "assets/js/36.e5482636.js",
    "revision": "4497d02fc0a46917a022d95fa7833359"
  },
  {
    "url": "assets/js/37.68cee4f7.js",
    "revision": "423fa680ba32156b1cce872bb634913a"
  },
  {
    "url": "assets/js/38.42c35705.js",
    "revision": "9fac019198a9d014145093d2b4b78019"
  },
  {
    "url": "assets/js/39.6559180a.js",
    "revision": "4fcc9367d338399a663aa4e5b3a47bcc"
  },
  {
    "url": "assets/js/4.e559a794.js",
    "revision": "18d57e129deef61cf84625b4ff13bf4b"
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
    "url": "assets/js/43.bff16cb4.js",
    "revision": "bdc5e84606232a9d0174f5ada048140e"
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
    "url": "assets/js/49.234d192b.js",
    "revision": "5750a87dfc1053f326ef9f398ce592c5"
  },
  {
    "url": "assets/js/5.2db0d042.js",
    "revision": "ff491f2c5cd03de8285662c31654f212"
  },
  {
    "url": "assets/js/50.741634c5.js",
    "revision": "7fb2482fcb865283e58db0b8e14c9af9"
  },
  {
    "url": "assets/js/51.f242ba1d.js",
    "revision": "49b54ddd4ad7d0155a6e62adb5429d6c"
  },
  {
    "url": "assets/js/52.30ed35db.js",
    "revision": "dbd2cf8e2ab6085b24ef7c984c47d947"
  },
  {
    "url": "assets/js/53.5437bd2b.js",
    "revision": "c357cfc2887a4adf066e6719d74b6148"
  },
  {
    "url": "assets/js/54.196cb688.js",
    "revision": "81ad087a9ad38ba18412fd658bf71187"
  },
  {
    "url": "assets/js/55.3f4939ce.js",
    "revision": "9a41fd9120f2c8c7bf170a8142325190"
  },
  {
    "url": "assets/js/56.f0db9799.js",
    "revision": "f6b24e3983e01083a98bdc7298d20cc0"
  },
  {
    "url": "assets/js/57.98aed42e.js",
    "revision": "ded7e61510b8d25033eb661273a395a7"
  },
  {
    "url": "assets/js/58.23ae6264.js",
    "revision": "448cc310ea24ecda32eed92a28e09685"
  },
  {
    "url": "assets/js/59.4d070ee9.js",
    "revision": "4ce636c2b74c182c780a52cc0f0f2f27"
  },
  {
    "url": "assets/js/6.94a10221.js",
    "revision": "7d619b722339929694c4e38f2a35b160"
  },
  {
    "url": "assets/js/60.7d981c9a.js",
    "revision": "c08de16f70c86858bd1fb00739d41bd3"
  },
  {
    "url": "assets/js/61.7fcf795a.js",
    "revision": "c0f1a7dd3200980fbc96dd32c08e75ce"
  },
  {
    "url": "assets/js/62.eaca034c.js",
    "revision": "93c723392e86568ffdfd07e3d29f5f14"
  },
  {
    "url": "assets/js/63.91a6fb3a.js",
    "revision": "4b73b6ad287c81fc0588f8f78e39b63d"
  },
  {
    "url": "assets/js/64.f1bb51af.js",
    "revision": "c18d1fcfce57d50651fe4df9933bf4e9"
  },
  {
    "url": "assets/js/65.3e74438f.js",
    "revision": "4719c86497eb3ddaff4e1322f3ef80ac"
  },
  {
    "url": "assets/js/66.28305fb6.js",
    "revision": "93746c67c7123e1a9044d38a5ffd9c15"
  },
  {
    "url": "assets/js/67.e0e26571.js",
    "revision": "3ed4fc43adcf433ef95f65e9057768b3"
  },
  {
    "url": "assets/js/68.e071d5d9.js",
    "revision": "8b3124313c9731e1bae7cbe2ca733cc6"
  },
  {
    "url": "assets/js/69.67124035.js",
    "revision": "647aa766807b39059cfb068909c24eb3"
  },
  {
    "url": "assets/js/7.81f19ebc.js",
    "revision": "6da0062f5bdd6fcada2ee0e080e00d80"
  },
  {
    "url": "assets/js/70.87f611d5.js",
    "revision": "2c06cf2786ef6361e1203af08efb355e"
  },
  {
    "url": "assets/js/71.01f0c5ba.js",
    "revision": "117c0191d8235057fa325558342b8c9e"
  },
  {
    "url": "assets/js/72.43832bbd.js",
    "revision": "c6cf52c1325797626fdac83492644ac4"
  },
  {
    "url": "assets/js/73.fb03e2ae.js",
    "revision": "9579b443f33febae86f843419a324ab4"
  },
  {
    "url": "assets/js/74.a075a286.js",
    "revision": "193049dd6b5c8cf6a5d50968fbd4164f"
  },
  {
    "url": "assets/js/75.e8953cff.js",
    "revision": "6793a2dbfbfeaafccc3cb7faa06840a5"
  },
  {
    "url": "assets/js/76.80364208.js",
    "revision": "9d4ed8fef4f27aacfcd37cdbac1e8ca1"
  },
  {
    "url": "assets/js/77.1c348a0f.js",
    "revision": "b73f793a7883bba044c2600b560fafd6"
  },
  {
    "url": "assets/js/78.7c98b4e1.js",
    "revision": "8804423cab74c7fc98f8813686ecd487"
  },
  {
    "url": "assets/js/79.f11cbac6.js",
    "revision": "d9bb3bf838201ede977aaf164ffe9e94"
  },
  {
    "url": "assets/js/8.db2b4fcb.js",
    "revision": "52fb85bc4dcad9a96b2551f8200f81ae"
  },
  {
    "url": "assets/js/80.51439a0f.js",
    "revision": "e1b1c19b81db8f1b7b3d01443b90b465"
  },
  {
    "url": "assets/js/81.15cbd757.js",
    "revision": "18b1ee8e7eef098f3d83ba517c7b2177"
  },
  {
    "url": "assets/js/82.92f02c4a.js",
    "revision": "8f4db92db9009c9a8829f28f0bb3aaea"
  },
  {
    "url": "assets/js/83.e5515407.js",
    "revision": "b0fc0dd8c162fda3f735f4dee13def0e"
  },
  {
    "url": "assets/js/84.8b2222cd.js",
    "revision": "18aa3662875a4a06d772b3df89fbf611"
  },
  {
    "url": "assets/js/85.e6c5ecde.js",
    "revision": "d4b27b7143198d44db1a8cf1d66653f3"
  },
  {
    "url": "assets/js/86.efd7b9af.js",
    "revision": "c46f0c39520c769e6b54722cfe604589"
  },
  {
    "url": "assets/js/87.2064fade.js",
    "revision": "a214ab9af01ab0441ed27963e899dc58"
  },
  {
    "url": "assets/js/88.a923a517.js",
    "revision": "f6985de7e194a70cb911885e65f17fa6"
  },
  {
    "url": "assets/js/89.955c01c2.js",
    "revision": "369d4df5b4a17a6ff290ba18b5d794dc"
  },
  {
    "url": "assets/js/9.d4c0e7b4.js",
    "revision": "2783c77a8ec846c2864e13c0d7f04983"
  },
  {
    "url": "assets/js/90.8db6e761.js",
    "revision": "ff2f0f3aeb32b375d7e48ca7b07c82b4"
  },
  {
    "url": "assets/js/91.beaefdae.js",
    "revision": "945cebefec94a1007caf6d540836cc53"
  },
  {
    "url": "assets/js/92.10535c11.js",
    "revision": "dec8801c177694152bf32fd7bf8a14fc"
  },
  {
    "url": "assets/js/93.098ec0d4.js",
    "revision": "a94ef40f05c5dc039d0daf3741ef5840"
  },
  {
    "url": "assets/js/94.f664308d.js",
    "revision": "7981c0c0bc84d521850f3ffd47d78e7f"
  },
  {
    "url": "assets/js/95.f0bc778c.js",
    "revision": "df8b05dcb35163fe95eca641b8595b91"
  },
  {
    "url": "assets/js/96.708f53d2.js",
    "revision": "b093f20ac02b8c68b7c727848412195e"
  },
  {
    "url": "assets/js/97.cb6a5ec0.js",
    "revision": "b89d23d9c18496117e89ec194b37d796"
  },
  {
    "url": "assets/js/98.f2d832aa.js",
    "revision": "64998cea553011f4d23dcbe008144203"
  },
  {
    "url": "assets/js/99.aa46a8d2.js",
    "revision": "583bac9178061ae1f67392bc0d0d3eeb"
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
    "revision": "1b2521ec2d33e5484f9d8ee712e08637"
  },
  {
    "url": "zh/apache-shiro/index.html",
    "revision": "563b3390a3cc92741d1bd0a568f28e3f"
  },
  {
    "url": "zh/apache-shiro/RememberMe.html",
    "revision": "569b79a072b08f4ee608d4ebf19cf4f1"
  },
  {
    "url": "zh/apache-shiro/session-管理.html",
    "revision": "f819a6463681f3ebb2655266105adcb2"
  },
  {
    "url": "zh/apache-shiro/shiro-架构.html",
    "revision": "df8442896b35b25a1eb66c7a3a7115ed"
  },
  {
    "url": "zh/apache-shiro/shiro-的标签使用.html",
    "revision": "5147e5a7ebc856ea863b8510b7a79047"
  },
  {
    "url": "zh/apache-shiro/Shiro-认证流程.html",
    "revision": "8cbb3a958bfdb72743ec2534679195d3"
  },
  {
    "url": "zh/apache-shiro/SpringBoot-应用整合-Shiro-案例.html",
    "revision": "392fa0e1cef08671f4f69b74edd3870c"
  },
  {
    "url": "zh/apache-shiro/SpringBoot-整合-Shiro-完成权限管理案例.html",
    "revision": "84fa3b9bf775176cb276b8896aa2e32f"
  },
  {
    "url": "zh/apache-shiro/基于JavaSE应用-Shiro-的基本使用.html",
    "revision": "bd5e6f4237f8ffc78c707bb65b195c6e"
  },
  {
    "url": "zh/apache-shiro/密码加密介绍.html",
    "revision": "061794fe0fc7bfeb7dbfdfe9a74a920f"
  },
  {
    "url": "zh/apache-shiro/小知识点-权限管理.html",
    "revision": "db588414c32a5ff6dcf46e3329ecf2a2"
  },
  {
    "url": "zh/apache-shiro/缓存使用.html",
    "revision": "cb79a260625d400df34e781252bfddf6"
  },
  {
    "url": "zh/bootstrap/index.html",
    "revision": "19e43facfb65532fbbe734102c36890e"
  },
  {
    "url": "zh/changelog/index.html",
    "revision": "1fc843a77192fca33dd57a9a6149c99f"
  },
  {
    "url": "zh/changlog/index.html",
    "revision": "3b5248e74523d6777ffa2a98ea56b010"
  },
  {
    "url": "zh/gengxin/index.html",
    "revision": "07961b36d2534f902bc27a8a769dcad1"
  },
  {
    "url": "zh/gitflow/Forking-工作流.html",
    "revision": "aea289fde077f7ba813ecf7ff6a68748"
  },
  {
    "url": "zh/gitflow/Git-工作流简介.html",
    "revision": "714bc61602f02836c83cb3bc61d68340"
  },
  {
    "url": "zh/gitflow/GitFlow-工作流.html",
    "revision": "5d42d5b3d31e815c861e606c1ac33de7"
  },
  {
    "url": "zh/gitflow/index.html",
    "revision": "0bedf05b9a3b0262f1e28a84ecebde78"
  },
  {
    "url": "zh/gitflow/Pull-Requests.html",
    "revision": "9f6af1df9042b8c1e83ccd66c4ca2894"
  },
  {
    "url": "zh/gitflow/什么是-Git.html",
    "revision": "8168752cfa1356bc7fdbb7e6fa74f9df"
  },
  {
    "url": "zh/gitflow/功能分支工作流.html",
    "revision": "d0f18a9a4d1ac90cc9a6321b1c945737"
  },
  {
    "url": "zh/gitflow/安装-Git.html",
    "revision": "e69e9677d45261e1a6b2826469502c5f"
  },
  {
    "url": "zh/gitflow/集中式工作流.html",
    "revision": "8f0ac30b708cb2522670f3884e6435c4"
  },
  {
    "url": "zh/guide/Apache-Shiro.html",
    "revision": "75b5330e1b3de7aef72e2fd1956fc77f"
  },
  {
    "url": "zh/guide/GitFlow-工作流指南.html",
    "revision": "3fd37809e79c885c7274995ed3f27266"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a10a61e5a6e0cd14fdcaed7e8506e0c5"
  },
  {
    "url": "zh/guide/Nginx.html",
    "revision": "55a9f9cf07f50abc49e078cc98822412"
  },
  {
    "url": "zh/guide/Spring-Cloud-iToken.html",
    "revision": "c89e856052af13ab1e82c96671de6f0d"
  },
  {
    "url": "zh/guide/Spring-Security-oAuth2.html",
    "revision": "84b3d141198dd3ecea52aa1dbd9ecab6"
  },
  {
    "url": "zh/guide/Zookeeper-源码分析与实战.html",
    "revision": "a705a10a96504f6dcbca48892097ae39"
  },
  {
    "url": "zh/guide/再谈谈微服务.html",
    "revision": "40bcb3c1985136ccc89896af64a0defe"
  },
  {
    "url": "zh/guide/安装教学篇.html",
    "revision": "b54a0b21359194f1738a3149221473b3"
  },
  {
    "url": "zh/guide/微服务解决复杂问题.html",
    "revision": "5fad1e0ae93b7cb380aaea74237aefa2"
  },
  {
    "url": "zh/guide/走向单体地狱.html",
    "revision": "127f7b0afaae5cfea9114647595bcd20"
  },
  {
    "url": "zh/idea/index.html",
    "revision": "aed7edca51e2cf0fb4755c58fe4ee001"
  },
  {
    "url": "zh/idea/第一个 IDEA 单体应用.html",
    "revision": "894aeac67561f5eab6f9c62b7245d1c7"
  },
  {
    "url": "zh/junit/index.html",
    "revision": "ffcc2998d9d4fb0c446dc497b1aa0583"
  },
  {
    "url": "zh/junit/JUnit-断言.html",
    "revision": "d6a55508875866f11246cfba44bf667a"
  },
  {
    "url": "zh/junit/JUnit-注解.html",
    "revision": "7ef023cac027c04692f288ead4766da8"
  },
  {
    "url": "zh/junit/知识点：测试.html",
    "revision": "1bd8b5287f611c680336f53957141e64"
  },
  {
    "url": "zh/junit/第一个-JUnit-单元测试.html",
    "revision": "e51d0d92fbdff53d934798d06e490bdf"
  },
  {
    "url": "zh/log4j/index.html",
    "revision": "f2902412f688d7725b257d735fa1820c"
  },
  {
    "url": "zh/log4j/Log4j-日志级别.html",
    "revision": "4d89fa66293b899f1445c7b8b643a2e2"
  },
  {
    "url": "zh/log4j/Log4j-日志输出控制文件.html",
    "revision": "755b51ec516dee360f8bc8f945d85dbe"
  },
  {
    "url": "zh/log4j/第一个-Log4j-日志文件.html",
    "revision": "c72e76476a8b0f6a918490661c70aaf7"
  },
  {
    "url": "zh/maven/index.html",
    "revision": "a91fbbdb45260f06601a1a3409ed8eb0"
  },
  {
    "url": "zh/maven/Maven POM.html",
    "revision": "ba0ba80c461f3630a67007f106fffe34"
  },
  {
    "url": "zh/maven/Maven 依赖机制.html",
    "revision": "4db50a5ecbb0280d44901910cb245140"
  },
  {
    "url": "zh/maven/Maven 安装配置.html",
    "revision": "fc18143f86db678671d673dc5b42fa47"
  },
  {
    "url": "zh/maven/Maven 常用命令.html",
    "revision": "aedb98eb406125ef9f2f1ad2934f80bf"
  },
  {
    "url": "zh/maven/Maven 快照.html",
    "revision": "9ca9580c91890b28df247ca7d56b1f23"
  },
  {
    "url": "zh/maven/Maven 插件.html",
    "revision": "494af7084af0fd2091b461412a4f56ce"
  },
  {
    "url": "zh/maven/Maven 的本地仓库与中央仓库.html",
    "revision": "81eda13bcac02849039407059d716ea8"
  },
  {
    "url": "zh/maven/知识点 MavenPom.html",
    "revision": "82a49bbd37100f9beba9063a5a8880e6"
  },
  {
    "url": "zh/maven/第一个 Maven 程序.html",
    "revision": "fb1b9de3b3c9d90fd7097c32441ba98f"
  },
  {
    "url": "zh/maven/解决 Maven 无法自动下载依赖的问题.html",
    "revision": "152f9299163e3e2ad7eb75fe104a66f0"
  },
  {
    "url": "zh/micro-service-about/index.html",
    "revision": "fe08a4dcb7c3c06b48cb02b512405013"
  },
  {
    "url": "zh/micro-service-about/SOA-架构与微服务架构的区别.html",
    "revision": "d4ebc5c2df7987b81fa9f816565d0559"
  },
  {
    "url": "zh/micro-service-about/传统架构与微服务架构的区别.html",
    "revision": "f717cfc49cb6f4fc382a4d9f44c99cf4"
  },
  {
    "url": "zh/micro-service-about/微服务的实践.html",
    "revision": "f25ddb1f54a2ad212d056928c125887c"
  },
  {
    "url": "zh/micro-service-about/微服务的特征.html",
    "revision": "e4fc9a3719407862998c7095ebf62c19"
  },
  {
    "url": "zh/mvc/index.html",
    "revision": "9c27415b7c1656be8983f30cb7e784fc"
  },
  {
    "url": "zh/mvc/什么是MVC模式.html",
    "revision": "c6bf50da8122d30cb1c4fb98362586b8"
  },
  {
    "url": "zh/mvc/小知识高内聚低耦合.html",
    "revision": "61c9fcc44f0728e9d276cee5312ce4fb"
  },
  {
    "url": "zh/nginx/index.html",
    "revision": "50f02cc17bfa0ff38697277e5b512d04"
  },
  {
    "url": "zh/nginx/Nginx-虚拟主机.html",
    "revision": "416cc3c8baf5c8d08bc1fd5046df6ed8"
  },
  {
    "url": "zh/nginx/小知识-Nginx-惊群问题.html",
    "revision": "da9bf00c474c5f43a3332b552b341964"
  },
  {
    "url": "zh/nginx/知识点-CDN.html",
    "revision": "3679ff0d487607989dde8781b402fd0a"
  },
  {
    "url": "zh/spring-cloud-alibaba-dubbo/index.html",
    "revision": "570d568e06981685b35d9104be108b87"
  },
  {
    "url": "zh/spring-cloud-itoken-prepare/index.html",
    "revision": "c7f2ff7798c29f4d2fed9760775e453e"
  },
  {
    "url": "zh/spring-cloud-itoken-prepare/了解-XP-极限编程.html",
    "revision": "a788da40b141cf6060a8af9ec3287a80"
  },
  {
    "url": "zh/spring-cloud-itoken-prepare/在-GitLab-上创建项目.html",
    "revision": "919baf32993cb42cb63bb6dc31f3d8ba"
  },
  {
    "url": "zh/spring-cloud-itoken-prepare/部署服务到容器.html",
    "revision": "884d255a99adc9afbf26c93fc9b46162"
  },
  {
    "url": "zh/spring-cloud-itoken/index.html",
    "revision": "3e6311bc6c3ceccf484163126862a267"
  },
  {
    "url": "zh/spring-cloud-itoken/iToken-项目简介.html",
    "revision": "5344e1e26c4cf8455818b38687fad7dc"
  },
  {
    "url": "zh/Spring-mvc/index.html",
    "revision": "fb0677b15129d7b22217b8fe296ce60c"
  },
  {
    "url": "zh/Spring-mvc/Maven-模块化开发.html",
    "revision": "c0408062e7e20334e8aafd1bfaaa5558"
  },
  {
    "url": "zh/Spring-mvc/Spring MVC-@ResponseBody.html",
    "revision": "f37ecac222a2529505cd509abd1aa328"
  },
  {
    "url": "zh/Spring-mvc/Spring-MVC-拦截器的使用.html",
    "revision": "596de2f2e2047266c2bdfa9d9c399361"
  },
  {
    "url": "zh/Spring-mvc/Spring-MVC-表单标签库.html",
    "revision": "cfacf9cdb22f197b9eb5511ac6ec9fcc"
  },
  {
    "url": "zh/Spring-mvc/Spring-整合-Spring-MVC.html",
    "revision": "ebc19f7945801328bc666bb415e805f8"
  },
  {
    "url": "zh/Spring-mvc/SpringMVC-@ModelAttribute.html",
    "revision": "bec0e34635c4ce1f5847e44cac4bd9b3"
  },
  {
    "url": "zh/Spring-mvc/第一个-Controller-控制器.html",
    "revision": "e5085ac29c7b75bc978e6ea2b476925c"
  },
  {
    "url": "zh/spring-security-oAuth2/index.html",
    "revision": "ef21b87290bdf6cbf489d8761724e0fd"
  },
  {
    "url": "zh/spring-security-oAuth2/为什么需要-oAuth2.html",
    "revision": "2c1b786923571706a86629c76caf68e8"
  },
  {
    "url": "zh/spring-web/ApplicationContextAware.html",
    "revision": "7c4a65ba05be1681a9780c92ff600a5c"
  },
  {
    "url": "zh/spring-web/Bean-的装配方式.html",
    "revision": "043371053884414e325580e791656397"
  },
  {
    "url": "zh/spring-web/index.html",
    "revision": "59b62edbc7305719ea71f6c2b5d7c152"
  },
  {
    "url": "zh/spring-web/浏览器端存储技术简介.html",
    "revision": "9b1be190851055ef92949bc7a79bb8d3"
  },
  {
    "url": "zh/spring/index.html",
    "revision": "b2acb70160af9d6c7de623fa16ac7c55"
  },
  {
    "url": "zh/spring/Spring-与-loC.html",
    "revision": "9778de59feb17ccd2ffcd2f7ff42e480"
  },
  {
    "url": "zh/spring/Spring-体系结构.html",
    "revision": "671e47c91808b5d736600371991d5892"
  },
  {
    "url": "zh/spring/Spring-的特点.html",
    "revision": "e9b8cbee6fc15f7ed99988a185db9446"
  },
  {
    "url": "zh/spring/第一个-Spring-应用程序.html",
    "revision": "dcb671aceda03baf6e7b818acf6de951"
  },
  {
    "url": "zh/zookeeper-analysis/index.html",
    "revision": "3035aed0c8639189453a797fb84b663a"
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
