if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,t)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const o=s=>l(s,n),u={module:{uri:n},exports:r,require:o};e[n]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(t(...s),r)))}}define(["./workbox-d249b2c8"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"ceda3b1f7f87bed40b6411c14ebcb230"},{url:"assets/404.html.14ab6e87.js",revision:null},{url:"assets/404.html.d2dc3323.js",revision:null},{url:"assets/app.6e816323.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/img/images/1.png",revision:"980514621910ce77b8ddd91de43133d8"},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.e1d78e51.js",revision:null},{url:"assets/index.html.e915e5ab.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/staff.html.78e9a9c8.js",revision:null},{url:"assets/staff.html.8c1edadd.js",revision:null},{url:"assets/style.52140f47.css",revision:null},{url:"index.html",revision:"814057abf67f62b0d302d3e0fa98785d"},{url:"staff.html",revision:"f7e36e676b9f0424cfcc8ffb0fc890e4"}],{})}));
