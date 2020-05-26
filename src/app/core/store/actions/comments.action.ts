import { Action } from '@ngrx/store';
import { Comment, Page } from '../../models';

export enum CommentsActionTypes {
  LoadComments = '[Comments] Load Comments',
  LoadCommentsSuccess = '[Comments] Load Comments Success',
  LoadCommentsFail = '[Comments] Load Comments Fail',
  AddComment = '[Comments] Add comment',
  AddCommentSuccess = '[Comments] Add comment success',
  AddCommentFail = '[Comments] Add comment fail',
}

export class LoadComments implements Action {
  readonly type = CommentsActionTypes.LoadComments;

  constructor(public nodeId: string) {
  }
}

export class LoadCommentsSuccess implements Action {
  readonly type = CommentsActionTypes.LoadCommentsSuccess;

  constructor(public nodeId: string, public commentsPage: Page<Comment>) {
  }
}

export class LoadCommentsFail implements Action {
  readonly type = CommentsActionTypes.LoadCommentsFail;

  constructor(public nodeId: string, public error: any) {
  }
}

export class AddComment implements Action {
  readonly type = CommentsActionTypes.AddComment;

  constructor(public nodeId: string, public text: string) {
  }
}

export class AddCommentSuccess implements Action {
  readonly type = CommentsActionTypes.AddCommentSuccess;

  constructor(public nodeId: string, public comment: Comment) {
  }
}

export class AddCommentFail implements Action {
  readonly type = CommentsActionTypes.AddCommentFail;

  constructor(public nodeId: string, public error: any) {
  }
}

export type CommentsAction =
    | LoadComments
    | LoadCommentsSuccess
    | LoadCommentsFail
    | AddComment
    | AddCommentSuccess
    | AddCommentFail;
