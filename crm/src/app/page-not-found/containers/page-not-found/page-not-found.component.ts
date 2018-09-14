import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  posts: any[];
  obs$: Observable<any>;
  comments$: Observable<any>;
  final$: Observable<[any, any]>;
  postsHeaders = ['name'];
  commentsHeaders = ['name'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe( (data: any[]) =>
      this.posts = data


    );
    this.obs$  = this.http.get('https://jsonplaceholder.typicode.com/posts');
    this.comments$ = this.http.get('https://jsonplaceholder.typicode.com/comments');

    this.final$ = forkJoin(this.obs$, this.comments$);

    this.final$.subscribe((data) => console.log(data));
  }

}
