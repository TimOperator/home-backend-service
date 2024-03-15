import { Injectable } from '@nestjs/common';
import { CreateSystemstatusDto } from './dto/create-systemstatus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Systemstatus } from './entities/systemstatus.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class SystemstatusService {
constructor(
  @InjectRepository(Systemstatus)
  private readonly systemstatusRepository: Repository<Systemstatus>,
  private readonly entityManager: EntityManager
) {}

  async create(createSystemstatusDto: CreateSystemstatusDto) {
    const systemstatus = new Systemstatus(createSystemstatusDto);
    await this.entityManager.save(systemstatus);
    const id = systemstatus.id;
    return this.systemstatusRepository.findOneBy({ id });
  }

  async findAll() {
    return this.systemstatusRepository.find({
      relations: { location: true }
    })
  }

  async findOne(id: number) {
    return this.systemstatusRepository.findOne({
      where: { id },
      relations: { location: true }
    })
  }
}
