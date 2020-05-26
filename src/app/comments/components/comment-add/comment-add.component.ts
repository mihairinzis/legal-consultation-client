import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as fromStore from '@app/core/store';
import { CoreState } from '@app/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent {

  @Input() public nodeId: string;
  addCommentForm = new FormGroup({
    text: new FormControl()
  });

  constructor(private store: Store<CoreState>) {
  }

  onSubmit(nodeId: string) {
    if (this.addCommentForm.valid) {
      this.store.dispatch(new fromStore.AddComment(nodeId, this.addCommentForm.value.text));
    }
  }

}
