import { createPool } from "mysql2";


export const cxMysql = createPool ({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'utn',
    connectionLimit:100
});