(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{508:function(o,t,e){"use strict";e.r(t);var n=e(7),r=e(97),l=e(309),d=e(243),c=e(35),C=e(311),v=e(54),M=e(310),h={name:"IndexPage",components:{CBox:n.a,CButton:r.a,CAvatarGroup:l.a,CAvatar:d.a,CAvatarBadge:d.b,CModal:c.a,CModalContent:c.d,CModalOverlay:c.g,CModalHeader:c.f,CModalFooter:c.e,CModalBody:c.b,CModalCloseButton:c.c,CIconButton:C.a,CFlex:v.a,CHeading:M.a},inject:["$chakraColorMode","$toggleColorMode"],data:function(){return{showModal:!1,mainStyles:{dark:{bg:"gray.700",color:"whiteAlpha.900"},light:{bg:"white",color:"gray.900"}}}},computed:{colorMode:function(){return this.$chakraColorMode()},theme:function(){return this.$chakraTheme()},toggleColorMode:function(){return this.$toggleColorMode}},methods:{showToast:function(){this.$toast({title:"Account created.",description:"We've created your account for you.",status:"success",duration:1e4,isClosable:!0})}}},m=e(120),component=Object(m.a)(h,(function(){var o=this,t=o._self._c;return t("div",{staticClass:"container"},[t("CBox",o._b({attrs:{d:"flex",w:"100vw",h:"100vh","flex-dir":"column","justify-content":"center"}},"CBox",o.mainStyles[o.colorMode],!1),[t("CHeading",{attrs:{"text-align":"center",mb:"4"}},[o._v("\n        ⚡️ Hello chakra-ui/vue\n    ")]),o._v(" "),t("CFlex",{attrs:{justify:"center",direction:"column",align:"center"}},[t("CBox",{attrs:{mb:"3"}},[t("CIconButton",{attrs:{mr:"3",icon:"light"===o.colorMode?"moon":"sun","aria-label":"Switch to ".concat("light"===o.colorMode?"dark":"light"," mode")},on:{click:o.toggleColorMode}}),o._v(" "),t("CButton",{attrs:{"left-icon":"info","variant-color":"blue"},on:{click:o.showToast}},[o._v("\n            Show Toast\n        ")])],1),o._v(" "),t("CAvatarGroup",[t("CAvatar",{attrs:{name:"Evan You",alt:"Evan You",src:"https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg"}},[t("CAvatarBadge",{attrs:{size:"1.0em",bg:"green.500"}})],1),o._v(" "),t("CAvatar",{attrs:{name:"Jonathan Bakebwa",alt:"Jonathan Bakebwa",src:"https://res.cloudinary.com/xtellar/image/upload/v1572857445/me_zqos4e.jpg"}},[t("CAvatarBadge",{attrs:{size:"1.0em",bg:"green.500"}})],1),o._v(" "),t("CAvatar",{attrs:{name:"Segun Adebayo",alt:"Segun Adebayo",src:"https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"}},[t("CAvatarBadge",{attrs:{size:"1.0em",bg:"green.500"}})],1),o._v(" "),t("CAvatar",{attrs:{src:"pop"}},[t("CAvatarBadge",{attrs:{size:"1.0em","border-color":"papayawhip",bg:"tomato"}})],1)],1),o._v(" "),t("CButton",{attrs:{"left-icon":"close","variant-color":"red",mt:"3"},on:{click:function(t){o.showModal=!0}}},[o._v("\n        Delete Account\n        ")]),o._v(" "),t("CModal",{attrs:{"is-open":o.showModal}},[t("CModalOverlay"),o._v(" "),t("CModalContent",[t("CModalHeader",[o._v("Are you sure?")]),o._v(" "),t("CModalBody",[o._v("Deleting user cannot be undone")]),o._v(" "),t("CModalFooter",[t("CButton",{on:{click:function(t){o.showModal=!1}}},[o._v("\n                Cancel\n            ")]),o._v(" "),t("CButton",{attrs:{"margin-left":"3","variant-color":"red"},on:{click:function(t){o.showModal=!1}}},[o._v("\n                Delete User\n            ")])],1),o._v(" "),t("CModalCloseButton",{on:{click:function(t){o.showModal=!1}}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;e(342)(component,{CHeading:e(112).CHeading,CIconButton:e(112).CIconButton,CButton:e(112).CButton,CBox:e(112).CBox,CAvatarBadge:e(112).CAvatarBadge,CAvatar:e(112).CAvatar,CAvatarGroup:e(112).CAvatarGroup,CModalOverlay:e(112).CModalOverlay,CModalHeader:e(112).CModalHeader,CModalBody:e(112).CModalBody,CModalFooter:e(112).CModalFooter,CModalCloseButton:e(112).CModalCloseButton,CModalContent:e(112).CModalContent,CModal:e(112).CModal,CFlex:e(112).CFlex})}}]);