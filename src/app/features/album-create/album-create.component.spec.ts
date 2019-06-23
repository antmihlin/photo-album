import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AlbumCreateComponent } from './album-create.component';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
} from '@angular/material';

describe('AlbumCreateComponent', () => {
  let component: AlbumCreateComponent;
  let fixture: ComponentFixture<AlbumCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlbumCreateComponent
       ],
       imports: [
        FormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule
       ],
       providers: [
         { provide: MatDialogRef, useValue: {} },
         { provide: MAT_DIALOG_DATA, useValue: [] },
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
