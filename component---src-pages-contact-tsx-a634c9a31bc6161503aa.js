(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0Aie":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n("hr7U");var o=n("9xET"),a=n.n(o),r=(n("fv9D"),n("ZPTe")),c=n.n(r),i=(n("91GP"),n("f3/d"),n("pjuD"),n("rR1Q")),s=n.n(i),l=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("+ZDr")),u=n("q1tI"),p=n.n(u),m=n("0Vgw"),f=n("H8eV");var d=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).openNotification=function(){s.a.open({message:"Success",description:"Thanks for submitting the form. We will get back to you soon.",duration:3})},n.handleChange=function(e){var t;n.setState(((t={})[e.target.name]=e.target.value,t))},n.handleSubmit=function(e){e.preventDefault();var t;e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":"contact"},n.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){n.openNotification(),setTimeout((function(){Object(l.navigate)("/")}))})).catch((function(e){return alert(e)}))},n.state={},n}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){return p.a.createElement(m.a,null,p.a.createElement(f.a,{title:"Contact Us"}),p.a.createElement("div",null,p.a.createElement("h1",null,"Contact"),p.a.createElement(a.a,{gutter:64},p.a.createElement(c.a,{md:24,lg:12},p.a.createElement("iframe",{style:{border:"0",width:"100%"},src:"https://docs.google.com/forms/d/e/1FAIpQLSecB-GKr9wnBLkxahPKKTJmbVbNDFLRzBc59oKwHj4mglR_Yg/viewform?embedded=true",width:"482",height:"900"},"Loading...")),p.a.createElement(c.a,{md:24,lg:12},p.a.createElement("h3",null,"Address"),p.a.createElement("p",null,"Kheti Virasat Mission, House Number-72, Street Number- 4, R V Shanti Nagar, PO Box # 1, JAITU - 151202 Faridkot, Punjab"," "),p.a.createElement("p",null,p.a.createElement("strong",null,"Phone:")," +91 1635 503415, +91 9872682161"),p.a.createElement("p",null,p.a.createElement("strong",null,"Email:")," info@khetivirasatmission.org"),p.a.createElement("div",{className:"mapouter"},p.a.createElement("div",{className:"gmap_canvas"},p.a.createElement("iframe",{style:{border:"0",width:"100%"},width:"400",height:"400",id:"gmap_canvas",src:"https://maps.google.com/maps?q=kheti%20virasat%20mission&t=&z=17&ie=UTF8&iwloc=&output=embed"})))))))},o}(p.a.Component)},"8tx+":function(e,t,n){"use strict";n.r(t);n("2Spj"),n("0l/t"),n("bWfx"),n("V+eJ"),n("eM6i");var o=n("jo6Y"),a=n.n(o),r=n("YEIV"),c=n.n(r),i=n("QbLZ"),s=n.n(i),l=n("iCc5"),u=n.n(l),p=n("V7oC"),m=n.n(p),f=n("FYw3"),d=n.n(f),v=n("mRg0"),h=n.n(v),y=n("q1tI"),g=n.n(y),b=n("17x9"),C=n.n(b),E=n("i8i4"),k=n.n(E),N=n("MFj2"),w=n("2GS6"),T=n("TSYQ"),O=n.n(T),j=function(e){function t(){var e,n,o,a;u()(this,t);for(var r=arguments.length,c=Array(r),i=0;i<r;i++)c[i]=arguments[i];return n=o=d()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.close=function(e){e&&e.stopPropagation(),o.clearCloseTimer(),o.props.onClose()},o.startCloseTimer=function(){o.props.duration&&(o.closeTimer=setTimeout((function(){o.close()}),1e3*o.props.duration))},o.clearCloseTimer=function(){o.closeTimer&&(clearTimeout(o.closeTimer),o.closeTimer=null)},a=n,d()(o,a)}return h()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",o=(e={},c()(e,""+n,1),c()(e,n+"-closable",t.closable),c()(e,t.className,!!t.className),e);return g.a.createElement("div",{className:O()(o),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:t.onClick},g.a.createElement("div",{className:n+"-content"},t.children),t.closable?g.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},t.closeIcon||g.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(y.Component);j.propTypes={duration:C.a.number,onClose:C.a.func,children:C.a.any,update:C.a.bool,closeIcon:C.a.node},j.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var x=j,_=0,P=Date.now();var I=function(e){function t(){var e,n,o,a;u()(this,t);for(var r=arguments.length,c=Array(r),i=0;i<r;i++)c[i]=arguments[i];return n=o=d()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={notices:[]},o.add=function(e){var t=e.key=e.key||"rcNotification_"+P+"_"+_++,n=o.props.maxCount;o.setState((function(o){var a=o.notices,r=a.map((function(e){return e.key})).indexOf(t),c=a.concat();return-1!==r?c.splice(r,1,e):(n&&a.length>=n&&(e.updateKey=c[0].updateKey||c[0].key,c.shift()),c.push(e)),{notices:c}}))},o.remove=function(e){o.setState((function(t){return{notices:t.notices.filter((function(t){return t.key!==e}))}}))},a=n,d()(o,a)}return h()(t,e),m()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,o=this.state.notices,a=o.map((function(e,a){var r=Boolean(a===o.length-1&&e.updateKey),c=e.updateKey?e.updateKey:e.key,i=Object(w.a)(t.remove.bind(t,e.key),e.onClose);return g.a.createElement(x,s()({prefixCls:n.prefixCls},e,{key:c,update:r,onClose:i,onClick:e.onClick,closeIcon:n.closeIcon}),e.content)})),r=(e={},c()(e,n.prefixCls,1),c()(e,n.className,!!n.className),e);return g.a.createElement("div",{className:O()(r),style:n.style},g.a.createElement(N.a,{transitionName:this.getTransitionName()},a))}}]),t}(y.Component);I.propTypes={prefixCls:C.a.string,transitionName:C.a.string,animation:C.a.oneOfType([C.a.string,C.a.object]),style:C.a.object,maxCount:C.a.number,closeIcon:C.a.node},I.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},I.newInstance=function(e,t){var n=e||{},o=n.getContainer,r=a()(n,["getContainer"]),c=document.createElement("div");o?o().appendChild(c):document.body.appendChild(c);var i=!1;k.a.render(g.a.createElement(I,s()({},r,{ref:function(e){i||(i=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){k.a.unmountComponentAtNode(c),c.parentNode.removeChild(c)}}))}})),c)};var V=I;t.default=V},pjuD:function(e,t,n){"use strict";n("VEUW"),n("dVhw")},rR1Q:function(e,t,n){"use strict";n("RW0V"),n("8+KV"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=o?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=c(n("8tx+")),r=c(n("Pbn2"));function c(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l,u={},p=4.5,m=24,f=24,d="topRight";function v(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;switch(e){case"topLeft":t={left:0,top:n,bottom:"auto"};break;case"topRight":t={right:0,top:n,bottom:"auto"};break;case"bottomLeft":t={left:0,top:"auto",bottom:o};break;default:t={right:0,top:"auto",bottom:o}}return t}var h={success:"check-circle-o",info:"info-circle-o",error:"close-circle-o",warning:"exclamation-circle-o"};var y={open:function(e){var t=e.prefixCls||"ant-notification",n="".concat(t,"-notice"),c=void 0===e.duration?p:e.duration,i=null;if(e.icon)i=o.createElement("span",{className:"".concat(n,"-icon")},e.icon);else if(e.type){var s=h[e.type];i=o.createElement(r.default,{className:"".concat(n,"-icon ").concat(n,"-icon-").concat(e.type),type:s})}var m=!e.description&&i?o.createElement("span",{className:"".concat(n,"-message-single-line-auto-margin")}):null;!function(e,t){var n=e.prefixCls,c=e.placement,i=void 0===c?d:c,s=e.getContainer,p=void 0===s?l:s,m=e.top,f=e.bottom,h="".concat(n,"-").concat(i);u[h]?t(u[h]):a.default.newInstance({prefixCls:n,className:"".concat(n,"-").concat(i),style:v(i,m,f),getContainer:p,closeIcon:o.createElement(r.default,{className:"".concat(n,"-close-icon"),type:"close"})},(function(e){u[h]=e,t(e)}))}({prefixCls:t,placement:e.placement,top:e.top,bottom:e.bottom,getContainer:e.getContainer},(function(t){t.notice({content:o.createElement("div",{className:i?"".concat(n,"-with-icon"):""},i,o.createElement("div",{className:"".concat(n,"-message")},m,e.message),o.createElement("div",{className:"".concat(n,"-description")},e.description),e.btn?o.createElement("span",{className:"".concat(n,"-btn")},e.btn):null),duration:c,closable:!0,onClose:e.onClose,onClick:e.onClick,key:e.key,style:e.style||{},className:e.className})}))},close:function(e){Object.keys(u).forEach((function(t){return u[t].removeNotice(e)}))},config:function(e){var t=e.duration,n=e.placement,o=e.bottom,a=e.top,r=e.getContainer;void 0!==t&&(p=t),void 0!==n&&(d=n),void 0!==o&&(f=o),void 0!==a&&(m=a),void 0!==r&&(l=r)},destroy:function(){Object.keys(u).forEach((function(e){u[e].destroy(),delete u[e]}))}};["success","info","warning","error"].forEach((function(e){y[e]=function(t){return y.open(s(s({},t),{type:e}))}})),y.warn=y.warning;var g=y;t.default=g}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-a634c9a31bc6161503aa.js.map