import { Injectable } from '@nestjs/common';
import { CreateLocationsDto } from './dto/create-locations.dto';
import { UpdateLocationsDto } from './dto/update-locations.dto';
import { EntityManager, Repository } from 'typeorm';
import { Locations } from './entities/locations.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Locations)
    private readonly locationsRepository: Repository<Locations>,
    private readonly entityManager: EntityManager
    ) {}

  async create(createLocationsDto: CreateLocationsDto) {
    const location = new Locations(createLocationsDto);
    await this.entityManager.save(location);
    const id = location.id;
    return this.locationsRepository.findOneBy({ id });
  }

  async findAll() {
    return this.locationsRepository.find();
  }

  async findOne(id: number) {
    return this.locationsRepository.findOneBy({ id });
  }

  async update(id: number, updateLocationDto: UpdateLocationsDto) {
    const location = await this.locationsRepository.findOneBy({ id });
    location.city = updateLocationDto.city;
    location.location = updateLocationDto.location;
    await this.locationsRepository.save(location);
    return this.locationsRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.locationsRepository.delete({ id });
  }
}
