/**
 * @file 统一处理http
 * @author 
 */

import axios from 'axios';
import {MessageBox} from 'mint-ui';
import Config from './config';

let errNet = '网络异常，请稍后再试';

export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(res => {
                    if (res.data.status === 2) {
                        window.location.href = Config.link.passport;
                        reject();
                    }
                    else {
                        resolve(res.data);
                    }
                })
                .catch(err => {
                    MessageBox({
                        title: '',
                        message: errNet,
                        confirmButtonText: '好的'
                    });
                    reject();
                });
        });
    },
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                    params: params || ''
                })
                .then(res => {
                    if (res.data.status === 2) {
                        window.location.href = Config.link.passport;
                        reject();
                    }
                    else {
                        resolve(res.data);
                    }
                })
                .catch(err => {
                    MessageBox({
                        title: '',
                        message: errNet,
                        confirmButtonText: '好的'
                    });
                    reject();
                });
        });
    }
};
