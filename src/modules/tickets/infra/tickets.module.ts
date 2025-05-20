import { Module } from '@nestjs/common';
import { TicketController } from '../presentation/tickets.controller';
import { UserModule } from 'src/modules/users/infra/users.module';

@Module({
  imports: [UserModule],
  controllers: [TicketController],
  providers: [],
})
export class TicketModule {}
