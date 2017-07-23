import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorage } from './localStorage.service';

// write info text here

@NgModule({
  imports: [CommonModule],
  providers: [LocalStorage]
})
export class AngularxLocalStorage {
  constructor(){}
}