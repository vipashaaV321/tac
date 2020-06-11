import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Array<any>=[];
  sid=0;
  constructor(private route:ActivatedRoute,private service:DataService,private rut:Router) { }
   ngOnInit() {
    this.sid=this.route.snapshot.params.sid;
    console.log("id"+this.sid);

    this.service.getuserprofilebyid(this.sid).then(res=>{
      this.profile=res;

      console.log(res[0].sid);
      console.log(res)
    })

}
}
