!function(e){var t={};function s(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(l,a,function(t){return e[t]}.bind(null,a));return l},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=21)}([function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t),s.d(t,"app",(function(){return w}));s(0);const l=function(e,t){let s;s=e.indexOf("|")>0?e.slice(0,e.indexOf("|")):e;var l=!1;if(s.indexOf(":")>0){var a=s.split(/:(?!.*:\\)/);s=a[0],l=a[1].replace("\\",":")}var n=document.createElement(s);l&&""!=l&&(n.innerHTML=l);var i=e.slice(e.indexOf("|")+1,e.length).split(",");if(e.indexOf("|")>0&&e.indexOf("|")<e.length-1&&(i.forEach((e,t)=>{if(e.indexOf(":")>0){var s=e.substring(0,e.indexOf(":"))+","+e.substring(e.indexOf(":")+1,e.length);s=s.split(","),i[t]={key:s[0],value:s[1]}}else i[t]={key:e,value:void 0}}),i.forEach((e,t)=>{"key"in e&&null!=e.key&&"value"in e&&null!=e.value?n.setAttribute(e.key,e.value):"key"in e&&null!=e.key&&n.setAttribute(e.key,"")})),t&&"string"!=typeof t)if(t.length>0)t.forEach((e,t)=>{if(e instanceof HTMLElement)n.appendChild(e);else{let t=document.createElement("div");t.innerHTML=e,n.appendChild(t.firstChild)}});else if(t instanceof HTMLElement)n.appendChild(t);else{let e=document.createElement("div");e.innerHTML=t,n.appendChild(e.firstChild)}return n};s(1);const a={all:{arrowDown:{name:"arrow-down",path:"M18.293 11.293l-5.293 5.293v-11.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v11.586l-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7 7c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l7-7c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"},arrowDownLeft:{name:"arrow-down-left",path:"M17 16h-7.586l8.293-8.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-8.293 8.293v-7.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1h10c0.552 0 1-0.448 1-1s-0.448-1-1-1z"},arrowDownRight:{name:"arrow-down-right",path:"M16 7v7.586l-8.293-8.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l8.293 8.293h-7.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h10c0.136 0 0.265-0.027 0.383-0.076s0.228-0.121 0.324-0.217c0.092-0.092 0.166-0.202 0.217-0.324 0.049-0.118 0.076-0.247 0.076-0.383v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1z"},arrowLeft:{name:"arrow-left",path:"M12.707 18.293l-5.293-5.293h11.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-11.586l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-7 7c-0.096 0.096-0.168 0.206-0.217 0.324-0.051 0.122-0.076 0.253-0.076 0.383 0 0.256 0.098 0.512 0.293 0.707l7 7c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},arrowRight:{name:"arrow-right",path:"M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"},arrowUp:{name:"arrow-up",path:"M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"},arrowUpLeft:{name:"arrow-up-left",path:"M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"},arrowUpRight:{name:"arrow-up-right",path:"M7 8h7.586l-8.293 8.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l8.293-8.293v7.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},chevronDown:{name:"chevron-down",path:"M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"},chevronLeft:{name:"chevron-left",path:"M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},chevronRight:{name:"chevron-right",path:"M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"},chevronUp:{name:"chevron-up",path:"M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},minus:{name:"minus",path:"M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},plus:{name:"plus",path:"M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},x:{name:"x",path:"M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"}},render:(e,t)=>{switch(t){case!0:return'<span class="icon"><svg version="1.1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="'+a.all[e].path+'"></path></svg></span>';default:const t=l("span|class:icon"),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("version","1.1"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("width","24"),s.setAttribute("height","24"),s.setAttribute("fill","currentColor");const n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",a.all[e].path),s.appendChild(n),t.appendChild(s),t}}},n=function({text:e=!1,type:t=!1,round:s=!1,block:n=!1,size:i=!1,style:r=[],ring:o=!1,title:d=!1,classList:c=[],iconName:u=!1,func:m=!1}={}){if(this.button=l("button|class:button,tabindex:1,type:button"),e){const t=l("span:"+e+"|class:button-text");this.button.appendChild(t)}switch(t){case"secondary":this.button.classList.add("button__secondary");break;case"success":this.button.classList.add("button__success");break;case"danger":this.button.classList.add("button__danger");break;case"link":this.button.classList.add("button__link");break;default:this.button.classList.add("button__primary")}if(u){const e=l("span|class:button-icon",[a.render(u)]);this.button.appendChild(e)}switch(o&&this.button.classList.add("button__ring"),n&&this.button.classList.add("button__block"),s&&this.button.classList.add("button__round"),i){case"small":this.button.classList.add("button__small");break;case"large":this.button.classList.add("button__large")}r.length>0&&r.forEach((e,t)=>{switch(e){case"link":this.button.classList.add("button__link")}}),d&&this.button.setAttribute("title",d),c.length>0&&c.forEach((e,t)=>{this.button.classList.add(e)}),m&&this.button.addEventListener("click",e=>{m()}),this.disable=()=>{this.button.disabled=!0},this.enable=()=>{this.button.disabled=!1},this.deactive=()=>{this.button.classList.remove("active")},this.active=()=>{this.button.classList.add("active")}};s(2);const i={name:{display:"Dice Roller",string:"diceRoller"},render:()=>{document.title=i.name.display}};s(3),s(4);const r={state:{}};r.state.history=[],r.state.count={max:50},r.state.full=!1,r.history={},r.history.add=e=>{r.state.history.push(JSON.parse(JSON.stringify(e)))},r.history.clear=e=>{r.state.history=[]},r.element={root:l("div|class:result"),history:l("div|class:result__history"),control:l("div|class:result__control")},r.clear=()=>{for(;r.element.history.lastChild;)r.element.history.removeChild(r.element.history.lastChild)},r.render=()=>(r.element.root.appendChild(r.element.control),r.element.root.appendChild(r.element.history),r.control(),r.update(),r.element.root),r.control=()=>{const e=new n({iconName:"chevronUp",round:!0,ring:!0,size:"small",type:"link",classList:["result__full"],func:()=>{r.full.toggle(),r.full.render()}});r.element.control.appendChild(e.button)},r.full={},r.full.toggle=()=>{r.state.full?r.state.full=!1:r.state.full=!0},r.full.render=()=>{const e=document.querySelector("html");r.state.full?e.classList.add("is-result-full"):e.classList.remove("is-result-full")},r.update=()=>{r.clear();const e=JSON.parse(JSON.stringify(r.state.history)).reverse().slice(0,r.state.count.max);e&&e.length>0&&e.forEach((e,t)=>{r.element.history.appendChild(r.resultItem(e))})},r.resultItem=e=>{const t=l("div|class:result__item"),s=l(`div:${e.total}|class:result__total`),a=l("div|class:result__details"),n=l("div|class:result__timestamp");return n.textContent=`${e.timestamp.hours<10?"0"+e.timestamp.hours:e.timestamp.hours}:${e.timestamp.minutes<10?"0"+e.timestamp.minutes:e.timestamp.minutes}:${e.timestamp.seconds<10?"0"+e.timestamp.seconds:e.timestamp.seconds} ${e.timestamp.date}/${e.timestamp.monthString}/${e.timestamp.year}`,e.name&&a.appendChild(l(`div:${e.name}|class:result__name`)),e.formula.forEach((e,t)=>{const s=l("div|class:result__formula"),n=l("div|class:result__formula-dice");let i="";e.dice.count>1&&(i+=e.dice.count),i=i+" d"+e.dice.size,e.dice.modifier>0?i=i+" +"+e.dice.modifier:e.dice.modifier<0&&(i=i+" "+e.dice.modifier),n.textContent=i,s.appendChild(n);const r=l("div|class:result__rolls"),o=l("div:Rolled\\:|class:result__rolls-title"),d=l("ul|class:result__rolls-list list__inline list__unstyled");e.result.rolls.all.forEach((t,s)=>{const a=l(`li:${t}|class:result__rolls-list-item`);20===e.dice.size&&20===t?a.classList.add("result__critical-success"):20===e.dice.size&&1===t&&a.classList.add("result__critical-failure"),d.appendChild(a)}),r.appendChild(o),r.appendChild(d),s.appendChild(r),a.appendChild(s)}),a.appendChild(n),t.appendChild(s),t.appendChild(a),t};const o={state:{}};o.state.current=[{name:"Short sword +1",formula:[{dice:{count:1,size:20,modifier:6},rules:{dropLowest:!1}}]},{name:"Melee damage",formula:[{dice:{count:1,size:6,modifier:4},rules:{dropLowest:!1}},{dice:{count:1,size:4,modifier:1},rules:{dropLowest:!1}}]}],o.add=()=>{const e={name:"",formula:JSON.parse(JSON.stringify(u.state.current))};o.state.current.push(e)},o.remove=e=>{o.state.current.splice(e,1)},o.up=e=>{if(e>0){let t=o.state.current.splice(e,1)[0];o.state.current.splice(e-1,0,t)}},o.down=e=>{if(e<o.state.current.length){let t=o.state.current.splice(e,1)[0];o.state.current.splice(e+1,0,t)}},o.element=l("div|class:saved"),o.delay=100,o.clear=()=>{for(;o.element.lastChild;)o.element.removeChild(o.element.lastChild)},o.render=()=>(o.update(),o.element),o.update=()=>{o.clear();let e=null;const t=l("div|class:saved__body");o.state.current.length>0&&o.state.current.forEach((e,s)=>{t.appendChild(o.savedItem(e,s))});const s=new n({text:"Save current formula",ring:!0,type:"link",size:"small",func:()=>{e=window.setTimeout((function(){o.add(),c.state.save(),o.update()}),o.delay)}});o.element.appendChild(s.button),o.element.appendChild(t)},o.savedItem=(e,t)=>{const s=l("div|class:saved__item"),a=l(`input|class:saved__name input__small,type:text,value:${e.name},placeholder:Saved formula name,tabindex:1`);a.addEventListener("input",()=>{e.name=a.value,c.state.save()});const i=l("div|class:saved__formula"),d=l("div|class:saved__controls");e.formula.forEach((e,t)=>{const s=l("div|class:saved__formula-dice");let a="";e.dice.count>1&&(a+=e.dice.count),a=a+" d"+e.dice.size,e.dice.modifier>0?a=a+" +"+e.dice.modifier:e.dice.modifier<0&&(a=a+" "+e.dice.modifier),s.textContent=a,i.appendChild(s)});let u=null;const h=new n({iconName:"minus",round:!0,ring:!0,type:"link",size:"small",classList:["saved__remove"],func:()=>{u=window.setTimeout((function(){o.remove(t),c.state.save(),o.update()}),o.delay)}}),p=new n({iconName:"chevronUp",round:!0,ring:!0,type:"link",size:"small",classList:["saved__up"],func:()=>{u=window.setTimeout((function(){o.up(t),c.state.save(),o.update()}),o.delay)}}),_=new n({iconName:"chevronDown",round:!0,ring:!0,type:"link",size:"small",classList:["saved__down"],func:()=>{u=window.setTimeout((function(){o.down(t),c.state.save(),o.update()}),o.delay)}}),v=new n({text:"Roll",ring:!0,type:"success",size:"small",classList:["saved__roll"],func:()=>{r.history.add(m.roll(e)),c.state.save(),r.update()}});return d.appendChild(h.button),d.appendChild(p.button),d.appendChild(_.button),s.appendChild(d),s.appendChild(a),s.appendChild(i),s.appendChild(v.button),s};s(5);const d={state:{}};d.state={style:"dark"},d.style={},d.style.toggle=e=>{if(!e||"dark"!==e&&"light"!==e)switch(d.state.style){case"light":d.state.style="dark";break;case"dark":d.state.style="light"}else d.state.style=e},d.style.render=()=>{const e=document.querySelector("html");switch(d.state.style){case"light":e.classList.add("is-theme-light"),e.classList.remove("is-theme-dark");break;case"dark":e.classList.remove("is-theme-light"),e.classList.add("is-theme-dark")}},d.keyboard={},d.keyboard.bind=()=>{window.addEventListener("keydown",e=>{e.ctrlKey&&e.altKey&&68==e.keyCode&&(d.style.toggle(),c.state.save(),d.style.render(),d.toggle.update())},!1)},d.toggle={},d.toggle.render=()=>{const e=l("input|type:checkbox,class:theme__style-input,id:theme__style-input,tabindex:1"),t=l("label|class:theme__style-label,for:theme__style-input",[l("span:Dark|class:theme__style-text theme__style-text-dark"),l("span|class:theme__style-icon"),l("span:Light|class:theme__style-text theme__style-text-light")]),s=l("div|class:theme__style-toggle",[e,t]);switch(d.state.style){case"light":e.checked=!1;break;case"dark":e.checked=!0}return e.addEventListener("change",t=>{e.checked?(d.style.toggle("dark"),d.state.style="dark"):(d.style.toggle("light"),d.state.style="light"),c.state.save(),d.style.render()}),s},d.toggle.update=()=>{switch(d.state.style){case"light":document.querySelector(".theme__style-input").checked=!1;break;case"dark":document.querySelector(".theme__style-input").checked=!0}};const c={state:{}};c.state.save=()=>{const e={[i.name.string]:!0,formula:u.state,saved:o.state,result:r.state,theme:d.state};c.save(e)},c.state.load=()=>{const e=c.load();e&&e[i.name.string]&&(u.state=e.formula,o.state=e.saved,r.state=e.result,d.state=e.theme)},c.save=e=>{localStorage.setItem(i.name.string,JSON.stringify(e))},c.load=()=>JSON.parse(localStorage.getItem(i.name.string)),c.clear=()=>{localStorage.removeItem(i.name.string)};const u={state:{}};u.state.current=[{dice:{count:1,size:20,modifier:2},rules:{dropLowest:!1}},{dice:{count:6,size:6,modifier:6},rules:{dropLowest:!1}}],u.element=l("div|class:formula"),u.delay=100,u.default={dice:{count:1,size:20,modifier:0},rules:{dropLowest:!1}},u.add=()=>{u.state.current.push(JSON.parse(JSON.stringify(u.default)))},u.remove=e=>{u.state.current.splice(e,1),0===u.state.current.length&&u.add()},u.clear=()=>{for(;u.element.lastChild;)u.element.removeChild(u.element.lastChild)},u.render=()=>(u.update(),u.element),u.update=()=>{u.clear();const e=l("div|class:formula__body");u.state.current.forEach((t,s)=>{const a=l("div|class:formula__set");let i=null;const r=new n({iconName:"minus",round:!0,ring:!0,size:"small",type:"danger",classList:["formula__remove"],func:()=>{i=window.setTimeout((function(){u.remove(s),u.update(),c.state.save()}),u.delay)}}),o=new v(t);u.state.current.length>1&&a.appendChild(r.button),a.appendChild(o.count),a.appendChild(o.size),a.appendChild(o.modifier),e.appendChild(a)});let t=null;const s=new n({iconName:"plus",round:!0,ring:!0,size:"small",classList:["formula__add"],func:()=>{t=window.setTimeout((function(){u.add(),u.update(),c.state.save()}),u.delay)}});u.element.appendChild(e),u.element.appendChild(l("div|class:formula__control",[s.button]))};const m={random:(e,t)=>Math.round(Math.random()*(t-e))+e,reducer:(e,t)=>e+t};m.roll=e=>(e.total=0,e.timestamp=null,e.formula.forEach((t,s)=>{t.result={},t.result.rolls={all:[]};for(s=0;s<t.dice.count;s++)t.result.rolls.all.push(m.random(1,t.dice.size));t.result.total=t.result.rolls.all.reduce(m.reducer)+t.dice.modifier,t.result.rolls.lowest=Math.min(...t.result.rolls.all),t.result.rolls.highest=Math.max(...t.result.rolls.all),t.rules.dropLowest&&(t.result.total=t.result.total-t.result.rolls.lowest),e.total=e.total+t.result.total}),e.timestamp=function(){const e=new Date;return{date:e.getDate(),day:e.getDay(),year:e.getFullYear(),hours:e.getHours(),milliseconds:e.getMilliseconds(),minutes:e.getMinutes(),month:e.getMonth(),monthString:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],seconds:e.getSeconds()}}(),e);const h={render:e=>{const t=l("div|class:formula__item formula__count"),s=l(`input|class:formula__count-input,type:number,value:${e.count},tabindex:1`);let a=null;const n=t=>{let l=t;return isNaN(t)&&(l=1),t>100&&(l=100),t<1&&(l=1),(isNaN(t)||t>100||t<1)&&(clearTimeout(a),a=window.setTimeout((function(){s.value=e.count}),1500)),l};s.addEventListener("input",()=>{let t=parseInt(s.value,10);t<1&&(s.value=1),e.count=n(t)}),s.addEventListener("blur",t=>{s.value=e.count});let i=null;return s.addEventListener("touchstart",e=>{i=parseInt(s.value,10)}),s.addEventListener("touchend",e=>{i=null}),s.addEventListener("touchmove",t=>{t.preventDefault();let l=i+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);e.count=n(l),s.value=e.count}),t.appendChild(s),t}},p={availableDice:[2,3,4,6,8,10,12,20,100],render:e=>{const t=l("div|class:formula__item formula__size"),s=l("div|class:formula__size-display"),n=l("div|class:formula__size-text"),i=l("div|class:formula__size-icon",[a.render("chevronDown")]);s.appendChild(n),s.appendChild(i);const r=l("select|class:formula__size-select,tabindex:1");r.addEventListener("change",()=>{e.size=r.selectedOptions[0].size,n.textContent="d"+e.size}),p.availableDice.forEach((t,s)=>{const a=l(`option:d${t}|value:${t}`);a.size=t,e.size===t&&(a.selected=!0,n.textContent="d"+t),r.appendChild(a)});let o=null;return r.addEventListener("touchstart",e=>{o=r.selectedIndex}),r.addEventListener("touchend",e=>{o=null}),r.addEventListener("touchmove",t=>{t.preventDefault();let s=o+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);s<0&&(s=0),s>p.availableDice.length-1&&(s=p.availableDice.length-1),e.size=p.availableDice[s],r.selectedIndex=s,n.textContent="d"+e.size}),t.appendChild(r),t.appendChild(s),t}},_={render:e=>{const t=l("div|class:formula__item formula__modifier"),s=l("input|class:formula__modifier-input,type:text,tabindex:1");let a=null;const n=t=>{let l=t;return isNaN(t)&&(l=0),t>999&&(l=999),t<-999&&(l=-999),(isNaN(t)||t>999||t<-999)&&(clearTimeout(a),a=window.setTimeout((function(){s.value=i(e.modifier)}),1500)),l},i=e=>e>=0?"+"+e:e;s.value=i(e.modifier),s.addEventListener("input",()=>{let t=parseInt(s.value,10);e.modifier=n(t)}),s.addEventListener("blur",t=>{s.value=i(e.modifier)});let r=null;return s.addEventListener("touchstart",e=>{r=parseInt(s.value,10)}),s.addEventListener("touchend",e=>{r=null}),s.addEventListener("touchmove",t=>{t.preventDefault();let l=r+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);e.modifier=n(l),s.value=i(e.modifier)}),s.addEventListener("keydown",t=>{38===t.keyCode&&(e.modifier=n(e.modifier+1),s.value=i(e.modifier)),40===t.keyCode&&(e.modifier=n(e.modifier-1),s.value=i(e.modifier))}),t.appendChild(s),t}},v=function(e){this.count=h.render(e.dice),this.size=p.render(e.dice),this.modifier=_.render(e.dice)};s(6),s(7),s(8),s(9),s(10),s(11),s(12),s(13),s(14),s(15),s(16);s(17);s(18);const f={render:()=>{const e=l("div|class:roll"),t=new n({text:"Roll the dice",ring:!0,size:"large",type:"success",classList:["roll__button"],func:()=>{r.history.add(m.roll({name:!1,formula:JSON.parse(JSON.stringify(u.state.current))})),c.state.save(),r.update()}});return e.appendChild(t.button),e}};s(19);const y={};y.element=l("div|class:toolbar"),y.render=()=>{const e=new n({text:"Clear history",ring:!0,type:"link",size:"small",func:()=>{r.history.clear(),c.state.save(),r.update()}});return y.element.appendChild(e.button),y.element.appendChild(d.toggle.render()),y.element};s(20);const g={colour:{}};g.colour.render=()=>l("section",[l("div|class:styleguide__colour",[l("div|class:styleguide__colour-primary",[l("div|class:styleguide__colour-primary-100"),l("div|class:styleguide__colour-primary-200"),l("div|class:styleguide__colour-primary-300"),l("div|class:styleguide__colour-primary-400"),l("div|class:styleguide__colour-primary-500"),l("div|class:styleguide__colour-primary-600"),l("div|class:styleguide__colour-primary-700"),l("div|class:styleguide__colour-primary-800"),l("div|class:styleguide__colour-primary-900")]),l("div|class:styleguide__colour-secondary",[l("div|class:styleguide__colour-secondary-100"),l("div|class:styleguide__colour-secondary-200"),l("div|class:styleguide__colour-secondary-300"),l("div|class:styleguide__colour-secondary-400"),l("div|class:styleguide__colour-secondary-500"),l("div|class:styleguide__colour-secondary-600"),l("div|class:styleguide__colour-secondary-700"),l("div|class:styleguide__colour-secondary-800"),l("div|class:styleguide__colour-secondary-900")]),l("div|class:styleguide__colour-success",[l("div|class:styleguide__colour-success-100"),l("div|class:styleguide__colour-success-200"),l("div|class:styleguide__colour-success-300"),l("div|class:styleguide__colour-success-400"),l("div|class:styleguide__colour-success-500"),l("div|class:styleguide__colour-success-600"),l("div|class:styleguide__colour-success-700"),l("div|class:styleguide__colour-success-800"),l("div|class:styleguide__colour-success-900")]),l("div|class:styleguide__colour-danger",[l("div|class:styleguide__colour-danger-100"),l("div|class:styleguide__colour-danger-200"),l("div|class:styleguide__colour-danger-300"),l("div|class:styleguide__colour-danger-400"),l("div|class:styleguide__colour-danger-500"),l("div|class:styleguide__colour-danger-600"),l("div|class:styleguide__colour-danger-700"),l("div|class:styleguide__colour-danger-800"),l("div|class:styleguide__colour-danger-900")])]),l("div|class:styleguide__colour",[l("div|class:styleguide__colour-black"),l("div|class:styleguide__colour-white")])]);const b={Button:n,ControlSet:v,global:i,base:{},data:c,theme:d,layout:{},icon:a,dice:m,count:h,size:p,modifier:_,roll:f,result:r,formula:u,saved:o,toolbar:y,styleguide:g},w={};w.element=document.querySelector(".app"),w.clear=()=>{for(;w.element.lastChild;)w.element.removeChild(w.element.lastChild)},w.render=()=>{[l("div|class:layout",[l("section|class:layout__toolbar",[b.toolbar.render()]),l("section|class:layout__formula",[l("section|class:layout__wrap",[l("section|class:layout__controls",[b.formula.render(),b.roll.render(),b.saved.render()])])]),l("section|class:layout__result",[l("section|class:layout__wrap",[b.result.render()])])])].forEach((e,t)=>{w.element.appendChild(e)})},w.update=()=>{w.clear(),w.render()},b.data.state.load(),b.theme.style.render(),b.theme.keyboard.bind(),b.global.render(),w.render()}]);