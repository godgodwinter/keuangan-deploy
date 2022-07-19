import{A as h}from"./apiKategori.600db38e.js";import{u as g}from"./admin.959ac1b5.js";import{F as r,f as c,a as k}from"./babengValidasi.8b3f3243.js";import{d as w,j as y,N as j,r as u,o as _,a as p,b as e,f as o,w as i,e as a,t as f,K as V,F as K,g as A}from"./index.1a86910d.js";import{T as S}from"./Toast.d8d4c2d8.js";import"./style.9725afdb.js";const F={class:"pt-4 px-5 md:flex justify-between"},P=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"}," Tambah Kategori ")],-1),N={class:"md:py-0 py-4 space-x-2 space-y-2"},C=e("button",{class:"btn btn-secondary btn-sm"},"Kembali",-1),D={key:0,class:"px-4 py-4"},T={class:"w-full"},B={class:"shadow rounded-lg px-0"},J={class:"w-full lg:w-fi mx-4"},R={class:"p-2 sm:p-6 xl:p-8"},U={class:"pt-0 px-0"},E={class:"w-full mx-0"},I={class:"rounded-lg"},q={class:"grid md:grid-cols-2 gap-2"},z=e("label",{for:"kategori",class:"text-sm font-medium block mb-2"},"Nama Kategori ",-1),G={class:"text-xs text-red-600 mt-1"},H=e("label",{for:"nominal",class:"text-sm font-medium block mb-2"},"Jenis Kategori",-1),L=e("option",{disabled:"",selected:""},"Jenis?",-1),M=e("option",{value:"Pemasukan"},"Pemasukan",-1),O=e("option",{value:"Pengeluaran"},"Pengeluaran",-1),Q={class:"text-xs text-red-600 mt-1"},W=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),ne=w({__name:"KategoriTambah",setup(X){const b=y(),l=j().params.jenis;g().setPagesActive("kategori"),u([]);const s=u([]);s.value.jenis=l||"Pemasukan";const v=async d=>{await h.doStoreData(d)&&(S.success("Info","Data berhasil ditambahkan!"),b.push({name:"AdminKategori"}))};return(d,t)=>{const x=A("router-link");return _(),p(K,null,[e("div",F,[P,e("div",N,[o(x,{to:{name:"AdminKategori"}},{default:i(()=>[C]),_:1})])]),s.value?(_(),p("div",D,[e("div",T,[e("div",B,[e("div",J,[e("div",R,[o(a(k),{onSubmit:v},{default:i(({errors:m})=>[e("div",U,[e("div",E,[e("div",I,[e("div",q,[e("div",null,[z,o(a(r),{rules:a(c).validateData2,modelValue:s.value.nama,"onUpdate:modelValue":t[0]||(t[0]=n=>s.value.nama=n),name:"nama",type:"text",class:"input input-bordered w-11/12"},null,8,["rules","modelValue"]),e("div",G,f(m.nama),1)]),e("div",null,[H,o(a(r),{rules:a(c).validateSelect,modelValue:s.value.jenis,"onUpdate:modelValue":t[1]||(t[1]=n=>s.value.jenis=n),name:"jenis",class:"select select-bordered w-11/12",as:"select"},{default:i(()=>[L,M,O]),_:1},8,["rules","modelValue"]),e("div",Q,f(m.jenis),1)])]),W])])])]),_:1})])])])])])):V("",!0)],64)}}});export{ne as default};
