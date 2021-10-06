import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http : HttpClient) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        console.log(params)
        this.fetchBlog(params.blogId);
      });
  }
  fetchUrl="assets/userBlog.json"
  blogData:any;

   fetchBlog(blogNum:any){

    return this.http.get<any>(this.fetchUrl).subscribe(
      data =>{
        console.log(data[blogNum-1]);
        this.blogData=data[blogNum-1];
       }
      

       );

  }

}
