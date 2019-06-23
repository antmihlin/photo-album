import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

import { UsersItemComponent } from './users-item.component';

describe('UsersItemComponent', () => {
  let component: UsersItemComponent;
  let fixture: ComponentFixture<UsersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersItemComponent ],
      imports: [
        MatListModule,
        MatDividerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersItemComponent);
    component = fixture.componentInstance;
    component.user = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
