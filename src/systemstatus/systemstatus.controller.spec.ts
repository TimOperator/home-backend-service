import { Test, TestingModule } from '@nestjs/testing';
import { SystemstatusController } from './systemstatus.controller';
import { SystemstatusService } from './systemstatus.service';

describe('SystemstatusController', () => {
  let controller: SystemstatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemstatusController],
      providers: [SystemstatusService],
    }).compile();

    controller = module.get<SystemstatusController>(SystemstatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
