(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6],{508:function(t,e,n){"use strict";n.r(e);var r={name:"Utterances",computed:{colorMode:function(){return"dark"===this.$colorMode.preference?"dark":"light"}},mounted:function(){this.createUtterances()},methods:{createUtterances:function(){var t=document.createElement("script"),e=document.getElementById("comment");t.type="text/javascript",t.src="https://utteranc.es/client.js",t.setAttribute("repo","ingridkao/personal_website_issue"),t.setAttribute("issue-term","pathname"),t.setAttribute("theme","github-".concat(this.colorMode)),t.crossorigin="anonymous",t.async=!0,e.appendChild(t)}}},c=r,o=n(61),component=Object(o.a)(c,(function(){return(0,this._self._c)("div",{attrs:{id:"comment"}})}),[],!1,null,null,null);e.default=component.exports},509:function(t,e,n){"use strict";n.r(e);var r=n(510),c=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=c.a},510:function(t,e){},523:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",[e("BlogIndex",{attrs:{content:"Investment"}}),t._v(" "),e("Utterances")],1)},c=[]},524:function(t,e,n){"use strict";n.r(e);var r=n(523),c=n(509);for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var l=n(61),component=Object(l.a)(c.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{Utterances:n(508).default})}}]);