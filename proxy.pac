/*
 * Installing/using this software, you agree that this software is
 * only for study purposes and its authors and service providers
 * take no responsibilities for any consequences.
 */
function FindProxyForURL(t) {
	if(/trailers\.apple\.com/i.test(t)) return "PROXY proxy.ttdianshi.com:8002";
    return shExpMatch(t, "http://v.youku.com/player/*") || shExpMatch(t, "http://api.youku.com/player/*") || shExpMatch(t, "http://v2.tudou.com/*") || shExpMatch(t, "http://www.tudou.com/a/*") || shExpMatch(t, "http://www.tudou.com/v/*") || shExpMatch(t, "http://s.plcloud.music.qq.com/fcgi-bin/p.fcg*") || shExpMatch(t, "http://hot.vrs.sohu.com/*") || shExpMatch(t, "http://live.tv.sohu.com/live/player*") || shExpMatch(t, "http://hot.vrs.letv.com/*") || shExpMatch(t, "http://data.video.qiyi.com/*") || shExpMatch(t, "http://220.181.61.229/*") || shExpMatch(t, "http://61.135.183.45/*") || shExpMatch(t, "http://61.135.183.46/*") || shExpMatch(t, "http://220.181.19.218/*") || shExpMatch(t, "http://220.181.61.213/*") || shExpMatch(t, "http://220.181.118.181/*") || shExpMatch(t, "http://123.126.48.47/*") || shExpMatch(t, "http://123.126.48.48/*") || shExpMatch(t, "http://vv.video.qq.com/*") || shExpMatch(t, "http://tt.video.qq.com/getinfo*") || shExpMatch(t, "http://ice.video.qq.com/getinfo*") || shExpMatch(t, "http://tjsa.video.qq.com/getinfo*") || shExpMatch(t, "http://a10.video.qq.com/getinfo*") || shExpMatch(t, "http://xyy.video.qq.com/getinfo*") || shExpMatch(t, "http://vcp.video.qq.com/getinfo*") || shExpMatch(t, "http://vsh.video.qq.com/getinfo*") || shExpMatch(t, "http://vbj.video.qq.com/getinfo*") || shExpMatch(t, "http://bobo.video.qq.com/getinfo*") || shExpMatch(t, "http://flvs.video.qq.com/getinfo*") || shExpMatch(t, "http://geo.js.kankan.xunlei.com/*") || shExpMatch(t, "http://web-play.pptv.com/*") || shExpMatch(t, "http://web-play.pplive.cn/*") || shExpMatch(t, "http://dyn.ugc.pps.tv/*") || shExpMatch(t, "http://v.pps.tv/ugc/ajax/aj_html5_url.php*") || shExpMatch(t, "http://inner.kandian.com/*") || shExpMatch(t, "http://ipservice.163.com/*") || shExpMatch(t, "http://so.open.163.com/open/info.htm*") || shExpMatch(t, "http://zb.s.qq.com/*") || shExpMatch(t, "http://ip.kankan.xunlei.com/*") || shExpMatch(t, "http://vxml.56.com/json/*") || shExpMatch(t, "http://music.sina.com.cn/yueku/intro/*") || shExpMatch(t, "http://music.sina.com.cn/radio/port/webFeatureRadioLimitList.php*") || shExpMatch(t, "http://play.baidu.com/data/music/songlink*") || shExpMatch(t, "http://v.iask.com/v_play.php*") || shExpMatch(t, "http://v.iask.com/v_play_ipad.cx.php*") || shExpMatch(t, "http://tv.weibo.com/player/*") || shExpMatch(t, "http://wtv.v.iask.com/*.m3u8") || shExpMatch(t, "http://www.yinyuetai.com/insite/*") || shExpMatch(t, "http://www.yinyuetai.com/main/get-*") || shExpMatch(t, "http://*.dpool.sina.com.cn/iplookup*") || shExpMatch(t, "http://*/vrs_flash.action*") || shExpMatch(t, "http://*/?prot=2&type=1*") || shExpMatch(t, "http://*/?prot=2&file=/*") || shExpMatch(t, "http://api.letv.com/streamblock*") || shExpMatch(t, "http://api.letv.com/mms/out/video/play*") || shExpMatch(t, "http://api.letv.com/geturl*") || shExpMatch(t, "http://live.gslb.letv.com/gslb?*") || shExpMatch(t, "http://vdn.apps.cntv.cn/api/get*") || shExpMatch(t, "http://vip.sports.cntv.cn/check.do*") || shExpMatch(t, "http://vip.sports.cntv.cn/play.do*") || shExpMatch(t, "http://vip.sports.cntv.cn/servlets/encryptvideopath.do*") || shExpMatch(t, "http://api.3g.youku.com/layout*") || shExpMatch(t, "http://api.3g.youku.com/v3/play/address*") || shExpMatch(t, "http://api.3g.youku.com/openapi-wireless/videos/*/download*") || shExpMatch(t, "http://api.3g.youku.com/videos/*/download*") || shExpMatch(t, "http://api.3g.youku.com/common/v3/play*") || shExpMatch(t, "http://play.api.3g.youku.com/common/v3/hasadv/play*") || shExpMatch(t, "http://play.api.3g.youku.com/common/v3/play*") || shExpMatch(t, "http://play.api.3g.youku.com/v3/play/address*") || shExpMatch(t, "http://play.api.3g.tudou.com/v*") || shExpMatch(t, "http://api.3g.tudou.com/*") || shExpMatch(t, "http://api.tv.sohu.com/mobile_user/device/clientconf.json?*") || shExpMatch(t, "http://access.tv.sohu.com/*") || shExpMatch(t, "http://iface2.iqiyi.com/php/xyz/iface/*") || shExpMatch(t, "http://dynamic.app.m.letv.com/*/dynamic.php?*playid*") || shExpMatch(t, "http://listso.m.areainfo.ppstream.com/ip/q.php*") || shExpMatch(t, "http://api.letv.com/getipgeo") || shExpMatch(t, "http://m.letv.com/api/geturl?*") || shExpMatch(t, "http://3g.music.qq.com/*") || shExpMatch(t, "http://mqqplayer.3g.qq.com/*") || shExpMatch(t, "http://proxy.music.qq.com/*") || shExpMatch(t, "http://ip2.kugou.com/check/isCn/*") || shExpMatch(t, "http://ip.kugou.com/check/isCn/*") || shExpMatch(t, "http://client.api.ttpod.com/global*") || shExpMatch(t, "http://mobi.kuwo.cn/*") || shExpMatch(t, "http://mobilefeedback.kugou.com/*") || shExpMatch(t, "http://tingapi.ting.baidu.com/v1/restserver/ting?*method=baidu.ting.song*") || shExpMatch(t, "http://serviceinfo.sdk.duomi.com/api/serviceinfo/getserverlist*") || shExpMatch(t, "http://iplocation.geo.qiyi.com/cityjson") || shExpMatch(t, "http://sns.video.qq.com/tunnel/fcgi-bin/tunnel*") || shExpMatch(t, "http://v5.pc.duomi.com/single-ajaxsingle-isban*") || shExpMatch(t, "https://openapi.youku.com/*") || shExpMatch(t, "https://61.135.196.99/*") || shExpMatch(t, "https://220.181.185.150/*") || shExpMatch(t, "https://httpbin.org/get") || shExpMatch(t, "http://180.153.225.136/*") || shExpMatch(t, "http://118.244.244.124/*") || shExpMatch(t, "http://210.129.145.150/*") ? "PROXY proxy.uku.im:80" : "DIRECT"
}
