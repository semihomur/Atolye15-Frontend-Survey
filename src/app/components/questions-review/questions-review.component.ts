import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFramework } from 'src/app/_models/IFramework';

@Component({
  selector: 'app-questions-review',
  templateUrl: './questions-review.component.html',
  styleUrls: ['./questions-review.component.css']
})
export class QuestionsReviewComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() selectedFramework: IFramework[];
  constructor() { }

  ngOnInit() {
  }

}
