import { Test, TestingModule } from '@nestjs/testing';
import { LocationsService } from './locations.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { EntityManager, Repository } from 'typeorm';

describe('LocationService', () => {
  let service: LocationsService;
  let locationsRepository: Repository<Location>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationsService,
        {
          provide: getRepositoryToken(Location),
          useValue: {
            find: jest.fn(),
          },
        },
        {
          provide: EntityManager,
          useValue: {},
        }
      ],
    }).compile();

    service = module.get<LocationsService>(LocationsService);
    locationsRepository = module.get<Repository<Location>>(getRepositoryToken(Location))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('findAll', async () => {
    await service.findAll();
    expect(locationsRepository.find).toHaveBeenCalled();
  })
});
