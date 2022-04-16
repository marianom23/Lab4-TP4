import { createPool } from "mysql";


export const cxMysql = createPool ({
    host:'localhost',
    user:'root',
    password:'',
    database:'utn',
    connectionLimit:100
});