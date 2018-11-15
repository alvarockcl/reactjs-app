//carga archivo de configuración
var appconfig = require("./config");

//carga librerias
var express = require("express");
var bodyParser = require('body-parser');

//carga apis
var clienteapi = require('./apis/clienteroutes');
var clientedbapi = require('./apis/clientedbroutes');
var cuentadbapi = require('./apis/cuentadbroutes');

//inicia express
var app = express();

//configuraciones de app 
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))

var router = express.Router();
router.get('/', function(req, res) {
    res.json({ message: 'API - Servidor Listo...' });
});

//ruteo de apis
router.get('/cliente', clienteapi.obtenerclientes);
router.get('/cliente/traer', clienteapi.obtenercliente);

router.get('/clientedb/todos', clientedbapi.todos);
router.post('/clientedb/create', clientedbapi.create);
router.get('/clientedb/read', clientedbapi.read);
router.post('/clientedb/update', clientedbapi.update);
router.post('/clientedb/delete', clientedbapi.delete);

router.get('/cuentadb/todos', cuentadbapi.todos);
router.post('/cuentadb/create', cuentadbapi.create);
router.get('/cuentadb/read', cuentadbapi.read);
router.post('/cuentadb/update', cuentadbapi.update);
router.post('/cuentadb/delete', cuentadbapi.delete);


//configura el contexto de la aplicación
app.use('/' + appconfig.apipath, router);

app.disable('etag'); // deshabilita el cache http
app.listen(appconfig.port);
console.log("Backend Encendido");


