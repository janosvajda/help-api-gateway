import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { VIRTUAL_HAT_SERVICE_NAME, VIRTUAL_HAT_PACKAGE_NAME } from './virtual_hat.pb';
import { VirtualHatController } from './virtual_hat.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: VIRTUAL_HAT_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: VIRTUAL_HAT_PACKAGE_NAME,
          protoPath: 'node_modules/help-grpc-proto/proto/virtual_hat.proto',
        },
      },
    ]),
  ],
  controllers: [VirtualHatController],
})
export class VirtualHatModule {}