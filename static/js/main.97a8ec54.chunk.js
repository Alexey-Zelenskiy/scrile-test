(this.webpackJsonpscrile=this.webpackJsonpscrile||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/error.12e40dd1.jpeg"},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c);t(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(2),i=(t(13),t(1)),o=t.n(i),u=t(5),m=function e(){var a=this;Object(u.a)(this,e),this.getResource=function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(fetch("".concat(a._apiBase).concat(e)));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Could not fetch ".concat(e)+", received ".concat(t.status));case 5:return n.next=7,o.a.awrap(t.json());case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}))},this.getBalance=function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(a.getResource("testapi/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},this._apiBase="http://alex.devel.softservice.org/"},d=(t(15),t(6)),h=t.n(d),f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:h.a,alt:"error"}))},E=(t(16),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))});var p=function(){var e=new m,a=Object(n.useState)(0),t=Object(s.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(0),o=Object(s.a)(i,2),u=o[0],d=o[1],h=Object(n.useState)(!1),p=Object(s.a)(h,2),g=p[0],b=(p[1],Object(n.useState)(!0)),w=Object(s.a)(b,2),j=w[0],N=w[1],O=Object(n.useState)(0),x=Object(s.a)(O,2),y=x[0],B=x[1];Object(n.useEffect)((function(){y<100&&setTimeout((function(){B(y+100/15),l(Math.round(100*(c+1))/100),c>=u.balance_usd&&(l(Math.round(100*(c+.2))/100),B(y+1.5))}),c>u.balance_usd?2e3:500),e.getBalance().then((function(e){d(e),N(!1)})).catch((function(e){N(!1)}))}),[y,c]);var _=g?r.a.createElement(f,null):null,k=j?r.a.createElement(E,null):null,S=j||g?null:r.a.createElement(v,{balance:u,initialBalance:c,percentRange:y,setProgress:B});return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},_,k,S))},v=function(e){var a=e.initialBalance,t=e.percentRange,n="more",c="target_btn";return 15===a&&(n="more_none",c+=" color"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Scrile"),r.a.createElement("div",{id:"target"},r.a.createElement("header",{className:"header"},r.a.createElement("h4",null,"Target indicator Demo")),r.a.createElement("div",{className:"inside"},r.a.createElement("div",{className:"inside_block"},r.a.createElement("p",null,"Reached: ",r.a.createElement("span",{className:"progress-bar"},r.a.createElement("div",{className:"range",style:{width:"".concat(t,"%")}}),r.a.createElement("div",{className:"range_money",style:{width:"".concat(t,"%"),textAlign:"end",fontSize:"13px"}},r.a.createElement("i",{className:"fa fa-sort-asc","aria-hidden":"true"}),r.a.createElement("div",null,"$",a)))),r.a.createElement("div",{className:c},r.a.createElement("header",null,r.a.createElement("a",null,"Target")),r.a.createElement("div",null,"$15"))),r.a.createElement("div",{className:n},r.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"}),"You need $1 more to reach your target."))))},g=p;l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.97a8ec54.chunk.js.map