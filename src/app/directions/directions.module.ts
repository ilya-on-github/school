import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectionsComponent } from './components/directions/directions.component';
import { DirectionComponent } from './components/direction/direction.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    DirectionComponent,
    DirectionsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: DirectionsComponent,
      },
      {
        path: ':directionId',
        component: DirectionComponent,
      },
    ]),
    SharedModule,
  ],
})
export class DirectionsModule {
}
