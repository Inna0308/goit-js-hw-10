import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector(".form"),m=document.querySelector("input"),n=document.querySelector('input[value="fulfilled"]'),c=i=>{i.preventDefault();const t=Number(m.value),s=n.checked;new Promise((e,r)=>{setTimeout(()=>{s?e(t):r(t)},t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#59a10d",titleColor:"white",titleSize:"16",messageColor:"white",messageSize:"16",theme:"dark"})}).catch(e=>{o.error({title:"Fail",message:`Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#ef4040",titleColor:"white",titleSize:"16",messageColor:"white",messageSize:"16",theme:"dark"})})};l.addEventListener("submit",c);
//# sourceMappingURL=2-snackbar.js.map
