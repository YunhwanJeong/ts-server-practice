import {
  Resolver,
  Arg,
  Int,
  Mutation,
  InputType,
  Field,
  Query,
} from "type-graphql";
import { Book } from "../entity/Book";

@InputType()
class BookCreateInput {
  @Field()
  title: string;

  @Field(() => Int)
  price: number;
}

@InputType()
class BookUpdateInput {
  @Field({ nullable: true })
  title?: string;

  @Field(() => Int, { nullable: true })
  price?: number;
}

@Resolver(Book)
export class BookResolver {
  @Mutation(() => Book)
  async createBook(@Arg("options") options: BookCreateInput) {
    return await Book.create(options).save();
  }
  @Mutation(() => Boolean)
  async updateBook(
    @Arg("id", () => Int) id: number,
    @Arg("data") data: BookUpdateInput
  ) {
    await Book.update(id, data);
    return true;
  }
  @Mutation(() => Boolean)
  async deleteBook(@Arg("id") id: number) {
    await Book.delete(id);
    return true;
  }

  @Query(() => [Book])
  async getBooks() {
    return await Book.find();
  }
}
