import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photos-item',
  templateUrl: './photos-item.component.html',
  styleUrls: ['./photos-item.component.scss']
})
export class PhotosItemComponent implements OnInit {

  @Input()photo: any;

  constructor() { }

  ngOnInit() {
  }

}
