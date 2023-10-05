import { Component } from '@angular/core';
import{FormGroup,FormBuilder,Validators,AbstractControl,ValidationErrors} from '@angular/forms'
import { User } from '../Models/user.model';
import { UsersServiceService } from '../services/users-service.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  registrationForm: FormGroup;
  options:string[]=["Student","Software Engineer","Teacher","Farmer"];
  genders1:string[]=['Male','Femail','Other'];
  formData:any={};
  isSubmite:boolean=false;
  disable:boolean=true;
  typePassward:boolean=true;
  passwardMatch:boolean=false;
  user:User={
    id:'123',
    name:'ali',
    email:"ali@gmail.com",
    occupation:"Teacher",
    gender:"Male",
    country:'pk',
    city:'lahore'
  };

   passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    if ( value.length>=1 && value.length < 6) {
      return { minLength: true };
    }
    if (!/[A-Z]/.test(value) && value.length>=1) {
      return { noUpperCase: true };
    }
    if (!/[@#$%^&+=]/.test(value)  && value.length>=1) {
      return { noSpecialCharacter: true };
    }
  
    return null;
  }


  constructor(private fb: FormBuilder,private http:UsersServiceService,private toastr: ToastrService,private router:Router) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,this.passwordValidator]],
      confirmPassward: ['',Validators.required],
      occupation: ['Student', Validators.required],
      gender:['',Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        country: ['', Validators.required],
        streetAddress: ['', Validators.required]
      })
    });
  }
  showSuccess() {
    this.toastr.success('Record Inserted successfully', '🎉Great');
  }
  showError(){
    this.toastr.error('An Error was occured please try again', 'Error alert', {
      timeOut: 3000,
    });
  }
  onSubmit(){
   if(this.registrationForm.valid ){
      this.isSubmite=true
      this.formData={...this.registrationForm.value};
      console.log(this.formData);
      this.user={id:'123',name:this.formData.fullName,email:this.formData.email,occupation:this.formData.occupation,gender:this.formData.gender,country:this.formData.address.country,city:this.formData.address.city}
      this.AddUser(this.user);
     this.registrationForm.reset();
    }else{
      this.showError();
    }

  }
  AddUser(newuser:User){
   this.http.AddUser(newuser).subscribe(
    (data)=>{
     this.showSuccess();
     setTimeout(()=>{
     this.router.navigate(['/users'])
     },1000)
    }
   ),(error:any)=>{
       this.showError();
   }

   
  }
  togglePassward(){
   this.typePassward=!this.typePassward;
  }
  passwordsMatch(val:any) {
    console.log(val.target.value,this.registrationForm.get('password')?.value)
    if (val.target.value !== this.registrationForm.get('password')?.value) {
      this.passwardMatch=true;
    }else{
      this.passwardMatch=false;
    }
  
    
  }
}
