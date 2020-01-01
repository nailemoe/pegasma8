import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Storage {

  constructor () {};

  get(key: string): any {
    return localStorage.getItem(key);
  }

  set(key: string, val: any): void {
    localStorage.setItem(key, val);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}


//TODO plan to change to indexedDB