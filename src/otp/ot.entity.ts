import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class OTP {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  otp: number;

  @Column()
  time: Date;

  @Column()
  accpeted: boolean;

  @Column()
  orderID: number;

  @Column()
  dmanID: number;

  @Column()
  storeID: number;

  @Column()
  expired: boolean;
}
