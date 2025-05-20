import { create } from 'domain';

export class Sprint {
  private id?: number;
  private name: string;
  private startDate: Date;
  private endDate: Date;
  private status: string;
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(
    name: string,
    startDate: Date,
    endDate: Date,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
    status?: string,
  ) {
    this.id = id ? id : 0;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status ? status : this.actualState(startDate);
    this.createdAt = createdAt ? createdAt : new Date();
    this.updatedAt = updatedAt ? updatedAt : new Date();
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public setStartDate(startDate: Date): void {
    this.startDate = startDate;
  }

  public getEndDate(): Date {
    return this.endDate;
  }

  public setEndDate(endDate: Date): void {
    this.endDate = endDate;
  }

  public getStatus(): string {
    return this.status;
  }

  public actualState(data: Date): string {
    const today = new Date();
    if (data >= today) {
      this.status = 'active';
    }
    if (data < today) {
      this.status = 'inactive';
    }
    return this.status;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
