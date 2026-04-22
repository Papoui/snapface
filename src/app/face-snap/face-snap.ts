import { Component } from '@angular/core';

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

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    const date = new Date();
    this.createdAt = date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes();
    this.snaps = 5;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";

  }
  onAddSnap(){
    this.snaps++;
  }
}
