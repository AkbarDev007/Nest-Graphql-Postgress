import { DataSource,DataSourceOptions } from "typeorm";
export const dataSourceOptions:DataSourceOptions={
    type: 'postgres',
    host: process.env.DATABASE_HOST || "localhost",
    port: Number(process.env.DATABASE_PORT) || 5432,
    database:process.env.DATABASE_NAME || "book_db",
    username:process.env.DATABASE_USER || "postgres",
    password: process.env.DATABASE_PASSWORD || "admin",
    entities: ["dist/**/*.entity.js"],
    migrations:["dist/db/migrations/*.js"],
    synchronize: Boolean(process.env.Sync) || true
    
}
const dataSource = new DataSource(dataSourceOptions);
export default dataSource