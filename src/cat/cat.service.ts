import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';
import { Photo } from '../photo/photo.entity';

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private readonly cat: Repository<Cat>
      ) {}

      async findAll() {
        return await this.cat.find();
      }

      async insert() {
        return this.cat.insert({
          age: 10,
          breed: 'rtqyuwjd',
          name: 'damo',
          photos: [{
            age: 12,
            breed: 'Rajapal',
            name: 'Testdam',
          }],
        });
      }
}
