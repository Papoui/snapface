import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list';
import { LandingPageComponent } from './components/landing-page-component/landing-page-component';

export const routes: Routes = [
    {path : '', component : LandingPageComponent},
    {path : 'facesnaps', component : FaceSnapListComponent}
];
