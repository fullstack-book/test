var V="comm",W="rule",X="decl",$="@import",y="@keyframes",rr="@layer",er=Math.abs,B=String.fromCharCode;function Z(r){return r.trim()}function Y(r,e,n){return r.replace(e,n)}function ar(r,e){return r.indexOf(e)}function z(r,e){return r.charCodeAt(e)|0}function I(r,e,n){return r.slice(e,n)}function d(r){return r.length}function cr(r){return r.length}function N(r,e){return e.push(r),r}var K=1,x=1,_=0,o=0,i=0,L="";function G(r,e,n,c,s,k,R,v){return{value:r,root:e,parent:n,type:c,props:s,children:k,line:K,column:x,length:R,return:"",siblings:v}}function nr(){return i}function ir(){return i=o>0?z(L,--o):0,x--,i===10&&(x=1,K--),i}function h(){return i=o<_?z(L,o++):0,x++,i===10&&(x=1,K++),i}function M(){return z(L,o)}function D(){return o}function P(r,e){return I(L,r,e)}function j(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tr(r){return K=x=1,_=d(L=r),o=0,[]}function sr(r){return L="",r}function U(r){return Z(P(o-1,q(r===91?r+2:r===40?r+1:r)))}function ur(r){for(;(i=M())&&i<33;)h();return j(r)>2||j(i)>3?"":" "}function fr(r,e){for(;--e&&h()&&!(i<48||i>102||i>57&&i<65||i>70&&i<97););return P(r,D()+(e<6&&M()==32&&h()==32))}function q(r){for(;h();)switch(i){case r:return o;case 34:case 39:r!==34&&r!==39&&q(i);break;case 40:r===41&&q(r);break;case 92:h();break}return o}function or(r,e){for(;h()&&r+i!==47+10;)if(r+i===42+42&&M()===47)break;return"/*"+P(e,o-1)+"*"+B(r===47?r:h())}function vr(r){for(;!j(M());)h();return P(r,o)}function br(r){return sr(F("",null,null,null,[""],r=tr(r),0,[0],r))}function F(r,e,n,c,s,k,R,v,w){for(var O=0,g=0,u=R,T=0,p=0,A=0,f=1,S=1,l=1,t=0,E="",C=s,m=k,b=c,a=E;S;)switch(A=t,t=h()){case 40:if(A!=108&&z(a,u-1)==58){ar(a+=Y(U(t),"&","&\f"),"&\f")!=-1&&(l=-1);break}case 34:case 39:case 91:a+=U(t);break;case 9:case 10:case 13:case 32:a+=ur(A);break;case 92:a+=fr(D()-1,7);continue;case 47:switch(M()){case 42:case 47:N(hr(or(h(),D()),e,n,w),w);break;default:a+="/"}break;case 123*f:v[O++]=d(a)*l;case 125*f:case 59:case 0:switch(t){case 0:case 125:S=0;case 59+g:l==-1&&(a=Y(a,/\f/g,"")),p>0&&d(a)-u&&N(p>32?J(a+";",c,n,u-1,w):J(Y(a," ","")+";",c,n,u-2,w),w);break;case 59:a+=";";default:if(N(b=H(a,e,n,O,g,s,v,E,C=[],m=[],u,k),k),t===123)if(g===0)F(a,e,b,b,C,k,u,v,m);else switch(T===99&&z(a,3)===110?100:T){case 100:case 108:case 109:case 115:F(r,b,b,c&&N(H(r,b,b,0,0,s,v,E,s,C=[],u,m),m),s,m,u,v,c?C:m);break;default:F(a,b,b,b,[""],m,0,v,m)}}O=g=p=0,f=l=1,E=a="",u=R;break;case 58:u=1+d(a),p=A;default:if(f<1){if(t==123)--f;else if(t==125&&f++==0&&ir()==125)continue}switch(a+=B(t),t*f){case 38:l=g>0?1:(a+="\f",-1);break;case 44:v[O++]=(d(a)-1)*l,l=1;break;case 64:M()===45&&(a+=U(h())),T=M(),g=u=d(E=a+=vr(D())),t++;break;case 45:A===45&&d(a)==2&&(f=0)}}return k}function H(r,e,n,c,s,k,R,v,w,O,g,u){for(var T=s-1,p=s===0?k:[""],A=cr(p),f=0,S=0,l=0;f<c;++f)for(var t=0,E=I(r,T+1,T=er(S=R[f])),C=r;t<A;++t)(C=Z(S>0?p[t]+" "+E:Y(E,/&\f/g,p[t])))&&(w[l++]=C);return G(r,e,n,s===0?W:v,w,O,g,u)}function hr(r,e,n,c){return G(r,e,n,V,B(nr()),I(r,2,-2),0,c)}function J(r,e,n,c,s){return G(r,e,n,X,I(r,0,c),I(r,c+1,-1),c,s)}function Q(r,e){for(var n="",c=0;c<r.length;c++)n+=e(r[c],c,r,e)||"";return n}function kr(r,e,n,c){switch(r.type){case rr:if(r.children.length)break;case $:case X:return r.return=r.return||r.value;case V:return"";case y:return r.return=r.value+"{"+Q(r.children,c)+"}";case W:if(!d(r.value=r.props.join(",")))return""}return d(n=Q(r.children,c))?r.return=r.value+"{"+n+"}":""}export{kr as a,br as c,Q as s};
