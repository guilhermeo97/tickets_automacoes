import { Ticket } from 'src/modules/tickets/domain/ticket';

export class Process {
  private id: number;
  private ticket: Ticket;
  private productivityGain: boolean;
  private estimatedTimeGain: number;
  private numberOfPeopleActivity: number;
  private activityExecutionTime: number;
  private quantityExecuted: number;
  private legalAspect: boolean;
  private legalAspectDescription: string;
  private stableProcess: boolean;
  private similarDevelopment: boolean;
  private positionExecutorActivity: string;
  private activityRecoveryValue: number;

  constructor(
    id: number,
    ticket: Ticket,
    productivityGain: boolean,
    estimatedTimeGain: number,
    numberOfPeopleActivity: number,
    activityExecutionTime: number,
    quantityExecuted: number,
    legalAspect: boolean,
    legalAspectDescription: string,
    stableProcess: boolean,
    similarDevelopment: boolean,
    positionExecutorActivity: string,
    activityRecoveryValue: number,
  ) {
    this.id = id;
    this.ticket = ticket;
    this.productivityGain = productivityGain;
    this.estimatedTimeGain = estimatedTimeGain;
    this.numberOfPeopleActivity = numberOfPeopleActivity;
    this.activityExecutionTime = activityExecutionTime;
    this.quantityExecuted = quantityExecuted;
    this.legalAspect = legalAspect;
    this.legalAspectDescription = legalAspectDescription;
    this.stableProcess = stableProcess;
    this.similarDevelopment = similarDevelopment;
    this.positionExecutorActivity = positionExecutorActivity;
    this.activityRecoveryValue = activityRecoveryValue;
  }

  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }

  public getProductivityGain(): boolean {
    return this.productivityGain;
  }
  public setProductivityGain(productivityGain: boolean): void {
    this.productivityGain = productivityGain;
  }

  public getEstimatedTimeGain(): number {
    return this.estimatedTimeGain;
  }
  public setEstimatedTimeGain(estimatedTimeGain: number): void {
    this.estimatedTimeGain = estimatedTimeGain;
  }

  public getNumberOfPeopleActivity(): number {
    return this.numberOfPeopleActivity;
  }
  public setNumberOfPeopleActivity(numberOfPeopleActivity: number): void {
    this.numberOfPeopleActivity = numberOfPeopleActivity;
  }

  public getActivityExecutionTime(): number {
    return this.activityExecutionTime;
  }
  public setActivityExecutionTime(activityExecutionTime: number): void {
    this.activityExecutionTime = activityExecutionTime;
  }

  public getQuantityExecuted(): number {
    return this.quantityExecuted;
  }
  public setQuantityExecuted(quantityExecuted: number): void {
    this.quantityExecuted = quantityExecuted;
  }

  public getLegalAspect(): boolean {
    return this.legalAspect;
  }
  public setLegalAspect(legalAspect: boolean): void {
    this.legalAspect = legalAspect;
  }

  public getLegalAspectDescription(): string {
    return this.legalAspectDescription;
  }
  public setLegalAspectDescription(legalAspectDescription: string): void {
    this.legalAspectDescription = legalAspectDescription;
  }

  public getStableProcess(): boolean {
    return this.stableProcess;
  }
  public setStableProcess(stableProcess: boolean): void {
    this.stableProcess = stableProcess;
  }

  public getSimilarDevelopment(): boolean {
    return this.similarDevelopment;
  }
  public setSimilarDevelopment(similarDevelopment: boolean): void {
    this.similarDevelopment = similarDevelopment;
  }

  public getPositionExecutorActivity(): string {
    return this.positionExecutorActivity;
  }
  public setPositionExecutorActivity(positionExecutorActivity: string): void {
    this.positionExecutorActivity = positionExecutorActivity;
  }

  public getActivityRecoveryValue(): number {
    return this.activityRecoveryValue;
  }
  public setActivityRecoveryValue(activityRecoveryValue: number): void {
    this.activityRecoveryValue = activityRecoveryValue;
  }
}
