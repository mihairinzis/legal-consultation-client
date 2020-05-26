import { Component, Input } from '@angular/core';
import { Comment } from '../../../core/models';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {

  @Input() public nodeId: string;
  @Input() public comments: Comment[];

  constructor() {
  }
}
