import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form1: FormGroup;
  constructor(private Service:DataService,private router:Router) { }

  ngOnInit() {
    this.form1 = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    
    })
  }
login(){
  this.Service.getlogin(this.form1.value).subscribe(res=>{
    if(res.data[0]!=''){
      if(res.data[0].acid==1){
        this.router.navigate(['/profile/',res.data[0].sid]);
        sessionStorage.setItem("islogin","true");
        sessionStorage.setItem('acid',res.data[0].acid);
      }
      else if(res.data[0].acid==2){
     
        this.router.navigate(['/product']);
        sessionStorage.setItem("islogin","true");
        sessionStorage.setItem('acid',res.data[0].acid);
        //this.router.navigate(['/menu/profile/',res.data[0].uid])
        console.log("id"+res.data[0].acid)
      }
      else{
        this.router.navigate(['/']);
      }
    }
    else{
      console.log('failll')
    }
  })
}
}
