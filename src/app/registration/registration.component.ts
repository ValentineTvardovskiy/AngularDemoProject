import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  public createUser(): void {
    console.log(this.user);
  }

}
