import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {LoginComponent} from '../../login/login.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  loginDialogRef: MatDialogRef<LoginComponent>;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public openLoginDialog () {
    this.sidenavClose.emit();
    this.loginDialogRef = this.dialog.open(LoginComponent, {
      hasBackdrop: true
    });
  }

}
