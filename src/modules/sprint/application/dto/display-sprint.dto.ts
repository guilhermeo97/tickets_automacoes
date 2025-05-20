export class DisplaySprintDto {
  id?: number;
  name: string;
  startDate: Date;
  endDate: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    name: string,
    startDate: Date,
    endDate: Date,
    status: string,
    createdAt: Date,
    updatedAt: Date,
    id?: number,
  ) {
    this.id = id || 0;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
