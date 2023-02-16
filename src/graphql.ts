
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    title: string;
    price?: Nullable<number>;
}

export interface UpdateBookArgs {
    id: number;
    title: string;
    price?: Nullable<number>;
}

export interface Book {
    id: number;
    title: string;
    price?: Nullable<number>;
}

export interface IQuery {
    indexedDB(): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    bookById(id: number): Book | Promise<Book>;
}

export interface IMutation {
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
