import { Injectable } from '@angular/core';
import survey from '../../assets/survey.json';
import { IFramework } from '../_models/IFramework.js';
import { IQuestion } from '../_models/IQuestion.js';
@Injectable()
export class SurveyService {
 surveyList: IFramework[] = survey;
 isIncludedOtherOption: boolean;
constructor() { }
    getSurvey() {
        return this.surveyList;
    }
    getQuestions(framework: IFramework[]) {
        // tslint:disable-next-line:prefer-const
        let questions: IQuestion[] = [];
        framework.forEach(element => {
            if (this.surveyList.includes(element)) {
                element.questions ? element.questions.forEach(question => { questions.push(question); }) :
                this.isIncludedOtherOption = true;
            }
        });
        return questions;
        // return all questions which is belengs to framwork that user is interested in
    }
}
