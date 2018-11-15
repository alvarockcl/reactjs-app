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
            db.all(`SELECT * FROM cliente`, (err, rows) => {
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
        var id = req.body.id;
        var rut = req.body.rut;
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var tipocliente = req.body.tipocliente;
        var estado = req.body.estado;

           db.serialize(() => {
            db.run(`INSERT INTO cliente
             (id, rut, nombre, apellido, tipocliente, estado)
             VALUES (?,?,?,?,?,?)`, [id,rut,nombre,apellido,tipocliente,estado], (err) => {
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
    
        var id = req.body.id;
        // consultar la tabla cliente
        db.serialize(() => {
            db.all(`SELECT * FROM cliente where id = ?`,[id], (err, rows) => {
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
        var id = req.body.id;
        var rut = req.body.rut;
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var tipocliente = req.body.tipocliente;
        var estado = req.body.estado;

           db.serialize(() => {
            db.run(`UPDATE cliente SET 
                    rut = ?,
                    nombre = ?,
                    apellido = ?,
                    tipocliente = ?,
                    estado = ? where id = ?`, [rut,nombre,apellido,tipocliente,estado,id], (err) => {
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
        var id = req.body.id;

           db.serialize(() => {
            db.run(`UPDATE cliente SET 
                    estado = 0 where id = ?`, [id], (err) => {
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
