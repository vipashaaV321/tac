import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  signup:Array<any>=[];
  acc:{}
  constructor(private service: DataService, private route: ActivatedRoute,private rut:Router) { }

  ngOnInit(): void {
    this.service.getacctype().then(res => {
      this.acc = res;
    })
    this.myForm = new FormGroup({
   
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      acid: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      

      
    })
    
  }
  submit(){
    this.service.addsignup(this.myForm.value).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }

}
