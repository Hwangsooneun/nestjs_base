import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
dotenv.config();

const config: TypeOrmModuleOptions = {
  name: 'orangeplus',
  type: 'mysql',
  host: 'host',
  port: 3000,
  username: 'username',
  password: 'password',
  database: 'database',
  entities: [],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  timezone: 'Z',
  synchronize: false,
  keepConnectionAlive: true,
  logging: true,
};

export = config;
