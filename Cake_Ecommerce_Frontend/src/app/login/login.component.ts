import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username?:string
  password?:string
  usersexists={};


  constructor(private serv:MyserviceService,private route:Router){}

  checkuser()
  {
    let obj={username:this.username,password:this.password}
    console.log(obj)

    this.serv.checkuserexists(obj).subscribe(
      res=>this.usersexists=res
           ,
      err=>console.log(err));

    if(this.usersexists===true){
      MyserviceService.login=true;
      MyserviceService.username=this.username;
         this.route.navigate(["/admin"])}
    else{
      MyserviceService.login=false;
      MyserviceService.username='';

       alert("UserName or Password not matched ! ");
       this.route.navigate(["/"])
      }

  }


}

