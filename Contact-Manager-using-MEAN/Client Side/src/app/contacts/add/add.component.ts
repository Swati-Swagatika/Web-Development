import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contacts';
import { ContactService } from 'src/app/contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public contact = new Contact('','','','','')
  public message:string='';
  public isError:boolean = false;
  public isSuccess:boolean = false;
  public UserID = localStorage.getItem('UserID')!;
  constructor(private _contactService:ContactService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.contact.userid = this.UserID;
    this._contactService.addContact(this.contact).subscribe(res=>{
      this.message = res.message;
      this.isSuccess = true;
      this.isError = false;
    },(err)=>{
      this.message = err.error.message;
      this.isError = true;
      this.isSuccess = false;
      
    })
  }

}
