import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment, IComment, Page } from '../models';
import { map } from 'rxjs/operators';
import { CommentsApiService } from '@app/core/http/comments-api.service';

@Injectable()
export class CommentService {

  constructor(private commentsApiService: CommentsApiService) {
  }

  public list(nodeId: string): Observable<Page<Comment>> {
    return this.commentsApiService.list(nodeId).pipe(map(value => this.mapPage(value)));
  }

  public save(nodeId: string, commentText: string): Observable<IComment> {
    return this.commentsApiService.save(nodeId, commentText);
  }

  private mapPage(userPage: Page<IComment>): Page<Comment> {
    const result = new Page<Comment>(userPage);
    result.content = userPage.content.map(this.fromResponse);
    return result;
  }

  private fromResponse(comment: IComment): Comment {
    return new Comment(comment);
  }
}
