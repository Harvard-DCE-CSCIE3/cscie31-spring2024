import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgFor, PhotoComponent]
})
export class AppComponent {

  coursename = "CSCI E31"; 

  getNumberOfPhotos():number{
    return this.photoList.length;
  }

  photoList = [
    {
      _id: 1,
      title:'Champ Wheelin\' on the Beach',
      description:'this is my first photo',
      imageurl:'assets/img/champ-wheelin-on-the-beach.jpg'
    },
    {
      _id: 2,
      title:'Let Sleeping Dogs Lie',
      description:'this is my second photo',
      imageurl:'assets/img/ripley-and-tilda.jpg'
    },
    {
      _id: 3,
      title:'Beach Play',
      description:'this is my third photo',
      imageurl:'assets/img/dogs2.jpg'
    }
  ];



 
}
