import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from 'src/app/contacts';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public contactId!:string;
  public contact = new Contact('','','','','');
  public message!:string;
  public isError:boolean = false;
  public isSuccess:boolean = false

  constructor(private _cs:ContactService,private _acroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._acroute.params.subscribe(param=>{
      this.contactId = param.id
    })
    this._cs.getContactByID(this.contactId).subscribe(rs=>{
      console.log(rs);
      this.contactId = rs.contactsData._id
      this.contact.cname = rs.contactsData.contactname
      this.contact.cemail = rs.contactsData.contactemail
      this.contact.cphone = rs.contactsData.contactphone
      
    },err=>{
      console.log(err)
    })
  }

  onSubmitContact(){
    this._cs.updateContact(this.contactId,this.contact).subscribe(response=>{
      this.message = response.message;
      this.isSuccess = true;
      this.isError = false
    },err=>{
      console.log(err)
      this.message = err.error.message;
      this.isSuccess = false;
      this.isError = true
    })

  }

}
