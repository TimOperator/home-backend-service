import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { DataSource } from "typeorm";
import { Location } from "./src/locations/entities/location.entity";
import { Condition } from "./src/conditions/entities/condition.entity";
import { Systemstatus } from "./src/systemstatus/entities/systemstatus.entity";

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'mysql',
    host: configService.getOrThrow('MYSQL_HOST'),
    port: configService.getOrThrow('MYSQL_PORT'),
    database: configService.getOrThrow('MYSQL_DATABASE'),
    username: configService.getOrThrow('MYSQL_USER'),
    password: configService.getOrThrow('MYSQL_PASSWORD'),
    migrations: ['migrations/**'],
    entities: [Location, Condition, Systemstatus]
});