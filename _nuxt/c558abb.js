(window.webpackJsonp=window.webpackJsonp||[]).push([[16,11],{517:function(t,e,n){"use strict";n.r(e);var r={name:"Utterances",computed:{colorMode:function(){return"dark"===this.$colorMode.preference?"dark":"light"}},mounted:function(){this.createUtterances()},methods:{createUtterances:function(){var t=document.createElement("script"),e=document.getElementById("comment");t.type="text/javascript",t.src="https://utteranc.es/client.js",t.setAttribute("repo","ingridkao/personal_website_issue"),t.setAttribute("issue-term","pathname"),t.setAttribute("theme","github-".concat(this.colorMode)),t.crossorigin="anonymous",t.async=!0,e.appendChild(t)}}},c=r,o=n(62),component=Object(o.a)(c,(function(){return(0,this._self._c)("div",{attrs:{id:"comment"}})}),[],!1,null,null,null);e.default=component.exports},546:function(t,e,n){"use strict";n.r(e);var r=n(38),c=(n(117),n(20),n(259),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$content,r=t.route,c=t.error,!(o=r?r.params.id:"")){e.next=16;break}return l=n("Coding").search(o),e.prev=4,e.next=7,l.fetch();case 7:return d=e.sent,e.abrupt("return",{document:d[0]});case 11:e.prev=11,e.t0=e.catch(4),c({statusCode:400,message:e.t0});case 14:e.next=18;break;case 16:return c({statusCode:404,message:"Post not found"}),e.abrupt("return",{articles:null});case 18:case"end":return e.stop()}}),e,null,[[4,11]])})))()}}),o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"blog_container"},[e("NuxtContent",{staticClass:"prose lg:prose-lg mb-20",attrs:{document:t.document}}),t._v(" "),e("Utterances")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Utterances:n(517).default})}}]);