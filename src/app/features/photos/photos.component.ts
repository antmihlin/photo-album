import { Component, OnInit, OnDestroy } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { FiltersService} from '../../services/filters.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {

  selectedAlbums: Array<any>;
  photos: Array<any> = [];
  orderByTerm = '';
  p: number = 1;

  // Subscribers
  subSelectedAlbums: any;
  subPhotos: any;

  constructor(
    private jService: JsonPlaceholderService,
    private filterService: FiltersService
  ) { }

  ngOnInit() {
    this.subSelectedAlbums = this.filterService.albumsFilter$.subscribe(
      res => {
        this.selectedAlbums = res;
        this.getPhotos(this.selectedAlbums);
      }, err => {
          console.log(err);
      });
  }

  ngOnDestroy() {
    this.subSelectedAlbums.unsubscribe();
    this.subPhotos.unsubscribe();
  }

  getPhotos(selectedAlbums: Array<number>) {
    if (selectedAlbums.length > 0) {
      const params = this.formatParams(selectedAlbums);
      const endpoint = `photos?${params}`;

      this.subPhotos = this.jService.getAll( {}, endpoint).subscribe(
        res => {
          this.photos = res;
        }, err => {
            console.log(err);
      });
    } else {
      this.photos = [];
    }
  }

  formatParams(array: Array<number>) {
    let params = '';

    for (const p of array) {
      params = `${params}&albumId=${p}`;
    }

    return params;
  }

}
