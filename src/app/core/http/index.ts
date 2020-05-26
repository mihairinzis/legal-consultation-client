import { AuthenticationApiService } from './authentication-api.service';
import { UserApiService } from './user-api.service';
import { DocumentsApiService } from './documents-api.service';
import { CommentsApiService } from './comments-api.service';

export const httpServices: any[] = [
  AuthenticationApiService,
  UserApiService,
  DocumentsApiService,
  CommentsApiService,
];

export * from './authentication-api.service';
export * from './user-api.service';
export * from './documents-api.service';
export * from './comments-api.service';
