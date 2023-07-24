"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[1590],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,b=u["".concat(d,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(b,c(c({ref:t},s),{},{components:n})):a.createElement(b,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),c=["components"],i={title:"Webhooks",sidebar_position:8},d=void 0,l={unversionedId:"provider/daemon/webhooks",id:"provider/daemon/webhooks",isDocsHomePage:!1,title:"Webhooks",description:"The daemon supports handling webhooks that can be invoked whenever a certain event occurs during its lifecycle. This is the list of all events a webhook can be registered for:",source:"@site/docs/provider/daemon/webhooks.md",sourceDirName:"provider/daemon",slug:"/provider/daemon/webhooks",permalink:"/docs/provider/daemon/webhooks",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/daemon/webhooks.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Webhooks",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Market Fragmenter Account",permalink:"/docs/provider/daemon/market_fragmenter_account"},next:{title:"Registry",permalink:"/docs/provider/registry"}},s=[{value:"Add webhook",id:"add-webhook",children:[]},{value:"List webhooks",id:"list-webhooks",children:[]},{value:"Remove webhook",id:"remove-webhook",children:[]},{value:"Event payload",id:"event-payload",children:[{value:"TRADE_SETTLED",id:"trade_settled",children:[]},{value:"ACCOUNT_WITHDRAW",id:"account_withdraw",children:[]},{value:"ACCOUNT_LOW_BALANCE",id:"account_low_balance",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The daemon supports handling webhooks that can be invoked whenever a certain event occurs during its lifecycle. This is the list of all events a webhook can be registered for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#event-payload",title:"trade_settled"},"TRADE_SETTLED")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#event-payload",title:"account_withdraw"},"ACCOUNT_WITHDRAW")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#event-payload",title:"account_low_balance"},"ACCOUNT_LOW_BALANCE"))),(0,r.kt)("p",null,"A webhook is defined by an event for which it's registered to, an endpoint that is invoked whenever the event occurs, and optionally a secret used to sign a ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/introduction"},"JWT token")," to authenticate requests."),(0,r.kt)("h2",{id:"add-webhook"},"Add webhook"),(0,r.kt)("p",null,"A webhook can be added to those handled by the daemon with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# To add a secured webhook\n$ tdex addwebhook --action TRADE_SETTLED --endpoint http://localhost:8888/endpoint --secret supersecret\n# To add a non-secured webhook\n$ tdex addwebhook --action TRADE_SETTLED --endpoint http://localhost:8888/endpoint\n# hook id: 00000-000-000-0000\n")),(0,r.kt)("p",null,"The daemon in response returns the id of the newly webhook created."),(0,r.kt)("h2",{id:"list-webhooks"},"List webhooks"),(0,r.kt)("p",null,"You can list all the webhooks registered for some specific event with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex listwebhooks --action TRADE_SETTLED\n# [\n#   {\n#     "id": 00000-000-000-0000,\n#     "action": "TRADE_SETTLED",\n#     "endpoint": "http://localhost:8888/endpoint",\n#     "is_secured": true\n#   }\n# ]\n')),(0,r.kt)("p",null,"A list of webhooks showing their id, event, endpoint and wheter a secret is set is returned."),(0,r.kt)("h2",{id:"remove-webhook"},"Remove webhook"),(0,r.kt)("p",null,"A webhook can be removed by specifing its id with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex removewebhook --id 00000-000-000-0000\n# removed hook with id: 00000-000-000-0000\n")),(0,r.kt)("p",null,"In response, you get the confirmation os the removal of the webhook"),(0,r.kt)("h2",{id:"event-payload"},"Event payload"),(0,r.kt)("p",null,"In this section you can find the payload sent by the daemon to a webhook endpoint whenever a certain event occurs. All payloads are represented in JSON format."),(0,r.kt)("p",null,"As mentioned, the daemon takes care of authenticating its requests by adding a JWT token. The daemon produces a signatures using the HMAC-SHA256 scheme, therefore the same must be used by the web server exposing the endpoint being invoked."),(0,r.kt)("h3",{id:"trade_settled"},"TRADE_SETTLED"),(0,r.kt)("p",null,"Example of payload for ",(0,r.kt)("em",{parentName:"p"},"TRADE_SETTLED")," event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txid": "68790873e2e56a86844f367f9c3d64ebadc1c6d61d8cda6df0dff8010139ea95",\n  "swap": {\n    "amount_p": 1447,\n    "asset_p":  "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n    "amount_r": 41790673,\n    "asset_r":  "ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2"\n  },\n  "price": {\n    "base_price":  0.00003462495088,\n    "quote_price": 28880.90739460\n  },\n  "market": {\n    "base_asset":  "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n    "quote_asset": "ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2"\n  },\n  "balance": {\n    "base_balance":  57556016,\n    "quote_balance": 376940871878\n  }\n}\n')),(0,r.kt)("h3",{id:"account_withdraw"},"ACCOUNT_WITHDRAW"),(0,r.kt)("p",null,"Example of payload for market ",(0,r.kt)("em",{parentName:"p"},"ACCOUNT_WITHDRAW")," event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "market": {\n        "base_asset":  "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n        "quote_asset": "ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2"\n    },\n    "amount_withdraw": {\n    "base_amount": 10000000,\n        "quote_amount": 1000000000000,\n    },\n    "receiving_address": "lq1qqval07apclpjrlru50x3px9x2606fhy6h2m7km7zhgxjmqf8kxzm36mn7hxypzcuw7nk0mt25a658nzlysvjkkejc4kcuxqsc",\n    "txid": "b0ad86c8efcc4eadc74aab471196d7e0773f328ca7bb54dbe4eea1c7cf8c7445",\n  "balance": {\n    "base_balance": 47556016,\n    "quote_balance": 276940871878\n  }\n}\n')),(0,r.kt)("h3",{id:"account_low_balance"},"ACCOUNT_LOW_BALANCE"),(0,r.kt)("p",null,"Example of fee ",(0,r.kt)("em",{parentName:"p"},"ACCOUNT_LOW_BALANCE")," event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "account": {\n        "type": "fee",\n        "index": 0\n    },\n    "balance": 100\n}\n\n')),(0,r.kt)("p",null,"Example of market ACCOUNT_LOW_BALANCE event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "account": {\n        "type": "market",\n        "base_asset": "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n        "quote_asset": "ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2",\n        "index": 5\n    },\n    "balance": {\n        "base_amount": 100,\n        "quote_amount": 2000000000,\n    }\n}\n\n')))}u.isMDXComponent=!0}}]);