import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { SchoolFormComponent } from './components/features/school-form/school-form.component';
import { SchoolStudentListComponent } from './components/features/school-student-list/school-student-list.component';

@NgModule({
  declarations: [
    AppComponent,
  
    SchoolFormComponent,
    SchoolStudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
