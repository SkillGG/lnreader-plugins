var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("htmlparser2"),n=require("@libs/filterInputs"),i=require("@libs/defaultCover"),a=require("@libs/fetch"),o=require("@libs/novelStatus"),s=function(){function s(){var e=this;this.id="foxteller",this.name="Foxteller",this.site="https://www.foxteller.com",this.version="1.0.0",this.icon="src/en/foxteller/icon.png",this.resolveUrl=function(t){return e.site+"/novel/"+t},this.filters={order:{value:"popularity",label:"Order by",options:[{label:"Popular Novels",value:"popularity"},{label:"New Novels",value:"newest"}],type:n.FilterTypes.Picker}}}return s.prototype.popularNovels=function(r,n){return e(this,arguments,void 0,(function(e,r){var n,o,s,l,u=r.filters;return t(this,(function(e){switch(e.label){case 0:return n=this.site+"/library?sort="+(null===(l=null==u?void 0:u.order)||void 0===l?void 0:l.value)||"popularity",[4,(0,a.fetchApi)(n).then((function(e){return e.text()}))];case 1:return o=e.sent(),s=[],(o.match(/<div class="col-md-6">([\s\S]*?)<\/div>/g)||[]).forEach((function(e){var t=e.match(/<a href="(.*?)" title="(.*?)">/)||[],r=t[1],n=t[2];if(n&&r){var a=e.match(/<img class="img-fluid" src="(.*?)".*>/);s.push({name:n,cover:(null==a?void 0:a[1])||i.defaultCover,path:r.split("/")[4]})}})),[2,s]}}))}))},s.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var e,s,l,u,c,h,f,p,v,d,m,y,g;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.resolveUrl(n)).then((function(e){return e.text()}))];case 1:return e=t.sent(),s={path:n,name:"",genres:"",summary:"",status:"",chapters:[]},l=!1,u=!1,c=!1,h=!1,f=!1,p=!1,v=!1,d=!1,m=[],y={},g=new r.Parser({onopentag:function(e,t){var r;s.cover||"img-fluid"!==t.class?"div"===e&&"novel-genres"===t.class?l=!0:l&&"li"===e?u=!0:"div"===e&&"novel-description"===t.class?c=!0:"div"===e&&"novel-tags"===t.class?h=!0:h&&"li"===e?f=!0:"div"===e&&"col-md-6"===t.class?p=!0:p&&"a"===e?(v=!0,y.chapterNumber=m.length+1,y.path=n+"/"+t.href.split("/")[5]):v&&"i"===e&&(null===(r=t.class)||void 0===r?void 0:r.includes("lock"))&&(d=!0):(s.name=t.alt,s.cover=t.src||i.defaultCover)},ontext:function(e){if(l)u&&(s.genres+=e+", ");else if(c)s.summary+=e.trim();else if(h){if(f)switch(e.toLowerCase().trim()){case"completed":s.status=o.NovelStatus.Completed;break;case"ongoing":s.status=o.NovelStatus.Ongoing;break;case"hiatus":s.status=o.NovelStatus.OnHiatus;break;default:s.status=o.NovelStatus.Unknown}}else p&&v&&(y.name=(y.name||"")+e)},onclosetag:function(e){var t;l?u?u=!1:(l=!1,s.genres=null===(t=s.genres)||void 0===t?void 0:t.slice(0,-2)):c?"hr"===e||"p"===e?s.summary+="\n":"div"===e&&(c=!1):h?"li"===e?f=!1:"div"===e&&(h=!1):p&&(v?"li"===e&&(d?d=!1:(y.name=y.name.trim(),m.push(y)),v=!1,y={}):"ul"===e&&(p=!1))}}),g.write(e),g.end(),s.chapters=m,[2,s]}}))}))},s.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,n,i,o,s,l,c;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.resolveUrl(r))];case 1:return[4,(e=t.sent()).text()];case 2:if(n=t.sent(),i=r.split("/")[0],!(o=null===(c=n.match(/'chapter_id': '([\d]+)'/))||void 0===c?void 0:c[1]))throw new Error("No chapter found");return[4,(0,a.fetchApi)(this.site+"/aux_dem",{method:"post",headers:{Accept:"application/json, text/plain, */*","Accept-Language":"ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3","Content-Type":"application/json;charset=utf-8"},Referer:e.url,body:JSON.stringify({x1:i,x2:o})}).then((function(e){return e.json()}))];case 3:if((s=t.sent().aux)&&"string"==typeof s)return l=s.replace(/%R([a-f])&/g,(function(e,t){switch(t){case"a":return"A";case"c":return"B";case"b":return"C";case"d":return"D";case"f":return"E";case"e":return"F";default:return e}})),[2,decodeURIComponent(escape(u(l)))];throw new Error("This chapter is closed")}}))}))},s.prototype.searchNovels=function(r){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.site+"/search",{method:"post",headers:{Accept:"application/json, text/plain, */*","Accept-Language":"ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3","Content-Type":"application/json;charset=utf-8"},Referer:this.site,body:JSON.stringify({query:r})}).then((function(e){return e.text()}))];case 1:return e=t.sent(),n=[],(e.match(/<a.*>([\s\S]*?)<\/a>/g)||[]).forEach((function(e){var t,r,a,o=((null===(t=e.match(/<a href="(.*?)"/))||void 0===t?void 0:t[1])||"").split("/")[4],s=null===(r=e.match(/<span class="ellipsis-1">(.*?)<\/span>/))||void 0===r?void 0:r[1];if(s&&o){var l=(null===(a=e.match(/<img src="(.*?)".*>/))||void 0===a?void 0:a[1])||i.defaultCover;n.push({name:s,cover:l,path:o})}})),[2,n]}}))}))},s}();exports.default=new s;var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function u(e){for(var t="",r=0;r<e.length;){var n=l.indexOf(e.charAt(r++)),i=l.indexOf(e.charAt(r++)),a=l.indexOf(e.charAt(r++)),o=l.indexOf(e.charAt(r++)),s=n<<2|i>>4;if(t+=String.fromCharCode(s),64!==a){var u=(15&i)<<4|a>>2;t+=String.fromCharCode(u)}if(64!==o){var c=(3&a)<<6|o;t+=String.fromCharCode(c)}}return t}