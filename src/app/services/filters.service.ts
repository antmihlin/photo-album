import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private usersFilterSource = new Subject<any>();
  private albumsFilterSource = new Subject<any>();

  usersFilter$ = this.usersFilterSource.asObservable();
  albumsFilter$ = this.albumsFilterSource.asObservable();

  constructor() { }

  setUsersFilter(users: any) {
    this.usersFilterSource.next(users);
  }

  setAlbumsFilter(albums: any) {
    this.albumsFilterSource.next(albums);
  }

}
