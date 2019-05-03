import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/directions',
    pathMatch: 'full',
  },
  {
    path: 'directions',
    loadChildren: './directions/directions.module#DirectionsModule',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'profiles',
    loadChildren: './profiles/profiles.module#ProfilesModule',
  },
  {
    path: 'school',
    loadChildren: './school/school.module#SchoolModule',
  },
  {
    path: 'spots',
    loadChildren: './spots/spots.module#SpotsModule',
  },
  {
    path: 'support',
    loadChildren: './support/support.module#SupportModule',
  },
  {
    path: 'team',
    loadChildren: './team/team.module#TeamModule',
  },
  {
    path: 'timetable',
    loadChildren: './timetable/timetable.module#TimetableModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
