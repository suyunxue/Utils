/**
 * @file 路由
 * @author xxx
 */
import Vue from 'vue';
import Router from 'vue-router';
import xxx from '@/page/xxx/xxx';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'xxx',
            component: xxx
        }
    ]
});
