import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookType: string;
  books: string[];


  constructor() {
    this.bookType = "Java";
    this.books = ['CDI', 'EJB', 'Spring', 'Reflection', 'OCA', 'OCJP', 'JSF', 'Servlets & JSP'];
   }

  ngOnInit() {
  }

}
