import{F as _}from"./CFooter.f2885db4.js";import{d,u as b,c as f,r as h,o,a as t,b as e,e as v,n as k,f as c,F as x,g as w}from"./index.1a86910d.js";import"./plugin-vue_export-helper.21dcd24c.js";const g={class:"static"},y={class:"flex lg:justify-center px-10 mx-4 overflow-auto w-full justify-center"},z=e("button",{class:"font-normal text-sm hover:link my-1 block capitalize px-4 border-r inline-block border-r-white last:border-none leading-tight"}," Home ",-1),B={class:"h-6",viewBox:"0 0 24 24",style:{fill:"none",stroke:"currentcolor"}},C=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),L=[C],M=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})],-1),T=[M],j=d({__name:"NavBar",setup(m){const a=b(),i=f(()=>a.getTheme),n=r=>{a.setTheme(r)},l=h(0),p=r=>{l.value=r.target.documentElement.scrollTop};return window.addEventListener("scroll",p),(r,s)=>(o(),t("div",g,[e("div",{class:k(["fixed z-50 font-serif font-semibold text-sm py-2 text-center px-4 w-full",{"bg-base-content border-b border-none text-base-100  ":l.value>10,"bg-base-content bg-opacity-20 border-b text-primary-content border-white border-opacity-40":l.value<10}])},[e("div",y,[z,v(i)=="cupcake"?(o(),t("button",{key:0,onClick:s[0]||(s[0]=u=>n("dark")),class:"font-normal text-sm hover:link my-1 block capitalize px-4 border-r last:border-none"},[(o(),t("svg",B,L))])):(o(),t("button",{key:1,onClick:s[1]||(s[1]=u=>n("cupcake")),class:"font-normal text-sm hover:link my-1 block capitalize px-4 border-r last:border-none"},T))])],2)]))}}),V=d({__name:"LandingLayout",setup(m){return(a,i)=>{const n=w("router-view");return o(),t(x,null,[c(j),c(n),c(_)],64)}}});export{V as default};
