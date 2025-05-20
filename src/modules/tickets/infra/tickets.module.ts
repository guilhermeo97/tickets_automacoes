import { Module } from '@nestjs/common';
import { TicketController } from '../presentation/tickets.controller';
import { UsersModule } from 'src/modules/users/infra/users.module';

@Module({
  imports: [UsersModule],
  controllers: [TicketController],
  providers: [],
})
export class TicketModule {}
