import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent implements OnInit {

  @Input()user: any;

  constructor() { }

  ngOnInit() {
  }

}
