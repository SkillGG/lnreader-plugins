var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function o(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}l((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("cheerio"),r=require("@libs/fetch"),i=require("@libs/defaultCover"),a=new(function(){function a(e){var t;this.imageRequestInit={headers:{"Alt-Used":"www.mtlnovel.com"}},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/mtlnovel/mtlnovel/icon.png",this.site=e.sourceSite,this.version="1.1.0",this.options=null!==(t=e.options)&&void 0!==t?t:{},this.filters=e.filters}return a.prototype.safeFecth=function(n){return e(this,arguments,void 0,(function(e,n){var i;return void 0===n&&(n=new Headers),t(this,(function(t){switch(t.label){case 0:return n.append("Alt-Used","www.mtlnovel.com"),[4,(0,r.fetchApi)(e,{headers:n})];case 1:if(!(i=t.sent()).ok)throw new Error("Could not reach site ("+i.status+") try to open in webview.");return[2,i]}}))}))},a.prototype.popularNovels=function(r,a){return e(this,arguments,void 0,(function(e,r){var a,s,o,l,c=this,u=r.filters,h=r.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:return a="".concat(this.site,"novel-list/?"),u&&(a+="orderby=".concat(u.order.value),a+="&order=".concat(u.sort.value),a+="&status=".concat(u.storyStatus.value)),h&&(a+="&m_orderby=date"),a+="&pg=".concat(e),[4,this.safeFecth(a).then((function(e){return e.text()}))];case 1:return s=t.sent(),o=(0,n.load)(s),l=[],o("div.box.wide").each((function(e,t){var n=o(t).find("a.list-title").text().trim(),r=o(t).find("amp-img").attr("src");r&&"https://www.mtlnovel.net/no-image.jpg.webp"!=r||(r=i.defaultCover);var a=o(t).find("a.list-title").attr("href");if(a){var s={name:n,cover:r,path:a.replace(c.site,"")};l.push(s)}})),[2,l]}}))}))},a.prototype.parseNovel=function(r){return e(this,void 0,void 0,(function(){var i,a,s,o,l,c,u,h=this;return t(this,(function(p){switch(p.label){case 0:return(i=new Headers).append("Referer","".concat(this.site,"novel-list/")),[4,this.safeFecth(this.site+r,i).then((function(e){return e.text()}))];case 1:return a=p.sent(),s=(0,n.load)(a),o={path:r,name:s("h1.entry-title").text()||"Untitled",cover:s(".nov-head > amp-img").attr("src"),summary:s("div.desc > h2").next().text().trim(),author:s("#author").text(),status:s("#status").text(),genres:s("#genre").text().replace(/\s+/g,""),chapters:[]},l=this.site+r+"chapter-list/",c=function(){return e(h,void 0,void 0,(function(){var e,r,a=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.safeFecth(l,i).then((function(e){return e.text()}))];case 1:return e=t.sent(),s=(0,n.load)(e),r=[],s("div.ch-list").find("a.ch-link").each((function(e,t){var n=s(t).text().replace("~ ",""),i=s(t).attr("href");i&&r.push({path:i.replace(a.site,""),name:n,releaseTime:null})})),[2,r.reverse()]}}))}))},u=o,[4,c()];case 2:return u.chapters=p.sent(),[2,o]}}))}))},a.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,i;return t(this,(function(t){switch(t.label){case 0:return[4,this.safeFecth(this.site+r).then((function(e){return e.text()}))];case 1:return e=t.sent(),i=(0,n.load)(e),[2,i("div.par").html()||""]}}))}))},a.prototype.searchNovels=function(n,r){return e(this,void 0,void 0,(function(){var e,i,a,s=this;return t(this,(function(t){switch(t.label){case 0:return 1!==r?[2,[]]:(e=this.site+"wp-admin/admin-ajax.php?action=autosuggest&q="+n,[4,this.safeFecth(e)]);case 1:return[4,t.sent().json()];case 2:return i=t.sent(),a=[],i.items[0].results.map((function(e){var t={name:e.title.replace(/<\/?strong>/g,""),cover:e.thumbnail,path:e.permalink.replace(s.site,"")};a.push(t)})),[2,a]}}))}))},a}())({id:"mtlnovel-fr",sourceSite:"https://fr.mtlnovel.com/",sourceName:"MTL Novel",options:{lang:"French"},filters:{order:{value:"view",label:"Order by",options:[{label:"Date",value:"date"},{label:"Name",value:"name"},{label:"Rating",value:"rating"},{label:"View",value:"view"}],type:"Picker"},sort:{value:"desc",label:"Sort by",options:[{label:"Descending",value:"desc"},{label:"Ascending",value:"asc"}],type:"Picker"},storyStatus:{value:"all",label:"Status",options:[{label:"All",value:"all"},{label:"Ongoing",value:"ongoing"},{label:"Complete",value:"completed"}],type:"Picker"}}});exports.default=a;