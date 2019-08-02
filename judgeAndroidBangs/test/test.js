const {describe, it} = require('mocha');
const assert = require('assert');
let { isBangsScreen } = require('../src/index');
let ua = 'Mozilla/5.0 (Linux; Android 9; CLT-AL01 Build/HUAWEICLT-AL01; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/71.0.3578.99 Mobile Safari/537.36 FromApp/XiaoDuApp oneapp/2.12.0.2003 sdk/0.7.0';
 
describe('huaweip20 test ua:', function() {
    it('huaweip20 ua should be true', function() {
        assert(isBangsScreen(ua) === true);
    });
});
