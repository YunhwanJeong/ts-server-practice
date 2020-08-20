import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => Int)
  @Column()
  price: number;
}
