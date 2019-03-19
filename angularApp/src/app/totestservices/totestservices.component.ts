import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'

@Component({
  selector: 'app-totestservices',
  templateUrl: './totestservices.component.html',
  styleUrls: ['./totestservices.component.css']
})
export class TotestservicesComponent implements OnInit {

  records: any;

  constructor(private myFirstService : RecordsService) { }

  ngOnInit() {
    if (this.myFirstService.onDelete() != null) {
        this.myFirstService.onDelete().subscribe(d => this.records = d.data);
    }
  }

}
