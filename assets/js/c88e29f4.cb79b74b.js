"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[2907],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,p=u["".concat(d,".").concat(m)]||u[m]||f[m]||c;return n?a.createElement(p,o(o({ref:t},l),{},{components:n})):a.createElement(p,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6217:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var a=n(7462),r=n(3366),c=(n(7294),n(3905)),o=["components"],s={title:"Market Fragmenter Account",sidebar_position:6},d=void 0,i={unversionedId:"provider/daemon/market_fragmenter_account",id:"provider/daemon/market_fragmenter_account",isDocsHomePage:!1,title:"Market Fragmenter Account",description:"Starting from v0.8, the daemon internal wallet makes use of 2 new special accounts. One of them is the Market Fragmenter account.",source:"@site/docs/provider/daemon/market_fragmenter_account.md",sourceDirName:"provider/daemon",slug:"/provider/daemon/market_fragmenter_account",permalink:"/docs/provider/daemon/market_fragmenter_account",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/daemon/market_fragmenter_account.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Market Fragmenter Account",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Fee Fragmenter Account",permalink:"/docs/provider/daemon/fee_fragmenter_account"},next:{title:"Webhooks",permalink:"/docs/provider/daemon/webhooks"}},l=[{value:"Deposit and split funds",id:"deposit-and-split-funds",children:[]},{value:"List all deposit addresses",id:"list-all-deposit-addresses",children:[]},{value:"Check the balance",id:"check-the-balance",children:[]},{value:"Withdraw funds",id:"withdraw-funds",children:[]}],f={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Starting from v0.8, the daemon internal wallet makes use of 2 new special accounts. One of them is the Market Fragmenter account."),(0,c.kt)("p",null,"This account aims to optimize the process of depositing funds for any market acccount.",(0,c.kt)("br",{parentName:"p"}),"\n","You can send relative large amounts of both base and quote assrts to the addresses of this account that will be then splitted in many fragments, and become funds of the Fee account."),(0,c.kt)("p",null,"Before using the commands for this account, you need to set in your CLI config, the assets of the market you want your funds to end up to after the fragmentation with:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex config set base_asset 5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\n# base_asset 5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225 has been set\n\n$ tdex config set quote_asset b33ddc389d5dabae5b8e371b535433b1c18505ecf656fce6ca8540c07ec2bde5\n# quote_asset b33ddc389d5dabae5b8e371b535433b1c18505ecf656fce6ca8540c07ec2bde5 has been set\n")),(0,c.kt)("h2",{id:"deposit-and-split-funds"},"Deposit and split funds"),(0,c.kt)("p",null,"Get some deposit address(es):"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex marketfragmenter deposit\n# {\n#   "address": "el1qqw0jfk8qnjxywrzn0a78j779ffyvvh5p7vv80tvr9kwedefydr7j99t33eapuy9wlwfpgv7cnmc9ggq84zkws86thfyq8x03f",\n#   "blinding": "fd6647935eff475a2a9542c22b5f3d0a5e63e06a01f0ddcb8ee36d003ec35945"\n# }\n')),(0,c.kt)("p",null,"Now send funds of both the assets of the market to the address(es) and ",(0,c.kt)("strong",{parentName:"p"},"only after")," the transaction(s) gets confirmed, you can make them be fragmented with:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex marketfragmenter split\n#\n# fetching market fragmenter funds\n#\n# calculating fragments for market asset pair\n#\n# detected 2 funds\n#\n# splitting base asset amount 100000000 into 11 fragments\n#\n# splitting quote asset amount 5500000000000 into 11 fragments\n#\n# crafting market deposit transaction\n#\n# broadcasting transaction\n#\n# market account funding transaction: acd3d8105943f9044cced2ff79d4fc91637455de2b446237486f93de1e67923d\n#\n# claiming deposits for market account\n#\n# fragmentation succeeded\n")),(0,c.kt)("p",null,"After the fragmentation succededs try to check the balances of both the market fragmenter and market accounts.",(0,c.kt)("br",{parentName:"p"}),"\n","The first will have 0 balance, while the second won't have exactly the same balance you sent to the fragmenter just because of the network fees required to include the transaction in blockchain."),(0,c.kt)("h2",{id:"list-all-deposit-addresses"},"List all deposit addresses"),(0,c.kt)("p",null,"You can see the list of all derived deposit addresses so far with:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex marketfragmenter addresses\n# [\n#   {\n#     "address": "el1qqw0jfk8qnjxywrzn0a78j779ffyvvh5p7vv80tvr9kwedefydr7j99t33eapuy9wlwfpgv7cnmc9ggq84zkws86thfyq8x03f",\n#     "blinding": "fd6647935eff475a2a9542c22b5f3d0a5e63e06a01f0ddcb8ee36d003ec35945"\n#   }\n# ]\n')),(0,c.kt)("h2",{id:"check-the-balance"},"Check the balance"),(0,c.kt)("p",null,"You can check the balance of the Fee account with:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex marketfragmenter balanace\n# {\n#   "balance": {\n#       "5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225": {\n#           "total_balance": "100000000",\n#           "confirmed_balance": "100000000",\n#           "unconfirmed_balance": "0"\n#       },\n#       "b33ddc389d5dabae5b8e371b535433b1c18505ecf656fce6ca8540c07ec2bde5": {\n#           "total_balance": "5500000000000",\n#           "confirmed_balance": "5500000000000",\n#           "unconfirmed_balance": "0"\n#       }\n#   }\n# }\n')),(0,c.kt)("p",null,"The output shows the total, confirmed and unconfirmed balance for each asset owned by the Market Fragmenter. "),(0,c.kt)("h2",{id:"withdraw-funds"},"Withdraw funds"),(0,c.kt)("p",null,"Unlike the Fee or market accounts, you cannot select the amount or asset to withdraw for the Market Fragmenter account. ",(0,c.kt)("strong",{parentName:"p"},"ALL")," the fetched funds are withdrawn from this account when using the command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex marketfragmenter withdraw --address AzpppEPZ9oNeogPNVZKLLroubqTbfhsvun9AaucVBNwwNXc2CCLg2LQvGcKPA8KVwK1qU7xKt38KKLEt\n# {\n#   "txid": "643b1bbf9ecd02d11bd2e8cb0ad01a54b7607c60627d710682a2482410d23c6a"\n# }\n')),(0,c.kt)("p",null,"You can optionally set the ",(0,c.kt)("em",{parentName:"p"},"millisats_per_byte")," to pay for network fees with the flag ",(0,c.kt)("inlineCode",{parentName:"p"},"--millisatsperbyte"),". By default, ",(0,c.kt)("inlineCode",{parentName:"p"},"100 (0.1 sats/byte)")," ie. the minimum defined by protocol is used."))}u.isMDXComponent=!0}}]);