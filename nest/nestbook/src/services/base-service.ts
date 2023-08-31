// import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ServiceA } from './a.service';

// @Injectable()
export class BaseService {
  //한줄에 적는게 아닌 엔터 쳐서 쓰는게 관례
  @Inject(ServiceA)
  private readonly serviceA: ServiceA;
  // constructor(private readonly serviceA: ServiceA) {}

  getHello(): string {
    return 'Hello World BASE!';
  }
  doSomeFunFromA(): string {
    return this.serviceA.getHello();
  }
}
