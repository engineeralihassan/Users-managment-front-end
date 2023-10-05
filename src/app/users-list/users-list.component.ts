import { Component } from '@angular/core';
import { User } from '../Models/user.model';
import { UsersServiceService } from '../services/users-service.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
users:User[]=[];
constructor(private service:UsersServiceService,private toastr:ToastrService,private loc:Location){

}
ngOnInit(){
this.service.getAllUsers().subscribe({
  next: (value)=> {
    this.users=value;
    console.log("The users are",this.users);
  },
})
}
updateRecord(id:any){
  console.log("id setted",id);
this.service.updateID(id);

}
deleteRecord(id:any){
  this.service.DeleteId(id);
  this.clickMethod(this.service.deleteId);

}
clickMethod(id: any) {
  if(confirm("Are you sure to delete record")) {
    this.service.deleteUser(id).subscribe(
      (data)=>{
    this.showSuccess("Record deleted");
    
    window.location.reload();
    })
  }
}
showSuccess(message:any) {
  this.toastr.success(`${message} successfully`, '🎉Great');
}
showError(){
  this.toastr.error('An Error was occured please try again', 'Error alert', {
    timeOut: 3000,
  });
}
}
