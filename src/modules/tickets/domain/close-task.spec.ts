import { Status } from './enum/status.enum';
import { User } from 'src/modules/users/domain/user';
import { Ticket } from './ticket';

describe('closeTicket', () => {
  it('must change the ticket state', () => {
    const user = new User(
      2,
      'teste',
      'teste@email.com',
      'password: string',
      'password: string',
      'password: string',
      'password: string',
    );
    const task = new Ticket(
      '1',
      'Test Task',
      'This is a test task',
      user,
      new Date(),
      new Date(),
      undefined,
    );

    expect(task.changeStatus(Status.IN_PROGRESS)).toBe(true);
  });
});
