import{f as $,i as I,r as m,a as D,o as i,c as d,b as a,t as s,u as o,e as h,w as y,n as R,F as M,L,k as G,T as b,g as K,l as N,_ as C}from"./index-874961e1.js";import{F as v}from"./FungsiCampur-7ab25e59.js";import{A as V}from"./axios-36c6ef57.js";import{m as t,l as O}from"./id-c081905c.js";import{u as U}from"./adminRekapStore-2b4f886e.js";const q={class:"pt-4 px-5 md:flex justify-between"},W={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm uppercase"},J=a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Q={class:"p-4"},X={class:"tabs tabs-boxed"},Z=a("a",{class:"tab tab-active"},"Harian",-1),aa=a("a",{class:"tab"},"Bulanan",-1),ta=a("a",{class:"tab"},"Tahunan",-1),ea={class:"pt-4 px-5 md:flex justify-between"},sa=a("div",null,null,-1),oa={class:"pt-4 px-5 flex justify-center"},na={key:0},la={key:1},ra={key:2},ia={key:0,class:"font-mono"},da={class:"w-full py-6 px-2 flex justify-center shadow"},ca={class:"grid grid-cols-3 w-full text-center"},ua=a("div",{class:"font-bold"},"Pemasukan",-1),ma={class:"text-sky-600"},_a={class:""},ha=a("div",{class:"font-bold"},"Pengeluaran",-1),va={class:"text-red-600"},pa={class:""},fa=a("div",{class:"font-bold"},"Saldo",-1),ya={class:"text-primary-content"},xa={class:"w-full py-4 flex-col justify-center px-4 space-y-4"},ka={class:"grid grid-cols-3 w-full"},ga={class:"grid-cols-1 font-bold border-r-2"},Ma={class:"flex flex-row space-x-2"},ba={class:"text-2xl"},wa={class:"text-right text-sky-600 border-r-2 px-2"},Ya={class:"text-right text-red-600"},Aa={class:"grid grid-cols-3 w-full border-b-2 border-slate-200"},Da={class:"grid-cols-1 border-r-2 flex space-x-2"},Ra=["onClick"],La=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 fill-current",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),Na=[La],Ca={class:"text-md font-semibold font-mono text-teal-600"},Va={class:"border-r-2 px-2"},Pa={class:"font-mono"},ja=["onClick"],Ea=a("button",{class:"btn btn-circle btn-sm w-8 h-8"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})])],-1),Ta=a("div",{class:"divider divide-red-600"},null,-1),Ia={__name:"AdminTransaksi",setup(Ba){t.updateLocale("id",O);const P=$(),j=N(()=>C(()=>import("./AlertLoading-7b920e5a.js"),["assets/AlertLoading-7b920e5a.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-874961e1.js","assets/index-61019a89.css"])),E=N(()=>C(()=>import("./AlertFailed-14583794.js"),["assets/AlertFailed-14583794.js","assets/index-874961e1.js","assets/index-61019a89.css"])),x=U(),_=I(()=>x.getdateNow);_.value===null&&x.setdateNow(t().format("YYYY-MM-DD"));const n=m({monthyear:{month:0,year:0}});n.value.monthyear={month:parseInt(t(_.value).format("MM"))-1,year:parseInt(t(_.value).format("YYYY"))};const k=m([]),u=m([]),w=m([]),p=m(!0),Y=m(!1);m([]);const T=async()=>{n.value.monthyear.month,n.value.monthyear.year,t(n.value.monthyear).format("MMMM YYYY"),t(n.value.monthyear).format("MM"),t(n.value.monthyear).format("Mo"),t(n.value.monthyear).format("MMMM"),t(n.value.monthyear).format("YYYY"),x.setdateNow(t(n.value.monthyear).format("YYYY-MM-DD")),await g()},g=async()=>{try{p.value=!0;let l={month:parseInt(t(_.value).format("MM")),year:parseInt(t(_.value).format("YYYY"))};const r=await V.get(`admin/data_transaksi/detail?month=${l.month}&year=${l.year}`);w.value=r.data,u.value=r.rekap,k.value=w.value,p.value=!1}catch(l){p.value=!1,Y.value=!0,b.danger("Warning","Data Gagal dimuat"),console.error(l)}};g();const B=async(l,r)=>{confirm("Apakah anda yakin menghapus data ini?")&&(await V.delete(`admin/transaksi/${l}`)?(b.success("Info","Data berhasil dihapus!"),g()):b.danger("Info","Data gagal dihapus!"))},S=async(l,r)=>{P.push({name:"admin-transaksi-edit",params:{transaksi_id:l}})};return(l,r)=>{const f=D("RouterLink"),z=D("Datepicker");return i(),d(M,null,[a("div",q,[a("div",null,[a("span",W," REKAP TRANSAKSI HARIAN BULAN "+s(o(t)(_.value).format("MMMM YYYY")),1)]),J]),a("div",Q,[a("div",X,[h(f,{to:{name:"admin-transaksi-harian"}},{default:y(()=>[Z]),_:1}),h(f,{to:{name:"admin-transaksi-bulanan"}},{default:y(()=>[aa]),_:1}),h(f,{to:{name:"admin-transaksi-tahunan"}},{default:y(()=>[ta]),_:1})])]),a("div",ea,[sa,a("div",oa,[h(z,{format:"MMMM yyyy","value-format":"yyyy-MM",modelValue:n.value.monthyear,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value.monthyear=e),monthPicker:"",required:""},{"calendar-header":y(({index:e,day:A})=>[a("div",{class:R(e===5||e===6?"red-color":"")},s(A),3)]),_:1},8,["modelValue"]),a("button",{class:"btn btn-sm btn-primary",onClick:r[1]||(r[1]=e=>T())}," Pilih ")])]),p.value?(i(),d("span",na,[h(o(j))])):Y.value?(i(),d("span",la,[h(o(E),{message:"Gagal mendapatkan response dari server"})])):(i(),d("span",ra,[k.value?(i(),d("div",ia,[a("div",da,[a("div",ca,[a("div",null,[ua,a("div",ma,s(o(v).formatRupiah(u.value.pemasukan?u.value.pemasukan:0)),1)]),a("div",_a,[ha,a("div",va,s(o(v).formatRupiah(u.value.pengeluaran?u.value.pengeluaran:0)),1)]),a("div",pa,[fa,a("div",ya,s(o(v).formatRupiah(u.value.saldo?u.value.saldo:0)),1)])])]),(i(!0),d(M,null,L(k.value,(e,A)=>(i(),d("div",xa,[a("div",ka,[a("div",ga,[a("div",Ma,[a("span",ba,s(o(t)(e.nama).format("DD")),1),a("div",null,[a("div",null,[a("span",null,s(o(t)(e.nama).format("MMMM YYYY")),1)]),a("div",null,s(o(t)(e.nama).format("dddd")),1)])])]),a("div",wa,s(o(v).formatRupiah(e.pemasukan?e.pemasukan:0)),1),a("div",Ya,s(o(v).formatRupiah(e.pengeluaran?e.pengeluaran:0)),1)]),(i(!0),d(M,null,L(e.detail,(c,F)=>(i(),d("div",Aa,[a("div",Da,[a("button",{class:"btn btn-circle btn-error btn-sm",onClick:H=>B(c.id)},Na,8,Ra),a("span",Ca,s(F+1)+". "+s(c.kategori_nama),1)]),a("div",Va,[a("span",Pa,s(c.nama),1)]),a("div",{class:R(["text-right hover:underline font-mono",{"text-red-600":c.jenis=="Pengeluaran","text-sky-600":c.jenis=="Pemasukan"}]),onClick:H=>S(c.id)},[Ea,K(" "+s(o(v).formatRupiah(c.nominal?c.nominal:0)),1)],10,ja)]))),256)),Ta]))),256))])):G("",!0)]))],64)}}};export{Ia as default};
