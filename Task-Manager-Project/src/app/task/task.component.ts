import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() public userdata: any
  // @Input() public color: any 
  isPending:boolean = false
  message:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  check(event:any){
    if(event.target.checked == true){
      this.isPending = true;
      this.message = 'Done!';
    }
    else{
      this.isPending = false;
      this.message = 'Pending';
    }
  }

}
