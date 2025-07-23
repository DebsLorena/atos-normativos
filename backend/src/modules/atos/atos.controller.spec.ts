import { Test, TestingModule } from '@nestjs/testing';
import { AtosController } from './atos.controller';

describe('AtosController', () => {
  let controller: AtosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtosController],
    }).compile();

    controller = module.get<AtosController>(AtosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
