import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "book"})
export class BookEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @IsNotEmpty()
    @IsString() 
    @Column()
    title:string;

    @IsNumber()
    @Column()
    price:number;
}