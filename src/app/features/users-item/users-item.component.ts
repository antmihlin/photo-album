import { Component, OnInit, Input } from '@angular/core';
import { FiltersService} from '../../services/filters.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent implements OnInit {

  @Input()user: User;

  constructor(
    private filterService: FiltersService,
  ) { }

  ngOnInit() {
  }

  selectUser(id: number): void {
    this.filterService.setUsersFilter(id);
  }

}
