import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private user: User;
  private isEmailValid: boolean;
  private passwordsMatch: boolean;

  constructor(private  userService: UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  public createUser(): void {
    console.log(this.user);
  }

  public verifyEmail(): void {
    this.userService.getByEmail(this.user.email).subscribe(
      resp => {
        this.isEmailValid = false;
      },
      err => {
        this.isEmailValid = true;
      }
    );
  }

  public comparePassword(): void {
    this.passwordsMatch = this.user.password === this.user.verifiedPassword;
  }

  public validateRegistrationForm(): boolean {
    return this.isEmailValid === undefined
      ? false
      : this.passwordsMatch === undefined
        ? false
        : this.isEmailValid && this.passwordsMatch;
  }
}
