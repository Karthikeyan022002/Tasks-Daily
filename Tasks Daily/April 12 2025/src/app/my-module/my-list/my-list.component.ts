import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent {
  users: string[] = [];
  constructor(private myService: MyServiceService) {}

  ngOnInit() {
    this.users = this.myService.getUsers();
  }
}
