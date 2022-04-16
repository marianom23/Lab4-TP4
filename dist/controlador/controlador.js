"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmpleado = exports.updateEmpleado = exports.addEmpleado = exports.getEmpleadoByID = exports.getEmpleados = void 0;
const mysqldb_1 = require("../mysqldb");
const getEmpleados = (req, res) => new Promise((resolve, reject) => {
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
        }
        console.log("MySQL Connection: " + connection.threadId);
        connection.query("SELECT * FROM empleados LIMIT 10", (err, results) => {
            if (err)
                console.error(err);
            res.send(results);
        });
    });
});
exports.getEmpleados = getEmpleados;
const getEmpleadoByID = (req, res) => new Promise((resolve, reject) => {
    const idParam = parseInt(req.params.idParam);
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
        }
        console.log("MySQL Connection: " + connection.threadId);
        connection.query("SELECT * FROM empleados WHERE legajo = ?", idParam, (err, results) => {
            if (err)
                console.error(err);
            res.send(results);
        });
    });
});
exports.getEmpleadoByID = getEmpleadoByID;
const addEmpleado = (req, res) => {
    const { apellido, nombre, dni, sector, fecha, activo } = req.body;
    var values = [apellido, nombre, dni, sector, fecha, activo];
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = "INSERT INTO empleados(apellido, nombre, dni, sector, fecha, activo) VALUES (?,?,?,?,?,?)";
            connection.query(sql, values, (err, _) => {
                if (err)
                    console.error(err);
                res.json({ message: "Empleado agregado con éxito." });
            });
        }
    });
};
exports.addEmpleado = addEmpleado;
const updateEmpleado = (req, res) => {
    const { apellido, nombre, dni, sector, fecha, activo, legajo } = req.body;
    var values = [apellido, nombre, dni, sector, fecha, activo, legajo];
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = "UPDATE empleados SET apellido = ?, nombre = ?, dni = ?, sector = ?, fecha = ?, activo = ? WHERE legajo = ?";
            connection.query(sql, values, (err, _) => {
                if (err)
                    console.error(err);
                res.json({ message: "Empleado updateado con éxito." });
            });
        }
    });
};
exports.updateEmpleado = updateEmpleado;
const deleteEmpleado = (req, res) => {
    const idParam = parseInt(req.params.idParam);
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = "DELETE FROM empleados WHERE legajo = ?";
            connection.query(sql, [idParam], (err, _) => {
                if (err)
                    console.error(err);
                res.json({ message: "Empleado deleteado con éxito." });
            });
        }
    });
};
exports.deleteEmpleado = deleteEmpleado;
