!function(e){var t={};function s(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(l,n,function(t){return e[t]}.bind(null,n));return l},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=20)}([function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t),s.d(t,"app",(function(){return k}));s(0);const l=function(e,t){let s;s=e.indexOf("|")>0?e.slice(0,e.indexOf("|")):e;var l=!1;if(s.indexOf(":")>0){var n=s.split(/:(?!.*:\\)/);s=n[0],l=n[1].replace("\\",":")}var a=document.createElement(s);l&&""!=l&&(a.innerHTML=l);var i=e.slice(e.indexOf("|")+1,e.length).split(",");if(e.indexOf("|")>0&&e.indexOf("|")<e.length-1&&(i.forEach((e,t)=>{if(e.indexOf(":")>0){var s=e.substring(0,e.indexOf(":"))+","+e.substring(e.indexOf(":")+1,e.length);s=s.split(","),i[t]={key:s[0],value:s[1]}}else i[t]={key:e,value:void 0}}),i.forEach((e,t)=>{"key"in e&&null!=e.key&&"value"in e&&null!=e.value?a.setAttribute(e.key,e.value):"key"in e&&null!=e.key&&a.setAttribute(e.key,"")})),t&&"string"!=typeof t)if(t.length>0)t.forEach((e,t)=>{if(e instanceof HTMLElement)a.appendChild(e);else{let t=document.createElement("div");t.innerHTML=e,a.appendChild(t.firstChild)}});else if(t instanceof HTMLElement)a.appendChild(t);else{let e=document.createElement("div");e.innerHTML=t,a.appendChild(e.firstChild)}return a};s(1);const n={all:{arrowDown:{name:"arrow-down",path:"M18.293 11.293l-5.293 5.293v-11.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v11.586l-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7 7c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l7-7c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"},arrowDownLeft:{name:"arrow-down-left",path:"M17 16h-7.586l8.293-8.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-8.293 8.293v-7.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1h10c0.552 0 1-0.448 1-1s-0.448-1-1-1z"},arrowDownRight:{name:"arrow-down-right",path:"M16 7v7.586l-8.293-8.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l8.293 8.293h-7.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h10c0.136 0 0.265-0.027 0.383-0.076s0.228-0.121 0.324-0.217c0.092-0.092 0.166-0.202 0.217-0.324 0.049-0.118 0.076-0.247 0.076-0.383v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1z"},arrowLeft:{name:"arrow-left",path:"M12.707 18.293l-5.293-5.293h11.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-11.586l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-7 7c-0.096 0.096-0.168 0.206-0.217 0.324-0.051 0.122-0.076 0.253-0.076 0.383 0 0.256 0.098 0.512 0.293 0.707l7 7c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},arrowRight:{name:"arrow-right",path:"M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"},arrowUp:{name:"arrow-up",path:"M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"},arrowUpLeft:{name:"arrow-up-left",path:"M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"},arrowUpRight:{name:"arrow-up-right",path:"M7 8h7.586l-8.293 8.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l8.293-8.293v7.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},chevronDown:{name:"chevron-down",path:"M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"},chevronLeft:{name:"chevron-left",path:"M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},chevronRight:{name:"chevron-right",path:"M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"},chevronUp:{name:"chevron-up",path:"M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},minus:{name:"minus",path:"M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},plus:{name:"plus",path:"M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},x:{name:"x",path:"M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"}},render:(e,t)=>{switch(t){case!0:return'<span class="icon"><svg version="1.1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="'+n.all[e].path+'"></path></svg></span>';default:const t=l("span|class:icon"),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("version","1.1"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("width","24"),s.setAttribute("height","24"),s.setAttribute("fill","currentColor");const a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("d",n.all[e].path),s.appendChild(a),t.appendChild(s),t}}},a=function({text:e=!1,type:t=!1,round:s=!1,block:a=!1,size:i=!1,style:r=[],ring:o=!1,title:d=!1,classList:c=[],iconName:u=!1,func:p=!1,sr:m=!1}={}){if(this.button=l("button|class:button,type:button"),e){const t=l("span:"+e+"|class:button__text");this.button.appendChild(t)}if(m){const e=l("span:"+m+"|class:sr__only");this.button.appendChild(e)}switch(t){case"secondary":this.button.classList.add("button__secondary");break;case"success":this.button.classList.add("button__success");break;case"danger":this.button.classList.add("button__danger");break;case"light":this.button.classList.add("button__light");break;case"link":this.button.classList.add("button__link");break;default:this.button.classList.add("button__primary")}if(u){const e=l("span|class:button__icon",[n.render(u)]);this.button.appendChild(e)}switch(o&&this.button.classList.add("button__ring"),a&&this.button.classList.add("button__block"),s&&this.button.classList.add("button__round"),i){case"small":this.button.classList.add("button__small");break;case"large":this.button.classList.add("button__large")}d&&this.button.setAttribute("title",d),c.length>0&&c.forEach((e,t)=>{this.button.classList.add(e)}),p&&this.button.addEventListener("click",e=>{p()}),this.disable=()=>{this.button.disabled=!0},this.enable=()=>{this.button.disabled=!1},this.deactive=()=>{this.button.classList.remove("button__active")},this.active=()=>{this.button.classList.add("button__active")}};s(2);const i=function({text:e=!1,iconName:t=!1,content:s=!1,position:n=!1}={}){this.state={open:!1},this.state.toggle=()=>{this.state.open?this.state.open=!1:this.state.open=!0},this.element={app:document.querySelector(".app"),dropdown:l("div|class:dropdown"),panel:l("div|class:dropdown__panel"),toggle:new a({text:e||!1,ring:!0,type:"link",size:"small",classList:["dropdown__toggle"],iconName:t||!1,func:()=>{this.state.toggle(),this.render.dropdown(),this.render.panel()}})},this.render={},this.render.node={},this.render.node.toggle=()=>{this.element.dropdown.appendChild(this.element.toggle.button)},this.render.node.panel=()=>{s&&this.element.panel.appendChild(s)},this.render.node.dropdown=()=>{this.element.dropdown.appendChild(this.element.toggle.button)},this.render.dropdown=()=>{this.state.open?(this.element.dropdown.classList.add("is__dropdown-open"),this.element.dropdown.classList.remove("is__dropdown-closed"),this.element.toggle.active()):(this.element.dropdown.classList.add("is__dropdown-closed"),this.element.dropdown.classList.remove("is__dropdown-open"),this.element.toggle.deactive())},this.render.panel=()=>{const e=()=>{this.state.open||(this.element.panel.remove(),this.element.panel.removeEventListener("animationend",e))};if(this.state.open){this.element.panel.removeEventListener("animationend",e),this.element.app.appendChild(this.element.panel);const t=this.element.toggle.button.getBoundingClientRect(),s=(this.element.panel.getBoundingClientRect(),parseInt(getComputedStyle(document.documentElement).getPropertyValue("--base-font-size"),10));switch(n){case"topLeft":this.element.panel.style.bottom=window.innerHeight-t.top+s+"px",this.element.panel.style.left=t.left+"px";break;case"topRight":this.element.panel.style.bottom=window.innerHeight-t.top+s+"px",this.element.panel.style.right=window.innerWidth-t.right+"px";break;case"bottomLeft":this.element.panel.style.top=t.top+t.height+s+"px",this.element.panel.style.left=t.left+"px";break;case"bottomRight":this.element.panel.style.top=t.top+t.height+s+"px",this.element.panel.style.right=window.innerWidth-t.right+"px";break;case"leftTop":this.element.panel.style.top=t.top+"px",this.element.panel.style.right=window.innerWidth-t.left+s+"px";break;case"leftBottom":this.element.panel.style.bottom=window.innerHeight-t.bottom+"px",this.element.panel.style.right=window.innerWidth-t.left+s+"px";break;case"rightTop":this.element.panel.style.top=t.top+"px",this.element.panel.style.left=t.right+s+"px";break;case"rightBottom":this.element.panel.style.bottom=window.innerHeight-t.bottom+"px",this.element.panel.style.left=t.right+s+"px";break;default:this.element.panel.style.top=t.top+t.height+s+"px",this.element.panel.style.left=t.left+"px"}this.element.panel.classList.remove("is__dropdown-closed"),this.element.panel.classList.add("is__dropdown-open")}else this.element.panel.addEventListener("animationend",e),this.element.panel.classList.remove("is__dropdown-open"),this.element.panel.classList.add("is__dropdown-closed")},this.render.node.toggle(),this.render.node.panel(),this.render.node.dropdown(),this.render.dropdown(),this.dropdown=this.element.dropdown},r={name:{display:"Dice Roller",string:"diceRoller"},render:()=>{document.title=r.name.display}};s(3);const o={state:{}};o.state.current=[{dice:{count:1,size:20,modifier:0},rules:{dropLowest:!1}}],o.element=l("div|class:formula"),o.delay=100,o.default={dice:{count:1,size:20,modifier:0},rules:{dropLowest:!1}},o.add=()=>{o.state.current.push(JSON.parse(JSON.stringify(o.default)))},o.remove=e=>{o.state.current.splice(e,1),0===o.state.current.length&&o.add()},o.reset=()=>{o.state.current=JSON.parse(JSON.stringify([o.default]))},o.clear=()=>{for(;o.element.lastChild;)o.element.removeChild(o.element.lastChild)},o.render=()=>(o.update(),o.element),o.update=()=>{o.clear();const e=l("div|class:formula__body");o.state.current.forEach((t,s)=>{const n=l("div|class:formula__set");let i=null;const r=new a({iconName:"minus",round:!0,ring:!0,size:"small",type:"danger",sr:"Remove formula",classList:["formula__remove"],func:()=>{i=window.setTimeout((function(){o.remove(s),o.update(),g.state.save()}),o.delay)}}),d=new b(t,s);o.state.current.length>1&&n.appendChild(r.button),n.appendChild(d.count),n.appendChild(d.size),n.appendChild(d.modifier),e.appendChild(n)});let t=null;const s=new a({iconName:"plus",round:!0,ring:!0,size:"small",sr:"Add formula",classList:["formula__add"],func:()=>{t=window.setTimeout((function(){o.add(),o.update(),g.state.save()}),o.delay)}});o.element.appendChild(e),o.element.appendChild(l("div|class:formula__control",[s.button]))};s(4);const d={random:(e,t)=>Math.round(Math.random()*(t-e))+e,reducer:(e,t)=>e+t};d.roll=e=>(e.total=0,e.timestamp=null,e.formula.forEach((t,s)=>{t.result={},t.result.rolls={all:[]};for(s=0;s<t.dice.count;s++)t.result.rolls.all.push(d.random(1,t.dice.size));t.result.total=t.result.rolls.all.reduce(d.reducer)+t.dice.modifier,t.result.rolls.lowest=Math.min(...t.result.rolls.all),t.result.rolls.highest=Math.max(...t.result.rolls.all),t.rules.dropLowest&&(t.result.total=t.result.total-t.result.rolls.lowest),e.total=e.total+t.result.total}),e.timestamp=function(){const e=new Date;return{date:e.getDate(),day:e.getDay(),year:e.getFullYear(),hours:e.getHours(),milliseconds:e.getMilliseconds(),minutes:e.getMinutes(),month:e.getMonth(),monthString:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],seconds:e.getSeconds()}}(),e);s(5);const c={state:{}};c.state.history=[],c.state.count={max:50},c.state.full=!1,c.history={},c.history.add=e=>{c.state.history.push(JSON.parse(JSON.stringify(e)))},c.history.clear=e=>{c.state.history=[]},c.element={root:l("div|class:result"),history:l("div|class:result__history"),control:l("div|class:result__control")},c.clear=()=>{for(;c.element.history.lastChild;)c.element.history.removeChild(c.element.history.lastChild)},c.render=()=>{c.element.root.appendChild(c.element.control),c.element.root.appendChild(c.element.history),c.control();const e=JSON.parse(JSON.stringify(c.state.history)).reverse().slice(0,c.state.count.max);return e&&e.length>0&&e.forEach((e,t)=>{c.element.history.appendChild(c.resultItem(e))}),c.element.root},c.control=()=>{const e=new a({iconName:"chevronUp",round:!0,ring:!0,type:"link",sr:"Toggle result",classList:["result__full"],func:()=>{c.full.toggle(),g.state.save(),c.full.render()}}),t=new a({text:"Roll the dice",ring:!0,type:"success",func:()=>{c.history.add(d.roll({name:!1,formula:JSON.parse(JSON.stringify(o.state.current))})),g.state.save(),c.update()}});c.element.control.appendChild(e.button),c.element.control.appendChild(t.button)},c.full={},c.full.toggle=()=>{c.state.full?c.state.full=!1:c.state.full=!0},c.full.render=()=>{const e=document.querySelector("html");c.state.full?e.classList.add("is__result-full"):e.classList.remove("is__result-full")},c.update=()=>{const e=JSON.parse(JSON.stringify(c.state.history))[c.state.history.length-1];e&&c.element.history.prepend(c.resultItem(e)),c.state.history.length>c.state.count.max&&c.element.history.removeChild(c.element.history.lastChild)},c.resultItem=e=>{const t=l("div|class:result__item"),s=l(`div:${e.total}|class:result__total`),n=l("div|class:result__details"),a=l("div|class:result__timestamp");return a.textContent=`${e.timestamp.hours<10?"0"+e.timestamp.hours:e.timestamp.hours}:${e.timestamp.minutes<10?"0"+e.timestamp.minutes:e.timestamp.minutes}:${e.timestamp.seconds<10?"0"+e.timestamp.seconds:e.timestamp.seconds} ${e.timestamp.date}/${e.timestamp.monthString}/${e.timestamp.year}`,e.name&&n.appendChild(l(`div:${e.name}|class:result__name`)),e.formula.forEach((e,t)=>{const s=l("div|class:result__formula"),a=l("div|class:result__formula-dice");let i="";e.dice.count>1&&(i+=e.dice.count),i=i+" d"+e.dice.size,e.dice.modifier>0?i=i+" +"+e.dice.modifier:e.dice.modifier<0&&(i=i+" "+e.dice.modifier),a.textContent=i,s.appendChild(a);const r=l("div|class:result__rolls"),o=l("div:Rolled\\:|class:result__rolls-title"),d=l("ul|class:result__rolls-list list__inline list__unstyled");e.result.rolls.all.forEach((t,s)=>{const n=l(`li:${t}|class:result__rolls-list-item`);20===e.dice.size&&20===t?n.classList.add("result__critical-success"):20===e.dice.size&&1===t&&n.classList.add("result__critical-failure"),d.appendChild(n)}),r.appendChild(o),r.appendChild(d),s.appendChild(r),n.appendChild(s)}),n.appendChild(a),t.appendChild(s),t.appendChild(n),t};const u={state:{}};u.state.current=[{name:"Short sword +1",formula:[{dice:{count:1,size:20,modifier:6},rules:{dropLowest:!1}}]},{name:"Melee damage",formula:[{dice:{count:1,size:6,modifier:4},rules:{dropLowest:!1}},{dice:{count:1,size:4,modifier:1},rules:{dropLowest:!1}}]}],u.add=()=>{const e={name:"",formula:JSON.parse(JSON.stringify(o.state.current))};u.state.current.push(e)},u.remove=e=>{u.state.current.splice(e,1)},u.up=e=>{if(e>0){let t=u.state.current.splice(e,1)[0];u.state.current.splice(e-1,0,t)}},u.down=e=>{if(e<u.state.current.length){let t=u.state.current.splice(e,1)[0];u.state.current.splice(e+1,0,t)}},u.element=l("div|class:saved"),u.delay=100,u.clear=()=>{for(;u.element.lastChild;)u.element.removeChild(u.element.lastChild)},u.render=()=>(u.update(),u.element),u.update=()=>{u.clear();let e=null;const t=l("div|class:saved__body");u.state.current.length>0&&u.state.current.forEach((e,s)=>{t.appendChild(u.savedItem(e,s))});const s=new a({text:"Save current formula",ring:!0,type:"light",size:"small",func:()=>{e=window.setTimeout((function(){u.add(),g.state.save(),u.update()}),u.delay)}});u.element.appendChild(s.button),u.element.appendChild(t)},u.savedItem=(e,t)=>{const s=l("div|class:saved__item"),n=l("div|class:saved__name"),i=l("label:Saved formula name|class:saved__name-label sr__only,for:saved__name-"+t),r=l(`input|class:saved__name-input input__small,id:saved__name-${t},type:text,value:${e.name},placeholder:Unnamed formula,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false`);r.addEventListener("input",()=>{e.name=r.value,g.state.save()});const o=l("div|class:saved__controls"),p=l("div|class:saved__formula");e.formula.forEach((e,t)=>{const s=l("div|class:saved__formula-dice");let n="";e.dice.count>1&&(n+=e.dice.count),n=n+" d"+e.dice.size,e.dice.modifier>0?n=n+" +"+e.dice.modifier:e.dice.modifier<0&&(n=n+" "+e.dice.modifier),s.textContent=n,p.appendChild(s)});let m=null;const h=new a({iconName:"minus",round:!0,ring:!0,type:"link",size:"small",sr:"Remove formula",classList:["saved__remove"],func:()=>{m=window.setTimeout((function(){u.remove(t),g.state.save(),u.update()}),u.delay)}}),_=new a({iconName:"chevronUp",round:!0,ring:!0,type:"link",size:"small",sr:"Move formula up",classList:["saved__up"],func:()=>{m=window.setTimeout((function(){u.up(t),g.state.save(),u.update()}),u.delay)}}),v=new a({iconName:"chevronDown",round:!0,ring:!0,type:"link",size:"small",sr:"Move formula down",classList:["saved__down"],func:()=>{m=window.setTimeout((function(){u.down(t),g.state.save(),u.update()}),u.delay)}}),f=new a({text:"Roll",ring:!0,type:"success",size:"small",classList:["saved__roll"],func:()=>{c.history.add(d.roll(JSON.parse(JSON.stringify(e)))),g.state.save(),c.update()}});return o.appendChild(h.button),o.appendChild(_.button),o.appendChild(v.button),s.appendChild(o),n.appendChild(i),n.appendChild(r),s.appendChild(n),s.appendChild(p),s.appendChild(f.button),s};s(6);const p={rgb:{},hsl:{},hex:{}};p.rgb.hsl=function(e){var t,s=e.r/255,l=e.g/255,n=e.b/255,a=Math.min(s,l,n),i=Math.max(s,l,n),r=i-a;i===a?t=0:s===i?t=(l-n)/r:l===i?t=2+(n-s)/r:n===i&&(t=4+(s-l)/r),(t=Math.min(60*t,360))<0&&(t+=360);var o=(a+i)/2;return{h:t,s:100*(i===a?0:o<=.5?r/(i+a):r/(2-i-a)),l:100*o}},p.rgb.hex=function(e){var t=(((255&Math.round(e.r))<<16)+((255&Math.round(e.g))<<8)+(255&Math.round(e.b))).toString(16);return"#"+"000000".substring(t.length)+t},p.hsl.rgb=function(e){var t,s,l,n=e.h/360,a=e.s/100,i=e.l/100;if(0===a)return{r:l=255*i,g:l,b:l};for(var r=2*i-(t=i<.5?i*(1+a):i+a-i*a),o=[0,0,0],d=0;d<3;d++)(s=n+1/3*-(d-1))<0&&s++,s>1&&s--,l=6*s<1?r+6*(t-r)*s:2*s<1?t:3*s<2?r+(t-r)*(2/3-s)*6:r,o[d]=255*l;return{r:o[0],g:o[1],b:o[2]}},p.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return{r:0,g:0,b:0};var s=t[0];3===t[0].length&&(s=s.split("").map((function(e){return e+e})).join(""));var l=parseInt(s,16);return{r:l>>16&255,g:l>>8&255,b:255&l}};s(7);const m={wrap:(e,t)=>{let s="form__wrap";return t&&t.length>0&&(t.forEach((e,t)=>{s=`${s} ${e}`}),s=s.trim()),l("div|class:"+s,e)},fieldset:e=>l("fieldset",e),group:e=>l("div|class:form__group form__group-block",e),indent:e=>l("div|class:form__indent",e),label:({id:e=!1,text:t=!1,icon:s=!1,classList:n=[]}={})=>{const a=l("label");return e&&a.setAttribute("for",e),t&&a.appendChild(l(`span:${t}|class:label__text`)),s&&a.prepend(l("span|class:label__icon")),n.length>0&&n.forEach((e,t)=>{a.classList.add(e)}),a},range:({id:e=!1,min:t=!1,max:s=!1,value:n=!1,classList:a=[],action:i=!1}={})=>{const r=l("input|type:range");return e&&r.setAttribute("id",e),(t||0===t)&&r.setAttribute("min",t),(s||0===s)&&r.setAttribute("max",s),(n||0===n)&&r.setAttribute("value",n),a.length>0&&a.forEach((e,t)=>{r.classList.add(e)}),i&&r.addEventListener("input",(function(e){i()})),r}},h=function({id:e="name",label:t="Name",value:s=!1,defaultValue:l=!1,min:n=!1,max:a=!1,classList:i=[],action:r=!1}={}){this.label=m.label({id:e,text:t}),this.range=m.range({id:e,min:n,max:a,value:s,classList:i,action:r}),this.wrap=()=>m.wrap([this.label,this.range]),this.group=()=>m.group([m.wrap([this.label],["form__group-item-text"]),m.wrap([this.range],["form__group-item-grow"])]),this.disable=()=>{this.label.classList.add("disabled"),this.range.disabled=!0},this.enable=()=>{this.label.classList.remove("disabled"),this.range.disabled=!1},this.update=e=>{(e||0===e)&&(this.range.value=e)}},_={default:{style:"dark",color:{range:{primary:{h:210,s:75},secondary:{h:225,s:20},success:{h:150,s:75},danger:{h:345,s:75}},lightness:{shades:9,contrast:8,start:8,end:92}}}};_.state=JSON.parse(JSON.stringify(_.default)),_.variable={},_.variable.render=()=>{const e=document.querySelector("html");let t=(_.state.color.lightness.end-_.state.color.lightness.start)/(_.state.color.lightness.shades-1);for(var s in _.state.color.range)for(var l=0;l<_.state.color.lightness.shades;l++){let a=JSON.parse(JSON.stringify(_.state.color.range[s]));a.l=t*l+_.state.color.lightness.start;let i=p.hsl.rgb(a);for(var n in i)e.style.setProperty(`--theme-${s}-${l+1}-${n}`,Math.round(i[n]));for(var n in a)e.style.setProperty(`--theme-${s}-${l+1}-${n}`,Math.round(a[n]))}},_.style={},_.style.toggle=e=>{if(!e||"dark"!==e&&"light"!==e)switch(_.state.style){case"light":_.state.style="dark";break;case"dark":_.state.style="light"}else _.state.style=e},_.style.render=()=>{const e=document.querySelector("html");switch(_.state.style){case"light":e.classList.add("is__theme-light"),e.classList.remove("is__theme-dark");break;case"dark":e.classList.remove("is__theme-light"),e.classList.add("is__theme-dark")}},_.keyboard={},_.keyboard.bind=()=>{window.addEventListener("keydown",e=>{e.ctrlKey&&e.altKey&&68==e.keyCode&&(_.style.toggle(),g.state.save(),_.style.render(),_.toggle.update())})},_.toggle={},_.toggle.element={input:l("input|type:checkbox,class:theme__style-input,id:theme__style-input")},_.toggle.render=()=>{const e=l("label|class:theme__style-label button button__light button__ring,for:theme__style-input,for:theme__style-input",[l("span|class:theme__style-icon"),l("span|class:theme__style-text",[l("span:Light mode|class:theme__style-text-light"),l("span:Dark mode|class:theme__style-text-dark")])]),t=l("div|class:theme__style-toggle",[_.toggle.element.input,e]);switch(_.state.style){case"light":_.toggle.element.input.checked=!1;break;case"dark":_.toggle.element.input.checked=!0}return _.toggle.element.input.addEventListener("change",e=>{_.toggle.element.input.checked?(_.style.toggle("dark"),_.state.style="dark"):(_.style.toggle("light"),_.state.style="light"),g.state.save(),_.style.render()}),t},_.toggle.update=()=>{switch(_.state.style){case"light":_.toggle.element.input.checked=!1;break;case"dark":_.toggle.element.input.checked=!0}},_.control={},_.control.render=()=>{const e=new h({id:"theme-primary-h",label:"Accent",value:_.state.color.range.primary.h,min:1,max:360,classList:["input__hue-spectrum"],action:()=>{_.state.color.range.primary.h=parseInt(e.range.value,10),g.state.save(),_.variable.render()}}),t=new h({id:"theme-primary-s",label:"Saturation",value:_.state.color.range.primary.s,min:0,max:100,action:()=>{_.state.color.range.primary.s=parseInt(t.range.value,10),g.state.save(),_.variable.render()}}),s=new h({id:"theme-secondary-h",label:"Color",value:_.state.color.range.secondary.h,min:1,max:360,classList:["input__hue-spectrum"],action:()=>{_.state.color.range.secondary.h=parseInt(s.range.value,10),g.state.save(),_.variable.render()}}),n=new h({id:"theme-secondary-s",label:"Saturation",value:_.state.color.range.secondary.s,min:0,max:100,action:()=>{_.state.color.range.secondary.s=parseInt(n.range.value,10),g.state.save(),_.variable.render()}}),i=new h({id:"theme-contrast",label:"Contrast",value:_.state.color.lightness.contrast,min:0,max:45,action:()=>{_.state.color.lightness.contrast=parseInt(i.range.value,10),_.state.color.lightness.start=_.state.color.lightness.contrast,_.state.color.lightness.end=100-_.state.color.lightness.contrast,g.state.save(),_.variable.render()}}),r=new a({text:"Reset theme",ring:!0,type:"primary",func:()=>{_.state=JSON.parse(JSON.stringify(_.default)),g.state.save(),_.variable.render(),_.style.toggle(_.state.style),_.style.render(),_.toggle.update(),e.update(_.state.color.range.primary.h),t.update(_.state.color.range.primary.s),s.update(_.state.color.range.secondary.h),n.update(_.state.color.range.secondary.s),i.update(_.state.color.lightness.contrast)}});return l("form|class:theme__control",[m.fieldset([_.toggle.render()]),m.fieldset([s.group(),n.group()]),m.fieldset([e.group(),t.group()]),m.fieldset([i.group()]),m.fieldset([r.button])])};const g={state:{}};g.state.save=()=>{const e={[r.name.string]:!0,formula:o.state,saved:u.state,result:c.state,theme:_.state};g.save(e)},g.state.load=()=>{const e=g.load();e&&e[r.name.string]&&(o.state=e.formula,u.state=e.saved,c.state=e.result,_.state=e.theme)},g.save=e=>{localStorage.setItem(r.name.string,JSON.stringify(e))},g.load=()=>JSON.parse(localStorage.getItem(r.name.string)),g.clear=()=>{localStorage.removeItem(r.name.string)};const v={render:(e,t)=>{const s=l("div|class:formula__item formula__count");let n=null;const a=t=>{let s=parseInt(t,10);return(isNaN(t)||""===t)&&(s=1),t>100&&(s=100),t<1&&(s=1),clearTimeout(n),n=window.setTimeout((function(){r.value=e.count}),1500),s},i=l("label:Dice count|class:sr__only,for:formula__count-input-"+t),r=l(`input|class:formula__count-input,id:formula__count-input-${t},type:number,value:${e.count},min:1,max:100`);r.addEventListener("input",()=>{e.count=a(r.value),g.state.save()}),r.addEventListener("blur",t=>{r.value=e.count});let o=null;return r.addEventListener("touchstart",e=>{o=parseInt(r.value,10)},{passive:!0}),r.addEventListener("touchend",e=>{o=null},{passive:!0}),r.addEventListener("touchmove",t=>{t.preventDefault();let s=o+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);e.count=a(s),r.value=e.count,g.state.save()},{passive:!0}),s.appendChild(i),s.appendChild(r),s}},f={availableDice:[2,3,4,6,8,10,12,20,100],render:(e,t)=>{const s=l("div|class:formula__item formula__size"),a=l("div|class:formula__size-display"),i=l("div|class:formula__size-text"),r=l("div|class:formula__size-icon",[n.render("chevronDown")]);a.appendChild(i),a.appendChild(r);const o=l("label:Dice size|class:sr__only,for:formula__size-select-"+t),d=l("select|class:formula__size-select,id:formula__size-select-"+t);d.addEventListener("change",()=>{e.size=d.selectedOptions[0].size,i.textContent="d"+e.size,g.state.save()}),f.availableDice.forEach((t,s)=>{const n=l(`option:d${t}|value:${t}`);n.size=t,e.size===t&&(n.selected=!0,i.textContent="d"+t),d.appendChild(n)});let c=null;return d.addEventListener("touchstart",e=>{c=d.selectedIndex},{passive:!0}),d.addEventListener("touchend",e=>{c=null},{passive:!0}),d.addEventListener("touchmove",t=>{t.preventDefault();let s=c+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);s<0&&(s=0),s>f.availableDice.length-1&&(s=f.availableDice.length-1),e.size=f.availableDice[s],d.selectedIndex=s,i.textContent="d"+e.size,g.state.save()},{passive:!0}),s.appendChild(o),s.appendChild(d),s.appendChild(a),s}},y={render:(e,t)=>{const s=l("div|class:formula__item formula__modifier");let n=null;const a=t=>{let s=parseInt(t,10);return(isNaN(t)||""===t)&&(s=0),t>999&&(s=999),t<-999&&(s=-999),clearTimeout(n),n=window.setTimeout((function(){o.value=i(e.modifier)}),1500),s},i=e=>e>=0?"+"+e:e,r=l("label:Dice modifier|class:sr__only,for:formula__modifier-input-"+t),o=l(`input|class:formula__modifier-input,id:formula__modifier-input-${t},type:text`);o.value=i(e.modifier),o.addEventListener("input",()=>{e.modifier=a(o.value),g.state.save()}),o.addEventListener("blur",t=>{o.value=i(a(e.modifier))});let d=null;return o.addEventListener("touchstart",e=>{d=parseInt(o.value,10)},{passive:!0}),o.addEventListener("touchend",e=>{d=null},{passive:!0}),o.addEventListener("touchmove",t=>{t.preventDefault();let s=d+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);e.modifier=a(s),o.value=i(e.modifier),g.state.save()},{passive:!0}),o.addEventListener("keydown",t=>{38===t.keyCode&&(e.modifier=e.modifier+1,o.value=i(e.modifier)),40===t.keyCode&&(e.modifier=e.modifier-1,o.value=i(e.modifier)),g.state.save()}),s.appendChild(r),s.appendChild(o),s}},b=function(e,t){this.count=v.render(e.dice,t),this.size=f.render(e.dice,t),this.modifier=y.render(e.dice,t)};s(8),s(9),s(10),s(11),s(12),s(13),s(14),s(15);s(16);s(17);const w={keyboard:{}};w.keyboard.bind=()=>{window.addEventListener("keydown",e=>{e.ctrlKey&&e.altKey&&82==e.keyCode&&(c.history.add(d.roll({name:!1,formula:JSON.parse(JSON.stringify(o.state.current))})),g.state.save(),c.update())})},w.render=()=>{const e=l("div|class:roll"),t=new a({text:"Roll the dice",ring:!0,size:"large",type:"success",func:()=>{c.history.add(d.roll({name:!1,formula:JSON.parse(JSON.stringify(o.state.current))})),g.state.save(),c.update()}});return e.appendChild(t.button),e};s(18);const C={};C.element=l("div|class:toolbar"),C.render=()=>{const e=new a({text:"Clear history",ring:!0,type:"link",size:"small",func:()=>{c.history.clear(),g.state.save(),c.clear()}}),t=new a({text:"Clear formula",ring:!0,type:"link",size:"small",func:()=>{o.reset(),g.state.save(),o.update()}}),s=new i({text:"Theme",iconName:"chevronDown",position:"bottomRight",content:_.control.render()});return C.element.appendChild(t.button),C.element.appendChild(e.button),C.element.appendChild(s.dropdown),C.element};s(19);const L={colour:{}};L.colour.render=()=>l("section",[l("div|class:styleguide__colour",[l("div|class:styleguide__colour-list",[l("div:900|class:styleguide__colour-item styleguide__colour-primary-900"),l("div:800|class:styleguide__colour-item styleguide__colour-primary-800"),l("div:700|class:styleguide__colour-item styleguide__colour-primary-700"),l("div:600|class:styleguide__colour-item styleguide__colour-primary-600"),l("div:500|class:styleguide__colour-item styleguide__colour-primary-500"),l("div:400|class:styleguide__colour-item styleguide__colour-primary-400"),l("div:300|class:styleguide__colour-item styleguide__colour-primary-300"),l("div:200|class:styleguide__colour-item styleguide__colour-primary-200"),l("div:100|class:styleguide__colour-item styleguide__colour-primary-100")]),l("div|class:styleguide__colour-list",[l("div:900|class:styleguide__colour-item styleguide__colour-secondary-900"),l("div:800|class:styleguide__colour-item styleguide__colour-secondary-800"),l("div:700|class:styleguide__colour-item styleguide__colour-secondary-700"),l("div:600|class:styleguide__colour-item styleguide__colour-secondary-600"),l("div:500|class:styleguide__colour-item styleguide__colour-secondary-500"),l("div:400|class:styleguide__colour-item styleguide__colour-secondary-400"),l("div:300|class:styleguide__colour-item styleguide__colour-secondary-300"),l("div:200|class:styleguide__colour-item styleguide__colour-secondary-200"),l("div:100|class:styleguide__colour-item styleguide__colour-secondary-100")]),l("div|class:styleguide__colour-list",[l("div:900|class:styleguide__colour-item styleguide__colour-success-900"),l("div:800|class:styleguide__colour-item styleguide__colour-success-800"),l("div:700|class:styleguide__colour-item styleguide__colour-success-700"),l("div:600|class:styleguide__colour-item styleguide__colour-success-600"),l("div:500|class:styleguide__colour-item styleguide__colour-success-500"),l("div:400|class:styleguide__colour-item styleguide__colour-success-400"),l("div:300|class:styleguide__colour-item styleguide__colour-success-300"),l("div:200|class:styleguide__colour-item styleguide__colour-success-200"),l("div:100|class:styleguide__colour-item styleguide__colour-success-100")]),l("div|class:styleguide__colour-list",[l("div:900|class:styleguide__colour-item styleguide__colour-danger-900"),l("div:800|class:styleguide__colour-item styleguide__colour-danger-800"),l("div:700|class:styleguide__colour-item styleguide__colour-danger-700"),l("div:600|class:styleguide__colour-item styleguide__colour-danger-600"),l("div:500|class:styleguide__colour-item styleguide__colour-danger-500"),l("div:400|class:styleguide__colour-item styleguide__colour-danger-400"),l("div:300|class:styleguide__colour-item styleguide__colour-danger-300"),l("div:200|class:styleguide__colour-item styleguide__colour-danger-200"),l("div:100|class:styleguide__colour-item styleguide__colour-danger-100")])]),l("div|class:styleguide__colour",[l("div|class:styleguide__colour-black"),l("div|class:styleguide__colour-white")])]);const x={Button:a,ControlFormulaSet:b,Dropdown:i,global:r,base:{},data:g,form:m,ControlRange:h,theme:_,layout:{},icon:n,dice:d,count:v,size:f,modifier:y,roll:w,result:c,formula:o,saved:u,toolbar:C,styleguide:L},k={};k.element=document.querySelector(".app"),k.clear=()=>{for(;k.element.lastChild;)k.element.removeChild(k.element.lastChild)},k.render=()=>{[l("div|class:layout",[l("section|class:layout__toolbar",[x.toolbar.render()]),l("section|class:layout__formula",[l("section|class:layout__wrap",[l("section|class:layout__controls",[x.formula.render(),x.roll.render(),x.saved.render()])])]),l("section|class:layout__result",[l("section|class:layout__wrap",[x.result.render()])])])].forEach((e,t)=>{k.element.appendChild(e)})},k.update=()=>{k.clear(),k.render()},x.data.state.load(),x.theme.variable.render(),x.theme.style.render(),x.theme.keyboard.bind(),x.result.full.render(),x.roll.keyboard.bind(),x.global.render(),k.render()}]);