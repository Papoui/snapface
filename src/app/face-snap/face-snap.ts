import { Component, Input } from '@angular/core';
import { TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnapM } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap',
  imports: [
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
  standalone: true
})
export class FaceSnap {

  @Input() faceSnap!: FaceSnapM;
  userSnapped!: boolean;
  constructor(private faceSnapsService : FaceSnapsService) {}

  ngOnInit(): void {
    this.userSnapped = false;
  }
  onSnap(){
    this.faceSnapsService.snapFaceById(this.faceSnap.id, this.userSnapped ? 'unsnap' : 'snap');
    this.userSnapped = !this.userSnapped;
  }
}
