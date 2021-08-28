import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ContactService {
 //private _url = "http://localhost:3001/api/contact"

  constructor(private _http: HttpClient) { }

  listAllContacts(){
    return this._http.get<{message:string,contactsData:any}>(environment.baseUrlContact)
  }

  listAllPostsByUser(){
    return this._http.get<{message:string,contactsData:any}>(environment.baseUrlContact+'/'+localStorage.getItem('UserID'),{
      headers:new HttpHeaders().set('x-auth-token', localStorage.getItem('token') ! ),
    })
  }

  getContactByID(id:string){
    return this._http.get<{message:string,contactsData:any}>(environment.baseUrlContact+'/getbyid/'+id,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
    })
  }

  addContact(newcontact:any){
    return this._http.post<{message:string,contactsData:any}>(environment.baseUrlContact+"/save",newcontact
    ,{ headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
    })
  }

  updateContact(id:string,contactsData:any){
    return this._http.put<{message:string}>(`${environment.baseUrlContact}/update/${id}`, contactsData,{
      headers:new HttpHeaders().set('x-auth-token', localStorage.getItem('token') ! ),
    })
  }

  deleteContact(id:string){
    return this._http.delete<{message:string}>(`${environment.baseUrlContact}/delete/${id}`,{
      headers:new HttpHeaders().set('x-auth-token', localStorage.getItem('token') ! ),
    })
  }

}
