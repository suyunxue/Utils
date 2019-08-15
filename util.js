/**
 * @file 工具函数
 */

// 图片压缩算法
function compress(img, fileType) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext('2d');

    let width = img.width;
    let height = img.height;

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, width, height);

    // 压缩
    let base64data = canvas.toDataURL(fileType, 0.75);
    canvas = ctx = null;

    return base64data;
}

// 单位为毫秒
function timeToStr(time) {
    hour = Math.floor(time / (1000 * 60 * 60));
    minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    second = Math.round((time % (1000 * 60)) / 1000);

    let supplyTwo = function (num) {
        num = num + '';
        num = num.length < 2 ? ('0' + num) : num;
        return num;
    };

    hour = supplyTwo(hour);
    minute = supplyTwo(minute);
    second = supplyTwo(second);
}

// 单位为秒
function timeToStr(time) {
    hour = Math.floor(time / (60 * 60));
    minute = Math.floor((time % (60 * 60)) / 60);
    second = Math.round(time % 60);

    let supplyTwo = function (num) {
        num = num + '';
        num = num.length < 2 ? ('0' + num) : num;
        return num;
    };

    hour = supplyTwo(hour);
    minute = supplyTwo(minute);
    second = supplyTwo(second);

    console.log('hour: ' + hour);
    console.log('minute: ' + minute);
    console.log('second: ' + second);
}

const getCookie = (c_name) => {
    if(document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=");//获取字符串的起点
        if(c_start != -1) {
            c_start = c_start + c_name.length + 1;//获取值的起点
            let c_end = document.cookie.indexOf(";", c_start);//获取结尾处
            if(c_end == -1) c_end = document.cookie.length;//如果是最后一个，结尾就是cookie字符串的结尾
            return decodeURI(document.cookie.substring(c_start, c_end));//截取字符串返回
        }
    }
    return "";
}

// 判断设备类型
const judgeDevice = () => {
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
const getOpenViewUrl = param => {
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
const compareVersion = (v1, v2) => {
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

const debounce = (fun, delay) => {
    let last;
    return function (...args) {
        let ctx = this;
        clearTimeout(last);
        last = setTimeout(function () {
            fun.apply(ctx, args);
        }, delay);
    };
};

export {
    debounce,
    compareVersion,
    getOpenViewUrl,
    judgeDevice,
    getCookie,
    timeToStr,
    compress
}