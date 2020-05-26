import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '@app/core/store';
import { CoreState } from '@app/core/store';
import { Observable } from 'rxjs';
import { Comment } from '@app/core';

@Component({
  selector: 'app-node-comments',
  templateUrl: './node-comments.component.html',
  styleUrls: ['./node-comments.component.scss']
})
export class NodeCommentsComponent implements OnInit {

  @Input() public nodeId: string;
  public comments$: Observable<Comment[]>;

  constructor(private store: Store<CoreState>) {
  }

  ngOnInit() {
    this.comments$ = this.store.pipe(select(fromStore.getCommentsEntitiesByNodeId(this.nodeId)));
  }

}
