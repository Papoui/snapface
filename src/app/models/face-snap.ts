export class FaceSnapM {

  location?: string;

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {}
  
  setlocation(location: string): void {
    this.location = location;
  }
}
