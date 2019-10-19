import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class DeliveryManEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: number;

  @Column()
  phoneNumber: number;

  @Column()
  commodity: string;

  @Column()
  price: string;

  @Column()
  storeId: number;
}
