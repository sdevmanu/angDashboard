import { Component } from '@angular/core';
import {ImagesData} from './Images.model';
import { Http  } from '@angular/http';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
// import {ImageDService} from './images-d.service'
// test Commit

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'Dashboard';
  data: any;
  items: string[];
  imagesData: ImagesData;
  allImages: ImagesData[];
  // image: Observable<ImagesData>;
  start = false;

  readonly ROOT_URL = 'https://5ad8d1c9dc1baa0014c60c51.mockapi.io/api/br/v1/magic/' ;
  constructor(private http: HttpClient) {
    // Load Images
   this.getPosts();
  }

getPosts() {
  const params = new HttpParams().set('id', '12');
  const imageIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // this.images=this.http.get<ImagesData>(this.ROOT_URL,{ observe: 'response' });
  // Load first 20 images
  for (let i = 1; i < imageIds.length; i++) {
    this.allImages = [];
  this.http.get<ImagesData>(this.ROOT_URL + i).subscribe(data => {
    // data is now an instance of type ItemsResponse, so you can do this:
    this.imagesData = data;
    console.log(this.imagesData);
    // Set the identifier that states if something is retrieved from API
    this.start = true;
    // set an array of retrived dimages that gets displayed at Dasboard
    this.allImages.push(this.imagesData);
  });
  }
}
}
