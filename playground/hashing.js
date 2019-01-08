const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var message = 'gigi muschi';
var hash = SHA256(message).toString();

console.log(`hash:${hash}`);

var data = {
    id: 4
};

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('data was not changed');
// } else {
//     console.log('data was changed! do not trust');
// }


var token = jwt.sign(data, '123abc');
console.log(`token: ${token}`);
var decoded = jwt.verify(token, '123abcd');
console.log(`decoded: ${decoded}`);