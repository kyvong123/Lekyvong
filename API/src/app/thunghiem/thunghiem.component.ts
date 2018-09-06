import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-thunghiem',
  templateUrl: './thunghiem.component.html',
  styleUrls: ['./thunghiem.component.css']
})
export class ThunghiemComponent implements OnInit {
  private apiUrl = 'http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses/';  // URL to web API


  constructor() { }

  ngOnInit() {
  }

}
