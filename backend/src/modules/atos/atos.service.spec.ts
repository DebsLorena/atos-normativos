import { Test, TestingModule } from '@nestjs/testing';
import { AtosService } from './atos.service';

describe('AtosService', () => {
  let service: AtosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtosService],
    }).compile();

    service = module.get<AtosService>(AtosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
