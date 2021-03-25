define("pages/weapp_tpl.html.js",[],function(){
return'<!-- <span class="weapp_card flex_context">\n    <span class="weapp_card_hd">\n        <span class="radius_avatar weapp_card_avatar">\n            <img src="<#=avatar#>">\n        </span>\n    </span>\n    <span class="weapp_card_bd flex_bd">\n        <strong class="weapp_card_nickname"><#=nickname#></strong>\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span> -->\n<span class="weapp_card app_context appmsg_card_context">\n    <span class="weapp_card_bd">\n        <span class="weapp_card_profile flex_context">\n            <span class="radius_avatar weapp_card_avatar">\n                <img src="<#=avatar#>">\n            </span>\n            <span class="weapp_card_nickname flex_bd"><#=nickname#></span>\n        </span>\n        <span class="weapp_card_info">\n            <span class="weapp_card_title"><#=title#></span>\n            <span class="weapp_card_thumb_wrp" style="background-image:url(<#=imageUrl#>);"></span>\n        </span>\n    </span>\n    <span class="weapp_card_ft">\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span>\n';
});define("pages/voice_tpl.html.js",[],function(){
return'<div>\n    <#if(show_not_support===true){#>\n    <p>当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放</p>\n    <#}#>\n    <div aria-labelledby="语音" id="voice_main_<#=voiceid#>_<#=posIndex#>" class="share_audio_context flex_context pages_reset" <#if(!musicSupport){#>style="display:none;"<#}#>>\n        <div id="voice_play_<#=voiceid#>_<#=posIndex#>" aria-labelledby="播放开关" class="share_audio_switch"><em class="icon_share_audio_switch" role="button"></em></div>\n        <div id="voice_detail_<#=voiceid#>_<#=posIndex#>" class="share_audio_info flex_bd">\n            <strong id="voice_title_<#=voiceid#>_<#=posIndex#>" class="share_audio_title" aria-describedby="语音标题" role="link"><#=title#></strong>\n            <#if(!!nickname){#>\n            <p id="voice_author_<#=voiceid#>_<#=posIndex#>" class="share_audio_tips">来自<#=nickname#></p>\n            <#}#>\n            <div id="voice_seekRange_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_wrp">\n                <div class="share_audio_progress">\n                    <div id="voice_progress_<#=voiceid#>_<#=posIndex#>" style="width:0%" class="share_audio_progress_inner"></div>\n                    <div id="voice_buffer_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_buffer" style="width:0%;"></div>\n                    <div id="voice_loading_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_loading" style="display:none;">\n                        <div class="share_audio_progress_loading_inner"></div>\n                    </div>\n                </div>\n                <span id="voice_playdot_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_handle" style="display:none;left:0%;"></span>\n            </div>\n            <div class="share_audio_desc" aria-labelledby="时长">\n                <em id="voice_playtime_<#=voiceid#>_<#=posIndex#>" class="share_audio_length_current" aria-hidden="true">00:00</em>\n                <em id="voice_duration_<#=voiceid#>_<#=posIndex#>" class="share_audio_length_total"><#=duration_str#></em>\n            </div>\n        </div>\n    </div>\n</div>\n';
});define("pages/voice_component.js",["biz_common/dom/event.js","biz_common/tmpl.js","pages/loadscript.js","pages/music_player.js","biz_common/dom/class.js","pages/report.js","biz_common/utils/monitor.js"],function(e,t,o,r){
"use strict";
function a(e){
this._o={
wxIndex:0,
type:0,
comment_id:"",
src:"",
mid:"",
songId:"",
autoPlay:!1,
duration:0,
debug:!1,
needVioceMutex:!0,
appPlay:!0,
title:"",
allowPause:!1,
singer:"",
epname:"",
coverImgUrl:"",
webUrl:[location.protocol,"//mp.weixin.qq.com/s?referFrom=#referFrom#&songid=#songId#&__biz=",window.biz,"&mid=",window.mid,"&idx=",window.idx,"&sn=",window.sn,"#wechat_redirect"].join(""),
playingCss:"",
playCssDom:"",
playArea:"",
progress:"",
detailUrl:"",
detailArea:"",
fileSize:0,
playtimeDom:"",
loadingDom:"",
bufferDom:"",
playdotDom:"",
seekRange:"",
seekContainer:""
},this._init(e);
}
function i(e,t,o,r){
w.num++,t.musicSupport=w.musicSupport,t.show_not_support=!1,w.musicSupport||1!=w.num||(t.show_not_support=!0);
var a=document.createElement("div"),i="";
if(i=_.tmpl(e,t),a.innerHTML=i,r===!0)o.appendChild(a.children[0]);else{
var n=o.parentNode;
if(!n)return;
n.lastChild===o?n.appendChild(a.children[0]):n.insertBefore(a.children[0],o.nextSibling);
}
}
function n(){
"undefined"==typeof window.reportVoiceid&&(window.reportVoiceid=[]),"undefined"==typeof window.reportMid&&(window.reportMid=[]);
}
function p(){
y.on(window,"unload",s);
}
function s(){
function e(e,t){
for(var o=0,r=e.length;r>o;o++)e[o]=t;
return e;
}
for(var t in w.reportData)v.musicreport({
data:w.reportData[t]
}),w.reportData[t].hasended=e(w.reportData[t].hasended,0),w.reportData[t].detail_click=e(w.reportData[t].detail_click,0),
w.reportData[t].errorcode=e(w.reportData[t].errorcode,0),w.reportData[t].play_duration=e(w.reportData[t].play_duration,0);
}
function c(e){
k.setSum(w.reportId,18,1),k.send();
var t=+new Date,o="//open.music.qq.com/fcgi-bin/fcg_music_get_song_info_weixin.fcg?song_id=#songid#&mid=#mid#&format=json&app_id=1034002693&app_key=cjjDaueOyPYRJFeTqG&device_id=weixin&file_type=mp3&qqmusic_fromtag=50&callback=get_song_info_back";
o=o.replace("#mid#",e.mid).replace("#songid#",e.id),h({
url:o,
timeout:3e4,
callbackName:"get_song_info_back",
callback:function(o){
var r=+new Date-t;
if(!o||"undefined"==typeof o.ret){
var a=1;
return d({
type:"error",
time:r,
code:a
}),void("function"==typeof e.onError&&e.onError({
errcode:a
}));
}
var i;
i=0==o.ret?o.play_url?0:6:1001==o.ret?1:1002==o.ret?2:1003==o.ret?3:1004==o.ret?4:5,
d({
type:"success",
time:r,
code:i
}),e.onSuc({
status:i,
play_url:o.play_url,
duration:o.song_play_time||0
});
},
onerror:function(o){
var r=+new Date-t,a=4;
switch(1*o){
case 400:
a=2;
break;

case 500:
a=3;
break;

default:
a=4;
}
d({
type:"error",
time:r,
code:a
}),"function"==typeof e.onError&&e.onError({
errcode:a
});
}
});
}
function d(e){
var t=Math.max(e.time,0);
if(t=Math.min(t,6e4),e.time>=0&&e.time<200?k.setSum(w.reportId,24,1):e.time>=200&&e.time<500?k.setSum(w.reportId,25,1):e.time>=500&&e.time<1e3?k.setSum(w.reportId,26,1):e.time>=1e3&&e.time<2e3?k.setSum(w.reportId,27,1):e.time>=2e3&&e.time<1e4?k.setSum(w.reportId,28,1):e.time>=1e4&&k.setSum(w.reportId,29,1),
k.setAvg(w.reportId,23,t),"error"==e.type){
switch(1*e.code){
case 1:
k.setSum(w.reportId,9,1);
break;

case 2:
k.setSum(w.reportId,10,1);
break;

case 3:
k.setSum(w.reportId,11,1);
break;

case 4:
k.setSum(w.reportId,12,1);
}
k.setSum(w.reportId,19,1);
}else if("success"==e.type){
switch(1*e.code){
case 1:
k.setSum(w.reportId,8,1);
break;

case 0:
k.setSum(w.reportId,17,1);
break;

case 2:
k.setSum(w.reportId,13,1);
break;

case 3:
k.setSum(w.reportId,14,1);
break;

case 4:
k.setSum(w.reportId,15,1);
break;

case 5:
k.setSum(w.reportId,16,1);
break;

case 6:
k.setSum(w.reportId,47,1);
}
k.setSum(w.reportId,20,1);
}
k.send();
}
function u(e){
return new a(e);
}
function l(e){
if(isNaN(e))return"00:00";
e=Math.ceil(e);
var t=Math.floor(e/3600),o=Math.floor((e-3600*t)/60),r=e-3600*t-60*o;
return 0!=t?(10>t&&(t="0"+t),t+=":"):t="",10>o&&(o="0"+o),10>r&&(r="0"+r),t+o+":"+r;
}
function m(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function g(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
var y=e("biz_common/dom/event.js"),_=e("biz_common/tmpl.js"),h=e("pages/loadscript.js"),f=e("pages/music_player.js"),D=e("biz_common/dom/class.js"),v=e("pages/report.js"),k=e("biz_common/utils/monitor.js"),w={
reportId:"28306",
musicSupport:f.getSurportType(),
debug:location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,
reportData:{},
posIndex:{},
qqMusiceSongId:"http://thirdparty.gtimg.com/#songId#.m4a?fromtag=38&songid=#songId#",
qqMusiceMid:"http://thirdparty.gtimg.com/C100#mid#.m4a?fromtag=38&songid=#songId#",
num:0
};
return n(),p(),a.prototype._init=function(e){
this._extend(e),this._g={
copyright:-1,
check_copyright:!1,
canDragBar:!1,
barDraging:!1,
canGoDetail:!0
},this._initQQmusicLyric(),this._initReportData(),this._initPlayer(),this._playEvent();
},a.prototype._initQQmusicLyric=function(){
var e=this._o;
e.webUrl=0==e.type||1==e.type?e.webUrl.replace("#songId#",e.songId||"").replace("#referFrom#","music.qq.com"):e.webUrl.replace("#songId#","").replace("#referFrom#","");
},a.prototype._initReportData=function(){
var e=this._o;
2==e.type||3==e.type||4==e.type?window.reportVoiceid.push(e.songId):(0==e.type||1==e.type)&&window.reportMid.push(e.songId),
"undefined"==typeof w.reportData[e.type]&&(w.reportData[e.type]=v.getMusicReportData(e),
w.posIndex[e.type]=0),this._g.posIndex=w.posIndex[e.type]++;
var t=w.reportData[e.type];
t.musicid.push(e.songId),t.commentid.push(e.comment_id),t.hasended.push(0),t.mtitle.push(e.title),
t.detail_click.push(0),t.duration.push(parseInt(1e3*e.duration)),t.errorcode.push(0),
t.play_duration.push(0);
},a.prototype._initPlayer=function(){
w.musicSupport&&(this._o.onStatusChange=this._statusChangeCallBack(),this._o.onTimeupdate=this._timeupdateCallBack(),
this._o.onError=this._errorCallBack(),this._o.onUpdateSeekRange=this._onUpdateSeekRange(),
this.player=new f.init(this._o));
},a.prototype.isInSeekrang=function(e){
var t=this._o.seekRange;
if(!t)return!1;
if(t===e)return!0;
for(var o=t.getElementsByTagName("*"),r=0,a=o.length;a>r;r++)if(o[r]===e)return!0;
return!1;
},a.prototype._playEvent=function(){
var e=this,t=this._o,o=this._g;
if(t.detailUrl&&t.detailArea&&y.on(t.detailArea,"click",function(r){
if(!o.barDraging&&o.canGoDetail){
var a=r.target||r.srcElement;
a&&e.isInSeekrang(a)||(2==t.type||3==t.type||4==t.type?(w.reportData[t.type].detail_click[o.posIndex]=1,
window.location.href=t.detailUrl):(0==t.type||1==t.type)&&e._checkCopyright(function(){
w.reportData[t.type].detail_click[o.posIndex]=1,window.location.href=t.detailUrl;
}));
}
}),w.musicSupport){
var r=0,a=4,i=5;
2==t.type?r=3:3==t.type?r=6:4==t.type?r=7:(0==t.type||1==t.type)&&(r=1),y.tap(t.playArea,function(){
return D.hasClass(t.playCssDom,t.playingCss)?(t.allowPause?e.player.pause():e.player.stop(),
v.report({
type:r,
comment_id:t.comment_id,
voiceid:t.songId,
action:i
})):1==r?e._checkCopyright(function(){
e.player.setSrc(o.play_url),o.duration&&e.player.setDuration(o.duration),e._playMusic(r,a);
}):e._playMusic(r,a),!1;
}),e._dragEvent();
}
},a.prototype._getCategory=function(){
var e=this._o.type;
return 2==e||3==e||4==e?2:0==e||1==e?1:-1;
},a.prototype._dragEvent=function(){
var e=this,t=this._o,o=this._g,r=t.seekRange;
if(r){
var a=0,i=r,n=!1,p=window.__zoom||1;
for(1!=p&&(n=!0);i&&i!=document.body;)a+=n?i.offsetLeft*p:i.offsetLeft,"page-content"==i.id&&(n=!1),
i=i.offsetParent;
var s=e.player.getDuration();
o.seekData={
zoom:p,
offsetLeft:a,
duration:s,
rangeWidth:r.offsetWidth,
startTime:0,
dragTime:0,
downX:0,
moveX:0
},y.on(r,"mousedown",function(t){
o.canDragBar&&(e._pointerDownHandler({
x:t.pageX||t.clientX
}),t.preventDefault());
}),y.on(t.seekContainer,"mousemove",function(t){
o.canDragBar&&o.barDraging&&(e._pointerMoveHandler({
x:t.pageX||t.clientX
}),t.preventDefault(),t.stopPropagation());
}),y.on(document.body,"mouseup",function(t){
return o.canDragBar&&o.barDraging?(e._pointerUpHandler({
x:t.pageX||t.clientX
}),t.preventDefault(),t.stopPropagation(),!1):void 0;
}),y.on(r,"touchstart",function(t){
o.canDragBar&&(e._pointerDownHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault());
}),y.on(r,"touchmove",function(t){
o.canDragBar&&o.barDraging&&(e._pointerMoveHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault(),t.stopPropagation());
}),y.on(r,"touchend",function(t){
return o.canDragBar&&o.barDraging?(e._pointerUpHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault(),t.stopPropagation(),!1):void 0;
});
}
},a.prototype._pointerDownHandler=function(e){
var t=this._g;
t.barDraging=!0,t.canGoDetail=!1,t.seekData.downX=e.x,t.seekData.startTime=this.player.getCurTime();
},a.prototype._pointerMoveHandler=function(e){
var t=this._g,o=t.seekData;
o.moveX=e.x;
var r=(o.moveX-o.offsetLeft)/o.zoom/o.rangeWidth;
r=Math.min(r,1),r=Math.max(r,0),o.dragTime=r*o.duration,o.dragTime!=o.startTime&&this._updateProgressBar(o.dragTime);
},a.prototype._pointerUpHandler=function(e){
var t=this._g,o=t.seekData;
o.dragTime||this._pointerMoveHandler({
x:e.x
}),t.barDraging=!1,this.player.seek(o.dragTime),t.seekData.startTime=0,t.seekData.dragTime=0,
t.seekData.downX=0,t.seekData.moveX=0,setTimeout(function(){
t.canGoDetail=!0;
},1e3);
},a.prototype._checkCopyright=function(e){
var t=this,o=this._o,r=this._g;
return r.play_url&&this._musicCopyrightWarnning(!1)===!1?void("function"==typeof e&&e()):void(r.check_copyright||(r.check_copyright=!0,
c({
id:o.songId,
mid:o.mid,
onSuc:function(o){
r.check_copyright=!1,r.copyright=1*o.status,t._musicCopyrightWarnning(!0)===!1&&"function"==typeof e&&(r.play_url=o.play_url,
r.duration=o.duration||0,e({
play_url:o.play_url,
duration:r.duration
}));
},
onError:function(){
r.check_copyright=!1;
}
})));
},a.prototype._musicCopyrightWarnning=function(e){
var t=this._g,o=!0,a="";
switch(1*t.copyright){
case 0:
o=!1;
break;

case 1:
o=!0,a="该歌曲版权已过期，无法播放。";
break;

case 2:
o=!0,a="抱歉，应版权方要求，当前国家或地区暂不提供此歌曲服务。";
break;

case 3:
o=!0,a="该歌曲版权已过期，无法播放。";
break;

case 4:
o=!0,a="抱歉，歌曲信息不正确。";
break;

case 5:
o=!0,a="系统错误，请稍后再试。";
break;

case 6:
o=!0,a="系统错误，请稍后再试。";
break;

default:
o=!0,a="系统错误，请稍后再试。";
}
return o===!0&&e===!0&&(a+="错误码："+t.copyright,setTimeout(function(){
r(a);
},0)),o;
},a.prototype._playMusic=function(e,t){
var o=this._o,r=this._g;
this.player.play(),w.reportData[o.type].hasended[r.posIndex]=1,v.report({
type:e,
comment_id:o.comment_id,
voiceid:o.songId,
action:t
});
},a.prototype._extend=function(e){
for(var t in e)this._o[t]=e[t];
},a.prototype._onUpdateSeekRange=function(){
var e=this,t=e._o,o=e._g;
return function(e){
this.surportSeekRange()&&t.bufferDom&&t.playdotDom?(o.canDragBar=!0,t.playdotDom.style.display="block",
t.bufferDom.style.width=1*e+"%"):(o.canDragBar=!1,t.playdotDom&&(t.playdotDom.style.display="none"));
};
},a.prototype._statusChangeCallBack=function(){
var e=this;
return function(t,o){
e._updatePlayerCss(this,o);
};
},a.prototype._timeupdateCallBack=function(){
var e=this,t=this._o,o=this._g;
return function(r,a){
e._updateProgress(a),0!=a&&(w.reportData[t.type].play_duration[o.posIndex]=parseInt(1e3*a));
};
},a.prototype._errorCallBack=function(){
var e=this,t=this._o,o=this._g;
return function(r,a){
w.reportData[t.type].errorcode[o.posIndex]=a.code,e._updatePlayerCss(this,3),e._reportH5Error(a);
};
},a.prototype._reportH5Error=function(e){
if("mp.weixin.qq.com"==location.host&&1==e.type||w.debug){
var t=["code:",e.code,";type:",this._o.type,";url:",window.location.href];
this.player&&t.push(";src:"+this.player.getSrc());
var o=new Image;
o.src=["https://badjs.weixinbridge.com/badjs?level=4&id=112&msg=",encodeURIComponent(t.join("")),"&uin=",window.uin||"","&from=",this._o.type].join("");
}
},a.prototype._updatePlayerCss=function(e,t){
!!w.debug&&console.log("status:"+t);
{
var o=this._o,r=o.playCssDom;
o.progress;
}
2==t?(D.removeClass(r,o.playingCss),o.playdotDom&&(e.surportSeekRange()?(o.playdotDom.style.display="block",
this._g.canDragBar=!0):(o.playdotDom.style.display="none",this._g.canDragBar=!1))):3==t?(D.removeClass(r,o.playingCss),
o.playdotDom&&(o.playdotDom.style.display="none",this._g.canDragBar=!1),this._updateProgress(0)):(1==t||4==t)&&(D.addClass(r,o.playingCss),
o.playdotDom&&(e.surportSeekRange()?(o.playdotDom.style.display="block",this._g.canDragBar=!0):(o.playdotDom.style.display="none",
this._g.canDragBar=!1))),o.loadingDom&&(o.loadingDom.style.display=4==t?"block":"none");
},a.prototype._updateProgress=function(e){
this._g.barDraging||this._updateProgressBar(e);
},a.prototype._updateProgressBar=function(e){
var t=this._o,o=this.player,r=o.getDuration();
if(r){
var a=this._countProgress(r,e);
t.progress&&(t.progress.style.width=a),t.playtimeDom&&(t.playtimeDom.innerHTML=l(e)),
t.playdotDom&&(t.playdotDom.style.left=a);
}
},a.prototype._countProgress=function(e,t){
return Math.min(t/e*100,100)+"%";
},{
init:u,
renderPlayer:i,
formatTime:l,
decodeStr:m,
encodeStr:g
};
});define("pages/qqmusic_tpl.html.js",[],function(){
return'<span id="qqmusic_main_<#=musicid#>_<#=posIndex#>" class="db qqmusic_area <#if(!musicSupport){#> unsupport<#}#>">\n    <span class="tc tips_global unsupport_tips" <#if(show_not_support!==true){#>style="display:none;"<#}#>>\n    当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放    </span>\n    <span class="db qqmusic_wrp appmsg_card_context appmsg_card_active">\n        <span class="db qqmusic_bd">\n            <span id="qqmusic_play_<#=musicid#>_<#=posIndex#>" class="play_area">\n                <i class="icon_qqmusic_switch"></i>\n                <img src="<#=window.icon_qqmusic_default#>" alt="" class="pic_qqmusic_default">\n                <img src="<#=music_img#>" data-autourl="<#=audiourl#>" data-musicid="<#=musicid#>" class="qqmusic_thumb" alt="">\n            </span>\n            <a id="qqmusic_home_<#=musicid#>_<#=posIndex#>" class="access_area">\n                <span class="qqmusic_songname"><#=music_name#></span>\n                <span class="qqmusic_singername"><#=singer#></span>\n                <span class="qqmusic_source"><img src="<#=window.icon_qqmusic_source#>" alt=""></span>\n            </a>\n        </span>\n    </span>       \n</span>\n';
});define("new_video/ctl.js",["biz_wap/utils/ajax.js"],function(i){
"use strict";
var e=top.window.user_uin,t=Math.floor(top.window.user_uin/100)%20;
e||(t=-1);
var o=function(){
return t>=0;
};
top.window.__webviewid||(top.window.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var i=top.window.mid,t=top.window.idx,o="";
o=i&&t?i+"_"+t:"";
var d=top.window.__webviewid,r=[e,o,d].join("_");
return r;
},r=function(e){
if(20>t)try{
var r=e.vid||"",w={};
w.__biz=top.window.biz||"",w.vid=r,w.clienttime=+new Date;
var n=top.window.mid,a=top.window.idx,p="";
n&&a?(w.type=1,p=n+"_"+a):(w.type=2,p=r),w.id=p,w.webviewid=d(),w.step=e.step||0,
w.orderid=e.orderid||0,w.ad_source=e.ad_source||0,w.traceid=e.traceid||0,w.ext1=e.ext1||"",
w.ext2=e.ext2||"",w.r=Math.random(),w.devicetype=top.window.devicetype,w.version=top.window.clientversion,
w.is_gray=o()?1:0;
var _=i("biz_wap/utils/ajax.js");
_({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:w
});
}catch(v){}
};
return{
report:r,
getWebviewid:d,
showAd:o
};
});define("a/testdata.js",[],function(){
"use strict";
function p(){
var p=[],a=new RegExp("(^|&)mock_ad=([^&]*)(&|$)","i"),e=window.location.search.substr(1).match(a);
if(e&&e[2]){
for(var t=e[2],d=t.split("_"),B=0;B<d.length;B++){
var m=i["pt_"+d[B]];
m&&p.push(m);
}
return p;
}
}
var i={
pt_2:{
ad_desc:"",
aid:"10905905",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=D%2FtJPJH83Fch5gNmciR68RY5Or8FlxSNHsSCsMpDyq3I7%2FhAxfuUGOGTgAsjbz4jreWk0xaVl40w9%2BHpvpf4Q9W4w5%2BZvLLWb4h%2FvKmWmCgN%2BpsTMoBblYGerW2o7%2FEfMuDjQePgFnhyg8xD9uPzIa%2FgKV73d0rTgPC1pvp0nxdDCkqlyoOSH82BYhpOi7h1Q0IrIulzp40FV71R%2FXU9GF8wkMpEha4gpH5Mo8u52MQAJTrDILZiy3iakBRDX4LDdBFipYRgOwlyrOlbKLS7rOXOqeLWVjSFoL24bivC0a0v%2Fvxb25cpwTevq5o%2FKg50vtmUrXTiLeC%2FT5q61H%2FI4uPWU3c1oQidPwuBH9Ag6Wy1hzspd8GXnzYQy4PYn6mjs4WDTyfJknEDvJpgVai9s%2FXumlJL9bNhCm4mdV%2B3I1MglI69XWUgAJ5Xls8K%2Bdy5p%2FlAMC6%2BEyDLZj5ebWqAsyNaida0KpQVqdXWY0YDHk8NPZDmikz2801%2FOuyBYFJmvOHEGWnNqEd2F1fNap8f7Mp66YHsE7YJtf2MBCZLMZ%2BBEi%2BLCOkXAqK0URkmIyMzBXnr368ij7spxOlq%2F%2BiuBAkhoimnOhWbs98vg9Tay%2Fy%2BGDId690TCi3Mbc6OlxkDBdGKmnljEprY9brhSz03EMIlaq%2FFbK%2F1Whhsw%2FpAoElcjYTUpZsr3QSZIssQ2PXeOxDWRG6CJdy3lrA7lenbYnQIpdkklnul6FKa9HXGz60%2FaaiV0UV1yWb1a2ACZxCLDayoEEgHqIbVsu97kM4cGKeL6Fi23g2BOyoFmYtBlKBPqYXjrRVSsIoHT5OUY8Ow%2Fn2tdiW5HiY0NdhhHOkXIJ3K8n4F3NPGRJaQKg1Pb2tgUEOniN51Ef%2BrXm0FG1Yqc3PP5hktGIpDV9CzzXh6MNSjox03zL5ZuvclpAsolJ77ZeDOiryVXk7cyyVbrfTcnA9ZnGKmShb6YVqBrA9hGg%2BarntCYZMnlUo%2BrA%2FsUf%2Bk2fFbFjQUjYz%2B1Q7Oo9pcSiqzI44nFiE%3D",
biz_appid:"",
group_id:"",
hint_txt:"图一",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d040253480410fecf35fae35ca299ef039d534981f74602026fd00400&amp;hy=SH&amp;storeid=32303137303432373130313330323030306333363430313336666664393337313561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:2,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=D%2FtJPJH83Fch5gNmciR68RY5Or8FlxSNHsSCsMpDyq3I7%2FhAxfuUGOGTgAsjbz4jreWk0xaVl40w9%2BHpvpf4Q9W4w5%2BZvLLWb4h%2FvKmWmCgN%2BpsTMoBblYGerW2o7%2FEfMuDjQePgFnhyg8xD9uPzIa%2FgKV73d0rTgPC1pvp0nxdDCkqlyoOSH82BYhpOi7h1Q0IrIulzp40FV71R%2FXU9GF8wkMpEha4gpH5Mo8u52MQAJTrDILZiy3iakBRDX4LDdBFipYRgOwlyrOlbKLS7rOXOqeLWVjSFoL24bivC0a0v%2Fvxb25cpwTevq5o%2FKg50vtmUrXTiLeC%2FT5q61H%2FI4uPWU3c1oQidPwuBH9Ag6Wy1hzspd8GXnzYQy4PYn6mjs4WDTyfJknEDvJpgVai9s%2FXumlJL9bNhCm4mdV%2B3I1MglI69XWUgAJ5Xls8K%2Bdy5p%2FlAMC6%2BEyDLZj5ebWqAsyNaida0KpQVqdXWY0YDHk8NPZDmikz2801%2FOuyBYFJmvOHEGWnNqEd2F1fNap8f7Mp66YHsE7YJtf2MBCZLMZ%2BBEi%2BLCOkXAqK0URkmIyMzBXnr368ij7spxOlq%2F%2BiuBAkhoimnOhWbs98vg9Tay%2Fy%2BGDId690TCi3Mbc6OlxkDBdGKmnljEprY9brhSz03EMIlaq%2FFbK%2F1Whhsw%2FpAoElcjYTUpZsr3QSZIssQ2PXeOxDWRG6CJdy3lrA7lenbYnQIpdkklnul6FKa9HXGz60%2FaaiV0UV1yWb1a2ACZxCLDayoEEgHqIbVsu97kM4cGKeL6Fi23g2BOyoFmYtBlKBPqYXjrRVSsIoHT5OUY8Ow%2Fn2tdiW5HiY0NdhhHOkXIJ3K8n4F3NPGRJaQKg1Pb2tgUEOniN51Ef%2BrXm0FG1Yqc3PP5hktGIpDV9CzzXh6MNSjox03zL5ZuvclpAsolJ77ZeDOiryVXk7cyyVbrfTcnA9ZnGKmShb6YVqBrA9hGg%2BarntCYZMnlUo%2BrA%2FsUf%2Bk2fFbFjQUjYz%2B1Q7Oo9pcSiqzI44nFiE%3D",
ticket:"2mkwms35zbept",
traceid:"wx0k4qxugvymlelc00",
type:"0",
url:"https://mp.weixin.qq.com/mp/ad_biz_info?__biz=MzIyNjc3NzEyNw==&amp;sn=42f6ac5c213b31f89042b02b2cf6792c&amp;weixinadkey=5d79a5cba9b5a0a498ffbf86867814d57d1e12b7c2017c72601c0386f7e067c80ceae5f708a98e5be4915d3506082882&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0k4qxugvymlelc00&amp;weixinadinfo=10905905.wx0k4qxugvymlelc00.0.1#wechat_redirect",
watermark_type:0
},
pt_2x1:{
ad_desc:"",
aid:"10824252",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=rQUg7QMK6n3%2Bp1UJSkl%2Bf%2F0O7FKM7rV5gYD3GqeGsgp6nz1XWTFYcBSfer81p8QJLVw9FhiG5iZi%2F0TS5xHQ82cuFaRoKgeXLbCyhiajdB7d7qFgfsVGq0XMS5bIv4m%2BB0TUO6naa4ozoLx9xHfqEriV%2BQpQenOLmjbQDdpmhLBlS675kqpwetBRgx0s4Dps20nURPO1q8wJ0FuDmaiofhBjm%2FBQAUse2dDcb2fHEMS88%2BSEiTnxYcwcA6v8r%2Foay4lBqMpKYObaMhPJ3qEfm6%2Bg6F6ycZuk33vaTK1OSqGYgqnRgNPVn%2BvMuG57t9rRWHuX6yOGVgkjwNQVaDeQ2w0Li%2BWFQ0bMZBGWC0VQYRlyw%2B%2BjxTgQjEi1xRC1CgDjn6hVAvnwbYfDa%2FRp4HYar%2FTGD%2FP8tiLTTuvvq01k9L%2Fb94Y%2BEwz1s%2F5t2mPNejgagZOGh4IMMVgStAltgxqgZxclMS3hMU4aVJDu34nyXfUbCZ%2BnWipQ%2FGm%2BGo8fbja7QL6bz48KZud5lLWoCsDrk2Mpk1gsq7Oq7r2wrRjSUUJyp1RB%2BSMzeUdDpxWm0MfSh8l2WryiAQ9dWrV8FFknECVjsa8RFRIxxq3E%2BpWHWZNiCm1pwW6vsKYl3ImLDuhXbXOttDJwOjSfw3SBvH5He4Dj0hDKLyni2JikgDjlsIYxmIi%2BNpwOt11qKoivqjc3u1faG5VX3D%2B%2FaWKccG%2FgpEHP8QI91goGurMtE6q18wIoXzG6rA9zLg1JPNPLhVrCBppCsouXrEcPsDLIKeTOlw1%2F7Lgpe6d1ilDJ1EloH%2FaNzcBH1s2uN7%2B5nw4lDp7ZGOuBGPX1EbWRLYtglCRir%2BYbBiZtvWBS3XI8i7iEqIqCKVt5jMBMBLUZoq9uDWYM08dywwOW98dwZ1m4Fwa6WV0P46rRwKsSKhV57s4cWTtJInLHtpeyyBuJIkm438wDn5S1C11TYl9fYmGynfaQJj%2Fe1soaEKIwTGdxuYTmzM0%3D",
biz_appid:"",
group_id:"",
hint_txt:"毒舌安卓-0425",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d04025348041087654e9c4648f82e7956612b4c5ee3c5020271b00400&amp;hy=SH&amp;storeid=32303137303432353038313431343030306262326663313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:2,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=rQUg7QMK6n3%2Bp1UJSkl%2Bf%2F0O7FKM7rV5gYD3GqeGsgp6nz1XWTFYcBSfer81p8QJLVw9FhiG5iZi%2F0TS5xHQ82cuFaRoKgeXLbCyhiajdB7d7qFgfsVGq0XMS5bIv4m%2BB0TUO6naa4ozoLx9xHfqEriV%2BQpQenOLmjbQDdpmhLBlS675kqpwetBRgx0s4Dps20nURPO1q8wJ0FuDmaiofhBjm%2FBQAUse2dDcb2fHEMS88%2BSEiTnxYcwcA6v8r%2Foay4lBqMpKYObaMhPJ3qEfm6%2Bg6F6ycZuk33vaTK1OSqGYgqnRgNPVn%2BvMuG57t9rRWHuX6yOGVgkjwNQVaDeQ2w0Li%2BWFQ0bMZBGWC0VQYRlyw%2B%2BjxTgQjEi1xRC1CgDjn6hVAvnwbYfDa%2FRp4HYar%2FTGD%2FP8tiLTTuvvq01k9L%2Fb94Y%2BEwz1s%2F5t2mPNejgagZOGh4IMMVgStAltgxqgZxclMS3hMU4aVJDu34nyXfUbCZ%2BnWipQ%2FGm%2BGo8fbja7QL6bz48KZud5lLWoCsDrk2Mpk1gsq7Oq7r2wrRjSUUJyp1RB%2BSMzeUdDpxWm0MfSh8l2WryiAQ9dWrV8FFknECVjsa8RFRIxxq3E%2BpWHWZNiCm1pwW6vsKYl3ImLDuhXbXOttDJwOjSfw3SBvH5He4Dj0hDKLyni2JikgDjlsIYxmIi%2BNpwOt11qKoivqjc3u1faG5VX3D%2B%2FaWKccG%2FgpEHP8QI91goGurMtE6q18wIoXzG6rA9zLg1JPNPLhVrCBppCsouXrEcPsDLIKeTOlw1%2F7Lgpe6d1ilDJ1EloH%2FaNzcBH1s2uN7%2B5nw4lDp7ZGOuBGPX1EbWRLYtglCRir%2BYbBiZtvWBS3XI8i7iEqIqCKVt5jMBMBLUZoq9uDWYM08dywwOW98dwZ1m4Fwa6WV0P46rRwKsSKhV57s4cWTtJInLHtpeyyBuJIkm438wDn5S1C11TYl9fYmGynfaQJj%2Fe1soaEKIwTGdxuYTmzM0%3D",
ticket:"2mkwms35zbept",
traceid:"wx0dci4bngv6yjiw00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105719791&amp;weixinadkey=2bdf14117943f0438d0e920e4c4fb556c7e045971985023da7dbcff2a7570ff1a22b2cc09a4985820b4e0f29c5c2710a&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0dci4bngv6yjiw00&amp;weixinadinfo=10824252.wx0dci4bngv6yjiw00.0.1#wechat_redirect",
watermark_type:0
},
pt_2x2:{
ad_desc:"",
aid:"12210643",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=mN4LtuTdh9%2FinpfEDrgGZ5tGpHXDBIsB5DOlJY9cIAS8feGXzCyKcOWXW5WFjoVoR%2FD9Gn%2FSewLAu%2FGHi7QrUAChNr8P9PHBpfp3CfEzfi0aKZpRoy8gyi%2BxrXtadOMFGmr118ddFg19XFr67DDzam7EiFA1pCK5Bx4LHdFJQlkJhrIRjX4r1Z5uQQcHKSmBvOVwxW4KSK6W1pJQpWmrE1E%2BP9xUyI%2BXxBbd7hW0L579wHit5GdpZ0bor%2BTu41EhOQl0QjMu6SGDLu6aj7Nn9youd4%2B5Dcs0XQ1hXFuzCcXSnc6RycaJqUVuwiLTX2dwRfKTTvI7%2F2eyQF2jNvInL8llJPCl0ocVjl%2BXtJdbam9PG%2BwiE3wSadzQpV0T%2FH0Je%2FvyyvhvmqEk64PFsxih%2FFkb%2B9PPUo7lee1B78kl3hcF%2Bo%2BpT6Q%2BxlQiRHIhCK7XhkZoYsFoewjcEAxHDAh6Xj6jVcOs9PXfq%2BXG5qCCD0LaG9US7a3rsBCLhOBxX9juL1B0Q04bwIjlW%2BLJmDrq3HcZH6CsUxKDoXoPDVOITzxx%2B%2FhH1tHJGQKc1fZuXWA7I9FSVbHrATur1eDgX3Y6AY0sIu3c4osT5t6FDT%2BxKhdypDY9%2FvV0gqlbZu%2F4jB35muv8w98V9vWFvl%2BtOeL5FMTnp9NhjASzwzLjszT1LZwN82mrL3rpvH%2Fn7DuKTZh%2FHD%2BMt8KfGEzEKaylhl0s8uCU7RiBYVPVH%2B9V3G7r1dpzzRdIvMnEQO1hbR8JhBHu19PRzqcOkrWptCSz1eqKZWBwQ5F%2BP7ML7xNg7hFsj7WsolApcYUv70fw%2FRp%2F0nsCLM8kAZrRajlB0PkalqNUoMpxXKn%2FN58XdiKnaAPDUk1vM3Go4%2FooMlRI65ycQDWtJtzdmgqWT4AjGpOmjGg88D8K8CJtJEyzntNzueQ2GsoFfvL5KUAKSWFSbmfMTmIQxImMkoHZDJ%2BCIk4mzixVsi60Y9IwfjNLjr7vbRelKzA%3D",
biz_appid:"",
group_id:"",
hint_txt:"破日-卡片-定1-红火",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410de473d20e5ee04fc37b8d1bc2a082ef1020300c2fd0400&amp;hy=SH&amp;storeid=32303137303432373033313233313030303332633131313336666664393330333561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:2,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=mN4LtuTdh9%2FinpfEDrgGZ5tGpHXDBIsB5DOlJY9cIAS8feGXzCyKcOWXW5WFjoVoR%2FD9Gn%2FSewLAu%2FGHi7QrUAChNr8P9PHBpfp3CfEzfi0aKZpRoy8gyi%2BxrXtadOMFGmr118ddFg19XFr67DDzam7EiFA1pCK5Bx4LHdFJQlkJhrIRjX4r1Z5uQQcHKSmBvOVwxW4KSK6W1pJQpWmrE1E%2BP9xUyI%2BXxBbd7hW0L579wHit5GdpZ0bor%2BTu41EhOQl0QjMu6SGDLu6aj7Nn9youd4%2B5Dcs0XQ1hXFuzCcXSnc6RycaJqUVuwiLTX2dwRfKTTvI7%2F2eyQF2jNvInL8llJPCl0ocVjl%2BXtJdbam9PG%2BwiE3wSadzQpV0T%2FH0Je%2FvyyvhvmqEk64PFsxih%2FFkb%2B9PPUo7lee1B78kl3hcF%2Bo%2BpT6Q%2BxlQiRHIhCK7XhkZoYsFoewjcEAxHDAh6Xj6jVcOs9PXfq%2BXG5qCCD0LaG9US7a3rsBCLhOBxX9juL1B0Q04bwIjlW%2BLJmDrq3HcZH6CsUxKDoXoPDVOITzxx%2B%2FhH1tHJGQKc1fZuXWA7I9FSVbHrATur1eDgX3Y6AY0sIu3c4osT5t6FDT%2BxKhdypDY9%2FvV0gqlbZu%2F4jB35muv8w98V9vWFvl%2BtOeL5FMTnp9NhjASzwzLjszT1LZwN82mrL3rpvH%2Fn7DuKTZh%2FHD%2BMt8KfGEzEKaylhl0s8uCU7RiBYVPVH%2B9V3G7r1dpzzRdIvMnEQO1hbR8JhBHu19PRzqcOkrWptCSz1eqKZWBwQ5F%2BP7ML7xNg7hFsj7WsolApcYUv70fw%2FRp%2F0nsCLM8kAZrRajlB0PkalqNUoMpxXKn%2FN58XdiKnaAPDUk1vM3Go4%2FooMlRI65ycQDWtJtzdmgqWT4AjGpOmjGg88D8K8CJtJEyzntNzueQ2GsoFfvL5KUAKSWFSbmfMTmIQxImMkoHZDJ%2BCIk4mzixVsi60Y9IwfjNLjr7vbRelKzA%3D",
ticket:"2mkwms35zbept",
traceid:"wx0f6xlzpmeiolc400",
type:"0",
url:"https://itunes.apple.com/cn/app/%E6%B0%B8%E6%81%92%E9%9C%B8%E4%B8%9A-%E8%8D%A3%E8%80%80%E9%9C%B8%E4%B8%9A-%E7%83%AD%E8%A1%80%E5%BD%92%E6%9D%A5/id1219885207?mt=8&amp;uo=4&amp;weixinadkey=e13f0e88f21e1cdf0c01fdebcfb8f84786d4462da672032fecbdb630ac84be0b53d0efbea1ab2fc4e3f286dfd4430e9b&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0f6xlzpmeiolc400&amp;weixinadinfo=12210643.wx0f6xlzpmeiolc400.0.1",
watermark_type:3
},
pt_104:{
ad_desc:"",
aid:"10824252",
app_info:{
apk_name:"com.dushe.movie",
apk_url:"http://imtt.dd.qq.com/16891/B957D57DF9BA262E7ED8588E746E3B6F.apk?fsname=com.dushe.movie_1.0.10_12.apk&amp;csr=1bca",
app_id:1105719791,
app_md5:"B957D57DF9BA262E7ED8588E746E3B6F",
app_name:"毒舌电影",
app_rating:4.95802,
app_size:14312989,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/B957D57DF9BA262E7ED8588E746E3B6F.apk?fsname=com.dushe.movie_1.0.10_12.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635343432333337",
desc:"挑选好片拒绝烂片、千万影迷聚集的影视社区！↵1、评电影：这里提供真实、无水军的电影评分，看片前查一下，从此告别烂片；↵2、找汁源：海量视频资源，找你想看的片，从此不再苦苦求种；↵3、喷电影：一群毒舌家族老司机，陪你神侃各类影视话题，由浅入深，渐入佳境；↵4、毒舌影评：毒舌家族每日推荐有料的影视播报，以毒舌刻薄的作风，保证片片优质；↵5、我的想看：想看的电影，售票时间、影评资讯等消息让你抢先知道，不再错过。↵---用户评价摘选---↵关注毒舌电影以来帮我省了不少钱，好片推荐烂片预警！ -by 生命如墙↵这样说真话不怕得罪人的app我真是第一次见，选片前刷一下很有必要 -by 鬼叫↵影评独到，不偏不倚，推荐的影片还提供资源，很棒。 -by Wayne↵虽然叫“毒舌”两字，却是影评界的一道清流，不做作，必看影评！-by tianxie↵相信毒舌不会让热爱电影的朋友失望，中国影评的评分标杆！ -by 凡人小康↵app的开机电影就让我爱上了！评分制度、功能编排、电影预告等都很用心在做，以后电影评分来这里了 -by 桐桐桐铜↵内容和功能都很不错，很喜欢UI，nice App! -by DryLhcl↵↵公众号：毒舌电影↵微博：@毒舌电影↵网址：www.dushemovie.com↵反馈邮箱：support@youhaoxi.cn",
down_count:364220,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_52414231_1493103610/256",
new_feature:"1.1.4版本特性↵1、全新首页—查找内容更爽了，各种分类一目了然；↵2、影评、视频增加快捷入口，历史／热门内容清晰呈现；",
signature_md5:"93850477387C9C3E7381EE4A1CB9A702",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_52414231_1_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_2_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_3_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_4_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_5_1498021362/330",
url_scheme:"",
version_code:12
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=EUK6sIITQ%2BIiZgPsXYcyFSLopRX%2BTrpH2F3CF7L%2BTekYp3IvCiBsRaVsRD9fH5fFjeHDFUV50Bg4pAAo6txt4VZMsQ97th8VwccNUbOKyPgtc0iCJW0zreAllxM5u4s8ajB08xXisvtL1zgv9Bw4%2FwSbjo%2FdjoAJM%2FINrWWbbRlH0GKQejxRh1HnUdZ0KnAdGCn5tGakYtL8anfAjq3uJpHjqtZd4JczeHnnT9lMbTnJskpMqmCjP5xmhV6mDt%2FLY3HkTq9QGPPPLqTJKtSQMpTSmgYqtQmfnjtWEr9L%2FBn4rxR6MFJg3AIxf6fUylI%2B5FSuMZKmTx4moN1YK8FYuyy1dNQRRXU022PGpM7vbIZWrPn0MM5Mbo8QGeWj5CBykWWfacC3lBIjut1HwPSJHeHDjhQOhaNQSBG27FGkad6g3LR6ZPlW6A6adVbtRC4jnojBO53yq5Cq4FnhWQdVPOpprYpwF3gbf%2Fh%2FdNJRD7tivQK1WdApXnC%2BzOXT5BGLONzUBoWzii097jlR0bLddaL8YTribN8eft9f1rmy4uVSbViXQK9o0xmPqqSW5nJ9rMLybyBKTnWnVzcCLk4ou3%2BE7PARc5G%2FSxPyh7894cIqocbF5nzNlqntYKlk%2FzFEgpoRRy0anSIsZZ7NmNDsOeLDi3kVd8yyzLDxLhmMPqpfCnzEg9Elcni6fnhddlRm2XHkVkb8Hde27BZDr1DOk21rrDg5jCkVJ0FvlH30s3MXZBoF03Fbvwl%2B5qvleiqbp86Bcu%2F6mhMjZa%2BbcanMlw22QydRW%2Bvg3hVs%2BfsKMrPlumQ7ZEZwMl5LDsrH7cSKg%2BbX7GQLhWMBmT3U%2FmA3JiVBwMg%2FAlo9XrPi4Lqav9QOHBN%2FxCM%2B7ZBQmUiLeUTU7hvPK11npdV0XeOfz1RUO3SvDvY3BaA9s2uGPPpTZFArzGQlIFLGYEHKXHQgXUVZ3a%2FgWbyTV4lj8cAMOZcdQl6z4uC6mr%2FU",
biz_appid:"",
group_id:"",
hint_txt:"毒舌安卓-0425",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d04025348041087654e9c4648f82e7956612b4c5ee3c5020271b00400&amp;hy=SH&amp;storeid=32303137303432353038313431343030306262326663313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:104,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=EUK6sIITQ%2BIiZgPsXYcyFSLopRX%2BTrpH2F3CF7L%2BTekYp3IvCiBsRaVsRD9fH5fFjeHDFUV50Bg4pAAo6txt4VZMsQ97th8VwccNUbOKyPgtc0iCJW0zreAllxM5u4s8ajB08xXisvtL1zgv9Bw4%2FwSbjo%2FdjoAJM%2FINrWWbbRlH0GKQejxRh1HnUdZ0KnAdGCn5tGakYtL8anfAjq3uJpHjqtZd4JczeHnnT9lMbTnJskpMqmCjP5xmhV6mDt%2FLY3HkTq9QGPPPLqTJKtSQMpTSmgYqtQmfnjtWEr9L%2FBn4rxR6MFJg3AIxf6fUylI%2B5FSuMZKmTx4moN1YK8FYuyy1dNQRRXU022PGpM7vbIZWrPn0MM5Mbo8QGeWj5CBykWWfacC3lBIjut1HwPSJHeHDjhQOhaNQSBG27FGkad6g3LR6ZPlW6A6adVbtRC4jnojBO53yq5Cq4FnhWQdVPOpprYpwF3gbf%2Fh%2FdNJRD7tivQK1WdApXnC%2BzOXT5BGLONzUBoWzii097jlR0bLddaL8YTribN8eft9f1rmy4uVSbViXQK9o0xmPqqSW5nJ9rMLybyBKTnWnVzcCLk4ou3%2BE7PARc5G%2FSxPyh7894cIqocbF5nzNlqntYKlk%2FzFEgpoRRy0anSIsZZ7NmNDsOeLDi3kVd8yyzLDxLhmMPqpfCnzEg9Elcni6fnhddlRm2XHkVkb8Hde27BZDr1DOk21rrDg5jCkVJ0FvlH30s3MXZBoF03Fbvwl%2B5qvleiqbp86Bcu%2F6mhMjZa%2BbcanMlw22QydRW%2Bvg3hVs%2BfsKMrPlumQ7ZEZwMl5LDsrH7cSKg%2BbX7GQLhWMBmT3U%2FmA3JiVBwMg%2FAlo9XrPi4Lqav9QOHBN%2FxCM%2B7ZBQmUiLeUTU7hvPK11npdV0XeOfz1RUO3SvDvY3BaA9s2uGPPpTZFArzGQlIFLGYEHKXHQgXUVZ3a%2FgWbyTV4lj8cAMOZcdQl6z4uC6mr%2FU",
ticket:"2mkwms35zbept",
traceid:"wx0xqjkdkhmcohlk00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105719791&amp;weixinadkey=5d88339b5cfb77fadd16963a27c22be50cd646e79a1276b85299ae7c7ea395d9536df4d6b3b0ad4a0c6de9943af1b328&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0xqjkdkhmcohlk00&amp;channel_id=000116083635343432333337&amp;md5sum=B957D57DF9BA262E7ED8588E746E3B6F&amp;weixinadinfo=10824252.wx0xqjkdkhmcohlk00.0.1#wechat_redirect",
watermark_type:0
},
pt_113:{
ad_desc:"",
aid:"10708726",
app_info:{
apk_name:"hk.socap.tigercoach",
apk_url:"http://imtt.dd.qq.com/16891/CAB8BFEC6A56A568B019AAAD8359154E.apk?fsname=hk.socap.tigercoach_1.0_1.apk&amp;csr=97c2",
app_id:1105677653,
app_md5:"CAB8BFEC6A56A568B019AAAD8359154E",
app_name:"老虎教练",
app_rating:5,
app_size:15414811,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/CAB8BFEC6A56A568B019AAAD8359154E.apk?fsname=hk.socap.tigercoach_1.0_1.apk&amp;csr=97c2",
category:[],
channel_id:"",
desc:"#约课记录 按时提醒# 高效管理会员约课情况，60秒帮你轻松搞定所有工作安排↵#数据报告 一键分享# 各项智能、精准的数据报告，供你多渠道任性分享↵#排行目标 数据说话# 更直观的对比，更有效的激励，教练有实力、会员进步大，我们在用数据说话",
down_count:10091,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_42368321_1492425259/256",
new_feature:"#约课记录 按时提醒# 高效管理会员约课情况，60秒帮你轻松搞定所有工作安排↵#数据报告 一键分享# 各项智能、精准的数据报告，供你多渠道任性分享↵#排行目标 数据说话# 更直观的对比，更有效的激励，教练有实力、会员进步大，我们在用数据说话",
signature_md5:"56561B3882F1704E6C070855DFCA0419",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_42368321_1_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_2_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_3_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_4_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_5_1493898503/330",
url_scheme:"",
version_code:1
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=dIFwHXIFg1LnLplm4XFpVvOsBLGRuJMlJpKQQevQAxvNSC3qXhDqEExWurQSh7n0coc2om8S3leZNkUSl%2BWyS3IsDIA4V20O9zzXMs%2Bfy5cFQiBqNUyLSJgXnsguJHhymSX%2FVsi3JO42WEZjZPI%2BUC6s8WNf2DqBd6efhGVxgEY3h6Tk%2BbHtCl7PKnYU7GAyfZDzZnXokAesrahNHgLHbDTLdtOjgKEYQBiBoU8GEMWXkBFPR3sZvhSwAPYX9o7qFDsu2JjpyEM0mGjG0BAnfWrBMQYixHUvWi%2B4aJlZlrTa%2B2sUIuV8bBGgk6%2B%2BFhhbtAks%2BmyyxHLJTpt9udAmE%2FDh6N535fNoFLXO1KHmA6i7GoANQ2CrMhLMYUewwPrEJ2WIWjfk7BdHPYwRLlBraqE%2B1jxX64GgtTg7lvuhDfM3aJYZEpFAi3uIMpzQvK%2BLeTzjR9q45WCNVPWDf4KpXLANcyN%2BCIjoUm0H0bpy7FVXs07M98Ezlk6xen%2FRZVGU1KoZ3EnGWh951rt8Mi4hkZFc43E6ePY0RP2dHc5JprBI2JZ0nr9b%2F4NJUw1%2FnPeaQHlZWWDmKmrjQuJN%2BMLnDUX%2Fqr3Gfos%2FlWWYBCf3Zrojn1i0k64b6wU4ivkh1wubQV54dt0fGLZo3gIHd0QGX15a8QkBa8QqWhzfNMiADzGUqQUAXNfQpRdk3t9ijhSJcoRCYgyQmf8zbx%2FwV5L8mdbexOoUUnmFJtDYoRKRRmn%2FD0cNDXMVGSJBfvvpKnZLAOwpyItrZigifitX9NzpdnU9KTh7J4dk%2BS5eB3s61yFzh98RqkevaZ2nqRZSR8bXoFLSGVfsPAOa0kx3BkxmEB4HAdqKszeGrymjrP3VyDi0%2BjY%2B2sA62rXA%2FtPz7xXiwtAYYexWEJZ1gQVIbgaxfNB32kVqtaMG63nfP76O9yu7JEReIc6%2FCiAX7lXbBfqKxSk5VsPKfKEZoX7M9KIUUq8po6z91cg4",
biz_appid:"",
group_id:"",
hint_txt:"健身教练的黑科技|生成精美训练记录",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d04025348041029a2949fb496566907ee0d9ed2067be2020221350400&amp;hy=SH&amp;storeid=32303137303432303039353134393030303933623462313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:113,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=dIFwHXIFg1LnLplm4XFpVvOsBLGRuJMlJpKQQevQAxvNSC3qXhDqEExWurQSh7n0coc2om8S3leZNkUSl%2BWyS3IsDIA4V20O9zzXMs%2Bfy5cFQiBqNUyLSJgXnsguJHhymSX%2FVsi3JO42WEZjZPI%2BUC6s8WNf2DqBd6efhGVxgEY3h6Tk%2BbHtCl7PKnYU7GAyfZDzZnXokAesrahNHgLHbDTLdtOjgKEYQBiBoU8GEMWXkBFPR3sZvhSwAPYX9o7qFDsu2JjpyEM0mGjG0BAnfWrBMQYixHUvWi%2B4aJlZlrTa%2B2sUIuV8bBGgk6%2B%2BFhhbtAks%2BmyyxHLJTpt9udAmE%2FDh6N535fNoFLXO1KHmA6i7GoANQ2CrMhLMYUewwPrEJ2WIWjfk7BdHPYwRLlBraqE%2B1jxX64GgtTg7lvuhDfM3aJYZEpFAi3uIMpzQvK%2BLeTzjR9q45WCNVPWDf4KpXLANcyN%2BCIjoUm0H0bpy7FVXs07M98Ezlk6xen%2FRZVGU1KoZ3EnGWh951rt8Mi4hkZFc43E6ePY0RP2dHc5JprBI2JZ0nr9b%2F4NJUw1%2FnPeaQHlZWWDmKmrjQuJN%2BMLnDUX%2Fqr3Gfos%2FlWWYBCf3Zrojn1i0k64b6wU4ivkh1wubQV54dt0fGLZo3gIHd0QGX15a8QkBa8QqWhzfNMiADzGUqQUAXNfQpRdk3t9ijhSJcoRCYgyQmf8zbx%2FwV5L8mdbexOoUUnmFJtDYoRKRRmn%2FD0cNDXMVGSJBfvvpKnZLAOwpyItrZigifitX9NzpdnU9KTh7J4dk%2BS5eB3s61yFzh98RqkevaZ2nqRZSR8bXoFLSGVfsPAOa0kx3BkxmEB4HAdqKszeGrymjrP3VyDi0%2BjY%2B2sA62rXA%2FtPz7xXiwtAYYexWEJZ1gQVIbgaxfNB32kVqtaMG63nfP76O9yu7JEReIc6%2FCiAX7lXbBfqKxSk5VsPKfKEZoX7M9KIUUq8po6z91cg4",
ticket:"2mkwms35zbept",
traceid:"wx0v7mxghuorbrlw00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105677653&amp;weixinadkey=1ac83a824aee4692ead6e7d74359bdd06013385b1b5b3a7b3391054132701a381a2bbdfbf07d98e2ba4e6ab0b2c4b280&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0v7mxghuorbrlw00&amp;md5sum=CAB8BFEC6A56A568B019AAAD8359154E&amp;weixinadinfo=10708726.wx0v7mxghuorbrlw00.0.1#wechat_redirect",
watermark_type:0,
advertisement_num:1
},
pt_114:{
ad_desc:"",
aid:"10905397",
app_info:{
apk_name:"com.tencent.tmgp.dhqy.rww",
apk_url:"http://imtt.dd.qq.com/16891/149A641FAEBE52386459BA5D983BE882.apk?fsname=com.tencent.tmgp.dhqy.rww_3.0.0_20.apk&amp;csr=1bca",
app_id:1105907773,
app_md5:"149A641FAEBE52386459BA5D983BE882",
app_name:"大话奇缘",
app_rating:0,
app_size:184561734,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/149A641FAEBE52386459BA5D983BE882.apk?fsname=com.tencent.tmgp.dhqy.rww_3.0.0_20.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635353932373736",
desc:"大话奇缘是一款画风Q萌的仙侠玄幻类RPG角色扮演手游，游戏以西游为题材，剧情丰富，画质精美，任务Q萌，技能华丽，感兴趣的小伙伴快来下载吧！↵↵特色玩法： ↵免费福利——飞行坐骑，上古神兵，免费获得，多重福利天天送！ ↵情怀再现——百位伙伴，自由搭配，打造最强：西游战队！ ↵激情策略——阵法相生，属性相克，战斗策略，完美呈现！ ↵剧情跌宕——西游无间道，谁才是终极BOSS？等你揭晓！↵真人社交——实时语音，轻松撩妹，战斗协同，玩转西游！",
down_count:1020,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_52459198_1493292084/256",
new_feature:"大话奇缘是一款画风Q萌的仙侠玄幻类RPG角色扮演手游，游戏以西游为题材，剧情丰富，画质精美，任务Q萌，技能华丽，感兴趣的小伙伴快来下载吧！↵↵特色玩法： ↵免费福利——飞行坐骑，上古神兵，免费获得，多重福利天天送！ ↵情怀再现——百位伙伴，自由搭配，打造最强：西游战队！ ↵激情策略——阵法相生，属性相克，战斗策略，完美呈现！ ↵剧情跌宕——西游无间道，谁才是终极BOSS？等你揭晓！↵真人社交——实时语音，轻松撩妹，战斗协同，玩转西游！",
signature_md5:"8C6830E0A094F25D33234BE821177A13",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_52459198_1_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_2_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_3_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_4_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_5_1493105480/330",
url_scheme:"",
version_code:20
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=SNN8szKTYJrVr0PUTMzYSyxLAUCqEMMoyjDPVclvxwIy1wJBdvESAM5soxT%2F5DZyl90WVyu7Kueft0Y97DeZo9u3w6Y1uUvD4VG8DdQq0mmEu9GHB%2Fn552HMJIlK%2FWSD7c8sHv4tA%2BatzhoV9k4cIs6lwbr1GXn7Jz4ilM7aBBkZfso61d5VnAwbIXKpg77sflvq1s0mAh2%2Bbwuwn1kTKi88KRtOqelM2SglvE2ApYua3vPkVnav1avSGeJm%2BE3%2FpLh9z0sdxKpUK7S57kn4Ts9V1MOvh3LFWy3Y%2FiTVylBKyqsqTVPFo9VoFjm6GkL0FRcnQxqSJfOtZDR64G2LZTmvda%2BCvDGbE57LGgQ74p75W8bsN2YwqSJYGFpMUJqnCzXQWth%2Bgr%2FWBeRAhEiUJ%2B9VFc%2Blj311ajdz%2BoZ9jNDbxKo9mnYgPSVPjqciyjYGH%2F3GN%2F7bs6Bc7b0YjNosS54XVXesnEL3%2BykGnp5%2BFFpzOu8VyOmxoBBKBC%2FKHBIUtdz8jUeP3mHgPOkmhaLyU9yIN%2Bs0ExHTy6VGexzN4kZwgOCO3peL4DqsPW%2Fu02WnMp6FcnZQQ2M%2Fy%2FQ%2BIxLkZXGtmcxZSgwGc0wVSywPlf7ZssvTyvrs1lAb6JNMGgiyH5crCnF9TKGHtjgkvjOC1bOmlyFHKmPN0rAGmbBXr3Qb30pOMDghWnrTwHdN%2FIKo7P4Xa3PoH655PcXl992CmX7a%2Bfb%2FCH%2FfFEm1ENn3JfHUZkd%2BrfVRHgRvneXU4diIYDNH9Q864XNit63YwEx5s%2BRoYQXWurwI7XdF7lIUN2vEIAd6mgIXwUd%2FoGaq7zWabp7vOHoy%2BvsL6jO8IdQaz4GS0ehruct4kzixVeHKIEXDTxTWZz%2Fg%2F64udCyNYFSkf1OOZKQ%2B4ijc4wEQf%2BCp1T1EpkkC%2BpArpTfqv%2FJHgPNkO3DFFD%2BdTER9Z7I%2F757e6o9GN%2BOn3YQn6hTttlpCW3hLzMOlo2J8%2FcIEdAsltJo%3D",
biz_appid:"",
group_id:"",
hint_txt:"修仙江湖安卓再营销1",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410b7986e563774afe71a689178232845cb020300bcd90400&amp;hy=SH&amp;storeid=32303137303432373131343631303030303161393963313336666664393331333630333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:114,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=SNN8szKTYJrVr0PUTMzYSyxLAUCqEMMoyjDPVclvxwIy1wJBdvESAM5soxT%2F5DZyl90WVyu7Kueft0Y97DeZo9u3w6Y1uUvD4VG8DdQq0mmEu9GHB%2Fn552HMJIlK%2FWSD7c8sHv4tA%2BatzhoV9k4cIs6lwbr1GXn7Jz4ilM7aBBkZfso61d5VnAwbIXKpg77sflvq1s0mAh2%2Bbwuwn1kTKi88KRtOqelM2SglvE2ApYua3vPkVnav1avSGeJm%2BE3%2FpLh9z0sdxKpUK7S57kn4Ts9V1MOvh3LFWy3Y%2FiTVylBKyqsqTVPFo9VoFjm6GkL0FRcnQxqSJfOtZDR64G2LZTmvda%2BCvDGbE57LGgQ74p75W8bsN2YwqSJYGFpMUJqnCzXQWth%2Bgr%2FWBeRAhEiUJ%2B9VFc%2Blj311ajdz%2BoZ9jNDbxKo9mnYgPSVPjqciyjYGH%2F3GN%2F7bs6Bc7b0YjNosS54XVXesnEL3%2BykGnp5%2BFFpzOu8VyOmxoBBKBC%2FKHBIUtdz8jUeP3mHgPOkmhaLyU9yIN%2Bs0ExHTy6VGexzN4kZwgOCO3peL4DqsPW%2Fu02WnMp6FcnZQQ2M%2Fy%2FQ%2BIxLkZXGtmcxZSgwGc0wVSywPlf7ZssvTyvrs1lAb6JNMGgiyH5crCnF9TKGHtjgkvjOC1bOmlyFHKmPN0rAGmbBXr3Qb30pOMDghWnrTwHdN%2FIKo7P4Xa3PoH655PcXl992CmX7a%2Bfb%2FCH%2FfFEm1ENn3JfHUZkd%2BrfVRHgRvneXU4diIYDNH9Q864XNit63YwEx5s%2BRoYQXWurwI7XdF7lIUN2vEIAd6mgIXwUd%2FoGaq7zWabp7vOHoy%2BvsL6jO8IdQaz4GS0ehruct4kzixVeHKIEXDTxTWZz%2Fg%2F64udCyNYFSkf1OOZKQ%2B4ijc4wEQf%2BCp1T1EpkkC%2BpArpTfqv%2FJHgPNkO3DFFD%2BdTER9Z7I%2F757e6o9GN%2BOn3YQn6hTttlpCW3hLzMOlo2J8%2FcIEdAsltJo%3D",
ticket:"2mkwms35zbept",
traceid:"wx0dzohrsr4j7ad200",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105907773&amp;weixinadkey=e359b1e7499e785130bda691aece8642ca35a75b0c70edde44eb07d0426f18f591cfbe09b7aa0a0eb33820487b26ae34&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0dzohrsr4j7ad200&amp;channel_id=000116083635353932373736&amp;md5sum=149A641FAEBE52386459BA5D983BE882&amp;weixinadinfo=10905397.wx0dzohrsr4j7ad200.0.1#wechat_redirect",
watermark_type:0
},
pt_116:{
ad_desc:"",
aid:"14076581",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=9u9Aw6%2FwMWEVo4a1mdoAYHzEl05e6WG1fx2sR5sbof9XpUdbc0ELf6w2KzosSymK3VzIhNjMSwrGIHlDPPMX9PUFxiXWVS3jBqPkrMXlQApQFO8aNBAJYlQ3RXZsvwpdPQuKUFDOwsTFzswX0x1Xyz0MFJ2FE%2Bjf%2B%2FpxJ3gxTOQ8YHi9RMfmbwFu9nT%2BhbaIJHwEEw6wTgw2zfLzJ3p8DQ%2FQwolEiPBiLS%2FdA7Y8C39TEYdPngh0spATFk3gao6l%2Bin0BFyibGMgBDfS%2BqPR3s7RTfXmCyR7QR3xRZi2wHYltGJmzPY20FIHfZ2ly21nmqGihcw1TAGVOgk1rVzP0Hf%2FwarGe8Y3m5IEcPAWOGHCzs%2FSl1bgFh8VtSjmo%2FBVIAM%2BKxfFXe0NXIottOVHrwBEW1GVVSULP2gZK4Jm%2BBnSql23UHKEdjB7uN3YJRFI%2B3EuPmtCyipsQsyy2tiAtCa%2FRmx1kWhLeZbgY3BNKihiA0R8V%2F9RQTKkF8ICH2CUfKK%2Fg0qRcY2VJBrFU462iPPjSGVWvpSdaPNPks0IVtfSidAc7IqKg9QNV0o%2FgzUMbd7X2TS8fM9IwVcGpc%2Bzdt4BSCSslhST7btQdsQiYlqxPaUFTjXFcso3gN4uPc7jzEM%2BfxPLnHDCshG0IYduAQDQl5FZGoygzEPOHC1ajJrYkqBU9FhPGIuJKuStquBQHWzqNhT9C3KoOV0nDkn661Qs2HzhD6O%2FlV%2BBQNUNXW62T8%2F80wcIVWpxmBrdGMcuv9IlfuhI413oMGuWLiiHVNhv6RgTzxN3WZgSYquVUHKZn0CQjxnbTiXWxcl8gK5Z7FmXhM1pPpWROqK9c9%2BSIb%2Bof6l%2BzeJn",
biz_appid:"wxb43647c46f347835",
biz_info:{
biz_uin:3098260700,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5SEBQsOxicWxVSl1WRpArKVydT7AWtzsIoL0XBBtZqIKQ/0",
is_subscribed:0,
nick_name:"广汽本田",
user_name:"gh_59ca0f11a65d"
},
dest_type:1,
group_id:"",
hint_txt:"",
image_url:"",
is_cpm:1,
logo:"",
pos_type:3,
pt:116,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=9u9Aw6%2FwMWEVo4a1mdoAYHzEl05e6WG1fx2sR5sbof9XpUdbc0ELf6w2KzosSymK3VzIhNjMSwrGIHlDPPMX9PUFxiXWVS3jBqPkrMXlQApQFO8aNBAJYlQ3RXZsvwpdPQuKUFDOwsTFzswX0x1Xyz0MFJ2FE%2Bjf%2B%2FpxJ3gxTOQ8YHi9RMfmbwFu9nT%2BhbaIJHwEEw6wTgw2zfLzJ3p8DQ%2FQwolEiPBiLS%2FdA7Y8C39TEYdPngh0spATFk3gao6l%2Bin0BFyibGMgBDfS%2BqPR3s7RTfXmCyR7QR3xRZi2wHYltGJmzPY20FIHfZ2ly21nmqGihcw1TAGVOgk1rVzP0Hf%2FwarGe8Y3m5IEcPAWOGHCzs%2FSl1bgFh8VtSjmo%2FBVIAM%2BKxfFXe0NXIottOVHrwBEW1GVVSULP2gZK4Jm%2BBnSql23UHKEdjB7uN3YJRFI%2B3EuPmtCyipsQsyy2tiAtCa%2FRmx1kWhLeZbgY3BNKihiA0R8V%2F9RQTKkF8ICH2CUfKK%2Fg0qRcY2VJBrFU462iPPjSGVWvpSdaPNPks0IVtfSidAc7IqKg9QNV0o%2FgzUMbd7X2TS8fM9IwVcGpc%2Bzdt4BSCSslhST7btQdsQiYlqxPaUFTjXFcso3gN4uPc7jzEM%2BfxPLnHDCshG0IYduAQDQl5FZGoygzEPOHC1ajJrYkqBU9FhPGIuJKuStquBQHWzqNhT9C3KoOV0nDkn661Qs2HzhD6O%2FlV%2BBQNUNXW62T8%2F80wcIVWpxmBrdGMcuv9IlfuhI413oMGuWLiiHVNhv6RgTzxN3WZgSYquVUHKZn0CQjxnbTiXWxcl8gK5Z7FmXhM1pPpWROqK9c9%2BSIb%2Bof6l%2BzeJn",
ticket:"",
traceid:"wx0wufunvuk63xfw00",
type:"0",
url:"http://www.ghac.cn/vehicles/honda/odyssey?weixinadkey=0c52ad5fd45796439b24582df9a6167361d5ab1e4457b2c9e96a29d5a19e3d1bc8bbf0e5df7591508a76757470b14928&amp;gdt_vid=wx0wufunvuk63xfw00&amp;weixinadinfo=14076581.wx0wufunvuk63xfw00.1.1",
video_info:{
displayHeight:540,
displayWidth:960,
thumbUrl:"http://wxsnsdythumb.video.qq.com/109/20250/snsvideodownload?filekey=30270201010420301e02016d040253480410192dd121d864094a06fcbf6ec03970380203017f900400&amp;hy=SH&amp;storeid=32303137303831313130303834353030306438353437313336666664393330323561333230613030303030303664&amp;bizid=1023",
videoUrl:"http://wxsnsdy.video.qq.com/105/20210/snsdyvideodownload?m=ae0e93b5b2522f71f468a5436b069b88&amp;filekey=30270201010420301e020169040253480410ae0e93b5b2522f71f468a5436b069b88020316f0e30400&amp;hy=SH&amp;storeid=32303137303831313130303834353030306463393866313336666664393330323561333230613030303030303639&amp;bizid=1023"
},
watermark_type:0
},
pt_119:{
ad_desc:"",
aid:"11514588",
app_info:{
category:[],
url_scheme:""
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=JQl2DdYu2F7fedkmJMakuuz%2BcbjoYoLUkJpH4XNZmVm0HWz2TPzJ%2FUlM8oa9NRFc3LMhVYq7q0yx%2BpPIQHYhATPRmvWjJ%2FhQQ5448hZZ5IJgDUCW9pn9x6Oe6O5i4d94en4UyMt0amQR2vmmlvRpF8UeLC1GuYDNdwDxam5BYXHi6skDlCWX%2FqMBEx8U5oQ3rHOb%2F8C%2Bwi6dFuvehEcmmkgd%2BPXlC04faEgJaBioyZNQHNYbMoCHb9t0RyIyOsgZ0W50x0RCSKC5otfFA2EGByKcI2LsoWf52iA0HNtX7NS5BvJGapKD2hlq8XX8CPcOQuGtbyhZiVHLSRRkerxLLnygcFbxRWWI%2FLd%2FetjUrcER2vmmlvRpF8UeLC1GuYDNg6IebWC%2FQqg68WT3P8Rn3n81qcn%2FW05WniqeNPAjKXrEnXiVI5mJHq8Hq82QGeop5fsVLSzmhl6mj7L2YYJZsA6zOHkDNuAvdoZQCcICQLzLrq9T%2FfwpH5rrbM7MG0HhST%2BaKtynO5Zd3pDcTqoFzTJPd8nH7k1BAjLS75VSeovYjRJp%2BeK%2FGtueC%2BcYZ39GGcV%2F00UbYwWdGWbbwwx11UdxkwG4evYL%2FI85Qn5gKwatZ7zuhar29YXnFOdzMAG2bNNXXrZKs6ZkwY6zBR49ZY%2BRQQO0j6%2B9ZbC0F6yIi%2B93xrRiBWbzBg%3D%3D",
biz_appid:"",
dest_type:6,
group_id:"",
hint_txt:"ddd",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410cb06ce928fae4ffe0201207b80095469020300bdce0400&amp;hy=SH&amp;storeid=32303137303830373038313935303030303232316539313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:119,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=JQl2DdYu2F7fedkmJMakuuz%2BcbjoYoLUkJpH4XNZmVm0HWz2TPzJ%2FUlM8oa9NRFc3LMhVYq7q0yx%2BpPIQHYhATPRmvWjJ%2FhQQ5448hZZ5IJgDUCW9pn9x6Oe6O5i4d94en4UyMt0amQR2vmmlvRpF8UeLC1GuYDNdwDxam5BYXHi6skDlCWX%2FqMBEx8U5oQ3rHOb%2F8C%2Bwi6dFuvehEcmmkgd%2BPXlC04faEgJaBioyZNQHNYbMoCHb9t0RyIyOsgZ0W50x0RCSKC5otfFA2EGByKcI2LsoWf52iA0HNtX7NS5BvJGapKD2hlq8XX8CPcOQuGtbyhZiVHLSRRkerxLLnygcFbxRWWI%2FLd%2FetjUrcER2vmmlvRpF8UeLC1GuYDNg6IebWC%2FQqg68WT3P8Rn3n81qcn%2FW05WniqeNPAjKXrEnXiVI5mJHq8Hq82QGeop5fsVLSzmhl6mj7L2YYJZsA6zOHkDNuAvdoZQCcICQLzLrq9T%2FfwpH5rrbM7MG0HhST%2BaKtynO5Zd3pDcTqoFzTJPd8nH7k1BAjLS75VSeovYjRJp%2BeK%2FGtueC%2BcYZ39GGcV%2F00UbYwWdGWbbwwx11UdxkwG4evYL%2FI85Qn5gKwatZ7zuhar29YXnFOdzMAG2bNNXXrZKs6ZkwY6zBR49ZY%2BRQQO0j6%2B9ZbC0F6yIi%2B93xrRiBWbzBg%3D%3D",
ticket:"",
traceid:"wx0rugvht6pygczc00",
type:"0",
url:"/pages/detail/detail?id=1112&amp;share=true&amp;weixinadkey=e6945e4066ec2c5f5a7368948a8716eac2bde11af126a8f051891696e2017fcf12e5f5b0fa6672bc31acc2552727a77d&amp;gdt_vid=wx0rugvht6pygczc00&amp;weixinadinfo=11514588.wx0rugvht6pygczc00.0.1",
watermark_type:2,
weapp_info:{
original_id:"gh_6ee8536f381b"
}
}
};
return{
getAd:p
};
});define("appmsg/reward_entry.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","rt/appmsg/getappmsgext.rt.js"],function(e,t,n,r){
"use strict";
function a(e){
e&&(e.style.display="block");
}
function o(e){
e&&(e.style.display="none");
}
function i(){
p({
url:"/mp/getappmsgext?&f=json"+(window.send_time?"&send_time="+send_time:""),
data:{
__biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
scene:source,
title:encodeURIComponent(msg_title.htmlDecode()),
ct:ct,
devicetype:devicetype.htmlDecode(),
version:version.htmlDecode(),
is_need_reward:is_need_reward,
reward_uin_count:is_need_reward?3*w:0,
r:Math.random()
},
type:"post",
dataType:"json",
async:!0,
rtId:27613,
rtKey:50,
rtDesc:f,
success:function(e){
e&&(document.getElementById("js_reward_link")&&u.off(document.getElementById("js_reward_link"),"click",x),
s({
reward_total:e.reward_total_count,
reward_head_imgs:e.reward_head_imgs||[],
can_reward:e.can_reward,
timestamp:e.timestamp
}));
}
});
}
function d(e){
return function(t){
return"0"==window.wx_user_can_reward?void r("你已成为该公众号的黑名单用户，暂时无法赞赏。"):(t.preventDefault(),
void g.invoke("openUrlWithExtraWebview",{
url:e
},function(t){
t.err_msg.indexOf(":ok")>-1||(location.href=e);
}));
};
}
function s(e){
var t=window.innerWidth||document.documentElement.innerWidth,n=(Math.ceil((h-188)/42)+1)*Math.floor((t-15)/42);
_="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+n+"&source=1#wechat_redirect";
var r="#wechat_redirect",s="https://mp.weixin.qq.com/bizmall/reward?act=showpage&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1"+r,l=document.getElementById("js_reward_link");
l&&(g.on("activity:state_change",function(e){
if("onResume"==e.state_change||"onResume"==e.state){
var t=(new Date).valueOf();
if(-1!=navigator.userAgent.indexOf("Android")&&localStorage.getItem("lastOnresumeTime")&&t-parseInt(localStorage.getItem("lastOnresumeTime"))<=j)return;
localStorage.setItem("lastOnresumeTime",t),g.invoke("setNavigationBarColor",{
actionCode:"1"
}),i();
}
}),x=d(s),u.on(l,"click",x)),y=e.reward_head_imgs;
var w=c();
v.reward&&1==e.can_reward?(a(v.reward),u.on(window,"load",function(){
m&&(u.off(window,"scroll",m),u.on(window,"scroll",m));
})):o(v.reward);
var p=document.getElementById("js_reward_inner");
p&&w>0&&a(p);
var f=document.getElementById("js_reward_total");
f&&(f.innerText=e.reward_total,f.setAttribute("href",_));
}
function l(e,t){
var n=document.createElement("span");
n.className="reward_user_avatar";
var r=new Image;
return r.onload=function(){
window.logs&&window.logs.reward_heads_total++,r.onload=r.onerror=null;
},r.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
r.onload=r.onerror=null;
},r.src=t,n.appendChild(r),e.appendChild(n),n;
}
function c(){
if(y.length){
var e=document.getElementById("js_reward_list"),t=0,n=document.createDocumentFragment();
if(e){
for(var r=0,a=y.length;a>r&&(t++,l(n,y[r]),t!=3*w);++r);
t>w&&(e.className+=" tl"),e.innerHTML="",e.appendChild(n);
}
return t;
}
}
function m(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+h>v.reward.offsetTop&&(p({
type:"GET",
url:"/bizmall/reward?act=report&__biz="+biz+"&appmsgid="+mid+"&idx="+idx,
async:!0
}),u.off(window,"scroll",m),m=null);
}
var w,_,u=e("biz_common/dom/event.js"),p=e("biz_wap/utils/ajax.js"),g=e("biz_wap/jsapi/core.js"),f=e("rt/appmsg/getappmsgext.rt.js"),h=window.innerHeight||document.documentElement.clientHeight,v={
reward:document.getElementById("js_reward_area")
},y=[],j=500;
window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0);
var x=function(){};
return{
handle:function(e,t){
w=t,s(e);
},
render:function(e){
w=e,c();
}
};
});define("appmsg/comment.js",["biz_common/dom/class.js","appmsg/cmt_tpl.html.js","biz_common/utils/wxgspeedsdk.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/fakehash.js","appmsg/log.js","appmsg/comment_tpl.html.js","appmsg/my_comment_tpl.html.js","appmsg/emotion/emotion.js","appmsg/emotion/dom.js"],function(e,t,n,o){
"use strict";
function m(e,t){
e&&(e.style.display=t?t:"block");
}
function i(e){
e&&(e.style.display="none");
}
function s(){
setTimeout(function(){
m(X.toast);
},750),setTimeout(function(){
i(X.toast);
},1500);
}
function c(e){
return e.replace(/^\s+|\s+$/g,"");
}
function a(e,t){
if(!(Math.random()<.999)){
var n=window.location.protocol,o=9;
"https:"==n&&(o=18),z.saveSpeeds({
uin:uin,
pid:o,
speeds:[{
sid:29,
time:e
},{
sid:30,
time:t
}]
}),z.send();
}
}
function l(e,t){
if("undefined"!=typeof e){
var n=new Image;
n.src=A.idkey?"//mp.weixin.qq.com/mp/jsmonitor?idkey="+(A.idkey+"_"+e+"_1")+"&t="+Math.random():"http://mp.weixin.qq.com/mp/jsreport?key="+e+"&content="+(t||"")+"&r="+Math.random();
}
}
function d(){
var e=window.innerHeight||document.documentElement.clientHeight,t=window.pageYOffset||document.documentElement.scrollTop,n=document.documentElement.scrollHeight;
if(t+e+100>n&&H.off(window,"scroll",d),!!L&&console.log("onscroll,isLoading:"+Y+";offset:"+F+";scrollHeight:"+n+";scrollTop:"+t+";innerHeight:"+e),
!(Y||-1==F||F>0&&n-t-e>500)){
var o=+new Date;
Y=!0,i(X.tips),m(X.loading);
var s="/mp/appmsg_comment?action=getcomment&scene="+A.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+M+"&offset="+F+"&limit="+P+(window.send_time?"&send_time="+send_time:"");
try{
W++,W>1&&l(A.moreList,encodeURIComponent(s)),K.indexOf(s)>-1&&l(A.repeatList,encodeURIComponent(s)),
K.push(s);
}catch(c){}
!!L&&console.log("[Appmsg comment] start get comment data:"+s),N("[Appmsg comment] start get comment data, url:"+s),
R({
url:s,
type:"get",
success:function(e){
var t=+new Date,n=t-o,m={};
try{
m=window.eval.call(window,"("+e+")");
}catch(i){}
var c=m.base_resp&&m.base_resp.ret;
if(0==c){
r(m);
var d=+new Date-t;
a(n,d);
}else l(A.errList,"type:resperr;url:"+encodeURIComponent(s)+";ret="+c);
N("[Appmsg comment] get comment success, text: "+e);
},
error:function(){
l(A.errList,"type:ajaxerr;url:"+encodeURIComponent(s)),N("[Appmsg comment] get comment ajax error");
},
complete:function(){
Y=!1,i(X.loading),H.off(window,"scroll",k);
}
});
}
}
function r(e){
var t,n=document.createDocumentFragment();
V++,V>1&&l(A.handleList,encodeURIComponent(JSON.stringify({
comment_id:M,
offset:F,
url:location.href
}))),"undefined"!=typeof e.only_fans_can_comment?window.can_fans_comment_only=e.only_fans_can_comment:"undefined"==typeof window.can_fans_comment_only&&(window.can_fans_comment_only=0),
1!=e.enabled?(x&&(x.style.display="none"),e.elected_comment=[],e.elected_comment_total_cnt=0):x&&(x.style.display="block"),
0==F?(J=e.logo_url,G=e.nick_name,t=e.elected_comment,t&&t.length?(g(t,n,"elected"),
X.list.appendChild(n),m(X.main),0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?m(document.getElementById("js_cmt_addbtn1")):m(document.getElementById("js_cmt_nofans1"),"block"),
e.elected_comment_total_cnt<=10&&(m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa")))):(i(X.main),0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?m(document.getElementById("js_cmt_addbtn2")):m(document.getElementById("js_cmt_nofans2"),"block")),
function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}
}()):(t=e.elected_comment,t&&t.length&&(g(t,n,"elected"),X.list.appendChild(n))),
0==e.elected_comment_total_cnt?(F=-1,i(document.getElementById("js_cmt_loading")),
i(document.getElementById("js_cmt_statement")),i(document.getElementById("js_cmt_qa"))):F+P>=e.elected_comment_total_cnt?(F=-1,
i(document.getElementById("js_cmt_loading")),m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa"))):F+=e.elected_comment.length;
}
function _(){
S.log("tag1");
var e=c(X.input.value);
if(S.log("tag2"),!B.hasClass(X.submit,"btn_disabled")){
if(S.log("tag3"),e.length<1)return f("留言不能为空");
if(S.log("tag4"),e.length>600)return f("字数不能多于600个");
S.log("tag5"),B.addClass(X.submit,"btn_disabled"),S.log("tag6");
var t=document.getElementById("activity-name");
S.log("tag7"),et!=e&&(tt=+new Date);
var n="/mp/appmsg_comment?action=addcomment&scene="+A.scene+"&comment_id="+M+"&__biz="+biz+"&idx="+idx+"&appmsgid="+appmsgid+"&sn="+sn;
R({
url:n,
data:{
content:e,
title:t&&c(t.innerText),
head_img:J,
nickname:G,
client_id:tt
},
type:"POST",
success:function(t){
S.log("tag8"),U.hidePannel();
var o={},i=document.createDocumentFragment();
try{
o=window.eval.call(window,"("+t+")");
}catch(c){}
switch(+o.ret){
case 0:
s(),g([{
content:e,
nick_name:G,
create_time:(new Date).getTime()/1e3|0,
is_elected:0,
logo_url:J,
like_status:0,
content_id:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:o.my_id
}],i,"mine"),X.mylist.insertBefore(i,X.mylist.firstChild),m(X.mylist.parentNode),
X.input.value="";
break;

case-6:
f("你留言的太频繁了，休息一下吧");
break;

case-7:
f("你还未关注该公众号，不能参与留言");
break;

case-10:
f("字数不能多于600个");
break;

case-15:
f("留言已关闭");
break;

default:
et=e,f("系统错误，请重试");
}
0!=o.ret&&l(A.addCommentErr,"type:resperr;url:"+encodeURIComponent(n)+";ret="+o.ret);
},
error:function(e){
S.log("shit;"+e.status+";"+e.statusText),l(A.addCommentErr,"type:ajaxerr;url:"+encodeURIComponent(n));
},
complete:function(){
""!=X.input.value&&B.removeClass(X.submit,"btn_disabled");
}
});
}
}
function p(){
if(0==Q){
var e="/mp/appmsg_comment?action=getmycomment&scene="+A.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+M,t=document.getElementById("js_mycmt_loading");
Q=1,m(t),R({
url:e,
type:"get",
success:function(t){
var n={};
try{
n=window.eval.call(window,"("+t+")");
}catch(o){}
var i=n.base_resp&&n.base_resp.ret;
if(0==i){
var s=n.my_comment,c=document.createDocumentFragment();
s&&s.length&&(g(s,c,"mine"),X.mylist.appendChild(c),m(X.mylist.parentNode)),Q=2;
}else Q=0,l(A.errComment,"type:resperr;url:"+encodeURIComponent(e)+";ret="+i);
},
error:function(){
Q=0,l(A.errComment,"type:ajaxerr;url:"+encodeURIComponent(e));
},
complete:function(){
i(t);
}
});
}
}
function u(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var o=t/1e3-e,m=n/1e3-e,i=new Date(n).getFullYear(),s=new Date(1e3*e);
return 3600>o?Math.ceil(o/60)+"分钟前":86400>m?Math.floor(o/60/60)+"小时前":172800>m?"昨天":604800>m?Math.floor(m/24/60/60)+"天前":s.getFullYear()==i?s.getMonth()+1+"月"+s.getDate()+"日":s.getFullYear()+"年"+(s.getMonth()+1)+"月"+s.getDate()+"日";
}
function g(e,t,n){
var o,m="",i=document.createElement("div"),s="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0";
$={};
for(var c,a=0;c=e[a];++a){
c.time=u(c.create_time),c.status="",c.logo_url=c.logo_url||s,c.logo_url=-1!=c.logo_url.indexOf("wx.qlogo.cn")?c.logo_url.replace(/\/132$/,"/96"):c.logo_url,
c.content=c.content.htmlDecodeLite().htmlEncodeLite(),c.nick_name=c.nick_name.htmlDecodeLite().htmlEncodeLite(),
c.like_num_format=parseInt(c.like_num)>=1e4?(c.like_num/1e4).toFixed(1)+"万":c.like_num,
c.is_from_friend=c.is_from_friend||0,c.is_from_me="mine"==n?1:c.is_from_me||0,c.reply=c.reply||{
reply_list:[]
},c.is_mine=n?!1:!0,c.is_elected="elected"==n?1:c.is_elected,c.reply.reply_list.length>0&&(c.reply.reply_list[0].time=u(c.reply.reply_list[0].create_time),
c.reply.reply_list[0].content=(c.reply.reply_list[0].content||"").htmlEncodeLite(),
c.reply.reply_list[0].reply_like_status=c.reply.reply_list[0].reply_like_status||0,
c.reply.reply_list[0].reply_like_num=c.reply.reply_list[0].reply_like_num||0,c.reply.reply_list[0].reply_like_num_format=parseInt(c.reply.reply_list[0].reply_like_num)>=1e4?(c.reply.reply_list[0].reply_like_num/1e4).toFixed(1)+"万":c.reply.reply_list[0].reply_like_num),
c.new_appmsg=window.new_appmsg,m+=O.tmpl(D,c);
try{
var d=c.nick_name+c.content,r=!1,_=A.repeatContentID;
$[d]&&(r=!0,_=A.repeatContent),Z.indexOf(c.content_id)>-1&&(r=!0,_=A.repeatContentID),
Z.push(c.content_id),$[d]=!0,r&&l(_,encodeURIComponent(JSON.stringify({
comment_id:M,
content_id:c.content_id,
offset:F,
length:e.length,
url:location.href
})));
}catch(p){}
}
for(i.innerHTML=m,y(i);o=i.children.item(0);)t.appendChild(o);
}
function y(e){
S.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=U.encode(e.innerHTML);
});
}
function f(e){
return setTimeout(function(){
o(e);
});
}
function w(){
var e="1"===T.getParam("js_my_comment");
e&&h(!0);
}
function h(e){
i(X.article),m(X.mine),window.scrollTo(0,0),p(),e||S.later(function(){
X.input.focus();
});
}
function j(){
i(X.mine),m(X.article),window.scrollTo(0,document.documentElement.scrollHeight),
X.input.blur();
}
function b(e){
var t=e.delegatedTarget||e.srcElement,n=null;
if(B.hasClass(t,"js_comment_praise")&&(n=t),n){
var o=parseInt(n.dataset.status),m=0==o?1:0,i=n.dataset.contentId,s="/mp/appmsg_comment?action=likecomment&scene="+A.scene+"&like="+m+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+M+"&content_id="+i;
I(n),R({
url:s,
type:"GET"
});
}
}
function v(e){
var t=e.delegatedTarget,n=parseInt(t.dataset.status),o=n?0:1,m=t.dataset.contentId,i=t.dataset.replyId;
I(t),R({
url:"/mp/appmsg_comment?action=like_author_reply&scene="+A.scene,
type:"post",
data:{
comment_id:M,
content_id:m,
reply_id:i,
like:o
}
});
}
function I(e){
var t=B.hasClass(e,"praised"),n=e.querySelector(".praise_num"),o=n.innerHTML,m=o.indexOf("万"),i=parseInt(o)?parseInt(o):0;
t?(-1==m&&(n.innerHTML=i-1>0?i-1:""),B.removeClass(e,"praised"),e.dataset.status=0):(-1==m&&(n.innerHTML=i+1),
B.addClass(e,"praised"),e.dataset.status=1);
}
function E(e){
var t=e.delegatedTarget,n=t.getAttribute("data-my-id"),s="/mp/appmsg_comment?action=delete&scene="+A.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+M+"&my_id="+n;
confirm("确定删除吗？")&&R({
url:s,
success:function(e){
var s,c=t;
try{
e=JSON.parse(e);
}catch(a){
e={};
}
if(0==e.ret){
for(;c&&(c.nodeType!=c.ELEMENT_NODE||"li"!=c.tagName.toLowerCase());)c=c.parentNode;
c&&(c.parentNode.removeChild(c),s=document.getElementById("cid"+n),s&&s.parentNode.removeChild(s),
0==X.list.children.length&&(i(X.main),i(document.getElementById("js_cmt_statement")),
i(document.getElementById("js_cmt_qa")),m(document.getElementById("js_cmt_addbtn2"))),
0==X.mylist.children.length&&i(X.mylist.parentNode));
}else o("删除失败，请重试");
},
error:function(){
o("网络错误，请重试");
}
});
}
function k(){
try{
var e=X.loading.getBoundingClientRect(),t=Math.random()<1;
e.top<window.innerHeight&&Y&&t&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_45_1&lc=1&log0",
H.off(window,"scroll",k));
}catch(n){}
}
function C(e){
var t=document.createElement("a");
t.setAttribute("href",e),this.el=t,this.parser=this.el,this.getParam=function(e){
var t=new RegExp("([?&])"+e+"=([^&#]*)([&#])?"),n=this.el.search.match(t);
return n?n[2]:null;
};
}
var B=e("biz_common/dom/class.js"),D=e("appmsg/cmt_tpl.html.js"),x=document.getElementById("js_cmt_area"),T=new C(window.location.href),z=e("biz_common/utils/wxgspeedsdk.js"),L=location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,M=0;
if(window._has_comment=!0,"undefined"!=typeof window.comment_id?M=window.comment_id:window.cgiData&&"undefined"!=typeof window.cgiData.comment_id&&(M=window.cgiData.comment_id),
!!L&&console.log("comment_id:"+M+";uin:"+uin+";key:"+key),-1==navigator.userAgent.indexOf("MicroMessenger")&&(x&&(x.style.display="none"),
M=0,window._has_comment=!1),0==M||!uin||!key)return void(window._has_comment=!1);
var H=e("biz_common/dom/event.js"),R=e("biz_wap/utils/ajax.js"),O=(e("biz_common/utils/string/html.js"),
e("biz_common/tmpl.js")),q=e("biz_wap/utils/fakehash.js"),N=e("appmsg/log.js"),A={
scene:0,
idkey:"",
moreList:27,
repeatList:25,
errList:18,
handleList:26,
addCommentErr:19,
errComment:18,
repeatContent:24,
repeatContentID:23
};
window.__commentReportData&&window.__commentReportData.idkey&&(!!L&&console.log("init reportData"),
A=window.__commentReportData),function(){
if(x){
var t=e("appmsg/comment_tpl.html.js");
x.innerHTML=O.tmpl(t,{
new_appmsg:window.new_appmsg
});
}
}(),function(){
var t=e("appmsg/my_comment_tpl.html.js"),n=document.createElement("div");
n.innerHTML=O.tmpl(t,{
new_appmsg:window.new_appmsg
}),document.body.appendChild(n);
}();
var U=e("appmsg/emotion/emotion.js"),S=e("appmsg/emotion/dom.js"),F=(new Image,0),P=100,Y=!1,J="",G="我",Q=0,X={
article:document.getElementById("js_article"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById("js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading")
},Z=[],$={},K=(new Image,[]),W=0,V=0,et=null,tt=+new Date;
!function(){
d(),w(),U.init();
}(),q.on("comment",function(){
!!L&&console.log("FakeHash on comment"),h();
}),q.on(function(e){
"comment"==e&&j();
}),H.on(X.input,"input",function(){
var e=c(X.input.value);
e.length<1?B.addClass(X.submit,"btn_disabled"):B.removeClass(X.submit,"btn_disabled");
}),H.on(X.list,"tap",".js_comment_praise",b),H.on(X.mylist,"tap",".js_comment_praise",b),
H.on(X.list,"tap",".js_reply_praise",v),H.on(X.list,"tap",".js_del",E),H.on(X.mylist,"tap",".js_del",E),
H.on(X.list,"tap",".js_del",function(e){
e.preventDefault();
}),H.on(X.mylist,"tap",".js_del",function(e){
e.preventDefault();
}),H.on(X.submit,"tap",_),H.on(X.submit,"click",function(e){
e.preventDefault();
}),H.on(window,"scroll",d),H.on(window,"scroll",k),H.on(document.getElementById("js_cmt_write1"),"click",function(e){
e.preventDefault(),!!L&&console.log("push comment"),q.push("comment");
}),H.on(document.getElementById("js_cmt_write2"),"click",function(e){
e.preventDefault(),!!L&&console.log("push comment"),q.push("comment");
});
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","appmsg/log.js"],function(require,exports,module,alert){
"use strict";
function like_report(e){
log("[Appmsg] click like");
var tmpAttr=el_like.getAttribute("like"),tmpHtml=el_likeNum.innerHTML,isLike=parseInt(tmpAttr)?parseInt(tmpAttr):0,like=isLike?0:1,likeNum=parseInt(tmpHtml)?parseInt(tmpHtml):0;
ajax({
url:"/mp/appmsg_like?__biz="+biz+"&mid="+mid+"&idx="+idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:window.is_temp_url||0
},
type:"POST",
success:function(res){
var data=eval("("+res+")");
log("[Appmsg] like ajax succ"+data.base_resp.ret),0==data.base_resp.ret&&(isLike?(Class.removeClass(el_like,"praised"),
el_like.setAttribute("like",0),likeNum>0&&"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum-1==0?"赞":likeNum-1)):(el_like.setAttribute("like",1),
Class.addClass(el_like,"praised"),"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum+1)));
},
async:!0
});
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),log=require("appmsg/log.js"),el_toolbar=document.getElementById("js_toobar3");
if(el_toolbar&&el_toolbar.querySelector){
var el_like=el_toolbar.querySelector("#like3"),el_likeNum=el_toolbar.querySelector("#likeNum3"),el_readNum=el_toolbar.querySelector("#readNum3");
DomEvent.on(el_like,"click",function(e){
return like_report(e),!1;
});
}
});define("pages/version4video.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","new_video/ctl.js"],function(e){
"use strict";
function i(e,i){
i=i||"",i=["uin:"+top.window.user_uin,"resp:"+i].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random();
}
function o(){
return document.domain="qq.com",-1!=top.location.href.indexOf("&_newvideoplayer=0")?!1:-1!=top.location.href.indexOf("&_newvideoplayer=1")?!0:1!=top.window.is_login?!1:top.window.use_tx_video_player?!1:r.canSupportVideo&&_.inWechat?_.is_ios||_.is_android&&_.is_x5?!0:!1:(top.window._hasReportCanSupportVideo||r.canSupportVideo||!_.inWechat||(top.window._hasReportCanSupportVideo=!0,
i(44)),!1);
}
function n(){
{
var e=top.location.href,i=window.location.href;
top.sn||"";
}
return-1==e.indexOf("&_videoad=0")||"5a2492d450d45369cd66e9af8ee97dbd"!=top.sn&&"f62e1cb98630008303667f77c17c43d7"!=top.sn&&"30c609ee11a3a74a056e863f0e20cae2"!=top.sn?-1!=e.indexOf("&_videoad=1")?!0:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:"54"==top.window.appmsg_type?!1:-1!=i.indexOf("&xd=1")?!1:top.window.__appmsgCgiData&&top.window.__appmsgCgiData.can_use_page&&(_.is_ios||_.is_android)?!0:p.showAd()?!0:!1:!1;
}
function t(){
var e=top.location.href;
if(!top.window.user_uin)return!1;
if(-1!=e.indexOf("&_proxy=1"))return!0;
if(-1!=e.indexOf("&_proxy=0"))return!1;
if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show"))return!1;
var i=(new Date).getHours();
return i>=9&&14>=i?!1:_.inWechat&&_.is_android&&_.is_x5&&_.wechatVer>="6.2.2"?!0:_.inWechat&&_.is_ios&&(-1!=w.indexOf("MicroMessenger/6.2.4")||_.wechatVer>="6.2.4")?!0:!1;
}
function s(){
return c.networkType;
}
var a=e("biz_common/dom/event.js"),d=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/device.js"),p=e("new_video/ctl.js"),w=top.window.navigator.userAgent,c={
networkType:""
},_={};
return function(e){
var i=r.os;
_.is_ios=/(iPhone|iPad|iPod|iOS)/i.test(e),_.is_android=!!i.android,_.is_wp=!!i.phone,
_.is_pc=!(i.phone||!i.Mac&&!i.windows),_.inWechat=/MicroMessenger/.test(e),_.inWindowWechat=/WindowsWechat/i.test(e),
_.inMacWechat=/wechat.*mac os/i.test(e),_.is_android_phone=_.is_android&&/Mobile/i.test(e),
_.is_android_tablet=_.is_android&&!/Mobile/i.test(e),_.ipad=/iPad/i.test(e),_.iphone=!_.ipad&&/(iphone)\sos\s([\d_]+)/i.test(e),
_.is_x5=/TBS\//.test(e)&&/MQQBrowser/i.test(e);
var o=e.match(/MicroMessenger\/((\d+)(\.\d+)*)/);
_.wechatVer=o&&o[1]||0,a.on(window,"load",function(){
if(""==c.networkType&&_.inWechat){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
d.invoke("getNetworkType",{},function(i){
c.networkType=e[i.err_msg]||"fail";
});
}
},!1);
}(top.window.navigator.userAgent),"undefined"==typeof top.window._hasReportCanSupportVideo&&(top.window._hasReportCanSupportVideo=!1),
{
device:_,
isShowMpVideo:o,
isUseProxy:t,
isUseAd:n,
getNetworkType:s
};
});define("a/a.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","a/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","a/card.js","a/wxopen_card.js","a/mpshop.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","a/a_tpl.html.js","a/sponsor_a_tpl.html.js","a/cpc_a_tpl.html.js","biz_common/utils/report.js","biz_common/dom/class.js","biz_wap/utils/storage.js","appmsg/log.js","appmsg/cdn_img_lib.js","a/profile.js","a/android.js","a/ios.js","a/app_card.js","a/sponsor.js"],function(require,exports,module,alert){
"use strict";
function report(e,a){
Report("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+e+a);
}
function checkNeedAds(){
var is_need_ad=1,_adInfo=null,screen_num=0,both_ad=0,inwindowwx=-1!=navigator.userAgent.indexOf("WindowsWechat");
if(!document.getElementsByClassName||-1==navigator.userAgent.indexOf("MicroMessenger")||inwindowwx)is_need_ad=0,
js_sponsor_ad_area.style.display="none",js_top_ad_area.style.display="none",js_bottom_ad_area.style.display="none",
js_cpc_area&&js_cpc_area.style&&(js_cpc_area.style.display="none");else{
var adLS=new LS("ad");
if(window.localStorage)try{
var key=[biz,sn,mid,idx].join("_"),_ad=adLS.get(key);
_adInfo=_ad.info;
try{
_adInfo=eval("("+_adInfo+")");
}catch(e){
_adInfo=null;
}
var _adInfoSaveTime=_ad.time,_now=+new Date;
_adInfo&&18e4>_now-1*_adInfoSaveTime&&1*_adInfo.advertisement_num>0?is_need_ad=0:adLS.remove(key),
log("[Ad] is_need_ad: "+is_need_ad+" , adData:"+JSON.stringify(_ad));
}catch(e){
is_need_ad=1,_adInfo=null;
}
}
return screen_num=Math.ceil(document.body.scrollHeight/(document.documentElement.clientHeight||window.innerHeight)),
both_ad=screen_num>=2?1:0,{
is_need_ad:is_need_ad,
both_ad:both_ad,
_adInfo:_adInfo
};
}
function afterGetAdData(e,a){
var t={},o=e.is_need_ad,i=e._adInfo;
if(0==o)t=i,t||(t={
advertisement_num:0
});else{
if(a.advertisement_num>0&&a.advertisement_info){
var p=a.advertisement_info;
t.advertisement_info=saveCopy(p);
}
t.advertisement_num=a.advertisement_num;
}
1==o&&(window._adRenderData=t),t=t||{
advertisement_num:0
};
var n=!1;
if(!t.flag&&t.advertisement_num>0){
var r=t.advertisement_num,_=t.advertisement_info;
window.adDatas.num=r;
for(var d=0;r>d;++d){
var s=null,c=_[d];
if(c.exp_info=c.exp_info||{},c.is_cpm=c.is_cpm||0,c.biz_info=c.biz_info||{},c.app_info=c.app_info||{},
c.pos_type=c.pos_type||0,c.logo=c.logo||"",100==c.pt||115==c.pt){
for(var l=c.exp_info.exp_value||[],m=!1,u=0,f=0;f<l.length;++f){
var g=l[f]||{};
if(1==g.exp_type&&(u=g.comm_attention_num,m=u>0),2==g.exp_type){
m=!1,u=0;
break;
}
}
c.biz_info.show_comm_attention_num=m,c.biz_info.comm_attention_num=u,s={
usename:c.biz_info.user_name,
pt:c.pt,
url:c.url,
traceid:c.traceid,
adid:c.aid,
ticket:c.ticket,
is_appmsg:!0
};
}else if(102==c.pt)s={
appname:c.app_info.app_name,
versioncode:c.app_info.version_code,
pkgname:c.app_info.apk_name,
androiddownurl:c.app_info.apk_url,
md5sum:c.app_info.app_md5,
signature:c.app_info.version_code,
rl:c.rl,
traceid:c.traceid,
pt:c.pt,
ticket:c.ticket,
type:c.type,
adid:c.aid,
is_appmsg:!0
};else if(101==c.pt)s={
appname:c.app_info.app_name,
app_id:c.app_info.app_id,
icon_url:c.app_info.icon_url,
appinfo_url:c.app_info.appinfo_url,
rl:c.rl,
traceid:c.traceid,
pt:c.pt,
ticket:c.ticket,
type:c.type,
adid:c.aid,
is_appmsg:!0
};else if(103==c.pt||104==c.pt||2==c.pt&&c.app_info){
var y=c.app_info.down_count||0,h=c.app_info.app_size||0,v=c.app_info.app_name||"",w=c.app_info.category,j=["万","百万","亿"];
if(y>=1e4){
y/=1e4;
for(var k=0;y>=10&&2>k;)y/=100,k++;
y=y.toFixed(1)+j[k]+"次";
}else y=y.toFixed(1)+"次";
h=formSize(h),w=w?w[0]||"其他":"其他",v=formName(v),c.app_info._down_count=y,c.app_info._app_size=h,
c.app_info._category=w,c.app_info.app_name=v,s={
appname:c.app_info.app_name,
app_rating:c.app_info.app_rating||0,
icon_url:c.app_info.icon_url,
app_id:c.app_info.app_id,
channel_id:c.app_info.channel_id,
md5sum:c.app_info.app_md5,
rl:c.rl,
pkgname:c.app_info.apk_name,
url_scheme:c.app_info.url_scheme,
androiddownurl:c.app_info.apk_url,
versioncode:c.app_info.version_code,
appinfo_url:c.app_info.appinfo_url,
traceid:c.traceid,
pt:c.pt,
url:c.url,
ticket:c.ticket,
type:c.type,
adid:c.aid,
is_appmsg:!0
};
}else if(105==c.pt){
var b=c.card_info.card_id||"",x=c.card_info.card_ext||"";
x=x.htmlDecode();
try{
x=JSON.parse(x),x.outer_str=c.card_info.card_outer_id||"",x=JSON.stringify(x);
}catch(I){
x="{}";
}
s={
card_id:b,
card_ext:x,
pt:c.pt,
ticket:c.ticket||"",
url:c.url,
rl:c.rl,
tid:c.traceid,
traceid:c.traceid,
type:c.type,
adid:c.aid,
is_appmsg:!0
};
}else if(106==c.pt){
var T=c.mp_shop_info.pid||"",E=c.mp_shop_info.outer_id||"";
s={
pid:T,
outer_id:E,
pt:c.pt,
url:c.url,
rl:c.rl,
tid:c.traceid,
traceid:c.traceid,
type:c.type,
adid:c.aid,
is_appmsg:!0
};
}else if(108==c.pt||109==c.pt||110==c.pt||116==c.pt||117==c.pt)s={
pt:c.pt,
ticket:c.ticket||"",
url:c.url,
traceid:c.traceid,
adid:c.aid,
is_appmsg:!0
},c.video_info&&(s.displayWidth=c.video_info.displayWidth,s.displayHeight=c.video_info.displayHeight,
s.thumbUrl=c.video_info.thumbUrl,s.videoUrl=c.video_info.videoUrl,s.rl=c.rl);else if(111==c.pt||113==c.pt||114==c.pt||112==c.pt){
var h=c.app_info.app_size||0,v=c.app_info.app_name||"";
h=formSize(h),v=formName(v),c.app_info.app_size=h,c.app_info.app_name=v,s={
appname:c.app_info.app_name,
app_rating:c.app_info.app_rating||0,
app_id:c.app_info.app_id,
icon_url:c.app_info.icon_url,
channel_id:c.app_info.channel_id,
md5sum:c.app_info.app_md5,
rl:c.rl,
pkgname:c.app_info.apk_name,
url_scheme:c.app_info.url_scheme,
androiddownurl:c.app_info.apk_url,
versioncode:c.app_info.version_code,
appinfo_url:c.app_info.appinfo_url,
traceid:c.traceid,
pt:c.pt,
url:c.url,
ticket:c.ticket,
type:c.type,
adid:c.aid,
source:source||"",
is_appmsg:!0
};
}else 118==c.pt?(s=c,n=!0):(119==c.pt||120==c.pt)&&(s=c);
var z=c.image_url;
require("appmsg/cdn_img_lib.js"),z&&z.isCDN()&&(z=z.replace(/\/0$/,"/640"),z=z.replace(/\/0\?/,"/640?"),
c.image_url=ParseJs.addParam(z,"wxfrom","50",!0)),adDatas.ads["pos_"+c.pos_type]={
a_info:c,
adData:s
},localStorage&&localStorage.setItem&&c.app_info&&c.app_info.url_scheme&&localStorage.setItem("__WXLS__a_url_schema_"+c.traceid,c.app_info.url_scheme);
}
c.has_installed=!1,c&&(104==c.pt||113==c.pt||114==c.pt||2==c.pt)&&c.app_info.url_scheme&&JSAPI.invoke("getInstallState",{
packageName:c.app_info.apk_name
},function(e){
var a=e.err_msg;
a.indexOf("get_install_state:yes")>-1&&(c.has_installed=!0,document.getElementById("js_promotion_tag")&&(document.getElementById("js_promotion_tag").innerHTML="进入应用"));
});
var q=function(e){
var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
"undefined"!=typeof e&&(a=e);
10>=a&&(js_top_ad_area.style.display="block",DomEvent.off(window,"scroll",q));
},S=function(){
var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.clientHeight||window.innerHeight;
js_sponsor_ad_area.offsetTop<e+a&&(Class.addClass(document.getElementById("js_ad_area"),"show"),
DomEvent.off(window,"scroll",S));
},C=adDatas.ads;
for(var B in C)if(0==B.indexOf("pos_")){
var s=C[B],c=!!s&&s.a_info;
if(s&&c){
if(0==c.pos_type){
if(c.new_appmsg=window.new_appmsg,js_bottom_ad_area.innerHTML=TMPL.tmpl(a_tpl,c),
111==c.pt||112==c.pt||113==c.pt||114==c.pt){
var D=document.getElementsByClassName("js_download_app_card")[0],A=D.offsetWidth,O=Math.floor(A/2.875);
O>0&&(D.style.height=O+"px");
}
}else if(1==c.pos_type){
js_top_ad_area.style.display="none",c.new_appmsg=window.new_appmsg,js_top_ad_area.innerHTML=TMPL.tmpl(a_tpl,c),
DomEvent.on(window,"scroll",q);
var H=0;
window.localStorage&&(H=1*localStorage.getItem(B)||0),window.scrollTo(0,H),q(H);
}else if(3==c.pos_type){
var D=document.createElement("div");
D.appendChild(document.createTextNode(c.image_url)),c.image_url=D.innerHTML,c.new_appmsg=window.new_appmsg,
js_sponsor_ad_area.innerHTML=TMPL.tmpl(sponsor_a_tpl,c),js_sponsor_ad_area.style.display="block";
var R=js_sponsor_ad_area.clientWidth;
108==c.pt||109==c.pt||110==c.pt?document.getElementById("js_main_img").style.height=R/1.77+"px":116==c.pt||117==c.pt,
DomEvent.on(window,"scroll",S),S(0);
}else 4==c.pos_type&&_checkShowCpc()&&(js_cpc_area.innerHTML=TMPL.tmpl(cpc_a_tpl,c));
lazyLoadAdImg({
aid:c.aid,
type:c.pt
}),checkAdImg(c);
}
}
mmversion.isIOS&&c.app_info&&c.app_info.url_scheme&&0==c.app_info.url_scheme.indexOf("http")&&(document.getElementById("js_promotion_tag")&&(document.getElementById("js_promotion_tag").innerHTML="查看应用"),
document.getElementsByClassName("js_ad_btn")&&document.getElementsByClassName("js_ad_btn").length>0&&(document.getElementsByClassName("js_ad_btn")[0].innerHTML="查看")),
bindAdOperation();
}
is_temp_url&&document.getElementsByTagName("mpcpc").length>0&&_checkShowCpc()&&!n&&(js_cpc_area.innerHTML=TMPL.tmpl(cpc_a_tpl,{
type:"",
ticket:"",
url:"",
rl:"",
aid:"",
pt:"",
traceid:"",
group_id:"",
apurl:"",
is_cpm:"",
image_url:"https://mmbiz.qlogo.cn/mmbiz_png/4whpV1VZl28zEsn4C4aKo3TLTWAsFI9fnd6F4VubeMIlncQTBbCvickQLSgSZZz3UjTFnoGFprqiadcCLGYF7VyQ/0?wx_fmt=png"
}));
}
function _checkShowCpc(){
if(js_cpc_area){
var e=(document.documentElement.clientHeight||window.innerHeight)/2,a=js_cpc_area.offsetTop,t=document.getElementById("js_content").offsetHeight;
return console.log(e,a,t,e>a||e>t-a),e>a||e>t-a?!1:!0;
}
}
function lazyLoadAdImg(e){
for(var a=document.getElementsByClassName("js_alazy_img"),t=0;t<a.length;t++){
var o=a[t];
a[t].onload=function(){
window.__addIdKeyReport("28307",54),o.src.indexOf("retry")>-1&&window.__addIdKeyReport("28307",69);
},a[t].onerror=function(){
if(-1==o.src.indexOf("retry"))o.src=ParseJs.addParam(o.src,"retry",1);else{
window.__addIdKeyReport("28307",98);
var a="other";
mmversion.isIOS?a="iphone":mmversion.isAndroid&&(a="android"),window.setTimeout(function(){
var t=window.networkType||"unknow";
ajax({
url:"http://mp.weixin.qq.com/tp/datacenter/report?cmd=report&id=900023&os="+a+"&uin=777&aid="+e.aid+"&image_url="+encodeURIComponent(o.src)+"&type="+e.type+"&network="+t,
type:"GET",
async:!0
});
},500);
}
window.__addIdKeyReport("28307",57);
},a[t].src=a[t].dataset.src;
}
}
function getHost(e){
if(!e)return"";
var a=document.createElement("a");
return a.href=e,a.hostname;
}
function checkAdImg(e){
if(e){
var a=["wximg.qq.com","wximg.gtimg.com","pgdt.gtimg.cn","mmsns.qpic.cn","mmbiz.qpic.cn","vweixinthumb.tc.qq.com","pp.myapp.com","wx.qlog.cn","mp.weixin.qq.com"],t=e.image_url||"",o=getHost(t);
return void(o&&-1==a.indexOf(o)&&window.__addIdKeyReport("28307",58));
}
}
function saveCopyArr(e){
for(var a=[],t=0;t<e.length;++t){
var o=e[t],i=typeof o;
o="string"==i?o.htmlDecode():o,"object"==i&&(o="[object Array]"==Object.prototype.toString.call(o)?saveCopyArr(o):saveCopy(o)),
a.push(o);
}
return a;
}
function saveCopy(e){
var a={};
for(var t in e)if(e.hasOwnProperty(t)){
var o=e[t],i=typeof o;
o="string"==i?o.htmlDecode():o,"object"==i&&(o="[object Array]"==Object.prototype.toString.call(o)?saveCopyArr(o):saveCopy(o)),
a[t]=o;
}
return a;
}
function formName(e){
for(var a=[" ","-","(",":",'"',"'","：","（","—","－","“","‘"],t=-1,o=0,i=a.length;i>o;++o){
var p=a[o],n=e.indexOf(p);
-1!=n&&(-1==t||t>n)&&(t=n);
}
return-1!=t&&(e=e.substring(0,t)),e;
}
function formSize(e){
return"number"!=typeof e?e:(e>=1024?(e/=1024,e=e>=1024?(e/1024).toFixed(2)+"MB":e.toFixed(2)+"KB"):e=e.toFixed(2)+"B",
e);
}
function seeAds(){
var adDatas=window.adDatas;
if(adDatas&&adDatas.num>0){
var onScroll=function(){
isScroll=1;
for(var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,i=0;total_pos_type>i;++i)!function(i){
var pos_key="pos_"+i,gdt_a=gdt_as[pos_key];
if(gdt_a=!!gdt_a&&gdt_a[0],!gdt_a||!gdt_a.dataset||!gdt_a.dataset.apurl)return void(!apurl_report&&gdt_a&&gdt_a.dataset&&!gdt_a.dataset.apurl&&(imgReport(4),
apurl_report=!0));
isSee=2;
var gid=gdt_a.dataset.gid,tid=gdt_a.dataset.tid,aid=gdt_a.dataset.aid,apurl=gdt_a.dataset.apurl,is_cpm=1*gdt_a.dataset.is_cpm,ads=adDatas.ads,a_info=ads[pos_key].a_info||{},exp_info=a_info.exp_info||{},exp_id=exp_info.exp_id||"",exp_value=exp_info.exp_value||[],pos_type=adDatas.ads[pos_key].a_info.pos_type,gdt_area=el_gdt_areas[pos_key],offsetTop=gdt_area.offsetTop,adHeight=gdt_a.clientHeight,adOffsetTop=offsetTop+gdt_a.offsetTop,gh_id="";
adDatas.ads[pos_key]&&adDatas.ads[pos_key].a_info&&adDatas.ads[pos_key].a_info.weapp_info&&adDatas.ads[pos_key].a_info.weapp_info.original_id&&(gh_id=adDatas.ads[pos_key].a_info.weapp_info.original_id),
adDatas.ads[pos_key].ad_engine=0;
try{
exp_value=JSON.stringify(exp_value);
}catch(e){
exp_value="[]";
}
if(-1!=apurl.indexOf("ad.wx.com")&&(adDatas.ads[pos_key].ad_engine=1),isSee=3,function(){
try{
var e=window.__report,a=ping_test_apurl[pos_key],t=new Date,o=t.getHours(),i=ping_test_apurl_random&&o>=12&&18>=o&&0==pos_type;
!a[0]&&i&&scrollTop+innerHeight>offsetTop&&(a[0]=!0,e(81)),!a[1]&&i&&scrollTop+innerHeight>offsetTop+40&&(a[1]=!0,
e(82));
}catch(p){}
}(),isSee=4,!ping_apurl[pos_key]&&(0==pos_type&&scrollTop+innerHeight>offsetTop||1==pos_type&&(10>=scrollTop||scrollTop-10>=offsetTop)||4==pos_type&&scrollTop+innerHeight>offsetTop||3==pos_type&&scrollTop+innerHeight>offsetTop)){
ping_apurl[pos_key]=!0,isSee=5;
try{
var report_arg="trace_id="+tid+"&product_type="+adDatas.ads[pos_key].a_info.pt+"&logtype=2&url="+encodeURIComponent(location.href)+"&apurl="+encodeURIComponent(apurl);
tid&&mmversion.gtVersion("6.3.22",!0)&&JSAPI.invoke("adDataReport",{
ad_info:report_arg
},function(){});
}catch(e){}
log("[Ad] seeAd, tid="+tid+", gid="+gid+", pos_type="+pos_type),isSee=6,ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&aid="+aid+"&gh_id="+gh_id+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl)+"&__biz="+biz+"&pos_type="+pos_type+"&exp_id="+exp_id+"&exp_value="+exp_value+"&r="+Math.random(),
mayAbort:!0,
success:function(res){
log("[Ad] seeAd report success, tid="+tid+", gid="+gid+", pos_type="+pos_type);
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret?(imgReport(5),ping_apurl[pos_key]=!1):ping_apurl.pos_0&&ping_apurl.pos_1,
isSee=7;
},
error:function(){
log("[Ad] seeAd report error, tid="+tid+", gid="+gid+", pos_type="+pos_type),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_27_1",
isSee=8;
},
async:!0
});
}
var ping_cpm_apurl_obj=ping_cpm_apurl[pos_key];
if(is_cpm&&!ping_cpm_apurl_obj.hasPing){
var rh=.5;
scrollTop+innerHeight>=adOffsetTop+adHeight*rh&&adOffsetTop+adHeight*(1-rh)>=scrollTop?3==pos_type?(ping_cpm_apurl_obj.hasPing=!0,
ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&aid="+aid+"&gh_id="+gh_id+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl+"&viewable=true")+"&__biz="+biz+"&pos_type="+pos_type+"&r="+Math.random(),
mayAbort:!0,
success:function(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
})):ping_cpm_apurl_obj.clk||(ping_cpm_apurl_obj.clk=setTimeout(function(){
ping_cpm_apurl_obj.hasPing=!0,ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&aid="+aid+"&gh_id="+gh_id+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl+"&viewable=true")+"&__biz="+biz+"&pos_type="+pos_type+"&exp_id="+exp_id+"&exp_value="+exp_value+"&r="+Math.random(),
mayAbort:!0,
success:function(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
});
},1001)):3!=pos_type&&ping_cpm_apurl_obj.clk&&(clearTimeout(ping_cpm_apurl_obj.clk),
ping_cpm_apurl_obj.clk=null);
}
}(i);
};
DomEvent.on(window,"scroll",onScroll),onScroll();
}
}
function imgReport(e){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=68064_"+e+"_1&r="+Math.random();
}
function imgReportBadJs(e){
var a=Math.random();
.5>a&&((new Image).src="https://badjs.weixinbridge.com/badjs?id=102&level=4&from="+encodeURIComponent(location.host)+"&msg="+encodeURIComponent(e));
}
function ad_click(e,a,t,o,i,p,n,r,_,d,s,c,l,m,u,f,g){
if(!has_click[i]){
has_click[i]=!0;
var y=document.getElementById("loading_"+i);
y&&(y.style.display="inline");
var h=g.exp_info||{},v=h.exp_id||"",w=h.exp_value||[];
try{
w=JSON.stringify(w);
}catch(j){
w="[]";
}
var k="";
c&&c.weapp_info&&c.weapp_info.original_id&&(k=c.weapp_info.original_id),AdClickReport({
click_pos:1,
report_type:2,
type:e,
exp_id:v,
exp_value:w,
url:encodeURIComponent(a),
tid:i,
aid:r,
rl:encodeURIComponent(t),
__biz:biz,
pos_type:d,
pt:_,
pos_x:l,
pos_y:m,
ad_w:u,
ad_h:f,
gh_id:k
},function(){
if(!ping_apurl["pos_"+d]){
imgReport(0),o||imgReport(1);
var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,n=el_gdt_areas["pos_"+d],l=n.offsetTop;
imgReportBadJs(d+","+t+","+innerHeight+","+l+","+isScroll+","+isSee),imgReport(l>t+innerHeight?2:3),
isScroll||imgReport(4);
}
if(has_click[i]=!1,y&&(y.style.display="none"),"5"==e)location.href="/mp/profile?source=from_ad&tousername="+a+"&ticket="+p+"&uin="+uin+"&key="+key+"&__biz="+biz+"&mid="+mid+"&idx="+idx+"&tid="+i;else{
if("105"==_&&c)return void Card.openCardDetail(c.card_id,c.card_ext,c);
if("106"==_&&c)return void(location.href=ParseJs.join(a,{
outer_id:c.outer_id
}));
if("118"==_||"119"==_||"120"==_)return void Wxopen_card.openWxopen(c);
if(g&&g.has_installed&&("104"==_||"113"==_||"114"==_||"2"==_&&-1==a.indexOf("itunes.apple.com"))&&g.app_info.url_scheme)return void JSAPI.invoke("launchApplication",{
schemeUrl:g.app_info.url_scheme
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=g.app_info.url_scheme);
});
if(0==a.indexOf("https://itunes.apple.com/")||0==a.indexOf("http://itunes.apple.com/"))return g.app_info&&g.app_info.url_scheme&&0==g.app_info.url_scheme.indexOf("http")||JSAPI.invoke("downloadAppInternal",{
appUrl:a
},function(e){
e.err_msg&&-1!=e.err_msg.indexOf("ok")||(location.href="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(a)+"&ticket="+p+"#wechat_redirect");
}),!1;
if(-1==a.indexOf("mp.weixin.qq.com"))a="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(a);else if(-1==a.indexOf("mp.weixin.qq.com/s")&&-1==a.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var m={
source:4,
tid:i,
idx:idx,
mid:mid,
appuin:biz,
pt:_,
aid:r,
ad_engine:s,
pos_type:d
},u=window.__report;
if(("104"==_||"113"==_||"114"==_)&&c||-1!=a.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var f="",h="";
c&&(f=c.pkgname&&c.pkgname.replace(/\./g,"_"),h=c.channel_id||""),m={
source:4,
tid:i,
traceid:i,
mid:mid,
idx:idx,
appuin:biz,
pt:_,
channel_id:h,
aid:r,
engine:s,
pos_type:d,
pkgname:f
};
}
a=URL.join(a,m),(0==a.indexOf("http://mp.weixin.qq.com/promotion/")||0==a.indexOf("https://mp.weixin.qq.com/promotion/"))&&(a=URL.join(a,{
traceid:i,
aid:r,
engine:s
})),!r&&u&&u(80,a);
}
location.href=a;
}
});
}
}
function bindAdOperation(){
seeAds();
for(var e=0;total_pos_type>e;++e)!function(e){
var a="pos_"+e,t=el_gdt_areas[a];
if(!t)return!1;
if(!t.getElementsByClassName&&t.style)return t.style.display="none",!1;
var o=t.getElementsByClassName("js_ad_link")||[],i=adDatas.ads[a];
if(i){
for(var p=i.adData,n=i.a_info,r=n.pos_type,_=i.ad_engine,d=0,s=o.length;s>d;++d)!function(e,a){
var t=o[e],i=t.dataset;
if(i&&3!=n.pos_type){
var p=i.type,d=i.url,s=i.rl,c=i.apurl,l=i.tid,m=i.ticket,u=i.group_id,f=i.aid,g=i.pt;
DomEvent.on(t,"click",function(e){
var t=!!e&&e.target;
return!t||!t.className||-1==t.className.indexOf("js_ad_btn")&&-1==t.className.indexOf("btn_processor_value")?(mmversion.isIOS&&n.app_info&&n.app_info.url_scheme&&0==n.app_info.url_scheme.indexOf("http")&&(location.href=n.app_info.url_scheme),
window.setTimeout(function(){
if(a){
a.adid=window.adid||a.adid;
var o="&tid="+a.traceid+"&uin="+uin+"&key="+key+"&ticket="+(a.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+a.adid+"&ad_engine="+_+"&pos_type="+r+"&r="+Math.random();
n&&n.has_installed&&("104"==a.pt||"113"==a.pt||"114"==a.pt||"2"==a.pt)?report(114,o):"103"==a.pt||"111"==a.pt||"112"==a.pt?report(23,o):("104"==a.pt||"113"==a.pt||"114"==a.pt)&&report(25,o);
}
var i,y,h,v;
i=position.getX(t,"js_ad_link")+e.offsetX,y=position.getY(t,"js_ad_link")+e.offsetY,
h=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
v=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight,
ad_click(p,d,s,c,l,m,u,f,g,r,_,a,i,y,h,v,n),log("[Ad] ad_click: type="+p+", url="+d+", rl="+s+", apurl="+c+", traceid="+l+", ticket="+m+", group_id="+u+", aid="+f+", pt="+g+", pos_type="+r+", ad_engine="+_);
},0),!1):void 0;
},!0);
}
}(d,p);
if(p){
p.adid=window.adid||p.adid;
var c=n.exp_info||{},l=c.exp_id||"",m=c.exp_value||[];
try{
m=JSON.stringify(m);
}catch(u){
m="[]";
}
var f="&tid="+p.traceid+"&uin="+uin+"&key="+key+"&ticket="+(p.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+p.adid+"&ad_engine="+_+"&pos_type="+r+"&exp_id="+l+"&exp_value="+m+"&r="+Math.random();
if(p.report_param=f,"100"==p.pt||"115"==p.pt){
var g=require("a/profile.js");
return void new g({
btnViewProfile:document.getElementById("js_view_profile_"+r),
btnAddContact:document.getElementById("js_add_contact_"+r),
adData:p,
pos_type:r,
report_param:f,
aid:p.adid,
ad_engine:_
});
}
if("102"==p.pt){
var y=require("a/android.js"),h=15,v=p.pkgname&&p.pkgname.replace(/\./g,"_");
return void new y({
btn:document.getElementById("js_app_action_"+r),
adData:p,
report_param:f,
task_ext_info:[p.adid,p.traceid,v,source,h,_].join("."),
via:[p.traceid,p.adid,v,source,h,_].join(".")
});
}
if("101"==p.pt){
var w=require("a/ios.js");
return void new w({
btn:document.getElementById("js_app_action_"+r),
adData:p,
ticket:p.ticket,
report_param:f
});
}
if("105"==p.pt)return void new Card({
btn:document.getElementById("js_card_action_"+r),
adData:p,
report_param:f,
pos_type:r
});
if("106"==p.pt)return void new MpShop({
btn:document.getElementById("js_shop_action_"+r),
adData:p,
report_param:f,
pos_type:r
});
if("103"==p.pt||"104"==p.pt||"111"==p.pt||"112"==p.pt||"113"==p.pt||"114"==p.pt){
var j=require("a/app_card.js"),h=15,v=p.pkgname&&p.pkgname.replace(/\./g,"_");
return void new j({
btn:document.getElementById("js_appdetail_action_"+r),
js_app_rating:document.getElementById("js_app_rating_"+r),
adData:p,
report_param:f,
pos_type:r,
url_scheme:p.url_scheme,
via:[p.traceid,p.adid,v,source,h,_].join("."),
ticket:p.ticket,
appdetail_params:["&aid="+p.adid,"traceid="+p.traceid,"pkgname="+v,"source="+source,"type="+h,"engine="+_,"appuin="+biz,"pos_type="+r,"ticket="+p.ticket,"scene="+scene].join("&"),
engine:_
});
}
if("108"==p.pt||"109"==p.pt||"110"==p.pt||"116"==p.pt||"117"==p.pt){
var k=require("a/sponsor.js");
new k({
adDetailBtn:document.getElementById("js_ad_detail"),
adMoreBtn:document.getElementById("js_ad_more"),
adAbout:document.getElementById("js_btn_about"),
adImg:document.getElementById("js_main_img"),
adMessage:document.getElementById("js_ad_message"),
adVideo:document.getElementById("js_video_container"),
adData:p,
a_info:n,
pos_type:r,
report_param:f
});
}
"118"==n.pt&&(p.report_param=f);
}
}
}(e);
}
var mmversion=require("biz_wap/utils/mmversion.js"),js_bottom_ad_area=document.getElementById("js_bottom_ad_area"),js_top_ad_area=document.getElementById("js_top_ad_area"),js_sponsor_ad_area=document.getElementById("js_sponsor_ad_area"),js_cpc_area=document.getElementsByTagName("mpcpc"),gdt_pos_4={};
js_cpc_area.length>0?(js_cpc_area=document.getElementsByTagName("mpcpc")[0],gdt_pos_4=js_cpc_area.getElementsByClassName("js_ad_link")):js_cpc_area=void 0;
var pos_type=window.pos_type||0,__report=window.__report,total_pos_type=5,el_gdt_areas={
pos_4:js_cpc_area,
pos_3:js_sponsor_ad_area,
pos_1:js_top_ad_area,
pos_0:js_bottom_ad_area
},gdt_as={
pos_4:gdt_pos_4,
pos_3:js_sponsor_ad_area.getElementsByClassName("js_ad_link"),
pos_1:js_top_ad_area.getElementsByClassName("js_ad_link"),
pos_0:js_bottom_ad_area.getElementsByClassName("js_ad_link")
},isScroll=!1,isSee=!1;
window.adDatas={
ads:{},
num:0
};
var adDatas=window.adDatas,has_click={},DomEvent=require("biz_common/dom/event.js"),URL=require("biz_common/utils/url/parse.js"),AReport=require("a/a_report.js"),AdClickReport=AReport.AdClickReport,ajax=require("biz_wap/utils/ajax.js"),position=require("biz_wap/utils/position.js"),Card=require("a/card.js"),Wxopen_card=require("a/wxopen_card.js"),MpShop=require("a/mpshop.js"),JSAPI=require("biz_wap/jsapi/core.js"),ParseJs=require("biz_common/utils/url/parse.js"),TMPL=require("biz_common/tmpl.js"),a_tpl=require("a/a_tpl.html.js"),sponsor_a_tpl=require("a/sponsor_a_tpl.html.js"),cpc_a_tpl=require("a/cpc_a_tpl.html.js"),Report=require("biz_common/utils/report.js"),Class=require("biz_common/dom/class.js"),LS=require("biz_wap/utils/storage.js"),ParseJs=require("biz_common/utils/url/parse.js"),log=require("appmsg/log.js"),ping_apurl={
pos_0:!1,
pos_1:!1,
pos_3:!1,
pos_4:!1
},ping_cpm_apurl={
pos_0:{},
pos_1:{},
pos_3:{},
pos_4:{}
},ping_test_apurl={
pos_0:[],
pos_1:[],
pos_3:[],
pos_4:[]
},ping_test_apurl_random=Math.random()<.3,innerHeight=window.innerHeight||document.documentElement.clientHeight,ad_engine=0,apurl_report=!1,keyOffset="https:"==top.location.protocol?5:0;
return{
checkNeedAds:checkNeedAds,
afterGetAdData:afterGetAdData
};
});define("rt/appmsg/getappmsgext.rt.js",[],function(){
"use strict";
return{
base_resp:{
ret:"number",
errmsg:"string",
wxtoken:"number"
},
advertisement_num:"number",
advertisement_info:[{
hint_txt_R:"string",
url_R:"string",
type_R:"string",
rl_R:"string",
apurl_R:"string",
traceid_R:"string",
group_id_R:"string",
ticket:"string",
aid:"string",
pt:"number",
image_url:"string",
ad_desc:"string",
biz_appid:"string",
pos_type:"number",
watermark_type:"number",
logo:"string",
app_info:{},
biz_info:{},
card_info:{}
}],
comment_enabled:"number",
appmsgticket:{
ticket:"string"
},
self_head_imgs:"string",
appmsgstat:{
ret:"number",
show:"boolean",
is_login:"boolean",
like_num:"number",
liked:"boolean",
read_num:"number",
real_read_num:"number"
},
timestamp:"number",
reward_total_count:"number",
reward_head_imgs:["string"]
};
});define("biz_wap/utils/storage.js",[],function(){
"use strict";
function t(t){
if(!t)throw"require function name.";
this.key=t,this.init();
}
var e="__WXLS__",n=window.localStorage||{
getItem:function(){},
setItem:function(){},
removeItem:function(){},
key:function(){},
length:0
};
return t.getItem=function(t){
return t=e+t,n.getItem(t);
},t.setItem=function(i,r){
i=e+i;
for(var a=3;a--;)try{
n.setItem(i,r);
break;
}catch(o){
t.clear();
}
},t.clear=function(){
var t,i;
for(t=n.length-1;t>=0;t--)i=n.key(t),0==i.indexOf(e)&&n.removeItem(i);
},t.prototype={
constructor:t,
init:function(){
this.check();
},
getData:function(){
var e=t.getItem(this.key)||"{}";
try{
e=JSON.parse(e);
}catch(n){
e={};
}
return e;
},
check:function(){
var e,n,i=this.getData(),r={},a=+new Date;
for(e in i)n=i[e],+n.exp>a&&(r[e]=n);
t.setItem(this.key,JSON.stringify(r));
},
set:function(e,n,i){
var r=this.getData();
r[e]={
val:n,
exp:i||+new Date
},t.setItem(this.key,JSON.stringify(r));
},
get:function(t){
var e=this.getData();
return e=e[t],e?e.val||null:null;
},
remove:function(e){
var n=this.getData();
n[e]&&delete n[e],t.setItem(this.key,JSON.stringify(n));
}
},t;
});define("biz_common/tmpl.js",[],function(){
"use strict";
var e=function(e,r,t){
var n="";
n=e.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r"),
n=t?n.replace(/\t==(.*?)#>/g,"',$1,'").replace(/\t=(.*?)#>/g,"', String($1).replace(/&/g,'&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ,'"):n.replace(/\t=(.*?)#>/g,"',$1,'"),
n=n.split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'");
var p=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+n+"');}return p.join('');");
return p(r);
},r=function(r,t,n){
var p=document.getElementById(r);
return p?e(p.innerHTML,t,n):"";
};
return{
render:r,
tmpl:e
};
});define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">分享给订阅用户</div>\n            <p class="share_appmsg_desc">可快速分享原创文章给你的公众号订阅用户</p>\n        </div>\n    </a>\n</div>\n';
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">来自: <#=source_nickname#></span>\n</span>    ';
});