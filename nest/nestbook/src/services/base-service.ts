// import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ServiceA } from './a.service';

// @Injectable()
export class BaseService {
  @Inject(ServiceA) private readonly serviceA: ServiceA;
  // constructor(private readonly serviceA: ServiceA) {}

  getHello(): string {
    return 'Hello World BASE!';
  }
  doSomeFunFromA(): string {
    return this.serviceA.getHello();
  }
}
