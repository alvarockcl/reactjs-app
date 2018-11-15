// carga la librería
const sqlite3 = require('sqlite3').verbose();

// abrir la base de datos
let db = new sqlite3.Database('./db/base.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err)
    {
        console.error(err.message);
    }
    console.log('Conexión OK');
});

/*
// cerrar la conexión
db.close((err) =>{
    if(err){
        console.error(err.message);
    }
    console.log('Conexión cerrada');

});
*/

exports.todos = function(req, res) {

        // consultar la tabla cliente
        db.serialize(() => {
            db.all(`SELECT * FROM cuenta`, (err, rows) => {
            if (err) {
                console.error(err.message);
            }
            console.log('consulta ok');
            res.status(200).send(rows);
            });
        });
}

exports.create = function(req, res) {
           
        // agregar registros
        var codcuenta = req.body.codcuenta;
        var nombrecuenta = req.body.nombrecuenta;
        var descripcion = req.body.descripcion;
        var presupuesto = req.body.presupuesto;
        var estado = req.body.estado;

           db.serialize(() => {
            db.run(`INSERT INTO cuenta
             (codcuenta,nombrecuenta,descripcion,presupuesto,estado)
             VALUES (?,?,?,?,1)`, [codcuenta,nombrecuenta,descripcion,presupuesto,estado], (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('create ok');
            res.status(200).send({
                codigo: 200,
                mensaje: 'Registro creado'
            });
            });
        });
}

exports.read = function(req, res) {
    
        var codcuenta = req.body.codcuenta;
        // consultar la tabla cliente
        db.serialize(() => {
            db.all(`SELECT * FROM cuenta where codcuenta = ?`,[codcuenta], (err, rows) => {
            if (err) {
                console.error(err.message);
            }
            console.log('read ok');
            res.status(200).send(rows);
            });
        });
 }

exports.update = function(req, res) {
        // actualizar registro por id
        var codcuenta = req.body.codcuenta;
        var nombrecuenta = req.body.nombrecuenta;
        var descripcion = req.body.descripcion;
        var presupuesto = req.body.presupuesto;

           db.serialize(() => {
            db.run(`UPDATE cuenta SET 
                    nombrecuenta = ?,
                    descripcioncuenta = ?,
                    presupuesto = ?
                    where codcuenta = ?`, [nombrecuenta,descripcion,presupuesto,codcuenta], (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('update ok');
            res.status(200).send({
                codigo: 200,
                mensaje: 'Registro actualizado'
            });
            });
        });
}

exports.delete = function(req, res) {
        // cambiar estado registro por id
        var codcuenta = req.body.codcuenta;

           db.serialize(() => {
            db.run(`UPDATE cliente SET 
                    estado = 0 where codcuenta = ?`, [codcuenta], (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('eliminación ok');
            res.status(200).send({
                codigo: 200,
                mensaje: 'Registro eliminado'
            });
            });
        });
}
