(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1407:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},1439:function(t,e,n){var content=n(1445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("052f2c89",content,!0,{sourceMap:!1})},1440:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(247);var o=n(329),c=n(178);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1444:function(t,e,n){"use strict";n(1439)},1445:function(t,e,n){var r=n(74),o=n(1407),c=n(695),l=r(!1),d=o(c);l.push([t.i,".flex-row[data-v-0f5a6290] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.flex-col[data-v-0f5a6290] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.ellipsis[data-v-0f5a6290] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ellipsis2[data-v-0f5a6290] {\n  overflow: hidden;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.case-list-wrap .card[data-v-0f5a6290] .ant-card-body {\n  padding: 0;\n}\n.case-list-wrap .card .card-wrap[data-v-0f5a6290] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 2.34375rem;\n  height: 1.30208rem;\n}\n.case-list-wrap .card .card-wrap .bg[data-v-0f5a6290] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 60%;\n  bottom: 0;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  filter: blur(0.00521rem) brightness(90%);\n  color: #fff;\n}\n.case-list-wrap .card .card-wrap .card-con[data-v-0f5a6290] {\n  z-index: 1;\n  padding-left: 42%;\n  padding-right: 2%;\n}\n.case-list-wrap .card .card-wrap .card-con h3[data-v-0f5a6290] {\n  font-size: 0.08333rem;\n  margin-bottom: 0.02604rem;\n  font-weight: bold;\n}\n.case-list-wrap .card .card-wrap .card-con .type-wrap[data-v-0f5a6290] {\n  margin-top: 0.05208rem;\n}\n.case-list-wrap .card .card-wrap .card-con .stack-wrap[data-v-0f5a6290] {\n  margin-top: 0.05208rem;\n}\n.thumb-example[data-v-0f5a6290] {\n  height: 4.0625rem;\n  background-color: #000;\n}\n.swiper .swiper-slide[data-v-0f5a6290] {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.swiper .swiper-slide.slide-1[data-v-0f5a6290] {\n  background-image: url("+d+");\n}\n.swiper .swiper-slide.slide-2[data-v-0f5a6290] {\n  background-image: url("+d+");\n}\n.swiper .swiper-slide.slide-3[data-v-0f5a6290] {\n  background-image: url("+d+");\n}\n.swiper .swiper-slide.slide-4[data-v-0f5a6290] {\n  background-image: url("+d+");\n}\n.swiper .swiper-slide.slide-5[data-v-0f5a6290] {\n  background-image: url("+d+");\n}\n.swiper.gallery-top[data-v-0f5a6290] {\n  height: 80%;\n  width: 100%;\n}\n.swiper.gallery-thumbs[data-v-0f5a6290] {\n  height: 20%;\n  box-sizing: border-box;\n  padding: 0.05208rem 0;\n}\n.swiper.gallery-thumbs .swiper-slide[data-v-0f5a6290] {\n  width: 20%;\n  height: 100%;\n  opacity: 0.4;\n}\n.swiper.gallery-thumbs .swiper-slide-active[data-v-0f5a6290] {\n  opacity: 1;\n}\n",""]),t.exports=l},1467:function(t,e,n){"use strict";n.r(e);n(49),n(42),n(76),n(36),n(77);var r=n(1440),o=n(32),c=(n(48),n(26),n(105),n(128),n(157),n(67));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{},props:{filter:{type:Object,default:function(){return{stackCheck:[],typeCheck:[]}}}},data:function(){return{visible:!1,activeItem:{},swiperOptionTop:{loop:!0,loopedSlides:5,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{loop:!0,loopedSlides:5,spaceBetween:10,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0}}},computed:d(d({},Object(c.c)("common",["projectList"])),{},{list:function(){var t=this;if(!this.filter.stackCheck.length&&!this.filter.typeCheck.length)return this.projectList;var e=[],n=this.projectList.filter((function(e){return t.filter.stackCheck.some((function(t){return e.stack.includes(t)}))})),o=this.projectList.filter((function(e){return t.filter.typeCheck.some((function(t){return e.type.includes(t)}))&&!t.filter.stackCheck.some((function(t){return e.stack.includes(t)}))}));return e=[].concat(Object(r.a)(n),Object(r.a)(o)),e}}),watch:{},created:function(){},mounted:function(){},methods:{hideModal:function(){this.visible=!1},clickItem:function(t){var e=this;this.activeItem=t,this.visible=!0,this.$nextTick((function(){var t=e.$refs.swiperTop.$swiper,n=e.$refs.swiperThumbs.$swiper;t.controller.control=n,n.controller.control=t}))}}},v=(n(1444),n(55)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"case-list-wrap"},[n("a-list",{attrs:{grid:{gutter:24,xs:1,sm:2,md:3,lg:3,xl:3,xxl:3},"data-source":t.list},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{},[n("a-card",{staticClass:"card",attrs:{hoverable:""},on:{click:function(n){return t.clickItem(e)}}},[n("div",{staticClass:"card-wrap"},[n("div",{staticClass:"card-con"},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.label))]),t._v(" "),n("div",{staticClass:"type-wrap"},[n("span",[t._v("项目分类：")]),t._v(" "),t._l(e.type,(function(e){return n("a-tag",{key:e,attrs:{color:"red"}},[t._v(t._s(e))])}))],2),t._v(" "),n("div",{staticClass:"stack-wrap"},[n("span",[t._v("技术栈分类：")]),t._v(" "),t._l(e.stack,(function(e){return n("a-tag",{key:e,attrs:{color:"green"}},[t._v(t._s(e))])}))],2)]),t._v(" "),n("div",{staticClass:"bg",style:{backgroundImage:"url("+e.thumb+")"}})])])],1)}}])}),t._v(" "),n("a-modal",{attrs:{width:"70%",title:t.activeItem.name,"ok-text":"确认","cancel-text":"取消"},on:{ok:t.hideModal},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",[n("a-descriptions",{attrs:{title:"项目介绍"}},[n("a-descriptions-item",{attrs:{label:"开发周期"}},[t._v(" Zhou Maomao ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"我负责"}},[t._v(" 1810000000 ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"线上链接"}},[t._v(" Hangzhou, Zhejiang ")]),t._v(" "),n("a-descriptions-item",{attrs:{label:"相关难点"}},[t._v(" empty ")])],1)],1),t._v(" "),n("div",{staticClass:"thumb-example"},[n("h3",[t._v("项目截图")]),t._v(" "),n("client-only",[n("swiper",{ref:"swiperTop",staticClass:"swiper gallery-top",attrs:{options:t.swiperOptionTop}},[t._l(t.activeItem.img,(function(img,t){return n("swiper-slide",{key:t,style:{backgroundImage:"url("+img+")"}})})),t._v(" "),n("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"}),t._v(" "),n("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"})],2),t._v(" "),n("swiper",{ref:"swiperThumbs",staticClass:"swiper gallery-thumbs",attrs:{options:t.swiperOptionThumbs}},t._l(t.activeItem.img,(function(img,t){return n("swiper-slide",{key:t,style:{backgroundImage:"url("+img+")"}})})),1)],1)],1)])],1)}),[],!1,null,"0f5a6290",null);e.default=component.exports}}]);