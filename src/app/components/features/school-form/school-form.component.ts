import { Fields } from './../../../model/form-data';

import { Component,OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {

  constructor() {
    this.fields=[{
      id:0,
      school:this.school,
      sectionName:'',
      className:'',
      Grades:''
    }]
   }

  ngOnInit(): void {
  }
  //array for static data about school
  schoolList: any = ['Cairo English School', 'British international schools in Cairo', 'Saint Georges college']
  //array for certain grades
  websiteGrade:any = [1,2,3];
  //variables
  fields
  school:'';

//for get data from fields "from parent to child"  
@Output() classesFields = new EventEmitter<Fields>();

//function for done all data from input types
  submit(f){
    this.fields[0].school = this.school;
    // to send object to another component
    for(let item of this.fields){
      this.classesFields.emit(item);
    }
   
  }
  //function for add anothor row to enter data
  addClass(e){
    e.stopPropagation();
    e.preventDefault();
    this.fields[0].school = this.school;
    this.fields.push({
      id: this.fields.length + 1,
      school:this.school,
      sectionName: '',
      className: '',
      Grades: ''
    });

  }
  //function for delete row
  deleteRow(i){
    this.fields.splice(i, 1);
  }
  //function for cancel all action user
  cancelAction(f){
    f.reset();
    this.fields=[]
    this.fields.push({
      id:0,
      school:this.school,
      sectionName: '',
      className: '',
      Grades: ''
    });
  }


}
