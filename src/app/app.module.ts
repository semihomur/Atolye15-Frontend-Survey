import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TitleComponent } from './components/title/title.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SurveyService } from './_services/survey.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsReviewComponent } from './components/questions-review/questions-review.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    StepperComponent,
    QuestionsComponent,
    QuestionsReviewComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [QuestionsComponent],
  providers: [
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
