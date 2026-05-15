import { Injectable } from '@angular/core';
import { FaceSnapM } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnapM[] = [
        new FaceSnapM(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        10
      ),
      new FaceSnapM(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
        new Date(),
        6
      ),
      new FaceSnapM(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
      )
    ];

    getFaceSnaps(): FaceSnapM[] {
        return [...this.faceSnaps];
    }
    snapFaceById(faceSnapId: string, snapType: SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!foundFaceSnap) {
        throw new Error("FaceSnap not found");
    }
    foundFaceSnap.snap(snapType);
  }
}