import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  it('deve ser definido', () => {
    expect(appController).toBeDefined();
  });

  it('deve retornar a mensagem do AppService', () => {
    const result = 'API de Atos Normativos está rodando 🚀';
    jest.spyOn(appService, 'getHello').mockImplementation(() => result);

    expect(appController.getHello()).toBe(result);
  });
});
