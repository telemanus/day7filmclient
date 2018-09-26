import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SakilafilmService} from '../services/sakilafilm.service';

export interface filmDetail {
  film_id: number;
  title: string;
  rating: string;
}

@Component({
  selector: 'app-findfilm',
  templateUrl: './findfilm.component.html',
  styleUrls: ['./findfilm.component.css']
})
export class FindfilmComponent implements OnInit {

  film={};

  @Output()
  // albumAdded = new EventEmitter<string>();
  filmList = new EventEmitter();

  constructor(private sakilafilmsvc: SakilafilmService) { }

  ngOnInit() {

  }

  searchFilm(form: NgForm) {
    const filmTitle = "%"+form.value.title+"%";

    this.sakilafilmsvc.getFilm("0","50",filmTitle)
    .then((results)=>{
      this.film = results;
    })

    console.log(">>>>>", filmTitle);
    
    this.filmList.emit(this.film);
      
    console.log("*Loggin this  ", this.film);
  }
}
