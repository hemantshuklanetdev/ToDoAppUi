import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddToDo } from './home/add-to-do/add-to-do';
import { ViewToDO } from './home/view-to-do/view-to-do';
import { UpdateToDO } from './home/update-to-do/update-to-do';
import { TopBar } from './menu/top-bar/top-bar';
import { Footbar } from './menu/footbar/footbar';
import { ErrorComponent } from './Error/error-component/error-component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Add } from './reminder/add/add';
import { View } from './reminder/view/view';
import { Update } from './reminder/update/update';

@NgModule({
  declarations: [
    App,
    AddToDo,
    ViewToDO,
    UpdateToDO,
    TopBar,
    Footbar,
    ErrorComponent,
    Add,
    View,
    Update,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterOutlet,HttpClientModule,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
