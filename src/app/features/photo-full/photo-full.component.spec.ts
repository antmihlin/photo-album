import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFullComponent } from './photo-full.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
 


import {
  MatListModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatSelectModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

describe('PhotoFullComponent', () => {
  let component: PhotoFullComponent;
  let fixture: ComponentFixture<PhotoFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhotoFullComponent,
       ],
      imports: [
        MatListModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatSelectModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
