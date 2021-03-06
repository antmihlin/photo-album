import { AlbumCreateComponent } from './../album-create/album-create.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { FiltersService } from '../../services/filters.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  selectedUserId: number;
  albums: Array<Album>;
  selectedAlbums: Array<number> = [];
  newAlbumTitle: string;
  loading = false;

  // Subscribers
  subAlbums: any;
  subSelectedUser: any;
  subAlbumCreate: any;

  constructor(
    private jService: JsonPlaceholderService,
    private filterService: FiltersService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
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
    this.subAlbumCreate.unsubscribe();
  }

  getAlbums(selectedUserId) {
    const endpoint = `albums?userId=${selectedUserId}`;
    this.loading = true;
    this.subAlbums = this.jService.getAll( {}, endpoint).subscribe(
      res => {
        this.albums = res;
        this.loading = false;
        this.filterService.setAlbumsFilter([]);
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

  openDialog(): void {
    const dialogRef = this.dialog.open(AlbumCreateComponent, {
      width: '250px',
      data: {title: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result !== 'undefined') {
        this.newAlbumTitle = result;
        this.createAlbum(result, this.selectedUserId);
      }
    });
  }

  createAlbum(title: string, userId: number) {
    const endpoint = `albums`;
    this.subAlbumCreate = this.jService.post( {title, userId}, endpoint).subscribe(
      res => {
        this.getAlbums(this.selectedUserId);
        this.openSnackBar(`Album "${title}" was created`, 'Close');
      }, err => {
          console.log(err);
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
