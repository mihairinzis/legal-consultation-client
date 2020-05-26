import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '@app/core/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommentsService } from '../../services';
import * as commentsActions from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CommentsEffect {

  @Effect()
  loadComments$ = this.actions$.pipe(
      ofType(commentsActions.CommentsActionTypes.LoadComments),
      switchMap(
          (action: commentsActions.LoadComments) => this.commentsService.list(action.nodeId)
              .pipe(map((comments: any) => new commentsActions.LoadCommentsSuccess(action.nodeId, comments)))),
      catchError((commentsError: any) => of(new commentsActions.LoadCommentsFail(commentsError.nodeId, commentsError.response)))
  );

  @Effect()
  saveComment$ = this.actions$.pipe(
      ofType(commentsActions.CommentsActionTypes.AddComment),
      switchMap(
          (action: commentsActions.AddComment) => this.commentsService.save(action.nodeId, action.text)
              .pipe(map(comment => new commentsActions.AddCommentSuccess(action.nodeId, comment)))),
      catchError((commentsError: any) => of(new commentsActions.AddCommentFail(commentsError.nodeId, commentsError.response)))
  );


  constructor(private store$: Store<CoreState>,
              private actions$: Actions,
              private commentsService: CommentsService) {
  }
}
