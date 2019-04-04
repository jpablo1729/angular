import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  secret = 'Loading ...';

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getSomeData().subscribe(
      data => {
        this.secret = data.secret;
      }
    );
  }

}
