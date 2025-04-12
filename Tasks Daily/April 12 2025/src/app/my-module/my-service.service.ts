import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor() {}

  getUsers() {
    return ['Alice', 'Bob', 'Charlie'];
  }
}
