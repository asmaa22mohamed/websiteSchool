import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-school-student-list',
  templateUrl: './school-student-list.component.html',
  styleUrls: ['./school-student-list.component.css']
})
export class SchoolStudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // input to deliver the output from parent
  @Input() Lists = [];

}
