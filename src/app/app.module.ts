import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

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

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './features/users/users.component';
import { UsersItemComponent } from './features/users-item/users-item.component';
import { AlbumsComponent } from './features/albums/albums.component';
import { AlbumCreateComponent } from './features/album-create/album-create.component';
import { PhotosComponent } from './features/photos/photos.component';
import { PhotosItemComponent } from './features/photos-item/photos-item.component';
import { HomeComponent } from './pages/home/home.component';
import { UserSearchPipe } from './pipes/user-search.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { PhotoFullComponent } from './features/photo-full/photo-full.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersItemComponent,
    AlbumsComponent,
    AlbumCreateComponent,
    PhotosComponent,
    PhotosItemComponent,
    HomeComponent,
    UserSearchPipe,
    OrderByPipe,
    PhotoFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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

    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  entryComponents: [AlbumCreateComponent, PhotoFullComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
