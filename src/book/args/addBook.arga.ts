import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class AddBookArgs{
    
    @Field((type)=> String)
    title:string;

    @Field((type)=> Int ,{nullable:true})
    price:number;
}   