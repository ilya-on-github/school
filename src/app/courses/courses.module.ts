import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [CoursesComponent, CourseComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: CoursesComponent,
      },
      {
        path: ':courseId',
        component: CourseComponent,
      },
    ]),
    SharedModule,
  ],
})
export class CoursesModule {
}
