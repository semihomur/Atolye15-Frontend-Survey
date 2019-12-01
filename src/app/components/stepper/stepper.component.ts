import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/_services/survey.service';
import { IFramework } from 'src/app/_models/IFramework';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  selectedFramework: IFramework[] = [];
  survey: IFramework[] = [];
  firstStep = true;
  constructor(private surveyService: SurveyService) { }
  ngOnInit() {
    this.survey = this.surveyService.getSurvey();
  }
  Change(event) {
      if (event.source.selected) {
        this.selectedFramework.push(event.source.value);
      } else {
        this.selectedFramework.forEach((element, index) => {
            if (element.name === event.source.value.name) {
              this.selectedFramework.splice(index, 1);
            }
        });
      }
  }
  startSurvey() {
    this.firstStep = !this.firstStep;
    this.selectedFramework = [];
  }
}
