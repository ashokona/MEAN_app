import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor() { }
show:boolean=false;
currentSession:boolean=true;
lastSession:boolean=false;
Revoke:boolean=true;
i=0;
  data={
    Sessions:[
      {ip:"192.168.201.243",browser:"chrome",signedin:"june 18,2016"},
      {ip:"192.168.201.244",browser:"mozilla",signedin:"june 18,2017"},
      {ip:"192.168.201.245",browser:"opera",signedin:"may 18,2012"},
      {ip:"192.168.201.246",browser:"explorer",signedin:"april 18,2014"},
      {ip:"192.168.201.247",browser:"safari",signedin:"july 18,2015"}

      ],
    SecurityHistory:[
      {ActionPerformed:"creation",by:"mgantha",performedOn:"june 18,2016"},
      {ActionPerformed:"delition",by:"mounica",performedOn:"june 18,2017"},
      {ActionPerformed:"updation",by:"phani",performedOn:"april 18,2014"},
      {ActionPerformed:"creation",by:"sri",performedOn:"july 18,2015"},
      {ActionPerformed:"delition",by:"anil",performedOn:"may 18,2012"}

      ]

  }

  collapse(){
   if(this.i==0){
     this.i=1;
   this.show=true;
   this.currentSession=false;
   this.lastSession=true;
   this.Revoke=false;
   }
   else{
    this.i=0;
   this.show=false;
   this.currentSession=true;
this.lastSession=false;
this.Revoke=true;
  }
  }
 
  onRevoke(){
  console.log("revoke method ");
  }

  ngOnInit() {
    console.log(this.data.SecurityHistory[0]);
  }

}
