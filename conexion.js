const { Client } = require('pg');

const conexion = () => {
    const client = new Client({
        host: '127.0.0.1',
        port: '5432',
        database: 'jugandoClaseUno',
        user: 'postgres',
        password: 'root'
    });
    return client;
}

module.exports = conexion;