import{S as pt,i as mt,s as ht,N as bt,c as V,a as g,e as l,b as t,m as X,d as I,f as e,l as N,t as P,g as st,h as G,j as it,k as Y,n as J,o as gt,p as vt,q as xt,r as Z,u as tt,v as lt,F as ut,w as yt,x as ct,y as S,T as ft,z as wt,A as kt,B as et,C as _t}from"./index.js";function nt(i,s,a){const d=i.slice();return d[21]=s[a],d}function rt(i){let s,a,d=i[21].title+"",r,n,u,p=i[21].author+"",c,k,y,_=i[21].description+"",T,$,C,B,m,F,D,w,v;function x(){return i[11](i[21])}function b(){return i[12](i[21])}return{c(){s=l("tr"),a=l("td"),r=Z(d),n=g(),u=l("td"),c=Z(p),k=g(),y=l("td"),T=Z(_),$=g(),C=l("td"),B=l("button"),B.textContent="Update",m=g(),F=l("button"),F.textContent="Delete",D=g(),t(a,"class","px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"),t(u,"class","text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"),t(y,"class","text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"),t(B,"class","border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"),t(F,"class","border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"),t(C,"class","text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"),t(s,"class","bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100")},m(o,f){I(o,s,f),e(s,a),e(a,r),e(s,n),e(s,u),e(u,c),e(s,k),e(s,y),e(y,T),e(s,$),e(s,C),e(C,B),e(C,m),e(C,F),e(s,D),w||(v=[N(B,"click",x),N(F,"click",b)],w=!0)},p(o,f){i=o,f&16&&d!==(d=i[21].title+"")&&tt(r,d),f&16&&p!==(p=i[21].author+"")&&tt(c,p),f&16&&_!==(_=i[21].description+"")&&tt(T,_)},d(o){o&&J(s),w=!1,lt(v)}}}function at(i){let s,a,d,r,n,u,p,c,k,y,_,T,$,C,B,m,F,D,w,v,x,b,o,f,h,A,q,O,H,z,Q,M,L,K,W;return _=new ut({props:{icon:yt}}),{c(){s=l("div"),a=l("div"),d=g(),r=l("div"),n=l("div"),u=l("div"),p=l("div"),c=l("div"),k=l("div"),y=ct("svg"),V(_.$$.fragment),T=g(),$=l("div"),C=l("h3"),C.textContent="Add a new book",B=g(),m=l("div"),F=l("div"),F.textContent="Title:",D=g(),w=l("input"),v=g(),x=l("div"),x.textContent="Author:",b=g(),o=l("input"),f=g(),h=l("div"),h.textContent="Description:",A=g(),q=l("input"),O=g(),H=l("div"),z=l("button"),z.textContent="Create",Q=g(),M=l("button"),M.textContent="Cancel",t(a,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),t(y,"class","h-6 w-6 text-green-600"),t(y,"fill","none"),t(y,"viewBox","0 0 24 24"),t(y,"stroke-width","1.5"),t(y,"stroke","currentColor"),t(y,"aria-hidden","true"),t(k,"class","mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"),t(C,"class","text-base font-semibold leading-6 text-gray-900"),t(C,"id","modal-title"),t(w,"type","text"),t(w,"placeholder","book title"),t(o,"type","text"),t(o,"placeholder","book author"),t(q,"type","text"),t(q,"placeholder","book description"),t(m,"class","mt-2"),t($,"class","mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"),t(c,"class","sm:flex sm:items-start"),t(p,"class","bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"),t(z,"type","button"),t(z,"class","inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"),t(M,"type","button"),t(M,"class","mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"),t(H,"class","bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"),t(u,"class","relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"),t(n,"class","flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"),t(r,"class","fixed inset-0 z-10 overflow-y-auto"),t(s,"class","relative z-10"),t(s,"aria-labelledby","modal-title"),t(s,"role","dialog"),t(s,"aria-modal","true")},m(j,E){I(j,s,E),e(s,a),e(s,d),e(s,r),e(r,n),e(n,u),e(u,p),e(p,c),e(c,k),e(k,y),X(_,y,null),e(c,T),e(c,$),e($,C),e($,B),e($,m),e(m,F),e(m,D),e(m,w),S(w,i[0].title),e(m,v),e(m,x),e(m,b),e(m,o),S(o,i[0].author),e(m,f),e(m,h),e(m,A),e(m,q),S(q,i[0].description),e(u,O),e(u,H),e(H,z),e(H,Q),e(H,M),L=!0,K||(W=[N(w,"input",i[13]),N(o,"input",i[14]),N(q,"input",i[15]),N(z,"click",i[6]),N(M,"click",i[9])],K=!0)},p(j,E){E&1&&w.value!==j[0].title&&S(w,j[0].title),E&1&&o.value!==j[0].author&&S(o,j[0].author),E&1&&q.value!==j[0].description&&S(q,j[0].description)},i(j){L||(P(_.$$.fragment,j),L=!0)},o(j){G(_.$$.fragment,j),L=!1},d(j){j&&J(s),Y(_),K=!1,lt(W)}}}function dt(i){let s,a,d;return a=new ft({props:{show:i[3],enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",$$slots:{default:[Ct]},$$scope:{ctx:i}}}),{c(){s=l("div"),V(a.$$.fragment),t(s,"class","relative z-10"),t(s,"aria-labelledby","modal-title"),t(s,"role","dialog"),t(s,"aria-modal","true")},m(r,n){I(r,s,n),X(a,s,null),d=!0},p(r,n){const u={};n&8&&(u.show=r[3]),n&16777226&&(u.$$scope={dirty:n,ctx:r}),a.$set(u)},i(r){d||(P(a.$$.fragment,r),d=!0)},o(r){G(a.$$.fragment,r),d=!1},d(r){r&&J(s),Y(a)}}}function $t(i){let s,a,d,r,n,u,p,c,k,y,_,T,$,C,B,m,F,D,w,v,x,b,o,f,h,A,q,O,H,z,Q,M,L,K,W,j,E,ot;return u=new ut({props:{icon:_t}}),{c(){s=l("div"),a=l("div"),d=l("div"),r=l("div"),n=ct("svg"),V(u.$$.fragment),p=g(),c=l("div"),k=l("h3"),k.textContent="Update book",y=g(),_=l("div"),T=l("div"),$=l("label"),$.textContent="Title",C=g(),B=l("div"),m=l("input"),F=g(),D=l("div"),w=l("div"),v=l("label"),v.textContent="Author",x=g(),b=l("div"),o=l("input"),f=g(),h=l("div"),A=l("div"),q=l("label"),q.textContent="Description",O=g(),H=l("div"),z=l("input"),Q=g(),M=l("div"),L=l("button"),L.textContent="Update",K=g(),W=l("button"),W.textContent="Cancel",t(n,"class","h-6 w-6 text-orange-600"),t(n,"fill","none"),t(n,"viewBox","0 0 24 24"),t(n,"stroke-width","1.5"),t(n,"stroke","currentColor"),t(n,"aria-hidden","true"),t(r,"class","mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10"),t(k,"class","text-base font-semibold leading-6 text-gray-900 dark:text-white"),t(k,"id","modal-title"),t($,"for","edittitle"),t($,"class","block text-sm font-bold ml-1 mb-2 text-gray-900 dark:text-white"),t(m,"id","edittitle"),t(m,"type","text"),t(m,"class","py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"),t(m,"placeholder","Book title"),t(B,"class","relative"),t(_,"class","grid gap-y-4"),t(v,"for","editauthor"),t(v,"class","block text-sm font-bold ml-1 mb-2 text-gray-900 dark:text-white"),t(o,"id","editauthor"),t(o,"type","text"),t(o,"class","py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"),t(o,"placeholder","Book title"),t(b,"class","relative"),t(D,"class","grid gap-y-4"),t(q,"for","editdescription"),t(q,"class","block text-sm font-bold ml-1 mb-2 text-gray-900 dark:text-white"),t(z,"id","editdescription"),t(z,"type","text"),t(z,"class","py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"),t(z,"placeholder","Book description"),t(H,"class","relative"),t(h,"class","grid gap-y-4"),t(c,"class","mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"),t(d,"class","sm:flex sm:items-start"),t(a,"class","bg-white dark:bg-gray-800 dark:border-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"),t(L,"type","button"),t(L,"class","inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"),t(W,"type","button"),t(W,"class","mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"),t(M,"class","bg-gray-50 dark:bg-gray-800 dark:border-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"),t(s,"class","relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg")},m(U,R){I(U,s,R),e(s,a),e(a,d),e(d,r),e(r,n),X(u,n,null),e(d,p),e(d,c),e(c,k),e(c,y),e(c,_),e(_,T),e(T,$),e(T,C),e(T,B),e(B,m),S(m,i[1].title),e(c,F),e(c,D),e(D,w),e(w,v),e(w,x),e(w,b),e(b,o),S(o,i[1].author),e(c,f),e(c,h),e(h,A),e(A,q),e(A,O),e(A,H),e(H,z),S(z,i[1].description),e(s,Q),e(s,M),e(M,L),e(M,K),e(M,W),j=!0,E||(ot=[N(m,"input",i[16]),N(o,"input",i[17]),N(z,"input",i[18]),N(L,"click",i[8]),N(W,"click",i[10])],E=!0)},p(U,R){R&2&&m.value!==U[1].title&&S(m,U[1].title),R&2&&o.value!==U[1].author&&S(o,U[1].author),R&2&&z.value!==U[1].description&&S(z,U[1].description)},i(U){j||(P(u.$$.fragment,U),j=!0)},o(U){G(u.$$.fragment,U),j=!1},d(U){U&&J(s),Y(u),E=!1,lt(ot)}}}function Ct(i){let s,a,d,r,n,u;return n=new ft({props:{show:i[3],enter:"ease-out duration-300",enterFrom:"opacity-0  translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100  translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100  translate-y-0 sm:scale-100",leaveTo:"opacity-0  translate-y-4 sm:translate-y-0 sm:scale-95",$$slots:{default:[$t]},$$scope:{ctx:i}}}),{c(){s=l("div"),a=g(),d=l("div"),r=l("div"),V(n.$$.fragment),t(s,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),t(r,"class","flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"),t(d,"class","fixed inset-0 z-10 overflow-y-auto")},m(p,c){I(p,s,c),I(p,a,c),I(p,d,c),e(d,r),X(n,r,null),u=!0},p(p,c){const k={};c&8&&(k.show=p[3]),c&16777218&&(k.$$scope={dirty:c,ctx:p}),n.$set(k)},i(p){u||(P(n.$$.fragment,p),u=!0)},o(p){G(n.$$.fragment,p),u=!1},d(p){p&&J(s),p&&J(a),p&&J(d),Y(n)}}}function Bt(i){let s,a,d,r,n,u,p,c,k,y,_,T,$,C,B,m,F,D;s=new bt({});let w=i[4],v=[];for(let o=0;o<w.length;o+=1)v[o]=rt(nt(i,w,o));let x=i[2]&&at(i),b=i[3]&&dt(i);return{c(){V(s.$$.fragment),a=g(),d=l("div"),r=l("button"),r.textContent="Add Book",n=g(),u=l("div"),p=l("div"),c=l("div"),k=l("div"),y=l("table"),_=l("thead"),_.innerHTML=`<tr><th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Title</th> 
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Author</th> 
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Description</th> 
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th></tr>`,T=g(),$=l("tbody");for(let o=0;o<v.length;o+=1)v[o].c();C=g(),x&&x.c(),B=g(),b&&b.c(),t(r,"class","border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"),t(_,"class","bg-gray-200 border-b"),t(y,"class","min-w-full"),t(k,"class","overflow-hidden"),t(c,"class","py-2 inline-block min-w-full sm:px-6 lg:px-8"),t(p,"class","overflow-x-auto sm:mx-0.5 lg:mx-0.5"),t(u,"class","flex flex-col")},m(o,f){X(s,o,f),I(o,a,f),I(o,d,f),e(d,r),e(d,n),e(d,u),e(u,p),e(p,c),e(c,k),e(k,y),e(y,_),e(y,T),e(y,$);for(let h=0;h<v.length;h+=1)v[h]&&v[h].m($,null);e(d,C),x&&x.m(d,null),e(d,B),b&&b.m(d,null),m=!0,F||(D=N(r,"click",i[9]),F=!0)},p(o,[f]){if(f&176){w=o[4];let h;for(h=0;h<w.length;h+=1){const A=nt(o,w,h);v[h]?v[h].p(A,f):(v[h]=rt(A),v[h].c(),v[h].m($,null))}for(;h<v.length;h+=1)v[h].d(1);v.length=w.length}o[2]?x?(x.p(o,f),f&4&&P(x,1)):(x=at(o),x.c(),P(x,1),x.m(d,B)):x&&(st(),G(x,1,1,()=>{x=null}),it()),o[3]?b?(b.p(o,f),f&8&&P(b,1)):(b=dt(o),b.c(),P(b,1),b.m(d,null)):b&&(st(),G(b,1,1,()=>{b=null}),it())},i(o){m||(P(s.$$.fragment,o),P(x),P(b),m=!0)},o(o){G(s.$$.fragment,o),G(x),G(b),m=!1},d(o){Y(s,o),o&&J(a),o&&J(d),gt(v,o),x&&x.d(),b&&b.d(),F=!1,D()}}}function Tt(i,s,a){let d;vt(i,wt,f=>a(4,d=f));let r={title:"",author:"",description:""},n={_id:null,title:"",author:"",description:""};function u(){kt()}function p(f){const h=`/backend/books/${f.book._id}`;et.delete(h).then(()=>{u()}).catch(A=>{console.error(A),u()})}function c(){a(0,r={title:"",author:"",description:""}),a(1,n={_id:null,title:"",author:"",description:""})}function k(){const f={title:r.title,author:r.author,description:r.description},h="/backend/books";et.post(h,f).then(()=>{u()}).catch(A=>{console.log(A),u()}),$()}function y(f){B(),a(1,n=f.book)}function _(){const f={title:n.title,author:n.author,description:n.description},h=`/backend/books/${n._id}`;et.put(h,f).then(()=>{u()}).catch(A=>{console.error(A),u()}),B()}xt(u);let T=!1;function $(){c(),a(2,T=!T)}let C=!1;function B(){c(),a(3,C=!C)}const m=f=>y({book:f}),F=f=>p({book:f});function D(){r.title=this.value,a(0,r)}function w(){r.author=this.value,a(0,r)}function v(){r.description=this.value,a(0,r)}function x(){n.title=this.value,a(1,n)}function b(){n.author=this.value,a(1,n)}function o(){n.description=this.value,a(1,n)}return[r,n,T,C,d,p,k,y,_,$,B,m,F,D,w,v,x,b,o]}class Ft extends pt{constructor(s){super(),mt(this,s,Tt,Bt,ht,{})}}export{Ft as default};
