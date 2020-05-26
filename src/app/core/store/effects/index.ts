import { UploadFileEffects } from './file-upload.effect';
import { UsersEffects } from './users.effect';
import { ImportUsersEffects } from './import-users.effect';
import { DocumentsEffect } from './documents.effect';
import { CommentsEffect } from './comments.effect';

export const effects: any[] = [
  UploadFileEffects,
  UsersEffects,
  DocumentsEffect,
  ImportUsersEffects,
  CommentsEffect,
];

export * from './file-upload.effect';
export * from './users.effect';
export * from './import-users.effect';
export * from './documents.effect';
export * from './comments.effect';
