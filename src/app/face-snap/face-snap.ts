import { Component, Input } from '@angular/core';
import { NgStyle, NgClass, TitleCasePipe } from '@angular/common';
import { FaceSnapM } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
  standalone: true
})
export class FaceSnap {

  @Input() faceSnap!: FaceSnapM;
  userSnapped!: boolean;

  ngOnInit(): void {
    this.userSnapped = false;
  }
  onSnap(){
  this.userSnapped
    ?(this.faceSnap.snaps--, this.userSnapped=false)
    :(this.faceSnap.snaps++, this.userSnapped=true);
  }
}
