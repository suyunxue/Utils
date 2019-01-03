/**
 * @file jsbridge
 * @author 
 */

/**
 * jsbridge组件
 *
 * @param  {Function} callback 回调函数
 * @return {Function}
 */
const setupWebViewJavascriptBridge = (callback) => {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }
    else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
            callback(WebViewJavascriptBridge);
        }, false);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe);
    }, 0);
};

setupWebViewJavascriptBridge((bridge) => {
    bridge.init(function(message, responseCallback) {
        console.log('init收到：' + message);
        responseCallback('init返回');
    });
});

export default setupWebViewJavascriptBridge;
