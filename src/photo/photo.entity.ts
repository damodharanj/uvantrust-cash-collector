import { Column, Entity, ObjectID, ObjectIdColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cat } from '../cat/cat.entity';

@Entity()
export class Photo {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  age: number;

  @ManyToOne(type => Cat, cat => cat.photos)
  @JoinColumn()
  cat: Cat
}
