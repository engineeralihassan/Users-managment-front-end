import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { FormComponent } from './form/form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';

const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component: UsersListComponent},
  {path:'add-user',component: FormComponent},
  { path: 'update/:userid', component: UpdateFormComponent },
  { path: 'reactive-forms', component: FormArrayExampleComponent },
  { path: 'nested-forms-array', component: FormArrayExampleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
