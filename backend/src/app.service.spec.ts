import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar a mensagem correta no getHello()', () => {
    expect(service.getHello()).toBe('API de Atos Normativos está rodando 🚀');
  });
});
