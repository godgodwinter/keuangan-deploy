import{A as o}from"./Toast.d8d4c2d8.js";import{H as d,c as u}from"./index.1a86910d.js";const g=d({id:"storeDataKategori",state:()=>({data:[]}),getters:{getData:t=>t.data},actions:{setData(t){this.data=t}}}),n=g(),r=u(()=>n.getData),i=async()=>{try{let e=(await o.get("admin/kategori")).data;return n.setData(e),!0}catch(t){console.error(t)}},m=async t=>{let e={nama:t.nama,jenis:t.jenis};try{const a=await o.post("admin/kategori",e);return t.id=a.id,r.value.push(t),!0}catch(a){console.error(a)}},p=async t=>{try{return r.value.length<1&&await i(),(await o.get(`admin/kategori/${t}`)).data}catch(e){console.error(e)}},D=async(t,e)=>{let a={nama:e.nama,jenis:e.jenis};try{r.value.length<1&&await i();const s=await o.put(`admin/kategori/${t}`,a);let c=r.value.filter(l=>l.id==t);return c[0].nama=e.nama,c[0].jenis=e.jenis,n.setData(r.value),!0}catch(s){console.error(s)}},y=async t=>{try{const e=await o.delete(`admin/kategori/${t}`);let a=r.value.filter(s=>s.id!==t);return n.setData(a),!0}catch(e){console.error(e)}},w={getData:i,deleteData:y,getDataId:p,doUpdate:D,doStoreData:m};export{w as A,g as u};
