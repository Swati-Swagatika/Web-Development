import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public contactsData:any[] = []
  constructor(private _cs:ContactService, private _router:Router) { }

  ngOnInit(): void {
    this._cs.listAllPostsByUser().subscribe(response => {
      this.contactsData = response.contactsData
    },(err) =>{
      console.log(err)
    })
  }

  onAdd(){
      this._router.navigate(['/contacts/add'])
  }
    
  deleteContact(contactId: any) {
    const contacts = this.contactsData;
    this._cs.deleteContact(contactId).subscribe(_res=>{
      for(let i = 0; i < contacts.length; i++){
          if (contacts[i]._id == contactId)
            contacts.splice(i, 1);
        }
      })
  }

}


