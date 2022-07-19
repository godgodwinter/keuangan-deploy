import{m as f,l as E,A as K,F as B}from"./apiTransaksi.bbca41b3.js";import{u as R,A as $}from"./apiKategori.600db38e.js";import{u as H}from"./admin.959ac1b5.js";import{T as j}from"./Toast.d8d4c2d8.js";import{F as m,f as P,a as L}from"./babengValidasi.8b3f3243.js";import{d as J,c as q,r as u,j as G,N as O,o as F,a as A,b as e,n as b,f as n,w as h,e as i,t as c,S as Q,K as W,F as X,g as S}from"./index.1a86910d.js";import"./style.9725afdb.js";const Z={class:"w-full py-4 px-2 flex justify-center"},ee={class:"tabs"},ae={key:0,class:"px-4 py-4"},te={class:"w-full"},le={class:"shadow rounded-lg px-0"},se={class:"w-full lg:w-fi mx-4"},oe={class:"p-2 sm:p-6 xl:p-8"},ne={class:"pt-0 px-0"},ie={class:"w-full mx-0"},re={class:"rounded-lg"},de={class:"grid md:grid-cols-2 gap-2"},ue=e("label",{for:"name",class:"text-sm font-medium block mb-2"},"Tanggal",-1),me={class:"text-xs text-red-600 mt-1"},ce={class:"flex space-x-2"},ve=e("label",{for:"kategori",class:"text-sm font-medium block mb-2"},"Kategori ",-1),pe=e("span",{class:"hover:link"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 fill-current",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),e("path",{"fill-rule":"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z","clip-rule":"evenodd"})])],-1),ge={class:"text-xs text-red-600 mt-1"},_e=e("label",{for:"nominal",class:"text-sm font-medium block mb-2"},"Jumlah / Nominal",-1),fe={class:"text-xs text-red-600 mt-1"},be=e("label",{for:"desc",class:"text-sm font-medium block mb-2"},"Keterangan",-1),he={class:"text-xs text-red-600 mt-1"},ke=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),Ie=J({__name:"TransaksiEdit",setup(xe){const k=R(),x=q(()=>k.getData),r=u([]);k.$subscribe((l,t)=>{v("Pengeluaran")}),r.value=x.value,$.getData();const v=l=>{r.value=x.value.filter(t=>t.jenis===l),g.value=[],r.value.forEach(t=>{g.value.push({label:t.nama,id:t.id})}),a.value.kategori_id={label:r.value[0].nama,id:r.value[0].id}};f.updateLocale("id",E);const w=G(),y=O().params.id;H().setPagesActive("transaksi");const a=u([]),I=new Intl.DateTimeFormat("id",{month:"long"});let p=new Date;p.getDate();let D=p.getMonth(),V=p.getFullYear();I.format(new Date(V,D)),f().format("DD MMMM YYYY"),a.value.tgl=f().format("YYYY-MM-DD"),a.value.jenis="Pengeluaran",new Date(V,D,0).getDate();const g=u([]),M=async l=>{a.value.jenis="Pengeluaran",a.value.kategori_id=null,v("Pengeluaran")},Y=async l=>{a.value.jenis="Pemasukan",a.value.kategori_id=null,v("Pemasukan")},_=u([]),C=l=>{a.value.kategori_id==null?_.value.kategori_id="Kategori harus diisi":(_.value.kategori_id="",l.nominal=l.nominal.replace(/\D/g,""),l.kategori_id=a.value.kategori_id.id,l.kategori_nama=a.value.kategori_id.label,T(l))},T=async l=>{await K.doUpdate(y,l)&&(j.success("Info","Data berhasil ditambahkan!"),w.push({name:"AdminTransaksi"}))},N=()=>{const l=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}),t=a.value.nominal.replace(/\D/g,"");a.value.nominal=l.format(t)},o=u(null);return(async()=>{o.value=await K.getDataId(y),o.value?(a.value.tgl=o.value.tgl,a.value.jenis=o.value.jenis,a.value.kategori_id={label:o.value.kategori_nama,id:o.value.kategori_id},a.value.nominal=B.rupiah(o.value.nominal),a.value.nama=o.value.nama):(j.warning("Info","Data tidak ditemukan"),w.push({name:"AdminKategori"}))})(),(l,t)=>{const U=S("router-link"),z=S("v-select");return F(),A(X,null,[e("div",Z,[e("div",ee,[e("a",{class:b(["tab tab-bordered",{"tab-active":a.value.jenis=="Pengeluaran"}]),onClick:t[0]||(t[0]=d=>M())},"Pengeluaran",2),e("a",{class:b(["tab tab-bordered",{"tab-active":a.value.jenis=="Pemasukan"}]),onClick:t[1]||(t[1]=d=>Y())},"Pemasukan",2)])]),a.value?(F(),A("div",ae,[e("div",te,[e("div",le,[e("div",se,[e("div",oe,[n(i(L),{onSubmit:C},{default:h(({errors:d})=>[e("div",ne,[e("div",ie,[e("div",re,[e("div",de,[e("div",null,[ue,n(i(m),{modelValue:a.value.jenis,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value.jenis=s),name:"jenis",type:"hidden",class:"input input-bordered w-11/12"},null,8,["modelValue"]),n(i(m),{rules:i(P).validateData2,modelValue:a.value.tgl,"onUpdate:modelValue":t[3]||(t[3]=s=>a.value.tgl=s),name:"tgl",type:"date",class:"input input-bordered w-11/12"},null,8,["rules","modelValue"]),e("div",me,c(d.tgl),1)]),e("div",null,[e("div",ce,[ve,n(U,{to:{name:"AdminKategori"}},{default:h(()=>[pe]),_:1})]),n(z,{class:b(["input py-2 px-3 w-11/12 style-chooser",{disabled:!1}]),options:g.value,modelValue:a.value.kategori_id,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value.kategori_id=s)},null,8,["options","modelValue"]),e("div",ge,c(_.value.kategori_id),1)]),e("div",null,[_e,n(i(m),{rules:i(P).validateData2,modelValue:a.value.nominal,"onUpdate:modelValue":t[5]||(t[5]=s=>a.value.nominal=s),name:"nominal",type:"text",class:"input input-bordered w-11/12",onKeyup:t[6]||(t[6]=s=>N())},null,8,["rules","modelValue"]),e("div",fe,c(d.nominal),1)]),e("div",null,[be,n(i(m),{modelValue:a.value.nama,"onUpdate:modelValue":t[7]||(t[7]=s=>a.value.nama=s),name:"nama",type:"text",class:"input input-bordered w-11/12"},{default:h(({field:s})=>[e("textarea",Q(s,{class:"textarea textarea-bordered w-11/12 h-24",placeholder:"Keterangan"}),null,16)]),_:1},8,["modelValue"]),e("div",he,c(d.nama),1)])]),ke])])])]),_:1})])])])])])):W("",!0)],64)}}});export{Ie as default};
