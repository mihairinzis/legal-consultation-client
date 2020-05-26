import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { IComment, Page } from '../models';

@Injectable()
export class CommentsApiService {
  constructor(private http: HttpClient) {
  }

  public list(nodeId: string): Observable<Page<IComment>> {
    return this.http.get<Page<IComment>>(this.url(nodeId));
  }

  public save(nodeId: string, text: string): Observable<IComment> {
    return this.http.post<IComment>(this.url(nodeId), {text});
  }

  private url(nodeId: string) {
    return `${environment.api_url}/documentnodes/${nodeId}/comments`;
  }
}
