import Dotenv from 'dotenv'; 
import { Knex } from 'knex';
import Path from 'path';

Dotenv.config({ path: Path.resolve(__dirname, '..', '.env') });

const config: Knex.Config = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: Path.resolve(__dirname, 'database', 'migrations')
    },
};

export default config;