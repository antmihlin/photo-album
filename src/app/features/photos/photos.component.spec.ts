import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PhotosComponent } from './photos.component';
import { PhotosItemComponent } from '../photos-item/photos-item.component';
import { OrderByPipe } from '../../pipes/order-by.pipe';

import {
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhotosComponent,
        OrderByPipe,
        PhotosItemComponent
       ],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        NgxPaginationModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
