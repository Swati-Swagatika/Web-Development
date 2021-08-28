import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskformComponent } from './taskform/taskform.component';
import { TaskComponent } from './task/task.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskformComponent,
    TaskComponent,
    TaskmanagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
