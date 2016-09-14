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
module.exports = {
    //locale:'en-US'
    locale: localeLanguage
}
