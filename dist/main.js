(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap);"]),a.push([r.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 6fr 5fr;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n#header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1rem 2rem;\r\n  grid-column: 1/ 3;\r\n  grid-row: 1/2;\r\n  font-family: "Bruno Ace SC", cursive;\r\n}\r\n\r\n.nav-btn {\r\n  border: none;\r\n  padding: 0.5rem;\r\n  margin-right: 1rem;\r\n  background-color: transparent;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  transition: 0.2s;\r\n}\r\n\r\n.nav-btn:hover {\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n#enemy-board,\r\n#player-board {\r\n  grid-row: 2/3;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-auto-rows: 1fr;\r\n  width: 400px;\r\n  height: 400px;\r\n  margin-top: 4rem;\r\n  justify-self: center;\r\n}\r\n\r\n#enemy-board {\r\n  grid-column: 1/2;\r\n  margin-left: 12rem;\r\n}\r\n\r\n#player-board {\r\n  grid-column: 2 / 3;\r\n  margin-right: 12rem;\r\n}\r\n\r\n#enemy-board div,\r\n#player-board div {\r\n  border: 1px solid gray;\r\n}\r\n\r\n#options {\r\n  grid-column: 2/3;\r\n  justify-self: center;\r\n  margin-top: 3rem;\r\n  margin-right: 12rem;\r\n}\r\n\r\n.btn {\r\n  margin: 0 0.5rem;\r\n  border: none;\r\n  padding: 0.5rem;\r\n  border-radius: 8px;\r\n  background-color: #001f3f;\r\n  color: white;\r\n}\r\n\r\n.btn:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.ship {\r\n  /* background-color: #ff4500; */\r\n  background-color: #000080;\r\n}\r\n\r\n.hit {\r\n}\r\n\r\n.miss-hit {\r\n}\r\n\r\n.sunk {\r\n}\r\n',""]);const c=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<r.length;u++){var d=[].concat(r[u]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],d=i[u]||0,p="".concat(u," ").concat(d);i[u]=d+1;var l=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=t(r,o),u=0;u<i.length;u++){var d=e(i[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),u=e(216),d=e.n(u),p=e(589),l=e.n(p),f=e(426),h={};h.styleTagTransform=l(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=function(){return{recordedShots:[],ships:[],createShip:function(r,n,e){return this.ships.push(function(r,n,e){var t={lengthToSunk:r,numOfHit:0,Sunk:!1,xCords:n,yCords:e,hit:function(){t.numOfHit++},isSunk:function(){t.lengthToSunk===t.numOfHit&&(t.Sunk=!0)}};return t}(r,n,e))},placeShips:function(){this.ships.forEach((function(r){for(var n=0;n<r.xCords.length;n++)document.querySelector('#player-board [data-x="'.concat(r.xCords[n],'"][data-y="').concat(r.yCords[n],'"]')).classList.add("ship")}))},receiveAttack:function(r,n){var e=!1;this.ships.forEach((function(t){for(var o=0;o<t.xCords.length;o++)if(t.xCords[o]===parseInt(r)&&t.yCords[o]===parseInt(n)){t.hit(),t.isSunk(),e=!0;break}})),e||this.recordShot([r,n])},recordShot:function(r){this.recordedShots.push(r)},isAllShipSunk:function(){return this.ships.every((function(r){return r.Sunk}))}}};function v(r,n){r.receiveAttack(n.dataset.x,n.dataset.y),r.isAllShipSunk()&&console.log("sds")}var g=m();g.createShip(5,[0,1,2,3,4],[0,0,0,0,0]),g.createShip(4,[2,2,2,2],[2,3,4,5]),g.createShip(3,[4,5,6],[6,6,6]),g.createShip(3,[7,8,9],[8,8,8]),g.createShip(2,[9,9],[4,5]),g.placeShips(),document.querySelectorAll("#player-board div").forEach((function(r){r.addEventListener("click",(function(){v(g,r)}))}));var y=m();y.createShip(5,[0,1,2,3,4],[0,0,0,0,0]),y.createShip(4,[2,2,2,2],[2,3,4,5]),y.createShip(3,[4,5,6],[6,6,6]),y.createShip(3,[7,8,9],[8,8,8]),y.createShip(2,[9,9],[4,5]),y.placeShips(),document.querySelectorAll("#enemy-board div").forEach((function(r){r.addEventListener("click",(function(){v(y,r)}))}))})()})();