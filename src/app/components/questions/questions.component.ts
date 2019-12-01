import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SurveyService } from 'src/app/_services/survey.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { IQuestion } from 'src/app/_models/IQuestion';
import { IFramework } from 'src/app/_models/IFramework';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() selectedFramework: IFramework[];
  @Output() startAgainSurvey = new EventEmitter();
  questionsOfFrameworks: IQuestion[] = [];
  questionsForm: FormGroup;
  questionsandUserAnswers: FormArray;
  isIncludedOtherOption: boolean;
  whichQuestion = 0;
  constructor(private surveryService: SurveyService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questionsandUserAnswers = new FormArray([]);
    this.questionsOfFrameworks = this.surveryService.getQuestions(this.selectedFramework);
    this.isIncludedOtherOption = this.surveryService.isIncludedOtherOption;
    this.questionsForm = this.formBuilder.group({
      questionsAndUserAnswers: this.questionsandUserAnswers,
      otherDescription: [null, [ this.isIncludedOtherOption ? Validators.required : Validators.nullValidator,
      Validators.pattern(/^[a-zA-z-ğüşöıçİĞÜŞÖÇ. ,]+$/)]]
    });
    this.questionsOfFrameworks.forEach(element => {
      this.questionsandUserAnswers.push(this.formBuilder.group({
        question: [element.question, [Validators.required]],
        answers: ['', [Validators.required]]
      }));
    });
  }
  onSubmit() {
    console.log(this.questionsForm);
  }
  startSurveyAgain() {
    this.startAgainSurvey.emit(true);
    this.whichQuestion = 0;
    this.questionsForm.reset();
    this.questionsOfFrameworks = [];
    this.surveryService.isIncludedOtherOption = false;
  }

}
