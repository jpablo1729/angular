import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myVariable = "Pablo";
  myDisabledValue = false;
  bitwiseOR = 2 | 5; // 010 | 101 -> 0 | 1 = 1 then 1 | 0 = 1 then 0 | 1 = 1 -> 111 

  constructor() { 
    //setInterval(() => {
    //  this.myVariable = Math.random().toString();
    //  this.myDisabledValue = Math.random() > 0.5;//if(Math.random() > 0.5) this.myDisabledValue = true;
    //}, 500);
  }

  callMyFunction() {
    this.myDisabledValue = !this.myDisabledValue;//Togelet!!!
    console.log("Boton!!!!");
  }

  ngOnInit() {
  }

}
