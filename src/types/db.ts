export interface Config {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
}

export type Env = 'production' | 'development';
