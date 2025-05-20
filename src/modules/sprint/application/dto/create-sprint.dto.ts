import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateSprintDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsDateString()
  @IsNotEmpty({ message: 'Start date is required' })
  startDate: Date;

  @IsDateString()
  @IsNotEmpty({ message: 'End date is required' })
  endDate: Date;
}
