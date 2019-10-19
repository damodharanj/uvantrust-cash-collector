import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class StoreEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  phone: string;
}
