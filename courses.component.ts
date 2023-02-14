import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses=[
    {'name':'Diploma in Software Programming','mode':'Online/Offline','duration':'3 Months'},
    {'name':'PG Diploma in Data Science and Machine Learning','mode':'Online/Offline','duration':'5 Months'},
    {'name':'PG Diploma in Full Stack Java Development','mode':'Online/Offline','duration':'5 Months'},
    {'name':'PG Diploma in Full Stack Python Development','mode':'Online/Offline','duration':'5 Months'},
    {'name':'PG Diploma in VLSI Design','mode':'Online/Offline','duration':'5 Months'},
    {'name':'PG Diploma in Embedded And Automotive Systems','mode':'Online/Offline','duration':'5 Months'},
    {'name':'Diploma in IoT','mode':'Online/Offline','duration':'3 Months'},
    {'name':'PG Diploma in Business Analytics','mode':'Online/Offline','duration':'4 Months'},
    {'name':'Diploma in Business Communication','mode':'Online/Offline','duration':'3 Months'},
    {'name':'Diploma in Human Resources Management','mode':'Online/Offline','duration':'3 Months'},
    {'name':'PG Diploma in Product Management','mode':'Online/Offline','duration':'5 Months'},
    {'name':'PG Diploma in Digital Marketing','mode':'Online/Offline','duration':'5 Months'},
    {'name':'PG Diploma in UI/UX Design','mode':'Online/Offline','duration':'4 Months'},
  ]
}
