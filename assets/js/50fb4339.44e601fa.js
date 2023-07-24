"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[5552],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Init & Unlock",sidebar_position:3},d=void 0,l={unversionedId:"provider/daemon/init_daemon",id:"provider/daemon/init_daemon",isDocsHomePage:!1,title:"Init & Unlock",description:"Once the daemon is up and running and you have configured your CLI, the very next step is to initialize and unlock the daemon's HD wallet.",source:"@site/docs/provider/daemon/init_daemon.md",sourceDirName:"provider/daemon",slug:"/provider/daemon/init_daemon",permalink:"/docs/provider/daemon/init_daemon",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/daemon/init_daemon.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Init & Unlock",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configure CLI",permalink:"/docs/provider/daemon/getting_started/configure_cli"},next:{title:"Fee Account",permalink:"/docs/provider/daemon/fee_account"}},c=[{value:"Setup new wallet",id:"setup-new-wallet",children:[]},{value:"Restore from mnemonic",id:"restore-from-mnemonic",children:[]},{value:"Unlock the wallet",id:"unlock-the-wallet",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once the daemon is up and running and you have configured your CLI, the very next step is to initialize and unlock the daemon's HD wallet."),(0,o.kt)("p",null,"You can either ",(0,o.kt)("a",{parentName:"p",href:"#setup-new-wallet"},"setup a brand new wallet"),", or you can ",(0,o.kt)("a",{parentName:"p",href:"#restore-from-mnemonic"},"restore one with a mnemonic")," used previously by another daemon."),(0,o.kt)("h2",{id:"setup-new-wallet"},"Setup new wallet"),(0,o.kt)("p",null,"To create a new wallet you need a 24 words mnemonic. You can either generate your random mnemonic by your own, or you can make use of the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex genseed\n# \n# place defense olive vast forum outer accident tissue story agent turtle desert wool wink device glass cruise chalk simple club enforce borrow health fat\n")),(0,o.kt)("p",null,"This command asks the daemon to generate a safe and strong random mnemonic that can be used ot initialize the wallet."),(0,o.kt)("p",null,"Initializing the HD wallet with a new mnemonic can be done with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex init --password="password" --seed "place defense olive vast forum outer accident tissue story agent turtle desert wool wink device glass cruise chalk simple club enforce borrow health fat"\n#\n# Wallet is initialized. You can unlock\n')),(0,o.kt)("p",null,"That's it! Next step is to ",(0,o.kt)("a",{parentName:"p",href:"#unlock-the-wallet"},"unlock the wallet"),"."),(0,o.kt)("h2",{id:"restore-from-mnemonic"},"Restore from mnemonic"),(0,o.kt)("p",null,"The TDEX daemon supports the option of restoring an HD wallet from an already used mnemonic."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Avoid to do this if the mnemonic you want to use has been generated/used by some other application. The HD scheme used to derive key pairs might be different from the one used by the daemon and the wallet itself and the funds might not be restored properly."))),(0,o.kt)("p",null,"In this process, the daemon makes use of its explorer service to first know how many accounts must be restored. This phase is called ",(0,o.kt)("em",{parentName:"p"},"addresses discovery"),".",(0,o.kt)("br",{parentName:"p"}),"\n","The daemon starts deriving addresseses for an account asking the explorer if they were ",(0,o.kt)("em",{parentName:"p"},"used"),", ie. involved in some transactions included in the blockchain.",(0,o.kt)("br",{parentName:"p"}),"\n",'When 50 consecutive addresseses have been found "unused" the process stops and the discovery proceeds for the next account.',(0,o.kt)("br",{parentName:"p"}),"\n","An account is considered ",(0,o.kt)("em",{parentName:"p"},"empty")," when the first 50 addresses are ",(0,o.kt)("em",{parentName:"p"},"unused")," and when is found ",(0,o.kt)("em",{parentName:"p"},"empty")," the ",(0,o.kt)("em",{parentName:"p"},"address discovery")," phase terminates."),(0,o.kt)("p",null,"When all the accounts have been discovered, the daemon restores their funds and creates the markets related to them (no market created for the Fee account). This means you will just need to configure their fees, strategies and prices, possibly, before opening them. You won't need to create them though."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default the number of ",(0,o.kt)("em",{parentName:"p"},"unused")," addresses is set to 50, but it can be customized via the dameon's environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"TDEX_RESCAN_GAP_LIMIT"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Increasing the default rescan gap limit means slowing the restoration process but increases the chances that all funds are restored correctly.",(0,o.kt)("br",{parentName:"p"}),"\n","On the other side, decreasing it means speeding up the restoration but the funds might not be all restored properly."),(0,o.kt)("p",{parentName:"div"},"The default value should be a good trade-off between these two aspects. In general, it should be better to increase it instead of decreasing: if after a restore you don't see the balances you'd expect for your accounts, you may want to try to restore the wallet again by incresing the rescan gap limit."))),(0,o.kt)("p",null,"To restore your daemon's HD wallet run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex init --password "password" --seed "your 24 words mnemonic" --restore\n# addresses discovery PROCESSING\n# addresses discovery DONE\n# restore account 0 PROCESSING\n# restore account 0 DONE\n# restore account 5 PROCESSING\n# restore account 5 DONE\n#\n# Wallet is initialized. You can unlock\n')),(0,o.kt)("p",null,"The process may take a while, depending on how many accounts (fee and markets) must be restored. After it is finished you can ",(0,o.kt)("a",{parentName:"p",href:"#unlock-the-wallet"},"unlock the wallet"),"."),(0,o.kt)("h2",{id:"unlock-the-wallet"},"Unlock the wallet"),(0,o.kt)("p",null,"Now that the internal wallet is initialized, you can unlock it by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex unlock --password "password"\n#\n# Wallet is unlocked\n')),(0,o.kt)("p",null,"You may want to take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/provider/daemon/getting_started/run_prod#auto-unlock-wallet-on-start-up"},"Auto-Unlock Wallet on start-up")," if you're searching for a way to automatize this step."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You should use a stronger and safer password for your daemon's HD wallet than the one used in the example above."),(0,o.kt)("p",{parentName:"div"},"Also, be sure to backup the mnemonic of your daemon's wallet, store it in a safe place, and don't share it with anybody."))),(0,o.kt)("p",null,"Great! You've initialized and unlocked your daemon. It's time to ",(0,o.kt)("a",{parentName:"p",href:"/docs/provider/daemon/fee_account"},"deposit funds into the Fee account")," and then ",(0,o.kt)("a",{parentName:"p",href:"/docs/provider/daemon/market/deposit_funds"},"create and fund a new market"),"."))}u.isMDXComponent=!0}}]);