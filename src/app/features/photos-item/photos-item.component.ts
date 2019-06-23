import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoFullComponent } from '../photo-full/photo-full.component';

@Component({
  selector: 'app-photos-item',
  templateUrl: './photos-item.component.html',
  styleUrls: ['./photos-item.component.scss']
})
export class PhotosItemComponent implements OnInit {

  @Input()photo: any;

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
