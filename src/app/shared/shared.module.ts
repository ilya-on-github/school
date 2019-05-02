import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NavDrawerLayoutComponent } from './components/nav-drawer-layout/nav-drawer-layout.component';

@NgModule({
  declarations: [
    NavDrawerLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [
    NavDrawerLayoutComponent,
  ],
})
export class SharedModule {
}
