import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksService } from "app/books/books.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BooksComponent],
  exports: [BooksComponent],
  providers:[BooksService]
})
export class BooksModule { }
