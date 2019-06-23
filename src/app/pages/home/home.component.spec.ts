import { NgxPaginationModule } from 'ngx-pagination';
import { PhotosItemComponent } from './../../features/photos-item/photos-item.component';
import { UsersItemComponent } from './../../features/users-item/users-item.component';
import { OrderByPipe } from './../../pipes/order-by.pipe';
import { UserSearchPipe } from './../../pipes/user-search.pipe';
import { PhotosComponent } from './../../features/photos/photos.component';
import { AlbumsComponent } from './../../features/albums/albums.component';
import { UsersComponent } from './../../features/users/users.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';

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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        UsersComponent,
        PhotosComponent,
        AlbumsComponent,
        OrderByPipe,
        UserSearchPipe,
        PhotosItemComponent,
        UsersItemComponent
       ],
       imports: [
        FormsModule,
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
        MatProgressSpinnerModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
