/**
 * @file 工具函数
 * @author xxx
 */

export const throttle = (fun, delay) => {
    let last;
    let timer;
    return function (...args) {
        let ctx = this;
        let now = Date.now();
        if (last && now < last + delay) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = Date.now();
                fun.apply(ctx, args);
            }, delay);
        }
        else {
            last = Date.now();
            fun.apply(ctx, args);
        }
    };
};

export const getPageClientHeight = () => {
    return  Math.max(document.documentElement.clientHeight, document.body.clientHeight);
}

export const getSdkVersion = () => {
    let ua = window.navigator.userAgent;
    let startIndex = ua.indexOf('sdk/');
    let sdkVersion = '';
    if (startIndex) {
        sdkVersion = ua.slice(startIndex + 4);
    }
    console.log(sdkVersion);
    return sdkVersion;
};

// 秒数字转位时间显示
export const timerToMinute = time => {
    let minute = Math.floor((time % (60 * 60)) / 60);
    let second = Math.round(time % 60);

    let supplyTwo = function (num) {
        num = num + '';
        num = num.length < 2 ? ('0' + num) : num;
        return num;
    };

    minute = supplyTwo(minute);
    second = supplyTwo(second);

    return minute +  ':' + second;
};

export const getParam = () => {
    let query = location.search.substring(1).split('&');
    let obj = {};
    for (let i = 0; i < query.length; i++) {
        let kv = query[i].split('=');
        obj[kv[0]] = kv[1];
    }

    return obj;
};

export const judgeDevice = () => {
    let device = {};
    let ua = navigator.userAgent;
    let android = ua.match(/(Android);?[\s/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    let ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    let iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    device.ios = false;
    device.andriod = false;

    if (android) {
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.ios = true;
    }

    return device;
};

/**
 * 获取打开webview链接
 *
 * @param  {string} param hash路径和参数
 * @return {string} url
 */
export const getOpenViewUrl = param => {
    let url = window.location.origin
        + window.location.pathname
        + '#/' + param;

    return url;
};
/**
 * 比较两个版本号大小
 *
 * @param {string} v1 当前版本号
 * @param {string} v2 目标版本号
 * @return {boolean} true 当前版本号大于等于目标版本
 */
export const compareVersion = (v1, v2) => {
    v1 = v1 + '';
    v2 = v2 + '';

    let v1Arr = v1.split('.');
    let v2Arr = v2.split('.');

    for (let i = 0, len = v1Arr.length; i < len; i++) {
        if (parseInt(v1Arr[i], 10) < parseInt(v2Arr[i], 10)) {
            return false;
        }
    }
    return true;
};

export const debounce = (fun, delay) => {
    let last;
    return function (...args) {
        let ctx = this;
        clearTimeout(last);
        last = setTimeout(function () {
            fun.apply(ctx, args);
        }, delay);
    };
};