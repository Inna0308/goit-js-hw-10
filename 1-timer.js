import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as m,i as h}from"./assets/vendor-BbSUbo7J.js";const p="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-cross'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M31.708%2025.708c-0-0-0-0-0-0l-9.708-9.708%209.708-9.708c0-0%200-0%200-0%200.105-0.105%200.18-0.227%200.229-0.357%200.133-0.356%200.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13%200.048-0.252%200.124-0.357%200.228%200%200-0%200-0%200l-9.708%209.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057%200.229l-4.586%204.586c-0.286%200.286-0.361%200.702-0.229%201.057%200.049%200.13%200.124%200.252%200.229%200.357%200%200%200%200%200%200l9.708%209.708-9.708%209.708c-0%200-0%200-0%200-0.104%200.105-0.18%200.227-0.229%200.357-0.133%200.355-0.057%200.771%200.229%201.057l4.586%204.586c0.286%200.286%200.702%200.361%201.057%200.229%200.13-0.049%200.252-0.124%200.357-0.229%200-0%200-0%200-0l9.708-9.708%209.708%209.708c0%200%200%200%200%200%200.105%200.105%200.227%200.18%200.357%200.229%200.356%200.133%200.771%200.057%201.057-0.229l4.586-4.586c0.286-0.286%200.362-0.702%200.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",n=document.querySelector("button[data-start]"),r=document.querySelector("#datetime-picker"),f=document.querySelector("span[data-days]"),g=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]");let c;const w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),c=t[0],c<=Date.now()?(h.show({iconUrl:`${p}#icon-cross`,title:"Error",message:"Please choose a date in the future",position:"topRight",titleColor:"white",titleSize:"16",messageColor:"white",messageSize:"16",backgroundColor:"#ef4040"}),n.disabled=!0):n.disabled=!1}};m("#datetime-picker",w);function x(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:d,seconds:u}}const b=()=>{n.disabled=!0,r.disabled=!0;const t=setInterval(()=>{const s=Date.now(),e=c-s;if(e<=0){clearInterval(t),daysSpan.textContent="00",hoursSpan.textContent="00",minutesSpan.textContent="00",secondsSpan.textContent="00",r.disabled=!1,n.disabled=!1;return}const o=x(e);console.log(e),console.log(o),v(o)},1e3)};function a(t){return t.toString().padStart(2,"0")}function v({days:t,hours:s,minutes:e,seconds:o}){f.textContent=a(t),g.textContent=a(s),y.textContent=a(e),S.textContent=a(o)}n.addEventListener("click",b);
//# sourceMappingURL=1-timer.js.map
