"use strict";var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,a){function o(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:0};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:1}}([s,c])}}};Object.defineProperty(exports,"__esModule",{value:1});var r=require("cheerio"),n=require("@libs/fetch"),i=require("@libs/defaultCover"),a=function(){function a(){this.id="DDL.com",this.name="Divine Dao Library",this.site="https://www.divinedaolibrary.com/",this.version="1.0.1",this.icon="src/en/divinedaolibrary/icon.png"}return a.prototype.parseNovels=function(t,e){var r=this,n=[];return t("#main").find("li").each((function(e,a){var o=t(a).find("a").text(),s=i.defaultCover,c=t(a).find("a").attr("href");if(c){var u={name:o,cover:s,path:c.replace(r.site,"")};n.push(u)}})),e&&(n=n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))),n},a.prototype.popularNovels=function(i,a){return t(this,void 0,void 0,(function(){var t,i,a;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"novels",[4,(0,n.fetchApi)(t).then((function(t){return t.text()}))];case 1:return i=e.sent(),a=(0,r.load)(i),[2,this.parseNovels(a)]}}))}))},a.prototype.parseNovel=function(a){return t(this,void 0,void 0,(function(){var t,o,s,c,u=this;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site+a)];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),o=(0,r.load)(t),(s={path:a,name:o("h1.entry-title").text().trim()||"Untitled",cover:o(".entry-content").find("img").attr("data-ezsrc")||i.defaultCover,chapters:[]}).summary=o("#main > article > div > p:nth-child(6)").text().trim(),s.author=o("#main > article > div > h3:nth-child(2)").text().replace(/Author:/g,"").trim(),c=[],o("#main").find("li > span > a").each((function(t,e){var r=o(e).text().trim(),n=o(e).attr("href");n&&c.push({name:r,path:n.replace(u.site,"")})})),s.chapters=c,[2,s]}}))}))},a.prototype.parseChapter=function(i){return t(this,void 0,void 0,(function(){var t,a,o,s;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site+i)];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),a=(0,r.load)(t),o=a(".entry-title").text().trim(),(s=a(".entry-content").html())||(s=a(".page-header").html()),[2,s="<p><h1>".concat(o,"</h1></p>")+s]}}))}))},a.prototype.searchNovels=function(i,a){return t(this,void 0,void 0,(function(){var t,a,o;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"novels",[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return a=e.sent(),o=(0,r.load)(a),[2,this.parseNovels(o,i)]}}))}))},a.prototype.fetchImage=function(r){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchFile)(r)];case 1:return[2,t.sent()]}}))}))},a}();exports.default=new a;