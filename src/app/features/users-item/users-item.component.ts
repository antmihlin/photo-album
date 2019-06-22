import { Component, OnInit, Input } from '@angular/core';
import { FiltersService} from '../../services/filters.service';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent implements OnInit {

  @Input()user: any;

  constructor(
    private filterService: FiltersService,
  ) { }

  ngOnInit() {
  }

  selectUser(id) {
    this.filterService.setUsersFilter(id);
  }

}
