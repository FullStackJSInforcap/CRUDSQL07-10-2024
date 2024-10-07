const conexion = require('./conexion');

const findAll = async () => {
    const client = conexion();
    await client.connect();
    const personas = await client.query('SELECT * FROM persona');
    console.log(personas.rows);
    await client.end();
}

const findById = async (id) => {
    const client = conexion();
    await client.connect();
    const persona = await client.query(`SELECT * FROM persona WHERE id = ${id}`);
    console.log(persona.rows);
    await client.end();
}

const insert = async (id, nombre, apellido) => {
    const client = conexion();
    await client.connect();
    const persona = await client.query(`INSERT INTO persona(id, nombre, apellido) VALUES(${id}, '${nombre}', '${apellido}')`);
    console.log(persona);
    await client.end();
}

const update = async (id, nombre, apellido) => {
    const client = conexion();
    await client.connect();
    const persona = await client.query(`UPDATE persona SET nombre = '${nombre}', apellido = '${apellido}' WHERE id = ${id}`);
    console.log(persona);
    await client.end();
}

const deleteById = async (id) => {
    const client = conexion();
    await client.connect();
    const persona = await client.query(`DELETE FROM persona WHERE id = ${id}`);
    console.log(persona);
    await client.end();
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    deleteById
}