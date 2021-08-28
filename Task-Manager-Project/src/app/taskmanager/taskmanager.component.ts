import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  taskmanager:{taskname:string,tasktime:string,taskdesc:string}[]=[
    // {
    //   taskname:"Doctor's Appointment",
    //   tasktime:"10:00 AM",
    //   taskdesc:"Take prescriptions and files"
    // }
  ]
  

  onSubmit(tname:string,ttime:string,tdesc:string){
      const task ={
        taskname:tname,
        tasktime:ttime,
        taskdesc:tdesc
      }
      this.taskmanager.push(task);
    }
  
  addtasks(event:any){
    this.taskmanager.push(event);
  }


}
