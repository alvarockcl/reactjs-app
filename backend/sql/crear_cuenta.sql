-- Tabla cuenta contable

CREATE TABLE `cuenta` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`codcuenta`	TEXT,
	`nombrecuenta`	TEXT,
	`descripcion`	TEXT,
	`presupuesto`	INTEGER,
	`estado`	TEXT
);

-- IMPORTANTE: La tabla cuenta ya está creada en la base de datos.