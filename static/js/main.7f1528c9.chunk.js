(this.webpackJsonpscrile=this.webpackJsonpscrile||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/error.12e40dd1.jpeg"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(2),i=(a(13),a(1)),o=a.n(i),u=a(5),m=function e(){var t=this;Object(u.a)(this,e),this.getResource=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(fetch("".concat(t._apiBase).concat(e)));case 2:if((a=n.sent).ok){n.next=5;break}throw new Error("Could not fetch ".concat(e)+", received ".concat(a.status));case 5:return n.next=7,o.a.awrap(a.json());case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}))},this.getBalance=function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(t.getResource("testapi/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},this._apiBase="https://alex.devel.softservice.org/"},d=(a(15),a(6)),h=a.n(d),f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:h.a,alt:"error"}))},E=(a(16),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))});var p=function(){var e=new m,t=Object(n.useState)(0),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(0),o=Object(s.a)(i,2),u=o[0],d=o[1],h=Object(n.useState)(!1),p=Object(s.a)(h,2),g=p[0],b=p[1],w=Object(n.useState)(!0),j=Object(s.a)(w,2),N=j[0],O=j[1],x=Object(n.useState)(0),y=Object(s.a)(x,2),B=y[0],_=y[1];function k(){e.getBalance().then((function(e){d(e),b(!1),O(!1)})).catch((function(e){b(!0),O(!1)}))}Object(n.useEffect)((function(){B<100&&setTimeout((function(){_(B+100/15),l(Math.round(100*(c+1))/100),c>=u.balance_usd&&(l(Math.round(100*(c+.2))/100),_(B+1.5))}),c>u.balance_usd?2e3:500),k()}),[k,B,c]);var S=g?r.a.createElement(f,null):null,R=N?r.a.createElement(E,null):null,$=N||g?null:r.a.createElement(v,{balance:u,initialBalance:c,percentRange:B,setProgress:_});return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},S,R,$))},v=function(e){var t=e.initialBalance,a=e.percentRange,n="more",c="target_btn";return 15===t&&(n="more_none",c+=" color"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Scrile"),r.a.createElement("div",{id:"target"},r.a.createElement("header",{className:"header"},r.a.createElement("h4",null,"Target indicator Demo")),r.a.createElement("div",{className:"inside"},r.a.createElement("div",{className:"inside_block"},r.a.createElement("p",null,"Reached: ",r.a.createElement("span",{className:"progress-bar"},r.a.createElement("div",{className:"range",style:{width:"".concat(a,"%")}}),r.a.createElement("div",{className:"range_money",style:{width:"".concat(a,"%"),textAlign:"end",fontSize:"13px"}},r.a.createElement("i",{className:"fa fa-sort-asc","aria-hidden":"true"}),r.a.createElement("div",null,"$",t)))),r.a.createElement("div",{className:c},r.a.createElement("header",null,r.a.createElement("a",null,"Target")),r.a.createElement("div",null,"$15"))),r.a.createElement("div",{className:n},r.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"}),"You need $1 more to reach your target."))))},g=p;l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.7f1528c9.chunk.js.map