/**
 * @file 工具函数
 */

// 判断设备类型
export const judgeDevice = () => {
    let device = {};
    let ua = navigator.userAgent;
    let android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
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