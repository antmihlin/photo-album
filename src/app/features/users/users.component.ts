import { Component, OnInit, OnDestroy } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  searchVisible = false;

  users: any;

  // Subscribers
  subUsers;

  constructor(
    private jService: JsonPlaceholderService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
    this.subUsers.unsubscribe();
  }

  toggleSearch() {
    this.searchVisible = !this.searchVisible;
  }

  getUsers() {
    const endPoint = 'users';
    this.subUsers = this.jService.getAll({}, endPoint).subscribe( res => {
      this.users = res;
    }, err => {
      console.log(err);
    });
  }

}
