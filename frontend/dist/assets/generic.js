import{S as xe,i as ye,s as ke,N as Ce,c as ee,a as G,e as d,r as I,b as i,m as te,d as T,f as l,l as K,u as W,t as J,g as se,h as P,j as oe,k as le,n as H,o as O,p as Q,D as Fe,E as je,G as De,H as Ee,v as ne,F as ve,w as Ge,x as we,I as R,J as L,y as V,C as Me,B as Z,K as qe,L as ze,M as Be}from"./index.js";import{f as X,a as Y}from"./index2.js";function ae(n,s,o){const t=n.slice();return t[21]=s[o],t[22]=s,t[23]=o,t}function re(n,s,o){const t=n.slice();return t[21]=s[o],t}function fe(n,s,o){const t=n.slice();return t[26]=s[o],t}function de(n,s,o){const t=n.slice();return t[21]=s[o],t}function ue(n,s,o){const t=n.slice();return t[21]=s[o],t}function ce(n){let s,o=n[21].name+"",t;return{c(){s=d("th"),t=I(o),i(s,"scope","col"),i(s,"class","text-sm font-medium text-gray-900 px-6 py-4 text-left")},m(f,_){T(f,s,_),l(s,t)},p(f,_){_[0]&32&&o!==(o=f[21].name+"")&&W(t,o)},d(f){f&&H(s)}}}function me(n){let s,o=n[26][n[21].name]+"",t;return{c(){s=d("td"),t=I(o),i(s,"class","px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900")},m(f,_){T(f,s,_),l(s,t)},p(f,_){_[0]&96&&o!==(o=f[26][f[21].name]+"")&&W(t,o)},d(f){f&&H(s)}}}function pe(n){let s,o,t,f,_,w,g,c,y,b=n[5],r=[];for(let m=0;m<b.length;m+=1)r[m]=me(de(n,b,m));function D(){return n[13](n[26])}function z(){return n[14](n[26])}return{c(){s=d("tr");for(let m=0;m<r.length;m+=1)r[m].c();o=G(),t=d("td"),f=d("button"),f.textContent="Update",_=G(),w=d("button"),w.textContent="Delete",g=G(),i(f,"class","border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"),i(w,"class","border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"),i(t,"class","text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"),i(s,"class","bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100")},m(m,v){T(m,s,v);for(let k=0;k<r.length;k+=1)r[k]&&r[k].m(s,null);l(s,o),l(s,t),l(t,f),l(t,_),l(t,w),l(s,g),c||(y=[K(f,"click",D),K(w,"click",z)],c=!0)},p(m,v){if(n=m,v[0]&96){b=n[5];let k;for(k=0;k<b.length;k+=1){const q=de(n,b,k);r[k]?r[k].p(q,v):(r[k]=me(q),r[k].c(),r[k].m(s,o))}for(;k<r.length;k+=1)r[k].d(1);r.length=b.length}},d(m){m&&H(s),O(r,m),c=!1,ne(y)}}}function ge(n){let s,o,t,f,_,w,g,c,y,b,r,D,z,m,v,k,q=n[0].split("/")[2]+"",$,A,S,N,M,U,u,C,x,B,E,F;D=new ve({props:{icon:Ge}});let h=n[5],e=[];for(let p=0;p<h.length;p+=1)e[p]=he(re(n,h,p));return{c(){s=d("div"),o=d("div"),f=G(),_=d("div"),w=d("div"),g=d("div"),c=d("div"),y=d("div"),b=d("div"),r=we("svg"),ee(D.$$.fragment),z=G(),m=d("div"),v=d("h3"),k=I("Add a new "),$=I(q),A=G(),S=d("div");for(let p=0;p<e.length;p+=1)e[p].c();N=G(),M=d("div"),U=d("button"),U.textContent="Create",u=G(),C=d("button"),C.textContent="Cancel",i(o,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-150"),i(r,"class","h-6 w-6 text-green-600"),i(r,"fill","none"),i(r,"viewBox","0 0 24 24"),i(r,"stroke-width","1.5"),i(r,"stroke","currentColor"),i(r,"aria-hidden","true"),i(b,"class","mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"),i(v,"class","text-base font-semibold leading-6 text-gray-900"),i(v,"id","modal-title"),i(S,"class","mt-2"),i(m,"class","mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"),i(y,"class","sm:flex sm:items-start"),i(c,"class","bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"),i(U,"type","button"),i(U,"class","inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"),i(C,"type","button"),i(C,"class","mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"),i(M,"class","bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"),i(g,"class","relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"),i(w,"class","flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"),i(_,"class","fixed inset-0 z-10 overflow-y-auto"),i(s,"class","relative z-10")},m(p,a){T(p,s,a),l(s,o),l(s,f),l(s,_),l(_,w),l(w,g),l(g,c),l(c,y),l(y,b),l(b,r),te(D,r,null),l(y,z),l(y,m),l(m,v),l(v,k),l(v,$),l(m,A),l(m,S);for(let j=0;j<e.length;j+=1)e[j]&&e[j].m(S,null);l(g,N),l(g,M),l(M,U),l(M,u),l(M,C),B=!0,E||(F=[K(U,"click",n[8]),K(C,"click",n[11])],E=!0)},p(p,a){if((!B||a[0]&1)&&q!==(q=p[0].split("/")[2]+"")&&W($,q),a[0]&34){h=p[5];let j;for(j=0;j<h.length;j+=1){const ie=re(p,h,j);e[j]?e[j].p(ie,a):(e[j]=he(ie),e[j].c(),e[j].m(S,null))}for(;j<e.length;j+=1)e[j].d(1);e.length=h.length}},i(p){B||(R(()=>{B&&(t||(t=L(o,X,{},!0)),t.run(1))}),J(D.$$.fragment,p),R(()=>{B&&(x||(x=L(g,Y,{},!0)),x.run(1))}),B=!0)},o(p){t||(t=L(o,X,{},!1)),t.run(0),P(D.$$.fragment,p),x||(x=L(g,Y,{},!1)),x.run(0),B=!1},d(p){p&&H(s),p&&t&&t.end(),le(D),O(e,p),p&&x&&x.end(),E=!1,ne(F)}}}function he(n){let s,o=n[21].name+"",t,f,_,w,g,c,y;return{c(){s=d("div"),t=I(o),f=I(":"),_=G(),w=d("input"),i(w,"type","text"),i(w,"placeholder",g=n[21].description)},m(b,r){T(b,s,r),l(s,t),l(s,f),T(b,_,r),T(b,w,r),V(w,n[1]["genericField.name"]),c||(y=K(w,"input",n[15]),c=!0)},p(b,r){r[0]&32&&o!==(o=b[21].name+"")&&W(t,o),r[0]&32&&g!==(g=b[21].description)&&i(w,"placeholder",g),r[0]&2&&w.value!==b[1]["genericField.name"]&&V(w,b[1]["genericField.name"])},d(b){b&&H(s),b&&H(_),b&&H(w),c=!1,y()}}}function be(n){let s,o,t,f,_,w,g,c,y,b,r,D,z,m,v,k,q=n[0].split("/")[2]+"",$,A,S,N,M,U,u,C,x,B,E;D=new ve({props:{icon:Me}});let F=n[5],h=[];for(let e=0;e<F.length;e+=1)h[e]=_e(ae(n,F,e));return{c(){s=d("div"),o=d("div"),f=G(),_=d("div"),w=d("div"),g=d("div"),c=d("div"),y=d("div"),b=d("div"),r=we("svg"),ee(D.$$.fragment),z=G(),m=d("div"),v=d("h3"),k=I("Update "),$=I(q),A=G();for(let e=0;e<h.length;e+=1)h[e].c();S=G(),N=d("div"),M=d("button"),M.textContent="Update",U=G(),u=d("button"),u.textContent="Cancel",i(o,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-150"),i(r,"class","h-6 w-6 text-orange-600"),i(r,"fill","none"),i(r,"viewBox","0 0 24 24"),i(r,"stroke-width","1.5"),i(r,"stroke","currentColor"),i(r,"aria-hidden","true"),i(b,"class","mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10"),i(v,"class","text-base font-semibold leading-6 text-gray-900 dark:text-white"),i(v,"id","modal-title"),i(m,"class","mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"),i(y,"class","sm:flex sm:items-start"),i(c,"class","bg-white dark:bg-gray-800 dark:border-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"),i(M,"type","button"),i(M,"class","inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"),i(u,"type","button"),i(u,"class","mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"),i(N,"class","bg-gray-50 dark:bg-gray-800 dark:border-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"),i(g,"class","relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:w-auto lg:w-auto"),i(w,"class","min-w-full flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"),i(_,"class","fixed inset-0 z-10 overflow-y-auto"),i(s,"class","relative z-10")},m(e,p){T(e,s,p),l(s,o),l(s,f),l(s,_),l(_,w),l(w,g),l(g,c),l(c,y),l(y,b),l(b,r),te(D,r,null),l(y,z),l(y,m),l(m,v),l(v,k),l(v,$),l(m,A);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(m,null);l(g,S),l(g,N),l(N,M),l(N,U),l(N,u),x=!0,B||(E=[K(M,"click",n[10]),K(u,"click",n[12])],B=!0)},p(e,p){if((!x||p[0]&1)&&q!==(q=e[0].split("/")[2]+"")&&W($,q),p[0]&36){F=e[5];let a;for(a=0;a<F.length;a+=1){const j=ae(e,F,a);h[a]?h[a].p(j,p):(h[a]=_e(j),h[a].c(),h[a].m(m,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=F.length}},i(e){x||(R(()=>{x&&(t||(t=L(o,X,{},!0)),t.run(1))}),J(D.$$.fragment,e),R(()=>{x&&(C||(C=L(g,Y,{},!0)),C.run(1))}),x=!0)},o(e){t||(t=L(o,X,{},!1)),t.run(0),P(D.$$.fragment,e),C||(C=L(g,Y,{},!1)),C.run(0),x=!1},d(e){e&&H(s),e&&t&&t.end(),le(D),O(h,e),e&&C&&C.end(),B=!1,ne(E)}}}function _e(n){let s,o,t,f=n[21].name+"",_,w,g,c,y,b,r,D;function z(){n[16].call(c,n[21])}return{c(){s=d("div"),o=d("div"),t=d("label"),_=I(f),w=G(),g=d("div"),c=d("input"),b=G(),i(t,"for","edittitle"),i(t,"class","block text-sm font-bold ml-1 mb-2 text-gray-900 dark:text-white"),i(c,"id","edittitle"),i(c,"type","text"),i(c,"class","py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"),i(c,"placeholder",y=n[21].description),i(g,"class","relative"),i(s,"class","grid gap-y-4")},m(m,v){T(m,s,v),l(s,o),l(o,t),l(t,_),l(o,w),l(o,g),l(g,c),V(c,n[2][n[21].name]),l(s,b),r||(D=K(c,"input",z),r=!0)},p(m,v){n=m,v[0]&32&&f!==(f=n[21].name+"")&&W(_,f),v[0]&32&&y!==(y=n[21].description)&&i(c,"placeholder",y),v[0]&36&&c.value!==n[2][n[21].name]&&V(c,n[2][n[21].name])},d(m){m&&H(s),r=!1,D()}}}function Ne(n){let s,o,t,f,_,w=n[0].split("/")[2]+"",g,c,y,b,r,D,z,m,v,k,q,$,A,S,N,M,U,u;s=new Ce({});let C=n[5],x=[];for(let e=0;e<C.length;e+=1)x[e]=ce(ue(n,C,e));let B=n[6],E=[];for(let e=0;e<B.length;e+=1)E[e]=pe(fe(n,B,e));let F=n[3]&&ge(n),h=n[4]&&be(n);return{c(){ee(s.$$.fragment),o=G(),t=d("div"),f=d("button"),_=I("Add "),g=I(w),c=G(),y=d("div"),b=d("div"),r=d("div"),D=d("div"),z=d("table"),m=d("thead"),v=d("tr");for(let e=0;e<x.length;e+=1)x[e].c();k=G(),q=d("th"),$=G(),A=d("tbody");for(let e=0;e<E.length;e+=1)E[e].c();S=G(),F&&F.c(),N=G(),h&&h.c(),i(f,"class","border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"),i(q,"scope","col"),i(q,"class","text-sm font-medium text-gray-900 px-6 py-4 text-left"),i(m,"class","bg-gray-200 border-b"),i(z,"class","min-w-full"),i(D,"class","overflow-hidden"),i(r,"class","py-2 inline-block min-w-full sm:px-6 lg:px-8"),i(b,"class","overflow-x-auto sm:mx-0.5 lg:mx-0.5"),i(y,"class","flex flex-col")},m(e,p){te(s,e,p),T(e,o,p),T(e,t,p),l(t,f),l(f,_),l(f,g),l(t,c),l(t,y),l(y,b),l(b,r),l(r,D),l(D,z),l(z,m),l(m,v);for(let a=0;a<x.length;a+=1)x[a]&&x[a].m(v,null);l(v,k),l(v,q),l(z,$),l(z,A);for(let a=0;a<E.length;a+=1)E[a]&&E[a].m(A,null);l(t,S),F&&F.m(t,null),l(t,N),h&&h.m(t,null),M=!0,U||(u=K(f,"click",n[11]),U=!0)},p(e,p){if((!M||p[0]&1)&&w!==(w=e[0].split("/")[2]+"")&&W(g,w),p[0]&32){C=e[5];let a;for(a=0;a<C.length;a+=1){const j=ue(e,C,a);x[a]?x[a].p(j,p):(x[a]=ce(j),x[a].c(),x[a].m(v,k))}for(;a<x.length;a+=1)x[a].d(1);x.length=C.length}if(p[0]&736){B=e[6];let a;for(a=0;a<B.length;a+=1){const j=fe(e,B,a);E[a]?E[a].p(j,p):(E[a]=pe(j),E[a].c(),E[a].m(A,null))}for(;a<E.length;a+=1)E[a].d(1);E.length=B.length}e[3]?F?(F.p(e,p),p[0]&8&&J(F,1)):(F=ge(e),F.c(),J(F,1),F.m(t,N)):F&&(se(),P(F,1,1,()=>{F=null}),oe()),e[4]?h?(h.p(e,p),p[0]&16&&J(h,1)):(h=be(e),h.c(),J(h,1),h.m(t,null)):h&&(se(),P(h,1,1,()=>{h=null}),oe())},i(e){M||(J(s.$$.fragment,e),J(F),J(h),M=!0)},o(e){P(s.$$.fragment,e),P(F),P(h),M=!1},d(e){le(s,e),e&&H(o),e&&H(t),O(x,e),O(E,e),F&&F.d(),h&&h.d(),U=!1,u()}}}function Ue(n,s,o){let t,f,_,w;Q(n,Fe,u=>o(17,t=u)),Q(n,je,u=>o(0,f=u)),Q(n,De,u=>o(5,_=u)),Q(n,Ee,u=>o(6,w=u));let g=new Map;for(let u of _)g.set(u.name,"");let c=new Map;for(let u of _)c.set(u.name,"");async function y(u){await ze({tableName:u.tablename}),await Be({tableName:u.tablename}),console.log(_)}function b(u){const C=`/backend/generic/${f.split("/")[2]}/${u}`;Z.delete(C).then(()=>{v(f)}).catch(x=>{console.error(x),v(f)})}function r(){o(1,g=new Map);for(let u of _)g.set(u.name,"");o(2,c=new Map);for(let u of _)c.set(u.name,"")}function D(){const u=`/backend/generic/${f.split("/")[2]}`;Z.post(u,g).then(()=>{v(f)}).catch(C=>{console.log(C),v(f)}),q()}function z(u){A(),o(2,c=u)}function m(){const u=`/backend/generic/${f.split("/")[2]}/${c._id}`;Z.put(u,c).then(()=>{v(f)}).catch(C=>{console.error(C),v(f)}),A()}async function v(u){await qe();let C=t.find(x=>x.tablename===u.split("/")[2]);C&&await y(C)}let k=!1;function q(){console.log("on add toggle"),r(),o(3,k=!k)}let $=!1;function A(){r(),o(4,$=!$)}const S=u=>{z(u)},N=u=>{b(u)};function M(){g["genericField.name"]=this.value,o(1,g)}function U(u){c[u.name]=this.value,o(2,c)}return n.$$.update=()=>{n.$$.dirty[0]&1&&v(f)},[f,g,c,k,$,_,w,b,D,z,m,q,A,S,N,M,U]}class Se extends xe{constructor(s){super(),ye(this,s,Ue,Ne,ke,{},null,[-1,-1])}}export{Se as default};
