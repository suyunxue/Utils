let { produceRandomArrValue } = require('./src/index');

let arr = ['aaa', 'bbb'];

for (let i = 0; i < 1000; i++) {
    let ret = produceRandomArrValue(arr);
    console.log(ret);
}