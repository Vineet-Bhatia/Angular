import { Component } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private router:Router){}
//Passing the data
  // goToprofile(name:string){

  //   this.router.navigate(['profile'],{queryParams:{name}});
  // }

  users=
    [
      {id:1,name:"Vineet",age:24,email:"vineet11@gmail.com"},
      {id:2,name:"yash",age:24,email:"yash11@gmail.com"},
      {id:3,name:"Surbhi",age:23,email:"surnhi11@gmail.com"},
      {id:4,name:"Rajat",age:22,email:"rajat11@gmail.com"}
    ];


}
