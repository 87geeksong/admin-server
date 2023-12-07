/*
 * @Descripttion: 
 * @Author: sunft
 * @Date: 2020-04-15 13:11:24
 * @LastEditTime: 2020-05-21 12:05:52
 */
/* eslint-disable */
/* sequelize基础配置文件 */
const Sequelize = require('sequelize');
// 参数依次为：要导入的数据库名，账号，密码
const sequelize = new Sequelize('mydata', 'root', 'ws870762', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;