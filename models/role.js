/*
 * @Descripttion: 
 * @Author: sunft
 * @Date: 2020-02-24 15:18:51
 * @LastEditTime: 2020-04-21 17:04:37
 */

const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');

const roleModel = sequelize.define('sys_role', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    description: {
        type: Sequelize.STRING(20),
    },
    role: {
        type: Sequelize.STRING(20),
    },
}, {
    // 启用时间戳
    timestamps: false,
    freezeTableName: true,
});

module.exports = roleModel;

