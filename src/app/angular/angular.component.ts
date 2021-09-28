import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  
  fetchUrl = "https://dog.ceo/api/breeds/image/random";
  imgdata:any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    return this.http.get(this.fetchUrl).subscribe(data => this.imgdata = data);
  }

}
