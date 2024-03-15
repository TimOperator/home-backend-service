import { Test, TestingModule } from '@nestjs/testing';
import { SystemstatusService } from './systemstatus.service';

describe('SystemstatusService', () => {
  let service: SystemstatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemstatusService],
    }).compile();

    service = module.get<SystemstatusService>(SystemstatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
