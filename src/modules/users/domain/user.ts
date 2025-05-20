export class User {
  private id: number;
  private name: string;
  private jobTitle: string;
  private department: string;
  private email: string;
  private company: string;
  private password: string;
  private createdAt: Date;
  private updatedAt: Date;
  private status: boolean;

  constructor(
    id: number,
    name: string,
    jobTitle: string,
    department: string,
    company: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.id = id;
    this.name = name;
    this.jobTitle = jobTitle;
    this.department = department;
    this.company = company;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt ? createdAt : new Date();
    this.updatedAt = updatedAt ? updatedAt : new Date();
    this.status = true;
  }

  isActive(): boolean {
    return this.status;
  }
  getId(): number {
    return this.id;
  }

  getCompany(): string {
    return this.company;
  }

  setCompany(company: string): void {
    this.company = company;
  }

  getName(): string {
    return this.name;
  }

  getJobTitle(): string {
    return this.jobTitle;
  }

  getDepartment(): string {
    return this.department;
  }

  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
  getCreatedAt(): Date {
    return this.createdAt;
  }
  getUpdatedAt(): Date {
    return this.updatedAt;
  }
  setName(name: string): void {
    this.name = name;
  }

  setJobTitle(jobTitle: string): void {
    this.jobTitle = jobTitle;
  }

  setDepartment(department: string): void {
    this.department = department;
  }

  setEmail(email: string): void {
    this.email = email;
  }
  setPassword(password: string): void {
    this.password = password;
  }
  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
  setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
