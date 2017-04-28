import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return ['CDI', 'EJB', 'Spring', 'Reflection', 'OCA', 'OCJP', 'JSF', 'Servlets & JSP'];
  }

}
