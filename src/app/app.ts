import { Component, OnInit, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapM } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnap
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  mySnap!: FaceSnapM;

  ngOnInit() {
    this.mySnap = new FaceSnapM(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
  }
}
