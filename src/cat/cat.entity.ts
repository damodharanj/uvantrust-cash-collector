import { Column, Entity, ObjectID, ObjectIdColumn, OneToMany, JoinColumn } from 'typeorm';
import { Photo } from '../photo/photo.entity';

@Entity()
export class Cat {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  age: number;

  @OneToMany(type => Photo, photo => photo.cat)
  @JoinColumn()
  photos: Photo[];
}
