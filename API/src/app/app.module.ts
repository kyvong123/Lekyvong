import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ThunghiemComponent } from './thunghiem/thunghiem.component';
import { ManageCandidateComponent } from './manage-candidate/manage-candidate.component';
import { BsModalModule } from 'ng2-bs3-modal';
import { SubjectTestComponent } from './subject-test/subject-test.component';
import { EmxaminationComponent } from './emxamination/emxamination.component';

@NgModule({
  declarations: [
    AppComponent,

    ThunghiemComponent,
    ManageCandidateComponent,
    SubjectTestComponent,
    EmxaminationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
