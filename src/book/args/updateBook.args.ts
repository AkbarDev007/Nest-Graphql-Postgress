import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateBookArgs{
    
    @Field((type)=> Int)
    id:number;

    @Field((type)=> String)
    title:string;

    @Field((type)=> Int ,{nullable:true})
    price:number;
}   