import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LocationsModule } from './locations/locations.module';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { DatabaseModule } from './database/database.module';
import { ConditionsModule } from './conditions/conditions.module';
import { SystemstatusModule } from './systemstatus/systemstatus.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    DatabaseModule,
    AuthModule,
    UserModule,
    LocationsModule,
    ConditionsModule,
    SystemstatusModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
