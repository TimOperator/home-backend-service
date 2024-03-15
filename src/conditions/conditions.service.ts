import { Injectable } from '@nestjs/common';
import { CreateConditionDto } from './dto/create-condition.dto';
import { UpdateConditionDto } from './dto/update-condition.dto';
import { EntityManager, Repository } from 'typeorm';
import { Condition } from './entities/condition.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConditionsService {
  constructor(
    @InjectRepository(Condition)
    private readonly conditionsRepository: Repository<Condition>,
    private readonly entityManager: EntityManager
  ) {}

  async create(createConditionDto: CreateConditionDto) {
    const condition = new Condition(createConditionDto);
    await this.entityManager.save(condition);
    const id = condition.id;
    return this.conditionsRepository.findOneBy({ id });
  }

  async findAll() {
    return this.conditionsRepository.find({
      relations: { location: true }
    });
  }

  async findOne(id: number) {
    return this.conditionsRepository.findOne({
      where: { id },
      relations: { location: true }
    });
  }
}
