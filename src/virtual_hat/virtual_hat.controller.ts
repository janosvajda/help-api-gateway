import { Controller, Inject, Post, OnModuleInit, UseGuards, Req } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateVirtualHatResponse, VirtualHatServiceClient, VIRTUAL_HAT_SERVICE_NAME, CreateVirtualHatRequest } from './virtual_hat.pb';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';

@Controller('virtual_hat')
export class VirtualHatController implements OnModuleInit {
  private svc: VirtualHatServiceClient;

  @Inject(VIRTUAL_HAT_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<VirtualHatServiceClient>(VIRTUAL_HAT_SERVICE_NAME);
  }

  @Post()
  @UseGuards(AuthGuard)
  private async createVirtualHat(@Req() req: Request): Promise<Observable<CreateVirtualHatResponse>> {
    const body: CreateVirtualHatRequest = req.body;

    //body.userId = <number>req.user;

    return this.svc.createVirtualHat(body);
  }
}