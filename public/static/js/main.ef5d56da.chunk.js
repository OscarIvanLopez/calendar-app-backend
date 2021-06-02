(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n(8),o=n.n(c),s=n(22),i=n(5),l="[ui] Open modal",u="[ui] Close modal",j="[event] Set active",d="[event] Add new",b="[event] Clear active event",m="[event] Event updated",p="[event] Event deleted",O="[event] Events loaded",f="[auth] Finish checking login state",v="[auth] Login",h="[auth] Logout",x="[auth] Start register",g={modalOpen:!1},y=n(55),N={events:[],activeEvent:null},w={checking:!0},k=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case u:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case d:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(y.a)(e.events),[t.payload])});case b:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case m:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case p:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case O:return Object(i.a)(Object(i.a)({},e),{},{events:Object(y.a)(t.payload)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case f:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case x:return Object(i.a)(Object(i.a)({},e),{},{checking:!1},t.payload);case h:return{checking:!1};default:return e}}}),E=n(63),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,C=Object(s.e)(k,S(Object(s.a)(E.a))),D=n(9),T=n(35),P=n(10),I=n(14),A=n(16),_=n.n(A),L=n(12),R=n.n(L),G=n(21),F="https://mern-calendar-node-js.herokuapp.com/api",M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e),r=localStorage.getItem("token");return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},H=function(){return{type:f}},J=function(e){return{type:x,payload:e}},U=function(e){return{type:v,payload:e}},B=function(){return{type:h}},X=n(25),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(I.a)(t,2),a=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},a),{},Object(X.a)({},t.name,t.value)))};return[a,s,o]},z=(n(75),function(){var e=Object(D.b)(),t=q({lEmail:"",lPassword:""}),n=Object(I.a)(t,2),r=n[0],c=n[1],o=q({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),s=Object(I.a)(o,2),i=s[0],l=s[1],u=r.lEmail,j=r.lPassword,d=i.rName,b=i.rEmail,m=i.rPassword1,p=i.rPassword2;return Object(a.jsxs)("div",{className:"container login-container",children:[Object(a.jsx)("h1",{className:"title-app",children:"<CalendarApp />"}),Object(a.jsx)("h1",{className:"title-login",children:"Administra eventos con tus compa\xf1eros"}),Object(a.jsxs)("div",{className:"row forms",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u.trim(),a=j,function(){var e=Object(G.a)(R.a.mark((function e(t){var r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:c.uid,name:c.name}))):_.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==p)return _.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;e((n=b,a=m,r=d,function(){var e=Object(G.a)(R.a.mark((function e(t){var c,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/new",{name:r,email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:o.uid,name:o.name}))):_.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:p,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})]})}),W=n(54),K=n(17),Q=n.n(K),Y=function(){var e=Object(D.c)((function(e){return e.auth})).name,t=Object(D.b)();return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:e}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t((function(e){localStorage.clear(),e(B())}))},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Salir"})]})]})},Z=function(e){var t=e.event,n=t.title,r=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:n}),Object(a.jsxs)("span",{children:["- ",r.name]})]})},$=n(49),ee=n.n($),te=function(){return{type:l}},ne=n(50),ae=n.n(ne),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:Q()(e.end).toDate(),start:Q()(e.start).toDate()})}))},ce=function(e){return{type:d,payload:e}},oe=function(){return{type:b}},se=function(e){return{type:m,payload:e}},ie=function(){return{type:p}},le=function(){return function(){var e=Object(G.a)(R.a.mark((function e(t){var n,a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=re(a.events),t(ue(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},ue=function(e){return{type:O,payload:e}},je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ee.a.setAppElement("#root");var de=Q()().minute(0).seconds(0).add(1,"hours"),be=de.clone().add(1,"hours"),me={title:"",notes:"",start:de.toDate(),end:be.toDate()},pe=function(){var e=Object(r.useState)(de.toDate()),t=Object(I.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(be.toDate()),s=Object(I.a)(o,2),l=s[0],j=s[1],d=Object(r.useState)(!0),b=Object(I.a)(d,2),m=b[0],p=b[1],O=Object(D.b)(),f=Object(D.c)((function(e){return e.ui})).modalOpen,v=Object(D.c)((function(e){return e.calendar})).activeEvent,h=Object(r.useState)(me),x=Object(I.a)(h,2),g=x[0],y=x[1],N=g.title,w=g.notes,k=g.start,E=g.end;Object(r.useEffect)((function(){y(v||me)}),[v,y]);var S=function(e){var t=e.target;y(Object(i.a)(Object(i.a)({},g),{},Object(X.a)({},t.name,t.value)))},C=function(){O({type:u}),y(me),setTimeout((function(){O(oe())}),1e3)};return Object(a.jsxs)(ee.a,{className:"modal",overlayClassName:"modal-fondo",isOpen:f,closeTimeoutMS:200,onRequestClose:C,style:je,contentLabel:"Example Modal",children:[Object(a.jsxs)("h1",{children:[" ",v?"Editar Evento":"Nuevo Evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,n=Q()(k),a=Q()(E);return n.isSameOrAfter(a)?_.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):N.trim().length<2?p(!1):(O(v?(t=g,function(){var e=Object(G.a)(R.a.mark((function e(n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events/".concat(t.id),t,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?n(se(t)):_.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(G.a)(R.a.mark((function t(n,a){var r,c,o,s,i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.next=3,V("events",e,"POST");case 3:return s=t.sent,t.next=6,s.json();case 6:i=t.sent;try{i.ok&&(e.id=i.eventSaved.id,e.user={_id:c,name:o},n(ce(e)))}catch(l){console.log(l),_.a.fire("Error",i.msg,"error")}case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(g)),p(!0),void C())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(ae.a,{onChange:function(e){c(e),y(Object(i.a)(Object(i.a)({},g),{},{start:e}))},value:n,className:"form-control react-datetime-picker"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(ae.a,{onChange:function(e){j(e),y(Object(i.a)(Object(i.a)({},g),{},{end:e}))},value:l,minDate:n,className:"form-control react-datetime-picker"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!m&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:N,onChange:S}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:S}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})},Oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},fe=(n(111),n(112),function(){var e=Object(D.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(te())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})}),ve=function(){var e=Object(D.b)();return Object(a.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(G.a)(R.a.mark((function e(t,n){var a,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,V("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?(t(ie),t(le())):_.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),e(oe())},children:[Object(a.jsx)("i",{className:"fas fa-trash"}),Object(a.jsx)("span",{children:" Borrar evento"})]})};Q.a.locale("es");var he=Object(W.b)(Q.a),xe=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,o=Object(D.c)((function(e){return e.auth})).uid,s=Object(r.useState)(localStorage.getItem("lastView")||"month"),i=Object(I.a)(s,2),l=i[0],u=i[1];Object(r.useEffect)((function(){e(le())}),[e]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(Y,{}),Object(a.jsx)(W.a,{localizer:he,events:n,startAccessor:"start",endAccessor:"end",messages:Oe,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",bordarRadius:"0px",opacity:.8,display:"block",color:"white",wordWrap:"break-word"}}},onDoubleClickEvent:function(t){e(te())},onSelectEvent:function(t){e({type:j,payload:t})},onSelectSlot:function(t){e(oe())},selectable:!0,onView:function(e){u(e),localStorage.setItem("lastView",e)},view:l,components:{event:Z}}),Object(a.jsx)(fe,{}),c?Object(a.jsx)(ve,{}):null,Object(a.jsx)(pe,{})]})},ge=n(38),ye=function(e){var t=e.isAuthenticaded,n=e.component,r=Object(ge.a)(e,["isAuthenticaded","component"]);return Object(a.jsx)(P.b,Object(i.a)(Object(i.a)({},r),{},{component:function(e){return t?Object(a.jsx)(P.a,{to:"/"}):Object(a.jsx)(n,Object(i.a)({},e))}}))},Ne=function(e){var t=e.isAuthenticaded,n=e.component,r=Object(ge.a)(e,["isAuthenticaded","component"]);return localStorage.setItem("lastPath",r.location.pathname),Object(a.jsx)(P.b,Object(i.a)(Object(i.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(i.a)({},e)):Object(a.jsx)(P.a,{to:"/login"})}}))},we=(n(114),function(){return Object(a.jsx)("div",{className:"spinner"})}),ke=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(r.useEffect)((function(){e(function(){var e=Object(G.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:a.uid,name:a.name}))):t(H());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("div",{className:"container-spinner",children:Object(a.jsx)(we,{})}):Object(a.jsx)(T.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(P.d,{children:[Object(a.jsx)(ye,{exact:!0,path:"/login",component:z,isAuthenticaded:!!c}),Object(a.jsx)(Ne,{exact:!0,path:"/",component:xe,isAuthenticaded:!!c}),Object(a.jsx)(P.a,{to:"/"})]})})})},Ee=function(){return Object(a.jsx)(D.a,{store:C,children:Object(a.jsx)(ke,{})})};n(115);o.a.render(Object(a.jsx)(Ee,{}),document.getElementById("root"))},75:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.ef5d56da.chunk.js.map