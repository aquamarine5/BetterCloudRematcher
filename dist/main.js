(()=>{function u(){return h("div",null,h("h1",null,"BetterNCM Plugin Config"))}plugin.onConfig(()=>{let e=document.createElement("div");return ReactDOM.render(u(),e),e});plugin.onLoad(()=>{window.rematcher_rematch=function(e,r){function c(){console.group(`Rematcher_main_success:(${e}->${r})`),console.log(this),console.log(arguments),console.groupEnd()}function t(){console.group(`Rematcher_main_failed:(${e}->${r})`),console.error(this),console.error(arguments),console.groupEnd()}NEJ.P("nej.j").Ru("".concat(APP_CONF.domain,"/api/cloud/user/song/match"),{type:"json",query:{userId:localCache.Du("host.profile.userId"),songId:2629531019,adjustSongId:65536},onload:c,onerror:t})},window.rematcher_cloudsearch=function(e){return console.log(`cloudsearch_main(${e})`),new Promise((r,c)=>{function t(l){console.log(`Resolved cloudsearch(arg: ${e}):`,l),r(l)}let o=localCache.Du("host.profile.userId"),n=3;var a={data:{uid:o,offset:0,total:!0,limit:n,keyword:e},ext:{},key:`track_cloud_search-${o}-${e}`,limit:n,offset:0,onload:t,rkey:`r-track_cloud_search-${o}-${e}-0-${n}`};window.ctl.player.AJ[0].MF.$i(a),window.ctl.player.AJ[0].MF.Ge("doloadlist",a)})},window.rematcher_combinecolumn=function(e){function r(){function o(){let i=window.getComputedStyle(document.body).getPropertyValue("--md-accent-color");return i==""?null:i.match(/\d+/g).reverse().map(s=>parseInt(s).toString(16).padStart(2,"0")).join("")}var n=ctl.skin.At().selected,a=n.type=="default"&&n.name=="default",l=o();return l?`#ff${l}`:a?"#ffd6d6dc":"#ff474747"}let c="rematcher-",t=[];for(let o=0;o<e.total;o++){let n=e.list[o];t.push({menu_id:c+n.id.toString(),text:n.name,image_path:NEJ.P("nm.x").Zp("icn_list"),image_color:r(),enable:!0,children:null,menu:!0,separator:!1})}return console.log(r()),t.push({separator:!0,enable:!0,text:"\u83DC\u5355\u9879",menu_id:"0",menu:!0,children:null}),t.push({menu_id:111111,text:"\u53E6\u5916\u9009\u62E9",image_path:NEJ.P("nm.x").Zp("icn_lookfor"),image_color:r(),enable:!0,menu:!0,separator:!1,children:null}),t}});})();
