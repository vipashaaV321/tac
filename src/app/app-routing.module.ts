import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DeviceComponent } from './device/device.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [{path:"",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"device",component:DeviceComponent},
{path:"product",component:ProductComponent},
{path:"contact",component:ContactComponent},
{path:"profile",component:ProfileComponent},
{path:"profile/:sid",component:ProfileComponent},
{path:"about",component:AboutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
