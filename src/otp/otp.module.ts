import { Module } from '@nestjs/common';
import { OtpController, OtprejectController, OtpacceptController, OrderCon, StoreController, DeliveryManController } from './otp/otp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OTP } from './ot.entity';
import { OrderEntity } from './order.entity';
import { StoreEntity } from './store.entity';
import { DeliveryManEntity } from './deliveryman.entity';

@Module({
  // tslint:disable-next-line:max-line-length
  imports: [TypeOrmModule.forFeature([OTP]), TypeOrmModule.forFeature([OrderEntity]), TypeOrmModule.forFeature([StoreEntity]), TypeOrmModule.forFeature([DeliveryManEntity])],
  controllers: [OtpController, OtprejectController, OtpacceptController, OrderCon, StoreController, DeliveryManController],
})
export class OtpModule {}
