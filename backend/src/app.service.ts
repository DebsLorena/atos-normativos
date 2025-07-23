import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API de Atos Normativos está rodando 🚀';
  }
}
