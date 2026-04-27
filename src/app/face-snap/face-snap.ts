import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
  standalone: true
})
export class FaceSnap {
  title!: string;
  description!: string;
  createdAt!: string;
  snaps!: number;
  imageUrl!: String;
  userSnapped!: boolean;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    const date = new Date();
    this.createdAt = date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes();
    this.snaps = 5;
    this.userSnapped = false;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";

  }
  onSnap(){
  this.userSnapped
    ?(this.snaps--, this.userSnapped=false)
    :(this.snaps++, this.userSnapped=true);
  }
}
