import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class SakilafilmService {

  constructor(private http: HttpClient) { }

  getFilm(offset = "0", limit = "50", title) : Promise<any> {
    //console.log(filmTitle);
    const qs = new HttpParams()
      .set('offset' , offset)
      .set('limit' , limit)
      .set('title', title);
    return (
      this.http.get('http://localhost:3000/films',{params:qs})
        .pipe(take(1)).toPromise()
    );

  }
}
