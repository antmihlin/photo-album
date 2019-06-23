import { Component, OnInit, OnDestroy } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  searchVisible = false;
  searchTerm = '';
  loading = false;

  users: Array<any>;

  // Subscribers
  subUsers: any;

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
    this.loading = true;
    const endPoint = 'users';
    this.subUsers = this.jService.getAll({}, endPoint).subscribe( res => {
      this.users = res;
      this.loading = false;
    }, err => {
      console.log(err);
    });
  }

}
