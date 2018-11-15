## Backend

npm install

nodemon server

http://localhost:4000/api

Respuesta inicial
```
{
    "message":"API - Servidor Listo..."
}
```

Petición GET cliente

http://localhost:4000/api/cliente

```
[{"id":1,"rut":"123334448","nombre":"Juan","apellido":"Perez","tipoCliente":"Normal","estado":0},{"id":2,"rut":"123335559","nombre":"Pedro","apellido":"Perez","tipoCliente":"Alto","estado":1},{"id":8,"rut":"136667779","nombre":"Jose","apellido":"Perez","tipoCliente":"Medio","estado":1}]
```

API con SQLite3

GET
http://localhost:4000/api/clientedb/todos

POST
http://localhost:4000/api/clientedb/create

GET
http://localhost:4000/api/clientedb/read

POST
http://localhost:4000/api/clientedb/update

POST
http://localhost:4000/api/clientedb/delete





