import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Project } from '../domain';
import { Observable, from } from 'rxjs';
import { mergeMap, count, switchMap, map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ProjectService {

  private readonly domain = 'projects';
  private headers = new Headers({
    'Content-Type': "application/json"
  })
  constructor(private http: Http, @Inject("BASE_CONFIG") private config) {

  }
  // post
  add(project: Project): Observable<Project> {
    project.id = null;
    const uri = `${this.config.uri}/${this.domain}`
    return this.http
      .post(uri, JSON.stringify(project), { headers: this.headers })
      .map(res => res.json())
  }

  // put
  update(project: Project): Observable<Project> {
    const uri = `${this.config.uri}/${this.domain}/${project.id}`
    const toUpdata = {
      name: project.name,
      desc: project.desc,
      coverImg: project.coverImg,
    }
    return this.http
      .patch(uri, JSON.stringify(toUpdata), { headers: this.headers })
      .map(res => res.json());
  }

  // delete
  del(project: Project): Observable<Project> {
    const deltask$ = from(project.taskList ? project.taskList : []).pipe(
      mergeMap(listId =>
        this.http.delete(`${this.config.uri}/taskLists/${listId}`)
      ),
      count()
    );
    const uri = `${this.config.uri}/${this.domain}/${project.id}`;
    return deltask$.pipe(
      switchMap(p => this.http.delete(uri).pipe(map(prj => project)))
    );
  }

    // GET /projects
    get(userId: string): Observable<Project[]> {
      const uri = `${this.config.uri}/${this.domain}`;
      const params = new HttpParams().set('members_like', userId);
      return this.http.get<Project[]>(uri, {
        params: params,
        headers: this.headers
      });
    }
}
