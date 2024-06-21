import"./index.astro_astro_type_script_index_0_lang.B_st5uWx.js";import"./hoisted.eMTt_f2h.js";var V="top",X="bottom",Y="right",N="left",mt="auto",Ve=[V,X,Y,N],Ae="start",ke="end",lr="clippingParents",Ut="viewport",je="popper",dr="reference",At=Ve.reduce(function(e,t){return e.concat([t+"-"+Ae,t+"-"+ke])},[]),Ft=[].concat(Ve,[mt]).reduce(function(e,t){return e.concat([t,t+"-"+Ae,t+"-"+ke])},[]),vr="beforeRead",mr="read",hr="afterRead",gr="beforeMain",yr="main",br="afterMain",wr="beforeWrite",Or="write",xr="afterWrite",Tr=[vr,mr,hr,gr,yr,br,wr,Or,xr];function te(e){return e?(e.nodeName||"").toLowerCase():null}function F(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ge(e){var t=F(e).Element;return e instanceof t||e instanceof Element}function z(e){var t=F(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ht(e){if(typeof ShadowRoot>"u")return!1;var t=F(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ar(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var i=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!z(a)||!te(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(c){var f=o[c];f===!1?a.removeAttribute(c):a.setAttribute(c,f===!0?"":f)}))})}function Er(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(i){var o=t.elements[i],a=t.attributes[i]||{},c=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:r[i]),f=c.reduce(function(u,d){return u[d]="",u},{});!z(o)||!te(o)||(Object.assign(o.style,f),Object.keys(a).forEach(function(u){o.removeAttribute(u)}))})}}const qt={name:"applyStyles",enabled:!0,phase:"write",fn:Ar,effect:Er,requires:["computeStyles"]};function ee(e){return e.split("-")[0]}var he=Math.max,tt=Math.min,Ee=Math.round;function pt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function zt(){return!/^((?!chrome|android).)*safari/i.test(pt())}function De(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var i=e.getBoundingClientRect(),o=1,a=1;t&&z(e)&&(o=e.offsetWidth>0&&Ee(i.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Ee(i.height)/e.offsetHeight||1);var c=ge(e)?F(e):window,f=c.visualViewport,u=!zt()&&r,d=(i.left+(u&&f?f.offsetLeft:0))/o,p=(i.top+(u&&f?f.offsetTop:0))/a,O=i.width/o,T=i.height/a;return{width:O,height:T,top:p,right:d+O,bottom:p+T,left:d,x:d,y:p}}function gt(e){var t=De(e),r=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:i}}function Xt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&ht(r)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ae(e){return F(e).getComputedStyle(e)}function Dr(e){return["table","td","th"].indexOf(te(e))>=0}function fe(e){return((ge(e)?e.ownerDocument:e.document)||window.document).documentElement}function nt(e){return te(e)==="html"?e:e.assignedSlot||e.parentNode||(ht(e)?e.host:null)||fe(e)}function Et(e){return!z(e)||ae(e).position==="fixed"?null:e.offsetParent}function Cr(e){var t=/firefox/i.test(pt()),r=/Trident/i.test(pt());if(r&&z(e)){var i=ae(e);if(i.position==="fixed")return null}var o=nt(e);for(ht(o)&&(o=o.host);z(o)&&["html","body"].indexOf(te(o))<0;){var a=ae(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Ne(e){for(var t=F(e),r=Et(e);r&&Dr(r)&&ae(r).position==="static";)r=Et(r);return r&&(te(r)==="html"||te(r)==="body"&&ae(r).position==="static")?t:r||Cr(e)||t}function yt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function $e(e,t,r){return he(e,tt(t,r))}function Sr(e,t,r){var i=$e(e,t,r);return i>r?r:i}function Yt(){return{top:0,right:0,bottom:0,left:0}}function _t(e){return Object.assign({},Yt(),e)}function Gt(e,t){return t.reduce(function(r,i){return r[i]=e,r},{})}var Lr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,_t(typeof t!="number"?t:Gt(t,Ve))};function Rr(e){var t,r=e.state,i=e.name,o=e.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,f=ee(r.placement),u=yt(f),d=[N,Y].indexOf(f)>=0,p=d?"height":"width";if(!(!a||!c)){var O=Lr(o.padding,r),T=gt(a),h=u==="y"?V:N,x=u==="y"?X:Y,b=r.rects.reference[p]+r.rects.reference[u]-c[u]-r.rects.popper[p],w=c[u]-r.rects.reference[u],g=Ne(a),C=g?u==="y"?g.clientHeight||0:g.clientWidth||0:0,S=b/2-w/2,n=O[h],m=C-T[p]-O[x],l=C/2-T[p]/2+S,A=$e(n,l,m),L=u;r.modifiersData[i]=(t={},t[L]=A,t.centerOffset=A-l,t)}}function Pr(e){var t=e.state,r=e.options,i=r.element,o=i===void 0?"[data-popper-arrow]":i;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Xt(t.elements.popper,o)&&(t.elements.arrow=o))}const Mr={name:"arrow",enabled:!0,phase:"main",fn:Rr,effect:Pr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ce(e){return e.split("-")[1]}var Br={top:"auto",right:"auto",bottom:"auto",left:"auto"};function jr(e,t){var r=e.x,i=e.y,o=t.devicePixelRatio||1;return{x:Ee(r*o)/o||0,y:Ee(i*o)/o||0}}function Dt(e){var t,r=e.popper,i=e.popperRect,o=e.placement,a=e.variation,c=e.offsets,f=e.position,u=e.gpuAcceleration,d=e.adaptive,p=e.roundOffsets,O=e.isFixed,T=c.x,h=T===void 0?0:T,x=c.y,b=x===void 0?0:x,w=typeof p=="function"?p({x:h,y:b}):{x:h,y:b};h=w.x,b=w.y;var g=c.hasOwnProperty("x"),C=c.hasOwnProperty("y"),S=N,n=V,m=window;if(d){var l=Ne(r),A="clientHeight",L="clientWidth";if(l===F(r)&&(l=fe(r),ae(l).position!=="static"&&f==="absolute"&&(A="scrollHeight",L="scrollWidth")),l=l,o===V||(o===N||o===Y)&&a===ke){n=X;var R=O&&l===m&&m.visualViewport?m.visualViewport.height:l[A];b-=R-i.height,b*=u?1:-1}if(o===N||(o===V||o===X)&&a===ke){S=Y;var M=O&&l===m&&m.visualViewport?m.visualViewport.width:l[L];h-=M-i.width,h*=u?1:-1}}var j=Object.assign({position:f},d&&Br),B=p===!0?jr({x:h,y:b},F(r)):{x:h,y:b};if(h=B.x,b=B.y,u){var P;return Object.assign({},j,(P={},P[n]=C?"0":"",P[S]=g?"0":"",P.transform=(m.devicePixelRatio||1)<=1?"translate("+h+"px, "+b+"px)":"translate3d("+h+"px, "+b+"px, 0)",P))}return Object.assign({},j,(t={},t[n]=C?b+"px":"",t[S]=g?h+"px":"",t.transform="",t))}function $r(e){var t=e.state,r=e.options,i=r.gpuAcceleration,o=i===void 0?!0:i,a=r.adaptive,c=a===void 0?!0:a,f=r.roundOffsets,u=f===void 0?!0:f,d={placement:ee(t.placement),variation:Ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Dt(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Dt(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Ir={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:$r,data:{}};var Qe={passive:!0};function kr(e){var t=e.state,r=e.instance,i=e.options,o=i.scroll,a=o===void 0?!0:o,c=i.resize,f=c===void 0?!0:c,u=F(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&d.forEach(function(p){p.addEventListener("scroll",r.update,Qe)}),f&&u.addEventListener("resize",r.update,Qe),function(){a&&d.forEach(function(p){p.removeEventListener("scroll",r.update,Qe)}),f&&u.removeEventListener("resize",r.update,Qe)}}const Hr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:kr,data:{}};var Vr={left:"right",right:"left",bottom:"top",top:"bottom"};function et(e){return e.replace(/left|right|bottom|top/g,function(t){return Vr[t]})}var Nr={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return Nr[t]})}function bt(e){var t=F(e),r=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:r,scrollTop:i}}function wt(e){return De(fe(e)).left+bt(e).scrollLeft}function Wr(e,t){var r=F(e),i=fe(e),o=r.visualViewport,a=i.clientWidth,c=i.clientHeight,f=0,u=0;if(o){a=o.width,c=o.height;var d=zt();(d||!d&&t==="fixed")&&(f=o.offsetLeft,u=o.offsetTop)}return{width:a,height:c,x:f+wt(e),y:u}}function Ur(e){var t,r=fe(e),i=bt(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=he(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=he(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-i.scrollLeft+wt(e),u=-i.scrollTop;return ae(o||r).direction==="rtl"&&(f+=he(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:c,x:f,y:u}}function Ot(e){var t=ae(e),r=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+i)}function Kt(e){return["html","body","#document"].indexOf(te(e))>=0?e.ownerDocument.body:z(e)&&Ot(e)?e:Kt(nt(e))}function Ie(e,t){var r;t===void 0&&(t=[]);var i=Kt(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=F(i),c=o?[a].concat(a.visualViewport||[],Ot(i)?i:[]):i,f=t.concat(c);return o?f:f.concat(Ie(nt(c)))}function lt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Fr(e,t){var r=De(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function St(e,t,r){return t===Ut?lt(Wr(e,r)):ge(t)?Fr(t,r):lt(Ur(fe(e)))}function qr(e){var t=Ie(nt(e)),r=["absolute","fixed"].indexOf(ae(e).position)>=0,i=r&&z(e)?Ne(e):e;return ge(i)?t.filter(function(o){return ge(o)&&Xt(o,i)&&te(o)!=="body"}):[]}function zr(e,t,r,i){var o=t==="clippingParents"?qr(e):[].concat(t),a=[].concat(o,[r]),c=a[0],f=a.reduce(function(u,d){var p=St(e,d,i);return u.top=he(p.top,u.top),u.right=tt(p.right,u.right),u.bottom=tt(p.bottom,u.bottom),u.left=he(p.left,u.left),u},St(e,c,i));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function Jt(e){var t=e.reference,r=e.element,i=e.placement,o=i?ee(i):null,a=i?Ce(i):null,c=t.x+t.width/2-r.width/2,f=t.y+t.height/2-r.height/2,u;switch(o){case V:u={x:c,y:t.y-r.height};break;case X:u={x:c,y:t.y+t.height};break;case Y:u={x:t.x+t.width,y:f};break;case N:u={x:t.x-r.width,y:f};break;default:u={x:t.x,y:t.y}}var d=o?yt(o):null;if(d!=null){var p=d==="y"?"height":"width";switch(a){case Ae:u[d]=u[d]-(t[p]/2-r[p]/2);break;case ke:u[d]=u[d]+(t[p]/2-r[p]/2);break}}return u}function He(e,t){t===void 0&&(t={});var r=t,i=r.placement,o=i===void 0?e.placement:i,a=r.strategy,c=a===void 0?e.strategy:a,f=r.boundary,u=f===void 0?lr:f,d=r.rootBoundary,p=d===void 0?Ut:d,O=r.elementContext,T=O===void 0?je:O,h=r.altBoundary,x=h===void 0?!1:h,b=r.padding,w=b===void 0?0:b,g=_t(typeof w!="number"?w:Gt(w,Ve)),C=T===je?dr:je,S=e.rects.popper,n=e.elements[x?C:T],m=zr(ge(n)?n:n.contextElement||fe(e.elements.popper),u,p,c),l=De(e.elements.reference),A=Jt({reference:l,element:S,strategy:"absolute",placement:o}),L=lt(Object.assign({},S,A)),R=T===je?L:l,M={top:m.top-R.top+g.top,bottom:R.bottom-m.bottom+g.bottom,left:m.left-R.left+g.left,right:R.right-m.right+g.right},j=e.modifiersData.offset;if(T===je&&j){var B=j[o];Object.keys(M).forEach(function(P){var W=[Y,X].indexOf(P)>=0?1:-1,U=[V,X].indexOf(P)>=0?"y":"x";M[P]+=B[U]*W})}return M}function Xr(e,t){t===void 0&&(t={});var r=t,i=r.placement,o=r.boundary,a=r.rootBoundary,c=r.padding,f=r.flipVariations,u=r.allowedAutoPlacements,d=u===void 0?Ft:u,p=Ce(i),O=p?f?At:At.filter(function(x){return Ce(x)===p}):Ve,T=O.filter(function(x){return d.indexOf(x)>=0});T.length===0&&(T=O);var h=T.reduce(function(x,b){return x[b]=He(e,{placement:b,boundary:o,rootBoundary:a,padding:c})[ee(b)],x},{});return Object.keys(h).sort(function(x,b){return h[x]-h[b]})}function Yr(e){if(ee(e)===mt)return[];var t=et(e);return[Ct(e),t,Ct(t)]}function _r(e){var t=e.state,r=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,f=c===void 0?!0:c,u=r.fallbackPlacements,d=r.padding,p=r.boundary,O=r.rootBoundary,T=r.altBoundary,h=r.flipVariations,x=h===void 0?!0:h,b=r.allowedAutoPlacements,w=t.options.placement,g=ee(w),C=g===w,S=u||(C||!x?[et(w)]:Yr(w)),n=[w].concat(S).reduce(function(re,_){return re.concat(ee(_)===mt?Xr(t,{placement:_,boundary:p,rootBoundary:O,padding:d,flipVariations:x,allowedAutoPlacements:b}):_)},[]),m=t.rects.reference,l=t.rects.popper,A=new Map,L=!0,R=n[0],M=0;M<n.length;M++){var j=n[M],B=ee(j),P=Ce(j)===Ae,W=[V,X].indexOf(B)>=0,U=W?"width":"height",I=He(t,{placement:j,boundary:p,rootBoundary:O,altBoundary:T,padding:d}),k=W?P?Y:N:P?X:V;m[U]>l[U]&&(k=et(k));var $=et(k),K=[];if(a&&K.push(I[B]<=0),f&&K.push(I[k]<=0,I[$]<=0),K.every(function(re){return re})){R=j,L=!1;break}A.set(j,K)}if(L)for(var J=x?3:1,ce=function(_){var ne=n.find(function(ye){var ie=A.get(ye);if(ie)return ie.slice(0,_).every(function(be){return be})});if(ne)return R=ne,"break"},Q=J;Q>0;Q--){var pe=ce(Q);if(pe==="break")break}t.placement!==R&&(t.modifiersData[i]._skip=!0,t.placement=R,t.reset=!0)}}const Gr={name:"flip",enabled:!0,phase:"main",fn:_r,requiresIfExists:["offset"],data:{_skip:!1}};function Lt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Rt(e){return[V,Y,X,N].some(function(t){return e[t]>=0})}function Kr(e){var t=e.state,r=e.name,i=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,c=He(t,{elementContext:"reference"}),f=He(t,{altBoundary:!0}),u=Lt(c,i),d=Lt(f,o,a),p=Rt(u),O=Rt(d);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:p,hasPopperEscaped:O},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":O})}const Jr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Kr};function Qr(e,t,r){var i=ee(e),o=[N,V].indexOf(i)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=a[0],f=a[1];return c=c||0,f=(f||0)*o,[N,Y].indexOf(i)>=0?{x:f,y:c}:{x:c,y:f}}function Zr(e){var t=e.state,r=e.options,i=e.name,o=r.offset,a=o===void 0?[0,0]:o,c=Ft.reduce(function(p,O){return p[O]=Qr(O,t.rects,a),p},{}),f=c[t.placement],u=f.x,d=f.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=c}const en={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Zr};function tn(e){var t=e.state,r=e.name;t.modifiersData[r]=Jt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const rn={name:"popperOffsets",enabled:!0,phase:"read",fn:tn,data:{}};function nn(e){return e==="x"?"y":"x"}function on(e){var t=e.state,r=e.options,i=e.name,o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,f=c===void 0?!1:c,u=r.boundary,d=r.rootBoundary,p=r.altBoundary,O=r.padding,T=r.tether,h=T===void 0?!0:T,x=r.tetherOffset,b=x===void 0?0:x,w=He(t,{boundary:u,rootBoundary:d,padding:O,altBoundary:p}),g=ee(t.placement),C=Ce(t.placement),S=!C,n=yt(g),m=nn(n),l=t.modifiersData.popperOffsets,A=t.rects.reference,L=t.rects.popper,R=typeof b=="function"?b(Object.assign({},t.rects,{placement:t.placement})):b,M=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(l){if(a){var P,W=n==="y"?V:N,U=n==="y"?X:Y,I=n==="y"?"height":"width",k=l[n],$=k+w[W],K=k-w[U],J=h?-L[I]/2:0,ce=C===Ae?A[I]:L[I],Q=C===Ae?-L[I]:-A[I],pe=t.elements.arrow,re=h&&pe?gt(pe):{width:0,height:0},_=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Yt(),ne=_[W],ye=_[U],ie=$e(0,A[I],re[I]),be=S?A[I]/2-J-ie-ne-M.mainAxis:ce-ie-ne-M.mainAxis,se=S?-A[I]/2+J+ie+ye+M.mainAxis:Q+ie+ye+M.mainAxis,we=t.elements.arrow&&Ne(t.elements.arrow),We=we?n==="y"?we.clientTop||0:we.clientLeft||0:0,Le=(P=j?.[n])!=null?P:0,Ue=k+be-Le-We,Fe=k+se-Le,Re=$e(h?tt($,Ue):$,k,h?he(K,Fe):K);l[n]=Re,B[n]=Re-k}if(f){var Pe,qe=n==="x"?V:N,ze=n==="x"?X:Y,oe=l[m],ue=m==="y"?"height":"width",Me=oe+w[qe],le=oe-w[ze],Be=[V,N].indexOf(g)!==-1,Xe=(Pe=j?.[m])!=null?Pe:0,Ye=Be?Me:oe-A[ue]-L[ue]-Xe+M.altAxis,_e=Be?oe+A[ue]+L[ue]-Xe-M.altAxis:le,Ge=h&&Be?Sr(Ye,oe,_e):$e(h?Ye:Me,oe,h?_e:le);l[m]=Ge,B[m]=Ge-oe}t.modifiersData[i]=B}}const an={name:"preventOverflow",enabled:!0,phase:"main",fn:on,requiresIfExists:["offset"]};function sn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function un(e){return e===F(e)||!z(e)?bt(e):sn(e)}function fn(e){var t=e.getBoundingClientRect(),r=Ee(t.width)/e.offsetWidth||1,i=Ee(t.height)/e.offsetHeight||1;return r!==1||i!==1}function cn(e,t,r){r===void 0&&(r=!1);var i=z(t),o=z(t)&&fn(t),a=fe(t),c=De(e,o,r),f={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!r)&&((te(t)!=="body"||Ot(a))&&(f=un(t)),z(t)?(u=De(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=wt(a))),{x:c.left+f.scrollLeft-u.x,y:c.top+f.scrollTop-u.y,width:c.width,height:c.height}}function pn(e){var t=new Map,r=new Set,i=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(f){if(!r.has(f)){var u=t.get(f);u&&o(u)}}),i.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),i}function ln(e){var t=pn(e);return Tr.reduce(function(r,i){return r.concat(t.filter(function(o){return o.phase===i}))},[])}function dn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function vn(e){var t=e.reduce(function(r,i){var o=r[i.name];return r[i.name]=o?Object.assign({},o,i,{options:Object.assign({},o.options,i.options),data:Object.assign({},o.data,i.data)}):i,r},{});return Object.keys(t).map(function(r){return t[r]})}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function Mt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function mn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,i=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?Pt:o;return function(f,u,d){d===void 0&&(d=a);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,a),modifiersData:{},elements:{reference:f,popper:u},attributes:{},styles:{}},O=[],T=!1,h={state:p,setOptions:function(g){var C=typeof g=="function"?g(p.options):g;b(),p.options=Object.assign({},a,p.options,C),p.scrollParents={reference:ge(f)?Ie(f):f.contextElement?Ie(f.contextElement):[],popper:Ie(u)};var S=ln(vn([].concat(i,p.options.modifiers)));return p.orderedModifiers=S.filter(function(n){return n.enabled}),x(),h.update()},forceUpdate:function(){if(!T){var g=p.elements,C=g.reference,S=g.popper;if(Mt(C,S)){p.rects={reference:cn(C,Ne(S),p.options.strategy==="fixed"),popper:gt(S)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(M){return p.modifiersData[M.name]=Object.assign({},M.data)});for(var n=0;n<p.orderedModifiers.length;n++){if(p.reset===!0){p.reset=!1,n=-1;continue}var m=p.orderedModifiers[n],l=m.fn,A=m.options,L=A===void 0?{}:A,R=m.name;typeof l=="function"&&(p=l({state:p,options:L,name:R,instance:h})||p)}}}},update:dn(function(){return new Promise(function(w){h.forceUpdate(),w(p)})}),destroy:function(){b(),T=!0}};if(!Mt(f,u))return h;h.setOptions(d).then(function(w){!T&&d.onFirstUpdate&&d.onFirstUpdate(w)});function x(){p.orderedModifiers.forEach(function(w){var g=w.name,C=w.options,S=C===void 0?{}:C,n=w.effect;if(typeof n=="function"){var m=n({state:p,name:g,instance:h,options:S}),l=function(){};O.push(m||l)}})}function b(){O.forEach(function(w){return w()}),O=[]}return h}}var hn=[Hr,rn,Ir,qt,en,Gr,an,Mr,Jr],gn=mn({defaultModifiers:hn}),yn="tippy-box",Qt="tippy-content",bn="tippy-backdrop",Zt="tippy-arrow",er="tippy-svg-arrow",ve={passive:!0,capture:!0},tr=function(){return document.body};function st(e,t,r){if(Array.isArray(e)){var i=e[t];return i??(Array.isArray(r)?r[t]:r)}return e}function xt(e,t){var r={}.toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function rr(e,t){return typeof e=="function"?e.apply(void 0,t):e}function Bt(e,t){if(t===0)return e;var r;return function(i){clearTimeout(r),r=setTimeout(function(){e(i)},t)}}function wn(e,t){var r=Object.assign({},e);return t.forEach(function(i){delete r[i]}),r}function On(e){return e.split(/\s+/).filter(Boolean)}function me(e){return[].concat(e)}function jt(e,t){e.indexOf(t)===-1&&e.push(t)}function xn(e){return e.filter(function(t,r){return e.indexOf(t)===r})}function Tn(e){return e.split("-")[0]}function rt(e){return[].slice.call(e)}function $t(e){return Object.keys(e).reduce(function(t,r){return e[r]!==void 0&&(t[r]=e[r]),t},{})}function Te(){return document.createElement("div")}function it(e){return["Element","Fragment"].some(function(t){return xt(e,t)})}function An(e){return xt(e,"NodeList")}function En(e){return xt(e,"MouseEvent")}function Dn(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function Cn(e){return it(e)?[e]:An(e)?rt(e):Array.isArray(e)?e:rt(document.querySelectorAll(e))}function ut(e,t){e.forEach(function(r){r&&(r.style.transitionDuration=t+"ms")})}function It(e,t){e.forEach(function(r){r&&r.setAttribute("data-state",t)})}function Sn(e){var t,r=me(e),i=r[0];return i!=null&&(t=i.ownerDocument)!=null&&t.body?i.ownerDocument:document}function Ln(e,t){var r=t.clientX,i=t.clientY;return e.every(function(o){var a=o.popperRect,c=o.popperState,f=o.props,u=f.interactiveBorder,d=Tn(c.placement),p=c.modifiersData.offset;if(!p)return!0;var O=d==="bottom"?p.top.y:0,T=d==="top"?p.bottom.y:0,h=d==="right"?p.left.x:0,x=d==="left"?p.right.x:0,b=a.top-i+O>u,w=i-a.bottom-T>u,g=a.left-r+h>u,C=r-a.right-x>u;return b||w||g||C})}function ft(e,t,r){var i=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(o){e[i](o,r)})}function kt(e,t){for(var r=t;r;){var i;if(e.contains(r))return!0;r=r.getRootNode==null||(i=r.getRootNode())==null?void 0:i.host}return!1}var Z={isTouch:!1},Ht=0;function Rn(){Z.isTouch||(Z.isTouch=!0,window.performance&&document.addEventListener("mousemove",nr))}function nr(){var e=performance.now();e-Ht<20&&(Z.isTouch=!1,document.removeEventListener("mousemove",nr)),Ht=e}function Pn(){var e=document.activeElement;if(Dn(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function Mn(){document.addEventListener("touchstart",Rn,ve),window.addEventListener("blur",Pn)}var Bn=typeof window<"u"&&typeof document<"u",jn=Bn?!!window.msCrypto:!1,$n={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},In={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},G=Object.assign({appendTo:tr,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},$n,In),kn=Object.keys(G),Hn=function(t){var r=Object.keys(t);r.forEach(function(i){G[i]=t[i]})};function ir(e){var t=e.plugins||[],r=t.reduce(function(i,o){var a=o.name,c=o.defaultValue;if(a){var f;i[a]=e[a]!==void 0?e[a]:(f=G[a])!=null?f:c}return i},{});return Object.assign({},e,r)}function Vn(e,t){var r=t?Object.keys(ir(Object.assign({},G,{plugins:t}))):kn,i=r.reduce(function(o,a){var c=(e.getAttribute("data-tippy-"+a)||"").trim();if(!c)return o;if(a==="content")o[a]=c;else try{o[a]=JSON.parse(c)}catch{o[a]=c}return o},{});return i}function Vt(e,t){var r=Object.assign({},t,{content:rr(t.content,[e])},t.ignoreAttributes?{}:Vn(e,t.plugins));return r.aria=Object.assign({},G.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content},r}var Nn=function(){return"innerHTML"};function dt(e,t){e[Nn()]=t}function Nt(e){var t=Te();return e===!0?t.className=Zt:(t.className=er,it(e)?t.appendChild(e):dt(t,e)),t}function Wt(e,t){it(t.content)?(dt(e,""),e.appendChild(t.content)):typeof t.content!="function"&&(t.allowHTML?dt(e,t.content):e.textContent=t.content)}function vt(e){var t=e.firstElementChild,r=rt(t.children);return{box:t,content:r.find(function(i){return i.classList.contains(Qt)}),arrow:r.find(function(i){return i.classList.contains(Zt)||i.classList.contains(er)}),backdrop:r.find(function(i){return i.classList.contains(bn)})}}function or(e){var t=Te(),r=Te();r.className=yn,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var i=Te();i.className=Qt,i.setAttribute("data-state","hidden"),Wt(i,e.props),t.appendChild(r),r.appendChild(i),o(e.props,e.props);function o(a,c){var f=vt(t),u=f.box,d=f.content,p=f.arrow;c.theme?u.setAttribute("data-theme",c.theme):u.removeAttribute("data-theme"),typeof c.animation=="string"?u.setAttribute("data-animation",c.animation):u.removeAttribute("data-animation"),c.inertia?u.setAttribute("data-inertia",""):u.removeAttribute("data-inertia"),u.style.maxWidth=typeof c.maxWidth=="number"?c.maxWidth+"px":c.maxWidth,c.role?u.setAttribute("role",c.role):u.removeAttribute("role"),(a.content!==c.content||a.allowHTML!==c.allowHTML)&&Wt(d,e.props),c.arrow?p?a.arrow!==c.arrow&&(u.removeChild(p),u.appendChild(Nt(c.arrow))):u.appendChild(Nt(c.arrow)):p&&u.removeChild(p)}return{popper:t,onUpdate:o}}or.$$tippy=!0;var Wn=1,Ze=[],ct=[];function Un(e,t){var r=Vt(e,Object.assign({},G,ir($t(t)))),i,o,a,c=!1,f=!1,u=!1,d=!1,p,O,T,h=[],x=Bt(Ue,r.interactiveDebounce),b,w=Wn++,g=null,C=xn(r.plugins),S={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},n={id:w,reference:e,popper:Te(),popperInstance:g,props:r,state:S,plugins:C,clearDelayTimeouts:Ye,setProps:_e,setContent:Ge,show:ar,hide:sr,hideWithInteractivity:ur,enable:Be,disable:Xe,unmount:fr,destroy:cr};if(!r.render)return n;var m=r.render(n),l=m.popper,A=m.onUpdate;l.setAttribute("data-tippy-root",""),l.id="tippy-"+n.id,n.popper=l,e._tippy=n,l._tippy=n;var L=C.map(function(s){return s.fn(n)}),R=e.hasAttribute("aria-expanded");return we(),J(),k(),$("onCreate",[n]),r.showOnCreate&&Me(),l.addEventListener("mouseenter",function(){n.props.interactive&&n.state.isVisible&&n.clearDelayTimeouts()}),l.addEventListener("mouseleave",function(){n.props.interactive&&n.props.trigger.indexOf("mouseenter")>=0&&W().addEventListener("mousemove",x)}),n;function M(){var s=n.props.touch;return Array.isArray(s)?s:[s,0]}function j(){return M()[0]==="hold"}function B(){var s;return!!((s=n.props.render)!=null&&s.$$tippy)}function P(){return b||e}function W(){var s=P().parentNode;return s?Sn(s):document}function U(){return vt(l)}function I(s){return n.state.isMounted&&!n.state.isVisible||Z.isTouch||p&&p.type==="focus"?0:st(n.props.delay,s?0:1,G.delay)}function k(s){s===void 0&&(s=!1),l.style.pointerEvents=n.props.interactive&&!s?"":"none",l.style.zIndex=""+n.props.zIndex}function $(s,v,y){if(y===void 0&&(y=!0),L.forEach(function(E){E[s]&&E[s].apply(E,v)}),y){var D;(D=n.props)[s].apply(D,v)}}function K(){var s=n.props.aria;if(s.content){var v="aria-"+s.content,y=l.id,D=me(n.props.triggerTarget||e);D.forEach(function(E){var H=E.getAttribute(v);if(n.state.isVisible)E.setAttribute(v,H?H+" "+y:y);else{var q=H&&H.replace(y,"").trim();q?E.setAttribute(v,q):E.removeAttribute(v)}})}}function J(){if(!(R||!n.props.aria.expanded)){var s=me(n.props.triggerTarget||e);s.forEach(function(v){n.props.interactive?v.setAttribute("aria-expanded",n.state.isVisible&&v===P()?"true":"false"):v.removeAttribute("aria-expanded")})}}function ce(){W().removeEventListener("mousemove",x),Ze=Ze.filter(function(s){return s!==x})}function Q(s){if(!(Z.isTouch&&(u||s.type==="mousedown"))){var v=s.composedPath&&s.composedPath()[0]||s.target;if(!(n.props.interactive&&kt(l,v))){if(me(n.props.triggerTarget||e).some(function(y){return kt(y,v)})){if(Z.isTouch||n.state.isVisible&&n.props.trigger.indexOf("click")>=0)return}else $("onClickOutside",[n,s]);n.props.hideOnClick===!0&&(n.clearDelayTimeouts(),n.hide(),f=!0,setTimeout(function(){f=!1}),n.state.isMounted||ne())}}}function pe(){u=!0}function re(){u=!1}function _(){var s=W();s.addEventListener("mousedown",Q,!0),s.addEventListener("touchend",Q,ve),s.addEventListener("touchstart",re,ve),s.addEventListener("touchmove",pe,ve)}function ne(){var s=W();s.removeEventListener("mousedown",Q,!0),s.removeEventListener("touchend",Q,ve),s.removeEventListener("touchstart",re,ve),s.removeEventListener("touchmove",pe,ve)}function ye(s,v){be(s,function(){!n.state.isVisible&&l.parentNode&&l.parentNode.contains(l)&&v()})}function ie(s,v){be(s,v)}function be(s,v){var y=U().box;function D(E){E.target===y&&(ft(y,"remove",D),v())}if(s===0)return v();ft(y,"remove",O),ft(y,"add",D),O=D}function se(s,v,y){y===void 0&&(y=!1);var D=me(n.props.triggerTarget||e);D.forEach(function(E){E.addEventListener(s,v,y),h.push({node:E,eventType:s,handler:v,options:y})})}function we(){j()&&(se("touchstart",Le,{passive:!0}),se("touchend",Fe,{passive:!0})),On(n.props.trigger).forEach(function(s){if(s!=="manual")switch(se(s,Le),s){case"mouseenter":se("mouseleave",Fe);break;case"focus":se(jn?"focusout":"blur",Re);break;case"focusin":se("focusout",Re);break}})}function We(){h.forEach(function(s){var v=s.node,y=s.eventType,D=s.handler,E=s.options;v.removeEventListener(y,D,E)}),h=[]}function Le(s){var v,y=!1;if(!(!n.state.isEnabled||Pe(s)||f)){var D=((v=p)==null?void 0:v.type)==="focus";p=s,b=s.currentTarget,J(),!n.state.isVisible&&En(s)&&Ze.forEach(function(E){return E(s)}),s.type==="click"&&(n.props.trigger.indexOf("mouseenter")<0||c)&&n.props.hideOnClick!==!1&&n.state.isVisible?y=!0:Me(s),s.type==="click"&&(c=!y),y&&!D&&le(s)}}function Ue(s){var v=s.target,y=P().contains(v)||l.contains(v);if(!(s.type==="mousemove"&&y)){var D=ue().concat(l).map(function(E){var H,q=E._tippy,Oe=(H=q.popperInstance)==null?void 0:H.state;return Oe?{popperRect:E.getBoundingClientRect(),popperState:Oe,props:r}:null}).filter(Boolean);Ln(D,s)&&(ce(),le(s))}}function Fe(s){var v=Pe(s)||n.props.trigger.indexOf("click")>=0&&c;if(!v){if(n.props.interactive){n.hideWithInteractivity(s);return}le(s)}}function Re(s){n.props.trigger.indexOf("focusin")<0&&s.target!==P()||n.props.interactive&&s.relatedTarget&&l.contains(s.relatedTarget)||le(s)}function Pe(s){return Z.isTouch?j()!==s.type.indexOf("touch")>=0:!1}function qe(){ze();var s=n.props,v=s.popperOptions,y=s.placement,D=s.offset,E=s.getReferenceClientRect,H=s.moveTransition,q=B()?vt(l).arrow:null,Oe=E?{getBoundingClientRect:E,contextElement:E.contextElement||P()}:e,Tt={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(Ke){var xe=Ke.state;if(B()){var pr=U(),at=pr.box;["placement","reference-hidden","escaped"].forEach(function(Je){Je==="placement"?at.setAttribute("data-placement",xe.placement):xe.attributes.popper["data-popper-"+Je]?at.setAttribute("data-"+Je,""):at.removeAttribute("data-"+Je)}),xe.attributes.popper={}}}},de=[{name:"offset",options:{offset:D}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!H}},Tt];B()&&q&&de.push({name:"arrow",options:{element:q,padding:3}}),de.push.apply(de,v?.modifiers||[]),n.popperInstance=gn(Oe,l,Object.assign({},v,{placement:y,onFirstUpdate:T,modifiers:de}))}function ze(){n.popperInstance&&(n.popperInstance.destroy(),n.popperInstance=null)}function oe(){var s=n.props.appendTo,v,y=P();n.props.interactive&&s===tr||s==="parent"?v=y.parentNode:v=rr(s,[y]),v.contains(l)||v.appendChild(l),n.state.isMounted=!0,qe()}function ue(){return rt(l.querySelectorAll("[data-tippy-root]"))}function Me(s){n.clearDelayTimeouts(),s&&$("onTrigger",[n,s]),_();var v=I(!0),y=M(),D=y[0],E=y[1];Z.isTouch&&D==="hold"&&E&&(v=E),v?i=setTimeout(function(){n.show()},v):n.show()}function le(s){if(n.clearDelayTimeouts(),$("onUntrigger",[n,s]),!n.state.isVisible){ne();return}if(!(n.props.trigger.indexOf("mouseenter")>=0&&n.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(s.type)>=0&&c)){var v=I(!1);v?o=setTimeout(function(){n.state.isVisible&&n.hide()},v):a=requestAnimationFrame(function(){n.hide()})}}function Be(){n.state.isEnabled=!0}function Xe(){n.hide(),n.state.isEnabled=!1}function Ye(){clearTimeout(i),clearTimeout(o),cancelAnimationFrame(a)}function _e(s){if(!n.state.isDestroyed){$("onBeforeUpdate",[n,s]),We();var v=n.props,y=Vt(e,Object.assign({},v,$t(s),{ignoreAttributes:!0}));n.props=y,we(),v.interactiveDebounce!==y.interactiveDebounce&&(ce(),x=Bt(Ue,y.interactiveDebounce)),v.triggerTarget&&!y.triggerTarget?me(v.triggerTarget).forEach(function(D){D.removeAttribute("aria-expanded")}):y.triggerTarget&&e.removeAttribute("aria-expanded"),J(),k(),A&&A(v,y),n.popperInstance&&(qe(),ue().forEach(function(D){requestAnimationFrame(D._tippy.popperInstance.forceUpdate)})),$("onAfterUpdate",[n,s])}}function Ge(s){n.setProps({content:s})}function ar(){var s=n.state.isVisible,v=n.state.isDestroyed,y=!n.state.isEnabled,D=Z.isTouch&&!n.props.touch,E=st(n.props.duration,0,G.duration);if(!(s||v||y||D)&&!P().hasAttribute("disabled")&&($("onShow",[n],!1),n.props.onShow(n)!==!1)){if(n.state.isVisible=!0,B()&&(l.style.visibility="visible"),k(),_(),n.state.isMounted||(l.style.transition="none"),B()){var H=U(),q=H.box,Oe=H.content;ut([q,Oe],0)}T=function(){var de;if(!(!n.state.isVisible||d)){if(d=!0,l.offsetHeight,l.style.transition=n.props.moveTransition,B()&&n.props.animation){var ot=U(),Ke=ot.box,xe=ot.content;ut([Ke,xe],E),It([Ke,xe],"visible")}K(),J(),jt(ct,n),(de=n.popperInstance)==null||de.forceUpdate(),$("onMount",[n]),n.props.animation&&B()&&ie(E,function(){n.state.isShown=!0,$("onShown",[n])})}},oe()}}function sr(){var s=!n.state.isVisible,v=n.state.isDestroyed,y=!n.state.isEnabled,D=st(n.props.duration,1,G.duration);if(!(s||v||y)&&($("onHide",[n],!1),n.props.onHide(n)!==!1)){if(n.state.isVisible=!1,n.state.isShown=!1,d=!1,c=!1,B()&&(l.style.visibility="hidden"),ce(),ne(),k(!0),B()){var E=U(),H=E.box,q=E.content;n.props.animation&&(ut([H,q],D),It([H,q],"hidden"))}K(),J(),n.props.animation?B()&&ye(D,n.unmount):n.unmount()}}function ur(s){W().addEventListener("mousemove",x),jt(Ze,x),x(s)}function fr(){n.state.isVisible&&n.hide(),n.state.isMounted&&(ze(),ue().forEach(function(s){s._tippy.unmount()}),l.parentNode&&l.parentNode.removeChild(l),ct=ct.filter(function(s){return s!==n}),n.state.isMounted=!1,$("onHidden",[n]))}function cr(){n.state.isDestroyed||(n.clearDelayTimeouts(),n.unmount(),We(),delete e._tippy,n.state.isDestroyed=!0,$("onDestroy",[n]))}}function Se(e,t){t===void 0&&(t={});var r=G.plugins.concat(t.plugins||[]);Mn();var i=Object.assign({},t,{plugins:r}),o=Cn(e),a=o.reduce(function(c,f){var u=f&&Un(f,i);return u&&c.push(u),c},[]);return it(e)?a[0]:a}Se.defaultProps=G;Se.setDefaultProps=Hn;Se.currentInput=Z;var Fn=Object.assign({},qt,{effect:function(t){var r=t.state,i={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,i.popper),r.styles=i,r.elements.arrow&&Object.assign(r.elements.arrow.style,i.arrow)}}),qn=function(t,r){var i;r===void 0&&(r={});var o=t,a=[],c=[],f,u=r.overrides,d=[],p=!1;function O(){c=o.map(function(n){return me(n.props.triggerTarget||n.reference)}).reduce(function(n,m){return n.concat(m)},[])}function T(){a=o.map(function(n){return n.reference})}function h(n){o.forEach(function(m){n?m.enable():m.disable()})}function x(n){return o.map(function(m){var l=m.setProps;return m.setProps=function(A){l(A),m.reference===f&&n.setProps(A)},function(){m.setProps=l}})}function b(n,m){var l=c.indexOf(m);if(m!==f){f=m;var A=(u||[]).concat("content").reduce(function(L,R){return L[R]=o[l].props[R],L},{});n.setProps(Object.assign({},A,{getReferenceClientRect:typeof A.getReferenceClientRect=="function"?A.getReferenceClientRect:function(){var L;return(L=a[l])==null?void 0:L.getBoundingClientRect()}}))}}h(!1),T(),O();var w={fn:function(){return{onDestroy:function(){h(!0)},onHidden:function(){f=null},onClickOutside:function(l){l.props.showOnCreate&&!p&&(p=!0,f=null)},onShow:function(l){l.props.showOnCreate&&!p&&(p=!0,b(l,a[0]))},onTrigger:function(l,A){b(l,A.currentTarget)}}}},g=Se(Te(),Object.assign({},wn(r,["overrides"]),{plugins:[w].concat(r.plugins||[]),triggerTarget:c,popperOptions:Object.assign({},r.popperOptions,{modifiers:[].concat(((i=r.popperOptions)==null?void 0:i.modifiers)||[],[Fn])})})),C=g.show;g.show=function(n){if(C(),!f&&n==null)return b(g,a[0]);if(!(f&&n==null)){if(typeof n=="number")return a[n]&&b(g,a[n]);if(o.indexOf(n)>=0){var m=n.reference;return b(g,m)}if(a.indexOf(n)>=0)return b(g,n)}},g.showNext=function(){var n=a[0];if(!f)return g.show(0);var m=a.indexOf(f);g.show(a[m+1]||n)},g.showPrevious=function(){var n=a[a.length-1];if(!f)return g.show(n);var m=a.indexOf(f),l=a[m-1]||n;g.show(l)};var S=g.setProps;return g.setProps=function(n){u=n.overrides||u,S(n)},g.setInstances=function(n){h(!0),d.forEach(function(m){return m()}),o=n,h(!1),T(),O(),d=x(g),g.setProps({triggerTarget:c})},d=x(g),g};Se.setDefaultProps({render:or});const zn=Se(".devicon",{content:e=>e.getAttribute("title")}),Xn=qn(zn,{moveTransition:"transform 0.2s ease-out"});Xn.enable();
