import { Request, Response } from 'express';
import { parse } from 'pg-protocol';
import { cxMysql } from "../mysqldb";

export const getEmpleados = (req: Request, res: Response) => new Promise((resolve, reject) => {
    cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err)
        }
        console.log("MySQL Connection: " + connection.threadId)
        connection.query("SELECT * FROM empleados", (err, results) => {
            if (err) console.error(err); 
            res.send(results)
        })
    })
})

export const getEmpleadoByID = (req: Request, res: Response) => new Promise((resolve, reject) => {
    const idParam = parseInt(req.params.idParam)
    cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err)
        }
        console.log("MySQL Connection: " + connection.threadId)
        connection.query("SELECT * FROM empleados WHERE legajo = ?", idParam ,(err, results) => {
            if (err) console.error(err); 
            res.send(results)
        })
    })
})

export const addEmpleado = (req: Request, res: Response) => {
    const { apellido, nombre, dni, sector, fecha, activo } = req.body;
    var values = [apellido, nombre,dni, sector, fecha, activo]
    cxMysql.getConnection((err, connection) => {
        if (err)
        { console.error(err);
        res.json({message: "Error agregando empleado."})
        return
        } else {
            let sql:string = "INSERT INTO empleados(apellido, nombre, dni, sector, fecha, activo) VALUES (?,?,?,?,?,?)"
            connection.query(sql, values, (err, _) => {
                if (err) console.error(err);
                res.json({message: "Empleado agregado con éxito."})
            })
        }
    })
}

export const updateEmpleado = (req: Request, res: Response) => {
    const { apellido, nombre, dni, sector, fecha, activo, legajo } = req.body;
    var values = [apellido, nombre, dni, sector, fecha, activo, legajo ]
    cxMysql.getConnection((err, connection) => {
        if (err)
        { console.error(err);
        res.send(err)
        return
        } else {
            let sql:string = "UPDATE empleados SET apellido = ?, nombre = ?, dni = ?, sector = ?, fecha = ?, activo = ? WHERE legajo = ?"
            connection.query(sql, values, (err, _) => {
                if (err) console.error(err);
                res.json({message: "Empleado updateado con éxito."})
            })
        }
    })
}

export const deleteEmpleado = (req: Request, res: Response) => {
    const idParam = parseInt(req.params.idParam)
    cxMysql.getConnection((err, connection) => {
        if (err)
        { console.error(err);
        res.send(err)
        return
        } else {
            let sql:string = "DELETE FROM empleados WHERE legajo = ?"
            connection.query(sql, [idParam], (err, _) => {
                if (err) console.error(err);
                res.json({message: "Empleado deleteado con éxito."})
            })
        }
    })
}