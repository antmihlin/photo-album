import { UsersItemComponent } from './../users-item/users-item.component';
import { UserSearchPipe } from './../../pipes/user-search.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatProgressBarModule,
} from '@angular/material';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        UserSearchPipe,
        UsersItemComponent
       ],
      imports: [
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatProgressBarModule,
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
