"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cxMysql = void 0;
const mysql2_1 = require("mysql2");
exports.cxMysql = (0, mysql2_1.createPool)({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'utn',
    connectionLimit: 100
});
