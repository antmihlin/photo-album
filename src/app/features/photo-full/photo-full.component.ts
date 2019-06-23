import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  url: string;
}

@Component({
  selector: 'app-photo-full',
  templateUrl: './photo-full.component.html',
  styleUrls: ['./photo-full.component.scss']
})
export class PhotoFullComponent implements OnInit {

  loaded = false;

  constructor(
    public dialogRef: MatDialogRef<PhotoFullComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
