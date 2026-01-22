const config = require('./config');

config.base = '/';

console.warn('-----------------------------------------------');
console.warn('| md文件一行内容不能太长。会出现解析异常的bug |');
console.warn('-----------------------------------------------');

module.exports = config;
