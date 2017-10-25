import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {

  selectedServices: string;
  orchestrationSystem: string;
  orchestrationSystemOptions: string;
  public count = 0;
  services = [
    'AWS',
    'Azure',
    'GCP',
  ];
  systems = [
    'Kubernetes',
    'Mesos',
    'Docker Swarm'
  ]
  systemOptions = [
    '1 Master',
    '3 Masters',
    '5 Masters'
  ]
  onNext() {
    this.count++;
    console.log(this.selectedServices + this.orchestrationSystem + this.orchestrationSystemOptions)
  }
  
  onBack(){
    this.count--;
  }

  onSubmit(){
    this.count = 0;
    console.log(this.selectedServices + this.orchestrationSystem + this.orchestrationSystemOptions)
  }
  constructor() { }

  ngOnInit() {
  }

}
