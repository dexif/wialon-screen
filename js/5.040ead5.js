(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8cKn":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("div",{staticStyle:{height:"100vh",background:"#fff"}},[o("q-resize-observable",{on:{resize:t.onResize}}),o("v-map",{ref:"map",staticStyle:{height:"100%",background:"#fff"},attrs:{options:{zoomControl:!1},zoom:4,minZoom:4,maxZoom:7,center:t.center}},[t.osm?o("l-tile-layer",{attrs:{url:"//cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png"}}):t._e(),o("l-tile-layer",{attrs:{minZoom:4,maxZoom:7,layerType:"overlay",name:"Gurtam Objects",visible:"",url:"//wdctiles.wialon.com/gis_render/{x}_{y}_{z}/717350/tile.png",attribution:"",options:{zoomReverse:!0,zoomOffset:-1}}})],1),t.osm?o("q-btn",{staticClass:"absolute-top-right",staticStyle:{"z-index":"9999"},attrs:{size:"sm",round:"",flat:""},on:{click:function(e){t.osm=!t.osm}}},[o("q-icon",{attrs:{name:"map"}})],1):t._e()],1)])},a=[];i._withStripped=!0;o("KKXr"),o("pIFo"),o("a1Th"),o("rGqo"),o("yt8O"),o("RW0V");var n=o("RY4O"),r=o.n(n),s=o("NjtJ"),l=o("9JDm"),c=o("F3uk"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div")},h=[];u._withStripped=!0;o("xfY5");var p=o("whWW"),d=o("zwsX"),y=o("4R65");y["TileLayer"].Grayscale=y["TileLayer"].extend({options:{quotaRed:2,quotaGreen:2,quotaBlue:2,quotaDividerTune:1,quotaDivider:function(){return this.quotaRed+this.quotaGreen+this.quotaBlue+this.quotaDividerTune}},initialize:function(t,e){e=e||{},e.crossOrigin=!0,y["TileLayer"].prototype.initialize.call(this,t,e),this.on("tileload",function(t){this._makeGrayscale(t.tile)})},_createTile:function(){var t=y["TileLayer"].prototype._createTile.call(this);return t.crossOrigin="Anonymous",t},_makeGrayscale:function(t){if(!t.getAttribute("data-grayscaled")){t.crossOrigin="";var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var o=e.getContext("2d");o.drawImage(t,0,0);for(var i=o.getImageData(0,0,e.width,e.height),a=i.data,n=0,r=a.length;n<r;n+=4)a[n]=a[n+1]=255-(this.options.quotaRed*a[n]+this.options.quotaGreen*a[n+1]+this.options.quotaBlue*a[n+2])/this.options.quotaDivider(),a[n+2]=255-(this.options.quotaRed*a[n]+this.options.quotaGreen*a[n+1]+this.options.quotaBlue*a[n+2])/this.options.quotaDivider();o.putImageData(i,0,0),t.setAttribute("data-grayscaled",!0),t.src=e.toDataURL()}}}),y["TileLayer"].grayscale=function(t,e){return new y["TileLayer"].Grayscale(t,e)};var f={url:String,attribution:{type:String,custom:!0},detectRetina:{type:Boolean,custom:!1,default:!1},token:{type:String,custom:!0},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},options:{type:Object,default:function(){return{}}},tileLayerClass:{type:Function,default:y["TileLayer"].grayscale},layerType:{type:String,default:void 0},name:{type:String,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},m={name:"GreyTileLayer",props:f,mounted:function(){for(var t=this.options,e=["attribution","token","detectRetina","opacity","zIndex"],o=0;o<e.length;o++){var i=e[o];void 0!==this[i]&&(t[i]=this[i])}this.mapObject=this.tileLayerClass(this.url,t),window.L.DomEvent.on(this.mapObject,this.$listeners),Object(p["a"])(this,this.mapObject,f),this.parentContainer=Object(d["a"])(this.$parent),this.parentContainer.addLayer(this,!this.visible)},methods:{setAttribution:function(t,e){var o=this.$parent.mapObject.attributionControl;o.removeAttribution(e).addAttribution(t)},setToken:function(t){this.options.token=t},setVisible:function(t,e){t!==e&&this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.removeLayer(this))}},beforeDestroy:function(){this.parentContainer.removeLayer(this)},render:function(){return null}},b=m,v=o("KHd+"),g=Object(v["a"])(b,u,h,!1,null,null,null);g.options.__file="ColorTileLayer.vue";var w=g.exports,T=(o("bMVF"),o("Kw5r")),_=o("igrg"),k=o("wd/R"),D=o.n(k),q=(o("lXzo"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div")}),S=[];q._withStripped=!0;var O=o("MVZn"),R=o.n(O);y["TileLayer"].Grayscale=y["TileLayer"].extend({options:{quotaRed:2,quotaGreen:2,quotaBlue:2,quotaDividerTune:1,quotaDivider:function(){return this.quotaRed+this.quotaGreen+this.quotaBlue+this.quotaDividerTune}},initialize:function(t,e){e=e||{},e.crossOrigin=!0,y["TileLayer"].prototype.initialize.call(this,t,R()({},e,{zoomReverse:!0})),this.on("tileload",function(t){this._makeGrayscale(t.tile)})},_createTile:function(){var t=y["TileLayer"].prototype._createTile.call(this);return t.crossOrigin="Anonymous",t},_makeGrayscale:function(t){if(!t.getAttribute("data-grayscaled")){t.crossOrigin="";var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var o=e.getContext("2d");o.drawImage(t,0,0);for(var i=o.getImageData(0,0,e.width,e.height),a=i.data,n=0,r=a.length;n<r;n+=4)a[n]=a[n+1]=(this.options.quotaRed*a[n]+this.options.quotaGreen*a[n+1]+this.options.quotaBlue*a[n+2])/this.options.quotaDivider(),a[n+2]=(this.options.quotaRed*a[n]+this.options.quotaGreen*a[n+1]+this.options.quotaBlue*a[n+2])/this.options.quotaDivider();o.putImageData(i,0,0),t.setAttribute("data-grayscaled",!0),t.src=e.toDataURL()}}}),y["TileLayer"].grayscale=function(t,e){return new y["TileLayer"].Grayscale(t,e)};var z={url:String,attribution:{type:String,custom:!0},detectRetina:{type:Boolean,custom:!1,default:!1},token:{type:String,custom:!0},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},options:{type:Object,default:function(){return{}}},tileLayerClass:{type:Function,default:y["TileLayer"].grayscale},layerType:{type:String,default:void 0},name:{type:String,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},j={name:"GreyTileLayer",props:z,mounted:function(){for(var t=this.options,e=["attribution","token","detectRetina","opacity","zIndex"],o=0;o<e.length;o++){var i=e[o];void 0!==this[i]&&(t[i]=this[i])}this.mapObject=this.tileLayerClass(this.url,t),window.L.DomEvent.on(this.mapObject,this.$listeners),Object(p["a"])(this,this.mapObject,z),this.parentContainer=Object(d["a"])(this.$parent),this.parentContainer.addLayer(this,!this.visible)},methods:{setAttribution:function(t,e){var o=this.$parent.mapObject.attributionControl;o.removeAttribution(e).addAttribution(t)},setToken:function(t){this.options.token=t},setVisible:function(t,e){t!==e&&this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.removeLayer(this))}},beforeDestroy:function(){this.parentContainer.removeLayer(this)},render:function(){return null}},x=j,M=Object(v["a"])(x,q,S,!1,null,null,null);M.options.__file="ColorTileLayerReverse.vue";var C=M.exports,V=c["c"].humanStorageSize;delete L.Icon.Default.prototype._getIconUrl;var G={name:"MapPage",components:{QResizeObservable:s["a"],"v-map":r.a.LMap,"v-tilelayer":w,"v-marker":r.a.LMarker,"l-tile-layer":r.a.LTileLayer,ColorTileLayerReverse:C,MultiProgress:_["a"]},props:{},computed:{photo:function(){var t=l["d"].formatDate(Date.now(),"DD.MM"),e=this.hb[t]?Object.keys(this.hb[t]):[];return e&&e[this.phcnt]||""}},data:function(){return{offices:[],counters:{},reboot:null,player:null,flespi:{},total:{total_units:0,local_units_in_prod:0,local_other_units_in_prod:0},video:0,hb:{},phcnt:0,showphoto:!1,centers:[[50.00774,22.71973],[-.26367,21.75293],[64.73664,159.47754],[36.94989,106.74316],[-25.56227,137.68066],[-26.74561,-62.18262],[36.94989,-89.16504]],center:[50.00774,22.71973],nycounter:D()("2018122819","YYYYMMDDHH").fromNow(!0),osm:!0}},created:function(){var t=this;t.tickTack(),window.onYouTubeIframeAPIReady=function(){function e(e){e.target.playVideo(),t.showVideo(),console.log("player ready!!!!!!!!!!!!!!!!!")}function o(t){T["a"].connector.socket.publish("prod/screen/videoStateChange",t.data.toString(),{retain:!0},function(){})}t.player=new window.YT.Player("ytplayer",{playerVars:{autoplay:1,controls:0,autohide:1,enablejsapi:1,loop:1,disablekb:1,fs:0,modestbranding:0,showinfo:0},events:{onReady:e,onStateChange:o}})};var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)},mounted:function(){D.a.locale("ru");var t=this;t.loadData(),setInterval(function(){t.showPhoto()},2e4),t.showPhoto(),setInterval(this.move,1e4),T["a"].connector.socket.on("connect",function(){T["a"].connector.socket.subscribe({name:"prod/screen/videocontrol",options:{},handler:function(e,o){"next"===e.toString()&&t.player&&t.player.nextVideo(),"prev"===e.toString()&&t.player&&t.player.previousVideo(),"pause"===e.toString()&&t.player&&t.player.pauseVideo(),"play"===e.toString()&&t.player&&t.player.playVideo(),-1!==e.toString().indexOf("playlist:")&&t.player&&(t.player.loadPlaylist(e.toString().replace("playlist:","")),t.player.playVideo())}}),T["a"].connector.socket.subscribe({name:"prod/now/flespi",options:{},handler:function(e,o){e&&(e=JSON.parse(e),console.log(e),t.flespi=e)}}),T["a"].connector.socket.subscribe({name:"prod/screen/reboot",options:{},handler:function(e,o){e&&(0===parseInt(e)&&document.location.reload(!0),t.reboot=parseInt(e))}}),T["a"].connector.socket.subscribe({name:"prod/screen/image/+",options:{},handler:function(e,o){o=o.split("/");var i=o[o.length-1],a=e.toString(),n=l["d"].formatDate(Date.now(),"DD.MM");t.hb[n]||(t.hb[n]={}),a.length>0?t.hb[n][i]=a:T["a"].delete(t.hb[n],i)}}),T["a"].connector.socket.publish("prod/screen/reboot",(new Date).getTime()+"",{retain:!0},function(){})})},methods:{humanStorageSize:V,tickTack:function(){D.a.relativeTimeThreshold("s",60),D.a.relativeTimeThreshold("m",60),D.a.relativeTimeThreshold("h",24),D.a.relativeTimeThreshold("d",31),D.a.relativeTimeThreshold("M",12);var t="2018-12-28T19:00:00+0300",e=D()(),o=D()(t),i=o.diff(e,"days"),a=o.subtract(i,"days").diff(e,"hours"),n=o.subtract(a,"hours").diff(e,"minutes");i?(e=D()(),i=(1===i?"1 ":"")+e.subtract({days:i}).toNow(!0)):i="",a?(e=D()(),a=(1===a?"1 ":"")+e.subtract({hours:a}).toNow(!0)):a="",n?(e=D()(),n=(1===n?"1 ":"")+e.subtract({minutes:n}).toNow(!0)):n="",this.nycounter=i+" "+a+" "+n},onResize:function(){setTimeout(function(){window.dispatchEvent(new Event("resize"))},250)},showPhoto:function(){var t=l["d"].formatDate(Date.now(),"DD.MM"),e=this.hb[t]?Object.keys(this.hb[t]):[];e&&e.length>0&&(this.phcnt++,this.phcnt>=e.length&&(this.phcnt=0)),console.log(this.photo,this.hb),T["a"].connector.socket.publish("prod/screen/status","showPhoto"+this.phcnt,{retain:!0},function(){}),this.showphoto=!0;var o=this;setTimeout(function(){o.showphoto=!1},5e3)},hideVideo:function(){this.player.pauseVideo(),this.video=0,T["a"].connector.socket.publish("prod/screen/status","hideVideo",{retain:!0},function(){}),setTimeout(this.showVideo,6e4)},showVideo:function(){this.player.playVideo(),this.video=0,this.nycounter=D()("2018122819","YYYYMMDDHH").fromNow(!0),this.tickTack(),T["a"].connector.socket.publish("prod/screen/status","showVideo",{retain:!0},function(){}),setTimeout(this.hideVideo,15e3)},loadHb:function(){var t=this;this.$axios.get("https://maptracker.net/screen/hb.json").then(function(e){var o=e.data;t.hb=o}).catch(function(){})},loadData:function(){var t=this;this.$axios.get("//extapi.wialon.com/ajax.html?api=wdc/stats").then(function(e){T["a"].set(t,"counters",e.data.result),T["a"].connector.socket.publish("prod/stats/".concat(D()().format("YYYY/MM/DD"),"/hosting"),JSON.stringify(e.data.result),{retain:!0},function(){})}).catch(function(){}),this.$axios.get("https://gurtam.com/total-units/full").then(function(e){T["a"].set(t,"total",e.data||{total_units:0,local_units_in_prod:0,local_other_units_in_prod:0}),T["a"].connector.socket.publish("prod/stats/".concat(D()().format("YYYY/MM/DD"),"/local"),JSON.stringify(e.data),{retain:!0},function(){})}).catch(function(){})},move:function(){function t(t,e){return Math.floor(Math.random()*e)+t}var e=window.innerHeight;document.querySelector("#lictotal").style.top=t(100,e-document.querySelector("#lictotal").offsetHeight-100)+"px",document.querySelector("#lictotal").style.bottom="auto"},prettifyNumber:function(t,e){var o=""+Math.floor(Math.abs(t)),i=t<0?"-":"",a=[];t="";for(var n=o.length-1,r=0;n>=0;n--,r++)r>0&&r%3===0&&(t=","+t),t=o[n]+t;if(e)switch(a=t.split(","),a.length){case 2:t=a[0]+"K";break;case 3:t=a[0]+"M";break}return i+t}}},Y=G,I=(o("KRi9"),Object(v["a"])(Y,i,a,!1,null,null,null));I.options.__file="map.vue";e["default"]=I.exports},KRi9:function(t,e,o){"use strict";var i=o("wkES"),a=o.n(i);a.a},wkES:function(t,e,o){}}]);