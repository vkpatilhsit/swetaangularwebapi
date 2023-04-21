import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  tabledata: boolean = false;
  constructor(public router:Router) { }
  search(): void
  {
    this.tabledata = true;
  }
  add():void
  {
    this.router.navigate(['./searchview']);
  }
}
