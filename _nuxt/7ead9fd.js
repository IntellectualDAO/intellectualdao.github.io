(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{632:function(n,t){},633:function(n,t){},662:function(n,t){},977:function(n,t,e){"use strict";e.r(t),e.d(t,"OpenloginAdapter",(function(){return w})),e.d(t,"getOpenloginDefaultOptions",(function(){return v}));var o=e(143),r=e(3),c=e(5),h=e.n(c),l=e(653),d=e(69),f=e.n(d);const v=(n,t)=>({adapterSettings:{network:o.b.MAINNET,clientId:"",uxMode:o.c.POPUP},chainConfig:n?Object(r.m)(n,t):null,loginSettings:{relogin:!0}});function O(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}function C(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){h()(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}class w extends r.e{constructor(n){var t,e,c;super(),h()(this,"name",r.i.OPENLOGIN),h()(this,"adapterNamespace",r.c.MULTICHAIN),h()(this,"type",r.a.IN_APP),h()(this,"openloginInstance",null),h()(this,"status",r.d.NOT_READY),h()(this,"currentChainNamespace",r.f.EIP155),h()(this,"openloginOptions",void 0),h()(this,"loginSettings",{}),h()(this,"privKeyProvider",null),r.o.debug("const openlogin adapter",n);const l=v(null===(t=n.chainConfig)||void 0===t?void 0:t.chainNamespace,null===(e=n.chainConfig)||void 0===e?void 0:e.chainId);if(this.openloginOptions=C(C({clientId:"",network:o.b.MAINNET},l.adapterSettings),n.adapterSettings||{}),this.loginSettings=C(C({},l.loginSettings),n.loginSettings),null!==(c=n.chainConfig)&&void 0!==c&&c.chainNamespace){var d;this.currentChainNamespace=null===(d=n.chainConfig)||void 0===d?void 0:d.chainNamespace;const t=l.chainConfig?l.chainConfig:{};if(this.chainConfig=C(C({},t),null==n?void 0:n.chainConfig),r.o.debug("const openlogin chainConfig",this.chainConfig),!this.chainConfig.rpcTarget)throw r.j.invalidParams("rpcTarget is required in chainConfig")}}get chainConfigProxy(){return this.chainConfig?C({},this.chainConfig):null}get provider(){var n;return(null===(n=this.privKeyProvider)||void 0===n?void 0:n.provider)||null}set provider(n){throw new Error("Not implemented")}async init(n){var t;if(super.checkInitializationRequirements(),null===(t=this.openloginOptions)||void 0===t||!t.clientId)throw r.j.invalidParams("clientId is required before openlogin's initialization");if(!this.chainConfig&&this.currentChainNamespace!==r.f.OTHER)throw r.j.invalidParams("chainConfig is required before initialization");let e=!1;if(this.openloginOptions.uxMode===o.c.REDIRECT){const n=Object(o.e)();Object.keys(n).length>0&&n._pid&&(e=!0)}this.openloginOptions=C(C({},this.openloginOptions),{},{replaceUrlOnRedirect:e}),this.openloginInstance=new o.d(this.openloginOptions),await this.openloginInstance.init(),this.status=r.d.READY,this.emit(r.b.READY,r.i.OPENLOGIN);try{this.openloginInstance.privKey&&(n.autoConnect||e)&&await this.connect()}catch(n){r.o.error("Failed to connect with cached openlogin provider",n),this.emit("ERRORED",n)}}async connect(n){super.checkConnectionRequirements(),this.status=r.d.CONNECTING,this.emit(r.b.CONNECTING,C(C({},n),{},{adapter:r.i.OPENLOGIN}));try{return await this.connectWithProvider(n),this.provider}catch(n){if(r.o.error("Failed to connect with openlogin provider",n),this.status=r.d.READY,this.emit(r.b.ERRORED,n),null!=n&&n.message.includes("user closed popup"))throw r.k.popupClosed();throw r.k.connectionError("Failed to login with openlogin")}}async disconnect(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==r.d.CONNECTED)throw r.k.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw r.j.notReady("openloginInstance is not ready");await this.openloginInstance.logout(),n.cleanup?(this.status=r.d.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=r.d.READY,this.emit(r.b.DISCONNECTED)}async getUserInfo(){if(this.status!==r.d.CONNECTED)throw r.k.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw r.j.notReady("openloginInstance is not ready");return await this.openloginInstance.getUserInfo()}setAdapterSettings(n){if(this.status===r.d.READY)return;const t=v();this.openloginOptions=C(C(C({},t.adapterSettings),this.openloginOptions||{}),n)}setChainConfig(n){super.setChainConfig(n),this.currentChainNamespace=n.chainNamespace}async connectWithProvider(n){if(!this.chainConfig)throw r.j.invalidParams("chainConfig is required before initialization");if(!this.openloginInstance)throw r.j.notReady("openloginInstance is not ready");if(this.currentChainNamespace===r.f.SOLANA){const{SolanaPrivateKeyProvider:n}=await Promise.all([e.e(1),e.e(3),e.e(14),e.e(16)]).then(e.bind(null,652));this.privKeyProvider=new n({config:{chainConfig:this.chainConfig}})}else if(this.currentChainNamespace===r.f.EIP155){const{EthereumPrivateKeyProvider:n}=await Promise.all([e.e(1),e.e(4),e.e(20)]).then(e.bind(null,728));this.privKeyProvider=new n({config:{chainConfig:this.chainConfig}})}else{if(this.currentChainNamespace!==r.f.OTHER)throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));this.privKeyProvider=new l.b}var t;!this.openloginInstance.privKey&&n&&await this.openloginInstance.login(f()(this.loginSettings,{loginProvider:n.loginProvider},{extraLoginOptions:C(C({},n.extraLoginOptions||{}),{},{login_hint:n.login_hint||(null===(t=n.extraLoginOptions)||void 0===t?void 0:t.login_hint)})}));let o=this.openloginInstance.privKey;if(o){if(this.currentChainNamespace===r.f.SOLANA){const{getED25519Key:n}=await Promise.all([e.e(3),e.e(19)]).then(e.bind(null,971));o=n(o).sk.toString("hex")}await this.privKeyProvider.setupProvider(o),this.status=r.d.CONNECTED,this.emit(r.b.CONNECTED,{adapter:r.i.OPENLOGIN,reconnected:!n})}}}}}]);