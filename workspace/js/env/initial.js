/**
 * Created by Donghui Huo on 2016/4/26.
 */
ReactIntl.addLocaleData([...ReactIntlEn, ...ReactIntlZh]);
var localeLanguage = 'en-US';
if (navigator.browserLanguage) {
    if (navigator.browserLanguage.toLowerCase() == 'zh-cn') {
        localeLanguage = 'zh-CN';
    } else {
        //localeLanguage = navigator.systemLanguage
    }
} else {
    if (navigator.language.toLowerCase() == 'zh-cn') {
        localeLanguage = 'zh-CN';
    } else {
        //localeLanguage = navigator.language
    }
}
var name = "baseurl=";
var baseUrl = "/"
var ca = document.cookie.split(';');
for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) {
        baseUrl = c.substring(name.length, c.length);
        break;
    }
}
module.exports = {
    //locale:'en-US'
    //locale:'zh-CN'
    locale: localeLanguage,
    baseUrl: baseUrl,
    endpoints: {
        platform: baseUrl + 'platform'
    }
}
