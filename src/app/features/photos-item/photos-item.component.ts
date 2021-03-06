import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoFullComponent } from '../photo-full/photo-full.component';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photos-item',
  templateUrl: './photos-item.component.html',
  styleUrls: ['./photos-item.component.scss']
})
export class PhotosItemComponent implements OnInit {

  @Input()photo: Photo;

  loaded = false;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openFullImg(url: string): void {
    const dialogRef = this.dialog.open(PhotoFullComponent, {
      width: '95%',
      data: {url}
    });
  }

}
