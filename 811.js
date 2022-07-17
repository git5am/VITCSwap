"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[811],{6811:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var o=n(13),a=n(4699),i=n(2225),s=n(9737),l=n(9222),r=n(6372),c=n(5818),d=n(9496),u=n(5867),Z=n(4669),m=n(7032),h=n(2991),p=n(9432),g=n(4105);function f(){return(0,g.Z)("PAIRS_UPDATE",p.X)}const y=new class{async getTokenDetailAsync(e){return(await async function(e,t="GET",n){const o=await fetch(`https://vite-api.thomiz.dev/${e.slice(1)}`,{method:t,body:n||null,headers:"POST"===t?{"Content-Type":"application/json"}:{}}),a=await o.text();let i={error:{name:"ServerError",message:"The json returned by the server couldn't be parsed."}};try{i=JSON.parse(a)}catch(e){}if("object"==typeof i&&null!==i&&"error"in i){const e=new Error(i.error.message);throw e.name=i.error.name,e}return i}(`/crypto-info/tokens/${e}/details`)).data}};function k(e){const[t,n]=(0,d.useState)({details:null,type:"loading"});return(0,d.useEffect)((()=>{n({details:null,type:"loading"});let t=!1;return y.getTokenDetailAsync(e).then((e=>{t||n({details:e,type:"ready"})})).catch((e=>{console.error(e),t||n({details:e,type:"error"})})),()=>{t=!0}}),[e]),t}var v=n(4793);function w(e,t){return 0===t?e:`${e}-${"0".repeat(3-t.toString().length)+t}`}const T=/^\d+(\.\d+)?$/;var A=n(949),b=n(7767);function E(e){return e.iconURL?(0,o.tZ)("img",{src:e.iconURL,css:{width:56,height:56,borderRadius:"50%"},height:56,width:56,draggable:!1}):null}function S(e){var t,n;let a=(0,v.Z)();const i=(0,d.useMemo)((()=>e.tokens?new Map(e.tokens.map((e=>[e.tokenId,e]))):new Map),e.tokens||[]);e.tokens&&(a=i);const s=f();return(0,o.tZ)("div",{css:{display:"flex",gap:10}},(0,o.tZ)("div",{css:{flexGrow:100}},(0,o.tZ)(A.Z,{value:e.tokenId,onChange:t=>{e.setToken(t.target.value)},css:{width:"100%"},disabled:e.disabled},[...e.noPairs?a.keys():s].filter((t=>!(e.exclude||new Set).has(t))).sort(((e,t)=>{const n=a.get(e),o=a.get(t);return n&&o?w(n.tokenSymbol,n.index).localeCompare(w(o.tokenSymbol,o.index)):n||o?n?1:-1:0})).map((t=>{if(e.disableNative&&p.pe===t)return null;if(e.noPairs&&s.has(t))return null;const n=a.get(t);return n?(0,o.tZ)(b.Z,{key:n.tokenId,value:n.tokenId},w(n.tokenSymbol,n.index)," (",n.tokenName,")"):null})))),(null===(t=e.details)||void 0===t?void 0:t.urlIcon)?(0,o.tZ)("div",null,(0,o.tZ)(E,{iconURL:null===(n=e.details)||void 0===n?void 0:n.urlIcon})):null)}var C=n(4196),B=n(6423),x=n(8709);function I(e){const t=e.amount&&!T.test(e.amount);return(0,o.tZ)("div",null,(0,o.tZ)(B.Z,{variant:"outlined",value:e.amount||"",onChange:t=>{const n=t.target.value.replace(/[^\d.]/g,"");e.setAmount(n||null)},label:"Amount",css:{width:"100%"},placeholder:"0.0",error:t,helperText:t?"Invalid Amount":null,InputProps:{endAdornment:(0,o.tZ)(x.Z,{position:"end"},e.ticker)},inputProps:{style:{textAlign:"right"}},disabled:e.disabled,autoComplete:"off"}))}var F=n(773),$=n.n(F);function L(e,t=0){const[n,o]=(0,d.useState)(null);return(0,d.useEffect)((()=>{if(o(null),console.log(e,p.pe),e==p.pe)return;let t=!1;return p.LJ.methods.getLiquidity.call([e]).then((e=>{t||o(e[1].map)})),()=>{t=!0}}),[e,t]),n}var P=n(9776),_=n(5822),R=n(9558),q=n(1230),N=n(4366),D=n(2907),V=n(4846),J=n(1088),H=n(9322),G=n(150),O=n(58);function Y(e){const t=(0,v.u)(p.pe),n=(0,v.u)(e.token),[i,l]=(0,d.useState)(0),[c,u]=(0,d.useState)(null),Z=(0,P.C)(),[m,h]=(0,d.useState)(0),g=(0,d.useMemo)((()=>[`Deposit ${w(t.tokenSymbol,t.index)}`,`Deposit ${w(n.tokenSymbol,n.index)}`,`Withdraw any ${w(t.tokenSymbol,t.index)} left`].map(((e,t)=>(0,o.tZ)(D.Z,{key:t+""},(0,o.tZ)(V.Z,null,e))))),[]),[f,y]=(0,d.useState)(!1);(0,d.useEffect)((()=>{if(!Z[0].ready)return e.close()}),[Z[1]]),(0,d.useEffect)((()=>{if(u(null),!Z[0].ready)return;let e=!1;return p.LJ.methods.getVITEBalance.call([Z[0].accounts[0]]).then((t=>{e||u(t[1].map.userBalance)})).catch((e=>{console.error(e),u("0")})),()=>{e=!0}}),[i,Z[1]]),(0,d.useEffect)((()=>{if(!Z[0].ready)return;const e=()=>{l((e=>e+1))},t=Z[0].accounts[0];return R.Z.on(`VITE_BALANCE_UPDATE_${t}`,e),()=>{R.Z.off(`VITE_BALANCE_UPDATE_${t}`,e)}}),[Z[1]]);let k=null;switch(m){case 0:{const n=e.vite.isLessThanOrEqualTo(c||0),i=e.vite.minus(c||0);k=c?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(a.Z,null,n?"You have enough vite in the contract's balance to continue.":`Please deposit ${i.shiftedBy(-t.decimals).toFixed()} ${w(t.tokenSymbol,t.index)}`),(0,o.tZ)(s.Z,{onClick:async()=>{if(n)h(1);else{const e=G.accountBlock.createAccountBlock("send",{address:Z[0].accounts[0],tokenId:p.pe,amount:i.toFixed(0),toAddress:p.LJ.address,data:p.LJ.methods.depositVITE.encodeCall([])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0});try{await Z[0].sendTransactionAsync({block:e.accountBlock})}catch(e){return console.error(e),void(0,O.C)(`${e.name||e.code}: ${e.message}`,{type:"error",timeout:5e3,icon:!0})}(0,O.C)("Deposit Request sent!",{type:"success",timeout:1e3,icon:!0})}}},n?"Continue":`Deposit ${w(t.tokenSymbol,t.index)}`)):(0,o.tZ)(H.Z,null);break}case 1:k=c?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(a.Z,null,"Please deposit ",e.amount.shiftedBy(-n.decimals).toFixed()," ",w(n.tokenSymbol,n.index)),(0,o.tZ)(s.Z,{disabled:f,onClick:async()=>{try{y(!0);const t=G.accountBlock.createAccountBlock("send",{address:Z[0].accounts[0],tokenId:e.token,amount:e.amount.toFixed(0),toAddress:p.LJ.address,data:e.first?p.LJ.methods.addOriginalLiquidity.encodeCall([e.vite.toFixed(0)]):p.LJ.methods.addLiquidity.encodeCall([])});console.log(t.accountBlock),(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0});try{await Z[0].sendTransactionAsync({block:t.accountBlock})}catch(e){return console.error(e),(0,O.C)(`${e.name||e.code}: ${e.message}`,{type:"error",timeout:5e3,icon:!0}),void y(!1)}(0,O.C)("Liquidity Request sent!",{type:"success",timeout:1e3,icon:!0}),await new Promise((e=>setTimeout(e,2e3))),y(!1),h(2)}catch(e){console.error(e)}}},"Deposit ",w(n.tokenSymbol,n.index))):(0,o.tZ)(H.Z,null);break;case 2:{const n=new($())(c||"0").isGreaterThan(0),i=new($())(c);k=c?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(a.Z,null,n?`You have ${i.shiftedBy(-t.decimals).toFixed()} ${w(t.tokenSymbol,t.index)} available to withdraw.`:"You don't have anything to withdraw."),(0,o.tZ)(s.Z,{disabled:f,onClick:async()=>{if(n){y(!0);const t=G.accountBlock.createAccountBlock("send",{address:Z[0].accounts[0],tokenId:p.pe,amount:"0",toAddress:p.LJ.address,data:p.LJ.methods.withdrawVITE.encodeCall([c])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0});try{await Z[0].sendTransactionAsync({block:t.accountBlock})}catch(e){return console.error(e),(0,O.C)(`${e.name||e.code}: ${e.message}`,{type:"error",timeout:5e3,icon:!0}),void y(!1)}(0,O.C)("Withdrawal Request sent!",{type:"success",timeout:1e3,icon:!0}),e.close()}else e.close()}},n?`Withdraw ${w(t.tokenSymbol,t.index)}`:"Continue")):(0,o.tZ)(H.Z,null);break}}return(0,o.tZ)(d.Fragment,null,(0,o.tZ)(J.Z,{activeStep:m},g),(0,o.tZ)(r.Z,{css:{marginTop:20}},k))}function U(e){const[t,n]=(0,d.useState)(null);return(0,d.useEffect)((()=>{if(n(null),!e.address)return;let t=!1;return e.fetchBalance?e.fetchBalance(e.address,e.tokenId).then((e=>{t||n(e)})):p.Lp.methods.ledger.getAccountInfoByAddress(e.address).then((o=>{var a,i;if(t)return;const s=(null===(i=null===(a=o.balanceInfoMap)||void 0===a?void 0:a[e.tokenId])||void 0===i?void 0:i.balance)||"0";n(s)})),()=>{t=!0}}),[e.address,e.tokenId]),t?(0,o.tZ)("div",{css:{display:"flex",flexDirection:"row"}},(0,o.tZ)("div",{css:{flexGrow:1}}),(0,o.tZ)("div",null,(0,o.tZ)(s.Z,{onClick:()=>{e.setAmount(t)}},(0,o.tZ)(a.Z,{variant:"caption"},"Balance: ",new($())(t).shiftedBy(-e.decimals).precision(6).toFixed())))):null}function j(){var e,t;const n=(0,h.Z)(),l=f(),c=p.pe,[g,y]=(0,d.useState)(m.re[n].v1.defaultTargetToken),w=(0,v.Z)(),A=w.get(c),b=w.get(g),E=k(c),B=k(g),[x,F]=(0,d.useState)(null),[D,V]=(0,d.useState)(null),[J,H]=(0,d.useState)(0),[G,O]=(0,d.useState)(null),j=L(g,J),W=(0,P.C)(),M=l.has(g)&&A&&b,z=M&&j;return(0,d.useEffect)((()=>{if(null==G)return;const e=()=>{H((e=>e+1))};return R.Z.on(`RATE_CHANGE_${g}`,e),()=>{R.Z.off(`RATE_CHANGE_${g}`,e)}}),[c,g,G]),(0,d.useEffect)((()=>{x&&T.test(x)&&0===G&&j&&"0"!==j.totalVITE&&V(new($())(j.total).div(j.totalVITE).times(x).shiftedBy(A.decimals).shiftedBy(-b.decimals).decimalPlaces(b.decimals).toFixed())}),[x,J,j]),(0,d.useEffect)((()=>{D&&T.test(D)&&1===G&&j&&"0"!==j.totalVITE&&F(new($())(j.totalVITE).div(j.total).times(D).shiftedBy(b.decimals).shiftedBy(-A.decimals).decimalPlaces(A.decimals).toFixed())}),[D,J,j]),(0,o.tZ)(d.Fragment,null,(0,o.tZ)(r.Z,{css:{marginBottom:10}},(0,o.tZ)(a.Z,{variant:"h5"},"Liquidity"),(0,o.tZ)(a.Z,{variant:"caption"},"Add liquidity to a pool")),(0,o.tZ)(u.Z,null),"0"===(null==j?void 0:j.totalVITE)&&(0,o.tZ)(i.Z,{severity:"warning"},"You're the first one providing liquidity. You need to set the rate yourself. Please set an appropriate rate or other traders might profit from the low/high price."),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,M?(0,o.tZ)(S,{details:B.details,tokenId:g,setToken:e=>{y(e)},disableNative:!0}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},z?(0,o.tZ)(I,{amount:D,setAmount:e=>{O(1),V(e)},ticker:b.tokenSymbol}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}),(0,o.tZ)(U,{address:null===(e=W[0].accounts)||void 0===e?void 0:e[0],setAmount:e=>{O(1),V(new($())(e).shiftedBy(-b.decimals).toFixed())},tokenId:g,decimals:(null==b?void 0:b.decimals)||0}))),(0,o.tZ)(r.Z,{css:{marginTop:10,marginBottom:10}},(0,o.tZ)(C.Z,{color:"primary"})),(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,M?(0,o.tZ)(S,{details:E.details,tokenId:c,setToken:()=>{},disabled:!0}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},z?(0,o.tZ)(I,{amount:x,setAmount:e=>{O(0),F(e)},ticker:A.tokenSymbol}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}),(0,o.tZ)(U,{address:null===(t=W[0].accounts)||void 0===t?void 0:t[0],setAmount:e=>{O(0),F(new($())(e).shiftedBy(-A.decimals).toFixed())},tokenId:c,decimals:(null==A?void 0:A.decimals)||0}))),x&&T.test(x)&&D&&T.test(D)?(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Rate:"),(0,o.tZ)(a.Z,{color:"Highlight"},new($())(x).div(D).precision(6).toFixed()," ",A.tokenSymbol," per ",b.tokenSymbol)):null),(0,o.tZ)(u.Z,{css:{marginTop:10,marginBottom:10}}),(0,o.tZ)(r.Z,null,(0,o.tZ)(s.Z,{css:{width:"100%"},disabled:!(z&&T.test(x)&&T.test(D)),onClick:async()=>{W[1]!==P.Z.READY?(0,_.lB)():(0,q.jN)((0,o.tZ)(N.Z,{key:"layer-add-liquidity",close:()=>{(0,q.EV)("layer-add-liquidity")}},(0,o.tZ)(Y,{close:()=>{(0,q.EV)("layer-add-liquidity")},amount:new($())(D).shiftedBy(b.decimals).decimalPlaces(0),vite:new($())(x).shiftedBy(A.decimals).times("1.001").decimalPlaces(0),token:g,first:"0"===j.totalVITE})))}},W[1]===P.Z.READY?"Add Liquidity":"Connect Wallet")))}function W(){const e=f(),t=(0,v.Z)(),[n,l]=(0,d.useState)((()=>[...t.entries()].find((t=>!e.has(t[0])))[1].tokenId)),c=t.get(n),h=t.get(p.pe),g=k(n),y=(0,P.C)(),[T,A]=(0,d.useState)(!1),b=function(){const[e,t]=(0,d.useState)(null);return(0,d.useEffect)((()=>{let e=!1;p.LJ.methods.PAIR_CREATION_FEE.call([]).then((([,n])=>{e||t(n.raw[0])}));const n=e=>{t(e)};return R.Z.on("PAIR_CREATION_FEE_CHANGE",n),()=>{e=!0,R.Z.off("PAIR_CREATION_FEE_CHANGE",n)}}),[]),e}(),E=!!c;return(0,o.tZ)(d.Fragment,null,(0,o.tZ)(r.Z,{css:{marginBottom:10}},(0,o.tZ)(a.Z,{variant:"h5"},"Create Pair"),(0,o.tZ)(a.Z,{variant:"caption"},"Create a pair for your token.")),(0,o.tZ)(u.Z,null),(0,o.tZ)(i.Z,{severity:"warning"},"Please note that for trading, you will have to provide liquidity."),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,E?(0,o.tZ)(S,{details:g.details,tokenId:n,setToken:e=>{l(e)},disabled:T,disableNative:!0,noPairs:!0,exclude:m.Te}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56})))),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Pair Creation Fee:"),(0,o.tZ)(a.Z,{color:"Highlight"},b&&new($())(b).shiftedBy(-h.decimals).toFixed()+" "+w(h.tokenSymbol,h.index)||"Loading..."))),(0,o.tZ)(u.Z,{css:{marginTop:10,marginBottom:10}}),(0,o.tZ)(r.Z,null,(0,o.tZ)(s.Z,{css:{width:"100%"},disabled:T||!b,onClick:async()=>{if(y[1]!==P.Z.READY)(0,_.lB)();else{const e=G.accountBlock.createAccountBlock("send",{address:y[0].accounts[0],tokenId:p.pe,amount:new($())(b),toAddress:p.LJ.address,data:p.LJ.methods.createNewPair.encodeCall([n])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0}),A(!0);try{await y[0].sendTransactionAsync({block:e.accountBlock})}catch(e){return console.error(e),(0,O.C)(`${e.name||e.code}: ${e.message}`,{type:"error",timeout:5e3,icon:!0}),void A(!1)}(0,O.C)("Pair Created!",{type:"success",timeout:3e3,icon:!0}),A(!1),await new Promise((e=>setTimeout(e,3e3))),window.location.reload()}}},y[1]===P.Z.READY?"Create Pair":"Connect Wallet")))}var M=n(6215);function z(){var e,t;const n=(0,h.Z)(),i=f(),l=p.pe,[c,g]=(0,d.useState)(m.re[n].v1.defaultTargetToken),y=(0,v.Z)(),w=y.get(l),A=y.get(c),b=k(l),E=k(c),[B,x]=(0,d.useState)(null),[F,q]=(0,d.useState)(null),[N,D]=(0,d.useState)(null),[V,J]=(0,d.useState)(0),[H,Y]=(0,d.useState)(null),j=L(c,V),W=(0,P.C)(),[z,X]=(0,d.useState)(!1),K=i.has(c)&&w&&A,Q=K&&j;(0,d.useEffect)((()=>{if(null==H)return;const e=()=>{J((e=>e+1))};return R.Z.on(`RATE_CHANGE_${c}`,e),()=>{R.Z.off(`RATE_CHANGE_${c}`,e)}}),[l,c,H]),(0,d.useEffect)((()=>{B&&T.test(B)&&0===H&&j&&"0"!==j.totalVITE&&(q(new($())(j.total).div(j.tknSupply).times(B).shiftedBy(18).decimalPlaces(0).shiftedBy(-w.decimals).toFixed()),D(new($())(j.totalVITE).div(j.tknSupply).times(B).shiftedBy(18).decimalPlaces(0).shiftedBy(-A.decimals).toFixed()))}),[B,V,j]),(0,d.useEffect)((()=>{F&&T.test(F)&&1===H&&j&&"0"!==j.totalVITE&&(x(new($())(j.tknSupply).div(j.total).times(F).shiftedBy(w.decimals).decimalPlaces(0).shiftedBy(-18).toFixed()),D(new($())(j.totalVITE).div(j.total).times(F).shiftedBy(w.decimals).decimalPlaces(0).shiftedBy(-A.decimals).toFixed()))}),[F,V,j]),(0,d.useEffect)((()=>{N&&T.test(N)&&2===H&&j&&"0"!==j.totalVITE&&(x(new($())(j.tknSupply).div(j.totalVITE).times(N).shiftedBy(A.decimals).decimalPlaces(0).shiftedBy(-18).toFixed()),q(new($())(j.total).div(j.totalVITE).times(N).shiftedBy(A.decimals).decimalPlaces(0).shiftedBy(-w.decimals).toFixed()))}),[N,V,j]);const ee={decimals:18,index:0,isOwnerBurnOnly:!0,isReIssuable:!0,maxSupply:"0",owner:p.LJ.address,ownerBurnOnly:!0,tokenId:"tti_lptokentti",tokenName:`${A.tokenSymbol}_${"0".repeat(3-A.index.toString().length)+A.index}-${w.tokenSymbol} LP`,tokenSymbol:`${A.tokenSymbol}${w.tokenSymbol}`,totalSupply:(null==j?void 0:j.tknSupply)||"0"};return(0,o.tZ)(d.Fragment,null,(0,o.tZ)(r.Z,{css:{marginBottom:10}},(0,o.tZ)(a.Z,{variant:"h5"},"Remove Liquidity"),(0,o.tZ)(a.Z,{variant:"caption"},"Withdraw your Liquidity position from a pool")),(0,o.tZ)(u.Z,null),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,K?(0,o.tZ)(S,{details:E.details,tokenId:c,setToken:e=>{g(e)},disabled:z,disableNative:!0}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},Q?(0,o.tZ)(I,{amount:F,setAmount:e=>{Y(1),q(e)},ticker:A.tokenSymbol,disabled:z}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10,marginBottom:10}},(0,o.tZ)(C.Z,{color:"primary"})),(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,K?(0,o.tZ)(S,{details:b.details,tokenId:l,setToken:()=>{},disabled:!0}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},Q?(0,o.tZ)(I,{amount:N,setAmount:e=>{Y(2),D(e)},ticker:w.tokenSymbol,disabled:z}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10,marginBottom:10}},(0,o.tZ)(M.Z,{color:"primary"})),(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,Q?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(S,{details:null,tokenId:ee.tokenId,setToken:()=>{},disabled:!0,tokens:[ee],noPairs:!0})):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},Q?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(I,{amount:B,setAmount:e=>{Y(0),x(e)},ticker:ee.tokenSymbol,disabled:z}),j.lpToken!==m.Ty?(0,o.tZ)(U,{address:null===(e=W[0].accounts)||void 0===e?void 0:e[0],setAmount:e=>{Y(0),x(new($())(e).shiftedBy(-18).toFixed())},tokenId:j.lpToken,decimals:18}):(0,o.tZ)(U,{address:null===(t=W[0].accounts)||void 0===t?void 0:t[0],setAmount:e=>{Y(0),x(new($())(e).shiftedBy(-18).toFixed())},tokenId:j.lpToken,decimals:18,fetchBalance:async e=>p.LJ.methods.getLiquidityTokenBalance.call([e,c]).then((e=>e[1].map.lpBalance||"0"))})):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),B&&T.test(B)&&F&&T.test(F)?(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Rate:"),(0,o.tZ)(a.Z,{color:"Highlight"},new($())(B).div(F).precision(6).toFixed()," ",w.tokenSymbol," per ",A.tokenSymbol)):null),(0,o.tZ)(u.Z,{css:{marginTop:10,marginBottom:10}}),(0,o.tZ)(r.Z,null,(0,o.tZ)(s.Z,{css:{width:"100%"},disabled:z||!(Q&&T.test(B)&&T.test(F)),onClick:async()=>{if(W[1]!==P.Z.READY)(0,_.lB)();else{const e=G.accountBlock.createAccountBlock("send",{address:W[0].accounts[0],tokenId:j.lpToken===m.Ty?G.constant.Vite_TokenId:j.lpToken,amount:j.lpToken===m.Ty?"0":new($())(B).shiftedBy(18).toFixed(0),toAddress:p.LJ.address,data:p.LJ.methods.removeLiquidity.encodeCall([c,new($())(B).shiftedBy(18).toFixed(0)])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0}),X(!0);try{await W[0].sendTransactionAsync({block:e.accountBlock})}catch(e){return console.error(e),(0,O.C)(`${e.name||e.code}: ${e.message}`,{type:"error",timeout:5e3,icon:!0}),void X(!1)}X(!1),(0,O.C)("Remove Liquidity request sent!",{type:"success",timeout:1e3,icon:!0})}}},W[1]===P.Z.READY?"Remove Liquidity":"Connect Wallet")))}var X=n(9684),K=n(5722),Q=n(5854),ee=n(9142),te=n(2675);class ne{async getCandles(e,t,n,o){const a=new URLSearchParams;o&&a.set("start",o.toFixed(0));const i=a.toString(),s=await fetch(`${ne.BASE_URL}/candles/${e}/${t}/${n}${i?`?${i}`:""}`),l=m.gx[n];return(await s.json()).candles.map(((e,t)=>e?{open:new($())(e[0]).toNumber(),close:new($())(e[1]).toNumber(),high:new($())(e[2]).toNumber(),low:new($())(e[3]).toNumber(),volume:new($())(e[5]).toNumber(),timestamp:l*(o+t)*1e3}:null))}getIndex(e,t){return((t/=1e3)-t%e)/e}}ne.BASE_URL=`http${m.Tt}/api`;const oe=new ne;var ae=n(8956),ie=n(6142);function se(){const e=(0,ie.Z)();return(0,g.Z)("CHART_DISABLED_CHANGE",ae.Z.getDisabled())||e}function le(e){const t=(0,d.useMemo)((()=>te.Z()),[]),[n,a]=(0,d.useState)(null),[i,l]=(0,d.useState)("6h"),[r,c]=(0,d.useState)("candle_solid"),[Z,h]=(0,d.useState)("data"in e&&e.data||[]),[g,f]=(0,d.useState)(!1),[y,k]=(0,d.useState)(!1),v=se();return(0,d.useEffect)((()=>{if(v)return f(!1);if("token"in e&&"quote"in e){f(!1);let t=!1;return console.log(`Fetching ${e.token}/${e.quote} for ${i}`),oe.getCandles(e.token,e.quote,i,oe.getIndex(m.gx[i],Date.now())-100).then((n=>{if(t)return;console.log(`Fetched ${e.token}/${e.quote} for ${i}`);let o=!1;h(n.filter((e=>!!e||(o=!0,!1)))),k(o),f(!0)})).catch((e=>{t||(console.error(e),h([]),k(!0),f(!0))})),()=>{t=!0}}h(e.data),k(!0),f(!0)}),["token"in e&&e.token,"quote"in e&&e.quote,"data"in e&&e.data,i,v]),(0,d.useEffect)((()=>{n&&n.setStyleOptions({candle:{type:r}})}),[r]),(0,d.useEffect)((()=>{if(!g)return;const n=(0,ee.init)(t,{candle:{tooltip:{labels:["T: ","O: ","C: ","H: ","L: ","V: "],defaultValue:"n/a"},type:r},grid:{horizontal:{color:"#393939"},vertical:{color:"#393939"}}});return n.setPriceVolumePrecision(8,2),!("token"in e)||e.token!==p.pe&&e.quote!==p.pe||n.createTechnicalIndicator("VOL"),a(n),()=>{(0,ee.dispose)(t),a(null)}}),[Z,g]),(0,d.useEffect)((()=>{if(!("token"in e))return;let t=!1;const n=m.gx[i],o=()=>{const o=Date.now(),a=oe.getIndex(n,o);oe.getCandles(e.token,e.quote,i,a-1).then((e=>{if(!t){for(const t of e){if(!t)continue;const e=Z.find((e=>e.timestamp===t.timestamp));e?(e.open=t.open,e.close=t.close,e.high=t.high,e.low=t.low,e.volume=t.volume):Z.push(t)}h([...Z])}}))};R.Z.on(`RATE_CHANGE_${e.token}`,o),R.Z.on(`RATE_CHANGE_${e.quote}`,o);const a=Date.now(),s=oe.getIndex(n,a),l=setTimeout((()=>{o();const e=setInterval((()=>{o()}),1e3*n);r=()=>{clearInterval(e)}}),(s+1)*n*1e3-a);let r=()=>{clearTimeout(l)};return()=>{t=!0,r()}}),["token"in e&&e.token,"quote"in e&&e.quote,"data"in e&&e.data,g,i]),(0,d.useEffect)((()=>{n&&(n.applyNewData(Z),n.loadMore((t=>{if(y||!("token"in e))return;const n=m.gx[i],o=oe.getIndex(n,t);oe.getCandles(e.token,e.quote,i,o-101).then((e=>{let t=!1;e=e.filter((e=>!!e||(t=!0,!1))),k(t),h(e.concat(Z))})).catch((e=>{console.error(e),k(!0)}))})))}),[Z,n,g]),(0,o.tZ)("div",null,(0,o.tZ)("div",{css:{height:38,marginBottom:5}},["Line","1m","5m","30m","1h","6h","1d","1w","1mo"].map((e=>(0,o.tZ)(s.Z,{key:e,onClick:()=>{"Line"===e?c((e=>"area"===e?"candle_solid":"area")):g&&i!==e&&(l(e),f(!1))},css:Object.assign({},e===i||"area"===r&&"Line"===e?{backgroundColor:"rgba(255, 103, 41, 0.08)"}:{})},e)))),(0,o.tZ)(u.Z,null),(0,o.tZ)("div",{id:t,style:{height:600}},!g&&(0,o.tZ)(H.Z,null)))}function re({chartRef:e}){var t;const n=(0,g.Z)("SLIPPAGE_CHANGE",K.Z.getSlippage()),i=(0,h.Z)(),l=f(),[c,y]=(0,d.useState)(m.re[i].v1.defaultToken),[A,b]=(0,d.useState)(m.re[i].v1.defaultTargetToken),E=(0,v.Z)(),C=E.get(c),B=E.get(A),x=k(c),F=k(A),[q,N]=(0,d.useState)(null),[D,V]=(0,d.useState)(null),[J,H]=(0,d.useState)(0),[Y,j]=(0,d.useState)(null),W=L(c),M=L(A),z=(0,P.C)(),[ee,te]=(0,d.useState)(!1),ne=l.has(c)&&l.has(A)&&C&&B,oe=ne&&(c===p.pe||W)&&(A===p.pe||M),ae=(0,d.useCallback)((e=>p.LJ.methods.getConversion.call([c,A,e]).then((e=>e[1].map.returnAmount))),[c,A]),ie=(0,d.useCallback)((e=>p.LJ.methods.getInversedConversion.call([c,A,e]).then((e=>e[1].map.returnAmount))),[c,A]);return(0,d.useEffect)((()=>{if(!q||!T.test(q))return;if(0!==Y)return;let e=!1;return ae(new($())(q).shiftedBy(C.decimals).toFixed(0)).then((t=>{e||V(new($())(t).shiftedBy(-B.decimals).precision(6).toFixed())}),(t=>{e||(console.error(t),V("An error occured"))})),()=>{e=!0}}),[c,q,J]),(0,d.useEffect)((()=>{if(!D||!T.test(D))return;if(1!==Y)return;let e=!1;return ie(new($())(D).shiftedBy(B.decimals).toFixed(0)).then((t=>{e||N(new($())(t).shiftedBy(-C.decimals).precision(6).toFixed())}),(t=>{e||(console.error(t),N("An error occured"))})),()=>{e=!0}}),[A,D,J]),(0,d.useEffect)((()=>{if(null==Y)return;const e=()=>{H((e=>e+1))};return R.Z.on(`RATE_CHANGE_${c}`,e),R.Z.on(`RATE_CHANGE_${A}`,e),()=>{R.Z.off(`RATE_CHANGE_${c}`,e),R.Z.off(`RATE_CHANGE_${A}`,e)}}),[c,A,Y]),(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Q.Z,{container:e.current},C&&B&&(0,o.tZ)(a.Z,{variant:"h6"},w(C.tokenSymbol,C.index),"/",w(B.tokenSymbol,B.index))||(0,o.tZ)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},(0,o.tZ)(Z.Z,{css:{height:32,width:100}})),(0,o.tZ)(le,{token:c,quote:A})),(0,o.tZ)(r.Z,{css:{marginBottom:10}},(0,o.tZ)(a.Z,{variant:"h5"},"Swap"),(0,o.tZ)(a.Z,{variant:"caption"},"Trade tokens in an instant")),(0,o.tZ)(u.Z,null),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,ne?(0,o.tZ)(S,{details:x.details,tokenId:c,setToken:e=>{j(1),y(e),H((e=>e+1))},disabled:ee,exclude:m.Te}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},oe?(0,o.tZ)(I,{amount:q,setAmount:e=>{j(0),N(e)},ticker:C.tokenSymbol,disabled:ee}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}),(0,o.tZ)(U,{address:null===(t=z[0].accounts)||void 0===t?void 0:t[0],setAmount:e=>{j(0),N(new($())(e).shiftedBy(-C.decimals).toFixed())},tokenId:c,decimals:(null==C?void 0:C.decimals)||0}))),(0,o.tZ)(r.Z,{css:{marginTop:10,marginBottom:10}},(0,o.tZ)(s.Z,{onClick:()=>{b(c),y(A),j(0),V(q),N(D)},disabled:ee},(0,o.tZ)(X.Z,{css:{transform:"rotate(-90deg)"}}))),(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,ne?(0,o.tZ)(S,{details:F.details,tokenId:A,setToken:e=>{j(0),b(e),H((e=>e+1))},disabled:ee,exclude:m.Te}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},oe?(0,o.tZ)(I,{amount:D,setAmount:e=>{j(1),V(e)},ticker:B.tokenSymbol,disabled:ee}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),q&&T.test(q)&&D&&T.test(D)?(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Rate:"),(0,o.tZ)(a.Z,{color:"Highlight"},new($())(q).div(D).precision(6).toFixed()," ",C.tokenSymbol," per ",B.tokenSymbol)):null,(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Slippage Tolerance:"),(0,o.tZ)(a.Z,{color:"Highlight"},n,"%"))),(0,o.tZ)(u.Z,{css:{marginTop:10,marginBottom:10}}),(0,o.tZ)(r.Z,null,(0,o.tZ)(s.Z,{css:{width:"100%"},disabled:ee||!(oe&&T.test(q)&&T.test(D)),onClick:async()=>{if(z[1]!==P.Z.READY)(0,_.lB)();else{const e=G.accountBlock.createAccountBlock("send",{address:z[0].accounts[0],tokenId:c,amount:new($())(q).shiftedBy(C.decimals).toFixed(0),toAddress:p.LJ.address,data:p.LJ.methods.swap.encodeCall([z[0].accounts[0],A,new($())(D).shiftedBy(B.decimals).times(new($())(1).minus(n/100)).toFixed(0)])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0}),te(!0);try{await z[0].sendTransactionAsync({block:e.accountBlock})}catch(e){return console.error(e),(0,O.C)(`${e.name||e.code}: ${e.message}`,{type:"error",timeout:5e3,icon:!0}),void te(!1)}te(!1),(0,O.C)("Swap request sent!",{type:"success",timeout:1e3,icon:!0})}}},z[1]===P.Z.READY?"Trade":"Connect Wallet")))}const ce=new class{getAccept(){return void 0!==this.cache?this.cache:this.cache="true"===localStorage.getItem("eula_accept")}setAccept(e){return this.cache=e,R.Z.emit("EULA_CHANGE",e),localStorage.setItem("eula_accept",e+"")}};function de(){const[e,t]=(0,d.useState)(0),n=(0,d.useRef)(),u=se();return(0,d.useEffect)((()=>{ce.getAccept()||(0,q.jN)((0,o.tZ)(N.Z,{key:"layer-eula",close:()=>{}},(0,o.tZ)(a.Z,{variant:"h5"},"Disclaimer"),(0,o.tZ)(i.Z,{css:{marginBottom:10,marginTop:10},severity:"warning"},"Please read the following before using VITCSwap."),(0,o.tZ)(a.Z,{css:{maxWidth:600},variant:"body2"},"VITCSwap is an open source decentralized application operating on the Vite blockchain. As with all early-stage products there are risks associated with using the protocol and users assume the full responsibility for these risks. You should not deposit any money you are not comfortable losing."),(0,o.tZ)("div",{css:{display:"flex",gap:10}},(0,o.tZ)("div",{css:{flexGrow:1}}),(0,o.tZ)(s.Z,{onClick:()=>{window.location="https://vitamincoin.org"}},"Disagree"),(0,o.tZ)(s.Z,{onClick:()=>{ce.setAccept(!0),(0,q.EV)("layer-eula")}},"Agree"))))}),[]),(0,o.tZ)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:20,paddingBottom:50}},(0,o.tZ)("div",{css:{display:"flex",flexDirection:"row",gap:100}},0===e&&(0,o.tZ)(l.Z,{css:{padding:10,width:800,display:u?"none":"initial"},elevation:2,ref:n}),(0,o.tZ)(l.Z,{css:{padding:10,width:400},elevation:2},(0,o.tZ)(r.Z,{sx:{borderBottom:1,borderColor:"divider",marginBottom:2}},(0,o.tZ)(c.Z,null,(0,o.tZ)(s.Z,{onClick:()=>t(0)},"Swap"),(0,o.tZ)(s.Z,{onClick:()=>t(1)},"Add Liquidity"),(0,o.tZ)(s.Z,{onClick:()=>t(2)},"Remove Liquidity"),(0,o.tZ)(s.Z,{onClick:()=>t(3)},"Create Pair"))),0===e&&(0,o.tZ)(re,{chartRef:n}),1===e&&(0,o.tZ)(j,null),2===e&&(0,o.tZ)(z,null),3===e&&(0,o.tZ)(W,null))))}}}]);
//# sourceMappingURL=811.js.map