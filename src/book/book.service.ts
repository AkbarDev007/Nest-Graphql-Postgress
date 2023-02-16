import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddBookArgs } from './args/addBook.arga';
import { UpdateBookArgs } from './args/updateBook.args';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
    constructor(@InjectRepository(BookEntity) private readonly bookRepository:Repository<BookEntity>){}

    async findAllBook():Promise<BookEntity[]>{
        return await this.bookRepository.find()
    }

    async findBookById(id:number):Promise<BookEntity> {
        return await this.bookRepository.findOne({where: {id: id}})
    }

    async deleteBookById(id:number):Promise<string> {
         await this.bookRepository.delete(id)
         return "Book deleted"
    }

    async addBook(addArgs:AddBookArgs):Promise<string> {
        let book:BookEntity = new BookEntity();
        book.title = addArgs.title;;
        book.price = addArgs.price;
        await this.bookRepository.save(book)
        return "Book added"
   }

    async createBook(updateBookArgs:UpdateBookArgs):Promise<string> {
         let book:BookEntity = await this.bookRepository.findOne({where:{id: updateBookArgs.id}})

         if(!book){    
         throw new NotFoundException({
         status: HttpStatus.NOT_FOUND,
         error: 'Resource not found',
        });
        }

        book.title = updateBookArgs.title;;
        book.price = updateBookArgs.price;
        await this.bookRepository.save(book)
        return "Book Updated"
    }

}
