import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../Models/user.model';
import { Observable } from 'rxjs';
import { Update } from '../Models/update.model';
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  updateId:any;
  deleteId:any;

  constructor(private http:HttpClient) { 
 
  }
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>("https://localhost:7010/api/User")
  }
  AddUser(newuser:User){
    newuser.id= '00000000-0000-0000-0000-000000000000';
    console.log("user in service",newuser);

     return  this.http.post('https://localhost:7010/api/User',newuser);
  }
  updateUser(id:any,newuser:Update){
    console.log("user in service",newuser);

     return  this.http.put(`https://localhost:7010/api/User/${id}`,newuser);
  }
  updateID(id:any){
    this.updateId=id;
  }
  DeleteId(id:any){
    this.deleteId=id;
  }
  getSinlgeUser(id:any){
   return  this.http.get(`https://localhost:7010/api/User/${id}`)
  }
  deleteUser(id:any){
     return this.http.delete(`https://localhost:7010/api/User/${id}`)
  }
}
