import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationsDto } from './dto/create-locations.dto';
import { UpdateLocationsDto } from './dto/update-locations.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationService: LocationsService) {}

  @Post()
  async create(@Body() createLocationsDto: CreateLocationsDto) {
    return this.locationService.create(createLocationsDto);
  }

  @Get()
  async findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLocationsDto: UpdateLocationsDto) {
    return this.locationService.update(+id, updateLocationsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
