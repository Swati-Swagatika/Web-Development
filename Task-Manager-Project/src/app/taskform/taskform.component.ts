import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  @Output() public addtasks = new EventEmitter();
  public tname = ''
  public ttime = ''
  public tdesc = '' 
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(tname:string,ttime:string,tdesc:string){
    const task ={
      taskname:tname,
      tasktime:ttime,
      taskdesc:tdesc
    }
    this.tname='';
    this.ttime='';
    this.tdesc='';

    this.addtasks.emit(task);
    
  }
    
}

