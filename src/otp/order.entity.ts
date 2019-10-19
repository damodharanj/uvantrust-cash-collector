import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class OrderEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  otp: number;

  @Column()
  commodity: string;

  @Column()
  price: string;

  @Column()
  storeId: number;
}
