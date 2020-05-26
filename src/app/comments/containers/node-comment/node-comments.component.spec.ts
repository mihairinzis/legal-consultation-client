import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeCommentsComponent } from './node-comments.component';

describe('NodeCommentComponent', () => {
  let component: NodeCommentsComponent;
  let fixture: ComponentFixture<NodeCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
