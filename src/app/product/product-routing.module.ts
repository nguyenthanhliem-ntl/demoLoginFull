import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "../list/list.component";
import {AddComponent} from "../add/add.component";
import {EditComponent} from "../edit/edit.component";
import {DelComponent} from "../del/del.component";


const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  }, {
    path: 'create',
    component: AddComponent
  }, {
    path: 'edit/:id',
    component: EditComponent
  }, {
    path: 'delete/:id',
    component: DelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
