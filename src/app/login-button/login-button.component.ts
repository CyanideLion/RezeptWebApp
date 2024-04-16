import {Component} from '@angular/core';
import {GoogleApiService} from "../google-api.service";
import {UserInfo} from "angular-oauth2-oidc";
import {NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {LogoutDialog} from "../logout-dialog/logout-dialog.component";


@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.css'
})
export class LoginButtonComponent {
  userInfo?: UserInfo


  constructor(private readonly google: GoogleApiService, public dialog: MatDialog) {
    google.userProfileSubject.subscribe(info => {
      this.userInfo = info
    })
  }


  login(): void {
    this.google.signIn()
  }

  isLoggedIn(): boolean {
    return this.google.isLoggedIn()
  }

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.google.signOut();
      }
    });
  }

}




