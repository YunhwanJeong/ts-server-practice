import { Resolver, Arg, Int, Mutation, InputType, Field } from "type-graphql";
import { Book } from "../entity/Book";

@InputType()
class BookInputType {
  @Field()
  title: string;

  @Field(() => Int)
  price: number;
}

@Resolver(Book)
export class BookResolver {
  @Mutation(() => Book)
  async addBook(@Arg("options") options: BookInputType) {
    return await Book.create(options).save();
  }
}
