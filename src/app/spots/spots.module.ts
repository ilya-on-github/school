import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotsComponent } from './components/spots/spots.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SpotsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SpotsComponent,
      },
    ]),
    SharedModule,
  ],
})
export class SpotsModule {
}
