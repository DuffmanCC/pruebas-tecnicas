(()=>{var e={};e.id=220,e.ids=[220],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7310:e=>{"use strict";e.exports=require("url")},5843:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=t(7096),a=t(6132),n=t(7284),i=t.n(n),l=t(2564),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let c=["",{children:["items",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,4066)),"/Users/carlos/Code/pruebas-tecnicas/pruebas/02-bazar-universal/DuffmanCC/app/items/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,4087)),"/Users/carlos/Code/pruebas-tecnicas/pruebas/02-bazar-universal/DuffmanCC/app/items/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,5345)),"/Users/carlos/Code/pruebas-tecnicas/pruebas/02-bazar-universal/DuffmanCC/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/carlos/Code/pruebas-tecnicas/pruebas/02-bazar-universal/DuffmanCC/app/items/page.tsx"],u="/items/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/items/page",pathname:"/items",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3920:(e,s,t)=>{Promise.resolve().then(t.bind(t,4510))},4510:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>ProductsList});var r=t(784),a=t(371),n=t(1440),i=t.n(n),l=t(9885),o=t(5321),c=t(779),d=t(8739),u=t(2451),p=t.n(u);function ProductCard({product:e}){return(0,r.jsxs)("article",{className:"flex gap-4 items-start",children:[r.jsx("div",{className:"w-1/3 flex justify-center",children:r.jsx(p(),{src:e.thumbnail,alt:e.title,width:"150",height:"150",className:"object-cover auto aspect-square rounded-full overflow-hidden"})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2 w-2/3 relative",children:[r.jsx("h2",{className:"font-bold text-xl",children:e.title}),r.jsx("p",{className:"text-sm",children:e.description}),(0,r.jsxs)("div",{className:"font-bold flex gap-2 items-center",children:[r.jsx("div",{className:"text-xl",children:(0,d.F)(e.price)}),r.jsx(c.Z,{rating:e.rating})]})]})]})}function ProductsList({items:e}){let{addProductToCart:s}=(0,l.useContext)(a.A);function handleClick(e){s(e)}return r.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e?.map(e=>r.jsxs("li",{className:"relative pr-10",children:[r.jsx(i(),{href:`/items/${e.id}`,children:r.jsx(ProductCard,{product:e},e.id)}),r.jsx("button",{className:"absolute right-0 top-0 z-10 border rounded-full w-10 h-10 flex justify-center items-center",onClick:()=>handleClick(e),children:r.jsx(o._3,{width:"30"})})]},e.id))})}},4066:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>Items});var r=t(4656),a=t(5153);let n=(0,a.createProxy)(String.raw`/Users/carlos/Code/pruebas-tecnicas/pruebas/02-bazar-universal/DuffmanCC/components/ProductsList.tsx`),{__esModule:i,$$typeof:l}=n,o=n.default;function Badge({category:e,color:s}){return(0,r.jsxs)("div",{className:["px-4 py-2 ",s].join(""),children:[e.name," - ",e.count]})}function getCategories(e){let s=e?.map(e=>e.category);return s?Object.entries(s.reduce((e,s)=>(e[s]=(e[s]||0)+1,e),{})).map(([e,s])=>({name:e,count:s})):[]}let c={smartphones:"bg-purple-300",laptops:"bg-blue-300",fragrances:"bg-yellow-300",skincare:"bg-green-300",groceries:"bg-red-300","home-decoration":"bg-indigo-300"};function Results({items:e,query:s}){let t=getCategories(e);return(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[s&&(0,r.jsxs)("div",{className:"font-bold",children:["Resultados de b\xfasqueda de ",s,": ",e.length]}),r.jsx("div",{className:"flex gap-4 flex-wrap",children:t.map(e=>r.jsx(Badge,{category:e,color:c[e.name]},e.name))})]})}var d=t(7590);async function Items({searchParams:e}){let{search:s}=e,t=await (0,d.t)(s)||[];return(0,r.jsxs)("div",{className:"flex flex-col gap-8",children:[r.jsx("h1",{className:"sr-only",children:"Lista de productos en nuestro bazar"}),r.jsx(Results,{items:t,query:s}),r.jsx(o,{items:t})]})}}};var s=require("../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),t=s.X(0,[472,49,977,117],()=>__webpack_exec__(5843));module.exports=t})();