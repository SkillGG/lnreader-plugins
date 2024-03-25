"use strict";var e=this&&this.__awaiter||function(e,a,l,o){return new(l||(l=Promise))((function(t,r){function i(e){try{u(o.next(e))}catch(e){r(e)}}function n(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var a;e.done?t(e.value):(a=e.value,a instanceof l?a:new l((function(e){e(a)}))).then(i,n)}u((o=o.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var l,o,t,r,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return r={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function n(n){return function(u){return function(n){if(l)throw new TypeError("Generator is already executing.");for(;r&&(r=0,n[0]&&(i=0)),i;)try{if(l=1,o&&(t=2&n[0]?o.return:n[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,n[1])).done)return t;switch(o=0,t&&(n=[2&n[0],t.value]),n[0]){case 0:case 1:t=n;break;case 4:return i.label++,{value:n[1],done:0};case 5:i.label++,o=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(!(t=i.trys,(t=t.length>0&&t[t.length-1])||6!==n[0]&&2!==n[0])){i=0;continue}if(3===n[0]&&(!t||n[1]>t[0]&&n[1]<t[3])){i.label=n[1];break}if(6===n[0]&&i.label<t[1]){i.label=t[1],t=n;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(n);break}t[2]&&i.ops.pop(),i.trys.pop();continue}n=a.call(e,i)}catch(e){n=[6,e],o=0}finally{l=t=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:1}}([n,u])}}};Object.defineProperty(exports,"__esModule",{value:1});var l=require("cheerio"),o=require("@libs/fetch"),t=require("@libs/novelStatus"),r=require("@libs/defaultCover"),i=new(function(){function i(e){var a;this.fetchImage=o.fetchFile,this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id,".png"),this.site=e.sourceSite;var l=(null===(a=e.options)||void 0===a?void 0:a.versionIncrements)||0;this.version="1.0.".concat(4+l),this.options=e.options,this.filters=e.filters}return i.prototype.getHostname=function(e){return e.split("/")[2]},i.prototype.getCheerio=function(t,r){return e(this,void 0,void 0,(function(){var e,i,n,u;return a(this,(function(a){switch(a.label){case 0:return[4,(0,o.fetchApi)(t)];case 1:if(!(e=a.sent()).ok&&1!=r)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return n=l.load,[4,e.text()];case 2:if(i=n.apply(void 0,[a.sent()]),u=i("title").text().trim(),this.getHostname(t)!=this.getHostname(e.url)||"Bot Verification"==u||"You are being redirected..."==u||"Un instant..."==u||"Just a moment..."==u||"Redirecting..."==u)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},i.prototype.parseNovels=function(e){var a=this,l=[];return e("div.listupd > article").each((function(o,t){var i=e(t).find("h2").text(),n=e(t).find("img"),u=e(t).find("a").attr("href");u&&l.push({name:i,cover:n.attr("data-src")||n.attr("src")||r.defaultCover,path:u.replace(a.site,"")})})),l},i.prototype.popularNovels=function(l,o){var t=o.filters,r=o.showLatestNovels;return e(this,void 0,void 0,(function(){var e,o,i,n,u,s;return a(this,(function(a){switch(a.label){case 0:for(o in e=this.site+"/series/?page="+l,t||(t={}),r&&(e+="&order=latest"),t)if("object"==typeof t[o].value)for(i=0,n=t[o].value;i<n.length;i++)u=n[i],e+="&".concat(o,"=").concat(u);else t[o].value&&(e+="&".concat(o,"=").concat(t[o].value));return[4,this.getCheerio(e,0)];case 1:return s=a.sent(),[2,this.parseNovels(s)]}}))}))},i.prototype.parseNovel=function(l){var o,i;return e(this,void 0,void 0,(function(){var e,n,u,s,v,c,b,d=this;return a(this,(function(a){switch(a.label){case 0:return[4,this.getCheerio(this.site+l,0)];case 1:switch(e=a.sent(),(n={path:l.replace(this.site,""),name:"Untitled"}).name=e("h1.entry-title").text().trim(),u=e("img.wp-post-image"),n.cover=u.attr("data-src")||u.attr("src")||r.defaultCover,(null===(o=e("div.sertostat > span").attr("class"))||void 0===o?void 0:o.toLowerCase())||""){case"completed":n.status=t.NovelStatus.Completed;break;case"ongoing":n.status=t.NovelStatus.Ongoing;break;case"hiatus":n.status=t.NovelStatus.OnHiatus;break;default:n.status=t.NovelStatus.Unknown}return(s=e("div.serl")).length||(s=e("div.spe > span")),s.each((function(){var a=e(this).contents().first().text().replace(":","").trim().toLowerCase(),l=e(this).contents().last().text().trim().toLowerCase();switch(a){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":n.author=l;break;case"الحالة":case"status":case"statut":case"estado":case"durum":switch(l){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":n.status=t.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":n.status=t.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":n.status=t.NovelStatus.OnHiatus;break;default:n.status=t.NovelStatus.Unknown}break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":n.artist=l}})),(v=e(".sertogenre")).length||(v=e(".genxed")),n.genres=v.children("a").map((function(a,l){return e(l).text()})).toArray().join(","),(c=e(".sersys > p").map((function(a,l){return e(l).text().trim()})).toArray()).length||(c=e(".entry-content > p").map((function(a,l){return e(l).text().trim()})).toArray()),n.summary=c.join("\n"),b=[],e(".eplister li").each((function(a,l){var o,t=e(l).find(".epl-num").text()+" "+e(l).find(".epl-title").text(),r=e(l).find("a").attr("href")||"",i=e(l).find(".epl-date").text().trim();switch(e(l).find(".epl-price").text().trim().toLowerCase()){case"free":case"gratuit":case"مجاني":case"livre":case"":o=1;break;default:o=0}o&&b.push({name:t,path:r.replace(d.site,""),releaseTime:i})})),(null===(i=this.options)||void 0===i?void 0:i.reverseChapters)&&b.length&&b.reverse(),n.chapters=b,[2,n]}}))}))},i.prototype.parseChapter=function(l){var o;return e(this,void 0,void 0,(function(){var e,t;return a(this,(function(a){switch(a.label){case 0:return[4,this.getCheerio(this.site+l,0)];case 1:return e=a.sent(),"kolnovel"==this.id&&((t=e("article > style").text().trim().split(",")).push.apply(t,(null===(o=t.pop())||void 0===o?void 0:o.match(/^\.\w+/))||[]),t.map((function(a){return e("p".concat(a)).remove()}))),[2,e(".epcontent p").map((function(a,l){return e(l)})).toArray().join("\n")||""]}}))}))},i.prototype.searchNovels=function(l,o){return e(this,void 0,void 0,(function(){var e,t;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"page/"+o+"/?s="+l,[4,this.getCheerio(e,1)];case 1:return t=a.sent(),[2,this.parseNovels(t)]}}))}))},i}())({id:"allnovelread",sourceSite:"https://allnovelread.com/",sourceName:"AllNovelRead",options:{lang:"Spanish",reverseChapters:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"16+",value:"16"},{label:"Abogado/Abogada",value:"abogado-abogada"},{label:"Action",value:"action"},{label:"Advogdo",value:"advogdo"},{label:"affair of the heart",value:"affair-of-the-heart"},{label:"alfa",value:"alfa"},{label:"Alpha",value:"alpha"},{label:"Amable",value:"amable"},{label:"Amar",value:"amar"},{label:"Amor",value:"amor"},{label:"Amor caliente",value:"amor-caliente"},{label:"amor depois do casamento",value:"amor-depois-do-casamento"},{label:"Amor después del matrimonio",value:"amor-despues-del-matrimonio"},{label:"Amor destinado",value:"amor-destinado"},{label:"Amor doloroso",value:"amor-doloroso"},{label:"Amor dulce",value:"amor-dulce"},{label:"Amor e ódio",value:"amor-e-odio"},{label:"Amor e ódio Gravidez",value:"amor-e-odio-gravidez"},{label:"amor entre ex",value:"amor-entre-ex"},{label:"Amor forzado",value:"amor-forzado"},{label:"Amor Inocente",value:"amor-inocente"},{label:"amor predestinado",value:"amor-predestinado"},{label:"Amor y odio",value:"amor-y-odio"},{label:"arrepentirse del divorcio",value:"arrepentirse-del-divorcio"},{label:"Arrepentirse Después de Herir a Su Mujer",value:"arrepentirse-despues-de-herir-a-su-mujer"},{label:"Arrogante",value:"arrogante"},{label:"Asesinato",value:"asesinato"},{label:"Babby",value:"babby"},{label:"BABY",value:"baby"},{label:"Beauty",value:"beauty"},{label:"Bebê fofo",value:"bebe-fofo"},{label:"Bebé inteligente",value:"bebe-inteligente"},{label:"belleza",value:"belleza"},{label:"Belleza inusual",value:"belleza-inusual"},{label:"Bilionário",value:"bilionario"},{label:"Billionair",value:"billionair"},{label:"billionaire",value:"billionaire"},{label:"Billonario/Billonaria",value:"billonario-billonaria"},{label:"brilliant",value:"brilliant"},{label:"bxg",value:"bxg"},{label:"Bxg-novela",value:"bxg-novela"},{label:"Campus",value:"campus"},{label:"Casamiento",value:"casamiento"},{label:"CEO",value:"ceo"},{label:"city",value:"city"},{label:"Colegiala",value:"colegiala"},{label:"Comedia",value:"comedia"},{label:"Comedia-novela",value:"comedia-novela"},{label:"Comedy",value:"comedy"},{label:"contemporáneo",value:"contemporaneo"},{label:"Contract marriage",value:"contract-marriage"},{label:"cónyuge",value:"conyuge"},{label:"Corazón roto",value:"corazon-roto"},{label:"courtship",value:"courtship"},{label:"Crecimiento del personaje",value:"crecimiento-del-personaje"},{label:"Crimen organizado",value:"crimen-organizado"},{label:"Critical",value:"critical"},{label:"cruel",value:"cruel"},{label:"De pobre a rico",value:"de-pobre-a-rico"},{label:"Divertido",value:"divertido"},{label:"Divorce",value:"divorce"},{label:"Divorcio",value:"divorcio"},{label:"Doce",value:"doce"},{label:"Doctor",value:"doctor"},{label:"Dominador",value:"dominador"},{label:"Dominante",value:"dominante"},{label:"Dominante-novela",value:"dominante-novela"},{label:"drama",value:"drama"},{label:"dulce",value:"dulce"},{label:"Dulce Embarazada",value:"dulce-embarazada"},{label:"elegante",value:"elegante"},{label:"Embarazada",value:"embarazada"},{label:"En la actualidad",value:"en-la-actualidad"},{label:"Enemigos a los amantes",value:"enemigos-a-los-amantes"},{label:"existente",value:"existente"},{label:"Family",value:"family"},{label:"Fantasy",value:"fantasy"},{label:"Fated",value:"fated"},{label:"Fraco para forte/Pob",value:"fraco-para-forte-pob"},{label:"fuerte",value:"fuerte"},{label:"Goodgirl",value:"goodgirl"},{label:"Gravidez",value:"gravidez"},{label:"HE",value:"he"},{label:"heir/heiress",value:"heir-heiress"},{label:"hermoso",value:"hermoso"},{label:"Héroe pateador",value:"heroe-pateador"},{label:"Heroina",value:"heroina"},{label:"heroína Kickass",value:"heroina-kickass"},{label:"heterose*ual",value:"heteroseual"},{label:"historia de amor",value:"historia-de-amor"},{label:"Hot Romance",value:"hot-romance"},{label:"Humor",value:"humor"},{label:"Identidad secreta",value:"identidad-secreta"},{label:"Independente",value:"independente"},{label:"Independiente",value:"independiente"},{label:"Inocente",value:"inocente"},{label:"jefe",value:"jefe"},{label:"Jefe / CEO",value:"jefe-ceo"},{label:"kicking",value:"kicking"},{label:"king",value:"king"},{label:"legend",value:"legend"},{label:"Literature",value:"literature"},{label:"loser",value:"loser"},{label:"Love",value:"love"},{label:"Love & Culture",value:"love-culture"},{label:"love after marriage",value:"love-after-marriage"},{label:"love story",value:"love-story"},{label:"LOVEAFTERMARRIAGE",value:"loveaftermarriage"},{label:"lucky dog",value:"lucky-dog"},{label:"Lugar para você Allnovelread",value:"lugar-para-voce-allnovelread"},{label:"luna",value:"luna"},{label:"Madre soltera",value:"madre-soltera"},{label:"Mafia",value:"mafia"},{label:"magical world",value:"magical-world"},{label:"Malentendido",value:"malentendido"},{label:"Maquinación",value:"maquinacion"},{label:"Marriage",value:"marriage"},{label:"Matrimonio",value:"matrimonio"},{label:"Matrimonio por Contrato",value:"matrimonio-por-contrato"},{label:"Matrimonio relámpago",value:"matrimonio-relampago"},{label:"Medico",value:"medico"},{label:"Médico/Médica",value:"medico-medica"},{label:"millonaria",value:"millonaria"},{label:"modificación",value:"modificacion"},{label:"most millions",value:"most-millions"},{label:"Mucama",value:"mucama"},{label:"Mujer súper poderosa",value:"mujer-super-poderosa"},{label:"Multi-Millionairo",value:"multi-millionairo"},{label:"Multimillionairo",value:"multimillionairo"},{label:"Multimillonaria",value:"multimillonaria"},{label:"multimillonario",value:"multimillonario"},{label:"Multimillonario-novela",value:"multimillonario-novela"},{label:"MULTIPLEIDENTITIES",value:"multipleidentities"},{label:"Múltiples identidades",value:"multiples-identidades"},{label:"musculoso",value:"musculoso"},{label:"Nacimiento múltiple",value:"nacimiento-multiple"},{label:"Novia embarazada a la fuga",value:"novia-embarazada-a-la-fuga"},{label:"Obsesión",value:"obsesion"},{label:"Ocultar",value:"ocultar"},{label:"Optimista",value:"optimista"},{label:"others",value:"others"},{label:"Pasión de una noche",value:"pasion-de-una-noche"},{label:"Perao/Segunda chance",value:"perao-segunda-chance"},{label:"Perdedor",value:"perdedor"},{label:"Playboy",value:"playboy"},{label:"poderoso",value:"poderoso"},{label:"polygamy",value:"polygamy"},{label:"Posesivo",value:"posesivo"},{label:"possessive",value:"possessive"},{label:"Possessivo",value:"possessivo"},{label:"Powerful",value:"powerful"},{label:"presente",value:"presente"},{label:"Presidente",value:"presidente"},{label:"princess",value:"princess"},{label:"Protective",value:"protective"},{label:"Protectormadre soltera",value:"protectormadre-soltera"},{label:"Reconquistar a mi pareja",value:"reconquistar-a-mi-pareja"},{label:"rejected",value:"rejected"},{label:"relación",value:"relacion"},{label:"relationship",value:"relationship"},{label:"Renacido",value:"renacido"},{label:"Rey/Reina",value:"rey-reina"},{label:"Rich",value:"rich"},{label:"Rico",value:"rico"},{label:"Ricos",value:"ricos"},{label:"Romance",value:"romance"},{label:"romance caliente",value:"romance-caliente"},{label:"Romance/Romântico",value:"romance-romantico"},{label:"Romántic",value:"romantic"},{label:"Romantica",value:"romantica"},{label:"Romanticas",value:"romanticas"},{label:"Romantico",value:"romantico"},{label:"Secretos",value:"secretos"},{label:"secrets",value:"secrets"},{label:"seductive",value:"seductive"},{label:"Segunda Chance",value:"segunda-chance"},{label:"Segunda oportunidad",value:"segunda-oportunidad"},{label:"STRONGFEMALELEAD",value:"strongfemalelead"},{label:"Subrogación",value:"subrogacion"},{label:"Suspense",value:"suspense"},{label:"Sweet",value:"sweet"},{label:"SWEETLOVE",value:"sweetlove"},{label:"Teenager",value:"teenager"},{label:"Tierno",value:"tierno"},{label:"Tragedia",value:"tragedia"},{label:"Traición",value:"traicion"},{label:"TraiciónReconquistar a mi pareja",value:"traicionreconquistar-a-mi-pareja"},{label:"Triángulo amoroso",value:"triangulo-amoroso"},{label:"Trillizos",value:"trillizos"},{label:"Trio",value:"trio"},{label:"Una noche de pasion",value:"una-noche-de-pasion"},{label:"Universidad",value:"universidad"},{label:"Valente",value:"valente"},{label:"Valiente",value:"valiente"},{label:"Venanza",value:"venanza"},{label:"Werewolf",value:"werewolf"},{label:"Ya",value:"ya"},{label:"Youth",value:"youth"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"16+",value:"16"},{label:"alfa",value:"alfa"},{label:"Allnovelread Sin vuelta atrás",value:"allnovelread-sin-vuelta-atras"},{label:"Alpha",value:"alpha"},{label:"Amor dulce",value:"amor-dulce"},{label:"Amor y odio",value:"amor-y-odio"},{label:"Arrogante-novela",value:"arrogante-novela"},{label:"Billionaire",value:"billionaire"},{label:"Billonario",value:"billonario"},{label:"bxg",value:"bxg"},{label:"CEO",value:"ceo"},{label:"Contemporâneo",value:"contemporaneo"},{label:"Contract marriage",value:"contract-marriage"},{label:"crecimiento-del-personaje-novela",value:"crecimiento-del-personaje-novela"},{label:"Divorce",value:"divorce"},{label:"drama",value:"drama"},{label:"dulce",value:"dulce"},{label:"El incesante acoso de mi ex marido",value:"el-incesante-acoso-de-mi-ex-marido"},{label:"Enganar al mejor amigo de mi novio",value:"enganar-al-mejor-amigo-de-mi-novio"},{label:"Fantasy",value:"fantasy"},{label:"HE",value:"he"},{label:"heterosexual",value:"heterosexual"},{label:"Historia-triste-novela",value:"historia-triste-novela"},{label:"Hombre lobo",value:"hombre-lobo"},{label:"Hot Romance",value:"hot-romance"},{label:"Independiente",value:"independiente"},{label:"Inocente",value:"inocente"},{label:"king",value:"king"},{label:"Love",value:"love"},{label:"love after marriage",value:"love-after-marriage"},{label:"Luna",value:"luna"},{label:"Magical world",value:"magical-world"},{label:"millonaria",value:"millonaria"},{label:"Multi-Millionaire",value:"multi-millionaire"},{label:"Multimillionairo",value:"multimillionairo"},{label:"Multimillonario",value:"multimillonario"},{label:"Nunca Longe Allnovelread",value:"nunca-longe-allnovelread"},{label:"Posesivo",value:"posesivo"},{label:"Querida ex esposa",value:"querida-ex-esposa"},{label:"Romance",value:"romance"},{label:"Romane",value:"romane"},{label:"Romántica",value:"romantica"},{label:"Romanticas",value:"romanticas"},{label:"Romantico",value:"romantico"},{label:"Sweet",value:"sweet"},{label:"SWEETLOVE",value:"sweetlove"},{label:"Te Quero de Volta Allnovelread",value:"te-quero-de-volta-allnovelread"},{label:"Traicion en altar",value:"traicion-en-altar"},{label:"Uma Ferida Que Nunca Se Cura Allnovelread",value:"uma-ferida-que-nunca-se-cura-allnovelread"},{label:"Urban",value:"urban"},{label:"Urban/Realistic",value:"urban-realistic"},{label:"vuelva a mí",value:"vuelva-a-mi"},{label:"Werewolf",value:"werewolf"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Order by",value:"",options:[{label:"Default",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"}]}}});exports.default=i;