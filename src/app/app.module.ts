import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AddComponent} from "./add/add.component";
import {EditComponent} from "./edit/edit.component";
import {ListComponent} from "./list/list.component";
import {DelComponent} from "./del/del.component";
import { ValidatorComponent } from './validator/validator.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    DelComponent,
    ValidatorComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
