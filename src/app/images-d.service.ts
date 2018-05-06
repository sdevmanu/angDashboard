import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import {ImagesData} from './Images.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesDService {
images: ImagesData;
  constructor(private http: Http) {}

  getImages() {
    return this.http.get('https://5ad8d1c9dc1baa0014c60c51.mockapi.io/api/br/v1/magic/12'); 
   }
  
}
