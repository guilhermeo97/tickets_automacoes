import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/infra/users.module';
import { TicketModule } from './modules/tickets/infra/tickets.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProcessModule } from './modules/process/process.module';
import { SprintModule } from './modules/sprint/sprint.module';

@Module({
  imports: [UserModule, TicketModule, AuthModule, ProcessModule, SprintModule],
})
export class AppModule {}
