import { Dialect, Sequelize, Transaction } from 'sequelize';
import * as config from '../config.json';
import { Env, Config } from '../types/db';

const env: Env =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const options: Config = config[env];

const dbName: string = options.database;
const dbUser: string = options.username;
const dbPassword: string = options.password;
const dbHost: string = options.host;
const dbDialect = options.dialect as Dialect;

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
});
