import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { EntityManager, Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationsRepository: Repository<Location>,
    private readonly entityManager: EntityManager
    ) {}

  async create(createLocationDto: CreateLocationDto) {
    const location = new Location(createLocationDto);
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

  async update(id: number, updateLocationDto: UpdateLocationDto) {
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
