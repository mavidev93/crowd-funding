(this["webpackJsonpcrowd-funding"]=this["webpackJsonpcrowd-funding"]||[]).push([[14],{1413:function(t,e,n){"use strict";n.r(e);var a=n(1188),r=n(1),i=n(9),s=n(21),c=n(0),o=n.n(c),u=n(26),p=n(899),l=n.n(p),d=n(52),m=n(92),b=n(1417),f=n(1406),y=n(828),h=n(812),j=n(816),g=n(802),x=n(733),O=n(1416),v=n(1410),w=n(1412),C=n(1411),A=n(1419),F=n(29),N=n(729),I=n(805),_=n(811),k=n(862),D=n(3),M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,display:"flex",flexDirection:"column",justifyContent:"spaceBetween",alignItems:"center",bgcolor:"background.paper",boxShadow:24,p:3},P=Object(F.a)(C.a)((function(t){var e=t.theme;return{"label + &":{marginTop:e.spacing(3)},"& .MuiInputBase-input":{borderRadius:4,position:"relative",backgroundColor:"light"===e.palette.mode?"#fcfcfb":"#2b2b2b",border:"1px solid #ced4da",fontSize:16,width:"auto",padding:"10px 12px",transition:e.transitions.create(["border-color","background-color","box-shadow"]),"&:focus":{boxShadow:"".concat(Object(N.a)(e.palette.primary.main,.25)," 0 0 0 0.2rem"),borderColor:e.palette.primary.main}}}}));function E(t){var e=t.campaignHash,n=t.isCampaignOpen,a=o.a.useState(!1),u=Object(s.a)(a,2),p=u[0],l=u[1],f=o.a.useState(""),y=Object(s.a)(f,2),h=y[0],j=y[1],g=Object(c.useState)(!1),C=Object(s.a)(g,2),F=C[0],N=C[1],E=Object(m.c)(),H=Object(d.c)(),T=H.Moralis,S=H.chainId,B=_.b,W=parseInt(S).toString(),L=W in _.b?B[W][0]:null,R=Object(d.g)({abi:_.a,contractAddress:L,functionName:"fundCampaign"}).runContractFunction,G=function(){var t=Object(i.a)(Object(r.a)().mark((function t(n,a){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,R({onSuccess:function(t){return Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.c)(t);case 2:1===e.sent.status&&(E({message:"Transaction successful!",position:"topR",type:"success"}),N(!1),l(!1));case 4:case"end":return e.stop()}}),e)})))()},onError:function(t){N(!1),E({message:"Transaction reverted!",position:"topR",type:"error"})},params:{msgValue:T.Units.ETH(a),params:{hash:e}}});case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(D.jsxs)("div",{children:[Object(D.jsx)(I.a,{text:"Fund Campaign",variant:"contained",className:"bg-primary-color my-3 ",disabled:!n,onClick:function(){return l(!0)}}),Object(D.jsx)(v.a,{open:p,onClose:function(){return l(!1)},children:Object(D.jsxs)(x.a,{sx:M,children:[Object(D.jsx)(O.a,{id:"modal-modal-title",variant:"h6",component:"h2",className:"text-center",sx:{textAlign:"center"},children:"ETH"}),Object(D.jsxs)(A.a,{variant:"standard",sx:{dispay:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"stretch"},children:[Object(D.jsx)(w.a,{shrink:!0,htmlFor:"Amount",children:"Amount:"}),Object(D.jsx)(P,{id:"Amount",type:"number",value:h,onChange:function(t){j(t.currentTarget.value)},inputProps:{"aria-label":""}}),Object(D.jsx)(O.a,{sx:{color:"red",fontSize:"10px"},component:"p",children:"Minimum amount is 0.001 ETH"}),Object(D.jsx)(I.a,{text:"Fund \u2192",disabled:F||!n,variant:"contained",onClick:function(t){return G(t,h)},className:"mt-3"}),F&&Object(D.jsxs)("div",{className:"flex justify-center items-center my-2",children:[" ",Object(D.jsx)(b.a,{})," "]})]})]})})]})}var H=n(121),T=function(){var t=Object(c.useState)(null),e=Object(s.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(null),p=Object(s.a)(o,2),x=p[0],O=p[1],v=Object(d.c)().isWeb3Enabled,w=Object(m.c)(),C=Object(j.a)(),A=Object(d.g)({abi:null===C||void 0===C?void 0:C.abi,contractAddress:(null===C||void 0===C?void 0:C.crowdFundAddress)||void 0,functionName:"getCampaignByHash"}).runContractFunction,F=Object(u.f)().state.hash;function N(){return N=Object(i.a)(Object(r.a)().mark((function t(){var e,n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(O(null),t.prev=1,e=F){t.next=5;break}return t.abrupt("return");case 5:return n=function(){var t=Object(i.a)(Object(r.a)().mark((function t(e){var n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.c)(e);case 3:n=t.sent,a(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),O(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),t.next=8,A({onSuccess:function(t){n(t)},onError:function(t){O(t.message)},params:{params:{hash:e}}});case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),O(null===t.t0||void 0===t.t0?void 0:t.t0.message),w({message:"Loading failed!",type:"error",position:"topR"});case 14:case"end":return t.stop()}}),t,null,[[1,10]])}))),N.apply(this,arguments)}return Object(c.useEffect)((function(){v&&function(){N.apply(this,arguments)}()}),[v,F]),Object(D.jsx)("div",{className:"w-3/4 mx-auto px-5 py-3 border border--white-color-dark border-[.5px] m-2 my-4",children:v?Object(D.jsx)(D.Fragment,{children:n?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"flex justify-center py-2 ",children:[n.headerImgPath&&Object(D.jsx)("img",{style:{outline:"rgba(0, 0, 0, 0.12)  solid 0.5px",outlineOffset:"3px"},src:Object(g.b)(n.headerImgPath)})," "]}),Object(D.jsx)(h.a,{text:n.campaignTitle,className:"text-center text-lg\ttext-bold mt-2"}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h3",{className:"italic font-bold\t",children:"Story:"}),Object(D.jsx)(f.a,{children:n.campaignDescription}),Object(D.jsx)(H.a,{className:"my-3"}),Object(D.jsxs)("div",{className:"flex justify-between items-center w-full mt-4\t",children:[Object(D.jsxs)("div",{className:"flex flex-col flex-1",children:[Object(D.jsxs)("p",{className:"text-lime-600 font-bold text-primary-color",children:[Object(D.jsx)("span",{children:"Funded Amount: "})," ",Object(D.jsx)("span",{children:n.totalAmountFunded})]}),Object(D.jsxs)("p",{children:[" ",Object(D.jsx)("span",{children:"Goal Amount:"})," ",Object(D.jsx)("span",{children:n.goalAmount})]})]}),Object(D.jsx)(E,{campaignHash:n.campaignHash,isCampaignOpen:n.isCampaignOpen}),Object(D.jsxs)("p",{className:"flex-1 text-right text-secondary-color\t",children:[" ",Object(D.jsx)(l.a,{})," ",n.daysLeft>=0?Object(D.jsx)("span",{children:"".concat(n.daysLeft," Days Left")}):Object(D.jsx)("span",{children:"Funding Time Finished"})]})]})]})]}):Object(D.jsx)("div",{className:" ",children:x?Object(D.jsx)("span",{className:"text-red-600",children:"Not Fund! "}):Object(D.jsxs)("div",{className:"flex items-center ",children:[Object(D.jsx)("span",{className:"italic mr-3",children:"Loading ..."})," ",Object(D.jsx)(b.a,{})]})})}):Object(D.jsx)(y.a,{})})};e.default=function(t){return Object(a.a)(t),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(T,{})})}},799:function(t){t.exports=JSON.parse('{"4":["0x4DD08fB0914363D3eFacCd4D4AE64A0096c0eD7a"]}')},800:function(t){t.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"uint256","name":"_minimum_goalAmount"},{"type":"uint256","name":"_minimum_fundAmount"}]},{"type":"error","name":"CrowdFund__AlreadyWithdraw","inputs":[]},{"type":"error","name":"CrowdFund__CampaignDoesNotExist","inputs":[]},{"type":"error","name":"CrowdFund__CampaignIsClosed","inputs":[]},{"type":"error","name":"CrowdFund__CantWithdrawGoalNotReached","inputs":[]},{"type":"error","name":"CrowdFund__GoalAmountMustBeMoreThanMinimum","inputs":[]},{"type":"error","name":"CrowdFund__NoContributions","inputs":[]},{"type":"error","name":"CrowdFund__NotEnoughContributionAmount","inputs":[]},{"type":"error","name":"CrowdFund__OnlyCampaignOwner","inputs":[]},{"type":"error","name":"CrowdFund__PeriodDaysShouldBeBetween1to365","inputs":[]},{"type":"error","name":"CrowdFund__ReclaimConditionsDoesNotMet","inputs":[]},{"type":"event","anonymous":false,"name":"Create","inputs":[{"type":"address","name":"campaignOwner","indexed":true},{"type":"uint256","name":"id","indexed":true}]},{"type":"event","anonymous":false,"name":"Fund","inputs":[{"type":"address","name":"from","indexed":true},{"type":"uint256","name":"amount","indexed":true},{"type":"uint256","name":"id","indexed":true}]},{"type":"event","anonymous":false,"name":"Test","inputs":[{"type":"address","name":"from","indexed":true},{"type":"uint256","name":"testId","indexed":true}]},{"type":"function","name":"claimRefund","constant":false,"payable":false,"inputs":[{"type":"string","name":"hash"}],"outputs":[]},{"type":"function","name":"closeCampaign","constant":false,"payable":false,"inputs":[{"type":"string","name":"hash"}],"outputs":[]},{"type":"function","name":"createCampaign","constant":false,"payable":false,"inputs":[{"type":"string","name":"hash"},{"type":"uint256","name":"_goalAmount"},{"type":"uint256","name":"_fundingPeriodInDays"}],"outputs":[]},{"type":"function","name":"fundCampaign","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"string","name":"hash"}],"outputs":[]},{"type":"function","name":"getAllCampaigns","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"tuple[]","components":[{"type":"address","name":"campaignOwner"},{"type":"uint256","name":"id"},{"type":"string","name":"campaignUrl"},{"type":"string","name":"campaignHash"},{"type":"uint256","name":"goalAmount"},{"type":"uint256","name":"totalAmountFunded"},{"type":"uint256","name":"deadline"},{"type":"bool","name":"goalAchieved"},{"type":"bool","name":"isCampaignOpen"},{"type":"bool","name":"isExists"},{"type":"bool","name":"isOwnerWithdraw"}]}]},{"type":"function","name":"getCampaignByHash","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"string","name":"hash"}],"outputs":[{"type":"tuple","components":[{"type":"address","name":"campaignOwner"},{"type":"uint256","name":"id"},{"type":"string","name":"campaignUrl"},{"type":"string","name":"campaignHash"},{"type":"uint256","name":"goalAmount"},{"type":"uint256","name":"totalAmountFunded"},{"type":"uint256","name":"deadline"},{"type":"bool","name":"goalAchieved"},{"type":"bool","name":"isCampaignOpen"},{"type":"bool","name":"isExists"},{"type":"bool","name":"isOwnerWithdraw"}]}]},{"type":"function","name":"getCampaignCount","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getContributions","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"string","name":"hash"}],"outputs":[{"type":"uint256","name":"contribution"}]},{"type":"function","name":"getHashById","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"_id"}],"outputs":[{"type":"string"}]},{"type":"function","name":"hashToCampaign","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"string"}],"outputs":[{"type":"address","name":"campaignOwner"},{"type":"uint256","name":"id"},{"type":"string","name":"campaignUrl"},{"type":"string","name":"campaignHash"},{"type":"uint256","name":"goalAmount"},{"type":"uint256","name":"totalAmountFunded"},{"type":"uint256","name":"deadline"},{"type":"bool","name":"goalAchieved"},{"type":"bool","name":"isCampaignOpen"},{"type":"bool","name":"isExists"},{"type":"bool","name":"isOwnerWithdraw"}]},{"type":"function","name":"idToHash","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256"}],"outputs":[{"type":"string"}]},{"type":"function","name":"minimum_fundAmount","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"minimum_goalAmount","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"owner","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"withdrawFunds","constant":false,"payable":false,"inputs":[{"type":"string","name":"hash"}],"outputs":[]}]')},802:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return m}));var a=n(1),r=(n(31),n(9)),i=n(874),s=n(882),c=n.n(s);function o(t){return i.a.utils.formatEther(t)}function u(t){return"https://ipfs.io/ipfs/".concat(t)}function p(t){var e=1e3*t.toNumber(),n=Date.now();return Math.floor((e-n)/864e5)}function l(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(Object(a.a)().mark((function t(e){var n,r,i,s,o,p,l,d;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(u(e));case 2:return n=t.sent.data,r=n.avatarImgPath,i=n.campaignDescription,s=n.campaignTitle,o=n.fundingPeriodInDays,p=n.goalAmount,l=n.headerImgPath,d=n.walletAddress,t.abrupt("return",{avatarImgPath:r,campaignDescription:i,campaignTitle:s,fundingPeriodInDays:o,goalAmount:p,headerImgPath:l,walletAddress:d});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return b.apply(this,arguments)}function b(){return(b=Object(r.a)(Object(a.a)().mark((function t(e){var n,r,i,s,c,u,d,m,b,f,y,h,j,g,x,O,v;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.campaignHash,r=e.campaignOwner,i=e.deadline,s=e.goalAchieved,c=e.isCampaignOpen,u=e.isExists,d=e.totalAmountFunded,m=e.isOwnerWithdraw,t.prev=1,t.next=4,l(n);case 4:return b=t.sent,f=b.avatarImgPath,y=b.campaignDescription,h=b.campaignTitle,j=b.fundingPeriodInDays,g=b.goalAmount,x=b.headerImgPath,b.walletAddress,O=p(i),v={campaignHash:n,campaignDescription:y,campaignOwner:r,daysLeft:O,isCampaignOpen:c,totalAmountFunded:o(d),avatarImgPath:f,isExists:u,campaignTitle:h,fundingPeriodInDays:j,goalAmount:g,headerImgPath:x,goalAchieved:s,isOwnerWithdraw:m},t.abrupt("return",v);case 11:throw t.prev=11,t.t0=t.catch(1),console.error(t.t0),new Error(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}},805:function(t,e,n){"use strict";n(0);var a=n(786),r=n(3);e.a=function(t){var e=t.text,n=t.variant,i=t.sx,s=t.size,c=t.className,o=t.type,u=t.disabled,p=t.onClick,l=t.endIcon;return Object(r.jsx)(a.a,{className:u?" text-white":c,variant:n,sx:i,size:s,type:o,disabled:u,onClick:p,endIcon:l,children:e})}},811:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return i}));var a=n(799),r=n(800),i="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},812:function(t,e,n){"use strict";var a=n(1416),r=n(3);e.a=function(t){var e=t.text,n=t.className,i=t.variant,s=t.component;return Object(r.jsx)(a.a,{className:"font-light uppercase  -text--heading-black-color  leading-relaxed  ".concat(n),gutterBottom:!0,variant:i,component:s||"div",children:e})}},816:function(t,e,n){"use strict";var a=n(0),r=n(52),i=n(811);e.a=function(){var t=Object(r.c)(),e=t.chainId,n=t.Moralis,s=t.isWeb3Enabled;return Object(a.useMemo)((function(){return function(t){if(!t||!s)return null;var e=n.web3Library,a=new e.providers.Web3Provider(window.ethereum),r=i.b,c=parseInt(t).toString(),o=c in i.b?r[c][0]:void 0;return{contract:new e.Contract(o,i.a,a),crowdFundAddress:o,abi:i.a}}(e)}),[e,s])}},828:function(t,e,n){"use strict";var a=n(92),r=n(3);e.a=function(){return Object(r.jsxs)("div",{className:"flex items-center font-bold",children:["Please ",Object(r.jsx)(a.a,{moralisAuth:!1})," TO Use App Properly."]})}},847:function(t,e){},848:function(t,e){},849:function(t,e){},850:function(t,e){},851:function(t,e){},852:function(t,e){},853:function(t,e){},862:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));var a=n(1),r=n(9),i=n(802),s=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e){var n;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.wait(1);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e,n){var r,s,c;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.filters.Fund(n,null),t.prev=1,t.next=4,e.queryFilter(r,0);case 4:if(0!==(s=t.sent).length){t.next=7;break}return t.abrupt("return",[]);case 7:return c=s.map((function(t){return{value:Object(i.a)(t.topics[2]),id:parseInt(t.topics[3])}})),t.abrupt("return",c);case 11:t.prev=11,t.t0=t.catch(1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}(),o=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e,n){var r,i,s;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.filters.Create(n,null),t.prev=1,t.next=4,e.queryFilter(r,0);case 4:if(0!==(i=t.sent).length){t.next=7;break}return t.abrupt("return",[]);case 7:return s=i.map((function(t){return parseInt(t.topics[2])})),t.abrupt("return",s);case 11:t.prev=11,t.t0=t.catch(1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=14.c7f8b8d4.chunk.js.map