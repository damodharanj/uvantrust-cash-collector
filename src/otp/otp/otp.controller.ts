import { Controller, Post, Delete, Body, Get } from '@nestjs/common';

import { Column, Entity, ObjectID, ObjectIdColumn, OneToMany, JoinColumn, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OTP } from '../ot.entity';
import { OrderEntity } from '../order.entity';
import { StoreEntity } from '../store.entity';
import { DeliveryManEntity } from '../deliveryman.entity';

// tslint:disable-next-line:max-classes-per-file
@Controller('d_otp')
export class OtpController {

    constructor(
        @InjectRepository(OTP)
        private readonly otp: Repository<OTP>,
    ) {}

    @Post()
    async generate() {
        const val = Math.trunc(Math.random() * 10000);
        let x = await this.otp.insert({
            id: val,
            otp: val,
            time: new Date(),
            accpeted: false,
            expired: false,
        });
        setTimeout(async () => {
            const x = await this.otp.findOne({
                otp: val,
            });
            if (!x.accpeted) {
                x.expired = true;
                this.otp.update({
                    otp: val,
                }, x);
            }
        }, 11000);
        return val;
    }

    @Get()
    async getAll() {
        return this.otp.find();
    }
}

// tslint:disable-next-line:max-classes-per-file
@Controller('reject_otp')
export class OtprejectController {

    constructor(
        @InjectRepository(OTP)
        private readonly otp: Repository<OTP>,
    ) {}

    @Post()
    reject(@Body() id) {
        this.otp.update(id, {
        });
    }
}

// tslint:disable-next-line:max-classes-per-file
@Controller('accept_otp')
export class OtpacceptController {

    constructor(
        @InjectRepository(OTP)
        private readonly otp: Repository<OTP>,
    ) {}

    @Post()
    async accpet(@Body() id) {
        console.log(id);
        let o = await this.otp.findOne({
            // tslint:disable-next-line:radix
            otp: parseInt(id.id),
        });
        console.log(o);
        o.accpeted = true;
        console.log(o);
        let x = await this.otp.update({
            // tslint:disable-next-line:radix
            otp: parseInt(id.id)
        }, o);
        return {success: true};
    }
}


// tslint:disable-next-line:max-classes-per-file
abstract class Common {
    abstract otp?;
    async getAll() {
        return this.otp.find();
    }

    async insert(@Body() obj) {
        return this.otp.insert(obj);
    }
}



// tslint:disable-next-line:max-classes-per-file
@Controller('getorder')
export class OrderCon { // @ts-nocheck
    constructor(
        @InjectRepository(OrderEntity)
        private readonly otp: Repository<OrderEntity>,
    ) {
    }

    @Post('getorder/all')
    async getAll() {
        return this.otp.find();
    }

    @Post()
    async insert(@Body() obj) {
        return this.otp.insert(obj);
    }
}

// tslint:disable-next-line:max-classes-per-file
@Controller('store')
export class StoreController {

    constructor(
        @InjectRepository(StoreEntity)
        private readonly otp: Repository<StoreEntity>,
    ) {}

    @Post('store/all')
    async getAll() {
        return this.otp.find();
    }

    @Post()
    async insert(@Body() obj) {
        return this.otp.insert(obj);
    }
}

// tslint:disable-next-line:max-classes-per-file
@Controller('deliveryman')
export class DeliveryManController {

    constructor(
        @InjectRepository(DeliveryManEntity)
        private readonly otp: Repository<DeliveryManEntity>,
    ) {}

    @Post('deliveryman/all')
    async getAll() {
        return this.otp.find();
    }

    @Post()
    async insert(@Body() obj) {
        return this.otp.insert(obj);
    }
}
