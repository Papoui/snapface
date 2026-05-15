import { SnapType } from "./snap-type.type";

export class FaceSnapM {

  location?: string;
  id: string;

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {
    this.id = crypto.randomUUID().substring(0, 8);
  }
  
  setlocation(location: string): void {
    this.location = location;
  }
  withHashLocation(location: string): FaceSnapM {
    this.setlocation(location);
    return this;
  }

  snap(snapType: SnapType){
    snapType === 'snap'? this.snaps++ : this.snaps--;
  }
}
