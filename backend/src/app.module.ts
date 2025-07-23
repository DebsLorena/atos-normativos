import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AtosModule } from './modules/atos/atos.module';

@Module({
  imports: [AuthModule, AtosModule],
})
export class AppModule {}
