import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  animations:[
    trigger('fade',[
    
      transition('void=>*',[
        style({backgroundColor:'black', opacity:0}),
        animate(5000)
      ])
    ])
  ]
})
export class AngularComponent implements OnInit {
  
  // fetchUrl = "https://dog.ceo/api/breeds/image/random";
  fetchUrl = "assets/userdata.json";
  items= Array();
  name = 'Angular';
  page = 1;
  pageSize =5;
  

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData(){
    console.log(this.fetchUrl)
    return this.http.get<any>(this.fetchUrl).subscribe(
      data =>{
        console.log(data);
        for(let i = 0; i <data.length; i++){
          console.log("i : "+ data[i].firstname);
          this.items.push(data[i]);
       }
        // this.items = data
        console.log("item : "+ this.items[0].lastname);
        console.log("length : "+this.items.length);

      } );
    
    
  }

}
