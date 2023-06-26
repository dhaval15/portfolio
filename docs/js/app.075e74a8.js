(function(){"use strict";var e={286:function(e,t,r){var a=r(963),o=r(252),n=r(577);const i=(0,o._)("i",{"data-feather":"chevron-up"},null,-1);function l(e,t,r,l,s,d){const c=(0,o.up)("AppHeader"),m=(0,o.up)("router-view"),p=(0,o.up)("back-to-top"),u=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([e.appTheme,"pt-0.5"]),style:{"background-color":"#fffbfa"}},[(0,o.Wm)(c),(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{theme:e.appTheme},null,8,["theme"])])),_:1}),(0,o.Wm)(p,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(u)],2)}var s=r(508),d=r.n(s),c=r.p+"img/logo-dark.b6da40f8.svg",m=r.p+"img/logo-light.4f99fbd7.svg";const p={id:"nav",class:"sm:container sm:mx-auto"},u={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},g={class:"flex justify-between items-center px-4 sm:px-0"},f={key:0,src:c,class:"w-24",alt:"Dark Logo"},h={key:1,src:m,class:"w-24",alt:"Light Logo"},b={class:"sm:hidden"},x={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},y={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},v={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"};function k(e,t,r,a,n,i){const l=(0,o.up)("router-link"),s=(0,o.up)("AppHeaderLinks"),d=(0,o.up)("HireMeModal");return(0,o.wg)(),(0,o.iD)("nav",p,[(0,o._)("div",u,[(0,o._)("div",g,[(0,o._)("div",null,[(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>["light"===n.theme?((0,o.wg)(),(0,o.iD)("img",f)):((0,o.wg)(),(0,o.iD)("img",h))])),_:1})]),(0,o._)("div",b,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>n.isOpen=!n.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,o.wg)(),(0,o.iD)("svg",x,[n.isOpen?((0,o.wg)(),(0,o.iD)("path",y)):(0,o.kq)("",!0),n.isOpen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("path",v))]))])])]),(0,o.Wm)(s,{showModal:i.showModal,isOpen:n.isOpen},null,8,["showModal","isOpen"])]),(0,o.Wm)(d,{showModal:i.showModal,modal:n.modal,categories:n.categories,"aria-modal":"Hire Me Modal"},null,8,["showModal","modal","categories"])])}const w={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},_={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function j(e,t,r,n,i,l){return(0,o.wg)(),(0,o.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>l.toggleTheme&&l.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,o.wg)(),(0,o.iD)("i",w)):((0,o.wg)(),(0,o.iD)("i",_))])}var D={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("themeChanged",e),this.$router.go()}}},S=r(744);const A=(0,S.Z)(D,[["render",j]]);var M=A;const T=e=>((0,o.dD)("data-v-fdf9743a"),e=e(),(0,o.Cn)(),e),O={class:"font-general-regular fixed inset-0 z-30"},C={class:"flex flex-col items-center justify-center h-full w-full"},P={class:"modal-wrapper flex items-center z-30"},H={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},W={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},z=T((()=>(0,o._)("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," Que tipo de projeto você precisa? ",-1))),Z=T((()=>(0,o._)("i",{"data-feather":"x"},null,-1))),F=[Z],E={class:"modal-body p-5 w-full h-full"},q={class:"max-w-xl m-4 text-left"},I=T((()=>(0,o._)("div",{class:"mt-0"},[(0,o._)("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"text",required:"",placeholder:"Nome","aria-label":"Nome"})],-1))),B=T((()=>(0,o._)("div",{class:"mt-6"},[(0,o._)("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"})],-1))),L={class:"mt-6"},U={class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"subject",name:"subject",type:"text",required:"","aria-label":"Categoria do Projeto"},N=["value"],K=T((()=>(0,o._)("div",{class:"mt-6"},[(0,o._)("textarea",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Detalhes",placeholder:"Descrição do projeto"})],-1))),R={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"};function Y(e,t,r,i,l,s){const d=(0,o.up)("Button");return(0,o.wg)(),(0,o.j4)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",O,[(0,o.wy)((0,o._)("div",{onClick:t[0]||(t[0]=e=>r.showModal()),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[a.F8,r.modal]]),(0,o._)("main",C,[(0,o.Wm)(a.uT,{name:"fade-up-down"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",P,[(0,o._)("div",H,[(0,o._)("div",W,[z,(0,o._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[1]||(t[1]=e=>r.showModal())},F)]),(0,o._)("div",E,[(0,o._)("form",q,[I,B,(0,o._)("div",L,[(0,o._)("select",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.categories,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e.value},(0,n.zw)(e.name),9,N)))),128))])]),K])]),(0,o._)("div",R,[(0,o.Wm)(d,{title:"enviar",class:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-pink-500 hover:bg-pink-600 rounded-md focus:ring-1 focus:ring-pink-900 duration-500",type:"submit","aria-label":"Submit Request"})])])],512),[[a.F8,r.modal]])])),_:1})])],512),[[a.F8,r.modal]])])),_:1})}function G(e,t,r,a,i,l){return(0,o.wg)(),(0,o.iD)("button",null,(0,n.zw)(r.title),1)}var J={props:["title"],data:()=>({})};const Q=(0,S.Z)(J,[["render",G]]);var $=Q,V={props:["showModal","modal","categories"],components:{Button:$},data(){return{}},mounted(){d().replace()},updated(){d().replace()},methods:{}};const X=(0,S.Z)(V,[["render",Y],["__scopeId","data-v-fdf9743a"]]);var ee=X;const te=(0,o.Uk)("Skills"),re=(0,o.Uk)("Projects"),ae=(0,o.Uk)("About Me"),oe=(0,o.Uk)("Contact"),ne=(0,o._)("div",{class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"},null,-1);function ie(e,t,r,a,i,l){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,o.Wm)(s,{to:"/skills",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Skils"},{default:(0,o.w5)((()=>[te])),_:1}),(0,o.Wm)(s,{to:"/projects",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Projects"},{default:(0,o.w5)((()=>[re])),_:1}),(0,o.Wm)(s,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,o.w5)((()=>[ae])),_:1}),(0,o.Wm)(s,{to:"/contact",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:(0,o.w5)((()=>[oe])),_:1}),ne],2)}var le={props:["showModal","isOpen"]};const se=(0,S.Z)(le,[["render",ie]]);var de=se,ce={components:{ThemeSwitcher:M,HireMeModal:ee,AppHeaderLinks:de},data(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Application"},{id:2,value:"mobile",name:"Mobile Application"},{id:3,value:"ui-ux",name:"UI/UX Design"},{id:4,value:"branding",name:"Branding & Anim"}]}},created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme(e){this.theme=e},showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated(){d().replace()}};const me=(0,S.Z)(ce,[["render",k],["__scopeId","data-v-2718982f"]]);var pe=me;const ue={class:"container mx-auto"},ge={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},fe={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},he=(0,o._)("p",{class:"font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," Follow Me ",-1),be={class:"flex gap-4 sm:gap-8"},xe=["href"],ye=["data-feather"];function ve(e,t,r,a,n,i){const l=(0,o.up)("FooterCopyright");return(0,o.wg)(),(0,o.iD)("div",ue,[(0,o._)("div",ge,[(0,o._)("div",fe,[he,(0,o._)("ul",be,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.socials,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[(0,o._)("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,ye)],8,xe)))),128))])]),(0,o.Wm)(l)])])}const ke={class:"flex justify-center items-center text-center"},we={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},_e={class:"font-general-medium hover:underline hover:text-pink-600 dark:hover:text-pink-300 duration-500"},je=(0,o.Uk)(" - developed by "),De={class:"font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-pink-600 dark:hover:text-pink-300 duration-500"};function Se(e,t,r,a,i,l){return(0,o.wg)(),(0,o.iD)("div",ke,[(0,o._)("div",we,[(0,o.Uk)(" © "+(0,n.zw)(e.copyrightDate)+" ",1),(0,o._)("span",_e,(0,n.zw)(e.projectName),1),je,(0,o._)("span",De,(0,n.zw)(e.author),1)])])}var Ae={data:()=>({copyrightDate:(new Date).getFullYear(),projectName:"Portfolio",author:"Dhaval Patel"})};const Me=(0,S.Z)(Ae,[["render",Se]]);var Te=Me,Oe={components:{FooterCopyright:Te},data(){return{socials:[{id:2,name:"Github",icon:"github",url:"https://github.com/dhaval15"},{id:3,name:"Quirky Comma",icon:"globe",url:"https://www.quirkycomma.com"},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/dhavalpatel1729"}]}},mounted(){d().replace()},updated(){d().replace()}};const Ce=(0,S.Z)(Oe,[["render",ve]]);var Pe=Ce,He={components:{AppHeader:pe,AppFooter:Pe},data:()=>({appTheme:localStorage.getItem("theme")}),mounted(){d().replace()},updated(){d().replace()}};const We=(0,S.Z)(He,[["render",l]]);var ze=We,Ze=r(201);const Fe={class:"container mx-auto"};function Ee(e,t,r,a,n,i){const l=(0,o.up)("AppBanner"),s=(0,o.up)("SkillsGrid"),d=(0,o.up)("ProjectsGrid");return(0,o.wg)(),(0,o.iD)("div",Fe,[(0,o.Wm)(l,{class:"mb-5 sm:mb-8"}),(0,o.Wm)(s),(0,o.Wm)(d)])}var qe=r.p+"img/developer.23499344.svg";const Ie={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},Be={class:"w-full md:w-1/3 text-left"},Le={class:"font-general-semibold text-4xl md:text-4xl xl:text-6xl text-center sm:text-left text-ternary-dark dark:text-primary-light"},Ue=(0,o._)("div",{class:"flex justify-center sm:block"},[(0,o._)("a",{download:"Dhaval-Resume.pdf",href:"/files/Dhaval-Resume.pdf",class:"flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-pink-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-pink-50 focus:ring-1 focus:ring-pink-900 hover:bg-pink-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume"},[(0,o._)("i",{"data-feather":"arrow-down-circle",class:"ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"}),(0,o._)("span",{class:"text-sm sm:text-lg font-general-medium duration-100"},"download cv")])],-1),Ne=(0,o._)("div",{class:"w-full md:w-2/3 text-right float-right"},[(0,o._)("img",{src:qe,alt:"enviar"})],-1);function Ke(e,t,r,a,i,l){const s=(0,o.up)("subtitle");return(0,o.wg)(),(0,o.iD)("section",Ie,[(0,o._)("div",Be,[(0,o._)("h1",Le,(0,n.zw)(e.greeting),1),(0,o.Wm)(s,{class:"font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.role),1)])),_:1}),Ue]),Ne])}var Re={name:"Home",data:()=>({theme:"",greeting:"Hi! I am Dhaval",role:"A Data Analyst and Full Stack Developer"}),created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},updated(){d().replace()},methods:{}};const Ye=(0,S.Z)(Re,[["render",Ke]]);var Ge=Ye,Je=r(344),Qe=r(931),$e={name:"Home",components:{AppBanner:Ge,ProjectsGrid:Je.Z,SkillsGrid:Qe.Z}};const Ve=(0,S.Z)($e,[["render",Ee]]);var Xe=Ve;const et=[{path:"/",name:"Home",component:Xe,meta:{title:"Portfolio"}},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,920)),meta:{title:"About Me"}},{path:"/skills",name:"Skills",component:()=>r.e(176).then(r.bind(r,132)),meta:{title:"Skills"}},{path:"/projects",name:"Projects",component:()=>r.e(176).then(r.bind(r,773)),meta:{title:"Projects"}},{path:"/projects/single-project",name:"Single Project",component:()=>r.e(176).then(r.bind(r,434)),meta:{title:"anapp - Single Project"}},{path:"/contact",name:"Contact",component:()=>r.e(176).then(r.bind(r,308)),meta:{title:"Contact"}}],tt=(0,Ze.p7)({history:(0,Ze.r5)("/"),routes:et,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var rt=tt;tt.beforeEach(((e,t,r)=>{const a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),n=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(a?document.title=a.meta.title:n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return r();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()}));var at=r(617);const ot=r(508);ot.replace(),(0,a.ri)(ze).use(rt).use(at.Z).mount("#app");const nt=localStorage.getItem("theme");"dark"===nt&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},344:function(e,t,r){r.d(t,{Z:function(){return W}});var a=r(252),o=r(577);const n={class:"pt-10 sm:pt-14"},i={class:"text-center",style:{"padding-bottom":"20px"}},l={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},s=(0,a._)("div",{height:"32px"},null,-1),d={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function c(e,t,r,c,m,p){const u=(0,a.up)("ProjectSingle");return(0,a.wg)(),(0,a.iD)("section",n,[(0,a._)("div",i,[(0,a._)("p",l,(0,o.zw)(e.projectsHeading),1)]),s,(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.projects,(e=>((0,a.wg)(),(0,a.j4)(u,{key:e.id,project:e},null,8,["project"])))),128))])])}var m=r(508),p=r.n(m);const u=["name","id"],g=(0,a._)("option",{value:"",class:"text-sm sm:text-md"},"Todos",-1),f=["value"];function h(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("select",{onChange:t[0]||(t[0]=t=>e.$emit("filter",t.target.value)),name:r.select,id:r.select,class:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[g,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.selectOptions,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e,class:"sm:text-md"},(0,o.zw)(e),9,f)))),128))],40,u)}var b={props:{select:{type:String,default:"projects",required:!0},selectOptions:{type:Array,default:()=>["Web Application","Mobile Application","UI/UX Design","Branding & Anim"]}}},x=r(744);const y=(0,x.Z)(b,[["render",h]]);var v=y;const k=["href"],w=["src","alt"],_={class:"text-center px-4 py-6"},j={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},D={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function S(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("a",{href:r.project.source,style:{"background-color":"#fffbfa"},class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},[(0,a._)("div",null,[(0,a._)("img",{src:r.project.img,alt:r.project.title,style:{"object-fit":"cover"},class:"rounded-t-xl border-none"},null,8,w)]),(0,a._)("div",_,[(0,a._)("p",j,(0,o.zw)(r.project.title),1),(0,a._)("span",D,(0,o.zw)(r.project.category),1)])],8,k)}var A={props:["project"]};const M=(0,x.Z)(A,[["render",S]]);var T=M;const O=[{id:1,title:"Flutter Prototype",category:"Web Application",img:r(656),source:"https://github.com/dhaval15/prototype",demo:"https://dhaval15.github.io/prototype.io/"},{id:2,title:"Customer Review Analysis",category:"Sentiment Analysis",img:r(892),source:"/analysis.html",demo:"demo-link"},{id:3,title:"Epub Reader",category:"Mobile Application",img:r(687),source:"https://github.com/dhaval15/prowords",demo:"playstore - link"},{id:4,title:"Todo App with Flutter",category:"Mobile Application",img:r(274),source:"https://github.com/dhaval15/todo",demo:"https://play.google.com/store/apps/details?id=com.brokenglass.todo"}];var C=O,P={components:{ProjectSingle:T,ProjectsFilter:v},data:()=>({projects:C,projectsHeading:"Projects"}),mounted(){p().replace()}};const H=(0,x.Z)(P,[["render",c]]);var W=H},931:function(e,t,r){r.d(t,{Z:function(){return _}});var a=r(252),o=r(577);const n={class:"pt-10 sm:pt-14"},i={class:"text-center",style:{"padding-bottom":"20px"}},l={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},s={class:"grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mt-6 sm:gap-8"};function d(e,t,r,d,c,m){const p=(0,a.up)("SkillSingle");return(0,a.wg)(),(0,a.iD)("section",n,[(0,a._)("div",i,[(0,a._)("p",l,(0,o.zw)(e.skillsHeading),1)]),(0,a._)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.skills,(e=>((0,a.wg)(),(0,a.j4)(p,{key:e.id,skill:e},null,8,["skill"])))),128))])])}const c=[{id:1,name:"Android SDK",icon:r(500)},{id:2,name:"Data Analysis",icon:r(236)},{id:3,name:"Docker",icon:r(820)},{id:4,name:"Firebase",icon:r(732)},{id:5,name:"Flutter",icon:r(950)},{id:6,name:"Java",icon:r(712)},{id:7,name:"Kafka",icon:r(352)},{id:8,name:"Kotlin",icon:r(901)},{id:9,name:"MongoDB",icon:r(159)},{id:10,name:"Python",icon:r(569)},{id:11,name:"R",icon:r(673)},{id:12,name:"Spark",icon:r(518)},{id:13,name:"SQL",icon:r(783)},{id:14,name:"Tableau",icon:r(291)},{id:15,name:"TensorFlow",icon:r(843)},{id:16,name:"ReactJs",icon:r(406)},{id:17,name:"VueJs",icon:r(221)}];var m=c;const p={style:{"background-color":"#fff0eb","border-radius":"50%",padding:"28%","aspect-ratio":"1",alignment:"center"}},u=["src","alt"],g={class:"text-center px-4 py-6"},f={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"};function h(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",p,[(0,a._)("img",{src:r.skill.icon,alt:r.skill.name,class:"rounded-t-l border-none",style:{display:"block"}},null,8,u)]),(0,a._)("div",g,[(0,a._)("p",f,(0,o.zw)(r.skill.name),1)])])}var b={props:["skill"]},x=r(744);const y=(0,x.Z)(b,[["render",h]]);var v=y,k={components:{SkillSingle:v},data:()=>({skills:m,skillsHeading:"Skills"})};const w=(0,x.Z)(k,[["render",d]]);var _=w},236:function(e,t,r){e.exports=r.p+"img/analysis.48c94ada.svg"},500:function(e,t,r){e.exports=r.p+"img/android.16eeb441.svg"},820:function(e,t,r){e.exports=r.p+"img/docker.05316927.svg"},732:function(e,t,r){e.exports=r.p+"img/firebase.2ddaef40.svg"},950:function(e,t,r){e.exports=r.p+"img/flutter.93fd3165.svg"},712:function(e,t,r){e.exports=r.p+"img/java.dba13a2f.svg"},352:function(e,t,r){e.exports=r.p+"img/kafka.49c422ee.svg"},901:function(e,t,r){e.exports=r.p+"img/kotlin.f2a6d799.svg"},159:function(e,t,r){e.exports=r.p+"img/mongodb.82bd8e65.svg"},569:function(e,t,r){e.exports=r.p+"img/python.66161dc9.svg"},673:function(e,t,r){e.exports=r.p+"img/r.e53b5f33.svg"},406:function(e,t,r){e.exports=r.p+"img/reactjs.80c4bf2c.svg"},518:function(e,t,r){e.exports=r.p+"img/spark.16e997a4.svg"},783:function(e,t,r){e.exports=r.p+"img/sql.6701e598.svg"},291:function(e,t,r){e.exports=r.p+"img/tableau.8eb27dfe.svg"},843:function(e,t,r){e.exports=r.p+"img/tensorflow.829a3627.svg"},221:function(e,t,r){e.exports=r.p+"img/vuejs.b63e3430.svg"},892:function(e,t,r){e.exports=r.p+"img/analysis.49840d70.png"},687:function(e,t,r){e.exports=r.p+"img/mobile-project-2.9bd76372.jpg"},656:function(e,t,r){e.exports=r.p+"img/prototype.337f7ada.png"},274:function(e,t,r){e.exports=r.p+"img/todo.6010312e.png"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var l=!0,s=0;s<a.length;s++)(!1&n||i>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+{176:"projects",443:"about"}[e]+"."+{176:"ba6dd676",443:"b8d5baaf"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuejs-tailwindcss-portfolio:";r.l=function(a,o,n,i){if(e[a])e[a].push(o);else{var l,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+n){l=m;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+n),l.src=a),e[a]=[o];var p=function(t,r){l.onerror=l.onload=null,clearTimeout(u);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=n);var i=r.p+r.u(t),l=new Error,s=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,i=a[0],l=a[1],s=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(a);d<i.length;d++)n=i[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(286)}));a=r.O(a)})();
//# sourceMappingURL=app.075e74a8.js.map