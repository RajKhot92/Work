import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Subject, Observable } from 'rxjs';
import { Student } from '../student';

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentservice:StudentService) { }

  studentsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  students: Observable<Student[]>;  
  student : Student=new Student();  
  deleteMessage=false;  
  studentlist:any;  
  isupdated = false;
  
  ngOnInit() {
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.studentservice.getStudentList().subscribe(data =>{  
    this.students =data;  
    this.dtTrigger.next();  
    })
  }

}
