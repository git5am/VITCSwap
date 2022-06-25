"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[576],{9576:(t,e,n)=>{n.r(e),n.d(e,{default:()=>nt});var o=n(13),a=n(4699),i=n(2225),s=n(9737),l=n(9222),r=n(6372),c=n(5818),d=n(9496),u=n(5867),Z=n(4669),m=n(7032),h=n(2991),p=n(9432),y=n(4105);function g(){return(0,y.Z)("PAIRS_UPDATE",p.X)}const f=new class{async getTokenDetailAsync(t){return(await async function(t,e="GET",n){const o=await fetch(`https://vite-api.thomiz.dev/${t.slice(1)}`,{method:e,body:n||null,headers:"POST"===e?{"Content-Type":"application/json"}:{}}),a=await o.text();let i={error:{name:"ServerError",message:"The json returned by the server couldn't be parsed."}};try{i=JSON.parse(a)}catch(t){}if("object"==typeof i&&null!==i&&"error"in i){const t=new Error(i.error.message);throw t.name=i.error.name,t}return i}(`/crypto-info/tokens/${t}/details`)).data}};function k(t){const[e,n]=(0,d.useState)({details:null,type:"loading"});return(0,d.useEffect)((()=>{n({details:null,type:"loading"});let e=!1;return f.getTokenDetailAsync(t).then((t=>{e||n({details:t,type:"ready"})})).catch((t=>{console.error(t),e||n({details:t,type:"error"})})),()=>{e=!0}}),[t]),e}function v(){return(0,y.Z)("TOKEN_INFOS_UPDATE",p.sY)}function T(t){return(0,y.Z)("TOKEN_INFOS_UPDATE_"+t,p.sY.get(t)||{tokenSymbol:t,index:0,decimals:0})}function w(t,e){return 0===e?t:`${t}-${"0".repeat(3-e.toString().length)+e}`}const A=/^\d+(\.\d+)?$/;var E=n(4962),b=n(7767);function B(t){return t.iconURL?(0,o.tZ)("img",{src:t.iconURL,css:{width:56,height:56,borderRadius:"50%"},height:56,width:56,draggable:!1}):null}function S(t){var e,n;let a=v();const i=(0,d.useMemo)((()=>t.tokens?new Map(t.tokens.map((t=>[t.tokenId,t]))):new Map),t.tokens||[]);t.tokens&&(a=i);const s=g();return(0,o.tZ)("div",{css:{display:"flex",gap:10}},(0,o.tZ)("div",{css:{flexGrow:100}},(0,o.tZ)(E.Z,{value:t.tokenId,onChange:e=>{t.setToken(e.target.value)},css:{width:"100%"},disabled:t.disabled},[...t.noPairs?a.keys():s].filter((e=>!(t.exclude||new Set).has(e))).map((e=>{if(t.disableNative&&p.pe===e)return null;if(t.noPairs&&s.has(e))return null;const n=a.get(e);return n?(0,o.tZ)(b.Z,{key:n.tokenId,value:n.tokenId},w(n.tokenSymbol,n.index)," (",n.tokenName,")"):null})))),(null===(e=t.details)||void 0===e?void 0:e.urlIcon)?(0,o.tZ)("div",null,(0,o.tZ)(B,{iconURL:null===(n=t.details)||void 0===n?void 0:n.urlIcon})):null)}var C=n(4196),I=n(6996),x=n(8709);function F(t){const e=t.amount&&!A.test(t.amount);return(0,o.tZ)("div",null,(0,o.tZ)(I.Z,{variant:"outlined",value:t.amount||"",onChange:e=>{const n=e.target.value.replace(/[^\d.]/g,"");t.setAmount(n||null)},label:"Amount",css:{width:"100%"},placeholder:"0.0",error:e,helperText:e?"Invalid Amount":null,InputProps:{endAdornment:(0,o.tZ)(x.Z,{position:"end"},t.ticker)},inputProps:{style:{textAlign:"right"}},disabled:t.disabled,autoComplete:"off"}))}var P=n(773),L=n.n(P);function _(t,e=0){const[n,o]=(0,d.useState)(null);return(0,d.useEffect)((()=>{if(o(null),console.log(t,p.pe),t==p.pe)return;let e=!1;return p.LJ.methods.getLiquidity.call([t]).then((t=>{e||o(t[1].map)})),()=>{e=!0}}),[t,e]),n}var $=n(9776),R=n(6826),N=n(9558),q=n(1230),D=n(4366),V=n(2907),J=n(4846),G=n(1088),H=n(9322),Y=n(150),O=n(58);function U(t){const e=T(p.pe),n=T(t.token),[i,l]=(0,d.useState)(0),[c,u]=(0,d.useState)(null),Z=(0,$.C)(),[m,h]=(0,d.useState)(0),y=(0,d.useMemo)((()=>[`Deposit ${w(e.tokenSymbol,e.index)}`,`Deposit ${w(n.tokenSymbol,n.index)}`,`Withdraw any ${w(e.tokenSymbol,e.index)} left`].map(((t,e)=>(0,o.tZ)(V.Z,{key:e+""},(0,o.tZ)(J.Z,null,t))))),[]),[g,f]=(0,d.useState)(!1);(0,d.useEffect)((()=>{if(!Z[0].ready)return t.close()}),[Z[1]]),(0,d.useEffect)((()=>{if(u(null),!Z[0].ready)return;let t=!1;return p.LJ.methods.getVITEBalance.call([Z[0].accounts[0]]).then((e=>{t||u(e[1].map.userBalance)})).catch((t=>{console.error(t),u("0")})),()=>{t=!0}}),[i,Z[1]]),(0,d.useEffect)((()=>{if(!Z[0].ready)return;const t=()=>{l((t=>t+1))},e=Z[0].accounts[0];return N.Z.on(`VITE_BALANCE_UPDATE_${e}`,t),()=>{N.Z.off(`VITE_BALANCE_UPDATE_${e}`,t)}}),[Z[1]]);let k=null;switch(m){case 0:{const n=t.vite.isLessThanOrEqualTo(c||0),i=t.vite.minus(c||0);k=c?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(a.Z,null,n?"You have enough vite in the contract's balance to continue.":`Please deposit ${i.shiftedBy(-e.decimals).toFixed()} ${w(e.tokenSymbol,e.index)}`),(0,o.tZ)(s.Z,{onClick:async()=>{if(n)h(1);else{const t=Y.accountBlock.createAccountBlock("send",{address:Z[0].accounts[0],tokenId:p.pe,amount:i.toFixed(0),toAddress:p.LJ.address,data:p.LJ.methods.depositVITE.encodeCall([])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0});try{await Z[0].sendTransactionAsync({block:t.accountBlock})}catch(t){return console.error(t),void(0,O.C)(`${t.name||t.code}: ${t.message}`,{type:"error",timeout:5e3,icon:!0})}(0,O.C)("Deposit Request sent!",{type:"success",timeout:1e3,icon:!0})}}},n?"Continue":`Deposit ${w(e.tokenSymbol,e.index)}`)):(0,o.tZ)(H.Z,null);break}case 1:k=c?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(a.Z,null,"Please deposit ",t.amount.shiftedBy(-n.decimals).toFixed()," ",w(n.tokenSymbol,n.index)),(0,o.tZ)(s.Z,{disabled:g,onClick:async()=>{try{f(!0);const e=Y.accountBlock.createAccountBlock("send",{address:Z[0].accounts[0],tokenId:t.token,amount:t.amount.toFixed(0),toAddress:p.LJ.address,data:t.first?p.LJ.methods.addOriginalLiquidity.encodeCall([t.vite.toFixed(0)]):p.LJ.methods.addLiquidity.encodeCall([])});console.log(e.accountBlock),(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0});try{await Z[0].sendTransactionAsync({block:e.accountBlock})}catch(t){return console.error(t),(0,O.C)(`${t.name||t.code}: ${t.message}`,{type:"error",timeout:5e3,icon:!0}),void f(!1)}(0,O.C)("Liquidity Request sent!",{type:"success",timeout:1e3,icon:!0}),await new Promise((t=>setTimeout(t,2e3))),f(!1),h(2)}catch(t){console.error(t)}}},"Deposit ",w(n.tokenSymbol,n.index))):(0,o.tZ)(H.Z,null);break;case 2:{const n=new(L())(c||"0").isGreaterThan(0),i=new(L())(c);k=c?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(a.Z,null,n?`You have ${i.shiftedBy(-e.decimals).toFixed()} ${w(e.tokenSymbol,e.index)} available to withdraw.`:"You don't have anything to withdraw."),(0,o.tZ)(s.Z,{disabled:g,onClick:async()=>{if(n){f(!0);const e=Y.accountBlock.createAccountBlock("send",{address:Z[0].accounts[0],tokenId:p.pe,amount:"0",toAddress:p.LJ.address,data:p.LJ.methods.withdrawVITE.encodeCall([c])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0});try{await Z[0].sendTransactionAsync({block:e.accountBlock})}catch(t){return console.error(t),(0,O.C)(`${t.name||t.code}: ${t.message}`,{type:"error",timeout:5e3,icon:!0}),void f(!1)}(0,O.C)("Withdrawal Request sent!",{type:"success",timeout:1e3,icon:!0}),t.close()}else t.close()}},n?`Withdraw ${w(e.tokenSymbol,e.index)}`:"Continue")):(0,o.tZ)(H.Z,null);break}}return(0,o.tZ)(d.Fragment,null,(0,o.tZ)(G.Z,{activeStep:m},y),(0,o.tZ)(r.Z,{css:{marginTop:20}},k))}function W(t){const[e,n]=(0,d.useState)(null);return(0,d.useEffect)((()=>{if(n(null),!t.address)return;let e=!1;return t.fetchBalance?t.fetchBalance(t.address,t.tokenId).then((t=>{e||n(t)})):p.Lp.methods.ledger.getAccountInfoByAddress(t.address).then((o=>{var a,i;if(e)return;const s=(null===(i=null===(a=o.balanceInfoMap)||void 0===a?void 0:a[t.tokenId])||void 0===i?void 0:i.balance)||"0";n(s)})),()=>{e=!0}}),[t.address,t.tokenId]),e?(0,o.tZ)("div",{css:{display:"flex",flexDirection:"row"}},(0,o.tZ)("div",{css:{flexGrow:1}}),(0,o.tZ)("div",null,(0,o.tZ)(s.Z,{onClick:()=>{t.setAmount(e)}},(0,o.tZ)(a.Z,{variant:"caption"},"Balance: ",new(L())(e).shiftedBy(-t.decimals).precision(6).toFixed())))):null}function j(){var t,e;const n=(0,h.Z)(),l=g(),c=p.pe,[y,f]=(0,d.useState)(m.re[n].v1.defaultTargetToken),T=v(),w=T.get(c),E=T.get(y),b=k(c),B=k(y),[I,x]=(0,d.useState)(null),[P,V]=(0,d.useState)(null),[J,G]=(0,d.useState)(0),[H,Y]=(0,d.useState)(null),O=_(y,J),j=(0,$.C)(),M=l.has(y)&&w&&E,z=M&&O;return(0,d.useEffect)((()=>{if(null==H)return;const t=()=>{G((t=>t+1))};return N.Z.on(`RATE_CHANGE_${y}`,t),()=>{N.Z.off(`RATE_CHANGE_${y}`,t)}}),[c,y,H]),(0,d.useEffect)((()=>{I&&A.test(I)&&0===H&&O&&"0"!==O.totalVITE&&V(new(L())(O.total).div(O.totalVITE).times(I).shiftedBy(w.decimals).shiftedBy(-E.decimals).decimalPlaces(E.decimals).toFixed())}),[I,J,O]),(0,d.useEffect)((()=>{P&&A.test(P)&&1===H&&O&&"0"!==O.totalVITE&&x(new(L())(O.totalVITE).div(O.total).times(P).shiftedBy(E.decimals).shiftedBy(-w.decimals).decimalPlaces(w.decimals).toFixed())}),[P,J,O]),(0,o.tZ)(d.Fragment,null,(0,o.tZ)(r.Z,{css:{marginBottom:10}},(0,o.tZ)(a.Z,{variant:"h5"},"Liquidity"),(0,o.tZ)(a.Z,{variant:"caption"},"Add liquidity to a pool")),(0,o.tZ)(u.Z,null),"0"===(null==O?void 0:O.totalVITE)&&(0,o.tZ)(i.Z,{severity:"warning"},"You're the first one providing liquidity. You need to set the rate yourself. Please set an appropriate rate or other traders might profit from the low/high price."),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,M?(0,o.tZ)(S,{details:B.details,tokenId:y,setToken:t=>{f(t)},disableNative:!0}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},z?(0,o.tZ)(F,{amount:P,setAmount:t=>{Y(1),V(t)},ticker:E.tokenSymbol}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}),(0,o.tZ)(W,{address:null===(t=j[0].accounts)||void 0===t?void 0:t[0],setAmount:t=>{Y(1),V(new(L())(t).shiftedBy(-E.decimals).toFixed())},tokenId:y,decimals:(null==E?void 0:E.decimals)||0}))),(0,o.tZ)(r.Z,{css:{marginTop:10,marginBottom:10}},(0,o.tZ)(C.Z,{color:"primary"})),(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,M?(0,o.tZ)(S,{details:b.details,tokenId:c,setToken:()=>{},disabled:!0}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},z?(0,o.tZ)(F,{amount:I,setAmount:t=>{Y(0),x(t)},ticker:w.tokenSymbol}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}),(0,o.tZ)(W,{address:null===(e=j[0].accounts)||void 0===e?void 0:e[0],setAmount:t=>{Y(0),x(new(L())(t).shiftedBy(-w.decimals).toFixed())},tokenId:c,decimals:(null==w?void 0:w.decimals)||0}))),I&&A.test(I)&&P&&A.test(P)?(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Rate:"),(0,o.tZ)(a.Z,{color:"Highlight"},new(L())(I).div(P).precision(6).toFixed()," ",w.tokenSymbol," per ",E.tokenSymbol)):null),(0,o.tZ)(u.Z,{css:{marginTop:10,marginBottom:10}}),(0,o.tZ)(r.Z,null,(0,o.tZ)(s.Z,{css:{width:"100%"},disabled:!(z&&A.test(I)&&A.test(P)),onClick:async()=>{j[1]!==$.Z.READY?(0,R.lB)():(0,q.jN)((0,o.tZ)(D.Z,{key:"layer-add-liquidity",close:()=>{(0,q.EV)("layer-add-liquidity")}},(0,o.tZ)(U,{close:()=>{(0,q.EV)("layer-add-liquidity")},amount:new(L())(P).shiftedBy(E.decimals).decimalPlaces(0),vite:new(L())(I).shiftedBy(w.decimals).times("1.001").decimalPlaces(0),token:y,first:"0"===O.totalVITE})))}},j[1]===$.Z.READY?"Add Liquidity":"Connect Wallet")))}function M(){const t=g(),e=v(),[n,l]=(0,d.useState)((()=>[...e.entries()].find((e=>!t.has(e[0])))[1].tokenId)),c=e.get(n),h=e.get(p.pe),y=k(n),f=(0,$.C)(),[T,A]=(0,d.useState)(!1),E=function(){const[t,e]=(0,d.useState)(null);return(0,d.useEffect)((()=>{let t=!1;p.LJ.methods.PAIR_CREATION_FEE.call([]).then((([,n])=>{t||e(n.raw[0])}));const n=t=>{e(t)};return N.Z.on("PAIR_CREATION_FEE_CHANGE",n),()=>{t=!0,N.Z.off("PAIR_CREATION_FEE_CHANGE",n)}}),[]),t}(),b=!!c;return(0,o.tZ)(d.Fragment,null,(0,o.tZ)(r.Z,{css:{marginBottom:10}},(0,o.tZ)(a.Z,{variant:"h5"},"Create Pair"),(0,o.tZ)(a.Z,{variant:"caption"},"Create a pair for your token.")),(0,o.tZ)(u.Z,null),(0,o.tZ)(i.Z,{severity:"warning"},"Please note that for trading, you will have to provide liquidity."),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,b?(0,o.tZ)(S,{details:y.details,tokenId:n,setToken:t=>{l(t)},disabled:T,disableNative:!0,noPairs:!0,exclude:m.Te}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56})))),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Pair Creation Fee:"),(0,o.tZ)(a.Z,{color:"Highlight"},E&&new(L())(E).shiftedBy(-h.decimals).toFixed()+" "+w(h.tokenSymbol,h.index)||"Loading..."))),(0,o.tZ)(u.Z,{css:{marginTop:10,marginBottom:10}}),(0,o.tZ)(r.Z,null,(0,o.tZ)(s.Z,{css:{width:"100%"},disabled:T||!E,onClick:async()=>{if(f[1]!==$.Z.READY)(0,R.lB)();else{const t=Y.accountBlock.createAccountBlock("send",{address:f[0].accounts[0],tokenId:p.pe,amount:new(L())(E),toAddress:p.LJ.address,data:p.LJ.methods.createNewPair.encodeCall([n])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0}),A(!0);try{await f[0].sendTransactionAsync({block:t.accountBlock})}catch(t){return console.error(t),(0,O.C)(`${t.name||t.code}: ${t.message}`,{type:"error",timeout:5e3,icon:!0}),void A(!1)}(0,O.C)("Pair Created!",{type:"success",timeout:3e3,icon:!0}),A(!1),await new Promise((t=>setTimeout(t,3e3))),window.location.reload()}}},f[1]===$.Z.READY?"Create Pair":"Connect Wallet")))}var z=n(6215);function K(){var t,e;const n=(0,h.Z)(),i=g(),l=p.pe,[c,y]=(0,d.useState)(m.re[n].v1.defaultTargetToken),f=v(),T=f.get(l),w=f.get(c),E=k(l),b=k(c),[B,I]=(0,d.useState)(null),[x,P]=(0,d.useState)(null),[q,D]=(0,d.useState)(null),[V,J]=(0,d.useState)(0),[G,H]=(0,d.useState)(null),U=_(c,V),j=(0,$.C)(),[M,K]=(0,d.useState)(!1),X=i.has(c)&&T&&w,Q=X&&U;(0,d.useEffect)((()=>{if(null==G)return;const t=()=>{J((t=>t+1))};return N.Z.on(`RATE_CHANGE_${c}`,t),()=>{N.Z.off(`RATE_CHANGE_${c}`,t)}}),[l,c,G]),(0,d.useEffect)((()=>{B&&A.test(B)&&0===G&&U&&"0"!==U.totalVITE&&(P(new(L())(U.total).div(U.tknSupply).times(B).shiftedBy(18).decimalPlaces(0).shiftedBy(-T.decimals).toFixed()),D(new(L())(U.totalVITE).div(U.tknSupply).times(B).shiftedBy(18).decimalPlaces(0).shiftedBy(-w.decimals).toFixed()))}),[B,V,U]),(0,d.useEffect)((()=>{x&&A.test(x)&&1===G&&U&&"0"!==U.totalVITE&&(I(new(L())(U.tknSupply).div(U.total).times(x).shiftedBy(T.decimals).decimalPlaces(0).shiftedBy(-18).toFixed()),D(new(L())(U.totalVITE).div(U.total).times(x).shiftedBy(T.decimals).decimalPlaces(0).shiftedBy(-w.decimals).toFixed()))}),[x,V,U]),(0,d.useEffect)((()=>{q&&A.test(q)&&2===G&&U&&"0"!==U.totalVITE&&(I(new(L())(U.tknSupply).div(U.totalVITE).times(q).shiftedBy(w.decimals).decimalPlaces(0).shiftedBy(-18).toFixed()),P(new(L())(U.total).div(U.totalVITE).times(q).shiftedBy(w.decimals).decimalPlaces(0).shiftedBy(-T.decimals).toFixed()))}),[q,V,U]);const tt={decimals:18,index:0,isOwnerBurnOnly:!0,isReIssuable:!0,maxSupply:"0",owner:p.LJ.address,ownerBurnOnly:!0,tokenId:"tti_lptokentti",tokenName:`${w.tokenSymbol}_${"0".repeat(3-w.index.toString().length)+w.index}-${T.tokenSymbol} LP`,tokenSymbol:`${w.tokenSymbol}${T.tokenSymbol}`,totalSupply:(null==U?void 0:U.tknSupply)||"0"};return(0,o.tZ)(d.Fragment,null,(0,o.tZ)(r.Z,{css:{marginBottom:10}},(0,o.tZ)(a.Z,{variant:"h5"},"Remove Liquidity"),(0,o.tZ)(a.Z,{variant:"caption"},"Withdraw your Liquidity position from a pool")),(0,o.tZ)(u.Z,null),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,X?(0,o.tZ)(S,{details:b.details,tokenId:c,setToken:t=>{y(t)},disabled:M,disableNative:!0}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},Q?(0,o.tZ)(F,{amount:x,setAmount:t=>{H(1),P(t)},ticker:w.tokenSymbol,disabled:M}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10,marginBottom:10}},(0,o.tZ)(C.Z,{color:"primary"})),(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,X?(0,o.tZ)(S,{details:E.details,tokenId:l,setToken:()=>{},disabled:!0}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},Q?(0,o.tZ)(F,{amount:q,setAmount:t=>{H(2),D(t)},ticker:T.tokenSymbol,disabled:M}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10,marginBottom:10}},(0,o.tZ)(z.Z,{color:"primary"})),(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,Q?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(S,{details:null,tokenId:tt.tokenId,setToken:()=>{},disabled:!0,tokens:[tt],noPairs:!0})):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},Q?(0,o.tZ)(d.Fragment,null,(0,o.tZ)(F,{amount:B,setAmount:t=>{H(0),I(t)},ticker:tt.tokenSymbol,disabled:M}),U.lpToken!==m.Ty?(0,o.tZ)(W,{address:null===(t=j[0].accounts)||void 0===t?void 0:t[0],setAmount:t=>{H(0),I(new(L())(t).shiftedBy(-18).toFixed())},tokenId:U.lpToken,decimals:18}):(0,o.tZ)(W,{address:null===(e=j[0].accounts)||void 0===e?void 0:e[0],setAmount:t=>{H(0),I(new(L())(t).shiftedBy(-18).toFixed())},tokenId:U.lpToken,decimals:18,fetchBalance:async t=>p.LJ.methods.getLiquidityTokenBalance.call([t,c]).then((t=>t[1].map.lpBalance||"0"))})):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),B&&A.test(B)&&x&&A.test(x)?(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Rate:"),(0,o.tZ)(a.Z,{color:"Highlight"},new(L())(B).div(x).precision(6).toFixed()," ",T.tokenSymbol," per ",w.tokenSymbol)):null),(0,o.tZ)(u.Z,{css:{marginTop:10,marginBottom:10}}),(0,o.tZ)(r.Z,null,(0,o.tZ)(s.Z,{css:{width:"100%"},disabled:M||!(Q&&A.test(B)&&A.test(x)),onClick:async()=>{if(j[1]!==$.Z.READY)(0,R.lB)();else{const t=Y.accountBlock.createAccountBlock("send",{address:j[0].accounts[0],tokenId:U.lpToken===m.Ty?Y.constant.Vite_TokenId:U.lpToken,amount:U.lpToken===m.Ty?"0":new(L())(B).shiftedBy(18).toFixed(0),toAddress:p.LJ.address,data:p.LJ.methods.removeLiquidity.encodeCall([c,new(L())(B).shiftedBy(18).toFixed(0)])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0}),K(!0);try{await j[0].sendTransactionAsync({block:t.accountBlock})}catch(t){return console.error(t),(0,O.C)(`${t.name||t.code}: ${t.message}`,{type:"error",timeout:5e3,icon:!0}),void K(!1)}K(!1),(0,O.C)("Remove Liquidity request sent!",{type:"success",timeout:1e3,icon:!0})}}},j[1]===$.Z.READY?"Remove Liquidity":"Connect Wallet")))}var X=n(9684),Q=n(5722);function tt(){var t;const e=(0,y.Z)("SLIPPAGE_CHANGE",Q.Z.getSlippage()),n=(0,h.Z)(),i=g(),[l,c]=(0,d.useState)(m.re[n].v1.defaultToken),[f,T]=(0,d.useState)(m.re[n].v1.defaultTargetToken),w=v(),E=w.get(l),b=w.get(f),B=k(l),C=k(f),[I,x]=(0,d.useState)(null),[P,q]=(0,d.useState)(null),[D,V]=(0,d.useState)(0),[J,G]=(0,d.useState)(null),H=_(l),U=_(f),j=(0,$.C)(),[M,z]=(0,d.useState)(!1),K=i.has(l)&&i.has(f)&&E&&b,tt=K&&(l===p.pe||H)&&(f===p.pe||U),et=(0,d.useCallback)((t=>p.LJ.methods.getConversion.call([l,f,t]).then((t=>t[1].map.returnAmount))),[l,f]),nt=(0,d.useCallback)((t=>p.LJ.methods.getInversedConversion.call([l,f,t]).then((t=>t[1].map.returnAmount))),[l,f]);return(0,d.useEffect)((()=>{if(!I||!A.test(I))return;if(0!==J)return;let t=!1;return et(new(L())(I).shiftedBy(E.decimals).toFixed(0)).then((e=>{t||q(new(L())(e).shiftedBy(-b.decimals).precision(6).toFixed())}),(e=>{t||(console.error(e),q("An error occured"))})),()=>{t=!0}}),[l,I,D]),(0,d.useEffect)((()=>{if(!P||!A.test(P))return;if(1!==J)return;let t=!1;return nt(new(L())(P).shiftedBy(b.decimals).toFixed(0)).then((e=>{t||x(new(L())(e).shiftedBy(-E.decimals).precision(6).toFixed())}),(e=>{t||(console.error(e),x("An error occured"))})),()=>{t=!0}}),[f,P,D]),(0,d.useEffect)((()=>{if(null==J)return;const t=()=>{V((t=>t+1))};return N.Z.on(`RATE_CHANGE_${l}`,t),N.Z.on(`RATE_CHANGE_${f}`,t),()=>{N.Z.off(`RATE_CHANGE_${l}`,t),N.Z.off(`RATE_CHANGE_${f}`,t)}}),[l,f,J]),(0,o.tZ)(d.Fragment,null,(0,o.tZ)(r.Z,{css:{marginBottom:10}},(0,o.tZ)(a.Z,{variant:"h5"},"Swap"),(0,o.tZ)(a.Z,{variant:"caption"},"Trade tokens in an instant")),(0,o.tZ)(u.Z,null),(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,K?(0,o.tZ)(S,{details:B.details,tokenId:l,setToken:t=>{c(t)},disabled:M,exclude:m.Te}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},tt?(0,o.tZ)(F,{amount:I,setAmount:t=>{G(0),x(t)},ticker:E.tokenSymbol,disabled:M}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}),(0,o.tZ)(W,{address:null===(t=j[0].accounts)||void 0===t?void 0:t[0],setAmount:t=>{G(0),x(new(L())(t).shiftedBy(-E.decimals).toFixed())},tokenId:l,decimals:(null==E?void 0:E.decimals)||0}))),(0,o.tZ)(r.Z,{css:{marginTop:10,marginBottom:10}},(0,o.tZ)(s.Z,{onClick:()=>{T(l),c(f),G(0),q(I),x(P)},disabled:M},(0,o.tZ)(X.Z,{css:{transform:"rotate(-90deg)"}}))),(0,o.tZ)(r.Z,null,(0,o.tZ)(r.Z,null,K?(0,o.tZ)(S,{details:C.details,tokenId:f,setToken:t=>{T(t)},disabled:M,exclude:m.Te}):(0,o.tZ)(d.Fragment,null,(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),(0,o.tZ)(r.Z,{css:{marginTop:10}},tt?(0,o.tZ)(F,{amount:P,setAmount:t=>{G(1),q(t)},ticker:b.tokenSymbol,disabled:M}):(0,o.tZ)(Z.Z,{variant:"rectangular",height:56}))),I&&A.test(I)&&P&&A.test(P)?(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Rate:"),(0,o.tZ)(a.Z,{color:"Highlight"},new(L())(I).div(P).precision(6).toFixed()," ",E.tokenSymbol," per ",b.tokenSymbol)):null,(0,o.tZ)(r.Z,{css:{marginTop:10}},(0,o.tZ)(a.Z,null,"Slippage Tolerance:"),(0,o.tZ)(a.Z,{color:"Highlight"},e,"%"))),(0,o.tZ)(u.Z,{css:{marginTop:10,marginBottom:10}}),(0,o.tZ)(r.Z,null,(0,o.tZ)(s.Z,{css:{width:"100%"},disabled:M||!(tt&&A.test(I)&&A.test(P)),onClick:async()=>{if(j[1]!==$.Z.READY)(0,R.lB)();else{const t=Y.accountBlock.createAccountBlock("send",{address:j[0].accounts[0],tokenId:l,amount:new(L())(I).shiftedBy(E.decimals).toFixed(0),toAddress:p.LJ.address,data:p.LJ.methods.swap.encodeCall([j[0].accounts[0],f,new(L())(P).shiftedBy(b.decimals).times(new(L())(1).minus(e/100)).toFixed(0)])});(0,O.C)("Please accept the transaction on your phone!",{type:"info",timeout:3e3,icon:!0}),z(!0);try{await j[0].sendTransactionAsync({block:t.accountBlock})}catch(t){return console.error(t),(0,O.C)(`${t.name||t.code}: ${t.message}`,{type:"error",timeout:5e3,icon:!0}),void z(!1)}z(!1),(0,O.C)("Swap request sent!",{type:"success",timeout:1e3,icon:!0})}}},j[1]===$.Z.READY?"Trade":"Connect Wallet")))}const et=new class{getAccept(){return void 0!==this.cache?this.cache:this.cache="true"===localStorage.getItem("eula_accept")}setAccept(t){return this.cache=t,N.Z.emit("EULA_CHANGE",t),localStorage.setItem("eula_accept",t+"")}};function nt(){const[t,e]=(0,d.useState)(0);return(0,d.useEffect)((()=>{et.getAccept()||(0,q.jN)((0,o.tZ)(D.Z,{key:"layer-eula",close:()=>{}},(0,o.tZ)(a.Z,{variant:"h5"},"Disclaimer"),(0,o.tZ)(i.Z,{css:{marginBottom:10,marginTop:10},severity:"warning"},"Please read the following before using VITCSwap."),(0,o.tZ)(a.Z,{css:{maxWidth:600},variant:"body2"},"VITCSwap is an open source decentralized application operating on the Vite blockchain. As with all early-stage products there are risks associated with using the protocol and users assume the full responsibility for these risks. You should not deposit any money you are not comfortable losing."),(0,o.tZ)("div",{css:{display:"flex",gap:10}},(0,o.tZ)("div",{css:{flexGrow:1}}),(0,o.tZ)(s.Z,{onClick:()=>{window.location="https://vitamincoin.org"}},"Disagree"),(0,o.tZ)(s.Z,{onClick:()=>{et.setAccept(!0),(0,q.EV)("layer-eula")}},"Agree"))))}),[]),(0,o.tZ)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:20,paddingBottom:50}},(0,o.tZ)("div",{css:{display:"flex",flexDirection:"row",gap:100}},(0,o.tZ)(l.Z,{css:{padding:10,width:400},elevation:2},(0,o.tZ)(r.Z,{sx:{borderBottom:1,borderColor:"divider",marginBottom:2}},(0,o.tZ)(c.Z,null,(0,o.tZ)(s.Z,{onClick:()=>e(0)},"Swap"),(0,o.tZ)(s.Z,{onClick:()=>e(1)},"Add Liquidity"),(0,o.tZ)(s.Z,{onClick:()=>e(2)},"Remove Liquidity"),(0,o.tZ)(s.Z,{onClick:()=>e(3)},"Create Pair"))),0===t&&(0,o.tZ)(tt,null),1===t&&(0,o.tZ)(j,null),2===t&&(0,o.tZ)(K,null),3===t&&(0,o.tZ)(M,null))))}}}]);
//# sourceMappingURL=576.js.map