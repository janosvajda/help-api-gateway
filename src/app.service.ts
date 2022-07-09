import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello this is !HƎlp's GateWay :) `;
  }
}
