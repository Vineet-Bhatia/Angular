import { Component, effect, signal } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  imports: [LoginComponent,SignupComponent,ProfileComponent,FormsModule,NgIf,NgFor,RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  clickEvent(){
    console.log("Function callled");
    this.otherFunction()
  }

  otherFunction(){
    console.log("Other function called")
  }

  handleEvent(event:Event)
  {
    console.log("function called",event.type);
    console.log("Value",(event.target as HTMLInputElement).value);

  }

  name="";
  displayName="";
  email="";
  getName(event:Event){

    const val=(event.target as HTMLInputElement).value;
    this.name=val;
  }

  showName(){
    this.displayName=this.name;
  }

  SetName(){
    this.name="Vineet";
  }

  getEmail(val:string){
    console.log(val);
    this.email=val;
  }

  setEmail(){
    this.email="vineet11@gmail.com";
  }

  display=true;
  x=5;
  toggleDiv=true;

  hide(){
    this.display=false;
  }

  show(){
    this.display=true;
  }

  toggle(){
    this.display=!this.display;
  }
  toggles(){
    this.toggleDiv=!this.toggleDiv;
  }

  color:string='red';

  handlecolor(val:string){
    this.color=val;
  }

  changecolor(event:Event){
  this.color=(event.target as HTMLInputElement).value
  }


  user=['Vineet','Yash','Surbhi'];

students=[
  {name:"Vineet",age:24,email:"vineet11@gmail.com"},
  {name:"yash",age:24,email:"yash11@gmail.com"},
  {name:"Surbhi",age:23,email:"surnhi11@gmail.com"},
  {name:"Rajat",age:22,email:"rajat11@gmail.com"}
];



getStudentName(name:string){
  console.log(name);
}

UserName=signal('Anil');
count = signal(0);
DisplayHeading=false;

constructor() {
  effect(() => {
    if(this.count()==2){
      this.DisplayHeading=true;
    }
    else{
      this.DisplayHeading=false;
    }
});
}

increment() {
  this.count.set(this.count() + 1);
}


users=['Vineet','Yash','Surbhi','Rajat','Prabh'];

//two way binding
Name="";

DynamicName() {
  this.Name = "Vineet"; // Change name dynamically
}

//To do List
task="";
tasklist:{id:number,task:string}[]=[]

addTask(){
  this.tasklist.push({id:this.tasklist.length+1,task:this.task});
  this.task='';
  console.log(this.tasklist);
}

DeleteTask(taskId:number){
 this.tasklist= this.tasklist.filter((item)=> item.id !=taskId);
}


//Dynnamic Styling
colors="red";
fontsize:string="30";
headingsizeBig="35px";
headingsizesmall="10px"

zoom=false;   //change  this sizemwill also get change


UpdateheadingSize(){
  this.zoom=!this.zoom;
}


//Directives
shows=true; // it si appliet on ngIf


dir=["Anil","sam","Peter","Vinay"];

studentNames=[
  {name:"Vineet",age:24,email:"vineet11@gmail.com"},
  {name:"yash",age:24,email:"yash11@gmail.com"},
  {name:"Surbhi",age:23,email:"surnhi11@gmail.com"},
  {name:"Rajat",age:22,email:"rajat11@gmail.com"}
];

login=true;

}
