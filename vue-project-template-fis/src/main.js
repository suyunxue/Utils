import Vue from 'vue';
import MintUI from 'mint-ui';
import App from './page/app';
import axios from './utils/http';
import router from './router/index';
import './utils/base';
import 'babel-polyfill';
import FastClick from 'fastclick';

FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.prototype.axios = axios;

document.title = 'xxx';

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
