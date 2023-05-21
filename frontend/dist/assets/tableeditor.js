import{S as ot,i as dt,s as ft,N as ut,c as oe,a as k,e as a,b as l,m as de,d as E,f as t,l as K,t as D,g as ye,j as ve,h as W,k as fe,n as G,o as De,p as Se,q as ct,O as pt,K as mt,r as ae,u as re,F as we,w as nt,x as it,y as ee,I as Te,J as ie,v as Ie,C as gt,P as We,Q as st,D as _t,R as bt,U as ht,B as ze,V as yt,W as vt,X as wt,Y as at}from"./index.js";import{f as je,a as Be}from"./index2.js";function Je(n,e,s){const i=n.slice();return i[33]=e[s],i}function Ke(n,e,s){const i=n.slice();return i[36]=e[s],i}function Oe(n,e,s){const i=n.slice();return i[39]=e[s],i}function Qe(n){let e,s;return e=new we({props:{icon:wt,class:"text-green-800"}}),{c(){oe(e.$$.fragment)},m(i,o){de(e,i,o),s=!0},p:at,i(i){s||(D(e.$$.fragment,i),s=!0)},o(i){W(e.$$.fragment,i),s=!1},d(i){fe(e,i)}}}function Re(n){let e,s;return e=new we({props:{icon:st,class:"text-red-800"}}),{c(){oe(e.$$.fragment)},m(i,o){de(e,i,o),s=!0},p:at,i(i){s||(D(e.$$.fragment,i),s=!0)},o(i){W(e.$$.fragment,i),s=!1},d(i){fe(e,i)}}}function Ve(n){let e,s,i,o,p;function d(){return n[18](n[39])}function _(){return n[19](n[39])}return{c(){e=a("button"),e.textContent="Update",s=k(),i=a("button"),i.textContent="Delete",l(e,"class","border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"),l(i,"class","border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline")},m(C,r){E(C,e,r),E(C,s,r),E(C,i,r),o||(p=[K(e,"click",d),K(i,"click",_)],o=!0)},p(C,r){n=C},d(C){C&&G(e),C&&G(s),C&&G(i),o=!1,Ie(p)}}}function Xe(n){let e,s,i=n[39].tablename+"",o,p,d,_,C,r,q,b,m=n[39].is_technical&&Qe(),F=!n[39].is_technical&&Re(),v=!n[39].is_technical&&Ve(n);return{c(){e=a("tr"),s=a("td"),o=ae(i),p=k(),d=a("td"),m&&m.c(),_=k(),F&&F.c(),C=k(),r=a("td"),v&&v.c(),q=k(),l(s,"class","px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"),l(d,"class","text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"),l(r,"class","text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"),l(e,"class","bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100")},m(N,I){E(N,e,I),t(e,s),t(s,o),t(e,p),t(e,d),m&&m.m(d,null),t(d,_),F&&F.m(d,null),t(e,C),t(e,r),v&&v.m(r,null),t(e,q),b=!0},p(N,I){(!b||I[0]&32)&&i!==(i=N[39].tablename+"")&&re(o,i),N[39].is_technical?m?(m.p(N,I),I[0]&32&&D(m,1)):(m=Qe(),m.c(),D(m,1),m.m(d,_)):m&&(ye(),W(m,1,1,()=>{m=null}),ve()),N[39].is_technical?F&&(ye(),W(F,1,1,()=>{F=null}),ve()):F?(F.p(N,I),I[0]&32&&D(F,1)):(F=Re(),F.c(),D(F,1),F.m(d,null)),N[39].is_technical?v&&(v.d(1),v=null):v?v.p(N,I):(v=Ve(N),v.c(),v.m(r,null))},i(N){b||(D(m),D(F),b=!0)},o(N){W(m),W(F),b=!1},d(N){N&&G(e),m&&m.d(),F&&F.d(),v&&v.d()}}}function Ye(n){let e,s,i,o,p,d,_,C,r,q,b,m,F,v,N,I,z,P,A,g,Q,h,j,c,y,T,U,R,$;return m=new we({props:{icon:nt}}),{c(){e=a("div"),s=a("div"),o=k(),p=a("div"),d=a("div"),_=a("div"),C=a("div"),r=a("div"),q=a("div"),b=it("svg"),oe(m.$$.fragment),F=k(),v=a("div"),N=a("h3"),N.textContent="Add a new table",I=k(),z=a("div"),P=a("div"),P.textContent="Name:",A=k(),g=a("input"),Q=k(),h=a("div"),j=a("button"),j.textContent="Create",c=k(),y=a("button"),y.textContent="Cancel",l(s,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-150"),l(b,"class","h-6 w-6 text-green-600"),l(b,"fill","none"),l(b,"viewBox","0 0 24 24"),l(b,"stroke-width","1.5"),l(b,"stroke","currentColor"),l(b,"aria-hidden","true"),l(q,"class","mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"),l(N,"class","text-base font-semibold leading-6 text-gray-900"),l(N,"id","modal-title"),l(g,"type","text"),l(g,"placeholder","Table name"),l(z,"class","mt-2"),l(v,"class","mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"),l(r,"class","sm:flex sm:items-start"),l(C,"class","bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"),l(j,"type","button"),l(j,"class","inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"),l(y,"type","button"),l(y,"class","mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"),l(h,"class","bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"),l(_,"class","relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"),l(d,"class","flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"),l(p,"class","fixed inset-0 z-10 overflow-y-auto"),l(e,"class","relative z-10")},m(H,O){E(H,e,O),t(e,s),t(e,o),t(e,p),t(p,d),t(d,_),t(_,C),t(C,r),t(r,q),t(q,b),de(m,b,null),t(r,F),t(r,v),t(v,N),t(v,I),t(v,z),t(z,P),t(z,A),t(z,g),ee(g,n[0].tablename),t(_,Q),t(_,h),t(h,j),t(h,c),t(h,y),U=!0,R||($=[K(g,"input",n[20]),K(j,"click",n[9]),K(y,"click",n[11])],R=!0)},p(H,O){O[0]&1&&g.value!==H[0].tablename&&ee(g,H[0].tablename)},i(H){U||(Te(()=>{U&&(i||(i=ie(s,je,{},!0)),i.run(1))}),D(m.$$.fragment,H),Te(()=>{U&&(T||(T=ie(_,Be,{},!0)),T.run(1))}),U=!0)},o(H){i||(i=ie(s,je,{},!1)),i.run(0),W(m.$$.fragment,H),T||(T=ie(_,Be,{},!1)),T.run(0),U=!1},d(H){H&&G(e),H&&i&&i.end(),fe(m),H&&T&&T.end(),R=!1,Ie($)}}}function Ee(n){let e,s,i,o,p,d,_,C,r,q,b,m,F,v,N,I,z,P,A,g,Q,h,j,c,y,T,U,R,$,H,O,le,B,M,Z,f,w,J,ue,ce,te,Ue,xe,Ae,ke,Le,Ce,Ne,pe,Me,me,ge,Pe,_e,ne,be,qe,He;m=new we({props:{icon:gt}});let se=n[1].fields,L=[];for(let u=0;u<se.length;u+=1)L[u]=$e(Ke(n,se,u));const rt=u=>W(L[u],1,1,()=>{L[u]=null});let he=n[6],V=[];for(let u=0;u<he.length;u+=1)V[u]=et(Je(n,he,u));let X=n[4].define_length&&tt(n),Y=n[4].define_precision&&lt(n);return pe=new we({props:{class:"text-green-800",icon:nt}}),{c(){e=a("div"),s=a("div"),o=k(),p=a("div"),d=a("div"),_=a("div"),C=a("div"),r=a("div"),q=a("div"),b=it("svg"),oe(m.$$.fragment),F=k(),v=a("div"),N=a("h3"),N.textContent="Update table",I=k(),z=a("div"),P=a("div"),A=a("label"),A.textContent="Name",g=k(),Q=a("div"),h=a("input"),j=k(),c=a("div"),y=a("label"),y.textContent="Fields",T=k(),U=a("div"),R=a("table"),$=a("thead"),$.innerHTML=`<tr><th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th> 
                                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Type</th> 
                                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Description</th> 
                                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Length</th> 
                                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Precision</th> 
                                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Action</th></tr>`,H=k(),O=a("tbody");for(let u=0;u<L.length;u+=1)L[u].c();le=k(),B=a("tr"),M=a("td"),Z=a("input"),f=k(),w=a("td"),J=a("select");for(let u=0;u<V.length;u+=1)V[u].c();ue=k(),ce=a("td"),te=a("input"),Ue=k(),xe=a("td"),X&&X.c(),Ae=k(),ke=a("td"),Y&&Y.c(),Le=k(),Ce=a("td"),Ne=a("button"),oe(pe.$$.fragment),Me=k(),me=a("div"),ge=a("button"),ge.textContent="Update",Pe=k(),_e=a("button"),_e.textContent="Cancel",l(s,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-150"),l(b,"class","h-6 w-6 text-orange-600"),l(b,"fill","none"),l(b,"viewBox","0 0 24 24"),l(b,"stroke-width","1.5"),l(b,"stroke","currentColor"),l(b,"aria-hidden","true"),l(q,"class","mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10"),l(N,"class","text-base font-semibold leading-6 text-gray-900 dark:text-white"),l(N,"id","modal-title"),l(A,"for","edittitle"),l(A,"class","block text-sm font-bold ml-1 mb-2 text-gray-900 dark:text-white"),l(h,"id","edittitle"),l(h,"type","text"),l(h,"class","py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"),l(h,"placeholder","Table name"),l(Q,"class","relative"),l(y,"for","edittitle"),l(y,"class","block text-sm font-bold ml-1 mb-2 text-gray-900 dark:text-white"),l($,"class","bg-gray-200 border-b"),l(Z,"class","px-2 border-gray-200"),l(Z,"type","text"),l(Z,"placeholder","Field name"),l(M,"class","bg-gray-200"),l(J,"class","px-2 border-gray-200"),n[4].datatype_id===void 0&&Te(()=>n[25].call(J)),l(w,"class","bg-gray-200"),l(te,"class","px-2 border-gray-200"),l(te,"type","text"),l(te,"placeholder","Field description"),l(ce,"class","bg-gray-200"),l(xe,"class","bg-gray-200"),l(ke,"class","bg-gray-200"),l(Ce,"class","text-center bg-gray-200"),l(O,"class","bg-gray-200"),l(U,"class","border-2 border-gray-200 rounded-md shadow-sm"),l(c,"class","relative"),l(z,"class","grid gap-y-4"),l(v,"class","mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"),l(r,"class","sm:flex sm:items-start"),l(C,"class","bg-white dark:bg-gray-800 dark:border-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"),l(ge,"type","button"),l(ge,"class","inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"),l(_e,"type","button"),l(_e,"class","mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"),l(me,"class","bg-gray-50 dark:bg-gray-800 dark:border-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"),l(_,"class","relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:w-auto lg:w-auto"),l(d,"class","min-w-full flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"),l(p,"class","fixed inset-0 z-10 overflow-y-auto"),l(e,"class","relative z-10")},m(u,S){E(u,e,S),t(e,s),t(e,o),t(e,p),t(p,d),t(d,_),t(_,C),t(C,r),t(r,q),t(q,b),de(m,b,null),t(r,F),t(r,v),t(v,N),t(v,I),t(v,z),t(z,P),t(P,A),t(P,g),t(P,Q),t(Q,h),ee(h,n[1].tablename),t(z,j),t(z,c),t(c,y),t(c,T),t(c,U),t(U,R),t(R,$),t(R,H),t(R,O);for(let x=0;x<L.length;x+=1)L[x]&&L[x].m(O,null);t(O,le),t(O,B),t(B,M),t(M,Z),ee(Z,n[4].name),t(B,f),t(B,w),t(w,J);for(let x=0;x<V.length;x+=1)V[x]&&V[x].m(J,null);We(J,n[4].datatype_id,!0),t(B,ue),t(B,ce),t(ce,te),ee(te,n[4].description),t(B,Ue),t(B,xe),X&&X.m(xe,null),t(B,Ae),t(B,ke),Y&&Y.m(ke,null),t(B,Le),t(B,Ce),t(Ce,Ne),de(pe,Ne,null),t(_,Me),t(_,me),t(me,ge),t(me,Pe),t(me,_e),be=!0,qe||(He=[K(h,"input",n[21]),K(Z,"input",n[24]),K(J,"change",n[25]),K(J,"change",n[26]),K(te,"input",n[27]),K(Ne,"click",n[15]),K(ge,"click",n[10]),K(_e,"click",n[12])],qe=!0)},p(u,S){if(S[0]&2&&h.value!==u[1].tablename&&ee(h,u[1].tablename),S[0]&322){se=u[1].fields;let x;for(x=0;x<se.length;x+=1){const Fe=Ke(u,se,x);L[x]?(L[x].p(Fe,S),D(L[x],1)):(L[x]=$e(Fe),L[x].c(),D(L[x],1),L[x].m(O,le))}for(ye(),x=se.length;x<L.length;x+=1)rt(x);ve()}if(S[0]&80&&Z.value!==u[4].name&&ee(Z,u[4].name),S[0]&64){he=u[6];let x;for(x=0;x<he.length;x+=1){const Fe=Je(u,he,x);V[x]?V[x].p(Fe,S):(V[x]=et(Fe),V[x].c(),V[x].m(J,null))}for(;x<V.length;x+=1)V[x].d(1);V.length=he.length}S[0]&80&&We(J,u[4].datatype_id),S[0]&80&&te.value!==u[4].description&&ee(te,u[4].description),u[4].define_length?X?X.p(u,S):(X=tt(u),X.c(),X.m(xe,null)):X&&(X.d(1),X=null),u[4].define_precision?Y?Y.p(u,S):(Y=lt(u),Y.c(),Y.m(ke,null)):Y&&(Y.d(1),Y=null)},i(u){if(!be){Te(()=>{be&&(i||(i=ie(s,je,{},!0)),i.run(1))}),D(m.$$.fragment,u);for(let S=0;S<se.length;S+=1)D(L[S]);D(pe.$$.fragment,u),Te(()=>{be&&(ne||(ne=ie(_,Be,{},!0)),ne.run(1))}),be=!0}},o(u){i||(i=ie(s,je,{},!1)),i.run(0),W(m.$$.fragment,u),L=L.filter(Boolean);for(let S=0;S<L.length;S+=1)W(L[S]);W(pe.$$.fragment,u),ne||(ne=ie(_,Be,{},!1)),ne.run(0),be=!1},d(u){u&&G(e),u&&i&&i.end(),fe(m),De(L,u),De(V,u),X&&X.d(),Y&&Y.d(),fe(pe),u&&ne&&ne.end(),qe=!1,Ie(He)}}}function Ge(n){let e,s=n[36].length+"",i;return{c(){e=a("span"),i=ae(s),l(e,"class","px-2 border-gray-200")},m(o,p){E(o,e,p),t(e,i)},p(o,p){p[0]&2&&s!==(s=o[36].length+"")&&re(i,s)},d(o){o&&G(e)}}}function Ze(n){let e,s=n[36].precision+"",i;return{c(){e=a("span"),i=ae(s),l(e,"class","px-2 border-gray-200")},m(o,p){E(o,e,p),t(e,i)},p(o,p){p[0]&2&&s!==(s=o[36].precision+"")&&re(i,s)},d(o){o&&G(e)}}}function $e(n){let e,s,i,o=n[36].name+"",p,d,_,C,r=n[6].find(le).type+"",q,b,m,F,v=n[36].description+"",N,I,z,P=n[6].find(O).define_length,A,g,Q=n[6].find(H).define_precision,h,j,c,y,T,U,R,$;function H(...f){return n[16](n[36],...f)}function O(...f){return n[17](n[36],...f)}function le(...f){return n[22](n[36],...f)}let B=P&&Ge(n),M=Q&&Ze(n);y=new we({props:{class:"text-red-800",icon:st}});function Z(){return n[23](n[36])}return{c(){e=a("tr"),s=a("td"),i=a("span"),p=ae(o),d=k(),_=a("td"),C=a("span"),q=ae(r),b=k(),m=a("td"),F=a("span"),N=ae(v),I=k(),z=a("td"),B&&B.c(),A=k(),g=a("td"),M&&M.c(),h=k(),j=a("td"),c=a("button"),oe(y.$$.fragment),T=k(),l(i,"class","px-2 border-gray-200"),l(s,"class","bg-gray-200"),l(C,"class","px-2 border-gray-200"),l(_,"class","bg-gray-200"),l(F,"class","px-2 border-gray-200"),l(m,"class","bg-gray-200"),l(z,"class","bg-gray-200"),l(g,"class","bg-gray-200"),l(j,"class","text-center bg-gray-200")},m(f,w){E(f,e,w),t(e,s),t(s,i),t(i,p),t(e,d),t(e,_),t(_,C),t(C,q),t(e,b),t(e,m),t(m,F),t(F,N),t(e,I),t(e,z),B&&B.m(z,null),t(e,A),t(e,g),M&&M.m(g,null),t(e,h),t(e,j),t(j,c),de(y,c,null),t(e,T),U=!0,R||($=K(c,"click",Z),R=!0)},p(f,w){n=f,(!U||w[0]&2)&&o!==(o=n[36].name+"")&&re(p,o),(!U||w[0]&66)&&r!==(r=n[6].find(le).type+"")&&re(q,r),(!U||w[0]&2)&&v!==(v=n[36].description+"")&&re(N,v),w[0]&66&&(P=n[6].find(O).define_length),P?B?B.p(n,w):(B=Ge(n),B.c(),B.m(z,null)):B&&(B.d(1),B=null),w[0]&66&&(Q=n[6].find(H).define_precision),Q?M?M.p(n,w):(M=Ze(n),M.c(),M.m(g,null)):M&&(M.d(1),M=null)},i(f){U||(D(y.$$.fragment,f),U=!0)},o(f){W(y.$$.fragment,f),U=!1},d(f){f&&G(e),B&&B.d(),M&&M.d(),fe(y),R=!1,$()}}}function et(n){let e,s=n[33].type+"",i,o,p;return{c(){e=a("option"),i=ae(s),o=k(),e.__value=p=n[33]._id,e.value=e.__value},m(d,_){E(d,e,_),t(e,i),t(e,o)},p(d,_){_[0]&64&&s!==(s=d[33].type+"")&&re(i,s),_[0]&64&&p!==(p=d[33]._id)&&(e.__value=p,e.value=e.__value)},d(d){d&&G(e)}}}function tt(n){let e,s,i;return{c(){e=a("input"),l(e,"class","px-2 border-gray-200"),l(e,"type","numeric"),l(e,"placeholder","Field description")},m(o,p){E(o,e,p),ee(e,n[4].length),s||(i=K(e,"input",n[28]),s=!0)},p(o,p){p[0]&80&&ee(e,o[4].length)},d(o){o&&G(e),s=!1,i()}}}function lt(n){let e,s,i;return{c(){e=a("input"),l(e,"class","px-2 border-gray-200"),l(e,"type","numeric"),l(e,"placeholder","Field description")},m(o,p){E(o,e,p),ee(e,n[4].precision),s||(i=K(e,"input",n[29]),s=!0)},p(o,p){p[0]&80&&ee(e,o[4].precision)},d(o){o&&G(e),s=!1,i()}}}function xt(n){let e,s,i,o,p,d,_,C,r,q,b,m,F,v,N,I,z,P;e=new ut({});let A=n[5],g=[];for(let c=0;c<A.length;c+=1)g[c]=Xe(Oe(n,A,c));const Q=c=>W(g[c],1,1,()=>{g[c]=null});let h=n[2]&&Ye(n),j=n[3]&&Ee(n);return{c(){oe(e.$$.fragment),s=k(),i=a("div"),o=a("button"),o.textContent="Add Table",p=k(),d=a("div"),_=a("div"),C=a("div"),r=a("div"),q=a("table"),b=a("thead"),b.innerHTML=`<tr><th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th> 
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Is technical</th> 
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th></tr>`,m=k(),F=a("tbody");for(let c=0;c<g.length;c+=1)g[c].c();v=k(),h&&h.c(),N=k(),j&&j.c(),l(o,"class","border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"),l(b,"class","bg-gray-200 border-b"),l(q,"class","min-w-full"),l(r,"class","overflow-hidden"),l(C,"class","py-2 inline-block min-w-full sm:px-6 lg:px-8"),l(_,"class","overflow-x-auto sm:mx-0.5 lg:mx-0.5"),l(d,"class","flex flex-col")},m(c,y){de(e,c,y),E(c,s,y),E(c,i,y),t(i,o),t(i,p),t(i,d),t(d,_),t(_,C),t(C,r),t(r,q),t(q,b),t(q,m),t(q,F);for(let T=0;T<g.length;T+=1)g[T]&&g[T].m(F,null);t(i,v),h&&h.m(i,null),t(i,N),j&&j.m(i,null),I=!0,z||(P=K(o,"click",n[11]),z=!0)},p(c,y){if(y[0]&24608){A=c[5];let T;for(T=0;T<A.length;T+=1){const U=Oe(c,A,T);g[T]?(g[T].p(U,y),D(g[T],1)):(g[T]=Xe(U),g[T].c(),D(g[T],1),g[T].m(F,null))}for(ye(),T=A.length;T<g.length;T+=1)Q(T);ve()}c[2]?h?(h.p(c,y),y[0]&4&&D(h,1)):(h=Ye(c),h.c(),D(h,1),h.m(i,N)):h&&(ye(),W(h,1,1,()=>{h=null}),ve()),c[3]?j?(j.p(c,y),y[0]&8&&D(j,1)):(j=Ee(c),j.c(),D(j,1),j.m(i,null)):j&&(ye(),W(j,1,1,()=>{j=null}),ve())},i(c){if(!I){D(e.$$.fragment,c);for(let y=0;y<A.length;y+=1)D(g[y]);D(h),D(j),I=!0}},o(c){W(e.$$.fragment,c),g=g.filter(Boolean);for(let y=0;y<g.length;y+=1)W(g[y]);W(h),W(j),I=!1},d(c){fe(e,c),c&&G(s),c&&G(i),De(g,c),h&&h.d(),j&&j.d(),z=!1,P()}}}function kt(n,e,s){let i,o;Se(n,_t,f=>s(5,i=f)),Se(n,bt,f=>s(6,o=f));let p={tablename:"",fields:[]},d=null,_=!1,C=!1,r={_id:null,name:"",datatype_id:null,datatypeName:"",define_length:null,default_length:null,max_length:null,length:null,define_precision:null,default_precision:null,max_precision:null,precision:null,description:null};ct(async()=>{await b(),await pt()});function q(f){s(4,r.datatype_id=parseInt(f.target.value),r);let w=o.find(J=>J._id===parseInt(f.target.value));s(4,r.default_length=w.default_length,r),s(4,r.default_precision=w.default_precision,r),s(4,r.define_length=w.define_length,r),s(4,r.define_precision=w.define_precision,r),s(4,r.length=w.default_length,r),s(4,r.max_length=w.max_precision,r),s(4,r.max_precision=w.max_precision,r),s(4,r.precision=w.default_precision,r),s(4,r.datatypeName=w.type,r)}async function b(){await mt()}function m({field:f}){ht({table:d,field:f}),s(1,d=i.find(w=>w._id===d._id))}function F(){s(0,p={tablename:"",fields:[]})}function v(){s(4,r={_id:null,name:"",datatype_id:null,datatypeName:"",define_length:null,default_length:null,max_length:null,length:null,define_precision:null,default_precision:null,max_precision:null,precision:null,description:null})}async function N(){let f=p.tablename;const w={tablename:f},J="/backend/settings/tables";await ze.post(J,w).then(async()=>{await b();let ue=await i.find(ce=>ce.tablename==f);A(ue)}).catch(ue=>{console.log(ue),b()}),z()}async function I(){const f={tablename:d.tablename,originalname:d.originalname,fields:d.fields,removedField:d.removedFields?d.removedFields:[],updatedField:d.updatedFields?d.updatedFields:[]},w=`/backend/settings/tables/${d._id}`;await ze.put(w,f).then(()=>{b()}).catch(J=>{console.log(J),b()}),P()}function z(){F(),s(2,_=!_)}function P(){F(),s(3,C=!C)}function A(f){P(),s(1,d=f)}function g(f){const w=`/backend/settings/tables/${f._id}/${f.tablename}`;ze.delete(w).then(()=>{b()}).catch(J=>{console.error(J),b()})}async function Q(){await yt({table:d,field:r}),s(1,d=i.find(f=>f._id===d._id)),v()}const h=(f,w)=>w._id==f.datatype_id,j=(f,w)=>w._id==f.datatype_id,c=f=>A(f),y=f=>g(f);function T(){p.tablename=this.value,s(0,p)}function U(){d.tablename=this.value,s(1,d)}const R=(f,w)=>w._id==f.datatype_id,$=f=>m({field:f});function H(){r.name=this.value,s(4,r)}function O(){r.datatype_id=vt(this),s(4,r)}const le=f=>q(f);function B(){r.description=this.value,s(4,r)}function M(){r.length=this.value,s(4,r)}function Z(){r.precision=this.value,s(4,r)}return[p,d,_,C,r,i,o,q,m,N,I,z,P,A,g,Q,h,j,c,y,T,U,R,$,H,O,le,B,M,Z]}class Ct extends ot{constructor(e){super(),dt(this,e,kt,xt,ft,{},null,[-1,-1])}}export{Ct as default};
