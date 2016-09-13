/**
 * Created by Donghui Huo on 2016/3/15.
 */
import initial from '../env/initial';
import intl from '../intl/intl';
let utilFun = function () {
    var locale = navigator.language.split('-');
    locale = locale[1] ? '${locale[0]}-${locale[1].toUpperCase()}' : navigator.language;
    global.locale = intl[locale] ? locale : initial.locale;
    global.globalProps = intl[global.locale]['app'];
};
utilFun.prototype = {
    name: 'utilFun',
    getName: function () {
        return this.name;
    },
    domReady: function (callback) {
        if (document.readyState == 'complete' || document.readyState == 'loaded' || document.readyState == 'interactive') {
            callback();
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    },
    getIntl: function (...pageKeys) {
        var obj = {};
        pageKeys.forEach(function (key) {
            for (var subKey of Object.keys(intl[locale][key])) {
                obj[subKey] = intl[locale][key][subKey];
            }
        });
        return obj;
    },
    uuid: function () {
        var s = [];
        var hexDigits = '0123456789abcdef';
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4';  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = '-';

        var uuid = s.join('');
        return uuid;
    },
    delay: (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })()
};

module.exports = new utilFun();