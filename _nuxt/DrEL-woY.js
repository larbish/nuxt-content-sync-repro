const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C6iNgX8J.js","./D7Ni39_Z.js","./CtJ3CAqv.js"])))=>i.map(i=>d[i]);
import{_ as jn}from"./DCfnUYRQ.js";import{B as Nn,a as ln,C as $n,D as dn,E as _,r as zn,G as Hn,H as rn,I as fn,J as Y,K as H,L as Fn,M as Vn,s as Wn,k as N,N as Q,n as qn,O as L,P as Kn,_ as gn,Q as Xn,R as Yn,x as Qn,S as Gn,U as Zn,V as Jn,W as ne,f as an,w as un,h as K,i as ee,F as le,A as sn}from"./D7Ni39_Z.js";import{t as te,u as oe}from"./CtJ3CAqv.js";import{u as re}from"./Bj1Fki1m.js";function ae(n,l){const{title:e,titleTemplate:t,...r}=n;return re({title:e,titleTemplate:t,_flatMeta:r},{...l,transform(o){const u=Nn({...o._flatMeta});return delete o._flatMeta,{...o,meta:u}}})}const ue=/\d/,ie=["-","_","/","."];function se(n=""){if(!ue.test(n))return n!==n.toLowerCase()}function hn(n,l){const e=ie,t=[];if(!n||typeof n!="string")return t;let r="",o,u;for(const i of n){const c=e.includes(i);if(c===!0){t.push(r),r="",o=void 0;continue}const p=se(i);if(u===!1){if(o===!1&&p===!0){t.push(r),r=i,o=p;continue}if(o===!0&&p===!1&&r.length>1){const f=r.at(-1);t.push(r.slice(0,Math.max(0,r.length-1))),r=f+i,o=p;continue}}r+=i,o=p,u=c}return t.push(r),t}function ce(n){return n?n[0].toUpperCase()+n.slice(1):""}function E(n,l){return n?(Array.isArray(n)?n:hn(n)).map(e=>ce(e)).join(""):""}function mn(n,l){return n?(Array.isArray(n)?n:hn(n)).map(e=>e.toLowerCase()).join("-"):""}const $=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class z{constructor(l,e,t){this.property=l,this.normal=e,t&&(this.space=t)}}z.prototype.property={};z.prototype.normal={};z.prototype.space=null;function yn(n,l){const e={},t={};let r=-1;for(;++r<n.length;)Object.assign(e,n[r].property),Object.assign(t,n[r].normal);return new z(e,t,l)}function G(n){return n.toLowerCase()}class k{constructor(l,e){this.property=l,this.attribute=e}}k.prototype.space=null;k.prototype.boolean=!1;k.prototype.booleanish=!1;k.prototype.overloadedBoolean=!1;k.prototype.number=!1;k.prototype.commaSeparated=!1;k.prototype.spaceSeparated=!1;k.prototype.commaOrSpaceSeparated=!1;k.prototype.mustUseProperty=!1;k.prototype.defined=!1;let pe=0;const s=A(),y=A(),vn=A(),a=A(),h=A(),U=A(),S=A();function A(){return 2**++pe}const Z=Object.freeze(Object.defineProperty({__proto__:null,boolean:s,booleanish:y,commaOrSpaceSeparated:S,commaSeparated:U,number:a,overloadedBoolean:vn,spaceSeparated:h},Symbol.toStringTag,{value:"Module"})),X=Object.keys(Z);class tn extends k{constructor(l,e,t,r){let o=-1;if(super(l,e),cn(this,"space",r),typeof t=="number")for(;++o<X.length;){const u=X[o];cn(this,X[o],(t&Z[u])===Z[u])}}}tn.prototype.defined=!0;function cn(n,l,e){e&&(n[l]=e)}const de={}.hasOwnProperty;function B(n){const l={},e={};let t;for(t in n.properties)if(de.call(n.properties,t)){const r=n.properties[t],o=new tn(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(o.mustUseProperty=!0),l[t]=o,e[G(t)]=t,e[G(o.attribute)]=t}return new z(l,e,n.space)}const bn=B({space:"xlink",transform(n,l){return"xlink:"+l.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Cn=B({space:"xml",transform(n,l){return"xml:"+l.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Sn(n,l){return l in n?n[l]:l}function kn(n,l){return Sn(n,l.toLowerCase())}const wn=B({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:kn,properties:{xmlns:null,xmlnsXLink:null}}),Pn=B({transform(n,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:h,ariaCurrent:null,ariaDescribedBy:h,ariaDetails:null,ariaDisabled:y,ariaDropEffect:h,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:h,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:h,ariaLevel:a,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:h,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:h,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:y,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}}),fe=B({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:kn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:U,acceptCharset:h,accessKey:h,action:null,allow:null,allowFullScreen:s,allowPaymentRequest:s,allowUserMedia:s,alt:null,as:null,async:s,autoCapitalize:null,autoComplete:h,autoFocus:s,autoPlay:s,blocking:h,capture:null,charSet:null,checked:s,cite:null,className:h,cols:a,colSpan:null,content:null,contentEditable:y,controls:s,controlsList:h,coords:a|U,crossOrigin:null,data:null,dateTime:null,decoding:null,default:s,defer:s,dir:null,dirName:null,disabled:s,download:vn,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:s,formTarget:null,headers:h,height:a,hidden:s,high:a,href:null,hrefLang:null,htmlFor:h,httpEquiv:h,id:null,imageSizes:null,imageSrcSet:null,inert:s,inputMode:null,integrity:null,is:null,isMap:s,itemId:null,itemProp:h,itemRef:h,itemScope:s,itemType:h,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:s,low:a,manifest:null,max:null,maxLength:a,media:null,method:null,min:null,minLength:a,multiple:s,muted:s,name:null,nonce:null,noModule:s,noValidate:s,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:s,optimum:a,pattern:null,ping:h,placeholder:null,playsInline:s,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:s,referrerPolicy:null,rel:h,required:s,reversed:s,rows:a,rowSpan:a,sandbox:h,scope:null,scoped:s,seamless:s,selected:s,shadowRootClonable:s,shadowRootDelegatesFocus:s,shadowRootMode:null,shape:null,size:a,sizes:null,slot:null,span:a,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:a,step:null,style:null,tabIndex:a,target:null,title:null,translate:null,type:null,typeMustMatch:s,useMap:null,value:y,width:a,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:h,axis:null,background:null,bgColor:null,border:a,borderColor:null,bottomMargin:a,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:s,declare:s,event:null,face:null,frame:null,frameBorder:null,hSpace:a,leftMargin:a,link:null,longDesc:null,lowSrc:null,marginHeight:a,marginWidth:a,noResize:s,noHref:s,noShade:s,noWrap:s,object:null,profile:null,prompt:null,rev:null,rightMargin:a,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:a,valueType:null,version:null,vAlign:null,vLink:null,vSpace:a,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:s,disableRemotePlayback:s,prefix:null,property:null,results:a,security:null,unselectable:null}}),ge=B({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Sn,properties:{about:S,accentHeight:a,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:a,amplitude:a,arabicForm:null,ascent:a,attributeName:null,attributeType:null,azimuth:a,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:a,by:null,calcMode:null,capHeight:a,className:h,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:a,diffuseConstant:a,direction:null,display:null,dur:null,divisor:a,dominantBaseline:null,download:s,dx:null,dy:null,edgeMode:null,editable:null,elevation:a,enableBackground:null,end:null,event:null,exponent:a,externalResourcesRequired:null,fill:null,fillOpacity:a,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:U,g2:U,glyphName:U,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:a,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:a,horizOriginX:a,horizOriginY:a,id:null,ideographic:a,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:a,k:a,k1:a,k2:a,k3:a,k4:a,kernelMatrix:S,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:a,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:a,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:a,overlineThickness:a,paintOrder:null,panose1:null,path:null,pathLength:a,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:h,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:a,pointsAtY:a,pointsAtZ:a,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:S,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:S,rev:S,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:S,requiredFeatures:S,requiredFonts:S,requiredFormats:S,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:a,specularExponent:a,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:a,strikethroughThickness:a,string:null,stroke:null,strokeDashArray:S,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:a,strokeOpacity:a,strokeWidth:null,style:null,surfaceScale:a,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:S,tabIndex:a,tableValues:null,target:null,targetX:a,targetY:a,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:S,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:a,underlineThickness:a,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:a,values:null,vAlphabetic:a,vMathematical:a,vectorEffect:null,vHanging:a,vIdeographic:a,version:null,vertAdvY:a,vertOriginX:a,vertOriginY:a,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:a,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),he=/^data[-\w.:]+$/i,pn=/-[a-z]/g,me=/[A-Z]/g;function ye(n,l){const e=G(l);let t=l,r=k;if(e in n.normal)return n.property[n.normal[e]];if(e.length>4&&e.slice(0,4)==="data"&&he.test(l)){if(l.charAt(4)==="-"){const o=l.slice(5).replace(pn,be);t="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=l.slice(4);if(!pn.test(o)){let u=o.replace(me,ve);u.charAt(0)!=="-"&&(u="-"+u),l="data"+u}}r=tn}return new r(t,l)}function ve(n){return"-"+n.toLowerCase()}function be(n){return n.charAt(1).toUpperCase()}const Ce=yn([Cn,bn,wn,Pn,fe],"html");yn([Cn,bn,wn,Pn,ge],"svg");const Se=["p","h1","h2","h3","h4","h5","h6","li"];function F(n,l){return n.type===l||typeof n.type=="object"&&n.type.tag===l||n.tag===l}function on(n){return F(n,"text")||F(n,Symbol.for("v-txt"))}function xn(n){var l;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((l=n.children)==null?void 0:l.default)=="function"?n.children.default():[]}function J(n){if(!n)return"";if(Array.isArray(n))return n.map(J).join("");if(on(n))return n.value||n.children||"";const l=xn(n);return Array.isArray(l)?l.map(J).filter(Boolean).join(""):""}function On(n,l=[]){if(Array.isArray(n))return n.flatMap(t=>On(t,l));let e=n;return l.some(t=>t==="*"||F(n,t))&&(e=xn(n)||n,!Array.isArray(e)&&Se.some(t=>F(n,t))&&(e=[e])),e}function Tn(n,l=[]){return n=Array.isArray(n)?n:[n],l.length?n.flatMap(e=>Tn(On(e,[l[0]]),l.slice(1))).filter(e=>!(on(e)&&J(e).trim()==="")):n}function Dn(n,l=[]){return typeof l=="string"&&(l=l.split(/[,\s]/).map(e=>e.trim()).filter(Boolean)),l.length?Tn(n,l).reduce((e,t)=>(on(t)?typeof e[e.length-1]=="string"?e[e.length-1]+=t.children:e.push(t.children):e.push(t),e),[]):n}function ke(n,l){return l.reduce((e,t)=>{const r=we(n,t);return r!==void 0&&(e[t]=r),e},{})}function we(n,l){return l.split(".").reduce((e,t)=>e&&e[t],n)}const nn="default",Ln=/^@|^v-on:/,Mn=/^:|^v-bind:/,Pe=/^v-model/,xe=["select","textarea","input"],Oe=["math","svg"],Te=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),De=ln({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var c,p,f,g,b,O,x,C;const l=(f=(p=(c=$n())==null?void 0:c.appContext)==null?void 0:p.app)==null?void 0:f.$nuxt,e=(l==null?void 0:l.$route)||(l==null?void 0:l._route),{mdc:t}=((g=l==null?void 0:l.$config)==null?void 0:g.public)||{},r={...(b=t==null?void 0:t.components)!=null&&b.prose&&n.prose!==!1?Te:{},...((O=t==null?void 0:t.components)==null?void 0:O.map)||{},...dn(((C=(x=n.data)==null?void 0:x.mdc)==null?void 0:C.components)||{}),...n.components},o=_(()=>{var M;const w=(((M=n.body)==null?void 0:M.children)||[]).map(T=>T.tag||T.type).filter(T=>!$.includes(T));return Array.from(new Set(w)).sort().join(".")}),u=zn({...n.data});Hn(()=>n.data,w=>{Object.assign(u,w)}),await Ne(n.body,{tags:r});function i(w,M){const T=w.split(".").length-1;return w.split(".").reduce((D,d,m)=>m==T&&D?(D[d]=M,D[d]):typeof D=="object"?D[d]:void 0,u)}return{tags:r,contentKey:o,route:e,runtimeData:u,updateRuntimeData:i}},render(n){var O,x;const{tags:l,tag:e,body:t,data:r,contentKey:o,route:u,unwrap:i,runtimeData:c,updateRuntimeData:p}=n;if(!t)return null;const f={...r,tags:l,$route:u,runtimeData:c,updateRuntimeData:p},g=e!==!1?en(e||((O=f.component)==null?void 0:O.name)||f.component||"div"):void 0;return g?rn(g,{...(x=f.component)==null?void 0:x.props,class:n.class,...this.$attrs,key:o},{default:b}):b==null?void 0:b();function b(){const C=An(t,rn,{documentMeta:f,parentScope:f,resolveComponent:en});return C!=null&&C.default?i?Dn(C.default(),typeof i=="string"?i.split(" "):["*"]):C.default():null}}});function Le(n,l,e){const{documentMeta:t,parentScope:r,resolveComponent:o}=e;if(n.type==="text")return l(H,n.value);if(n.type==="comment")return l(Fn,null,n.value);const u=n.tag,i=_n(n,t.tags);if(n.tag==="binding")return Me(n,l,t,r);const c=Rn(i)?g=>g:o,p=c(i);typeof p=="object"&&(p.tag=u);const f=Ae(n,t);return l(p,f,An(n,l,{documentMeta:t,parentScope:{...r,...f},resolveComponent:c}))}function An(n,l,e){const{documentMeta:t,parentScope:r,resolveComponent:o}=e,i=(n.children||[]).reduce((p,f)=>{if(!Ie(f))return p[nn].children.push(f),p;const g=Be(f);return p[g]=p[g]||{props:{},children:[]},f.type==="element"&&(p[g].props=f.props,p[g].children.push(...f.children||[])),p},{[nn]:{props:{},children:[]}});return Object.entries(i).reduce((p,[f,{props:g,children:b}])=>(b.length&&(p[f]=(O={})=>{const x=ke(O,Object.keys(g||{}));let C=b.map(w=>Le(w,l,{documentMeta:t,parentScope:{...r,...x},resolveComponent:o}));return g!=null&&g.unwrap&&(C=Dn(C,g.unwrap)),je(C)}),p),{})}function Me(n,l,e,t={}){var p,f;const r={...e.runtimeData,...t,$document:e,$doc:e},o=/\.|\[(\d+)\]/,i=((p=n.props)==null?void 0:p.value.trim().split(o).filter(Boolean)).reduce((g,b)=>{if(g&&b in g)return typeof g[b]=="function"?g[b]():g[b]},r),c=(f=n.props)==null?void 0:f.defaultValue;return l(H,i??c??"")}function Ae(n,l){const{tag:e="",props:t={}}=n;return Object.keys(t).reduce(function(r,o){if(o==="__ignoreMap")return r;const u=t[o];if(Pe.test(o))return Re(o,u,r,l,{native:xe.includes(e)});if(o==="v-bind")return _e(o,u,r,l);if(Ln.test(o))return Ee(o,u,r,l);if(Mn.test(o))return Ue(o,u,r,l);const{attribute:i}=ye(Ce,o);return Array.isArray(u)&&u.every(c=>typeof c=="string")?(r[i]=u.join(" "),r):(r[i]=u,r)},{})}function Re(n,l,e,t,{native:r}){var c;const o=((c=n.match(/^v-model:([^=]+)/))==null?void 0:c[1])||"modelValue",u=r?"value":o,i=r?"onInput":`onUpdate:${o}`;return e[u]=q(l,t.runtimeData),e[i]=p=>{var f;t.updateRuntimeData(l,r?(f=p.target)==null?void 0:f.value:p)},e}function _e(n,l,e,t){const r=q(l,t);return e=Object.assign(e,r),e}function Ee(n,l,e,t){return n=n.replace(Ln,""),e.on=e.on||{},e.on[n]=()=>q(l,t),e}function Ue(n,l,e,t){return n=n.replace(Mn,""),e[n]=q(l,t),e}const en=n=>{if(typeof n=="string"){if($.includes(n))return n;const l=fn(E(n),!1);return!n||(l==null?void 0:l.name)==="AsyncComponentWrapper"||typeof l=="string"?l:"setup"in l?Y(()=>new Promise(e=>e(l))):l}return n};function q(n,l){const e=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,l);return typeof e>"u"?Vn(n):e}function Be(n){let l="";for(const e of Object.keys(n.props||{}))if(!(!e.startsWith("#")&&!e.startsWith("v-slot:"))){l=e.split(/[:#]/,2)[1];break}return l||nn}function Ie(n){return n.tag==="template"}function Rn(n){return Oe.includes(n)}function je(n){const l=[];for(const e of n){const t=l[l.length-1];e.type===H&&(t==null?void 0:t.type)===H?t.children=t.children+e.children:l.push(e)}return l}async function Ne(n,l){if(!n)return;const e=Array.from(new Set(t(n,l)));await Promise.all(e.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const o=en(r);o!=null&&o.__asyncLoader&&!o.__asyncResolved&&await o.__asyncLoader()}));function t(r,o){const u=r.tag;if(r.type==="text"||u==="binding"||r.type==="comment")return[];const i=_n(r,o.tags);if(Rn(i))return[];const c=[];r.type!=="root"&&!$.includes(i)&&c.push(i);for(const p of r.children||[])c.push(...t(p,o));return c}}function _n(n,l){var t;const e=n.tag;return!e||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?e:l[e]||l[E(e)]||l[mn(n.tag)]||e}function $e(n){return{type:"root",children:n.value.map(En)}}function En(n){if(typeof n=="string")return{type:"text",value:n};const[l,e,...t]=n;return{type:"element",tag:l,props:e,children:t.map(En)}}const Un=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl"],Bn=[],ze=Object.freeze(Object.defineProperty({__proto__:null,globalComponents:Un,localComponents:Bn},Symbol.toStringTag,{value:"Module"})),He=ln({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var w,M,T,D;const l=["render","ssrRender","__ssrInlineRender"],e=n,t=!1,r=_(()=>{let d=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(d=e.value.excerpt),d.type==="minimal"?$e(d):d}),o=_(()=>{var d,m;return!((m=(d=r.value)==null?void 0:d.children)!=null&&m.length)}),u=_(()=>{const{body:d,excerpt:m,...v}=e.value;return{...v,...e.data}}),i=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(d=>[d,`prose-${d}`])),{mdc:c}=Wn().public||{},p={...(w=c==null?void 0:c.components)!=null&&w.prose&&e.prose!==!1?i:{},...((M=c==null?void 0:c.components)==null?void 0:M.map)||{},...dn(((D=(T=e.data)==null?void 0:T.mdc)==null?void 0:D.components)||{}),...e.components},f=_(()=>{}),g=_(()=>r.value?O(r.value,{tags:p}):{});function b(d){let m=d;if(typeof d=="string"){if($.includes(d))return d;if(Un.includes(E(d))?m=fn(d,!1):Bn.includes(E(d))&&(m=Y(()=>gn(()=>Promise.resolve().then(()=>ze),void 0,import.meta.url).then(P=>P[E(d)]()))),typeof m=="string")return m}if(!m)return m;const v=m;return"__asyncLoader"in v?v:"setup"in v?Y(()=>Promise.resolve(v)):v}function O(d,m){if(!d)return;const v=Array.from(new Set(x(d,m))),P={};for(const[R,I]of v)typeof I=="object"&&l.some(In=>Object.hasOwnProperty.call(I,In))||P[R]||(P[R]=b(I));return P}function x(d,m){const v=d.tag;if(d.type==="text"||v==="binding"||d.type==="comment")return[];const P=C(d,m.tags),R=[];d.type!=="root"&&!$.includes(P)&&R.push([v,P]);for(const I of d.children||[])R.push(...x(I,m));return R}function C(d,m){var P;const v=d.tag;return!v||typeof((P=d.props)==null?void 0:P.__ignoreMap)<"u"?v:m[v]||m[E(v)]||m[mn(d.tag)]||v}return(d,m)=>o.value?Kn(d.$slots,"empty",{key:1,body:r.value,data:u.value,dataContentId:L(t)?n.value.id:void 0}):(N(),Q(De,{key:f.value,body:r.value,data:u.value,class:qn(e.class),tag:e.tag,prose:e.prose,unwrap:e.unwrap,components:g.value,"data-content-id":L(t)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),V=(n,l)=>{const e=n._conditions;return e.length>0?`(${e.join(` ${l} `)})`:""},W=n=>{const l=[],e={_conditions:l,where(t,r,o){let u;switch(r.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(o)){const i=o.map(c=>j(c)).join(", ");u=`"${String(t)}" ${r.toUpperCase()} (${i})`}else throw new TypeError(`Value for ${r} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(o)&&o.length===2)u=`"${String(t)}" ${r.toUpperCase()} ${j(o[0])} AND ${j(o[1])}`;else throw new Error(`Value for ${r} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":u=`"${String(t)}" ${r.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":u=`"${String(t)}" ${r.toUpperCase()} ${j(o)}`;break;default:u=`"${String(t)}" ${r} ${j(typeof o=="boolean"?Number(o):o)}`}return l.push(`${u}`),e},andWhere(t){const r=t(W());return l.push(V(r,"AND")),e},orWhere(t){const r=t(W());return l.push(V(r,"OR")),e}};return e},Fe=(n,l)=>{const e={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},t={__params:e,andWhere(o){const u=o(W());return e.conditions.push(V(u,"AND")),t},orWhere(o){const u=o(W());return e.conditions.push(V(u,"OR")),t},path(o){return t.where("path","=",Xn(o))},skip(o){return e.offset=o,t},where(o,u,i){return t.andWhere(c=>c.where(String(o),u,i)),t},limit(o){return e.limit=o,t},select(...o){return o.length&&e.selectedFields.push(...o),t},order(o,u){return e.orderBy.push(`"${String(o)}" ${u}`),t},async all(){return l(n,r()).then(o=>o||[])},async first(){return l(n,r({limit:1})).then(o=>o[0]||null)},async count(o="*",u=!1){return l(n,r({count:{field:String(o),distinct:u}})).then(i=>i[0].count)}};function r(o={}){let u="SELECT ";if(o!=null&&o.count)u+=`COUNT(${o.count.distinct?"DISTINCT ":""}${o.count.field}) as count`;else{const c=Array.from(new Set(e.selectedFields));u+=c.length>0?c.map(p=>`"${String(p)}"`).join(", "):"*"}u+=` FROM ${te[String(n)]}`,e.conditions.length>0&&(u+=` WHERE ${e.conditions.join(" AND ")}`),e.orderBy.length>0?u+=` ORDER BY ${e.orderBy.join(", ")}`:u+=" ORDER BY stem ASC";const i=(o==null?void 0:o.limit)||e.limit;return i>0&&(e.offset>0?u+=` LIMIT ${i} OFFSET ${e.offset}`:u+=` LIMIT ${i}`),u}return t};function j(n){return`'${String(n).replace(/'/g,"''")}'`}const Ve=n=>{var e,t;const l=(t=(e=Yn())==null?void 0:e.ssrContext)==null?void 0:t.event;return Fe(n,(r,o)=>We(l,r,o))};async function We(n,l,e){return qe(l,e)}async function qe(n,l){return await gn(()=>import("./C6iNgX8J.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.loadDatabaseAdapter(n)).then(t=>t.all(l))}const Ke={key:2},Ze=ln({__name:"[...slug]",async setup(n){let l,e;const t=Qn(),{locale:r}=Gn(),o=Zn(),{data:u}=([l,e]=Jn(async()=>oe(t.path,async()=>{const i="pages_"+r.value;return await Ve(i).path(t.path).first()},{watch:[r]})),l=await l,e(),l);if(!u.value)throw ne({statusCode:404,statusMessage:"Seite nicht gefunden",fatal:!0});return ae(u.value.seo),(i,c)=>{const p=jn,f=He;return N(),an(le,null,[L(r)==="en"?(N(),Q(p,{key:0,to:L(o)("de")},{default:un(()=>c[0]||(c[0]=[sn("DE")])),_:1},8,["to"])):K("",!0),L(r)==="de"?(N(),Q(p,{key:1,to:L(o)("en")},{default:un(()=>c[1]||(c[1]=[sn("EN")])),_:1},8,["to"])):K("",!0),L(u)?(N(),an("div",Ke,[ee(f,{value:L(u)},null,8,["value"])])):K("",!0)],64)}}});export{Ze as default};
