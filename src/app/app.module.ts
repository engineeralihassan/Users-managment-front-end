import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { UpdateFormComponent } from './update-form/update-form.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { NestedFormarrayComponent } from './nested-formarray/nested-formarray.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersListComponent,
    UpdateFormComponent,
    FormArrayExampleComponent,
    NestedFormarrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,ToastNoAnimation,
    ToastrModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
