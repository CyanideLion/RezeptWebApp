import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from "@angular/router";

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'logout-dialog',
  templateUrl: './logout-dialog.html',
  styleUrl: './logout-dialog.component.css',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, RouterLink],
})
export class LogoutDialog {
  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(LogoutDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'logout-dialog',
  templateUrl: 'logout-dialog.html',
  styleUrl: './logout-dialog.component.css',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class LogoutDialogContent {
}
