import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { DocumentsService } from './documents.service';
import { CommentsService } from './comments.service';

export const services: any[] = [
  AuthenticationService,
  UserService,
  DocumentsService,
  CommentsService,
];

export * from './authentication.service';
export * from './user.service';
export * from './documents.service';
export * from './comments.service';
