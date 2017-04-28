import { Component, OnInit } from '@angular/core';
import { BooksService } from "app/books/books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookType: string;
  books: string[];

  constructor(private service: BooksService) {
    this.bookType = "Java";
    this.books = this.service.getBooks();
   }

  ngOnInit() {
  }

}
