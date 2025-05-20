import { User } from 'src/modules/users/domain/user';
import { Status } from './enum/status.enum';
import { Sprint } from 'src/modules/sprint/domain/sprint';
import { BadRequestException } from '@nestjs/common';
import { Process } from 'src/modules/process/entities/process';

export class Ticket {
  private id: number;
  private title: string;
  private description: string;
  private typeDemand: string;
  private typeSuport?: string;
  private intExt: string;
  private client: User;
  private developer?: User;
  private status: Status;
  private subsector: string;
  private urgency: boolean;
  private timeToDevelop: number;
  private process: Process;
  private sprint?: Sprint;
  private idProduct?: string;
  private createdAt: Date;
  private updatedAt: Date;
  private closedAt?: Date;

  constructor(
    title: string,
    description: string,
    typeDemand: string,
    intExt: string,
    client: User,
    status: Status,
    subsector: string,
    urgency: boolean,
    timeToDevelop: number,
    createdAt: Date,
    updatedAt: Date,
    process: Process,
    closedAt?: Date,
    id?: number,
    idProduct?: string,
    developer?: User,
    typeSuport?: string,
    sprint?: Sprint,
  ) {
    this.title = title;
    this.description = description;
    this.typeDemand = typeDemand;
    this.intExt = intExt;
    this.client = client;
    this.status = status;
    this.subsector = subsector;
    this.urgency = urgency;
    this.timeToDevelop = timeToDevelop;
    this.sprint = sprint;
    this.process = process;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.closedAt = closedAt;
    this.id = id || 0;
    this.idProduct = idProduct;
    this.developer = developer;
    this.typeSuport = typeSuport;
  }

  isComplete(): boolean {
    return this.status === Status.DONE;
  }

  changeStatus(novoStatus: Status) {
    if (this.isComplete()) {
      throw new BadRequestException('Task already completed');
    }
    if (novoStatus === this.status) {
      throw new BadRequestException('Task already has this status');
    }
    this.status = novoStatus;
    return true;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getTypeDemand(): string {
    return this.typeDemand;
  }

  setTypeDemand(typeDemand: string): void {
    this.typeDemand = typeDemand;
  }

  getTypeSuport(): string | undefined {
    return this.typeSuport;
  }

  setTypeSuport(typeSuport: string | undefined): void {
    this.typeSuport = typeSuport;
  }

  getIntExt(): string {
    return this.intExt;
  }

  setIntExt(intExt: string): void {
    this.intExt = intExt;
  }

  getClient(): User {
    return this.client;
  }

  setClient(client: User): void {
    this.client = client;
  }

  getDeveloper(): User | undefined {
    return this.developer;
  }

  setDeveloper(developer: User | undefined): void {
    this.developer = developer;
  }

  getStatus(): Status {
    return this.status;
  }

  setStatus(status: Status): void {
    this.status = status;
  }

  getSubsector(): string {
    return this.subsector;
  }

  setSubsector(subsector: string): void {
    this.subsector = subsector;
  }

  getUrgency(): boolean {
    return this.urgency;
  }

  setUrgency(urgency: boolean): void {
    this.urgency = urgency;
  }

  getTimeToDevelop(): number {
    return this.timeToDevelop;
  }

  setTimeToDevelop(timeToDevelop: number): void {
    this.timeToDevelop = timeToDevelop;
  }

  getSprint(): Sprint | undefined {
    return this.sprint;
  }

  setSprint(sprint: Sprint): void {
    this.sprint = sprint;
  }

  getIdProduct(): string | undefined {
    return this.idProduct;
  }

  setIdProduct(idProduct: string | undefined): void {
    this.idProduct = idProduct;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  getClosedAt(): Date | undefined {
    return this.closedAt;
  }

  setClosedAt(closedAt: Date | undefined): void {
    this.closedAt = closedAt;
  }
}
