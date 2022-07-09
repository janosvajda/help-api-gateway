import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VirtualHatModule } from './virtual_hat/virtual_hat.module';

@Module({
  imports: [AuthModule, VirtualHatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
