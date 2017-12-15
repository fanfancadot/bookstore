import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Injectable()
export class ActionService {

  constructor(public cart: CartService,
              private router: Router) { }

  buyBook(book: Book){
    this.cart.add(book);
    this.router.navigate(['/cart/content']);
  }
}
