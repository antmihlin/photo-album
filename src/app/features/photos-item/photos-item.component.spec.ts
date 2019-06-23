import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosItemComponent } from './photos-item.component';

import {
  MatCardModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

describe('PhotosItemComponent', () => {
  let component: PhotosItemComponent;
  let fixture: ComponentFixture<PhotosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosItemComponent ],
      imports: [
        MatProgressSpinnerModule,
        MatCardModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosItemComponent);
    component = fixture.componentInstance;
    component.photo = {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
