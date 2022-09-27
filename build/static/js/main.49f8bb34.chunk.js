(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{126:function(e,t){},179:function(e,t,n){},180:function(e,t,n){},601:function(e,t,n){},602:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(55),o=n.n(a),c=(n(178),n(179),n(13)),s=n(10),i=(n(180),n(56)),l=n(41),u=n(37),j=n(31),h=n.n(j),d=n(3);function b(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var p={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:b,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=b();return e?JSON.parse(atob(e.split(".")[1])).user:null}},g="/api/users/";var O={signup:function(e){return fetch(g+"signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return p.setToken(t)}))},logout:function(){p.removeToken()},login:function(e){return fetch(g+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return p.setToken(t)}))},getUser:function(){return p.getUserFromToken()}},f=n(26),m=(n(184),n(619)),x=n(81);function v(e){e.loggedUser;var t=e.handleLogout;return e.user?Object(d.jsxs)(m.a,{as:"h2",children:[Object(d.jsx)(f.b,{to:"/",children:Object(d.jsx)(x.a,{name:"home"})}),Object(d.jsx)(f.b,{to:"",onClick:t,children:"Logout"})]}):Object(d.jsxs)(m.a,{as:"h2",children:[Object(d.jsx)(f.b,{to:"/",children:Object(d.jsx)(x.a,{name:"home"})}),Object(d.jsx)(f.b,{to:"/signup",children:"Sign Up"}),Object(d.jsx)(f.b,{to:"/login",children:"Login"})]})}var w=n(620),k=n(615),y=n(621),S=n(617),C=n(616);function U(e){var t=Object(r.useState)({message:"",passwordError:!1}),n=Object(c.a)(t,2),a=(n[0],n[1]),o=Object(r.useState)({username:"",email:"",password:"",passwordConf:""}),j=Object(c.a)(o,2),b=j[0],p=j[1],g=Object(r.useState)(""),x=Object(c.a)(g,2),v=x[0],U=x[1];function I(e){p(Object(u.a)(Object(u.a)({},b),{},Object(l.a)({},e.target.name,e.target.value)))}function P(){return(P=Object(i.a)(h.a.mark((function t(n){var r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),b.password===b.passwordConf){t.next=3;break}return t.abrupt("return",a({message:"Passwords Must Match!",passwordError:!0}));case 3:for(o in(r=new FormData).append("photo",v),b)r.append(o,b[o]);return t.prev=6,t.next=9,O.signup(r);case 9:e.handleSignUporLogin(),Object(s.a)("/"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(6),console.log(t.t0),a({message:t.t0.message});case 17:case"end":return t.stop()}}),t,null,[[6,13]])})))).apply(this,arguments)}return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(w.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(d.jsxs)(w.a.Column,{style:{maxWidth:450},children:[Object(d.jsx)(m.a,{as:"h2",color:"teal",textAlign:"center",children:"Signup for your account"}),Object(d.jsx)(k.a,{size:"large",onSubmit:function(e){return P.apply(this,arguments)},children:Object(d.jsxs)(y.a,{stacked:!0,children:[Object(d.jsx)(k.a.Input,{name:"username",placeholder:"username",value:b.username,onChange:I,required:!0}),Object(d.jsx)(k.a.Input,{name:"email",placeholder:"email",value:b.email,onChange:I,required:!0}),Object(d.jsx)(k.a.Input,{icon:"lock",iconPosition:"left",name:"password",placeholder:"password",value:b.password,onChange:I,type:"password",required:!0}),Object(d.jsx)(k.a.Input,{icon:"lock",iconPosition:"left",name:"passwordConf",placeholder:"Confirm Password",value:b.passwordConf,onChange:I,type:"password",required:!0}),Object(d.jsxs)(k.a.Field,{children:[Object(d.jsx)("label",{children:"Upload a Profile Picture"}),Object(d.jsx)(k.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){console.log(e.target.files,"<-this is the uploading file"),U(e.target.files[0])}})]}),Object(d.jsx)(S.a,{type:"submit",color:"teal",fluid:!0,size:"large",children:"Signup"})]})}),Object(d.jsxs)(C.a,{children:["Already a member? ",Object(d.jsx)(f.b,{to:"/login",children:"Login"})]})]})})})}n(601);function I(e){var t=Object(r.useState)(""),n=Object(c.a)(t,2),a=(n[0],n[1],Object(r.useState)({email:"",password:""})),o=Object(c.a)(a,2),j=o[0],b=o[1],p=Object(s.g)();function g(e){b(Object(u.a)(Object(u.a)({},j),{},Object(l.a)({},e.target.name,e.target.value)))}function x(){return(x=Object(i.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,O.login(j);case 4:e.handleSignUpOrLogin(),p("/"),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(d.jsx)(w.a,{onSubmit:function(e){return x.apply(this,arguments)},textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(d.jsxs)(w.a.Column,{style:{maxWidth:450},children:[Object(d.jsx)(m.a,{as:"h2",color:"teal",textAlign:"center"}),Object(d.jsx)(k.a,{size:"large",children:Object(d.jsxs)(y.a,{stacked:!0,children:[Object(d.jsx)(k.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",onChange:g,required:!0}),Object(d.jsx)(k.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",onChange:g,required:!0}),Object(d.jsx)(S.a,{type:"submit",color:"teal",fluid:!0,size:"large",children:"Login"})]})}),Object(d.jsxs)(C.a,{children:["New to us? ",Object(d.jsx)(f.b,{to:"/signup",children:"Sign Up"})]})]})})}var P=n(128);function T(e){var t=Object(r.useState)({title:"",ingredients:"",directions:""}),n=Object(c.a)(t,2),a=n[0],o=n[1],s=Object(r.useState)(""),i=Object(c.a)(s,2),j=i[0],h=i[1];function b(e){o(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))}return Object(d.jsx)(y.a,{children:Object(d.jsxs)(k.a,{onSubmit:function(t){t.preventDefault(),console.log("you are pressing the button");var n=new FormData;for(var r in n.append("photo",j),a)n.append(r,a[r]);e.handleAddPost(n)},children:[Object(d.jsx)(k.a.Input,{className:"form-control",name:"title",value:a.title,placeholder:"What do you call this Disaster?",onChange:b,required:!0}),Object(d.jsx)(k.a.Input,{className:"form-control",name:"ingredients",value:a.ingredients,placeholder:"What are the ingredients and amounts?",onChange:b,required:!0}),Object(d.jsx)(k.a.Input,{className:"form-control",name:"directions",value:a.directions,placeholder:"How do you make this disaster?",onChange:b,required:!0}),Object(d.jsx)(k.a.Field,{children:Object(d.jsx)(k.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){h(e.target.files[0])}})}),Object(d.jsx)(S.a,{type:"submit",className:"btn",children:"Add Disaster"})]})})}function L(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{children:"This is the PostCard"})})}function A(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"This is the Post Gallery"}),Object(d.jsx)(L,{})]})}var E="/api/posts";function q(e){return fetch(E,{method:"post",body:e,headers:{Authorization:"Bearer "+p.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw new Error(e.err)}))}))}function F(){return fetch(E,{headers:{Authorization:"Bearer "+p.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw new Error(e.err)}))}))}function D(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)([]),o=Object(c.a)(a,2),s=o[0],l=o[1],u=Object(r.useState)(""),j=Object(c.a)(u,2),b=(j[0],j[1]);function p(){return(p=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(t);case 3:n=e.sent,l([n.data].concat(Object(P.a)(s))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b("Error creating post, please try again");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(){return(g=Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:t=e.sent,l(Object(P.a)(t.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),Object(d.jsxs)(w.a,{centered:!0,children:[Object(d.jsx)(w.a.Row,{children:Object(d.jsx)(w.a.Column,{children:Object(d.jsx)(v,{handleLogout:n,loggedUser:t})})}),Object(d.jsx)(w.a.Row,{children:Object(d.jsx)(w.a.Column,{children:Object(d.jsx)(T,{handleAddPost:function(e){return p.apply(this,arguments)}})})}),Object(d.jsx)(w.a.Row,{children:Object(d.jsx)(w.a.Column,{style:{maxWidth:450},children:Object(d.jsx)(A,{})})})]})}var N=function(){var e=Object(r.useState)(O.getUser()),t=Object(c.a)(e,2),n=t[0],a=t[1];function o(){a(O.getUser())}return n?Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"/",element:Object(d.jsx)(D,{loggedUser:n,handleLogout:function(){O.logout(),a(null)}})}),Object(d.jsx)(s.b,{path:"/login",element:Object(d.jsx)(I,{handleSignUpOrLogin:o})}),Object(d.jsx)(s.b,{path:"/signup",element:Object(d.jsx)(U,{handleSignUpOrLogin:o})})]}):Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"/login",element:Object(d.jsx)(I,{handleSignUpOrLogin:o})}),Object(d.jsx)(s.b,{path:"/signup",element:Object(d.jsx)(U,{handleSignUpOrLogin:o})}),Object(d.jsx)(s.b,{path:"/*",element:Object(d.jsx)(s.a,{to:"/login"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(d.jsx)(f.a,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[602,1,2]]]);
//# sourceMappingURL=main.49f8bb34.chunk.js.map