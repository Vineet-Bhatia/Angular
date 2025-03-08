import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  //template:"<h1>Profile Component</h1>",
  // styles:'h1{color:orange},
  imports:[],
  templateUrl:'./profile.Component.html',
  styleUrl:'./profile.Component.css'
})



export class ProfileComponent{

  Name:string|null="";
  constructor(private route:ActivatedRoute){}
    ngOnInit() {
      // //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      // //Add 'implements OnInit' to the class.
      // let name=this.route.snapshot.paramMap.get('name');
      // console.log(this.Name);
      this.route.queryParams.subscribe(params=>{
        this.Name=params['name'];
      })


    }

  }

