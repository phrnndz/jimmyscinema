import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  title: BehaviorSubject<String>;

  constructor() { 
    this.title = new BehaviorSubject('Jimmys Cartelera')
  }
}
