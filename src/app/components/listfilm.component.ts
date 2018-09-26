import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-listfilm',
  templateUrl: './listfilm.component.html',
  styleUrls: ['./listfilm.component.css']
})



export class ListfilmComponent implements OnInit {



  @Input()
  //filmResult : string[]; 
  passResult : string[];

  constructor() { }

  ngOnInit() {
  }

}
