(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{112:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var c=a(47),r=a.n(c),n=(a(112),a(1),a(3)),s=a(18),i=a(5),o=a(4),l=a(52),d=a(0),b=["isAuthenticated","component"],j=function(e){var t=e.isAuthenticated,a=e.component,c=Object(l.a)(e,b);return Object(d.jsx)(i.b,Object(o.a)(Object(o.a)({},c),{},{component:function(e){return t?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)(a,Object(o.a)({},e))}}))},u=["isAuthenticated","component"],h=function(e){var t=e.isAuthenticated,a=e.component,c=Object(l.a)(e,u);return Object(d.jsx)(i.b,Object(o.a)(Object(o.a)({},c),{},{component:function(e){return t?Object(d.jsx)(a,Object(o.a)({},e)):Object(d.jsx)(i.a,{to:"/login"})}}))},m=a(17),p=a(9),O=a.n(p),x=a(23),f=a(34),g=a.n(f),v="[auth] StartLogin",y="[auth] FinishLogout",w="[Search] startSearchHero",N="[Search] clearSearchHero",k="[Details] showDetails",A="[Details] clearDetails",C="[Team] addHeroTeam",S="[Team] removeHeroTeam",T=a(11),I=a.n(T),E=(a(37),function(){return{type:y}}),H=function(e){return{type:v,payload:{token:e}}},_=function(){var e=Object(n.b)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(m.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)?e.password||(t.password="Password is required !"):t.email="Invalid email address":t.email="Email is required !",t},onSubmit:function(t,a){var c=t.email,r=t.password,n=a.setSubmitting;e(function(e,t){return function(){var a=Object(x.a)(O.a.mark((function a(c){var r,n;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g.a.post("https://cors-everywhere-me.herokuapp.com/http://challenge-react.alkemy.org/",{email:e,password:t});case 3:r=a.sent,n=r.data.token,localStorage.setItem("token",n),c(H(n)),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0),I.a.fire("Opss...","Access is denied ","error");case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(c,r)),n(!1)},children:function(e){var t=e.isSubmitting;return Object(d.jsx)(m.c,{children:Object(d.jsx)("div",{className:"backgroudCenter",children:Object(d.jsxs)("div",{className:"container ",children:[Object(d.jsx)("h2",{children:"\xa1Let's go!"}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)(m.b,{type:"email",name:"email",className:"form-control",placeholder:"Email"}),Object(d.jsx)(m.a,{name:"email",component:"div",className:"formAlert"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)(m.b,{type:"password",name:"password",className:"form-control",placeholder:"Password"}),Object(d.jsx)(m.a,{name:"password",component:"div",className:"formAlert"})]}),Object(d.jsx)("button",{type:"submit",disabled:t,className:"btn btn-primary",children:"Submit"})]})})})}})})},q=a(26),D=function(){var e=Object(n.b)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(s.b,{to:"/",className:"navbar-brand",children:"My team"}),Object(d.jsx)(s.b,{to:"/search",className:"navbar-brand",children:"Search"}),Object(d.jsx)("form",{className:"d-flex",children:Object(d.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){e(function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(E());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})]})})})},F=function(e){return{type:w,payload:{data:e}}},R=function(e){return{type:k,payload:{data:e}}},L=function(e){return function(){var t=Object(x.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(P(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return{type:C,payload:Object(o.a)({},e)}},B=function(e){return{type:S,payload:{newTeam:e}}},K=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.detailStore})).data,a=Object(n.c)((function(e){return e.myTeam})).data;if(!1===!!t.biography)return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h2",{className:"m-5",children:"Selecciona un heroe"})});var c=t.name,r=t.image,i=t.appearance,o=t.work,l=i["hair-color"],b=i["eye-color"],j=t.biography.aliases;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(D,{}),Object(d.jsxs)("div",{className:"container-lg border mt-5",children:[Object(d.jsx)("div",{className:"card mb-3",style:{maxWidth:"1000px"},children:Object(d.jsxs)("div",{className:"row g-0",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("img",{src:r.url,className:"img-fluid rounded-start",alt:"img Hero"})}),Object(d.jsx)("div",{className:"col-md-8",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-title",children:c}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Peso: ",i.weight[1]]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Altura: ",i.height[1]]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Color de ojos: ",b]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Color de cabello: ",l]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Logar de trabajo: ",o.base]})}),Object(d.jsxs)("li",{children:[Object(d.jsx)("h5",{children:"Alias:"})," ",Object(d.jsx)("ul",{children:j.map((function(e){return Object(d.jsxs)("li",{className:"listStyleNone",children:[" ",e,"  "]},e)}))})]})]})]})})]})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsx)(s.b,{to:"/search",className:"btn btn-outline-warning",onClick:function(){e({type:A,payload:{data:[]}})},children:"Back"}),Object(d.jsx)("button",{type:"button",onClick:function(){var c=a.filter((function(e){return"good"===e.biography.alignment})),r=a.filter((function(e){return"bad"===e.biography.alignment})),n=a.filter((function(e){return e.id===t.id}));!0===!Object(q.a)(n,1)[0]?a.length<6?c.length<3&&"good"===t.biography.alignment||r.length<3&&"bad"===t.biography.alignment?e(L(t)):c.length<3?I.a.fire("Oops...","tienes tres  heroes malos, selcciona unos buenos","error"):I.a.fire("Oops...","tienes tres  heroes buenos, selcciona unos malos","error"):I.a.fire("Oops...","Tu equipo ya cuenta con seis integrantes ","error"):I.a.fire("Oops...","hero ya esta en tu equipo","error")},className:"btn btn-outline-success btn-sm ",children:"Agregar"})]})]})]})},M=function(){var e=Object(n.b)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsx)(m.d,{initialValues:{search:""},validate:function(e){var t={};return e.search||(t.search="Required"),t},onSubmit:function(t,a){var c=a.setSubmitting;e(function(e){var t=e.search;return function(){var e=Object(x.a)(O.a.mark((function e(a){var c,r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://superheroapi.com/api/10226000777461921/search/".concat(t));case 2:c=e.sent,r=c.data.error,n=c.data.results;try{!1===!!n?I.a.fire("".concat(r),"Access is denied ","error"):a(F(n))}catch(s){console.log(s)}case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t)),c(!1)},children:function(e){var t=e.isSubmitting;return Object(d.jsxs)(m.c,{children:[Object(d.jsxs)("div",{className:"searchImput",children:[Object(d.jsx)(m.b,{type:"search",name:"search",className:"searchImput__search"}),Object(d.jsx)("button",{type:"submit",disabled:t,className:"searchImput__button",children:Object(d.jsx)("i",{className:"fab fa-searchengin"})})]}),Object(d.jsx)(m.a,{name:"search",component:"div",className:"formAlert"})]})}})})})},Z=function(){var e=Object(n.c)((function(e){return e.heroReducer})).data,t=Object(n.b)(),a=Object(n.c)((function(e){return e.myTeam})).data,c=function(e){var a=e.target.accessKey;t(function(e){return function(){var t=Object(x.a)(O.a.mark((function t(a){var c,r,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c={url:"https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10226000777461921/".concat(e),method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",origin:"x-requested-with","Access-Control-Allow-Headers":"POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin","Content-Type":"application/json"}},t.next=4,g()(c);case 4:r=t.sent,n=r.data,a(R(n)),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(a))},r=function(c){var r=c.target.accessKey,n=a.filter((function(e){return"good"===e.biography.alignment})),s=a.filter((function(e){return"bad"===e.biography.alignment})),i=a.filter((function(e){return e.id===r})),o=Object(q.a)(i,1)[0],l=e.filter((function(e){return e.id===r})),d=Object(q.a)(l,1)[0];!0===!o?a.length<6?n.length<3&&"good"===d.biography.alignment||s.length<3&&"bad"===d.biography.alignment?t(L(d)):n.length<3?I.a.fire("Oops...","tienes tres  heroes malos, selcciona unos buenos","error"):I.a.fire("Oops...","tienes tres  heroes buenos, selcciona unos malos","error"):I.a.fire("Oops...","Tu equipo ya cuenta con seis integrantes ","error"):I.a.fire("Oops...","hero ya esta en tu equipo","error")};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(D,{}),Object(d.jsx)("div",{className:"row row-cols-1 ",children:Object(d.jsxs)("div",{className:"col-12 contenedorSearch ",children:[Object(d.jsx)(M,{}),Object(d.jsx)("button",{className:"btn btn-warning mt-5 shadow-sm",type:"button",onClick:function(){t({type:N,payload:{data:[]}})},children:"Clear"})]})}),Object(d.jsx)("div",{className:"container ",children:Object(d.jsx)("div",{className:"row row-cols-1 ",children:e.map((function(e){return Object(d.jsx)("div",{className:"col-sm man ",children:Object(d.jsxs)("div",{className:"card cardHover shadow-lg mb-5",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:e.image.url,className:"card-img-top",alt:"Hero img"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:e.name}),Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsx)(s.b,{to:"/detail",accessKey:e.id,type:"button",onClick:c,className:"btn btn-outline-primary btn-sm",children:"Details"}),Object(d.jsx)("button",{type:"button",accessKey:e.id,onClick:r,className:"btn btn-outline-success btn-sm ",children:"Add"})]})]})]})},e.id)}))})})]})},V=a(51),W=function(){var e=Object(n.c)((function(e){return e.myTeam})).data,t=function(e,t){return e+t},a=e.map((function(e){return parseInt(e.powerstats.power)})).reduce(t),c=e.map((function(e){return parseInt(e.powerstats.combat)})).reduce(t),r=e.map((function(e){return parseInt(e.powerstats.durability)})).reduce(t),s=e.map((function(e){return parseInt(e.powerstats.speed)})).reduce(t),i=e.map((function(e){return parseInt(e.powerstats.intelligence)})).reduce(t),o=e.map((function(e){return parseInt(e.powerstats.strength)})).reduce(t),l=parseInt(e.map((function(e){return parseInt(e.appearance.weight[1].split(" ",1))})).reduce(t)/e.length),b=parseInt(e.map((function(e){return parseInt(e.appearance.height[1].split(" ",1))})).reduce(t)/e.length),j=Math.max.apply(null,[a,c,r,s,i,o]),u=a===j?"Power":c===j?"Combat":r===j?"Durability":s===j?"Speed":i===j?"Intelligence":o===j?"Strength":null,h={labels:["intelligense","strength","speed","durability","power","combat"],datasets:[{label:"powerstats, of Team",data:[i,o,s,r,a,c],fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:" row m-2",children:[Object(d.jsxs)("div",{className:"col statusTeam  ",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{className:"title",children:"Vertical Bar Chart"})}),Object(d.jsx)(V.a,{data:h,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]}),Object(d.jsxs)("div",{className:" col  align-self-center",children:[Object(d.jsxs)("h3",{children:["Representative team skill: ",u]}),Object(d.jsxs)("h5",{children:["Average weight of my team: ",l,"kg"]}),Object(d.jsxs)("h5",{children:["Average height  of my team: ",b,"cm"]})]})]})})},X=function(){var e=Object(n.c)((function(e){return e.myTeam})).data,t=Object(n.b)(),a=function(a){var c=a.target.accessKey;t(function(e,t){var a=e.filter((function(e){return e.id!==t}));return function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(B(a));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e,c))};return!1===!!e[0]?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(D,{}),Object(d.jsx)("div",{children:Object(d.jsx)("h3",{className:"m-5",children:"Build your team with the heroes that you can search from the search tab"})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(D,{}),Object(d.jsx)(W,{}),Object(d.jsx)("div",{className:"  container-sm mt-5",children:Object(d.jsxs)("div",{className:"row row-cols-1  ",children:[e.map((function(e){var t={labels:["intelligense","strength","speed","durability","power","combat"],datasets:[{label:"Powerstats,",data:[e.powerstats.ntelligense,e.powerstats.strength,e.powerstats.speed,e.powerstats.durability,e.powerstats.power,e.powerstats.combat],backgroundColor:"rgba(81, 255, 0, 0.203)",borderColor:"rgba(51, 160, 0, 1)",borderWidth:1}]};return Object(d.jsx)("div",{className:"col-sm  ",children:Object(d.jsxs)("div",{className:"card mb-5 shadow-lg ",style:{width:"18rem"},children:[Object(d.jsxs)("div",{className:"cardHover",children:[Object(d.jsx)("img",{src:e.image.url,className:"card-img-top ",alt:"HeroImg"}),Object(d.jsx)("div",{className:"cardHover__hover",id:"canvas",children:Object(d.jsx)(V.b,{data:t,options:{scale:{ticks:{beginAtZero:!0}}}})})]}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:e.name}),Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsx)("button",{type:"button",accessKey:e.id,className:"btn btn-outline-danger btn-sm ",onClick:a,children:"Remove "}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-warning","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"+e.id,children:"Details"}),Object(d.jsx)("div",{className:"modal fade",id:"staticBackdrop"+e.id,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Modal title"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(d.jsx)("div",{className:"modal-body",children:Object(d.jsx)("div",{className:"card mb-3",style:{maxWidth:"1000px"},children:Object(d.jsxs)("div",{className:"row g-0",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("img",{src:e.image.url,className:"img-fluid rounded-start",alt:"img Hero"})}),Object(d.jsx)("div",{className:"col-md-8",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-title",children:e.name}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Peso: ",e.appearance.weight[1]]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Altura: ",e.appearance.height[1]]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Color de ojos: ",e.appearance.eyeColor]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Color de cabello: ",e.appearance.hairColor]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Logar de trabajo: ",e.work.base]})}),Object(d.jsxs)("li",{children:[Object(d.jsx)("h5",{children:"Alias:"})," ",Object(d.jsx)("ul",{children:e.biography.aliases.map((function(e){return Object(d.jsxs)("li",{className:"listStyleNone",children:[" ",e," "]},e)}))})]})]})]})})]})})}),Object(d.jsx)("div",{className:"modal-footer",children:Object(d.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})]})]})]})},e.id)})),";"]})})]})},G=function(){var e=Object(n.c)((function(e){return e.authReducer})).token;return Object(d.jsx)(s.a,{children:Object(d.jsx)("div",{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(h,{exact:!0,path:"/",component:X,isAuthenticated:!!e}),Object(d.jsx)(h,{exact:!0,path:"/detail",component:K,isAuthenticated:!!e}),Object(d.jsx)(h,{exact:!0,path:"/search",component:Z,isAuthenticated:!!e}),Object(d.jsx)(j,{exact:!0,path:"/login",component:_,isAuthenticated:!!e}),Object(d.jsx)(i.a,{to:"/"})]})})})},J=a(36),U=a(107),z={auth:!1,checking:!1},$={data:[]},Q={data:[]},Y=a(7),ee={data:[]},te=Object(J.b)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(o.a)(Object(o.a)({},e),{},{auth:!0,checking:!1},t.payload);case y:return{initialState:z};default:return e}},heroReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)({},t.payload);case N:return $;default:return e}},detailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:case A:return Object(o.a)({},t.payload);default:return e}},myTeam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case C:return{data:[].concat(Object(Y.a)(e.data),[c])};case S:return{data:Object(Y.a)(c.newTeam)};default:return e}}}),ae="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.c,ce=Object(J.d)(te,ae(Object(J.a)(U.a))),re=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(n.a,{store:ce,children:Object(d.jsx)(G,{})})})};r.a.render(Object(d.jsx)(re,{}),document.getElementById("root"))}},[[252,1,2]]]);
//# sourceMappingURL=main.33046973.chunk.js.map