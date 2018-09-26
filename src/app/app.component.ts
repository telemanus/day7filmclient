import { Component, EventEmitter, Output, Input } from '@angular/core';


export interface filmList {
  film_id: number;
  title: string;
  rating: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day7filmclient';
  filmResult:string[];

  myFilmList: filmList[] = [
    { film_id: 1, title: "Star Wars", rating: "PG13" },
    { film_id: 2, title: "The Empire Strikes Back", rating: "PG13" }
  ];

  @Input()
  film: any;

  
  @Output()
  //passResult = new EventEmitter();
  

 
  propagateList(film: any) {
    console.log (">>> Films Found: ", film);     

    this.filmResult=Object.values(film);

    console.log(">> this.filmResult<< ", this.filmResult);

  //  return this.filmResult;
    }

}
