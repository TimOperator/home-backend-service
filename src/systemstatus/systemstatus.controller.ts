import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SystemstatusService } from './systemstatus.service';
import { CreateSystemstatusDto } from './dto/create-systemstatus.dto';
import { UpdateSystemstatusDto } from './dto/update-systemstatus.dto';

@Controller('systemstatus')
export class SystemstatusController {
  constructor(private readonly systemstatusService: SystemstatusService) {}

  @Post()
  async create(@Body() createSystemstatusDto: CreateSystemstatusDto) {
    return this.systemstatusService.create(createSystemstatusDto);
  }

  @Get()
  async findAll() {
    return this.systemstatusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.systemstatusService.findOne(+id);
  }
}
