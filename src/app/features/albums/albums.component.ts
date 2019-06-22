import { Component, OnInit, OnDestroy } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { FiltersService} from '../../services/filters.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  selectedUserId: string;
  albums: Array<any>;
  selectedAlbums: Array<number> = [];

  // Subscribers
  subAlbums;
  subSelectedUser;

  constructor(
    private jService: JsonPlaceholderService,
    private filterService: FiltersService
  ) { }

  ngOnInit() {
    this.subSelectedUser = this.filterService.usersFilter$.subscribe(
      userId => {
        this.selectedUserId = userId;
        this.getAlbums(userId);
      }, err => {
          console.log(err);
      });
  }
  ngOnDestroy() {
    this.subAlbums.unsubscribe();
    this.subSelectedUser.unsubscribe();
  }

  getAlbums(selectedUserId) {
    const endpoint = `albums?userId=${selectedUserId}`;
    this.subAlbums = this.jService.getAll( {}, endpoint).subscribe(
      res => {
        this.albums = res;
      }, err => {
          console.log(err);
      });
  }

  onChange(event) {
    const value = event.source.value;
    if (event.checked) {
      this.selectAlbum(value);
    } else {
      this.unselectAlbum(value);
    }
  }

  selectAlbum(id) {
    const elem = this.selectedAlbums.indexOf(id);
    if ( elem === -1) {
      this.selectedAlbums.push(id);
      this.filterService.setAlbumsFilter(this.selectedAlbums);
    }
  }

  unselectAlbum(id) {
    const elem = this.selectedAlbums.indexOf(id);
    if ( elem >= 0 ) {
      this.selectedAlbums.splice(elem, 1);
      this.filterService.setAlbumsFilter(this.selectedAlbums);
    }
  }
}
