import{f as U,m as Y,r as d,a as B,o as u,c as m,e as o,u as n,b as e,n as x,w as D,t as v,p as G,k as z,F as M,T as k,l as P,_ as j}from"./index-874961e1.js";import{F as O}from"./FungsiCampur-7ab25e59.js";import{A as y}from"./axios-36c6ef57.js";import{F as _,f as E,a as W}from"./babengValidasi-bfa39bd4.js";import"./adminRekapStore-2b4f886e.js";import{m as F,l as J}from"./id-c081905c.js";const q=e("div",{class:"pt-4 px-5 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm uppercase"}," Edit ")]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),H={key:0},Q={key:1},X={key:2},Z={class:"w-full py-4 px-2 flex justify-center"},aa={class:"tabs"},ea={key:0,class:"px-4 py-4"},ta={class:"w-full"},sa={class:"shadow rounded-lg px-0"},la={class:"w-full lg:w-fi mx-4"},na={class:"p-2 sm:p-6 xl:p-8"},oa={class:"pt-0 px-0"},ia={class:"w-full mx-0"},da={class:"rounded-lg"},ra={class:"grid md:grid-cols-2 gap-2"},ua=e("label",{for:"name",class:"text-sm font-medium block mb-2"},"Tanggal",-1),ma={class:"text-xs text-red-600 mt-1"},ca=e("div",{class:"flex space-x-2"},[e("label",{for:"kategori",class:"text-sm font-medium block mb-2"},"Kategori ")],-1),pa={class:"text-xs text-red-600 mt-1"},va=e("label",{for:"nominal",class:"text-sm font-medium block mb-2"},"Jumlah / Nominal",-1),_a={class:"text-xs text-red-600 mt-1"},ga=e("label",{for:"desc",class:"text-sm font-medium block mb-2"},"Keterangan",-1),fa={class:"text-xs text-red-600 mt-1"},ba=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),ja={__name:"AdminTransaksiEdit",setup(xa){F.updateLocale("id",J);const K=U(),S=Y(),A=P(()=>j(()=>import("./AlertLoading-7b920e5a.js"),["assets/AlertLoading-7b920e5a.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-874961e1.js","assets/index-61019a89.css"])),C=P(()=>j(()=>import("./AlertFailed-14583794.js"),["assets/AlertFailed-14583794.js","assets/index-874961e1.js","assets/index-61019a89.css"])),h=d([]),c=d([]),t=d([]),g=d([]),f=d([]),i=d(!0),b=d(!1);t.value.tgl=F().format("YYYY-MM-DD"),t.value.jenis="Pengeluaran";const w=S.params.transaksi_id;(async s=>{try{i.value=!0;const a=await y.get(`admin/transaksi/${s}`);t.value=a.data,t.value.nominal=O.formatRupiah(a.data.nominal),p(t.value.jenis),i.value=!1}catch(a){i.value=!1,b.value=!0,k.danger("Warning","Data Gagal dimuat"),console.error(a)}})(w);const p=async(s="Pengeluaran")=>{try{i.value=!0;const a=await y.get(`admin/data_kategori/jenis?jenis=${s}`);h.value=a.data,I(s),i.value=!1}catch(a){i.value=!1,b.value=!0,k.danger("Warning","Data Gagal dimuat"),console.error(a)}},I=s=>{c.value=h.value,g.value=[],c.value.forEach(a=>{g.value.push({label:a.nama,id:a.id})}),t.value.kategori_id={label:c.value[0].nama,id:c.value[0].id}};p("Pengeluaran");const R=async s=>{t.value.jenis="Pengeluaran",t.value.kategori_id=null,await p("Pengeluaran")},N=async s=>{t.value.jenis="Pemasukan",t.value.kategori_id=null,await p("Pemasukan")},T=s=>{t.value.kategori_id==null?f.value.kategori_id="Kategori harus diisi":(f.value.kategori_id="",s.nominal=s.nominal.replace(/\D/g,""),s.kategori_id=t.value.kategori_id.id,s.kategori_nama=t.value.kategori_id.label,$(s))},$=async s=>{console.log(s);let a={tgl:s.tgl,nama:s.nama,nominal:s.nominal,kategori_id:s.kategori_id,jenis:s.jenis};await y.put(`admin/transaksi/${w}`,a)&&(k.success("Info","Data berhasil diupdate!"),K.push({name:"admin-transaksi"}))},L=()=>{const s=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}),a=t.value.nominal.replace(/\D/g,"");t.value.nominal=s.format(a)};return(s,a)=>{const V=B("v-select");return u(),m(M,null,[q,i.value?(u(),m("span",H,[o(n(A))])):b.value?(u(),m("span",Q,[o(n(C),{message:"Gagal mendapatkan response dari server"})])):(u(),m("span",X,[e("div",Z,[e("div",aa,[e("a",{class:x(["tab tab-bordered",{"tab-active":t.value.jenis=="Pengeluaran"}]),onClick:a[0]||(a[0]=r=>R())},"Pengeluaran",2),e("a",{class:x(["tab tab-bordered",{"tab-active":t.value.jenis=="Pemasukan"}]),onClick:a[1]||(a[1]=r=>N())},"Pemasukan",2)])]),t.value?(u(),m("div",ea,[e("div",ta,[e("div",sa,[e("div",la,[e("div",na,[o(n(W),{onSubmit:T},{default:D(({errors:r})=>[e("div",oa,[e("div",ia,[e("div",da,[e("div",ra,[e("div",null,[ua,o(n(_),{modelValue:t.value.jenis,"onUpdate:modelValue":a[2]||(a[2]=l=>t.value.jenis=l),name:"jenis",type:"hidden",class:"input input-bordered w-11/12"},null,8,["modelValue"]),o(n(_),{rules:n(E).validateData2,modelValue:t.value.tgl,"onUpdate:modelValue":a[3]||(a[3]=l=>t.value.tgl=l),name:"tgl",type:"date",class:"input input-bordered w-11/12"},null,8,["rules","modelValue"]),e("div",ma,v(r.tgl),1)]),e("div",null,[ca,o(V,{class:x(["input py-2 px-3 w-11/12 style-chooser",{disabled:!1}]),options:g.value,modelValue:t.value.kategori_id,"onUpdate:modelValue":a[4]||(a[4]=l=>t.value.kategori_id=l)},null,8,["options","modelValue"]),e("div",pa,v(f.value.kategori_id),1)]),e("div",null,[va,o(n(_),{rules:n(E).validateData2,modelValue:t.value.nominal,"onUpdate:modelValue":a[5]||(a[5]=l=>t.value.nominal=l),name:"nominal",type:"text",class:"input input-bordered w-11/12",onKeyup:a[6]||(a[6]=l=>L())},null,8,["rules","modelValue"]),e("div",_a,v(r.nominal),1)]),e("div",null,[ga,o(n(_),{modelValue:t.value.nama,"onUpdate:modelValue":a[7]||(a[7]=l=>t.value.nama=l),name:"nama",type:"text",class:"input input-bordered w-11/12"},{default:D(({field:l})=>[e("textarea",G(l,{class:"textarea textarea-bordered w-11/12 h-24",placeholder:"Keterangan"}),null,16)]),_:1},8,["modelValue"]),e("div",fa,v(r.nama),1)])]),ba])])])]),_:1})])])])])])):z("",!0)]))],64)}}};export{ja as default};
