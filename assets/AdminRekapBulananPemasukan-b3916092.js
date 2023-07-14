import{i as B,r as u,a as g,o as d,c,b as a,t as m,u as _,e as i,w as h,n as w,M as I,N as T,F as A,L as $,k as j,T as U,O as z,l as D,_ as C}from"./index-874961e1.js";import{F as K}from"./FungsiCampur-7ab25e59.js";import{A as O}from"./axios-36c6ef57.js";import{m as l,l as G}from"./id-c081905c.js";import{C as Z,r as q,D as W}from"./index-7c81fd3e.js";import{u as H}from"./adminRekapStore-2b4f886e.js";const J={class:"pt-4 px-5 md:flex justify-between"},Q={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},X=a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),aa={class:"p-4"},ea={class:"tabs tabs-boxed"},ta=a("a",{class:"tab"},"Ringkasan",-1),sa=a("a",{class:"tab"},"Pengeluaran",-1),na=a("a",{class:"tab tab-active"},"Pemasukan",-1),oa={class:"pt-4 px-5 md:flex justify-between"},la=a("div",null,null,-1),ra={class:"pt-4 px-5 flex justify-center"},ia={key:0},ua={key:1},da={key:2},ca={key:0},ma={class:"py-4 px-4"},pa={class:"bg-gray-100 p-1 rounded-lg"},va={class:"py-4 px-4"},_a={class:"flex justify-between w-full border-b-2 py-4 px-2 bg-base-200"},ha={class:"flex space-x-2 py-4"},fa=a("span",null,[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})])],-1),ya={class:"font-bold"},ba=z('<option disabled>Urutkan?</option><option value="namaasc">Nama (A-Z)</option><option value="namadesc">Nama (Z-A)</option><option selected value="terbanyak">Terbanyak</option><option value="tersedikit">Tersedikit</option>',5),ga=[ba],ka={class:"py-2"},Ma={class:"flex justify-between w-full py-4"},Ya=["value"],Ea={__name:"AdminRekapBulananPemasukan",setup(xa){l.updateLocale("id",G);const N=D(()=>C(()=>import("./AlertLoading-7b920e5a.js"),["assets/AlertLoading-7b920e5a.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-874961e1.js","assets/index-61019a89.css"])),P=D(()=>C(()=>import("./AlertFailed-14583794.js"),["assets/AlertFailed-14583794.js","assets/index-874961e1.js","assets/index-61019a89.css"])),y=H(),p=B(()=>y.getdateNow);p.value===null&&y.setdateNow(l().format("YYYY-MM-DD")),Z.register(...q),l().format("DD MMMM YYYY");const v=u({labels:["Paris","Nîmes","Toulon","Perpignan","Autre"],datasets:[{data:[30,40,60,70,5],backgroundColor:["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED"]}]}),t=u({monthyear:{month:0,year:0}});t.value.monthyear={month:parseInt(l(p.value).format("MM"))-1,year:parseInt(l(p.value).format("YYYY"))};const r=u([]),k=u([]),f=u(!0),M=u(!1);u([]);const E=async()=>{t.value.monthyear.month,t.value.monthyear.year,l(t.value.monthyear).format("MMMM YYYY"),l(t.value.monthyear).format("MM"),l(t.value.monthyear).format("Mo"),l(t.value.monthyear).format("MMMM"),l(t.value.monthyear).format("YYYY"),y.setdateNow(l(t.value.monthyear).format("YYYY-MM-DD")),await Y()},Y=async()=>{try{f.value=!0;let n={month:parseInt(l(p.value).format("MM")),year:parseInt(l(p.value).format("YYYY"))};const e=await O.get(`admin/datatransaksi/ringkasan/kategori?month=${n.month}&year=${n.year}&tipe=pemasukan`);k.value=e.data,r.value=k.value;const o=await V();f.value=!1}catch(n){f.value=!1,M.value=!0,U.danger("Warning","Data Gagal dimuat"),console.error(n)}};Y();const R=()=>{v.value.labels=[],v.value.datasets[0].data=[]},x=n=>{n=="namaasc"?(console.log("sort by nama asc"),r.value.sort((e,o)=>e.nama<o.nama?-1:e.nama>o.nama?1:0)):n=="namadesc"?(console.log("sort by nama desc"),r.value.sort((e,o)=>e.nama<o.nama?1:e.nama>o.nama?-1:0)):n=="tersedikit"?r.value.sort((e,o)=>e.nominal-o.nominal):r.value.sort((e,o)=>o.nominal-e.nominal)};t.value.sort="terbanyak";const F=()=>{x(t.value.sort)},V=()=>{x(t.value.sort),R(),r.value.forEach(n=>{v.value.labels.push(`${n.nama} : ${n.persentase} %`),v.value.datasets[0].data.push(n.nominal),v.value.datasets[0].backgroundColor.push(n.color)})};return(n,e)=>{const o=g("RouterLink"),L=g("Datepicker"),S=g("router-link");return d(),c(A,null,[a("div",J,[a("div",null,[a("span",Q," REKAP BULANAN PEMASUKAN "+m(_(l)(p.value).format("MMMM YYYY")),1)]),X]),a("div",aa,[a("div",ea,[i(o,{to:{name:"admin-rekap-bulanan-ringkasan"}},{default:h(()=>[ta]),_:1}),i(o,{to:{name:"admin-rekap-bulanan-pengeluaran"}},{default:h(()=>[sa]),_:1}),i(o,{to:{name:"admin-rekap-bulanan-pemasukan"}},{default:h(()=>[na]),_:1})])]),a("div",oa,[la,a("div",ra,[i(L,{format:"MMMM yyyy","value-format":"yyyy-MM",modelValue:t.value.monthyear,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value.monthyear=s),monthPicker:"",required:""},{"calendar-header":h(({index:s,day:b})=>[a("div",{class:w(s===5||s===6?"red-color":"")},m(b),3)]),_:1},8,["modelValue"]),a("button",{class:"btn btn-sm btn-primary",onClick:e[1]||(e[1]=s=>E())}," Pilih ")])]),f.value?(d(),c("span",ia,[i(_(N))])):M.value?(d(),c("span",ua,[i(_(P),{message:"Gagal mendapatkan response dari server"})])):(d(),c("span",da,[r.value?(d(),c("div",ca,[a("div",ma,[a("div",pa,[i(_(W),{chartData:v.value},null,8,["chartData"])])]),a("div",va,[a("div",_a,[a("div",ha,[fa,a("h4",ya,m(r.value.length)+" Kategori",1)]),a("div",null,[I(a("select",{class:"select select-bordered w-full max-w-xs",onChange:e[2]||(e[2]=s=>F()),"onUpdate:modelValue":e[3]||(e[3]=s=>t.value.sort=s)},ga,544),[[T,t.value.sort]])])]),(d(!0),c(A,null,$(r.value,(s,b)=>(d(),c("div",{class:"bg-base-100",key:s.id},[a("div",ka,[a("div",Ma,[a("div",null,[i(S,{to:{name:"admin-rekap-bulanan-detail_kategori",params:{kategori_id:s.id}}},{default:h(()=>[a("span",null,m(b+1)+". "+m(s.nama)+" : "+m(s.persentase)+"%",1)]),_:2},1032,["to"])]),a("div",null,m(_(K).formatRupiah(s.nominal)),1)]),a("div",null,[a("progress",{class:w(["progress w-full","bg-[#c5c5c5]"]),value:s.persentase,max:"100"},null,8,Ya)])])]))),128))])])):j("",!0)]))],64)}}};export{Ea as default};
