import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LoginComponent} from '../../login/login.component';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  loginDialogRef: MatDialogRef<LoginComponent>;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public openLoginDialog () {
    this.loginDialogRef = this.dialog.open(LoginComponent, {
      hasBackdrop: true
    });
  }

}
