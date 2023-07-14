import{f as E,m as P,r as n,o as l,c as i,e as d,u as t,b as e,w as v,t as g,k as A,F as S,T as f,l as x,_ as b}from"./index-874961e1.js";import{A as h}from"./axios-36c6ef57.js";import{F as k,f as y,a as F}from"./babengValidasi-bfa39bd4.js";const I=e("div",{class:"pt-4 px-5 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"}," EDIT KATEGORI ")]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),T={key:0},N={key:1},R={key:2},K={key:0,class:"px-4 py-4"},L={class:"w-full"},B={class:"shadow rounded-lg px-0"},C={class:"w-full lg:w-fi mx-4"},G={class:"p-2 sm:p-6 xl:p-8"},O={class:"pt-0 px-0"},J={class:"w-full mx-0"},U={class:"rounded-lg"},$={class:"grid md:grid-cols-2 gap-2"},W=e("label",{for:"kategori",class:"text-sm font-medium block mb-2"},"Nama Kategori ",-1),q={class:"text-xs text-red-600 mt-1"},z=e("label",{for:"nominal",class:"text-sm font-medium block mb-2"},"Jenis Kategori",-1),H=e("option",{disabled:"",selected:""},"Jenis?",-1),M=e("option",{value:"Pemasukan"},"Pemasukan",-1),Q=e("option",{value:"Pengeluaran"},"Pengeluaran",-1),X={class:"text-xs text-red-600 mt-1"},Y=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),ne={__name:"AdminKategoriEdit",setup(Z){const w=E(),_=P().params.kategori_id,V=x(()=>b(()=>import("./AlertLoading-7b920e5a.js"),["assets/AlertLoading-7b920e5a.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-874961e1.js","assets/index-61019a89.css"])),j=x(()=>b(()=>import("./AlertFailed-14583794.js"),["assets/AlertFailed-14583794.js","assets/index-874961e1.js","assets/index-61019a89.css"])),a=n([]);n([]);const r=n();n();const u=n(!0),p=n(!1);a.value.jenis="Pengeluaran",(async()=>{try{u.value=!0;const s=await h.get(`admin/kategori/${_}`);r.value=s.data,a.value.nama=r.value.nama,a.value.jenis=r.value.jenis,console.log(r.value),u.value=!1}catch(s){u.value=!1,p.value=!0,f.danger("Warning","Data Gagal dimuat"),console.error(s)}})();const D=async s=>{console.log(s);let o={nama:s.nama,jenis:s.jenis};await h.put(`admin/kategori/${_}`,o)&&(f.success("Info","Data berhasil di update!"),w.push({name:"admin-kategori"}))};return(s,o)=>(l(),i(S,null,[I,u.value?(l(),i("span",T,[d(t(V))])):p.value?(l(),i("span",N,[d(t(j),{message:"Gagal mendapatkan response dari server"})])):(l(),i("span",R,[a.value?(l(),i("div",K,[e("div",L,[e("div",B,[e("div",C,[e("div",G,[d(t(F),{onSubmit:D},{default:v(({errors:c})=>[e("div",O,[e("div",J,[e("div",U,[e("div",$,[e("div",null,[W,d(t(k),{rules:t(y).validateData2,modelValue:a.value.nama,"onUpdate:modelValue":o[0]||(o[0]=m=>a.value.nama=m),name:"nama",type:"text",class:"input input-bordered w-11/12"},null,8,["rules","modelValue"]),e("div",q,g(c.nama),1)]),e("div",null,[z,d(t(k),{rules:t(y).validateSelect,modelValue:a.value.jenis,"onUpdate:modelValue":o[1]||(o[1]=m=>a.value.jenis=m),name:"jenis",class:"select select-bordered w-11/12",as:"select"},{default:v(()=>[H,M,Q]),_:1},8,["rules","modelValue"]),e("div",X,g(c.jenis),1)])]),Y])])])]),_:1})])])])])])):A("",!0)]))],64))}};export{ne as default};
