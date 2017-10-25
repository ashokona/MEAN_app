import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-catlog',
  templateUrl: './service-catlog.component.html',
  styleUrls: ['./service-catlog.component.css']
})
export class ServiceCatlogComponent implements OnInit {

service:Services;  
  data: any[];
  features : any[] ;
  plans: any[];
  newPlan : any[]
  newServices:newService;
user:any[];
  constructor(private router:Router) { 
      
this.user = [{
  planName:"",
  features:[{
    featureName:"", featureProp:""
  },{
    featureName:"", featureProp:""
  }]
}]

      this.newPlan = [{
        planName: "planName0",
        features:[
          {featureName:"featureName00", featureProp:"featureProp00"},
          {featureName:"featureName01", featureProp:"featureProp01"}
          
        ]
       }
       
      ]
    
      this.service={  
          serviceName:"", 
          plan:this.plans,  
          feature:this.features
      }
     
    }

     ngOnInit() {
       
     } 
     addfeature(plans){
console.log(plans);
(this.newPlan).forEach((element,index) =>{
  if(element.planName == plans.planName){
    console.log("hai");

    var i = element.features.length;
    var k = {featureName:"featureName"+index+i, featureProp:"featureProp"+index+i}
      var s= {featureName:"", featureProp:""}
    this.user[index].features.push(s);
    element.features.push(k);
  }
})
     
     }

 removefeature(plans){
console.log(plans);
(this.newPlan).forEach((element,index) =>{
  if(element.planName == plans.planName){
    console.log("hai");
    var i = element.features.length-1;
  console.log( this.newPlan[index].features) 
this.newPlan[index].features.splice(i,1);
this.user[index].features.splice(i,1);
   
  }
})
     
    
     }

 addplan(){
var len = this.newPlan.length;
      var k = {
        planName: "planName"+len,
        features:[
          {featureName:"featureName"+len+"0", featureProp:"featureProp"+len+"0"},
          {featureName:"featureName"+len+"1", featureProp:"featureProp"+len+"1"}
          
        ]
      }
      var s ={
  planName:"",
  features:[{
    featureName:"", featureProp:""
  },{
    featureName:"", featureProp:""
  }]
}
      
  
      this.newPlan.push(k);
          this.user.push(s);
      
     }

    clickme(da){  
        this.service.plan= da;
        console.log(da); 
    }


}
interface Services{ 
    serviceName: String,
    plan:any[],
    feature:any[]
  }
interface newService{
  serviceName:string,
  plans:[{
    planName:string,
    features:[{featureName:string,featureProperty:string}],
  }]
  
  //plans:any[]
}
interface Plan{
planName:String;
features:[{
featureName:String, featureProp:String
}]
}