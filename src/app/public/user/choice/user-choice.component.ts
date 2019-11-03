import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-choice',
  templateUrl: './user-choice.component.html',
  styles: []
})
export class UserChoiceComponent implements OnInit {

  public users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => this.users = users
    );
  }

}
