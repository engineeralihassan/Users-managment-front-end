import { Component } from '@angular/core';
import{FormGroup,FormBuilder,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import { User } from '../Models/user.model';
import { UsersServiceService } from '../services/users-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  updateForm: FormGroup;
  options:string[]=["Student","Software Engineer","Teacher","Farmer"];
  genders1:string[]=['Male','Femail','Other'];
  formData:any={};
  user:User={
    id:'',
    name:'ali',
    email:"ali@gmail.com",
    occupation:"Teacher",
    gender:"Male",
    country:'pk',
    city:'lahore'
  };
  constructor(private fb:FormBuilder,private http:UsersServiceService,private toastr: ToastrService,private router:Router){
  this.updateForm=this.fb.group({
    name:['',],
    email:['',],
    occupation:['',],
    gender:['',],
    country:['',],
    city:['',]

  })
  }
  ngOnInit(){
    this.getSingleUser(this.http.updateId);
  }
  showSuccess(message:any) {
    this.toastr.success(`${message} successfully`, '🎉Great');
    setTimeout(()=>{
      this.router.navigate(['/users'])
    },1000)
   
    
  }
  showError(){
    this.toastr.error('An Error was occured please try again', 'Error alert', {
      timeOut: 3000,
    });
  }
  onSubmit(){
   if(this.updateForm.valid ){
    console.log(this.updateForm.value);
      this.formData={...this.updateForm.value};
      console.log(this.formData);
      this.user={id:'',name:this.formData.name,email:this.formData.email,occupation:this.formData.occupation,gender:this.formData.gender,country:this.formData.country,city:this.formData.city}
      this.updateUser(this.user);
    }else{
      this.showError();
    }

  }
  updateUser(newuser:User){
    console.log("id getted",this.http.updateId);
   this.http.updateUser(this.http.updateId,newuser).subscribe(
    (data)=>{
     this.showSuccess("Record Updated");
    }
   ),()=>{
       this.showError();
   }
   
  }
  getSingleUser(id:any){
    this.http.getSinlgeUser(id).subscribe(
      (data:any)=>{
        this.updateForm.patchValue(data);
     console.log("hello",data);
      }
     ),(error:any)=>{
         this.showError();
     }
  }
}
