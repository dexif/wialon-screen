(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8cKn":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",[n("div",{staticStyle:{height:"100vh",background:"#333"}},[n("q-resize-observable",{on:{resize:t.onResize}}),n("v-map",{ref:"map",staticStyle:{height:"100%",background:"#333"},attrs:{options:{zoomControl:!1},zoom:4,center:t.center}},[n("v-tilelayer",{attrs:{url:"//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}),n("l-tile-layer",{attrs:{layerType:"overlay",name:"Gurtam Objects",visible:"",url:"//wdctiles.wialon.com/gis_render/{x}_{y}_13/tile.png",attribution:""}})],1)],1)])},r=[];o._withStripped=!0;n("KKXr"),n("pIFo"),n("a1Th"),n("rGqo"),n("yt8O"),n("RW0V");var a=n("RY4O"),i=n.n(a),s=n("NjtJ");n("SRfc");function c(t){return"[object Date]"===Object.prototype.toString.call(t)}var u=n("F3uk"),l=n("sVeV"),h=864e5,d=36e5,f=6e4,p=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g;function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",o=Math.abs(t),r=Math.floor(o/60),a=o%60;return n+Object(u["d"])(r)+e+Object(u["d"])(a)}function m(t,e){var n=new Date(t.getFullYear(),e,0,0,0,0,0),o=n.getDate();t.setMonth(e-1,Math.min(o,t.getDate()))}function y(t,e,n){var o=new Date(t),r=n?1:-1;return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":Object(u["b"])("days"===t?"date":t);o["set".concat(n)](o["get".concat(n)]()+r*e[t])}else m(o,o.getMonth()+1+r*e.month)}),o}function v(t){if("number"===typeof t)return!0;var e=Date.parse(t);return!1===isNaN(e)}function D(t,e){return O(new Date,t,e)}function b(t){var e=new Date(t).getDay();return 0===e?7:e}function w(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var o=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-o);var r=(e-n)/(7*h);return 1+Math.floor(r)}function M(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new Date(e).getTime(),a=new Date(n).getTime(),i=new Date(t).getTime();return o.inclusiveFrom&&r--,o.inclusiveTo&&a++,i>r&&i<a}function T(t,e){return y(t,e,!0)}function S(t,e){return y(t,e,!1)}function O(t,e,n){var o=new Date(t),r="set".concat(n?"UTC":"");return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":t.charAt(0).toUpperCase()+t.slice(1);o["".concat(r).concat(n)](e[t])}else m(o,e.month)}),o}function Y(t,e){var n=new Date(t);switch(e){case"year":n.setMonth(0);case"month":n.setDate(1);case"day":n.setHours(0);case"hour":n.setMinutes(0);case"minute":n.setSeconds(0);case"second":n.setMilliseconds(0)}return n}function k(t,e){var n=new Date(t);switch(e){case"year":n.setMonth(11);case"month":n.setDate(E(t));case"day":n.setHours(23);case"hour":n.setMinutes(59);case"minute":n.setSeconds(59);case"second":n.setMilliseconds(59)}return n}function j(t){for(var e=new Date(t),n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return o.forEach(function(t){e=Math.max(e,new Date(t))}),e}function _(t){for(var e=new Date(t),n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return o.forEach(function(t){e=Math.min(e,new Date(t))}),e}function H(t,e,n){return(t.getTime()-t.getTimezoneOffset()*f-(e.getTime()-e.getTimezoneOffset()*f))/n}function q(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days",o=new Date(t),r=new Date(e);switch(n){case"years":return o.getFullYear()-r.getFullYear();case"months":return 12*(o.getFullYear()-r.getFullYear())+o.getMonth()-r.getMonth();case"days":return H(Y(o,"day"),Y(r,"day"),h);case"hours":return H(Y(o,"hour"),Y(r,"hour"),d);case"minutes":return H(Y(o,"minute"),Y(r,"minute"),f);case"seconds":return H(Y(o,"second"),Y(r,"second"),1e3)}}function x(t){return q(t,Y(t,"year"),"days")+1}function z(t){return c(t)?"date":"number"===typeof t?"number":"string"}function F(t,e,n){if(t||0===t)switch(e){case"date":return t;case"number":return t.getTime();default:return C(t,n)}}function V(t,e,n){var o=new Date(t);if(e){var r=new Date(e);if(o<r)return r}if(n){var a=new Date(n);if(o>a)return a}return o}function R(t,e,n){var o=new Date(t),r=new Date(e);if(void 0===n)return o.getTime()===r.getTime();switch(n){case"second":if(o.getSeconds()!==r.getSeconds())return!1;case"minute":if(o.getMinutes()!==r.getMinutes())return!1;case"hour":if(o.getHours()!==r.getHours())return!1;case"day":if(o.getDate()!==r.getDate())return!1;case"month":if(o.getMonth()!==r.getMonth())return!1;case"year":if(o.getFullYear()!==r.getFullYear())return!1;break;default:throw new Error("date isSameDate unknown unit ".concat(n))}return!0}function E(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}function I(t){if(t>=11&&t<=13)return"".concat(t,"th");switch(t%10){case 1:return"".concat(t,"st");case 2:return"".concat(t,"nd");case 3:return"".concat(t,"rd")}return"".concat(t,"th")}var N={YY:function(t){return Object(u["d"])(t.getFullYear(),4).substr(2)},YYYY:function(t){return Object(u["d"])(t.getFullYear(),4)},M:function(t){return t.getMonth()+1},MM:function(t){return Object(u["d"])(t.getMonth()+1)},MMM:function(t){return l["a"].lang.date.monthsShort[t.getMonth()]},MMMM:function(t){return l["a"].lang.date.months[t.getMonth()]},Q:function(t){return Math.ceil((t.getMonth()+1)/3)},Qo:function(t){return I(this.Q(t))},D:function(t){return t.getDate()},Do:function(t){return I(t.getDate())},DD:function(t){return Object(u["d"])(t.getDate())},DDD:function(t){return x(t)},DDDD:function(t){return Object(u["d"])(x(t),3)},d:function(t){return t.getDay()},dd:function(t){return this.dddd(t).slice(0,2)},ddd:function(t){return l["a"].lang.date.daysShort[t.getDay()]},dddd:function(t){return l["a"].lang.date.days[t.getDay()]},E:function(t){return t.getDay()||7},w:function(t){return w(t)},ww:function(t){return Object(u["d"])(w(t))},H:function(t){return t.getHours()},HH:function(t){return Object(u["d"])(t.getHours())},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(t){return Object(u["d"])(this.h(t))},m:function(t){return t.getMinutes()},mm:function(t){return Object(u["d"])(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Object(u["d"])(t.getSeconds())},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return Object(u["d"])(Math.floor(t.getMilliseconds()/10))},SSS:function(t){return Object(u["d"])(t.getMilliseconds(),3)},A:function(t){return this.H(t)<12?"AM":"PM"},a:function(t){return this.H(t)<12?"am":"pm"},aa:function(t){return this.H(t)<12?"a.m.":"p.m."},Z:function(t){return g(t.getTimezoneOffset(),":")},ZZ:function(t){return g(t.getTimezoneOffset())},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()}};function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DDTHH:mm:ss.SSSZ";if(0===t||t){var n=new Date(t);return e.replace(p,function(t,e){return t in N?N[t](n):void 0===e?t:e.split("\\]").join("]")})}}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.match(p)}function G(t){return c(t)?new Date(t.getTime()):t}var B={isValid:v,buildDate:D,getDayOfWeek:b,getWeekOfYear:w,isBetweenDates:M,addToDate:T,subtractFromDate:S,adjustDate:O,startOfDate:Y,endOfDate:k,getMaxDate:j,getMinDate:_,getDateDiff:q,getDayOfYear:x,inferDateFormat:z,convertDateToFormat:F,getDateBetween:V,isSameDate:R,daysInMonth:E,formatter:N,formatDate:C,matchFormat:A,clone:G},P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},K=[];P._withStripped=!0;n("xfY5");var $=n("whWW"),J=n("zwsX"),Q=n("4R65");Q["TileLayer"].Grayscale=Q["TileLayer"].extend({options:{quotaRed:2,quotaGreen:2,quotaBlue:2,quotaDividerTune:1,quotaDivider:function(){return this.quotaRed+this.quotaGreen+this.quotaBlue+this.quotaDividerTune}},initialize:function(t,e){e=e||{},e.crossOrigin=!0,Q["TileLayer"].prototype.initialize.call(this,t,e),this.on("tileload",function(t){this._makeGrayscale(t.tile)})},_createTile:function(){var t=Q["TileLayer"].prototype._createTile.call(this);return t.crossOrigin="Anonymous",t},_makeGrayscale:function(t){if(!t.getAttribute("data-grayscaled")){t.crossOrigin="";var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var n=e.getContext("2d");n.drawImage(t,0,0);for(var o=n.getImageData(0,0,e.width,e.height),r=o.data,a=0,i=r.length;a<i;a+=4)r[a]=r[a+1]=255-(this.options.quotaRed*r[a]+this.options.quotaGreen*r[a+1]+this.options.quotaBlue*r[a+2])/this.options.quotaDivider(),r[a+2]=255-(this.options.quotaRed*r[a]+this.options.quotaGreen*r[a+1]+this.options.quotaBlue*r[a+2])/this.options.quotaDivider();n.putImageData(o,0,0),t.setAttribute("data-grayscaled",!0),t.src=e.toDataURL()}}}),Q["TileLayer"].grayscale=function(t,e){return new Q["TileLayer"].Grayscale(t,e)};var Z={url:String,attribution:{type:String,custom:!0},detectRetina:{type:Boolean,custom:!1,default:!1},token:{type:String,custom:!0},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},options:{type:Object,default:function(){return{}}},tileLayerClass:{type:Function,default:Q["TileLayer"].grayscale},layerType:{type:String,default:void 0},name:{type:String,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},U={name:"GreyTileLayer",props:Z,mounted:function(){for(var t=this.options,e=["attribution","token","detectRetina","opacity","zIndex"],n=0;n<e.length;n++){var o=e[n];void 0!==this[o]&&(t[o]=this[o])}this.mapObject=this.tileLayerClass(this.url,t),window.L.DomEvent.on(this.mapObject,this.$listeners),Object($["a"])(this,this.mapObject,Z),this.parentContainer=Object(J["a"])(this.$parent),this.parentContainer.addLayer(this,!this.visible)},methods:{setAttribution:function(t,e){var n=this.$parent.mapObject.attributionControl;n.removeAttribution(e).addAttribution(t)},setToken:function(t){this.options.token=t},setVisible:function(t,e){t!==e&&this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.removeLayer(this))}},beforeDestroy:function(){this.parentContainer.removeLayer(this)},render:function(){return null}},W=U,X=n("KHd+"),tt=Object(X["a"])(W,P,K,!1,null,null,null);tt.options.__file="ColorTileLayer.vue";var et=tt.exports,nt=(n("bMVF"),n("Kw5r")),ot=n("igrg"),rt=n("wd/R"),at=n.n(rt),it=(n("lXzo"),u["c"].humanStorageSize);delete L.Icon.Default.prototype._getIconUrl;var st={name:"MapPage",components:{QResizeObservable:s["a"],"v-map":i.a.LMap,"v-tilelayer":et,"v-marker":i.a.LMarker,"l-tile-layer":i.a.LTileLayer,MultiProgress:ot["a"]},props:{},computed:{photo:function(){var t=B.formatDate(Date.now(),"DD.MM"),e=this.hb[t]?Object.keys(this.hb[t]):[];return e&&e[this.phcnt]||""}},data:function(){return{offices:[],counters:{},reboot:null,player:null,flespi:{},total:{total_units:0,local_units_in_prod:0,local_other_units_in_prod:0},video:0,hb:{},phcnt:0,showphoto:!1,centers:[[50.00774,22.71973],[-.26367,21.75293],[64.73664,159.47754],[36.94989,106.74316],[-25.56227,137.68066],[-26.74561,-62.18262],[36.94989,-89.16504]],center:[50.00774,22.71973],nycounter:at()("2018122819","YYYYMMDDHH").fromNow(!0)}},created:function(){var t=this;t.tickTack(),window.onYouTubeIframeAPIReady=function(){function e(e){e.target.playVideo(),t.showVideo(),console.log("player ready!!!!!!!!!!!!!!!!!")}function n(t){nt["a"].connector.socket.publish("prod/screen/videoStateChange",t.data.toString(),{retain:!0},function(){})}t.player=new window.YT.Player("ytplayer",{playerVars:{autoplay:1,controls:0,autohide:1,enablejsapi:1,loop:1,disablekb:1,fs:0,modestbranding:0,showinfo:0},events:{onReady:e,onStateChange:n}})};var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)},mounted:function(){at.a.locale("ru");var t=this;t.loadData(),setInterval(function(){t.showPhoto()},2e4),t.showPhoto(),setInterval(this.move,1e4),nt["a"].connector.socket.on("connect",function(){nt["a"].connector.socket.subscribe({name:"prod/screen/videocontrol",options:{},handler:function(e,n){"next"===e.toString()&&t.player&&t.player.nextVideo(),"prev"===e.toString()&&t.player&&t.player.previousVideo(),"pause"===e.toString()&&t.player&&t.player.pauseVideo(),"play"===e.toString()&&t.player&&t.player.playVideo(),-1!==e.toString().indexOf("playlist:")&&t.player&&(t.player.loadPlaylist(e.toString().replace("playlist:","")),t.player.playVideo())}}),nt["a"].connector.socket.subscribe({name:"prod/now/flespi",options:{},handler:function(e,n){e&&(e=JSON.parse(e),console.log(e),t.flespi=e)}}),nt["a"].connector.socket.subscribe({name:"prod/screen/reboot",options:{},handler:function(e,n){e&&(0===parseInt(e)&&document.location.reload(!0),t.reboot=parseInt(e))}}),nt["a"].connector.socket.subscribe({name:"prod/screen/image/+",options:{},handler:function(e,n){n=n.split("/");var o=n[n.length-1],r=e.toString(),a=B.formatDate(Date.now(),"DD.MM");t.hb[a]||(t.hb[a]={}),r.length>0?t.hb[a][o]=r:nt["a"].delete(t.hb[a],o)}}),nt["a"].connector.socket.publish("prod/screen/reboot",(new Date).getTime()+"",{retain:!0},function(){})})},methods:{humanStorageSize:it,tickTack:function(){at.a.relativeTimeThreshold("s",60),at.a.relativeTimeThreshold("m",60),at.a.relativeTimeThreshold("h",24),at.a.relativeTimeThreshold("d",31),at.a.relativeTimeThreshold("M",12);var t="2018-12-28T19:00:00+0300",e=at()(),n=at()(t),o=n.diff(e,"days"),r=n.subtract(o,"days").diff(e,"hours"),a=n.subtract(r,"hours").diff(e,"minutes");o?(e=at()(),o=(1===o?"1 ":"")+e.subtract({days:o}).toNow(!0)):o="",r?(e=at()(),r=(1===r?"1 ":"")+e.subtract({hours:r}).toNow(!0)):r="",a?(e=at()(),a=(1===a?"1 ":"")+e.subtract({minutes:a}).toNow(!0)):a="",this.nycounter=o+" "+r+" "+a},onResize:function(){setTimeout(function(){window.dispatchEvent(new Event("resize"))},250)},showPhoto:function(){var t=B.formatDate(Date.now(),"DD.MM"),e=this.hb[t]?Object.keys(this.hb[t]):[];e&&e.length>0&&(this.phcnt++,this.phcnt>=e.length&&(this.phcnt=0)),console.log(this.photo,this.hb),nt["a"].connector.socket.publish("prod/screen/status","showPhoto"+this.phcnt,{retain:!0},function(){}),this.showphoto=!0;var n=this;setTimeout(function(){n.showphoto=!1},5e3)},hideVideo:function(){this.player.pauseVideo(),this.video=0,nt["a"].connector.socket.publish("prod/screen/status","hideVideo",{retain:!0},function(){}),setTimeout(this.showVideo,6e4)},showVideo:function(){this.player.playVideo(),this.video=0,this.nycounter=at()("2018122819","YYYYMMDDHH").fromNow(!0),this.tickTack(),nt["a"].connector.socket.publish("prod/screen/status","showVideo",{retain:!0},function(){}),setTimeout(this.hideVideo,15e3)},loadHb:function(){var t=this;this.$axios.get("https://maptracker.net/screen/hb.json").then(function(e){var n=e.data;t.hb=n}).catch(function(){})},loadData:function(){var t=this;this.$axios.get("//extapi.wialon.com/ajax.html?api=wdc/stats").then(function(e){nt["a"].set(t,"counters",e.data.result),nt["a"].connector.socket.publish("prod/stats/".concat(at()().format("YYYY/MM/DD"),"/hosting"),JSON.stringify(e.data.result),{retain:!0},function(){})}).catch(function(){}),this.$axios.get("https://gurtam.com/total-units/full").then(function(e){nt["a"].set(t,"total",e.data||{total_units:0,local_units_in_prod:0,local_other_units_in_prod:0}),nt["a"].connector.socket.publish("prod/stats/".concat(at()().format("YYYY/MM/DD"),"/local"),JSON.stringify(e.data),{retain:!0},function(){})}).catch(function(){})},move:function(){function t(t,e){return Math.floor(Math.random()*e)+t}var e=window.innerHeight;document.querySelector("#lictotal").style.top=t(100,e-document.querySelector("#lictotal").offsetHeight-100)+"px",document.querySelector("#lictotal").style.bottom="auto"},prettifyNumber:function(t,e){var n=""+Math.floor(Math.abs(t)),o=t<0?"-":"",r=[];t="";for(var a=n.length-1,i=0;a>=0;a--,i++)i>0&&i%3===0&&(t=","+t),t=n[a]+t;if(e)switch(r=t.split(","),r.length){case 2:t=r[0]+"K";break;case 3:t=r[0]+"M";break}return o+t}}},ct=st,ut=(n("KRi9"),Object(X["a"])(ct,o,r,!1,null,null,null));ut.options.__file="map.vue";e["default"]=ut.exports},KRi9:function(t,e,n){"use strict";var o=n("wkES"),r=n.n(o);r.a},SRfc:function(t,e,n){n("IU+Z")("match",1,function(t,e,n){return[function(n){"use strict";var o=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o))},n]})},wkES:function(t,e,n){}}]);