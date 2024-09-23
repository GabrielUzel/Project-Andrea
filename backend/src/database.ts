import knex from 'knex';
import knexConfig from './knexConfig';

const database = knex(knexConfig);

export default database;