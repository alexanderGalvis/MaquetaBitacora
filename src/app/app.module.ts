import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/home/home.component';
import { NotFoundComponent } from './public/not-found/not-found.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './public/navigation/header/header.component';
import { SidenavListComponent } from './public/navigation/sidenav-list/sidenav-list.component';
import {
  MatButtonModule, MatDialogModule, MatDialogTitle,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import { LoginComponent } from './public/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
