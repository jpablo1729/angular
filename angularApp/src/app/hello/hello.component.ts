import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myVariable = "Pablo";
  myDisabledValue = false;
  bitwiseOR = 2 | 5; // 010 | 101 -> 0 | 1 = 1 then 1 | 0 = 1 then 0 | 1 = 1 -> 111 
  myMirrowVariable = "app";
  records: any;
  i = 0;
  pablos = Math.random();

  constructor(private myFirstService : RecordsService) { 
    //setInterval(() => {
    //  this.myVariable = Math.random().toString();
    //  this.myDisabledValue = Math.random() > 0.5;//if(Math.random() > 0.5) this.myDisabledValue = true;
    //}, 500);
  }

  callMyFunction() {
    this.myDisabledValue = !this.myDisabledValue;//Togelet!!!
    console.log("Boton!!!!");
  }

  //updateValue(e) {
    //Shows the events pro letter!
  //  console.log(e);
  //  this.myMirrowVariable = e.target.value;
  //  console.log(this.myMirrowVariable);
  //}

  /*records = [
    {
      name: 'A',
      online: true
    },
    {
      name: 'B',
      online: false
    },
    {
      name: 'C',
      online: true
    },
    {
      name: 'D',
      online: false
    },
    {
      name: 'E',
      online: true
    }
  ]*/

  doSomeHeavyTask() {
      this.i = this.i + 1,
      console.log('called this', this.i );
  }

  ngOnInit() {
    //if (this.myFirstService.getData() != null) {
    //  this.myFirstService.getData().subscribe(d => this.records = d.data);
    //}
    //setInterval(() => {
    //  this.pablos = Math.random()
    //}, 50);
  }
  
}
