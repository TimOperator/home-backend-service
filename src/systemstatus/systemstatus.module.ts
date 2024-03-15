import { Module } from '@nestjs/common';
import { SystemstatusService } from './systemstatus.service';
import { SystemstatusController } from './systemstatus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Systemstatus } from 'src/systemstatus/entities/systemstatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Systemstatus])],
  controllers: [SystemstatusController],
  providers: [SystemstatusService],
})
export class SystemstatusModule {}
