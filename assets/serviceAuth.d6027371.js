import{u as c}from"./adminAuth.69764203.js";import{A as s,T as n}from"./Toast.d8d4c2d8.js";const o=c(),i=async(r,e)=>{try{const a=(await s.post("admin/auth/login",{username:r,password:e})).data.token;return a?(localStorage.setItem("token",a),localStorage.setItem("isLogin",!0),o.setToken(a),o.setIsLogin(!0),n.success("Info","Login berhasil!")):n.danger("Error","Login gagal!"),!0}catch(t){n.danger("Error","Gagal login!"),console.error(t)}},l=async r=>{try{const e=await s.post("admin/auth/profile",{token:r});if(e.hasOwnProperty("data")){const t=e.data.newToken;localStorage.setItem("token",t),o.setToken(t);const a={id:e.data.me.id,nama:e.data.me.nama,username:e.data.me.username,email:e.data.me.email};return o.setMe(a),!0}else return!1}catch(e){return n.danger("Error","Gagal menghubungkan ke Server!"),console.error(e),!1}},m=async(r=!0)=>{try{return localStorage.removeItem("token"),localStorage.removeItem("isLogin"),o.setToken(""),o.setIsLogin(!1),r&&n.success("Info","Logout berhasil!"),!0}catch(e){console.error(e)}},d={doLogin:i,doCheckToken:l,doLogout:m};export{d as s};
