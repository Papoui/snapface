import { Component, OnInit } from '@angular/core';
import { FaceSnapM } from '../models/face-snap';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnap
  ],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapListComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService) {}
  faceSnaps!: FaceSnapM[];

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    this.faceSnaps[1].setlocation('à la montagne');
  }
}
